import { PublicKey } from "@solana/web3.js";
import { ConditionalVaultProgram, ProgramVersionLabel } from "@/types";
import { IDL as ConditionalVaultV1_IDL } from "@/idl/conditional_vault_v1";
import { IDL as ConditionalVaultV0_2_IDL } from "@/idl/conditional_vault_v0.2";
import { IDL as ConditionalVaultV0_1_IDL } from "@/idl/conditional_vault_v0.1";
import { IDL as ConditionalVaultV0_IDL } from "@/idl/conditional_vault_v0.1";

export const autocratVersionToConditionalVaultMap: Record<
  ProgramVersionLabel,
  { programId: PublicKey; idl: ConditionalVaultProgram }
> = {
  V0: {
    programId: new PublicKey("vaU1tVLj8RFk7mNj1BxqgAsMKKaL8UvEUHvU3tdbZPe"),
    idl: ConditionalVaultV0_IDL,
  },
  "V0.1": {
    programId: new PublicKey("vaU1tVLj8RFk7mNj1BxqgAsMKKaL8UvEUHvU3tdbZPe"),
    idl: ConditionalVaultV0_1_IDL,
  },
  "V0.2": {
    programId: new PublicKey("vAuLTQjV5AZx5f3UgE75wcnkxnQowWxThn1hGjfCVwP"),
    idl: ConditionalVaultV0_2_IDL,
  },
  "V0.3": {
    programId: new PublicKey("vAuLTQjV5AZx5f3UgE75wcnkxnQowWxThn1hGjfCVwP"),
    idl: ConditionalVaultV0_2_IDL,
  },
  V1: {
    programId: new PublicKey("F3RzPAtBQvUAAdDHD8AsPKFhDB1H38SULNKTW39dYrw8"),
    idl: ConditionalVaultV1_IDL,
  },
};
