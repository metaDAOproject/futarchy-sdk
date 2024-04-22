import { Program, Provider } from "@coral-xyz/anchor";
import {
  AutocratProgram,
  FutarchyProtocol,
  DaoAccount,
  Dao,
  DaoAggregate,
} from "@/types";
import { FutarchyDaoClient } from "@/client";
import { enrichTokenMetadata } from "@/tokens";
import { PublicKey } from "@solana/web3.js";
import { createSlug } from "@/utils";

export class FutarchyRPCDaoClient implements FutarchyDaoClient {
  private futarchyProtocols: FutarchyProtocol[];
  private rpcProvider: Provider;
  constructor(rpcProvider: Provider, futarchyProtocols: FutarchyProtocol[]) {
    this.rpcProvider = rpcProvider;
    this.futarchyProtocols = futarchyProtocols;
  }
  async fetchAllDaos(): Promise<DaoAggregate[]> {
    const allDaoAccounts = (
      await Promise.all(
        this.futarchyProtocols.map(async (p) => {
          const daos = await p.autocrat.account.dao.all();
          return daos.map((d) => ({ dao: d, protocol: p }));
        })
      )
    ).flat();
    const allDaos: (Dao | undefined)[] = await Promise.all(
      allDaoAccounts.map(async (d) => {
        const daoWithTokens = await this.fetchDaoWithTokensFromState(
          d.dao.account,
          d.protocol
        );
        if (daoWithTokens) {
          return { ...daoWithTokens, publicKey: d.dao.publicKey };
        }
      })
    );

    const daosByName: Record<string, Dao[]> = allDaos.reduce((prev, curr) => {
      // we are using the token name to group doas right now... mkay
      const daoName = curr?.baseToken.name;
      if (!daoName) {
        return prev;
      }
      if (prev[daoName]) {
        prev[daoName].push(curr);
      } else {
        prev[daoName] = [curr];
      }
      return prev;
    }, {} as Record<string, Dao[]>);

    const doaAggregates: DaoAggregate[] = [];
    for (const key in daosByName) {
      const daoAgg: DaoAggregate = {
        daoName: key,
        daos: daosByName[key],
        daoSlug: createSlug(key),
      };
      doaAggregates.push(daoAgg);
    }
    return doaAggregates;
  }
  async fetchDao(
    daoAddress: string,
    protocol: FutarchyProtocol
  ): Promise<Dao | undefined> {
    const daoAccount = await this.fetchDaoAccount(
      daoAddress,
      protocol.autocrat
    );
    if (daoAccount && protocol) {
      const dao = await this.fetchDaoWithTokensFromState(daoAccount, protocol);
      if (dao) {
        return { ...dao, publicKey: new PublicKey(daoAddress) };
      }
    }
  }

  private async fetchDaoAccount(
    daoAddress: string,
    autocrat: Program<AutocratProgram>
  ): Promise<DaoAccount | undefined> {
    const daoAccount = await autocrat.account.dao.fetch(daoAddress);
    return daoAccount;
  }

  private async fetchDaoWithTokensFromState(
    daoAccount: DaoAccount,
    protocol: FutarchyProtocol
  ): Promise<Omit<Dao, "publicKey"> | undefined> {
    const baseMint = ["V0.2", "V0.3"].includes(protocol.deploymentVersion)
      ? daoAccount.tokenMint
      : daoAccount.metaMint;
    const quoteMint = daoAccount.usdcMint;
    if (baseMint) {
      const baseToken = await enrichTokenMetadata(baseMint, this.rpcProvider);
      const quoteToken = await enrichTokenMetadata(quoteMint, this.rpcProvider);
      return {
        daoAccount,
        baseToken,
        quoteToken,
        protocol,
      };
    }
  }
}
