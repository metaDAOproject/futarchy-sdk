import { Connection, PublicKey } from '@solana/web3.js';
import { InstructionDisplay, ProposalInstruction } from '..';
import { Instruction } from '@coral-xyz/anchor';

export enum InstructionFieldTypes {
  Text,
  Number,
  BigNumber,
  Key,
}

export type InstructionFieldType = {
  type: InstructionFieldTypes;
  required: boolean;
  label: string;
  description: string;
};

export type InstructionAction = {
  label: string;
  fields: InstructionFieldType[];
  instruction: (
    params: any[],
    options?: { connection?: Connection },
  ) => Promise<ProposalInstruction>;
};

export type InstructionSet = {
  name: string;
  actions: InstructionAction[];
};

export type DecodeInstructionCoder = {
  decode(ix: Buffer | Uint8Array | string, encoding: 'hex' | 'base58'): Instruction | null;
};

export type DecodedInstruction = { name: string; programId: PublicKey; } & InstructionDisplay;
