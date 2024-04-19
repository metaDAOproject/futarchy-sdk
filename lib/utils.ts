import { PublicKey } from "@solana/web3.js";
import { InstructionFieldTypes } from "./types";

export const shortKey = (key?: PublicKey | string) => {
  if (!key) return "???";
  const str = key?.toString();
  return `${str.substring(0, 4)}...${str.substring(
    str.length - 5,
    str.length
  )}`;
};

export const validateType = async (
  type: InstructionFieldTypes,
  value?: string
) => {
  switch (type) {
    case InstructionFieldTypes.Key:
      if (!value) {
        return false;
      }
      return /^[1-9A-HJ-NP-Za-km-z]{40,44}$/.test(value);
    default:
      return true;
  }
};
