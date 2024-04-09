import { Program } from "@coral-xyz/anchor";
import { AutocratProgram, DaoAccount, ProgramVersion } from "../../types";
import { ProposalWithVaults } from "../../types/proposals";
import { FutarchyProposalsClient } from "../client";
import { ConditionalVault } from "../../idl/conditional_vault";
import { VaultAccount } from "../../types/conditionalVault";

export class FutarchyIndexerProposalsClient implements FutarchyProposalsClient {
  private autocratProgram: Program<AutocratProgram>;
  private vaultProgram: Program<ConditionalVault>;
  constructor(
    autocratProgram: Program<AutocratProgram>,
    vaultProgram: Program<ConditionalVault>
  ) {
    this.autocratProgram = autocratProgram;
    this.vaultProgram = vaultProgram;
  }
  async fetchProposals(dao: DaoAccount): Promise<ProposalWithVaults[]> {
    const allProposals = (
      await this.autocratProgram.account.proposal.all()
    ).map((prop) => ({
      title: `Proposal ${prop.account.number}`,
      description: "",
      ...prop,
    }));
    const allVaults = await this.vaultProgram.account.conditionalVault.all();
    const vaultsByAddress: Record<string, VaultAccount> = allVaults.reduce(
      (prev, curr) => {
        prev[curr.publicKey.toString()] = curr.account;
        return prev;
      },
      {} as Record<string, VaultAccount>
    );
    const proposalsWithVaults: ProposalWithVaults[] = allProposals.map((p) => {
      const baseVaultAccount = vaultsByAddress[p.account.baseVault.toString()];
      const quoteVaultAccount =
        vaultsByAddress[p.account.quoteVault.toString()];
      return { ...p, baseVaultAccount, quoteVaultAccount };
    });

    return proposalsWithVaults.filter((p) => {
      const { baseVaultAccount } = p;
      return (
        baseVaultAccount.settlementAuthority.toString() ===
        dao.treasury.toString()
      );
    });
  }
}
