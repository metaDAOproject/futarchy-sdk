// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    bigint: any,
    float8: any,
    interval: any,
    jsonb: any,
    numeric: any,
    smallint: any,
    timestamp: any,
    timestamptz: any,
    token_acct_status: any,
    uuid: any,
}


/** columns and relationships of "candles" */
export interface candles {
    candle_average: Scalars['bigint']
    candle_duration: Scalars['Int']
    close: (Scalars['bigint'] | null)
    cond_market_twap: (Scalars['bigint'] | null)
    high: (Scalars['bigint'] | null)
    low: (Scalars['bigint'] | null)
    /** An object relationship */
    market: markets
    market_acct: Scalars['String']
    open: (Scalars['bigint'] | null)
    timestamp: Scalars['timestamptz']
    volume: Scalars['bigint']
    __typename: 'candles'
}


/** aggregated selection of "candles" */
export interface candles_aggregate {
    aggregate: (candles_aggregate_fields | null)
    nodes: candles[]
    __typename: 'candles_aggregate'
}


/** aggregate fields of "candles" */
export interface candles_aggregate_fields {
    avg: (candles_avg_fields | null)
    count: Scalars['Int']
    max: (candles_max_fields | null)
    min: (candles_min_fields | null)
    stddev: (candles_stddev_fields | null)
    stddev_pop: (candles_stddev_pop_fields | null)
    stddev_samp: (candles_stddev_samp_fields | null)
    sum: (candles_sum_fields | null)
    var_pop: (candles_var_pop_fields | null)
    var_samp: (candles_var_samp_fields | null)
    variance: (candles_variance_fields | null)
    __typename: 'candles_aggregate_fields'
}


/** aggregate avg on columns */
export interface candles_avg_fields {
    candle_average: (Scalars['Float'] | null)
    candle_duration: (Scalars['Float'] | null)
    close: (Scalars['Float'] | null)
    cond_market_twap: (Scalars['Float'] | null)
    high: (Scalars['Float'] | null)
    low: (Scalars['Float'] | null)
    open: (Scalars['Float'] | null)
    volume: (Scalars['Float'] | null)
    __typename: 'candles_avg_fields'
}


/** unique or primary key constraints on table "candles" */
export type candles_constraint = 'candles_market_acct_candle_duration_timestamp_pk'


/** aggregate max on columns */
export interface candles_max_fields {
    candle_average: (Scalars['bigint'] | null)
    candle_duration: (Scalars['Int'] | null)
    close: (Scalars['bigint'] | null)
    cond_market_twap: (Scalars['bigint'] | null)
    high: (Scalars['bigint'] | null)
    low: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    open: (Scalars['bigint'] | null)
    timestamp: (Scalars['timestamptz'] | null)
    volume: (Scalars['bigint'] | null)
    __typename: 'candles_max_fields'
}


/** aggregate min on columns */
export interface candles_min_fields {
    candle_average: (Scalars['bigint'] | null)
    candle_duration: (Scalars['Int'] | null)
    close: (Scalars['bigint'] | null)
    cond_market_twap: (Scalars['bigint'] | null)
    high: (Scalars['bigint'] | null)
    low: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    open: (Scalars['bigint'] | null)
    timestamp: (Scalars['timestamptz'] | null)
    volume: (Scalars['bigint'] | null)
    __typename: 'candles_min_fields'
}


/** response of any mutation on the table "candles" */
export interface candles_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: candles[]
    __typename: 'candles_mutation_response'
}


/** select columns of table "candles" */
export type candles_select_column = 'candle_average' | 'candle_duration' | 'close' | 'cond_market_twap' | 'high' | 'low' | 'market_acct' | 'open' | 'timestamp' | 'volume'


/** aggregate stddev on columns */
export interface candles_stddev_fields {
    candle_average: (Scalars['Float'] | null)
    candle_duration: (Scalars['Float'] | null)
    close: (Scalars['Float'] | null)
    cond_market_twap: (Scalars['Float'] | null)
    high: (Scalars['Float'] | null)
    low: (Scalars['Float'] | null)
    open: (Scalars['Float'] | null)
    volume: (Scalars['Float'] | null)
    __typename: 'candles_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface candles_stddev_pop_fields {
    candle_average: (Scalars['Float'] | null)
    candle_duration: (Scalars['Float'] | null)
    close: (Scalars['Float'] | null)
    cond_market_twap: (Scalars['Float'] | null)
    high: (Scalars['Float'] | null)
    low: (Scalars['Float'] | null)
    open: (Scalars['Float'] | null)
    volume: (Scalars['Float'] | null)
    __typename: 'candles_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface candles_stddev_samp_fields {
    candle_average: (Scalars['Float'] | null)
    candle_duration: (Scalars['Float'] | null)
    close: (Scalars['Float'] | null)
    cond_market_twap: (Scalars['Float'] | null)
    high: (Scalars['Float'] | null)
    low: (Scalars['Float'] | null)
    open: (Scalars['Float'] | null)
    volume: (Scalars['Float'] | null)
    __typename: 'candles_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface candles_sum_fields {
    candle_average: (Scalars['bigint'] | null)
    candle_duration: (Scalars['Int'] | null)
    close: (Scalars['bigint'] | null)
    cond_market_twap: (Scalars['bigint'] | null)
    high: (Scalars['bigint'] | null)
    low: (Scalars['bigint'] | null)
    open: (Scalars['bigint'] | null)
    volume: (Scalars['bigint'] | null)
    __typename: 'candles_sum_fields'
}


/** update columns of table "candles" */
export type candles_update_column = 'candle_average' | 'candle_duration' | 'close' | 'cond_market_twap' | 'high' | 'low' | 'market_acct' | 'open' | 'timestamp' | 'volume'


/** aggregate var_pop on columns */
export interface candles_var_pop_fields {
    candle_average: (Scalars['Float'] | null)
    candle_duration: (Scalars['Float'] | null)
    close: (Scalars['Float'] | null)
    cond_market_twap: (Scalars['Float'] | null)
    high: (Scalars['Float'] | null)
    low: (Scalars['Float'] | null)
    open: (Scalars['Float'] | null)
    volume: (Scalars['Float'] | null)
    __typename: 'candles_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface candles_var_samp_fields {
    candle_average: (Scalars['Float'] | null)
    candle_duration: (Scalars['Float'] | null)
    close: (Scalars['Float'] | null)
    cond_market_twap: (Scalars['Float'] | null)
    high: (Scalars['Float'] | null)
    low: (Scalars['Float'] | null)
    open: (Scalars['Float'] | null)
    volume: (Scalars['Float'] | null)
    __typename: 'candles_var_samp_fields'
}


/** aggregate variance on columns */
export interface candles_variance_fields {
    candle_average: (Scalars['Float'] | null)
    candle_duration: (Scalars['Float'] | null)
    close: (Scalars['Float'] | null)
    cond_market_twap: (Scalars['Float'] | null)
    high: (Scalars['Float'] | null)
    low: (Scalars['Float'] | null)
    open: (Scalars['Float'] | null)
    volume: (Scalars['Float'] | null)
    __typename: 'candles_variance_fields'
}


/** columns and relationships of "comments" */
export interface comments {
    /** An object relationship */
    comment: (comments | null)
    comment_id: Scalars['bigint']
    commentor_acct: Scalars['String']
    /** An array relationship */
    comments: comments[]
    /** An aggregate relationship */
    comments_aggregate: comments_aggregate
    content: Scalars['String']
    created_at: Scalars['timestamptz']
    /** An object relationship */
    proposal: proposals
    proposal_acct: Scalars['String']
    /** An array relationship */
    reactions: reactions[]
    /** An aggregate relationship */
    reactions_aggregate: reactions_aggregate
    responding_comment_id: (Scalars['bigint'] | null)
    __typename: 'comments'
}


/** aggregated selection of "comments" */
export interface comments_aggregate {
    aggregate: (comments_aggregate_fields | null)
    nodes: comments[]
    __typename: 'comments_aggregate'
}


/** aggregate fields of "comments" */
export interface comments_aggregate_fields {
    avg: (comments_avg_fields | null)
    count: Scalars['Int']
    max: (comments_max_fields | null)
    min: (comments_min_fields | null)
    stddev: (comments_stddev_fields | null)
    stddev_pop: (comments_stddev_pop_fields | null)
    stddev_samp: (comments_stddev_samp_fields | null)
    sum: (comments_sum_fields | null)
    var_pop: (comments_var_pop_fields | null)
    var_samp: (comments_var_samp_fields | null)
    variance: (comments_variance_fields | null)
    __typename: 'comments_aggregate_fields'
}


/** aggregate avg on columns */
export interface comments_avg_fields {
    comment_id: (Scalars['Float'] | null)
    responding_comment_id: (Scalars['Float'] | null)
    __typename: 'comments_avg_fields'
}


/** unique or primary key constraints on table "comments" */
export type comments_constraint = 'comments_comment_id_unique'


/** aggregate max on columns */
export interface comments_max_fields {
    comment_id: (Scalars['bigint'] | null)
    commentor_acct: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    proposal_acct: (Scalars['String'] | null)
    responding_comment_id: (Scalars['bigint'] | null)
    __typename: 'comments_max_fields'
}


/** aggregate min on columns */
export interface comments_min_fields {
    comment_id: (Scalars['bigint'] | null)
    commentor_acct: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    proposal_acct: (Scalars['String'] | null)
    responding_comment_id: (Scalars['bigint'] | null)
    __typename: 'comments_min_fields'
}


/** response of any mutation on the table "comments" */
export interface comments_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: comments[]
    __typename: 'comments_mutation_response'
}


/** select columns of table "comments" */
export type comments_select_column = 'comment_id' | 'commentor_acct' | 'content' | 'created_at' | 'proposal_acct' | 'responding_comment_id'


/** aggregate stddev on columns */
export interface comments_stddev_fields {
    comment_id: (Scalars['Float'] | null)
    responding_comment_id: (Scalars['Float'] | null)
    __typename: 'comments_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface comments_stddev_pop_fields {
    comment_id: (Scalars['Float'] | null)
    responding_comment_id: (Scalars['Float'] | null)
    __typename: 'comments_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface comments_stddev_samp_fields {
    comment_id: (Scalars['Float'] | null)
    responding_comment_id: (Scalars['Float'] | null)
    __typename: 'comments_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface comments_sum_fields {
    comment_id: (Scalars['bigint'] | null)
    responding_comment_id: (Scalars['bigint'] | null)
    __typename: 'comments_sum_fields'
}


/** update columns of table "comments" */
export type comments_update_column = 'comment_id' | 'commentor_acct' | 'content' | 'created_at' | 'proposal_acct' | 'responding_comment_id'


/** aggregate var_pop on columns */
export interface comments_var_pop_fields {
    comment_id: (Scalars['Float'] | null)
    responding_comment_id: (Scalars['Float'] | null)
    __typename: 'comments_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface comments_var_samp_fields {
    comment_id: (Scalars['Float'] | null)
    responding_comment_id: (Scalars['Float'] | null)
    __typename: 'comments_var_samp_fields'
}


/** aggregate variance on columns */
export interface comments_variance_fields {
    comment_id: (Scalars['Float'] | null)
    responding_comment_id: (Scalars['Float'] | null)
    __typename: 'comments_variance_fields'
}


/** columns and relationships of "conditional_vaults" */
export interface conditional_vaults {
    cond_finalize_token_mint_acct: Scalars['String']
    cond_revert_token_mint_acct: Scalars['String']
    cond_vault_acct: Scalars['String']
    nonce: (Scalars['String'] | null)
    /** An array relationship */
    proposals: proposals[]
    /** An array relationship */
    proposalsByQuoteVault: proposals[]
    /** An aggregate relationship */
    proposalsByQuoteVault_aggregate: proposals_aggregate
    /** An aggregate relationship */
    proposals_aggregate: proposals_aggregate
    settlement_authority: Scalars['String']
    status: (Scalars['String'] | null)
    /** An object relationship */
    token: tokens
    underlying_mint_acct: Scalars['String']
    underlying_token_acct: Scalars['String']
    __typename: 'conditional_vaults'
}


/** aggregated selection of "conditional_vaults" */
export interface conditional_vaults_aggregate {
    aggregate: (conditional_vaults_aggregate_fields | null)
    nodes: conditional_vaults[]
    __typename: 'conditional_vaults_aggregate'
}


/** aggregate fields of "conditional_vaults" */
export interface conditional_vaults_aggregate_fields {
    count: Scalars['Int']
    max: (conditional_vaults_max_fields | null)
    min: (conditional_vaults_min_fields | null)
    __typename: 'conditional_vaults_aggregate_fields'
}


/** unique or primary key constraints on table "conditional_vaults" */
export type conditional_vaults_constraint = 'conditional_vaults_pkey'


/** aggregate max on columns */
export interface conditional_vaults_max_fields {
    cond_finalize_token_mint_acct: (Scalars['String'] | null)
    cond_revert_token_mint_acct: (Scalars['String'] | null)
    cond_vault_acct: (Scalars['String'] | null)
    nonce: (Scalars['String'] | null)
    settlement_authority: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    underlying_mint_acct: (Scalars['String'] | null)
    underlying_token_acct: (Scalars['String'] | null)
    __typename: 'conditional_vaults_max_fields'
}


/** aggregate min on columns */
export interface conditional_vaults_min_fields {
    cond_finalize_token_mint_acct: (Scalars['String'] | null)
    cond_revert_token_mint_acct: (Scalars['String'] | null)
    cond_vault_acct: (Scalars['String'] | null)
    nonce: (Scalars['String'] | null)
    settlement_authority: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    underlying_mint_acct: (Scalars['String'] | null)
    underlying_token_acct: (Scalars['String'] | null)
    __typename: 'conditional_vaults_min_fields'
}


/** response of any mutation on the table "conditional_vaults" */
export interface conditional_vaults_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: conditional_vaults[]
    __typename: 'conditional_vaults_mutation_response'
}


/** select columns of table "conditional_vaults" */
export type conditional_vaults_select_column = 'cond_finalize_token_mint_acct' | 'cond_revert_token_mint_acct' | 'cond_vault_acct' | 'nonce' | 'settlement_authority' | 'status' | 'underlying_mint_acct' | 'underlying_token_acct'


/** update columns of table "conditional_vaults" */
export type conditional_vaults_update_column = 'cond_finalize_token_mint_acct' | 'cond_revert_token_mint_acct' | 'cond_vault_acct' | 'nonce' | 'settlement_authority' | 'status' | 'underlying_mint_acct' | 'underlying_token_acct'


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** columns and relationships of "dao_details" */
export interface dao_details {
    admin_accts: (Scalars['jsonb'] | null)
    creator_acct: (Scalars['String'] | null)
    dao_id: Scalars['bigint']
    /** An array relationship */
    daos: daos[]
    /** An aggregate relationship */
    daos_aggregate: daos_aggregate
    description: (Scalars['String'] | null)
    fail_token_image_url: (Scalars['String'] | null)
    github: (Scalars['String'] | null)
    image_url: (Scalars['String'] | null)
    is_hide: (Scalars['Boolean'] | null)
    lp_token_image_url: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    pass_token_image_url: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    token_image_url: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    x_account: (Scalars['String'] | null)
    __typename: 'dao_details'
}


/** aggregated selection of "dao_details" */
export interface dao_details_aggregate {
    aggregate: (dao_details_aggregate_fields | null)
    nodes: dao_details[]
    __typename: 'dao_details_aggregate'
}


/** aggregate fields of "dao_details" */
export interface dao_details_aggregate_fields {
    avg: (dao_details_avg_fields | null)
    count: Scalars['Int']
    max: (dao_details_max_fields | null)
    min: (dao_details_min_fields | null)
    stddev: (dao_details_stddev_fields | null)
    stddev_pop: (dao_details_stddev_pop_fields | null)
    stddev_samp: (dao_details_stddev_samp_fields | null)
    sum: (dao_details_sum_fields | null)
    var_pop: (dao_details_var_pop_fields | null)
    var_samp: (dao_details_var_samp_fields | null)
    variance: (dao_details_variance_fields | null)
    __typename: 'dao_details_aggregate_fields'
}


/** aggregate avg on columns */
export interface dao_details_avg_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'dao_details_avg_fields'
}


/** unique or primary key constraints on table "dao_details" */
export type dao_details_constraint = 'dao_details_github_unique' | 'dao_details_name_unique' | 'dao_details_pkey' | 'dao_details_slug_unique' | 'dao_details_url_unique' | 'dao_details_x_account_unique' | 'id_name_url'


/** aggregate max on columns */
export interface dao_details_max_fields {
    creator_acct: (Scalars['String'] | null)
    dao_id: (Scalars['bigint'] | null)
    description: (Scalars['String'] | null)
    fail_token_image_url: (Scalars['String'] | null)
    github: (Scalars['String'] | null)
    image_url: (Scalars['String'] | null)
    lp_token_image_url: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    pass_token_image_url: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    token_image_url: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    x_account: (Scalars['String'] | null)
    __typename: 'dao_details_max_fields'
}


/** aggregate min on columns */
export interface dao_details_min_fields {
    creator_acct: (Scalars['String'] | null)
    dao_id: (Scalars['bigint'] | null)
    description: (Scalars['String'] | null)
    fail_token_image_url: (Scalars['String'] | null)
    github: (Scalars['String'] | null)
    image_url: (Scalars['String'] | null)
    lp_token_image_url: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    pass_token_image_url: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    token_image_url: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    x_account: (Scalars['String'] | null)
    __typename: 'dao_details_min_fields'
}


/** response of any mutation on the table "dao_details" */
export interface dao_details_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: dao_details[]
    __typename: 'dao_details_mutation_response'
}


/** select columns of table "dao_details" */
export type dao_details_select_column = 'admin_accts' | 'creator_acct' | 'dao_id' | 'description' | 'fail_token_image_url' | 'github' | 'image_url' | 'is_hide' | 'lp_token_image_url' | 'name' | 'pass_token_image_url' | 'slug' | 'token_image_url' | 'url' | 'x_account'


/** aggregate stddev on columns */
export interface dao_details_stddev_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'dao_details_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface dao_details_stddev_pop_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'dao_details_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface dao_details_stddev_samp_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'dao_details_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface dao_details_sum_fields {
    dao_id: (Scalars['bigint'] | null)
    __typename: 'dao_details_sum_fields'
}


/** update columns of table "dao_details" */
export type dao_details_update_column = 'admin_accts' | 'creator_acct' | 'dao_id' | 'description' | 'fail_token_image_url' | 'github' | 'image_url' | 'is_hide' | 'lp_token_image_url' | 'name' | 'pass_token_image_url' | 'slug' | 'token_image_url' | 'url' | 'x_account'


/** aggregate var_pop on columns */
export interface dao_details_var_pop_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'dao_details_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface dao_details_var_samp_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'dao_details_var_samp_fields'
}


/** aggregate variance on columns */
export interface dao_details_variance_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'dao_details_variance_fields'
}


/** columns and relationships of "daos" */
export interface daos {
    base_acct: Scalars['String']
    created_at: Scalars['timestamptz']
    dao_acct: Scalars['String']
    /** An object relationship */
    dao_detail: (dao_details | null)
    dao_id: (Scalars['bigint'] | null)
    pass_threshold_bps: (Scalars['bigint'] | null)
    /** An object relationship */
    program: programs
    program_acct: Scalars['String']
    /** An array relationship */
    proposals: proposals[]
    /** An aggregate relationship */
    proposals_aggregate: proposals_aggregate
    quote_acct: (Scalars['String'] | null)
    slots_per_proposal: (Scalars['bigint'] | null)
    /** An object relationship */
    token: tokens
    /** An object relationship */
    tokenByBaseAcct: (tokens | null)
    /** An object relationship */
    tokenByQuoteAcct: (tokens | null)
    treasury_acct: (Scalars['String'] | null)
    updated_at: Scalars['timestamptz']
    __typename: 'daos'
}


/** aggregated selection of "daos" */
export interface daos_aggregate {
    aggregate: (daos_aggregate_fields | null)
    nodes: daos[]
    __typename: 'daos_aggregate'
}


/** aggregate fields of "daos" */
export interface daos_aggregate_fields {
    avg: (daos_avg_fields | null)
    count: Scalars['Int']
    max: (daos_max_fields | null)
    min: (daos_min_fields | null)
    stddev: (daos_stddev_fields | null)
    stddev_pop: (daos_stddev_pop_fields | null)
    stddev_samp: (daos_stddev_samp_fields | null)
    sum: (daos_sum_fields | null)
    var_pop: (daos_var_pop_fields | null)
    var_samp: (daos_var_samp_fields | null)
    variance: (daos_variance_fields | null)
    __typename: 'daos_aggregate_fields'
}


/** aggregate avg on columns */
export interface daos_avg_fields {
    dao_id: (Scalars['Float'] | null)
    pass_threshold_bps: (Scalars['Float'] | null)
    slots_per_proposal: (Scalars['Float'] | null)
    __typename: 'daos_avg_fields'
}


/** unique or primary key constraints on table "daos" */
export type daos_constraint = 'dao_acct_program' | 'daos_pkey' | 'daos_treasury_acct_unique'


/** aggregate max on columns */
export interface daos_max_fields {
    base_acct: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    dao_acct: (Scalars['String'] | null)
    dao_id: (Scalars['bigint'] | null)
    pass_threshold_bps: (Scalars['bigint'] | null)
    program_acct: (Scalars['String'] | null)
    quote_acct: (Scalars['String'] | null)
    slots_per_proposal: (Scalars['bigint'] | null)
    treasury_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'daos_max_fields'
}


/** aggregate min on columns */
export interface daos_min_fields {
    base_acct: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    dao_acct: (Scalars['String'] | null)
    dao_id: (Scalars['bigint'] | null)
    pass_threshold_bps: (Scalars['bigint'] | null)
    program_acct: (Scalars['String'] | null)
    quote_acct: (Scalars['String'] | null)
    slots_per_proposal: (Scalars['bigint'] | null)
    treasury_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'daos_min_fields'
}


/** response of any mutation on the table "daos" */
export interface daos_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: daos[]
    __typename: 'daos_mutation_response'
}


/** select columns of table "daos" */
export type daos_select_column = 'base_acct' | 'created_at' | 'dao_acct' | 'dao_id' | 'pass_threshold_bps' | 'program_acct' | 'quote_acct' | 'slots_per_proposal' | 'treasury_acct' | 'updated_at'


/** aggregate stddev on columns */
export interface daos_stddev_fields {
    dao_id: (Scalars['Float'] | null)
    pass_threshold_bps: (Scalars['Float'] | null)
    slots_per_proposal: (Scalars['Float'] | null)
    __typename: 'daos_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface daos_stddev_pop_fields {
    dao_id: (Scalars['Float'] | null)
    pass_threshold_bps: (Scalars['Float'] | null)
    slots_per_proposal: (Scalars['Float'] | null)
    __typename: 'daos_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface daos_stddev_samp_fields {
    dao_id: (Scalars['Float'] | null)
    pass_threshold_bps: (Scalars['Float'] | null)
    slots_per_proposal: (Scalars['Float'] | null)
    __typename: 'daos_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface daos_sum_fields {
    dao_id: (Scalars['bigint'] | null)
    pass_threshold_bps: (Scalars['bigint'] | null)
    slots_per_proposal: (Scalars['bigint'] | null)
    __typename: 'daos_sum_fields'
}


/** update columns of table "daos" */
export type daos_update_column = 'base_acct' | 'created_at' | 'dao_acct' | 'dao_id' | 'pass_threshold_bps' | 'program_acct' | 'quote_acct' | 'slots_per_proposal' | 'treasury_acct' | 'updated_at'


/** aggregate var_pop on columns */
export interface daos_var_pop_fields {
    dao_id: (Scalars['Float'] | null)
    pass_threshold_bps: (Scalars['Float'] | null)
    slots_per_proposal: (Scalars['Float'] | null)
    __typename: 'daos_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface daos_var_samp_fields {
    dao_id: (Scalars['Float'] | null)
    pass_threshold_bps: (Scalars['Float'] | null)
    slots_per_proposal: (Scalars['Float'] | null)
    __typename: 'daos_var_samp_fields'
}


/** aggregate variance on columns */
export interface daos_variance_fields {
    dao_id: (Scalars['Float'] | null)
    pass_threshold_bps: (Scalars['Float'] | null)
    slots_per_proposal: (Scalars['Float'] | null)
    __typename: 'daos_variance_fields'
}


/** columns and relationships of "indexer_account_dependencies" */
export interface indexer_account_dependencies {
    acct: Scalars['String']
    /** An object relationship */
    indexer: indexers
    latest_tx_sig_processed: (Scalars['String'] | null)
    name: Scalars['String']
    status: (Scalars['String'] | null)
    /** An object relationship */
    transaction: (transactions | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'indexer_account_dependencies'
}


/** aggregated selection of "indexer_account_dependencies" */
export interface indexer_account_dependencies_aggregate {
    aggregate: (indexer_account_dependencies_aggregate_fields | null)
    nodes: indexer_account_dependencies[]
    __typename: 'indexer_account_dependencies_aggregate'
}


/** aggregate fields of "indexer_account_dependencies" */
export interface indexer_account_dependencies_aggregate_fields {
    count: Scalars['Int']
    max: (indexer_account_dependencies_max_fields | null)
    min: (indexer_account_dependencies_min_fields | null)
    __typename: 'indexer_account_dependencies_aggregate_fields'
}


/** unique or primary key constraints on table "indexer_account_dependencies" */
export type indexer_account_dependencies_constraint = 'indexer_account_dependencies_name_acct_pk'


/** aggregate max on columns */
export interface indexer_account_dependencies_max_fields {
    acct: (Scalars['String'] | null)
    latest_tx_sig_processed: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'indexer_account_dependencies_max_fields'
}


/** aggregate min on columns */
export interface indexer_account_dependencies_min_fields {
    acct: (Scalars['String'] | null)
    latest_tx_sig_processed: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'indexer_account_dependencies_min_fields'
}


/** response of any mutation on the table "indexer_account_dependencies" */
export interface indexer_account_dependencies_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: indexer_account_dependencies[]
    __typename: 'indexer_account_dependencies_mutation_response'
}


/** select columns of table "indexer_account_dependencies" */
export type indexer_account_dependencies_select_column = 'acct' | 'latest_tx_sig_processed' | 'name' | 'status' | 'updated_at'


/** update columns of table "indexer_account_dependencies" */
export type indexer_account_dependencies_update_column = 'acct' | 'latest_tx_sig_processed' | 'name' | 'status' | 'updated_at'


/** columns and relationships of "indexers" */
export interface indexers {
    implementation: Scalars['String']
    /** An array relationship */
    indexer_account_dependencies: indexer_account_dependencies[]
    /** An aggregate relationship */
    indexer_account_dependencies_aggregate: indexer_account_dependencies_aggregate
    indexer_type: Scalars['String']
    latest_slot_processed: Scalars['bigint']
    name: Scalars['String']
    __typename: 'indexers'
}


/** aggregated selection of "indexers" */
export interface indexers_aggregate {
    aggregate: (indexers_aggregate_fields | null)
    nodes: indexers[]
    __typename: 'indexers_aggregate'
}


/** aggregate fields of "indexers" */
export interface indexers_aggregate_fields {
    avg: (indexers_avg_fields | null)
    count: Scalars['Int']
    max: (indexers_max_fields | null)
    min: (indexers_min_fields | null)
    stddev: (indexers_stddev_fields | null)
    stddev_pop: (indexers_stddev_pop_fields | null)
    stddev_samp: (indexers_stddev_samp_fields | null)
    sum: (indexers_sum_fields | null)
    var_pop: (indexers_var_pop_fields | null)
    var_samp: (indexers_var_samp_fields | null)
    variance: (indexers_variance_fields | null)
    __typename: 'indexers_aggregate_fields'
}


/** aggregate avg on columns */
export interface indexers_avg_fields {
    latest_slot_processed: (Scalars['Float'] | null)
    __typename: 'indexers_avg_fields'
}


/** unique or primary key constraints on table "indexers" */
export type indexers_constraint = 'indexers_pkey'


/** aggregate max on columns */
export interface indexers_max_fields {
    implementation: (Scalars['String'] | null)
    indexer_type: (Scalars['String'] | null)
    latest_slot_processed: (Scalars['bigint'] | null)
    name: (Scalars['String'] | null)
    __typename: 'indexers_max_fields'
}


/** aggregate min on columns */
export interface indexers_min_fields {
    implementation: (Scalars['String'] | null)
    indexer_type: (Scalars['String'] | null)
    latest_slot_processed: (Scalars['bigint'] | null)
    name: (Scalars['String'] | null)
    __typename: 'indexers_min_fields'
}


/** response of any mutation on the table "indexers" */
export interface indexers_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: indexers[]
    __typename: 'indexers_mutation_response'
}


/** select columns of table "indexers" */
export type indexers_select_column = 'implementation' | 'indexer_type' | 'latest_slot_processed' | 'name'


/** aggregate stddev on columns */
export interface indexers_stddev_fields {
    latest_slot_processed: (Scalars['Float'] | null)
    __typename: 'indexers_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface indexers_stddev_pop_fields {
    latest_slot_processed: (Scalars['Float'] | null)
    __typename: 'indexers_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface indexers_stddev_samp_fields {
    latest_slot_processed: (Scalars['Float'] | null)
    __typename: 'indexers_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface indexers_sum_fields {
    latest_slot_processed: (Scalars['bigint'] | null)
    __typename: 'indexers_sum_fields'
}


/** update columns of table "indexers" */
export type indexers_update_column = 'implementation' | 'indexer_type' | 'latest_slot_processed' | 'name'


/** aggregate var_pop on columns */
export interface indexers_var_pop_fields {
    latest_slot_processed: (Scalars['Float'] | null)
    __typename: 'indexers_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface indexers_var_samp_fields {
    latest_slot_processed: (Scalars['Float'] | null)
    __typename: 'indexers_var_samp_fields'
}


/** aggregate variance on columns */
export interface indexers_variance_fields {
    latest_slot_processed: (Scalars['Float'] | null)
    __typename: 'indexers_variance_fields'
}


/** columns and relationships of "makes" */
export interface makes {
    filled_base_amount: Scalars['bigint']
    is_active: Scalars['Boolean']
    /** An object relationship */
    market: markets
    market_acct: Scalars['String']
    /** An object relationship */
    order: orders
    order_tx_sig: Scalars['String']
    quote_price: Scalars['numeric']
    /** An array relationship */
    takes: takes[]
    /** An aggregate relationship */
    takes_aggregate: takes_aggregate
    unfilled_base_amount: Scalars['bigint']
    updated_at: Scalars['timestamptz']
    __typename: 'makes'
}


/** aggregated selection of "makes" */
export interface makes_aggregate {
    aggregate: (makes_aggregate_fields | null)
    nodes: makes[]
    __typename: 'makes_aggregate'
}


/** aggregate fields of "makes" */
export interface makes_aggregate_fields {
    avg: (makes_avg_fields | null)
    count: Scalars['Int']
    max: (makes_max_fields | null)
    min: (makes_min_fields | null)
    stddev: (makes_stddev_fields | null)
    stddev_pop: (makes_stddev_pop_fields | null)
    stddev_samp: (makes_stddev_samp_fields | null)
    sum: (makes_sum_fields | null)
    var_pop: (makes_var_pop_fields | null)
    var_samp: (makes_var_samp_fields | null)
    variance: (makes_variance_fields | null)
    __typename: 'makes_aggregate_fields'
}


/** aggregate avg on columns */
export interface makes_avg_fields {
    filled_base_amount: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'makes_avg_fields'
}


/** unique or primary key constraints on table "makes" */
export type makes_constraint = 'makes_pkey'


/** aggregate max on columns */
export interface makes_max_fields {
    filled_base_amount: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    order_tx_sig: (Scalars['String'] | null)
    quote_price: (Scalars['numeric'] | null)
    unfilled_base_amount: (Scalars['bigint'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'makes_max_fields'
}


/** aggregate min on columns */
export interface makes_min_fields {
    filled_base_amount: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    order_tx_sig: (Scalars['String'] | null)
    quote_price: (Scalars['numeric'] | null)
    unfilled_base_amount: (Scalars['bigint'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'makes_min_fields'
}


/** response of any mutation on the table "makes" */
export interface makes_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: makes[]
    __typename: 'makes_mutation_response'
}


/** select columns of table "makes" */
export type makes_select_column = 'filled_base_amount' | 'is_active' | 'market_acct' | 'order_tx_sig' | 'quote_price' | 'unfilled_base_amount' | 'updated_at'


/** select "makes_aggregate_bool_exp_bool_and_arguments_columns" columns of table "makes" */
export type makes_select_column_makes_aggregate_bool_exp_bool_and_arguments_columns = 'is_active'


/** select "makes_aggregate_bool_exp_bool_or_arguments_columns" columns of table "makes" */
export type makes_select_column_makes_aggregate_bool_exp_bool_or_arguments_columns = 'is_active'


/** aggregate stddev on columns */
export interface makes_stddev_fields {
    filled_base_amount: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'makes_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface makes_stddev_pop_fields {
    filled_base_amount: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'makes_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface makes_stddev_samp_fields {
    filled_base_amount: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'makes_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface makes_sum_fields {
    filled_base_amount: (Scalars['bigint'] | null)
    quote_price: (Scalars['numeric'] | null)
    unfilled_base_amount: (Scalars['bigint'] | null)
    __typename: 'makes_sum_fields'
}


/** update columns of table "makes" */
export type makes_update_column = 'filled_base_amount' | 'is_active' | 'market_acct' | 'order_tx_sig' | 'quote_price' | 'unfilled_base_amount' | 'updated_at'


/** aggregate var_pop on columns */
export interface makes_var_pop_fields {
    filled_base_amount: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'makes_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface makes_var_samp_fields {
    filled_base_amount: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'makes_var_samp_fields'
}


/** aggregate variance on columns */
export interface makes_variance_fields {
    filled_base_amount: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'makes_variance_fields'
}


/** columns and relationships of "markets" */
export interface markets {
    active_slot: (Scalars['bigint'] | null)
    asks_token_acct: (Scalars['String'] | null)
    base_lot_size: Scalars['bigint']
    base_maker_fee: Scalars['smallint']
    base_mint_acct: Scalars['String']
    base_taker_fee: Scalars['smallint']
    bids_token_acct: (Scalars['String'] | null)
    /** An array relationship */
    candles: candles[]
    /** An aggregate relationship */
    candles_aggregate: candles_aggregate
    create_tx_sig: Scalars['String']
    created_at: Scalars['timestamptz']
    inactive_slot: (Scalars['bigint'] | null)
    /** An array relationship */
    makes: makes[]
    /** An aggregate relationship */
    makes_aggregate: makes_aggregate
    market_acct: Scalars['String']
    market_type: Scalars['String']
    /** An array relationship */
    orders: orders[]
    /** An aggregate relationship */
    orders_aggregate: orders_aggregate
    /** An array relationship */
    prices: prices[]
    /** An aggregate relationship */
    prices_aggregate: prices_aggregate
    /** An object relationship */
    proposal: (proposals | null)
    proposal_acct: (Scalars['String'] | null)
    quote_lot_size: Scalars['bigint']
    quote_maker_fee: Scalars['smallint']
    quote_mint_acct: Scalars['String']
    quote_taker_fee: Scalars['smallint']
    quote_tick_size: Scalars['bigint']
    /** An array relationship */
    takes: takes[]
    /** An aggregate relationship */
    takes_aggregate: takes_aggregate
    /** An object relationship */
    token: tokens
    /** An object relationship */
    tokenAcctByAsksTokenAcct: (token_accts | null)
    /** An object relationship */
    tokenAcctByBidsTokenAcct: (token_accts | null)
    /** An object relationship */
    tokenByBaseMintAcct: (tokens | null)
    /** An object relationship */
    tokenByQuoteMintAcct: tokens
    /** An object relationship */
    token_acct: (token_accts | null)
    /** An array relationship */
    twaps: twaps[]
    /** An aggregate relationship */
    twaps_aggregate: twaps_aggregate
    __typename: 'markets'
}


/** aggregated selection of "markets" */
export interface markets_aggregate {
    aggregate: (markets_aggregate_fields | null)
    nodes: markets[]
    __typename: 'markets_aggregate'
}


/** aggregate fields of "markets" */
export interface markets_aggregate_fields {
    avg: (markets_avg_fields | null)
    count: Scalars['Int']
    max: (markets_max_fields | null)
    min: (markets_min_fields | null)
    stddev: (markets_stddev_fields | null)
    stddev_pop: (markets_stddev_pop_fields | null)
    stddev_samp: (markets_stddev_samp_fields | null)
    sum: (markets_sum_fields | null)
    var_pop: (markets_var_pop_fields | null)
    var_samp: (markets_var_samp_fields | null)
    variance: (markets_variance_fields | null)
    __typename: 'markets_aggregate_fields'
}


/** aggregate avg on columns */
export interface markets_avg_fields {
    active_slot: (Scalars['Float'] | null)
    base_lot_size: (Scalars['Float'] | null)
    base_maker_fee: (Scalars['Float'] | null)
    base_taker_fee: (Scalars['Float'] | null)
    inactive_slot: (Scalars['Float'] | null)
    quote_lot_size: (Scalars['Float'] | null)
    quote_maker_fee: (Scalars['Float'] | null)
    quote_taker_fee: (Scalars['Float'] | null)
    quote_tick_size: (Scalars['Float'] | null)
    __typename: 'markets_avg_fields'
}


/** unique or primary key constraints on table "markets" */
export type markets_constraint = 'markets_pkey'


/** aggregate max on columns */
export interface markets_max_fields {
    active_slot: (Scalars['bigint'] | null)
    asks_token_acct: (Scalars['String'] | null)
    base_lot_size: (Scalars['bigint'] | null)
    base_maker_fee: (Scalars['smallint'] | null)
    base_mint_acct: (Scalars['String'] | null)
    base_taker_fee: (Scalars['smallint'] | null)
    bids_token_acct: (Scalars['String'] | null)
    create_tx_sig: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    inactive_slot: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    market_type: (Scalars['String'] | null)
    proposal_acct: (Scalars['String'] | null)
    quote_lot_size: (Scalars['bigint'] | null)
    quote_maker_fee: (Scalars['smallint'] | null)
    quote_mint_acct: (Scalars['String'] | null)
    quote_taker_fee: (Scalars['smallint'] | null)
    quote_tick_size: (Scalars['bigint'] | null)
    __typename: 'markets_max_fields'
}


/** aggregate min on columns */
export interface markets_min_fields {
    active_slot: (Scalars['bigint'] | null)
    asks_token_acct: (Scalars['String'] | null)
    base_lot_size: (Scalars['bigint'] | null)
    base_maker_fee: (Scalars['smallint'] | null)
    base_mint_acct: (Scalars['String'] | null)
    base_taker_fee: (Scalars['smallint'] | null)
    bids_token_acct: (Scalars['String'] | null)
    create_tx_sig: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    inactive_slot: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    market_type: (Scalars['String'] | null)
    proposal_acct: (Scalars['String'] | null)
    quote_lot_size: (Scalars['bigint'] | null)
    quote_maker_fee: (Scalars['smallint'] | null)
    quote_mint_acct: (Scalars['String'] | null)
    quote_taker_fee: (Scalars['smallint'] | null)
    quote_tick_size: (Scalars['bigint'] | null)
    __typename: 'markets_min_fields'
}


/** response of any mutation on the table "markets" */
export interface markets_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: markets[]
    __typename: 'markets_mutation_response'
}


/** select columns of table "markets" */
export type markets_select_column = 'active_slot' | 'asks_token_acct' | 'base_lot_size' | 'base_maker_fee' | 'base_mint_acct' | 'base_taker_fee' | 'bids_token_acct' | 'create_tx_sig' | 'created_at' | 'inactive_slot' | 'market_acct' | 'market_type' | 'proposal_acct' | 'quote_lot_size' | 'quote_maker_fee' | 'quote_mint_acct' | 'quote_taker_fee' | 'quote_tick_size'


/** aggregate stddev on columns */
export interface markets_stddev_fields {
    active_slot: (Scalars['Float'] | null)
    base_lot_size: (Scalars['Float'] | null)
    base_maker_fee: (Scalars['Float'] | null)
    base_taker_fee: (Scalars['Float'] | null)
    inactive_slot: (Scalars['Float'] | null)
    quote_lot_size: (Scalars['Float'] | null)
    quote_maker_fee: (Scalars['Float'] | null)
    quote_taker_fee: (Scalars['Float'] | null)
    quote_tick_size: (Scalars['Float'] | null)
    __typename: 'markets_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface markets_stddev_pop_fields {
    active_slot: (Scalars['Float'] | null)
    base_lot_size: (Scalars['Float'] | null)
    base_maker_fee: (Scalars['Float'] | null)
    base_taker_fee: (Scalars['Float'] | null)
    inactive_slot: (Scalars['Float'] | null)
    quote_lot_size: (Scalars['Float'] | null)
    quote_maker_fee: (Scalars['Float'] | null)
    quote_taker_fee: (Scalars['Float'] | null)
    quote_tick_size: (Scalars['Float'] | null)
    __typename: 'markets_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface markets_stddev_samp_fields {
    active_slot: (Scalars['Float'] | null)
    base_lot_size: (Scalars['Float'] | null)
    base_maker_fee: (Scalars['Float'] | null)
    base_taker_fee: (Scalars['Float'] | null)
    inactive_slot: (Scalars['Float'] | null)
    quote_lot_size: (Scalars['Float'] | null)
    quote_maker_fee: (Scalars['Float'] | null)
    quote_taker_fee: (Scalars['Float'] | null)
    quote_tick_size: (Scalars['Float'] | null)
    __typename: 'markets_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface markets_sum_fields {
    active_slot: (Scalars['bigint'] | null)
    base_lot_size: (Scalars['bigint'] | null)
    base_maker_fee: (Scalars['smallint'] | null)
    base_taker_fee: (Scalars['smallint'] | null)
    inactive_slot: (Scalars['bigint'] | null)
    quote_lot_size: (Scalars['bigint'] | null)
    quote_maker_fee: (Scalars['smallint'] | null)
    quote_taker_fee: (Scalars['smallint'] | null)
    quote_tick_size: (Scalars['bigint'] | null)
    __typename: 'markets_sum_fields'
}


/** update columns of table "markets" */
export type markets_update_column = 'active_slot' | 'asks_token_acct' | 'base_lot_size' | 'base_maker_fee' | 'base_mint_acct' | 'base_taker_fee' | 'bids_token_acct' | 'create_tx_sig' | 'created_at' | 'inactive_slot' | 'market_acct' | 'market_type' | 'proposal_acct' | 'quote_lot_size' | 'quote_maker_fee' | 'quote_mint_acct' | 'quote_taker_fee' | 'quote_tick_size'


/** aggregate var_pop on columns */
export interface markets_var_pop_fields {
    active_slot: (Scalars['Float'] | null)
    base_lot_size: (Scalars['Float'] | null)
    base_maker_fee: (Scalars['Float'] | null)
    base_taker_fee: (Scalars['Float'] | null)
    inactive_slot: (Scalars['Float'] | null)
    quote_lot_size: (Scalars['Float'] | null)
    quote_maker_fee: (Scalars['Float'] | null)
    quote_taker_fee: (Scalars['Float'] | null)
    quote_tick_size: (Scalars['Float'] | null)
    __typename: 'markets_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface markets_var_samp_fields {
    active_slot: (Scalars['Float'] | null)
    base_lot_size: (Scalars['Float'] | null)
    base_maker_fee: (Scalars['Float'] | null)
    base_taker_fee: (Scalars['Float'] | null)
    inactive_slot: (Scalars['Float'] | null)
    quote_lot_size: (Scalars['Float'] | null)
    quote_maker_fee: (Scalars['Float'] | null)
    quote_taker_fee: (Scalars['Float'] | null)
    quote_tick_size: (Scalars['Float'] | null)
    __typename: 'markets_var_samp_fields'
}


/** aggregate variance on columns */
export interface markets_variance_fields {
    active_slot: (Scalars['Float'] | null)
    base_lot_size: (Scalars['Float'] | null)
    base_maker_fee: (Scalars['Float'] | null)
    base_taker_fee: (Scalars['Float'] | null)
    inactive_slot: (Scalars['Float'] | null)
    quote_lot_size: (Scalars['Float'] | null)
    quote_maker_fee: (Scalars['Float'] | null)
    quote_taker_fee: (Scalars['Float'] | null)
    quote_tick_size: (Scalars['Float'] | null)
    __typename: 'markets_variance_fields'
}


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "candles" */
    delete_candles: (candles_mutation_response | null)
    /** delete single row from the table: "candles" */
    delete_candles_by_pk: (candles | null)
    /** delete data from the table: "comments" */
    delete_comments: (comments_mutation_response | null)
    /** delete single row from the table: "comments" */
    delete_comments_by_pk: (comments | null)
    /** delete data from the table: "conditional_vaults" */
    delete_conditional_vaults: (conditional_vaults_mutation_response | null)
    /** delete single row from the table: "conditional_vaults" */
    delete_conditional_vaults_by_pk: (conditional_vaults | null)
    /** delete data from the table: "dao_details" */
    delete_dao_details: (dao_details_mutation_response | null)
    /** delete single row from the table: "dao_details" */
    delete_dao_details_by_pk: (dao_details | null)
    /** delete data from the table: "daos" */
    delete_daos: (daos_mutation_response | null)
    /** delete single row from the table: "daos" */
    delete_daos_by_pk: (daos | null)
    /** delete data from the table: "indexer_account_dependencies" */
    delete_indexer_account_dependencies: (indexer_account_dependencies_mutation_response | null)
    /** delete single row from the table: "indexer_account_dependencies" */
    delete_indexer_account_dependencies_by_pk: (indexer_account_dependencies | null)
    /** delete data from the table: "indexers" */
    delete_indexers: (indexers_mutation_response | null)
    /** delete single row from the table: "indexers" */
    delete_indexers_by_pk: (indexers | null)
    /** delete data from the table: "makes" */
    delete_makes: (makes_mutation_response | null)
    /** delete single row from the table: "makes" */
    delete_makes_by_pk: (makes | null)
    /** delete data from the table: "markets" */
    delete_markets: (markets_mutation_response | null)
    /** delete single row from the table: "markets" */
    delete_markets_by_pk: (markets | null)
    /** delete data from the table: "orders" */
    delete_orders: (orders_mutation_response | null)
    /** delete single row from the table: "orders" */
    delete_orders_by_pk: (orders | null)
    /** delete data from the table: "prices" */
    delete_prices: (prices_mutation_response | null)
    /** delete single row from the table: "prices" */
    delete_prices_by_pk: (prices | null)
    /** delete data from the table: "program_system" */
    delete_program_system: (program_system_mutation_response | null)
    /** delete single row from the table: "program_system" */
    delete_program_system_by_pk: (program_system | null)
    /** delete data from the table: "programs" */
    delete_programs: (programs_mutation_response | null)
    /** delete single row from the table: "programs" */
    delete_programs_by_pk: (programs | null)
    /** delete data from the table: "proposal_bars" */
    delete_proposal_bars: (proposal_bars_mutation_response | null)
    /** delete single row from the table: "proposal_bars" */
    delete_proposal_bars_by_pk: (proposal_bars | null)
    /** delete data from the table: "proposal_details" */
    delete_proposal_details: (proposal_details_mutation_response | null)
    /** delete single row from the table: "proposal_details" */
    delete_proposal_details_by_pk: (proposal_details | null)
    /** delete data from the table: "proposals" */
    delete_proposals: (proposals_mutation_response | null)
    /** delete single row from the table: "proposals" */
    delete_proposals_by_pk: (proposals | null)
    /** delete data from the table: "reactions" */
    delete_reactions: (reactions_mutation_response | null)
    /** delete single row from the table: "reactions" */
    delete_reactions_by_pk: (reactions | null)
    /** delete data from the table: "sessions" */
    delete_sessions: (sessions_mutation_response | null)
    /** delete single row from the table: "sessions" */
    delete_sessions_by_pk: (sessions | null)
    /** delete data from the table: "takes" */
    delete_takes: (takes_mutation_response | null)
    /** delete single row from the table: "takes" */
    delete_takes_by_pk: (takes | null)
    /** delete data from the table: "token_acct_balances" */
    delete_token_acct_balances: (token_acct_balances_mutation_response | null)
    /** delete single row from the table: "token_acct_balances" */
    delete_token_acct_balances_by_pk: (token_acct_balances | null)
    /** delete data from the table: "token_accts" */
    delete_token_accts: (token_accts_mutation_response | null)
    /** delete single row from the table: "token_accts" */
    delete_token_accts_by_pk: (token_accts | null)
    /** delete data from the table: "tokens" */
    delete_tokens: (tokens_mutation_response | null)
    /** delete single row from the table: "tokens" */
    delete_tokens_by_pk: (tokens | null)
    /** delete data from the table: "transaction_watcher_transactions" */
    delete_transaction_watcher_transactions: (transaction_watcher_transactions_mutation_response | null)
    /** delete single row from the table: "transaction_watcher_transactions" */
    delete_transaction_watcher_transactions_by_pk: (transaction_watcher_transactions | null)
    /** delete data from the table: "transaction_watchers" */
    delete_transaction_watchers: (transaction_watchers_mutation_response | null)
    /** delete single row from the table: "transaction_watchers" */
    delete_transaction_watchers_by_pk: (transaction_watchers | null)
    /** delete data from the table: "transactions" */
    delete_transactions: (transactions_mutation_response | null)
    /** delete single row from the table: "transactions" */
    delete_transactions_by_pk: (transactions | null)
    /** delete data from the table: "twaps" */
    delete_twaps: (twaps_mutation_response | null)
    /** delete single row from the table: "twaps" */
    delete_twaps_by_pk: (twaps | null)
    /** delete data from the table: "users" */
    delete_users: (users_mutation_response | null)
    /** delete single row from the table: "users" */
    delete_users_by_pk: (users | null)
    /** insert data into the table: "candles" */
    insert_candles: (candles_mutation_response | null)
    /** insert a single row into the table: "candles" */
    insert_candles_one: (candles | null)
    /** insert data into the table: "comments" */
    insert_comments: (comments_mutation_response | null)
    /** insert a single row into the table: "comments" */
    insert_comments_one: (comments | null)
    /** insert data into the table: "conditional_vaults" */
    insert_conditional_vaults: (conditional_vaults_mutation_response | null)
    /** insert a single row into the table: "conditional_vaults" */
    insert_conditional_vaults_one: (conditional_vaults | null)
    /** insert data into the table: "dao_details" */
    insert_dao_details: (dao_details_mutation_response | null)
    /** insert a single row into the table: "dao_details" */
    insert_dao_details_one: (dao_details | null)
    /** insert data into the table: "daos" */
    insert_daos: (daos_mutation_response | null)
    /** insert a single row into the table: "daos" */
    insert_daos_one: (daos | null)
    /** insert data into the table: "indexer_account_dependencies" */
    insert_indexer_account_dependencies: (indexer_account_dependencies_mutation_response | null)
    /** insert a single row into the table: "indexer_account_dependencies" */
    insert_indexer_account_dependencies_one: (indexer_account_dependencies | null)
    /** insert data into the table: "indexers" */
    insert_indexers: (indexers_mutation_response | null)
    /** insert a single row into the table: "indexers" */
    insert_indexers_one: (indexers | null)
    /** insert data into the table: "makes" */
    insert_makes: (makes_mutation_response | null)
    /** insert a single row into the table: "makes" */
    insert_makes_one: (makes | null)
    /** insert data into the table: "markets" */
    insert_markets: (markets_mutation_response | null)
    /** insert a single row into the table: "markets" */
    insert_markets_one: (markets | null)
    /** insert data into the table: "orders" */
    insert_orders: (orders_mutation_response | null)
    /** insert a single row into the table: "orders" */
    insert_orders_one: (orders | null)
    /** insert data into the table: "prices" */
    insert_prices: (prices_mutation_response | null)
    /** insert a single row into the table: "prices" */
    insert_prices_one: (prices | null)
    /** insert data into the table: "program_system" */
    insert_program_system: (program_system_mutation_response | null)
    /** insert a single row into the table: "program_system" */
    insert_program_system_one: (program_system | null)
    /** insert data into the table: "programs" */
    insert_programs: (programs_mutation_response | null)
    /** insert a single row into the table: "programs" */
    insert_programs_one: (programs | null)
    /** insert data into the table: "proposal_bars" */
    insert_proposal_bars: (proposal_bars_mutation_response | null)
    /** insert a single row into the table: "proposal_bars" */
    insert_proposal_bars_one: (proposal_bars | null)
    /** insert data into the table: "proposal_details" */
    insert_proposal_details: (proposal_details_mutation_response | null)
    /** insert a single row into the table: "proposal_details" */
    insert_proposal_details_one: (proposal_details | null)
    /** insert data into the table: "proposals" */
    insert_proposals: (proposals_mutation_response | null)
    /** insert a single row into the table: "proposals" */
    insert_proposals_one: (proposals | null)
    /** insert data into the table: "reactions" */
    insert_reactions: (reactions_mutation_response | null)
    /** insert a single row into the table: "reactions" */
    insert_reactions_one: (reactions | null)
    /** insert data into the table: "sessions" */
    insert_sessions: (sessions_mutation_response | null)
    /** insert a single row into the table: "sessions" */
    insert_sessions_one: (sessions | null)
    /** insert data into the table: "takes" */
    insert_takes: (takes_mutation_response | null)
    /** insert a single row into the table: "takes" */
    insert_takes_one: (takes | null)
    /** insert data into the table: "token_acct_balances" */
    insert_token_acct_balances: (token_acct_balances_mutation_response | null)
    /** insert a single row into the table: "token_acct_balances" */
    insert_token_acct_balances_one: (token_acct_balances | null)
    /** insert data into the table: "token_accts" */
    insert_token_accts: (token_accts_mutation_response | null)
    /** insert a single row into the table: "token_accts" */
    insert_token_accts_one: (token_accts | null)
    /** insert data into the table: "tokens" */
    insert_tokens: (tokens_mutation_response | null)
    /** insert a single row into the table: "tokens" */
    insert_tokens_one: (tokens | null)
    /** insert data into the table: "transaction_watcher_transactions" */
    insert_transaction_watcher_transactions: (transaction_watcher_transactions_mutation_response | null)
    /** insert a single row into the table: "transaction_watcher_transactions" */
    insert_transaction_watcher_transactions_one: (transaction_watcher_transactions | null)
    /** insert data into the table: "transaction_watchers" */
    insert_transaction_watchers: (transaction_watchers_mutation_response | null)
    /** insert a single row into the table: "transaction_watchers" */
    insert_transaction_watchers_one: (transaction_watchers | null)
    /** insert data into the table: "transactions" */
    insert_transactions: (transactions_mutation_response | null)
    /** insert a single row into the table: "transactions" */
    insert_transactions_one: (transactions | null)
    /** insert data into the table: "twaps" */
    insert_twaps: (twaps_mutation_response | null)
    /** insert a single row into the table: "twaps" */
    insert_twaps_one: (twaps | null)
    /** insert data into the table: "users" */
    insert_users: (users_mutation_response | null)
    /** insert a single row into the table: "users" */
    insert_users_one: (users | null)
    /** update data of the table: "candles" */
    update_candles: (candles_mutation_response | null)
    /** update single row of the table: "candles" */
    update_candles_by_pk: (candles | null)
    /** update multiples rows of table: "candles" */
    update_candles_many: ((candles_mutation_response | null)[] | null)
    /** update data of the table: "comments" */
    update_comments: (comments_mutation_response | null)
    /** update single row of the table: "comments" */
    update_comments_by_pk: (comments | null)
    /** update multiples rows of table: "comments" */
    update_comments_many: ((comments_mutation_response | null)[] | null)
    /** update data of the table: "conditional_vaults" */
    update_conditional_vaults: (conditional_vaults_mutation_response | null)
    /** update single row of the table: "conditional_vaults" */
    update_conditional_vaults_by_pk: (conditional_vaults | null)
    /** update multiples rows of table: "conditional_vaults" */
    update_conditional_vaults_many: ((conditional_vaults_mutation_response | null)[] | null)
    /** update data of the table: "dao_details" */
    update_dao_details: (dao_details_mutation_response | null)
    /** update single row of the table: "dao_details" */
    update_dao_details_by_pk: (dao_details | null)
    /** update multiples rows of table: "dao_details" */
    update_dao_details_many: ((dao_details_mutation_response | null)[] | null)
    /** update data of the table: "daos" */
    update_daos: (daos_mutation_response | null)
    /** update single row of the table: "daos" */
    update_daos_by_pk: (daos | null)
    /** update multiples rows of table: "daos" */
    update_daos_many: ((daos_mutation_response | null)[] | null)
    /** update data of the table: "indexer_account_dependencies" */
    update_indexer_account_dependencies: (indexer_account_dependencies_mutation_response | null)
    /** update single row of the table: "indexer_account_dependencies" */
    update_indexer_account_dependencies_by_pk: (indexer_account_dependencies | null)
    /** update multiples rows of table: "indexer_account_dependencies" */
    update_indexer_account_dependencies_many: ((indexer_account_dependencies_mutation_response | null)[] | null)
    /** update data of the table: "indexers" */
    update_indexers: (indexers_mutation_response | null)
    /** update single row of the table: "indexers" */
    update_indexers_by_pk: (indexers | null)
    /** update multiples rows of table: "indexers" */
    update_indexers_many: ((indexers_mutation_response | null)[] | null)
    /** update data of the table: "makes" */
    update_makes: (makes_mutation_response | null)
    /** update single row of the table: "makes" */
    update_makes_by_pk: (makes | null)
    /** update multiples rows of table: "makes" */
    update_makes_many: ((makes_mutation_response | null)[] | null)
    /** update data of the table: "markets" */
    update_markets: (markets_mutation_response | null)
    /** update single row of the table: "markets" */
    update_markets_by_pk: (markets | null)
    /** update multiples rows of table: "markets" */
    update_markets_many: ((markets_mutation_response | null)[] | null)
    /** update data of the table: "orders" */
    update_orders: (orders_mutation_response | null)
    /** update single row of the table: "orders" */
    update_orders_by_pk: (orders | null)
    /** update multiples rows of table: "orders" */
    update_orders_many: ((orders_mutation_response | null)[] | null)
    /** update data of the table: "prices" */
    update_prices: (prices_mutation_response | null)
    /** update single row of the table: "prices" */
    update_prices_by_pk: (prices | null)
    /** update multiples rows of table: "prices" */
    update_prices_many: ((prices_mutation_response | null)[] | null)
    /** update data of the table: "program_system" */
    update_program_system: (program_system_mutation_response | null)
    /** update single row of the table: "program_system" */
    update_program_system_by_pk: (program_system | null)
    /** update multiples rows of table: "program_system" */
    update_program_system_many: ((program_system_mutation_response | null)[] | null)
    /** update data of the table: "programs" */
    update_programs: (programs_mutation_response | null)
    /** update single row of the table: "programs" */
    update_programs_by_pk: (programs | null)
    /** update multiples rows of table: "programs" */
    update_programs_many: ((programs_mutation_response | null)[] | null)
    /** update data of the table: "proposal_bars" */
    update_proposal_bars: (proposal_bars_mutation_response | null)
    /** update single row of the table: "proposal_bars" */
    update_proposal_bars_by_pk: (proposal_bars | null)
    /** update multiples rows of table: "proposal_bars" */
    update_proposal_bars_many: ((proposal_bars_mutation_response | null)[] | null)
    /** update data of the table: "proposal_details" */
    update_proposal_details: (proposal_details_mutation_response | null)
    /** update single row of the table: "proposal_details" */
    update_proposal_details_by_pk: (proposal_details | null)
    /** update multiples rows of table: "proposal_details" */
    update_proposal_details_many: ((proposal_details_mutation_response | null)[] | null)
    /** update data of the table: "proposals" */
    update_proposals: (proposals_mutation_response | null)
    /** update single row of the table: "proposals" */
    update_proposals_by_pk: (proposals | null)
    /** update multiples rows of table: "proposals" */
    update_proposals_many: ((proposals_mutation_response | null)[] | null)
    /** update data of the table: "reactions" */
    update_reactions: (reactions_mutation_response | null)
    /** update single row of the table: "reactions" */
    update_reactions_by_pk: (reactions | null)
    /** update multiples rows of table: "reactions" */
    update_reactions_many: ((reactions_mutation_response | null)[] | null)
    /** update data of the table: "sessions" */
    update_sessions: (sessions_mutation_response | null)
    /** update single row of the table: "sessions" */
    update_sessions_by_pk: (sessions | null)
    /** update multiples rows of table: "sessions" */
    update_sessions_many: ((sessions_mutation_response | null)[] | null)
    /** update data of the table: "takes" */
    update_takes: (takes_mutation_response | null)
    /** update single row of the table: "takes" */
    update_takes_by_pk: (takes | null)
    /** update multiples rows of table: "takes" */
    update_takes_many: ((takes_mutation_response | null)[] | null)
    /** update data of the table: "token_acct_balances" */
    update_token_acct_balances: (token_acct_balances_mutation_response | null)
    /** update single row of the table: "token_acct_balances" */
    update_token_acct_balances_by_pk: (token_acct_balances | null)
    /** update multiples rows of table: "token_acct_balances" */
    update_token_acct_balances_many: ((token_acct_balances_mutation_response | null)[] | null)
    /** update data of the table: "token_accts" */
    update_token_accts: (token_accts_mutation_response | null)
    /** update single row of the table: "token_accts" */
    update_token_accts_by_pk: (token_accts | null)
    /** update multiples rows of table: "token_accts" */
    update_token_accts_many: ((token_accts_mutation_response | null)[] | null)
    /** update data of the table: "tokens" */
    update_tokens: (tokens_mutation_response | null)
    /** update single row of the table: "tokens" */
    update_tokens_by_pk: (tokens | null)
    /** update multiples rows of table: "tokens" */
    update_tokens_many: ((tokens_mutation_response | null)[] | null)
    /** update data of the table: "transaction_watcher_transactions" */
    update_transaction_watcher_transactions: (transaction_watcher_transactions_mutation_response | null)
    /** update single row of the table: "transaction_watcher_transactions" */
    update_transaction_watcher_transactions_by_pk: (transaction_watcher_transactions | null)
    /** update multiples rows of table: "transaction_watcher_transactions" */
    update_transaction_watcher_transactions_many: ((transaction_watcher_transactions_mutation_response | null)[] | null)
    /** update data of the table: "transaction_watchers" */
    update_transaction_watchers: (transaction_watchers_mutation_response | null)
    /** update single row of the table: "transaction_watchers" */
    update_transaction_watchers_by_pk: (transaction_watchers | null)
    /** update multiples rows of table: "transaction_watchers" */
    update_transaction_watchers_many: ((transaction_watchers_mutation_response | null)[] | null)
    /** update data of the table: "transactions" */
    update_transactions: (transactions_mutation_response | null)
    /** update single row of the table: "transactions" */
    update_transactions_by_pk: (transactions | null)
    /** update multiples rows of table: "transactions" */
    update_transactions_many: ((transactions_mutation_response | null)[] | null)
    /** update data of the table: "twaps" */
    update_twaps: (twaps_mutation_response | null)
    /** update single row of the table: "twaps" */
    update_twaps_by_pk: (twaps | null)
    /** update multiples rows of table: "twaps" */
    update_twaps_many: ((twaps_mutation_response | null)[] | null)
    /** update data of the table: "users" */
    update_users: (users_mutation_response | null)
    /** update single row of the table: "users" */
    update_users_by_pk: (users | null)
    /** update multiples rows of table: "users" */
    update_users_many: ((users_mutation_response | null)[] | null)
    __typename: 'mutation_root'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** columns and relationships of "orders" */
export interface orders {
    actor_acct: Scalars['String']
    cancel_block: (Scalars['bigint'] | null)
    cancel_time: (Scalars['timestamptz'] | null)
    cancel_tx_sig: (Scalars['String'] | null)
    filled_base_amount: Scalars['bigint']
    is_active: Scalars['Boolean']
    /** An object relationship */
    make: (makes | null)
    /** An object relationship */
    market: markets
    market_acct: Scalars['String']
    order_block: Scalars['bigint']
    order_time: Scalars['timestamptz']
    order_tx_sig: Scalars['String']
    quote_price: Scalars['numeric']
    side: Scalars['String']
    /** An object relationship */
    take: (takes | null)
    /** An object relationship */
    transaction: (transactions | null)
    unfilled_base_amount: Scalars['bigint']
    updated_at: Scalars['timestamptz']
    __typename: 'orders'
}


/** aggregated selection of "orders" */
export interface orders_aggregate {
    aggregate: (orders_aggregate_fields | null)
    nodes: orders[]
    __typename: 'orders_aggregate'
}


/** aggregate fields of "orders" */
export interface orders_aggregate_fields {
    avg: (orders_avg_fields | null)
    count: Scalars['Int']
    max: (orders_max_fields | null)
    min: (orders_min_fields | null)
    stddev: (orders_stddev_fields | null)
    stddev_pop: (orders_stddev_pop_fields | null)
    stddev_samp: (orders_stddev_samp_fields | null)
    sum: (orders_sum_fields | null)
    var_pop: (orders_var_pop_fields | null)
    var_samp: (orders_var_samp_fields | null)
    variance: (orders_variance_fields | null)
    __typename: 'orders_aggregate_fields'
}


/** aggregate avg on columns */
export interface orders_avg_fields {
    cancel_block: (Scalars['Float'] | null)
    filled_base_amount: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'orders_avg_fields'
}


/** unique or primary key constraints on table "orders" */
export type orders_constraint = 'orders_pkey'


/** aggregate max on columns */
export interface orders_max_fields {
    actor_acct: (Scalars['String'] | null)
    cancel_block: (Scalars['bigint'] | null)
    cancel_time: (Scalars['timestamptz'] | null)
    cancel_tx_sig: (Scalars['String'] | null)
    filled_base_amount: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    order_block: (Scalars['bigint'] | null)
    order_time: (Scalars['timestamptz'] | null)
    order_tx_sig: (Scalars['String'] | null)
    quote_price: (Scalars['numeric'] | null)
    side: (Scalars['String'] | null)
    unfilled_base_amount: (Scalars['bigint'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'orders_max_fields'
}


/** aggregate min on columns */
export interface orders_min_fields {
    actor_acct: (Scalars['String'] | null)
    cancel_block: (Scalars['bigint'] | null)
    cancel_time: (Scalars['timestamptz'] | null)
    cancel_tx_sig: (Scalars['String'] | null)
    filled_base_amount: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    order_block: (Scalars['bigint'] | null)
    order_time: (Scalars['timestamptz'] | null)
    order_tx_sig: (Scalars['String'] | null)
    quote_price: (Scalars['numeric'] | null)
    side: (Scalars['String'] | null)
    unfilled_base_amount: (Scalars['bigint'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'orders_min_fields'
}


/** response of any mutation on the table "orders" */
export interface orders_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: orders[]
    __typename: 'orders_mutation_response'
}


/** select columns of table "orders" */
export type orders_select_column = 'actor_acct' | 'cancel_block' | 'cancel_time' | 'cancel_tx_sig' | 'filled_base_amount' | 'is_active' | 'market_acct' | 'order_block' | 'order_time' | 'order_tx_sig' | 'quote_price' | 'side' | 'unfilled_base_amount' | 'updated_at'


/** select "orders_aggregate_bool_exp_bool_and_arguments_columns" columns of table "orders" */
export type orders_select_column_orders_aggregate_bool_exp_bool_and_arguments_columns = 'is_active'


/** select "orders_aggregate_bool_exp_bool_or_arguments_columns" columns of table "orders" */
export type orders_select_column_orders_aggregate_bool_exp_bool_or_arguments_columns = 'is_active'


/** aggregate stddev on columns */
export interface orders_stddev_fields {
    cancel_block: (Scalars['Float'] | null)
    filled_base_amount: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'orders_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface orders_stddev_pop_fields {
    cancel_block: (Scalars['Float'] | null)
    filled_base_amount: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'orders_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface orders_stddev_samp_fields {
    cancel_block: (Scalars['Float'] | null)
    filled_base_amount: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'orders_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface orders_sum_fields {
    cancel_block: (Scalars['bigint'] | null)
    filled_base_amount: (Scalars['bigint'] | null)
    order_block: (Scalars['bigint'] | null)
    quote_price: (Scalars['numeric'] | null)
    unfilled_base_amount: (Scalars['bigint'] | null)
    __typename: 'orders_sum_fields'
}


/** update columns of table "orders" */
export type orders_update_column = 'actor_acct' | 'cancel_block' | 'cancel_time' | 'cancel_tx_sig' | 'filled_base_amount' | 'is_active' | 'market_acct' | 'order_block' | 'order_time' | 'order_tx_sig' | 'quote_price' | 'side' | 'unfilled_base_amount' | 'updated_at'


/** aggregate var_pop on columns */
export interface orders_var_pop_fields {
    cancel_block: (Scalars['Float'] | null)
    filled_base_amount: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'orders_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface orders_var_samp_fields {
    cancel_block: (Scalars['Float'] | null)
    filled_base_amount: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'orders_var_samp_fields'
}


/** aggregate variance on columns */
export interface orders_variance_fields {
    cancel_block: (Scalars['Float'] | null)
    filled_base_amount: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    unfilled_base_amount: (Scalars['Float'] | null)
    __typename: 'orders_variance_fields'
}


/** columns and relationships of "prices" */
export interface prices {
    base_amount: (Scalars['bigint'] | null)
    created_at: Scalars['timestamptz']
    created_by: (Scalars['String'] | null)
    /** An object relationship */
    market: markets
    market_acct: Scalars['String']
    price: Scalars['numeric']
    prices_type: Scalars['String']
    quote_amount: (Scalars['bigint'] | null)
    updated_slot: Scalars['bigint']
    __typename: 'prices'
}


/** aggregated selection of "prices" */
export interface prices_aggregate {
    aggregate: (prices_aggregate_fields | null)
    nodes: prices[]
    __typename: 'prices_aggregate'
}


/** aggregate fields of "prices" */
export interface prices_aggregate_fields {
    avg: (prices_avg_fields | null)
    count: Scalars['Int']
    max: (prices_max_fields | null)
    min: (prices_min_fields | null)
    stddev: (prices_stddev_fields | null)
    stddev_pop: (prices_stddev_pop_fields | null)
    stddev_samp: (prices_stddev_samp_fields | null)
    sum: (prices_sum_fields | null)
    var_pop: (prices_var_pop_fields | null)
    var_samp: (prices_var_samp_fields | null)
    variance: (prices_variance_fields | null)
    __typename: 'prices_aggregate_fields'
}


/** aggregate avg on columns */
export interface prices_avg_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'prices_avg_fields'
}


/** columns and relationships of "prices_chart_data" */
export interface prices_chart_data {
    base_amount: (Scalars['bigint'] | null)
    interv: (Scalars['timestamptz'] | null)
    /** An object relationship */
    market: (markets | null)
    market_acct: (Scalars['String'] | null)
    price: (Scalars['numeric'] | null)
    prices_type: (Scalars['String'] | null)
    quote_amount: (Scalars['bigint'] | null)
    __typename: 'prices_chart_data'
}


/** aggregated selection of "prices_chart_data" */
export interface prices_chart_data_aggregate {
    aggregate: (prices_chart_data_aggregate_fields | null)
    nodes: prices_chart_data[]
    __typename: 'prices_chart_data_aggregate'
}


/** aggregate fields of "prices_chart_data" */
export interface prices_chart_data_aggregate_fields {
    avg: (prices_chart_data_avg_fields | null)
    count: Scalars['Int']
    max: (prices_chart_data_max_fields | null)
    min: (prices_chart_data_min_fields | null)
    stddev: (prices_chart_data_stddev_fields | null)
    stddev_pop: (prices_chart_data_stddev_pop_fields | null)
    stddev_samp: (prices_chart_data_stddev_samp_fields | null)
    sum: (prices_chart_data_sum_fields | null)
    var_pop: (prices_chart_data_var_pop_fields | null)
    var_samp: (prices_chart_data_var_samp_fields | null)
    variance: (prices_chart_data_variance_fields | null)
    __typename: 'prices_chart_data_aggregate_fields'
}


/** aggregate avg on columns */
export interface prices_chart_data_avg_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    __typename: 'prices_chart_data_avg_fields'
}


/** aggregate max on columns */
export interface prices_chart_data_max_fields {
    base_amount: (Scalars['bigint'] | null)
    interv: (Scalars['timestamptz'] | null)
    market_acct: (Scalars['String'] | null)
    price: (Scalars['numeric'] | null)
    prices_type: (Scalars['String'] | null)
    quote_amount: (Scalars['bigint'] | null)
    __typename: 'prices_chart_data_max_fields'
}


/** aggregate min on columns */
export interface prices_chart_data_min_fields {
    base_amount: (Scalars['bigint'] | null)
    interv: (Scalars['timestamptz'] | null)
    market_acct: (Scalars['String'] | null)
    price: (Scalars['numeric'] | null)
    prices_type: (Scalars['String'] | null)
    quote_amount: (Scalars['bigint'] | null)
    __typename: 'prices_chart_data_min_fields'
}


/** select columns of table "prices_chart_data" */
export type prices_chart_data_select_column = 'base_amount' | 'interv' | 'market_acct' | 'price' | 'prices_type' | 'quote_amount'


/** aggregate stddev on columns */
export interface prices_chart_data_stddev_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    __typename: 'prices_chart_data_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface prices_chart_data_stddev_pop_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    __typename: 'prices_chart_data_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface prices_chart_data_stddev_samp_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    __typename: 'prices_chart_data_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface prices_chart_data_sum_fields {
    base_amount: (Scalars['bigint'] | null)
    price: (Scalars['numeric'] | null)
    quote_amount: (Scalars['bigint'] | null)
    __typename: 'prices_chart_data_sum_fields'
}


/** aggregate var_pop on columns */
export interface prices_chart_data_var_pop_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    __typename: 'prices_chart_data_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface prices_chart_data_var_samp_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    __typename: 'prices_chart_data_var_samp_fields'
}


/** aggregate variance on columns */
export interface prices_chart_data_variance_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    __typename: 'prices_chart_data_variance_fields'
}


/** unique or primary key constraints on table "prices" */
export type prices_constraint = 'prices_created_at_market_acct_pk'


/** aggregate max on columns */
export interface prices_max_fields {
    base_amount: (Scalars['bigint'] | null)
    created_at: (Scalars['timestamptz'] | null)
    created_by: (Scalars['String'] | null)
    market_acct: (Scalars['String'] | null)
    price: (Scalars['numeric'] | null)
    prices_type: (Scalars['String'] | null)
    quote_amount: (Scalars['bigint'] | null)
    updated_slot: (Scalars['bigint'] | null)
    __typename: 'prices_max_fields'
}


/** aggregate min on columns */
export interface prices_min_fields {
    base_amount: (Scalars['bigint'] | null)
    created_at: (Scalars['timestamptz'] | null)
    created_by: (Scalars['String'] | null)
    market_acct: (Scalars['String'] | null)
    price: (Scalars['numeric'] | null)
    prices_type: (Scalars['String'] | null)
    quote_amount: (Scalars['bigint'] | null)
    updated_slot: (Scalars['bigint'] | null)
    __typename: 'prices_min_fields'
}


/** response of any mutation on the table "prices" */
export interface prices_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: prices[]
    __typename: 'prices_mutation_response'
}


/** select columns of table "prices" */
export type prices_select_column = 'base_amount' | 'created_at' | 'created_by' | 'market_acct' | 'price' | 'prices_type' | 'quote_amount' | 'updated_slot'


/** aggregate stddev on columns */
export interface prices_stddev_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'prices_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface prices_stddev_pop_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'prices_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface prices_stddev_samp_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'prices_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface prices_sum_fields {
    base_amount: (Scalars['bigint'] | null)
    price: (Scalars['numeric'] | null)
    quote_amount: (Scalars['bigint'] | null)
    updated_slot: (Scalars['bigint'] | null)
    __typename: 'prices_sum_fields'
}


/** update columns of table "prices" */
export type prices_update_column = 'base_amount' | 'created_at' | 'created_by' | 'market_acct' | 'price' | 'prices_type' | 'quote_amount' | 'updated_slot'


/** aggregate var_pop on columns */
export interface prices_var_pop_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'prices_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface prices_var_samp_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'prices_var_samp_fields'
}


/** aggregate variance on columns */
export interface prices_variance_fields {
    base_amount: (Scalars['Float'] | null)
    price: (Scalars['Float'] | null)
    quote_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'prices_variance_fields'
}


/** columns and relationships of "program_system" */
export interface program_system {
    autocrat_acct: Scalars['String']
    conditional_vault_acct: Scalars['String']
    migrator_acct: (Scalars['String'] | null)
    pricing_model_acct: Scalars['String']
    /** An object relationship */
    program: programs
    /** An object relationship */
    programByConditionalVaultAcct: programs
    /** An object relationship */
    programByMigratorAcct: (programs | null)
    /** An object relationship */
    programByPricingModelAcct: programs
    system_version: Scalars['float8']
    __typename: 'program_system'
}


/** aggregated selection of "program_system" */
export interface program_system_aggregate {
    aggregate: (program_system_aggregate_fields | null)
    nodes: program_system[]
    __typename: 'program_system_aggregate'
}


/** aggregate fields of "program_system" */
export interface program_system_aggregate_fields {
    avg: (program_system_avg_fields | null)
    count: Scalars['Int']
    max: (program_system_max_fields | null)
    min: (program_system_min_fields | null)
    stddev: (program_system_stddev_fields | null)
    stddev_pop: (program_system_stddev_pop_fields | null)
    stddev_samp: (program_system_stddev_samp_fields | null)
    sum: (program_system_sum_fields | null)
    var_pop: (program_system_var_pop_fields | null)
    var_samp: (program_system_var_samp_fields | null)
    variance: (program_system_variance_fields | null)
    __typename: 'program_system_aggregate_fields'
}


/** aggregate avg on columns */
export interface program_system_avg_fields {
    system_version: (Scalars['Float'] | null)
    __typename: 'program_system_avg_fields'
}


/** unique or primary key constraints on table "program_system" */
export type program_system_constraint = 'program_system_pkey'


/** aggregate max on columns */
export interface program_system_max_fields {
    autocrat_acct: (Scalars['String'] | null)
    conditional_vault_acct: (Scalars['String'] | null)
    migrator_acct: (Scalars['String'] | null)
    pricing_model_acct: (Scalars['String'] | null)
    system_version: (Scalars['float8'] | null)
    __typename: 'program_system_max_fields'
}


/** aggregate min on columns */
export interface program_system_min_fields {
    autocrat_acct: (Scalars['String'] | null)
    conditional_vault_acct: (Scalars['String'] | null)
    migrator_acct: (Scalars['String'] | null)
    pricing_model_acct: (Scalars['String'] | null)
    system_version: (Scalars['float8'] | null)
    __typename: 'program_system_min_fields'
}


/** response of any mutation on the table "program_system" */
export interface program_system_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: program_system[]
    __typename: 'program_system_mutation_response'
}


/** select columns of table "program_system" */
export type program_system_select_column = 'autocrat_acct' | 'conditional_vault_acct' | 'migrator_acct' | 'pricing_model_acct' | 'system_version'


/** select "program_system_aggregate_bool_exp_avg_arguments_columns" columns of table "program_system" */
export type program_system_select_column_program_system_aggregate_bool_exp_avg_arguments_columns = 'system_version'


/** select "program_system_aggregate_bool_exp_corr_arguments_columns" columns of table "program_system" */
export type program_system_select_column_program_system_aggregate_bool_exp_corr_arguments_columns = 'system_version'


/** select "program_system_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "program_system" */
export type program_system_select_column_program_system_aggregate_bool_exp_covar_samp_arguments_columns = 'system_version'


/** select "program_system_aggregate_bool_exp_max_arguments_columns" columns of table "program_system" */
export type program_system_select_column_program_system_aggregate_bool_exp_max_arguments_columns = 'system_version'


/** select "program_system_aggregate_bool_exp_min_arguments_columns" columns of table "program_system" */
export type program_system_select_column_program_system_aggregate_bool_exp_min_arguments_columns = 'system_version'


/** select "program_system_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "program_system" */
export type program_system_select_column_program_system_aggregate_bool_exp_stddev_samp_arguments_columns = 'system_version'


/** select "program_system_aggregate_bool_exp_sum_arguments_columns" columns of table "program_system" */
export type program_system_select_column_program_system_aggregate_bool_exp_sum_arguments_columns = 'system_version'


/** select "program_system_aggregate_bool_exp_var_samp_arguments_columns" columns of table "program_system" */
export type program_system_select_column_program_system_aggregate_bool_exp_var_samp_arguments_columns = 'system_version'


/** aggregate stddev on columns */
export interface program_system_stddev_fields {
    system_version: (Scalars['Float'] | null)
    __typename: 'program_system_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface program_system_stddev_pop_fields {
    system_version: (Scalars['Float'] | null)
    __typename: 'program_system_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface program_system_stddev_samp_fields {
    system_version: (Scalars['Float'] | null)
    __typename: 'program_system_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface program_system_sum_fields {
    system_version: (Scalars['float8'] | null)
    __typename: 'program_system_sum_fields'
}


/** update columns of table "program_system" */
export type program_system_update_column = 'autocrat_acct' | 'conditional_vault_acct' | 'migrator_acct' | 'pricing_model_acct' | 'system_version'


/** aggregate var_pop on columns */
export interface program_system_var_pop_fields {
    system_version: (Scalars['Float'] | null)
    __typename: 'program_system_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface program_system_var_samp_fields {
    system_version: (Scalars['Float'] | null)
    __typename: 'program_system_var_samp_fields'
}


/** aggregate variance on columns */
export interface program_system_variance_fields {
    system_version: (Scalars['Float'] | null)
    __typename: 'program_system_variance_fields'
}


/** columns and relationships of "programs" */
export interface programs {
    created_at: Scalars['timestamptz']
    /** An array relationship */
    daos: daos[]
    /** An aggregate relationship */
    daos_aggregate: daos_aggregate
    deployed_at: (Scalars['timestamp'] | null)
    /** An array relationship */
    programSystemsByConditionalVaultAcct: program_system[]
    /** An aggregate relationship */
    programSystemsByConditionalVaultAcct_aggregate: program_system_aggregate
    /** An array relationship */
    programSystemsByMigratorAcct: program_system[]
    /** An aggregate relationship */
    programSystemsByMigratorAcct_aggregate: program_system_aggregate
    /** An array relationship */
    programSystemsByPricingModelAcct: program_system[]
    /** An aggregate relationship */
    programSystemsByPricingModelAcct_aggregate: program_system_aggregate
    program_acct: Scalars['String']
    program_name: Scalars['String']
    /** An array relationship */
    program_systems: program_system[]
    /** An aggregate relationship */
    program_systems_aggregate: program_system_aggregate
    version: Scalars['float8']
    __typename: 'programs'
}


/** aggregated selection of "programs" */
export interface programs_aggregate {
    aggregate: (programs_aggregate_fields | null)
    nodes: programs[]
    __typename: 'programs_aggregate'
}


/** aggregate fields of "programs" */
export interface programs_aggregate_fields {
    avg: (programs_avg_fields | null)
    count: Scalars['Int']
    max: (programs_max_fields | null)
    min: (programs_min_fields | null)
    stddev: (programs_stddev_fields | null)
    stddev_pop: (programs_stddev_pop_fields | null)
    stddev_samp: (programs_stddev_samp_fields | null)
    sum: (programs_sum_fields | null)
    var_pop: (programs_var_pop_fields | null)
    var_samp: (programs_var_samp_fields | null)
    variance: (programs_variance_fields | null)
    __typename: 'programs_aggregate_fields'
}


/** aggregate avg on columns */
export interface programs_avg_fields {
    version: (Scalars['Float'] | null)
    __typename: 'programs_avg_fields'
}


/** unique or primary key constraints on table "programs" */
export type programs_constraint = 'program_version' | 'programs_pkey'


/** aggregate max on columns */
export interface programs_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    deployed_at: (Scalars['timestamp'] | null)
    program_acct: (Scalars['String'] | null)
    program_name: (Scalars['String'] | null)
    version: (Scalars['float8'] | null)
    __typename: 'programs_max_fields'
}


/** aggregate min on columns */
export interface programs_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    deployed_at: (Scalars['timestamp'] | null)
    program_acct: (Scalars['String'] | null)
    program_name: (Scalars['String'] | null)
    version: (Scalars['float8'] | null)
    __typename: 'programs_min_fields'
}


/** response of any mutation on the table "programs" */
export interface programs_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: programs[]
    __typename: 'programs_mutation_response'
}


/** select columns of table "programs" */
export type programs_select_column = 'created_at' | 'deployed_at' | 'program_acct' | 'program_name' | 'version'


/** aggregate stddev on columns */
export interface programs_stddev_fields {
    version: (Scalars['Float'] | null)
    __typename: 'programs_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface programs_stddev_pop_fields {
    version: (Scalars['Float'] | null)
    __typename: 'programs_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface programs_stddev_samp_fields {
    version: (Scalars['Float'] | null)
    __typename: 'programs_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface programs_sum_fields {
    version: (Scalars['float8'] | null)
    __typename: 'programs_sum_fields'
}


/** update columns of table "programs" */
export type programs_update_column = 'created_at' | 'deployed_at' | 'program_acct' | 'program_name' | 'version'


/** aggregate var_pop on columns */
export interface programs_var_pop_fields {
    version: (Scalars['Float'] | null)
    __typename: 'programs_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface programs_var_samp_fields {
    version: (Scalars['Float'] | null)
    __typename: 'programs_var_samp_fields'
}


/** aggregate variance on columns */
export interface programs_variance_fields {
    version: (Scalars['Float'] | null)
    __typename: 'programs_variance_fields'
}


/** columns and relationships of "proposal_bars" */
export interface proposal_bars {
    bar_size: Scalars['interval']
    bar_start_time: Scalars['timestamptz']
    fail_base_amount: (Scalars['bigint'] | null)
    /** An object relationship */
    fail_market: (markets | null)
    fail_market_acct: (Scalars['String'] | null)
    fail_price: (Scalars['numeric'] | null)
    fail_quote_amount: (Scalars['bigint'] | null)
    pass_base_amount: (Scalars['bigint'] | null)
    /** An object relationship */
    pass_market: (markets | null)
    pass_market_acct: (Scalars['String'] | null)
    pass_price: (Scalars['numeric'] | null)
    pass_quote_amount: (Scalars['bigint'] | null)
    proposal_acct: Scalars['String']
    __typename: 'proposal_bars'
}


/** aggregated selection of "proposal_bars" */
export interface proposal_bars_aggregate {
    aggregate: (proposal_bars_aggregate_fields | null)
    nodes: proposal_bars[]
    __typename: 'proposal_bars_aggregate'
}


/** aggregate fields of "proposal_bars" */
export interface proposal_bars_aggregate_fields {
    avg: (proposal_bars_avg_fields | null)
    count: Scalars['Int']
    max: (proposal_bars_max_fields | null)
    min: (proposal_bars_min_fields | null)
    stddev: (proposal_bars_stddev_fields | null)
    stddev_pop: (proposal_bars_stddev_pop_fields | null)
    stddev_samp: (proposal_bars_stddev_samp_fields | null)
    sum: (proposal_bars_sum_fields | null)
    var_pop: (proposal_bars_var_pop_fields | null)
    var_samp: (proposal_bars_var_samp_fields | null)
    variance: (proposal_bars_variance_fields | null)
    __typename: 'proposal_bars_aggregate_fields'
}


/** aggregate avg on columns */
export interface proposal_bars_avg_fields {
    fail_base_amount: (Scalars['Float'] | null)
    fail_price: (Scalars['Float'] | null)
    fail_quote_amount: (Scalars['Float'] | null)
    pass_base_amount: (Scalars['Float'] | null)
    pass_price: (Scalars['Float'] | null)
    pass_quote_amount: (Scalars['Float'] | null)
    __typename: 'proposal_bars_avg_fields'
}


/** unique or primary key constraints on table "proposal_bars" */
export type proposal_bars_constraint = 'proposal_bars_pkey'


/** aggregate max on columns */
export interface proposal_bars_max_fields {
    bar_start_time: (Scalars['timestamptz'] | null)
    fail_base_amount: (Scalars['bigint'] | null)
    fail_market_acct: (Scalars['String'] | null)
    fail_price: (Scalars['numeric'] | null)
    fail_quote_amount: (Scalars['bigint'] | null)
    pass_base_amount: (Scalars['bigint'] | null)
    pass_market_acct: (Scalars['String'] | null)
    pass_price: (Scalars['numeric'] | null)
    pass_quote_amount: (Scalars['bigint'] | null)
    proposal_acct: (Scalars['String'] | null)
    __typename: 'proposal_bars_max_fields'
}


/** aggregate min on columns */
export interface proposal_bars_min_fields {
    bar_start_time: (Scalars['timestamptz'] | null)
    fail_base_amount: (Scalars['bigint'] | null)
    fail_market_acct: (Scalars['String'] | null)
    fail_price: (Scalars['numeric'] | null)
    fail_quote_amount: (Scalars['bigint'] | null)
    pass_base_amount: (Scalars['bigint'] | null)
    pass_market_acct: (Scalars['String'] | null)
    pass_price: (Scalars['numeric'] | null)
    pass_quote_amount: (Scalars['bigint'] | null)
    proposal_acct: (Scalars['String'] | null)
    __typename: 'proposal_bars_min_fields'
}


/** response of any mutation on the table "proposal_bars" */
export interface proposal_bars_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: proposal_bars[]
    __typename: 'proposal_bars_mutation_response'
}


/** select columns of table "proposal_bars" */
export type proposal_bars_select_column = 'bar_size' | 'bar_start_time' | 'fail_base_amount' | 'fail_market_acct' | 'fail_price' | 'fail_quote_amount' | 'pass_base_amount' | 'pass_market_acct' | 'pass_price' | 'pass_quote_amount' | 'proposal_acct'


/** aggregate stddev on columns */
export interface proposal_bars_stddev_fields {
    fail_base_amount: (Scalars['Float'] | null)
    fail_price: (Scalars['Float'] | null)
    fail_quote_amount: (Scalars['Float'] | null)
    pass_base_amount: (Scalars['Float'] | null)
    pass_price: (Scalars['Float'] | null)
    pass_quote_amount: (Scalars['Float'] | null)
    __typename: 'proposal_bars_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface proposal_bars_stddev_pop_fields {
    fail_base_amount: (Scalars['Float'] | null)
    fail_price: (Scalars['Float'] | null)
    fail_quote_amount: (Scalars['Float'] | null)
    pass_base_amount: (Scalars['Float'] | null)
    pass_price: (Scalars['Float'] | null)
    pass_quote_amount: (Scalars['Float'] | null)
    __typename: 'proposal_bars_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface proposal_bars_stddev_samp_fields {
    fail_base_amount: (Scalars['Float'] | null)
    fail_price: (Scalars['Float'] | null)
    fail_quote_amount: (Scalars['Float'] | null)
    pass_base_amount: (Scalars['Float'] | null)
    pass_price: (Scalars['Float'] | null)
    pass_quote_amount: (Scalars['Float'] | null)
    __typename: 'proposal_bars_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface proposal_bars_sum_fields {
    fail_base_amount: (Scalars['bigint'] | null)
    fail_price: (Scalars['numeric'] | null)
    fail_quote_amount: (Scalars['bigint'] | null)
    pass_base_amount: (Scalars['bigint'] | null)
    pass_price: (Scalars['numeric'] | null)
    pass_quote_amount: (Scalars['bigint'] | null)
    __typename: 'proposal_bars_sum_fields'
}


/** update columns of table "proposal_bars" */
export type proposal_bars_update_column = 'bar_size' | 'bar_start_time' | 'fail_base_amount' | 'fail_market_acct' | 'fail_price' | 'fail_quote_amount' | 'pass_base_amount' | 'pass_market_acct' | 'pass_price' | 'pass_quote_amount' | 'proposal_acct'


/** aggregate var_pop on columns */
export interface proposal_bars_var_pop_fields {
    fail_base_amount: (Scalars['Float'] | null)
    fail_price: (Scalars['Float'] | null)
    fail_quote_amount: (Scalars['Float'] | null)
    pass_base_amount: (Scalars['Float'] | null)
    pass_price: (Scalars['Float'] | null)
    pass_quote_amount: (Scalars['Float'] | null)
    __typename: 'proposal_bars_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface proposal_bars_var_samp_fields {
    fail_base_amount: (Scalars['Float'] | null)
    fail_price: (Scalars['Float'] | null)
    fail_quote_amount: (Scalars['Float'] | null)
    pass_base_amount: (Scalars['Float'] | null)
    pass_price: (Scalars['Float'] | null)
    pass_quote_amount: (Scalars['Float'] | null)
    __typename: 'proposal_bars_var_samp_fields'
}


/** aggregate variance on columns */
export interface proposal_bars_variance_fields {
    fail_base_amount: (Scalars['Float'] | null)
    fail_price: (Scalars['Float'] | null)
    fail_quote_amount: (Scalars['Float'] | null)
    pass_base_amount: (Scalars['Float'] | null)
    pass_price: (Scalars['Float'] | null)
    pass_quote_amount: (Scalars['Float'] | null)
    __typename: 'proposal_bars_variance_fields'
}


/** columns and relationships of "proposal_details" */
export interface proposal_details {
    base_cond_vault_acct: (Scalars['String'] | null)
    categories: (Scalars['jsonb'] | null)
    content: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    fail_market_acct: (Scalars['String'] | null)
    pass_market_acct: (Scalars['String'] | null)
    /** An object relationship */
    proposal: (proposals | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_id: Scalars['bigint']
    proposer_acct: (Scalars['String'] | null)
    quote_cond_vault_acct: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    __typename: 'proposal_details'
}


/** aggregated selection of "proposal_details" */
export interface proposal_details_aggregate {
    aggregate: (proposal_details_aggregate_fields | null)
    nodes: proposal_details[]
    __typename: 'proposal_details_aggregate'
}


/** aggregate fields of "proposal_details" */
export interface proposal_details_aggregate_fields {
    avg: (proposal_details_avg_fields | null)
    count: Scalars['Int']
    max: (proposal_details_max_fields | null)
    min: (proposal_details_min_fields | null)
    stddev: (proposal_details_stddev_fields | null)
    stddev_pop: (proposal_details_stddev_pop_fields | null)
    stddev_samp: (proposal_details_stddev_samp_fields | null)
    sum: (proposal_details_sum_fields | null)
    var_pop: (proposal_details_var_pop_fields | null)
    var_samp: (proposal_details_var_samp_fields | null)
    variance: (proposal_details_variance_fields | null)
    __typename: 'proposal_details_aggregate_fields'
}


/** aggregate avg on columns */
export interface proposal_details_avg_fields {
    proposal_id: (Scalars['Float'] | null)
    __typename: 'proposal_details_avg_fields'
}


/** unique or primary key constraints on table "proposal_details" */
export type proposal_details_constraint = 'proposal_details_pkey' | 'proposal_details_slug_unique'


/** aggregate max on columns */
export interface proposal_details_max_fields {
    base_cond_vault_acct: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    fail_market_acct: (Scalars['String'] | null)
    pass_market_acct: (Scalars['String'] | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_id: (Scalars['bigint'] | null)
    proposer_acct: (Scalars['String'] | null)
    quote_cond_vault_acct: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    __typename: 'proposal_details_max_fields'
}


/** aggregate min on columns */
export interface proposal_details_min_fields {
    base_cond_vault_acct: (Scalars['String'] | null)
    content: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    fail_market_acct: (Scalars['String'] | null)
    pass_market_acct: (Scalars['String'] | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_id: (Scalars['bigint'] | null)
    proposer_acct: (Scalars['String'] | null)
    quote_cond_vault_acct: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    __typename: 'proposal_details_min_fields'
}


/** response of any mutation on the table "proposal_details" */
export interface proposal_details_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: proposal_details[]
    __typename: 'proposal_details_mutation_response'
}


/** select columns of table "proposal_details" */
export type proposal_details_select_column = 'base_cond_vault_acct' | 'categories' | 'content' | 'description' | 'fail_market_acct' | 'pass_market_acct' | 'proposal_acct' | 'proposal_id' | 'proposer_acct' | 'quote_cond_vault_acct' | 'slug' | 'title'


/** aggregate stddev on columns */
export interface proposal_details_stddev_fields {
    proposal_id: (Scalars['Float'] | null)
    __typename: 'proposal_details_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface proposal_details_stddev_pop_fields {
    proposal_id: (Scalars['Float'] | null)
    __typename: 'proposal_details_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface proposal_details_stddev_samp_fields {
    proposal_id: (Scalars['Float'] | null)
    __typename: 'proposal_details_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface proposal_details_sum_fields {
    proposal_id: (Scalars['bigint'] | null)
    __typename: 'proposal_details_sum_fields'
}


/** update columns of table "proposal_details" */
export type proposal_details_update_column = 'base_cond_vault_acct' | 'categories' | 'content' | 'description' | 'fail_market_acct' | 'pass_market_acct' | 'proposal_acct' | 'proposal_id' | 'proposer_acct' | 'quote_cond_vault_acct' | 'slug' | 'title'


/** aggregate var_pop on columns */
export interface proposal_details_var_pop_fields {
    proposal_id: (Scalars['Float'] | null)
    __typename: 'proposal_details_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface proposal_details_var_samp_fields {
    proposal_id: (Scalars['Float'] | null)
    __typename: 'proposal_details_var_samp_fields'
}


/** aggregate variance on columns */
export interface proposal_details_variance_fields {
    proposal_id: (Scalars['Float'] | null)
    __typename: 'proposal_details_variance_fields'
}


/** columns and relationships of "proposal_total_trade_volume" */
export interface proposal_total_trade_volume {
    fail_market_acct: (Scalars['String'] | null)
    fail_volume: (Scalars['numeric'] | null)
    pass_market_acct: (Scalars['String'] | null)
    pass_volume: (Scalars['numeric'] | null)
    /** An object relationship */
    proposalTradeVolume: (proposals | null)
    /** An object relationship */
    proposalTradeVolumeFailMarket: (markets | null)
    /** An object relationship */
    proposalTradeVolumePassMarket: (markets | null)
    proposal_acct: (Scalars['String'] | null)
    __typename: 'proposal_total_trade_volume'
}


/** aggregated selection of "proposal_total_trade_volume" */
export interface proposal_total_trade_volume_aggregate {
    aggregate: (proposal_total_trade_volume_aggregate_fields | null)
    nodes: proposal_total_trade_volume[]
    __typename: 'proposal_total_trade_volume_aggregate'
}


/** aggregate fields of "proposal_total_trade_volume" */
export interface proposal_total_trade_volume_aggregate_fields {
    avg: (proposal_total_trade_volume_avg_fields | null)
    count: Scalars['Int']
    max: (proposal_total_trade_volume_max_fields | null)
    min: (proposal_total_trade_volume_min_fields | null)
    stddev: (proposal_total_trade_volume_stddev_fields | null)
    stddev_pop: (proposal_total_trade_volume_stddev_pop_fields | null)
    stddev_samp: (proposal_total_trade_volume_stddev_samp_fields | null)
    sum: (proposal_total_trade_volume_sum_fields | null)
    var_pop: (proposal_total_trade_volume_var_pop_fields | null)
    var_samp: (proposal_total_trade_volume_var_samp_fields | null)
    variance: (proposal_total_trade_volume_variance_fields | null)
    __typename: 'proposal_total_trade_volume_aggregate_fields'
}


/** aggregate avg on columns */
export interface proposal_total_trade_volume_avg_fields {
    fail_volume: (Scalars['Float'] | null)
    pass_volume: (Scalars['Float'] | null)
    __typename: 'proposal_total_trade_volume_avg_fields'
}


/** aggregate max on columns */
export interface proposal_total_trade_volume_max_fields {
    fail_market_acct: (Scalars['String'] | null)
    fail_volume: (Scalars['numeric'] | null)
    pass_market_acct: (Scalars['String'] | null)
    pass_volume: (Scalars['numeric'] | null)
    proposal_acct: (Scalars['String'] | null)
    __typename: 'proposal_total_trade_volume_max_fields'
}


/** aggregate min on columns */
export interface proposal_total_trade_volume_min_fields {
    fail_market_acct: (Scalars['String'] | null)
    fail_volume: (Scalars['numeric'] | null)
    pass_market_acct: (Scalars['String'] | null)
    pass_volume: (Scalars['numeric'] | null)
    proposal_acct: (Scalars['String'] | null)
    __typename: 'proposal_total_trade_volume_min_fields'
}


/** select columns of table "proposal_total_trade_volume" */
export type proposal_total_trade_volume_select_column = 'fail_market_acct' | 'fail_volume' | 'pass_market_acct' | 'pass_volume' | 'proposal_acct'


/** aggregate stddev on columns */
export interface proposal_total_trade_volume_stddev_fields {
    fail_volume: (Scalars['Float'] | null)
    pass_volume: (Scalars['Float'] | null)
    __typename: 'proposal_total_trade_volume_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface proposal_total_trade_volume_stddev_pop_fields {
    fail_volume: (Scalars['Float'] | null)
    pass_volume: (Scalars['Float'] | null)
    __typename: 'proposal_total_trade_volume_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface proposal_total_trade_volume_stddev_samp_fields {
    fail_volume: (Scalars['Float'] | null)
    pass_volume: (Scalars['Float'] | null)
    __typename: 'proposal_total_trade_volume_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface proposal_total_trade_volume_sum_fields {
    fail_volume: (Scalars['numeric'] | null)
    pass_volume: (Scalars['numeric'] | null)
    __typename: 'proposal_total_trade_volume_sum_fields'
}


/** aggregate var_pop on columns */
export interface proposal_total_trade_volume_var_pop_fields {
    fail_volume: (Scalars['Float'] | null)
    pass_volume: (Scalars['Float'] | null)
    __typename: 'proposal_total_trade_volume_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface proposal_total_trade_volume_var_samp_fields {
    fail_volume: (Scalars['Float'] | null)
    pass_volume: (Scalars['Float'] | null)
    __typename: 'proposal_total_trade_volume_var_samp_fields'
}


/** aggregate variance on columns */
export interface proposal_total_trade_volume_variance_fields {
    fail_volume: (Scalars['Float'] | null)
    pass_volume: (Scalars['Float'] | null)
    __typename: 'proposal_total_trade_volume_variance_fields'
}


/** columns and relationships of "proposals" */
export interface proposals {
    autocrat_version: Scalars['float8']
    base_vault: (Scalars['String'] | null)
    /** An array relationship */
    comments: comments[]
    /** An aggregate relationship */
    comments_aggregate: comments_aggregate
    completed_at: (Scalars['timestamptz'] | null)
    /** An object relationship */
    conditionalVaultByQuoteVault: (conditional_vaults | null)
    /** An object relationship */
    conditional_vault: (conditional_vaults | null)
    created_at: Scalars['timestamptz']
    /** An object relationship */
    dao: daos
    dao_acct: Scalars['String']
    description_url: (Scalars['String'] | null)
    end_slot: (Scalars['bigint'] | null)
    ended_at: (Scalars['timestamptz'] | null)
    fail_market_acct: (Scalars['String'] | null)
    initial_slot: Scalars['bigint']
    /** An array relationship */
    markets: markets[]
    /** An aggregate relationship */
    markets_aggregate: markets_aggregate
    pass_market_acct: (Scalars['String'] | null)
    pricing_model_fail_acct: (Scalars['String'] | null)
    pricing_model_pass_acct: (Scalars['String'] | null)
    proposal_acct: Scalars['String']
    /** An array relationship */
    proposal_details: proposal_details[]
    /** An aggregate relationship */
    proposal_details_aggregate: proposal_details_aggregate
    proposal_num: Scalars['bigint']
    proposer_acct: Scalars['String']
    quote_vault: (Scalars['String'] | null)
    /** An array relationship */
    reactions: reactions[]
    /** An aggregate relationship */
    reactions_aggregate: reactions_aggregate
    status: Scalars['String']
    /** An array relationship */
    twaps: twaps[]
    /** An aggregate relationship */
    twaps_aggregate: twaps_aggregate
    updated_at: Scalars['timestamptz']
    __typename: 'proposals'
}


/** aggregated selection of "proposals" */
export interface proposals_aggregate {
    aggregate: (proposals_aggregate_fields | null)
    nodes: proposals[]
    __typename: 'proposals_aggregate'
}


/** aggregate fields of "proposals" */
export interface proposals_aggregate_fields {
    avg: (proposals_avg_fields | null)
    count: Scalars['Int']
    max: (proposals_max_fields | null)
    min: (proposals_min_fields | null)
    stddev: (proposals_stddev_fields | null)
    stddev_pop: (proposals_stddev_pop_fields | null)
    stddev_samp: (proposals_stddev_samp_fields | null)
    sum: (proposals_sum_fields | null)
    var_pop: (proposals_var_pop_fields | null)
    var_samp: (proposals_var_samp_fields | null)
    variance: (proposals_variance_fields | null)
    __typename: 'proposals_aggregate_fields'
}


/** aggregate avg on columns */
export interface proposals_avg_fields {
    autocrat_version: (Scalars['Float'] | null)
    end_slot: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_avg_fields'
}


/** unique or primary key constraints on table "proposals" */
export type proposals_constraint = 'proposals_pkey'


/** aggregate max on columns */
export interface proposals_max_fields {
    autocrat_version: (Scalars['float8'] | null)
    base_vault: (Scalars['String'] | null)
    completed_at: (Scalars['timestamptz'] | null)
    created_at: (Scalars['timestamptz'] | null)
    dao_acct: (Scalars['String'] | null)
    description_url: (Scalars['String'] | null)
    end_slot: (Scalars['bigint'] | null)
    ended_at: (Scalars['timestamptz'] | null)
    fail_market_acct: (Scalars['String'] | null)
    initial_slot: (Scalars['bigint'] | null)
    pass_market_acct: (Scalars['String'] | null)
    pricing_model_fail_acct: (Scalars['String'] | null)
    pricing_model_pass_acct: (Scalars['String'] | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_num: (Scalars['bigint'] | null)
    proposer_acct: (Scalars['String'] | null)
    quote_vault: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'proposals_max_fields'
}


/** aggregate min on columns */
export interface proposals_min_fields {
    autocrat_version: (Scalars['float8'] | null)
    base_vault: (Scalars['String'] | null)
    completed_at: (Scalars['timestamptz'] | null)
    created_at: (Scalars['timestamptz'] | null)
    dao_acct: (Scalars['String'] | null)
    description_url: (Scalars['String'] | null)
    end_slot: (Scalars['bigint'] | null)
    ended_at: (Scalars['timestamptz'] | null)
    fail_market_acct: (Scalars['String'] | null)
    initial_slot: (Scalars['bigint'] | null)
    pass_market_acct: (Scalars['String'] | null)
    pricing_model_fail_acct: (Scalars['String'] | null)
    pricing_model_pass_acct: (Scalars['String'] | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_num: (Scalars['bigint'] | null)
    proposer_acct: (Scalars['String'] | null)
    quote_vault: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'proposals_min_fields'
}


/** response of any mutation on the table "proposals" */
export interface proposals_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: proposals[]
    __typename: 'proposals_mutation_response'
}


/** select columns of table "proposals" */
export type proposals_select_column = 'autocrat_version' | 'base_vault' | 'completed_at' | 'created_at' | 'dao_acct' | 'description_url' | 'end_slot' | 'ended_at' | 'fail_market_acct' | 'initial_slot' | 'pass_market_acct' | 'pricing_model_fail_acct' | 'pricing_model_pass_acct' | 'proposal_acct' | 'proposal_num' | 'proposer_acct' | 'quote_vault' | 'status' | 'updated_at'


/** select "proposals_aggregate_bool_exp_avg_arguments_columns" columns of table "proposals" */
export type proposals_select_column_proposals_aggregate_bool_exp_avg_arguments_columns = 'autocrat_version'


/** select "proposals_aggregate_bool_exp_corr_arguments_columns" columns of table "proposals" */
export type proposals_select_column_proposals_aggregate_bool_exp_corr_arguments_columns = 'autocrat_version'


/** select "proposals_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "proposals" */
export type proposals_select_column_proposals_aggregate_bool_exp_covar_samp_arguments_columns = 'autocrat_version'


/** select "proposals_aggregate_bool_exp_max_arguments_columns" columns of table "proposals" */
export type proposals_select_column_proposals_aggregate_bool_exp_max_arguments_columns = 'autocrat_version'


/** select "proposals_aggregate_bool_exp_min_arguments_columns" columns of table "proposals" */
export type proposals_select_column_proposals_aggregate_bool_exp_min_arguments_columns = 'autocrat_version'


/** select "proposals_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "proposals" */
export type proposals_select_column_proposals_aggregate_bool_exp_stddev_samp_arguments_columns = 'autocrat_version'


/** select "proposals_aggregate_bool_exp_sum_arguments_columns" columns of table "proposals" */
export type proposals_select_column_proposals_aggregate_bool_exp_sum_arguments_columns = 'autocrat_version'


/** select "proposals_aggregate_bool_exp_var_samp_arguments_columns" columns of table "proposals" */
export type proposals_select_column_proposals_aggregate_bool_exp_var_samp_arguments_columns = 'autocrat_version'


/** aggregate stddev on columns */
export interface proposals_stddev_fields {
    autocrat_version: (Scalars['Float'] | null)
    end_slot: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface proposals_stddev_pop_fields {
    autocrat_version: (Scalars['Float'] | null)
    end_slot: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface proposals_stddev_samp_fields {
    autocrat_version: (Scalars['Float'] | null)
    end_slot: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface proposals_sum_fields {
    autocrat_version: (Scalars['float8'] | null)
    end_slot: (Scalars['bigint'] | null)
    initial_slot: (Scalars['bigint'] | null)
    proposal_num: (Scalars['bigint'] | null)
    __typename: 'proposals_sum_fields'
}


/** update columns of table "proposals" */
export type proposals_update_column = 'autocrat_version' | 'base_vault' | 'completed_at' | 'created_at' | 'dao_acct' | 'description_url' | 'end_slot' | 'ended_at' | 'fail_market_acct' | 'initial_slot' | 'pass_market_acct' | 'pricing_model_fail_acct' | 'pricing_model_pass_acct' | 'proposal_acct' | 'proposal_num' | 'proposer_acct' | 'quote_vault' | 'status' | 'updated_at'


/** aggregate var_pop on columns */
export interface proposals_var_pop_fields {
    autocrat_version: (Scalars['Float'] | null)
    end_slot: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface proposals_var_samp_fields {
    autocrat_version: (Scalars['Float'] | null)
    end_slot: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_var_samp_fields'
}


/** aggregate variance on columns */
export interface proposals_variance_fields {
    autocrat_version: (Scalars['Float'] | null)
    end_slot: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_variance_fields'
}

export interface query_root {
    /** An array relationship */
    candles: candles[]
    /** An aggregate relationship */
    candles_aggregate: candles_aggregate
    /** fetch data from the table: "candles" using primary key columns */
    candles_by_pk: (candles | null)
    /** An array relationship */
    comments: comments[]
    /** An aggregate relationship */
    comments_aggregate: comments_aggregate
    /** fetch data from the table: "comments" using primary key columns */
    comments_by_pk: (comments | null)
    /** An array relationship */
    conditional_vaults: conditional_vaults[]
    /** An aggregate relationship */
    conditional_vaults_aggregate: conditional_vaults_aggregate
    /** fetch data from the table: "conditional_vaults" using primary key columns */
    conditional_vaults_by_pk: (conditional_vaults | null)
    /** fetch data from the table: "dao_details" */
    dao_details: dao_details[]
    /** fetch aggregated fields from the table: "dao_details" */
    dao_details_aggregate: dao_details_aggregate
    /** fetch data from the table: "dao_details" using primary key columns */
    dao_details_by_pk: (dao_details | null)
    /** An array relationship */
    daos: daos[]
    /** An aggregate relationship */
    daos_aggregate: daos_aggregate
    /** fetch data from the table: "daos" using primary key columns */
    daos_by_pk: (daos | null)
    /** An array relationship */
    indexer_account_dependencies: indexer_account_dependencies[]
    /** An aggregate relationship */
    indexer_account_dependencies_aggregate: indexer_account_dependencies_aggregate
    /** fetch data from the table: "indexer_account_dependencies" using primary key columns */
    indexer_account_dependencies_by_pk: (indexer_account_dependencies | null)
    /** fetch data from the table: "indexers" */
    indexers: indexers[]
    /** fetch aggregated fields from the table: "indexers" */
    indexers_aggregate: indexers_aggregate
    /** fetch data from the table: "indexers" using primary key columns */
    indexers_by_pk: (indexers | null)
    /** An array relationship */
    makes: makes[]
    /** An aggregate relationship */
    makes_aggregate: makes_aggregate
    /** fetch data from the table: "makes" using primary key columns */
    makes_by_pk: (makes | null)
    /** An array relationship */
    markets: markets[]
    /** An aggregate relationship */
    markets_aggregate: markets_aggregate
    /** fetch data from the table: "markets" using primary key columns */
    markets_by_pk: (markets | null)
    /** An array relationship */
    orders: orders[]
    /** An aggregate relationship */
    orders_aggregate: orders_aggregate
    /** fetch data from the table: "orders" using primary key columns */
    orders_by_pk: (orders | null)
    /** An array relationship */
    prices: prices[]
    /** An aggregate relationship */
    prices_aggregate: prices_aggregate
    /** fetch data from the table: "prices" using primary key columns */
    prices_by_pk: (prices | null)
    /** fetch data from the table: "prices_chart_data" */
    prices_chart_data: prices_chart_data[]
    /** fetch aggregated fields from the table: "prices_chart_data" */
    prices_chart_data_aggregate: prices_chart_data_aggregate
    /** fetch data from the table: "program_system" */
    program_system: program_system[]
    /** fetch aggregated fields from the table: "program_system" */
    program_system_aggregate: program_system_aggregate
    /** fetch data from the table: "program_system" using primary key columns */
    program_system_by_pk: (program_system | null)
    /** fetch data from the table: "programs" */
    programs: programs[]
    /** fetch aggregated fields from the table: "programs" */
    programs_aggregate: programs_aggregate
    /** fetch data from the table: "programs" using primary key columns */
    programs_by_pk: (programs | null)
    /** fetch data from the table: "proposal_bars" */
    proposal_bars: proposal_bars[]
    /** fetch aggregated fields from the table: "proposal_bars" */
    proposal_bars_aggregate: proposal_bars_aggregate
    /** fetch data from the table: "proposal_bars" using primary key columns */
    proposal_bars_by_pk: (proposal_bars | null)
    /** An array relationship */
    proposal_details: proposal_details[]
    /** An aggregate relationship */
    proposal_details_aggregate: proposal_details_aggregate
    /** fetch data from the table: "proposal_details" using primary key columns */
    proposal_details_by_pk: (proposal_details | null)
    /** fetch data from the table: "proposal_total_trade_volume" */
    proposal_total_trade_volume: proposal_total_trade_volume[]
    /** fetch aggregated fields from the table: "proposal_total_trade_volume" */
    proposal_total_trade_volume_aggregate: proposal_total_trade_volume_aggregate
    /** An array relationship */
    proposals: proposals[]
    /** An aggregate relationship */
    proposals_aggregate: proposals_aggregate
    /** fetch data from the table: "proposals" using primary key columns */
    proposals_by_pk: (proposals | null)
    /** An array relationship */
    reactions: reactions[]
    /** An aggregate relationship */
    reactions_aggregate: reactions_aggregate
    /** fetch data from the table: "reactions" using primary key columns */
    reactions_by_pk: (reactions | null)
    /** An array relationship */
    sessions: sessions[]
    /** An aggregate relationship */
    sessions_aggregate: sessions_aggregate
    /** fetch data from the table: "sessions" using primary key columns */
    sessions_by_pk: (sessions | null)
    /** An array relationship */
    takes: takes[]
    /** An aggregate relationship */
    takes_aggregate: takes_aggregate
    /** fetch data from the table: "takes" using primary key columns */
    takes_by_pk: (takes | null)
    /** An array relationship */
    token_acct_balances: token_acct_balances[]
    /** An aggregate relationship */
    token_acct_balances_aggregate: token_acct_balances_aggregate
    /** fetch data from the table: "token_acct_balances" using primary key columns */
    token_acct_balances_by_pk: (token_acct_balances | null)
    /** An array relationship */
    token_accts: token_accts[]
    /** An aggregate relationship */
    token_accts_aggregate: token_accts_aggregate
    /** fetch data from the table: "token_accts" using primary key columns */
    token_accts_by_pk: (token_accts | null)
    /** fetch data from the table: "tokens" */
    tokens: tokens[]
    /** fetch aggregated fields from the table: "tokens" */
    tokens_aggregate: tokens_aggregate
    /** fetch data from the table: "tokens" using primary key columns */
    tokens_by_pk: (tokens | null)
    /** An array relationship */
    transaction_watcher_transactions: transaction_watcher_transactions[]
    /** An aggregate relationship */
    transaction_watcher_transactions_aggregate: transaction_watcher_transactions_aggregate
    /** fetch data from the table: "transaction_watcher_transactions" using primary key columns */
    transaction_watcher_transactions_by_pk: (transaction_watcher_transactions | null)
    /** An array relationship */
    transaction_watchers: transaction_watchers[]
    /** An aggregate relationship */
    transaction_watchers_aggregate: transaction_watchers_aggregate
    /** fetch data from the table: "transaction_watchers" using primary key columns */
    transaction_watchers_by_pk: (transaction_watchers | null)
    /** fetch data from the table: "transactions" */
    transactions: transactions[]
    /** fetch aggregated fields from the table: "transactions" */
    transactions_aggregate: transactions_aggregate
    /** fetch data from the table: "transactions" using primary key columns */
    transactions_by_pk: (transactions | null)
    /** fetch data from the table: "twap_chart_data" */
    twap_chart_data: twap_chart_data[]
    /** fetch aggregated fields from the table: "twap_chart_data" */
    twap_chart_data_aggregate: twap_chart_data_aggregate
    /** An array relationship */
    twaps: twaps[]
    /** An aggregate relationship */
    twaps_aggregate: twaps_aggregate
    /** fetch data from the table: "twaps" using primary key columns */
    twaps_by_pk: (twaps | null)
    /** fetch data from the table: "users" */
    users: users[]
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: users_aggregate
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk: (users | null)
    __typename: 'query_root'
}


/** columns and relationships of "reactions" */
export interface reactions {
    /** An object relationship */
    comment: (comments | null)
    comment_id: (Scalars['bigint'] | null)
    /** An object relationship */
    proposal: proposals
    proposal_acct: Scalars['String']
    reaction: Scalars['String']
    reactor_acct: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'reactions'
}


/** aggregated selection of "reactions" */
export interface reactions_aggregate {
    aggregate: (reactions_aggregate_fields | null)
    nodes: reactions[]
    __typename: 'reactions_aggregate'
}


/** aggregate fields of "reactions" */
export interface reactions_aggregate_fields {
    avg: (reactions_avg_fields | null)
    count: Scalars['Int']
    max: (reactions_max_fields | null)
    min: (reactions_min_fields | null)
    stddev: (reactions_stddev_fields | null)
    stddev_pop: (reactions_stddev_pop_fields | null)
    stddev_samp: (reactions_stddev_samp_fields | null)
    sum: (reactions_sum_fields | null)
    var_pop: (reactions_var_pop_fields | null)
    var_samp: (reactions_var_samp_fields | null)
    variance: (reactions_variance_fields | null)
    __typename: 'reactions_aggregate_fields'
}


/** aggregate avg on columns */
export interface reactions_avg_fields {
    comment_id: (Scalars['Float'] | null)
    __typename: 'reactions_avg_fields'
}


/** unique or primary key constraints on table "reactions" */
export type reactions_constraint = 'reactions_proposal_acct_reaction_reactor_acct_pk'


/** aggregate max on columns */
export interface reactions_max_fields {
    comment_id: (Scalars['bigint'] | null)
    proposal_acct: (Scalars['String'] | null)
    reaction: (Scalars['String'] | null)
    reactor_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'reactions_max_fields'
}


/** aggregate min on columns */
export interface reactions_min_fields {
    comment_id: (Scalars['bigint'] | null)
    proposal_acct: (Scalars['String'] | null)
    reaction: (Scalars['String'] | null)
    reactor_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'reactions_min_fields'
}


/** response of any mutation on the table "reactions" */
export interface reactions_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: reactions[]
    __typename: 'reactions_mutation_response'
}


/** select columns of table "reactions" */
export type reactions_select_column = 'comment_id' | 'proposal_acct' | 'reaction' | 'reactor_acct' | 'updated_at'


/** aggregate stddev on columns */
export interface reactions_stddev_fields {
    comment_id: (Scalars['Float'] | null)
    __typename: 'reactions_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface reactions_stddev_pop_fields {
    comment_id: (Scalars['Float'] | null)
    __typename: 'reactions_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface reactions_stddev_samp_fields {
    comment_id: (Scalars['Float'] | null)
    __typename: 'reactions_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface reactions_sum_fields {
    comment_id: (Scalars['bigint'] | null)
    __typename: 'reactions_sum_fields'
}


/** update columns of table "reactions" */
export type reactions_update_column = 'comment_id' | 'proposal_acct' | 'reaction' | 'reactor_acct' | 'updated_at'


/** aggregate var_pop on columns */
export interface reactions_var_pop_fields {
    comment_id: (Scalars['Float'] | null)
    __typename: 'reactions_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface reactions_var_samp_fields {
    comment_id: (Scalars['Float'] | null)
    __typename: 'reactions_var_samp_fields'
}


/** aggregate variance on columns */
export interface reactions_variance_fields {
    comment_id: (Scalars['Float'] | null)
    __typename: 'reactions_variance_fields'
}


/** columns and relationships of "sessions" */
export interface sessions {
    created_at: Scalars['timestamptz']
    expires_at: (Scalars['timestamp'] | null)
    id: Scalars['uuid']
    /** An object relationship */
    user: (users | null)
    user_acct: (Scalars['String'] | null)
    __typename: 'sessions'
}


/** aggregated selection of "sessions" */
export interface sessions_aggregate {
    aggregate: (sessions_aggregate_fields | null)
    nodes: sessions[]
    __typename: 'sessions_aggregate'
}


/** aggregate fields of "sessions" */
export interface sessions_aggregate_fields {
    count: Scalars['Int']
    max: (sessions_max_fields | null)
    min: (sessions_min_fields | null)
    __typename: 'sessions_aggregate_fields'
}


/** unique or primary key constraints on table "sessions" */
export type sessions_constraint = 'sessions_pkey'


/** aggregate max on columns */
export interface sessions_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    expires_at: (Scalars['timestamp'] | null)
    id: (Scalars['uuid'] | null)
    user_acct: (Scalars['String'] | null)
    __typename: 'sessions_max_fields'
}


/** aggregate min on columns */
export interface sessions_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    expires_at: (Scalars['timestamp'] | null)
    id: (Scalars['uuid'] | null)
    user_acct: (Scalars['String'] | null)
    __typename: 'sessions_min_fields'
}


/** response of any mutation on the table "sessions" */
export interface sessions_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: sessions[]
    __typename: 'sessions_mutation_response'
}


/** select columns of table "sessions" */
export type sessions_select_column = 'created_at' | 'expires_at' | 'id' | 'user_acct'


/** update columns of table "sessions" */
export type sessions_update_column = 'created_at' | 'expires_at' | 'id' | 'user_acct'

export interface subscription_root {
    /** An array relationship */
    candles: candles[]
    /** An aggregate relationship */
    candles_aggregate: candles_aggregate
    /** fetch data from the table: "candles" using primary key columns */
    candles_by_pk: (candles | null)
    /** fetch data from the table in a streaming manner: "candles" */
    candles_stream: candles[]
    /** An array relationship */
    comments: comments[]
    /** An aggregate relationship */
    comments_aggregate: comments_aggregate
    /** fetch data from the table: "comments" using primary key columns */
    comments_by_pk: (comments | null)
    /** fetch data from the table in a streaming manner: "comments" */
    comments_stream: comments[]
    /** An array relationship */
    conditional_vaults: conditional_vaults[]
    /** An aggregate relationship */
    conditional_vaults_aggregate: conditional_vaults_aggregate
    /** fetch data from the table: "conditional_vaults" using primary key columns */
    conditional_vaults_by_pk: (conditional_vaults | null)
    /** fetch data from the table in a streaming manner: "conditional_vaults" */
    conditional_vaults_stream: conditional_vaults[]
    /** fetch data from the table: "dao_details" */
    dao_details: dao_details[]
    /** fetch aggregated fields from the table: "dao_details" */
    dao_details_aggregate: dao_details_aggregate
    /** fetch data from the table: "dao_details" using primary key columns */
    dao_details_by_pk: (dao_details | null)
    /** fetch data from the table in a streaming manner: "dao_details" */
    dao_details_stream: dao_details[]
    /** An array relationship */
    daos: daos[]
    /** An aggregate relationship */
    daos_aggregate: daos_aggregate
    /** fetch data from the table: "daos" using primary key columns */
    daos_by_pk: (daos | null)
    /** fetch data from the table in a streaming manner: "daos" */
    daos_stream: daos[]
    /** An array relationship */
    indexer_account_dependencies: indexer_account_dependencies[]
    /** An aggregate relationship */
    indexer_account_dependencies_aggregate: indexer_account_dependencies_aggregate
    /** fetch data from the table: "indexer_account_dependencies" using primary key columns */
    indexer_account_dependencies_by_pk: (indexer_account_dependencies | null)
    /** fetch data from the table in a streaming manner: "indexer_account_dependencies" */
    indexer_account_dependencies_stream: indexer_account_dependencies[]
    /** fetch data from the table: "indexers" */
    indexers: indexers[]
    /** fetch aggregated fields from the table: "indexers" */
    indexers_aggregate: indexers_aggregate
    /** fetch data from the table: "indexers" using primary key columns */
    indexers_by_pk: (indexers | null)
    /** fetch data from the table in a streaming manner: "indexers" */
    indexers_stream: indexers[]
    /** An array relationship */
    makes: makes[]
    /** An aggregate relationship */
    makes_aggregate: makes_aggregate
    /** fetch data from the table: "makes" using primary key columns */
    makes_by_pk: (makes | null)
    /** fetch data from the table in a streaming manner: "makes" */
    makes_stream: makes[]
    /** An array relationship */
    markets: markets[]
    /** An aggregate relationship */
    markets_aggregate: markets_aggregate
    /** fetch data from the table: "markets" using primary key columns */
    markets_by_pk: (markets | null)
    /** fetch data from the table in a streaming manner: "markets" */
    markets_stream: markets[]
    /** An array relationship */
    orders: orders[]
    /** An aggregate relationship */
    orders_aggregate: orders_aggregate
    /** fetch data from the table: "orders" using primary key columns */
    orders_by_pk: (orders | null)
    /** fetch data from the table in a streaming manner: "orders" */
    orders_stream: orders[]
    /** An array relationship */
    prices: prices[]
    /** An aggregate relationship */
    prices_aggregate: prices_aggregate
    /** fetch data from the table: "prices" using primary key columns */
    prices_by_pk: (prices | null)
    /** fetch data from the table: "prices_chart_data" */
    prices_chart_data: prices_chart_data[]
    /** fetch aggregated fields from the table: "prices_chart_data" */
    prices_chart_data_aggregate: prices_chart_data_aggregate
    /** fetch data from the table in a streaming manner: "prices_chart_data" */
    prices_chart_data_stream: prices_chart_data[]
    /** fetch data from the table in a streaming manner: "prices" */
    prices_stream: prices[]
    /** fetch data from the table: "program_system" */
    program_system: program_system[]
    /** fetch aggregated fields from the table: "program_system" */
    program_system_aggregate: program_system_aggregate
    /** fetch data from the table: "program_system" using primary key columns */
    program_system_by_pk: (program_system | null)
    /** fetch data from the table in a streaming manner: "program_system" */
    program_system_stream: program_system[]
    /** fetch data from the table: "programs" */
    programs: programs[]
    /** fetch aggregated fields from the table: "programs" */
    programs_aggregate: programs_aggregate
    /** fetch data from the table: "programs" using primary key columns */
    programs_by_pk: (programs | null)
    /** fetch data from the table in a streaming manner: "programs" */
    programs_stream: programs[]
    /** fetch data from the table: "proposal_bars" */
    proposal_bars: proposal_bars[]
    /** fetch aggregated fields from the table: "proposal_bars" */
    proposal_bars_aggregate: proposal_bars_aggregate
    /** fetch data from the table: "proposal_bars" using primary key columns */
    proposal_bars_by_pk: (proposal_bars | null)
    /** fetch data from the table in a streaming manner: "proposal_bars" */
    proposal_bars_stream: proposal_bars[]
    /** An array relationship */
    proposal_details: proposal_details[]
    /** An aggregate relationship */
    proposal_details_aggregate: proposal_details_aggregate
    /** fetch data from the table: "proposal_details" using primary key columns */
    proposal_details_by_pk: (proposal_details | null)
    /** fetch data from the table in a streaming manner: "proposal_details" */
    proposal_details_stream: proposal_details[]
    /** fetch data from the table: "proposal_total_trade_volume" */
    proposal_total_trade_volume: proposal_total_trade_volume[]
    /** fetch aggregated fields from the table: "proposal_total_trade_volume" */
    proposal_total_trade_volume_aggregate: proposal_total_trade_volume_aggregate
    /** fetch data from the table in a streaming manner: "proposal_total_trade_volume" */
    proposal_total_trade_volume_stream: proposal_total_trade_volume[]
    /** An array relationship */
    proposals: proposals[]
    /** An aggregate relationship */
    proposals_aggregate: proposals_aggregate
    /** fetch data from the table: "proposals" using primary key columns */
    proposals_by_pk: (proposals | null)
    /** fetch data from the table in a streaming manner: "proposals" */
    proposals_stream: proposals[]
    /** An array relationship */
    reactions: reactions[]
    /** An aggregate relationship */
    reactions_aggregate: reactions_aggregate
    /** fetch data from the table: "reactions" using primary key columns */
    reactions_by_pk: (reactions | null)
    /** fetch data from the table in a streaming manner: "reactions" */
    reactions_stream: reactions[]
    /** An array relationship */
    sessions: sessions[]
    /** An aggregate relationship */
    sessions_aggregate: sessions_aggregate
    /** fetch data from the table: "sessions" using primary key columns */
    sessions_by_pk: (sessions | null)
    /** fetch data from the table in a streaming manner: "sessions" */
    sessions_stream: sessions[]
    /** An array relationship */
    takes: takes[]
    /** An aggregate relationship */
    takes_aggregate: takes_aggregate
    /** fetch data from the table: "takes" using primary key columns */
    takes_by_pk: (takes | null)
    /** fetch data from the table in a streaming manner: "takes" */
    takes_stream: takes[]
    /** An array relationship */
    token_acct_balances: token_acct_balances[]
    /** An aggregate relationship */
    token_acct_balances_aggregate: token_acct_balances_aggregate
    /** fetch data from the table: "token_acct_balances" using primary key columns */
    token_acct_balances_by_pk: (token_acct_balances | null)
    /** fetch data from the table in a streaming manner: "token_acct_balances" */
    token_acct_balances_stream: token_acct_balances[]
    /** An array relationship */
    token_accts: token_accts[]
    /** An aggregate relationship */
    token_accts_aggregate: token_accts_aggregate
    /** fetch data from the table: "token_accts" using primary key columns */
    token_accts_by_pk: (token_accts | null)
    /** fetch data from the table in a streaming manner: "token_accts" */
    token_accts_stream: token_accts[]
    /** fetch data from the table: "tokens" */
    tokens: tokens[]
    /** fetch aggregated fields from the table: "tokens" */
    tokens_aggregate: tokens_aggregate
    /** fetch data from the table: "tokens" using primary key columns */
    tokens_by_pk: (tokens | null)
    /** fetch data from the table in a streaming manner: "tokens" */
    tokens_stream: tokens[]
    /** An array relationship */
    transaction_watcher_transactions: transaction_watcher_transactions[]
    /** An aggregate relationship */
    transaction_watcher_transactions_aggregate: transaction_watcher_transactions_aggregate
    /** fetch data from the table: "transaction_watcher_transactions" using primary key columns */
    transaction_watcher_transactions_by_pk: (transaction_watcher_transactions | null)
    /** fetch data from the table in a streaming manner: "transaction_watcher_transactions" */
    transaction_watcher_transactions_stream: transaction_watcher_transactions[]
    /** An array relationship */
    transaction_watchers: transaction_watchers[]
    /** An aggregate relationship */
    transaction_watchers_aggregate: transaction_watchers_aggregate
    /** fetch data from the table: "transaction_watchers" using primary key columns */
    transaction_watchers_by_pk: (transaction_watchers | null)
    /** fetch data from the table in a streaming manner: "transaction_watchers" */
    transaction_watchers_stream: transaction_watchers[]
    /** fetch data from the table: "transactions" */
    transactions: transactions[]
    /** fetch aggregated fields from the table: "transactions" */
    transactions_aggregate: transactions_aggregate
    /** fetch data from the table: "transactions" using primary key columns */
    transactions_by_pk: (transactions | null)
    /** fetch data from the table in a streaming manner: "transactions" */
    transactions_stream: transactions[]
    /** fetch data from the table: "twap_chart_data" */
    twap_chart_data: twap_chart_data[]
    /** fetch aggregated fields from the table: "twap_chart_data" */
    twap_chart_data_aggregate: twap_chart_data_aggregate
    /** fetch data from the table in a streaming manner: "twap_chart_data" */
    twap_chart_data_stream: twap_chart_data[]
    /** An array relationship */
    twaps: twaps[]
    /** An aggregate relationship */
    twaps_aggregate: twaps_aggregate
    /** fetch data from the table: "twaps" using primary key columns */
    twaps_by_pk: (twaps | null)
    /** fetch data from the table in a streaming manner: "twaps" */
    twaps_stream: twaps[]
    /** fetch data from the table: "users" */
    users: users[]
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: users_aggregate
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk: (users | null)
    /** fetch data from the table in a streaming manner: "users" */
    users_stream: users[]
    __typename: 'subscription_root'
}


/** columns and relationships of "takes" */
export interface takes {
    base_amount: Scalars['bigint']
    /** An object relationship */
    make: (makes | null)
    maker_base_fee: (Scalars['bigint'] | null)
    maker_order_tx_sig: (Scalars['String'] | null)
    maker_quote_fee: (Scalars['bigint'] | null)
    /** An object relationship */
    market: markets
    market_acct: Scalars['String']
    /** An object relationship */
    order: orders
    order_block: Scalars['bigint']
    order_time: Scalars['timestamptz']
    order_tx_sig: Scalars['String']
    quote_price: Scalars['numeric']
    taker_base_fee: Scalars['bigint']
    taker_quote_fee: Scalars['bigint']
    __typename: 'takes'
}


/** aggregated selection of "takes" */
export interface takes_aggregate {
    aggregate: (takes_aggregate_fields | null)
    nodes: takes[]
    __typename: 'takes_aggregate'
}


/** aggregate fields of "takes" */
export interface takes_aggregate_fields {
    avg: (takes_avg_fields | null)
    count: Scalars['Int']
    max: (takes_max_fields | null)
    min: (takes_min_fields | null)
    stddev: (takes_stddev_fields | null)
    stddev_pop: (takes_stddev_pop_fields | null)
    stddev_samp: (takes_stddev_samp_fields | null)
    sum: (takes_sum_fields | null)
    var_pop: (takes_var_pop_fields | null)
    var_samp: (takes_var_samp_fields | null)
    variance: (takes_variance_fields | null)
    __typename: 'takes_aggregate_fields'
}


/** aggregate avg on columns */
export interface takes_avg_fields {
    base_amount: (Scalars['Float'] | null)
    maker_base_fee: (Scalars['Float'] | null)
    maker_quote_fee: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    taker_base_fee: (Scalars['Float'] | null)
    taker_quote_fee: (Scalars['Float'] | null)
    __typename: 'takes_avg_fields'
}


/** unique or primary key constraints on table "takes" */
export type takes_constraint = 'takes_pkey'


/** aggregate max on columns */
export interface takes_max_fields {
    base_amount: (Scalars['bigint'] | null)
    maker_base_fee: (Scalars['bigint'] | null)
    maker_order_tx_sig: (Scalars['String'] | null)
    maker_quote_fee: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    order_block: (Scalars['bigint'] | null)
    order_time: (Scalars['timestamptz'] | null)
    order_tx_sig: (Scalars['String'] | null)
    quote_price: (Scalars['numeric'] | null)
    taker_base_fee: (Scalars['bigint'] | null)
    taker_quote_fee: (Scalars['bigint'] | null)
    __typename: 'takes_max_fields'
}


/** aggregate min on columns */
export interface takes_min_fields {
    base_amount: (Scalars['bigint'] | null)
    maker_base_fee: (Scalars['bigint'] | null)
    maker_order_tx_sig: (Scalars['String'] | null)
    maker_quote_fee: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    order_block: (Scalars['bigint'] | null)
    order_time: (Scalars['timestamptz'] | null)
    order_tx_sig: (Scalars['String'] | null)
    quote_price: (Scalars['numeric'] | null)
    taker_base_fee: (Scalars['bigint'] | null)
    taker_quote_fee: (Scalars['bigint'] | null)
    __typename: 'takes_min_fields'
}


/** response of any mutation on the table "takes" */
export interface takes_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: takes[]
    __typename: 'takes_mutation_response'
}


/** select columns of table "takes" */
export type takes_select_column = 'base_amount' | 'maker_base_fee' | 'maker_order_tx_sig' | 'maker_quote_fee' | 'market_acct' | 'order_block' | 'order_time' | 'order_tx_sig' | 'quote_price' | 'taker_base_fee' | 'taker_quote_fee'


/** aggregate stddev on columns */
export interface takes_stddev_fields {
    base_amount: (Scalars['Float'] | null)
    maker_base_fee: (Scalars['Float'] | null)
    maker_quote_fee: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    taker_base_fee: (Scalars['Float'] | null)
    taker_quote_fee: (Scalars['Float'] | null)
    __typename: 'takes_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface takes_stddev_pop_fields {
    base_amount: (Scalars['Float'] | null)
    maker_base_fee: (Scalars['Float'] | null)
    maker_quote_fee: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    taker_base_fee: (Scalars['Float'] | null)
    taker_quote_fee: (Scalars['Float'] | null)
    __typename: 'takes_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface takes_stddev_samp_fields {
    base_amount: (Scalars['Float'] | null)
    maker_base_fee: (Scalars['Float'] | null)
    maker_quote_fee: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    taker_base_fee: (Scalars['Float'] | null)
    taker_quote_fee: (Scalars['Float'] | null)
    __typename: 'takes_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface takes_sum_fields {
    base_amount: (Scalars['bigint'] | null)
    maker_base_fee: (Scalars['bigint'] | null)
    maker_quote_fee: (Scalars['bigint'] | null)
    order_block: (Scalars['bigint'] | null)
    quote_price: (Scalars['numeric'] | null)
    taker_base_fee: (Scalars['bigint'] | null)
    taker_quote_fee: (Scalars['bigint'] | null)
    __typename: 'takes_sum_fields'
}


/** update columns of table "takes" */
export type takes_update_column = 'base_amount' | 'maker_base_fee' | 'maker_order_tx_sig' | 'maker_quote_fee' | 'market_acct' | 'order_block' | 'order_time' | 'order_tx_sig' | 'quote_price' | 'taker_base_fee' | 'taker_quote_fee'


/** aggregate var_pop on columns */
export interface takes_var_pop_fields {
    base_amount: (Scalars['Float'] | null)
    maker_base_fee: (Scalars['Float'] | null)
    maker_quote_fee: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    taker_base_fee: (Scalars['Float'] | null)
    taker_quote_fee: (Scalars['Float'] | null)
    __typename: 'takes_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface takes_var_samp_fields {
    base_amount: (Scalars['Float'] | null)
    maker_base_fee: (Scalars['Float'] | null)
    maker_quote_fee: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    taker_base_fee: (Scalars['Float'] | null)
    taker_quote_fee: (Scalars['Float'] | null)
    __typename: 'takes_var_samp_fields'
}


/** aggregate variance on columns */
export interface takes_variance_fields {
    base_amount: (Scalars['Float'] | null)
    maker_base_fee: (Scalars['Float'] | null)
    maker_quote_fee: (Scalars['Float'] | null)
    order_block: (Scalars['Float'] | null)
    quote_price: (Scalars['Float'] | null)
    taker_base_fee: (Scalars['Float'] | null)
    taker_quote_fee: (Scalars['Float'] | null)
    __typename: 'takes_variance_fields'
}


/** columns and relationships of "token_acct_balances" */
export interface token_acct_balances {
    amount: Scalars['bigint']
    created_at: Scalars['timestamptz']
    delta: Scalars['bigint']
    mint_acct: Scalars['String']
    owner_acct: Scalars['String']
    slot: (Scalars['bigint'] | null)
    /** An object relationship */
    token: tokens
    /** An object relationship */
    tokenAcctByTokenAcct: token_accts
    token_acct: Scalars['String']
    tx_sig: (Scalars['String'] | null)
    __typename: 'token_acct_balances'
}


/** aggregated selection of "token_acct_balances" */
export interface token_acct_balances_aggregate {
    aggregate: (token_acct_balances_aggregate_fields | null)
    nodes: token_acct_balances[]
    __typename: 'token_acct_balances_aggregate'
}


/** aggregate fields of "token_acct_balances" */
export interface token_acct_balances_aggregate_fields {
    avg: (token_acct_balances_avg_fields | null)
    count: Scalars['Int']
    max: (token_acct_balances_max_fields | null)
    min: (token_acct_balances_min_fields | null)
    stddev: (token_acct_balances_stddev_fields | null)
    stddev_pop: (token_acct_balances_stddev_pop_fields | null)
    stddev_samp: (token_acct_balances_stddev_samp_fields | null)
    sum: (token_acct_balances_sum_fields | null)
    var_pop: (token_acct_balances_var_pop_fields | null)
    var_samp: (token_acct_balances_var_samp_fields | null)
    variance: (token_acct_balances_variance_fields | null)
    __typename: 'token_acct_balances_aggregate_fields'
}


/** aggregate avg on columns */
export interface token_acct_balances_avg_fields {
    amount: (Scalars['Float'] | null)
    delta: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'token_acct_balances_avg_fields'
}


/** unique or primary key constraints on table "token_acct_balances" */
export type token_acct_balances_constraint = 'token_acct_balances_token_acct_mint_acct_amount_created_at_pk'


/** aggregate max on columns */
export interface token_acct_balances_max_fields {
    amount: (Scalars['bigint'] | null)
    created_at: (Scalars['timestamptz'] | null)
    delta: (Scalars['bigint'] | null)
    mint_acct: (Scalars['String'] | null)
    owner_acct: (Scalars['String'] | null)
    slot: (Scalars['bigint'] | null)
    token_acct: (Scalars['String'] | null)
    tx_sig: (Scalars['String'] | null)
    __typename: 'token_acct_balances_max_fields'
}


/** aggregate min on columns */
export interface token_acct_balances_min_fields {
    amount: (Scalars['bigint'] | null)
    created_at: (Scalars['timestamptz'] | null)
    delta: (Scalars['bigint'] | null)
    mint_acct: (Scalars['String'] | null)
    owner_acct: (Scalars['String'] | null)
    slot: (Scalars['bigint'] | null)
    token_acct: (Scalars['String'] | null)
    tx_sig: (Scalars['String'] | null)
    __typename: 'token_acct_balances_min_fields'
}


/** response of any mutation on the table "token_acct_balances" */
export interface token_acct_balances_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: token_acct_balances[]
    __typename: 'token_acct_balances_mutation_response'
}


/** select columns of table "token_acct_balances" */
export type token_acct_balances_select_column = 'amount' | 'created_at' | 'delta' | 'mint_acct' | 'owner_acct' | 'slot' | 'token_acct' | 'tx_sig'


/** aggregate stddev on columns */
export interface token_acct_balances_stddev_fields {
    amount: (Scalars['Float'] | null)
    delta: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'token_acct_balances_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface token_acct_balances_stddev_pop_fields {
    amount: (Scalars['Float'] | null)
    delta: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'token_acct_balances_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface token_acct_balances_stddev_samp_fields {
    amount: (Scalars['Float'] | null)
    delta: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'token_acct_balances_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface token_acct_balances_sum_fields {
    amount: (Scalars['bigint'] | null)
    delta: (Scalars['bigint'] | null)
    slot: (Scalars['bigint'] | null)
    __typename: 'token_acct_balances_sum_fields'
}


/** update columns of table "token_acct_balances" */
export type token_acct_balances_update_column = 'amount' | 'created_at' | 'delta' | 'mint_acct' | 'owner_acct' | 'slot' | 'token_acct' | 'tx_sig'


/** aggregate var_pop on columns */
export interface token_acct_balances_var_pop_fields {
    amount: (Scalars['Float'] | null)
    delta: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'token_acct_balances_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface token_acct_balances_var_samp_fields {
    amount: (Scalars['Float'] | null)
    delta: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'token_acct_balances_var_samp_fields'
}


/** aggregate variance on columns */
export interface token_acct_balances_variance_fields {
    amount: (Scalars['Float'] | null)
    delta: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'token_acct_balances_variance_fields'
}


/** columns and relationships of "token_accts" */
export interface token_accts {
    amount: Scalars['bigint']
    /** An array relationship */
    markets: markets[]
    /** An array relationship */
    marketsByBidsTokenAcct: markets[]
    /** An aggregate relationship */
    marketsByBidsTokenAcct_aggregate: markets_aggregate
    /** An aggregate relationship */
    markets_aggregate: markets_aggregate
    mint_acct: Scalars['String']
    owner_acct: Scalars['String']
    status: (Scalars['token_acct_status'] | null)
    /** An object relationship */
    token: tokens
    token_acct: Scalars['String']
    /** An array relationship */
    token_acct_balances: token_acct_balances[]
    /** An aggregate relationship */
    token_acct_balances_aggregate: token_acct_balances_aggregate
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'token_accts'
}


/** aggregated selection of "token_accts" */
export interface token_accts_aggregate {
    aggregate: (token_accts_aggregate_fields | null)
    nodes: token_accts[]
    __typename: 'token_accts_aggregate'
}


/** aggregate fields of "token_accts" */
export interface token_accts_aggregate_fields {
    avg: (token_accts_avg_fields | null)
    count: Scalars['Int']
    max: (token_accts_max_fields | null)
    min: (token_accts_min_fields | null)
    stddev: (token_accts_stddev_fields | null)
    stddev_pop: (token_accts_stddev_pop_fields | null)
    stddev_samp: (token_accts_stddev_samp_fields | null)
    sum: (token_accts_sum_fields | null)
    var_pop: (token_accts_var_pop_fields | null)
    var_samp: (token_accts_var_samp_fields | null)
    variance: (token_accts_variance_fields | null)
    __typename: 'token_accts_aggregate_fields'
}


/** aggregate avg on columns */
export interface token_accts_avg_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'token_accts_avg_fields'
}


/** unique or primary key constraints on table "token_accts" */
export type token_accts_constraint = 'token_accts_pkey'


/** aggregate max on columns */
export interface token_accts_max_fields {
    amount: (Scalars['bigint'] | null)
    mint_acct: (Scalars['String'] | null)
    owner_acct: (Scalars['String'] | null)
    status: (Scalars['token_acct_status'] | null)
    token_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'token_accts_max_fields'
}


/** aggregate min on columns */
export interface token_accts_min_fields {
    amount: (Scalars['bigint'] | null)
    mint_acct: (Scalars['String'] | null)
    owner_acct: (Scalars['String'] | null)
    status: (Scalars['token_acct_status'] | null)
    token_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'token_accts_min_fields'
}


/** response of any mutation on the table "token_accts" */
export interface token_accts_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: token_accts[]
    __typename: 'token_accts_mutation_response'
}


/** select columns of table "token_accts" */
export type token_accts_select_column = 'amount' | 'mint_acct' | 'owner_acct' | 'status' | 'token_acct' | 'updated_at'


/** aggregate stddev on columns */
export interface token_accts_stddev_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'token_accts_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface token_accts_stddev_pop_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'token_accts_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface token_accts_stddev_samp_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'token_accts_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface token_accts_sum_fields {
    amount: (Scalars['bigint'] | null)
    __typename: 'token_accts_sum_fields'
}


/** update columns of table "token_accts" */
export type token_accts_update_column = 'amount' | 'mint_acct' | 'owner_acct' | 'status' | 'token_acct' | 'updated_at'


/** aggregate var_pop on columns */
export interface token_accts_var_pop_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'token_accts_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface token_accts_var_samp_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'token_accts_var_samp_fields'
}


/** aggregate variance on columns */
export interface token_accts_variance_fields {
    amount: (Scalars['Float'] | null)
    __typename: 'token_accts_variance_fields'
}


/** columns and relationships of "tokens" */
export interface tokens {
    /** An array relationship */
    conditional_vaults: conditional_vaults[]
    /** An aggregate relationship */
    conditional_vaults_aggregate: conditional_vaults_aggregate
    /** An array relationship */
    daos: daos[]
    /** An array relationship */
    daosByQuoteAcct: daos[]
    /** An aggregate relationship */
    daosByQuoteAcct_aggregate: daos_aggregate
    /** An aggregate relationship */
    daos_aggregate: daos_aggregate
    decimals: Scalars['smallint']
    image_url: (Scalars['String'] | null)
    /** An array relationship */
    markets: markets[]
    /** An array relationship */
    marketsByQuoteMintAcct: markets[]
    /** An aggregate relationship */
    marketsByQuoteMintAcct_aggregate: markets_aggregate
    /** An aggregate relationship */
    markets_aggregate: markets_aggregate
    mint_acct: Scalars['String']
    name: Scalars['String']
    supply: Scalars['bigint']
    symbol: Scalars['String']
    /** An array relationship */
    token_acct_balances: token_acct_balances[]
    /** An aggregate relationship */
    token_acct_balances_aggregate: token_acct_balances_aggregate
    /** An array relationship */
    token_accts: token_accts[]
    /** An aggregate relationship */
    token_accts_aggregate: token_accts_aggregate
    updated_at: Scalars['timestamptz']
    /** An object relationship */
    vault_by_finalize: (conditional_vaults | null)
    /** An object relationship */
    vault_by_revert: (conditional_vaults | null)
    __typename: 'tokens'
}


/** aggregated selection of "tokens" */
export interface tokens_aggregate {
    aggregate: (tokens_aggregate_fields | null)
    nodes: tokens[]
    __typename: 'tokens_aggregate'
}


/** aggregate fields of "tokens" */
export interface tokens_aggregate_fields {
    avg: (tokens_avg_fields | null)
    count: Scalars['Int']
    max: (tokens_max_fields | null)
    min: (tokens_min_fields | null)
    stddev: (tokens_stddev_fields | null)
    stddev_pop: (tokens_stddev_pop_fields | null)
    stddev_samp: (tokens_stddev_samp_fields | null)
    sum: (tokens_sum_fields | null)
    var_pop: (tokens_var_pop_fields | null)
    var_samp: (tokens_var_samp_fields | null)
    variance: (tokens_variance_fields | null)
    __typename: 'tokens_aggregate_fields'
}


/** aggregate avg on columns */
export interface tokens_avg_fields {
    decimals: (Scalars['Float'] | null)
    supply: (Scalars['Float'] | null)
    __typename: 'tokens_avg_fields'
}


/** unique or primary key constraints on table "tokens" */
export type tokens_constraint = 'tokens_pkey'


/** aggregate max on columns */
export interface tokens_max_fields {
    decimals: (Scalars['smallint'] | null)
    image_url: (Scalars['String'] | null)
    mint_acct: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    supply: (Scalars['bigint'] | null)
    symbol: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'tokens_max_fields'
}


/** aggregate min on columns */
export interface tokens_min_fields {
    decimals: (Scalars['smallint'] | null)
    image_url: (Scalars['String'] | null)
    mint_acct: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    supply: (Scalars['bigint'] | null)
    symbol: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'tokens_min_fields'
}


/** response of any mutation on the table "tokens" */
export interface tokens_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: tokens[]
    __typename: 'tokens_mutation_response'
}


/** select columns of table "tokens" */
export type tokens_select_column = 'decimals' | 'image_url' | 'mint_acct' | 'name' | 'supply' | 'symbol' | 'updated_at'


/** aggregate stddev on columns */
export interface tokens_stddev_fields {
    decimals: (Scalars['Float'] | null)
    supply: (Scalars['Float'] | null)
    __typename: 'tokens_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface tokens_stddev_pop_fields {
    decimals: (Scalars['Float'] | null)
    supply: (Scalars['Float'] | null)
    __typename: 'tokens_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface tokens_stddev_samp_fields {
    decimals: (Scalars['Float'] | null)
    supply: (Scalars['Float'] | null)
    __typename: 'tokens_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface tokens_sum_fields {
    decimals: (Scalars['smallint'] | null)
    supply: (Scalars['bigint'] | null)
    __typename: 'tokens_sum_fields'
}


/** update columns of table "tokens" */
export type tokens_update_column = 'decimals' | 'image_url' | 'mint_acct' | 'name' | 'supply' | 'symbol' | 'updated_at'


/** aggregate var_pop on columns */
export interface tokens_var_pop_fields {
    decimals: (Scalars['Float'] | null)
    supply: (Scalars['Float'] | null)
    __typename: 'tokens_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface tokens_var_samp_fields {
    decimals: (Scalars['Float'] | null)
    supply: (Scalars['Float'] | null)
    __typename: 'tokens_var_samp_fields'
}


/** aggregate variance on columns */
export interface tokens_variance_fields {
    decimals: (Scalars['Float'] | null)
    supply: (Scalars['Float'] | null)
    __typename: 'tokens_variance_fields'
}


/** columns and relationships of "transaction_watcher_transactions" */
export interface transaction_watcher_transactions {
    slot: Scalars['bigint']
    /** An object relationship */
    transaction: transactions
    /** An object relationship */
    transaction_watcher: transaction_watchers
    tx_sig: Scalars['String']
    watcher_acct: Scalars['String']
    __typename: 'transaction_watcher_transactions'
}


/** aggregated selection of "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_aggregate {
    aggregate: (transaction_watcher_transactions_aggregate_fields | null)
    nodes: transaction_watcher_transactions[]
    __typename: 'transaction_watcher_transactions_aggregate'
}


/** aggregate fields of "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_aggregate_fields {
    avg: (transaction_watcher_transactions_avg_fields | null)
    count: Scalars['Int']
    max: (transaction_watcher_transactions_max_fields | null)
    min: (transaction_watcher_transactions_min_fields | null)
    stddev: (transaction_watcher_transactions_stddev_fields | null)
    stddev_pop: (transaction_watcher_transactions_stddev_pop_fields | null)
    stddev_samp: (transaction_watcher_transactions_stddev_samp_fields | null)
    sum: (transaction_watcher_transactions_sum_fields | null)
    var_pop: (transaction_watcher_transactions_var_pop_fields | null)
    var_samp: (transaction_watcher_transactions_var_samp_fields | null)
    variance: (transaction_watcher_transactions_variance_fields | null)
    __typename: 'transaction_watcher_transactions_aggregate_fields'
}


/** aggregate avg on columns */
export interface transaction_watcher_transactions_avg_fields {
    slot: (Scalars['Float'] | null)
    __typename: 'transaction_watcher_transactions_avg_fields'
}


/** unique or primary key constraints on table "transaction_watcher_transactions" */
export type transaction_watcher_transactions_constraint = 'transaction_watcher_transactions_watcher_acct_tx_sig_pk'


/** aggregate max on columns */
export interface transaction_watcher_transactions_max_fields {
    slot: (Scalars['bigint'] | null)
    tx_sig: (Scalars['String'] | null)
    watcher_acct: (Scalars['String'] | null)
    __typename: 'transaction_watcher_transactions_max_fields'
}


/** aggregate min on columns */
export interface transaction_watcher_transactions_min_fields {
    slot: (Scalars['bigint'] | null)
    tx_sig: (Scalars['String'] | null)
    watcher_acct: (Scalars['String'] | null)
    __typename: 'transaction_watcher_transactions_min_fields'
}


/** response of any mutation on the table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: transaction_watcher_transactions[]
    __typename: 'transaction_watcher_transactions_mutation_response'
}


/** select columns of table "transaction_watcher_transactions" */
export type transaction_watcher_transactions_select_column = 'slot' | 'tx_sig' | 'watcher_acct'


/** aggregate stddev on columns */
export interface transaction_watcher_transactions_stddev_fields {
    slot: (Scalars['Float'] | null)
    __typename: 'transaction_watcher_transactions_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface transaction_watcher_transactions_stddev_pop_fields {
    slot: (Scalars['Float'] | null)
    __typename: 'transaction_watcher_transactions_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface transaction_watcher_transactions_stddev_samp_fields {
    slot: (Scalars['Float'] | null)
    __typename: 'transaction_watcher_transactions_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface transaction_watcher_transactions_sum_fields {
    slot: (Scalars['bigint'] | null)
    __typename: 'transaction_watcher_transactions_sum_fields'
}


/** update columns of table "transaction_watcher_transactions" */
export type transaction_watcher_transactions_update_column = 'slot' | 'tx_sig' | 'watcher_acct'


/** aggregate var_pop on columns */
export interface transaction_watcher_transactions_var_pop_fields {
    slot: (Scalars['Float'] | null)
    __typename: 'transaction_watcher_transactions_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface transaction_watcher_transactions_var_samp_fields {
    slot: (Scalars['Float'] | null)
    __typename: 'transaction_watcher_transactions_var_samp_fields'
}


/** aggregate variance on columns */
export interface transaction_watcher_transactions_variance_fields {
    slot: (Scalars['Float'] | null)
    __typename: 'transaction_watcher_transactions_variance_fields'
}


/** columns and relationships of "transaction_watchers" */
export interface transaction_watchers {
    acct: Scalars['String']
    checked_up_to_slot: Scalars['bigint']
    description: Scalars['String']
    failure_log: (Scalars['String'] | null)
    first_tx_sig: (Scalars['String'] | null)
    latest_tx_sig: (Scalars['String'] | null)
    serializer_logic_version: Scalars['smallint']
    status: Scalars['String']
    /** An object relationship */
    transaction: (transactions | null)
    /** An object relationship */
    transactionByLatestTxSig: (transactions | null)
    /** An array relationship */
    transaction_watcher_transactions: transaction_watcher_transactions[]
    /** An aggregate relationship */
    transaction_watcher_transactions_aggregate: transaction_watcher_transactions_aggregate
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'transaction_watchers'
}


/** aggregated selection of "transaction_watchers" */
export interface transaction_watchers_aggregate {
    aggregate: (transaction_watchers_aggregate_fields | null)
    nodes: transaction_watchers[]
    __typename: 'transaction_watchers_aggregate'
}


/** aggregate fields of "transaction_watchers" */
export interface transaction_watchers_aggregate_fields {
    avg: (transaction_watchers_avg_fields | null)
    count: Scalars['Int']
    max: (transaction_watchers_max_fields | null)
    min: (transaction_watchers_min_fields | null)
    stddev: (transaction_watchers_stddev_fields | null)
    stddev_pop: (transaction_watchers_stddev_pop_fields | null)
    stddev_samp: (transaction_watchers_stddev_samp_fields | null)
    sum: (transaction_watchers_sum_fields | null)
    var_pop: (transaction_watchers_var_pop_fields | null)
    var_samp: (transaction_watchers_var_samp_fields | null)
    variance: (transaction_watchers_variance_fields | null)
    __typename: 'transaction_watchers_aggregate_fields'
}


/** aggregate avg on columns */
export interface transaction_watchers_avg_fields {
    checked_up_to_slot: (Scalars['Float'] | null)
    serializer_logic_version: (Scalars['Float'] | null)
    __typename: 'transaction_watchers_avg_fields'
}


/** unique or primary key constraints on table "transaction_watchers" */
export type transaction_watchers_constraint = 'transaction_watchers_pkey'


/** aggregate max on columns */
export interface transaction_watchers_max_fields {
    acct: (Scalars['String'] | null)
    checked_up_to_slot: (Scalars['bigint'] | null)
    description: (Scalars['String'] | null)
    failure_log: (Scalars['String'] | null)
    first_tx_sig: (Scalars['String'] | null)
    latest_tx_sig: (Scalars['String'] | null)
    serializer_logic_version: (Scalars['smallint'] | null)
    status: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'transaction_watchers_max_fields'
}


/** aggregate min on columns */
export interface transaction_watchers_min_fields {
    acct: (Scalars['String'] | null)
    checked_up_to_slot: (Scalars['bigint'] | null)
    description: (Scalars['String'] | null)
    failure_log: (Scalars['String'] | null)
    first_tx_sig: (Scalars['String'] | null)
    latest_tx_sig: (Scalars['String'] | null)
    serializer_logic_version: (Scalars['smallint'] | null)
    status: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'transaction_watchers_min_fields'
}


/** response of any mutation on the table "transaction_watchers" */
export interface transaction_watchers_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: transaction_watchers[]
    __typename: 'transaction_watchers_mutation_response'
}


/** select columns of table "transaction_watchers" */
export type transaction_watchers_select_column = 'acct' | 'checked_up_to_slot' | 'description' | 'failure_log' | 'first_tx_sig' | 'latest_tx_sig' | 'serializer_logic_version' | 'status' | 'updated_at'


/** aggregate stddev on columns */
export interface transaction_watchers_stddev_fields {
    checked_up_to_slot: (Scalars['Float'] | null)
    serializer_logic_version: (Scalars['Float'] | null)
    __typename: 'transaction_watchers_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface transaction_watchers_stddev_pop_fields {
    checked_up_to_slot: (Scalars['Float'] | null)
    serializer_logic_version: (Scalars['Float'] | null)
    __typename: 'transaction_watchers_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface transaction_watchers_stddev_samp_fields {
    checked_up_to_slot: (Scalars['Float'] | null)
    serializer_logic_version: (Scalars['Float'] | null)
    __typename: 'transaction_watchers_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface transaction_watchers_sum_fields {
    checked_up_to_slot: (Scalars['bigint'] | null)
    serializer_logic_version: (Scalars['smallint'] | null)
    __typename: 'transaction_watchers_sum_fields'
}


/** update columns of table "transaction_watchers" */
export type transaction_watchers_update_column = 'acct' | 'checked_up_to_slot' | 'description' | 'failure_log' | 'first_tx_sig' | 'latest_tx_sig' | 'serializer_logic_version' | 'status' | 'updated_at'


/** aggregate var_pop on columns */
export interface transaction_watchers_var_pop_fields {
    checked_up_to_slot: (Scalars['Float'] | null)
    serializer_logic_version: (Scalars['Float'] | null)
    __typename: 'transaction_watchers_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface transaction_watchers_var_samp_fields {
    checked_up_to_slot: (Scalars['Float'] | null)
    serializer_logic_version: (Scalars['Float'] | null)
    __typename: 'transaction_watchers_var_samp_fields'
}


/** aggregate variance on columns */
export interface transaction_watchers_variance_fields {
    checked_up_to_slot: (Scalars['Float'] | null)
    serializer_logic_version: (Scalars['Float'] | null)
    __typename: 'transaction_watchers_variance_fields'
}


/** columns and relationships of "transactions" */
export interface transactions {
    block_time: Scalars['timestamptz']
    failed: Scalars['Boolean']
    /** An array relationship */
    indexer_account_dependencies: indexer_account_dependencies[]
    /** An aggregate relationship */
    indexer_account_dependencies_aggregate: indexer_account_dependencies_aggregate
    main_ix_type: (Scalars['String'] | null)
    /** An object relationship */
    order: (orders | null)
    payload: Scalars['String']
    serializer_logic_version: Scalars['smallint']
    slot: Scalars['bigint']
    /** An array relationship */
    transactionWatchersByLatestTxSig: transaction_watchers[]
    /** An aggregate relationship */
    transactionWatchersByLatestTxSig_aggregate: transaction_watchers_aggregate
    /** An array relationship */
    transaction_watcher_transactions: transaction_watcher_transactions[]
    /** An aggregate relationship */
    transaction_watcher_transactions_aggregate: transaction_watcher_transactions_aggregate
    /** An array relationship */
    transaction_watchers: transaction_watchers[]
    /** An aggregate relationship */
    transaction_watchers_aggregate: transaction_watchers_aggregate
    tx_sig: Scalars['String']
    __typename: 'transactions'
}


/** aggregated selection of "transactions" */
export interface transactions_aggregate {
    aggregate: (transactions_aggregate_fields | null)
    nodes: transactions[]
    __typename: 'transactions_aggregate'
}


/** aggregate fields of "transactions" */
export interface transactions_aggregate_fields {
    avg: (transactions_avg_fields | null)
    count: Scalars['Int']
    max: (transactions_max_fields | null)
    min: (transactions_min_fields | null)
    stddev: (transactions_stddev_fields | null)
    stddev_pop: (transactions_stddev_pop_fields | null)
    stddev_samp: (transactions_stddev_samp_fields | null)
    sum: (transactions_sum_fields | null)
    var_pop: (transactions_var_pop_fields | null)
    var_samp: (transactions_var_samp_fields | null)
    variance: (transactions_variance_fields | null)
    __typename: 'transactions_aggregate_fields'
}


/** aggregate avg on columns */
export interface transactions_avg_fields {
    serializer_logic_version: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'transactions_avg_fields'
}


/** unique or primary key constraints on table "transactions" */
export type transactions_constraint = 'transactions_pkey'


/** aggregate max on columns */
export interface transactions_max_fields {
    block_time: (Scalars['timestamptz'] | null)
    main_ix_type: (Scalars['String'] | null)
    payload: (Scalars['String'] | null)
    serializer_logic_version: (Scalars['smallint'] | null)
    slot: (Scalars['bigint'] | null)
    tx_sig: (Scalars['String'] | null)
    __typename: 'transactions_max_fields'
}


/** aggregate min on columns */
export interface transactions_min_fields {
    block_time: (Scalars['timestamptz'] | null)
    main_ix_type: (Scalars['String'] | null)
    payload: (Scalars['String'] | null)
    serializer_logic_version: (Scalars['smallint'] | null)
    slot: (Scalars['bigint'] | null)
    tx_sig: (Scalars['String'] | null)
    __typename: 'transactions_min_fields'
}


/** response of any mutation on the table "transactions" */
export interface transactions_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: transactions[]
    __typename: 'transactions_mutation_response'
}


/** select columns of table "transactions" */
export type transactions_select_column = 'block_time' | 'failed' | 'main_ix_type' | 'payload' | 'serializer_logic_version' | 'slot' | 'tx_sig'


/** aggregate stddev on columns */
export interface transactions_stddev_fields {
    serializer_logic_version: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'transactions_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface transactions_stddev_pop_fields {
    serializer_logic_version: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'transactions_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface transactions_stddev_samp_fields {
    serializer_logic_version: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'transactions_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface transactions_sum_fields {
    serializer_logic_version: (Scalars['smallint'] | null)
    slot: (Scalars['bigint'] | null)
    __typename: 'transactions_sum_fields'
}


/** update columns of table "transactions" */
export type transactions_update_column = 'block_time' | 'failed' | 'main_ix_type' | 'payload' | 'serializer_logic_version' | 'slot' | 'tx_sig'


/** aggregate var_pop on columns */
export interface transactions_var_pop_fields {
    serializer_logic_version: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'transactions_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface transactions_var_samp_fields {
    serializer_logic_version: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'transactions_var_samp_fields'
}


/** aggregate variance on columns */
export interface transactions_variance_fields {
    serializer_logic_version: (Scalars['Float'] | null)
    slot: (Scalars['Float'] | null)
    __typename: 'transactions_variance_fields'
}


/** columns and relationships of "twap_chart_data" */
export interface twap_chart_data {
    interv: (Scalars['timestamptz'] | null)
    /** An object relationship */
    market: (markets | null)
    market_acct: (Scalars['String'] | null)
    token_amount: (Scalars['bigint'] | null)
    __typename: 'twap_chart_data'
}


/** aggregated selection of "twap_chart_data" */
export interface twap_chart_data_aggregate {
    aggregate: (twap_chart_data_aggregate_fields | null)
    nodes: twap_chart_data[]
    __typename: 'twap_chart_data_aggregate'
}


/** aggregate fields of "twap_chart_data" */
export interface twap_chart_data_aggregate_fields {
    avg: (twap_chart_data_avg_fields | null)
    count: Scalars['Int']
    max: (twap_chart_data_max_fields | null)
    min: (twap_chart_data_min_fields | null)
    stddev: (twap_chart_data_stddev_fields | null)
    stddev_pop: (twap_chart_data_stddev_pop_fields | null)
    stddev_samp: (twap_chart_data_stddev_samp_fields | null)
    sum: (twap_chart_data_sum_fields | null)
    var_pop: (twap_chart_data_var_pop_fields | null)
    var_samp: (twap_chart_data_var_samp_fields | null)
    variance: (twap_chart_data_variance_fields | null)
    __typename: 'twap_chart_data_aggregate_fields'
}


/** aggregate avg on columns */
export interface twap_chart_data_avg_fields {
    token_amount: (Scalars['Float'] | null)
    __typename: 'twap_chart_data_avg_fields'
}


/** aggregate max on columns */
export interface twap_chart_data_max_fields {
    interv: (Scalars['timestamptz'] | null)
    market_acct: (Scalars['String'] | null)
    token_amount: (Scalars['bigint'] | null)
    __typename: 'twap_chart_data_max_fields'
}


/** aggregate min on columns */
export interface twap_chart_data_min_fields {
    interv: (Scalars['timestamptz'] | null)
    market_acct: (Scalars['String'] | null)
    token_amount: (Scalars['bigint'] | null)
    __typename: 'twap_chart_data_min_fields'
}


/** select columns of table "twap_chart_data" */
export type twap_chart_data_select_column = 'interv' | 'market_acct' | 'token_amount'


/** aggregate stddev on columns */
export interface twap_chart_data_stddev_fields {
    token_amount: (Scalars['Float'] | null)
    __typename: 'twap_chart_data_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface twap_chart_data_stddev_pop_fields {
    token_amount: (Scalars['Float'] | null)
    __typename: 'twap_chart_data_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface twap_chart_data_stddev_samp_fields {
    token_amount: (Scalars['Float'] | null)
    __typename: 'twap_chart_data_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface twap_chart_data_sum_fields {
    token_amount: (Scalars['bigint'] | null)
    __typename: 'twap_chart_data_sum_fields'
}


/** aggregate var_pop on columns */
export interface twap_chart_data_var_pop_fields {
    token_amount: (Scalars['Float'] | null)
    __typename: 'twap_chart_data_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface twap_chart_data_var_samp_fields {
    token_amount: (Scalars['Float'] | null)
    __typename: 'twap_chart_data_var_samp_fields'
}


/** aggregate variance on columns */
export interface twap_chart_data_variance_fields {
    token_amount: (Scalars['Float'] | null)
    __typename: 'twap_chart_data_variance_fields'
}


/** columns and relationships of "twaps" */
export interface twaps {
    created_at: Scalars['timestamptz']
    last_observation: (Scalars['numeric'] | null)
    last_price: (Scalars['numeric'] | null)
    /** An object relationship */
    market: markets
    market_acct: Scalars['String']
    observation_agg: Scalars['numeric']
    /** An object relationship */
    proposal: proposals
    proposal_acct: Scalars['String']
    token_amount: Scalars['bigint']
    updated_slot: Scalars['bigint']
    __typename: 'twaps'
}


/** aggregated selection of "twaps" */
export interface twaps_aggregate {
    aggregate: (twaps_aggregate_fields | null)
    nodes: twaps[]
    __typename: 'twaps_aggregate'
}


/** aggregate fields of "twaps" */
export interface twaps_aggregate_fields {
    avg: (twaps_avg_fields | null)
    count: Scalars['Int']
    max: (twaps_max_fields | null)
    min: (twaps_min_fields | null)
    stddev: (twaps_stddev_fields | null)
    stddev_pop: (twaps_stddev_pop_fields | null)
    stddev_samp: (twaps_stddev_samp_fields | null)
    sum: (twaps_sum_fields | null)
    var_pop: (twaps_var_pop_fields | null)
    var_samp: (twaps_var_samp_fields | null)
    variance: (twaps_variance_fields | null)
    __typename: 'twaps_aggregate_fields'
}


/** aggregate avg on columns */
export interface twaps_avg_fields {
    last_observation: (Scalars['Float'] | null)
    last_price: (Scalars['Float'] | null)
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_avg_fields'
}


/** unique or primary key constraints on table "twaps" */
export type twaps_constraint = 'twaps_updated_slot_market_acct_pk'


/** aggregate max on columns */
export interface twaps_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    last_observation: (Scalars['numeric'] | null)
    last_price: (Scalars['numeric'] | null)
    market_acct: (Scalars['String'] | null)
    observation_agg: (Scalars['numeric'] | null)
    proposal_acct: (Scalars['String'] | null)
    token_amount: (Scalars['bigint'] | null)
    updated_slot: (Scalars['bigint'] | null)
    __typename: 'twaps_max_fields'
}


/** aggregate min on columns */
export interface twaps_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    last_observation: (Scalars['numeric'] | null)
    last_price: (Scalars['numeric'] | null)
    market_acct: (Scalars['String'] | null)
    observation_agg: (Scalars['numeric'] | null)
    proposal_acct: (Scalars['String'] | null)
    token_amount: (Scalars['bigint'] | null)
    updated_slot: (Scalars['bigint'] | null)
    __typename: 'twaps_min_fields'
}


/** response of any mutation on the table "twaps" */
export interface twaps_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: twaps[]
    __typename: 'twaps_mutation_response'
}


/** select columns of table "twaps" */
export type twaps_select_column = 'created_at' | 'last_observation' | 'last_price' | 'market_acct' | 'observation_agg' | 'proposal_acct' | 'token_amount' | 'updated_slot'


/** aggregate stddev on columns */
export interface twaps_stddev_fields {
    last_observation: (Scalars['Float'] | null)
    last_price: (Scalars['Float'] | null)
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface twaps_stddev_pop_fields {
    last_observation: (Scalars['Float'] | null)
    last_price: (Scalars['Float'] | null)
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface twaps_stddev_samp_fields {
    last_observation: (Scalars['Float'] | null)
    last_price: (Scalars['Float'] | null)
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface twaps_sum_fields {
    last_observation: (Scalars['numeric'] | null)
    last_price: (Scalars['numeric'] | null)
    observation_agg: (Scalars['numeric'] | null)
    token_amount: (Scalars['bigint'] | null)
    updated_slot: (Scalars['bigint'] | null)
    __typename: 'twaps_sum_fields'
}


/** update columns of table "twaps" */
export type twaps_update_column = 'created_at' | 'last_observation' | 'last_price' | 'market_acct' | 'observation_agg' | 'proposal_acct' | 'token_amount' | 'updated_slot'


/** aggregate var_pop on columns */
export interface twaps_var_pop_fields {
    last_observation: (Scalars['Float'] | null)
    last_price: (Scalars['Float'] | null)
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface twaps_var_samp_fields {
    last_observation: (Scalars['Float'] | null)
    last_price: (Scalars['Float'] | null)
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_var_samp_fields'
}


/** aggregate variance on columns */
export interface twaps_variance_fields {
    last_observation: (Scalars['Float'] | null)
    last_price: (Scalars['Float'] | null)
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_variance_fields'
}


/** columns and relationships of "users" */
export interface users {
    created_at: Scalars['timestamptz']
    /** An array relationship */
    sessions: sessions[]
    /** An aggregate relationship */
    sessions_aggregate: sessions_aggregate
    user_acct: Scalars['String']
    __typename: 'users'
}


/** aggregated selection of "users" */
export interface users_aggregate {
    aggregate: (users_aggregate_fields | null)
    nodes: users[]
    __typename: 'users_aggregate'
}


/** aggregate fields of "users" */
export interface users_aggregate_fields {
    count: Scalars['Int']
    max: (users_max_fields | null)
    min: (users_min_fields | null)
    __typename: 'users_aggregate_fields'
}


/** unique or primary key constraints on table "users" */
export type users_constraint = 'users_pkey'


/** aggregate max on columns */
export interface users_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    user_acct: (Scalars['String'] | null)
    __typename: 'users_max_fields'
}


/** aggregate min on columns */
export interface users_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    user_acct: (Scalars['String'] | null)
    __typename: 'users_min_fields'
}


/** response of any mutation on the table "users" */
export interface users_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: users[]
    __typename: 'users_mutation_response'
}


/** select columns of table "users" */
export type users_select_column = 'created_at' | 'user_acct'


/** update columns of table "users" */
export type users_update_column = 'created_at' | 'user_acct'

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** columns and relationships of "candles" */
export interface candlesGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    /** An object relationship */
    market?: marketsGenqlSelection
    market_acct?: boolean | number
    open?: boolean | number
    timestamp?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "candles" */
export interface candles_aggregateGenqlSelection{
    aggregate?: candles_aggregate_fieldsGenqlSelection
    nodes?: candlesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface candles_aggregate_bool_exp {count?: (candles_aggregate_bool_exp_count | null)}

export interface candles_aggregate_bool_exp_count {arguments?: (candles_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (candles_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "candles" */
export interface candles_aggregate_fieldsGenqlSelection{
    avg?: candles_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (candles_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: candles_max_fieldsGenqlSelection
    min?: candles_min_fieldsGenqlSelection
    stddev?: candles_stddev_fieldsGenqlSelection
    stddev_pop?: candles_stddev_pop_fieldsGenqlSelection
    stddev_samp?: candles_stddev_samp_fieldsGenqlSelection
    sum?: candles_sum_fieldsGenqlSelection
    var_pop?: candles_var_pop_fieldsGenqlSelection
    var_samp?: candles_var_samp_fieldsGenqlSelection
    variance?: candles_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "candles" */
export interface candles_aggregate_order_by {avg?: (candles_avg_order_by | null),count?: (order_by | null),max?: (candles_max_order_by | null),min?: (candles_min_order_by | null),stddev?: (candles_stddev_order_by | null),stddev_pop?: (candles_stddev_pop_order_by | null),stddev_samp?: (candles_stddev_samp_order_by | null),sum?: (candles_sum_order_by | null),var_pop?: (candles_var_pop_order_by | null),var_samp?: (candles_var_samp_order_by | null),variance?: (candles_variance_order_by | null)}


/** input type for inserting array relation for remote table "candles" */
export interface candles_arr_rel_insert_input {data: candles_insert_input[],
/** upsert condition */
on_conflict?: (candles_on_conflict | null)}


/** aggregate avg on columns */
export interface candles_avg_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    open?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "candles" */
export interface candles_avg_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** Boolean expression to filter rows from the table "candles". All fields are combined with a logical 'AND'. */
export interface candles_bool_exp {_and?: (candles_bool_exp[] | null),_not?: (candles_bool_exp | null),_or?: (candles_bool_exp[] | null),candle_average?: (bigint_comparison_exp | null),candle_duration?: (Int_comparison_exp | null),close?: (bigint_comparison_exp | null),cond_market_twap?: (bigint_comparison_exp | null),high?: (bigint_comparison_exp | null),low?: (bigint_comparison_exp | null),market?: (markets_bool_exp | null),market_acct?: (String_comparison_exp | null),open?: (bigint_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),volume?: (bigint_comparison_exp | null)}


/** input type for incrementing numeric columns in table "candles" */
export interface candles_inc_input {candle_average?: (Scalars['bigint'] | null),candle_duration?: (Scalars['Int'] | null),close?: (Scalars['bigint'] | null),cond_market_twap?: (Scalars['bigint'] | null),high?: (Scalars['bigint'] | null),low?: (Scalars['bigint'] | null),open?: (Scalars['bigint'] | null),volume?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "candles" */
export interface candles_insert_input {candle_average?: (Scalars['bigint'] | null),candle_duration?: (Scalars['Int'] | null),close?: (Scalars['bigint'] | null),cond_market_twap?: (Scalars['bigint'] | null),high?: (Scalars['bigint'] | null),low?: (Scalars['bigint'] | null),market?: (markets_obj_rel_insert_input | null),market_acct?: (Scalars['String'] | null),open?: (Scalars['bigint'] | null),timestamp?: (Scalars['timestamptz'] | null),volume?: (Scalars['bigint'] | null)}


/** aggregate max on columns */
export interface candles_max_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    market_acct?: boolean | number
    open?: boolean | number
    timestamp?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "candles" */
export interface candles_max_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),market_acct?: (order_by | null),open?: (order_by | null),timestamp?: (order_by | null),volume?: (order_by | null)}


/** aggregate min on columns */
export interface candles_min_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    market_acct?: boolean | number
    open?: boolean | number
    timestamp?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "candles" */
export interface candles_min_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),market_acct?: (order_by | null),open?: (order_by | null),timestamp?: (order_by | null),volume?: (order_by | null)}


/** response of any mutation on the table "candles" */
export interface candles_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: candlesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "candles" */
export interface candles_on_conflict {constraint: candles_constraint,update_columns?: candles_update_column[],where?: (candles_bool_exp | null)}


/** Ordering options when selecting data from "candles". */
export interface candles_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),market?: (markets_order_by | null),market_acct?: (order_by | null),open?: (order_by | null),timestamp?: (order_by | null),volume?: (order_by | null)}


/** primary key columns input for table: candles */
export interface candles_pk_columns_input {candle_duration: Scalars['Int'],market_acct: Scalars['String'],timestamp: Scalars['timestamptz']}


/** input type for updating data in table "candles" */
export interface candles_set_input {candle_average?: (Scalars['bigint'] | null),candle_duration?: (Scalars['Int'] | null),close?: (Scalars['bigint'] | null),cond_market_twap?: (Scalars['bigint'] | null),high?: (Scalars['bigint'] | null),low?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),open?: (Scalars['bigint'] | null),timestamp?: (Scalars['timestamptz'] | null),volume?: (Scalars['bigint'] | null)}


/** aggregate stddev on columns */
export interface candles_stddev_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    open?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "candles" */
export interface candles_stddev_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface candles_stddev_pop_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    open?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "candles" */
export interface candles_stddev_pop_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface candles_stddev_samp_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    open?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "candles" */
export interface candles_stddev_samp_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** Streaming cursor of the table "candles" */
export interface candles_stream_cursor_input {
/** Stream column input with initial value */
initial_value: candles_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface candles_stream_cursor_value_input {candle_average?: (Scalars['bigint'] | null),candle_duration?: (Scalars['Int'] | null),close?: (Scalars['bigint'] | null),cond_market_twap?: (Scalars['bigint'] | null),high?: (Scalars['bigint'] | null),low?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),open?: (Scalars['bigint'] | null),timestamp?: (Scalars['timestamptz'] | null),volume?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface candles_sum_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    open?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "candles" */
export interface candles_sum_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}

export interface candles_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (candles_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (candles_set_input | null),
/** filter the rows which have to be updated */
where: candles_bool_exp}


/** aggregate var_pop on columns */
export interface candles_var_pop_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    open?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "candles" */
export interface candles_var_pop_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** aggregate var_samp on columns */
export interface candles_var_samp_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    open?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "candles" */
export interface candles_var_samp_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** aggregate variance on columns */
export interface candles_variance_fieldsGenqlSelection{
    candle_average?: boolean | number
    candle_duration?: boolean | number
    close?: boolean | number
    cond_market_twap?: boolean | number
    high?: boolean | number
    low?: boolean | number
    open?: boolean | number
    volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "candles" */
export interface candles_variance_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),open?: (order_by | null),volume?: (order_by | null)}


/** columns and relationships of "comments" */
export interface commentsGenqlSelection{
    /** An object relationship */
    comment?: commentsGenqlSelection
    comment_id?: boolean | number
    commentor_acct?: boolean | number
    /** An array relationship */
    comments?: (commentsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (comments_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (comments_order_by[] | null), 
    /** filter the rows returned */
    where?: (comments_bool_exp | null)} })
    /** An aggregate relationship */
    comments_aggregate?: (comments_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (comments_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (comments_order_by[] | null), 
    /** filter the rows returned */
    where?: (comments_bool_exp | null)} })
    content?: boolean | number
    created_at?: boolean | number
    /** An object relationship */
    proposal?: proposalsGenqlSelection
    proposal_acct?: boolean | number
    /** An array relationship */
    reactions?: (reactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (reactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (reactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (reactions_bool_exp | null)} })
    /** An aggregate relationship */
    reactions_aggregate?: (reactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (reactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (reactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (reactions_bool_exp | null)} })
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "comments" */
export interface comments_aggregateGenqlSelection{
    aggregate?: comments_aggregate_fieldsGenqlSelection
    nodes?: commentsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface comments_aggregate_bool_exp {count?: (comments_aggregate_bool_exp_count | null)}

export interface comments_aggregate_bool_exp_count {arguments?: (comments_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (comments_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "comments" */
export interface comments_aggregate_fieldsGenqlSelection{
    avg?: comments_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (comments_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: comments_max_fieldsGenqlSelection
    min?: comments_min_fieldsGenqlSelection
    stddev?: comments_stddev_fieldsGenqlSelection
    stddev_pop?: comments_stddev_pop_fieldsGenqlSelection
    stddev_samp?: comments_stddev_samp_fieldsGenqlSelection
    sum?: comments_sum_fieldsGenqlSelection
    var_pop?: comments_var_pop_fieldsGenqlSelection
    var_samp?: comments_var_samp_fieldsGenqlSelection
    variance?: comments_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "comments" */
export interface comments_aggregate_order_by {avg?: (comments_avg_order_by | null),count?: (order_by | null),max?: (comments_max_order_by | null),min?: (comments_min_order_by | null),stddev?: (comments_stddev_order_by | null),stddev_pop?: (comments_stddev_pop_order_by | null),stddev_samp?: (comments_stddev_samp_order_by | null),sum?: (comments_sum_order_by | null),var_pop?: (comments_var_pop_order_by | null),var_samp?: (comments_var_samp_order_by | null),variance?: (comments_variance_order_by | null)}


/** input type for inserting array relation for remote table "comments" */
export interface comments_arr_rel_insert_input {data: comments_insert_input[],
/** upsert condition */
on_conflict?: (comments_on_conflict | null)}


/** aggregate avg on columns */
export interface comments_avg_fieldsGenqlSelection{
    comment_id?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "comments" */
export interface comments_avg_order_by {comment_id?: (order_by | null),responding_comment_id?: (order_by | null)}


/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export interface comments_bool_exp {_and?: (comments_bool_exp[] | null),_not?: (comments_bool_exp | null),_or?: (comments_bool_exp[] | null),comment?: (comments_bool_exp | null),comment_id?: (bigint_comparison_exp | null),commentor_acct?: (String_comparison_exp | null),comments?: (comments_bool_exp | null),comments_aggregate?: (comments_aggregate_bool_exp | null),content?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),proposal?: (proposals_bool_exp | null),proposal_acct?: (String_comparison_exp | null),reactions?: (reactions_bool_exp | null),reactions_aggregate?: (reactions_aggregate_bool_exp | null),responding_comment_id?: (bigint_comparison_exp | null)}


/** input type for incrementing numeric columns in table "comments" */
export interface comments_inc_input {comment_id?: (Scalars['bigint'] | null),responding_comment_id?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "comments" */
export interface comments_insert_input {comment?: (comments_obj_rel_insert_input | null),comment_id?: (Scalars['bigint'] | null),commentor_acct?: (Scalars['String'] | null),comments?: (comments_arr_rel_insert_input | null),content?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),proposal?: (proposals_obj_rel_insert_input | null),proposal_acct?: (Scalars['String'] | null),reactions?: (reactions_arr_rel_insert_input | null),responding_comment_id?: (Scalars['bigint'] | null)}


/** aggregate max on columns */
export interface comments_max_fieldsGenqlSelection{
    comment_id?: boolean | number
    commentor_acct?: boolean | number
    content?: boolean | number
    created_at?: boolean | number
    proposal_acct?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "comments" */
export interface comments_max_order_by {comment_id?: (order_by | null),commentor_acct?: (order_by | null),content?: (order_by | null),created_at?: (order_by | null),proposal_acct?: (order_by | null),responding_comment_id?: (order_by | null)}


/** aggregate min on columns */
export interface comments_min_fieldsGenqlSelection{
    comment_id?: boolean | number
    commentor_acct?: boolean | number
    content?: boolean | number
    created_at?: boolean | number
    proposal_acct?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "comments" */
export interface comments_min_order_by {comment_id?: (order_by | null),commentor_acct?: (order_by | null),content?: (order_by | null),created_at?: (order_by | null),proposal_acct?: (order_by | null),responding_comment_id?: (order_by | null)}


/** response of any mutation on the table "comments" */
export interface comments_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: commentsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "comments" */
export interface comments_obj_rel_insert_input {data: comments_insert_input,
/** upsert condition */
on_conflict?: (comments_on_conflict | null)}


/** on_conflict condition type for table "comments" */
export interface comments_on_conflict {constraint: comments_constraint,update_columns?: comments_update_column[],where?: (comments_bool_exp | null)}


/** Ordering options when selecting data from "comments". */
export interface comments_order_by {comment?: (comments_order_by | null),comment_id?: (order_by | null),commentor_acct?: (order_by | null),comments_aggregate?: (comments_aggregate_order_by | null),content?: (order_by | null),created_at?: (order_by | null),proposal?: (proposals_order_by | null),proposal_acct?: (order_by | null),reactions_aggregate?: (reactions_aggregate_order_by | null),responding_comment_id?: (order_by | null)}


/** primary key columns input for table: comments */
export interface comments_pk_columns_input {comment_id: Scalars['bigint']}


/** input type for updating data in table "comments" */
export interface comments_set_input {comment_id?: (Scalars['bigint'] | null),commentor_acct?: (Scalars['String'] | null),content?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),proposal_acct?: (Scalars['String'] | null),responding_comment_id?: (Scalars['bigint'] | null)}


/** aggregate stddev on columns */
export interface comments_stddev_fieldsGenqlSelection{
    comment_id?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "comments" */
export interface comments_stddev_order_by {comment_id?: (order_by | null),responding_comment_id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface comments_stddev_pop_fieldsGenqlSelection{
    comment_id?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "comments" */
export interface comments_stddev_pop_order_by {comment_id?: (order_by | null),responding_comment_id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface comments_stddev_samp_fieldsGenqlSelection{
    comment_id?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "comments" */
export interface comments_stddev_samp_order_by {comment_id?: (order_by | null),responding_comment_id?: (order_by | null)}


/** Streaming cursor of the table "comments" */
export interface comments_stream_cursor_input {
/** Stream column input with initial value */
initial_value: comments_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface comments_stream_cursor_value_input {comment_id?: (Scalars['bigint'] | null),commentor_acct?: (Scalars['String'] | null),content?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),proposal_acct?: (Scalars['String'] | null),responding_comment_id?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface comments_sum_fieldsGenqlSelection{
    comment_id?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "comments" */
export interface comments_sum_order_by {comment_id?: (order_by | null),responding_comment_id?: (order_by | null)}

export interface comments_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (comments_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (comments_set_input | null),
/** filter the rows which have to be updated */
where: comments_bool_exp}


/** aggregate var_pop on columns */
export interface comments_var_pop_fieldsGenqlSelection{
    comment_id?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "comments" */
export interface comments_var_pop_order_by {comment_id?: (order_by | null),responding_comment_id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface comments_var_samp_fieldsGenqlSelection{
    comment_id?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "comments" */
export interface comments_var_samp_order_by {comment_id?: (order_by | null),responding_comment_id?: (order_by | null)}


/** aggregate variance on columns */
export interface comments_variance_fieldsGenqlSelection{
    comment_id?: boolean | number
    responding_comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "comments" */
export interface comments_variance_order_by {comment_id?: (order_by | null),responding_comment_id?: (order_by | null)}


/** columns and relationships of "conditional_vaults" */
export interface conditional_vaultsGenqlSelection{
    cond_finalize_token_mint_acct?: boolean | number
    cond_revert_token_mint_acct?: boolean | number
    cond_vault_acct?: boolean | number
    nonce?: boolean | number
    /** An array relationship */
    proposals?: (proposalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    /** An array relationship */
    proposalsByQuoteVault?: (proposalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    /** An aggregate relationship */
    proposalsByQuoteVault_aggregate?: (proposals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    /** An aggregate relationship */
    proposals_aggregate?: (proposals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    settlement_authority?: boolean | number
    status?: boolean | number
    /** An object relationship */
    token?: tokensGenqlSelection
    underlying_mint_acct?: boolean | number
    underlying_token_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "conditional_vaults" */
export interface conditional_vaults_aggregateGenqlSelection{
    aggregate?: conditional_vaults_aggregate_fieldsGenqlSelection
    nodes?: conditional_vaultsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface conditional_vaults_aggregate_bool_exp {count?: (conditional_vaults_aggregate_bool_exp_count | null)}

export interface conditional_vaults_aggregate_bool_exp_count {arguments?: (conditional_vaults_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (conditional_vaults_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "conditional_vaults" */
export interface conditional_vaults_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (conditional_vaults_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: conditional_vaults_max_fieldsGenqlSelection
    min?: conditional_vaults_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "conditional_vaults" */
export interface conditional_vaults_aggregate_order_by {count?: (order_by | null),max?: (conditional_vaults_max_order_by | null),min?: (conditional_vaults_min_order_by | null)}


/** input type for inserting array relation for remote table "conditional_vaults" */
export interface conditional_vaults_arr_rel_insert_input {data: conditional_vaults_insert_input[],
/** upsert condition */
on_conflict?: (conditional_vaults_on_conflict | null)}


/** Boolean expression to filter rows from the table "conditional_vaults". All fields are combined with a logical 'AND'. */
export interface conditional_vaults_bool_exp {_and?: (conditional_vaults_bool_exp[] | null),_not?: (conditional_vaults_bool_exp | null),_or?: (conditional_vaults_bool_exp[] | null),cond_finalize_token_mint_acct?: (String_comparison_exp | null),cond_revert_token_mint_acct?: (String_comparison_exp | null),cond_vault_acct?: (String_comparison_exp | null),nonce?: (String_comparison_exp | null),proposals?: (proposals_bool_exp | null),proposalsByQuoteVault?: (proposals_bool_exp | null),proposalsByQuoteVault_aggregate?: (proposals_aggregate_bool_exp | null),proposals_aggregate?: (proposals_aggregate_bool_exp | null),settlement_authority?: (String_comparison_exp | null),status?: (String_comparison_exp | null),token?: (tokens_bool_exp | null),underlying_mint_acct?: (String_comparison_exp | null),underlying_token_acct?: (String_comparison_exp | null)}


/** input type for inserting data into table "conditional_vaults" */
export interface conditional_vaults_insert_input {cond_finalize_token_mint_acct?: (Scalars['String'] | null),cond_revert_token_mint_acct?: (Scalars['String'] | null),cond_vault_acct?: (Scalars['String'] | null),nonce?: (Scalars['String'] | null),proposals?: (proposals_arr_rel_insert_input | null),proposalsByQuoteVault?: (proposals_arr_rel_insert_input | null),settlement_authority?: (Scalars['String'] | null),status?: (Scalars['String'] | null),token?: (tokens_obj_rel_insert_input | null),underlying_mint_acct?: (Scalars['String'] | null),underlying_token_acct?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface conditional_vaults_max_fieldsGenqlSelection{
    cond_finalize_token_mint_acct?: boolean | number
    cond_revert_token_mint_acct?: boolean | number
    cond_vault_acct?: boolean | number
    nonce?: boolean | number
    settlement_authority?: boolean | number
    status?: boolean | number
    underlying_mint_acct?: boolean | number
    underlying_token_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "conditional_vaults" */
export interface conditional_vaults_max_order_by {cond_finalize_token_mint_acct?: (order_by | null),cond_revert_token_mint_acct?: (order_by | null),cond_vault_acct?: (order_by | null),nonce?: (order_by | null),settlement_authority?: (order_by | null),status?: (order_by | null),underlying_mint_acct?: (order_by | null),underlying_token_acct?: (order_by | null)}


/** aggregate min on columns */
export interface conditional_vaults_min_fieldsGenqlSelection{
    cond_finalize_token_mint_acct?: boolean | number
    cond_revert_token_mint_acct?: boolean | number
    cond_vault_acct?: boolean | number
    nonce?: boolean | number
    settlement_authority?: boolean | number
    status?: boolean | number
    underlying_mint_acct?: boolean | number
    underlying_token_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "conditional_vaults" */
export interface conditional_vaults_min_order_by {cond_finalize_token_mint_acct?: (order_by | null),cond_revert_token_mint_acct?: (order_by | null),cond_vault_acct?: (order_by | null),nonce?: (order_by | null),settlement_authority?: (order_by | null),status?: (order_by | null),underlying_mint_acct?: (order_by | null),underlying_token_acct?: (order_by | null)}


/** response of any mutation on the table "conditional_vaults" */
export interface conditional_vaults_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: conditional_vaultsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "conditional_vaults" */
export interface conditional_vaults_obj_rel_insert_input {data: conditional_vaults_insert_input,
/** upsert condition */
on_conflict?: (conditional_vaults_on_conflict | null)}


/** on_conflict condition type for table "conditional_vaults" */
export interface conditional_vaults_on_conflict {constraint: conditional_vaults_constraint,update_columns?: conditional_vaults_update_column[],where?: (conditional_vaults_bool_exp | null)}


/** Ordering options when selecting data from "conditional_vaults". */
export interface conditional_vaults_order_by {cond_finalize_token_mint_acct?: (order_by | null),cond_revert_token_mint_acct?: (order_by | null),cond_vault_acct?: (order_by | null),nonce?: (order_by | null),proposalsByQuoteVault_aggregate?: (proposals_aggregate_order_by | null),proposals_aggregate?: (proposals_aggregate_order_by | null),settlement_authority?: (order_by | null),status?: (order_by | null),token?: (tokens_order_by | null),underlying_mint_acct?: (order_by | null),underlying_token_acct?: (order_by | null)}


/** primary key columns input for table: conditional_vaults */
export interface conditional_vaults_pk_columns_input {cond_vault_acct: Scalars['String']}


/** input type for updating data in table "conditional_vaults" */
export interface conditional_vaults_set_input {cond_finalize_token_mint_acct?: (Scalars['String'] | null),cond_revert_token_mint_acct?: (Scalars['String'] | null),cond_vault_acct?: (Scalars['String'] | null),nonce?: (Scalars['String'] | null),settlement_authority?: (Scalars['String'] | null),status?: (Scalars['String'] | null),underlying_mint_acct?: (Scalars['String'] | null),underlying_token_acct?: (Scalars['String'] | null)}


/** Streaming cursor of the table "conditional_vaults" */
export interface conditional_vaults_stream_cursor_input {
/** Stream column input with initial value */
initial_value: conditional_vaults_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface conditional_vaults_stream_cursor_value_input {cond_finalize_token_mint_acct?: (Scalars['String'] | null),cond_revert_token_mint_acct?: (Scalars['String'] | null),cond_vault_acct?: (Scalars['String'] | null),nonce?: (Scalars['String'] | null),settlement_authority?: (Scalars['String'] | null),status?: (Scalars['String'] | null),underlying_mint_acct?: (Scalars['String'] | null),underlying_token_acct?: (Scalars['String'] | null)}

export interface conditional_vaults_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (conditional_vaults_set_input | null),
/** filter the rows which have to be updated */
where: conditional_vaults_bool_exp}


/** columns and relationships of "dao_details" */
export interface dao_detailsGenqlSelection{
    admin_accts?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    creator_acct?: boolean | number
    dao_id?: boolean | number
    /** An array relationship */
    daos?: (daosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** An aggregate relationship */
    daos_aggregate?: (daos_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    description?: boolean | number
    fail_token_image_url?: boolean | number
    github?: boolean | number
    image_url?: boolean | number
    is_hide?: boolean | number
    lp_token_image_url?: boolean | number
    name?: boolean | number
    pass_token_image_url?: boolean | number
    slug?: boolean | number
    token_image_url?: boolean | number
    url?: boolean | number
    x_account?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "dao_details" */
export interface dao_details_aggregateGenqlSelection{
    aggregate?: dao_details_aggregate_fieldsGenqlSelection
    nodes?: dao_detailsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "dao_details" */
export interface dao_details_aggregate_fieldsGenqlSelection{
    avg?: dao_details_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (dao_details_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: dao_details_max_fieldsGenqlSelection
    min?: dao_details_min_fieldsGenqlSelection
    stddev?: dao_details_stddev_fieldsGenqlSelection
    stddev_pop?: dao_details_stddev_pop_fieldsGenqlSelection
    stddev_samp?: dao_details_stddev_samp_fieldsGenqlSelection
    sum?: dao_details_sum_fieldsGenqlSelection
    var_pop?: dao_details_var_pop_fieldsGenqlSelection
    var_samp?: dao_details_var_samp_fieldsGenqlSelection
    variance?: dao_details_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface dao_details_append_input {admin_accts?: (Scalars['jsonb'] | null)}


/** aggregate avg on columns */
export interface dao_details_avg_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dao_details". All fields are combined with a logical 'AND'. */
export interface dao_details_bool_exp {_and?: (dao_details_bool_exp[] | null),_not?: (dao_details_bool_exp | null),_or?: (dao_details_bool_exp[] | null),admin_accts?: (jsonb_comparison_exp | null),creator_acct?: (String_comparison_exp | null),dao_id?: (bigint_comparison_exp | null),daos?: (daos_bool_exp | null),daos_aggregate?: (daos_aggregate_bool_exp | null),description?: (String_comparison_exp | null),fail_token_image_url?: (String_comparison_exp | null),github?: (String_comparison_exp | null),image_url?: (String_comparison_exp | null),is_hide?: (Boolean_comparison_exp | null),lp_token_image_url?: (String_comparison_exp | null),name?: (String_comparison_exp | null),pass_token_image_url?: (String_comparison_exp | null),slug?: (String_comparison_exp | null),token_image_url?: (String_comparison_exp | null),url?: (String_comparison_exp | null),x_account?: (String_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface dao_details_delete_at_path_input {admin_accts?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface dao_details_delete_elem_input {admin_accts?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface dao_details_delete_key_input {admin_accts?: (Scalars['String'] | null)}


/** input type for incrementing numeric columns in table "dao_details" */
export interface dao_details_inc_input {dao_id?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "dao_details" */
export interface dao_details_insert_input {admin_accts?: (Scalars['jsonb'] | null),creator_acct?: (Scalars['String'] | null),dao_id?: (Scalars['bigint'] | null),daos?: (daos_arr_rel_insert_input | null),description?: (Scalars['String'] | null),fail_token_image_url?: (Scalars['String'] | null),github?: (Scalars['String'] | null),image_url?: (Scalars['String'] | null),is_hide?: (Scalars['Boolean'] | null),lp_token_image_url?: (Scalars['String'] | null),name?: (Scalars['String'] | null),pass_token_image_url?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),token_image_url?: (Scalars['String'] | null),url?: (Scalars['String'] | null),x_account?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface dao_details_max_fieldsGenqlSelection{
    creator_acct?: boolean | number
    dao_id?: boolean | number
    description?: boolean | number
    fail_token_image_url?: boolean | number
    github?: boolean | number
    image_url?: boolean | number
    lp_token_image_url?: boolean | number
    name?: boolean | number
    pass_token_image_url?: boolean | number
    slug?: boolean | number
    token_image_url?: boolean | number
    url?: boolean | number
    x_account?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dao_details_min_fieldsGenqlSelection{
    creator_acct?: boolean | number
    dao_id?: boolean | number
    description?: boolean | number
    fail_token_image_url?: boolean | number
    github?: boolean | number
    image_url?: boolean | number
    lp_token_image_url?: boolean | number
    name?: boolean | number
    pass_token_image_url?: boolean | number
    slug?: boolean | number
    token_image_url?: boolean | number
    url?: boolean | number
    x_account?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "dao_details" */
export interface dao_details_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: dao_detailsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "dao_details" */
export interface dao_details_obj_rel_insert_input {data: dao_details_insert_input,
/** upsert condition */
on_conflict?: (dao_details_on_conflict | null)}


/** on_conflict condition type for table "dao_details" */
export interface dao_details_on_conflict {constraint: dao_details_constraint,update_columns?: dao_details_update_column[],where?: (dao_details_bool_exp | null)}


/** Ordering options when selecting data from "dao_details". */
export interface dao_details_order_by {admin_accts?: (order_by | null),creator_acct?: (order_by | null),dao_id?: (order_by | null),daos_aggregate?: (daos_aggregate_order_by | null),description?: (order_by | null),fail_token_image_url?: (order_by | null),github?: (order_by | null),image_url?: (order_by | null),is_hide?: (order_by | null),lp_token_image_url?: (order_by | null),name?: (order_by | null),pass_token_image_url?: (order_by | null),slug?: (order_by | null),token_image_url?: (order_by | null),url?: (order_by | null),x_account?: (order_by | null)}


/** primary key columns input for table: dao_details */
export interface dao_details_pk_columns_input {dao_id: Scalars['bigint']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface dao_details_prepend_input {admin_accts?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "dao_details" */
export interface dao_details_set_input {admin_accts?: (Scalars['jsonb'] | null),creator_acct?: (Scalars['String'] | null),dao_id?: (Scalars['bigint'] | null),description?: (Scalars['String'] | null),fail_token_image_url?: (Scalars['String'] | null),github?: (Scalars['String'] | null),image_url?: (Scalars['String'] | null),is_hide?: (Scalars['Boolean'] | null),lp_token_image_url?: (Scalars['String'] | null),name?: (Scalars['String'] | null),pass_token_image_url?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),token_image_url?: (Scalars['String'] | null),url?: (Scalars['String'] | null),x_account?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface dao_details_stddev_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface dao_details_stddev_pop_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface dao_details_stddev_samp_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "dao_details" */
export interface dao_details_stream_cursor_input {
/** Stream column input with initial value */
initial_value: dao_details_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface dao_details_stream_cursor_value_input {admin_accts?: (Scalars['jsonb'] | null),creator_acct?: (Scalars['String'] | null),dao_id?: (Scalars['bigint'] | null),description?: (Scalars['String'] | null),fail_token_image_url?: (Scalars['String'] | null),github?: (Scalars['String'] | null),image_url?: (Scalars['String'] | null),is_hide?: (Scalars['Boolean'] | null),lp_token_image_url?: (Scalars['String'] | null),name?: (Scalars['String'] | null),pass_token_image_url?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),token_image_url?: (Scalars['String'] | null),url?: (Scalars['String'] | null),x_account?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface dao_details_sum_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface dao_details_updates {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (dao_details_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (dao_details_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (dao_details_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (dao_details_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (dao_details_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (dao_details_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (dao_details_set_input | null),
/** filter the rows which have to be updated */
where: dao_details_bool_exp}


/** aggregate var_pop on columns */
export interface dao_details_var_pop_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface dao_details_var_samp_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface dao_details_variance_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "daos" */
export interface daosGenqlSelection{
    base_acct?: boolean | number
    created_at?: boolean | number
    dao_acct?: boolean | number
    /** An object relationship */
    dao_detail?: dao_detailsGenqlSelection
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    /** An object relationship */
    program?: programsGenqlSelection
    program_acct?: boolean | number
    /** An array relationship */
    proposals?: (proposalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    /** An aggregate relationship */
    proposals_aggregate?: (proposals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    quote_acct?: boolean | number
    slots_per_proposal?: boolean | number
    /** An object relationship */
    token?: tokensGenqlSelection
    /** An object relationship */
    tokenByBaseAcct?: tokensGenqlSelection
    /** An object relationship */
    tokenByQuoteAcct?: tokensGenqlSelection
    treasury_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "daos" */
export interface daos_aggregateGenqlSelection{
    aggregate?: daos_aggregate_fieldsGenqlSelection
    nodes?: daosGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface daos_aggregate_bool_exp {count?: (daos_aggregate_bool_exp_count | null)}

export interface daos_aggregate_bool_exp_count {arguments?: (daos_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (daos_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "daos" */
export interface daos_aggregate_fieldsGenqlSelection{
    avg?: daos_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (daos_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: daos_max_fieldsGenqlSelection
    min?: daos_min_fieldsGenqlSelection
    stddev?: daos_stddev_fieldsGenqlSelection
    stddev_pop?: daos_stddev_pop_fieldsGenqlSelection
    stddev_samp?: daos_stddev_samp_fieldsGenqlSelection
    sum?: daos_sum_fieldsGenqlSelection
    var_pop?: daos_var_pop_fieldsGenqlSelection
    var_samp?: daos_var_samp_fieldsGenqlSelection
    variance?: daos_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "daos" */
export interface daos_aggregate_order_by {avg?: (daos_avg_order_by | null),count?: (order_by | null),max?: (daos_max_order_by | null),min?: (daos_min_order_by | null),stddev?: (daos_stddev_order_by | null),stddev_pop?: (daos_stddev_pop_order_by | null),stddev_samp?: (daos_stddev_samp_order_by | null),sum?: (daos_sum_order_by | null),var_pop?: (daos_var_pop_order_by | null),var_samp?: (daos_var_samp_order_by | null),variance?: (daos_variance_order_by | null)}


/** input type for inserting array relation for remote table "daos" */
export interface daos_arr_rel_insert_input {data: daos_insert_input[],
/** upsert condition */
on_conflict?: (daos_on_conflict | null)}


/** aggregate avg on columns */
export interface daos_avg_fieldsGenqlSelection{
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    slots_per_proposal?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "daos" */
export interface daos_avg_order_by {dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),slots_per_proposal?: (order_by | null)}


/** Boolean expression to filter rows from the table "daos". All fields are combined with a logical 'AND'. */
export interface daos_bool_exp {_and?: (daos_bool_exp[] | null),_not?: (daos_bool_exp | null),_or?: (daos_bool_exp[] | null),base_acct?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),dao_acct?: (String_comparison_exp | null),dao_detail?: (dao_details_bool_exp | null),dao_id?: (bigint_comparison_exp | null),pass_threshold_bps?: (bigint_comparison_exp | null),program?: (programs_bool_exp | null),program_acct?: (String_comparison_exp | null),proposals?: (proposals_bool_exp | null),proposals_aggregate?: (proposals_aggregate_bool_exp | null),quote_acct?: (String_comparison_exp | null),slots_per_proposal?: (bigint_comparison_exp | null),token?: (tokens_bool_exp | null),tokenByBaseAcct?: (tokens_bool_exp | null),tokenByQuoteAcct?: (tokens_bool_exp | null),treasury_acct?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "daos" */
export interface daos_inc_input {dao_id?: (Scalars['bigint'] | null),pass_threshold_bps?: (Scalars['bigint'] | null),slots_per_proposal?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "daos" */
export interface daos_insert_input {base_acct?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),dao_acct?: (Scalars['String'] | null),dao_detail?: (dao_details_obj_rel_insert_input | null),dao_id?: (Scalars['bigint'] | null),pass_threshold_bps?: (Scalars['bigint'] | null),program?: (programs_obj_rel_insert_input | null),program_acct?: (Scalars['String'] | null),proposals?: (proposals_arr_rel_insert_input | null),quote_acct?: (Scalars['String'] | null),slots_per_proposal?: (Scalars['bigint'] | null),token?: (tokens_obj_rel_insert_input | null),tokenByBaseAcct?: (tokens_obj_rel_insert_input | null),tokenByQuoteAcct?: (tokens_obj_rel_insert_input | null),treasury_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface daos_max_fieldsGenqlSelection{
    base_acct?: boolean | number
    created_at?: boolean | number
    dao_acct?: boolean | number
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    program_acct?: boolean | number
    quote_acct?: boolean | number
    slots_per_proposal?: boolean | number
    treasury_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "daos" */
export interface daos_max_order_by {base_acct?: (order_by | null),created_at?: (order_by | null),dao_acct?: (order_by | null),dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),program_acct?: (order_by | null),quote_acct?: (order_by | null),slots_per_proposal?: (order_by | null),treasury_acct?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface daos_min_fieldsGenqlSelection{
    base_acct?: boolean | number
    created_at?: boolean | number
    dao_acct?: boolean | number
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    program_acct?: boolean | number
    quote_acct?: boolean | number
    slots_per_proposal?: boolean | number
    treasury_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "daos" */
export interface daos_min_order_by {base_acct?: (order_by | null),created_at?: (order_by | null),dao_acct?: (order_by | null),dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),program_acct?: (order_by | null),quote_acct?: (order_by | null),slots_per_proposal?: (order_by | null),treasury_acct?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "daos" */
export interface daos_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: daosGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "daos" */
export interface daos_obj_rel_insert_input {data: daos_insert_input,
/** upsert condition */
on_conflict?: (daos_on_conflict | null)}


/** on_conflict condition type for table "daos" */
export interface daos_on_conflict {constraint: daos_constraint,update_columns?: daos_update_column[],where?: (daos_bool_exp | null)}


/** Ordering options when selecting data from "daos". */
export interface daos_order_by {base_acct?: (order_by | null),created_at?: (order_by | null),dao_acct?: (order_by | null),dao_detail?: (dao_details_order_by | null),dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),program?: (programs_order_by | null),program_acct?: (order_by | null),proposals_aggregate?: (proposals_aggregate_order_by | null),quote_acct?: (order_by | null),slots_per_proposal?: (order_by | null),token?: (tokens_order_by | null),tokenByBaseAcct?: (tokens_order_by | null),tokenByQuoteAcct?: (tokens_order_by | null),treasury_acct?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: daos */
export interface daos_pk_columns_input {dao_acct: Scalars['String']}


/** input type for updating data in table "daos" */
export interface daos_set_input {base_acct?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),dao_acct?: (Scalars['String'] | null),dao_id?: (Scalars['bigint'] | null),pass_threshold_bps?: (Scalars['bigint'] | null),program_acct?: (Scalars['String'] | null),quote_acct?: (Scalars['String'] | null),slots_per_proposal?: (Scalars['bigint'] | null),treasury_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface daos_stddev_fieldsGenqlSelection{
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    slots_per_proposal?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "daos" */
export interface daos_stddev_order_by {dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),slots_per_proposal?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface daos_stddev_pop_fieldsGenqlSelection{
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    slots_per_proposal?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "daos" */
export interface daos_stddev_pop_order_by {dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),slots_per_proposal?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface daos_stddev_samp_fieldsGenqlSelection{
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    slots_per_proposal?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "daos" */
export interface daos_stddev_samp_order_by {dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),slots_per_proposal?: (order_by | null)}


/** Streaming cursor of the table "daos" */
export interface daos_stream_cursor_input {
/** Stream column input with initial value */
initial_value: daos_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface daos_stream_cursor_value_input {base_acct?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),dao_acct?: (Scalars['String'] | null),dao_id?: (Scalars['bigint'] | null),pass_threshold_bps?: (Scalars['bigint'] | null),program_acct?: (Scalars['String'] | null),quote_acct?: (Scalars['String'] | null),slots_per_proposal?: (Scalars['bigint'] | null),treasury_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface daos_sum_fieldsGenqlSelection{
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    slots_per_proposal?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "daos" */
export interface daos_sum_order_by {dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),slots_per_proposal?: (order_by | null)}

export interface daos_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (daos_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (daos_set_input | null),
/** filter the rows which have to be updated */
where: daos_bool_exp}


/** aggregate var_pop on columns */
export interface daos_var_pop_fieldsGenqlSelection{
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    slots_per_proposal?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "daos" */
export interface daos_var_pop_order_by {dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),slots_per_proposal?: (order_by | null)}


/** aggregate var_samp on columns */
export interface daos_var_samp_fieldsGenqlSelection{
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    slots_per_proposal?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "daos" */
export interface daos_var_samp_order_by {dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),slots_per_proposal?: (order_by | null)}


/** aggregate variance on columns */
export interface daos_variance_fieldsGenqlSelection{
    dao_id?: boolean | number
    pass_threshold_bps?: boolean | number
    slots_per_proposal?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "daos" */
export interface daos_variance_order_by {dao_id?: (order_by | null),pass_threshold_bps?: (order_by | null),slots_per_proposal?: (order_by | null)}


/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export interface float8_comparison_exp {_eq?: (Scalars['float8'] | null),_gt?: (Scalars['float8'] | null),_gte?: (Scalars['float8'] | null),_in?: (Scalars['float8'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['float8'] | null),_lte?: (Scalars['float8'] | null),_neq?: (Scalars['float8'] | null),_nin?: (Scalars['float8'][] | null)}


/** columns and relationships of "indexer_account_dependencies" */
export interface indexer_account_dependenciesGenqlSelection{
    acct?: boolean | number
    /** An object relationship */
    indexer?: indexersGenqlSelection
    latest_tx_sig_processed?: boolean | number
    name?: boolean | number
    status?: boolean | number
    /** An object relationship */
    transaction?: transactionsGenqlSelection
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "indexer_account_dependencies" */
export interface indexer_account_dependencies_aggregateGenqlSelection{
    aggregate?: indexer_account_dependencies_aggregate_fieldsGenqlSelection
    nodes?: indexer_account_dependenciesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface indexer_account_dependencies_aggregate_bool_exp {count?: (indexer_account_dependencies_aggregate_bool_exp_count | null)}

export interface indexer_account_dependencies_aggregate_bool_exp_count {arguments?: (indexer_account_dependencies_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (indexer_account_dependencies_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "indexer_account_dependencies" */
export interface indexer_account_dependencies_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (indexer_account_dependencies_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: indexer_account_dependencies_max_fieldsGenqlSelection
    min?: indexer_account_dependencies_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "indexer_account_dependencies" */
export interface indexer_account_dependencies_aggregate_order_by {count?: (order_by | null),max?: (indexer_account_dependencies_max_order_by | null),min?: (indexer_account_dependencies_min_order_by | null)}


/** input type for inserting array relation for remote table "indexer_account_dependencies" */
export interface indexer_account_dependencies_arr_rel_insert_input {data: indexer_account_dependencies_insert_input[],
/** upsert condition */
on_conflict?: (indexer_account_dependencies_on_conflict | null)}


/** Boolean expression to filter rows from the table "indexer_account_dependencies". All fields are combined with a logical 'AND'. */
export interface indexer_account_dependencies_bool_exp {_and?: (indexer_account_dependencies_bool_exp[] | null),_not?: (indexer_account_dependencies_bool_exp | null),_or?: (indexer_account_dependencies_bool_exp[] | null),acct?: (String_comparison_exp | null),indexer?: (indexers_bool_exp | null),latest_tx_sig_processed?: (String_comparison_exp | null),name?: (String_comparison_exp | null),status?: (String_comparison_exp | null),transaction?: (transactions_bool_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "indexer_account_dependencies" */
export interface indexer_account_dependencies_insert_input {acct?: (Scalars['String'] | null),indexer?: (indexers_obj_rel_insert_input | null),latest_tx_sig_processed?: (Scalars['String'] | null),name?: (Scalars['String'] | null),status?: (Scalars['String'] | null),transaction?: (transactions_obj_rel_insert_input | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface indexer_account_dependencies_max_fieldsGenqlSelection{
    acct?: boolean | number
    latest_tx_sig_processed?: boolean | number
    name?: boolean | number
    status?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "indexer_account_dependencies" */
export interface indexer_account_dependencies_max_order_by {acct?: (order_by | null),latest_tx_sig_processed?: (order_by | null),name?: (order_by | null),status?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface indexer_account_dependencies_min_fieldsGenqlSelection{
    acct?: boolean | number
    latest_tx_sig_processed?: boolean | number
    name?: boolean | number
    status?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "indexer_account_dependencies" */
export interface indexer_account_dependencies_min_order_by {acct?: (order_by | null),latest_tx_sig_processed?: (order_by | null),name?: (order_by | null),status?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "indexer_account_dependencies" */
export interface indexer_account_dependencies_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: indexer_account_dependenciesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "indexer_account_dependencies" */
export interface indexer_account_dependencies_on_conflict {constraint: indexer_account_dependencies_constraint,update_columns?: indexer_account_dependencies_update_column[],where?: (indexer_account_dependencies_bool_exp | null)}


/** Ordering options when selecting data from "indexer_account_dependencies". */
export interface indexer_account_dependencies_order_by {acct?: (order_by | null),indexer?: (indexers_order_by | null),latest_tx_sig_processed?: (order_by | null),name?: (order_by | null),status?: (order_by | null),transaction?: (transactions_order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: indexer_account_dependencies */
export interface indexer_account_dependencies_pk_columns_input {acct: Scalars['String'],name: Scalars['String']}


/** input type for updating data in table "indexer_account_dependencies" */
export interface indexer_account_dependencies_set_input {acct?: (Scalars['String'] | null),latest_tx_sig_processed?: (Scalars['String'] | null),name?: (Scalars['String'] | null),status?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Streaming cursor of the table "indexer_account_dependencies" */
export interface indexer_account_dependencies_stream_cursor_input {
/** Stream column input with initial value */
initial_value: indexer_account_dependencies_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface indexer_account_dependencies_stream_cursor_value_input {acct?: (Scalars['String'] | null),latest_tx_sig_processed?: (Scalars['String'] | null),name?: (Scalars['String'] | null),status?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}

export interface indexer_account_dependencies_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (indexer_account_dependencies_set_input | null),
/** filter the rows which have to be updated */
where: indexer_account_dependencies_bool_exp}


/** columns and relationships of "indexers" */
export interface indexersGenqlSelection{
    implementation?: boolean | number
    /** An array relationship */
    indexer_account_dependencies?: (indexer_account_dependenciesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexer_account_dependencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexer_account_dependencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexer_account_dependencies_bool_exp | null)} })
    /** An aggregate relationship */
    indexer_account_dependencies_aggregate?: (indexer_account_dependencies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexer_account_dependencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexer_account_dependencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexer_account_dependencies_bool_exp | null)} })
    indexer_type?: boolean | number
    latest_slot_processed?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "indexers" */
export interface indexers_aggregateGenqlSelection{
    aggregate?: indexers_aggregate_fieldsGenqlSelection
    nodes?: indexersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "indexers" */
export interface indexers_aggregate_fieldsGenqlSelection{
    avg?: indexers_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (indexers_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: indexers_max_fieldsGenqlSelection
    min?: indexers_min_fieldsGenqlSelection
    stddev?: indexers_stddev_fieldsGenqlSelection
    stddev_pop?: indexers_stddev_pop_fieldsGenqlSelection
    stddev_samp?: indexers_stddev_samp_fieldsGenqlSelection
    sum?: indexers_sum_fieldsGenqlSelection
    var_pop?: indexers_var_pop_fieldsGenqlSelection
    var_samp?: indexers_var_samp_fieldsGenqlSelection
    variance?: indexers_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface indexers_avg_fieldsGenqlSelection{
    latest_slot_processed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "indexers". All fields are combined with a logical 'AND'. */
export interface indexers_bool_exp {_and?: (indexers_bool_exp[] | null),_not?: (indexers_bool_exp | null),_or?: (indexers_bool_exp[] | null),implementation?: (String_comparison_exp | null),indexer_account_dependencies?: (indexer_account_dependencies_bool_exp | null),indexer_account_dependencies_aggregate?: (indexer_account_dependencies_aggregate_bool_exp | null),indexer_type?: (String_comparison_exp | null),latest_slot_processed?: (bigint_comparison_exp | null),name?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "indexers" */
export interface indexers_inc_input {latest_slot_processed?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "indexers" */
export interface indexers_insert_input {implementation?: (Scalars['String'] | null),indexer_account_dependencies?: (indexer_account_dependencies_arr_rel_insert_input | null),indexer_type?: (Scalars['String'] | null),latest_slot_processed?: (Scalars['bigint'] | null),name?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface indexers_max_fieldsGenqlSelection{
    implementation?: boolean | number
    indexer_type?: boolean | number
    latest_slot_processed?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface indexers_min_fieldsGenqlSelection{
    implementation?: boolean | number
    indexer_type?: boolean | number
    latest_slot_processed?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "indexers" */
export interface indexers_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: indexersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "indexers" */
export interface indexers_obj_rel_insert_input {data: indexers_insert_input,
/** upsert condition */
on_conflict?: (indexers_on_conflict | null)}


/** on_conflict condition type for table "indexers" */
export interface indexers_on_conflict {constraint: indexers_constraint,update_columns?: indexers_update_column[],where?: (indexers_bool_exp | null)}


/** Ordering options when selecting data from "indexers". */
export interface indexers_order_by {implementation?: (order_by | null),indexer_account_dependencies_aggregate?: (indexer_account_dependencies_aggregate_order_by | null),indexer_type?: (order_by | null),latest_slot_processed?: (order_by | null),name?: (order_by | null)}


/** primary key columns input for table: indexers */
export interface indexers_pk_columns_input {name: Scalars['String']}


/** input type for updating data in table "indexers" */
export interface indexers_set_input {implementation?: (Scalars['String'] | null),indexer_type?: (Scalars['String'] | null),latest_slot_processed?: (Scalars['bigint'] | null),name?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface indexers_stddev_fieldsGenqlSelection{
    latest_slot_processed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface indexers_stddev_pop_fieldsGenqlSelection{
    latest_slot_processed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface indexers_stddev_samp_fieldsGenqlSelection{
    latest_slot_processed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "indexers" */
export interface indexers_stream_cursor_input {
/** Stream column input with initial value */
initial_value: indexers_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface indexers_stream_cursor_value_input {implementation?: (Scalars['String'] | null),indexer_type?: (Scalars['String'] | null),latest_slot_processed?: (Scalars['bigint'] | null),name?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface indexers_sum_fieldsGenqlSelection{
    latest_slot_processed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface indexers_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (indexers_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (indexers_set_input | null),
/** filter the rows which have to be updated */
where: indexers_bool_exp}


/** aggregate var_pop on columns */
export interface indexers_var_pop_fieldsGenqlSelection{
    latest_slot_processed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface indexers_var_samp_fieldsGenqlSelection{
    latest_slot_processed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface indexers_variance_fieldsGenqlSelection{
    latest_slot_processed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "interval". All fields are combined with logical 'AND'. */
export interface interval_comparison_exp {_eq?: (Scalars['interval'] | null),_gt?: (Scalars['interval'] | null),_gte?: (Scalars['interval'] | null),_in?: (Scalars['interval'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['interval'] | null),_lte?: (Scalars['interval'] | null),_neq?: (Scalars['interval'] | null),_nin?: (Scalars['interval'][] | null)}

export interface jsonb_cast_exp {String?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface jsonb_comparison_exp {_cast?: (jsonb_cast_exp | null),
/** is the column contained in the given json value */
_contained_in?: (Scalars['jsonb'] | null),
/** does the column contain the given json value at the top level */
_contains?: (Scalars['jsonb'] | null),_eq?: (Scalars['jsonb'] | null),_gt?: (Scalars['jsonb'] | null),_gte?: (Scalars['jsonb'] | null),
/** does the string exist as a top-level key in the column */
_has_key?: (Scalars['String'] | null),
/** do all of these strings exist as top-level keys in the column */
_has_keys_all?: (Scalars['String'][] | null),
/** do any of these strings exist as top-level keys in the column */
_has_keys_any?: (Scalars['String'][] | null),_in?: (Scalars['jsonb'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['jsonb'] | null),_lte?: (Scalars['jsonb'] | null),_neq?: (Scalars['jsonb'] | null),_nin?: (Scalars['jsonb'][] | null)}


/** columns and relationships of "makes" */
export interface makesGenqlSelection{
    filled_base_amount?: boolean | number
    is_active?: boolean | number
    /** An object relationship */
    market?: marketsGenqlSelection
    market_acct?: boolean | number
    /** An object relationship */
    order?: ordersGenqlSelection
    order_tx_sig?: boolean | number
    quote_price?: boolean | number
    /** An array relationship */
    takes?: (takesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (takes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (takes_order_by[] | null), 
    /** filter the rows returned */
    where?: (takes_bool_exp | null)} })
    /** An aggregate relationship */
    takes_aggregate?: (takes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (takes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (takes_order_by[] | null), 
    /** filter the rows returned */
    where?: (takes_bool_exp | null)} })
    unfilled_base_amount?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "makes" */
export interface makes_aggregateGenqlSelection{
    aggregate?: makes_aggregate_fieldsGenqlSelection
    nodes?: makesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface makes_aggregate_bool_exp {bool_and?: (makes_aggregate_bool_exp_bool_and | null),bool_or?: (makes_aggregate_bool_exp_bool_or | null),count?: (makes_aggregate_bool_exp_count | null)}

export interface makes_aggregate_bool_exp_bool_and {arguments: makes_select_column_makes_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (makes_bool_exp | null),predicate: Boolean_comparison_exp}

export interface makes_aggregate_bool_exp_bool_or {arguments: makes_select_column_makes_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (makes_bool_exp | null),predicate: Boolean_comparison_exp}

export interface makes_aggregate_bool_exp_count {arguments?: (makes_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (makes_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "makes" */
export interface makes_aggregate_fieldsGenqlSelection{
    avg?: makes_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (makes_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: makes_max_fieldsGenqlSelection
    min?: makes_min_fieldsGenqlSelection
    stddev?: makes_stddev_fieldsGenqlSelection
    stddev_pop?: makes_stddev_pop_fieldsGenqlSelection
    stddev_samp?: makes_stddev_samp_fieldsGenqlSelection
    sum?: makes_sum_fieldsGenqlSelection
    var_pop?: makes_var_pop_fieldsGenqlSelection
    var_samp?: makes_var_samp_fieldsGenqlSelection
    variance?: makes_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "makes" */
export interface makes_aggregate_order_by {avg?: (makes_avg_order_by | null),count?: (order_by | null),max?: (makes_max_order_by | null),min?: (makes_min_order_by | null),stddev?: (makes_stddev_order_by | null),stddev_pop?: (makes_stddev_pop_order_by | null),stddev_samp?: (makes_stddev_samp_order_by | null),sum?: (makes_sum_order_by | null),var_pop?: (makes_var_pop_order_by | null),var_samp?: (makes_var_samp_order_by | null),variance?: (makes_variance_order_by | null)}


/** input type for inserting array relation for remote table "makes" */
export interface makes_arr_rel_insert_input {data: makes_insert_input[],
/** upsert condition */
on_conflict?: (makes_on_conflict | null)}


/** aggregate avg on columns */
export interface makes_avg_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "makes" */
export interface makes_avg_order_by {filled_base_amount?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** Boolean expression to filter rows from the table "makes". All fields are combined with a logical 'AND'. */
export interface makes_bool_exp {_and?: (makes_bool_exp[] | null),_not?: (makes_bool_exp | null),_or?: (makes_bool_exp[] | null),filled_base_amount?: (bigint_comparison_exp | null),is_active?: (Boolean_comparison_exp | null),market?: (markets_bool_exp | null),market_acct?: (String_comparison_exp | null),order?: (orders_bool_exp | null),order_tx_sig?: (String_comparison_exp | null),quote_price?: (numeric_comparison_exp | null),takes?: (takes_bool_exp | null),takes_aggregate?: (takes_aggregate_bool_exp | null),unfilled_base_amount?: (bigint_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "makes" */
export interface makes_inc_input {filled_base_amount?: (Scalars['bigint'] | null),quote_price?: (Scalars['numeric'] | null),unfilled_base_amount?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "makes" */
export interface makes_insert_input {filled_base_amount?: (Scalars['bigint'] | null),is_active?: (Scalars['Boolean'] | null),market?: (markets_obj_rel_insert_input | null),market_acct?: (Scalars['String'] | null),order?: (orders_obj_rel_insert_input | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['numeric'] | null),takes?: (takes_arr_rel_insert_input | null),unfilled_base_amount?: (Scalars['bigint'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface makes_max_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    market_acct?: boolean | number
    order_tx_sig?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "makes" */
export interface makes_max_order_by {filled_base_amount?: (order_by | null),market_acct?: (order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface makes_min_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    market_acct?: boolean | number
    order_tx_sig?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "makes" */
export interface makes_min_order_by {filled_base_amount?: (order_by | null),market_acct?: (order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "makes" */
export interface makes_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: makesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "makes" */
export interface makes_obj_rel_insert_input {data: makes_insert_input,
/** upsert condition */
on_conflict?: (makes_on_conflict | null)}


/** on_conflict condition type for table "makes" */
export interface makes_on_conflict {constraint: makes_constraint,update_columns?: makes_update_column[],where?: (makes_bool_exp | null)}


/** Ordering options when selecting data from "makes". */
export interface makes_order_by {filled_base_amount?: (order_by | null),is_active?: (order_by | null),market?: (markets_order_by | null),market_acct?: (order_by | null),order?: (orders_order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),takes_aggregate?: (takes_aggregate_order_by | null),unfilled_base_amount?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: makes */
export interface makes_pk_columns_input {order_tx_sig: Scalars['String']}


/** input type for updating data in table "makes" */
export interface makes_set_input {filled_base_amount?: (Scalars['bigint'] | null),is_active?: (Scalars['Boolean'] | null),market_acct?: (Scalars['String'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['numeric'] | null),unfilled_base_amount?: (Scalars['bigint'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface makes_stddev_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "makes" */
export interface makes_stddev_order_by {filled_base_amount?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface makes_stddev_pop_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "makes" */
export interface makes_stddev_pop_order_by {filled_base_amount?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface makes_stddev_samp_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "makes" */
export interface makes_stddev_samp_order_by {filled_base_amount?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** Streaming cursor of the table "makes" */
export interface makes_stream_cursor_input {
/** Stream column input with initial value */
initial_value: makes_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface makes_stream_cursor_value_input {filled_base_amount?: (Scalars['bigint'] | null),is_active?: (Scalars['Boolean'] | null),market_acct?: (Scalars['String'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['numeric'] | null),unfilled_base_amount?: (Scalars['bigint'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface makes_sum_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "makes" */
export interface makes_sum_order_by {filled_base_amount?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}

export interface makes_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (makes_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (makes_set_input | null),
/** filter the rows which have to be updated */
where: makes_bool_exp}


/** aggregate var_pop on columns */
export interface makes_var_pop_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "makes" */
export interface makes_var_pop_order_by {filled_base_amount?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** aggregate var_samp on columns */
export interface makes_var_samp_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "makes" */
export interface makes_var_samp_order_by {filled_base_amount?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** aggregate variance on columns */
export interface makes_variance_fieldsGenqlSelection{
    filled_base_amount?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "makes" */
export interface makes_variance_order_by {filled_base_amount?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** columns and relationships of "markets" */
export interface marketsGenqlSelection{
    active_slot?: boolean | number
    asks_token_acct?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_mint_acct?: boolean | number
    base_taker_fee?: boolean | number
    bids_token_acct?: boolean | number
    /** An array relationship */
    candles?: (candlesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (candles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (candles_order_by[] | null), 
    /** filter the rows returned */
    where?: (candles_bool_exp | null)} })
    /** An aggregate relationship */
    candles_aggregate?: (candles_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (candles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (candles_order_by[] | null), 
    /** filter the rows returned */
    where?: (candles_bool_exp | null)} })
    create_tx_sig?: boolean | number
    created_at?: boolean | number
    inactive_slot?: boolean | number
    /** An array relationship */
    makes?: (makesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (makes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (makes_order_by[] | null), 
    /** filter the rows returned */
    where?: (makes_bool_exp | null)} })
    /** An aggregate relationship */
    makes_aggregate?: (makes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (makes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (makes_order_by[] | null), 
    /** filter the rows returned */
    where?: (makes_bool_exp | null)} })
    market_acct?: boolean | number
    market_type?: boolean | number
    /** An array relationship */
    orders?: (ordersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (orders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (orders_order_by[] | null), 
    /** filter the rows returned */
    where?: (orders_bool_exp | null)} })
    /** An aggregate relationship */
    orders_aggregate?: (orders_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (orders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (orders_order_by[] | null), 
    /** filter the rows returned */
    where?: (orders_bool_exp | null)} })
    /** An array relationship */
    prices?: (pricesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_bool_exp | null)} })
    /** An aggregate relationship */
    prices_aggregate?: (prices_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_bool_exp | null)} })
    /** An object relationship */
    proposal?: proposalsGenqlSelection
    proposal_acct?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_mint_acct?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    /** An array relationship */
    takes?: (takesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (takes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (takes_order_by[] | null), 
    /** filter the rows returned */
    where?: (takes_bool_exp | null)} })
    /** An aggregate relationship */
    takes_aggregate?: (takes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (takes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (takes_order_by[] | null), 
    /** filter the rows returned */
    where?: (takes_bool_exp | null)} })
    /** An object relationship */
    token?: tokensGenqlSelection
    /** An object relationship */
    tokenAcctByAsksTokenAcct?: token_acctsGenqlSelection
    /** An object relationship */
    tokenAcctByBidsTokenAcct?: token_acctsGenqlSelection
    /** An object relationship */
    tokenByBaseMintAcct?: tokensGenqlSelection
    /** An object relationship */
    tokenByQuoteMintAcct?: tokensGenqlSelection
    /** An object relationship */
    token_acct?: token_acctsGenqlSelection
    /** An array relationship */
    twaps?: (twapsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twaps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twaps_order_by[] | null), 
    /** filter the rows returned */
    where?: (twaps_bool_exp | null)} })
    /** An aggregate relationship */
    twaps_aggregate?: (twaps_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twaps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twaps_order_by[] | null), 
    /** filter the rows returned */
    where?: (twaps_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "markets" */
export interface markets_aggregateGenqlSelection{
    aggregate?: markets_aggregate_fieldsGenqlSelection
    nodes?: marketsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface markets_aggregate_bool_exp {count?: (markets_aggregate_bool_exp_count | null)}

export interface markets_aggregate_bool_exp_count {arguments?: (markets_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (markets_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "markets" */
export interface markets_aggregate_fieldsGenqlSelection{
    avg?: markets_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (markets_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: markets_max_fieldsGenqlSelection
    min?: markets_min_fieldsGenqlSelection
    stddev?: markets_stddev_fieldsGenqlSelection
    stddev_pop?: markets_stddev_pop_fieldsGenqlSelection
    stddev_samp?: markets_stddev_samp_fieldsGenqlSelection
    sum?: markets_sum_fieldsGenqlSelection
    var_pop?: markets_var_pop_fieldsGenqlSelection
    var_samp?: markets_var_samp_fieldsGenqlSelection
    variance?: markets_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "markets" */
export interface markets_aggregate_order_by {avg?: (markets_avg_order_by | null),count?: (order_by | null),max?: (markets_max_order_by | null),min?: (markets_min_order_by | null),stddev?: (markets_stddev_order_by | null),stddev_pop?: (markets_stddev_pop_order_by | null),stddev_samp?: (markets_stddev_samp_order_by | null),sum?: (markets_sum_order_by | null),var_pop?: (markets_var_pop_order_by | null),var_samp?: (markets_var_samp_order_by | null),variance?: (markets_variance_order_by | null)}


/** input type for inserting array relation for remote table "markets" */
export interface markets_arr_rel_insert_input {data: markets_insert_input[],
/** upsert condition */
on_conflict?: (markets_on_conflict | null)}


/** aggregate avg on columns */
export interface markets_avg_fieldsGenqlSelection{
    active_slot?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_taker_fee?: boolean | number
    inactive_slot?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "markets" */
export interface markets_avg_order_by {active_slot?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_taker_fee?: (order_by | null),inactive_slot?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** Boolean expression to filter rows from the table "markets". All fields are combined with a logical 'AND'. */
export interface markets_bool_exp {_and?: (markets_bool_exp[] | null),_not?: (markets_bool_exp | null),_or?: (markets_bool_exp[] | null),active_slot?: (bigint_comparison_exp | null),asks_token_acct?: (String_comparison_exp | null),base_lot_size?: (bigint_comparison_exp | null),base_maker_fee?: (smallint_comparison_exp | null),base_mint_acct?: (String_comparison_exp | null),base_taker_fee?: (smallint_comparison_exp | null),bids_token_acct?: (String_comparison_exp | null),candles?: (candles_bool_exp | null),candles_aggregate?: (candles_aggregate_bool_exp | null),create_tx_sig?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),inactive_slot?: (bigint_comparison_exp | null),makes?: (makes_bool_exp | null),makes_aggregate?: (makes_aggregate_bool_exp | null),market_acct?: (String_comparison_exp | null),market_type?: (String_comparison_exp | null),orders?: (orders_bool_exp | null),orders_aggregate?: (orders_aggregate_bool_exp | null),prices?: (prices_bool_exp | null),prices_aggregate?: (prices_aggregate_bool_exp | null),proposal?: (proposals_bool_exp | null),proposal_acct?: (String_comparison_exp | null),quote_lot_size?: (bigint_comparison_exp | null),quote_maker_fee?: (smallint_comparison_exp | null),quote_mint_acct?: (String_comparison_exp | null),quote_taker_fee?: (smallint_comparison_exp | null),quote_tick_size?: (bigint_comparison_exp | null),takes?: (takes_bool_exp | null),takes_aggregate?: (takes_aggregate_bool_exp | null),token?: (tokens_bool_exp | null),tokenAcctByAsksTokenAcct?: (token_accts_bool_exp | null),tokenAcctByBidsTokenAcct?: (token_accts_bool_exp | null),tokenByBaseMintAcct?: (tokens_bool_exp | null),tokenByQuoteMintAcct?: (tokens_bool_exp | null),token_acct?: (token_accts_bool_exp | null),twaps?: (twaps_bool_exp | null),twaps_aggregate?: (twaps_aggregate_bool_exp | null)}


/** input type for incrementing numeric columns in table "markets" */
export interface markets_inc_input {active_slot?: (Scalars['bigint'] | null),base_lot_size?: (Scalars['bigint'] | null),base_maker_fee?: (Scalars['smallint'] | null),base_taker_fee?: (Scalars['smallint'] | null),inactive_slot?: (Scalars['bigint'] | null),quote_lot_size?: (Scalars['bigint'] | null),quote_maker_fee?: (Scalars['smallint'] | null),quote_taker_fee?: (Scalars['smallint'] | null),quote_tick_size?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "markets" */
export interface markets_insert_input {active_slot?: (Scalars['bigint'] | null),asks_token_acct?: (Scalars['String'] | null),base_lot_size?: (Scalars['bigint'] | null),base_maker_fee?: (Scalars['smallint'] | null),base_mint_acct?: (Scalars['String'] | null),base_taker_fee?: (Scalars['smallint'] | null),bids_token_acct?: (Scalars['String'] | null),candles?: (candles_arr_rel_insert_input | null),create_tx_sig?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),inactive_slot?: (Scalars['bigint'] | null),makes?: (makes_arr_rel_insert_input | null),market_acct?: (Scalars['String'] | null),market_type?: (Scalars['String'] | null),orders?: (orders_arr_rel_insert_input | null),prices?: (prices_arr_rel_insert_input | null),proposal?: (proposals_obj_rel_insert_input | null),proposal_acct?: (Scalars['String'] | null),quote_lot_size?: (Scalars['bigint'] | null),quote_maker_fee?: (Scalars['smallint'] | null),quote_mint_acct?: (Scalars['String'] | null),quote_taker_fee?: (Scalars['smallint'] | null),quote_tick_size?: (Scalars['bigint'] | null),takes?: (takes_arr_rel_insert_input | null),token?: (tokens_obj_rel_insert_input | null),tokenAcctByAsksTokenAcct?: (token_accts_obj_rel_insert_input | null),tokenAcctByBidsTokenAcct?: (token_accts_obj_rel_insert_input | null),tokenByBaseMintAcct?: (tokens_obj_rel_insert_input | null),tokenByQuoteMintAcct?: (tokens_obj_rel_insert_input | null),token_acct?: (token_accts_obj_rel_insert_input | null),twaps?: (twaps_arr_rel_insert_input | null)}


/** aggregate max on columns */
export interface markets_max_fieldsGenqlSelection{
    active_slot?: boolean | number
    asks_token_acct?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_mint_acct?: boolean | number
    base_taker_fee?: boolean | number
    bids_token_acct?: boolean | number
    create_tx_sig?: boolean | number
    created_at?: boolean | number
    inactive_slot?: boolean | number
    market_acct?: boolean | number
    market_type?: boolean | number
    proposal_acct?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_mint_acct?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "markets" */
export interface markets_max_order_by {active_slot?: (order_by | null),asks_token_acct?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_mint_acct?: (order_by | null),base_taker_fee?: (order_by | null),bids_token_acct?: (order_by | null),create_tx_sig?: (order_by | null),created_at?: (order_by | null),inactive_slot?: (order_by | null),market_acct?: (order_by | null),market_type?: (order_by | null),proposal_acct?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_mint_acct?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** aggregate min on columns */
export interface markets_min_fieldsGenqlSelection{
    active_slot?: boolean | number
    asks_token_acct?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_mint_acct?: boolean | number
    base_taker_fee?: boolean | number
    bids_token_acct?: boolean | number
    create_tx_sig?: boolean | number
    created_at?: boolean | number
    inactive_slot?: boolean | number
    market_acct?: boolean | number
    market_type?: boolean | number
    proposal_acct?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_mint_acct?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "markets" */
export interface markets_min_order_by {active_slot?: (order_by | null),asks_token_acct?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_mint_acct?: (order_by | null),base_taker_fee?: (order_by | null),bids_token_acct?: (order_by | null),create_tx_sig?: (order_by | null),created_at?: (order_by | null),inactive_slot?: (order_by | null),market_acct?: (order_by | null),market_type?: (order_by | null),proposal_acct?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_mint_acct?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** response of any mutation on the table "markets" */
export interface markets_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: marketsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "markets" */
export interface markets_obj_rel_insert_input {data: markets_insert_input,
/** upsert condition */
on_conflict?: (markets_on_conflict | null)}


/** on_conflict condition type for table "markets" */
export interface markets_on_conflict {constraint: markets_constraint,update_columns?: markets_update_column[],where?: (markets_bool_exp | null)}


/** Ordering options when selecting data from "markets". */
export interface markets_order_by {active_slot?: (order_by | null),asks_token_acct?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_mint_acct?: (order_by | null),base_taker_fee?: (order_by | null),bids_token_acct?: (order_by | null),candles_aggregate?: (candles_aggregate_order_by | null),create_tx_sig?: (order_by | null),created_at?: (order_by | null),inactive_slot?: (order_by | null),makes_aggregate?: (makes_aggregate_order_by | null),market_acct?: (order_by | null),market_type?: (order_by | null),orders_aggregate?: (orders_aggregate_order_by | null),prices_aggregate?: (prices_aggregate_order_by | null),proposal?: (proposals_order_by | null),proposal_acct?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_mint_acct?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null),takes_aggregate?: (takes_aggregate_order_by | null),token?: (tokens_order_by | null),tokenAcctByAsksTokenAcct?: (token_accts_order_by | null),tokenAcctByBidsTokenAcct?: (token_accts_order_by | null),tokenByBaseMintAcct?: (tokens_order_by | null),tokenByQuoteMintAcct?: (tokens_order_by | null),token_acct?: (token_accts_order_by | null),twaps_aggregate?: (twaps_aggregate_order_by | null)}


/** primary key columns input for table: markets */
export interface markets_pk_columns_input {market_acct: Scalars['String']}


/** input type for updating data in table "markets" */
export interface markets_set_input {active_slot?: (Scalars['bigint'] | null),asks_token_acct?: (Scalars['String'] | null),base_lot_size?: (Scalars['bigint'] | null),base_maker_fee?: (Scalars['smallint'] | null),base_mint_acct?: (Scalars['String'] | null),base_taker_fee?: (Scalars['smallint'] | null),bids_token_acct?: (Scalars['String'] | null),create_tx_sig?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),inactive_slot?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),market_type?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),quote_lot_size?: (Scalars['bigint'] | null),quote_maker_fee?: (Scalars['smallint'] | null),quote_mint_acct?: (Scalars['String'] | null),quote_taker_fee?: (Scalars['smallint'] | null),quote_tick_size?: (Scalars['bigint'] | null)}


/** aggregate stddev on columns */
export interface markets_stddev_fieldsGenqlSelection{
    active_slot?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_taker_fee?: boolean | number
    inactive_slot?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "markets" */
export interface markets_stddev_order_by {active_slot?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_taker_fee?: (order_by | null),inactive_slot?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface markets_stddev_pop_fieldsGenqlSelection{
    active_slot?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_taker_fee?: boolean | number
    inactive_slot?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "markets" */
export interface markets_stddev_pop_order_by {active_slot?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_taker_fee?: (order_by | null),inactive_slot?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface markets_stddev_samp_fieldsGenqlSelection{
    active_slot?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_taker_fee?: boolean | number
    inactive_slot?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "markets" */
export interface markets_stddev_samp_order_by {active_slot?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_taker_fee?: (order_by | null),inactive_slot?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** Streaming cursor of the table "markets" */
export interface markets_stream_cursor_input {
/** Stream column input with initial value */
initial_value: markets_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface markets_stream_cursor_value_input {active_slot?: (Scalars['bigint'] | null),asks_token_acct?: (Scalars['String'] | null),base_lot_size?: (Scalars['bigint'] | null),base_maker_fee?: (Scalars['smallint'] | null),base_mint_acct?: (Scalars['String'] | null),base_taker_fee?: (Scalars['smallint'] | null),bids_token_acct?: (Scalars['String'] | null),create_tx_sig?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),inactive_slot?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),market_type?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),quote_lot_size?: (Scalars['bigint'] | null),quote_maker_fee?: (Scalars['smallint'] | null),quote_mint_acct?: (Scalars['String'] | null),quote_taker_fee?: (Scalars['smallint'] | null),quote_tick_size?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface markets_sum_fieldsGenqlSelection{
    active_slot?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_taker_fee?: boolean | number
    inactive_slot?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "markets" */
export interface markets_sum_order_by {active_slot?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_taker_fee?: (order_by | null),inactive_slot?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}

export interface markets_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (markets_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (markets_set_input | null),
/** filter the rows which have to be updated */
where: markets_bool_exp}


/** aggregate var_pop on columns */
export interface markets_var_pop_fieldsGenqlSelection{
    active_slot?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_taker_fee?: boolean | number
    inactive_slot?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "markets" */
export interface markets_var_pop_order_by {active_slot?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_taker_fee?: (order_by | null),inactive_slot?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** aggregate var_samp on columns */
export interface markets_var_samp_fieldsGenqlSelection{
    active_slot?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_taker_fee?: boolean | number
    inactive_slot?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "markets" */
export interface markets_var_samp_order_by {active_slot?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_taker_fee?: (order_by | null),inactive_slot?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** aggregate variance on columns */
export interface markets_variance_fieldsGenqlSelection{
    active_slot?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_taker_fee?: boolean | number
    inactive_slot?: boolean | number
    quote_lot_size?: boolean | number
    quote_maker_fee?: boolean | number
    quote_taker_fee?: boolean | number
    quote_tick_size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "markets" */
export interface markets_variance_order_by {active_slot?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_taker_fee?: (order_by | null),inactive_slot?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete data from the table: "candles" */
    delete_candles?: (candles_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: candles_bool_exp} })
    /** delete single row from the table: "candles" */
    delete_candles_by_pk?: (candlesGenqlSelection & { __args: {candle_duration: Scalars['Int'], market_acct: Scalars['String'], timestamp: Scalars['timestamptz']} })
    /** delete data from the table: "comments" */
    delete_comments?: (comments_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: comments_bool_exp} })
    /** delete single row from the table: "comments" */
    delete_comments_by_pk?: (commentsGenqlSelection & { __args: {comment_id: Scalars['bigint']} })
    /** delete data from the table: "conditional_vaults" */
    delete_conditional_vaults?: (conditional_vaults_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: conditional_vaults_bool_exp} })
    /** delete single row from the table: "conditional_vaults" */
    delete_conditional_vaults_by_pk?: (conditional_vaultsGenqlSelection & { __args: {cond_vault_acct: Scalars['String']} })
    /** delete data from the table: "dao_details" */
    delete_dao_details?: (dao_details_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: dao_details_bool_exp} })
    /** delete single row from the table: "dao_details" */
    delete_dao_details_by_pk?: (dao_detailsGenqlSelection & { __args: {dao_id: Scalars['bigint']} })
    /** delete data from the table: "daos" */
    delete_daos?: (daos_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: daos_bool_exp} })
    /** delete single row from the table: "daos" */
    delete_daos_by_pk?: (daosGenqlSelection & { __args: {dao_acct: Scalars['String']} })
    /** delete data from the table: "indexer_account_dependencies" */
    delete_indexer_account_dependencies?: (indexer_account_dependencies_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: indexer_account_dependencies_bool_exp} })
    /** delete single row from the table: "indexer_account_dependencies" */
    delete_indexer_account_dependencies_by_pk?: (indexer_account_dependenciesGenqlSelection & { __args: {acct: Scalars['String'], name: Scalars['String']} })
    /** delete data from the table: "indexers" */
    delete_indexers?: (indexers_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: indexers_bool_exp} })
    /** delete single row from the table: "indexers" */
    delete_indexers_by_pk?: (indexersGenqlSelection & { __args: {name: Scalars['String']} })
    /** delete data from the table: "makes" */
    delete_makes?: (makes_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: makes_bool_exp} })
    /** delete single row from the table: "makes" */
    delete_makes_by_pk?: (makesGenqlSelection & { __args: {order_tx_sig: Scalars['String']} })
    /** delete data from the table: "markets" */
    delete_markets?: (markets_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: markets_bool_exp} })
    /** delete single row from the table: "markets" */
    delete_markets_by_pk?: (marketsGenqlSelection & { __args: {market_acct: Scalars['String']} })
    /** delete data from the table: "orders" */
    delete_orders?: (orders_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: orders_bool_exp} })
    /** delete single row from the table: "orders" */
    delete_orders_by_pk?: (ordersGenqlSelection & { __args: {order_tx_sig: Scalars['String']} })
    /** delete data from the table: "prices" */
    delete_prices?: (prices_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: prices_bool_exp} })
    /** delete single row from the table: "prices" */
    delete_prices_by_pk?: (pricesGenqlSelection & { __args: {created_at: Scalars['timestamptz'], market_acct: Scalars['String']} })
    /** delete data from the table: "program_system" */
    delete_program_system?: (program_system_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: program_system_bool_exp} })
    /** delete single row from the table: "program_system" */
    delete_program_system_by_pk?: (program_systemGenqlSelection & { __args: {system_version: Scalars['float8']} })
    /** delete data from the table: "programs" */
    delete_programs?: (programs_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: programs_bool_exp} })
    /** delete single row from the table: "programs" */
    delete_programs_by_pk?: (programsGenqlSelection & { __args: {program_acct: Scalars['String']} })
    /** delete data from the table: "proposal_bars" */
    delete_proposal_bars?: (proposal_bars_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: proposal_bars_bool_exp} })
    /** delete single row from the table: "proposal_bars" */
    delete_proposal_bars_by_pk?: (proposal_barsGenqlSelection & { __args: {bar_size: Scalars['interval'], bar_start_time: Scalars['timestamptz'], proposal_acct: Scalars['String']} })
    /** delete data from the table: "proposal_details" */
    delete_proposal_details?: (proposal_details_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: proposal_details_bool_exp} })
    /** delete single row from the table: "proposal_details" */
    delete_proposal_details_by_pk?: (proposal_detailsGenqlSelection & { __args: {proposal_id: Scalars['bigint']} })
    /** delete data from the table: "proposals" */
    delete_proposals?: (proposals_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: proposals_bool_exp} })
    /** delete single row from the table: "proposals" */
    delete_proposals_by_pk?: (proposalsGenqlSelection & { __args: {proposal_acct: Scalars['String']} })
    /** delete data from the table: "reactions" */
    delete_reactions?: (reactions_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: reactions_bool_exp} })
    /** delete single row from the table: "reactions" */
    delete_reactions_by_pk?: (reactionsGenqlSelection & { __args: {proposal_acct: Scalars['String'], reaction: Scalars['String'], reactor_acct: Scalars['String']} })
    /** delete data from the table: "sessions" */
    delete_sessions?: (sessions_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: sessions_bool_exp} })
    /** delete single row from the table: "sessions" */
    delete_sessions_by_pk?: (sessionsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** delete data from the table: "takes" */
    delete_takes?: (takes_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: takes_bool_exp} })
    /** delete single row from the table: "takes" */
    delete_takes_by_pk?: (takesGenqlSelection & { __args: {order_tx_sig: Scalars['String']} })
    /** delete data from the table: "token_acct_balances" */
    delete_token_acct_balances?: (token_acct_balances_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: token_acct_balances_bool_exp} })
    /** delete single row from the table: "token_acct_balances" */
    delete_token_acct_balances_by_pk?: (token_acct_balancesGenqlSelection & { __args: {amount: Scalars['bigint'], created_at: Scalars['timestamptz'], mint_acct: Scalars['String'], token_acct: Scalars['String']} })
    /** delete data from the table: "token_accts" */
    delete_token_accts?: (token_accts_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: token_accts_bool_exp} })
    /** delete single row from the table: "token_accts" */
    delete_token_accts_by_pk?: (token_acctsGenqlSelection & { __args: {token_acct: Scalars['String']} })
    /** delete data from the table: "tokens" */
    delete_tokens?: (tokens_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: tokens_bool_exp} })
    /** delete single row from the table: "tokens" */
    delete_tokens_by_pk?: (tokensGenqlSelection & { __args: {mint_acct: Scalars['String']} })
    /** delete data from the table: "transaction_watcher_transactions" */
    delete_transaction_watcher_transactions?: (transaction_watcher_transactions_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: transaction_watcher_transactions_bool_exp} })
    /** delete single row from the table: "transaction_watcher_transactions" */
    delete_transaction_watcher_transactions_by_pk?: (transaction_watcher_transactionsGenqlSelection & { __args: {tx_sig: Scalars['String'], watcher_acct: Scalars['String']} })
    /** delete data from the table: "transaction_watchers" */
    delete_transaction_watchers?: (transaction_watchers_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: transaction_watchers_bool_exp} })
    /** delete single row from the table: "transaction_watchers" */
    delete_transaction_watchers_by_pk?: (transaction_watchersGenqlSelection & { __args: {acct: Scalars['String']} })
    /** delete data from the table: "transactions" */
    delete_transactions?: (transactions_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: transactions_bool_exp} })
    /** delete single row from the table: "transactions" */
    delete_transactions_by_pk?: (transactionsGenqlSelection & { __args: {tx_sig: Scalars['String']} })
    /** delete data from the table: "twaps" */
    delete_twaps?: (twaps_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: twaps_bool_exp} })
    /** delete single row from the table: "twaps" */
    delete_twaps_by_pk?: (twapsGenqlSelection & { __args: {market_acct: Scalars['String'], updated_slot: Scalars['bigint']} })
    /** delete data from the table: "users" */
    delete_users?: (users_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: users_bool_exp} })
    /** delete single row from the table: "users" */
    delete_users_by_pk?: (usersGenqlSelection & { __args: {user_acct: Scalars['String']} })
    /** insert data into the table: "candles" */
    insert_candles?: (candles_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: candles_insert_input[], 
    /** upsert condition */
    on_conflict?: (candles_on_conflict | null)} })
    /** insert a single row into the table: "candles" */
    insert_candles_one?: (candlesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: candles_insert_input, 
    /** upsert condition */
    on_conflict?: (candles_on_conflict | null)} })
    /** insert data into the table: "comments" */
    insert_comments?: (comments_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: comments_insert_input[], 
    /** upsert condition */
    on_conflict?: (comments_on_conflict | null)} })
    /** insert a single row into the table: "comments" */
    insert_comments_one?: (commentsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: comments_insert_input, 
    /** upsert condition */
    on_conflict?: (comments_on_conflict | null)} })
    /** insert data into the table: "conditional_vaults" */
    insert_conditional_vaults?: (conditional_vaults_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: conditional_vaults_insert_input[], 
    /** upsert condition */
    on_conflict?: (conditional_vaults_on_conflict | null)} })
    /** insert a single row into the table: "conditional_vaults" */
    insert_conditional_vaults_one?: (conditional_vaultsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: conditional_vaults_insert_input, 
    /** upsert condition */
    on_conflict?: (conditional_vaults_on_conflict | null)} })
    /** insert data into the table: "dao_details" */
    insert_dao_details?: (dao_details_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: dao_details_insert_input[], 
    /** upsert condition */
    on_conflict?: (dao_details_on_conflict | null)} })
    /** insert a single row into the table: "dao_details" */
    insert_dao_details_one?: (dao_detailsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: dao_details_insert_input, 
    /** upsert condition */
    on_conflict?: (dao_details_on_conflict | null)} })
    /** insert data into the table: "daos" */
    insert_daos?: (daos_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: daos_insert_input[], 
    /** upsert condition */
    on_conflict?: (daos_on_conflict | null)} })
    /** insert a single row into the table: "daos" */
    insert_daos_one?: (daosGenqlSelection & { __args: {
    /** the row to be inserted */
    object: daos_insert_input, 
    /** upsert condition */
    on_conflict?: (daos_on_conflict | null)} })
    /** insert data into the table: "indexer_account_dependencies" */
    insert_indexer_account_dependencies?: (indexer_account_dependencies_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: indexer_account_dependencies_insert_input[], 
    /** upsert condition */
    on_conflict?: (indexer_account_dependencies_on_conflict | null)} })
    /** insert a single row into the table: "indexer_account_dependencies" */
    insert_indexer_account_dependencies_one?: (indexer_account_dependenciesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: indexer_account_dependencies_insert_input, 
    /** upsert condition */
    on_conflict?: (indexer_account_dependencies_on_conflict | null)} })
    /** insert data into the table: "indexers" */
    insert_indexers?: (indexers_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: indexers_insert_input[], 
    /** upsert condition */
    on_conflict?: (indexers_on_conflict | null)} })
    /** insert a single row into the table: "indexers" */
    insert_indexers_one?: (indexersGenqlSelection & { __args: {
    /** the row to be inserted */
    object: indexers_insert_input, 
    /** upsert condition */
    on_conflict?: (indexers_on_conflict | null)} })
    /** insert data into the table: "makes" */
    insert_makes?: (makes_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: makes_insert_input[], 
    /** upsert condition */
    on_conflict?: (makes_on_conflict | null)} })
    /** insert a single row into the table: "makes" */
    insert_makes_one?: (makesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: makes_insert_input, 
    /** upsert condition */
    on_conflict?: (makes_on_conflict | null)} })
    /** insert data into the table: "markets" */
    insert_markets?: (markets_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: markets_insert_input[], 
    /** upsert condition */
    on_conflict?: (markets_on_conflict | null)} })
    /** insert a single row into the table: "markets" */
    insert_markets_one?: (marketsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: markets_insert_input, 
    /** upsert condition */
    on_conflict?: (markets_on_conflict | null)} })
    /** insert data into the table: "orders" */
    insert_orders?: (orders_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: orders_insert_input[], 
    /** upsert condition */
    on_conflict?: (orders_on_conflict | null)} })
    /** insert a single row into the table: "orders" */
    insert_orders_one?: (ordersGenqlSelection & { __args: {
    /** the row to be inserted */
    object: orders_insert_input, 
    /** upsert condition */
    on_conflict?: (orders_on_conflict | null)} })
    /** insert data into the table: "prices" */
    insert_prices?: (prices_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: prices_insert_input[], 
    /** upsert condition */
    on_conflict?: (prices_on_conflict | null)} })
    /** insert a single row into the table: "prices" */
    insert_prices_one?: (pricesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: prices_insert_input, 
    /** upsert condition */
    on_conflict?: (prices_on_conflict | null)} })
    /** insert data into the table: "program_system" */
    insert_program_system?: (program_system_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: program_system_insert_input[], 
    /** upsert condition */
    on_conflict?: (program_system_on_conflict | null)} })
    /** insert a single row into the table: "program_system" */
    insert_program_system_one?: (program_systemGenqlSelection & { __args: {
    /** the row to be inserted */
    object: program_system_insert_input, 
    /** upsert condition */
    on_conflict?: (program_system_on_conflict | null)} })
    /** insert data into the table: "programs" */
    insert_programs?: (programs_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: programs_insert_input[], 
    /** upsert condition */
    on_conflict?: (programs_on_conflict | null)} })
    /** insert a single row into the table: "programs" */
    insert_programs_one?: (programsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: programs_insert_input, 
    /** upsert condition */
    on_conflict?: (programs_on_conflict | null)} })
    /** insert data into the table: "proposal_bars" */
    insert_proposal_bars?: (proposal_bars_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: proposal_bars_insert_input[], 
    /** upsert condition */
    on_conflict?: (proposal_bars_on_conflict | null)} })
    /** insert a single row into the table: "proposal_bars" */
    insert_proposal_bars_one?: (proposal_barsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: proposal_bars_insert_input, 
    /** upsert condition */
    on_conflict?: (proposal_bars_on_conflict | null)} })
    /** insert data into the table: "proposal_details" */
    insert_proposal_details?: (proposal_details_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: proposal_details_insert_input[], 
    /** upsert condition */
    on_conflict?: (proposal_details_on_conflict | null)} })
    /** insert a single row into the table: "proposal_details" */
    insert_proposal_details_one?: (proposal_detailsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: proposal_details_insert_input, 
    /** upsert condition */
    on_conflict?: (proposal_details_on_conflict | null)} })
    /** insert data into the table: "proposals" */
    insert_proposals?: (proposals_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: proposals_insert_input[], 
    /** upsert condition */
    on_conflict?: (proposals_on_conflict | null)} })
    /** insert a single row into the table: "proposals" */
    insert_proposals_one?: (proposalsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: proposals_insert_input, 
    /** upsert condition */
    on_conflict?: (proposals_on_conflict | null)} })
    /** insert data into the table: "reactions" */
    insert_reactions?: (reactions_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: reactions_insert_input[], 
    /** upsert condition */
    on_conflict?: (reactions_on_conflict | null)} })
    /** insert a single row into the table: "reactions" */
    insert_reactions_one?: (reactionsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: reactions_insert_input, 
    /** upsert condition */
    on_conflict?: (reactions_on_conflict | null)} })
    /** insert data into the table: "sessions" */
    insert_sessions?: (sessions_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: sessions_insert_input[], 
    /** upsert condition */
    on_conflict?: (sessions_on_conflict | null)} })
    /** insert a single row into the table: "sessions" */
    insert_sessions_one?: (sessionsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: sessions_insert_input, 
    /** upsert condition */
    on_conflict?: (sessions_on_conflict | null)} })
    /** insert data into the table: "takes" */
    insert_takes?: (takes_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: takes_insert_input[], 
    /** upsert condition */
    on_conflict?: (takes_on_conflict | null)} })
    /** insert a single row into the table: "takes" */
    insert_takes_one?: (takesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: takes_insert_input, 
    /** upsert condition */
    on_conflict?: (takes_on_conflict | null)} })
    /** insert data into the table: "token_acct_balances" */
    insert_token_acct_balances?: (token_acct_balances_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: token_acct_balances_insert_input[], 
    /** upsert condition */
    on_conflict?: (token_acct_balances_on_conflict | null)} })
    /** insert a single row into the table: "token_acct_balances" */
    insert_token_acct_balances_one?: (token_acct_balancesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: token_acct_balances_insert_input, 
    /** upsert condition */
    on_conflict?: (token_acct_balances_on_conflict | null)} })
    /** insert data into the table: "token_accts" */
    insert_token_accts?: (token_accts_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: token_accts_insert_input[], 
    /** upsert condition */
    on_conflict?: (token_accts_on_conflict | null)} })
    /** insert a single row into the table: "token_accts" */
    insert_token_accts_one?: (token_acctsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: token_accts_insert_input, 
    /** upsert condition */
    on_conflict?: (token_accts_on_conflict | null)} })
    /** insert data into the table: "tokens" */
    insert_tokens?: (tokens_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: tokens_insert_input[], 
    /** upsert condition */
    on_conflict?: (tokens_on_conflict | null)} })
    /** insert a single row into the table: "tokens" */
    insert_tokens_one?: (tokensGenqlSelection & { __args: {
    /** the row to be inserted */
    object: tokens_insert_input, 
    /** upsert condition */
    on_conflict?: (tokens_on_conflict | null)} })
    /** insert data into the table: "transaction_watcher_transactions" */
    insert_transaction_watcher_transactions?: (transaction_watcher_transactions_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: transaction_watcher_transactions_insert_input[], 
    /** upsert condition */
    on_conflict?: (transaction_watcher_transactions_on_conflict | null)} })
    /** insert a single row into the table: "transaction_watcher_transactions" */
    insert_transaction_watcher_transactions_one?: (transaction_watcher_transactionsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: transaction_watcher_transactions_insert_input, 
    /** upsert condition */
    on_conflict?: (transaction_watcher_transactions_on_conflict | null)} })
    /** insert data into the table: "transaction_watchers" */
    insert_transaction_watchers?: (transaction_watchers_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: transaction_watchers_insert_input[], 
    /** upsert condition */
    on_conflict?: (transaction_watchers_on_conflict | null)} })
    /** insert a single row into the table: "transaction_watchers" */
    insert_transaction_watchers_one?: (transaction_watchersGenqlSelection & { __args: {
    /** the row to be inserted */
    object: transaction_watchers_insert_input, 
    /** upsert condition */
    on_conflict?: (transaction_watchers_on_conflict | null)} })
    /** insert data into the table: "transactions" */
    insert_transactions?: (transactions_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: transactions_insert_input[], 
    /** upsert condition */
    on_conflict?: (transactions_on_conflict | null)} })
    /** insert a single row into the table: "transactions" */
    insert_transactions_one?: (transactionsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: transactions_insert_input, 
    /** upsert condition */
    on_conflict?: (transactions_on_conflict | null)} })
    /** insert data into the table: "twaps" */
    insert_twaps?: (twaps_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: twaps_insert_input[], 
    /** upsert condition */
    on_conflict?: (twaps_on_conflict | null)} })
    /** insert a single row into the table: "twaps" */
    insert_twaps_one?: (twapsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: twaps_insert_input, 
    /** upsert condition */
    on_conflict?: (twaps_on_conflict | null)} })
    /** insert data into the table: "users" */
    insert_users?: (users_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: users_insert_input[], 
    /** upsert condition */
    on_conflict?: (users_on_conflict | null)} })
    /** insert a single row into the table: "users" */
    insert_users_one?: (usersGenqlSelection & { __args: {
    /** the row to be inserted */
    object: users_insert_input, 
    /** upsert condition */
    on_conflict?: (users_on_conflict | null)} })
    /** update data of the table: "candles" */
    update_candles?: (candles_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (candles_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (candles_set_input | null), 
    /** filter the rows which have to be updated */
    where: candles_bool_exp} })
    /** update single row of the table: "candles" */
    update_candles_by_pk?: (candlesGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (candles_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (candles_set_input | null), pk_columns: candles_pk_columns_input} })
    /** update multiples rows of table: "candles" */
    update_candles_many?: (candles_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: candles_updates[]} })
    /** update data of the table: "comments" */
    update_comments?: (comments_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (comments_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (comments_set_input | null), 
    /** filter the rows which have to be updated */
    where: comments_bool_exp} })
    /** update single row of the table: "comments" */
    update_comments_by_pk?: (commentsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (comments_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (comments_set_input | null), pk_columns: comments_pk_columns_input} })
    /** update multiples rows of table: "comments" */
    update_comments_many?: (comments_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: comments_updates[]} })
    /** update data of the table: "conditional_vaults" */
    update_conditional_vaults?: (conditional_vaults_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (conditional_vaults_set_input | null), 
    /** filter the rows which have to be updated */
    where: conditional_vaults_bool_exp} })
    /** update single row of the table: "conditional_vaults" */
    update_conditional_vaults_by_pk?: (conditional_vaultsGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (conditional_vaults_set_input | null), pk_columns: conditional_vaults_pk_columns_input} })
    /** update multiples rows of table: "conditional_vaults" */
    update_conditional_vaults_many?: (conditional_vaults_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: conditional_vaults_updates[]} })
    /** update data of the table: "dao_details" */
    update_dao_details?: (dao_details_mutation_responseGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (dao_details_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (dao_details_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (dao_details_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (dao_details_delete_key_input | null), 
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dao_details_inc_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (dao_details_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (dao_details_set_input | null), 
    /** filter the rows which have to be updated */
    where: dao_details_bool_exp} })
    /** update single row of the table: "dao_details" */
    update_dao_details_by_pk?: (dao_detailsGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (dao_details_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (dao_details_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (dao_details_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (dao_details_delete_key_input | null), 
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dao_details_inc_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (dao_details_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (dao_details_set_input | null), pk_columns: dao_details_pk_columns_input} })
    /** update multiples rows of table: "dao_details" */
    update_dao_details_many?: (dao_details_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: dao_details_updates[]} })
    /** update data of the table: "daos" */
    update_daos?: (daos_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (daos_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (daos_set_input | null), 
    /** filter the rows which have to be updated */
    where: daos_bool_exp} })
    /** update single row of the table: "daos" */
    update_daos_by_pk?: (daosGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (daos_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (daos_set_input | null), pk_columns: daos_pk_columns_input} })
    /** update multiples rows of table: "daos" */
    update_daos_many?: (daos_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: daos_updates[]} })
    /** update data of the table: "indexer_account_dependencies" */
    update_indexer_account_dependencies?: (indexer_account_dependencies_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (indexer_account_dependencies_set_input | null), 
    /** filter the rows which have to be updated */
    where: indexer_account_dependencies_bool_exp} })
    /** update single row of the table: "indexer_account_dependencies" */
    update_indexer_account_dependencies_by_pk?: (indexer_account_dependenciesGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (indexer_account_dependencies_set_input | null), pk_columns: indexer_account_dependencies_pk_columns_input} })
    /** update multiples rows of table: "indexer_account_dependencies" */
    update_indexer_account_dependencies_many?: (indexer_account_dependencies_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: indexer_account_dependencies_updates[]} })
    /** update data of the table: "indexers" */
    update_indexers?: (indexers_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (indexers_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (indexers_set_input | null), 
    /** filter the rows which have to be updated */
    where: indexers_bool_exp} })
    /** update single row of the table: "indexers" */
    update_indexers_by_pk?: (indexersGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (indexers_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (indexers_set_input | null), pk_columns: indexers_pk_columns_input} })
    /** update multiples rows of table: "indexers" */
    update_indexers_many?: (indexers_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: indexers_updates[]} })
    /** update data of the table: "makes" */
    update_makes?: (makes_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (makes_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (makes_set_input | null), 
    /** filter the rows which have to be updated */
    where: makes_bool_exp} })
    /** update single row of the table: "makes" */
    update_makes_by_pk?: (makesGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (makes_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (makes_set_input | null), pk_columns: makes_pk_columns_input} })
    /** update multiples rows of table: "makes" */
    update_makes_many?: (makes_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: makes_updates[]} })
    /** update data of the table: "markets" */
    update_markets?: (markets_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (markets_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (markets_set_input | null), 
    /** filter the rows which have to be updated */
    where: markets_bool_exp} })
    /** update single row of the table: "markets" */
    update_markets_by_pk?: (marketsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (markets_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (markets_set_input | null), pk_columns: markets_pk_columns_input} })
    /** update multiples rows of table: "markets" */
    update_markets_many?: (markets_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: markets_updates[]} })
    /** update data of the table: "orders" */
    update_orders?: (orders_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (orders_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (orders_set_input | null), 
    /** filter the rows which have to be updated */
    where: orders_bool_exp} })
    /** update single row of the table: "orders" */
    update_orders_by_pk?: (ordersGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (orders_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (orders_set_input | null), pk_columns: orders_pk_columns_input} })
    /** update multiples rows of table: "orders" */
    update_orders_many?: (orders_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: orders_updates[]} })
    /** update data of the table: "prices" */
    update_prices?: (prices_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (prices_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (prices_set_input | null), 
    /** filter the rows which have to be updated */
    where: prices_bool_exp} })
    /** update single row of the table: "prices" */
    update_prices_by_pk?: (pricesGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (prices_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (prices_set_input | null), pk_columns: prices_pk_columns_input} })
    /** update multiples rows of table: "prices" */
    update_prices_many?: (prices_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: prices_updates[]} })
    /** update data of the table: "program_system" */
    update_program_system?: (program_system_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (program_system_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (program_system_set_input | null), 
    /** filter the rows which have to be updated */
    where: program_system_bool_exp} })
    /** update single row of the table: "program_system" */
    update_program_system_by_pk?: (program_systemGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (program_system_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (program_system_set_input | null), pk_columns: program_system_pk_columns_input} })
    /** update multiples rows of table: "program_system" */
    update_program_system_many?: (program_system_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: program_system_updates[]} })
    /** update data of the table: "programs" */
    update_programs?: (programs_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (programs_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (programs_set_input | null), 
    /** filter the rows which have to be updated */
    where: programs_bool_exp} })
    /** update single row of the table: "programs" */
    update_programs_by_pk?: (programsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (programs_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (programs_set_input | null), pk_columns: programs_pk_columns_input} })
    /** update multiples rows of table: "programs" */
    update_programs_many?: (programs_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: programs_updates[]} })
    /** update data of the table: "proposal_bars" */
    update_proposal_bars?: (proposal_bars_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (proposal_bars_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (proposal_bars_set_input | null), 
    /** filter the rows which have to be updated */
    where: proposal_bars_bool_exp} })
    /** update single row of the table: "proposal_bars" */
    update_proposal_bars_by_pk?: (proposal_barsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (proposal_bars_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (proposal_bars_set_input | null), pk_columns: proposal_bars_pk_columns_input} })
    /** update multiples rows of table: "proposal_bars" */
    update_proposal_bars_many?: (proposal_bars_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: proposal_bars_updates[]} })
    /** update data of the table: "proposal_details" */
    update_proposal_details?: (proposal_details_mutation_responseGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (proposal_details_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (proposal_details_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (proposal_details_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (proposal_details_delete_key_input | null), 
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (proposal_details_inc_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (proposal_details_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (proposal_details_set_input | null), 
    /** filter the rows which have to be updated */
    where: proposal_details_bool_exp} })
    /** update single row of the table: "proposal_details" */
    update_proposal_details_by_pk?: (proposal_detailsGenqlSelection & { __args: {
    /** append existing jsonb value of filtered columns with new jsonb value */
    _append?: (proposal_details_append_input | null), 
    /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
    _delete_at_path?: (proposal_details_delete_at_path_input | null), 
    /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
    _delete_elem?: (proposal_details_delete_elem_input | null), 
    /** delete key/value pair or string element. key/value pairs are matched based on their key value */
    _delete_key?: (proposal_details_delete_key_input | null), 
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (proposal_details_inc_input | null), 
    /** prepend existing jsonb value of filtered columns with new jsonb value */
    _prepend?: (proposal_details_prepend_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (proposal_details_set_input | null), pk_columns: proposal_details_pk_columns_input} })
    /** update multiples rows of table: "proposal_details" */
    update_proposal_details_many?: (proposal_details_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: proposal_details_updates[]} })
    /** update data of the table: "proposals" */
    update_proposals?: (proposals_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (proposals_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (proposals_set_input | null), 
    /** filter the rows which have to be updated */
    where: proposals_bool_exp} })
    /** update single row of the table: "proposals" */
    update_proposals_by_pk?: (proposalsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (proposals_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (proposals_set_input | null), pk_columns: proposals_pk_columns_input} })
    /** update multiples rows of table: "proposals" */
    update_proposals_many?: (proposals_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: proposals_updates[]} })
    /** update data of the table: "reactions" */
    update_reactions?: (reactions_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (reactions_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (reactions_set_input | null), 
    /** filter the rows which have to be updated */
    where: reactions_bool_exp} })
    /** update single row of the table: "reactions" */
    update_reactions_by_pk?: (reactionsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (reactions_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (reactions_set_input | null), pk_columns: reactions_pk_columns_input} })
    /** update multiples rows of table: "reactions" */
    update_reactions_many?: (reactions_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: reactions_updates[]} })
    /** update data of the table: "sessions" */
    update_sessions?: (sessions_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (sessions_set_input | null), 
    /** filter the rows which have to be updated */
    where: sessions_bool_exp} })
    /** update single row of the table: "sessions" */
    update_sessions_by_pk?: (sessionsGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (sessions_set_input | null), pk_columns: sessions_pk_columns_input} })
    /** update multiples rows of table: "sessions" */
    update_sessions_many?: (sessions_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: sessions_updates[]} })
    /** update data of the table: "takes" */
    update_takes?: (takes_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (takes_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (takes_set_input | null), 
    /** filter the rows which have to be updated */
    where: takes_bool_exp} })
    /** update single row of the table: "takes" */
    update_takes_by_pk?: (takesGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (takes_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (takes_set_input | null), pk_columns: takes_pk_columns_input} })
    /** update multiples rows of table: "takes" */
    update_takes_many?: (takes_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: takes_updates[]} })
    /** update data of the table: "token_acct_balances" */
    update_token_acct_balances?: (token_acct_balances_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (token_acct_balances_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (token_acct_balances_set_input | null), 
    /** filter the rows which have to be updated */
    where: token_acct_balances_bool_exp} })
    /** update single row of the table: "token_acct_balances" */
    update_token_acct_balances_by_pk?: (token_acct_balancesGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (token_acct_balances_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (token_acct_balances_set_input | null), pk_columns: token_acct_balances_pk_columns_input} })
    /** update multiples rows of table: "token_acct_balances" */
    update_token_acct_balances_many?: (token_acct_balances_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: token_acct_balances_updates[]} })
    /** update data of the table: "token_accts" */
    update_token_accts?: (token_accts_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (token_accts_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (token_accts_set_input | null), 
    /** filter the rows which have to be updated */
    where: token_accts_bool_exp} })
    /** update single row of the table: "token_accts" */
    update_token_accts_by_pk?: (token_acctsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (token_accts_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (token_accts_set_input | null), pk_columns: token_accts_pk_columns_input} })
    /** update multiples rows of table: "token_accts" */
    update_token_accts_many?: (token_accts_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: token_accts_updates[]} })
    /** update data of the table: "tokens" */
    update_tokens?: (tokens_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (tokens_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (tokens_set_input | null), 
    /** filter the rows which have to be updated */
    where: tokens_bool_exp} })
    /** update single row of the table: "tokens" */
    update_tokens_by_pk?: (tokensGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (tokens_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (tokens_set_input | null), pk_columns: tokens_pk_columns_input} })
    /** update multiples rows of table: "tokens" */
    update_tokens_many?: (tokens_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: tokens_updates[]} })
    /** update data of the table: "transaction_watcher_transactions" */
    update_transaction_watcher_transactions?: (transaction_watcher_transactions_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (transaction_watcher_transactions_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (transaction_watcher_transactions_set_input | null), 
    /** filter the rows which have to be updated */
    where: transaction_watcher_transactions_bool_exp} })
    /** update single row of the table: "transaction_watcher_transactions" */
    update_transaction_watcher_transactions_by_pk?: (transaction_watcher_transactionsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (transaction_watcher_transactions_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (transaction_watcher_transactions_set_input | null), pk_columns: transaction_watcher_transactions_pk_columns_input} })
    /** update multiples rows of table: "transaction_watcher_transactions" */
    update_transaction_watcher_transactions_many?: (transaction_watcher_transactions_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: transaction_watcher_transactions_updates[]} })
    /** update data of the table: "transaction_watchers" */
    update_transaction_watchers?: (transaction_watchers_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (transaction_watchers_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (transaction_watchers_set_input | null), 
    /** filter the rows which have to be updated */
    where: transaction_watchers_bool_exp} })
    /** update single row of the table: "transaction_watchers" */
    update_transaction_watchers_by_pk?: (transaction_watchersGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (transaction_watchers_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (transaction_watchers_set_input | null), pk_columns: transaction_watchers_pk_columns_input} })
    /** update multiples rows of table: "transaction_watchers" */
    update_transaction_watchers_many?: (transaction_watchers_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: transaction_watchers_updates[]} })
    /** update data of the table: "transactions" */
    update_transactions?: (transactions_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (transactions_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (transactions_set_input | null), 
    /** filter the rows which have to be updated */
    where: transactions_bool_exp} })
    /** update single row of the table: "transactions" */
    update_transactions_by_pk?: (transactionsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (transactions_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (transactions_set_input | null), pk_columns: transactions_pk_columns_input} })
    /** update multiples rows of table: "transactions" */
    update_transactions_many?: (transactions_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: transactions_updates[]} })
    /** update data of the table: "twaps" */
    update_twaps?: (twaps_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (twaps_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (twaps_set_input | null), 
    /** filter the rows which have to be updated */
    where: twaps_bool_exp} })
    /** update single row of the table: "twaps" */
    update_twaps_by_pk?: (twapsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (twaps_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (twaps_set_input | null), pk_columns: twaps_pk_columns_input} })
    /** update multiples rows of table: "twaps" */
    update_twaps_many?: (twaps_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: twaps_updates[]} })
    /** update data of the table: "users" */
    update_users?: (users_mutation_responseGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (users_set_input | null), 
    /** filter the rows which have to be updated */
    where: users_bool_exp} })
    /** update single row of the table: "users" */
    update_users_by_pk?: (usersGenqlSelection & { __args: {
    /** sets the columns of the filtered rows to the given values */
    _set?: (users_set_input | null), pk_columns: users_pk_columns_input} })
    /** update multiples rows of table: "users" */
    update_users_many?: (users_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: users_updates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {_eq?: (Scalars['numeric'] | null),_gt?: (Scalars['numeric'] | null),_gte?: (Scalars['numeric'] | null),_in?: (Scalars['numeric'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['numeric'] | null),_lte?: (Scalars['numeric'] | null),_neq?: (Scalars['numeric'] | null),_nin?: (Scalars['numeric'][] | null)}


/** columns and relationships of "orders" */
export interface ordersGenqlSelection{
    actor_acct?: boolean | number
    cancel_block?: boolean | number
    cancel_time?: boolean | number
    cancel_tx_sig?: boolean | number
    filled_base_amount?: boolean | number
    is_active?: boolean | number
    /** An object relationship */
    make?: makesGenqlSelection
    /** An object relationship */
    market?: marketsGenqlSelection
    market_acct?: boolean | number
    order_block?: boolean | number
    order_time?: boolean | number
    order_tx_sig?: boolean | number
    quote_price?: boolean | number
    side?: boolean | number
    /** An object relationship */
    take?: takesGenqlSelection
    /** An object relationship */
    transaction?: transactionsGenqlSelection
    unfilled_base_amount?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "orders" */
export interface orders_aggregateGenqlSelection{
    aggregate?: orders_aggregate_fieldsGenqlSelection
    nodes?: ordersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface orders_aggregate_bool_exp {bool_and?: (orders_aggregate_bool_exp_bool_and | null),bool_or?: (orders_aggregate_bool_exp_bool_or | null),count?: (orders_aggregate_bool_exp_count | null)}

export interface orders_aggregate_bool_exp_bool_and {arguments: orders_select_column_orders_aggregate_bool_exp_bool_and_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (orders_bool_exp | null),predicate: Boolean_comparison_exp}

export interface orders_aggregate_bool_exp_bool_or {arguments: orders_select_column_orders_aggregate_bool_exp_bool_or_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (orders_bool_exp | null),predicate: Boolean_comparison_exp}

export interface orders_aggregate_bool_exp_count {arguments?: (orders_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (orders_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "orders" */
export interface orders_aggregate_fieldsGenqlSelection{
    avg?: orders_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (orders_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: orders_max_fieldsGenqlSelection
    min?: orders_min_fieldsGenqlSelection
    stddev?: orders_stddev_fieldsGenqlSelection
    stddev_pop?: orders_stddev_pop_fieldsGenqlSelection
    stddev_samp?: orders_stddev_samp_fieldsGenqlSelection
    sum?: orders_sum_fieldsGenqlSelection
    var_pop?: orders_var_pop_fieldsGenqlSelection
    var_samp?: orders_var_samp_fieldsGenqlSelection
    variance?: orders_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "orders" */
export interface orders_aggregate_order_by {avg?: (orders_avg_order_by | null),count?: (order_by | null),max?: (orders_max_order_by | null),min?: (orders_min_order_by | null),stddev?: (orders_stddev_order_by | null),stddev_pop?: (orders_stddev_pop_order_by | null),stddev_samp?: (orders_stddev_samp_order_by | null),sum?: (orders_sum_order_by | null),var_pop?: (orders_var_pop_order_by | null),var_samp?: (orders_var_samp_order_by | null),variance?: (orders_variance_order_by | null)}


/** input type for inserting array relation for remote table "orders" */
export interface orders_arr_rel_insert_input {data: orders_insert_input[],
/** upsert condition */
on_conflict?: (orders_on_conflict | null)}


/** aggregate avg on columns */
export interface orders_avg_fieldsGenqlSelection{
    cancel_block?: boolean | number
    filled_base_amount?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "orders" */
export interface orders_avg_order_by {cancel_block?: (order_by | null),filled_base_amount?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export interface orders_bool_exp {_and?: (orders_bool_exp[] | null),_not?: (orders_bool_exp | null),_or?: (orders_bool_exp[] | null),actor_acct?: (String_comparison_exp | null),cancel_block?: (bigint_comparison_exp | null),cancel_time?: (timestamptz_comparison_exp | null),cancel_tx_sig?: (String_comparison_exp | null),filled_base_amount?: (bigint_comparison_exp | null),is_active?: (Boolean_comparison_exp | null),make?: (makes_bool_exp | null),market?: (markets_bool_exp | null),market_acct?: (String_comparison_exp | null),order_block?: (bigint_comparison_exp | null),order_time?: (timestamptz_comparison_exp | null),order_tx_sig?: (String_comparison_exp | null),quote_price?: (numeric_comparison_exp | null),side?: (String_comparison_exp | null),take?: (takes_bool_exp | null),transaction?: (transactions_bool_exp | null),unfilled_base_amount?: (bigint_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "orders" */
export interface orders_inc_input {cancel_block?: (Scalars['bigint'] | null),filled_base_amount?: (Scalars['bigint'] | null),order_block?: (Scalars['bigint'] | null),quote_price?: (Scalars['numeric'] | null),unfilled_base_amount?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "orders" */
export interface orders_insert_input {actor_acct?: (Scalars['String'] | null),cancel_block?: (Scalars['bigint'] | null),cancel_time?: (Scalars['timestamptz'] | null),cancel_tx_sig?: (Scalars['String'] | null),filled_base_amount?: (Scalars['bigint'] | null),is_active?: (Scalars['Boolean'] | null),make?: (makes_obj_rel_insert_input | null),market?: (markets_obj_rel_insert_input | null),market_acct?: (Scalars['String'] | null),order_block?: (Scalars['bigint'] | null),order_time?: (Scalars['timestamptz'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['numeric'] | null),side?: (Scalars['String'] | null),take?: (takes_obj_rel_insert_input | null),transaction?: (transactions_obj_rel_insert_input | null),unfilled_base_amount?: (Scalars['bigint'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface orders_max_fieldsGenqlSelection{
    actor_acct?: boolean | number
    cancel_block?: boolean | number
    cancel_time?: boolean | number
    cancel_tx_sig?: boolean | number
    filled_base_amount?: boolean | number
    market_acct?: boolean | number
    order_block?: boolean | number
    order_time?: boolean | number
    order_tx_sig?: boolean | number
    quote_price?: boolean | number
    side?: boolean | number
    unfilled_base_amount?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "orders" */
export interface orders_max_order_by {actor_acct?: (order_by | null),cancel_block?: (order_by | null),cancel_time?: (order_by | null),cancel_tx_sig?: (order_by | null),filled_base_amount?: (order_by | null),market_acct?: (order_by | null),order_block?: (order_by | null),order_time?: (order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),side?: (order_by | null),unfilled_base_amount?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface orders_min_fieldsGenqlSelection{
    actor_acct?: boolean | number
    cancel_block?: boolean | number
    cancel_time?: boolean | number
    cancel_tx_sig?: boolean | number
    filled_base_amount?: boolean | number
    market_acct?: boolean | number
    order_block?: boolean | number
    order_time?: boolean | number
    order_tx_sig?: boolean | number
    quote_price?: boolean | number
    side?: boolean | number
    unfilled_base_amount?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "orders" */
export interface orders_min_order_by {actor_acct?: (order_by | null),cancel_block?: (order_by | null),cancel_time?: (order_by | null),cancel_tx_sig?: (order_by | null),filled_base_amount?: (order_by | null),market_acct?: (order_by | null),order_block?: (order_by | null),order_time?: (order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),side?: (order_by | null),unfilled_base_amount?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "orders" */
export interface orders_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ordersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "orders" */
export interface orders_obj_rel_insert_input {data: orders_insert_input,
/** upsert condition */
on_conflict?: (orders_on_conflict | null)}


/** on_conflict condition type for table "orders" */
export interface orders_on_conflict {constraint: orders_constraint,update_columns?: orders_update_column[],where?: (orders_bool_exp | null)}


/** Ordering options when selecting data from "orders". */
export interface orders_order_by {actor_acct?: (order_by | null),cancel_block?: (order_by | null),cancel_time?: (order_by | null),cancel_tx_sig?: (order_by | null),filled_base_amount?: (order_by | null),is_active?: (order_by | null),make?: (makes_order_by | null),market?: (markets_order_by | null),market_acct?: (order_by | null),order_block?: (order_by | null),order_time?: (order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),side?: (order_by | null),take?: (takes_order_by | null),transaction?: (transactions_order_by | null),unfilled_base_amount?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: orders */
export interface orders_pk_columns_input {order_tx_sig: Scalars['String']}


/** input type for updating data in table "orders" */
export interface orders_set_input {actor_acct?: (Scalars['String'] | null),cancel_block?: (Scalars['bigint'] | null),cancel_time?: (Scalars['timestamptz'] | null),cancel_tx_sig?: (Scalars['String'] | null),filled_base_amount?: (Scalars['bigint'] | null),is_active?: (Scalars['Boolean'] | null),market_acct?: (Scalars['String'] | null),order_block?: (Scalars['bigint'] | null),order_time?: (Scalars['timestamptz'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['numeric'] | null),side?: (Scalars['String'] | null),unfilled_base_amount?: (Scalars['bigint'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface orders_stddev_fieldsGenqlSelection{
    cancel_block?: boolean | number
    filled_base_amount?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "orders" */
export interface orders_stddev_order_by {cancel_block?: (order_by | null),filled_base_amount?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface orders_stddev_pop_fieldsGenqlSelection{
    cancel_block?: boolean | number
    filled_base_amount?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "orders" */
export interface orders_stddev_pop_order_by {cancel_block?: (order_by | null),filled_base_amount?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface orders_stddev_samp_fieldsGenqlSelection{
    cancel_block?: boolean | number
    filled_base_amount?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "orders" */
export interface orders_stddev_samp_order_by {cancel_block?: (order_by | null),filled_base_amount?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** Streaming cursor of the table "orders" */
export interface orders_stream_cursor_input {
/** Stream column input with initial value */
initial_value: orders_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface orders_stream_cursor_value_input {actor_acct?: (Scalars['String'] | null),cancel_block?: (Scalars['bigint'] | null),cancel_time?: (Scalars['timestamptz'] | null),cancel_tx_sig?: (Scalars['String'] | null),filled_base_amount?: (Scalars['bigint'] | null),is_active?: (Scalars['Boolean'] | null),market_acct?: (Scalars['String'] | null),order_block?: (Scalars['bigint'] | null),order_time?: (Scalars['timestamptz'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['numeric'] | null),side?: (Scalars['String'] | null),unfilled_base_amount?: (Scalars['bigint'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface orders_sum_fieldsGenqlSelection{
    cancel_block?: boolean | number
    filled_base_amount?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "orders" */
export interface orders_sum_order_by {cancel_block?: (order_by | null),filled_base_amount?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}

export interface orders_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (orders_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (orders_set_input | null),
/** filter the rows which have to be updated */
where: orders_bool_exp}


/** aggregate var_pop on columns */
export interface orders_var_pop_fieldsGenqlSelection{
    cancel_block?: boolean | number
    filled_base_amount?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "orders" */
export interface orders_var_pop_order_by {cancel_block?: (order_by | null),filled_base_amount?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** aggregate var_samp on columns */
export interface orders_var_samp_fieldsGenqlSelection{
    cancel_block?: boolean | number
    filled_base_amount?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "orders" */
export interface orders_var_samp_order_by {cancel_block?: (order_by | null),filled_base_amount?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** aggregate variance on columns */
export interface orders_variance_fieldsGenqlSelection{
    cancel_block?: boolean | number
    filled_base_amount?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    unfilled_base_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "orders" */
export interface orders_variance_order_by {cancel_block?: (order_by | null),filled_base_amount?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),unfilled_base_amount?: (order_by | null)}


/** columns and relationships of "prices" */
export interface pricesGenqlSelection{
    base_amount?: boolean | number
    created_at?: boolean | number
    created_by?: boolean | number
    /** An object relationship */
    market?: marketsGenqlSelection
    market_acct?: boolean | number
    price?: boolean | number
    prices_type?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "prices" */
export interface prices_aggregateGenqlSelection{
    aggregate?: prices_aggregate_fieldsGenqlSelection
    nodes?: pricesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface prices_aggregate_bool_exp {count?: (prices_aggregate_bool_exp_count | null)}

export interface prices_aggregate_bool_exp_count {arguments?: (prices_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (prices_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "prices" */
export interface prices_aggregate_fieldsGenqlSelection{
    avg?: prices_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (prices_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: prices_max_fieldsGenqlSelection
    min?: prices_min_fieldsGenqlSelection
    stddev?: prices_stddev_fieldsGenqlSelection
    stddev_pop?: prices_stddev_pop_fieldsGenqlSelection
    stddev_samp?: prices_stddev_samp_fieldsGenqlSelection
    sum?: prices_sum_fieldsGenqlSelection
    var_pop?: prices_var_pop_fieldsGenqlSelection
    var_samp?: prices_var_samp_fieldsGenqlSelection
    variance?: prices_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "prices" */
export interface prices_aggregate_order_by {avg?: (prices_avg_order_by | null),count?: (order_by | null),max?: (prices_max_order_by | null),min?: (prices_min_order_by | null),stddev?: (prices_stddev_order_by | null),stddev_pop?: (prices_stddev_pop_order_by | null),stddev_samp?: (prices_stddev_samp_order_by | null),sum?: (prices_sum_order_by | null),var_pop?: (prices_var_pop_order_by | null),var_samp?: (prices_var_samp_order_by | null),variance?: (prices_variance_order_by | null)}


/** input type for inserting array relation for remote table "prices" */
export interface prices_arr_rel_insert_input {data: prices_insert_input[],
/** upsert condition */
on_conflict?: (prices_on_conflict | null)}


/** aggregate avg on columns */
export interface prices_avg_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "prices" */
export interface prices_avg_order_by {base_amount?: (order_by | null),price?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** Boolean expression to filter rows from the table "prices". All fields are combined with a logical 'AND'. */
export interface prices_bool_exp {_and?: (prices_bool_exp[] | null),_not?: (prices_bool_exp | null),_or?: (prices_bool_exp[] | null),base_amount?: (bigint_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),created_by?: (String_comparison_exp | null),market?: (markets_bool_exp | null),market_acct?: (String_comparison_exp | null),price?: (numeric_comparison_exp | null),prices_type?: (String_comparison_exp | null),quote_amount?: (bigint_comparison_exp | null),updated_slot?: (bigint_comparison_exp | null)}


/** columns and relationships of "prices_chart_data" */
export interface prices_chart_dataGenqlSelection{
    base_amount?: boolean | number
    interv?: boolean | number
    /** An object relationship */
    market?: marketsGenqlSelection
    market_acct?: boolean | number
    price?: boolean | number
    prices_type?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "prices_chart_data" */
export interface prices_chart_data_aggregateGenqlSelection{
    aggregate?: prices_chart_data_aggregate_fieldsGenqlSelection
    nodes?: prices_chart_dataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "prices_chart_data" */
export interface prices_chart_data_aggregate_fieldsGenqlSelection{
    avg?: prices_chart_data_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (prices_chart_data_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: prices_chart_data_max_fieldsGenqlSelection
    min?: prices_chart_data_min_fieldsGenqlSelection
    stddev?: prices_chart_data_stddev_fieldsGenqlSelection
    stddev_pop?: prices_chart_data_stddev_pop_fieldsGenqlSelection
    stddev_samp?: prices_chart_data_stddev_samp_fieldsGenqlSelection
    sum?: prices_chart_data_sum_fieldsGenqlSelection
    var_pop?: prices_chart_data_var_pop_fieldsGenqlSelection
    var_samp?: prices_chart_data_var_samp_fieldsGenqlSelection
    variance?: prices_chart_data_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface prices_chart_data_avg_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "prices_chart_data". All fields are combined with a logical 'AND'. */
export interface prices_chart_data_bool_exp {_and?: (prices_chart_data_bool_exp[] | null),_not?: (prices_chart_data_bool_exp | null),_or?: (prices_chart_data_bool_exp[] | null),base_amount?: (bigint_comparison_exp | null),interv?: (timestamptz_comparison_exp | null),market?: (markets_bool_exp | null),market_acct?: (String_comparison_exp | null),price?: (numeric_comparison_exp | null),prices_type?: (String_comparison_exp | null),quote_amount?: (bigint_comparison_exp | null)}


/** aggregate max on columns */
export interface prices_chart_data_max_fieldsGenqlSelection{
    base_amount?: boolean | number
    interv?: boolean | number
    market_acct?: boolean | number
    price?: boolean | number
    prices_type?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface prices_chart_data_min_fieldsGenqlSelection{
    base_amount?: boolean | number
    interv?: boolean | number
    market_acct?: boolean | number
    price?: boolean | number
    prices_type?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "prices_chart_data". */
export interface prices_chart_data_order_by {base_amount?: (order_by | null),interv?: (order_by | null),market?: (markets_order_by | null),market_acct?: (order_by | null),price?: (order_by | null),prices_type?: (order_by | null),quote_amount?: (order_by | null)}


/** aggregate stddev on columns */
export interface prices_chart_data_stddev_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface prices_chart_data_stddev_pop_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface prices_chart_data_stddev_samp_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "prices_chart_data" */
export interface prices_chart_data_stream_cursor_input {
/** Stream column input with initial value */
initial_value: prices_chart_data_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface prices_chart_data_stream_cursor_value_input {base_amount?: (Scalars['bigint'] | null),interv?: (Scalars['timestamptz'] | null),market_acct?: (Scalars['String'] | null),price?: (Scalars['numeric'] | null),prices_type?: (Scalars['String'] | null),quote_amount?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface prices_chart_data_sum_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface prices_chart_data_var_pop_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface prices_chart_data_var_samp_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface prices_chart_data_variance_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for incrementing numeric columns in table "prices" */
export interface prices_inc_input {base_amount?: (Scalars['bigint'] | null),price?: (Scalars['numeric'] | null),quote_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "prices" */
export interface prices_insert_input {base_amount?: (Scalars['bigint'] | null),created_at?: (Scalars['timestamptz'] | null),created_by?: (Scalars['String'] | null),market?: (markets_obj_rel_insert_input | null),market_acct?: (Scalars['String'] | null),price?: (Scalars['numeric'] | null),prices_type?: (Scalars['String'] | null),quote_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** aggregate max on columns */
export interface prices_max_fieldsGenqlSelection{
    base_amount?: boolean | number
    created_at?: boolean | number
    created_by?: boolean | number
    market_acct?: boolean | number
    price?: boolean | number
    prices_type?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "prices" */
export interface prices_max_order_by {base_amount?: (order_by | null),created_at?: (order_by | null),created_by?: (order_by | null),market_acct?: (order_by | null),price?: (order_by | null),prices_type?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate min on columns */
export interface prices_min_fieldsGenqlSelection{
    base_amount?: boolean | number
    created_at?: boolean | number
    created_by?: boolean | number
    market_acct?: boolean | number
    price?: boolean | number
    prices_type?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "prices" */
export interface prices_min_order_by {base_amount?: (order_by | null),created_at?: (order_by | null),created_by?: (order_by | null),market_acct?: (order_by | null),price?: (order_by | null),prices_type?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** response of any mutation on the table "prices" */
export interface prices_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: pricesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "prices" */
export interface prices_on_conflict {constraint: prices_constraint,update_columns?: prices_update_column[],where?: (prices_bool_exp | null)}


/** Ordering options when selecting data from "prices". */
export interface prices_order_by {base_amount?: (order_by | null),created_at?: (order_by | null),created_by?: (order_by | null),market?: (markets_order_by | null),market_acct?: (order_by | null),price?: (order_by | null),prices_type?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** primary key columns input for table: prices */
export interface prices_pk_columns_input {created_at: Scalars['timestamptz'],market_acct: Scalars['String']}


/** input type for updating data in table "prices" */
export interface prices_set_input {base_amount?: (Scalars['bigint'] | null),created_at?: (Scalars['timestamptz'] | null),created_by?: (Scalars['String'] | null),market_acct?: (Scalars['String'] | null),price?: (Scalars['numeric'] | null),prices_type?: (Scalars['String'] | null),quote_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** aggregate stddev on columns */
export interface prices_stddev_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "prices" */
export interface prices_stddev_order_by {base_amount?: (order_by | null),price?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface prices_stddev_pop_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "prices" */
export interface prices_stddev_pop_order_by {base_amount?: (order_by | null),price?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface prices_stddev_samp_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "prices" */
export interface prices_stddev_samp_order_by {base_amount?: (order_by | null),price?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** Streaming cursor of the table "prices" */
export interface prices_stream_cursor_input {
/** Stream column input with initial value */
initial_value: prices_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface prices_stream_cursor_value_input {base_amount?: (Scalars['bigint'] | null),created_at?: (Scalars['timestamptz'] | null),created_by?: (Scalars['String'] | null),market_acct?: (Scalars['String'] | null),price?: (Scalars['numeric'] | null),prices_type?: (Scalars['String'] | null),quote_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface prices_sum_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "prices" */
export interface prices_sum_order_by {base_amount?: (order_by | null),price?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}

export interface prices_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (prices_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (prices_set_input | null),
/** filter the rows which have to be updated */
where: prices_bool_exp}


/** aggregate var_pop on columns */
export interface prices_var_pop_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "prices" */
export interface prices_var_pop_order_by {base_amount?: (order_by | null),price?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate var_samp on columns */
export interface prices_var_samp_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "prices" */
export interface prices_var_samp_order_by {base_amount?: (order_by | null),price?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate variance on columns */
export interface prices_variance_fieldsGenqlSelection{
    base_amount?: boolean | number
    price?: boolean | number
    quote_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "prices" */
export interface prices_variance_order_by {base_amount?: (order_by | null),price?: (order_by | null),quote_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** columns and relationships of "program_system" */
export interface program_systemGenqlSelection{
    autocrat_acct?: boolean | number
    conditional_vault_acct?: boolean | number
    migrator_acct?: boolean | number
    pricing_model_acct?: boolean | number
    /** An object relationship */
    program?: programsGenqlSelection
    /** An object relationship */
    programByConditionalVaultAcct?: programsGenqlSelection
    /** An object relationship */
    programByMigratorAcct?: programsGenqlSelection
    /** An object relationship */
    programByPricingModelAcct?: programsGenqlSelection
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "program_system" */
export interface program_system_aggregateGenqlSelection{
    aggregate?: program_system_aggregate_fieldsGenqlSelection
    nodes?: program_systemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface program_system_aggregate_bool_exp {avg?: (program_system_aggregate_bool_exp_avg | null),corr?: (program_system_aggregate_bool_exp_corr | null),count?: (program_system_aggregate_bool_exp_count | null),covar_samp?: (program_system_aggregate_bool_exp_covar_samp | null),max?: (program_system_aggregate_bool_exp_max | null),min?: (program_system_aggregate_bool_exp_min | null),stddev_samp?: (program_system_aggregate_bool_exp_stddev_samp | null),sum?: (program_system_aggregate_bool_exp_sum | null),var_samp?: (program_system_aggregate_bool_exp_var_samp | null)}

export interface program_system_aggregate_bool_exp_avg {arguments: program_system_select_column_program_system_aggregate_bool_exp_avg_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (program_system_bool_exp | null),predicate: float8_comparison_exp}

export interface program_system_aggregate_bool_exp_corr {arguments: program_system_aggregate_bool_exp_corr_arguments,distinct?: (Scalars['Boolean'] | null),filter?: (program_system_bool_exp | null),predicate: float8_comparison_exp}

export interface program_system_aggregate_bool_exp_corr_arguments {X: program_system_select_column_program_system_aggregate_bool_exp_corr_arguments_columns,Y: program_system_select_column_program_system_aggregate_bool_exp_corr_arguments_columns}

export interface program_system_aggregate_bool_exp_count {arguments?: (program_system_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (program_system_bool_exp | null),predicate: Int_comparison_exp}

export interface program_system_aggregate_bool_exp_covar_samp {arguments: program_system_aggregate_bool_exp_covar_samp_arguments,distinct?: (Scalars['Boolean'] | null),filter?: (program_system_bool_exp | null),predicate: float8_comparison_exp}

export interface program_system_aggregate_bool_exp_covar_samp_arguments {X: program_system_select_column_program_system_aggregate_bool_exp_covar_samp_arguments_columns,Y: program_system_select_column_program_system_aggregate_bool_exp_covar_samp_arguments_columns}

export interface program_system_aggregate_bool_exp_max {arguments: program_system_select_column_program_system_aggregate_bool_exp_max_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (program_system_bool_exp | null),predicate: float8_comparison_exp}

export interface program_system_aggregate_bool_exp_min {arguments: program_system_select_column_program_system_aggregate_bool_exp_min_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (program_system_bool_exp | null),predicate: float8_comparison_exp}

export interface program_system_aggregate_bool_exp_stddev_samp {arguments: program_system_select_column_program_system_aggregate_bool_exp_stddev_samp_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (program_system_bool_exp | null),predicate: float8_comparison_exp}

export interface program_system_aggregate_bool_exp_sum {arguments: program_system_select_column_program_system_aggregate_bool_exp_sum_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (program_system_bool_exp | null),predicate: float8_comparison_exp}

export interface program_system_aggregate_bool_exp_var_samp {arguments: program_system_select_column_program_system_aggregate_bool_exp_var_samp_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (program_system_bool_exp | null),predicate: float8_comparison_exp}


/** aggregate fields of "program_system" */
export interface program_system_aggregate_fieldsGenqlSelection{
    avg?: program_system_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (program_system_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: program_system_max_fieldsGenqlSelection
    min?: program_system_min_fieldsGenqlSelection
    stddev?: program_system_stddev_fieldsGenqlSelection
    stddev_pop?: program_system_stddev_pop_fieldsGenqlSelection
    stddev_samp?: program_system_stddev_samp_fieldsGenqlSelection
    sum?: program_system_sum_fieldsGenqlSelection
    var_pop?: program_system_var_pop_fieldsGenqlSelection
    var_samp?: program_system_var_samp_fieldsGenqlSelection
    variance?: program_system_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "program_system" */
export interface program_system_aggregate_order_by {avg?: (program_system_avg_order_by | null),count?: (order_by | null),max?: (program_system_max_order_by | null),min?: (program_system_min_order_by | null),stddev?: (program_system_stddev_order_by | null),stddev_pop?: (program_system_stddev_pop_order_by | null),stddev_samp?: (program_system_stddev_samp_order_by | null),sum?: (program_system_sum_order_by | null),var_pop?: (program_system_var_pop_order_by | null),var_samp?: (program_system_var_samp_order_by | null),variance?: (program_system_variance_order_by | null)}


/** input type for inserting array relation for remote table "program_system" */
export interface program_system_arr_rel_insert_input {data: program_system_insert_input[],
/** upsert condition */
on_conflict?: (program_system_on_conflict | null)}


/** aggregate avg on columns */
export interface program_system_avg_fieldsGenqlSelection{
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "program_system" */
export interface program_system_avg_order_by {system_version?: (order_by | null)}


/** Boolean expression to filter rows from the table "program_system". All fields are combined with a logical 'AND'. */
export interface program_system_bool_exp {_and?: (program_system_bool_exp[] | null),_not?: (program_system_bool_exp | null),_or?: (program_system_bool_exp[] | null),autocrat_acct?: (String_comparison_exp | null),conditional_vault_acct?: (String_comparison_exp | null),migrator_acct?: (String_comparison_exp | null),pricing_model_acct?: (String_comparison_exp | null),program?: (programs_bool_exp | null),programByConditionalVaultAcct?: (programs_bool_exp | null),programByMigratorAcct?: (programs_bool_exp | null),programByPricingModelAcct?: (programs_bool_exp | null),system_version?: (float8_comparison_exp | null)}


/** input type for incrementing numeric columns in table "program_system" */
export interface program_system_inc_input {system_version?: (Scalars['float8'] | null)}


/** input type for inserting data into table "program_system" */
export interface program_system_insert_input {autocrat_acct?: (Scalars['String'] | null),conditional_vault_acct?: (Scalars['String'] | null),migrator_acct?: (Scalars['String'] | null),pricing_model_acct?: (Scalars['String'] | null),program?: (programs_obj_rel_insert_input | null),programByConditionalVaultAcct?: (programs_obj_rel_insert_input | null),programByMigratorAcct?: (programs_obj_rel_insert_input | null),programByPricingModelAcct?: (programs_obj_rel_insert_input | null),system_version?: (Scalars['float8'] | null)}


/** aggregate max on columns */
export interface program_system_max_fieldsGenqlSelection{
    autocrat_acct?: boolean | number
    conditional_vault_acct?: boolean | number
    migrator_acct?: boolean | number
    pricing_model_acct?: boolean | number
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "program_system" */
export interface program_system_max_order_by {autocrat_acct?: (order_by | null),conditional_vault_acct?: (order_by | null),migrator_acct?: (order_by | null),pricing_model_acct?: (order_by | null),system_version?: (order_by | null)}


/** aggregate min on columns */
export interface program_system_min_fieldsGenqlSelection{
    autocrat_acct?: boolean | number
    conditional_vault_acct?: boolean | number
    migrator_acct?: boolean | number
    pricing_model_acct?: boolean | number
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "program_system" */
export interface program_system_min_order_by {autocrat_acct?: (order_by | null),conditional_vault_acct?: (order_by | null),migrator_acct?: (order_by | null),pricing_model_acct?: (order_by | null),system_version?: (order_by | null)}


/** response of any mutation on the table "program_system" */
export interface program_system_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: program_systemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "program_system" */
export interface program_system_on_conflict {constraint: program_system_constraint,update_columns?: program_system_update_column[],where?: (program_system_bool_exp | null)}


/** Ordering options when selecting data from "program_system". */
export interface program_system_order_by {autocrat_acct?: (order_by | null),conditional_vault_acct?: (order_by | null),migrator_acct?: (order_by | null),pricing_model_acct?: (order_by | null),program?: (programs_order_by | null),programByConditionalVaultAcct?: (programs_order_by | null),programByMigratorAcct?: (programs_order_by | null),programByPricingModelAcct?: (programs_order_by | null),system_version?: (order_by | null)}


/** primary key columns input for table: program_system */
export interface program_system_pk_columns_input {system_version: Scalars['float8']}


/** input type for updating data in table "program_system" */
export interface program_system_set_input {autocrat_acct?: (Scalars['String'] | null),conditional_vault_acct?: (Scalars['String'] | null),migrator_acct?: (Scalars['String'] | null),pricing_model_acct?: (Scalars['String'] | null),system_version?: (Scalars['float8'] | null)}


/** aggregate stddev on columns */
export interface program_system_stddev_fieldsGenqlSelection{
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "program_system" */
export interface program_system_stddev_order_by {system_version?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface program_system_stddev_pop_fieldsGenqlSelection{
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "program_system" */
export interface program_system_stddev_pop_order_by {system_version?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface program_system_stddev_samp_fieldsGenqlSelection{
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "program_system" */
export interface program_system_stddev_samp_order_by {system_version?: (order_by | null)}


/** Streaming cursor of the table "program_system" */
export interface program_system_stream_cursor_input {
/** Stream column input with initial value */
initial_value: program_system_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface program_system_stream_cursor_value_input {autocrat_acct?: (Scalars['String'] | null),conditional_vault_acct?: (Scalars['String'] | null),migrator_acct?: (Scalars['String'] | null),pricing_model_acct?: (Scalars['String'] | null),system_version?: (Scalars['float8'] | null)}


/** aggregate sum on columns */
export interface program_system_sum_fieldsGenqlSelection{
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "program_system" */
export interface program_system_sum_order_by {system_version?: (order_by | null)}

export interface program_system_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (program_system_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (program_system_set_input | null),
/** filter the rows which have to be updated */
where: program_system_bool_exp}


/** aggregate var_pop on columns */
export interface program_system_var_pop_fieldsGenqlSelection{
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "program_system" */
export interface program_system_var_pop_order_by {system_version?: (order_by | null)}


/** aggregate var_samp on columns */
export interface program_system_var_samp_fieldsGenqlSelection{
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "program_system" */
export interface program_system_var_samp_order_by {system_version?: (order_by | null)}


/** aggregate variance on columns */
export interface program_system_variance_fieldsGenqlSelection{
    system_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "program_system" */
export interface program_system_variance_order_by {system_version?: (order_by | null)}


/** columns and relationships of "programs" */
export interface programsGenqlSelection{
    created_at?: boolean | number
    /** An array relationship */
    daos?: (daosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** An aggregate relationship */
    daos_aggregate?: (daos_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    deployed_at?: boolean | number
    /** An array relationship */
    programSystemsByConditionalVaultAcct?: (program_systemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** An aggregate relationship */
    programSystemsByConditionalVaultAcct_aggregate?: (program_system_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** An array relationship */
    programSystemsByMigratorAcct?: (program_systemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** An aggregate relationship */
    programSystemsByMigratorAcct_aggregate?: (program_system_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** An array relationship */
    programSystemsByPricingModelAcct?: (program_systemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** An aggregate relationship */
    programSystemsByPricingModelAcct_aggregate?: (program_system_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    program_acct?: boolean | number
    program_name?: boolean | number
    /** An array relationship */
    program_systems?: (program_systemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** An aggregate relationship */
    program_systems_aggregate?: (program_system_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "programs" */
export interface programs_aggregateGenqlSelection{
    aggregate?: programs_aggregate_fieldsGenqlSelection
    nodes?: programsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "programs" */
export interface programs_aggregate_fieldsGenqlSelection{
    avg?: programs_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (programs_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: programs_max_fieldsGenqlSelection
    min?: programs_min_fieldsGenqlSelection
    stddev?: programs_stddev_fieldsGenqlSelection
    stddev_pop?: programs_stddev_pop_fieldsGenqlSelection
    stddev_samp?: programs_stddev_samp_fieldsGenqlSelection
    sum?: programs_sum_fieldsGenqlSelection
    var_pop?: programs_var_pop_fieldsGenqlSelection
    var_samp?: programs_var_samp_fieldsGenqlSelection
    variance?: programs_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface programs_avg_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "programs". All fields are combined with a logical 'AND'. */
export interface programs_bool_exp {_and?: (programs_bool_exp[] | null),_not?: (programs_bool_exp | null),_or?: (programs_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),daos?: (daos_bool_exp | null),daos_aggregate?: (daos_aggregate_bool_exp | null),deployed_at?: (timestamp_comparison_exp | null),programSystemsByConditionalVaultAcct?: (program_system_bool_exp | null),programSystemsByConditionalVaultAcct_aggregate?: (program_system_aggregate_bool_exp | null),programSystemsByMigratorAcct?: (program_system_bool_exp | null),programSystemsByMigratorAcct_aggregate?: (program_system_aggregate_bool_exp | null),programSystemsByPricingModelAcct?: (program_system_bool_exp | null),programSystemsByPricingModelAcct_aggregate?: (program_system_aggregate_bool_exp | null),program_acct?: (String_comparison_exp | null),program_name?: (String_comparison_exp | null),program_systems?: (program_system_bool_exp | null),program_systems_aggregate?: (program_system_aggregate_bool_exp | null),version?: (float8_comparison_exp | null)}


/** input type for incrementing numeric columns in table "programs" */
export interface programs_inc_input {version?: (Scalars['float8'] | null)}


/** input type for inserting data into table "programs" */
export interface programs_insert_input {created_at?: (Scalars['timestamptz'] | null),daos?: (daos_arr_rel_insert_input | null),deployed_at?: (Scalars['timestamp'] | null),programSystemsByConditionalVaultAcct?: (program_system_arr_rel_insert_input | null),programSystemsByMigratorAcct?: (program_system_arr_rel_insert_input | null),programSystemsByPricingModelAcct?: (program_system_arr_rel_insert_input | null),program_acct?: (Scalars['String'] | null),program_name?: (Scalars['String'] | null),program_systems?: (program_system_arr_rel_insert_input | null),version?: (Scalars['float8'] | null)}


/** aggregate max on columns */
export interface programs_max_fieldsGenqlSelection{
    created_at?: boolean | number
    deployed_at?: boolean | number
    program_acct?: boolean | number
    program_name?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface programs_min_fieldsGenqlSelection{
    created_at?: boolean | number
    deployed_at?: boolean | number
    program_acct?: boolean | number
    program_name?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "programs" */
export interface programs_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: programsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "programs" */
export interface programs_obj_rel_insert_input {data: programs_insert_input,
/** upsert condition */
on_conflict?: (programs_on_conflict | null)}


/** on_conflict condition type for table "programs" */
export interface programs_on_conflict {constraint: programs_constraint,update_columns?: programs_update_column[],where?: (programs_bool_exp | null)}


/** Ordering options when selecting data from "programs". */
export interface programs_order_by {created_at?: (order_by | null),daos_aggregate?: (daos_aggregate_order_by | null),deployed_at?: (order_by | null),programSystemsByConditionalVaultAcct_aggregate?: (program_system_aggregate_order_by | null),programSystemsByMigratorAcct_aggregate?: (program_system_aggregate_order_by | null),programSystemsByPricingModelAcct_aggregate?: (program_system_aggregate_order_by | null),program_acct?: (order_by | null),program_name?: (order_by | null),program_systems_aggregate?: (program_system_aggregate_order_by | null),version?: (order_by | null)}


/** primary key columns input for table: programs */
export interface programs_pk_columns_input {program_acct: Scalars['String']}


/** input type for updating data in table "programs" */
export interface programs_set_input {created_at?: (Scalars['timestamptz'] | null),deployed_at?: (Scalars['timestamp'] | null),program_acct?: (Scalars['String'] | null),program_name?: (Scalars['String'] | null),version?: (Scalars['float8'] | null)}


/** aggregate stddev on columns */
export interface programs_stddev_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface programs_stddev_pop_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface programs_stddev_samp_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "programs" */
export interface programs_stream_cursor_input {
/** Stream column input with initial value */
initial_value: programs_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface programs_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),deployed_at?: (Scalars['timestamp'] | null),program_acct?: (Scalars['String'] | null),program_name?: (Scalars['String'] | null),version?: (Scalars['float8'] | null)}


/** aggregate sum on columns */
export interface programs_sum_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface programs_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (programs_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (programs_set_input | null),
/** filter the rows which have to be updated */
where: programs_bool_exp}


/** aggregate var_pop on columns */
export interface programs_var_pop_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface programs_var_samp_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface programs_variance_fieldsGenqlSelection{
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "proposal_bars" */
export interface proposal_barsGenqlSelection{
    bar_size?: boolean | number
    bar_start_time?: boolean | number
    fail_base_amount?: boolean | number
    /** An object relationship */
    fail_market?: marketsGenqlSelection
    fail_market_acct?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    /** An object relationship */
    pass_market?: marketsGenqlSelection
    pass_market_acct?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    proposal_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "proposal_bars" */
export interface proposal_bars_aggregateGenqlSelection{
    aggregate?: proposal_bars_aggregate_fieldsGenqlSelection
    nodes?: proposal_barsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "proposal_bars" */
export interface proposal_bars_aggregate_fieldsGenqlSelection{
    avg?: proposal_bars_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (proposal_bars_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: proposal_bars_max_fieldsGenqlSelection
    min?: proposal_bars_min_fieldsGenqlSelection
    stddev?: proposal_bars_stddev_fieldsGenqlSelection
    stddev_pop?: proposal_bars_stddev_pop_fieldsGenqlSelection
    stddev_samp?: proposal_bars_stddev_samp_fieldsGenqlSelection
    sum?: proposal_bars_sum_fieldsGenqlSelection
    var_pop?: proposal_bars_var_pop_fieldsGenqlSelection
    var_samp?: proposal_bars_var_samp_fieldsGenqlSelection
    variance?: proposal_bars_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface proposal_bars_avg_fieldsGenqlSelection{
    fail_base_amount?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "proposal_bars". All fields are combined with a logical 'AND'. */
export interface proposal_bars_bool_exp {_and?: (proposal_bars_bool_exp[] | null),_not?: (proposal_bars_bool_exp | null),_or?: (proposal_bars_bool_exp[] | null),bar_size?: (interval_comparison_exp | null),bar_start_time?: (timestamptz_comparison_exp | null),fail_base_amount?: (bigint_comparison_exp | null),fail_market?: (markets_bool_exp | null),fail_market_acct?: (String_comparison_exp | null),fail_price?: (numeric_comparison_exp | null),fail_quote_amount?: (bigint_comparison_exp | null),pass_base_amount?: (bigint_comparison_exp | null),pass_market?: (markets_bool_exp | null),pass_market_acct?: (String_comparison_exp | null),pass_price?: (numeric_comparison_exp | null),pass_quote_amount?: (bigint_comparison_exp | null),proposal_acct?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "proposal_bars" */
export interface proposal_bars_inc_input {fail_base_amount?: (Scalars['bigint'] | null),fail_price?: (Scalars['numeric'] | null),fail_quote_amount?: (Scalars['bigint'] | null),pass_base_amount?: (Scalars['bigint'] | null),pass_price?: (Scalars['numeric'] | null),pass_quote_amount?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "proposal_bars" */
export interface proposal_bars_insert_input {bar_size?: (Scalars['interval'] | null),bar_start_time?: (Scalars['timestamptz'] | null),fail_base_amount?: (Scalars['bigint'] | null),fail_market?: (markets_obj_rel_insert_input | null),fail_market_acct?: (Scalars['String'] | null),fail_price?: (Scalars['numeric'] | null),fail_quote_amount?: (Scalars['bigint'] | null),pass_base_amount?: (Scalars['bigint'] | null),pass_market?: (markets_obj_rel_insert_input | null),pass_market_acct?: (Scalars['String'] | null),pass_price?: (Scalars['numeric'] | null),pass_quote_amount?: (Scalars['bigint'] | null),proposal_acct?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface proposal_bars_max_fieldsGenqlSelection{
    bar_start_time?: boolean | number
    fail_base_amount?: boolean | number
    fail_market_acct?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_market_acct?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    proposal_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface proposal_bars_min_fieldsGenqlSelection{
    bar_start_time?: boolean | number
    fail_base_amount?: boolean | number
    fail_market_acct?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_market_acct?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    proposal_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "proposal_bars" */
export interface proposal_bars_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: proposal_barsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "proposal_bars" */
export interface proposal_bars_on_conflict {constraint: proposal_bars_constraint,update_columns?: proposal_bars_update_column[],where?: (proposal_bars_bool_exp | null)}


/** Ordering options when selecting data from "proposal_bars". */
export interface proposal_bars_order_by {bar_size?: (order_by | null),bar_start_time?: (order_by | null),fail_base_amount?: (order_by | null),fail_market?: (markets_order_by | null),fail_market_acct?: (order_by | null),fail_price?: (order_by | null),fail_quote_amount?: (order_by | null),pass_base_amount?: (order_by | null),pass_market?: (markets_order_by | null),pass_market_acct?: (order_by | null),pass_price?: (order_by | null),pass_quote_amount?: (order_by | null),proposal_acct?: (order_by | null)}


/** primary key columns input for table: proposal_bars */
export interface proposal_bars_pk_columns_input {bar_size: Scalars['interval'],bar_start_time: Scalars['timestamptz'],proposal_acct: Scalars['String']}


/** input type for updating data in table "proposal_bars" */
export interface proposal_bars_set_input {bar_size?: (Scalars['interval'] | null),bar_start_time?: (Scalars['timestamptz'] | null),fail_base_amount?: (Scalars['bigint'] | null),fail_market_acct?: (Scalars['String'] | null),fail_price?: (Scalars['numeric'] | null),fail_quote_amount?: (Scalars['bigint'] | null),pass_base_amount?: (Scalars['bigint'] | null),pass_market_acct?: (Scalars['String'] | null),pass_price?: (Scalars['numeric'] | null),pass_quote_amount?: (Scalars['bigint'] | null),proposal_acct?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface proposal_bars_stddev_fieldsGenqlSelection{
    fail_base_amount?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface proposal_bars_stddev_pop_fieldsGenqlSelection{
    fail_base_amount?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface proposal_bars_stddev_samp_fieldsGenqlSelection{
    fail_base_amount?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "proposal_bars" */
export interface proposal_bars_stream_cursor_input {
/** Stream column input with initial value */
initial_value: proposal_bars_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface proposal_bars_stream_cursor_value_input {bar_size?: (Scalars['interval'] | null),bar_start_time?: (Scalars['timestamptz'] | null),fail_base_amount?: (Scalars['bigint'] | null),fail_market_acct?: (Scalars['String'] | null),fail_price?: (Scalars['numeric'] | null),fail_quote_amount?: (Scalars['bigint'] | null),pass_base_amount?: (Scalars['bigint'] | null),pass_market_acct?: (Scalars['String'] | null),pass_price?: (Scalars['numeric'] | null),pass_quote_amount?: (Scalars['bigint'] | null),proposal_acct?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface proposal_bars_sum_fieldsGenqlSelection{
    fail_base_amount?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface proposal_bars_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (proposal_bars_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (proposal_bars_set_input | null),
/** filter the rows which have to be updated */
where: proposal_bars_bool_exp}


/** aggregate var_pop on columns */
export interface proposal_bars_var_pop_fieldsGenqlSelection{
    fail_base_amount?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface proposal_bars_var_samp_fieldsGenqlSelection{
    fail_base_amount?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface proposal_bars_variance_fieldsGenqlSelection{
    fail_base_amount?: boolean | number
    fail_price?: boolean | number
    fail_quote_amount?: boolean | number
    pass_base_amount?: boolean | number
    pass_price?: boolean | number
    pass_quote_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "proposal_details" */
export interface proposal_detailsGenqlSelection{
    base_cond_vault_acct?: boolean | number
    categories?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    content?: boolean | number
    description?: boolean | number
    fail_market_acct?: boolean | number
    pass_market_acct?: boolean | number
    /** An object relationship */
    proposal?: proposalsGenqlSelection
    proposal_acct?: boolean | number
    proposal_id?: boolean | number
    proposer_acct?: boolean | number
    quote_cond_vault_acct?: boolean | number
    slug?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "proposal_details" */
export interface proposal_details_aggregateGenqlSelection{
    aggregate?: proposal_details_aggregate_fieldsGenqlSelection
    nodes?: proposal_detailsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface proposal_details_aggregate_bool_exp {count?: (proposal_details_aggregate_bool_exp_count | null)}

export interface proposal_details_aggregate_bool_exp_count {arguments?: (proposal_details_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (proposal_details_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "proposal_details" */
export interface proposal_details_aggregate_fieldsGenqlSelection{
    avg?: proposal_details_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (proposal_details_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: proposal_details_max_fieldsGenqlSelection
    min?: proposal_details_min_fieldsGenqlSelection
    stddev?: proposal_details_stddev_fieldsGenqlSelection
    stddev_pop?: proposal_details_stddev_pop_fieldsGenqlSelection
    stddev_samp?: proposal_details_stddev_samp_fieldsGenqlSelection
    sum?: proposal_details_sum_fieldsGenqlSelection
    var_pop?: proposal_details_var_pop_fieldsGenqlSelection
    var_samp?: proposal_details_var_samp_fieldsGenqlSelection
    variance?: proposal_details_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "proposal_details" */
export interface proposal_details_aggregate_order_by {avg?: (proposal_details_avg_order_by | null),count?: (order_by | null),max?: (proposal_details_max_order_by | null),min?: (proposal_details_min_order_by | null),stddev?: (proposal_details_stddev_order_by | null),stddev_pop?: (proposal_details_stddev_pop_order_by | null),stddev_samp?: (proposal_details_stddev_samp_order_by | null),sum?: (proposal_details_sum_order_by | null),var_pop?: (proposal_details_var_pop_order_by | null),var_samp?: (proposal_details_var_samp_order_by | null),variance?: (proposal_details_variance_order_by | null)}


/** append existing jsonb value of filtered columns with new jsonb value */
export interface proposal_details_append_input {categories?: (Scalars['jsonb'] | null)}


/** input type for inserting array relation for remote table "proposal_details" */
export interface proposal_details_arr_rel_insert_input {data: proposal_details_insert_input[],
/** upsert condition */
on_conflict?: (proposal_details_on_conflict | null)}


/** aggregate avg on columns */
export interface proposal_details_avg_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "proposal_details" */
export interface proposal_details_avg_order_by {proposal_id?: (order_by | null)}


/** Boolean expression to filter rows from the table "proposal_details". All fields are combined with a logical 'AND'. */
export interface proposal_details_bool_exp {_and?: (proposal_details_bool_exp[] | null),_not?: (proposal_details_bool_exp | null),_or?: (proposal_details_bool_exp[] | null),base_cond_vault_acct?: (String_comparison_exp | null),categories?: (jsonb_comparison_exp | null),content?: (String_comparison_exp | null),description?: (String_comparison_exp | null),fail_market_acct?: (String_comparison_exp | null),pass_market_acct?: (String_comparison_exp | null),proposal?: (proposals_bool_exp | null),proposal_acct?: (String_comparison_exp | null),proposal_id?: (bigint_comparison_exp | null),proposer_acct?: (String_comparison_exp | null),quote_cond_vault_acct?: (String_comparison_exp | null),slug?: (String_comparison_exp | null),title?: (String_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface proposal_details_delete_at_path_input {categories?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface proposal_details_delete_elem_input {categories?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface proposal_details_delete_key_input {categories?: (Scalars['String'] | null)}


/** input type for incrementing numeric columns in table "proposal_details" */
export interface proposal_details_inc_input {proposal_id?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "proposal_details" */
export interface proposal_details_insert_input {base_cond_vault_acct?: (Scalars['String'] | null),categories?: (Scalars['jsonb'] | null),content?: (Scalars['String'] | null),description?: (Scalars['String'] | null),fail_market_acct?: (Scalars['String'] | null),pass_market_acct?: (Scalars['String'] | null),proposal?: (proposals_obj_rel_insert_input | null),proposal_acct?: (Scalars['String'] | null),proposal_id?: (Scalars['bigint'] | null),proposer_acct?: (Scalars['String'] | null),quote_cond_vault_acct?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),title?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface proposal_details_max_fieldsGenqlSelection{
    base_cond_vault_acct?: boolean | number
    content?: boolean | number
    description?: boolean | number
    fail_market_acct?: boolean | number
    pass_market_acct?: boolean | number
    proposal_acct?: boolean | number
    proposal_id?: boolean | number
    proposer_acct?: boolean | number
    quote_cond_vault_acct?: boolean | number
    slug?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "proposal_details" */
export interface proposal_details_max_order_by {base_cond_vault_acct?: (order_by | null),content?: (order_by | null),description?: (order_by | null),fail_market_acct?: (order_by | null),pass_market_acct?: (order_by | null),proposal_acct?: (order_by | null),proposal_id?: (order_by | null),proposer_acct?: (order_by | null),quote_cond_vault_acct?: (order_by | null),slug?: (order_by | null),title?: (order_by | null)}


/** aggregate min on columns */
export interface proposal_details_min_fieldsGenqlSelection{
    base_cond_vault_acct?: boolean | number
    content?: boolean | number
    description?: boolean | number
    fail_market_acct?: boolean | number
    pass_market_acct?: boolean | number
    proposal_acct?: boolean | number
    proposal_id?: boolean | number
    proposer_acct?: boolean | number
    quote_cond_vault_acct?: boolean | number
    slug?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "proposal_details" */
export interface proposal_details_min_order_by {base_cond_vault_acct?: (order_by | null),content?: (order_by | null),description?: (order_by | null),fail_market_acct?: (order_by | null),pass_market_acct?: (order_by | null),proposal_acct?: (order_by | null),proposal_id?: (order_by | null),proposer_acct?: (order_by | null),quote_cond_vault_acct?: (order_by | null),slug?: (order_by | null),title?: (order_by | null)}


/** response of any mutation on the table "proposal_details" */
export interface proposal_details_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: proposal_detailsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "proposal_details" */
export interface proposal_details_on_conflict {constraint: proposal_details_constraint,update_columns?: proposal_details_update_column[],where?: (proposal_details_bool_exp | null)}


/** Ordering options when selecting data from "proposal_details". */
export interface proposal_details_order_by {base_cond_vault_acct?: (order_by | null),categories?: (order_by | null),content?: (order_by | null),description?: (order_by | null),fail_market_acct?: (order_by | null),pass_market_acct?: (order_by | null),proposal?: (proposals_order_by | null),proposal_acct?: (order_by | null),proposal_id?: (order_by | null),proposer_acct?: (order_by | null),quote_cond_vault_acct?: (order_by | null),slug?: (order_by | null),title?: (order_by | null)}


/** primary key columns input for table: proposal_details */
export interface proposal_details_pk_columns_input {proposal_id: Scalars['bigint']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface proposal_details_prepend_input {categories?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "proposal_details" */
export interface proposal_details_set_input {base_cond_vault_acct?: (Scalars['String'] | null),categories?: (Scalars['jsonb'] | null),content?: (Scalars['String'] | null),description?: (Scalars['String'] | null),fail_market_acct?: (Scalars['String'] | null),pass_market_acct?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),proposal_id?: (Scalars['bigint'] | null),proposer_acct?: (Scalars['String'] | null),quote_cond_vault_acct?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),title?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface proposal_details_stddev_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "proposal_details" */
export interface proposal_details_stddev_order_by {proposal_id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface proposal_details_stddev_pop_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "proposal_details" */
export interface proposal_details_stddev_pop_order_by {proposal_id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface proposal_details_stddev_samp_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "proposal_details" */
export interface proposal_details_stddev_samp_order_by {proposal_id?: (order_by | null)}


/** Streaming cursor of the table "proposal_details" */
export interface proposal_details_stream_cursor_input {
/** Stream column input with initial value */
initial_value: proposal_details_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface proposal_details_stream_cursor_value_input {base_cond_vault_acct?: (Scalars['String'] | null),categories?: (Scalars['jsonb'] | null),content?: (Scalars['String'] | null),description?: (Scalars['String'] | null),fail_market_acct?: (Scalars['String'] | null),pass_market_acct?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),proposal_id?: (Scalars['bigint'] | null),proposer_acct?: (Scalars['String'] | null),quote_cond_vault_acct?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),title?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface proposal_details_sum_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "proposal_details" */
export interface proposal_details_sum_order_by {proposal_id?: (order_by | null)}

export interface proposal_details_updates {
/** append existing jsonb value of filtered columns with new jsonb value */
_append?: (proposal_details_append_input | null),
/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
_delete_at_path?: (proposal_details_delete_at_path_input | null),
/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
_delete_elem?: (proposal_details_delete_elem_input | null),
/** delete key/value pair or string element. key/value pairs are matched based on their key value */
_delete_key?: (proposal_details_delete_key_input | null),
/** increments the numeric columns with given value of the filtered values */
_inc?: (proposal_details_inc_input | null),
/** prepend existing jsonb value of filtered columns with new jsonb value */
_prepend?: (proposal_details_prepend_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (proposal_details_set_input | null),
/** filter the rows which have to be updated */
where: proposal_details_bool_exp}


/** aggregate var_pop on columns */
export interface proposal_details_var_pop_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "proposal_details" */
export interface proposal_details_var_pop_order_by {proposal_id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface proposal_details_var_samp_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "proposal_details" */
export interface proposal_details_var_samp_order_by {proposal_id?: (order_by | null)}


/** aggregate variance on columns */
export interface proposal_details_variance_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "proposal_details" */
export interface proposal_details_variance_order_by {proposal_id?: (order_by | null)}


/** columns and relationships of "proposal_total_trade_volume" */
export interface proposal_total_trade_volumeGenqlSelection{
    fail_market_acct?: boolean | number
    fail_volume?: boolean | number
    pass_market_acct?: boolean | number
    pass_volume?: boolean | number
    /** An object relationship */
    proposalTradeVolume?: proposalsGenqlSelection
    /** An object relationship */
    proposalTradeVolumeFailMarket?: marketsGenqlSelection
    /** An object relationship */
    proposalTradeVolumePassMarket?: marketsGenqlSelection
    proposal_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "proposal_total_trade_volume" */
export interface proposal_total_trade_volume_aggregateGenqlSelection{
    aggregate?: proposal_total_trade_volume_aggregate_fieldsGenqlSelection
    nodes?: proposal_total_trade_volumeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "proposal_total_trade_volume" */
export interface proposal_total_trade_volume_aggregate_fieldsGenqlSelection{
    avg?: proposal_total_trade_volume_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (proposal_total_trade_volume_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: proposal_total_trade_volume_max_fieldsGenqlSelection
    min?: proposal_total_trade_volume_min_fieldsGenqlSelection
    stddev?: proposal_total_trade_volume_stddev_fieldsGenqlSelection
    stddev_pop?: proposal_total_trade_volume_stddev_pop_fieldsGenqlSelection
    stddev_samp?: proposal_total_trade_volume_stddev_samp_fieldsGenqlSelection
    sum?: proposal_total_trade_volume_sum_fieldsGenqlSelection
    var_pop?: proposal_total_trade_volume_var_pop_fieldsGenqlSelection
    var_samp?: proposal_total_trade_volume_var_samp_fieldsGenqlSelection
    variance?: proposal_total_trade_volume_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface proposal_total_trade_volume_avg_fieldsGenqlSelection{
    fail_volume?: boolean | number
    pass_volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "proposal_total_trade_volume". All fields are combined with a logical 'AND'. */
export interface proposal_total_trade_volume_bool_exp {_and?: (proposal_total_trade_volume_bool_exp[] | null),_not?: (proposal_total_trade_volume_bool_exp | null),_or?: (proposal_total_trade_volume_bool_exp[] | null),fail_market_acct?: (String_comparison_exp | null),fail_volume?: (numeric_comparison_exp | null),pass_market_acct?: (String_comparison_exp | null),pass_volume?: (numeric_comparison_exp | null),proposalTradeVolume?: (proposals_bool_exp | null),proposalTradeVolumeFailMarket?: (markets_bool_exp | null),proposalTradeVolumePassMarket?: (markets_bool_exp | null),proposal_acct?: (String_comparison_exp | null)}


/** aggregate max on columns */
export interface proposal_total_trade_volume_max_fieldsGenqlSelection{
    fail_market_acct?: boolean | number
    fail_volume?: boolean | number
    pass_market_acct?: boolean | number
    pass_volume?: boolean | number
    proposal_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface proposal_total_trade_volume_min_fieldsGenqlSelection{
    fail_market_acct?: boolean | number
    fail_volume?: boolean | number
    pass_market_acct?: boolean | number
    pass_volume?: boolean | number
    proposal_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "proposal_total_trade_volume". */
export interface proposal_total_trade_volume_order_by {fail_market_acct?: (order_by | null),fail_volume?: (order_by | null),pass_market_acct?: (order_by | null),pass_volume?: (order_by | null),proposalTradeVolume?: (proposals_order_by | null),proposalTradeVolumeFailMarket?: (markets_order_by | null),proposalTradeVolumePassMarket?: (markets_order_by | null),proposal_acct?: (order_by | null)}


/** aggregate stddev on columns */
export interface proposal_total_trade_volume_stddev_fieldsGenqlSelection{
    fail_volume?: boolean | number
    pass_volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface proposal_total_trade_volume_stddev_pop_fieldsGenqlSelection{
    fail_volume?: boolean | number
    pass_volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface proposal_total_trade_volume_stddev_samp_fieldsGenqlSelection{
    fail_volume?: boolean | number
    pass_volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "proposal_total_trade_volume" */
export interface proposal_total_trade_volume_stream_cursor_input {
/** Stream column input with initial value */
initial_value: proposal_total_trade_volume_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface proposal_total_trade_volume_stream_cursor_value_input {fail_market_acct?: (Scalars['String'] | null),fail_volume?: (Scalars['numeric'] | null),pass_market_acct?: (Scalars['String'] | null),pass_volume?: (Scalars['numeric'] | null),proposal_acct?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface proposal_total_trade_volume_sum_fieldsGenqlSelection{
    fail_volume?: boolean | number
    pass_volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface proposal_total_trade_volume_var_pop_fieldsGenqlSelection{
    fail_volume?: boolean | number
    pass_volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface proposal_total_trade_volume_var_samp_fieldsGenqlSelection{
    fail_volume?: boolean | number
    pass_volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface proposal_total_trade_volume_variance_fieldsGenqlSelection{
    fail_volume?: boolean | number
    pass_volume?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "proposals" */
export interface proposalsGenqlSelection{
    autocrat_version?: boolean | number
    base_vault?: boolean | number
    /** An array relationship */
    comments?: (commentsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (comments_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (comments_order_by[] | null), 
    /** filter the rows returned */
    where?: (comments_bool_exp | null)} })
    /** An aggregate relationship */
    comments_aggregate?: (comments_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (comments_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (comments_order_by[] | null), 
    /** filter the rows returned */
    where?: (comments_bool_exp | null)} })
    completed_at?: boolean | number
    /** An object relationship */
    conditionalVaultByQuoteVault?: conditional_vaultsGenqlSelection
    /** An object relationship */
    conditional_vault?: conditional_vaultsGenqlSelection
    created_at?: boolean | number
    /** An object relationship */
    dao?: daosGenqlSelection
    dao_acct?: boolean | number
    description_url?: boolean | number
    end_slot?: boolean | number
    ended_at?: boolean | number
    fail_market_acct?: boolean | number
    initial_slot?: boolean | number
    /** An array relationship */
    markets?: (marketsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An aggregate relationship */
    markets_aggregate?: (markets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    pass_market_acct?: boolean | number
    pricing_model_fail_acct?: boolean | number
    pricing_model_pass_acct?: boolean | number
    proposal_acct?: boolean | number
    /** An array relationship */
    proposal_details?: (proposal_detailsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_details_bool_exp | null)} })
    /** An aggregate relationship */
    proposal_details_aggregate?: (proposal_details_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_details_bool_exp | null)} })
    proposal_num?: boolean | number
    proposer_acct?: boolean | number
    quote_vault?: boolean | number
    /** An array relationship */
    reactions?: (reactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (reactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (reactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (reactions_bool_exp | null)} })
    /** An aggregate relationship */
    reactions_aggregate?: (reactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (reactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (reactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (reactions_bool_exp | null)} })
    status?: boolean | number
    /** An array relationship */
    twaps?: (twapsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twaps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twaps_order_by[] | null), 
    /** filter the rows returned */
    where?: (twaps_bool_exp | null)} })
    /** An aggregate relationship */
    twaps_aggregate?: (twaps_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twaps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twaps_order_by[] | null), 
    /** filter the rows returned */
    where?: (twaps_bool_exp | null)} })
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "proposals" */
export interface proposals_aggregateGenqlSelection{
    aggregate?: proposals_aggregate_fieldsGenqlSelection
    nodes?: proposalsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface proposals_aggregate_bool_exp {avg?: (proposals_aggregate_bool_exp_avg | null),corr?: (proposals_aggregate_bool_exp_corr | null),count?: (proposals_aggregate_bool_exp_count | null),covar_samp?: (proposals_aggregate_bool_exp_covar_samp | null),max?: (proposals_aggregate_bool_exp_max | null),min?: (proposals_aggregate_bool_exp_min | null),stddev_samp?: (proposals_aggregate_bool_exp_stddev_samp | null),sum?: (proposals_aggregate_bool_exp_sum | null),var_samp?: (proposals_aggregate_bool_exp_var_samp | null)}

export interface proposals_aggregate_bool_exp_avg {arguments: proposals_select_column_proposals_aggregate_bool_exp_avg_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (proposals_bool_exp | null),predicate: float8_comparison_exp}

export interface proposals_aggregate_bool_exp_corr {arguments: proposals_aggregate_bool_exp_corr_arguments,distinct?: (Scalars['Boolean'] | null),filter?: (proposals_bool_exp | null),predicate: float8_comparison_exp}

export interface proposals_aggregate_bool_exp_corr_arguments {X: proposals_select_column_proposals_aggregate_bool_exp_corr_arguments_columns,Y: proposals_select_column_proposals_aggregate_bool_exp_corr_arguments_columns}

export interface proposals_aggregate_bool_exp_count {arguments?: (proposals_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (proposals_bool_exp | null),predicate: Int_comparison_exp}

export interface proposals_aggregate_bool_exp_covar_samp {arguments: proposals_aggregate_bool_exp_covar_samp_arguments,distinct?: (Scalars['Boolean'] | null),filter?: (proposals_bool_exp | null),predicate: float8_comparison_exp}

export interface proposals_aggregate_bool_exp_covar_samp_arguments {X: proposals_select_column_proposals_aggregate_bool_exp_covar_samp_arguments_columns,Y: proposals_select_column_proposals_aggregate_bool_exp_covar_samp_arguments_columns}

export interface proposals_aggregate_bool_exp_max {arguments: proposals_select_column_proposals_aggregate_bool_exp_max_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (proposals_bool_exp | null),predicate: float8_comparison_exp}

export interface proposals_aggregate_bool_exp_min {arguments: proposals_select_column_proposals_aggregate_bool_exp_min_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (proposals_bool_exp | null),predicate: float8_comparison_exp}

export interface proposals_aggregate_bool_exp_stddev_samp {arguments: proposals_select_column_proposals_aggregate_bool_exp_stddev_samp_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (proposals_bool_exp | null),predicate: float8_comparison_exp}

export interface proposals_aggregate_bool_exp_sum {arguments: proposals_select_column_proposals_aggregate_bool_exp_sum_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (proposals_bool_exp | null),predicate: float8_comparison_exp}

export interface proposals_aggregate_bool_exp_var_samp {arguments: proposals_select_column_proposals_aggregate_bool_exp_var_samp_arguments_columns,distinct?: (Scalars['Boolean'] | null),filter?: (proposals_bool_exp | null),predicate: float8_comparison_exp}


/** aggregate fields of "proposals" */
export interface proposals_aggregate_fieldsGenqlSelection{
    avg?: proposals_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (proposals_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: proposals_max_fieldsGenqlSelection
    min?: proposals_min_fieldsGenqlSelection
    stddev?: proposals_stddev_fieldsGenqlSelection
    stddev_pop?: proposals_stddev_pop_fieldsGenqlSelection
    stddev_samp?: proposals_stddev_samp_fieldsGenqlSelection
    sum?: proposals_sum_fieldsGenqlSelection
    var_pop?: proposals_var_pop_fieldsGenqlSelection
    var_samp?: proposals_var_samp_fieldsGenqlSelection
    variance?: proposals_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "proposals" */
export interface proposals_aggregate_order_by {avg?: (proposals_avg_order_by | null),count?: (order_by | null),max?: (proposals_max_order_by | null),min?: (proposals_min_order_by | null),stddev?: (proposals_stddev_order_by | null),stddev_pop?: (proposals_stddev_pop_order_by | null),stddev_samp?: (proposals_stddev_samp_order_by | null),sum?: (proposals_sum_order_by | null),var_pop?: (proposals_var_pop_order_by | null),var_samp?: (proposals_var_samp_order_by | null),variance?: (proposals_variance_order_by | null)}


/** input type for inserting array relation for remote table "proposals" */
export interface proposals_arr_rel_insert_input {data: proposals_insert_input[],
/** upsert condition */
on_conflict?: (proposals_on_conflict | null)}


/** aggregate avg on columns */
export interface proposals_avg_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    end_slot?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "proposals" */
export interface proposals_avg_order_by {autocrat_version?: (order_by | null),end_slot?: (order_by | null),initial_slot?: (order_by | null),proposal_num?: (order_by | null)}


/** Boolean expression to filter rows from the table "proposals". All fields are combined with a logical 'AND'. */
export interface proposals_bool_exp {_and?: (proposals_bool_exp[] | null),_not?: (proposals_bool_exp | null),_or?: (proposals_bool_exp[] | null),autocrat_version?: (float8_comparison_exp | null),base_vault?: (String_comparison_exp | null),comments?: (comments_bool_exp | null),comments_aggregate?: (comments_aggregate_bool_exp | null),completed_at?: (timestamptz_comparison_exp | null),conditionalVaultByQuoteVault?: (conditional_vaults_bool_exp | null),conditional_vault?: (conditional_vaults_bool_exp | null),created_at?: (timestamptz_comparison_exp | null),dao?: (daos_bool_exp | null),dao_acct?: (String_comparison_exp | null),description_url?: (String_comparison_exp | null),end_slot?: (bigint_comparison_exp | null),ended_at?: (timestamptz_comparison_exp | null),fail_market_acct?: (String_comparison_exp | null),initial_slot?: (bigint_comparison_exp | null),markets?: (markets_bool_exp | null),markets_aggregate?: (markets_aggregate_bool_exp | null),pass_market_acct?: (String_comparison_exp | null),pricing_model_fail_acct?: (String_comparison_exp | null),pricing_model_pass_acct?: (String_comparison_exp | null),proposal_acct?: (String_comparison_exp | null),proposal_details?: (proposal_details_bool_exp | null),proposal_details_aggregate?: (proposal_details_aggregate_bool_exp | null),proposal_num?: (bigint_comparison_exp | null),proposer_acct?: (String_comparison_exp | null),quote_vault?: (String_comparison_exp | null),reactions?: (reactions_bool_exp | null),reactions_aggregate?: (reactions_aggregate_bool_exp | null),status?: (String_comparison_exp | null),twaps?: (twaps_bool_exp | null),twaps_aggregate?: (twaps_aggregate_bool_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "proposals" */
export interface proposals_inc_input {autocrat_version?: (Scalars['float8'] | null),end_slot?: (Scalars['bigint'] | null),initial_slot?: (Scalars['bigint'] | null),proposal_num?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "proposals" */
export interface proposals_insert_input {autocrat_version?: (Scalars['float8'] | null),base_vault?: (Scalars['String'] | null),comments?: (comments_arr_rel_insert_input | null),completed_at?: (Scalars['timestamptz'] | null),conditionalVaultByQuoteVault?: (conditional_vaults_obj_rel_insert_input | null),conditional_vault?: (conditional_vaults_obj_rel_insert_input | null),created_at?: (Scalars['timestamptz'] | null),dao?: (daos_obj_rel_insert_input | null),dao_acct?: (Scalars['String'] | null),description_url?: (Scalars['String'] | null),end_slot?: (Scalars['bigint'] | null),ended_at?: (Scalars['timestamptz'] | null),fail_market_acct?: (Scalars['String'] | null),initial_slot?: (Scalars['bigint'] | null),markets?: (markets_arr_rel_insert_input | null),pass_market_acct?: (Scalars['String'] | null),pricing_model_fail_acct?: (Scalars['String'] | null),pricing_model_pass_acct?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),proposal_details?: (proposal_details_arr_rel_insert_input | null),proposal_num?: (Scalars['bigint'] | null),proposer_acct?: (Scalars['String'] | null),quote_vault?: (Scalars['String'] | null),reactions?: (reactions_arr_rel_insert_input | null),status?: (Scalars['String'] | null),twaps?: (twaps_arr_rel_insert_input | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface proposals_max_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    base_vault?: boolean | number
    completed_at?: boolean | number
    created_at?: boolean | number
    dao_acct?: boolean | number
    description_url?: boolean | number
    end_slot?: boolean | number
    ended_at?: boolean | number
    fail_market_acct?: boolean | number
    initial_slot?: boolean | number
    pass_market_acct?: boolean | number
    pricing_model_fail_acct?: boolean | number
    pricing_model_pass_acct?: boolean | number
    proposal_acct?: boolean | number
    proposal_num?: boolean | number
    proposer_acct?: boolean | number
    quote_vault?: boolean | number
    status?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "proposals" */
export interface proposals_max_order_by {autocrat_version?: (order_by | null),base_vault?: (order_by | null),completed_at?: (order_by | null),created_at?: (order_by | null),dao_acct?: (order_by | null),description_url?: (order_by | null),end_slot?: (order_by | null),ended_at?: (order_by | null),fail_market_acct?: (order_by | null),initial_slot?: (order_by | null),pass_market_acct?: (order_by | null),pricing_model_fail_acct?: (order_by | null),pricing_model_pass_acct?: (order_by | null),proposal_acct?: (order_by | null),proposal_num?: (order_by | null),proposer_acct?: (order_by | null),quote_vault?: (order_by | null),status?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface proposals_min_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    base_vault?: boolean | number
    completed_at?: boolean | number
    created_at?: boolean | number
    dao_acct?: boolean | number
    description_url?: boolean | number
    end_slot?: boolean | number
    ended_at?: boolean | number
    fail_market_acct?: boolean | number
    initial_slot?: boolean | number
    pass_market_acct?: boolean | number
    pricing_model_fail_acct?: boolean | number
    pricing_model_pass_acct?: boolean | number
    proposal_acct?: boolean | number
    proposal_num?: boolean | number
    proposer_acct?: boolean | number
    quote_vault?: boolean | number
    status?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "proposals" */
export interface proposals_min_order_by {autocrat_version?: (order_by | null),base_vault?: (order_by | null),completed_at?: (order_by | null),created_at?: (order_by | null),dao_acct?: (order_by | null),description_url?: (order_by | null),end_slot?: (order_by | null),ended_at?: (order_by | null),fail_market_acct?: (order_by | null),initial_slot?: (order_by | null),pass_market_acct?: (order_by | null),pricing_model_fail_acct?: (order_by | null),pricing_model_pass_acct?: (order_by | null),proposal_acct?: (order_by | null),proposal_num?: (order_by | null),proposer_acct?: (order_by | null),quote_vault?: (order_by | null),status?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "proposals" */
export interface proposals_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: proposalsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "proposals" */
export interface proposals_obj_rel_insert_input {data: proposals_insert_input,
/** upsert condition */
on_conflict?: (proposals_on_conflict | null)}


/** on_conflict condition type for table "proposals" */
export interface proposals_on_conflict {constraint: proposals_constraint,update_columns?: proposals_update_column[],where?: (proposals_bool_exp | null)}


/** Ordering options when selecting data from "proposals". */
export interface proposals_order_by {autocrat_version?: (order_by | null),base_vault?: (order_by | null),comments_aggregate?: (comments_aggregate_order_by | null),completed_at?: (order_by | null),conditionalVaultByQuoteVault?: (conditional_vaults_order_by | null),conditional_vault?: (conditional_vaults_order_by | null),created_at?: (order_by | null),dao?: (daos_order_by | null),dao_acct?: (order_by | null),description_url?: (order_by | null),end_slot?: (order_by | null),ended_at?: (order_by | null),fail_market_acct?: (order_by | null),initial_slot?: (order_by | null),markets_aggregate?: (markets_aggregate_order_by | null),pass_market_acct?: (order_by | null),pricing_model_fail_acct?: (order_by | null),pricing_model_pass_acct?: (order_by | null),proposal_acct?: (order_by | null),proposal_details_aggregate?: (proposal_details_aggregate_order_by | null),proposal_num?: (order_by | null),proposer_acct?: (order_by | null),quote_vault?: (order_by | null),reactions_aggregate?: (reactions_aggregate_order_by | null),status?: (order_by | null),twaps_aggregate?: (twaps_aggregate_order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: proposals */
export interface proposals_pk_columns_input {proposal_acct: Scalars['String']}


/** input type for updating data in table "proposals" */
export interface proposals_set_input {autocrat_version?: (Scalars['float8'] | null),base_vault?: (Scalars['String'] | null),completed_at?: (Scalars['timestamptz'] | null),created_at?: (Scalars['timestamptz'] | null),dao_acct?: (Scalars['String'] | null),description_url?: (Scalars['String'] | null),end_slot?: (Scalars['bigint'] | null),ended_at?: (Scalars['timestamptz'] | null),fail_market_acct?: (Scalars['String'] | null),initial_slot?: (Scalars['bigint'] | null),pass_market_acct?: (Scalars['String'] | null),pricing_model_fail_acct?: (Scalars['String'] | null),pricing_model_pass_acct?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),proposal_num?: (Scalars['bigint'] | null),proposer_acct?: (Scalars['String'] | null),quote_vault?: (Scalars['String'] | null),status?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface proposals_stddev_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    end_slot?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "proposals" */
export interface proposals_stddev_order_by {autocrat_version?: (order_by | null),end_slot?: (order_by | null),initial_slot?: (order_by | null),proposal_num?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface proposals_stddev_pop_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    end_slot?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "proposals" */
export interface proposals_stddev_pop_order_by {autocrat_version?: (order_by | null),end_slot?: (order_by | null),initial_slot?: (order_by | null),proposal_num?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface proposals_stddev_samp_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    end_slot?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "proposals" */
export interface proposals_stddev_samp_order_by {autocrat_version?: (order_by | null),end_slot?: (order_by | null),initial_slot?: (order_by | null),proposal_num?: (order_by | null)}


/** Streaming cursor of the table "proposals" */
export interface proposals_stream_cursor_input {
/** Stream column input with initial value */
initial_value: proposals_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface proposals_stream_cursor_value_input {autocrat_version?: (Scalars['float8'] | null),base_vault?: (Scalars['String'] | null),completed_at?: (Scalars['timestamptz'] | null),created_at?: (Scalars['timestamptz'] | null),dao_acct?: (Scalars['String'] | null),description_url?: (Scalars['String'] | null),end_slot?: (Scalars['bigint'] | null),ended_at?: (Scalars['timestamptz'] | null),fail_market_acct?: (Scalars['String'] | null),initial_slot?: (Scalars['bigint'] | null),pass_market_acct?: (Scalars['String'] | null),pricing_model_fail_acct?: (Scalars['String'] | null),pricing_model_pass_acct?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),proposal_num?: (Scalars['bigint'] | null),proposer_acct?: (Scalars['String'] | null),quote_vault?: (Scalars['String'] | null),status?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface proposals_sum_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    end_slot?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "proposals" */
export interface proposals_sum_order_by {autocrat_version?: (order_by | null),end_slot?: (order_by | null),initial_slot?: (order_by | null),proposal_num?: (order_by | null)}

export interface proposals_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (proposals_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (proposals_set_input | null),
/** filter the rows which have to be updated */
where: proposals_bool_exp}


/** aggregate var_pop on columns */
export interface proposals_var_pop_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    end_slot?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "proposals" */
export interface proposals_var_pop_order_by {autocrat_version?: (order_by | null),end_slot?: (order_by | null),initial_slot?: (order_by | null),proposal_num?: (order_by | null)}


/** aggregate var_samp on columns */
export interface proposals_var_samp_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    end_slot?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "proposals" */
export interface proposals_var_samp_order_by {autocrat_version?: (order_by | null),end_slot?: (order_by | null),initial_slot?: (order_by | null),proposal_num?: (order_by | null)}


/** aggregate variance on columns */
export interface proposals_variance_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    end_slot?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "proposals" */
export interface proposals_variance_order_by {autocrat_version?: (order_by | null),end_slot?: (order_by | null),initial_slot?: (order_by | null),proposal_num?: (order_by | null)}

export interface query_rootGenqlSelection{
    /** An array relationship */
    candles?: (candlesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (candles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (candles_order_by[] | null), 
    /** filter the rows returned */
    where?: (candles_bool_exp | null)} })
    /** An aggregate relationship */
    candles_aggregate?: (candles_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (candles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (candles_order_by[] | null), 
    /** filter the rows returned */
    where?: (candles_bool_exp | null)} })
    /** fetch data from the table: "candles" using primary key columns */
    candles_by_pk?: (candlesGenqlSelection & { __args: {candle_duration: Scalars['Int'], market_acct: Scalars['String'], timestamp: Scalars['timestamptz']} })
    /** An array relationship */
    comments?: (commentsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (comments_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (comments_order_by[] | null), 
    /** filter the rows returned */
    where?: (comments_bool_exp | null)} })
    /** An aggregate relationship */
    comments_aggregate?: (comments_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (comments_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (comments_order_by[] | null), 
    /** filter the rows returned */
    where?: (comments_bool_exp | null)} })
    /** fetch data from the table: "comments" using primary key columns */
    comments_by_pk?: (commentsGenqlSelection & { __args: {comment_id: Scalars['bigint']} })
    /** An array relationship */
    conditional_vaults?: (conditional_vaultsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (conditional_vaults_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (conditional_vaults_order_by[] | null), 
    /** filter the rows returned */
    where?: (conditional_vaults_bool_exp | null)} })
    /** An aggregate relationship */
    conditional_vaults_aggregate?: (conditional_vaults_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (conditional_vaults_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (conditional_vaults_order_by[] | null), 
    /** filter the rows returned */
    where?: (conditional_vaults_bool_exp | null)} })
    /** fetch data from the table: "conditional_vaults" using primary key columns */
    conditional_vaults_by_pk?: (conditional_vaultsGenqlSelection & { __args: {cond_vault_acct: Scalars['String']} })
    /** fetch data from the table: "dao_details" */
    dao_details?: (dao_detailsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dao_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dao_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (dao_details_bool_exp | null)} })
    /** fetch aggregated fields from the table: "dao_details" */
    dao_details_aggregate?: (dao_details_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dao_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dao_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (dao_details_bool_exp | null)} })
    /** fetch data from the table: "dao_details" using primary key columns */
    dao_details_by_pk?: (dao_detailsGenqlSelection & { __args: {dao_id: Scalars['bigint']} })
    /** An array relationship */
    daos?: (daosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** An aggregate relationship */
    daos_aggregate?: (daos_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** fetch data from the table: "daos" using primary key columns */
    daos_by_pk?: (daosGenqlSelection & { __args: {dao_acct: Scalars['String']} })
    /** An array relationship */
    indexer_account_dependencies?: (indexer_account_dependenciesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexer_account_dependencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexer_account_dependencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexer_account_dependencies_bool_exp | null)} })
    /** An aggregate relationship */
    indexer_account_dependencies_aggregate?: (indexer_account_dependencies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexer_account_dependencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexer_account_dependencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexer_account_dependencies_bool_exp | null)} })
    /** fetch data from the table: "indexer_account_dependencies" using primary key columns */
    indexer_account_dependencies_by_pk?: (indexer_account_dependenciesGenqlSelection & { __args: {acct: Scalars['String'], name: Scalars['String']} })
    /** fetch data from the table: "indexers" */
    indexers?: (indexersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexers_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexers_bool_exp | null)} })
    /** fetch aggregated fields from the table: "indexers" */
    indexers_aggregate?: (indexers_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexers_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexers_bool_exp | null)} })
    /** fetch data from the table: "indexers" using primary key columns */
    indexers_by_pk?: (indexersGenqlSelection & { __args: {name: Scalars['String']} })
    /** An array relationship */
    makes?: (makesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (makes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (makes_order_by[] | null), 
    /** filter the rows returned */
    where?: (makes_bool_exp | null)} })
    /** An aggregate relationship */
    makes_aggregate?: (makes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (makes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (makes_order_by[] | null), 
    /** filter the rows returned */
    where?: (makes_bool_exp | null)} })
    /** fetch data from the table: "makes" using primary key columns */
    makes_by_pk?: (makesGenqlSelection & { __args: {order_tx_sig: Scalars['String']} })
    /** An array relationship */
    markets?: (marketsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An aggregate relationship */
    markets_aggregate?: (markets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** fetch data from the table: "markets" using primary key columns */
    markets_by_pk?: (marketsGenqlSelection & { __args: {market_acct: Scalars['String']} })
    /** An array relationship */
    orders?: (ordersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (orders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (orders_order_by[] | null), 
    /** filter the rows returned */
    where?: (orders_bool_exp | null)} })
    /** An aggregate relationship */
    orders_aggregate?: (orders_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (orders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (orders_order_by[] | null), 
    /** filter the rows returned */
    where?: (orders_bool_exp | null)} })
    /** fetch data from the table: "orders" using primary key columns */
    orders_by_pk?: (ordersGenqlSelection & { __args: {order_tx_sig: Scalars['String']} })
    /** An array relationship */
    prices?: (pricesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_bool_exp | null)} })
    /** An aggregate relationship */
    prices_aggregate?: (prices_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_bool_exp | null)} })
    /** fetch data from the table: "prices" using primary key columns */
    prices_by_pk?: (pricesGenqlSelection & { __args: {created_at: Scalars['timestamptz'], market_acct: Scalars['String']} })
    /** fetch data from the table: "prices_chart_data" */
    prices_chart_data?: (prices_chart_dataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_chart_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_chart_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_chart_data_bool_exp | null)} })
    /** fetch aggregated fields from the table: "prices_chart_data" */
    prices_chart_data_aggregate?: (prices_chart_data_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_chart_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_chart_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_chart_data_bool_exp | null)} })
    /** fetch data from the table: "program_system" */
    program_system?: (program_systemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** fetch aggregated fields from the table: "program_system" */
    program_system_aggregate?: (program_system_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** fetch data from the table: "program_system" using primary key columns */
    program_system_by_pk?: (program_systemGenqlSelection & { __args: {system_version: Scalars['float8']} })
    /** fetch data from the table: "programs" */
    programs?: (programsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (programs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (programs_order_by[] | null), 
    /** filter the rows returned */
    where?: (programs_bool_exp | null)} })
    /** fetch aggregated fields from the table: "programs" */
    programs_aggregate?: (programs_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (programs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (programs_order_by[] | null), 
    /** filter the rows returned */
    where?: (programs_bool_exp | null)} })
    /** fetch data from the table: "programs" using primary key columns */
    programs_by_pk?: (programsGenqlSelection & { __args: {program_acct: Scalars['String']} })
    /** fetch data from the table: "proposal_bars" */
    proposal_bars?: (proposal_barsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_bars_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_bars_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_bars_bool_exp | null)} })
    /** fetch aggregated fields from the table: "proposal_bars" */
    proposal_bars_aggregate?: (proposal_bars_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_bars_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_bars_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_bars_bool_exp | null)} })
    /** fetch data from the table: "proposal_bars" using primary key columns */
    proposal_bars_by_pk?: (proposal_barsGenqlSelection & { __args: {bar_size: Scalars['interval'], bar_start_time: Scalars['timestamptz'], proposal_acct: Scalars['String']} })
    /** An array relationship */
    proposal_details?: (proposal_detailsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_details_bool_exp | null)} })
    /** An aggregate relationship */
    proposal_details_aggregate?: (proposal_details_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_details_bool_exp | null)} })
    /** fetch data from the table: "proposal_details" using primary key columns */
    proposal_details_by_pk?: (proposal_detailsGenqlSelection & { __args: {proposal_id: Scalars['bigint']} })
    /** fetch data from the table: "proposal_total_trade_volume" */
    proposal_total_trade_volume?: (proposal_total_trade_volumeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_total_trade_volume_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_total_trade_volume_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_total_trade_volume_bool_exp | null)} })
    /** fetch aggregated fields from the table: "proposal_total_trade_volume" */
    proposal_total_trade_volume_aggregate?: (proposal_total_trade_volume_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_total_trade_volume_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_total_trade_volume_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_total_trade_volume_bool_exp | null)} })
    /** An array relationship */
    proposals?: (proposalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    /** An aggregate relationship */
    proposals_aggregate?: (proposals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    /** fetch data from the table: "proposals" using primary key columns */
    proposals_by_pk?: (proposalsGenqlSelection & { __args: {proposal_acct: Scalars['String']} })
    /** An array relationship */
    reactions?: (reactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (reactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (reactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (reactions_bool_exp | null)} })
    /** An aggregate relationship */
    reactions_aggregate?: (reactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (reactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (reactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (reactions_bool_exp | null)} })
    /** fetch data from the table: "reactions" using primary key columns */
    reactions_by_pk?: (reactionsGenqlSelection & { __args: {proposal_acct: Scalars['String'], reaction: Scalars['String'], reactor_acct: Scalars['String']} })
    /** An array relationship */
    sessions?: (sessionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sessions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sessions_order_by[] | null), 
    /** filter the rows returned */
    where?: (sessions_bool_exp | null)} })
    /** An aggregate relationship */
    sessions_aggregate?: (sessions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sessions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sessions_order_by[] | null), 
    /** filter the rows returned */
    where?: (sessions_bool_exp | null)} })
    /** fetch data from the table: "sessions" using primary key columns */
    sessions_by_pk?: (sessionsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** An array relationship */
    takes?: (takesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (takes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (takes_order_by[] | null), 
    /** filter the rows returned */
    where?: (takes_bool_exp | null)} })
    /** An aggregate relationship */
    takes_aggregate?: (takes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (takes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (takes_order_by[] | null), 
    /** filter the rows returned */
    where?: (takes_bool_exp | null)} })
    /** fetch data from the table: "takes" using primary key columns */
    takes_by_pk?: (takesGenqlSelection & { __args: {order_tx_sig: Scalars['String']} })
    /** An array relationship */
    token_acct_balances?: (token_acct_balancesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_acct_balances_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_acct_balances_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_acct_balances_bool_exp | null)} })
    /** An aggregate relationship */
    token_acct_balances_aggregate?: (token_acct_balances_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_acct_balances_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_acct_balances_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_acct_balances_bool_exp | null)} })
    /** fetch data from the table: "token_acct_balances" using primary key columns */
    token_acct_balances_by_pk?: (token_acct_balancesGenqlSelection & { __args: {amount: Scalars['bigint'], created_at: Scalars['timestamptz'], mint_acct: Scalars['String'], token_acct: Scalars['String']} })
    /** An array relationship */
    token_accts?: (token_acctsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_accts_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_accts_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_accts_bool_exp | null)} })
    /** An aggregate relationship */
    token_accts_aggregate?: (token_accts_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_accts_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_accts_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_accts_bool_exp | null)} })
    /** fetch data from the table: "token_accts" using primary key columns */
    token_accts_by_pk?: (token_acctsGenqlSelection & { __args: {token_acct: Scalars['String']} })
    /** fetch data from the table: "tokens" */
    tokens?: (tokensGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (tokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (tokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (tokens_bool_exp | null)} })
    /** fetch aggregated fields from the table: "tokens" */
    tokens_aggregate?: (tokens_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (tokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (tokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (tokens_bool_exp | null)} })
    /** fetch data from the table: "tokens" using primary key columns */
    tokens_by_pk?: (tokensGenqlSelection & { __args: {mint_acct: Scalars['String']} })
    /** An array relationship */
    transaction_watcher_transactions?: (transaction_watcher_transactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watcher_transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watcher_transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watcher_transactions_bool_exp | null)} })
    /** An aggregate relationship */
    transaction_watcher_transactions_aggregate?: (transaction_watcher_transactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watcher_transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watcher_transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watcher_transactions_bool_exp | null)} })
    /** fetch data from the table: "transaction_watcher_transactions" using primary key columns */
    transaction_watcher_transactions_by_pk?: (transaction_watcher_transactionsGenqlSelection & { __args: {tx_sig: Scalars['String'], watcher_acct: Scalars['String']} })
    /** An array relationship */
    transaction_watchers?: (transaction_watchersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watchers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watchers_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watchers_bool_exp | null)} })
    /** An aggregate relationship */
    transaction_watchers_aggregate?: (transaction_watchers_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watchers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watchers_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watchers_bool_exp | null)} })
    /** fetch data from the table: "transaction_watchers" using primary key columns */
    transaction_watchers_by_pk?: (transaction_watchersGenqlSelection & { __args: {acct: Scalars['String']} })
    /** fetch data from the table: "transactions" */
    transactions?: (transactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transactions_bool_exp | null)} })
    /** fetch aggregated fields from the table: "transactions" */
    transactions_aggregate?: (transactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transactions_bool_exp | null)} })
    /** fetch data from the table: "transactions" using primary key columns */
    transactions_by_pk?: (transactionsGenqlSelection & { __args: {tx_sig: Scalars['String']} })
    /** fetch data from the table: "twap_chart_data" */
    twap_chart_data?: (twap_chart_dataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twap_chart_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twap_chart_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (twap_chart_data_bool_exp | null)} })
    /** fetch aggregated fields from the table: "twap_chart_data" */
    twap_chart_data_aggregate?: (twap_chart_data_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twap_chart_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twap_chart_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (twap_chart_data_bool_exp | null)} })
    /** An array relationship */
    twaps?: (twapsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twaps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twaps_order_by[] | null), 
    /** filter the rows returned */
    where?: (twaps_bool_exp | null)} })
    /** An aggregate relationship */
    twaps_aggregate?: (twaps_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twaps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twaps_order_by[] | null), 
    /** filter the rows returned */
    where?: (twaps_bool_exp | null)} })
    /** fetch data from the table: "twaps" using primary key columns */
    twaps_by_pk?: (twapsGenqlSelection & { __args: {market_acct: Scalars['String'], updated_slot: Scalars['bigint']} })
    /** fetch data from the table: "users" */
    users?: (usersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    /** fetch aggregated fields from the table: "users" */
    users_aggregate?: (users_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: (usersGenqlSelection & { __args: {user_acct: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "reactions" */
export interface reactionsGenqlSelection{
    /** An object relationship */
    comment?: commentsGenqlSelection
    comment_id?: boolean | number
    /** An object relationship */
    proposal?: proposalsGenqlSelection
    proposal_acct?: boolean | number
    reaction?: boolean | number
    reactor_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "reactions" */
export interface reactions_aggregateGenqlSelection{
    aggregate?: reactions_aggregate_fieldsGenqlSelection
    nodes?: reactionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface reactions_aggregate_bool_exp {count?: (reactions_aggregate_bool_exp_count | null)}

export interface reactions_aggregate_bool_exp_count {arguments?: (reactions_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (reactions_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "reactions" */
export interface reactions_aggregate_fieldsGenqlSelection{
    avg?: reactions_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (reactions_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: reactions_max_fieldsGenqlSelection
    min?: reactions_min_fieldsGenqlSelection
    stddev?: reactions_stddev_fieldsGenqlSelection
    stddev_pop?: reactions_stddev_pop_fieldsGenqlSelection
    stddev_samp?: reactions_stddev_samp_fieldsGenqlSelection
    sum?: reactions_sum_fieldsGenqlSelection
    var_pop?: reactions_var_pop_fieldsGenqlSelection
    var_samp?: reactions_var_samp_fieldsGenqlSelection
    variance?: reactions_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "reactions" */
export interface reactions_aggregate_order_by {avg?: (reactions_avg_order_by | null),count?: (order_by | null),max?: (reactions_max_order_by | null),min?: (reactions_min_order_by | null),stddev?: (reactions_stddev_order_by | null),stddev_pop?: (reactions_stddev_pop_order_by | null),stddev_samp?: (reactions_stddev_samp_order_by | null),sum?: (reactions_sum_order_by | null),var_pop?: (reactions_var_pop_order_by | null),var_samp?: (reactions_var_samp_order_by | null),variance?: (reactions_variance_order_by | null)}


/** input type for inserting array relation for remote table "reactions" */
export interface reactions_arr_rel_insert_input {data: reactions_insert_input[],
/** upsert condition */
on_conflict?: (reactions_on_conflict | null)}


/** aggregate avg on columns */
export interface reactions_avg_fieldsGenqlSelection{
    comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "reactions" */
export interface reactions_avg_order_by {comment_id?: (order_by | null)}


/** Boolean expression to filter rows from the table "reactions". All fields are combined with a logical 'AND'. */
export interface reactions_bool_exp {_and?: (reactions_bool_exp[] | null),_not?: (reactions_bool_exp | null),_or?: (reactions_bool_exp[] | null),comment?: (comments_bool_exp | null),comment_id?: (bigint_comparison_exp | null),proposal?: (proposals_bool_exp | null),proposal_acct?: (String_comparison_exp | null),reaction?: (String_comparison_exp | null),reactor_acct?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "reactions" */
export interface reactions_inc_input {comment_id?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "reactions" */
export interface reactions_insert_input {comment?: (comments_obj_rel_insert_input | null),comment_id?: (Scalars['bigint'] | null),proposal?: (proposals_obj_rel_insert_input | null),proposal_acct?: (Scalars['String'] | null),reaction?: (Scalars['String'] | null),reactor_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface reactions_max_fieldsGenqlSelection{
    comment_id?: boolean | number
    proposal_acct?: boolean | number
    reaction?: boolean | number
    reactor_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "reactions" */
export interface reactions_max_order_by {comment_id?: (order_by | null),proposal_acct?: (order_by | null),reaction?: (order_by | null),reactor_acct?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface reactions_min_fieldsGenqlSelection{
    comment_id?: boolean | number
    proposal_acct?: boolean | number
    reaction?: boolean | number
    reactor_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "reactions" */
export interface reactions_min_order_by {comment_id?: (order_by | null),proposal_acct?: (order_by | null),reaction?: (order_by | null),reactor_acct?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "reactions" */
export interface reactions_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: reactionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "reactions" */
export interface reactions_on_conflict {constraint: reactions_constraint,update_columns?: reactions_update_column[],where?: (reactions_bool_exp | null)}


/** Ordering options when selecting data from "reactions". */
export interface reactions_order_by {comment?: (comments_order_by | null),comment_id?: (order_by | null),proposal?: (proposals_order_by | null),proposal_acct?: (order_by | null),reaction?: (order_by | null),reactor_acct?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: reactions */
export interface reactions_pk_columns_input {proposal_acct: Scalars['String'],reaction: Scalars['String'],reactor_acct: Scalars['String']}


/** input type for updating data in table "reactions" */
export interface reactions_set_input {comment_id?: (Scalars['bigint'] | null),proposal_acct?: (Scalars['String'] | null),reaction?: (Scalars['String'] | null),reactor_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface reactions_stddev_fieldsGenqlSelection{
    comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "reactions" */
export interface reactions_stddev_order_by {comment_id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface reactions_stddev_pop_fieldsGenqlSelection{
    comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "reactions" */
export interface reactions_stddev_pop_order_by {comment_id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface reactions_stddev_samp_fieldsGenqlSelection{
    comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "reactions" */
export interface reactions_stddev_samp_order_by {comment_id?: (order_by | null)}


/** Streaming cursor of the table "reactions" */
export interface reactions_stream_cursor_input {
/** Stream column input with initial value */
initial_value: reactions_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface reactions_stream_cursor_value_input {comment_id?: (Scalars['bigint'] | null),proposal_acct?: (Scalars['String'] | null),reaction?: (Scalars['String'] | null),reactor_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface reactions_sum_fieldsGenqlSelection{
    comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "reactions" */
export interface reactions_sum_order_by {comment_id?: (order_by | null)}

export interface reactions_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (reactions_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (reactions_set_input | null),
/** filter the rows which have to be updated */
where: reactions_bool_exp}


/** aggregate var_pop on columns */
export interface reactions_var_pop_fieldsGenqlSelection{
    comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "reactions" */
export interface reactions_var_pop_order_by {comment_id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface reactions_var_samp_fieldsGenqlSelection{
    comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "reactions" */
export interface reactions_var_samp_order_by {comment_id?: (order_by | null)}


/** aggregate variance on columns */
export interface reactions_variance_fieldsGenqlSelection{
    comment_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "reactions" */
export interface reactions_variance_order_by {comment_id?: (order_by | null)}


/** columns and relationships of "sessions" */
export interface sessionsGenqlSelection{
    created_at?: boolean | number
    expires_at?: boolean | number
    id?: boolean | number
    /** An object relationship */
    user?: usersGenqlSelection
    user_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "sessions" */
export interface sessions_aggregateGenqlSelection{
    aggregate?: sessions_aggregate_fieldsGenqlSelection
    nodes?: sessionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface sessions_aggregate_bool_exp {count?: (sessions_aggregate_bool_exp_count | null)}

export interface sessions_aggregate_bool_exp_count {arguments?: (sessions_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (sessions_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "sessions" */
export interface sessions_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (sessions_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: sessions_max_fieldsGenqlSelection
    min?: sessions_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "sessions" */
export interface sessions_aggregate_order_by {count?: (order_by | null),max?: (sessions_max_order_by | null),min?: (sessions_min_order_by | null)}


/** input type for inserting array relation for remote table "sessions" */
export interface sessions_arr_rel_insert_input {data: sessions_insert_input[],
/** upsert condition */
on_conflict?: (sessions_on_conflict | null)}


/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export interface sessions_bool_exp {_and?: (sessions_bool_exp[] | null),_not?: (sessions_bool_exp | null),_or?: (sessions_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),expires_at?: (timestamp_comparison_exp | null),id?: (uuid_comparison_exp | null),user?: (users_bool_exp | null),user_acct?: (String_comparison_exp | null)}


/** input type for inserting data into table "sessions" */
export interface sessions_insert_input {created_at?: (Scalars['timestamptz'] | null),expires_at?: (Scalars['timestamp'] | null),id?: (Scalars['uuid'] | null),user?: (users_obj_rel_insert_input | null),user_acct?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface sessions_max_fieldsGenqlSelection{
    created_at?: boolean | number
    expires_at?: boolean | number
    id?: boolean | number
    user_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "sessions" */
export interface sessions_max_order_by {created_at?: (order_by | null),expires_at?: (order_by | null),id?: (order_by | null),user_acct?: (order_by | null)}


/** aggregate min on columns */
export interface sessions_min_fieldsGenqlSelection{
    created_at?: boolean | number
    expires_at?: boolean | number
    id?: boolean | number
    user_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "sessions" */
export interface sessions_min_order_by {created_at?: (order_by | null),expires_at?: (order_by | null),id?: (order_by | null),user_acct?: (order_by | null)}


/** response of any mutation on the table "sessions" */
export interface sessions_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: sessionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "sessions" */
export interface sessions_on_conflict {constraint: sessions_constraint,update_columns?: sessions_update_column[],where?: (sessions_bool_exp | null)}


/** Ordering options when selecting data from "sessions". */
export interface sessions_order_by {created_at?: (order_by | null),expires_at?: (order_by | null),id?: (order_by | null),user?: (users_order_by | null),user_acct?: (order_by | null)}


/** primary key columns input for table: sessions */
export interface sessions_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "sessions" */
export interface sessions_set_input {created_at?: (Scalars['timestamptz'] | null),expires_at?: (Scalars['timestamp'] | null),id?: (Scalars['uuid'] | null),user_acct?: (Scalars['String'] | null)}


/** Streaming cursor of the table "sessions" */
export interface sessions_stream_cursor_input {
/** Stream column input with initial value */
initial_value: sessions_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface sessions_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),expires_at?: (Scalars['timestamp'] | null),id?: (Scalars['uuid'] | null),user_acct?: (Scalars['String'] | null)}

export interface sessions_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (sessions_set_input | null),
/** filter the rows which have to be updated */
where: sessions_bool_exp}


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export interface smallint_comparison_exp {_eq?: (Scalars['smallint'] | null),_gt?: (Scalars['smallint'] | null),_gte?: (Scalars['smallint'] | null),_in?: (Scalars['smallint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['smallint'] | null),_lte?: (Scalars['smallint'] | null),_neq?: (Scalars['smallint'] | null),_nin?: (Scalars['smallint'][] | null)}

export interface subscription_rootGenqlSelection{
    /** An array relationship */
    candles?: (candlesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (candles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (candles_order_by[] | null), 
    /** filter the rows returned */
    where?: (candles_bool_exp | null)} })
    /** An aggregate relationship */
    candles_aggregate?: (candles_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (candles_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (candles_order_by[] | null), 
    /** filter the rows returned */
    where?: (candles_bool_exp | null)} })
    /** fetch data from the table: "candles" using primary key columns */
    candles_by_pk?: (candlesGenqlSelection & { __args: {candle_duration: Scalars['Int'], market_acct: Scalars['String'], timestamp: Scalars['timestamptz']} })
    /** fetch data from the table in a streaming manner: "candles" */
    candles_stream?: (candlesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (candles_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (candles_bool_exp | null)} })
    /** An array relationship */
    comments?: (commentsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (comments_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (comments_order_by[] | null), 
    /** filter the rows returned */
    where?: (comments_bool_exp | null)} })
    /** An aggregate relationship */
    comments_aggregate?: (comments_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (comments_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (comments_order_by[] | null), 
    /** filter the rows returned */
    where?: (comments_bool_exp | null)} })
    /** fetch data from the table: "comments" using primary key columns */
    comments_by_pk?: (commentsGenqlSelection & { __args: {comment_id: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "comments" */
    comments_stream?: (commentsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (comments_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (comments_bool_exp | null)} })
    /** An array relationship */
    conditional_vaults?: (conditional_vaultsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (conditional_vaults_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (conditional_vaults_order_by[] | null), 
    /** filter the rows returned */
    where?: (conditional_vaults_bool_exp | null)} })
    /** An aggregate relationship */
    conditional_vaults_aggregate?: (conditional_vaults_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (conditional_vaults_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (conditional_vaults_order_by[] | null), 
    /** filter the rows returned */
    where?: (conditional_vaults_bool_exp | null)} })
    /** fetch data from the table: "conditional_vaults" using primary key columns */
    conditional_vaults_by_pk?: (conditional_vaultsGenqlSelection & { __args: {cond_vault_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "conditional_vaults" */
    conditional_vaults_stream?: (conditional_vaultsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (conditional_vaults_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (conditional_vaults_bool_exp | null)} })
    /** fetch data from the table: "dao_details" */
    dao_details?: (dao_detailsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dao_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dao_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (dao_details_bool_exp | null)} })
    /** fetch aggregated fields from the table: "dao_details" */
    dao_details_aggregate?: (dao_details_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (dao_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (dao_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (dao_details_bool_exp | null)} })
    /** fetch data from the table: "dao_details" using primary key columns */
    dao_details_by_pk?: (dao_detailsGenqlSelection & { __args: {dao_id: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "dao_details" */
    dao_details_stream?: (dao_detailsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (dao_details_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (dao_details_bool_exp | null)} })
    /** An array relationship */
    daos?: (daosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** An aggregate relationship */
    daos_aggregate?: (daos_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** fetch data from the table: "daos" using primary key columns */
    daos_by_pk?: (daosGenqlSelection & { __args: {dao_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "daos" */
    daos_stream?: (daosGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (daos_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** An array relationship */
    indexer_account_dependencies?: (indexer_account_dependenciesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexer_account_dependencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexer_account_dependencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexer_account_dependencies_bool_exp | null)} })
    /** An aggregate relationship */
    indexer_account_dependencies_aggregate?: (indexer_account_dependencies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexer_account_dependencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexer_account_dependencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexer_account_dependencies_bool_exp | null)} })
    /** fetch data from the table: "indexer_account_dependencies" using primary key columns */
    indexer_account_dependencies_by_pk?: (indexer_account_dependenciesGenqlSelection & { __args: {acct: Scalars['String'], name: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "indexer_account_dependencies" */
    indexer_account_dependencies_stream?: (indexer_account_dependenciesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (indexer_account_dependencies_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (indexer_account_dependencies_bool_exp | null)} })
    /** fetch data from the table: "indexers" */
    indexers?: (indexersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexers_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexers_bool_exp | null)} })
    /** fetch aggregated fields from the table: "indexers" */
    indexers_aggregate?: (indexers_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexers_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexers_bool_exp | null)} })
    /** fetch data from the table: "indexers" using primary key columns */
    indexers_by_pk?: (indexersGenqlSelection & { __args: {name: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "indexers" */
    indexers_stream?: (indexersGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (indexers_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (indexers_bool_exp | null)} })
    /** An array relationship */
    makes?: (makesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (makes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (makes_order_by[] | null), 
    /** filter the rows returned */
    where?: (makes_bool_exp | null)} })
    /** An aggregate relationship */
    makes_aggregate?: (makes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (makes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (makes_order_by[] | null), 
    /** filter the rows returned */
    where?: (makes_bool_exp | null)} })
    /** fetch data from the table: "makes" using primary key columns */
    makes_by_pk?: (makesGenqlSelection & { __args: {order_tx_sig: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "makes" */
    makes_stream?: (makesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (makes_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (makes_bool_exp | null)} })
    /** An array relationship */
    markets?: (marketsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An aggregate relationship */
    markets_aggregate?: (markets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** fetch data from the table: "markets" using primary key columns */
    markets_by_pk?: (marketsGenqlSelection & { __args: {market_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "markets" */
    markets_stream?: (marketsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (markets_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An array relationship */
    orders?: (ordersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (orders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (orders_order_by[] | null), 
    /** filter the rows returned */
    where?: (orders_bool_exp | null)} })
    /** An aggregate relationship */
    orders_aggregate?: (orders_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (orders_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (orders_order_by[] | null), 
    /** filter the rows returned */
    where?: (orders_bool_exp | null)} })
    /** fetch data from the table: "orders" using primary key columns */
    orders_by_pk?: (ordersGenqlSelection & { __args: {order_tx_sig: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "orders" */
    orders_stream?: (ordersGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (orders_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (orders_bool_exp | null)} })
    /** An array relationship */
    prices?: (pricesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_bool_exp | null)} })
    /** An aggregate relationship */
    prices_aggregate?: (prices_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_bool_exp | null)} })
    /** fetch data from the table: "prices" using primary key columns */
    prices_by_pk?: (pricesGenqlSelection & { __args: {created_at: Scalars['timestamptz'], market_acct: Scalars['String']} })
    /** fetch data from the table: "prices_chart_data" */
    prices_chart_data?: (prices_chart_dataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_chart_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_chart_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_chart_data_bool_exp | null)} })
    /** fetch aggregated fields from the table: "prices_chart_data" */
    prices_chart_data_aggregate?: (prices_chart_data_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (prices_chart_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (prices_chart_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (prices_chart_data_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "prices_chart_data" */
    prices_chart_data_stream?: (prices_chart_dataGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (prices_chart_data_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (prices_chart_data_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "prices" */
    prices_stream?: (pricesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (prices_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (prices_bool_exp | null)} })
    /** fetch data from the table: "program_system" */
    program_system?: (program_systemGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** fetch aggregated fields from the table: "program_system" */
    program_system_aggregate?: (program_system_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (program_system_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (program_system_order_by[] | null), 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** fetch data from the table: "program_system" using primary key columns */
    program_system_by_pk?: (program_systemGenqlSelection & { __args: {system_version: Scalars['float8']} })
    /** fetch data from the table in a streaming manner: "program_system" */
    program_system_stream?: (program_systemGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (program_system_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (program_system_bool_exp | null)} })
    /** fetch data from the table: "programs" */
    programs?: (programsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (programs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (programs_order_by[] | null), 
    /** filter the rows returned */
    where?: (programs_bool_exp | null)} })
    /** fetch aggregated fields from the table: "programs" */
    programs_aggregate?: (programs_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (programs_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (programs_order_by[] | null), 
    /** filter the rows returned */
    where?: (programs_bool_exp | null)} })
    /** fetch data from the table: "programs" using primary key columns */
    programs_by_pk?: (programsGenqlSelection & { __args: {program_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "programs" */
    programs_stream?: (programsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (programs_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (programs_bool_exp | null)} })
    /** fetch data from the table: "proposal_bars" */
    proposal_bars?: (proposal_barsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_bars_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_bars_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_bars_bool_exp | null)} })
    /** fetch aggregated fields from the table: "proposal_bars" */
    proposal_bars_aggregate?: (proposal_bars_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_bars_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_bars_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_bars_bool_exp | null)} })
    /** fetch data from the table: "proposal_bars" using primary key columns */
    proposal_bars_by_pk?: (proposal_barsGenqlSelection & { __args: {bar_size: Scalars['interval'], bar_start_time: Scalars['timestamptz'], proposal_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "proposal_bars" */
    proposal_bars_stream?: (proposal_barsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (proposal_bars_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (proposal_bars_bool_exp | null)} })
    /** An array relationship */
    proposal_details?: (proposal_detailsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_details_bool_exp | null)} })
    /** An aggregate relationship */
    proposal_details_aggregate?: (proposal_details_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_details_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_details_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_details_bool_exp | null)} })
    /** fetch data from the table: "proposal_details" using primary key columns */
    proposal_details_by_pk?: (proposal_detailsGenqlSelection & { __args: {proposal_id: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "proposal_details" */
    proposal_details_stream?: (proposal_detailsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (proposal_details_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (proposal_details_bool_exp | null)} })
    /** fetch data from the table: "proposal_total_trade_volume" */
    proposal_total_trade_volume?: (proposal_total_trade_volumeGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_total_trade_volume_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_total_trade_volume_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_total_trade_volume_bool_exp | null)} })
    /** fetch aggregated fields from the table: "proposal_total_trade_volume" */
    proposal_total_trade_volume_aggregate?: (proposal_total_trade_volume_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposal_total_trade_volume_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposal_total_trade_volume_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposal_total_trade_volume_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "proposal_total_trade_volume" */
    proposal_total_trade_volume_stream?: (proposal_total_trade_volumeGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (proposal_total_trade_volume_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (proposal_total_trade_volume_bool_exp | null)} })
    /** An array relationship */
    proposals?: (proposalsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    /** An aggregate relationship */
    proposals_aggregate?: (proposals_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (proposals_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (proposals_order_by[] | null), 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    /** fetch data from the table: "proposals" using primary key columns */
    proposals_by_pk?: (proposalsGenqlSelection & { __args: {proposal_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "proposals" */
    proposals_stream?: (proposalsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (proposals_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (proposals_bool_exp | null)} })
    /** An array relationship */
    reactions?: (reactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (reactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (reactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (reactions_bool_exp | null)} })
    /** An aggregate relationship */
    reactions_aggregate?: (reactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (reactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (reactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (reactions_bool_exp | null)} })
    /** fetch data from the table: "reactions" using primary key columns */
    reactions_by_pk?: (reactionsGenqlSelection & { __args: {proposal_acct: Scalars['String'], reaction: Scalars['String'], reactor_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "reactions" */
    reactions_stream?: (reactionsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (reactions_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (reactions_bool_exp | null)} })
    /** An array relationship */
    sessions?: (sessionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sessions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sessions_order_by[] | null), 
    /** filter the rows returned */
    where?: (sessions_bool_exp | null)} })
    /** An aggregate relationship */
    sessions_aggregate?: (sessions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sessions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sessions_order_by[] | null), 
    /** filter the rows returned */
    where?: (sessions_bool_exp | null)} })
    /** fetch data from the table: "sessions" using primary key columns */
    sessions_by_pk?: (sessionsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "sessions" */
    sessions_stream?: (sessionsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (sessions_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (sessions_bool_exp | null)} })
    /** An array relationship */
    takes?: (takesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (takes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (takes_order_by[] | null), 
    /** filter the rows returned */
    where?: (takes_bool_exp | null)} })
    /** An aggregate relationship */
    takes_aggregate?: (takes_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (takes_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (takes_order_by[] | null), 
    /** filter the rows returned */
    where?: (takes_bool_exp | null)} })
    /** fetch data from the table: "takes" using primary key columns */
    takes_by_pk?: (takesGenqlSelection & { __args: {order_tx_sig: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "takes" */
    takes_stream?: (takesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (takes_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (takes_bool_exp | null)} })
    /** An array relationship */
    token_acct_balances?: (token_acct_balancesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_acct_balances_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_acct_balances_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_acct_balances_bool_exp | null)} })
    /** An aggregate relationship */
    token_acct_balances_aggregate?: (token_acct_balances_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_acct_balances_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_acct_balances_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_acct_balances_bool_exp | null)} })
    /** fetch data from the table: "token_acct_balances" using primary key columns */
    token_acct_balances_by_pk?: (token_acct_balancesGenqlSelection & { __args: {amount: Scalars['bigint'], created_at: Scalars['timestamptz'], mint_acct: Scalars['String'], token_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "token_acct_balances" */
    token_acct_balances_stream?: (token_acct_balancesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (token_acct_balances_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (token_acct_balances_bool_exp | null)} })
    /** An array relationship */
    token_accts?: (token_acctsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_accts_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_accts_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_accts_bool_exp | null)} })
    /** An aggregate relationship */
    token_accts_aggregate?: (token_accts_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_accts_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_accts_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_accts_bool_exp | null)} })
    /** fetch data from the table: "token_accts" using primary key columns */
    token_accts_by_pk?: (token_acctsGenqlSelection & { __args: {token_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "token_accts" */
    token_accts_stream?: (token_acctsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (token_accts_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (token_accts_bool_exp | null)} })
    /** fetch data from the table: "tokens" */
    tokens?: (tokensGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (tokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (tokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (tokens_bool_exp | null)} })
    /** fetch aggregated fields from the table: "tokens" */
    tokens_aggregate?: (tokens_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (tokens_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (tokens_order_by[] | null), 
    /** filter the rows returned */
    where?: (tokens_bool_exp | null)} })
    /** fetch data from the table: "tokens" using primary key columns */
    tokens_by_pk?: (tokensGenqlSelection & { __args: {mint_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "tokens" */
    tokens_stream?: (tokensGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (tokens_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (tokens_bool_exp | null)} })
    /** An array relationship */
    transaction_watcher_transactions?: (transaction_watcher_transactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watcher_transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watcher_transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watcher_transactions_bool_exp | null)} })
    /** An aggregate relationship */
    transaction_watcher_transactions_aggregate?: (transaction_watcher_transactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watcher_transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watcher_transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watcher_transactions_bool_exp | null)} })
    /** fetch data from the table: "transaction_watcher_transactions" using primary key columns */
    transaction_watcher_transactions_by_pk?: (transaction_watcher_transactionsGenqlSelection & { __args: {tx_sig: Scalars['String'], watcher_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "transaction_watcher_transactions" */
    transaction_watcher_transactions_stream?: (transaction_watcher_transactionsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (transaction_watcher_transactions_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (transaction_watcher_transactions_bool_exp | null)} })
    /** An array relationship */
    transaction_watchers?: (transaction_watchersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watchers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watchers_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watchers_bool_exp | null)} })
    /** An aggregate relationship */
    transaction_watchers_aggregate?: (transaction_watchers_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watchers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watchers_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watchers_bool_exp | null)} })
    /** fetch data from the table: "transaction_watchers" using primary key columns */
    transaction_watchers_by_pk?: (transaction_watchersGenqlSelection & { __args: {acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "transaction_watchers" */
    transaction_watchers_stream?: (transaction_watchersGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (transaction_watchers_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (transaction_watchers_bool_exp | null)} })
    /** fetch data from the table: "transactions" */
    transactions?: (transactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transactions_bool_exp | null)} })
    /** fetch aggregated fields from the table: "transactions" */
    transactions_aggregate?: (transactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transactions_bool_exp | null)} })
    /** fetch data from the table: "transactions" using primary key columns */
    transactions_by_pk?: (transactionsGenqlSelection & { __args: {tx_sig: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "transactions" */
    transactions_stream?: (transactionsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (transactions_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (transactions_bool_exp | null)} })
    /** fetch data from the table: "twap_chart_data" */
    twap_chart_data?: (twap_chart_dataGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twap_chart_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twap_chart_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (twap_chart_data_bool_exp | null)} })
    /** fetch aggregated fields from the table: "twap_chart_data" */
    twap_chart_data_aggregate?: (twap_chart_data_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twap_chart_data_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twap_chart_data_order_by[] | null), 
    /** filter the rows returned */
    where?: (twap_chart_data_bool_exp | null)} })
    /** fetch data from the table in a streaming manner: "twap_chart_data" */
    twap_chart_data_stream?: (twap_chart_dataGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (twap_chart_data_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (twap_chart_data_bool_exp | null)} })
    /** An array relationship */
    twaps?: (twapsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twaps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twaps_order_by[] | null), 
    /** filter the rows returned */
    where?: (twaps_bool_exp | null)} })
    /** An aggregate relationship */
    twaps_aggregate?: (twaps_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (twaps_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (twaps_order_by[] | null), 
    /** filter the rows returned */
    where?: (twaps_bool_exp | null)} })
    /** fetch data from the table: "twaps" using primary key columns */
    twaps_by_pk?: (twapsGenqlSelection & { __args: {market_acct: Scalars['String'], updated_slot: Scalars['bigint']} })
    /** fetch data from the table in a streaming manner: "twaps" */
    twaps_stream?: (twapsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (twaps_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (twaps_bool_exp | null)} })
    /** fetch data from the table: "users" */
    users?: (usersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    /** fetch aggregated fields from the table: "users" */
    users_aggregate?: (users_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null), 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: (usersGenqlSelection & { __args: {user_acct: Scalars['String']} })
    /** fetch data from the table in a streaming manner: "users" */
    users_stream?: (usersGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (users_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (users_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "takes" */
export interface takesGenqlSelection{
    base_amount?: boolean | number
    /** An object relationship */
    make?: makesGenqlSelection
    maker_base_fee?: boolean | number
    maker_order_tx_sig?: boolean | number
    maker_quote_fee?: boolean | number
    /** An object relationship */
    market?: marketsGenqlSelection
    market_acct?: boolean | number
    /** An object relationship */
    order?: ordersGenqlSelection
    order_block?: boolean | number
    order_time?: boolean | number
    order_tx_sig?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "takes" */
export interface takes_aggregateGenqlSelection{
    aggregate?: takes_aggregate_fieldsGenqlSelection
    nodes?: takesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface takes_aggregate_bool_exp {count?: (takes_aggregate_bool_exp_count | null)}

export interface takes_aggregate_bool_exp_count {arguments?: (takes_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (takes_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "takes" */
export interface takes_aggregate_fieldsGenqlSelection{
    avg?: takes_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (takes_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: takes_max_fieldsGenqlSelection
    min?: takes_min_fieldsGenqlSelection
    stddev?: takes_stddev_fieldsGenqlSelection
    stddev_pop?: takes_stddev_pop_fieldsGenqlSelection
    stddev_samp?: takes_stddev_samp_fieldsGenqlSelection
    sum?: takes_sum_fieldsGenqlSelection
    var_pop?: takes_var_pop_fieldsGenqlSelection
    var_samp?: takes_var_samp_fieldsGenqlSelection
    variance?: takes_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "takes" */
export interface takes_aggregate_order_by {avg?: (takes_avg_order_by | null),count?: (order_by | null),max?: (takes_max_order_by | null),min?: (takes_min_order_by | null),stddev?: (takes_stddev_order_by | null),stddev_pop?: (takes_stddev_pop_order_by | null),stddev_samp?: (takes_stddev_samp_order_by | null),sum?: (takes_sum_order_by | null),var_pop?: (takes_var_pop_order_by | null),var_samp?: (takes_var_samp_order_by | null),variance?: (takes_variance_order_by | null)}


/** input type for inserting array relation for remote table "takes" */
export interface takes_arr_rel_insert_input {data: takes_insert_input[],
/** upsert condition */
on_conflict?: (takes_on_conflict | null)}


/** aggregate avg on columns */
export interface takes_avg_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_quote_fee?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "takes" */
export interface takes_avg_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_quote_fee?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** Boolean expression to filter rows from the table "takes". All fields are combined with a logical 'AND'. */
export interface takes_bool_exp {_and?: (takes_bool_exp[] | null),_not?: (takes_bool_exp | null),_or?: (takes_bool_exp[] | null),base_amount?: (bigint_comparison_exp | null),make?: (makes_bool_exp | null),maker_base_fee?: (bigint_comparison_exp | null),maker_order_tx_sig?: (String_comparison_exp | null),maker_quote_fee?: (bigint_comparison_exp | null),market?: (markets_bool_exp | null),market_acct?: (String_comparison_exp | null),order?: (orders_bool_exp | null),order_block?: (bigint_comparison_exp | null),order_time?: (timestamptz_comparison_exp | null),order_tx_sig?: (String_comparison_exp | null),quote_price?: (numeric_comparison_exp | null),taker_base_fee?: (bigint_comparison_exp | null),taker_quote_fee?: (bigint_comparison_exp | null)}


/** input type for incrementing numeric columns in table "takes" */
export interface takes_inc_input {base_amount?: (Scalars['bigint'] | null),maker_base_fee?: (Scalars['bigint'] | null),maker_quote_fee?: (Scalars['bigint'] | null),order_block?: (Scalars['bigint'] | null),quote_price?: (Scalars['numeric'] | null),taker_base_fee?: (Scalars['bigint'] | null),taker_quote_fee?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "takes" */
export interface takes_insert_input {base_amount?: (Scalars['bigint'] | null),make?: (makes_obj_rel_insert_input | null),maker_base_fee?: (Scalars['bigint'] | null),maker_order_tx_sig?: (Scalars['String'] | null),maker_quote_fee?: (Scalars['bigint'] | null),market?: (markets_obj_rel_insert_input | null),market_acct?: (Scalars['String'] | null),order?: (orders_obj_rel_insert_input | null),order_block?: (Scalars['bigint'] | null),order_time?: (Scalars['timestamptz'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['numeric'] | null),taker_base_fee?: (Scalars['bigint'] | null),taker_quote_fee?: (Scalars['bigint'] | null)}


/** aggregate max on columns */
export interface takes_max_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_order_tx_sig?: boolean | number
    maker_quote_fee?: boolean | number
    market_acct?: boolean | number
    order_block?: boolean | number
    order_time?: boolean | number
    order_tx_sig?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "takes" */
export interface takes_max_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_order_tx_sig?: (order_by | null),maker_quote_fee?: (order_by | null),market_acct?: (order_by | null),order_block?: (order_by | null),order_time?: (order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** aggregate min on columns */
export interface takes_min_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_order_tx_sig?: boolean | number
    maker_quote_fee?: boolean | number
    market_acct?: boolean | number
    order_block?: boolean | number
    order_time?: boolean | number
    order_tx_sig?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "takes" */
export interface takes_min_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_order_tx_sig?: (order_by | null),maker_quote_fee?: (order_by | null),market_acct?: (order_by | null),order_block?: (order_by | null),order_time?: (order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** response of any mutation on the table "takes" */
export interface takes_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: takesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "takes" */
export interface takes_obj_rel_insert_input {data: takes_insert_input,
/** upsert condition */
on_conflict?: (takes_on_conflict | null)}


/** on_conflict condition type for table "takes" */
export interface takes_on_conflict {constraint: takes_constraint,update_columns?: takes_update_column[],where?: (takes_bool_exp | null)}


/** Ordering options when selecting data from "takes". */
export interface takes_order_by {base_amount?: (order_by | null),make?: (makes_order_by | null),maker_base_fee?: (order_by | null),maker_order_tx_sig?: (order_by | null),maker_quote_fee?: (order_by | null),market?: (markets_order_by | null),market_acct?: (order_by | null),order?: (orders_order_by | null),order_block?: (order_by | null),order_time?: (order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** primary key columns input for table: takes */
export interface takes_pk_columns_input {order_tx_sig: Scalars['String']}


/** input type for updating data in table "takes" */
export interface takes_set_input {base_amount?: (Scalars['bigint'] | null),maker_base_fee?: (Scalars['bigint'] | null),maker_order_tx_sig?: (Scalars['String'] | null),maker_quote_fee?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),order_block?: (Scalars['bigint'] | null),order_time?: (Scalars['timestamptz'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['numeric'] | null),taker_base_fee?: (Scalars['bigint'] | null),taker_quote_fee?: (Scalars['bigint'] | null)}


/** aggregate stddev on columns */
export interface takes_stddev_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_quote_fee?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "takes" */
export interface takes_stddev_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_quote_fee?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface takes_stddev_pop_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_quote_fee?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "takes" */
export interface takes_stddev_pop_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_quote_fee?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface takes_stddev_samp_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_quote_fee?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "takes" */
export interface takes_stddev_samp_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_quote_fee?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** Streaming cursor of the table "takes" */
export interface takes_stream_cursor_input {
/** Stream column input with initial value */
initial_value: takes_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface takes_stream_cursor_value_input {base_amount?: (Scalars['bigint'] | null),maker_base_fee?: (Scalars['bigint'] | null),maker_order_tx_sig?: (Scalars['String'] | null),maker_quote_fee?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),order_block?: (Scalars['bigint'] | null),order_time?: (Scalars['timestamptz'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['numeric'] | null),taker_base_fee?: (Scalars['bigint'] | null),taker_quote_fee?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface takes_sum_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_quote_fee?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "takes" */
export interface takes_sum_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_quote_fee?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}

export interface takes_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (takes_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (takes_set_input | null),
/** filter the rows which have to be updated */
where: takes_bool_exp}


/** aggregate var_pop on columns */
export interface takes_var_pop_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_quote_fee?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "takes" */
export interface takes_var_pop_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_quote_fee?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** aggregate var_samp on columns */
export interface takes_var_samp_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_quote_fee?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "takes" */
export interface takes_var_samp_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_quote_fee?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** aggregate variance on columns */
export interface takes_variance_fieldsGenqlSelection{
    base_amount?: boolean | number
    maker_base_fee?: boolean | number
    maker_quote_fee?: boolean | number
    order_block?: boolean | number
    quote_price?: boolean | number
    taker_base_fee?: boolean | number
    taker_quote_fee?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "takes" */
export interface takes_variance_order_by {base_amount?: (order_by | null),maker_base_fee?: (order_by | null),maker_quote_fee?: (order_by | null),order_block?: (order_by | null),quote_price?: (order_by | null),taker_base_fee?: (order_by | null),taker_quote_fee?: (order_by | null)}


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {_eq?: (Scalars['timestamp'] | null),_gt?: (Scalars['timestamp'] | null),_gte?: (Scalars['timestamp'] | null),_in?: (Scalars['timestamp'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamp'] | null),_lte?: (Scalars['timestamp'] | null),_neq?: (Scalars['timestamp'] | null),_nin?: (Scalars['timestamp'][] | null)}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "token_acct_balances" */
export interface token_acct_balancesGenqlSelection{
    amount?: boolean | number
    created_at?: boolean | number
    delta?: boolean | number
    mint_acct?: boolean | number
    owner_acct?: boolean | number
    slot?: boolean | number
    /** An object relationship */
    token?: tokensGenqlSelection
    /** An object relationship */
    tokenAcctByTokenAcct?: token_acctsGenqlSelection
    token_acct?: boolean | number
    tx_sig?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "token_acct_balances" */
export interface token_acct_balances_aggregateGenqlSelection{
    aggregate?: token_acct_balances_aggregate_fieldsGenqlSelection
    nodes?: token_acct_balancesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface token_acct_balances_aggregate_bool_exp {count?: (token_acct_balances_aggregate_bool_exp_count | null)}

export interface token_acct_balances_aggregate_bool_exp_count {arguments?: (token_acct_balances_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (token_acct_balances_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "token_acct_balances" */
export interface token_acct_balances_aggregate_fieldsGenqlSelection{
    avg?: token_acct_balances_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (token_acct_balances_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: token_acct_balances_max_fieldsGenqlSelection
    min?: token_acct_balances_min_fieldsGenqlSelection
    stddev?: token_acct_balances_stddev_fieldsGenqlSelection
    stddev_pop?: token_acct_balances_stddev_pop_fieldsGenqlSelection
    stddev_samp?: token_acct_balances_stddev_samp_fieldsGenqlSelection
    sum?: token_acct_balances_sum_fieldsGenqlSelection
    var_pop?: token_acct_balances_var_pop_fieldsGenqlSelection
    var_samp?: token_acct_balances_var_samp_fieldsGenqlSelection
    variance?: token_acct_balances_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "token_acct_balances" */
export interface token_acct_balances_aggregate_order_by {avg?: (token_acct_balances_avg_order_by | null),count?: (order_by | null),max?: (token_acct_balances_max_order_by | null),min?: (token_acct_balances_min_order_by | null),stddev?: (token_acct_balances_stddev_order_by | null),stddev_pop?: (token_acct_balances_stddev_pop_order_by | null),stddev_samp?: (token_acct_balances_stddev_samp_order_by | null),sum?: (token_acct_balances_sum_order_by | null),var_pop?: (token_acct_balances_var_pop_order_by | null),var_samp?: (token_acct_balances_var_samp_order_by | null),variance?: (token_acct_balances_variance_order_by | null)}


/** input type for inserting array relation for remote table "token_acct_balances" */
export interface token_acct_balances_arr_rel_insert_input {data: token_acct_balances_insert_input[],
/** upsert condition */
on_conflict?: (token_acct_balances_on_conflict | null)}


/** aggregate avg on columns */
export interface token_acct_balances_avg_fieldsGenqlSelection{
    amount?: boolean | number
    delta?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "token_acct_balances" */
export interface token_acct_balances_avg_order_by {amount?: (order_by | null),delta?: (order_by | null),slot?: (order_by | null)}


/** Boolean expression to filter rows from the table "token_acct_balances". All fields are combined with a logical 'AND'. */
export interface token_acct_balances_bool_exp {_and?: (token_acct_balances_bool_exp[] | null),_not?: (token_acct_balances_bool_exp | null),_or?: (token_acct_balances_bool_exp[] | null),amount?: (bigint_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),delta?: (bigint_comparison_exp | null),mint_acct?: (String_comparison_exp | null),owner_acct?: (String_comparison_exp | null),slot?: (bigint_comparison_exp | null),token?: (tokens_bool_exp | null),tokenAcctByTokenAcct?: (token_accts_bool_exp | null),token_acct?: (String_comparison_exp | null),tx_sig?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "token_acct_balances" */
export interface token_acct_balances_inc_input {amount?: (Scalars['bigint'] | null),delta?: (Scalars['bigint'] | null),slot?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "token_acct_balances" */
export interface token_acct_balances_insert_input {amount?: (Scalars['bigint'] | null),created_at?: (Scalars['timestamptz'] | null),delta?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),owner_acct?: (Scalars['String'] | null),slot?: (Scalars['bigint'] | null),token?: (tokens_obj_rel_insert_input | null),tokenAcctByTokenAcct?: (token_accts_obj_rel_insert_input | null),token_acct?: (Scalars['String'] | null),tx_sig?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface token_acct_balances_max_fieldsGenqlSelection{
    amount?: boolean | number
    created_at?: boolean | number
    delta?: boolean | number
    mint_acct?: boolean | number
    owner_acct?: boolean | number
    slot?: boolean | number
    token_acct?: boolean | number
    tx_sig?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "token_acct_balances" */
export interface token_acct_balances_max_order_by {amount?: (order_by | null),created_at?: (order_by | null),delta?: (order_by | null),mint_acct?: (order_by | null),owner_acct?: (order_by | null),slot?: (order_by | null),token_acct?: (order_by | null),tx_sig?: (order_by | null)}


/** aggregate min on columns */
export interface token_acct_balances_min_fieldsGenqlSelection{
    amount?: boolean | number
    created_at?: boolean | number
    delta?: boolean | number
    mint_acct?: boolean | number
    owner_acct?: boolean | number
    slot?: boolean | number
    token_acct?: boolean | number
    tx_sig?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "token_acct_balances" */
export interface token_acct_balances_min_order_by {amount?: (order_by | null),created_at?: (order_by | null),delta?: (order_by | null),mint_acct?: (order_by | null),owner_acct?: (order_by | null),slot?: (order_by | null),token_acct?: (order_by | null),tx_sig?: (order_by | null)}


/** response of any mutation on the table "token_acct_balances" */
export interface token_acct_balances_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: token_acct_balancesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "token_acct_balances" */
export interface token_acct_balances_on_conflict {constraint: token_acct_balances_constraint,update_columns?: token_acct_balances_update_column[],where?: (token_acct_balances_bool_exp | null)}


/** Ordering options when selecting data from "token_acct_balances". */
export interface token_acct_balances_order_by {amount?: (order_by | null),created_at?: (order_by | null),delta?: (order_by | null),mint_acct?: (order_by | null),owner_acct?: (order_by | null),slot?: (order_by | null),token?: (tokens_order_by | null),tokenAcctByTokenAcct?: (token_accts_order_by | null),token_acct?: (order_by | null),tx_sig?: (order_by | null)}


/** primary key columns input for table: token_acct_balances */
export interface token_acct_balances_pk_columns_input {amount: Scalars['bigint'],created_at: Scalars['timestamptz'],mint_acct: Scalars['String'],token_acct: Scalars['String']}


/** input type for updating data in table "token_acct_balances" */
export interface token_acct_balances_set_input {amount?: (Scalars['bigint'] | null),created_at?: (Scalars['timestamptz'] | null),delta?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),owner_acct?: (Scalars['String'] | null),slot?: (Scalars['bigint'] | null),token_acct?: (Scalars['String'] | null),tx_sig?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface token_acct_balances_stddev_fieldsGenqlSelection{
    amount?: boolean | number
    delta?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "token_acct_balances" */
export interface token_acct_balances_stddev_order_by {amount?: (order_by | null),delta?: (order_by | null),slot?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface token_acct_balances_stddev_pop_fieldsGenqlSelection{
    amount?: boolean | number
    delta?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "token_acct_balances" */
export interface token_acct_balances_stddev_pop_order_by {amount?: (order_by | null),delta?: (order_by | null),slot?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface token_acct_balances_stddev_samp_fieldsGenqlSelection{
    amount?: boolean | number
    delta?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "token_acct_balances" */
export interface token_acct_balances_stddev_samp_order_by {amount?: (order_by | null),delta?: (order_by | null),slot?: (order_by | null)}


/** Streaming cursor of the table "token_acct_balances" */
export interface token_acct_balances_stream_cursor_input {
/** Stream column input with initial value */
initial_value: token_acct_balances_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface token_acct_balances_stream_cursor_value_input {amount?: (Scalars['bigint'] | null),created_at?: (Scalars['timestamptz'] | null),delta?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),owner_acct?: (Scalars['String'] | null),slot?: (Scalars['bigint'] | null),token_acct?: (Scalars['String'] | null),tx_sig?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface token_acct_balances_sum_fieldsGenqlSelection{
    amount?: boolean | number
    delta?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "token_acct_balances" */
export interface token_acct_balances_sum_order_by {amount?: (order_by | null),delta?: (order_by | null),slot?: (order_by | null)}

export interface token_acct_balances_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (token_acct_balances_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (token_acct_balances_set_input | null),
/** filter the rows which have to be updated */
where: token_acct_balances_bool_exp}


/** aggregate var_pop on columns */
export interface token_acct_balances_var_pop_fieldsGenqlSelection{
    amount?: boolean | number
    delta?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "token_acct_balances" */
export interface token_acct_balances_var_pop_order_by {amount?: (order_by | null),delta?: (order_by | null),slot?: (order_by | null)}


/** aggregate var_samp on columns */
export interface token_acct_balances_var_samp_fieldsGenqlSelection{
    amount?: boolean | number
    delta?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "token_acct_balances" */
export interface token_acct_balances_var_samp_order_by {amount?: (order_by | null),delta?: (order_by | null),slot?: (order_by | null)}


/** aggregate variance on columns */
export interface token_acct_balances_variance_fieldsGenqlSelection{
    amount?: boolean | number
    delta?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "token_acct_balances" */
export interface token_acct_balances_variance_order_by {amount?: (order_by | null),delta?: (order_by | null),slot?: (order_by | null)}


/** Boolean expression to compare columns of type "token_acct_status". All fields are combined with logical 'AND'. */
export interface token_acct_status_comparison_exp {_eq?: (Scalars['token_acct_status'] | null),_gt?: (Scalars['token_acct_status'] | null),_gte?: (Scalars['token_acct_status'] | null),_in?: (Scalars['token_acct_status'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['token_acct_status'] | null),_lte?: (Scalars['token_acct_status'] | null),_neq?: (Scalars['token_acct_status'] | null),_nin?: (Scalars['token_acct_status'][] | null)}


/** columns and relationships of "token_accts" */
export interface token_acctsGenqlSelection{
    amount?: boolean | number
    /** An array relationship */
    markets?: (marketsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An array relationship */
    marketsByBidsTokenAcct?: (marketsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An aggregate relationship */
    marketsByBidsTokenAcct_aggregate?: (markets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An aggregate relationship */
    markets_aggregate?: (markets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    mint_acct?: boolean | number
    owner_acct?: boolean | number
    status?: boolean | number
    /** An object relationship */
    token?: tokensGenqlSelection
    token_acct?: boolean | number
    /** An array relationship */
    token_acct_balances?: (token_acct_balancesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_acct_balances_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_acct_balances_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_acct_balances_bool_exp | null)} })
    /** An aggregate relationship */
    token_acct_balances_aggregate?: (token_acct_balances_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_acct_balances_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_acct_balances_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_acct_balances_bool_exp | null)} })
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "token_accts" */
export interface token_accts_aggregateGenqlSelection{
    aggregate?: token_accts_aggregate_fieldsGenqlSelection
    nodes?: token_acctsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface token_accts_aggregate_bool_exp {count?: (token_accts_aggregate_bool_exp_count | null)}

export interface token_accts_aggregate_bool_exp_count {arguments?: (token_accts_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (token_accts_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "token_accts" */
export interface token_accts_aggregate_fieldsGenqlSelection{
    avg?: token_accts_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (token_accts_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: token_accts_max_fieldsGenqlSelection
    min?: token_accts_min_fieldsGenqlSelection
    stddev?: token_accts_stddev_fieldsGenqlSelection
    stddev_pop?: token_accts_stddev_pop_fieldsGenqlSelection
    stddev_samp?: token_accts_stddev_samp_fieldsGenqlSelection
    sum?: token_accts_sum_fieldsGenqlSelection
    var_pop?: token_accts_var_pop_fieldsGenqlSelection
    var_samp?: token_accts_var_samp_fieldsGenqlSelection
    variance?: token_accts_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "token_accts" */
export interface token_accts_aggregate_order_by {avg?: (token_accts_avg_order_by | null),count?: (order_by | null),max?: (token_accts_max_order_by | null),min?: (token_accts_min_order_by | null),stddev?: (token_accts_stddev_order_by | null),stddev_pop?: (token_accts_stddev_pop_order_by | null),stddev_samp?: (token_accts_stddev_samp_order_by | null),sum?: (token_accts_sum_order_by | null),var_pop?: (token_accts_var_pop_order_by | null),var_samp?: (token_accts_var_samp_order_by | null),variance?: (token_accts_variance_order_by | null)}


/** input type for inserting array relation for remote table "token_accts" */
export interface token_accts_arr_rel_insert_input {data: token_accts_insert_input[],
/** upsert condition */
on_conflict?: (token_accts_on_conflict | null)}


/** aggregate avg on columns */
export interface token_accts_avg_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "token_accts" */
export interface token_accts_avg_order_by {amount?: (order_by | null)}


/** Boolean expression to filter rows from the table "token_accts". All fields are combined with a logical 'AND'. */
export interface token_accts_bool_exp {_and?: (token_accts_bool_exp[] | null),_not?: (token_accts_bool_exp | null),_or?: (token_accts_bool_exp[] | null),amount?: (bigint_comparison_exp | null),markets?: (markets_bool_exp | null),marketsByBidsTokenAcct?: (markets_bool_exp | null),marketsByBidsTokenAcct_aggregate?: (markets_aggregate_bool_exp | null),markets_aggregate?: (markets_aggregate_bool_exp | null),mint_acct?: (String_comparison_exp | null),owner_acct?: (String_comparison_exp | null),status?: (token_acct_status_comparison_exp | null),token?: (tokens_bool_exp | null),token_acct?: (String_comparison_exp | null),token_acct_balances?: (token_acct_balances_bool_exp | null),token_acct_balances_aggregate?: (token_acct_balances_aggregate_bool_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "token_accts" */
export interface token_accts_inc_input {amount?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "token_accts" */
export interface token_accts_insert_input {amount?: (Scalars['bigint'] | null),markets?: (markets_arr_rel_insert_input | null),marketsByBidsTokenAcct?: (markets_arr_rel_insert_input | null),mint_acct?: (Scalars['String'] | null),owner_acct?: (Scalars['String'] | null),status?: (Scalars['token_acct_status'] | null),token?: (tokens_obj_rel_insert_input | null),token_acct?: (Scalars['String'] | null),token_acct_balances?: (token_acct_balances_arr_rel_insert_input | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface token_accts_max_fieldsGenqlSelection{
    amount?: boolean | number
    mint_acct?: boolean | number
    owner_acct?: boolean | number
    status?: boolean | number
    token_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "token_accts" */
export interface token_accts_max_order_by {amount?: (order_by | null),mint_acct?: (order_by | null),owner_acct?: (order_by | null),status?: (order_by | null),token_acct?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface token_accts_min_fieldsGenqlSelection{
    amount?: boolean | number
    mint_acct?: boolean | number
    owner_acct?: boolean | number
    status?: boolean | number
    token_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "token_accts" */
export interface token_accts_min_order_by {amount?: (order_by | null),mint_acct?: (order_by | null),owner_acct?: (order_by | null),status?: (order_by | null),token_acct?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "token_accts" */
export interface token_accts_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: token_acctsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "token_accts" */
export interface token_accts_obj_rel_insert_input {data: token_accts_insert_input,
/** upsert condition */
on_conflict?: (token_accts_on_conflict | null)}


/** on_conflict condition type for table "token_accts" */
export interface token_accts_on_conflict {constraint: token_accts_constraint,update_columns?: token_accts_update_column[],where?: (token_accts_bool_exp | null)}


/** Ordering options when selecting data from "token_accts". */
export interface token_accts_order_by {amount?: (order_by | null),marketsByBidsTokenAcct_aggregate?: (markets_aggregate_order_by | null),markets_aggregate?: (markets_aggregate_order_by | null),mint_acct?: (order_by | null),owner_acct?: (order_by | null),status?: (order_by | null),token?: (tokens_order_by | null),token_acct?: (order_by | null),token_acct_balances_aggregate?: (token_acct_balances_aggregate_order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: token_accts */
export interface token_accts_pk_columns_input {token_acct: Scalars['String']}


/** input type for updating data in table "token_accts" */
export interface token_accts_set_input {amount?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),owner_acct?: (Scalars['String'] | null),status?: (Scalars['token_acct_status'] | null),token_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface token_accts_stddev_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "token_accts" */
export interface token_accts_stddev_order_by {amount?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface token_accts_stddev_pop_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "token_accts" */
export interface token_accts_stddev_pop_order_by {amount?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface token_accts_stddev_samp_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "token_accts" */
export interface token_accts_stddev_samp_order_by {amount?: (order_by | null)}


/** Streaming cursor of the table "token_accts" */
export interface token_accts_stream_cursor_input {
/** Stream column input with initial value */
initial_value: token_accts_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface token_accts_stream_cursor_value_input {amount?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),owner_acct?: (Scalars['String'] | null),status?: (Scalars['token_acct_status'] | null),token_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface token_accts_sum_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "token_accts" */
export interface token_accts_sum_order_by {amount?: (order_by | null)}

export interface token_accts_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (token_accts_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (token_accts_set_input | null),
/** filter the rows which have to be updated */
where: token_accts_bool_exp}


/** aggregate var_pop on columns */
export interface token_accts_var_pop_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "token_accts" */
export interface token_accts_var_pop_order_by {amount?: (order_by | null)}


/** aggregate var_samp on columns */
export interface token_accts_var_samp_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "token_accts" */
export interface token_accts_var_samp_order_by {amount?: (order_by | null)}


/** aggregate variance on columns */
export interface token_accts_variance_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "token_accts" */
export interface token_accts_variance_order_by {amount?: (order_by | null)}


/** columns and relationships of "tokens" */
export interface tokensGenqlSelection{
    /** An array relationship */
    conditional_vaults?: (conditional_vaultsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (conditional_vaults_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (conditional_vaults_order_by[] | null), 
    /** filter the rows returned */
    where?: (conditional_vaults_bool_exp | null)} })
    /** An aggregate relationship */
    conditional_vaults_aggregate?: (conditional_vaults_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (conditional_vaults_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (conditional_vaults_order_by[] | null), 
    /** filter the rows returned */
    where?: (conditional_vaults_bool_exp | null)} })
    /** An array relationship */
    daos?: (daosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** An array relationship */
    daosByQuoteAcct?: (daosGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** An aggregate relationship */
    daosByQuoteAcct_aggregate?: (daos_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    /** An aggregate relationship */
    daos_aggregate?: (daos_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (daos_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (daos_order_by[] | null), 
    /** filter the rows returned */
    where?: (daos_bool_exp | null)} })
    decimals?: boolean | number
    image_url?: boolean | number
    /** An array relationship */
    markets?: (marketsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An array relationship */
    marketsByQuoteMintAcct?: (marketsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An aggregate relationship */
    marketsByQuoteMintAcct_aggregate?: (markets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    /** An aggregate relationship */
    markets_aggregate?: (markets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (markets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (markets_order_by[] | null), 
    /** filter the rows returned */
    where?: (markets_bool_exp | null)} })
    mint_acct?: boolean | number
    name?: boolean | number
    supply?: boolean | number
    symbol?: boolean | number
    /** An array relationship */
    token_acct_balances?: (token_acct_balancesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_acct_balances_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_acct_balances_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_acct_balances_bool_exp | null)} })
    /** An aggregate relationship */
    token_acct_balances_aggregate?: (token_acct_balances_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_acct_balances_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_acct_balances_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_acct_balances_bool_exp | null)} })
    /** An array relationship */
    token_accts?: (token_acctsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_accts_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_accts_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_accts_bool_exp | null)} })
    /** An aggregate relationship */
    token_accts_aggregate?: (token_accts_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (token_accts_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (token_accts_order_by[] | null), 
    /** filter the rows returned */
    where?: (token_accts_bool_exp | null)} })
    updated_at?: boolean | number
    /** An object relationship */
    vault_by_finalize?: conditional_vaultsGenqlSelection
    /** An object relationship */
    vault_by_revert?: conditional_vaultsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "tokens" */
export interface tokens_aggregateGenqlSelection{
    aggregate?: tokens_aggregate_fieldsGenqlSelection
    nodes?: tokensGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "tokens" */
export interface tokens_aggregate_fieldsGenqlSelection{
    avg?: tokens_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (tokens_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: tokens_max_fieldsGenqlSelection
    min?: tokens_min_fieldsGenqlSelection
    stddev?: tokens_stddev_fieldsGenqlSelection
    stddev_pop?: tokens_stddev_pop_fieldsGenqlSelection
    stddev_samp?: tokens_stddev_samp_fieldsGenqlSelection
    sum?: tokens_sum_fieldsGenqlSelection
    var_pop?: tokens_var_pop_fieldsGenqlSelection
    var_samp?: tokens_var_samp_fieldsGenqlSelection
    variance?: tokens_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface tokens_avg_fieldsGenqlSelection{
    decimals?: boolean | number
    supply?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "tokens". All fields are combined with a logical 'AND'. */
export interface tokens_bool_exp {_and?: (tokens_bool_exp[] | null),_not?: (tokens_bool_exp | null),_or?: (tokens_bool_exp[] | null),conditional_vaults?: (conditional_vaults_bool_exp | null),conditional_vaults_aggregate?: (conditional_vaults_aggregate_bool_exp | null),daos?: (daos_bool_exp | null),daosByQuoteAcct?: (daos_bool_exp | null),daosByQuoteAcct_aggregate?: (daos_aggregate_bool_exp | null),daos_aggregate?: (daos_aggregate_bool_exp | null),decimals?: (smallint_comparison_exp | null),image_url?: (String_comparison_exp | null),markets?: (markets_bool_exp | null),marketsByQuoteMintAcct?: (markets_bool_exp | null),marketsByQuoteMintAcct_aggregate?: (markets_aggregate_bool_exp | null),markets_aggregate?: (markets_aggregate_bool_exp | null),mint_acct?: (String_comparison_exp | null),name?: (String_comparison_exp | null),supply?: (bigint_comparison_exp | null),symbol?: (String_comparison_exp | null),token_acct_balances?: (token_acct_balances_bool_exp | null),token_acct_balances_aggregate?: (token_acct_balances_aggregate_bool_exp | null),token_accts?: (token_accts_bool_exp | null),token_accts_aggregate?: (token_accts_aggregate_bool_exp | null),updated_at?: (timestamptz_comparison_exp | null),vault_by_finalize?: (conditional_vaults_bool_exp | null),vault_by_revert?: (conditional_vaults_bool_exp | null)}


/** input type for incrementing numeric columns in table "tokens" */
export interface tokens_inc_input {decimals?: (Scalars['smallint'] | null),supply?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "tokens" */
export interface tokens_insert_input {conditional_vaults?: (conditional_vaults_arr_rel_insert_input | null),daos?: (daos_arr_rel_insert_input | null),daosByQuoteAcct?: (daos_arr_rel_insert_input | null),decimals?: (Scalars['smallint'] | null),image_url?: (Scalars['String'] | null),markets?: (markets_arr_rel_insert_input | null),marketsByQuoteMintAcct?: (markets_arr_rel_insert_input | null),mint_acct?: (Scalars['String'] | null),name?: (Scalars['String'] | null),supply?: (Scalars['bigint'] | null),symbol?: (Scalars['String'] | null),token_acct_balances?: (token_acct_balances_arr_rel_insert_input | null),token_accts?: (token_accts_arr_rel_insert_input | null),updated_at?: (Scalars['timestamptz'] | null),vault_by_finalize?: (conditional_vaults_obj_rel_insert_input | null),vault_by_revert?: (conditional_vaults_obj_rel_insert_input | null)}


/** aggregate max on columns */
export interface tokens_max_fieldsGenqlSelection{
    decimals?: boolean | number
    image_url?: boolean | number
    mint_acct?: boolean | number
    name?: boolean | number
    supply?: boolean | number
    symbol?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface tokens_min_fieldsGenqlSelection{
    decimals?: boolean | number
    image_url?: boolean | number
    mint_acct?: boolean | number
    name?: boolean | number
    supply?: boolean | number
    symbol?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "tokens" */
export interface tokens_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: tokensGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "tokens" */
export interface tokens_obj_rel_insert_input {data: tokens_insert_input,
/** upsert condition */
on_conflict?: (tokens_on_conflict | null)}


/** on_conflict condition type for table "tokens" */
export interface tokens_on_conflict {constraint: tokens_constraint,update_columns?: tokens_update_column[],where?: (tokens_bool_exp | null)}


/** Ordering options when selecting data from "tokens". */
export interface tokens_order_by {conditional_vaults_aggregate?: (conditional_vaults_aggregate_order_by | null),daosByQuoteAcct_aggregate?: (daos_aggregate_order_by | null),daos_aggregate?: (daos_aggregate_order_by | null),decimals?: (order_by | null),image_url?: (order_by | null),marketsByQuoteMintAcct_aggregate?: (markets_aggregate_order_by | null),markets_aggregate?: (markets_aggregate_order_by | null),mint_acct?: (order_by | null),name?: (order_by | null),supply?: (order_by | null),symbol?: (order_by | null),token_acct_balances_aggregate?: (token_acct_balances_aggregate_order_by | null),token_accts_aggregate?: (token_accts_aggregate_order_by | null),updated_at?: (order_by | null),vault_by_finalize?: (conditional_vaults_order_by | null),vault_by_revert?: (conditional_vaults_order_by | null)}


/** primary key columns input for table: tokens */
export interface tokens_pk_columns_input {mint_acct: Scalars['String']}


/** input type for updating data in table "tokens" */
export interface tokens_set_input {decimals?: (Scalars['smallint'] | null),image_url?: (Scalars['String'] | null),mint_acct?: (Scalars['String'] | null),name?: (Scalars['String'] | null),supply?: (Scalars['bigint'] | null),symbol?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface tokens_stddev_fieldsGenqlSelection{
    decimals?: boolean | number
    supply?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface tokens_stddev_pop_fieldsGenqlSelection{
    decimals?: boolean | number
    supply?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface tokens_stddev_samp_fieldsGenqlSelection{
    decimals?: boolean | number
    supply?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "tokens" */
export interface tokens_stream_cursor_input {
/** Stream column input with initial value */
initial_value: tokens_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface tokens_stream_cursor_value_input {decimals?: (Scalars['smallint'] | null),image_url?: (Scalars['String'] | null),mint_acct?: (Scalars['String'] | null),name?: (Scalars['String'] | null),supply?: (Scalars['bigint'] | null),symbol?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface tokens_sum_fieldsGenqlSelection{
    decimals?: boolean | number
    supply?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface tokens_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (tokens_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (tokens_set_input | null),
/** filter the rows which have to be updated */
where: tokens_bool_exp}


/** aggregate var_pop on columns */
export interface tokens_var_pop_fieldsGenqlSelection{
    decimals?: boolean | number
    supply?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface tokens_var_samp_fieldsGenqlSelection{
    decimals?: boolean | number
    supply?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface tokens_variance_fieldsGenqlSelection{
    decimals?: boolean | number
    supply?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "transaction_watcher_transactions" */
export interface transaction_watcher_transactionsGenqlSelection{
    slot?: boolean | number
    /** An object relationship */
    transaction?: transactionsGenqlSelection
    /** An object relationship */
    transaction_watcher?: transaction_watchersGenqlSelection
    tx_sig?: boolean | number
    watcher_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_aggregateGenqlSelection{
    aggregate?: transaction_watcher_transactions_aggregate_fieldsGenqlSelection
    nodes?: transaction_watcher_transactionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface transaction_watcher_transactions_aggregate_bool_exp {count?: (transaction_watcher_transactions_aggregate_bool_exp_count | null)}

export interface transaction_watcher_transactions_aggregate_bool_exp_count {arguments?: (transaction_watcher_transactions_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (transaction_watcher_transactions_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_aggregate_fieldsGenqlSelection{
    avg?: transaction_watcher_transactions_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (transaction_watcher_transactions_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: transaction_watcher_transactions_max_fieldsGenqlSelection
    min?: transaction_watcher_transactions_min_fieldsGenqlSelection
    stddev?: transaction_watcher_transactions_stddev_fieldsGenqlSelection
    stddev_pop?: transaction_watcher_transactions_stddev_pop_fieldsGenqlSelection
    stddev_samp?: transaction_watcher_transactions_stddev_samp_fieldsGenqlSelection
    sum?: transaction_watcher_transactions_sum_fieldsGenqlSelection
    var_pop?: transaction_watcher_transactions_var_pop_fieldsGenqlSelection
    var_samp?: transaction_watcher_transactions_var_samp_fieldsGenqlSelection
    variance?: transaction_watcher_transactions_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_aggregate_order_by {avg?: (transaction_watcher_transactions_avg_order_by | null),count?: (order_by | null),max?: (transaction_watcher_transactions_max_order_by | null),min?: (transaction_watcher_transactions_min_order_by | null),stddev?: (transaction_watcher_transactions_stddev_order_by | null),stddev_pop?: (transaction_watcher_transactions_stddev_pop_order_by | null),stddev_samp?: (transaction_watcher_transactions_stddev_samp_order_by | null),sum?: (transaction_watcher_transactions_sum_order_by | null),var_pop?: (transaction_watcher_transactions_var_pop_order_by | null),var_samp?: (transaction_watcher_transactions_var_samp_order_by | null),variance?: (transaction_watcher_transactions_variance_order_by | null)}


/** input type for inserting array relation for remote table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_arr_rel_insert_input {data: transaction_watcher_transactions_insert_input[],
/** upsert condition */
on_conflict?: (transaction_watcher_transactions_on_conflict | null)}


/** aggregate avg on columns */
export interface transaction_watcher_transactions_avg_fieldsGenqlSelection{
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_avg_order_by {slot?: (order_by | null)}


/** Boolean expression to filter rows from the table "transaction_watcher_transactions". All fields are combined with a logical 'AND'. */
export interface transaction_watcher_transactions_bool_exp {_and?: (transaction_watcher_transactions_bool_exp[] | null),_not?: (transaction_watcher_transactions_bool_exp | null),_or?: (transaction_watcher_transactions_bool_exp[] | null),slot?: (bigint_comparison_exp | null),transaction?: (transactions_bool_exp | null),transaction_watcher?: (transaction_watchers_bool_exp | null),tx_sig?: (String_comparison_exp | null),watcher_acct?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_inc_input {slot?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_insert_input {slot?: (Scalars['bigint'] | null),transaction?: (transactions_obj_rel_insert_input | null),transaction_watcher?: (transaction_watchers_obj_rel_insert_input | null),tx_sig?: (Scalars['String'] | null),watcher_acct?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface transaction_watcher_transactions_max_fieldsGenqlSelection{
    slot?: boolean | number
    tx_sig?: boolean | number
    watcher_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_max_order_by {slot?: (order_by | null),tx_sig?: (order_by | null),watcher_acct?: (order_by | null)}


/** aggregate min on columns */
export interface transaction_watcher_transactions_min_fieldsGenqlSelection{
    slot?: boolean | number
    tx_sig?: boolean | number
    watcher_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_min_order_by {slot?: (order_by | null),tx_sig?: (order_by | null),watcher_acct?: (order_by | null)}


/** response of any mutation on the table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: transaction_watcher_transactionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_on_conflict {constraint: transaction_watcher_transactions_constraint,update_columns?: transaction_watcher_transactions_update_column[],where?: (transaction_watcher_transactions_bool_exp | null)}


/** Ordering options when selecting data from "transaction_watcher_transactions". */
export interface transaction_watcher_transactions_order_by {slot?: (order_by | null),transaction?: (transactions_order_by | null),transaction_watcher?: (transaction_watchers_order_by | null),tx_sig?: (order_by | null),watcher_acct?: (order_by | null)}


/** primary key columns input for table: transaction_watcher_transactions */
export interface transaction_watcher_transactions_pk_columns_input {tx_sig: Scalars['String'],watcher_acct: Scalars['String']}


/** input type for updating data in table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_set_input {slot?: (Scalars['bigint'] | null),tx_sig?: (Scalars['String'] | null),watcher_acct?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface transaction_watcher_transactions_stddev_fieldsGenqlSelection{
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_stddev_order_by {slot?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface transaction_watcher_transactions_stddev_pop_fieldsGenqlSelection{
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_stddev_pop_order_by {slot?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface transaction_watcher_transactions_stddev_samp_fieldsGenqlSelection{
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_stddev_samp_order_by {slot?: (order_by | null)}


/** Streaming cursor of the table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_stream_cursor_input {
/** Stream column input with initial value */
initial_value: transaction_watcher_transactions_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface transaction_watcher_transactions_stream_cursor_value_input {slot?: (Scalars['bigint'] | null),tx_sig?: (Scalars['String'] | null),watcher_acct?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface transaction_watcher_transactions_sum_fieldsGenqlSelection{
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_sum_order_by {slot?: (order_by | null)}

export interface transaction_watcher_transactions_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (transaction_watcher_transactions_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (transaction_watcher_transactions_set_input | null),
/** filter the rows which have to be updated */
where: transaction_watcher_transactions_bool_exp}


/** aggregate var_pop on columns */
export interface transaction_watcher_transactions_var_pop_fieldsGenqlSelection{
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_var_pop_order_by {slot?: (order_by | null)}


/** aggregate var_samp on columns */
export interface transaction_watcher_transactions_var_samp_fieldsGenqlSelection{
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_var_samp_order_by {slot?: (order_by | null)}


/** aggregate variance on columns */
export interface transaction_watcher_transactions_variance_fieldsGenqlSelection{
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "transaction_watcher_transactions" */
export interface transaction_watcher_transactions_variance_order_by {slot?: (order_by | null)}


/** columns and relationships of "transaction_watchers" */
export interface transaction_watchersGenqlSelection{
    acct?: boolean | number
    checked_up_to_slot?: boolean | number
    description?: boolean | number
    failure_log?: boolean | number
    first_tx_sig?: boolean | number
    latest_tx_sig?: boolean | number
    serializer_logic_version?: boolean | number
    status?: boolean | number
    /** An object relationship */
    transaction?: transactionsGenqlSelection
    /** An object relationship */
    transactionByLatestTxSig?: transactionsGenqlSelection
    /** An array relationship */
    transaction_watcher_transactions?: (transaction_watcher_transactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watcher_transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watcher_transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watcher_transactions_bool_exp | null)} })
    /** An aggregate relationship */
    transaction_watcher_transactions_aggregate?: (transaction_watcher_transactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watcher_transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watcher_transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watcher_transactions_bool_exp | null)} })
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "transaction_watchers" */
export interface transaction_watchers_aggregateGenqlSelection{
    aggregate?: transaction_watchers_aggregate_fieldsGenqlSelection
    nodes?: transaction_watchersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface transaction_watchers_aggregate_bool_exp {count?: (transaction_watchers_aggregate_bool_exp_count | null)}

export interface transaction_watchers_aggregate_bool_exp_count {arguments?: (transaction_watchers_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (transaction_watchers_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "transaction_watchers" */
export interface transaction_watchers_aggregate_fieldsGenqlSelection{
    avg?: transaction_watchers_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (transaction_watchers_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: transaction_watchers_max_fieldsGenqlSelection
    min?: transaction_watchers_min_fieldsGenqlSelection
    stddev?: transaction_watchers_stddev_fieldsGenqlSelection
    stddev_pop?: transaction_watchers_stddev_pop_fieldsGenqlSelection
    stddev_samp?: transaction_watchers_stddev_samp_fieldsGenqlSelection
    sum?: transaction_watchers_sum_fieldsGenqlSelection
    var_pop?: transaction_watchers_var_pop_fieldsGenqlSelection
    var_samp?: transaction_watchers_var_samp_fieldsGenqlSelection
    variance?: transaction_watchers_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "transaction_watchers" */
export interface transaction_watchers_aggregate_order_by {avg?: (transaction_watchers_avg_order_by | null),count?: (order_by | null),max?: (transaction_watchers_max_order_by | null),min?: (transaction_watchers_min_order_by | null),stddev?: (transaction_watchers_stddev_order_by | null),stddev_pop?: (transaction_watchers_stddev_pop_order_by | null),stddev_samp?: (transaction_watchers_stddev_samp_order_by | null),sum?: (transaction_watchers_sum_order_by | null),var_pop?: (transaction_watchers_var_pop_order_by | null),var_samp?: (transaction_watchers_var_samp_order_by | null),variance?: (transaction_watchers_variance_order_by | null)}


/** input type for inserting array relation for remote table "transaction_watchers" */
export interface transaction_watchers_arr_rel_insert_input {data: transaction_watchers_insert_input[],
/** upsert condition */
on_conflict?: (transaction_watchers_on_conflict | null)}


/** aggregate avg on columns */
export interface transaction_watchers_avg_fieldsGenqlSelection{
    checked_up_to_slot?: boolean | number
    serializer_logic_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "transaction_watchers" */
export interface transaction_watchers_avg_order_by {checked_up_to_slot?: (order_by | null),serializer_logic_version?: (order_by | null)}


/** Boolean expression to filter rows from the table "transaction_watchers". All fields are combined with a logical 'AND'. */
export interface transaction_watchers_bool_exp {_and?: (transaction_watchers_bool_exp[] | null),_not?: (transaction_watchers_bool_exp | null),_or?: (transaction_watchers_bool_exp[] | null),acct?: (String_comparison_exp | null),checked_up_to_slot?: (bigint_comparison_exp | null),description?: (String_comparison_exp | null),failure_log?: (String_comparison_exp | null),first_tx_sig?: (String_comparison_exp | null),latest_tx_sig?: (String_comparison_exp | null),serializer_logic_version?: (smallint_comparison_exp | null),status?: (String_comparison_exp | null),transaction?: (transactions_bool_exp | null),transactionByLatestTxSig?: (transactions_bool_exp | null),transaction_watcher_transactions?: (transaction_watcher_transactions_bool_exp | null),transaction_watcher_transactions_aggregate?: (transaction_watcher_transactions_aggregate_bool_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "transaction_watchers" */
export interface transaction_watchers_inc_input {checked_up_to_slot?: (Scalars['bigint'] | null),serializer_logic_version?: (Scalars['smallint'] | null)}


/** input type for inserting data into table "transaction_watchers" */
export interface transaction_watchers_insert_input {acct?: (Scalars['String'] | null),checked_up_to_slot?: (Scalars['bigint'] | null),description?: (Scalars['String'] | null),failure_log?: (Scalars['String'] | null),first_tx_sig?: (Scalars['String'] | null),latest_tx_sig?: (Scalars['String'] | null),serializer_logic_version?: (Scalars['smallint'] | null),status?: (Scalars['String'] | null),transaction?: (transactions_obj_rel_insert_input | null),transactionByLatestTxSig?: (transactions_obj_rel_insert_input | null),transaction_watcher_transactions?: (transaction_watcher_transactions_arr_rel_insert_input | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface transaction_watchers_max_fieldsGenqlSelection{
    acct?: boolean | number
    checked_up_to_slot?: boolean | number
    description?: boolean | number
    failure_log?: boolean | number
    first_tx_sig?: boolean | number
    latest_tx_sig?: boolean | number
    serializer_logic_version?: boolean | number
    status?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "transaction_watchers" */
export interface transaction_watchers_max_order_by {acct?: (order_by | null),checked_up_to_slot?: (order_by | null),description?: (order_by | null),failure_log?: (order_by | null),first_tx_sig?: (order_by | null),latest_tx_sig?: (order_by | null),serializer_logic_version?: (order_by | null),status?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface transaction_watchers_min_fieldsGenqlSelection{
    acct?: boolean | number
    checked_up_to_slot?: boolean | number
    description?: boolean | number
    failure_log?: boolean | number
    first_tx_sig?: boolean | number
    latest_tx_sig?: boolean | number
    serializer_logic_version?: boolean | number
    status?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "transaction_watchers" */
export interface transaction_watchers_min_order_by {acct?: (order_by | null),checked_up_to_slot?: (order_by | null),description?: (order_by | null),failure_log?: (order_by | null),first_tx_sig?: (order_by | null),latest_tx_sig?: (order_by | null),serializer_logic_version?: (order_by | null),status?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "transaction_watchers" */
export interface transaction_watchers_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: transaction_watchersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "transaction_watchers" */
export interface transaction_watchers_obj_rel_insert_input {data: transaction_watchers_insert_input,
/** upsert condition */
on_conflict?: (transaction_watchers_on_conflict | null)}


/** on_conflict condition type for table "transaction_watchers" */
export interface transaction_watchers_on_conflict {constraint: transaction_watchers_constraint,update_columns?: transaction_watchers_update_column[],where?: (transaction_watchers_bool_exp | null)}


/** Ordering options when selecting data from "transaction_watchers". */
export interface transaction_watchers_order_by {acct?: (order_by | null),checked_up_to_slot?: (order_by | null),description?: (order_by | null),failure_log?: (order_by | null),first_tx_sig?: (order_by | null),latest_tx_sig?: (order_by | null),serializer_logic_version?: (order_by | null),status?: (order_by | null),transaction?: (transactions_order_by | null),transactionByLatestTxSig?: (transactions_order_by | null),transaction_watcher_transactions_aggregate?: (transaction_watcher_transactions_aggregate_order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: transaction_watchers */
export interface transaction_watchers_pk_columns_input {acct: Scalars['String']}


/** input type for updating data in table "transaction_watchers" */
export interface transaction_watchers_set_input {acct?: (Scalars['String'] | null),checked_up_to_slot?: (Scalars['bigint'] | null),description?: (Scalars['String'] | null),failure_log?: (Scalars['String'] | null),first_tx_sig?: (Scalars['String'] | null),latest_tx_sig?: (Scalars['String'] | null),serializer_logic_version?: (Scalars['smallint'] | null),status?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface transaction_watchers_stddev_fieldsGenqlSelection{
    checked_up_to_slot?: boolean | number
    serializer_logic_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "transaction_watchers" */
export interface transaction_watchers_stddev_order_by {checked_up_to_slot?: (order_by | null),serializer_logic_version?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface transaction_watchers_stddev_pop_fieldsGenqlSelection{
    checked_up_to_slot?: boolean | number
    serializer_logic_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "transaction_watchers" */
export interface transaction_watchers_stddev_pop_order_by {checked_up_to_slot?: (order_by | null),serializer_logic_version?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface transaction_watchers_stddev_samp_fieldsGenqlSelection{
    checked_up_to_slot?: boolean | number
    serializer_logic_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "transaction_watchers" */
export interface transaction_watchers_stddev_samp_order_by {checked_up_to_slot?: (order_by | null),serializer_logic_version?: (order_by | null)}


/** Streaming cursor of the table "transaction_watchers" */
export interface transaction_watchers_stream_cursor_input {
/** Stream column input with initial value */
initial_value: transaction_watchers_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface transaction_watchers_stream_cursor_value_input {acct?: (Scalars['String'] | null),checked_up_to_slot?: (Scalars['bigint'] | null),description?: (Scalars['String'] | null),failure_log?: (Scalars['String'] | null),first_tx_sig?: (Scalars['String'] | null),latest_tx_sig?: (Scalars['String'] | null),serializer_logic_version?: (Scalars['smallint'] | null),status?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface transaction_watchers_sum_fieldsGenqlSelection{
    checked_up_to_slot?: boolean | number
    serializer_logic_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "transaction_watchers" */
export interface transaction_watchers_sum_order_by {checked_up_to_slot?: (order_by | null),serializer_logic_version?: (order_by | null)}

export interface transaction_watchers_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (transaction_watchers_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (transaction_watchers_set_input | null),
/** filter the rows which have to be updated */
where: transaction_watchers_bool_exp}


/** aggregate var_pop on columns */
export interface transaction_watchers_var_pop_fieldsGenqlSelection{
    checked_up_to_slot?: boolean | number
    serializer_logic_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "transaction_watchers" */
export interface transaction_watchers_var_pop_order_by {checked_up_to_slot?: (order_by | null),serializer_logic_version?: (order_by | null)}


/** aggregate var_samp on columns */
export interface transaction_watchers_var_samp_fieldsGenqlSelection{
    checked_up_to_slot?: boolean | number
    serializer_logic_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "transaction_watchers" */
export interface transaction_watchers_var_samp_order_by {checked_up_to_slot?: (order_by | null),serializer_logic_version?: (order_by | null)}


/** aggregate variance on columns */
export interface transaction_watchers_variance_fieldsGenqlSelection{
    checked_up_to_slot?: boolean | number
    serializer_logic_version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "transaction_watchers" */
export interface transaction_watchers_variance_order_by {checked_up_to_slot?: (order_by | null),serializer_logic_version?: (order_by | null)}


/** columns and relationships of "transactions" */
export interface transactionsGenqlSelection{
    block_time?: boolean | number
    failed?: boolean | number
    /** An array relationship */
    indexer_account_dependencies?: (indexer_account_dependenciesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexer_account_dependencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexer_account_dependencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexer_account_dependencies_bool_exp | null)} })
    /** An aggregate relationship */
    indexer_account_dependencies_aggregate?: (indexer_account_dependencies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (indexer_account_dependencies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (indexer_account_dependencies_order_by[] | null), 
    /** filter the rows returned */
    where?: (indexer_account_dependencies_bool_exp | null)} })
    main_ix_type?: boolean | number
    /** An object relationship */
    order?: ordersGenqlSelection
    payload?: boolean | number
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    /** An array relationship */
    transactionWatchersByLatestTxSig?: (transaction_watchersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watchers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watchers_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watchers_bool_exp | null)} })
    /** An aggregate relationship */
    transactionWatchersByLatestTxSig_aggregate?: (transaction_watchers_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watchers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watchers_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watchers_bool_exp | null)} })
    /** An array relationship */
    transaction_watcher_transactions?: (transaction_watcher_transactionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watcher_transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watcher_transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watcher_transactions_bool_exp | null)} })
    /** An aggregate relationship */
    transaction_watcher_transactions_aggregate?: (transaction_watcher_transactions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watcher_transactions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watcher_transactions_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watcher_transactions_bool_exp | null)} })
    /** An array relationship */
    transaction_watchers?: (transaction_watchersGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watchers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watchers_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watchers_bool_exp | null)} })
    /** An aggregate relationship */
    transaction_watchers_aggregate?: (transaction_watchers_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (transaction_watchers_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (transaction_watchers_order_by[] | null), 
    /** filter the rows returned */
    where?: (transaction_watchers_bool_exp | null)} })
    tx_sig?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "transactions" */
export interface transactions_aggregateGenqlSelection{
    aggregate?: transactions_aggregate_fieldsGenqlSelection
    nodes?: transactionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "transactions" */
export interface transactions_aggregate_fieldsGenqlSelection{
    avg?: transactions_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (transactions_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: transactions_max_fieldsGenqlSelection
    min?: transactions_min_fieldsGenqlSelection
    stddev?: transactions_stddev_fieldsGenqlSelection
    stddev_pop?: transactions_stddev_pop_fieldsGenqlSelection
    stddev_samp?: transactions_stddev_samp_fieldsGenqlSelection
    sum?: transactions_sum_fieldsGenqlSelection
    var_pop?: transactions_var_pop_fieldsGenqlSelection
    var_samp?: transactions_var_samp_fieldsGenqlSelection
    variance?: transactions_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface transactions_avg_fieldsGenqlSelection{
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export interface transactions_bool_exp {_and?: (transactions_bool_exp[] | null),_not?: (transactions_bool_exp | null),_or?: (transactions_bool_exp[] | null),block_time?: (timestamptz_comparison_exp | null),failed?: (Boolean_comparison_exp | null),indexer_account_dependencies?: (indexer_account_dependencies_bool_exp | null),indexer_account_dependencies_aggregate?: (indexer_account_dependencies_aggregate_bool_exp | null),main_ix_type?: (String_comparison_exp | null),order?: (orders_bool_exp | null),payload?: (String_comparison_exp | null),serializer_logic_version?: (smallint_comparison_exp | null),slot?: (bigint_comparison_exp | null),transactionWatchersByLatestTxSig?: (transaction_watchers_bool_exp | null),transactionWatchersByLatestTxSig_aggregate?: (transaction_watchers_aggregate_bool_exp | null),transaction_watcher_transactions?: (transaction_watcher_transactions_bool_exp | null),transaction_watcher_transactions_aggregate?: (transaction_watcher_transactions_aggregate_bool_exp | null),transaction_watchers?: (transaction_watchers_bool_exp | null),transaction_watchers_aggregate?: (transaction_watchers_aggregate_bool_exp | null),tx_sig?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "transactions" */
export interface transactions_inc_input {serializer_logic_version?: (Scalars['smallint'] | null),slot?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "transactions" */
export interface transactions_insert_input {block_time?: (Scalars['timestamptz'] | null),failed?: (Scalars['Boolean'] | null),indexer_account_dependencies?: (indexer_account_dependencies_arr_rel_insert_input | null),main_ix_type?: (Scalars['String'] | null),order?: (orders_obj_rel_insert_input | null),payload?: (Scalars['String'] | null),serializer_logic_version?: (Scalars['smallint'] | null),slot?: (Scalars['bigint'] | null),transactionWatchersByLatestTxSig?: (transaction_watchers_arr_rel_insert_input | null),transaction_watcher_transactions?: (transaction_watcher_transactions_arr_rel_insert_input | null),transaction_watchers?: (transaction_watchers_arr_rel_insert_input | null),tx_sig?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface transactions_max_fieldsGenqlSelection{
    block_time?: boolean | number
    main_ix_type?: boolean | number
    payload?: boolean | number
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    tx_sig?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface transactions_min_fieldsGenqlSelection{
    block_time?: boolean | number
    main_ix_type?: boolean | number
    payload?: boolean | number
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    tx_sig?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "transactions" */
export interface transactions_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: transactionsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "transactions" */
export interface transactions_obj_rel_insert_input {data: transactions_insert_input,
/** upsert condition */
on_conflict?: (transactions_on_conflict | null)}


/** on_conflict condition type for table "transactions" */
export interface transactions_on_conflict {constraint: transactions_constraint,update_columns?: transactions_update_column[],where?: (transactions_bool_exp | null)}


/** Ordering options when selecting data from "transactions". */
export interface transactions_order_by {block_time?: (order_by | null),failed?: (order_by | null),indexer_account_dependencies_aggregate?: (indexer_account_dependencies_aggregate_order_by | null),main_ix_type?: (order_by | null),order?: (orders_order_by | null),payload?: (order_by | null),serializer_logic_version?: (order_by | null),slot?: (order_by | null),transactionWatchersByLatestTxSig_aggregate?: (transaction_watchers_aggregate_order_by | null),transaction_watcher_transactions_aggregate?: (transaction_watcher_transactions_aggregate_order_by | null),transaction_watchers_aggregate?: (transaction_watchers_aggregate_order_by | null),tx_sig?: (order_by | null)}


/** primary key columns input for table: transactions */
export interface transactions_pk_columns_input {tx_sig: Scalars['String']}


/** input type for updating data in table "transactions" */
export interface transactions_set_input {block_time?: (Scalars['timestamptz'] | null),failed?: (Scalars['Boolean'] | null),main_ix_type?: (Scalars['String'] | null),payload?: (Scalars['String'] | null),serializer_logic_version?: (Scalars['smallint'] | null),slot?: (Scalars['bigint'] | null),tx_sig?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface transactions_stddev_fieldsGenqlSelection{
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface transactions_stddev_pop_fieldsGenqlSelection{
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface transactions_stddev_samp_fieldsGenqlSelection{
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "transactions" */
export interface transactions_stream_cursor_input {
/** Stream column input with initial value */
initial_value: transactions_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface transactions_stream_cursor_value_input {block_time?: (Scalars['timestamptz'] | null),failed?: (Scalars['Boolean'] | null),main_ix_type?: (Scalars['String'] | null),payload?: (Scalars['String'] | null),serializer_logic_version?: (Scalars['smallint'] | null),slot?: (Scalars['bigint'] | null),tx_sig?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface transactions_sum_fieldsGenqlSelection{
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface transactions_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (transactions_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (transactions_set_input | null),
/** filter the rows which have to be updated */
where: transactions_bool_exp}


/** aggregate var_pop on columns */
export interface transactions_var_pop_fieldsGenqlSelection{
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface transactions_var_samp_fieldsGenqlSelection{
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface transactions_variance_fieldsGenqlSelection{
    serializer_logic_version?: boolean | number
    slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "twap_chart_data" */
export interface twap_chart_dataGenqlSelection{
    interv?: boolean | number
    /** An object relationship */
    market?: marketsGenqlSelection
    market_acct?: boolean | number
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "twap_chart_data" */
export interface twap_chart_data_aggregateGenqlSelection{
    aggregate?: twap_chart_data_aggregate_fieldsGenqlSelection
    nodes?: twap_chart_dataGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "twap_chart_data" */
export interface twap_chart_data_aggregate_fieldsGenqlSelection{
    avg?: twap_chart_data_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (twap_chart_data_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: twap_chart_data_max_fieldsGenqlSelection
    min?: twap_chart_data_min_fieldsGenqlSelection
    stddev?: twap_chart_data_stddev_fieldsGenqlSelection
    stddev_pop?: twap_chart_data_stddev_pop_fieldsGenqlSelection
    stddev_samp?: twap_chart_data_stddev_samp_fieldsGenqlSelection
    sum?: twap_chart_data_sum_fieldsGenqlSelection
    var_pop?: twap_chart_data_var_pop_fieldsGenqlSelection
    var_samp?: twap_chart_data_var_samp_fieldsGenqlSelection
    variance?: twap_chart_data_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface twap_chart_data_avg_fieldsGenqlSelection{
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "twap_chart_data". All fields are combined with a logical 'AND'. */
export interface twap_chart_data_bool_exp {_and?: (twap_chart_data_bool_exp[] | null),_not?: (twap_chart_data_bool_exp | null),_or?: (twap_chart_data_bool_exp[] | null),interv?: (timestamptz_comparison_exp | null),market?: (markets_bool_exp | null),market_acct?: (String_comparison_exp | null),token_amount?: (bigint_comparison_exp | null)}


/** aggregate max on columns */
export interface twap_chart_data_max_fieldsGenqlSelection{
    interv?: boolean | number
    market_acct?: boolean | number
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface twap_chart_data_min_fieldsGenqlSelection{
    interv?: boolean | number
    market_acct?: boolean | number
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "twap_chart_data". */
export interface twap_chart_data_order_by {interv?: (order_by | null),market?: (markets_order_by | null),market_acct?: (order_by | null),token_amount?: (order_by | null)}


/** aggregate stddev on columns */
export interface twap_chart_data_stddev_fieldsGenqlSelection{
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface twap_chart_data_stddev_pop_fieldsGenqlSelection{
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface twap_chart_data_stddev_samp_fieldsGenqlSelection{
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "twap_chart_data" */
export interface twap_chart_data_stream_cursor_input {
/** Stream column input with initial value */
initial_value: twap_chart_data_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface twap_chart_data_stream_cursor_value_input {interv?: (Scalars['timestamptz'] | null),market_acct?: (Scalars['String'] | null),token_amount?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface twap_chart_data_sum_fieldsGenqlSelection{
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_pop on columns */
export interface twap_chart_data_var_pop_fieldsGenqlSelection{
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface twap_chart_data_var_samp_fieldsGenqlSelection{
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface twap_chart_data_variance_fieldsGenqlSelection{
    token_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "twaps" */
export interface twapsGenqlSelection{
    created_at?: boolean | number
    last_observation?: boolean | number
    last_price?: boolean | number
    /** An object relationship */
    market?: marketsGenqlSelection
    market_acct?: boolean | number
    observation_agg?: boolean | number
    /** An object relationship */
    proposal?: proposalsGenqlSelection
    proposal_acct?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "twaps" */
export interface twaps_aggregateGenqlSelection{
    aggregate?: twaps_aggregate_fieldsGenqlSelection
    nodes?: twapsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface twaps_aggregate_bool_exp {count?: (twaps_aggregate_bool_exp_count | null)}

export interface twaps_aggregate_bool_exp_count {arguments?: (twaps_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (twaps_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "twaps" */
export interface twaps_aggregate_fieldsGenqlSelection{
    avg?: twaps_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (twaps_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: twaps_max_fieldsGenqlSelection
    min?: twaps_min_fieldsGenqlSelection
    stddev?: twaps_stddev_fieldsGenqlSelection
    stddev_pop?: twaps_stddev_pop_fieldsGenqlSelection
    stddev_samp?: twaps_stddev_samp_fieldsGenqlSelection
    sum?: twaps_sum_fieldsGenqlSelection
    var_pop?: twaps_var_pop_fieldsGenqlSelection
    var_samp?: twaps_var_samp_fieldsGenqlSelection
    variance?: twaps_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "twaps" */
export interface twaps_aggregate_order_by {avg?: (twaps_avg_order_by | null),count?: (order_by | null),max?: (twaps_max_order_by | null),min?: (twaps_min_order_by | null),stddev?: (twaps_stddev_order_by | null),stddev_pop?: (twaps_stddev_pop_order_by | null),stddev_samp?: (twaps_stddev_samp_order_by | null),sum?: (twaps_sum_order_by | null),var_pop?: (twaps_var_pop_order_by | null),var_samp?: (twaps_var_samp_order_by | null),variance?: (twaps_variance_order_by | null)}


/** input type for inserting array relation for remote table "twaps" */
export interface twaps_arr_rel_insert_input {data: twaps_insert_input[],
/** upsert condition */
on_conflict?: (twaps_on_conflict | null)}


/** aggregate avg on columns */
export interface twaps_avg_fieldsGenqlSelection{
    last_observation?: boolean | number
    last_price?: boolean | number
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "twaps" */
export interface twaps_avg_order_by {last_observation?: (order_by | null),last_price?: (order_by | null),observation_agg?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** Boolean expression to filter rows from the table "twaps". All fields are combined with a logical 'AND'. */
export interface twaps_bool_exp {_and?: (twaps_bool_exp[] | null),_not?: (twaps_bool_exp | null),_or?: (twaps_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),last_observation?: (numeric_comparison_exp | null),last_price?: (numeric_comparison_exp | null),market?: (markets_bool_exp | null),market_acct?: (String_comparison_exp | null),observation_agg?: (numeric_comparison_exp | null),proposal?: (proposals_bool_exp | null),proposal_acct?: (String_comparison_exp | null),token_amount?: (bigint_comparison_exp | null),updated_slot?: (bigint_comparison_exp | null)}


/** input type for incrementing numeric columns in table "twaps" */
export interface twaps_inc_input {last_observation?: (Scalars['numeric'] | null),last_price?: (Scalars['numeric'] | null),observation_agg?: (Scalars['numeric'] | null),token_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "twaps" */
export interface twaps_insert_input {created_at?: (Scalars['timestamptz'] | null),last_observation?: (Scalars['numeric'] | null),last_price?: (Scalars['numeric'] | null),market?: (markets_obj_rel_insert_input | null),market_acct?: (Scalars['String'] | null),observation_agg?: (Scalars['numeric'] | null),proposal?: (proposals_obj_rel_insert_input | null),proposal_acct?: (Scalars['String'] | null),token_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** aggregate max on columns */
export interface twaps_max_fieldsGenqlSelection{
    created_at?: boolean | number
    last_observation?: boolean | number
    last_price?: boolean | number
    market_acct?: boolean | number
    observation_agg?: boolean | number
    proposal_acct?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "twaps" */
export interface twaps_max_order_by {created_at?: (order_by | null),last_observation?: (order_by | null),last_price?: (order_by | null),market_acct?: (order_by | null),observation_agg?: (order_by | null),proposal_acct?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate min on columns */
export interface twaps_min_fieldsGenqlSelection{
    created_at?: boolean | number
    last_observation?: boolean | number
    last_price?: boolean | number
    market_acct?: boolean | number
    observation_agg?: boolean | number
    proposal_acct?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "twaps" */
export interface twaps_min_order_by {created_at?: (order_by | null),last_observation?: (order_by | null),last_price?: (order_by | null),market_acct?: (order_by | null),observation_agg?: (order_by | null),proposal_acct?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** response of any mutation on the table "twaps" */
export interface twaps_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: twapsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "twaps" */
export interface twaps_on_conflict {constraint: twaps_constraint,update_columns?: twaps_update_column[],where?: (twaps_bool_exp | null)}


/** Ordering options when selecting data from "twaps". */
export interface twaps_order_by {created_at?: (order_by | null),last_observation?: (order_by | null),last_price?: (order_by | null),market?: (markets_order_by | null),market_acct?: (order_by | null),observation_agg?: (order_by | null),proposal?: (proposals_order_by | null),proposal_acct?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** primary key columns input for table: twaps */
export interface twaps_pk_columns_input {market_acct: Scalars['String'],updated_slot: Scalars['bigint']}


/** input type for updating data in table "twaps" */
export interface twaps_set_input {created_at?: (Scalars['timestamptz'] | null),last_observation?: (Scalars['numeric'] | null),last_price?: (Scalars['numeric'] | null),market_acct?: (Scalars['String'] | null),observation_agg?: (Scalars['numeric'] | null),proposal_acct?: (Scalars['String'] | null),token_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** aggregate stddev on columns */
export interface twaps_stddev_fieldsGenqlSelection{
    last_observation?: boolean | number
    last_price?: boolean | number
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "twaps" */
export interface twaps_stddev_order_by {last_observation?: (order_by | null),last_price?: (order_by | null),observation_agg?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface twaps_stddev_pop_fieldsGenqlSelection{
    last_observation?: boolean | number
    last_price?: boolean | number
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "twaps" */
export interface twaps_stddev_pop_order_by {last_observation?: (order_by | null),last_price?: (order_by | null),observation_agg?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface twaps_stddev_samp_fieldsGenqlSelection{
    last_observation?: boolean | number
    last_price?: boolean | number
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "twaps" */
export interface twaps_stddev_samp_order_by {last_observation?: (order_by | null),last_price?: (order_by | null),observation_agg?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** Streaming cursor of the table "twaps" */
export interface twaps_stream_cursor_input {
/** Stream column input with initial value */
initial_value: twaps_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface twaps_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),last_observation?: (Scalars['numeric'] | null),last_price?: (Scalars['numeric'] | null),market_acct?: (Scalars['String'] | null),observation_agg?: (Scalars['numeric'] | null),proposal_acct?: (Scalars['String'] | null),token_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface twaps_sum_fieldsGenqlSelection{
    last_observation?: boolean | number
    last_price?: boolean | number
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "twaps" */
export interface twaps_sum_order_by {last_observation?: (order_by | null),last_price?: (order_by | null),observation_agg?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}

export interface twaps_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (twaps_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (twaps_set_input | null),
/** filter the rows which have to be updated */
where: twaps_bool_exp}


/** aggregate var_pop on columns */
export interface twaps_var_pop_fieldsGenqlSelection{
    last_observation?: boolean | number
    last_price?: boolean | number
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "twaps" */
export interface twaps_var_pop_order_by {last_observation?: (order_by | null),last_price?: (order_by | null),observation_agg?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate var_samp on columns */
export interface twaps_var_samp_fieldsGenqlSelection{
    last_observation?: boolean | number
    last_price?: boolean | number
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "twaps" */
export interface twaps_var_samp_order_by {last_observation?: (order_by | null),last_price?: (order_by | null),observation_agg?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** aggregate variance on columns */
export interface twaps_variance_fieldsGenqlSelection{
    last_observation?: boolean | number
    last_price?: boolean | number
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "twaps" */
export interface twaps_variance_order_by {last_observation?: (order_by | null),last_price?: (order_by | null),observation_agg?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** columns and relationships of "users" */
export interface usersGenqlSelection{
    created_at?: boolean | number
    /** An array relationship */
    sessions?: (sessionsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sessions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sessions_order_by[] | null), 
    /** filter the rows returned */
    where?: (sessions_bool_exp | null)} })
    /** An aggregate relationship */
    sessions_aggregate?: (sessions_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sessions_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sessions_order_by[] | null), 
    /** filter the rows returned */
    where?: (sessions_bool_exp | null)} })
    user_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "users" */
export interface users_aggregateGenqlSelection{
    aggregate?: users_aggregate_fieldsGenqlSelection
    nodes?: usersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "users" */
export interface users_aggregate_fieldsGenqlSelection{
    count?: { __args: {columns?: (users_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: users_max_fieldsGenqlSelection
    min?: users_min_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {_and?: (users_bool_exp[] | null),_not?: (users_bool_exp | null),_or?: (users_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),sessions?: (sessions_bool_exp | null),sessions_aggregate?: (sessions_aggregate_bool_exp | null),user_acct?: (String_comparison_exp | null)}


/** input type for inserting data into table "users" */
export interface users_insert_input {created_at?: (Scalars['timestamptz'] | null),sessions?: (sessions_arr_rel_insert_input | null),user_acct?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface users_max_fieldsGenqlSelection{
    created_at?: boolean | number
    user_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface users_min_fieldsGenqlSelection{
    created_at?: boolean | number
    user_acct?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "users" */
export interface users_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: usersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "users" */
export interface users_obj_rel_insert_input {data: users_insert_input,
/** upsert condition */
on_conflict?: (users_on_conflict | null)}


/** on_conflict condition type for table "users" */
export interface users_on_conflict {constraint: users_constraint,update_columns?: users_update_column[],where?: (users_bool_exp | null)}


/** Ordering options when selecting data from "users". */
export interface users_order_by {created_at?: (order_by | null),sessions_aggregate?: (sessions_aggregate_order_by | null),user_acct?: (order_by | null)}


/** primary key columns input for table: users */
export interface users_pk_columns_input {user_acct: Scalars['String']}


/** input type for updating data in table "users" */
export interface users_set_input {created_at?: (Scalars['timestamptz'] | null),user_acct?: (Scalars['String'] | null)}


/** Streaming cursor of the table "users" */
export interface users_stream_cursor_input {
/** Stream column input with initial value */
initial_value: users_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface users_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),user_acct?: (Scalars['String'] | null)}

export interface users_updates {
/** sets the columns of the filtered rows to the given values */
_set?: (users_set_input | null),
/** filter the rows which have to be updated */
where: users_bool_exp}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const candles_possibleTypes: string[] = ['candles']
    export const iscandles = (obj?: { __typename?: any } | null): obj is candles => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles"')
      return candles_possibleTypes.includes(obj.__typename)
    }
    


    const candles_aggregate_possibleTypes: string[] = ['candles_aggregate']
    export const iscandles_aggregate = (obj?: { __typename?: any } | null): obj is candles_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_aggregate"')
      return candles_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const candles_aggregate_fields_possibleTypes: string[] = ['candles_aggregate_fields']
    export const iscandles_aggregate_fields = (obj?: { __typename?: any } | null): obj is candles_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_aggregate_fields"')
      return candles_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_avg_fields_possibleTypes: string[] = ['candles_avg_fields']
    export const iscandles_avg_fields = (obj?: { __typename?: any } | null): obj is candles_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_avg_fields"')
      return candles_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_max_fields_possibleTypes: string[] = ['candles_max_fields']
    export const iscandles_max_fields = (obj?: { __typename?: any } | null): obj is candles_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_max_fields"')
      return candles_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_min_fields_possibleTypes: string[] = ['candles_min_fields']
    export const iscandles_min_fields = (obj?: { __typename?: any } | null): obj is candles_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_min_fields"')
      return candles_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_mutation_response_possibleTypes: string[] = ['candles_mutation_response']
    export const iscandles_mutation_response = (obj?: { __typename?: any } | null): obj is candles_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_mutation_response"')
      return candles_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const candles_stddev_fields_possibleTypes: string[] = ['candles_stddev_fields']
    export const iscandles_stddev_fields = (obj?: { __typename?: any } | null): obj is candles_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_stddev_fields"')
      return candles_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_stddev_pop_fields_possibleTypes: string[] = ['candles_stddev_pop_fields']
    export const iscandles_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is candles_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_stddev_pop_fields"')
      return candles_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_stddev_samp_fields_possibleTypes: string[] = ['candles_stddev_samp_fields']
    export const iscandles_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is candles_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_stddev_samp_fields"')
      return candles_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_sum_fields_possibleTypes: string[] = ['candles_sum_fields']
    export const iscandles_sum_fields = (obj?: { __typename?: any } | null): obj is candles_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_sum_fields"')
      return candles_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_var_pop_fields_possibleTypes: string[] = ['candles_var_pop_fields']
    export const iscandles_var_pop_fields = (obj?: { __typename?: any } | null): obj is candles_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_var_pop_fields"')
      return candles_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_var_samp_fields_possibleTypes: string[] = ['candles_var_samp_fields']
    export const iscandles_var_samp_fields = (obj?: { __typename?: any } | null): obj is candles_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_var_samp_fields"')
      return candles_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const candles_variance_fields_possibleTypes: string[] = ['candles_variance_fields']
    export const iscandles_variance_fields = (obj?: { __typename?: any } | null): obj is candles_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscandles_variance_fields"')
      return candles_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_possibleTypes: string[] = ['comments']
    export const iscomments = (obj?: { __typename?: any } | null): obj is comments => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments"')
      return comments_possibleTypes.includes(obj.__typename)
    }
    


    const comments_aggregate_possibleTypes: string[] = ['comments_aggregate']
    export const iscomments_aggregate = (obj?: { __typename?: any } | null): obj is comments_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_aggregate"')
      return comments_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const comments_aggregate_fields_possibleTypes: string[] = ['comments_aggregate_fields']
    export const iscomments_aggregate_fields = (obj?: { __typename?: any } | null): obj is comments_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_aggregate_fields"')
      return comments_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_avg_fields_possibleTypes: string[] = ['comments_avg_fields']
    export const iscomments_avg_fields = (obj?: { __typename?: any } | null): obj is comments_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_avg_fields"')
      return comments_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_max_fields_possibleTypes: string[] = ['comments_max_fields']
    export const iscomments_max_fields = (obj?: { __typename?: any } | null): obj is comments_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_max_fields"')
      return comments_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_min_fields_possibleTypes: string[] = ['comments_min_fields']
    export const iscomments_min_fields = (obj?: { __typename?: any } | null): obj is comments_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_min_fields"')
      return comments_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_mutation_response_possibleTypes: string[] = ['comments_mutation_response']
    export const iscomments_mutation_response = (obj?: { __typename?: any } | null): obj is comments_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_mutation_response"')
      return comments_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const comments_stddev_fields_possibleTypes: string[] = ['comments_stddev_fields']
    export const iscomments_stddev_fields = (obj?: { __typename?: any } | null): obj is comments_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_stddev_fields"')
      return comments_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_stddev_pop_fields_possibleTypes: string[] = ['comments_stddev_pop_fields']
    export const iscomments_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is comments_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_stddev_pop_fields"')
      return comments_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_stddev_samp_fields_possibleTypes: string[] = ['comments_stddev_samp_fields']
    export const iscomments_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is comments_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_stddev_samp_fields"')
      return comments_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_sum_fields_possibleTypes: string[] = ['comments_sum_fields']
    export const iscomments_sum_fields = (obj?: { __typename?: any } | null): obj is comments_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_sum_fields"')
      return comments_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_var_pop_fields_possibleTypes: string[] = ['comments_var_pop_fields']
    export const iscomments_var_pop_fields = (obj?: { __typename?: any } | null): obj is comments_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_var_pop_fields"')
      return comments_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_var_samp_fields_possibleTypes: string[] = ['comments_var_samp_fields']
    export const iscomments_var_samp_fields = (obj?: { __typename?: any } | null): obj is comments_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_var_samp_fields"')
      return comments_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const comments_variance_fields_possibleTypes: string[] = ['comments_variance_fields']
    export const iscomments_variance_fields = (obj?: { __typename?: any } | null): obj is comments_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscomments_variance_fields"')
      return comments_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const conditional_vaults_possibleTypes: string[] = ['conditional_vaults']
    export const isconditional_vaults = (obj?: { __typename?: any } | null): obj is conditional_vaults => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isconditional_vaults"')
      return conditional_vaults_possibleTypes.includes(obj.__typename)
    }
    


    const conditional_vaults_aggregate_possibleTypes: string[] = ['conditional_vaults_aggregate']
    export const isconditional_vaults_aggregate = (obj?: { __typename?: any } | null): obj is conditional_vaults_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isconditional_vaults_aggregate"')
      return conditional_vaults_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const conditional_vaults_aggregate_fields_possibleTypes: string[] = ['conditional_vaults_aggregate_fields']
    export const isconditional_vaults_aggregate_fields = (obj?: { __typename?: any } | null): obj is conditional_vaults_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isconditional_vaults_aggregate_fields"')
      return conditional_vaults_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const conditional_vaults_max_fields_possibleTypes: string[] = ['conditional_vaults_max_fields']
    export const isconditional_vaults_max_fields = (obj?: { __typename?: any } | null): obj is conditional_vaults_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isconditional_vaults_max_fields"')
      return conditional_vaults_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const conditional_vaults_min_fields_possibleTypes: string[] = ['conditional_vaults_min_fields']
    export const isconditional_vaults_min_fields = (obj?: { __typename?: any } | null): obj is conditional_vaults_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isconditional_vaults_min_fields"')
      return conditional_vaults_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const conditional_vaults_mutation_response_possibleTypes: string[] = ['conditional_vaults_mutation_response']
    export const isconditional_vaults_mutation_response = (obj?: { __typename?: any } | null): obj is conditional_vaults_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isconditional_vaults_mutation_response"')
      return conditional_vaults_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_possibleTypes: string[] = ['dao_details']
    export const isdao_details = (obj?: { __typename?: any } | null): obj is dao_details => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details"')
      return dao_details_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_aggregate_possibleTypes: string[] = ['dao_details_aggregate']
    export const isdao_details_aggregate = (obj?: { __typename?: any } | null): obj is dao_details_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_aggregate"')
      return dao_details_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_aggregate_fields_possibleTypes: string[] = ['dao_details_aggregate_fields']
    export const isdao_details_aggregate_fields = (obj?: { __typename?: any } | null): obj is dao_details_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_aggregate_fields"')
      return dao_details_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_avg_fields_possibleTypes: string[] = ['dao_details_avg_fields']
    export const isdao_details_avg_fields = (obj?: { __typename?: any } | null): obj is dao_details_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_avg_fields"')
      return dao_details_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_max_fields_possibleTypes: string[] = ['dao_details_max_fields']
    export const isdao_details_max_fields = (obj?: { __typename?: any } | null): obj is dao_details_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_max_fields"')
      return dao_details_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_min_fields_possibleTypes: string[] = ['dao_details_min_fields']
    export const isdao_details_min_fields = (obj?: { __typename?: any } | null): obj is dao_details_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_min_fields"')
      return dao_details_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_mutation_response_possibleTypes: string[] = ['dao_details_mutation_response']
    export const isdao_details_mutation_response = (obj?: { __typename?: any } | null): obj is dao_details_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_mutation_response"')
      return dao_details_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_stddev_fields_possibleTypes: string[] = ['dao_details_stddev_fields']
    export const isdao_details_stddev_fields = (obj?: { __typename?: any } | null): obj is dao_details_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_stddev_fields"')
      return dao_details_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_stddev_pop_fields_possibleTypes: string[] = ['dao_details_stddev_pop_fields']
    export const isdao_details_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is dao_details_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_stddev_pop_fields"')
      return dao_details_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_stddev_samp_fields_possibleTypes: string[] = ['dao_details_stddev_samp_fields']
    export const isdao_details_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is dao_details_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_stddev_samp_fields"')
      return dao_details_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_sum_fields_possibleTypes: string[] = ['dao_details_sum_fields']
    export const isdao_details_sum_fields = (obj?: { __typename?: any } | null): obj is dao_details_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_sum_fields"')
      return dao_details_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_var_pop_fields_possibleTypes: string[] = ['dao_details_var_pop_fields']
    export const isdao_details_var_pop_fields = (obj?: { __typename?: any } | null): obj is dao_details_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_var_pop_fields"')
      return dao_details_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_var_samp_fields_possibleTypes: string[] = ['dao_details_var_samp_fields']
    export const isdao_details_var_samp_fields = (obj?: { __typename?: any } | null): obj is dao_details_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_var_samp_fields"')
      return dao_details_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const dao_details_variance_fields_possibleTypes: string[] = ['dao_details_variance_fields']
    export const isdao_details_variance_fields = (obj?: { __typename?: any } | null): obj is dao_details_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdao_details_variance_fields"')
      return dao_details_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_possibleTypes: string[] = ['daos']
    export const isdaos = (obj?: { __typename?: any } | null): obj is daos => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos"')
      return daos_possibleTypes.includes(obj.__typename)
    }
    


    const daos_aggregate_possibleTypes: string[] = ['daos_aggregate']
    export const isdaos_aggregate = (obj?: { __typename?: any } | null): obj is daos_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_aggregate"')
      return daos_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const daos_aggregate_fields_possibleTypes: string[] = ['daos_aggregate_fields']
    export const isdaos_aggregate_fields = (obj?: { __typename?: any } | null): obj is daos_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_aggregate_fields"')
      return daos_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_avg_fields_possibleTypes: string[] = ['daos_avg_fields']
    export const isdaos_avg_fields = (obj?: { __typename?: any } | null): obj is daos_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_avg_fields"')
      return daos_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_max_fields_possibleTypes: string[] = ['daos_max_fields']
    export const isdaos_max_fields = (obj?: { __typename?: any } | null): obj is daos_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_max_fields"')
      return daos_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_min_fields_possibleTypes: string[] = ['daos_min_fields']
    export const isdaos_min_fields = (obj?: { __typename?: any } | null): obj is daos_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_min_fields"')
      return daos_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_mutation_response_possibleTypes: string[] = ['daos_mutation_response']
    export const isdaos_mutation_response = (obj?: { __typename?: any } | null): obj is daos_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_mutation_response"')
      return daos_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const daos_stddev_fields_possibleTypes: string[] = ['daos_stddev_fields']
    export const isdaos_stddev_fields = (obj?: { __typename?: any } | null): obj is daos_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_stddev_fields"')
      return daos_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_stddev_pop_fields_possibleTypes: string[] = ['daos_stddev_pop_fields']
    export const isdaos_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is daos_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_stddev_pop_fields"')
      return daos_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_stddev_samp_fields_possibleTypes: string[] = ['daos_stddev_samp_fields']
    export const isdaos_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is daos_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_stddev_samp_fields"')
      return daos_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_sum_fields_possibleTypes: string[] = ['daos_sum_fields']
    export const isdaos_sum_fields = (obj?: { __typename?: any } | null): obj is daos_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_sum_fields"')
      return daos_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_var_pop_fields_possibleTypes: string[] = ['daos_var_pop_fields']
    export const isdaos_var_pop_fields = (obj?: { __typename?: any } | null): obj is daos_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_var_pop_fields"')
      return daos_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_var_samp_fields_possibleTypes: string[] = ['daos_var_samp_fields']
    export const isdaos_var_samp_fields = (obj?: { __typename?: any } | null): obj is daos_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_var_samp_fields"')
      return daos_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const daos_variance_fields_possibleTypes: string[] = ['daos_variance_fields']
    export const isdaos_variance_fields = (obj?: { __typename?: any } | null): obj is daos_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isdaos_variance_fields"')
      return daos_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexer_account_dependencies_possibleTypes: string[] = ['indexer_account_dependencies']
    export const isindexer_account_dependencies = (obj?: { __typename?: any } | null): obj is indexer_account_dependencies => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexer_account_dependencies"')
      return indexer_account_dependencies_possibleTypes.includes(obj.__typename)
    }
    


    const indexer_account_dependencies_aggregate_possibleTypes: string[] = ['indexer_account_dependencies_aggregate']
    export const isindexer_account_dependencies_aggregate = (obj?: { __typename?: any } | null): obj is indexer_account_dependencies_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexer_account_dependencies_aggregate"')
      return indexer_account_dependencies_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const indexer_account_dependencies_aggregate_fields_possibleTypes: string[] = ['indexer_account_dependencies_aggregate_fields']
    export const isindexer_account_dependencies_aggregate_fields = (obj?: { __typename?: any } | null): obj is indexer_account_dependencies_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexer_account_dependencies_aggregate_fields"')
      return indexer_account_dependencies_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexer_account_dependencies_max_fields_possibleTypes: string[] = ['indexer_account_dependencies_max_fields']
    export const isindexer_account_dependencies_max_fields = (obj?: { __typename?: any } | null): obj is indexer_account_dependencies_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexer_account_dependencies_max_fields"')
      return indexer_account_dependencies_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexer_account_dependencies_min_fields_possibleTypes: string[] = ['indexer_account_dependencies_min_fields']
    export const isindexer_account_dependencies_min_fields = (obj?: { __typename?: any } | null): obj is indexer_account_dependencies_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexer_account_dependencies_min_fields"')
      return indexer_account_dependencies_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexer_account_dependencies_mutation_response_possibleTypes: string[] = ['indexer_account_dependencies_mutation_response']
    export const isindexer_account_dependencies_mutation_response = (obj?: { __typename?: any } | null): obj is indexer_account_dependencies_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexer_account_dependencies_mutation_response"')
      return indexer_account_dependencies_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_possibleTypes: string[] = ['indexers']
    export const isindexers = (obj?: { __typename?: any } | null): obj is indexers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers"')
      return indexers_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_aggregate_possibleTypes: string[] = ['indexers_aggregate']
    export const isindexers_aggregate = (obj?: { __typename?: any } | null): obj is indexers_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_aggregate"')
      return indexers_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_aggregate_fields_possibleTypes: string[] = ['indexers_aggregate_fields']
    export const isindexers_aggregate_fields = (obj?: { __typename?: any } | null): obj is indexers_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_aggregate_fields"')
      return indexers_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_avg_fields_possibleTypes: string[] = ['indexers_avg_fields']
    export const isindexers_avg_fields = (obj?: { __typename?: any } | null): obj is indexers_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_avg_fields"')
      return indexers_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_max_fields_possibleTypes: string[] = ['indexers_max_fields']
    export const isindexers_max_fields = (obj?: { __typename?: any } | null): obj is indexers_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_max_fields"')
      return indexers_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_min_fields_possibleTypes: string[] = ['indexers_min_fields']
    export const isindexers_min_fields = (obj?: { __typename?: any } | null): obj is indexers_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_min_fields"')
      return indexers_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_mutation_response_possibleTypes: string[] = ['indexers_mutation_response']
    export const isindexers_mutation_response = (obj?: { __typename?: any } | null): obj is indexers_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_mutation_response"')
      return indexers_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_stddev_fields_possibleTypes: string[] = ['indexers_stddev_fields']
    export const isindexers_stddev_fields = (obj?: { __typename?: any } | null): obj is indexers_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_stddev_fields"')
      return indexers_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_stddev_pop_fields_possibleTypes: string[] = ['indexers_stddev_pop_fields']
    export const isindexers_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is indexers_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_stddev_pop_fields"')
      return indexers_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_stddev_samp_fields_possibleTypes: string[] = ['indexers_stddev_samp_fields']
    export const isindexers_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is indexers_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_stddev_samp_fields"')
      return indexers_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_sum_fields_possibleTypes: string[] = ['indexers_sum_fields']
    export const isindexers_sum_fields = (obj?: { __typename?: any } | null): obj is indexers_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_sum_fields"')
      return indexers_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_var_pop_fields_possibleTypes: string[] = ['indexers_var_pop_fields']
    export const isindexers_var_pop_fields = (obj?: { __typename?: any } | null): obj is indexers_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_var_pop_fields"')
      return indexers_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_var_samp_fields_possibleTypes: string[] = ['indexers_var_samp_fields']
    export const isindexers_var_samp_fields = (obj?: { __typename?: any } | null): obj is indexers_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_var_samp_fields"')
      return indexers_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const indexers_variance_fields_possibleTypes: string[] = ['indexers_variance_fields']
    export const isindexers_variance_fields = (obj?: { __typename?: any } | null): obj is indexers_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isindexers_variance_fields"')
      return indexers_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_possibleTypes: string[] = ['makes']
    export const ismakes = (obj?: { __typename?: any } | null): obj is makes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes"')
      return makes_possibleTypes.includes(obj.__typename)
    }
    


    const makes_aggregate_possibleTypes: string[] = ['makes_aggregate']
    export const ismakes_aggregate = (obj?: { __typename?: any } | null): obj is makes_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_aggregate"')
      return makes_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const makes_aggregate_fields_possibleTypes: string[] = ['makes_aggregate_fields']
    export const ismakes_aggregate_fields = (obj?: { __typename?: any } | null): obj is makes_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_aggregate_fields"')
      return makes_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_avg_fields_possibleTypes: string[] = ['makes_avg_fields']
    export const ismakes_avg_fields = (obj?: { __typename?: any } | null): obj is makes_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_avg_fields"')
      return makes_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_max_fields_possibleTypes: string[] = ['makes_max_fields']
    export const ismakes_max_fields = (obj?: { __typename?: any } | null): obj is makes_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_max_fields"')
      return makes_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_min_fields_possibleTypes: string[] = ['makes_min_fields']
    export const ismakes_min_fields = (obj?: { __typename?: any } | null): obj is makes_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_min_fields"')
      return makes_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_mutation_response_possibleTypes: string[] = ['makes_mutation_response']
    export const ismakes_mutation_response = (obj?: { __typename?: any } | null): obj is makes_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_mutation_response"')
      return makes_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const makes_stddev_fields_possibleTypes: string[] = ['makes_stddev_fields']
    export const ismakes_stddev_fields = (obj?: { __typename?: any } | null): obj is makes_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_stddev_fields"')
      return makes_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_stddev_pop_fields_possibleTypes: string[] = ['makes_stddev_pop_fields']
    export const ismakes_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is makes_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_stddev_pop_fields"')
      return makes_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_stddev_samp_fields_possibleTypes: string[] = ['makes_stddev_samp_fields']
    export const ismakes_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is makes_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_stddev_samp_fields"')
      return makes_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_sum_fields_possibleTypes: string[] = ['makes_sum_fields']
    export const ismakes_sum_fields = (obj?: { __typename?: any } | null): obj is makes_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_sum_fields"')
      return makes_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_var_pop_fields_possibleTypes: string[] = ['makes_var_pop_fields']
    export const ismakes_var_pop_fields = (obj?: { __typename?: any } | null): obj is makes_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_var_pop_fields"')
      return makes_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_var_samp_fields_possibleTypes: string[] = ['makes_var_samp_fields']
    export const ismakes_var_samp_fields = (obj?: { __typename?: any } | null): obj is makes_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_var_samp_fields"')
      return makes_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const makes_variance_fields_possibleTypes: string[] = ['makes_variance_fields']
    export const ismakes_variance_fields = (obj?: { __typename?: any } | null): obj is makes_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismakes_variance_fields"')
      return makes_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_possibleTypes: string[] = ['markets']
    export const ismarkets = (obj?: { __typename?: any } | null): obj is markets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets"')
      return markets_possibleTypes.includes(obj.__typename)
    }
    


    const markets_aggregate_possibleTypes: string[] = ['markets_aggregate']
    export const ismarkets_aggregate = (obj?: { __typename?: any } | null): obj is markets_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_aggregate"')
      return markets_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const markets_aggregate_fields_possibleTypes: string[] = ['markets_aggregate_fields']
    export const ismarkets_aggregate_fields = (obj?: { __typename?: any } | null): obj is markets_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_aggregate_fields"')
      return markets_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_avg_fields_possibleTypes: string[] = ['markets_avg_fields']
    export const ismarkets_avg_fields = (obj?: { __typename?: any } | null): obj is markets_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_avg_fields"')
      return markets_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_max_fields_possibleTypes: string[] = ['markets_max_fields']
    export const ismarkets_max_fields = (obj?: { __typename?: any } | null): obj is markets_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_max_fields"')
      return markets_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_min_fields_possibleTypes: string[] = ['markets_min_fields']
    export const ismarkets_min_fields = (obj?: { __typename?: any } | null): obj is markets_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_min_fields"')
      return markets_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_mutation_response_possibleTypes: string[] = ['markets_mutation_response']
    export const ismarkets_mutation_response = (obj?: { __typename?: any } | null): obj is markets_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_mutation_response"')
      return markets_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const markets_stddev_fields_possibleTypes: string[] = ['markets_stddev_fields']
    export const ismarkets_stddev_fields = (obj?: { __typename?: any } | null): obj is markets_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_stddev_fields"')
      return markets_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_stddev_pop_fields_possibleTypes: string[] = ['markets_stddev_pop_fields']
    export const ismarkets_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is markets_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_stddev_pop_fields"')
      return markets_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_stddev_samp_fields_possibleTypes: string[] = ['markets_stddev_samp_fields']
    export const ismarkets_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is markets_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_stddev_samp_fields"')
      return markets_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_sum_fields_possibleTypes: string[] = ['markets_sum_fields']
    export const ismarkets_sum_fields = (obj?: { __typename?: any } | null): obj is markets_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_sum_fields"')
      return markets_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_var_pop_fields_possibleTypes: string[] = ['markets_var_pop_fields']
    export const ismarkets_var_pop_fields = (obj?: { __typename?: any } | null): obj is markets_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_var_pop_fields"')
      return markets_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_var_samp_fields_possibleTypes: string[] = ['markets_var_samp_fields']
    export const ismarkets_var_samp_fields = (obj?: { __typename?: any } | null): obj is markets_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_var_samp_fields"')
      return markets_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const markets_variance_fields_possibleTypes: string[] = ['markets_variance_fields']
    export const ismarkets_variance_fields = (obj?: { __typename?: any } | null): obj is markets_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismarkets_variance_fields"')
      return markets_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const orders_possibleTypes: string[] = ['orders']
    export const isorders = (obj?: { __typename?: any } | null): obj is orders => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders"')
      return orders_possibleTypes.includes(obj.__typename)
    }
    


    const orders_aggregate_possibleTypes: string[] = ['orders_aggregate']
    export const isorders_aggregate = (obj?: { __typename?: any } | null): obj is orders_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_aggregate"')
      return orders_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const orders_aggregate_fields_possibleTypes: string[] = ['orders_aggregate_fields']
    export const isorders_aggregate_fields = (obj?: { __typename?: any } | null): obj is orders_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_aggregate_fields"')
      return orders_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_avg_fields_possibleTypes: string[] = ['orders_avg_fields']
    export const isorders_avg_fields = (obj?: { __typename?: any } | null): obj is orders_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_avg_fields"')
      return orders_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_max_fields_possibleTypes: string[] = ['orders_max_fields']
    export const isorders_max_fields = (obj?: { __typename?: any } | null): obj is orders_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_max_fields"')
      return orders_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_min_fields_possibleTypes: string[] = ['orders_min_fields']
    export const isorders_min_fields = (obj?: { __typename?: any } | null): obj is orders_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_min_fields"')
      return orders_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_mutation_response_possibleTypes: string[] = ['orders_mutation_response']
    export const isorders_mutation_response = (obj?: { __typename?: any } | null): obj is orders_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_mutation_response"')
      return orders_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const orders_stddev_fields_possibleTypes: string[] = ['orders_stddev_fields']
    export const isorders_stddev_fields = (obj?: { __typename?: any } | null): obj is orders_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_stddev_fields"')
      return orders_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_stddev_pop_fields_possibleTypes: string[] = ['orders_stddev_pop_fields']
    export const isorders_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is orders_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_stddev_pop_fields"')
      return orders_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_stddev_samp_fields_possibleTypes: string[] = ['orders_stddev_samp_fields']
    export const isorders_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is orders_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_stddev_samp_fields"')
      return orders_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_sum_fields_possibleTypes: string[] = ['orders_sum_fields']
    export const isorders_sum_fields = (obj?: { __typename?: any } | null): obj is orders_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_sum_fields"')
      return orders_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_var_pop_fields_possibleTypes: string[] = ['orders_var_pop_fields']
    export const isorders_var_pop_fields = (obj?: { __typename?: any } | null): obj is orders_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_var_pop_fields"')
      return orders_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_var_samp_fields_possibleTypes: string[] = ['orders_var_samp_fields']
    export const isorders_var_samp_fields = (obj?: { __typename?: any } | null): obj is orders_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_var_samp_fields"')
      return orders_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const orders_variance_fields_possibleTypes: string[] = ['orders_variance_fields']
    export const isorders_variance_fields = (obj?: { __typename?: any } | null): obj is orders_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isorders_variance_fields"')
      return orders_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_possibleTypes: string[] = ['prices']
    export const isprices = (obj?: { __typename?: any } | null): obj is prices => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices"')
      return prices_possibleTypes.includes(obj.__typename)
    }
    


    const prices_aggregate_possibleTypes: string[] = ['prices_aggregate']
    export const isprices_aggregate = (obj?: { __typename?: any } | null): obj is prices_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_aggregate"')
      return prices_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const prices_aggregate_fields_possibleTypes: string[] = ['prices_aggregate_fields']
    export const isprices_aggregate_fields = (obj?: { __typename?: any } | null): obj is prices_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_aggregate_fields"')
      return prices_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_avg_fields_possibleTypes: string[] = ['prices_avg_fields']
    export const isprices_avg_fields = (obj?: { __typename?: any } | null): obj is prices_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_avg_fields"')
      return prices_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_possibleTypes: string[] = ['prices_chart_data']
    export const isprices_chart_data = (obj?: { __typename?: any } | null): obj is prices_chart_data => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data"')
      return prices_chart_data_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_aggregate_possibleTypes: string[] = ['prices_chart_data_aggregate']
    export const isprices_chart_data_aggregate = (obj?: { __typename?: any } | null): obj is prices_chart_data_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_aggregate"')
      return prices_chart_data_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_aggregate_fields_possibleTypes: string[] = ['prices_chart_data_aggregate_fields']
    export const isprices_chart_data_aggregate_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_aggregate_fields"')
      return prices_chart_data_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_avg_fields_possibleTypes: string[] = ['prices_chart_data_avg_fields']
    export const isprices_chart_data_avg_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_avg_fields"')
      return prices_chart_data_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_max_fields_possibleTypes: string[] = ['prices_chart_data_max_fields']
    export const isprices_chart_data_max_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_max_fields"')
      return prices_chart_data_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_min_fields_possibleTypes: string[] = ['prices_chart_data_min_fields']
    export const isprices_chart_data_min_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_min_fields"')
      return prices_chart_data_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_stddev_fields_possibleTypes: string[] = ['prices_chart_data_stddev_fields']
    export const isprices_chart_data_stddev_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_stddev_fields"')
      return prices_chart_data_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_stddev_pop_fields_possibleTypes: string[] = ['prices_chart_data_stddev_pop_fields']
    export const isprices_chart_data_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_stddev_pop_fields"')
      return prices_chart_data_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_stddev_samp_fields_possibleTypes: string[] = ['prices_chart_data_stddev_samp_fields']
    export const isprices_chart_data_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_stddev_samp_fields"')
      return prices_chart_data_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_sum_fields_possibleTypes: string[] = ['prices_chart_data_sum_fields']
    export const isprices_chart_data_sum_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_sum_fields"')
      return prices_chart_data_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_var_pop_fields_possibleTypes: string[] = ['prices_chart_data_var_pop_fields']
    export const isprices_chart_data_var_pop_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_var_pop_fields"')
      return prices_chart_data_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_var_samp_fields_possibleTypes: string[] = ['prices_chart_data_var_samp_fields']
    export const isprices_chart_data_var_samp_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_var_samp_fields"')
      return prices_chart_data_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_chart_data_variance_fields_possibleTypes: string[] = ['prices_chart_data_variance_fields']
    export const isprices_chart_data_variance_fields = (obj?: { __typename?: any } | null): obj is prices_chart_data_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_chart_data_variance_fields"')
      return prices_chart_data_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_max_fields_possibleTypes: string[] = ['prices_max_fields']
    export const isprices_max_fields = (obj?: { __typename?: any } | null): obj is prices_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_max_fields"')
      return prices_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_min_fields_possibleTypes: string[] = ['prices_min_fields']
    export const isprices_min_fields = (obj?: { __typename?: any } | null): obj is prices_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_min_fields"')
      return prices_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_mutation_response_possibleTypes: string[] = ['prices_mutation_response']
    export const isprices_mutation_response = (obj?: { __typename?: any } | null): obj is prices_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_mutation_response"')
      return prices_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const prices_stddev_fields_possibleTypes: string[] = ['prices_stddev_fields']
    export const isprices_stddev_fields = (obj?: { __typename?: any } | null): obj is prices_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_stddev_fields"')
      return prices_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_stddev_pop_fields_possibleTypes: string[] = ['prices_stddev_pop_fields']
    export const isprices_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is prices_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_stddev_pop_fields"')
      return prices_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_stddev_samp_fields_possibleTypes: string[] = ['prices_stddev_samp_fields']
    export const isprices_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is prices_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_stddev_samp_fields"')
      return prices_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_sum_fields_possibleTypes: string[] = ['prices_sum_fields']
    export const isprices_sum_fields = (obj?: { __typename?: any } | null): obj is prices_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_sum_fields"')
      return prices_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_var_pop_fields_possibleTypes: string[] = ['prices_var_pop_fields']
    export const isprices_var_pop_fields = (obj?: { __typename?: any } | null): obj is prices_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_var_pop_fields"')
      return prices_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_var_samp_fields_possibleTypes: string[] = ['prices_var_samp_fields']
    export const isprices_var_samp_fields = (obj?: { __typename?: any } | null): obj is prices_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_var_samp_fields"')
      return prices_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const prices_variance_fields_possibleTypes: string[] = ['prices_variance_fields']
    export const isprices_variance_fields = (obj?: { __typename?: any } | null): obj is prices_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprices_variance_fields"')
      return prices_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_possibleTypes: string[] = ['program_system']
    export const isprogram_system = (obj?: { __typename?: any } | null): obj is program_system => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system"')
      return program_system_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_aggregate_possibleTypes: string[] = ['program_system_aggregate']
    export const isprogram_system_aggregate = (obj?: { __typename?: any } | null): obj is program_system_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_aggregate"')
      return program_system_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_aggregate_fields_possibleTypes: string[] = ['program_system_aggregate_fields']
    export const isprogram_system_aggregate_fields = (obj?: { __typename?: any } | null): obj is program_system_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_aggregate_fields"')
      return program_system_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_avg_fields_possibleTypes: string[] = ['program_system_avg_fields']
    export const isprogram_system_avg_fields = (obj?: { __typename?: any } | null): obj is program_system_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_avg_fields"')
      return program_system_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_max_fields_possibleTypes: string[] = ['program_system_max_fields']
    export const isprogram_system_max_fields = (obj?: { __typename?: any } | null): obj is program_system_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_max_fields"')
      return program_system_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_min_fields_possibleTypes: string[] = ['program_system_min_fields']
    export const isprogram_system_min_fields = (obj?: { __typename?: any } | null): obj is program_system_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_min_fields"')
      return program_system_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_mutation_response_possibleTypes: string[] = ['program_system_mutation_response']
    export const isprogram_system_mutation_response = (obj?: { __typename?: any } | null): obj is program_system_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_mutation_response"')
      return program_system_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_stddev_fields_possibleTypes: string[] = ['program_system_stddev_fields']
    export const isprogram_system_stddev_fields = (obj?: { __typename?: any } | null): obj is program_system_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_stddev_fields"')
      return program_system_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_stddev_pop_fields_possibleTypes: string[] = ['program_system_stddev_pop_fields']
    export const isprogram_system_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is program_system_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_stddev_pop_fields"')
      return program_system_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_stddev_samp_fields_possibleTypes: string[] = ['program_system_stddev_samp_fields']
    export const isprogram_system_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is program_system_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_stddev_samp_fields"')
      return program_system_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_sum_fields_possibleTypes: string[] = ['program_system_sum_fields']
    export const isprogram_system_sum_fields = (obj?: { __typename?: any } | null): obj is program_system_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_sum_fields"')
      return program_system_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_var_pop_fields_possibleTypes: string[] = ['program_system_var_pop_fields']
    export const isprogram_system_var_pop_fields = (obj?: { __typename?: any } | null): obj is program_system_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_var_pop_fields"')
      return program_system_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_var_samp_fields_possibleTypes: string[] = ['program_system_var_samp_fields']
    export const isprogram_system_var_samp_fields = (obj?: { __typename?: any } | null): obj is program_system_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_var_samp_fields"')
      return program_system_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const program_system_variance_fields_possibleTypes: string[] = ['program_system_variance_fields']
    export const isprogram_system_variance_fields = (obj?: { __typename?: any } | null): obj is program_system_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprogram_system_variance_fields"')
      return program_system_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_possibleTypes: string[] = ['programs']
    export const isprograms = (obj?: { __typename?: any } | null): obj is programs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms"')
      return programs_possibleTypes.includes(obj.__typename)
    }
    


    const programs_aggregate_possibleTypes: string[] = ['programs_aggregate']
    export const isprograms_aggregate = (obj?: { __typename?: any } | null): obj is programs_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_aggregate"')
      return programs_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const programs_aggregate_fields_possibleTypes: string[] = ['programs_aggregate_fields']
    export const isprograms_aggregate_fields = (obj?: { __typename?: any } | null): obj is programs_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_aggregate_fields"')
      return programs_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_avg_fields_possibleTypes: string[] = ['programs_avg_fields']
    export const isprograms_avg_fields = (obj?: { __typename?: any } | null): obj is programs_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_avg_fields"')
      return programs_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_max_fields_possibleTypes: string[] = ['programs_max_fields']
    export const isprograms_max_fields = (obj?: { __typename?: any } | null): obj is programs_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_max_fields"')
      return programs_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_min_fields_possibleTypes: string[] = ['programs_min_fields']
    export const isprograms_min_fields = (obj?: { __typename?: any } | null): obj is programs_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_min_fields"')
      return programs_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_mutation_response_possibleTypes: string[] = ['programs_mutation_response']
    export const isprograms_mutation_response = (obj?: { __typename?: any } | null): obj is programs_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_mutation_response"')
      return programs_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const programs_stddev_fields_possibleTypes: string[] = ['programs_stddev_fields']
    export const isprograms_stddev_fields = (obj?: { __typename?: any } | null): obj is programs_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_stddev_fields"')
      return programs_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_stddev_pop_fields_possibleTypes: string[] = ['programs_stddev_pop_fields']
    export const isprograms_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is programs_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_stddev_pop_fields"')
      return programs_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_stddev_samp_fields_possibleTypes: string[] = ['programs_stddev_samp_fields']
    export const isprograms_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is programs_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_stddev_samp_fields"')
      return programs_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_sum_fields_possibleTypes: string[] = ['programs_sum_fields']
    export const isprograms_sum_fields = (obj?: { __typename?: any } | null): obj is programs_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_sum_fields"')
      return programs_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_var_pop_fields_possibleTypes: string[] = ['programs_var_pop_fields']
    export const isprograms_var_pop_fields = (obj?: { __typename?: any } | null): obj is programs_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_var_pop_fields"')
      return programs_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_var_samp_fields_possibleTypes: string[] = ['programs_var_samp_fields']
    export const isprograms_var_samp_fields = (obj?: { __typename?: any } | null): obj is programs_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_var_samp_fields"')
      return programs_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const programs_variance_fields_possibleTypes: string[] = ['programs_variance_fields']
    export const isprograms_variance_fields = (obj?: { __typename?: any } | null): obj is programs_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isprograms_variance_fields"')
      return programs_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_possibleTypes: string[] = ['proposal_bars']
    export const isproposal_bars = (obj?: { __typename?: any } | null): obj is proposal_bars => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars"')
      return proposal_bars_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_aggregate_possibleTypes: string[] = ['proposal_bars_aggregate']
    export const isproposal_bars_aggregate = (obj?: { __typename?: any } | null): obj is proposal_bars_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_aggregate"')
      return proposal_bars_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_aggregate_fields_possibleTypes: string[] = ['proposal_bars_aggregate_fields']
    export const isproposal_bars_aggregate_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_aggregate_fields"')
      return proposal_bars_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_avg_fields_possibleTypes: string[] = ['proposal_bars_avg_fields']
    export const isproposal_bars_avg_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_avg_fields"')
      return proposal_bars_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_max_fields_possibleTypes: string[] = ['proposal_bars_max_fields']
    export const isproposal_bars_max_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_max_fields"')
      return proposal_bars_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_min_fields_possibleTypes: string[] = ['proposal_bars_min_fields']
    export const isproposal_bars_min_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_min_fields"')
      return proposal_bars_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_mutation_response_possibleTypes: string[] = ['proposal_bars_mutation_response']
    export const isproposal_bars_mutation_response = (obj?: { __typename?: any } | null): obj is proposal_bars_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_mutation_response"')
      return proposal_bars_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_stddev_fields_possibleTypes: string[] = ['proposal_bars_stddev_fields']
    export const isproposal_bars_stddev_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_stddev_fields"')
      return proposal_bars_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_stddev_pop_fields_possibleTypes: string[] = ['proposal_bars_stddev_pop_fields']
    export const isproposal_bars_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_stddev_pop_fields"')
      return proposal_bars_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_stddev_samp_fields_possibleTypes: string[] = ['proposal_bars_stddev_samp_fields']
    export const isproposal_bars_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_stddev_samp_fields"')
      return proposal_bars_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_sum_fields_possibleTypes: string[] = ['proposal_bars_sum_fields']
    export const isproposal_bars_sum_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_sum_fields"')
      return proposal_bars_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_var_pop_fields_possibleTypes: string[] = ['proposal_bars_var_pop_fields']
    export const isproposal_bars_var_pop_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_var_pop_fields"')
      return proposal_bars_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_var_samp_fields_possibleTypes: string[] = ['proposal_bars_var_samp_fields']
    export const isproposal_bars_var_samp_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_var_samp_fields"')
      return proposal_bars_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_bars_variance_fields_possibleTypes: string[] = ['proposal_bars_variance_fields']
    export const isproposal_bars_variance_fields = (obj?: { __typename?: any } | null): obj is proposal_bars_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_bars_variance_fields"')
      return proposal_bars_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_possibleTypes: string[] = ['proposal_details']
    export const isproposal_details = (obj?: { __typename?: any } | null): obj is proposal_details => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details"')
      return proposal_details_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_aggregate_possibleTypes: string[] = ['proposal_details_aggregate']
    export const isproposal_details_aggregate = (obj?: { __typename?: any } | null): obj is proposal_details_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_aggregate"')
      return proposal_details_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_aggregate_fields_possibleTypes: string[] = ['proposal_details_aggregate_fields']
    export const isproposal_details_aggregate_fields = (obj?: { __typename?: any } | null): obj is proposal_details_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_aggregate_fields"')
      return proposal_details_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_avg_fields_possibleTypes: string[] = ['proposal_details_avg_fields']
    export const isproposal_details_avg_fields = (obj?: { __typename?: any } | null): obj is proposal_details_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_avg_fields"')
      return proposal_details_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_max_fields_possibleTypes: string[] = ['proposal_details_max_fields']
    export const isproposal_details_max_fields = (obj?: { __typename?: any } | null): obj is proposal_details_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_max_fields"')
      return proposal_details_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_min_fields_possibleTypes: string[] = ['proposal_details_min_fields']
    export const isproposal_details_min_fields = (obj?: { __typename?: any } | null): obj is proposal_details_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_min_fields"')
      return proposal_details_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_mutation_response_possibleTypes: string[] = ['proposal_details_mutation_response']
    export const isproposal_details_mutation_response = (obj?: { __typename?: any } | null): obj is proposal_details_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_mutation_response"')
      return proposal_details_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_stddev_fields_possibleTypes: string[] = ['proposal_details_stddev_fields']
    export const isproposal_details_stddev_fields = (obj?: { __typename?: any } | null): obj is proposal_details_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_stddev_fields"')
      return proposal_details_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_stddev_pop_fields_possibleTypes: string[] = ['proposal_details_stddev_pop_fields']
    export const isproposal_details_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is proposal_details_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_stddev_pop_fields"')
      return proposal_details_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_stddev_samp_fields_possibleTypes: string[] = ['proposal_details_stddev_samp_fields']
    export const isproposal_details_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is proposal_details_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_stddev_samp_fields"')
      return proposal_details_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_sum_fields_possibleTypes: string[] = ['proposal_details_sum_fields']
    export const isproposal_details_sum_fields = (obj?: { __typename?: any } | null): obj is proposal_details_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_sum_fields"')
      return proposal_details_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_var_pop_fields_possibleTypes: string[] = ['proposal_details_var_pop_fields']
    export const isproposal_details_var_pop_fields = (obj?: { __typename?: any } | null): obj is proposal_details_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_var_pop_fields"')
      return proposal_details_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_var_samp_fields_possibleTypes: string[] = ['proposal_details_var_samp_fields']
    export const isproposal_details_var_samp_fields = (obj?: { __typename?: any } | null): obj is proposal_details_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_var_samp_fields"')
      return proposal_details_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_details_variance_fields_possibleTypes: string[] = ['proposal_details_variance_fields']
    export const isproposal_details_variance_fields = (obj?: { __typename?: any } | null): obj is proposal_details_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_details_variance_fields"')
      return proposal_details_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_possibleTypes: string[] = ['proposal_total_trade_volume']
    export const isproposal_total_trade_volume = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume"')
      return proposal_total_trade_volume_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_aggregate_possibleTypes: string[] = ['proposal_total_trade_volume_aggregate']
    export const isproposal_total_trade_volume_aggregate = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_aggregate"')
      return proposal_total_trade_volume_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_aggregate_fields_possibleTypes: string[] = ['proposal_total_trade_volume_aggregate_fields']
    export const isproposal_total_trade_volume_aggregate_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_aggregate_fields"')
      return proposal_total_trade_volume_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_avg_fields_possibleTypes: string[] = ['proposal_total_trade_volume_avg_fields']
    export const isproposal_total_trade_volume_avg_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_avg_fields"')
      return proposal_total_trade_volume_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_max_fields_possibleTypes: string[] = ['proposal_total_trade_volume_max_fields']
    export const isproposal_total_trade_volume_max_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_max_fields"')
      return proposal_total_trade_volume_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_min_fields_possibleTypes: string[] = ['proposal_total_trade_volume_min_fields']
    export const isproposal_total_trade_volume_min_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_min_fields"')
      return proposal_total_trade_volume_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_stddev_fields_possibleTypes: string[] = ['proposal_total_trade_volume_stddev_fields']
    export const isproposal_total_trade_volume_stddev_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_stddev_fields"')
      return proposal_total_trade_volume_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_stddev_pop_fields_possibleTypes: string[] = ['proposal_total_trade_volume_stddev_pop_fields']
    export const isproposal_total_trade_volume_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_stddev_pop_fields"')
      return proposal_total_trade_volume_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_stddev_samp_fields_possibleTypes: string[] = ['proposal_total_trade_volume_stddev_samp_fields']
    export const isproposal_total_trade_volume_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_stddev_samp_fields"')
      return proposal_total_trade_volume_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_sum_fields_possibleTypes: string[] = ['proposal_total_trade_volume_sum_fields']
    export const isproposal_total_trade_volume_sum_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_sum_fields"')
      return proposal_total_trade_volume_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_var_pop_fields_possibleTypes: string[] = ['proposal_total_trade_volume_var_pop_fields']
    export const isproposal_total_trade_volume_var_pop_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_var_pop_fields"')
      return proposal_total_trade_volume_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_var_samp_fields_possibleTypes: string[] = ['proposal_total_trade_volume_var_samp_fields']
    export const isproposal_total_trade_volume_var_samp_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_var_samp_fields"')
      return proposal_total_trade_volume_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposal_total_trade_volume_variance_fields_possibleTypes: string[] = ['proposal_total_trade_volume_variance_fields']
    export const isproposal_total_trade_volume_variance_fields = (obj?: { __typename?: any } | null): obj is proposal_total_trade_volume_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposal_total_trade_volume_variance_fields"')
      return proposal_total_trade_volume_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_possibleTypes: string[] = ['proposals']
    export const isproposals = (obj?: { __typename?: any } | null): obj is proposals => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals"')
      return proposals_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_aggregate_possibleTypes: string[] = ['proposals_aggregate']
    export const isproposals_aggregate = (obj?: { __typename?: any } | null): obj is proposals_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_aggregate"')
      return proposals_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_aggregate_fields_possibleTypes: string[] = ['proposals_aggregate_fields']
    export const isproposals_aggregate_fields = (obj?: { __typename?: any } | null): obj is proposals_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_aggregate_fields"')
      return proposals_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_avg_fields_possibleTypes: string[] = ['proposals_avg_fields']
    export const isproposals_avg_fields = (obj?: { __typename?: any } | null): obj is proposals_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_avg_fields"')
      return proposals_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_max_fields_possibleTypes: string[] = ['proposals_max_fields']
    export const isproposals_max_fields = (obj?: { __typename?: any } | null): obj is proposals_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_max_fields"')
      return proposals_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_min_fields_possibleTypes: string[] = ['proposals_min_fields']
    export const isproposals_min_fields = (obj?: { __typename?: any } | null): obj is proposals_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_min_fields"')
      return proposals_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_mutation_response_possibleTypes: string[] = ['proposals_mutation_response']
    export const isproposals_mutation_response = (obj?: { __typename?: any } | null): obj is proposals_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_mutation_response"')
      return proposals_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_stddev_fields_possibleTypes: string[] = ['proposals_stddev_fields']
    export const isproposals_stddev_fields = (obj?: { __typename?: any } | null): obj is proposals_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_stddev_fields"')
      return proposals_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_stddev_pop_fields_possibleTypes: string[] = ['proposals_stddev_pop_fields']
    export const isproposals_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is proposals_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_stddev_pop_fields"')
      return proposals_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_stddev_samp_fields_possibleTypes: string[] = ['proposals_stddev_samp_fields']
    export const isproposals_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is proposals_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_stddev_samp_fields"')
      return proposals_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_sum_fields_possibleTypes: string[] = ['proposals_sum_fields']
    export const isproposals_sum_fields = (obj?: { __typename?: any } | null): obj is proposals_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_sum_fields"')
      return proposals_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_var_pop_fields_possibleTypes: string[] = ['proposals_var_pop_fields']
    export const isproposals_var_pop_fields = (obj?: { __typename?: any } | null): obj is proposals_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_var_pop_fields"')
      return proposals_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_var_samp_fields_possibleTypes: string[] = ['proposals_var_samp_fields']
    export const isproposals_var_samp_fields = (obj?: { __typename?: any } | null): obj is proposals_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_var_samp_fields"')
      return proposals_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const proposals_variance_fields_possibleTypes: string[] = ['proposals_variance_fields']
    export const isproposals_variance_fields = (obj?: { __typename?: any } | null): obj is proposals_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproposals_variance_fields"')
      return proposals_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_possibleTypes: string[] = ['reactions']
    export const isreactions = (obj?: { __typename?: any } | null): obj is reactions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions"')
      return reactions_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_aggregate_possibleTypes: string[] = ['reactions_aggregate']
    export const isreactions_aggregate = (obj?: { __typename?: any } | null): obj is reactions_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_aggregate"')
      return reactions_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_aggregate_fields_possibleTypes: string[] = ['reactions_aggregate_fields']
    export const isreactions_aggregate_fields = (obj?: { __typename?: any } | null): obj is reactions_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_aggregate_fields"')
      return reactions_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_avg_fields_possibleTypes: string[] = ['reactions_avg_fields']
    export const isreactions_avg_fields = (obj?: { __typename?: any } | null): obj is reactions_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_avg_fields"')
      return reactions_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_max_fields_possibleTypes: string[] = ['reactions_max_fields']
    export const isreactions_max_fields = (obj?: { __typename?: any } | null): obj is reactions_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_max_fields"')
      return reactions_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_min_fields_possibleTypes: string[] = ['reactions_min_fields']
    export const isreactions_min_fields = (obj?: { __typename?: any } | null): obj is reactions_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_min_fields"')
      return reactions_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_mutation_response_possibleTypes: string[] = ['reactions_mutation_response']
    export const isreactions_mutation_response = (obj?: { __typename?: any } | null): obj is reactions_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_mutation_response"')
      return reactions_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_stddev_fields_possibleTypes: string[] = ['reactions_stddev_fields']
    export const isreactions_stddev_fields = (obj?: { __typename?: any } | null): obj is reactions_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_stddev_fields"')
      return reactions_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_stddev_pop_fields_possibleTypes: string[] = ['reactions_stddev_pop_fields']
    export const isreactions_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is reactions_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_stddev_pop_fields"')
      return reactions_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_stddev_samp_fields_possibleTypes: string[] = ['reactions_stddev_samp_fields']
    export const isreactions_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is reactions_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_stddev_samp_fields"')
      return reactions_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_sum_fields_possibleTypes: string[] = ['reactions_sum_fields']
    export const isreactions_sum_fields = (obj?: { __typename?: any } | null): obj is reactions_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_sum_fields"')
      return reactions_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_var_pop_fields_possibleTypes: string[] = ['reactions_var_pop_fields']
    export const isreactions_var_pop_fields = (obj?: { __typename?: any } | null): obj is reactions_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_var_pop_fields"')
      return reactions_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_var_samp_fields_possibleTypes: string[] = ['reactions_var_samp_fields']
    export const isreactions_var_samp_fields = (obj?: { __typename?: any } | null): obj is reactions_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_var_samp_fields"')
      return reactions_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const reactions_variance_fields_possibleTypes: string[] = ['reactions_variance_fields']
    export const isreactions_variance_fields = (obj?: { __typename?: any } | null): obj is reactions_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isreactions_variance_fields"')
      return reactions_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sessions_possibleTypes: string[] = ['sessions']
    export const issessions = (obj?: { __typename?: any } | null): obj is sessions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issessions"')
      return sessions_possibleTypes.includes(obj.__typename)
    }
    


    const sessions_aggregate_possibleTypes: string[] = ['sessions_aggregate']
    export const issessions_aggregate = (obj?: { __typename?: any } | null): obj is sessions_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issessions_aggregate"')
      return sessions_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const sessions_aggregate_fields_possibleTypes: string[] = ['sessions_aggregate_fields']
    export const issessions_aggregate_fields = (obj?: { __typename?: any } | null): obj is sessions_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issessions_aggregate_fields"')
      return sessions_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sessions_max_fields_possibleTypes: string[] = ['sessions_max_fields']
    export const issessions_max_fields = (obj?: { __typename?: any } | null): obj is sessions_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issessions_max_fields"')
      return sessions_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sessions_min_fields_possibleTypes: string[] = ['sessions_min_fields']
    export const issessions_min_fields = (obj?: { __typename?: any } | null): obj is sessions_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issessions_min_fields"')
      return sessions_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sessions_mutation_response_possibleTypes: string[] = ['sessions_mutation_response']
    export const issessions_mutation_response = (obj?: { __typename?: any } | null): obj is sessions_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issessions_mutation_response"')
      return sessions_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    


    const takes_possibleTypes: string[] = ['takes']
    export const istakes = (obj?: { __typename?: any } | null): obj is takes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes"')
      return takes_possibleTypes.includes(obj.__typename)
    }
    


    const takes_aggregate_possibleTypes: string[] = ['takes_aggregate']
    export const istakes_aggregate = (obj?: { __typename?: any } | null): obj is takes_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_aggregate"')
      return takes_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const takes_aggregate_fields_possibleTypes: string[] = ['takes_aggregate_fields']
    export const istakes_aggregate_fields = (obj?: { __typename?: any } | null): obj is takes_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_aggregate_fields"')
      return takes_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_avg_fields_possibleTypes: string[] = ['takes_avg_fields']
    export const istakes_avg_fields = (obj?: { __typename?: any } | null): obj is takes_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_avg_fields"')
      return takes_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_max_fields_possibleTypes: string[] = ['takes_max_fields']
    export const istakes_max_fields = (obj?: { __typename?: any } | null): obj is takes_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_max_fields"')
      return takes_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_min_fields_possibleTypes: string[] = ['takes_min_fields']
    export const istakes_min_fields = (obj?: { __typename?: any } | null): obj is takes_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_min_fields"')
      return takes_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_mutation_response_possibleTypes: string[] = ['takes_mutation_response']
    export const istakes_mutation_response = (obj?: { __typename?: any } | null): obj is takes_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_mutation_response"')
      return takes_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const takes_stddev_fields_possibleTypes: string[] = ['takes_stddev_fields']
    export const istakes_stddev_fields = (obj?: { __typename?: any } | null): obj is takes_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_stddev_fields"')
      return takes_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_stddev_pop_fields_possibleTypes: string[] = ['takes_stddev_pop_fields']
    export const istakes_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is takes_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_stddev_pop_fields"')
      return takes_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_stddev_samp_fields_possibleTypes: string[] = ['takes_stddev_samp_fields']
    export const istakes_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is takes_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_stddev_samp_fields"')
      return takes_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_sum_fields_possibleTypes: string[] = ['takes_sum_fields']
    export const istakes_sum_fields = (obj?: { __typename?: any } | null): obj is takes_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_sum_fields"')
      return takes_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_var_pop_fields_possibleTypes: string[] = ['takes_var_pop_fields']
    export const istakes_var_pop_fields = (obj?: { __typename?: any } | null): obj is takes_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_var_pop_fields"')
      return takes_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_var_samp_fields_possibleTypes: string[] = ['takes_var_samp_fields']
    export const istakes_var_samp_fields = (obj?: { __typename?: any } | null): obj is takes_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_var_samp_fields"')
      return takes_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const takes_variance_fields_possibleTypes: string[] = ['takes_variance_fields']
    export const istakes_variance_fields = (obj?: { __typename?: any } | null): obj is takes_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istakes_variance_fields"')
      return takes_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_possibleTypes: string[] = ['token_acct_balances']
    export const istoken_acct_balances = (obj?: { __typename?: any } | null): obj is token_acct_balances => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances"')
      return token_acct_balances_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_aggregate_possibleTypes: string[] = ['token_acct_balances_aggregate']
    export const istoken_acct_balances_aggregate = (obj?: { __typename?: any } | null): obj is token_acct_balances_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_aggregate"')
      return token_acct_balances_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_aggregate_fields_possibleTypes: string[] = ['token_acct_balances_aggregate_fields']
    export const istoken_acct_balances_aggregate_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_aggregate_fields"')
      return token_acct_balances_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_avg_fields_possibleTypes: string[] = ['token_acct_balances_avg_fields']
    export const istoken_acct_balances_avg_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_avg_fields"')
      return token_acct_balances_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_max_fields_possibleTypes: string[] = ['token_acct_balances_max_fields']
    export const istoken_acct_balances_max_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_max_fields"')
      return token_acct_balances_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_min_fields_possibleTypes: string[] = ['token_acct_balances_min_fields']
    export const istoken_acct_balances_min_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_min_fields"')
      return token_acct_balances_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_mutation_response_possibleTypes: string[] = ['token_acct_balances_mutation_response']
    export const istoken_acct_balances_mutation_response = (obj?: { __typename?: any } | null): obj is token_acct_balances_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_mutation_response"')
      return token_acct_balances_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_stddev_fields_possibleTypes: string[] = ['token_acct_balances_stddev_fields']
    export const istoken_acct_balances_stddev_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_stddev_fields"')
      return token_acct_balances_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_stddev_pop_fields_possibleTypes: string[] = ['token_acct_balances_stddev_pop_fields']
    export const istoken_acct_balances_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_stddev_pop_fields"')
      return token_acct_balances_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_stddev_samp_fields_possibleTypes: string[] = ['token_acct_balances_stddev_samp_fields']
    export const istoken_acct_balances_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_stddev_samp_fields"')
      return token_acct_balances_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_sum_fields_possibleTypes: string[] = ['token_acct_balances_sum_fields']
    export const istoken_acct_balances_sum_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_sum_fields"')
      return token_acct_balances_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_var_pop_fields_possibleTypes: string[] = ['token_acct_balances_var_pop_fields']
    export const istoken_acct_balances_var_pop_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_var_pop_fields"')
      return token_acct_balances_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_var_samp_fields_possibleTypes: string[] = ['token_acct_balances_var_samp_fields']
    export const istoken_acct_balances_var_samp_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_var_samp_fields"')
      return token_acct_balances_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_acct_balances_variance_fields_possibleTypes: string[] = ['token_acct_balances_variance_fields']
    export const istoken_acct_balances_variance_fields = (obj?: { __typename?: any } | null): obj is token_acct_balances_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_acct_balances_variance_fields"')
      return token_acct_balances_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_possibleTypes: string[] = ['token_accts']
    export const istoken_accts = (obj?: { __typename?: any } | null): obj is token_accts => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts"')
      return token_accts_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_aggregate_possibleTypes: string[] = ['token_accts_aggregate']
    export const istoken_accts_aggregate = (obj?: { __typename?: any } | null): obj is token_accts_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_aggregate"')
      return token_accts_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_aggregate_fields_possibleTypes: string[] = ['token_accts_aggregate_fields']
    export const istoken_accts_aggregate_fields = (obj?: { __typename?: any } | null): obj is token_accts_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_aggregate_fields"')
      return token_accts_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_avg_fields_possibleTypes: string[] = ['token_accts_avg_fields']
    export const istoken_accts_avg_fields = (obj?: { __typename?: any } | null): obj is token_accts_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_avg_fields"')
      return token_accts_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_max_fields_possibleTypes: string[] = ['token_accts_max_fields']
    export const istoken_accts_max_fields = (obj?: { __typename?: any } | null): obj is token_accts_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_max_fields"')
      return token_accts_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_min_fields_possibleTypes: string[] = ['token_accts_min_fields']
    export const istoken_accts_min_fields = (obj?: { __typename?: any } | null): obj is token_accts_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_min_fields"')
      return token_accts_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_mutation_response_possibleTypes: string[] = ['token_accts_mutation_response']
    export const istoken_accts_mutation_response = (obj?: { __typename?: any } | null): obj is token_accts_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_mutation_response"')
      return token_accts_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_stddev_fields_possibleTypes: string[] = ['token_accts_stddev_fields']
    export const istoken_accts_stddev_fields = (obj?: { __typename?: any } | null): obj is token_accts_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_stddev_fields"')
      return token_accts_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_stddev_pop_fields_possibleTypes: string[] = ['token_accts_stddev_pop_fields']
    export const istoken_accts_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is token_accts_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_stddev_pop_fields"')
      return token_accts_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_stddev_samp_fields_possibleTypes: string[] = ['token_accts_stddev_samp_fields']
    export const istoken_accts_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is token_accts_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_stddev_samp_fields"')
      return token_accts_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_sum_fields_possibleTypes: string[] = ['token_accts_sum_fields']
    export const istoken_accts_sum_fields = (obj?: { __typename?: any } | null): obj is token_accts_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_sum_fields"')
      return token_accts_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_var_pop_fields_possibleTypes: string[] = ['token_accts_var_pop_fields']
    export const istoken_accts_var_pop_fields = (obj?: { __typename?: any } | null): obj is token_accts_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_var_pop_fields"')
      return token_accts_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_var_samp_fields_possibleTypes: string[] = ['token_accts_var_samp_fields']
    export const istoken_accts_var_samp_fields = (obj?: { __typename?: any } | null): obj is token_accts_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_var_samp_fields"')
      return token_accts_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const token_accts_variance_fields_possibleTypes: string[] = ['token_accts_variance_fields']
    export const istoken_accts_variance_fields = (obj?: { __typename?: any } | null): obj is token_accts_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istoken_accts_variance_fields"')
      return token_accts_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_possibleTypes: string[] = ['tokens']
    export const istokens = (obj?: { __typename?: any } | null): obj is tokens => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens"')
      return tokens_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_aggregate_possibleTypes: string[] = ['tokens_aggregate']
    export const istokens_aggregate = (obj?: { __typename?: any } | null): obj is tokens_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_aggregate"')
      return tokens_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_aggregate_fields_possibleTypes: string[] = ['tokens_aggregate_fields']
    export const istokens_aggregate_fields = (obj?: { __typename?: any } | null): obj is tokens_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_aggregate_fields"')
      return tokens_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_avg_fields_possibleTypes: string[] = ['tokens_avg_fields']
    export const istokens_avg_fields = (obj?: { __typename?: any } | null): obj is tokens_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_avg_fields"')
      return tokens_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_max_fields_possibleTypes: string[] = ['tokens_max_fields']
    export const istokens_max_fields = (obj?: { __typename?: any } | null): obj is tokens_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_max_fields"')
      return tokens_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_min_fields_possibleTypes: string[] = ['tokens_min_fields']
    export const istokens_min_fields = (obj?: { __typename?: any } | null): obj is tokens_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_min_fields"')
      return tokens_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_mutation_response_possibleTypes: string[] = ['tokens_mutation_response']
    export const istokens_mutation_response = (obj?: { __typename?: any } | null): obj is tokens_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_mutation_response"')
      return tokens_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_stddev_fields_possibleTypes: string[] = ['tokens_stddev_fields']
    export const istokens_stddev_fields = (obj?: { __typename?: any } | null): obj is tokens_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_stddev_fields"')
      return tokens_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_stddev_pop_fields_possibleTypes: string[] = ['tokens_stddev_pop_fields']
    export const istokens_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is tokens_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_stddev_pop_fields"')
      return tokens_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_stddev_samp_fields_possibleTypes: string[] = ['tokens_stddev_samp_fields']
    export const istokens_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is tokens_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_stddev_samp_fields"')
      return tokens_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_sum_fields_possibleTypes: string[] = ['tokens_sum_fields']
    export const istokens_sum_fields = (obj?: { __typename?: any } | null): obj is tokens_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_sum_fields"')
      return tokens_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_var_pop_fields_possibleTypes: string[] = ['tokens_var_pop_fields']
    export const istokens_var_pop_fields = (obj?: { __typename?: any } | null): obj is tokens_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_var_pop_fields"')
      return tokens_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_var_samp_fields_possibleTypes: string[] = ['tokens_var_samp_fields']
    export const istokens_var_samp_fields = (obj?: { __typename?: any } | null): obj is tokens_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_var_samp_fields"')
      return tokens_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const tokens_variance_fields_possibleTypes: string[] = ['tokens_variance_fields']
    export const istokens_variance_fields = (obj?: { __typename?: any } | null): obj is tokens_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istokens_variance_fields"')
      return tokens_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_possibleTypes: string[] = ['transaction_watcher_transactions']
    export const istransaction_watcher_transactions = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions"')
      return transaction_watcher_transactions_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_aggregate_possibleTypes: string[] = ['transaction_watcher_transactions_aggregate']
    export const istransaction_watcher_transactions_aggregate = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_aggregate"')
      return transaction_watcher_transactions_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_aggregate_fields_possibleTypes: string[] = ['transaction_watcher_transactions_aggregate_fields']
    export const istransaction_watcher_transactions_aggregate_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_aggregate_fields"')
      return transaction_watcher_transactions_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_avg_fields_possibleTypes: string[] = ['transaction_watcher_transactions_avg_fields']
    export const istransaction_watcher_transactions_avg_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_avg_fields"')
      return transaction_watcher_transactions_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_max_fields_possibleTypes: string[] = ['transaction_watcher_transactions_max_fields']
    export const istransaction_watcher_transactions_max_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_max_fields"')
      return transaction_watcher_transactions_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_min_fields_possibleTypes: string[] = ['transaction_watcher_transactions_min_fields']
    export const istransaction_watcher_transactions_min_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_min_fields"')
      return transaction_watcher_transactions_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_mutation_response_possibleTypes: string[] = ['transaction_watcher_transactions_mutation_response']
    export const istransaction_watcher_transactions_mutation_response = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_mutation_response"')
      return transaction_watcher_transactions_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_stddev_fields_possibleTypes: string[] = ['transaction_watcher_transactions_stddev_fields']
    export const istransaction_watcher_transactions_stddev_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_stddev_fields"')
      return transaction_watcher_transactions_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_stddev_pop_fields_possibleTypes: string[] = ['transaction_watcher_transactions_stddev_pop_fields']
    export const istransaction_watcher_transactions_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_stddev_pop_fields"')
      return transaction_watcher_transactions_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_stddev_samp_fields_possibleTypes: string[] = ['transaction_watcher_transactions_stddev_samp_fields']
    export const istransaction_watcher_transactions_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_stddev_samp_fields"')
      return transaction_watcher_transactions_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_sum_fields_possibleTypes: string[] = ['transaction_watcher_transactions_sum_fields']
    export const istransaction_watcher_transactions_sum_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_sum_fields"')
      return transaction_watcher_transactions_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_var_pop_fields_possibleTypes: string[] = ['transaction_watcher_transactions_var_pop_fields']
    export const istransaction_watcher_transactions_var_pop_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_var_pop_fields"')
      return transaction_watcher_transactions_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_var_samp_fields_possibleTypes: string[] = ['transaction_watcher_transactions_var_samp_fields']
    export const istransaction_watcher_transactions_var_samp_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_var_samp_fields"')
      return transaction_watcher_transactions_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watcher_transactions_variance_fields_possibleTypes: string[] = ['transaction_watcher_transactions_variance_fields']
    export const istransaction_watcher_transactions_variance_fields = (obj?: { __typename?: any } | null): obj is transaction_watcher_transactions_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watcher_transactions_variance_fields"')
      return transaction_watcher_transactions_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_possibleTypes: string[] = ['transaction_watchers']
    export const istransaction_watchers = (obj?: { __typename?: any } | null): obj is transaction_watchers => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers"')
      return transaction_watchers_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_aggregate_possibleTypes: string[] = ['transaction_watchers_aggregate']
    export const istransaction_watchers_aggregate = (obj?: { __typename?: any } | null): obj is transaction_watchers_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_aggregate"')
      return transaction_watchers_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_aggregate_fields_possibleTypes: string[] = ['transaction_watchers_aggregate_fields']
    export const istransaction_watchers_aggregate_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_aggregate_fields"')
      return transaction_watchers_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_avg_fields_possibleTypes: string[] = ['transaction_watchers_avg_fields']
    export const istransaction_watchers_avg_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_avg_fields"')
      return transaction_watchers_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_max_fields_possibleTypes: string[] = ['transaction_watchers_max_fields']
    export const istransaction_watchers_max_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_max_fields"')
      return transaction_watchers_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_min_fields_possibleTypes: string[] = ['transaction_watchers_min_fields']
    export const istransaction_watchers_min_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_min_fields"')
      return transaction_watchers_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_mutation_response_possibleTypes: string[] = ['transaction_watchers_mutation_response']
    export const istransaction_watchers_mutation_response = (obj?: { __typename?: any } | null): obj is transaction_watchers_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_mutation_response"')
      return transaction_watchers_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_stddev_fields_possibleTypes: string[] = ['transaction_watchers_stddev_fields']
    export const istransaction_watchers_stddev_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_stddev_fields"')
      return transaction_watchers_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_stddev_pop_fields_possibleTypes: string[] = ['transaction_watchers_stddev_pop_fields']
    export const istransaction_watchers_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_stddev_pop_fields"')
      return transaction_watchers_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_stddev_samp_fields_possibleTypes: string[] = ['transaction_watchers_stddev_samp_fields']
    export const istransaction_watchers_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_stddev_samp_fields"')
      return transaction_watchers_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_sum_fields_possibleTypes: string[] = ['transaction_watchers_sum_fields']
    export const istransaction_watchers_sum_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_sum_fields"')
      return transaction_watchers_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_var_pop_fields_possibleTypes: string[] = ['transaction_watchers_var_pop_fields']
    export const istransaction_watchers_var_pop_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_var_pop_fields"')
      return transaction_watchers_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_var_samp_fields_possibleTypes: string[] = ['transaction_watchers_var_samp_fields']
    export const istransaction_watchers_var_samp_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_var_samp_fields"')
      return transaction_watchers_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transaction_watchers_variance_fields_possibleTypes: string[] = ['transaction_watchers_variance_fields']
    export const istransaction_watchers_variance_fields = (obj?: { __typename?: any } | null): obj is transaction_watchers_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransaction_watchers_variance_fields"')
      return transaction_watchers_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_possibleTypes: string[] = ['transactions']
    export const istransactions = (obj?: { __typename?: any } | null): obj is transactions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions"')
      return transactions_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_aggregate_possibleTypes: string[] = ['transactions_aggregate']
    export const istransactions_aggregate = (obj?: { __typename?: any } | null): obj is transactions_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_aggregate"')
      return transactions_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_aggregate_fields_possibleTypes: string[] = ['transactions_aggregate_fields']
    export const istransactions_aggregate_fields = (obj?: { __typename?: any } | null): obj is transactions_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_aggregate_fields"')
      return transactions_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_avg_fields_possibleTypes: string[] = ['transactions_avg_fields']
    export const istransactions_avg_fields = (obj?: { __typename?: any } | null): obj is transactions_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_avg_fields"')
      return transactions_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_max_fields_possibleTypes: string[] = ['transactions_max_fields']
    export const istransactions_max_fields = (obj?: { __typename?: any } | null): obj is transactions_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_max_fields"')
      return transactions_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_min_fields_possibleTypes: string[] = ['transactions_min_fields']
    export const istransactions_min_fields = (obj?: { __typename?: any } | null): obj is transactions_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_min_fields"')
      return transactions_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_mutation_response_possibleTypes: string[] = ['transactions_mutation_response']
    export const istransactions_mutation_response = (obj?: { __typename?: any } | null): obj is transactions_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_mutation_response"')
      return transactions_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_stddev_fields_possibleTypes: string[] = ['transactions_stddev_fields']
    export const istransactions_stddev_fields = (obj?: { __typename?: any } | null): obj is transactions_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_stddev_fields"')
      return transactions_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_stddev_pop_fields_possibleTypes: string[] = ['transactions_stddev_pop_fields']
    export const istransactions_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is transactions_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_stddev_pop_fields"')
      return transactions_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_stddev_samp_fields_possibleTypes: string[] = ['transactions_stddev_samp_fields']
    export const istransactions_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is transactions_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_stddev_samp_fields"')
      return transactions_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_sum_fields_possibleTypes: string[] = ['transactions_sum_fields']
    export const istransactions_sum_fields = (obj?: { __typename?: any } | null): obj is transactions_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_sum_fields"')
      return transactions_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_var_pop_fields_possibleTypes: string[] = ['transactions_var_pop_fields']
    export const istransactions_var_pop_fields = (obj?: { __typename?: any } | null): obj is transactions_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_var_pop_fields"')
      return transactions_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_var_samp_fields_possibleTypes: string[] = ['transactions_var_samp_fields']
    export const istransactions_var_samp_fields = (obj?: { __typename?: any } | null): obj is transactions_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_var_samp_fields"')
      return transactions_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const transactions_variance_fields_possibleTypes: string[] = ['transactions_variance_fields']
    export const istransactions_variance_fields = (obj?: { __typename?: any } | null): obj is transactions_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istransactions_variance_fields"')
      return transactions_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_possibleTypes: string[] = ['twap_chart_data']
    export const istwap_chart_data = (obj?: { __typename?: any } | null): obj is twap_chart_data => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data"')
      return twap_chart_data_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_aggregate_possibleTypes: string[] = ['twap_chart_data_aggregate']
    export const istwap_chart_data_aggregate = (obj?: { __typename?: any } | null): obj is twap_chart_data_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_aggregate"')
      return twap_chart_data_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_aggregate_fields_possibleTypes: string[] = ['twap_chart_data_aggregate_fields']
    export const istwap_chart_data_aggregate_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_aggregate_fields"')
      return twap_chart_data_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_avg_fields_possibleTypes: string[] = ['twap_chart_data_avg_fields']
    export const istwap_chart_data_avg_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_avg_fields"')
      return twap_chart_data_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_max_fields_possibleTypes: string[] = ['twap_chart_data_max_fields']
    export const istwap_chart_data_max_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_max_fields"')
      return twap_chart_data_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_min_fields_possibleTypes: string[] = ['twap_chart_data_min_fields']
    export const istwap_chart_data_min_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_min_fields"')
      return twap_chart_data_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_stddev_fields_possibleTypes: string[] = ['twap_chart_data_stddev_fields']
    export const istwap_chart_data_stddev_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_stddev_fields"')
      return twap_chart_data_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_stddev_pop_fields_possibleTypes: string[] = ['twap_chart_data_stddev_pop_fields']
    export const istwap_chart_data_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_stddev_pop_fields"')
      return twap_chart_data_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_stddev_samp_fields_possibleTypes: string[] = ['twap_chart_data_stddev_samp_fields']
    export const istwap_chart_data_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_stddev_samp_fields"')
      return twap_chart_data_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_sum_fields_possibleTypes: string[] = ['twap_chart_data_sum_fields']
    export const istwap_chart_data_sum_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_sum_fields"')
      return twap_chart_data_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_var_pop_fields_possibleTypes: string[] = ['twap_chart_data_var_pop_fields']
    export const istwap_chart_data_var_pop_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_var_pop_fields"')
      return twap_chart_data_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_var_samp_fields_possibleTypes: string[] = ['twap_chart_data_var_samp_fields']
    export const istwap_chart_data_var_samp_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_var_samp_fields"')
      return twap_chart_data_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twap_chart_data_variance_fields_possibleTypes: string[] = ['twap_chart_data_variance_fields']
    export const istwap_chart_data_variance_fields = (obj?: { __typename?: any } | null): obj is twap_chart_data_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwap_chart_data_variance_fields"')
      return twap_chart_data_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_possibleTypes: string[] = ['twaps']
    export const istwaps = (obj?: { __typename?: any } | null): obj is twaps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps"')
      return twaps_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_aggregate_possibleTypes: string[] = ['twaps_aggregate']
    export const istwaps_aggregate = (obj?: { __typename?: any } | null): obj is twaps_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_aggregate"')
      return twaps_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_aggregate_fields_possibleTypes: string[] = ['twaps_aggregate_fields']
    export const istwaps_aggregate_fields = (obj?: { __typename?: any } | null): obj is twaps_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_aggregate_fields"')
      return twaps_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_avg_fields_possibleTypes: string[] = ['twaps_avg_fields']
    export const istwaps_avg_fields = (obj?: { __typename?: any } | null): obj is twaps_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_avg_fields"')
      return twaps_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_max_fields_possibleTypes: string[] = ['twaps_max_fields']
    export const istwaps_max_fields = (obj?: { __typename?: any } | null): obj is twaps_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_max_fields"')
      return twaps_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_min_fields_possibleTypes: string[] = ['twaps_min_fields']
    export const istwaps_min_fields = (obj?: { __typename?: any } | null): obj is twaps_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_min_fields"')
      return twaps_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_mutation_response_possibleTypes: string[] = ['twaps_mutation_response']
    export const istwaps_mutation_response = (obj?: { __typename?: any } | null): obj is twaps_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_mutation_response"')
      return twaps_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_stddev_fields_possibleTypes: string[] = ['twaps_stddev_fields']
    export const istwaps_stddev_fields = (obj?: { __typename?: any } | null): obj is twaps_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_stddev_fields"')
      return twaps_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_stddev_pop_fields_possibleTypes: string[] = ['twaps_stddev_pop_fields']
    export const istwaps_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is twaps_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_stddev_pop_fields"')
      return twaps_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_stddev_samp_fields_possibleTypes: string[] = ['twaps_stddev_samp_fields']
    export const istwaps_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is twaps_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_stddev_samp_fields"')
      return twaps_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_sum_fields_possibleTypes: string[] = ['twaps_sum_fields']
    export const istwaps_sum_fields = (obj?: { __typename?: any } | null): obj is twaps_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_sum_fields"')
      return twaps_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_var_pop_fields_possibleTypes: string[] = ['twaps_var_pop_fields']
    export const istwaps_var_pop_fields = (obj?: { __typename?: any } | null): obj is twaps_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_var_pop_fields"')
      return twaps_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_var_samp_fields_possibleTypes: string[] = ['twaps_var_samp_fields']
    export const istwaps_var_samp_fields = (obj?: { __typename?: any } | null): obj is twaps_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_var_samp_fields"')
      return twaps_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const twaps_variance_fields_possibleTypes: string[] = ['twaps_variance_fields']
    export const istwaps_variance_fields = (obj?: { __typename?: any } | null): obj is twaps_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "istwaps_variance_fields"')
      return twaps_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const users_possibleTypes: string[] = ['users']
    export const isusers = (obj?: { __typename?: any } | null): obj is users => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers"')
      return users_possibleTypes.includes(obj.__typename)
    }
    


    const users_aggregate_possibleTypes: string[] = ['users_aggregate']
    export const isusers_aggregate = (obj?: { __typename?: any } | null): obj is users_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_aggregate"')
      return users_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const users_aggregate_fields_possibleTypes: string[] = ['users_aggregate_fields']
    export const isusers_aggregate_fields = (obj?: { __typename?: any } | null): obj is users_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_aggregate_fields"')
      return users_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const users_max_fields_possibleTypes: string[] = ['users_max_fields']
    export const isusers_max_fields = (obj?: { __typename?: any } | null): obj is users_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_max_fields"')
      return users_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const users_min_fields_possibleTypes: string[] = ['users_min_fields']
    export const isusers_min_fields = (obj?: { __typename?: any } | null): obj is users_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_min_fields"')
      return users_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const users_mutation_response_possibleTypes: string[] = ['users_mutation_response']
    export const isusers_mutation_response = (obj?: { __typename?: any } | null): obj is users_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isusers_mutation_response"')
      return users_mutation_response_possibleTypes.includes(obj.__typename)
    }
    

export const enumCandlesConstraint = {
   candles_market_acct_candle_duration_timestamp_pk: 'candles_market_acct_candle_duration_timestamp_pk' as const
}

export const enumCandlesSelectColumn = {
   candle_average: 'candle_average' as const,
   candle_duration: 'candle_duration' as const,
   close: 'close' as const,
   cond_market_twap: 'cond_market_twap' as const,
   high: 'high' as const,
   low: 'low' as const,
   market_acct: 'market_acct' as const,
   open: 'open' as const,
   timestamp: 'timestamp' as const,
   volume: 'volume' as const
}

export const enumCandlesUpdateColumn = {
   candle_average: 'candle_average' as const,
   candle_duration: 'candle_duration' as const,
   close: 'close' as const,
   cond_market_twap: 'cond_market_twap' as const,
   high: 'high' as const,
   low: 'low' as const,
   market_acct: 'market_acct' as const,
   open: 'open' as const,
   timestamp: 'timestamp' as const,
   volume: 'volume' as const
}

export const enumCommentsConstraint = {
   comments_comment_id_unique: 'comments_comment_id_unique' as const
}

export const enumCommentsSelectColumn = {
   comment_id: 'comment_id' as const,
   commentor_acct: 'commentor_acct' as const,
   content: 'content' as const,
   created_at: 'created_at' as const,
   proposal_acct: 'proposal_acct' as const,
   responding_comment_id: 'responding_comment_id' as const
}

export const enumCommentsUpdateColumn = {
   comment_id: 'comment_id' as const,
   commentor_acct: 'commentor_acct' as const,
   content: 'content' as const,
   created_at: 'created_at' as const,
   proposal_acct: 'proposal_acct' as const,
   responding_comment_id: 'responding_comment_id' as const
}

export const enumConditionalVaultsConstraint = {
   conditional_vaults_pkey: 'conditional_vaults_pkey' as const
}

export const enumConditionalVaultsSelectColumn = {
   cond_finalize_token_mint_acct: 'cond_finalize_token_mint_acct' as const,
   cond_revert_token_mint_acct: 'cond_revert_token_mint_acct' as const,
   cond_vault_acct: 'cond_vault_acct' as const,
   nonce: 'nonce' as const,
   settlement_authority: 'settlement_authority' as const,
   status: 'status' as const,
   underlying_mint_acct: 'underlying_mint_acct' as const,
   underlying_token_acct: 'underlying_token_acct' as const
}

export const enumConditionalVaultsUpdateColumn = {
   cond_finalize_token_mint_acct: 'cond_finalize_token_mint_acct' as const,
   cond_revert_token_mint_acct: 'cond_revert_token_mint_acct' as const,
   cond_vault_acct: 'cond_vault_acct' as const,
   nonce: 'nonce' as const,
   settlement_authority: 'settlement_authority' as const,
   status: 'status' as const,
   underlying_mint_acct: 'underlying_mint_acct' as const,
   underlying_token_acct: 'underlying_token_acct' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumDaoDetailsConstraint = {
   dao_details_github_unique: 'dao_details_github_unique' as const,
   dao_details_name_unique: 'dao_details_name_unique' as const,
   dao_details_pkey: 'dao_details_pkey' as const,
   dao_details_slug_unique: 'dao_details_slug_unique' as const,
   dao_details_url_unique: 'dao_details_url_unique' as const,
   dao_details_x_account_unique: 'dao_details_x_account_unique' as const,
   id_name_url: 'id_name_url' as const
}

export const enumDaoDetailsSelectColumn = {
   admin_accts: 'admin_accts' as const,
   creator_acct: 'creator_acct' as const,
   dao_id: 'dao_id' as const,
   description: 'description' as const,
   fail_token_image_url: 'fail_token_image_url' as const,
   github: 'github' as const,
   image_url: 'image_url' as const,
   is_hide: 'is_hide' as const,
   lp_token_image_url: 'lp_token_image_url' as const,
   name: 'name' as const,
   pass_token_image_url: 'pass_token_image_url' as const,
   slug: 'slug' as const,
   token_image_url: 'token_image_url' as const,
   url: 'url' as const,
   x_account: 'x_account' as const
}

export const enumDaoDetailsUpdateColumn = {
   admin_accts: 'admin_accts' as const,
   creator_acct: 'creator_acct' as const,
   dao_id: 'dao_id' as const,
   description: 'description' as const,
   fail_token_image_url: 'fail_token_image_url' as const,
   github: 'github' as const,
   image_url: 'image_url' as const,
   is_hide: 'is_hide' as const,
   lp_token_image_url: 'lp_token_image_url' as const,
   name: 'name' as const,
   pass_token_image_url: 'pass_token_image_url' as const,
   slug: 'slug' as const,
   token_image_url: 'token_image_url' as const,
   url: 'url' as const,
   x_account: 'x_account' as const
}

export const enumDaosConstraint = {
   dao_acct_program: 'dao_acct_program' as const,
   daos_pkey: 'daos_pkey' as const,
   daos_treasury_acct_unique: 'daos_treasury_acct_unique' as const
}

export const enumDaosSelectColumn = {
   base_acct: 'base_acct' as const,
   created_at: 'created_at' as const,
   dao_acct: 'dao_acct' as const,
   dao_id: 'dao_id' as const,
   pass_threshold_bps: 'pass_threshold_bps' as const,
   program_acct: 'program_acct' as const,
   quote_acct: 'quote_acct' as const,
   slots_per_proposal: 'slots_per_proposal' as const,
   treasury_acct: 'treasury_acct' as const,
   updated_at: 'updated_at' as const
}

export const enumDaosUpdateColumn = {
   base_acct: 'base_acct' as const,
   created_at: 'created_at' as const,
   dao_acct: 'dao_acct' as const,
   dao_id: 'dao_id' as const,
   pass_threshold_bps: 'pass_threshold_bps' as const,
   program_acct: 'program_acct' as const,
   quote_acct: 'quote_acct' as const,
   slots_per_proposal: 'slots_per_proposal' as const,
   treasury_acct: 'treasury_acct' as const,
   updated_at: 'updated_at' as const
}

export const enumIndexerAccountDependenciesConstraint = {
   indexer_account_dependencies_name_acct_pk: 'indexer_account_dependencies_name_acct_pk' as const
}

export const enumIndexerAccountDependenciesSelectColumn = {
   acct: 'acct' as const,
   latest_tx_sig_processed: 'latest_tx_sig_processed' as const,
   name: 'name' as const,
   status: 'status' as const,
   updated_at: 'updated_at' as const
}

export const enumIndexerAccountDependenciesUpdateColumn = {
   acct: 'acct' as const,
   latest_tx_sig_processed: 'latest_tx_sig_processed' as const,
   name: 'name' as const,
   status: 'status' as const,
   updated_at: 'updated_at' as const
}

export const enumIndexersConstraint = {
   indexers_pkey: 'indexers_pkey' as const
}

export const enumIndexersSelectColumn = {
   implementation: 'implementation' as const,
   indexer_type: 'indexer_type' as const,
   latest_slot_processed: 'latest_slot_processed' as const,
   name: 'name' as const
}

export const enumIndexersUpdateColumn = {
   implementation: 'implementation' as const,
   indexer_type: 'indexer_type' as const,
   latest_slot_processed: 'latest_slot_processed' as const,
   name: 'name' as const
}

export const enumMakesConstraint = {
   makes_pkey: 'makes_pkey' as const
}

export const enumMakesSelectColumn = {
   filled_base_amount: 'filled_base_amount' as const,
   is_active: 'is_active' as const,
   market_acct: 'market_acct' as const,
   order_tx_sig: 'order_tx_sig' as const,
   quote_price: 'quote_price' as const,
   unfilled_base_amount: 'unfilled_base_amount' as const,
   updated_at: 'updated_at' as const
}

export const enumMakesSelectColumnMakesAggregateBoolExpBoolAndArgumentsColumns = {
   is_active: 'is_active' as const
}

export const enumMakesSelectColumnMakesAggregateBoolExpBoolOrArgumentsColumns = {
   is_active: 'is_active' as const
}

export const enumMakesUpdateColumn = {
   filled_base_amount: 'filled_base_amount' as const,
   is_active: 'is_active' as const,
   market_acct: 'market_acct' as const,
   order_tx_sig: 'order_tx_sig' as const,
   quote_price: 'quote_price' as const,
   unfilled_base_amount: 'unfilled_base_amount' as const,
   updated_at: 'updated_at' as const
}

export const enumMarketsConstraint = {
   markets_pkey: 'markets_pkey' as const
}

export const enumMarketsSelectColumn = {
   active_slot: 'active_slot' as const,
   asks_token_acct: 'asks_token_acct' as const,
   base_lot_size: 'base_lot_size' as const,
   base_maker_fee: 'base_maker_fee' as const,
   base_mint_acct: 'base_mint_acct' as const,
   base_taker_fee: 'base_taker_fee' as const,
   bids_token_acct: 'bids_token_acct' as const,
   create_tx_sig: 'create_tx_sig' as const,
   created_at: 'created_at' as const,
   inactive_slot: 'inactive_slot' as const,
   market_acct: 'market_acct' as const,
   market_type: 'market_type' as const,
   proposal_acct: 'proposal_acct' as const,
   quote_lot_size: 'quote_lot_size' as const,
   quote_maker_fee: 'quote_maker_fee' as const,
   quote_mint_acct: 'quote_mint_acct' as const,
   quote_taker_fee: 'quote_taker_fee' as const,
   quote_tick_size: 'quote_tick_size' as const
}

export const enumMarketsUpdateColumn = {
   active_slot: 'active_slot' as const,
   asks_token_acct: 'asks_token_acct' as const,
   base_lot_size: 'base_lot_size' as const,
   base_maker_fee: 'base_maker_fee' as const,
   base_mint_acct: 'base_mint_acct' as const,
   base_taker_fee: 'base_taker_fee' as const,
   bids_token_acct: 'bids_token_acct' as const,
   create_tx_sig: 'create_tx_sig' as const,
   created_at: 'created_at' as const,
   inactive_slot: 'inactive_slot' as const,
   market_acct: 'market_acct' as const,
   market_type: 'market_type' as const,
   proposal_acct: 'proposal_acct' as const,
   quote_lot_size: 'quote_lot_size' as const,
   quote_maker_fee: 'quote_maker_fee' as const,
   quote_mint_acct: 'quote_mint_acct' as const,
   quote_taker_fee: 'quote_taker_fee' as const,
   quote_tick_size: 'quote_tick_size' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumOrdersConstraint = {
   orders_pkey: 'orders_pkey' as const
}

export const enumOrdersSelectColumn = {
   actor_acct: 'actor_acct' as const,
   cancel_block: 'cancel_block' as const,
   cancel_time: 'cancel_time' as const,
   cancel_tx_sig: 'cancel_tx_sig' as const,
   filled_base_amount: 'filled_base_amount' as const,
   is_active: 'is_active' as const,
   market_acct: 'market_acct' as const,
   order_block: 'order_block' as const,
   order_time: 'order_time' as const,
   order_tx_sig: 'order_tx_sig' as const,
   quote_price: 'quote_price' as const,
   side: 'side' as const,
   unfilled_base_amount: 'unfilled_base_amount' as const,
   updated_at: 'updated_at' as const
}

export const enumOrdersSelectColumnOrdersAggregateBoolExpBoolAndArgumentsColumns = {
   is_active: 'is_active' as const
}

export const enumOrdersSelectColumnOrdersAggregateBoolExpBoolOrArgumentsColumns = {
   is_active: 'is_active' as const
}

export const enumOrdersUpdateColumn = {
   actor_acct: 'actor_acct' as const,
   cancel_block: 'cancel_block' as const,
   cancel_time: 'cancel_time' as const,
   cancel_tx_sig: 'cancel_tx_sig' as const,
   filled_base_amount: 'filled_base_amount' as const,
   is_active: 'is_active' as const,
   market_acct: 'market_acct' as const,
   order_block: 'order_block' as const,
   order_time: 'order_time' as const,
   order_tx_sig: 'order_tx_sig' as const,
   quote_price: 'quote_price' as const,
   side: 'side' as const,
   unfilled_base_amount: 'unfilled_base_amount' as const,
   updated_at: 'updated_at' as const
}

export const enumPricesChartDataSelectColumn = {
   base_amount: 'base_amount' as const,
   interv: 'interv' as const,
   market_acct: 'market_acct' as const,
   price: 'price' as const,
   prices_type: 'prices_type' as const,
   quote_amount: 'quote_amount' as const
}

export const enumPricesConstraint = {
   prices_created_at_market_acct_pk: 'prices_created_at_market_acct_pk' as const
}

export const enumPricesSelectColumn = {
   base_amount: 'base_amount' as const,
   created_at: 'created_at' as const,
   created_by: 'created_by' as const,
   market_acct: 'market_acct' as const,
   price: 'price' as const,
   prices_type: 'prices_type' as const,
   quote_amount: 'quote_amount' as const,
   updated_slot: 'updated_slot' as const
}

export const enumPricesUpdateColumn = {
   base_amount: 'base_amount' as const,
   created_at: 'created_at' as const,
   created_by: 'created_by' as const,
   market_acct: 'market_acct' as const,
   price: 'price' as const,
   prices_type: 'prices_type' as const,
   quote_amount: 'quote_amount' as const,
   updated_slot: 'updated_slot' as const
}

export const enumProgramSystemConstraint = {
   program_system_pkey: 'program_system_pkey' as const
}

export const enumProgramSystemSelectColumn = {
   autocrat_acct: 'autocrat_acct' as const,
   conditional_vault_acct: 'conditional_vault_acct' as const,
   migrator_acct: 'migrator_acct' as const,
   pricing_model_acct: 'pricing_model_acct' as const,
   system_version: 'system_version' as const
}

export const enumProgramSystemSelectColumnProgramSystemAggregateBoolExpAvgArgumentsColumns = {
   system_version: 'system_version' as const
}

export const enumProgramSystemSelectColumnProgramSystemAggregateBoolExpCorrArgumentsColumns = {
   system_version: 'system_version' as const
}

export const enumProgramSystemSelectColumnProgramSystemAggregateBoolExpCovarSampArgumentsColumns = {
   system_version: 'system_version' as const
}

export const enumProgramSystemSelectColumnProgramSystemAggregateBoolExpMaxArgumentsColumns = {
   system_version: 'system_version' as const
}

export const enumProgramSystemSelectColumnProgramSystemAggregateBoolExpMinArgumentsColumns = {
   system_version: 'system_version' as const
}

export const enumProgramSystemSelectColumnProgramSystemAggregateBoolExpStddevSampArgumentsColumns = {
   system_version: 'system_version' as const
}

export const enumProgramSystemSelectColumnProgramSystemAggregateBoolExpSumArgumentsColumns = {
   system_version: 'system_version' as const
}

export const enumProgramSystemSelectColumnProgramSystemAggregateBoolExpVarSampArgumentsColumns = {
   system_version: 'system_version' as const
}

export const enumProgramSystemUpdateColumn = {
   autocrat_acct: 'autocrat_acct' as const,
   conditional_vault_acct: 'conditional_vault_acct' as const,
   migrator_acct: 'migrator_acct' as const,
   pricing_model_acct: 'pricing_model_acct' as const,
   system_version: 'system_version' as const
}

export const enumProgramsConstraint = {
   program_version: 'program_version' as const,
   programs_pkey: 'programs_pkey' as const
}

export const enumProgramsSelectColumn = {
   created_at: 'created_at' as const,
   deployed_at: 'deployed_at' as const,
   program_acct: 'program_acct' as const,
   program_name: 'program_name' as const,
   version: 'version' as const
}

export const enumProgramsUpdateColumn = {
   created_at: 'created_at' as const,
   deployed_at: 'deployed_at' as const,
   program_acct: 'program_acct' as const,
   program_name: 'program_name' as const,
   version: 'version' as const
}

export const enumProposalBarsConstraint = {
   proposal_bars_pkey: 'proposal_bars_pkey' as const
}

export const enumProposalBarsSelectColumn = {
   bar_size: 'bar_size' as const,
   bar_start_time: 'bar_start_time' as const,
   fail_base_amount: 'fail_base_amount' as const,
   fail_market_acct: 'fail_market_acct' as const,
   fail_price: 'fail_price' as const,
   fail_quote_amount: 'fail_quote_amount' as const,
   pass_base_amount: 'pass_base_amount' as const,
   pass_market_acct: 'pass_market_acct' as const,
   pass_price: 'pass_price' as const,
   pass_quote_amount: 'pass_quote_amount' as const,
   proposal_acct: 'proposal_acct' as const
}

export const enumProposalBarsUpdateColumn = {
   bar_size: 'bar_size' as const,
   bar_start_time: 'bar_start_time' as const,
   fail_base_amount: 'fail_base_amount' as const,
   fail_market_acct: 'fail_market_acct' as const,
   fail_price: 'fail_price' as const,
   fail_quote_amount: 'fail_quote_amount' as const,
   pass_base_amount: 'pass_base_amount' as const,
   pass_market_acct: 'pass_market_acct' as const,
   pass_price: 'pass_price' as const,
   pass_quote_amount: 'pass_quote_amount' as const,
   proposal_acct: 'proposal_acct' as const
}

export const enumProposalDetailsConstraint = {
   proposal_details_pkey: 'proposal_details_pkey' as const,
   proposal_details_slug_unique: 'proposal_details_slug_unique' as const
}

export const enumProposalDetailsSelectColumn = {
   base_cond_vault_acct: 'base_cond_vault_acct' as const,
   categories: 'categories' as const,
   content: 'content' as const,
   description: 'description' as const,
   fail_market_acct: 'fail_market_acct' as const,
   pass_market_acct: 'pass_market_acct' as const,
   proposal_acct: 'proposal_acct' as const,
   proposal_id: 'proposal_id' as const,
   proposer_acct: 'proposer_acct' as const,
   quote_cond_vault_acct: 'quote_cond_vault_acct' as const,
   slug: 'slug' as const,
   title: 'title' as const
}

export const enumProposalDetailsUpdateColumn = {
   base_cond_vault_acct: 'base_cond_vault_acct' as const,
   categories: 'categories' as const,
   content: 'content' as const,
   description: 'description' as const,
   fail_market_acct: 'fail_market_acct' as const,
   pass_market_acct: 'pass_market_acct' as const,
   proposal_acct: 'proposal_acct' as const,
   proposal_id: 'proposal_id' as const,
   proposer_acct: 'proposer_acct' as const,
   quote_cond_vault_acct: 'quote_cond_vault_acct' as const,
   slug: 'slug' as const,
   title: 'title' as const
}

export const enumProposalTotalTradeVolumeSelectColumn = {
   fail_market_acct: 'fail_market_acct' as const,
   fail_volume: 'fail_volume' as const,
   pass_market_acct: 'pass_market_acct' as const,
   pass_volume: 'pass_volume' as const,
   proposal_acct: 'proposal_acct' as const
}

export const enumProposalsConstraint = {
   proposals_pkey: 'proposals_pkey' as const
}

export const enumProposalsSelectColumn = {
   autocrat_version: 'autocrat_version' as const,
   base_vault: 'base_vault' as const,
   completed_at: 'completed_at' as const,
   created_at: 'created_at' as const,
   dao_acct: 'dao_acct' as const,
   description_url: 'description_url' as const,
   end_slot: 'end_slot' as const,
   ended_at: 'ended_at' as const,
   fail_market_acct: 'fail_market_acct' as const,
   initial_slot: 'initial_slot' as const,
   pass_market_acct: 'pass_market_acct' as const,
   pricing_model_fail_acct: 'pricing_model_fail_acct' as const,
   pricing_model_pass_acct: 'pricing_model_pass_acct' as const,
   proposal_acct: 'proposal_acct' as const,
   proposal_num: 'proposal_num' as const,
   proposer_acct: 'proposer_acct' as const,
   quote_vault: 'quote_vault' as const,
   status: 'status' as const,
   updated_at: 'updated_at' as const
}

export const enumProposalsSelectColumnProposalsAggregateBoolExpAvgArgumentsColumns = {
   autocrat_version: 'autocrat_version' as const
}

export const enumProposalsSelectColumnProposalsAggregateBoolExpCorrArgumentsColumns = {
   autocrat_version: 'autocrat_version' as const
}

export const enumProposalsSelectColumnProposalsAggregateBoolExpCovarSampArgumentsColumns = {
   autocrat_version: 'autocrat_version' as const
}

export const enumProposalsSelectColumnProposalsAggregateBoolExpMaxArgumentsColumns = {
   autocrat_version: 'autocrat_version' as const
}

export const enumProposalsSelectColumnProposalsAggregateBoolExpMinArgumentsColumns = {
   autocrat_version: 'autocrat_version' as const
}

export const enumProposalsSelectColumnProposalsAggregateBoolExpStddevSampArgumentsColumns = {
   autocrat_version: 'autocrat_version' as const
}

export const enumProposalsSelectColumnProposalsAggregateBoolExpSumArgumentsColumns = {
   autocrat_version: 'autocrat_version' as const
}

export const enumProposalsSelectColumnProposalsAggregateBoolExpVarSampArgumentsColumns = {
   autocrat_version: 'autocrat_version' as const
}

export const enumProposalsUpdateColumn = {
   autocrat_version: 'autocrat_version' as const,
   base_vault: 'base_vault' as const,
   completed_at: 'completed_at' as const,
   created_at: 'created_at' as const,
   dao_acct: 'dao_acct' as const,
   description_url: 'description_url' as const,
   end_slot: 'end_slot' as const,
   ended_at: 'ended_at' as const,
   fail_market_acct: 'fail_market_acct' as const,
   initial_slot: 'initial_slot' as const,
   pass_market_acct: 'pass_market_acct' as const,
   pricing_model_fail_acct: 'pricing_model_fail_acct' as const,
   pricing_model_pass_acct: 'pricing_model_pass_acct' as const,
   proposal_acct: 'proposal_acct' as const,
   proposal_num: 'proposal_num' as const,
   proposer_acct: 'proposer_acct' as const,
   quote_vault: 'quote_vault' as const,
   status: 'status' as const,
   updated_at: 'updated_at' as const
}

export const enumReactionsConstraint = {
   reactions_proposal_acct_reaction_reactor_acct_pk: 'reactions_proposal_acct_reaction_reactor_acct_pk' as const
}

export const enumReactionsSelectColumn = {
   comment_id: 'comment_id' as const,
   proposal_acct: 'proposal_acct' as const,
   reaction: 'reaction' as const,
   reactor_acct: 'reactor_acct' as const,
   updated_at: 'updated_at' as const
}

export const enumReactionsUpdateColumn = {
   comment_id: 'comment_id' as const,
   proposal_acct: 'proposal_acct' as const,
   reaction: 'reaction' as const,
   reactor_acct: 'reactor_acct' as const,
   updated_at: 'updated_at' as const
}

export const enumSessionsConstraint = {
   sessions_pkey: 'sessions_pkey' as const
}

export const enumSessionsSelectColumn = {
   created_at: 'created_at' as const,
   expires_at: 'expires_at' as const,
   id: 'id' as const,
   user_acct: 'user_acct' as const
}

export const enumSessionsUpdateColumn = {
   created_at: 'created_at' as const,
   expires_at: 'expires_at' as const,
   id: 'id' as const,
   user_acct: 'user_acct' as const
}

export const enumTakesConstraint = {
   takes_pkey: 'takes_pkey' as const
}

export const enumTakesSelectColumn = {
   base_amount: 'base_amount' as const,
   maker_base_fee: 'maker_base_fee' as const,
   maker_order_tx_sig: 'maker_order_tx_sig' as const,
   maker_quote_fee: 'maker_quote_fee' as const,
   market_acct: 'market_acct' as const,
   order_block: 'order_block' as const,
   order_time: 'order_time' as const,
   order_tx_sig: 'order_tx_sig' as const,
   quote_price: 'quote_price' as const,
   taker_base_fee: 'taker_base_fee' as const,
   taker_quote_fee: 'taker_quote_fee' as const
}

export const enumTakesUpdateColumn = {
   base_amount: 'base_amount' as const,
   maker_base_fee: 'maker_base_fee' as const,
   maker_order_tx_sig: 'maker_order_tx_sig' as const,
   maker_quote_fee: 'maker_quote_fee' as const,
   market_acct: 'market_acct' as const,
   order_block: 'order_block' as const,
   order_time: 'order_time' as const,
   order_tx_sig: 'order_tx_sig' as const,
   quote_price: 'quote_price' as const,
   taker_base_fee: 'taker_base_fee' as const,
   taker_quote_fee: 'taker_quote_fee' as const
}

export const enumTokenAcctBalancesConstraint = {
   token_acct_balances_token_acct_mint_acct_amount_created_at_pk: 'token_acct_balances_token_acct_mint_acct_amount_created_at_pk' as const
}

export const enumTokenAcctBalancesSelectColumn = {
   amount: 'amount' as const,
   created_at: 'created_at' as const,
   delta: 'delta' as const,
   mint_acct: 'mint_acct' as const,
   owner_acct: 'owner_acct' as const,
   slot: 'slot' as const,
   token_acct: 'token_acct' as const,
   tx_sig: 'tx_sig' as const
}

export const enumTokenAcctBalancesUpdateColumn = {
   amount: 'amount' as const,
   created_at: 'created_at' as const,
   delta: 'delta' as const,
   mint_acct: 'mint_acct' as const,
   owner_acct: 'owner_acct' as const,
   slot: 'slot' as const,
   token_acct: 'token_acct' as const,
   tx_sig: 'tx_sig' as const
}

export const enumTokenAcctsConstraint = {
   token_accts_pkey: 'token_accts_pkey' as const
}

export const enumTokenAcctsSelectColumn = {
   amount: 'amount' as const,
   mint_acct: 'mint_acct' as const,
   owner_acct: 'owner_acct' as const,
   status: 'status' as const,
   token_acct: 'token_acct' as const,
   updated_at: 'updated_at' as const
}

export const enumTokenAcctsUpdateColumn = {
   amount: 'amount' as const,
   mint_acct: 'mint_acct' as const,
   owner_acct: 'owner_acct' as const,
   status: 'status' as const,
   token_acct: 'token_acct' as const,
   updated_at: 'updated_at' as const
}

export const enumTokensConstraint = {
   tokens_pkey: 'tokens_pkey' as const
}

export const enumTokensSelectColumn = {
   decimals: 'decimals' as const,
   image_url: 'image_url' as const,
   mint_acct: 'mint_acct' as const,
   name: 'name' as const,
   supply: 'supply' as const,
   symbol: 'symbol' as const,
   updated_at: 'updated_at' as const
}

export const enumTokensUpdateColumn = {
   decimals: 'decimals' as const,
   image_url: 'image_url' as const,
   mint_acct: 'mint_acct' as const,
   name: 'name' as const,
   supply: 'supply' as const,
   symbol: 'symbol' as const,
   updated_at: 'updated_at' as const
}

export const enumTransactionWatcherTransactionsConstraint = {
   transaction_watcher_transactions_watcher_acct_tx_sig_pk: 'transaction_watcher_transactions_watcher_acct_tx_sig_pk' as const
}

export const enumTransactionWatcherTransactionsSelectColumn = {
   slot: 'slot' as const,
   tx_sig: 'tx_sig' as const,
   watcher_acct: 'watcher_acct' as const
}

export const enumTransactionWatcherTransactionsUpdateColumn = {
   slot: 'slot' as const,
   tx_sig: 'tx_sig' as const,
   watcher_acct: 'watcher_acct' as const
}

export const enumTransactionWatchersConstraint = {
   transaction_watchers_pkey: 'transaction_watchers_pkey' as const
}

export const enumTransactionWatchersSelectColumn = {
   acct: 'acct' as const,
   checked_up_to_slot: 'checked_up_to_slot' as const,
   description: 'description' as const,
   failure_log: 'failure_log' as const,
   first_tx_sig: 'first_tx_sig' as const,
   latest_tx_sig: 'latest_tx_sig' as const,
   serializer_logic_version: 'serializer_logic_version' as const,
   status: 'status' as const,
   updated_at: 'updated_at' as const
}

export const enumTransactionWatchersUpdateColumn = {
   acct: 'acct' as const,
   checked_up_to_slot: 'checked_up_to_slot' as const,
   description: 'description' as const,
   failure_log: 'failure_log' as const,
   first_tx_sig: 'first_tx_sig' as const,
   latest_tx_sig: 'latest_tx_sig' as const,
   serializer_logic_version: 'serializer_logic_version' as const,
   status: 'status' as const,
   updated_at: 'updated_at' as const
}

export const enumTransactionsConstraint = {
   transactions_pkey: 'transactions_pkey' as const
}

export const enumTransactionsSelectColumn = {
   block_time: 'block_time' as const,
   failed: 'failed' as const,
   main_ix_type: 'main_ix_type' as const,
   payload: 'payload' as const,
   serializer_logic_version: 'serializer_logic_version' as const,
   slot: 'slot' as const,
   tx_sig: 'tx_sig' as const
}

export const enumTransactionsUpdateColumn = {
   block_time: 'block_time' as const,
   failed: 'failed' as const,
   main_ix_type: 'main_ix_type' as const,
   payload: 'payload' as const,
   serializer_logic_version: 'serializer_logic_version' as const,
   slot: 'slot' as const,
   tx_sig: 'tx_sig' as const
}

export const enumTwapChartDataSelectColumn = {
   interv: 'interv' as const,
   market_acct: 'market_acct' as const,
   token_amount: 'token_amount' as const
}

export const enumTwapsConstraint = {
   twaps_updated_slot_market_acct_pk: 'twaps_updated_slot_market_acct_pk' as const
}

export const enumTwapsSelectColumn = {
   created_at: 'created_at' as const,
   last_observation: 'last_observation' as const,
   last_price: 'last_price' as const,
   market_acct: 'market_acct' as const,
   observation_agg: 'observation_agg' as const,
   proposal_acct: 'proposal_acct' as const,
   token_amount: 'token_amount' as const,
   updated_slot: 'updated_slot' as const
}

export const enumTwapsUpdateColumn = {
   created_at: 'created_at' as const,
   last_observation: 'last_observation' as const,
   last_price: 'last_price' as const,
   market_acct: 'market_acct' as const,
   observation_agg: 'observation_agg' as const,
   proposal_acct: 'proposal_acct' as const,
   token_amount: 'token_amount' as const,
   updated_slot: 'updated_slot' as const
}

export const enumUsersConstraint = {
   users_pkey: 'users_pkey' as const
}

export const enumUsersSelectColumn = {
   created_at: 'created_at' as const,
   user_acct: 'user_acct' as const
}

export const enumUsersUpdateColumn = {
   created_at: 'created_at' as const,
   user_acct: 'user_acct' as const
}
