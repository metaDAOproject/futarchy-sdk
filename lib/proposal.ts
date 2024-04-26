import {
  Dao,
  Proposal,
  ProposalAccount,
  ProposalAccountWithKey,
  ProposalState,
  VaultAccount,
} from "@/types";

export function getStrStateFromProposal(
  relatedProposalAccount: ProposalAccount
): ProposalState {
  if (relatedProposalAccount.state.passed) {
    return "executed";
  } else if (relatedProposalAccount.state.failed) {
    return "failed";
  }
  return "pending";
}

// we should remove function once indexer fetches all the data we need
export function getProposalFromAccount(
  proposalAccountWithKey: ProposalAccountWithKey,
  dao: Dao,
  baseVaultAccount: VaultAccount,
  quoteVaultAccount: VaultAccount
): Proposal {
  const { account, publicKey } = proposalAccountWithKey;
  return {
    account,
    proposer: {
      publicKey: account.proposer.toString(),
    },
    title: `Proposal - ${account.number}`,
    description: "",
    dao,
    publicKey,
    finalizationDate: new Date(),
    content: "",
    creationDate: new Date(),
    state: getStrStateFromProposal(account),
    participants: [],
    reactions: [],
    tags: [],
    volume: 0,
    prices: {
      fail: {
        spot: 0,
        twap: 0,
      },
      pass: {
        spot: 0,
        twap: 0,
      },
    },
    protocol: dao.protocol,
    baseVaultAccount: {
      ...baseVaultAccount,
      protocol: dao.protocol,
    },
    quoteVaultAccount: {
      ...quoteVaultAccount,
      protocol: dao.protocol,
    },
  };
}
