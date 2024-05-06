import { BN, Program, Provider } from "@coral-xyz/anchor";
import {
  AutocratProgram,
  FutarchyProtocol,
  DaoAccount,
  Dao,
  DaoAggregate,
  ProgramVersionLabel,
} from "@/types";
import { FutarchyDaoClient } from "@/client";
import { enrichTokenMetadata } from "@/tokens";
import { PublicKey } from "@solana/web3.js";
import { createSlug } from "@/utils";
import { AutocratV1, IDL as AUTOCRAT_V1_IDL } from "@/idl/autocrat_v1";

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
        name: key,
        daos: daosByName[key],
        slug: createSlug(key),
      };
      doaAggregates.push(daoAgg);
    }
    return doaAggregates;
  }

  async fetchDao(
    daoAddress: string,
    protocol: FutarchyProtocol
  ): Promise<DaoAggregate | null> {
    const daoAccount = await this.fetchDaoAccount(
      daoAddress,
      protocol.autocrat
    );
    if (daoAccount && protocol) {
      const dao = await this.fetchDaoWithTokensFromState(daoAccount, protocol);
      if (dao && dao.baseToken?.name) {
        const daoAccountWithKey = {
          ...dao,
          publicKey: new PublicKey(daoAddress),
        };
        return {
          daos: [daoAccountWithKey],
          name: dao.baseToken.name,
          logo: dao.baseToken.url ?? "",
          slug: createSlug(dao.baseToken?.name ?? ""),
        };
      }
      return null;
    }
    return null;
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
    const baseMint = ["V0", "V0.1", "V0.2"].includes(protocol.deploymentVersion)
      ? daoAccount.metaMint :
      daoAccount.tokenMint;
    const quoteMint = daoAccount.usdcMint;
    if (baseMint) {
      const baseToken = await enrichTokenMetadata(baseMint, this.rpcProvider);
      const quoteToken = await enrichTokenMetadata(quoteMint, this.rpcProvider);
      const dao = {
        ...daoAccount,
        tokenMint: daoAccount.tokenMint
          ? daoAccount.tokenMint
          : new PublicKey(daoAccount.metaMint ?? ""),
      };
      return {
        daoAccount: dao,
        baseToken,
        quoteToken,
        protocol,
      };
    }
  }

  async getMinLpToProvide(daoAggregate: DaoAggregate): Promise<{ base: BN, quote: BN } | undefined> {
    const autocrat = new Program<AutocratV1>(AUTOCRAT_V1_IDL, "5scUH1qY87Awh5D8bQkbP2uv9BaXJXiMgrqRBw1K2vVv", this.rpcProvider)
    const currentDao = daoAggregate.daos.filter((dao) => dao.protocol.deploymentVersion === "V1").slice(-1)[0]
    if (!currentDao) return

    console.log(currentDao.protocol.autocrat.programId)
    const all = await autocrat.account.dao.all()
    console.log(all)
    const daoAccount = await autocrat.account.dao?.fetch(currentDao.publicKey)

    return { base: daoAccount.minBaseFutarchicLiquidity, quote: daoAccount.minQuoteFutarchicLiquidity }
  }

  async getTreasuryBalance(daoAccount: DaoAccount): Promise<{ total: number, tokens: { mint: string, amount: number }[] }> {
    const treasury = daoAccount.treasury
    const balance = await this.rpcProvider.connection.getBalance(treasury).catch(e => 0)
    const tokenAccounts = await this.rpcProvider.connection.getParsedTokenAccountsByOwner(treasury, {
      programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),
    });

    const tokens = tokenAccounts.value.map(accountInfo => {
      const tokenAmount = accountInfo.account.data.parsed.info.tokenAmount;
      return {
        mint: accountInfo.account.data.parsed.info.mint,
        amount: parseInt(tokenAmount.amount, 10),
      };
    });

    return {
      total: balance,
      tokens: tokens
    }
  }

}
