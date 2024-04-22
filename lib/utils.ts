import { PublicKey } from "@solana/web3.js";

export const shortKey = (key?: PublicKey | string) => {
  if (!key) return "???";
  const str = key?.toString();
  return `${str.substring(0, 4)}...${str.substring(
    str.length - 5,
    str.length
  )}`;
};

export const createSlug = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};
