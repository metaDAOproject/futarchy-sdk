"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTwapMarketKey = exports.getLastObservedAndSlot = exports.calculateTWAP = void 0;
const web3_js_1 = require("@solana/web3.js");
const constants_1 = require("./constants");
const calculateTWAP = (twapOracle) => {
    if (!twapOracle)
        return undefined;
    // only the initial twap record is recorded, use initial value
    if (twapOracle.lastUpdatedSlot.eq(twapOracle.initialSlot)) {
        return twapOracle.observationAggregator.toNumber() * constants_1.QUOTE_LOTS;
    }
    const slotsPassed = twapOracle.lastUpdatedSlot.sub(twapOracle.initialSlot);
    const twapValue = twapOracle.observationAggregator.div(slotsPassed);
    return twapValue.toNumber() * constants_1.QUOTE_LOTS;
};
exports.calculateTWAP = calculateTWAP;
const getLastObservedAndSlot = (twapOracle) => {
    if (!twapOracle)
        return undefined;
    return {
        lastObservationValue: twapOracle.lastObservation * constants_1.QUOTE_LOTS,
        lastObservationSlot: twapOracle.lastObservedSlot,
    };
};
exports.getLastObservedAndSlot = getLastObservedAndSlot;
const getTwapMarketKey = (market, programId) => web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("twap_market"), market.toBuffer()], programId)[0];
exports.getTwapMarketKey = getTwapMarketKey;
