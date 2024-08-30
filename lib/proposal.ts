import {
  Dao,
  Proposal,
  ProposalAccount,
  ProposalAccountWithKey,
  ProposalState,
  ProposalWithFullData,
  VaultAccount
} from "@/types";
import { getMarketTypeFromProtocolVersion } from "./markets";
import { PublicKey } from "@metaplex-foundation/js";

export function getStrStateFromProposal(
  relatedProposalAccount: ProposalAccount
): ProposalState {
  if (relatedProposalAccount.state.passed) {
    return "Passed";
  } else if (relatedProposalAccount.state.failed) {
    return "Failed";
  }
  return "Pending";
}

// we should remove function once indexer fetches all the data we need
export function getProposalFromAccount(
  proposalAccountWithKey: ProposalAccountWithKey,
  dao: Dao,
  baseVaultAccount: VaultAccount,
  quoteVaultAccount: VaultAccount
): ProposalWithFullData {
  const { account, publicKey } = proposalAccountWithKey;
  const marketType = getMarketTypeFromProtocolVersion(
    dao.protocol.deploymentVersion
  );
  const passMarket =
    marketType === "amm" ? account.passAmm : account.openbookTwapPassMarket;
  const failMarket =
    marketType === "amm" ? account.failAmm : account.openbookTwapFailMarket;
  return {
    account,
    proposer: {
      publicKey: account.proposer.toString()
    },
    title: `Proposal - ${account.number}`,
    description: "",
    dao: {
      name: "",
      slug: "",
      ...dao
    },
    marketType,
    failMarket: new PublicKey(failMarket ?? 5),
    passMarket: new PublicKey(passMarket ?? 5),
    publicKey,
    // TODO: Review
    startSlot: account.slotEnqueued.toNumber(),
    endSlot: account.slotEnqueued.toNumber() + (86400000 / 400) * 3,
    // TODO: We can do better than this ;)
    creationDate: new Date(),
    // TODO: :)
    finalizationDate: new Date(new Date().getDate() + 3),
    // TODO: :)
    endDate: new Date(new Date().getDate() + 3),
    content: "",
    state: getStrStateFromProposal(account),
    participants: [],
    reactions: [],
    tags: [],
    volume: 0,
    prices: {
      fail: {
        spot: 0,
        twap: 0
      },
      pass: {
        spot: 0,
        twap: 0
      }
    },
    passThreshold: dao.daoAccount.passThresholdBps,
    protocol: dao.protocol,
    baseVaultAccount: {
      ...baseVaultAccount,
      protocol: dao.protocol
    },
    quoteVaultAccount: {
      ...quoteVaultAccount,
      protocol: dao.protocol
    }
  };
}
