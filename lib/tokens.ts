import { PublicKey } from "@solana/web3.js";
import { TokenProps } from "./types";
import {
  JsonMetadata,
  MPL_TOKEN_METADATA_PROGRAM_ID,
  deserializeMetadata,
} from "@metaplex-foundation/mpl-token-metadata";
import { RpcAccount } from "@metaplex-foundation/umi";
import { Provider } from "@coral-xyz/anchor";
import { USDCAddress, USDCMetadata } from "./constants";
/**
 * Starts with the jup.ag strict list to find token. jup.ag maintains a list of quality tokens
 * if that fails, use metaplex with RPC call and fetch metadata json
 * if THAT fails, take MINT address and truncate by 5 characters and that's the symbol (no image)
 */
export async function enrichTokenMetadata(
  tokenAddress: PublicKey,
  rpcProvider: Provider
): Promise<TokenProps> {
  // first, is it USDC?
  if (tokenAddress.toString() === USDCAddress) {
    return USDCMetadata;
  }

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

  // finally just return truncated address for symbol
  return {
    symbol: tokenAddress.toString().slice(0, 5).toUpperCase(),
    publicKey: tokenAddress.toString(),
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
