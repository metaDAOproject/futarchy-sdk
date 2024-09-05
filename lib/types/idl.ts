import { PublicKey } from '@solana/web3.js';

export type IdlTypeDefined = {
    defined: string;
}
export type IdlTypeOption = {
    option: IdlType;
}
export type IdlTypeCOption = {
    coption: IdlType;
}
export type IdlTypeVec = {
    vec: IdlType;
}
export type IdlTypeArray = {
    array: [idlType: IdlType, size: number];
}

export type IdlTypeDefTyStruct = {
    kind: "struct";
    fields: IdlTypeDefStruct;
};

export type IdlType = "bool" | "u8" | "i8" | "u16" | "i16" | "u32" | "i32" | "f32" | "u64" | "i64" | "f64" | "u128" | "i128" | "u256" | "i256" | "bytes" | "string" | "publicKey" | IdlTypeDefined | IdlTypeOption | IdlTypeCOption | IdlTypeVec | IdlTypeArray;

export type IdlTypeDefStruct = Array<IdlField>;

export type IdlField = {
    name: string;
    docs?: string[];
    type: IdlType;
}

export type IdlTypeDef = {
    name: string;
    docs?: string[];
    type: IdlTypeDefTy;
}

export type IdlEnumVariant = {
    name: string;
    fields?: IdlEnumFields;
};
export type IdlEnumFields = IdlEnumFieldsNamed | IdlEnumFieldsTuple;
export type IdlEnumFieldsNamed = IdlField[];
export type IdlEnumFieldsTuple = IdlType[];
export type IdlErrorCode = {
    code: number;
    name: string;
    msg?: string;
};

type IdlTypeDefTyEnum = {
    kind: "enum";
    variants: IdlEnumVariant[];
}

export type IdlTypeDefTy = IdlTypeDefTyEnum | IdlTypeDefTyStruct

export type InstructionDisplay = {
    args: {
        name: string;
        type: string;
        data: string;
    }[];
    accounts: {
        name?: string;
        pubkey: PublicKey;
        isSigner: boolean;
        isWritable: boolean;
    }[];
};

export type IdlAccount = {
    name: string;
    isMut: boolean;
    isSigner: boolean;
    isOptional?: boolean;
    docs?: string[];
    relations?: string[];
    pda?: IdlPda;
};

export type IdlPda = {
    seeds: IdlSeed[];
    programId?: IdlSeed;
};
export type IdlSeed = any;
export type IdlAccounts = {
    name: string;
    docs?: string[];
    accounts: IdlAccountItem[];
};
export type IdlInstruction = {
    name: string;
    docs?: string[];
    accounts: IdlAccountItem[];
    args: IdlField[];
    returns?: IdlType;
};
export type IdlStateMethod = IdlInstruction;
export type IdlAccountItem = IdlAccount | IdlAccounts;