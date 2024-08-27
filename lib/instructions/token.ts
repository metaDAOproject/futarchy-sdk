import { enrichTokenMetadata } from "@/tokens";
import { TokenProps } from "@/types";
import { AnchorProvider } from "@coral-xyz/anchor";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import {
  Account,
  Mint,
  TOKEN_PROGRAM_ID,
  getAccount,
  getMint as splGetMint
} from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";

const getResultOrUndefined = <T>(result: PromiseSettledResult<T>) =>
  result.status === "fulfilled" ? result.value : undefined;

export const getMint = async ({
  provider,
  mint,
  programId = TOKEN_PROGRAM_ID,
  includeMetadata = true
}: {
  provider: AnchorProvider;
  mint: PublicKey;
  programId?: PublicKey;
  includeMetadata?: boolean;
}): Promise<{
  mint: Mint | undefined;
  tokenProps?: TokenProps | null;
}> => {
  const pendingPromises: [
    Promise<Mint>,
    Promise<TokenProps | null> | undefined
  ] = [splGetMint(provider.connection, mint, undefined, programId), undefined];
  if (includeMetadata) {
    pendingPromises[1] = enrichTokenMetadata(mint, provider);
  }

  const results = await Promise.allSettled(pendingPromises.filter(Boolean));
  const mintResult = results[0] as PromiseSettledResult<Mint>;
  const tokenPropsResult = results[1] as
    | PromiseSettledResult<TokenProps | null>
    | undefined;

  return {
    mint: getResultOrUndefined(mintResult),
    tokenProps: tokenPropsResult
      ? getResultOrUndefined(tokenPropsResult)
      : undefined
  };
};

export const getMintForAta = async ({
  provider,
  ata,
  programId = TOKEN_PROGRAM_ID,
  includeMetadata = true
}: {
  provider: AnchorProvider;
  ata: PublicKey;
  programId?: PublicKey;
  includeMetadata?: boolean;
}): Promise<{
  mint: Mint | null;
  ata: Account;
  tokenProps?: TokenProps | null;
}> => {
  const account = await getAccount(
    provider.connection,
    ata,
    undefined,
    programId
  );

  const { mint, tokenProps } = await getMint({
    provider,
    mint: account.mint,
    programId,
    includeMetadata
  });

  return {
    mint: mint ?? null,
    ata: account,
    tokenProps
  };
};
