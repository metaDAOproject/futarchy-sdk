import { PublicKey } from "@solana/web3.js";
import { QUOTE_LOTS } from "@/constants";
import { TWAPOracle } from "@/types";

export const calculateTWAP = (twapOracle?: TWAPOracle) => {
  if (!twapOracle) return undefined;

  // only the initial twap record is recorded, use initial value
  if (twapOracle.lastUpdatedSlot.eq(twapOracle.initialSlot)) {
    return twapOracle.observationAggregator.toNumber() * QUOTE_LOTS;
  }

  const slotsPassed = twapOracle.lastUpdatedSlot.sub(twapOracle.initialSlot);
  const twapValue = twapOracle.observationAggregator.div(slotsPassed);
  return twapValue.toNumber() * QUOTE_LOTS;
};

export const getLastObservedAndSlot = (twapOracle?: TWAPOracle) => {
  if (!twapOracle) return undefined;

  return {
    lastObservationValue: twapOracle.lastObservation * QUOTE_LOTS,
    lastObservationSlot: twapOracle.lastObservedSlot,
  };
};

export const getTwapMarketKey = (market: PublicKey, programId: PublicKey) =>
  PublicKey.findProgramAddressSync(
    [Buffer.from("twap_market"), market.toBuffer()],
    programId
  )[0];
