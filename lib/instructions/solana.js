"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructions = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const web3_js_1 = require("@solana/web3.js");
const constants_1 = require("../constants");
const types_1 = require("../types");
const defaultVersion = constants_1.AUTOCRAT_VERSIONS[0];
const dao = web3_js_1.PublicKey.findProgramAddressSync([anchor_1.utils.bytes.utf8.encode('WWCACOTMICMIBMHAFTTWYGHMB')], defaultVersion.programId)[0];
const daoTreasury = web3_js_1.PublicKey.findProgramAddressSync([dao.toBuffer()], defaultVersion.programId)[0];
exports.instructions = {
    name: 'Solana',
    actions: [
        {
            label: 'Transfer lamports',
            fields: [
                {
                    type: types_1.InstructionFieldTypes.Key,
                    required: true,
                    label: 'Recipient',
                    description: 'The wallet that will receive the token',
                },
                {
                    type: types_1.InstructionFieldTypes.BigNumber,
                    required: true,
                    label: 'Amount',
                    description: 'The amount of SOL to transfer',
                },
            ],
            instruction: async (params) => {
                const ix = web3_js_1.SystemProgram.transfer({
                    fromPubkey: daoTreasury,
                    toPubkey: params[0],
                    lamports: params[1],
                });
                return {
                    programId: web3_js_1.SystemProgram.programId,
                    accounts: ix.keys,
                    data: ix.data,
                };
            },
        },
    ],
};
