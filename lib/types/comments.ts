import { PublicKey } from "@solana/web3.js";
import { Reaction } from "./reactions";

export type Comment = {
  commentId: number;
  commentorAcct: PublicKey;
  content: string;
  createdAt: string;
  proposalAcct: PublicKey | null;
  respondingCommentId?: number;
  replies?: Comment[];
  reactions: Reaction[];
};
