import { PublicKey } from "@solana/web3.js";
import { TokenProps } from "./types";
import {
  JsonMetadata,
  MPL_TOKEN_METADATA_PROGRAM_ID,
  deserializeMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { RpcAccount } from "@metaplex-foundation/umi";
/**
 * enrichTokenMetadata
 * Start with jup.ag strict list to find token JUP maintains a list of quality tokens
 * if that fails, use metaplex call and RPC
 * dear god if THAT fails, take MINT address and truncate by 5 characters and that's the symbol (no image - need fallback option)
 *
 */
export async function enrichTokenMetadata(
  tokenAddress: PublicKey
): Promise<TokenProps> {
  // first check strict list
  const tokenOnJup = await getTokenFromJupStrictList(tokenAddress);
  if (tokenOnJup) {
    return {
      symbol: tokenOnJup.symbol,
      publicKey: tokenAddress.toString(),
      url: tokenOnJup.logoURI,
    };
  }

  // then do metaplex
  const jsonMetadata = await getMetaplexMetadataForToken(tokenAddress);
  if (jsonMetadata && jsonMetadata.symbol) {
    return {
      symbol: jsonMetadata.symbol,
      publicKey: tokenAddress.toString(),
      url: jsonMetadata.image,
    };
  }

  // finally just return truncated version
  return {
    symbol: tokenAddress.toString().slice(0, 5),
    publicKey: tokenAddress.toString(),
  };
}

type Token = {
  address: string;
  chainId: number;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
  tags: string[];
  extensions: {
    coingeckoId: string;
  };
};

async function getTokenFromJupStrictList(
  address: PublicKey
): Promise<Token | null> {
  try {
    const response = await fetch("https://token.jup.ag/strict");
    const tokenList: Token[] = await response.json();

    // Find the token with the given address
    const matchingToken = tokenList.find(
      (token) => token.address === address.toString()
    );

    return matchingToken || null;
  } catch (error) {
    console.error("Error fetching token list:", error);
    return null;
  }
}

async function getMetaplexMetadataForToken(
  tokenAddress: PublicKey
): Promise<JsonMetadata | null> {
  const mplTokenProgramID = new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID);
  const tokenMetaDataAddress = PublicKey.findProgramAddressSync(
    [
      Buffer.from("metadata", "utf8"),
      mplTokenProgramID.toBuffer(),
      tokenAddress.toBuffer(),
    ],
    mplTokenProgramID
  )[0];

  const tokenMetaDataAccount = await this.rpcProvider.connection.getAccountInfo(
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
