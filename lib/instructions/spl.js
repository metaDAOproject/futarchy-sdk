"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructions = void 0;
const anchor_1 = require("@coral-xyz/anchor");
const web3_js_1 = require("@solana/web3.js");
const spl_token_1 = require("@solana/spl-token");
const constants_1 = require("../constants");
const types_1 = require("../types");
const defaultVersion = constants_1.AUTOCRAT_VERSIONS[0];
const dao = web3_js_1.PublicKey.findProgramAddressSync([anchor_1.utils.bytes.utf8.encode('WWCACOTMICMIBMHAFTTWYGHMB')], defaultVersion.programId)[0];
const daoTreasury = web3_js_1.PublicKey.findProgramAddressSync([dao.toBuffer()], defaultVersion.programId)[0];
exports.instructions = {
    name: 'SPL',
    actions: [
        {
            label: 'Transfer tokens',
            fields: [
                {
                    type: types_1.InstructionFieldTypes.Key,
                    required: true,
                    label: 'Recipient',
                    description: 'The wallet that will receive the token (not the token account) from the treasury',
                },
                {
                    type: types_1.InstructionFieldTypes.Key,
                    required: true,
                    label: 'Token Mint',
                    description: 'The mint of the token to transfer from the treasury',
                },
                {
                    type: types_1.InstructionFieldTypes.Number,
                    required: true,
                    label: 'Amount',
                    description: 'The amount of tokens to transfer',
                },
            ],
            instruction: async (params, options = {}) => {
                if (!(options === null || options === void 0 ? void 0 : options.connection))
                    throw new Error('Connection not provided');
                const recipient = new web3_js_1.PublicKey(params[0]);
                const mint = new web3_js_1.PublicKey(params[1]);
                const mintAccount = await (0, spl_token_1.getMint)(options.connection, mint);
                const amount = new anchor_1.BN(Number(params[2]) * 10 ** mintAccount.decimals);
                const ix = (0, spl_token_1.createTransferCheckedInstruction)((0, spl_token_1.getAssociatedTokenAddressSync)(mint, daoTreasury, true), mint, (0, spl_token_1.getAssociatedTokenAddressSync)(mint, recipient, true), daoTreasury, amount, mintAccount.decimals);
                return {
                    programId: spl_token_1.TOKEN_PROGRAM_ID,
                    accounts: ix.keys,
                    data: ix.data,
                };
            },
        },
    ],
};
