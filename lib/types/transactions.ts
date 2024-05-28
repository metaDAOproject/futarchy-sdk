export type SendTransactionResponse = Promise<SendTransactionResponseSync>
export type SendTransactionResponseSync = { signatures: string[], errors?: TransactionError[] } | undefined
export type TransactionError = { message: string, name: string }