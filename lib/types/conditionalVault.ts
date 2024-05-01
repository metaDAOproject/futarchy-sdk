import { IdlAccounts } from "@coral-xyz/anchor";
import { Transaction, Signer, PublicKey } from "@solana/web3.js";
import {
  AccountWithKey,
  ConditionalVaultProgram,
  FutarchyProtocol,
} from "@/types";

export type VaultAccount =
  IdlAccounts<ConditionalVaultProgram>["conditionalVault"];
export type VaultAccountWithKey = AccountWithKey<VaultAccount>;

export type VaultAccountWithProtocol = Pick<
  VaultAccount & {
    protocol: FutarchyProtocol;
  },
  | "protocol"
  | "conditionalOnFinalizeTokenMint"
  | "conditionalOnRevertTokenMint"
  | "settlementAuthority"
  | "underlyingTokenAccount"
  | "underlyingTokenMint"
>;

export interface InitializedVault {
  tx?: Transaction;
  signers: Signer[];
  vault: PublicKey;
  finalizeMint: PublicKey;
  revertMint: PublicKey;
}
