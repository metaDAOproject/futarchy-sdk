import { Program } from "@coral-xyz/anchor";
import { AutocratProgram, DaoAccount, ProgramVersion } from "../../types";
import { ProposalWithVaults } from "../../types/proposals";
import { FutarchyProposalsClient } from "../client";
import { ConditionalVault } from "../../idl/conditional_vault";
import { VaultAccount } from "../../types/conditionalVault";
import { PublicKey } from "@solana/web3.js";

export class FutarchyRPCProposalsClient implements FutarchyProposalsClient {
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
  async finalizeProposal(dao: PublicKey, proposal: PublicKey, daoTreasury: PublicKey): Promise<any> {
    const storedProposal = await this.autocratProgram.account.proposal.fetch(proposal);
    const expirySlot = storedProposal.slotEnqueued.toNumber() + 1_080_000; // TODO: This may be different
    const current_slot = 0;
    if (expirySlot < current_slot){
      throw new Error('Unable to process request, the time period has not passed');
    }

    const accounts = storedProposal.instruction.accounts
    const program = storedProposal.instruction.programId

    try {
      accounts[2].isSigner = false
    } catch (e) {
      console.error('Error:', e)
    }

    const _program = {
      pubkey: program,
      isSigner: false,
      isWritable: false,
    }

    accounts.push(_program)

    console.log(accounts)

    let tx = await this.autocratProgram.methods
      .finalizeProposal()
      .accounts({
        proposal,
        openbookTwapPassMarket: storedProposal.openbookTwapPassMarket,
        openbookTwapFailMarket: storedProposal.openbookTwapFailMarket,
        dao,
        baseVault: storedProposal.baseVault,
        quoteVault: storedProposal.quoteVault,
        vaultProgram: this.vaultProgram.programId,
        daoTreasury,
      })
      .remainingAccounts(accounts)
      .instruction()

      return tx
  }
}
