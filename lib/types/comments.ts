import { PublicKey } from "@solana/web3.js";
import { ReactionType } from "./reactions";

export type Comment = {
  commentId: number;
  commentorAcct: PublicKey;
  content: string;
  createdAt: string;
  proposalAcct: PublicKey | null;
  respondingCommentId?: number;
  replies?: Comment[];
  reactions: {
    [key in ReactionType]: { count: number; userReacted: boolean };
  };
};
