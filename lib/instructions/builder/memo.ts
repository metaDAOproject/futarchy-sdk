import { PublicKey } from "@metaplex-foundation/js";

export function buildMemoInstruction(message: string) {
    return {
        preInstructions: undefined,
        instruction: {
            programId: new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"),
            accounts: [],
            data: Buffer.from(message, "utf8")
        }
    }
}