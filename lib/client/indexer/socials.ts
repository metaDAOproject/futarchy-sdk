import {
  generateSubscriptionOp,
  Client as IndexerGraphQLClient
} from "./__generated__";
import { Client as GQLWebSocketClient } from "graphql-ws";
import { FutarchySocialsClient } from "../client";
import { Observable } from "rxjs";
import { ReactionType } from "@/types";
import { SUPPORTED_EMOJIS } from "@/constants";

export class FutarchyIndexerSocialsClient implements FutarchySocialsClient {
  private graphqlClient: IndexerGraphQLClient;
  private graphqlWSClient: GQLWebSocketClient;

  constructor(
    graphqlClient: IndexerGraphQLClient,
    graphqlWSClient: GQLWebSocketClient
  ) {
    this.graphqlClient = graphqlClient;
    this.graphqlWSClient = graphqlWSClient;
  }

  async addReaction(
    authId: string,
    reaction: string,
    pubKey: string,
    proposalAcct: string,
    commentId: string | null
  ) {
    // TODO implement wallet login logic properly...
    if (!authId) return;
    try {
      const result = await this.graphqlClient.mutation({
        update_reactions: {
          __args: {
            where: {
              proposal_acct: { _eq: proposalAcct },
              reactor_acct: { _eq: pubKey }
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
        const result = await this.graphqlClient.mutation({
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
    user?: string
  ): Observable<{
    [key in ReactionType]: { count: number; userReacted: boolean };
  }> {
    const { query, variables } = generateSubscriptionOp({
      reactions: {
        __args: {
          where: {
            proposal_acct: { _eq: proposal }
          }
        },
        reactor_acct: true,
        updated_at: true,
        reaction: true,
        proposal_acct: true
      }
    });

    return new Observable((subscriber) => {
      const subscriptionCleanup: () => void = this.graphqlWSClient.subscribe<{
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
      const result = await this.graphqlClient.mutation({
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
    commenterAcct: string,
    content: string,
    proposalAcct: string,
    respondingCommentId: number | null
  ) {
    if (!commenterAcct) return;
    try {
      const result = await this.graphqlClient.mutation({
        insert_comments: {
          __args: {
            objects: [
              {
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
}
