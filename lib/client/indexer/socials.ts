import {
  comments,
  generateSubscriptionOp,
  Client as IndexerGraphQLClient,
  reactions,
  Scalars
} from "./__generated__";
import { Client as GQLWebSocketClient } from "graphql-ws";
import { FutarchySocialsClient } from "../client";
import { Observable } from "rxjs";
import { ReactionType, Comment } from "@/types";
import { SUPPORTED_EMOJIS } from "@/constants";
import { ClientOptions } from "./__generated__/runtime";
import { ClientOptions as WSClientOptions } from "graphql-ws";
import { PublicKey } from "@solana/web3.js";

export class FutarchyIndexerSocialsClient implements FutarchySocialsClient {
  private getGQLClient: (options?: ClientOptions) => IndexerGraphQLClient;
  private getWSClient: (options?: WSClientOptions) => GQLWebSocketClient;

  constructor(
    getGQLClient: (options?: ClientOptions) => IndexerGraphQLClient,
    getWSClient: (options?: WSClientOptions) => GQLWebSocketClient
  ) {
    this.getGQLClient = getGQLClient;
    this.getWSClient = getWSClient;
  }

  async addReaction(
    authId: string,
    reaction: string,
    pubKey: string,
    proposalAcct: string,
    commentId: number | null
  ) {
    // TODO implement wallet login logic properly...
    if (!authId) return;
    try {
      const result = await this.getGQLClient({
        headers: {
          Authorization: `Bearer ${authId}`
        }
      }).mutation({
        update_reactions: {
          __args: {
            where: {
              proposal_acct: { _eq: proposalAcct },
              reactor_acct: { _eq: pubKey },
              comment_id: { _eq: commentId }
            },
            _set: {
              reaction,
              updated_at: new Date()
            }
          },
          returning: {
            reaction: true // Fields you want to return after insertion
          }
        }
      });

      if (result.update_reactions?.returning.length === 0) {
        // insert one since update found nothing
        const result = await this.getGQLClient({
          headers: {
            Authorization: `Bearer ${authId}`
          }
        }).mutation({
          insert_reactions: {
            __args: {
              objects: [
                {
                  reaction,
                  proposal_acct: proposalAcct,
                  comment_id: commentId,
                  reactor_acct: pubKey,
                  updated_at: new Date()
                }
              ]
            },
            returning: {
              reaction: true, // Fields you want to return after insertion
              reactor_acct: true,
              proposal_acct: true,
              comment_id: true
            }
          }
        });
        return result;
      }

      return result;
    } catch (error) {
      console.error("Error inserting reaction:", error);
      throw error;
    }
  }

  watchReactions(
    proposal: string,
    user?: string,
    commentId?: number
  ): Observable<{
    [key in ReactionType]: { count: number; userReacted: boolean };
  }> {
    const where = commentId
      ? {
          proposal_acct: { _eq: proposal },
          comment_id: { _eq: commentId }
        }
      : {
          proposal_acct: { _eq: proposal }
        };

    const { query, variables } = generateSubscriptionOp({
      reactions: {
        __args: {
          where
        },
        reactor_acct: true,
        updated_at: true,
        reaction: true,
        proposal_acct: true
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup: () => void = this.getWSClient().subscribe<{
        reactions: {
          reactor_acct: string;
          updated_at: string;
          reaction: string;
          proposal_acct: string;
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const reactions = data.data;

            const reactionCounts: {
              [key in ReactionType]: { count: number; userReacted: boolean };
            } = {};
            // Initialize each reaction type
            SUPPORTED_EMOJIS.forEach((reactionType) => {
              reactionCounts[reactionType] = { count: 0, userReacted: false };
            });

            // Might need some optimization later
            reactions?.reactions.forEach((reaction) => {
              reactionCounts[reaction.reaction]!!.count += 1;
              if (user && reaction.reactor_acct === user)
                reactionCounts[reaction.reaction]!!.userReacted = true;
            });

            subscriber.next(reactionCounts);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriptionCleanup()
        }
      );
      return () => subscriptionCleanup();
    });
  }

  async removeReaction(
    authId: string,
    reaction: string,
    pubKey: string,
    proposalAcct: string
  ) {
    if (!authId) return;
    try {
      // TODO we should not be deleting a reaction
      // we should more likely either update the existing reaction
      const result = await this.getGQLClient().mutation({
        delete_reactions_by_pk: {
          __args: {
            proposal_acct: proposalAcct,
            reaction: reaction,
            reactor_acct: pubKey
          },
          reaction: true,
          reactor_acct: true,
          proposal_acct: true
        }
      });

      return result;
    } catch (error) {
      console.error("Error deleting reaction:", error);
      throw error;
    }
  }

  async addComment(
    authId: string,
    commenterAcct: string,
    content: string,
    proposalAcct: string,
    respondingCommentId: number | null
  ) {
    if (!commenterAcct || !authId) return;
    try {
      const latestCommentId = await this.getLatestCommentId();

      const result = await this.getGQLClient({
        headers: {
          Authorization: `Bearer ${authId}`
        }
      }).mutation({
        insert_comments: {
          __args: {
            objects: [
              {
                comment_id: latestCommentId,
                commentor_acct: commenterAcct,
                content,
                proposal_acct: proposalAcct,
                responding_comment_id: respondingCommentId,
                created_at: new Date()
              }
            ]
          },
          returning: {
            comment_id: true, // Fields you want to return after insertion
            commentor_acct: true,
            content: true,
            proposal_acct: true,
            created_at: true
          }
        }
      });

      return result;
    } catch (error) {
      console.error("Error inserting comment:", error);
      throw error;
    }
  }

  watchComments(
    proposalAcct?: PublicKey,
    userAcct?: PublicKey
  ): Observable<Comment[]> {
    const where = proposalAcct
      ? {
          proposal_acct: { _eq: proposalAcct.toBase58() }
        }
      : {};
    const { query, variables } = generateSubscriptionOp({
      comments: {
        __args: {
          where,
          order_by: [
            {
              created_at: "desc_nulls_last"
            }
          ],
          limit: 1
        },
        comment_id: true,
        content: true,
        commentor_acct: true,
        created_at: true,
        proposal_acct: true,
        responding_comment_id: true,
        reactions: {
          reaction: true,
          reactor_acct: true
        }
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup: () => void = this.getWSClient().subscribe<{
        comments: {
          comment_id: number;
          content: string;
          commentor_acct: string;
          created_at: string;
          proposal_acct: string;
          responding_comment_id?: string;
          reactions: {
            reaction: string;
            reactor_acct: string;
          }[];
        }[];
      }>(
        { query, variables },
        {
          next: (data) => {
            const comments = data?.data?.comments.map<Comment>((comment) => {
              const reactionCounts: {
                [key in ReactionType]: { count: number; userReacted: boolean };
              } = {};
              // Initialize each reaction type
              SUPPORTED_EMOJIS.forEach((reactionType) => {
                reactionCounts[reactionType] = { count: 0, userReacted: false };
              });

              comment.reactions.forEach((reaction) => {
                reactionCounts[reaction.reaction]!!.count += 1;
                if (userAcct && reaction.reactor_acct === userAcct.toBase58())
                  reactionCounts[reaction.reaction]!!.userReacted = true;
              });

              return {
                commentId: comment.comment_id,
                commentorAcct: new PublicKey(comment.commentor_acct),
                content: comment.content,
                createdAt: comment.created_at,
                proposalAcct: new PublicKey(comment.proposal_acct),
                respondingCommentId: comment.responding_comment_id
                  ? Number(comment.responding_comment_id)
                  : undefined,
                reactions: reactionCounts
                // we don't need to include replies because a new reply or comment won't have any replies
              };
            });

            subscriber.next(comments);
          },
          error: (error) => subscriber.error(error),
          complete: () => subscriptionCleanup()
        }
      );
      return () => subscriptionCleanup();
    });
  }

  async fetchComments(
    proposalAcct?: PublicKey,
    userAcct?: PublicKey
  ): Promise<Comment[]> {
    const where = proposalAcct
      ? {
          proposal_acct: { _eq: proposalAcct.toBase58() }
        }
      : {};

    const { comments } = await this.getGQLClient().query({
      comments: {
        __args: {
          where: { ...where, responding_comment_id: { _is_null: true } },
          order_by: [
            {
              created_at: "desc_nulls_last"
            }
          ]
        },
        comments: {
          comment_id: true,
          commentor_acct: true,
          content: true,
          created_at: true,
          proposal_acct: true,
          responding_comment_id: true,
          reactions: {
            reaction: true,
            reactor_acct: true
          }
        },
        comment_id: true,
        content: true,
        commentor_acct: true,
        created_at: true,
        proposal_acct: true,
        responding_comment_id: true,
        reactions: {
          reaction: true,
          reactor_acct: true
        }
      }
    });

    const commentsWithReplies = comments.map((c) => {
      const replies: gqlCommentsRes[] = c.comments.map((r) => ({
        ...r,
        comments: [],
        responding_comment_id: null
      }));
      return { ...c, comments: replies };
    });

    return this.convertToComments(commentsWithReplies, userAcct);
  }

  private async getLatestCommentId(): Promise<number> {
    const result = await this.getGQLClient().query({
      comments: {
        __args: {
          order_by: [{ comment_id: "desc" }],
          limit: 1
        },
        comment_id: true
      }
    });

    const latestComment = result.comments[0];
    const commentId = latestComment ? latestComment.comment_id + 1 : 0;

    return commentId;
  }

  private convertToComments(
    comments: gqlCommentsRes[],
    userAcct?: PublicKey
  ): Comment[] {
    return comments.map<Comment>((comment) => {
      // Initialize reaction counts with default values
      const reactionCounts = SUPPORTED_EMOJIS.reduce<{
        [key in ReactionType]: { count: number; userReacted: boolean };
      }>((acc, reactionType) => {
        acc[reactionType] = { count: 0, userReacted: false };
        return acc;
      }, {});

      // Accumulate reactions using reduce
      comment.reactions.reduce(
        (
          acc: {
            [key in ReactionType]: { count: number; userReacted: boolean };
          },
          reaction: { reaction: ReactionType; reactor_acct: string }
        ) => {
          acc[reaction.reaction].count += 1;
          if (userAcct && reaction.reactor_acct === userAcct.toBase58()) {
            acc[reaction.reaction].userReacted = true;
          }
          return acc;
        },
        reactionCounts
      );

      return {
        commentId: comment.comment_id,
        commentorAcct: new PublicKey(comment.commentor_acct),
        content: comment.content ?? "",
        createdAt: comment.created_at,
        proposalAcct: comment.proposal_acct
          ? new PublicKey(comment.proposal_acct)
          : null,
        reactions: reactionCounts,
        respondingCommentId: comment.responding_comment_id,
        // Build replies recursively
        replies: comment.comments
          ? this.convertToComments(comment.comments, userAcct)
          : []
      };
    });
  }
}

type gqlCommentsRes = {
  content: string | null;
  comment_id: Scalars["bigint"];
  commentor_acct: Scalars["String"];
  comments: gqlCommentsRes[];
  created_at: Scalars["timestamptz"];
  proposal_acct: string | null;
  reactions: Pick<reactions, "reaction" | "reactor_acct">[];
  responding_comment_id: Scalars["bigint"] | null;
};
