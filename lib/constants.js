"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTOCRAT_VERSIONS = exports.BN_0 = exports.QUOTE_LOTS = exports.TEN_DAYS_IN_SLOTS = exports.SLOTS_PER_10_SECS = exports.BASE_FORMAT = exports.NUMERAL_FORMAT = exports.USDCMetadata = exports.USDCAddressMainNet = exports.mUSDCAddressDevNet = exports.USDCAddressDevNet = exports.OPENBOOK_TWAP_PROGRAM_IDV0_2 = exports.OPENBOOK_TWAP_PROGRAM_IDV0_1 = exports.OPENBOOK_PROGRAM_ID = exports.SYSTEM_PROGRAM = void 0;
const web3_js_1 = require("@solana/web3.js");
const anchor_1 = require("@coral-xyz/anchor");
const usdcLogo = require("../assets/images/usdc-logo.svg");
exports.SYSTEM_PROGRAM = new web3_js_1.PublicKey("11111111111111111111111111111111");
exports.OPENBOOK_PROGRAM_ID = new web3_js_1.PublicKey("opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb");
exports.OPENBOOK_TWAP_PROGRAM_IDV0_1 = new web3_js_1.PublicKey("TWAPrdhADy2aTKN5iFZtNnkQYXERD9NvKjPFVPMSCNN");
exports.OPENBOOK_TWAP_PROGRAM_IDV0_2 = new web3_js_1.PublicKey("twAP5sArq2vDS1mZCT7f4qRLwzTfHvf5Ay5R5Q5df1m");
exports.USDCAddressDevNet = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";
exports.mUSDCAddressDevNet = "B9CZDrwg7d34MiPiWoUSmddriCtQB5eB2h9EUSDHt48b";
exports.USDCAddressMainNet = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
exports.USDCMetadata = {
    symbol: "USDC",
    decimals: 6,
    name: "USD Coin",
    publicKey: "", // depends on network
    url: usdcLogo.default.src,
};
exports.NUMERAL_FORMAT = "0,0.00";
exports.BASE_FORMAT = "0,0";
exports.SLOTS_PER_10_SECS = 25;
exports.TEN_DAYS_IN_SLOTS = 10 * 24 * 60 * 6 * exports.SLOTS_PER_10_SECS;
exports.QUOTE_LOTS = 0.0001;
exports.BN_0 = new anchor_1.BN(0);
const AUTOCRAT_V0_IDL = require("./idl/autocrat_v0.json");
const AUTOCRAT_V0_1_IDL = require("./idl/autocrat_v0.1.json");
const AUTOCRAT_V0_2_IDL = require("./idl/autocrat_v0.2.json");
const AUTOCRAT_V0_3_IDL = require("./idl/autocrat_v0.3.json");
exports.AUTOCRAT_VERSIONS = [
    {
        label: "V0.3",
        programId: new web3_js_1.PublicKey("FuTPR6ScKMPHtZFwacq9qrtf9VjscawNEFTb2wSYr1gY"),
        idl: AUTOCRAT_V0_3_IDL,
    },
    {
        label: "V0.2",
        programId: new web3_js_1.PublicKey("metaRK9dUBnrAdZN6uUDKvxBVKW5pyCbPVmLtUZwtBp"),
        idl: AUTOCRAT_V0_2_IDL,
    },
    {
        label: "V0.1",
        programId: new web3_js_1.PublicKey("metaX99LHn3A7Gr7VAcCfXhpfocvpMpqQ3eyp3PGUUq"),
        idl: AUTOCRAT_V0_1_IDL,
    },
    {
        label: "V0",
        programId: new web3_js_1.PublicKey("meta3cxKzFBmWYgCVozmvCQAS3y9b3fGxrG9HkHL7Wi"),
        idl: AUTOCRAT_V0_IDL,
    },
];
