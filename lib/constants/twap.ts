import { PublicKey } from "@solana/web3.js";
import { Idl } from "@coral-xyz/anchor";
import { BN } from "@coral-xyz/anchor";

import { ProgramVersionLabel } from "@/types";
import {
  IDL as OPENBOOK_TWAP_IDLV0_1,
  OpenbookTwapV0_1
} from "@/idl/openbook_twap_v0.1";
import {
  IDL as OPENBOOK_TWAP_IDLV0_2,
  OpenbookTwapV0_2
} from "@/idl/openbook_twap_v0.2";

export const OPENBOOK_TWAP_PROGRAM_IDV0_1 = new PublicKey(
  "TWAPrdhADy2aTKN5iFZtNnkQYXERD9NvKjPFVPMSCNN"
);
export const OPENBOOK_TWAP_PROGRAM_IDV0_2 = new PublicKey(
  "twAP5sArq2vDS1mZCT7f4qRLwzTfHvf5Ay5R5Q5df1m"
);

export const autocratVersionToTwapMap: Record<
  ProgramVersionLabel,
  { programId: PublicKey; idl: OpenbookTwapV0_1 | OpenbookTwapV0_2 }
> = {
  V0: {
    programId: OPENBOOK_TWAP_PROGRAM_IDV0_1,
    idl: OPENBOOK_TWAP_IDLV0_1
  },
  "V0.1": {
    programId: OPENBOOK_TWAP_PROGRAM_IDV0_1,
    idl: OPENBOOK_TWAP_IDLV0_1
  },
  "V0.2": {
    programId: OPENBOOK_TWAP_PROGRAM_IDV0_2,
    idl: OPENBOOK_TWAP_IDLV0_2
  },
  "V0.3": {
    programId: OPENBOOK_TWAP_PROGRAM_IDV0_2,
    idl: OPENBOOK_TWAP_IDLV0_2
  }
};

export const maxObservationChangePerUpdateLots: BN = new BN(5000);
export const twapMarketBuffer = Buffer.from("twap_market", "utf8");
