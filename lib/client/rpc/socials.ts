import { FutarchySocialsClient } from "../client";

export class FutarchyRPCSocialsClient implements FutarchySocialsClient {
  async addReaction(
    authId: string,
    reaction: string,
    pubKey: string,
    proposalAcct: string,
    commentId: number | null
  ): Promise<any> {
    throw new Error("not implemented");
  }

  async removeReaction(
    authId: string,
    reaction: string,
    pubKey: string,
    proposalAcct: string
  ): Promise<any> {
    throw new Error("not implemented");
  }
}
