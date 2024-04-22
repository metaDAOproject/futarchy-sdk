import { PublicKey } from "@solana/web3.js";
import {
  JsonMetadata,
  MPL_TOKEN_METADATA_PROGRAM_ID,
  deserializeMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { RpcAccount } from "@metaplex-foundation/umi";
import { Provider } from "@coral-xyz/anchor";
import {
  Mint,
  TOKEN_2022_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getMint,
  getTokenMetadata,
} from "@solana/spl-token";
import { TokenProps } from "@/types";

/**
 * Starts with the jup.ag strict list to find token. jup.ag maintains a list of quality tokens
 * if that fails, use metaplex with RPC call and fetch metadata json
 * if THAT fails, take MINT address and truncate by 5 characters and that's the symbol (no image)
 */
export async function enrichTokenMetadata(
  tokenAddress: PublicKey,
  rpcProvider: Provider
): Promise<TokenProps & { isFallback?: boolean }> {
  // get the mint
  const mint = await getMint(rpcProvider.connection, tokenAddress);

  // second check jup list
  const tokenOnJup = await getTokenFromJupStrictList(tokenAddress);
  if (tokenOnJup) {
    return {
      symbol: tokenOnJup.symbol,
      publicKey: tokenAddress.toString(),
      url: tokenOnJup.logoURI,
      decimals: tokenOnJup.decimals,
    };
  }

  // next, try metaplex
  const jsonMetadata = await getMetaplexMetadataForToken(
    tokenAddress,
    rpcProvider
  );
  if (jsonMetadata && jsonMetadata.symbol) {
    return {
      symbol: jsonMetadata.symbol,
      publicKey: tokenAddress.toString(),
      url: jsonMetadata.image,
      decimals: jsonMetadata.seller_fee_basis_points,
    };
  }

  // next, try token keg and token 2022
  const tokenProps = await getMetadataFromTokenPrograms(
    rpcProvider,
    tokenAddress,
    mint
  );
  if (tokenProps) {
    return tokenProps;
  }

  // finally just return truncated address for symbol and decimals from SPL
  return {
    symbol: tokenAddress.toString().slice(0, 5).toUpperCase(),
    publicKey: tokenAddress.toString(),
    decimals: mint?.decimals ?? 6,
    isFallback: true,
  };
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
): Promise<Token | null> {
  try {
    const tokens = await fetchJupTokenListFromGithub();
    // First, the token with the given address in github file
    let matchingToken = tokens.find(
      (token) => token.address === address.toString()
    );

    if (matchingToken) {
      return matchingToken;
    }

    // try from API url next
    const response = await fetch("https://token.jup.ag/strict");
    const tokenList: Token[] = await response.json();

    // Find the token with the given address
    matchingToken = tokenList.find(
      (token) => token.address === address.toString()
    );

    return matchingToken || null;
  } catch (error) {
    console.error("Error fetching token list:", error);
    return null;
  }
}

async function getMetaplexMetadataForToken(
  tokenAddress: PublicKey,
  rpcProvider: Provider
): Promise<JsonMetadata | null> {
  try {
    const mplTokenProgramID = new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID);
    const tokenMetaDataAddress = PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata", "utf8"),
        mplTokenProgramID.toBuffer(),
        tokenAddress.toBuffer(),
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
  } catch (e) {
    console.error("could not find token metadata from metaplex", e);
    return null;
  }
}

async function fetchJupTokenListFromGithub(): Promise<Token[]> {
  try {
    const url =
      "https://api.github.com/repos/jup-ag/token-list/contents/validated-tokens.csv";
    const response = await fetch(url);
    const data = await response.json();

    // Check if the content is base64 encoded
    if (data.encoding !== "base64") {
      throw new Error("Content is not base64 encoded.");
    }

    // Decode content from Base64
    const csvContent = Buffer.from(data.content, "base64").toString();

    const lines = csvContent.split("\n");
    const tokens: Token[] = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",");
      if (values.length !== headers.length) continue; // Skip malformed rows
      const token: Token = {
        name: values[0],
        symbol: values[1],
        address: values[2],
        decimals: parseInt(values[3]),
        logoURI: values[4],
      };
      tokens.push(token);
    }

    return tokens;
  } catch (error) {
    console.error("Error fetching or decoding CSV:", error);
    return [];
  }
}

async function getMetadataFromTokenPrograms(
  rpcProvider: Provider,
  tokenAddress: PublicKey,
  mint: Mint
): Promise<TokenProps | undefined> {
  try {
    //try getting metadata from token keg
    const tokenKegMetadata = await getTokenMetadata(
      rpcProvider.connection,
      tokenAddress,
      undefined,
      TOKEN_PROGRAM_ID
    );
    if (tokenKegMetadata) {
      const tokenKegUriMetadataRes = await fetch(tokenKegMetadata.uri);
      const tokenKegUriMetadataJson: Partial<JsonMetadata> =
        await tokenKegUriMetadataRes.json();

      return {
        symbol: tokenKegMetadata.symbol,
        publicKey: tokenAddress.toString(),
        url: tokenKegUriMetadataJson.image,
        decimals: mint.decimals,
      };
    }
  } catch (e) {
    try {
      //next, try getting metadata from token 2022
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
          url: token2022UriJson.image,
          decimals: mint.decimals,
        };
      }
    } catch (e) {
      console.log(e);
    }
  }
}
