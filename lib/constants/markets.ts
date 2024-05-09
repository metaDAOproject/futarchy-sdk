import { AnchorProvider, BN, Program } from "@coral-xyz/anchor";
// TODO: Review this number as max safe doesn't work
export const MAX_MARKET_PRICE = 100000000;

export const autocratProgramToLoSizeMap: Record<
    string,
    { baseLotSize: BN; quoteLotSize: BN }
> = {
    "fut5MzSUFcmxaEHMvo9qQThrAL4nAv5FQ52McqhniSt": {
        baseLotSize: new BN(1e12),
        quoteLotSize: new BN(100),
    },
    "metaRK9dUBnrAdZN6uUDKvxBVKW5pyCbPVmLtUZwtBp": {
        baseLotSize: new BN(1e8),
        quoteLotSize: new BN(100)
    }
}
export const makerFee = new BN(0)
export const takerFee = new BN(0)