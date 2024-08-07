import { PublicKey } from "@solana/web3.js";
import {
  JsonMetadata,
  MPL_TOKEN_METADATA_PROGRAM_ID,
  deserializeMetadata
} from "@metaplex-foundation/mpl-token-metadata";
import { RpcAccount } from "@metaplex-foundation/umi";
import { Provider } from "@coral-xyz/anchor";
import {
  Mint,
  TOKEN_2022_PROGRAM_ID,
  getMint,
  getTokenMetadata
} from "@solana/spl-token";
import {
  TokenMetadataResponse,
  TokenMetadataSource,
  TokenProps
} from "@/types";
import { token } from "@metaplex-foundation/js";

const metaDataCache = new Map<string, TokenMetadataResponse>();

/**
 * Starts with the jup.ag strict list to find token. jup.ag maintains a list of quality tokens
 * if that fails, use metaplex with RPC call and fetch metadata json
 * if THAT fails, take MINT address and truncate by 5 characters and that's the symbol (no image)
 */
export async function enrichTokenMetadata(
  tokenAddress: PublicKey,
  rpcProvider: Provider
): Promise<
  TokenProps & {
    isFallback?: boolean;
    source: TokenMetadataSource;
  }
> {
  try {
    // try a cache hit first
    const tokenMetadata = metaDataCache.get(tokenAddress.toBase58());
    if (tokenMetadata) {
      return tokenMetadata;
    }

    // get the mint
    const mint = await getMint(rpcProvider.connection, tokenAddress);

    // second check jup list
    const tokenPropsOnJup = await getTokenFromJupStrictList(tokenAddress);
    if (tokenPropsOnJup) {
      const res = { ...tokenPropsOnJup, source: "jup-list" as const };
      metaDataCache.set(tokenAddress.toBase58(), res);
      return res;
    }

    // next, try metaplex
    const tokenPropsFromMetaplex = await getMetaplexMetadataForToken(
      tokenAddress,
      rpcProvider,
      mint
    );
    if (tokenPropsFromMetaplex) {
      const res = { ...tokenPropsFromMetaplex, source: "metaplex" as const };
      metaDataCache.set(tokenAddress.toBase58(), res);
      return res;
    }

    // next, try token token 2022
    const tokenProps = await getMetadataFromToken2022(
      rpcProvider,
      tokenAddress,
      mint
    );
    if (tokenProps) {
      const res = { ...tokenProps, source: "token2022" as const };
      metaDataCache.set(tokenAddress.toBase58(), res);
      return res;
    }

    // finally just return truncated address for symbol and decimals from SPL

    const res = {
      symbol: tokenAddress.toString().slice(0, 5).toUpperCase(),
      publicKey: tokenAddress.toString(),
      decimals: mint?.decimals ?? 6,
      isFallback: true,
      name: tokenAddress.toString().slice(0, 5).toUpperCase(),
      url: null,
      source: "fallback" as const
    };
    metaDataCache.set(tokenAddress.toBase58(), res);
    return res;
  } catch (e) {
    console.error(
      `error fetching tokenMetadata for mint [${tokenAddress.toString()}]`,
      e
    );
    return {
      symbol: tokenAddress.toString().slice(0, 5).toUpperCase(),
      publicKey: tokenAddress.toString(),
      decimals: 6,
      isFallback: true,
      url: null,
      name: tokenAddress.toString().slice(0, 5).toUpperCase(),
      source: "fallback"
    };
  }
}

type Token = {
  address: string;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
};

async function getTokenFromJupStrictList(
  address: PublicKey
): Promise<TokenProps | null> {
  try {
    const tokens = await fetchJupTokenListFromGithub();
    // First, the token with the given address in github file
    let matchingToken = tokens.find(
      (token) => token.publicKey === address.toString()
    );

    if (matchingToken) {
      return matchingToken;
    }

    const tokenList = await fetchJupTokenListFromJup();
    // Find the token with the given address
    const matchingJupToken = tokenList.find(
      (token) => token.address === address.toString()
    );

    return matchingJupToken
      ? {
          decimals: matchingJupToken?.decimals ?? 6,
          name: matchingJupToken?.name ?? null,
          publicKey: matchingJupToken?.address ?? null,
          symbol: matchingJupToken?.symbol ?? "",
          url: matchingJupToken?.logoURI ?? null
        }
      : null;
  } catch (error) {
    console.error("Error fetching token list:", error);
    return null;
  }
}

const metaplexTokenCache = new Map<string, JsonMetadata>();
async function getMetaplexMetadataForToken(
  tokenAddress: PublicKey,
  rpcProvider: Provider,
  mint: Mint
): Promise<TokenProps | null> {
  try {
    const cachedMetaplexMetadata = metaplexTokenCache.get(
      tokenAddress.toBase58()
    );
    const jsonMetadata = cachedMetaplexMetadata
      ? cachedMetaplexMetadata
      : await fetchJsonMetadataFromMetaplex(tokenAddress, rpcProvider);

    if (!cachedMetaplexMetadata && jsonMetadata) {
      metaplexTokenCache.set(tokenAddress.toBase58(), jsonMetadata);
    }

    return !!jsonMetadata
      ? {
          symbol: jsonMetadata.symbol ?? "",
          publicKey: tokenAddress.toString(),
          url: jsonMetadata.image ?? null,
          decimals: mint.decimals ?? 6,
          name: jsonMetadata.name ?? null
        }
      : null;
  } catch (e) {
    console.error("could not find token metadata from metaplex", e);
    return null;
  }
}

async function fetchJsonMetadataFromMetaplex(
  tokenAddress: PublicKey,
  rpcProvider: Provider
): Promise<JsonMetadata | null> {
  const mplTokenProgramID = new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID);
  const tokenMetaDataAddress = PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata", "utf8"),
      mplTokenProgramID.toBuffer(),
      tokenAddress.toBuffer()
    ],
    mplTokenProgramID
  )[0];

  const tokenMetaDataAccount = await rpcProvider.connection.getAccountInfo(
    tokenMetaDataAddress
  );

  if (tokenMetaDataAccount) {
    const decodedMetadata = deserializeMetadata(
      tokenMetaDataAccount as unknown as RpcAccount
    );
    const uriRes = await fetch(decodedMetadata.uri);
    return (await uriRes.json()) as JsonMetadata;
  }
  return null;
}

let jupGithubListCache: null | string[][] = null;
async function fetchJupTokenListFromGithub(): Promise<TokenProps[]> {
  try {
    const url =
      "https://pub-bd38b8db5046423081fe3923f7d53200.r2.dev/validated-tokens.json";
    const data: string[][] = jupGithubListCache
      ? jupGithubListCache
      : await fetch(url).then((r) => r.json());

    // cache response
    if (!jupGithubListCache) {
      jupGithubListCache = data;
    }

    const tokens = data.map((token) => {
      return {
        name: token[0],
        symbol: token[1],
        publicKey: token[2],
        decimals: parseInt(token[3]),
        url: token[4]
      };
    });
    return tokens;
  } catch (error) {
    console.error("Error fetching or decoding CSV:", error);
    return [];
  }
}
let jupListCache: null | Token[] = null;
async function fetchJupTokenListFromJup(): Promise<Token[]> {
  try {
    // try from API url next
    const data = jupListCache
      ? jupListCache
      : ((await fetch("https://token.jup.ag/strict").then((r) =>
          r.json()
        )) as Token[]);

    // cache response
    if (!jupListCache) {
      jupListCache = data;
    }

    return data;
  } catch (error) {
    console.error("Error fetching or decoding CSV:", error);
    return [];
  }
}

const token2022Cache = new Map<string, TokenProps>();
async function getMetadataFromToken2022(
  rpcProvider: Provider,
  tokenAddress: PublicKey,
  mint: Mint
): Promise<TokenProps | null> {
  try {
    const cachedTokenProps = token2022Cache.get(tokenAddress.toBase58());
    const data = cachedTokenProps
      ? cachedTokenProps
      : await fetchJsonMetadataFromToken2022(tokenAddress, rpcProvider, mint);
    if (!cachedTokenProps && data) {
      token2022Cache.set(tokenAddress.toBase58(), data);
    }
    return data;
  } catch (e) {
    // this has created very noisy errors anytime the token metadata isn't in token 2022.
    // maybe the SDK needs like a debug flag or something so we can dynamically enable/disable
    // verbose logging
    // console.error(
    //   "error fetching from token 2022 for address:",
    //   tokenAddress.toString()
    // );
  } finally {
    return null;
  }
}

async function fetchJsonMetadataFromToken2022(
  tokenAddress: PublicKey,
  rpcProvider: Provider,
  mint: Mint
): Promise<TokenProps | null> {
  const token2022Metadata = await getTokenMetadata(
    rpcProvider.connection,
    tokenAddress,
    undefined,
    TOKEN_2022_PROGRAM_ID
  );

  if (token2022Metadata) {
    const token2022UriRes = await fetch(token2022Metadata.uri);
    const token2022UriJson: Partial<JsonMetadata> =
      await token2022UriRes.json();
    return {
      symbol: token2022Metadata.symbol,
      publicKey: tokenAddress.toString(),
      url: token2022UriJson.image ?? null,
      decimals: mint.decimals,
      name: token2022UriJson.name ?? null
    };
  }
  return null;
}
