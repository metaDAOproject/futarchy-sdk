import { AccountWithKey } from "../types";

import { IdlAccounts } from "@coral-xyz/anchor";
import { ConditionalVault } from "../idl/conditional_vault";
import { Transaction, Signer, PublicKey } from "@solana/web3.js";

export type VaultAccount = IdlAccounts<ConditionalVault>["conditionalVault"];
export type VaultAccountWithKey = AccountWithKey<VaultAccount>;
export interface InitializedVault {
  tx?: Transaction;
  signers: Signer[];
  vault: PublicKey;
  finalizeMint: PublicKey;
  revertMint: PublicKey;
}
