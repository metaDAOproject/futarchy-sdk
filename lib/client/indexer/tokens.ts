import {
  Tokens__GQL,
  TokenCache
} from "@/types";
import { FutarchyTokenClient } from "@/client";
import { FutarchyRPCDaoClient } from "../rpc";
import {
  Client as IndexerGraphQLClient,
} from "./__generated__";

export class FutarchyIndexerTokenClient implements FutarchyTokenClient {
  private rpcDaoClient: FutarchyRPCDaoClient;
  private graphqlClient: IndexerGraphQLClient;
  constructor(
    rpcDaoClient: FutarchyRPCDaoClient,
    graphqlClient: IndexerGraphQLClient,
  ) {
    this.rpcDaoClient = rpcDaoClient;
    this.graphqlClient = graphqlClient;
  }
  async fetchFutarchyTokens(): Promise<TokenCache[]> {
    try {

      const { tokens } = await this.graphqlClient.query?.({
        tokens: {
          __args: {
            where: {}
          },
          // pass arguments to the query
          decimals: true,
          symbol: true,
          mint_acct: true,
          name: true,
          image_url: true,
          supply: true,
          updated_at: true,
        }
      });

      const tokenDetails = this.getTokenCacheFromQuery(tokens) ?? [] as TokenCache[]

      return tokenDetails;
    } catch (e) {
      console.error(e);
      //return this.rpcDaoClient.fetchFutarchyTokens();
      return []
    }
  }

  private getTokenCacheFromQuery(
    tokens: Tokens__GQL
  ): TokenCache[] {
    return tokens.map((t) => {
      return {
        symbol: t.symbol,
        decimals: t.decimals,
        name: t.name ?? null,
        mint_acct: t.mint_acct,
        url: t.image_url,
        supply: t.supply ?? null
      } as TokenCache
    }) as TokenCache[]
  };
}
