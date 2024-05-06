export type SendTransactionResponse = Promise<{ signatures: string[], errors?:  TransactionError[]} | undefined> 
export type TransactionError = {message: string, name:string}