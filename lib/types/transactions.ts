import { Commitment, TransactionConfirmationStatus } from "@solana/web3.js";

export type SendTransactionResponse = Promise<SendTransactionResponseSync>;
export type SendTransactionResponseSync =
  | { signatures: string[]; errors?: TransactionError[] }
  | undefined;
export type TransactionError = { message: string; name: string };
export type TransactionProcessingStatus =
  | TransactionConfirmationStatus
  | ("sent" | "failed" | "timed-out" | "unsigned");
export type SingleOrArray<T> = T | T[];
export type TransactionDisplayMetadata = {
  title: string;
  description?: string;
  image?: string;
};

export type TransactionProcessingUpdate = {
  status: TransactionProcessingStatus;
  errors: TransactionError[];
  signature: string;
  clientIdentifier?: string;
  displayMetadata?: TransactionDisplayMetadata;
};

export type SendTransactionOptions = {
  sequential?: boolean;
  commitment?: Commitment;
  CUs?: SingleOrArray<number>;
  customErrors?: { code: number; name: string; msg: string }[][];
};
