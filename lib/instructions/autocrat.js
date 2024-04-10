"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructions = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const web3_js_1 = require("@solana/web3.js");
const constants_1 = require("../constants");
const types_1 = require("../types");
const defaultVersion = constants_1.AUTOCRAT_VERSIONS[0];
const coder = new anchor_1.BorshInstructionCoder(defaultVersion.idl);
// const program = new Program<AutocratV0>(AUTOCRAT_IDL, AUTOCRAT_PROGRAM_ID);
const dao = web3_js_1.PublicKey.findProgramAddressSync([anchor_1.utils.bytes.utf8.encode('WWCACOTMICMIBMHAFTTWYGHMB')], defaultVersion.programId)[0];
const daoTreasury = web3_js_1.PublicKey.findProgramAddressSync([dao.toBuffer()], defaultVersion.programId)[0];
exports.instructions = {
    name: 'Autocrat',
    actions: [
        {
            label: 'Update DAO',
            fields: [
                {
                    type: types_1.InstructionFieldTypes.Number,
                    required: true,
                    label: 'Threshold',
                    description: 'The difference threshold needed between PASS and FAIL market for a proposal to pass, in basis points',
                },
            ],
            instruction: async (params) => ({
                programId: defaultVersion.programId,
                accounts: [
                    {
                        pubkey: dao,
                        isSigner: true,
                        isWritable: true,
                    },
                    {
                        pubkey: daoTreasury,
                        isSigner: true,
                        isWritable: false,
                    },
                ],
                data: coder.encode('update_dao', {
                    passThresholdBps: params[0],
                }),
            }),
        },
    ],
};
