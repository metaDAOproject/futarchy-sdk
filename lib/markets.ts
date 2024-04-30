import { MarketType, ProgramVersionLabel } from "./types";

export function getMarketTypeFromProtocolVersion(
  version: ProgramVersionLabel
): MarketType {
  switch (version) {
    case "V0":
    case "V0.1":
    case "V0.2":
    case "V0.3":
      return "openbookv2";
    case "V1":
      return "amm";
  }
}
