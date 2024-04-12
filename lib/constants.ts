import { PublicKey } from "@solana/web3.js";
import { BN } from "@coral-xyz/anchor";
import { AutocratProgram, ProgramVersion, TokenProps } from "./types";
const usdcLogo = require("../assets/images/usdc-logo.svg") as {
  default: { src: string };
};

export const SYSTEM_PROGRAM: PublicKey = new PublicKey(
  "11111111111111111111111111111111"
);

export const OPENBOOK_PROGRAM_ID = new PublicKey(
  "opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb"
);
export const OPENBOOK_TWAP_PROGRAM_IDV0_1 = new PublicKey(
  "TWAPrdhADy2aTKN5iFZtNnkQYXERD9NvKjPFVPMSCNN"
);
export const OPENBOOK_TWAP_PROGRAM_IDV0_2 = new PublicKey(
  "twAP5sArq2vDS1mZCT7f4qRLwzTfHvf5Ay5R5Q5df1m"
);

export const USDCAddressDevNet = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";
export const mUSDCAddressDevNet =
  "B9CZDrwg7d34MiPiWoUSmddriCtQB5eB2h9EUSDHt48b";
export const USDCAddressMainNet =
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
export const USDCMetadata: TokenProps = {
  symbol: "USDC",
  decimals: 6,
  name: "USD Coin",
  publicKey: "", // depends on network
  url: usdcLogo.default.src,
};

export const NUMERAL_FORMAT = "0,0.00";
export const BASE_FORMAT = "0,0";
export const SLOTS_PER_10_SECS: number = 25;
export const TEN_DAYS_IN_SLOTS: number = 10 * 24 * 60 * 6 * SLOTS_PER_10_SECS;
export const QUOTE_LOTS = 0.0001;
export const BN_0 = new BN(0);

const AUTOCRAT_V0_IDL: AutocratProgram = require("./idl/autocrat_v0.json");
const AUTOCRAT_V0_1_IDL: AutocratProgram = require("./idl/autocrat_v0.1.json");
const AUTOCRAT_V0_2_IDL: AutocratProgram = require("./idl/autocrat_v0.2.json");
const AUTOCRAT_V0_3_IDL: AutocratProgram = require("./idl/autocrat_v0.3.json");

export const AUTOCRAT_VERSIONS: ProgramVersion[] = [
  {
    label: "V0.3",
    programId: new PublicKey("FuTPR6ScKMPHtZFwacq9qrtf9VjscawNEFTb2wSYr1gY"),
    idl: AUTOCRAT_V0_3_IDL,
  },
  {
    label: "V0.2",
    programId: new PublicKey("metaRK9dUBnrAdZN6uUDKvxBVKW5pyCbPVmLtUZwtBp"),
    idl: AUTOCRAT_V0_2_IDL,
  },
  {
    label: "V0.1",
    programId: new PublicKey("metaX99LHn3A7Gr7VAcCfXhpfocvpMpqQ3eyp3PGUUq"),
    idl: AUTOCRAT_V0_1_IDL,
  },
  {
    label: "V0",
    programId: new PublicKey("meta3cxKzFBmWYgCVozmvCQAS3y9b3fGxrG9HkHL7Wi"),
    idl: AUTOCRAT_V0_IDL,
  },
];
