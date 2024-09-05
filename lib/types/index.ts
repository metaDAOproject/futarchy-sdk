import { PublicKey } from "@solana/web3.js";

export * from "./conditionalVault";
export * from "./comments";
export * from "./createProp";
export * from "./proposals";
export * from "./markets";
export * from "./autocrats";
export * from "./idl"
export * from "./instructions"
export * from "./tokens";
export * from "./openbook";
export * from "./amm";
export * from "./prices";
export * from "./reactions";
export * from "./transactions";
export * from "./user";

export type MergeWithOptionalFields<T, U> = {
  [K in keyof (T | U)]: U[K];
} & {
  [K in keyof Omit<U, keyof T>]?: NonNullable<U[K]>;
} & {
  [K in keyof Omit<T, keyof U>]?: NonNullable<T[K]>;
};

export type AccountWithKey<T> = { publicKey: PublicKey; account: T };
