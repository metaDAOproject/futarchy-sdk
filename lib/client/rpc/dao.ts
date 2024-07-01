import { BN, Program, Provider } from "@coral-xyz/anchor";
import {
  AutocratProgram,
  FutarchyProtocol,
  DaoAccount,
  Dao,
  DaoAggregate,
  TokenWithBalance
} from "@/types";
import { FutarchyDaoClient } from "@/client";
import { enrichTokenMetadata } from "@/tokens";
import { PublicKey } from "@solana/web3.js";
import { createSlug } from "@/utils";
import { Autocrat, IDL as AUTOCRAT_V0_3_IDL } from "@/idl/autocrat_v0.3";
import { AUTOCRAT_PROGRAM_ID } from "@metadaoproject/futarchy";

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
        slug: createSlug(key)
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
          publicKey: new PublicKey(daoAddress)
        };
        return {
          daos: [daoAccountWithKey],
          name: dao.baseToken.name,
          logo: dao.baseToken.url ?? "",
          slug: createSlug(dao.baseToken?.name ?? "")
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
      ? daoAccount.metaMint
      : daoAccount.tokenMint;
    const slotsPerProposal: BN =
      protocol.deploymentVersion === "V0"
        ? new BN(2160000)
        : daoAccount.slotsPerProposal;
    const quoteMint = daoAccount.usdcMint;
    if (baseMint) {
      const baseToken = await enrichTokenMetadata(baseMint, this.rpcProvider);
      const quoteToken = await enrichTokenMetadata(quoteMint, this.rpcProvider);
      const dao = {
        ...daoAccount,
        slotsPerProposal,
        tokenMint: daoAccount.tokenMint
          ? daoAccount.tokenMint
          : new PublicKey(daoAccount.metaMint ?? "")
      };
      return {
        daoAccount: dao,
        baseToken: { ...baseToken, supply: 0 },
        quoteToken: { ...quoteToken, supply: 0 },
        protocol
      };
    }
  }
  async getMinLpToProvide(
    daoAggregate: DaoAggregate
  ): Promise<{ base: BN; quote: BN } | undefined> {
    const autocrat = new Program<Autocrat>(
      AUTOCRAT_V0_3_IDL,
      AUTOCRAT_PROGRAM_ID,
      this.rpcProvider
    );
    const currentDao = daoAggregate.daos
      .filter((dao) => dao.protocol.deploymentVersion === "V0.3")
      .slice(-1)[0];
    if (!currentDao) return;

    const daoAccount = await autocrat.account.dao?.fetch(currentDao.publicKey);

    return {
      base: daoAccount.minBaseFutarchicLiquidity,
      quote: daoAccount.minQuoteFutarchicLiquidity
    };
  }

  async getTreasuryBalance(
    daoAccount: DaoAccount
  ): Promise<{ total: number; tokens: TokenWithBalance[] }> {
    const treasury = daoAccount.treasury;
    const balance = await this.rpcProvider.connection
      .getBalance(treasury)
      .catch((e) => null);
    // we can import this as well as include token2022
    const tokenAccounts =
      await this.rpcProvider.connection.getParsedTokenAccountsByOwner(
        treasury,
        {
          programId: new PublicKey(
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          )
        }
      );

    const tokens = await Promise.all(
      tokenAccounts.value
        .filter(
          (accountInfo) => accountInfo.account.data.parsed.info.mint !== ""
        )
        .map(async (accountInfo) => {
          const tokenAmount = accountInfo.account.data.parsed.info.tokenAmount;
          const token = await enrichTokenMetadata(
            new PublicKey(accountInfo.account.data.parsed.info.mint),
            this.rpcProvider
          );
          return {
            token: token,
            balance: tokenAmount.uiAmount
          };
        })
    );

    return {
      total: balance ?? 0,
      tokens: tokens
    };
  }
}
