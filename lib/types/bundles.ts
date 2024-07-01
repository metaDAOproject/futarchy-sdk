type TransactionError = {
  Ok: null;
};
type Context = {
  slot: number;
};

type JitoBundleStatusResponse = {
  jsonrpc: string;
  result: JitoBundleStatusResult;
  id: number;
};

type JitoBundleStatusResult = {
  context: Context;
  value: JitoBundleStatus[];
};

type JitoBundleStatus = {
  bundle_id: string;
  transactions: string[];
  slot: number;
  confirmation_status: "finalized" | "processed" | "confirmed";
  err: TransactionError;
};
