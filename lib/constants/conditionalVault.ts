import { PublicKey } from "@solana/web3.js";
import { ProgramVersionLabel } from "@/types";

export const autocratVersionToConditionalVaultMap: Record<
  ProgramVersionLabel,
  PublicKey
> = {
  V0: new PublicKey("vaU1tVLj8RFk7mNj1BxqgAsMKKaL8UvEUHvU3tdbZPe"),
  "V0.1": new PublicKey("vaU1tVLj8RFk7mNj1BxqgAsMKKaL8UvEUHvU3tdbZPe"),
  "V0.2": new PublicKey("vAuLTQjV5AZx5f3UgE75wcnkxnQowWxThn1hGjfCVwP"),
  "V0.3": new PublicKey("vAuLTQjV5AZx5f3UgE75wcnkxnQowWxThn1hGjfCVwP"),
};
