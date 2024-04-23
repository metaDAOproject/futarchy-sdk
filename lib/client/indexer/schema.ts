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
    jsonb: any,
    numeric: any,
    smallint: any,
    timestamp: any,
}


/** columns and relationships of "candles" */
export interface candles {
    candle_average: Scalars['bigint']
    candle_duration: Scalars['Int']
    close: (Scalars['bigint'] | null)
    cond_market_twap: (Scalars['bigint'] | null)
    high: (Scalars['bigint'] | null)
    low: (Scalars['bigint'] | null)
    market_acct: Scalars['String']
    open: (Scalars['bigint'] | null)
    timestamp: Scalars['timestamp']
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
    timestamp: (Scalars['timestamp'] | null)
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
    timestamp: (Scalars['timestamp'] | null)
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


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** columns and relationships of "dao_details" */
export interface dao_details {
    dao_id: Scalars['bigint']
    description: (Scalars['String'] | null)
    github: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
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
export type dao_details_constraint = 'dao_details_github_unique' | 'dao_details_name_unique' | 'dao_details_pkey' | 'dao_details_url_unique' | 'dao_details_x_account_unique' | 'id_name_url'


/** aggregate max on columns */
export interface dao_details_max_fields {
    dao_id: (Scalars['bigint'] | null)
    description: (Scalars['String'] | null)
    github: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    x_account: (Scalars['String'] | null)
    __typename: 'dao_details_max_fields'
}


/** aggregate min on columns */
export interface dao_details_min_fields {
    dao_id: (Scalars['bigint'] | null)
    description: (Scalars['String'] | null)
    github: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
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
export type dao_details_select_column = 'dao_id' | 'description' | 'github' | 'name' | 'url' | 'x_account'


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
export type dao_details_update_column = 'dao_id' | 'description' | 'github' | 'name' | 'url' | 'x_account'


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
    created_at: Scalars['timestamp']
    dao_acct: Scalars['String']
    dao_id: (Scalars['bigint'] | null)
    mint_acct: Scalars['String']
    program_acct: Scalars['String']
    updated_at: Scalars['timestamp']
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
    __typename: 'daos_avg_fields'
}


/** unique or primary key constraints on table "daos" */
export type daos_constraint = 'dao_acct_program' | 'daos_pkey'


/** aggregate max on columns */
export interface daos_max_fields {
    created_at: (Scalars['timestamp'] | null)
    dao_acct: (Scalars['String'] | null)
    dao_id: (Scalars['bigint'] | null)
    mint_acct: (Scalars['String'] | null)
    program_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamp'] | null)
    __typename: 'daos_max_fields'
}


/** aggregate min on columns */
export interface daos_min_fields {
    created_at: (Scalars['timestamp'] | null)
    dao_acct: (Scalars['String'] | null)
    dao_id: (Scalars['bigint'] | null)
    mint_acct: (Scalars['String'] | null)
    program_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamp'] | null)
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
export type daos_select_column = 'created_at' | 'dao_acct' | 'dao_id' | 'mint_acct' | 'program_acct' | 'updated_at'


/** aggregate stddev on columns */
export interface daos_stddev_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'daos_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface daos_stddev_pop_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'daos_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface daos_stddev_samp_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'daos_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface daos_sum_fields {
    dao_id: (Scalars['bigint'] | null)
    __typename: 'daos_sum_fields'
}


/** update columns of table "daos" */
export type daos_update_column = 'created_at' | 'dao_acct' | 'dao_id' | 'mint_acct' | 'program_acct' | 'updated_at'


/** aggregate var_pop on columns */
export interface daos_var_pop_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'daos_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface daos_var_samp_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'daos_var_samp_fields'
}


/** aggregate variance on columns */
export interface daos_variance_fields {
    dao_id: (Scalars['Float'] | null)
    __typename: 'daos_variance_fields'
}


/** columns and relationships of "markets" */
export interface markets {
    active_slot: (Scalars['bigint'] | null)
    asks_token_acct: Scalars['String']
    base_lot_size: Scalars['bigint']
    base_maker_fee: Scalars['smallint']
    base_mint_acct: Scalars['String']
    base_taker_fee: Scalars['smallint']
    bids_token_acct: Scalars['String']
    create_tx_sig: Scalars['String']
    inactive_slot: (Scalars['bigint'] | null)
    market_acct: Scalars['String']
    market_type: Scalars['String']
    proposal_acct: (Scalars['String'] | null)
    quote_lot_size: Scalars['bigint']
    quote_maker_fee: Scalars['smallint']
    quote_mint_acct: Scalars['String']
    quote_taker_fee: Scalars['smallint']
    quote_tick_size: Scalars['bigint']
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
export type markets_select_column = 'active_slot' | 'asks_token_acct' | 'base_lot_size' | 'base_maker_fee' | 'base_mint_acct' | 'base_taker_fee' | 'bids_token_acct' | 'create_tx_sig' | 'inactive_slot' | 'market_acct' | 'market_type' | 'proposal_acct' | 'quote_lot_size' | 'quote_maker_fee' | 'quote_mint_acct' | 'quote_taker_fee' | 'quote_tick_size'


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
export type markets_update_column = 'active_slot' | 'asks_token_acct' | 'base_lot_size' | 'base_maker_fee' | 'base_mint_acct' | 'base_taker_fee' | 'bids_token_acct' | 'create_tx_sig' | 'inactive_slot' | 'market_acct' | 'market_type' | 'proposal_acct' | 'quote_lot_size' | 'quote_maker_fee' | 'quote_mint_acct' | 'quote_taker_fee' | 'quote_tick_size'


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
    /** delete data from the table: "dao_details" */
    delete_dao_details: (dao_details_mutation_response | null)
    /** delete single row from the table: "dao_details" */
    delete_dao_details_by_pk: (dao_details | null)
    /** delete data from the table: "daos" */
    delete_daos: (daos_mutation_response | null)
    /** delete single row from the table: "daos" */
    delete_daos_by_pk: (daos | null)
    /** delete data from the table: "markets" */
    delete_markets: (markets_mutation_response | null)
    /** delete single row from the table: "markets" */
    delete_markets_by_pk: (markets | null)
    /** delete data from the table: "orders" */
    delete_orders: (orders_mutation_response | null)
    /** delete single row from the table: "orders" */
    delete_orders_by_pk: (orders | null)
    /** delete data from the table: "programs" */
    delete_programs: (programs_mutation_response | null)
    /** delete single row from the table: "programs" */
    delete_programs_by_pk: (programs | null)
    /** delete data from the table: "proposal_details" */
    delete_proposal_details: (proposal_details_mutation_response | null)
    /** delete single row from the table: "proposal_details" */
    delete_proposal_details_by_pk: (proposal_details | null)
    /** delete data from the table: "proposals" */
    delete_proposals: (proposals_mutation_response | null)
    /** delete single row from the table: "proposals" */
    delete_proposals_by_pk: (proposals | null)
    /** delete data from the table: "token_accts" */
    delete_token_accts: (token_accts_mutation_response | null)
    /** delete single row from the table: "token_accts" */
    delete_token_accts_by_pk: (token_accts | null)
    /** delete data from the table: "tokens" */
    delete_tokens: (tokens_mutation_response | null)
    /** delete single row from the table: "tokens" */
    delete_tokens_by_pk: (tokens | null)
    /** delete data from the table: "transactions" */
    delete_transactions: (transactions_mutation_response | null)
    /** delete single row from the table: "transactions" */
    delete_transactions_by_pk: (transactions | null)
    /** delete data from the table: "twaps" */
    delete_twaps: (twaps_mutation_response | null)
    /** delete single row from the table: "twaps" */
    delete_twaps_by_pk: (twaps | null)
    /** insert data into the table: "candles" */
    insert_candles: (candles_mutation_response | null)
    /** insert a single row into the table: "candles" */
    insert_candles_one: (candles | null)
    /** insert data into the table: "dao_details" */
    insert_dao_details: (dao_details_mutation_response | null)
    /** insert a single row into the table: "dao_details" */
    insert_dao_details_one: (dao_details | null)
    /** insert data into the table: "daos" */
    insert_daos: (daos_mutation_response | null)
    /** insert a single row into the table: "daos" */
    insert_daos_one: (daos | null)
    /** insert data into the table: "markets" */
    insert_markets: (markets_mutation_response | null)
    /** insert a single row into the table: "markets" */
    insert_markets_one: (markets | null)
    /** insert data into the table: "orders" */
    insert_orders: (orders_mutation_response | null)
    /** insert a single row into the table: "orders" */
    insert_orders_one: (orders | null)
    /** insert data into the table: "programs" */
    insert_programs: (programs_mutation_response | null)
    /** insert a single row into the table: "programs" */
    insert_programs_one: (programs | null)
    /** insert data into the table: "proposal_details" */
    insert_proposal_details: (proposal_details_mutation_response | null)
    /** insert a single row into the table: "proposal_details" */
    insert_proposal_details_one: (proposal_details | null)
    /** insert data into the table: "proposals" */
    insert_proposals: (proposals_mutation_response | null)
    /** insert a single row into the table: "proposals" */
    insert_proposals_one: (proposals | null)
    /** insert data into the table: "token_accts" */
    insert_token_accts: (token_accts_mutation_response | null)
    /** insert a single row into the table: "token_accts" */
    insert_token_accts_one: (token_accts | null)
    /** insert data into the table: "tokens" */
    insert_tokens: (tokens_mutation_response | null)
    /** insert a single row into the table: "tokens" */
    insert_tokens_one: (tokens | null)
    /** insert data into the table: "transactions" */
    insert_transactions: (transactions_mutation_response | null)
    /** insert a single row into the table: "transactions" */
    insert_transactions_one: (transactions | null)
    /** insert data into the table: "twaps" */
    insert_twaps: (twaps_mutation_response | null)
    /** insert a single row into the table: "twaps" */
    insert_twaps_one: (twaps | null)
    /** update data of the table: "candles" */
    update_candles: (candles_mutation_response | null)
    /** update single row of the table: "candles" */
    update_candles_by_pk: (candles | null)
    /** update multiples rows of table: "candles" */
    update_candles_many: ((candles_mutation_response | null)[] | null)
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
    /** update data of the table: "programs" */
    update_programs: (programs_mutation_response | null)
    /** update single row of the table: "programs" */
    update_programs_by_pk: (programs | null)
    /** update multiples rows of table: "programs" */
    update_programs_many: ((programs_mutation_response | null)[] | null)
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
    __typename: 'mutation_root'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** columns and relationships of "orders" */
export interface orders {
    actor_acct: Scalars['String']
    cancel_block: (Scalars['bigint'] | null)
    cancel_time: (Scalars['timestamp'] | null)
    cancel_tx_sig: (Scalars['String'] | null)
    filled_base_amount: Scalars['bigint']
    is_active: Scalars['Boolean']
    market_acct: Scalars['String']
    order_block: Scalars['bigint']
    order_time: Scalars['timestamp']
    order_tx_sig: Scalars['String']
    quote_price: Scalars['bigint']
    side: Scalars['String']
    unfilled_base_amount: Scalars['bigint']
    updated_at: Scalars['timestamp']
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
    cancel_time: (Scalars['timestamp'] | null)
    cancel_tx_sig: (Scalars['String'] | null)
    filled_base_amount: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    order_block: (Scalars['bigint'] | null)
    order_time: (Scalars['timestamp'] | null)
    order_tx_sig: (Scalars['String'] | null)
    quote_price: (Scalars['bigint'] | null)
    side: (Scalars['String'] | null)
    unfilled_base_amount: (Scalars['bigint'] | null)
    updated_at: (Scalars['timestamp'] | null)
    __typename: 'orders_max_fields'
}


/** aggregate min on columns */
export interface orders_min_fields {
    actor_acct: (Scalars['String'] | null)
    cancel_block: (Scalars['bigint'] | null)
    cancel_time: (Scalars['timestamp'] | null)
    cancel_tx_sig: (Scalars['String'] | null)
    filled_base_amount: (Scalars['bigint'] | null)
    market_acct: (Scalars['String'] | null)
    order_block: (Scalars['bigint'] | null)
    order_time: (Scalars['timestamp'] | null)
    order_tx_sig: (Scalars['String'] | null)
    quote_price: (Scalars['bigint'] | null)
    side: (Scalars['String'] | null)
    unfilled_base_amount: (Scalars['bigint'] | null)
    updated_at: (Scalars['timestamp'] | null)
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
    quote_price: (Scalars['bigint'] | null)
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


/** columns and relationships of "programs" */
export interface programs {
    created_at: Scalars['timestamp']
    deployed_at: (Scalars['timestamp'] | null)
    program_acct: Scalars['String']
    program_name: Scalars['String']
    version: Scalars['Int']
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
    created_at: (Scalars['timestamp'] | null)
    deployed_at: (Scalars['timestamp'] | null)
    program_acct: (Scalars['String'] | null)
    program_name: (Scalars['String'] | null)
    version: (Scalars['Int'] | null)
    __typename: 'programs_max_fields'
}


/** aggregate min on columns */
export interface programs_min_fields {
    created_at: (Scalars['timestamp'] | null)
    deployed_at: (Scalars['timestamp'] | null)
    program_acct: (Scalars['String'] | null)
    program_name: (Scalars['String'] | null)
    version: (Scalars['Int'] | null)
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
    version: (Scalars['Int'] | null)
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


/** columns and relationships of "proposal_details" */
export interface proposal_details {
    categories: (Scalars['jsonb'] | null)
    content: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_id: Scalars['bigint']
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
export type proposal_details_constraint = 'proposal_details_pkey'


/** aggregate max on columns */
export interface proposal_details_max_fields {
    content: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_id: (Scalars['bigint'] | null)
    title: (Scalars['String'] | null)
    __typename: 'proposal_details_max_fields'
}


/** aggregate min on columns */
export interface proposal_details_min_fields {
    content: (Scalars['String'] | null)
    description: (Scalars['String'] | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_id: (Scalars['bigint'] | null)
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
export type proposal_details_select_column = 'categories' | 'content' | 'description' | 'proposal_acct' | 'proposal_id' | 'title'


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
export type proposal_details_update_column = 'categories' | 'content' | 'description' | 'proposal_acct' | 'proposal_id' | 'title'


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


/** columns and relationships of "proposals" */
export interface proposals {
    autocrat_version: Scalars['float8']
    dao_acct: Scalars['String']
    description_url: (Scalars['String'] | null)
    initial_slot: Scalars['bigint']
    proposal_acct: Scalars['String']
    proposal_num: Scalars['bigint']
    proposer_acct: Scalars['String']
    status: Scalars['String']
    updated_at: Scalars['timestamp']
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
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_avg_fields'
}


/** unique or primary key constraints on table "proposals" */
export type proposals_constraint = 'proposals_pkey'


/** aggregate max on columns */
export interface proposals_max_fields {
    autocrat_version: (Scalars['float8'] | null)
    dao_acct: (Scalars['String'] | null)
    description_url: (Scalars['String'] | null)
    initial_slot: (Scalars['bigint'] | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_num: (Scalars['bigint'] | null)
    proposer_acct: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    updated_at: (Scalars['timestamp'] | null)
    __typename: 'proposals_max_fields'
}


/** aggregate min on columns */
export interface proposals_min_fields {
    autocrat_version: (Scalars['float8'] | null)
    dao_acct: (Scalars['String'] | null)
    description_url: (Scalars['String'] | null)
    initial_slot: (Scalars['bigint'] | null)
    proposal_acct: (Scalars['String'] | null)
    proposal_num: (Scalars['bigint'] | null)
    proposer_acct: (Scalars['String'] | null)
    status: (Scalars['String'] | null)
    updated_at: (Scalars['timestamp'] | null)
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
export type proposals_select_column = 'autocrat_version' | 'dao_acct' | 'description_url' | 'initial_slot' | 'proposal_acct' | 'proposal_num' | 'proposer_acct' | 'status' | 'updated_at'


/** aggregate stddev on columns */
export interface proposals_stddev_fields {
    autocrat_version: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface proposals_stddev_pop_fields {
    autocrat_version: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface proposals_stddev_samp_fields {
    autocrat_version: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface proposals_sum_fields {
    autocrat_version: (Scalars['float8'] | null)
    initial_slot: (Scalars['bigint'] | null)
    proposal_num: (Scalars['bigint'] | null)
    __typename: 'proposals_sum_fields'
}


/** update columns of table "proposals" */
export type proposals_update_column = 'autocrat_version' | 'dao_acct' | 'description_url' | 'initial_slot' | 'proposal_acct' | 'proposal_num' | 'proposer_acct' | 'status' | 'updated_at'


/** aggregate var_pop on columns */
export interface proposals_var_pop_fields {
    autocrat_version: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface proposals_var_samp_fields {
    autocrat_version: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_var_samp_fields'
}


/** aggregate variance on columns */
export interface proposals_variance_fields {
    autocrat_version: (Scalars['Float'] | null)
    initial_slot: (Scalars['Float'] | null)
    proposal_num: (Scalars['Float'] | null)
    __typename: 'proposals_variance_fields'
}

export interface query_root {
    /** fetch data from the table: "candles" */
    candles: candles[]
    /** fetch aggregated fields from the table: "candles" */
    candles_aggregate: candles_aggregate
    /** fetch data from the table: "candles" using primary key columns */
    candles_by_pk: (candles | null)
    /** fetch data from the table: "dao_details" */
    dao_details: dao_details[]
    /** fetch aggregated fields from the table: "dao_details" */
    dao_details_aggregate: dao_details_aggregate
    /** fetch data from the table: "dao_details" using primary key columns */
    dao_details_by_pk: (dao_details | null)
    /** fetch data from the table: "daos" */
    daos: daos[]
    /** fetch aggregated fields from the table: "daos" */
    daos_aggregate: daos_aggregate
    /** fetch data from the table: "daos" using primary key columns */
    daos_by_pk: (daos | null)
    /** fetch data from the table: "markets" */
    markets: markets[]
    /** fetch aggregated fields from the table: "markets" */
    markets_aggregate: markets_aggregate
    /** fetch data from the table: "markets" using primary key columns */
    markets_by_pk: (markets | null)
    /** fetch data from the table: "orders" */
    orders: orders[]
    /** fetch aggregated fields from the table: "orders" */
    orders_aggregate: orders_aggregate
    /** fetch data from the table: "orders" using primary key columns */
    orders_by_pk: (orders | null)
    /** fetch data from the table: "programs" */
    programs: programs[]
    /** fetch aggregated fields from the table: "programs" */
    programs_aggregate: programs_aggregate
    /** fetch data from the table: "programs" using primary key columns */
    programs_by_pk: (programs | null)
    /** fetch data from the table: "proposal_details" */
    proposal_details: proposal_details[]
    /** fetch aggregated fields from the table: "proposal_details" */
    proposal_details_aggregate: proposal_details_aggregate
    /** fetch data from the table: "proposal_details" using primary key columns */
    proposal_details_by_pk: (proposal_details | null)
    /** fetch data from the table: "proposals" */
    proposals: proposals[]
    /** fetch aggregated fields from the table: "proposals" */
    proposals_aggregate: proposals_aggregate
    /** fetch data from the table: "proposals" using primary key columns */
    proposals_by_pk: (proposals | null)
    /** fetch data from the table: "token_accts" */
    token_accts: token_accts[]
    /** fetch aggregated fields from the table: "token_accts" */
    token_accts_aggregate: token_accts_aggregate
    /** fetch data from the table: "token_accts" using primary key columns */
    token_accts_by_pk: (token_accts | null)
    /** fetch data from the table: "tokens" */
    tokens: tokens[]
    /** fetch aggregated fields from the table: "tokens" */
    tokens_aggregate: tokens_aggregate
    /** fetch data from the table: "tokens" using primary key columns */
    tokens_by_pk: (tokens | null)
    /** fetch data from the table: "transactions" */
    transactions: transactions[]
    /** fetch aggregated fields from the table: "transactions" */
    transactions_aggregate: transactions_aggregate
    /** fetch data from the table: "transactions" using primary key columns */
    transactions_by_pk: (transactions | null)
    /** fetch data from the table: "twaps" */
    twaps: twaps[]
    /** fetch aggregated fields from the table: "twaps" */
    twaps_aggregate: twaps_aggregate
    /** fetch data from the table: "twaps" using primary key columns */
    twaps_by_pk: (twaps | null)
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "candles" */
    candles: candles[]
    /** fetch aggregated fields from the table: "candles" */
    candles_aggregate: candles_aggregate
    /** fetch data from the table: "candles" using primary key columns */
    candles_by_pk: (candles | null)
    /** fetch data from the table in a streaming manner: "candles" */
    candles_stream: candles[]
    /** fetch data from the table: "dao_details" */
    dao_details: dao_details[]
    /** fetch aggregated fields from the table: "dao_details" */
    dao_details_aggregate: dao_details_aggregate
    /** fetch data from the table: "dao_details" using primary key columns */
    dao_details_by_pk: (dao_details | null)
    /** fetch data from the table in a streaming manner: "dao_details" */
    dao_details_stream: dao_details[]
    /** fetch data from the table: "daos" */
    daos: daos[]
    /** fetch aggregated fields from the table: "daos" */
    daos_aggregate: daos_aggregate
    /** fetch data from the table: "daos" using primary key columns */
    daos_by_pk: (daos | null)
    /** fetch data from the table in a streaming manner: "daos" */
    daos_stream: daos[]
    /** fetch data from the table: "markets" */
    markets: markets[]
    /** fetch aggregated fields from the table: "markets" */
    markets_aggregate: markets_aggregate
    /** fetch data from the table: "markets" using primary key columns */
    markets_by_pk: (markets | null)
    /** fetch data from the table in a streaming manner: "markets" */
    markets_stream: markets[]
    /** fetch data from the table: "orders" */
    orders: orders[]
    /** fetch aggregated fields from the table: "orders" */
    orders_aggregate: orders_aggregate
    /** fetch data from the table: "orders" using primary key columns */
    orders_by_pk: (orders | null)
    /** fetch data from the table in a streaming manner: "orders" */
    orders_stream: orders[]
    /** fetch data from the table: "programs" */
    programs: programs[]
    /** fetch aggregated fields from the table: "programs" */
    programs_aggregate: programs_aggregate
    /** fetch data from the table: "programs" using primary key columns */
    programs_by_pk: (programs | null)
    /** fetch data from the table in a streaming manner: "programs" */
    programs_stream: programs[]
    /** fetch data from the table: "proposal_details" */
    proposal_details: proposal_details[]
    /** fetch aggregated fields from the table: "proposal_details" */
    proposal_details_aggregate: proposal_details_aggregate
    /** fetch data from the table: "proposal_details" using primary key columns */
    proposal_details_by_pk: (proposal_details | null)
    /** fetch data from the table in a streaming manner: "proposal_details" */
    proposal_details_stream: proposal_details[]
    /** fetch data from the table: "proposals" */
    proposals: proposals[]
    /** fetch aggregated fields from the table: "proposals" */
    proposals_aggregate: proposals_aggregate
    /** fetch data from the table: "proposals" using primary key columns */
    proposals_by_pk: (proposals | null)
    /** fetch data from the table in a streaming manner: "proposals" */
    proposals_stream: proposals[]
    /** fetch data from the table: "token_accts" */
    token_accts: token_accts[]
    /** fetch aggregated fields from the table: "token_accts" */
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
    /** fetch data from the table: "transactions" */
    transactions: transactions[]
    /** fetch aggregated fields from the table: "transactions" */
    transactions_aggregate: transactions_aggregate
    /** fetch data from the table: "transactions" using primary key columns */
    transactions_by_pk: (transactions | null)
    /** fetch data from the table in a streaming manner: "transactions" */
    transactions_stream: transactions[]
    /** fetch data from the table: "twaps" */
    twaps: twaps[]
    /** fetch aggregated fields from the table: "twaps" */
    twaps_aggregate: twaps_aggregate
    /** fetch data from the table: "twaps" using primary key columns */
    twaps_by_pk: (twaps | null)
    /** fetch data from the table in a streaming manner: "twaps" */
    twaps_stream: twaps[]
    __typename: 'subscription_root'
}


/** columns and relationships of "token_accts" */
export interface token_accts {
    amount: Scalars['bigint']
    mint_acct: Scalars['String']
    owner_acct: Scalars['String']
    token_acct: Scalars['String']
    updated_at: Scalars['timestamp']
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
    token_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamp'] | null)
    __typename: 'token_accts_max_fields'
}


/** aggregate min on columns */
export interface token_accts_min_fields {
    amount: (Scalars['bigint'] | null)
    mint_acct: (Scalars['String'] | null)
    owner_acct: (Scalars['String'] | null)
    token_acct: (Scalars['String'] | null)
    updated_at: (Scalars['timestamp'] | null)
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
export type token_accts_select_column = 'amount' | 'mint_acct' | 'owner_acct' | 'token_acct' | 'updated_at'


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
export type token_accts_update_column = 'amount' | 'mint_acct' | 'owner_acct' | 'token_acct' | 'updated_at'


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
    decimals: Scalars['smallint']
    mint_acct: Scalars['String']
    name: Scalars['String']
    supply: Scalars['bigint']
    symbol: Scalars['String']
    updated_at: Scalars['timestamp']
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
    mint_acct: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    supply: (Scalars['bigint'] | null)
    symbol: (Scalars['String'] | null)
    updated_at: (Scalars['timestamp'] | null)
    __typename: 'tokens_max_fields'
}


/** aggregate min on columns */
export interface tokens_min_fields {
    decimals: (Scalars['smallint'] | null)
    mint_acct: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    supply: (Scalars['bigint'] | null)
    symbol: (Scalars['String'] | null)
    updated_at: (Scalars['timestamp'] | null)
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
export type tokens_select_column = 'decimals' | 'mint_acct' | 'name' | 'supply' | 'symbol' | 'updated_at'


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
export type tokens_update_column = 'decimals' | 'mint_acct' | 'name' | 'supply' | 'symbol' | 'updated_at'


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


/** columns and relationships of "transactions" */
export interface transactions {
    block_time: Scalars['timestamp']
    failed: Scalars['Boolean']
    payload: Scalars['String']
    serializer_logic_version: Scalars['smallint']
    slot: Scalars['bigint']
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
    block_time: (Scalars['timestamp'] | null)
    payload: (Scalars['String'] | null)
    serializer_logic_version: (Scalars['smallint'] | null)
    slot: (Scalars['bigint'] | null)
    tx_sig: (Scalars['String'] | null)
    __typename: 'transactions_max_fields'
}


/** aggregate min on columns */
export interface transactions_min_fields {
    block_time: (Scalars['timestamp'] | null)
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
export type transactions_select_column = 'block_time' | 'failed' | 'payload' | 'serializer_logic_version' | 'slot' | 'tx_sig'


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
export type transactions_update_column = 'block_time' | 'failed' | 'payload' | 'serializer_logic_version' | 'slot' | 'tx_sig'


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


/** columns and relationships of "twaps" */
export interface twaps {
    market_acct: Scalars['String']
    observation_agg: Scalars['numeric']
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
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_avg_fields'
}


/** unique or primary key constraints on table "twaps" */
export type twaps_constraint = 'twaps_market_acct_updated_slot_pk'


/** aggregate max on columns */
export interface twaps_max_fields {
    market_acct: (Scalars['String'] | null)
    observation_agg: (Scalars['numeric'] | null)
    proposal_acct: (Scalars['String'] | null)
    token_amount: (Scalars['bigint'] | null)
    updated_slot: (Scalars['bigint'] | null)
    __typename: 'twaps_max_fields'
}


/** aggregate min on columns */
export interface twaps_min_fields {
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
export type twaps_select_column = 'market_acct' | 'observation_agg' | 'proposal_acct' | 'token_amount' | 'updated_slot'


/** aggregate stddev on columns */
export interface twaps_stddev_fields {
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface twaps_stddev_pop_fields {
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface twaps_stddev_samp_fields {
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface twaps_sum_fields {
    observation_agg: (Scalars['numeric'] | null)
    token_amount: (Scalars['bigint'] | null)
    updated_slot: (Scalars['bigint'] | null)
    __typename: 'twaps_sum_fields'
}


/** update columns of table "twaps" */
export type twaps_update_column = 'market_acct' | 'observation_agg' | 'proposal_acct' | 'token_amount' | 'updated_slot'


/** aggregate var_pop on columns */
export interface twaps_var_pop_fields {
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface twaps_var_samp_fields {
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_var_samp_fields'
}


/** aggregate variance on columns */
export interface twaps_variance_fields {
    observation_agg: (Scalars['Float'] | null)
    token_amount: (Scalars['Float'] | null)
    updated_slot: (Scalars['Float'] | null)
    __typename: 'twaps_variance_fields'
}

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


/** Boolean expression to filter rows from the table "candles". All fields are combined with a logical 'AND'. */
export interface candles_bool_exp {_and?: (candles_bool_exp[] | null),_not?: (candles_bool_exp | null),_or?: (candles_bool_exp[] | null),candle_average?: (bigint_comparison_exp | null),candle_duration?: (Int_comparison_exp | null),close?: (bigint_comparison_exp | null),cond_market_twap?: (bigint_comparison_exp | null),high?: (bigint_comparison_exp | null),low?: (bigint_comparison_exp | null),market_acct?: (String_comparison_exp | null),open?: (bigint_comparison_exp | null),timestamp?: (timestamp_comparison_exp | null),volume?: (bigint_comparison_exp | null)}


/** input type for incrementing numeric columns in table "candles" */
export interface candles_inc_input {candle_average?: (Scalars['bigint'] | null),candle_duration?: (Scalars['Int'] | null),close?: (Scalars['bigint'] | null),cond_market_twap?: (Scalars['bigint'] | null),high?: (Scalars['bigint'] | null),low?: (Scalars['bigint'] | null),open?: (Scalars['bigint'] | null),volume?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "candles" */
export interface candles_insert_input {candle_average?: (Scalars['bigint'] | null),candle_duration?: (Scalars['Int'] | null),close?: (Scalars['bigint'] | null),cond_market_twap?: (Scalars['bigint'] | null),high?: (Scalars['bigint'] | null),low?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),open?: (Scalars['bigint'] | null),timestamp?: (Scalars['timestamp'] | null),volume?: (Scalars['bigint'] | null)}


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
export interface candles_order_by {candle_average?: (order_by | null),candle_duration?: (order_by | null),close?: (order_by | null),cond_market_twap?: (order_by | null),high?: (order_by | null),low?: (order_by | null),market_acct?: (order_by | null),open?: (order_by | null),timestamp?: (order_by | null),volume?: (order_by | null)}


/** primary key columns input for table: candles */
export interface candles_pk_columns_input {candle_duration: Scalars['Int'],market_acct: Scalars['String'],timestamp: Scalars['timestamp']}


/** input type for updating data in table "candles" */
export interface candles_set_input {candle_average?: (Scalars['bigint'] | null),candle_duration?: (Scalars['Int'] | null),close?: (Scalars['bigint'] | null),cond_market_twap?: (Scalars['bigint'] | null),high?: (Scalars['bigint'] | null),low?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),open?: (Scalars['bigint'] | null),timestamp?: (Scalars['timestamp'] | null),volume?: (Scalars['bigint'] | null)}


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


/** Streaming cursor of the table "candles" */
export interface candles_stream_cursor_input {
/** Stream column input with initial value */
initial_value: candles_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface candles_stream_cursor_value_input {candle_average?: (Scalars['bigint'] | null),candle_duration?: (Scalars['Int'] | null),close?: (Scalars['bigint'] | null),cond_market_twap?: (Scalars['bigint'] | null),high?: (Scalars['bigint'] | null),low?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),open?: (Scalars['bigint'] | null),timestamp?: (Scalars['timestamp'] | null),volume?: (Scalars['bigint'] | null)}


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


/** columns and relationships of "dao_details" */
export interface dao_detailsGenqlSelection{
    dao_id?: boolean | number
    description?: boolean | number
    github?: boolean | number
    name?: boolean | number
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


/** aggregate avg on columns */
export interface dao_details_avg_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "dao_details". All fields are combined with a logical 'AND'. */
export interface dao_details_bool_exp {_and?: (dao_details_bool_exp[] | null),_not?: (dao_details_bool_exp | null),_or?: (dao_details_bool_exp[] | null),dao_id?: (bigint_comparison_exp | null),description?: (String_comparison_exp | null),github?: (String_comparison_exp | null),name?: (String_comparison_exp | null),url?: (String_comparison_exp | null),x_account?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "dao_details" */
export interface dao_details_inc_input {dao_id?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "dao_details" */
export interface dao_details_insert_input {dao_id?: (Scalars['bigint'] | null),description?: (Scalars['String'] | null),github?: (Scalars['String'] | null),name?: (Scalars['String'] | null),url?: (Scalars['String'] | null),x_account?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface dao_details_max_fieldsGenqlSelection{
    dao_id?: boolean | number
    description?: boolean | number
    github?: boolean | number
    name?: boolean | number
    url?: boolean | number
    x_account?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface dao_details_min_fieldsGenqlSelection{
    dao_id?: boolean | number
    description?: boolean | number
    github?: boolean | number
    name?: boolean | number
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


/** on_conflict condition type for table "dao_details" */
export interface dao_details_on_conflict {constraint: dao_details_constraint,update_columns?: dao_details_update_column[],where?: (dao_details_bool_exp | null)}


/** Ordering options when selecting data from "dao_details". */
export interface dao_details_order_by {dao_id?: (order_by | null),description?: (order_by | null),github?: (order_by | null),name?: (order_by | null),url?: (order_by | null),x_account?: (order_by | null)}


/** primary key columns input for table: dao_details */
export interface dao_details_pk_columns_input {dao_id: Scalars['bigint']}


/** input type for updating data in table "dao_details" */
export interface dao_details_set_input {dao_id?: (Scalars['bigint'] | null),description?: (Scalars['String'] | null),github?: (Scalars['String'] | null),name?: (Scalars['String'] | null),url?: (Scalars['String'] | null),x_account?: (Scalars['String'] | null)}


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
export interface dao_details_stream_cursor_value_input {dao_id?: (Scalars['bigint'] | null),description?: (Scalars['String'] | null),github?: (Scalars['String'] | null),name?: (Scalars['String'] | null),url?: (Scalars['String'] | null),x_account?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface dao_details_sum_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface dao_details_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (dao_details_inc_input | null),
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
    created_at?: boolean | number
    dao_acct?: boolean | number
    dao_id?: boolean | number
    mint_acct?: boolean | number
    program_acct?: boolean | number
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


/** aggregate avg on columns */
export interface daos_avg_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "daos". All fields are combined with a logical 'AND'. */
export interface daos_bool_exp {_and?: (daos_bool_exp[] | null),_not?: (daos_bool_exp | null),_or?: (daos_bool_exp[] | null),created_at?: (timestamp_comparison_exp | null),dao_acct?: (String_comparison_exp | null),dao_id?: (bigint_comparison_exp | null),mint_acct?: (String_comparison_exp | null),program_acct?: (String_comparison_exp | null),updated_at?: (timestamp_comparison_exp | null)}


/** input type for incrementing numeric columns in table "daos" */
export interface daos_inc_input {dao_id?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "daos" */
export interface daos_insert_input {created_at?: (Scalars['timestamp'] | null),dao_acct?: (Scalars['String'] | null),dao_id?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),program_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate max on columns */
export interface daos_max_fieldsGenqlSelection{
    created_at?: boolean | number
    dao_acct?: boolean | number
    dao_id?: boolean | number
    mint_acct?: boolean | number
    program_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface daos_min_fieldsGenqlSelection{
    created_at?: boolean | number
    dao_acct?: boolean | number
    dao_id?: boolean | number
    mint_acct?: boolean | number
    program_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "daos" */
export interface daos_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: daosGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "daos" */
export interface daos_on_conflict {constraint: daos_constraint,update_columns?: daos_update_column[],where?: (daos_bool_exp | null)}


/** Ordering options when selecting data from "daos". */
export interface daos_order_by {created_at?: (order_by | null),dao_acct?: (order_by | null),dao_id?: (order_by | null),mint_acct?: (order_by | null),program_acct?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: daos */
export interface daos_pk_columns_input {dao_acct: Scalars['String']}


/** input type for updating data in table "daos" */
export interface daos_set_input {created_at?: (Scalars['timestamp'] | null),dao_acct?: (Scalars['String'] | null),dao_id?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),program_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate stddev on columns */
export interface daos_stddev_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface daos_stddev_pop_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface daos_stddev_samp_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "daos" */
export interface daos_stream_cursor_input {
/** Stream column input with initial value */
initial_value: daos_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface daos_stream_cursor_value_input {created_at?: (Scalars['timestamp'] | null),dao_acct?: (Scalars['String'] | null),dao_id?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),program_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate sum on columns */
export interface daos_sum_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

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
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface daos_var_samp_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface daos_variance_fieldsGenqlSelection{
    dao_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export interface float8_comparison_exp {_eq?: (Scalars['float8'] | null),_gt?: (Scalars['float8'] | null),_gte?: (Scalars['float8'] | null),_in?: (Scalars['float8'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['float8'] | null),_lte?: (Scalars['float8'] | null),_neq?: (Scalars['float8'] | null),_nin?: (Scalars['float8'][] | null)}

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


/** columns and relationships of "markets" */
export interface marketsGenqlSelection{
    active_slot?: boolean | number
    asks_token_acct?: boolean | number
    base_lot_size?: boolean | number
    base_maker_fee?: boolean | number
    base_mint_acct?: boolean | number
    base_taker_fee?: boolean | number
    bids_token_acct?: boolean | number
    create_tx_sig?: boolean | number
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


/** aggregated selection of "markets" */
export interface markets_aggregateGenqlSelection{
    aggregate?: markets_aggregate_fieldsGenqlSelection
    nodes?: marketsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


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


/** Boolean expression to filter rows from the table "markets". All fields are combined with a logical 'AND'. */
export interface markets_bool_exp {_and?: (markets_bool_exp[] | null),_not?: (markets_bool_exp | null),_or?: (markets_bool_exp[] | null),active_slot?: (bigint_comparison_exp | null),asks_token_acct?: (String_comparison_exp | null),base_lot_size?: (bigint_comparison_exp | null),base_maker_fee?: (smallint_comparison_exp | null),base_mint_acct?: (String_comparison_exp | null),base_taker_fee?: (smallint_comparison_exp | null),bids_token_acct?: (String_comparison_exp | null),create_tx_sig?: (String_comparison_exp | null),inactive_slot?: (bigint_comparison_exp | null),market_acct?: (String_comparison_exp | null),market_type?: (String_comparison_exp | null),proposal_acct?: (String_comparison_exp | null),quote_lot_size?: (bigint_comparison_exp | null),quote_maker_fee?: (smallint_comparison_exp | null),quote_mint_acct?: (String_comparison_exp | null),quote_taker_fee?: (smallint_comparison_exp | null),quote_tick_size?: (bigint_comparison_exp | null)}


/** input type for incrementing numeric columns in table "markets" */
export interface markets_inc_input {active_slot?: (Scalars['bigint'] | null),base_lot_size?: (Scalars['bigint'] | null),base_maker_fee?: (Scalars['smallint'] | null),base_taker_fee?: (Scalars['smallint'] | null),inactive_slot?: (Scalars['bigint'] | null),quote_lot_size?: (Scalars['bigint'] | null),quote_maker_fee?: (Scalars['smallint'] | null),quote_taker_fee?: (Scalars['smallint'] | null),quote_tick_size?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "markets" */
export interface markets_insert_input {active_slot?: (Scalars['bigint'] | null),asks_token_acct?: (Scalars['String'] | null),base_lot_size?: (Scalars['bigint'] | null),base_maker_fee?: (Scalars['smallint'] | null),base_mint_acct?: (Scalars['String'] | null),base_taker_fee?: (Scalars['smallint'] | null),bids_token_acct?: (Scalars['String'] | null),create_tx_sig?: (Scalars['String'] | null),inactive_slot?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),market_type?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),quote_lot_size?: (Scalars['bigint'] | null),quote_maker_fee?: (Scalars['smallint'] | null),quote_mint_acct?: (Scalars['String'] | null),quote_taker_fee?: (Scalars['smallint'] | null),quote_tick_size?: (Scalars['bigint'] | null)}


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


/** response of any mutation on the table "markets" */
export interface markets_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: marketsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "markets" */
export interface markets_on_conflict {constraint: markets_constraint,update_columns?: markets_update_column[],where?: (markets_bool_exp | null)}


/** Ordering options when selecting data from "markets". */
export interface markets_order_by {active_slot?: (order_by | null),asks_token_acct?: (order_by | null),base_lot_size?: (order_by | null),base_maker_fee?: (order_by | null),base_mint_acct?: (order_by | null),base_taker_fee?: (order_by | null),bids_token_acct?: (order_by | null),create_tx_sig?: (order_by | null),inactive_slot?: (order_by | null),market_acct?: (order_by | null),market_type?: (order_by | null),proposal_acct?: (order_by | null),quote_lot_size?: (order_by | null),quote_maker_fee?: (order_by | null),quote_mint_acct?: (order_by | null),quote_taker_fee?: (order_by | null),quote_tick_size?: (order_by | null)}


/** primary key columns input for table: markets */
export interface markets_pk_columns_input {market_acct: Scalars['String']}


/** input type for updating data in table "markets" */
export interface markets_set_input {active_slot?: (Scalars['bigint'] | null),asks_token_acct?: (Scalars['String'] | null),base_lot_size?: (Scalars['bigint'] | null),base_maker_fee?: (Scalars['smallint'] | null),base_mint_acct?: (Scalars['String'] | null),base_taker_fee?: (Scalars['smallint'] | null),bids_token_acct?: (Scalars['String'] | null),create_tx_sig?: (Scalars['String'] | null),inactive_slot?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),market_type?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),quote_lot_size?: (Scalars['bigint'] | null),quote_maker_fee?: (Scalars['smallint'] | null),quote_mint_acct?: (Scalars['String'] | null),quote_taker_fee?: (Scalars['smallint'] | null),quote_tick_size?: (Scalars['bigint'] | null)}


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


/** Streaming cursor of the table "markets" */
export interface markets_stream_cursor_input {
/** Stream column input with initial value */
initial_value: markets_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface markets_stream_cursor_value_input {active_slot?: (Scalars['bigint'] | null),asks_token_acct?: (Scalars['String'] | null),base_lot_size?: (Scalars['bigint'] | null),base_maker_fee?: (Scalars['smallint'] | null),base_mint_acct?: (Scalars['String'] | null),base_taker_fee?: (Scalars['smallint'] | null),bids_token_acct?: (Scalars['String'] | null),create_tx_sig?: (Scalars['String'] | null),inactive_slot?: (Scalars['bigint'] | null),market_acct?: (Scalars['String'] | null),market_type?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),quote_lot_size?: (Scalars['bigint'] | null),quote_maker_fee?: (Scalars['smallint'] | null),quote_mint_acct?: (Scalars['String'] | null),quote_taker_fee?: (Scalars['smallint'] | null),quote_tick_size?: (Scalars['bigint'] | null)}


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


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete data from the table: "candles" */
    delete_candles?: (candles_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: candles_bool_exp} })
    /** delete single row from the table: "candles" */
    delete_candles_by_pk?: (candlesGenqlSelection & { __args: {candle_duration: Scalars['Int'], market_acct: Scalars['String'], timestamp: Scalars['timestamp']} })
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
    /** delete data from the table: "programs" */
    delete_programs?: (programs_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: programs_bool_exp} })
    /** delete single row from the table: "programs" */
    delete_programs_by_pk?: (programsGenqlSelection & { __args: {program_acct: Scalars['String']} })
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
    /** update data of the table: "dao_details" */
    update_dao_details?: (dao_details_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dao_details_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (dao_details_set_input | null), 
    /** filter the rows which have to be updated */
    where: dao_details_bool_exp} })
    /** update single row of the table: "dao_details" */
    update_dao_details_by_pk?: (dao_detailsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (dao_details_inc_input | null), 
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


/** aggregated selection of "orders" */
export interface orders_aggregateGenqlSelection{
    aggregate?: orders_aggregate_fieldsGenqlSelection
    nodes?: ordersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


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


/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export interface orders_bool_exp {_and?: (orders_bool_exp[] | null),_not?: (orders_bool_exp | null),_or?: (orders_bool_exp[] | null),actor_acct?: (String_comparison_exp | null),cancel_block?: (bigint_comparison_exp | null),cancel_time?: (timestamp_comparison_exp | null),cancel_tx_sig?: (String_comparison_exp | null),filled_base_amount?: (bigint_comparison_exp | null),is_active?: (Boolean_comparison_exp | null),market_acct?: (String_comparison_exp | null),order_block?: (bigint_comparison_exp | null),order_time?: (timestamp_comparison_exp | null),order_tx_sig?: (String_comparison_exp | null),quote_price?: (bigint_comparison_exp | null),side?: (String_comparison_exp | null),unfilled_base_amount?: (bigint_comparison_exp | null),updated_at?: (timestamp_comparison_exp | null)}


/** input type for incrementing numeric columns in table "orders" */
export interface orders_inc_input {cancel_block?: (Scalars['bigint'] | null),filled_base_amount?: (Scalars['bigint'] | null),order_block?: (Scalars['bigint'] | null),quote_price?: (Scalars['bigint'] | null),unfilled_base_amount?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "orders" */
export interface orders_insert_input {actor_acct?: (Scalars['String'] | null),cancel_block?: (Scalars['bigint'] | null),cancel_time?: (Scalars['timestamp'] | null),cancel_tx_sig?: (Scalars['String'] | null),filled_base_amount?: (Scalars['bigint'] | null),is_active?: (Scalars['Boolean'] | null),market_acct?: (Scalars['String'] | null),order_block?: (Scalars['bigint'] | null),order_time?: (Scalars['timestamp'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['bigint'] | null),side?: (Scalars['String'] | null),unfilled_base_amount?: (Scalars['bigint'] | null),updated_at?: (Scalars['timestamp'] | null)}


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


/** response of any mutation on the table "orders" */
export interface orders_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ordersGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "orders" */
export interface orders_on_conflict {constraint: orders_constraint,update_columns?: orders_update_column[],where?: (orders_bool_exp | null)}


/** Ordering options when selecting data from "orders". */
export interface orders_order_by {actor_acct?: (order_by | null),cancel_block?: (order_by | null),cancel_time?: (order_by | null),cancel_tx_sig?: (order_by | null),filled_base_amount?: (order_by | null),is_active?: (order_by | null),market_acct?: (order_by | null),order_block?: (order_by | null),order_time?: (order_by | null),order_tx_sig?: (order_by | null),quote_price?: (order_by | null),side?: (order_by | null),unfilled_base_amount?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: orders */
export interface orders_pk_columns_input {order_tx_sig: Scalars['String']}


/** input type for updating data in table "orders" */
export interface orders_set_input {actor_acct?: (Scalars['String'] | null),cancel_block?: (Scalars['bigint'] | null),cancel_time?: (Scalars['timestamp'] | null),cancel_tx_sig?: (Scalars['String'] | null),filled_base_amount?: (Scalars['bigint'] | null),is_active?: (Scalars['Boolean'] | null),market_acct?: (Scalars['String'] | null),order_block?: (Scalars['bigint'] | null),order_time?: (Scalars['timestamp'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['bigint'] | null),side?: (Scalars['String'] | null),unfilled_base_amount?: (Scalars['bigint'] | null),updated_at?: (Scalars['timestamp'] | null)}


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


/** Streaming cursor of the table "orders" */
export interface orders_stream_cursor_input {
/** Stream column input with initial value */
initial_value: orders_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface orders_stream_cursor_value_input {actor_acct?: (Scalars['String'] | null),cancel_block?: (Scalars['bigint'] | null),cancel_time?: (Scalars['timestamp'] | null),cancel_tx_sig?: (Scalars['String'] | null),filled_base_amount?: (Scalars['bigint'] | null),is_active?: (Scalars['Boolean'] | null),market_acct?: (Scalars['String'] | null),order_block?: (Scalars['bigint'] | null),order_time?: (Scalars['timestamp'] | null),order_tx_sig?: (Scalars['String'] | null),quote_price?: (Scalars['bigint'] | null),side?: (Scalars['String'] | null),unfilled_base_amount?: (Scalars['bigint'] | null),updated_at?: (Scalars['timestamp'] | null)}


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


/** columns and relationships of "programs" */
export interface programsGenqlSelection{
    created_at?: boolean | number
    deployed_at?: boolean | number
    program_acct?: boolean | number
    program_name?: boolean | number
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
export interface programs_bool_exp {_and?: (programs_bool_exp[] | null),_not?: (programs_bool_exp | null),_or?: (programs_bool_exp[] | null),created_at?: (timestamp_comparison_exp | null),deployed_at?: (timestamp_comparison_exp | null),program_acct?: (String_comparison_exp | null),program_name?: (String_comparison_exp | null),version?: (Int_comparison_exp | null)}


/** input type for incrementing numeric columns in table "programs" */
export interface programs_inc_input {version?: (Scalars['Int'] | null)}


/** input type for inserting data into table "programs" */
export interface programs_insert_input {created_at?: (Scalars['timestamp'] | null),deployed_at?: (Scalars['timestamp'] | null),program_acct?: (Scalars['String'] | null),program_name?: (Scalars['String'] | null),version?: (Scalars['Int'] | null)}


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


/** on_conflict condition type for table "programs" */
export interface programs_on_conflict {constraint: programs_constraint,update_columns?: programs_update_column[],where?: (programs_bool_exp | null)}


/** Ordering options when selecting data from "programs". */
export interface programs_order_by {created_at?: (order_by | null),deployed_at?: (order_by | null),program_acct?: (order_by | null),program_name?: (order_by | null),version?: (order_by | null)}


/** primary key columns input for table: programs */
export interface programs_pk_columns_input {program_acct: Scalars['String']}


/** input type for updating data in table "programs" */
export interface programs_set_input {created_at?: (Scalars['timestamp'] | null),deployed_at?: (Scalars['timestamp'] | null),program_acct?: (Scalars['String'] | null),program_name?: (Scalars['String'] | null),version?: (Scalars['Int'] | null)}


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
export interface programs_stream_cursor_value_input {created_at?: (Scalars['timestamp'] | null),deployed_at?: (Scalars['timestamp'] | null),program_acct?: (Scalars['String'] | null),program_name?: (Scalars['String'] | null),version?: (Scalars['Int'] | null)}


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


/** columns and relationships of "proposal_details" */
export interface proposal_detailsGenqlSelection{
    categories?: { __args: {
    /** JSON select path */
    path?: (Scalars['String'] | null)} } | boolean | number
    content?: boolean | number
    description?: boolean | number
    proposal_acct?: boolean | number
    proposal_id?: boolean | number
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


/** append existing jsonb value of filtered columns with new jsonb value */
export interface proposal_details_append_input {categories?: (Scalars['jsonb'] | null)}


/** aggregate avg on columns */
export interface proposal_details_avg_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "proposal_details". All fields are combined with a logical 'AND'. */
export interface proposal_details_bool_exp {_and?: (proposal_details_bool_exp[] | null),_not?: (proposal_details_bool_exp | null),_or?: (proposal_details_bool_exp[] | null),categories?: (jsonb_comparison_exp | null),content?: (String_comparison_exp | null),description?: (String_comparison_exp | null),proposal_acct?: (String_comparison_exp | null),proposal_id?: (bigint_comparison_exp | null),title?: (String_comparison_exp | null)}


/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface proposal_details_delete_at_path_input {categories?: (Scalars['String'][] | null)}


/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface proposal_details_delete_elem_input {categories?: (Scalars['Int'] | null)}


/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface proposal_details_delete_key_input {categories?: (Scalars['String'] | null)}


/** input type for incrementing numeric columns in table "proposal_details" */
export interface proposal_details_inc_input {proposal_id?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "proposal_details" */
export interface proposal_details_insert_input {categories?: (Scalars['jsonb'] | null),content?: (Scalars['String'] | null),description?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),proposal_id?: (Scalars['bigint'] | null),title?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface proposal_details_max_fieldsGenqlSelection{
    content?: boolean | number
    description?: boolean | number
    proposal_acct?: boolean | number
    proposal_id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface proposal_details_min_fieldsGenqlSelection{
    content?: boolean | number
    description?: boolean | number
    proposal_acct?: boolean | number
    proposal_id?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


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
export interface proposal_details_order_by {categories?: (order_by | null),content?: (order_by | null),description?: (order_by | null),proposal_acct?: (order_by | null),proposal_id?: (order_by | null),title?: (order_by | null)}


/** primary key columns input for table: proposal_details */
export interface proposal_details_pk_columns_input {proposal_id: Scalars['bigint']}


/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface proposal_details_prepend_input {categories?: (Scalars['jsonb'] | null)}


/** input type for updating data in table "proposal_details" */
export interface proposal_details_set_input {categories?: (Scalars['jsonb'] | null),content?: (Scalars['String'] | null),description?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),proposal_id?: (Scalars['bigint'] | null),title?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface proposal_details_stddev_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface proposal_details_stddev_pop_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface proposal_details_stddev_samp_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "proposal_details" */
export interface proposal_details_stream_cursor_input {
/** Stream column input with initial value */
initial_value: proposal_details_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface proposal_details_stream_cursor_value_input {categories?: (Scalars['jsonb'] | null),content?: (Scalars['String'] | null),description?: (Scalars['String'] | null),proposal_acct?: (Scalars['String'] | null),proposal_id?: (Scalars['bigint'] | null),title?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface proposal_details_sum_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

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


/** aggregate var_samp on columns */
export interface proposal_details_var_samp_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface proposal_details_variance_fieldsGenqlSelection{
    proposal_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "proposals" */
export interface proposalsGenqlSelection{
    autocrat_version?: boolean | number
    dao_acct?: boolean | number
    description_url?: boolean | number
    initial_slot?: boolean | number
    proposal_acct?: boolean | number
    proposal_num?: boolean | number
    proposer_acct?: boolean | number
    status?: boolean | number
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


/** aggregate avg on columns */
export interface proposals_avg_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "proposals". All fields are combined with a logical 'AND'. */
export interface proposals_bool_exp {_and?: (proposals_bool_exp[] | null),_not?: (proposals_bool_exp | null),_or?: (proposals_bool_exp[] | null),autocrat_version?: (float8_comparison_exp | null),dao_acct?: (String_comparison_exp | null),description_url?: (String_comparison_exp | null),initial_slot?: (bigint_comparison_exp | null),proposal_acct?: (String_comparison_exp | null),proposal_num?: (bigint_comparison_exp | null),proposer_acct?: (String_comparison_exp | null),status?: (String_comparison_exp | null),updated_at?: (timestamp_comparison_exp | null)}


/** input type for incrementing numeric columns in table "proposals" */
export interface proposals_inc_input {autocrat_version?: (Scalars['float8'] | null),initial_slot?: (Scalars['bigint'] | null),proposal_num?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "proposals" */
export interface proposals_insert_input {autocrat_version?: (Scalars['float8'] | null),dao_acct?: (Scalars['String'] | null),description_url?: (Scalars['String'] | null),initial_slot?: (Scalars['bigint'] | null),proposal_acct?: (Scalars['String'] | null),proposal_num?: (Scalars['bigint'] | null),proposer_acct?: (Scalars['String'] | null),status?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate max on columns */
export interface proposals_max_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    dao_acct?: boolean | number
    description_url?: boolean | number
    initial_slot?: boolean | number
    proposal_acct?: boolean | number
    proposal_num?: boolean | number
    proposer_acct?: boolean | number
    status?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface proposals_min_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    dao_acct?: boolean | number
    description_url?: boolean | number
    initial_slot?: boolean | number
    proposal_acct?: boolean | number
    proposal_num?: boolean | number
    proposer_acct?: boolean | number
    status?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "proposals" */
export interface proposals_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: proposalsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "proposals" */
export interface proposals_on_conflict {constraint: proposals_constraint,update_columns?: proposals_update_column[],where?: (proposals_bool_exp | null)}


/** Ordering options when selecting data from "proposals". */
export interface proposals_order_by {autocrat_version?: (order_by | null),dao_acct?: (order_by | null),description_url?: (order_by | null),initial_slot?: (order_by | null),proposal_acct?: (order_by | null),proposal_num?: (order_by | null),proposer_acct?: (order_by | null),status?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: proposals */
export interface proposals_pk_columns_input {proposal_acct: Scalars['String']}


/** input type for updating data in table "proposals" */
export interface proposals_set_input {autocrat_version?: (Scalars['float8'] | null),dao_acct?: (Scalars['String'] | null),description_url?: (Scalars['String'] | null),initial_slot?: (Scalars['bigint'] | null),proposal_acct?: (Scalars['String'] | null),proposal_num?: (Scalars['bigint'] | null),proposer_acct?: (Scalars['String'] | null),status?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate stddev on columns */
export interface proposals_stddev_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface proposals_stddev_pop_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface proposals_stddev_samp_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "proposals" */
export interface proposals_stream_cursor_input {
/** Stream column input with initial value */
initial_value: proposals_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface proposals_stream_cursor_value_input {autocrat_version?: (Scalars['float8'] | null),dao_acct?: (Scalars['String'] | null),description_url?: (Scalars['String'] | null),initial_slot?: (Scalars['bigint'] | null),proposal_acct?: (Scalars['String'] | null),proposal_num?: (Scalars['bigint'] | null),proposer_acct?: (Scalars['String'] | null),status?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate sum on columns */
export interface proposals_sum_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

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
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface proposals_var_samp_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface proposals_variance_fieldsGenqlSelection{
    autocrat_version?: boolean | number
    initial_slot?: boolean | number
    proposal_num?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "candles" */
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
    /** fetch aggregated fields from the table: "candles" */
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
    candles_by_pk?: (candlesGenqlSelection & { __args: {candle_duration: Scalars['Int'], market_acct: Scalars['String'], timestamp: Scalars['timestamp']} })
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
    /** fetch data from the table: "daos" */
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
    /** fetch aggregated fields from the table: "daos" */
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
    /** fetch data from the table: "markets" */
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
    /** fetch aggregated fields from the table: "markets" */
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
    /** fetch data from the table: "orders" */
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
    /** fetch aggregated fields from the table: "orders" */
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
    /** fetch data from the table: "proposal_details" */
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
    /** fetch aggregated fields from the table: "proposal_details" */
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
    /** fetch data from the table: "proposals" */
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
    /** fetch aggregated fields from the table: "proposals" */
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
    /** fetch data from the table: "token_accts" */
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
    /** fetch aggregated fields from the table: "token_accts" */
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
    /** fetch data from the table: "twaps" */
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
    /** fetch aggregated fields from the table: "twaps" */
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
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export interface smallint_comparison_exp {_eq?: (Scalars['smallint'] | null),_gt?: (Scalars['smallint'] | null),_gte?: (Scalars['smallint'] | null),_in?: (Scalars['smallint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['smallint'] | null),_lte?: (Scalars['smallint'] | null),_neq?: (Scalars['smallint'] | null),_nin?: (Scalars['smallint'][] | null)}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "candles" */
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
    /** fetch aggregated fields from the table: "candles" */
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
    candles_by_pk?: (candlesGenqlSelection & { __args: {candle_duration: Scalars['Int'], market_acct: Scalars['String'], timestamp: Scalars['timestamp']} })
    /** fetch data from the table in a streaming manner: "candles" */
    candles_stream?: (candlesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (candles_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (candles_bool_exp | null)} })
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
    /** fetch data from the table: "daos" */
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
    /** fetch aggregated fields from the table: "daos" */
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
    /** fetch data from the table: "markets" */
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
    /** fetch aggregated fields from the table: "markets" */
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
    /** fetch data from the table: "orders" */
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
    /** fetch aggregated fields from the table: "orders" */
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
    /** fetch data from the table: "proposal_details" */
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
    /** fetch aggregated fields from the table: "proposal_details" */
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
    /** fetch data from the table: "proposals" */
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
    /** fetch aggregated fields from the table: "proposals" */
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
    /** fetch data from the table: "token_accts" */
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
    /** fetch aggregated fields from the table: "token_accts" */
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
    /** fetch data from the table: "twaps" */
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
    /** fetch aggregated fields from the table: "twaps" */
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
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {_eq?: (Scalars['timestamp'] | null),_gt?: (Scalars['timestamp'] | null),_gte?: (Scalars['timestamp'] | null),_in?: (Scalars['timestamp'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamp'] | null),_lte?: (Scalars['timestamp'] | null),_neq?: (Scalars['timestamp'] | null),_nin?: (Scalars['timestamp'][] | null)}


/** columns and relationships of "token_accts" */
export interface token_acctsGenqlSelection{
    amount?: boolean | number
    mint_acct?: boolean | number
    owner_acct?: boolean | number
    token_acct?: boolean | number
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


/** aggregate avg on columns */
export interface token_accts_avg_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "token_accts". All fields are combined with a logical 'AND'. */
export interface token_accts_bool_exp {_and?: (token_accts_bool_exp[] | null),_not?: (token_accts_bool_exp | null),_or?: (token_accts_bool_exp[] | null),amount?: (bigint_comparison_exp | null),mint_acct?: (String_comparison_exp | null),owner_acct?: (String_comparison_exp | null),token_acct?: (String_comparison_exp | null),updated_at?: (timestamp_comparison_exp | null)}


/** input type for incrementing numeric columns in table "token_accts" */
export interface token_accts_inc_input {amount?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "token_accts" */
export interface token_accts_insert_input {amount?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),owner_acct?: (Scalars['String'] | null),token_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate max on columns */
export interface token_accts_max_fieldsGenqlSelection{
    amount?: boolean | number
    mint_acct?: boolean | number
    owner_acct?: boolean | number
    token_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface token_accts_min_fieldsGenqlSelection{
    amount?: boolean | number
    mint_acct?: boolean | number
    owner_acct?: boolean | number
    token_acct?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "token_accts" */
export interface token_accts_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: token_acctsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "token_accts" */
export interface token_accts_on_conflict {constraint: token_accts_constraint,update_columns?: token_accts_update_column[],where?: (token_accts_bool_exp | null)}


/** Ordering options when selecting data from "token_accts". */
export interface token_accts_order_by {amount?: (order_by | null),mint_acct?: (order_by | null),owner_acct?: (order_by | null),token_acct?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: token_accts */
export interface token_accts_pk_columns_input {token_acct: Scalars['String']}


/** input type for updating data in table "token_accts" */
export interface token_accts_set_input {amount?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),owner_acct?: (Scalars['String'] | null),token_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate stddev on columns */
export interface token_accts_stddev_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface token_accts_stddev_pop_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface token_accts_stddev_samp_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "token_accts" */
export interface token_accts_stream_cursor_input {
/** Stream column input with initial value */
initial_value: token_accts_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface token_accts_stream_cursor_value_input {amount?: (Scalars['bigint'] | null),mint_acct?: (Scalars['String'] | null),owner_acct?: (Scalars['String'] | null),token_acct?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate sum on columns */
export interface token_accts_sum_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

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


/** aggregate var_samp on columns */
export interface token_accts_var_samp_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface token_accts_variance_fieldsGenqlSelection{
    amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "tokens" */
export interface tokensGenqlSelection{
    decimals?: boolean | number
    mint_acct?: boolean | number
    name?: boolean | number
    supply?: boolean | number
    symbol?: boolean | number
    updated_at?: boolean | number
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
export interface tokens_bool_exp {_and?: (tokens_bool_exp[] | null),_not?: (tokens_bool_exp | null),_or?: (tokens_bool_exp[] | null),decimals?: (smallint_comparison_exp | null),mint_acct?: (String_comparison_exp | null),name?: (String_comparison_exp | null),supply?: (bigint_comparison_exp | null),symbol?: (String_comparison_exp | null),updated_at?: (timestamp_comparison_exp | null)}


/** input type for incrementing numeric columns in table "tokens" */
export interface tokens_inc_input {decimals?: (Scalars['smallint'] | null),supply?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "tokens" */
export interface tokens_insert_input {decimals?: (Scalars['smallint'] | null),mint_acct?: (Scalars['String'] | null),name?: (Scalars['String'] | null),supply?: (Scalars['bigint'] | null),symbol?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


/** aggregate max on columns */
export interface tokens_max_fieldsGenqlSelection{
    decimals?: boolean | number
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


/** on_conflict condition type for table "tokens" */
export interface tokens_on_conflict {constraint: tokens_constraint,update_columns?: tokens_update_column[],where?: (tokens_bool_exp | null)}


/** Ordering options when selecting data from "tokens". */
export interface tokens_order_by {decimals?: (order_by | null),mint_acct?: (order_by | null),name?: (order_by | null),supply?: (order_by | null),symbol?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: tokens */
export interface tokens_pk_columns_input {mint_acct: Scalars['String']}


/** input type for updating data in table "tokens" */
export interface tokens_set_input {decimals?: (Scalars['smallint'] | null),mint_acct?: (Scalars['String'] | null),name?: (Scalars['String'] | null),supply?: (Scalars['bigint'] | null),symbol?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


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
export interface tokens_stream_cursor_value_input {decimals?: (Scalars['smallint'] | null),mint_acct?: (Scalars['String'] | null),name?: (Scalars['String'] | null),supply?: (Scalars['bigint'] | null),symbol?: (Scalars['String'] | null),updated_at?: (Scalars['timestamp'] | null)}


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


/** columns and relationships of "transactions" */
export interface transactionsGenqlSelection{
    block_time?: boolean | number
    failed?: boolean | number
    payload?: boolean | number
    serializer_logic_version?: boolean | number
    slot?: boolean | number
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
export interface transactions_bool_exp {_and?: (transactions_bool_exp[] | null),_not?: (transactions_bool_exp | null),_or?: (transactions_bool_exp[] | null),block_time?: (timestamp_comparison_exp | null),failed?: (Boolean_comparison_exp | null),payload?: (String_comparison_exp | null),serializer_logic_version?: (smallint_comparison_exp | null),slot?: (bigint_comparison_exp | null),tx_sig?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "transactions" */
export interface transactions_inc_input {serializer_logic_version?: (Scalars['smallint'] | null),slot?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "transactions" */
export interface transactions_insert_input {block_time?: (Scalars['timestamp'] | null),failed?: (Scalars['Boolean'] | null),payload?: (Scalars['String'] | null),serializer_logic_version?: (Scalars['smallint'] | null),slot?: (Scalars['bigint'] | null),tx_sig?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface transactions_max_fieldsGenqlSelection{
    block_time?: boolean | number
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


/** on_conflict condition type for table "transactions" */
export interface transactions_on_conflict {constraint: transactions_constraint,update_columns?: transactions_update_column[],where?: (transactions_bool_exp | null)}


/** Ordering options when selecting data from "transactions". */
export interface transactions_order_by {block_time?: (order_by | null),failed?: (order_by | null),payload?: (order_by | null),serializer_logic_version?: (order_by | null),slot?: (order_by | null),tx_sig?: (order_by | null)}


/** primary key columns input for table: transactions */
export interface transactions_pk_columns_input {tx_sig: Scalars['String']}


/** input type for updating data in table "transactions" */
export interface transactions_set_input {block_time?: (Scalars['timestamp'] | null),failed?: (Scalars['Boolean'] | null),payload?: (Scalars['String'] | null),serializer_logic_version?: (Scalars['smallint'] | null),slot?: (Scalars['bigint'] | null),tx_sig?: (Scalars['String'] | null)}


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
export interface transactions_stream_cursor_value_input {block_time?: (Scalars['timestamp'] | null),failed?: (Scalars['Boolean'] | null),payload?: (Scalars['String'] | null),serializer_logic_version?: (Scalars['smallint'] | null),slot?: (Scalars['bigint'] | null),tx_sig?: (Scalars['String'] | null)}


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


/** columns and relationships of "twaps" */
export interface twapsGenqlSelection{
    market_acct?: boolean | number
    observation_agg?: boolean | number
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


/** aggregate avg on columns */
export interface twaps_avg_fieldsGenqlSelection{
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "twaps". All fields are combined with a logical 'AND'. */
export interface twaps_bool_exp {_and?: (twaps_bool_exp[] | null),_not?: (twaps_bool_exp | null),_or?: (twaps_bool_exp[] | null),market_acct?: (String_comparison_exp | null),observation_agg?: (numeric_comparison_exp | null),proposal_acct?: (String_comparison_exp | null),token_amount?: (bigint_comparison_exp | null),updated_slot?: (bigint_comparison_exp | null)}


/** input type for incrementing numeric columns in table "twaps" */
export interface twaps_inc_input {observation_agg?: (Scalars['numeric'] | null),token_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** input type for inserting data into table "twaps" */
export interface twaps_insert_input {market_acct?: (Scalars['String'] | null),observation_agg?: (Scalars['numeric'] | null),proposal_acct?: (Scalars['String'] | null),token_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** aggregate max on columns */
export interface twaps_max_fieldsGenqlSelection{
    market_acct?: boolean | number
    observation_agg?: boolean | number
    proposal_acct?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface twaps_min_fieldsGenqlSelection{
    market_acct?: boolean | number
    observation_agg?: boolean | number
    proposal_acct?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


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
export interface twaps_order_by {market_acct?: (order_by | null),observation_agg?: (order_by | null),proposal_acct?: (order_by | null),token_amount?: (order_by | null),updated_slot?: (order_by | null)}


/** primary key columns input for table: twaps */
export interface twaps_pk_columns_input {market_acct: Scalars['String'],updated_slot: Scalars['bigint']}


/** input type for updating data in table "twaps" */
export interface twaps_set_input {market_acct?: (Scalars['String'] | null),observation_agg?: (Scalars['numeric'] | null),proposal_acct?: (Scalars['String'] | null),token_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** aggregate stddev on columns */
export interface twaps_stddev_fieldsGenqlSelection{
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface twaps_stddev_pop_fieldsGenqlSelection{
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface twaps_stddev_samp_fieldsGenqlSelection{
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "twaps" */
export interface twaps_stream_cursor_input {
/** Stream column input with initial value */
initial_value: twaps_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface twaps_stream_cursor_value_input {market_acct?: (Scalars['String'] | null),observation_agg?: (Scalars['numeric'] | null),proposal_acct?: (Scalars['String'] | null),token_amount?: (Scalars['bigint'] | null),updated_slot?: (Scalars['bigint'] | null)}


/** aggregate sum on columns */
export interface twaps_sum_fieldsGenqlSelection{
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface twaps_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (twaps_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (twaps_set_input | null),
/** filter the rows which have to be updated */
where: twaps_bool_exp}


/** aggregate var_pop on columns */
export interface twaps_var_pop_fieldsGenqlSelection{
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface twaps_var_samp_fieldsGenqlSelection{
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface twaps_variance_fieldsGenqlSelection{
    observation_agg?: boolean | number
    token_amount?: boolean | number
    updated_slot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

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
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
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

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumDaoDetailsConstraint = {
   dao_details_github_unique: 'dao_details_github_unique' as const,
   dao_details_name_unique: 'dao_details_name_unique' as const,
   dao_details_pkey: 'dao_details_pkey' as const,
   dao_details_url_unique: 'dao_details_url_unique' as const,
   dao_details_x_account_unique: 'dao_details_x_account_unique' as const,
   id_name_url: 'id_name_url' as const
}

export const enumDaoDetailsSelectColumn = {
   dao_id: 'dao_id' as const,
   description: 'description' as const,
   github: 'github' as const,
   name: 'name' as const,
   url: 'url' as const,
   x_account: 'x_account' as const
}

export const enumDaoDetailsUpdateColumn = {
   dao_id: 'dao_id' as const,
   description: 'description' as const,
   github: 'github' as const,
   name: 'name' as const,
   url: 'url' as const,
   x_account: 'x_account' as const
}

export const enumDaosConstraint = {
   dao_acct_program: 'dao_acct_program' as const,
   daos_pkey: 'daos_pkey' as const
}

export const enumDaosSelectColumn = {
   created_at: 'created_at' as const,
   dao_acct: 'dao_acct' as const,
   dao_id: 'dao_id' as const,
   mint_acct: 'mint_acct' as const,
   program_acct: 'program_acct' as const,
   updated_at: 'updated_at' as const
}

export const enumDaosUpdateColumn = {
   created_at: 'created_at' as const,
   dao_acct: 'dao_acct' as const,
   dao_id: 'dao_id' as const,
   mint_acct: 'mint_acct' as const,
   program_acct: 'program_acct' as const,
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

export const enumProposalDetailsConstraint = {
   proposal_details_pkey: 'proposal_details_pkey' as const
}

export const enumProposalDetailsSelectColumn = {
   categories: 'categories' as const,
   content: 'content' as const,
   description: 'description' as const,
   proposal_acct: 'proposal_acct' as const,
   proposal_id: 'proposal_id' as const,
   title: 'title' as const
}

export const enumProposalDetailsUpdateColumn = {
   categories: 'categories' as const,
   content: 'content' as const,
   description: 'description' as const,
   proposal_acct: 'proposal_acct' as const,
   proposal_id: 'proposal_id' as const,
   title: 'title' as const
}

export const enumProposalsConstraint = {
   proposals_pkey: 'proposals_pkey' as const
}

export const enumProposalsSelectColumn = {
   autocrat_version: 'autocrat_version' as const,
   dao_acct: 'dao_acct' as const,
   description_url: 'description_url' as const,
   initial_slot: 'initial_slot' as const,
   proposal_acct: 'proposal_acct' as const,
   proposal_num: 'proposal_num' as const,
   proposer_acct: 'proposer_acct' as const,
   status: 'status' as const,
   updated_at: 'updated_at' as const
}

export const enumProposalsUpdateColumn = {
   autocrat_version: 'autocrat_version' as const,
   dao_acct: 'dao_acct' as const,
   description_url: 'description_url' as const,
   initial_slot: 'initial_slot' as const,
   proposal_acct: 'proposal_acct' as const,
   proposal_num: 'proposal_num' as const,
   proposer_acct: 'proposer_acct' as const,
   status: 'status' as const,
   updated_at: 'updated_at' as const
}

export const enumTokenAcctsConstraint = {
   token_accts_pkey: 'token_accts_pkey' as const
}

export const enumTokenAcctsSelectColumn = {
   amount: 'amount' as const,
   mint_acct: 'mint_acct' as const,
   owner_acct: 'owner_acct' as const,
   token_acct: 'token_acct' as const,
   updated_at: 'updated_at' as const
}

export const enumTokenAcctsUpdateColumn = {
   amount: 'amount' as const,
   mint_acct: 'mint_acct' as const,
   owner_acct: 'owner_acct' as const,
   token_acct: 'token_acct' as const,
   updated_at: 'updated_at' as const
}

export const enumTokensConstraint = {
   tokens_pkey: 'tokens_pkey' as const
}

export const enumTokensSelectColumn = {
   decimals: 'decimals' as const,
   mint_acct: 'mint_acct' as const,
   name: 'name' as const,
   supply: 'supply' as const,
   symbol: 'symbol' as const,
   updated_at: 'updated_at' as const
}

export const enumTokensUpdateColumn = {
   decimals: 'decimals' as const,
   mint_acct: 'mint_acct' as const,
   name: 'name' as const,
   supply: 'supply' as const,
   symbol: 'symbol' as const,
   updated_at: 'updated_at' as const
}

export const enumTransactionsConstraint = {
   transactions_pkey: 'transactions_pkey' as const
}

export const enumTransactionsSelectColumn = {
   block_time: 'block_time' as const,
   failed: 'failed' as const,
   payload: 'payload' as const,
   serializer_logic_version: 'serializer_logic_version' as const,
   slot: 'slot' as const,
   tx_sig: 'tx_sig' as const
}

export const enumTransactionsUpdateColumn = {
   block_time: 'block_time' as const,
   failed: 'failed' as const,
   payload: 'payload' as const,
   serializer_logic_version: 'serializer_logic_version' as const,
   slot: 'slot' as const,
   tx_sig: 'tx_sig' as const
}

export const enumTwapsConstraint = {
   twaps_market_acct_updated_slot_pk: 'twaps_market_acct_updated_slot_pk' as const
}

export const enumTwapsSelectColumn = {
   market_acct: 'market_acct' as const,
   observation_agg: 'observation_agg' as const,
   proposal_acct: 'proposal_acct' as const,
   token_amount: 'token_amount' as const,
   updated_slot: 'updated_slot' as const
}

export const enumTwapsUpdateColumn = {
   market_acct: 'market_acct' as const,
   observation_agg: 'observation_agg' as const,
   proposal_acct: 'proposal_acct' as const,
   token_amount: 'token_amount' as const,
   updated_slot: 'updated_slot' as const
}
