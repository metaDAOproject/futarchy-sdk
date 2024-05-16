import { BN } from "@coral-xyz/anchor";
import { Market, MarketType, ProgramVersionLabel } from "./types";

export function getMarketTypeFromProtocolVersion(
  version: ProgramVersionLabel
): MarketType {
  switch (version) {
    case "V0":
    case "V0.1":
    case "V0.2":
      return "openbookv2";
    case "V0.3":
      return "amm";
  }
}

export function getQuoteLotsForUIAmount(market: Market, amount: number) {
  return new BN(
    amount * new BN(10).pow(new BN(market.quoteToken.decimals)).toNumber()
  );
}
export function getBaseLotsForUIAmount(market: Market, amount: number) {
  return new BN(
    amount * new BN(10).pow(new BN(market.baseToken.decimals)).toNumber()
  );
}
