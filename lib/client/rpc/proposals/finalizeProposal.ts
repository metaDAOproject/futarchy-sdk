import { FinalizeProposal, FutarchyProposalsClient } from "@/client";
import {
  AUTOCRAT_VERSIONS,
  autocratVersionToConditionalVaultMap
} from "@/constants";
import { Proposal } from "@/types";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@metaplex-foundation/js";
import {
  AutocratV0 as AutocratV0_2,
  IDL as AutocratV0_2_IDL
} from "@/idl/autocrat_v0.2";
import { ConditionalVault } from "@/idl/conditional_vault_v0.2";
import { TransactionSender } from "@/transactions";
import {
  AutocratClient,
  getAmmAddr,
  getAmmLpMintAddr,
  getDaoTreasuryAddr,
  getVaultAddr,
  getVaultFinalizeMintAddr,
  getVaultRevertMintAddr
} from "@metadaoproject/futarchy";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";

export class FinalizeProposalClient implements FinalizeProposal {
  private proposalsClient: FutarchyProposalsClient;
  private rpcProvider: AnchorProvider;
  private transactionSender: TransactionSender | undefined;
  private autocratClient: AutocratClient;

  constructor(
    proposalsClient: FutarchyProposalsClient,
    rpcProvider: AnchorProvider,
    autocratClient: AutocratClient,
    transactionSender: TransactionSender | undefined
  ) {
    this.proposalsClient = proposalsClient;
    this.autocratClient = autocratClient;
    this.rpcProvider = rpcProvider;
    this.transactionSender = transactionSender;
  }

  private async finalizeProposalv02(proposal: Proposal) {
    const autocratProgramId = AUTOCRAT_VERSIONS.find(
      (a) => a.label == "V0.2"
    )?.programId;
    if (!autocratProgramId) return;
    const autocrat = new Program<AutocratV0_2>(
      AutocratV0_2_IDL,
      autocratProgramId,
      this.rpcProvider
    );

    // @ts-ignore
    const proposalAccount = await autocrat.account.proposal.fetch(
      proposal.publicKey
    );

    //@ts-ignore
    const dao = await autocrat.account.dao.fetch(proposal.dao.publicKey);

    const daoTreasury = dao.treasury;

    const vault = autocratVersionToConditionalVaultMap["V0.2"];
    const vaultProgram = new Program<ConditionalVault>(
      vault.idl as ConditionalVault,
      vault.programId,
      this.rpcProvider
    );

    // @ts-ignore
    const storedProposal = await autocrat.account.proposal.fetch(
      proposal.publicKey
    );
    const expirySlot = storedProposal.slotEnqueued.toNumber() + 1_080_000; // TODO: This may be different
    const current_slot = 0;
    if (expirySlot < current_slot) {
      throw new Error(
        "Unable to process request, the time period has not passed"
      );
    }

    const accounts = storedProposal.instruction.accounts;
    const program = storedProposal.instruction.programId;

    try {
      accounts[2].isSigner = false;
    } catch (e) {
      console.error("Error:", e);
    }

    const _program = {
      pubkey: program,
      isSigner: false,
      isWritable: false
    };

    accounts.push(_program);

    let tx = await autocrat.methods
      .finalizeProposal()
      .accounts({
        proposal: proposal.publicKey,
        openbookTwapPassMarket: storedProposal.openbookTwapPassMarket,
        openbookTwapFailMarket: storedProposal.openbookTwapFailMarket,
        dao: proposal.dao.publicKey,
        baseVault: storedProposal.baseVault,
        quoteVault: storedProposal.quoteVault,
        vaultProgram: vaultProgram.programId,
        daoTreasury
      })
      .remainingAccounts(accounts)
      .transaction();

    return await this.transactionSender?.send(
      [tx],
      this.rpcProvider.connection
    );
  }

  private async finalizeProposalIx(
    proposal: PublicKey,
    instruction: any,
    dao: PublicKey,
    daoToken: PublicKey,
    usdc: PublicKey,
    proposer: PublicKey
  ) {
    let vaultProgramId = this.autocratClient.vaultClient.vaultProgram.programId;

    const [daoTreasury] = getDaoTreasuryAddr(
      this.autocratClient.autocrat.programId,
      dao
    );
    const [baseVault] = getVaultAddr(
      this.autocratClient.vaultClient.vaultProgram.programId,
      daoTreasury,
      daoToken
    );
    const [quoteVault] = getVaultAddr(
      this.autocratClient.vaultClient.vaultProgram.programId,
      daoTreasury,
      usdc
    );

    const [passBase] = getVaultFinalizeMintAddr(vaultProgramId, baseVault);
    const [passQuote] = getVaultFinalizeMintAddr(vaultProgramId, quoteVault);

    const [failBase] = getVaultRevertMintAddr(vaultProgramId, baseVault);
    const [failQuote] = getVaultRevertMintAddr(vaultProgramId, quoteVault);

    const [passAmm] = getAmmAddr(
      this.autocratClient.ammClient.program.programId,
      passBase,
      passQuote
    );
    const [failAmm] = getAmmAddr(
      this.autocratClient.ammClient.program.programId,
      failBase,
      failQuote
    );

    const [passLp] = getAmmLpMintAddr(
      this.autocratClient.ammClient.program.programId,
      passAmm
    );
    const [failLp] = getAmmLpMintAddr(
      this.autocratClient.ammClient.program.programId,
      failAmm
    );

    return this.autocratClient.autocrat.methods.finalizeProposal().accounts({
      proposal,
      passAmm,
      failAmm,
      dao,
      baseVault,
      quoteVault,
      passLpUserAccount: getAssociatedTokenAddressSync(passLp, proposer),
      failLpUserAccount: getAssociatedTokenAddressSync(failLp, proposer),
      passLpVaultAccount: getAssociatedTokenAddressSync(
        passLp,
        daoTreasury,
        true
      ),
      failLpVaultAccount: getAssociatedTokenAddressSync(
        failLp,
        daoTreasury,
        true
      ),
      vaultProgram: this.autocratClient.vaultClient.vaultProgram.programId,
      treasury: daoTreasury
    });
  }

  //CURRENT VERSION
  private async finalizeProposalv03(proposal: Proposal) {
    try {
      const proposalAccount = await this.autocratClient.getProposal(
        proposal.publicKey
      );
      const dao = await this.autocratClient.getDao(proposalAccount.dao);
      const finalizeProposalTx = await (
        await this.finalizeProposalIx(
          proposal.publicKey,
          proposalAccount.instruction,
          proposalAccount.dao,
          dao.tokenMint,
          dao.usdcMint,
          proposalAccount.proposer
        )
      ).transaction();

      return await this.transactionSender?.send(
        [finalizeProposalTx],
        this.rpcProvider.connection
      );
    } catch (e) {
      console.log("error", e);
    }
  }

  public async finalizeProposal(proposal: Proposal) {
    switch (proposal.protocol.deploymentVersion) {
      case "V0.2":
        return await this.finalizeProposalv02(proposal);
      case "V0.3":
        return await this.finalizeProposalv03(proposal);
      default:
        throw Error("Version incompatible");
    }
  }
}
