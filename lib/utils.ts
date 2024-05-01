import { PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import {
  AUTOCRAT_VERSIONS,
  autocratVersionToConditionalVaultMap,
  autocratVersionToTwapMap,
} from "@/constants";
import {
  AutocratProgram,
  ConditionalVaultProgram,
  FutarchyProtocol,
} from "@/types";

export const shortKey = (key?: PublicKey | string) => {
  if (!key) return "???";
  const str = key?.toString();
  return `${str.substring(0, 4)}...${str.substring(
    str.length - 5,
    str.length
  )}`;
};

export const createSlug = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};

export const getFutarchyProtocols = (rpcProvider: AnchorProvider) =>
  AUTOCRAT_VERSIONS.reduce((prev, curr) => {
    const autocrat = new Program<AutocratProgram>(
      curr.idl as AutocratProgram,
      curr.programId,
      rpcProvider
    );

    const { programId: vaultProgramId, idl: vaultIdl } =
      autocratVersionToConditionalVaultMap[curr.label];
    const vaultProgram = new Program<ConditionalVaultProgram>(
      vaultIdl,
      vaultProgramId,
      rpcProvider
    );
    const { programId: twapProgramId, idl: twapIdl } =
      autocratVersionToTwapMap[curr.label];
    const openbookTwap = new Program(twapIdl, twapProgramId, rpcProvider);
    const protocol: FutarchyProtocol = {
      key: autocrat.programId.toString(),
      autocrat: autocrat,
      deploymentVersion: curr.label,
      vault: vaultProgram,
      pricingModel: openbookTwap,
    };
    prev.push(protocol);
    return prev;
  }, [] as FutarchyProtocol[]);
