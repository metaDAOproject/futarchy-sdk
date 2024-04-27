export default {
    "scalars": [
        0,
        2,
        3,
        5,
        7,
        19,
        30,
        42,
        60,
        72,
        84,
        100,
        111,
        115,
        117,
        123,
        133,
        141,
        156,
        168,
        180,
        188,
        198,
        208,
        212,
        219,
        229,
        237,
        242,
        257,
        269,
        270,
        271,
        283,
        301,
        313,
        325,
        333,
        335,
        348,
        360,
        361,
        362,
        374,
        402,
        413,
        414,
        415,
        416,
        417,
        418,
        419,
        420,
        421,
        433,
        446,
        456,
        464,
        480,
        495,
        507,
        535,
        547,
        548,
        549,
        550,
        551,
        552,
        553,
        554,
        555,
        567,
        585,
        596,
        608,
        616,
        628,
        640,
        652,
        660,
        672,
        684,
        696,
        709,
        719,
        727,
        742,
        753,
        765,
        783,
        795,
        807,
        820,
        830,
        838,
        853,
        864,
        876,
        888,
        895,
        899
    ],
    "types": {
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                0
            ],
            "_gt": [
                0
            ],
            "_gte": [
                0
            ],
            "_in": [
                0
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                0
            ],
            "_lte": [
                0
            ],
            "_neq": [
                0
            ],
            "_nin": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "Float": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                3
            ],
            "_gt": [
                3
            ],
            "_gte": [
                3
            ],
            "_in": [
                3
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                3
            ],
            "_lte": [
                3
            ],
            "_neq": [
                3
            ],
            "_nin": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                5
            ],
            "_gt": [
                5
            ],
            "_gte": [
                5
            ],
            "_ilike": [
                5
            ],
            "_in": [
                5
            ],
            "_iregex": [
                5
            ],
            "_is_null": [
                0
            ],
            "_like": [
                5
            ],
            "_lt": [
                5
            ],
            "_lte": [
                5
            ],
            "_neq": [
                5
            ],
            "_nilike": [
                5
            ],
            "_nin": [
                5
            ],
            "_niregex": [
                5
            ],
            "_nlike": [
                5
            ],
            "_nregex": [
                5
            ],
            "_nsimilar": [
                5
            ],
            "_regex": [
                5
            ],
            "_similar": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "bigint": {},
        "bigint_comparison_exp": {
            "_eq": [
                7
            ],
            "_gt": [
                7
            ],
            "_gte": [
                7
            ],
            "_in": [
                7
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                7
            ],
            "_lte": [
                7
            ],
            "_neq": [
                7
            ],
            "_nin": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market": [
                291
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                660
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate": {
            "aggregate": [
                13
            ],
            "nodes": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate_bool_exp": {
            "count": [
                12
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate_bool_exp_count": {
            "arguments": [
                30
            ],
            "distinct": [
                0
            ],
            "filter": [
                18
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate_fields": {
            "avg": [
                16
            ],
            "count": [
                3,
                {
                    "columns": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                22
            ],
            "min": [
                24
            ],
            "stddev": [
                32
            ],
            "stddev_pop": [
                34
            ],
            "stddev_samp": [
                36
            ],
            "sum": [
                40
            ],
            "var_pop": [
                44
            ],
            "var_samp": [
                46
            ],
            "variance": [
                48
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate_order_by": {
            "avg": [
                17
            ],
            "count": [
                335
            ],
            "max": [
                23
            ],
            "min": [
                25
            ],
            "stddev": [
                33
            ],
            "stddev_pop": [
                35
            ],
            "stddev_samp": [
                37
            ],
            "sum": [
                41
            ],
            "var_pop": [
                45
            ],
            "var_samp": [
                47
            ],
            "variance": [
                49
            ],
            "__typename": [
                5
            ]
        },
        "candles_arr_rel_insert_input": {
            "data": [
                21
            ],
            "on_conflict": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "candles_avg_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_avg_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "open": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_bool_exp": {
            "_and": [
                18
            ],
            "_not": [
                18
            ],
            "_or": [
                18
            ],
            "candle_average": [
                8
            ],
            "candle_duration": [
                4
            ],
            "close": [
                8
            ],
            "cond_market_twap": [
                8
            ],
            "high": [
                8
            ],
            "low": [
                8
            ],
            "market": [
                300
            ],
            "market_acct": [
                6
            ],
            "open": [
                8
            ],
            "timestamp": [
                661
            ],
            "volume": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "candles_constraint": {},
        "candles_inc_input": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "open": [
                7
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_insert_input": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market": [
                309
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                660
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_max_fields": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                660
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_max_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "market_acct": [
                335
            ],
            "open": [
                335
            ],
            "timestamp": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_min_fields": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                660
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_min_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "market_acct": [
                335
            ],
            "open": [
                335
            ],
            "timestamp": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "candles_on_conflict": {
            "constraint": [
                19
            ],
            "update_columns": [
                42
            ],
            "where": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "candles_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "market": [
                311
            ],
            "market_acct": [
                335
            ],
            "open": [
                335
            ],
            "timestamp": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_pk_columns_input": {
            "candle_duration": [
                3
            ],
            "market_acct": [
                5
            ],
            "timestamp": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "candles_select_column": {},
        "candles_set_input": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                660
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "open": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_pop_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_pop_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "open": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_samp_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_stddev_samp_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "open": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_stream_cursor_input": {
            "initial_value": [
                39
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "candles_stream_cursor_value_input": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                660
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_sum_fields": {
            "candle_average": [
                7
            ],
            "candle_duration": [
                3
            ],
            "close": [
                7
            ],
            "cond_market_twap": [
                7
            ],
            "high": [
                7
            ],
            "low": [
                7
            ],
            "open": [
                7
            ],
            "volume": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "candles_sum_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "open": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_update_column": {},
        "candles_updates": {
            "_inc": [
                20
            ],
            "_set": [
                31
            ],
            "where": [
                18
            ],
            "__typename": [
                5
            ]
        },
        "candles_var_pop_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_var_pop_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "open": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_var_samp_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_var_samp_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "open": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "candles_variance_fields": {
            "candle_average": [
                2
            ],
            "candle_duration": [
                2
            ],
            "close": [
                2
            ],
            "cond_market_twap": [
                2
            ],
            "high": [
                2
            ],
            "low": [
                2
            ],
            "open": [
                2
            ],
            "volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "candles_variance_order_by": {
            "candle_average": [
                335
            ],
            "candle_duration": [
                335
            ],
            "close": [
                335
            ],
            "cond_market_twap": [
                335
            ],
            "high": [
                335
            ],
            "low": [
                335
            ],
            "open": [
                335
            ],
            "volume": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments": {
            "comment": [
                50
            ],
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "comments": [
                50,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_aggregate": [
                51,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "content": [
                5
            ],
            "created_at": [
                660
            ],
            "proposal": [
                515
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                575,
                {
                    "distinct_on": [
                        596,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        594,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "reactions_aggregate": [
                576,
                {
                    "distinct_on": [
                        596,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        594,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate": {
            "aggregate": [
                54
            ],
            "nodes": [
                50
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate_bool_exp": {
            "count": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate_bool_exp_count": {
            "arguments": [
                72
            ],
            "distinct": [
                0
            ],
            "filter": [
                59
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate_fields": {
            "avg": [
                57
            ],
            "count": [
                3,
                {
                    "columns": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                63
            ],
            "min": [
                65
            ],
            "stddev": [
                74
            ],
            "stddev_pop": [
                76
            ],
            "stddev_samp": [
                78
            ],
            "sum": [
                82
            ],
            "var_pop": [
                86
            ],
            "var_samp": [
                88
            ],
            "variance": [
                90
            ],
            "__typename": [
                5
            ]
        },
        "comments_aggregate_order_by": {
            "avg": [
                58
            ],
            "count": [
                335
            ],
            "max": [
                64
            ],
            "min": [
                66
            ],
            "stddev": [
                75
            ],
            "stddev_pop": [
                77
            ],
            "stddev_samp": [
                79
            ],
            "sum": [
                83
            ],
            "var_pop": [
                87
            ],
            "var_samp": [
                89
            ],
            "variance": [
                91
            ],
            "__typename": [
                5
            ]
        },
        "comments_arr_rel_insert_input": {
            "data": [
                62
            ],
            "on_conflict": [
                69
            ],
            "__typename": [
                5
            ]
        },
        "comments_avg_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_avg_order_by": {
            "comment_id": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_bool_exp": {
            "_and": [
                59
            ],
            "_not": [
                59
            ],
            "_or": [
                59
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "commentor_acct": [
                6
            ],
            "comments": [
                59
            ],
            "comments_aggregate": [
                52
            ],
            "content": [
                6
            ],
            "created_at": [
                661
            ],
            "proposal": [
                534
            ],
            "proposal_acct": [
                6
            ],
            "reactions": [
                584
            ],
            "reactions_aggregate": [
                577
            ],
            "responding_comment_id": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "comments_constraint": {},
        "comments_inc_input": {
            "comment_id": [
                7
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_insert_input": {
            "comment": [
                68
            ],
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "comments": [
                56
            ],
            "content": [
                5
            ],
            "created_at": [
                660
            ],
            "proposal": [
                543
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                581
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_max_fields": {
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "content": [
                5
            ],
            "created_at": [
                660
            ],
            "proposal_acct": [
                5
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_max_order_by": {
            "comment_id": [
                335
            ],
            "commentor_acct": [
                335
            ],
            "content": [
                335
            ],
            "created_at": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_min_fields": {
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "content": [
                5
            ],
            "created_at": [
                660
            ],
            "proposal_acct": [
                5
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_min_order_by": {
            "comment_id": [
                335
            ],
            "commentor_acct": [
                335
            ],
            "content": [
                335
            ],
            "created_at": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                50
            ],
            "__typename": [
                5
            ]
        },
        "comments_obj_rel_insert_input": {
            "data": [
                62
            ],
            "on_conflict": [
                69
            ],
            "__typename": [
                5
            ]
        },
        "comments_on_conflict": {
            "constraint": [
                60
            ],
            "update_columns": [
                84
            ],
            "where": [
                59
            ],
            "__typename": [
                5
            ]
        },
        "comments_order_by": {
            "comment": [
                70
            ],
            "comment_id": [
                335
            ],
            "commentor_acct": [
                335
            ],
            "comments_aggregate": [
                55
            ],
            "content": [
                335
            ],
            "created_at": [
                335
            ],
            "proposal": [
                545
            ],
            "proposal_acct": [
                335
            ],
            "reactions_aggregate": [
                580
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_pk_columns_input": {
            "comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_select_column": {},
        "comments_set_input": {
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "content": [
                5
            ],
            "created_at": [
                660
            ],
            "proposal_acct": [
                5
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_order_by": {
            "comment_id": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_pop_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_pop_order_by": {
            "comment_id": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_samp_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_stddev_samp_order_by": {
            "comment_id": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_stream_cursor_input": {
            "initial_value": [
                81
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "comments_stream_cursor_value_input": {
            "comment_id": [
                7
            ],
            "commentor_acct": [
                5
            ],
            "content": [
                5
            ],
            "created_at": [
                660
            ],
            "proposal_acct": [
                5
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_sum_fields": {
            "comment_id": [
                7
            ],
            "responding_comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "comments_sum_order_by": {
            "comment_id": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_update_column": {},
        "comments_updates": {
            "_inc": [
                61
            ],
            "_set": [
                73
            ],
            "where": [
                59
            ],
            "__typename": [
                5
            ]
        },
        "comments_var_pop_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_var_pop_order_by": {
            "comment_id": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_var_samp_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_var_samp_order_by": {
            "comment_id": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "comments_variance_fields": {
            "comment_id": [
                2
            ],
            "responding_comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "comments_variance_order_by": {
            "comment_id": [
                335
            ],
            "responding_comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "dao": [
                146
            ],
            "nonce": [
                5
            ],
            "proposals": [
                515,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "proposalsByQuoteVault": [
                515,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "proposalsByQuoteVault_aggregate": [
                516,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "proposals_aggregate": [
                516,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "token": [
                704
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate": {
            "aggregate": [
                96
            ],
            "nodes": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate_bool_exp": {
            "count": [
                95
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate_bool_exp_count": {
            "arguments": [
                111
            ],
            "distinct": [
                0
            ],
            "filter": [
                99
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                102
            ],
            "min": [
                104
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_aggregate_order_by": {
            "count": [
                335
            ],
            "max": [
                103
            ],
            "min": [
                105
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_arr_rel_insert_input": {
            "data": [
                101
            ],
            "on_conflict": [
                108
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_bool_exp": {
            "_and": [
                99
            ],
            "_not": [
                99
            ],
            "_or": [
                99
            ],
            "cond_finalize_token_mint_acct": [
                6
            ],
            "cond_revert_token_mint_acct": [
                6
            ],
            "cond_vault_acct": [
                6
            ],
            "dao": [
                155
            ],
            "nonce": [
                6
            ],
            "proposals": [
                534
            ],
            "proposalsByQuoteVault": [
                534
            ],
            "proposalsByQuoteVault_aggregate": [
                517
            ],
            "proposals_aggregate": [
                517
            ],
            "settlement_authority": [
                6
            ],
            "status": [
                6
            ],
            "token": [
                708
            ],
            "underlying_mint_acct": [
                6
            ],
            "underlying_token_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_constraint": {},
        "conditional_vaults_insert_input": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "dao": [
                164
            ],
            "nonce": [
                5
            ],
            "proposals": [
                531
            ],
            "proposalsByQuoteVault": [
                531
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "token": [
                715
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_max_fields": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_max_order_by": {
            "cond_finalize_token_mint_acct": [
                335
            ],
            "cond_revert_token_mint_acct": [
                335
            ],
            "cond_vault_acct": [
                335
            ],
            "nonce": [
                335
            ],
            "settlement_authority": [
                335
            ],
            "status": [
                335
            ],
            "underlying_mint_acct": [
                335
            ],
            "underlying_token_acct": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_min_fields": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_min_order_by": {
            "cond_finalize_token_mint_acct": [
                335
            ],
            "cond_revert_token_mint_acct": [
                335
            ],
            "cond_vault_acct": [
                335
            ],
            "nonce": [
                335
            ],
            "settlement_authority": [
                335
            ],
            "status": [
                335
            ],
            "underlying_mint_acct": [
                335
            ],
            "underlying_token_acct": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_obj_rel_insert_input": {
            "data": [
                101
            ],
            "on_conflict": [
                108
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_on_conflict": {
            "constraint": [
                100
            ],
            "update_columns": [
                115
            ],
            "where": [
                99
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_order_by": {
            "cond_finalize_token_mint_acct": [
                335
            ],
            "cond_revert_token_mint_acct": [
                335
            ],
            "cond_vault_acct": [
                335
            ],
            "dao": [
                166
            ],
            "nonce": [
                335
            ],
            "proposalsByQuoteVault_aggregate": [
                530
            ],
            "proposals_aggregate": [
                530
            ],
            "settlement_authority": [
                335
            ],
            "status": [
                335
            ],
            "token": [
                717
            ],
            "underlying_mint_acct": [
                335
            ],
            "underlying_token_acct": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_pk_columns_input": {
            "cond_vault_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_select_column": {},
        "conditional_vaults_set_input": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_stream_cursor_input": {
            "initial_value": [
                114
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_stream_cursor_value_input": {
            "cond_finalize_token_mint_acct": [
                5
            ],
            "cond_revert_token_mint_acct": [
                5
            ],
            "cond_vault_acct": [
                5
            ],
            "nonce": [
                5
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "underlying_mint_acct": [
                5
            ],
            "underlying_token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "conditional_vaults_update_column": {},
        "conditional_vaults_updates": {
            "_set": [
                112
            ],
            "where": [
                99
            ],
            "__typename": [
                5
            ]
        },
        "cursor_ordering": {},
        "dao_details": {
            "dao_id": [
                7
            ],
            "daos": [
                146,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "daos_aggregate": [
                147,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "description": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_aggregate": {
            "aggregate": [
                120
            ],
            "nodes": [
                118
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_aggregate_fields": {
            "avg": [
                121
            ],
            "count": [
                3,
                {
                    "columns": [
                        133,
                        "[dao_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                126
            ],
            "min": [
                127
            ],
            "stddev": [
                135
            ],
            "stddev_pop": [
                136
            ],
            "stddev_samp": [
                137
            ],
            "sum": [
                140
            ],
            "var_pop": [
                143
            ],
            "var_samp": [
                144
            ],
            "variance": [
                145
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_avg_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_bool_exp": {
            "_and": [
                122
            ],
            "_not": [
                122
            ],
            "_or": [
                122
            ],
            "dao_id": [
                8
            ],
            "daos": [
                155
            ],
            "daos_aggregate": [
                148
            ],
            "description": [
                6
            ],
            "github": [
                6
            ],
            "image_url": [
                6
            ],
            "name": [
                6
            ],
            "slug": [
                6
            ],
            "url": [
                6
            ],
            "x_account": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_constraint": {},
        "dao_details_inc_input": {
            "dao_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_insert_input": {
            "dao_id": [
                7
            ],
            "daos": [
                152
            ],
            "description": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_max_fields": {
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_min_fields": {
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                118
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_obj_rel_insert_input": {
            "data": [
                125
            ],
            "on_conflict": [
                130
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_on_conflict": {
            "constraint": [
                123
            ],
            "update_columns": [
                141
            ],
            "where": [
                122
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_order_by": {
            "dao_id": [
                335
            ],
            "daos_aggregate": [
                151
            ],
            "description": [
                335
            ],
            "github": [
                335
            ],
            "image_url": [
                335
            ],
            "name": [
                335
            ],
            "slug": [
                335
            ],
            "url": [
                335
            ],
            "x_account": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_pk_columns_input": {
            "dao_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_select_column": {},
        "dao_details_set_input": {
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stddev_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stddev_pop_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stddev_samp_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stream_cursor_input": {
            "initial_value": [
                139
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stream_cursor_value_input": {
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "name": [
                5
            ],
            "slug": [
                5
            ],
            "url": [
                5
            ],
            "x_account": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_sum_fields": {
            "dao_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_update_column": {},
        "dao_details_updates": {
            "_inc": [
                124
            ],
            "_set": [
                134
            ],
            "where": [
                122
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_var_pop_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_var_samp_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_variance_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos": {
            "base_acct": [
                5
            ],
            "conditional_vaults": [
                92,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_aggregate": [
                93,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "created_at": [
                660
            ],
            "dao_acct": [
                5
            ],
            "dao_detail": [
                118
            ],
            "dao_id": [
                7
            ],
            "program": [
                441
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                515,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "proposals_aggregate": [
                516,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "quote_acct": [
                5
            ],
            "token": [
                704
            ],
            "tokenByBaseAcct": [
                704
            ],
            "tokenByQuoteAcct": [
                704
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate": {
            "aggregate": [
                150
            ],
            "nodes": [
                146
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp": {
            "count": [
                149
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp_count": {
            "arguments": [
                168
            ],
            "distinct": [
                0
            ],
            "filter": [
                155
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_fields": {
            "avg": [
                153
            ],
            "count": [
                3,
                {
                    "columns": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                159
            ],
            "min": [
                161
            ],
            "stddev": [
                170
            ],
            "stddev_pop": [
                172
            ],
            "stddev_samp": [
                174
            ],
            "sum": [
                178
            ],
            "var_pop": [
                182
            ],
            "var_samp": [
                184
            ],
            "variance": [
                186
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_order_by": {
            "avg": [
                154
            ],
            "count": [
                335
            ],
            "max": [
                160
            ],
            "min": [
                162
            ],
            "stddev": [
                171
            ],
            "stddev_pop": [
                173
            ],
            "stddev_samp": [
                175
            ],
            "sum": [
                179
            ],
            "var_pop": [
                183
            ],
            "var_samp": [
                185
            ],
            "variance": [
                187
            ],
            "__typename": [
                5
            ]
        },
        "daos_arr_rel_insert_input": {
            "data": [
                158
            ],
            "on_conflict": [
                165
            ],
            "__typename": [
                5
            ]
        },
        "daos_avg_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_avg_order_by": {
            "dao_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_bool_exp": {
            "_and": [
                155
            ],
            "_not": [
                155
            ],
            "_or": [
                155
            ],
            "base_acct": [
                6
            ],
            "conditional_vaults": [
                99
            ],
            "conditional_vaults_aggregate": [
                94
            ],
            "created_at": [
                661
            ],
            "dao_acct": [
                6
            ],
            "dao_detail": [
                122
            ],
            "dao_id": [
                8
            ],
            "program": [
                445
            ],
            "program_acct": [
                6
            ],
            "proposals": [
                534
            ],
            "proposals_aggregate": [
                517
            ],
            "quote_acct": [
                6
            ],
            "token": [
                708
            ],
            "tokenByBaseAcct": [
                708
            ],
            "tokenByQuoteAcct": [
                708
            ],
            "treasury_acct": [
                6
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "daos_constraint": {},
        "daos_inc_input": {
            "dao_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "daos_insert_input": {
            "base_acct": [
                5
            ],
            "conditional_vaults": [
                98
            ],
            "created_at": [
                660
            ],
            "dao_acct": [
                5
            ],
            "dao_detail": [
                129
            ],
            "dao_id": [
                7
            ],
            "program": [
                452
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                531
            ],
            "quote_acct": [
                5
            ],
            "token": [
                715
            ],
            "tokenByBaseAcct": [
                715
            ],
            "tokenByQuoteAcct": [
                715
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "daos_max_fields": {
            "base_acct": [
                5
            ],
            "created_at": [
                660
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "daos_max_order_by": {
            "base_acct": [
                335
            ],
            "created_at": [
                335
            ],
            "dao_acct": [
                335
            ],
            "dao_id": [
                335
            ],
            "program_acct": [
                335
            ],
            "quote_acct": [
                335
            ],
            "treasury_acct": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_min_fields": {
            "base_acct": [
                5
            ],
            "created_at": [
                660
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "daos_min_order_by": {
            "base_acct": [
                335
            ],
            "created_at": [
                335
            ],
            "dao_acct": [
                335
            ],
            "dao_id": [
                335
            ],
            "program_acct": [
                335
            ],
            "quote_acct": [
                335
            ],
            "treasury_acct": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                146
            ],
            "__typename": [
                5
            ]
        },
        "daos_obj_rel_insert_input": {
            "data": [
                158
            ],
            "on_conflict": [
                165
            ],
            "__typename": [
                5
            ]
        },
        "daos_on_conflict": {
            "constraint": [
                156
            ],
            "update_columns": [
                180
            ],
            "where": [
                155
            ],
            "__typename": [
                5
            ]
        },
        "daos_order_by": {
            "base_acct": [
                335
            ],
            "conditional_vaults_aggregate": [
                97
            ],
            "created_at": [
                335
            ],
            "dao_acct": [
                335
            ],
            "dao_detail": [
                131
            ],
            "dao_id": [
                335
            ],
            "program": [
                454
            ],
            "program_acct": [
                335
            ],
            "proposals_aggregate": [
                530
            ],
            "quote_acct": [
                335
            ],
            "token": [
                717
            ],
            "tokenByBaseAcct": [
                717
            ],
            "tokenByQuoteAcct": [
                717
            ],
            "treasury_acct": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_pk_columns_input": {
            "dao_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "daos_select_column": {},
        "daos_set_input": {
            "base_acct": [
                5
            ],
            "created_at": [
                660
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_order_by": {
            "dao_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_pop_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_pop_order_by": {
            "dao_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_samp_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_samp_order_by": {
            "dao_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_stream_cursor_input": {
            "initial_value": [
                177
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "daos_stream_cursor_value_input": {
            "base_acct": [
                5
            ],
            "created_at": [
                660
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "daos_sum_fields": {
            "dao_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "daos_sum_order_by": {
            "dao_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_update_column": {},
        "daos_updates": {
            "_inc": [
                157
            ],
            "_set": [
                169
            ],
            "where": [
                155
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_pop_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_pop_order_by": {
            "dao_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_samp_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_samp_order_by": {
            "dao_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "daos_variance_fields": {
            "dao_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_variance_order_by": {
            "dao_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "float8": {},
        "float8_comparison_exp": {
            "_eq": [
                188
            ],
            "_gt": [
                188
            ],
            "_gte": [
                188
            ],
            "_in": [
                188
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                188
            ],
            "_lte": [
                188
            ],
            "_neq": [
                188
            ],
            "_nin": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies": {
            "acct": [
                5
            ],
            "indexer": [
                214
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "transaction": [
                815
            ],
            "transaction_watcher": [
                773
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate": {
            "aggregate": [
                194
            ],
            "nodes": [
                190
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp": {
            "count": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp_count": {
            "arguments": [
                208
            ],
            "distinct": [
                0
            ],
            "filter": [
                197
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                200
            ],
            "min": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_order_by": {
            "count": [
                335
            ],
            "max": [
                201
            ],
            "min": [
                203
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_arr_rel_insert_input": {
            "data": [
                199
            ],
            "on_conflict": [
                205
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_bool_exp": {
            "_and": [
                197
            ],
            "_not": [
                197
            ],
            "_or": [
                197
            ],
            "acct": [
                6
            ],
            "indexer": [
                218
            ],
            "latest_tx_sig_processed": [
                6
            ],
            "name": [
                6
            ],
            "transaction": [
                819
            ],
            "transaction_watcher": [
                782
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_constraint": {},
        "indexer_account_dependencies_insert_input": {
            "acct": [
                5
            ],
            "indexer": [
                225
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "transaction": [
                826
            ],
            "transaction_watcher": [
                791
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_max_fields": {
            "acct": [
                5
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_max_order_by": {
            "acct": [
                335
            ],
            "latest_tx_sig_processed": [
                335
            ],
            "name": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_min_fields": {
            "acct": [
                5
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_min_order_by": {
            "acct": [
                335
            ],
            "latest_tx_sig_processed": [
                335
            ],
            "name": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                190
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_on_conflict": {
            "constraint": [
                198
            ],
            "update_columns": [
                212
            ],
            "where": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_order_by": {
            "acct": [
                335
            ],
            "indexer": [
                227
            ],
            "latest_tx_sig_processed": [
                335
            ],
            "name": [
                335
            ],
            "transaction": [
                828
            ],
            "transaction_watcher": [
                793
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_pk_columns_input": {
            "acct": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_select_column": {},
        "indexer_account_dependencies_set_input": {
            "acct": [
                5
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_stream_cursor_input": {
            "initial_value": [
                211
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_stream_cursor_value_input": {
            "acct": [
                5
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_update_column": {},
        "indexer_account_dependencies_updates": {
            "_set": [
                209
            ],
            "where": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "indexers": {
            "implementation": [
                5
            ],
            "indexer_account_dependencies": [
                190,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                191,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_aggregate": {
            "aggregate": [
                216
            ],
            "nodes": [
                214
            ],
            "__typename": [
                5
            ]
        },
        "indexers_aggregate_fields": {
            "avg": [
                217
            ],
            "count": [
                3,
                {
                    "columns": [
                        229,
                        "[indexers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                222
            ],
            "min": [
                223
            ],
            "stddev": [
                231
            ],
            "stddev_pop": [
                232
            ],
            "stddev_samp": [
                233
            ],
            "sum": [
                236
            ],
            "var_pop": [
                239
            ],
            "var_samp": [
                240
            ],
            "variance": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "indexers_avg_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_bool_exp": {
            "_and": [
                218
            ],
            "_not": [
                218
            ],
            "_or": [
                218
            ],
            "implementation": [
                6
            ],
            "indexer_account_dependencies": [
                197
            ],
            "indexer_account_dependencies_aggregate": [
                192
            ],
            "latest_slot_processed": [
                8
            ],
            "name": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "indexers_constraint": {},
        "indexers_inc_input": {
            "latest_slot_processed": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "indexers_insert_input": {
            "implementation": [
                5
            ],
            "indexer_account_dependencies": [
                196
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_max_fields": {
            "implementation": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_min_fields": {
            "implementation": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                214
            ],
            "__typename": [
                5
            ]
        },
        "indexers_obj_rel_insert_input": {
            "data": [
                221
            ],
            "on_conflict": [
                226
            ],
            "__typename": [
                5
            ]
        },
        "indexers_on_conflict": {
            "constraint": [
                219
            ],
            "update_columns": [
                237
            ],
            "where": [
                218
            ],
            "__typename": [
                5
            ]
        },
        "indexers_order_by": {
            "implementation": [
                335
            ],
            "indexer_account_dependencies_aggregate": [
                195
            ],
            "latest_slot_processed": [
                335
            ],
            "name": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "indexers_pk_columns_input": {
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_select_column": {},
        "indexers_set_input": {
            "implementation": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stddev_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stddev_pop_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stddev_samp_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stream_cursor_input": {
            "initial_value": [
                235
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "indexers_stream_cursor_value_input": {
            "implementation": [
                5
            ],
            "latest_slot_processed": [
                7
            ],
            "name": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "indexers_sum_fields": {
            "latest_slot_processed": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "indexers_update_column": {},
        "indexers_updates": {
            "_inc": [
                220
            ],
            "_set": [
                230
            ],
            "where": [
                218
            ],
            "__typename": [
                5
            ]
        },
        "indexers_var_pop_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_var_samp_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "indexers_variance_fields": {
            "latest_slot_processed": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "jsonb": {},
        "jsonb_cast_exp": {
            "String": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "jsonb_comparison_exp": {
            "_cast": [
                243
            ],
            "_contained_in": [
                242
            ],
            "_contains": [
                242
            ],
            "_eq": [
                242
            ],
            "_gt": [
                242
            ],
            "_gte": [
                242
            ],
            "_has_key": [
                5
            ],
            "_has_keys_all": [
                5
            ],
            "_has_keys_any": [
                5
            ],
            "_in": [
                242
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                242
            ],
            "_lte": [
                242
            ],
            "_neq": [
                242
            ],
            "_nin": [
                242
            ],
            "__typename": [
                5
            ]
        },
        "makes": {
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market": [
                291
            ],
            "market_acct": [
                5
            ],
            "order": [
                336
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "takes": [
                618,
                {
                    "distinct_on": [
                        640,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        638,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        627
                    ]
                }
            ],
            "takes_aggregate": [
                619,
                {
                    "distinct_on": [
                        640,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        638,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        627
                    ]
                }
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate": {
            "aggregate": [
                251
            ],
            "nodes": [
                245
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp": {
            "bool_and": [
                248
            ],
            "bool_or": [
                249
            ],
            "count": [
                250
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_bool_and": {
            "arguments": [
                270
            ],
            "distinct": [
                0
            ],
            "filter": [
                256
            ],
            "predicate": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_bool_or": {
            "arguments": [
                271
            ],
            "distinct": [
                0
            ],
            "filter": [
                256
            ],
            "predicate": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_count": {
            "arguments": [
                269
            ],
            "distinct": [
                0
            ],
            "filter": [
                256
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_fields": {
            "avg": [
                254
            ],
            "count": [
                3,
                {
                    "columns": [
                        269,
                        "[makes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                260
            ],
            "min": [
                262
            ],
            "stddev": [
                273
            ],
            "stddev_pop": [
                275
            ],
            "stddev_samp": [
                277
            ],
            "sum": [
                281
            ],
            "var_pop": [
                285
            ],
            "var_samp": [
                287
            ],
            "variance": [
                289
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_order_by": {
            "avg": [
                255
            ],
            "count": [
                335
            ],
            "max": [
                261
            ],
            "min": [
                263
            ],
            "stddev": [
                274
            ],
            "stddev_pop": [
                276
            ],
            "stddev_samp": [
                278
            ],
            "sum": [
                282
            ],
            "var_pop": [
                286
            ],
            "var_samp": [
                288
            ],
            "variance": [
                290
            ],
            "__typename": [
                5
            ]
        },
        "makes_arr_rel_insert_input": {
            "data": [
                259
            ],
            "on_conflict": [
                266
            ],
            "__typename": [
                5
            ]
        },
        "makes_avg_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_avg_order_by": {
            "filled_base_amount": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_bool_exp": {
            "_and": [
                256
            ],
            "_not": [
                256
            ],
            "_or": [
                256
            ],
            "filled_base_amount": [
                8
            ],
            "is_active": [
                1
            ],
            "market": [
                300
            ],
            "market_acct": [
                6
            ],
            "order": [
                347
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                8
            ],
            "takes": [
                627
            ],
            "takes_aggregate": [
                620
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "makes_constraint": {},
        "makes_inc_input": {
            "filled_base_amount": [
                7
            ],
            "quote_price": [
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "makes_insert_input": {
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market": [
                309
            ],
            "market_acct": [
                5
            ],
            "order": [
                356
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "takes": [
                624
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "makes_max_fields": {
            "filled_base_amount": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "makes_max_order_by": {
            "filled_base_amount": [
                335
            ],
            "market_acct": [
                335
            ],
            "order_tx_sig": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_min_fields": {
            "filled_base_amount": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "makes_min_order_by": {
            "filled_base_amount": [
                335
            ],
            "market_acct": [
                335
            ],
            "order_tx_sig": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                245
            ],
            "__typename": [
                5
            ]
        },
        "makes_obj_rel_insert_input": {
            "data": [
                259
            ],
            "on_conflict": [
                266
            ],
            "__typename": [
                5
            ]
        },
        "makes_on_conflict": {
            "constraint": [
                257
            ],
            "update_columns": [
                283
            ],
            "where": [
                256
            ],
            "__typename": [
                5
            ]
        },
        "makes_order_by": {
            "filled_base_amount": [
                335
            ],
            "is_active": [
                335
            ],
            "market": [
                311
            ],
            "market_acct": [
                335
            ],
            "order": [
                358
            ],
            "order_tx_sig": [
                335
            ],
            "quote_price": [
                335
            ],
            "takes_aggregate": [
                623
            ],
            "unfilled_base_amount": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_pk_columns_input": {
            "order_tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "makes_select_column": {},
        "makes_select_column_makes_aggregate_bool_exp_bool_and_arguments_columns": {},
        "makes_select_column_makes_aggregate_bool_exp_bool_or_arguments_columns": {},
        "makes_set_input": {
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market_acct": [
                5
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_order_by": {
            "filled_base_amount": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_pop_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_pop_order_by": {
            "filled_base_amount": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_samp_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_stddev_samp_order_by": {
            "filled_base_amount": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_stream_cursor_input": {
            "initial_value": [
                280
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "makes_stream_cursor_value_input": {
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market_acct": [
                5
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "makes_sum_fields": {
            "filled_base_amount": [
                7
            ],
            "quote_price": [
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "makes_sum_order_by": {
            "filled_base_amount": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_update_column": {},
        "makes_updates": {
            "_inc": [
                258
            ],
            "_set": [
                272
            ],
            "where": [
                256
            ],
            "__typename": [
                5
            ]
        },
        "makes_var_pop_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_var_pop_order_by": {
            "filled_base_amount": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_var_samp_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_var_samp_order_by": {
            "filled_base_amount": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "makes_variance_fields": {
            "filled_base_amount": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "makes_variance_order_by": {
            "filled_base_amount": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                616
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                616
            ],
            "bids_token_acct": [
                5
            ],
            "candles": [
                9,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_aggregate": [
                10,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "create_tx_sig": [
                5
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                245,
                {
                    "distinct_on": [
                        269,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        267,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        256
                    ]
                }
            ],
            "makes_aggregate": [
                246,
                {
                    "distinct_on": [
                        269,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        267,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        256
                    ]
                }
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "orders": [
                336,
                {
                    "distinct_on": [
                        360,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        358,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        347
                    ]
                }
            ],
            "orders_aggregate": [
                337,
                {
                    "distinct_on": [
                        360,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        358,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        347
                    ]
                }
            ],
            "proposal": [
                515
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                616
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                616
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                618,
                {
                    "distinct_on": [
                        640,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        638,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        627
                    ]
                }
            ],
            "takes_aggregate": [
                619,
                {
                    "distinct_on": [
                        640,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        638,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        627
                    ]
                }
            ],
            "token": [
                704
            ],
            "tokenAcctByBidsTokenAcct": [
                662
            ],
            "tokenByQuoteMintAcct": [
                704
            ],
            "token_acct": [
                662
            ],
            "twaps": [
                843,
                {
                    "distinct_on": [
                        864,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        852
                    ]
                }
            ],
            "twaps_aggregate": [
                844,
                {
                    "distinct_on": [
                        864,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        852
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate": {
            "aggregate": [
                295
            ],
            "nodes": [
                291
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp": {
            "count": [
                294
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp_count": {
            "arguments": [
                313
            ],
            "distinct": [
                0
            ],
            "filter": [
                300
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_fields": {
            "avg": [
                298
            ],
            "count": [
                3,
                {
                    "columns": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                304
            ],
            "min": [
                306
            ],
            "stddev": [
                315
            ],
            "stddev_pop": [
                317
            ],
            "stddev_samp": [
                319
            ],
            "sum": [
                323
            ],
            "var_pop": [
                327
            ],
            "var_samp": [
                329
            ],
            "variance": [
                331
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_order_by": {
            "avg": [
                299
            ],
            "count": [
                335
            ],
            "max": [
                305
            ],
            "min": [
                307
            ],
            "stddev": [
                316
            ],
            "stddev_pop": [
                318
            ],
            "stddev_samp": [
                320
            ],
            "sum": [
                324
            ],
            "var_pop": [
                328
            ],
            "var_samp": [
                330
            ],
            "variance": [
                332
            ],
            "__typename": [
                5
            ]
        },
        "markets_arr_rel_insert_input": {
            "data": [
                303
            ],
            "on_conflict": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "markets_avg_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_avg_order_by": {
            "active_slot": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets_bool_exp": {
            "_and": [
                300
            ],
            "_not": [
                300
            ],
            "_or": [
                300
            ],
            "active_slot": [
                8
            ],
            "asks_token_acct": [
                6
            ],
            "base_lot_size": [
                8
            ],
            "base_maker_fee": [
                617
            ],
            "base_mint_acct": [
                6
            ],
            "base_taker_fee": [
                617
            ],
            "bids_token_acct": [
                6
            ],
            "candles": [
                18
            ],
            "candles_aggregate": [
                11
            ],
            "create_tx_sig": [
                6
            ],
            "inactive_slot": [
                8
            ],
            "makes": [
                256
            ],
            "makes_aggregate": [
                247
            ],
            "market_acct": [
                6
            ],
            "market_type": [
                6
            ],
            "orders": [
                347
            ],
            "orders_aggregate": [
                338
            ],
            "proposal": [
                534
            ],
            "proposal_acct": [
                6
            ],
            "quote_lot_size": [
                8
            ],
            "quote_maker_fee": [
                617
            ],
            "quote_mint_acct": [
                6
            ],
            "quote_taker_fee": [
                617
            ],
            "quote_tick_size": [
                8
            ],
            "takes": [
                627
            ],
            "takes_aggregate": [
                620
            ],
            "token": [
                708
            ],
            "tokenAcctByBidsTokenAcct": [
                671
            ],
            "tokenByQuoteMintAcct": [
                708
            ],
            "token_acct": [
                671
            ],
            "twaps": [
                852
            ],
            "twaps_aggregate": [
                845
            ],
            "__typename": [
                5
            ]
        },
        "markets_constraint": {},
        "markets_inc_input": {
            "active_slot": [
                7
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                616
            ],
            "base_taker_fee": [
                616
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                616
            ],
            "quote_taker_fee": [
                616
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_insert_input": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                616
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                616
            ],
            "bids_token_acct": [
                5
            ],
            "candles": [
                15
            ],
            "create_tx_sig": [
                5
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                253
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "orders": [
                344
            ],
            "proposal": [
                543
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                616
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                616
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                624
            ],
            "token": [
                715
            ],
            "tokenAcctByBidsTokenAcct": [
                680
            ],
            "tokenByQuoteMintAcct": [
                715
            ],
            "token_acct": [
                680
            ],
            "twaps": [
                849
            ],
            "__typename": [
                5
            ]
        },
        "markets_max_fields": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                616
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                616
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "inactive_slot": [
                7
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                616
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                616
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_max_order_by": {
            "active_slot": [
                335
            ],
            "asks_token_acct": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_mint_acct": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "bids_token_acct": [
                335
            ],
            "create_tx_sig": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "market_acct": [
                335
            ],
            "market_type": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_mint_acct": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets_min_fields": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                616
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                616
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "inactive_slot": [
                7
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                616
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                616
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_min_order_by": {
            "active_slot": [
                335
            ],
            "asks_token_acct": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_mint_acct": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "bids_token_acct": [
                335
            ],
            "create_tx_sig": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "market_acct": [
                335
            ],
            "market_type": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_mint_acct": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                291
            ],
            "__typename": [
                5
            ]
        },
        "markets_obj_rel_insert_input": {
            "data": [
                303
            ],
            "on_conflict": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "markets_on_conflict": {
            "constraint": [
                301
            ],
            "update_columns": [
                325
            ],
            "where": [
                300
            ],
            "__typename": [
                5
            ]
        },
        "markets_order_by": {
            "active_slot": [
                335
            ],
            "asks_token_acct": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_mint_acct": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "bids_token_acct": [
                335
            ],
            "candles_aggregate": [
                14
            ],
            "create_tx_sig": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "makes_aggregate": [
                252
            ],
            "market_acct": [
                335
            ],
            "market_type": [
                335
            ],
            "orders_aggregate": [
                343
            ],
            "proposal": [
                545
            ],
            "proposal_acct": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_mint_acct": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "takes_aggregate": [
                623
            ],
            "token": [
                717
            ],
            "tokenAcctByBidsTokenAcct": [
                682
            ],
            "tokenByQuoteMintAcct": [
                717
            ],
            "token_acct": [
                682
            ],
            "twaps_aggregate": [
                848
            ],
            "__typename": [
                5
            ]
        },
        "markets_pk_columns_input": {
            "market_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "markets_select_column": {},
        "markets_set_input": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                616
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                616
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "inactive_slot": [
                7
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                616
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                616
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_order_by": {
            "active_slot": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_pop_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_pop_order_by": {
            "active_slot": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_samp_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_stddev_samp_order_by": {
            "active_slot": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets_stream_cursor_input": {
            "initial_value": [
                322
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "markets_stream_cursor_value_input": {
            "active_slot": [
                7
            ],
            "asks_token_acct": [
                5
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                616
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                616
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "inactive_slot": [
                7
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                616
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                616
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_sum_fields": {
            "active_slot": [
                7
            ],
            "base_lot_size": [
                7
            ],
            "base_maker_fee": [
                616
            ],
            "base_taker_fee": [
                616
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                616
            ],
            "quote_taker_fee": [
                616
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_sum_order_by": {
            "active_slot": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets_update_column": {},
        "markets_updates": {
            "_inc": [
                302
            ],
            "_set": [
                314
            ],
            "where": [
                300
            ],
            "__typename": [
                5
            ]
        },
        "markets_var_pop_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_var_pop_order_by": {
            "active_slot": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets_var_samp_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_var_samp_order_by": {
            "active_slot": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "markets_variance_fields": {
            "active_slot": [
                2
            ],
            "base_lot_size": [
                2
            ],
            "base_maker_fee": [
                2
            ],
            "base_taker_fee": [
                2
            ],
            "inactive_slot": [
                2
            ],
            "quote_lot_size": [
                2
            ],
            "quote_maker_fee": [
                2
            ],
            "quote_taker_fee": [
                2
            ],
            "quote_tick_size": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "markets_variance_order_by": {
            "active_slot": [
                335
            ],
            "base_lot_size": [
                335
            ],
            "base_maker_fee": [
                335
            ],
            "base_taker_fee": [
                335
            ],
            "inactive_slot": [
                335
            ],
            "quote_lot_size": [
                335
            ],
            "quote_maker_fee": [
                335
            ],
            "quote_taker_fee": [
                335
            ],
            "quote_tick_size": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                333
            ],
            "_gt": [
                333
            ],
            "_gte": [
                333
            ],
            "_in": [
                333
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                333
            ],
            "_lte": [
                333
            ],
            "_neq": [
                333
            ],
            "_nin": [
                333
            ],
            "__typename": [
                5
            ]
        },
        "order_by": {},
        "orders": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                660
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "make": [
                245
            ],
            "market": [
                291
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "side": [
                5
            ],
            "take": [
                618
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate": {
            "aggregate": [
                342
            ],
            "nodes": [
                336
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp": {
            "bool_and": [
                339
            ],
            "bool_or": [
                340
            ],
            "count": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_bool_and": {
            "arguments": [
                361
            ],
            "distinct": [
                0
            ],
            "filter": [
                347
            ],
            "predicate": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_bool_or": {
            "arguments": [
                362
            ],
            "distinct": [
                0
            ],
            "filter": [
                347
            ],
            "predicate": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_count": {
            "arguments": [
                360
            ],
            "distinct": [
                0
            ],
            "filter": [
                347
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_fields": {
            "avg": [
                345
            ],
            "count": [
                3,
                {
                    "columns": [
                        360,
                        "[orders_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                351
            ],
            "min": [
                353
            ],
            "stddev": [
                364
            ],
            "stddev_pop": [
                366
            ],
            "stddev_samp": [
                368
            ],
            "sum": [
                372
            ],
            "var_pop": [
                376
            ],
            "var_samp": [
                378
            ],
            "variance": [
                380
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_order_by": {
            "avg": [
                346
            ],
            "count": [
                335
            ],
            "max": [
                352
            ],
            "min": [
                354
            ],
            "stddev": [
                365
            ],
            "stddev_pop": [
                367
            ],
            "stddev_samp": [
                369
            ],
            "sum": [
                373
            ],
            "var_pop": [
                377
            ],
            "var_samp": [
                379
            ],
            "variance": [
                381
            ],
            "__typename": [
                5
            ]
        },
        "orders_arr_rel_insert_input": {
            "data": [
                350
            ],
            "on_conflict": [
                357
            ],
            "__typename": [
                5
            ]
        },
        "orders_avg_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_avg_order_by": {
            "cancel_block": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_bool_exp": {
            "_and": [
                347
            ],
            "_not": [
                347
            ],
            "_or": [
                347
            ],
            "actor_acct": [
                6
            ],
            "cancel_block": [
                8
            ],
            "cancel_time": [
                661
            ],
            "cancel_tx_sig": [
                6
            ],
            "filled_base_amount": [
                8
            ],
            "is_active": [
                1
            ],
            "make": [
                256
            ],
            "market": [
                300
            ],
            "market_acct": [
                6
            ],
            "order_block": [
                8
            ],
            "order_time": [
                661
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                8
            ],
            "side": [
                6
            ],
            "take": [
                627
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "orders_constraint": {},
        "orders_inc_input": {
            "cancel_block": [
                7
            ],
            "filled_base_amount": [
                7
            ],
            "order_block": [
                7
            ],
            "quote_price": [
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "orders_insert_input": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                660
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "make": [
                265
            ],
            "market": [
                309
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "side": [
                5
            ],
            "take": [
                636
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "orders_max_fields": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                660
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "orders_max_order_by": {
            "actor_acct": [
                335
            ],
            "cancel_block": [
                335
            ],
            "cancel_time": [
                335
            ],
            "cancel_tx_sig": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "market_acct": [
                335
            ],
            "order_block": [
                335
            ],
            "order_time": [
                335
            ],
            "order_tx_sig": [
                335
            ],
            "quote_price": [
                335
            ],
            "side": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_min_fields": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                660
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "orders_min_order_by": {
            "actor_acct": [
                335
            ],
            "cancel_block": [
                335
            ],
            "cancel_time": [
                335
            ],
            "cancel_tx_sig": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "market_acct": [
                335
            ],
            "order_block": [
                335
            ],
            "order_time": [
                335
            ],
            "order_tx_sig": [
                335
            ],
            "quote_price": [
                335
            ],
            "side": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                336
            ],
            "__typename": [
                5
            ]
        },
        "orders_obj_rel_insert_input": {
            "data": [
                350
            ],
            "on_conflict": [
                357
            ],
            "__typename": [
                5
            ]
        },
        "orders_on_conflict": {
            "constraint": [
                348
            ],
            "update_columns": [
                374
            ],
            "where": [
                347
            ],
            "__typename": [
                5
            ]
        },
        "orders_order_by": {
            "actor_acct": [
                335
            ],
            "cancel_block": [
                335
            ],
            "cancel_time": [
                335
            ],
            "cancel_tx_sig": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "is_active": [
                335
            ],
            "make": [
                267
            ],
            "market": [
                311
            ],
            "market_acct": [
                335
            ],
            "order_block": [
                335
            ],
            "order_time": [
                335
            ],
            "order_tx_sig": [
                335
            ],
            "quote_price": [
                335
            ],
            "side": [
                335
            ],
            "take": [
                638
            ],
            "unfilled_base_amount": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_pk_columns_input": {
            "order_tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "orders_select_column": {},
        "orders_select_column_orders_aggregate_bool_exp_bool_and_arguments_columns": {},
        "orders_select_column_orders_aggregate_bool_exp_bool_or_arguments_columns": {},
        "orders_set_input": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                660
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_order_by": {
            "cancel_block": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_pop_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_pop_order_by": {
            "cancel_block": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_samp_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_stddev_samp_order_by": {
            "cancel_block": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_stream_cursor_input": {
            "initial_value": [
                371
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "orders_stream_cursor_value_input": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                660
            ],
            "cancel_tx_sig": [
                5
            ],
            "filled_base_amount": [
                7
            ],
            "is_active": [
                0
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "orders_sum_fields": {
            "cancel_block": [
                7
            ],
            "filled_base_amount": [
                7
            ],
            "order_block": [
                7
            ],
            "quote_price": [
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "orders_sum_order_by": {
            "cancel_block": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_update_column": {},
        "orders_updates": {
            "_inc": [
                349
            ],
            "_set": [
                363
            ],
            "where": [
                347
            ],
            "__typename": [
                5
            ]
        },
        "orders_var_pop_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_var_pop_order_by": {
            "cancel_block": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_var_samp_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_var_samp_order_by": {
            "cancel_block": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "orders_variance_fields": {
            "cancel_block": [
                2
            ],
            "filled_base_amount": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "unfilled_base_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "orders_variance_order_by": {
            "cancel_block": [
                335
            ],
            "filled_base_amount": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "unfilled_base_amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "program": [
                441
            ],
            "programByConditionalVaultAcct": [
                441
            ],
            "programByMigratorAcct": [
                441
            ],
            "programByPricingModelAcct": [
                441
            ],
            "system_version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate": {
            "aggregate": [
                396
            ],
            "nodes": [
                382
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp": {
            "avg": [
                385
            ],
            "corr": [
                386
            ],
            "count": [
                388
            ],
            "covar_samp": [
                389
            ],
            "max": [
                391
            ],
            "min": [
                392
            ],
            "stddev_samp": [
                393
            ],
            "sum": [
                394
            ],
            "var_samp": [
                395
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_avg": {
            "arguments": [
                414
            ],
            "distinct": [
                0
            ],
            "filter": [
                401
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr": {
            "arguments": [
                387
            ],
            "distinct": [
                0
            ],
            "filter": [
                401
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr_arguments": {
            "X": [
                415
            ],
            "Y": [
                415
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_count": {
            "arguments": [
                413
            ],
            "distinct": [
                0
            ],
            "filter": [
                401
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_covar_samp": {
            "arguments": [
                390
            ],
            "distinct": [
                0
            ],
            "filter": [
                401
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                416
            ],
            "Y": [
                416
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_max": {
            "arguments": [
                417
            ],
            "distinct": [
                0
            ],
            "filter": [
                401
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_min": {
            "arguments": [
                418
            ],
            "distinct": [
                0
            ],
            "filter": [
                401
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                419
            ],
            "distinct": [
                0
            ],
            "filter": [
                401
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_sum": {
            "arguments": [
                420
            ],
            "distinct": [
                0
            ],
            "filter": [
                401
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_var_samp": {
            "arguments": [
                421
            ],
            "distinct": [
                0
            ],
            "filter": [
                401
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_fields": {
            "avg": [
                399
            ],
            "count": [
                3,
                {
                    "columns": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                405
            ],
            "min": [
                407
            ],
            "stddev": [
                423
            ],
            "stddev_pop": [
                425
            ],
            "stddev_samp": [
                427
            ],
            "sum": [
                431
            ],
            "var_pop": [
                435
            ],
            "var_samp": [
                437
            ],
            "variance": [
                439
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_order_by": {
            "avg": [
                400
            ],
            "count": [
                335
            ],
            "max": [
                406
            ],
            "min": [
                408
            ],
            "stddev": [
                424
            ],
            "stddev_pop": [
                426
            ],
            "stddev_samp": [
                428
            ],
            "sum": [
                432
            ],
            "var_pop": [
                436
            ],
            "var_samp": [
                438
            ],
            "variance": [
                440
            ],
            "__typename": [
                5
            ]
        },
        "program_system_arr_rel_insert_input": {
            "data": [
                404
            ],
            "on_conflict": [
                410
            ],
            "__typename": [
                5
            ]
        },
        "program_system_avg_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_avg_order_by": {
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_bool_exp": {
            "_and": [
                401
            ],
            "_not": [
                401
            ],
            "_or": [
                401
            ],
            "autocrat_acct": [
                6
            ],
            "conditional_vault_acct": [
                6
            ],
            "migrator_acct": [
                6
            ],
            "pricing_model_acct": [
                6
            ],
            "program": [
                445
            ],
            "programByConditionalVaultAcct": [
                445
            ],
            "programByMigratorAcct": [
                445
            ],
            "programByPricingModelAcct": [
                445
            ],
            "system_version": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "program_system_constraint": {},
        "program_system_inc_input": {
            "system_version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "program_system_insert_input": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "program": [
                452
            ],
            "programByConditionalVaultAcct": [
                452
            ],
            "programByMigratorAcct": [
                452
            ],
            "programByPricingModelAcct": [
                452
            ],
            "system_version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "program_system_max_fields": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "system_version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "program_system_max_order_by": {
            "autocrat_acct": [
                335
            ],
            "conditional_vault_acct": [
                335
            ],
            "migrator_acct": [
                335
            ],
            "pricing_model_acct": [
                335
            ],
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_min_fields": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "system_version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "program_system_min_order_by": {
            "autocrat_acct": [
                335
            ],
            "conditional_vault_acct": [
                335
            ],
            "migrator_acct": [
                335
            ],
            "pricing_model_acct": [
                335
            ],
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                382
            ],
            "__typename": [
                5
            ]
        },
        "program_system_on_conflict": {
            "constraint": [
                402
            ],
            "update_columns": [
                433
            ],
            "where": [
                401
            ],
            "__typename": [
                5
            ]
        },
        "program_system_order_by": {
            "autocrat_acct": [
                335
            ],
            "conditional_vault_acct": [
                335
            ],
            "migrator_acct": [
                335
            ],
            "pricing_model_acct": [
                335
            ],
            "program": [
                454
            ],
            "programByConditionalVaultAcct": [
                454
            ],
            "programByMigratorAcct": [
                454
            ],
            "programByPricingModelAcct": [
                454
            ],
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_pk_columns_input": {
            "system_version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "program_system_select_column": {},
        "program_system_select_column_program_system_aggregate_bool_exp_avg_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_corr_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_covar_samp_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_max_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_min_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_stddev_samp_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_sum_arguments_columns": {},
        "program_system_select_column_program_system_aggregate_bool_exp_var_samp_arguments_columns": {},
        "program_system_set_input": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "system_version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_order_by": {
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_pop_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_pop_order_by": {
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_samp_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stddev_samp_order_by": {
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stream_cursor_input": {
            "initial_value": [
                430
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stream_cursor_value_input": {
            "autocrat_acct": [
                5
            ],
            "conditional_vault_acct": [
                5
            ],
            "migrator_acct": [
                5
            ],
            "pricing_model_acct": [
                5
            ],
            "system_version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_fields": {
            "system_version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_order_by": {
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_update_column": {},
        "program_system_updates": {
            "_inc": [
                403
            ],
            "_set": [
                422
            ],
            "where": [
                401
            ],
            "__typename": [
                5
            ]
        },
        "program_system_var_pop_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_var_pop_order_by": {
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_var_samp_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_var_samp_order_by": {
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "program_system_variance_fields": {
            "system_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "program_system_variance_order_by": {
            "system_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "programs": {
            "created_at": [
                660
            ],
            "daos": [
                146,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "daos_aggregate": [
                147,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "deployed_at": [
                660
            ],
            "programSystemsByConditionalVaultAcct": [
                382,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                383,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "programSystemsByMigratorAcct": [
                382,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "programSystemsByMigratorAcct_aggregate": [
                383,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "programSystemsByPricingModelAcct": [
                382,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                383,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                382,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "program_systems_aggregate": [
                383,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate": {
            "aggregate": [
                443
            ],
            "nodes": [
                441
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate_fields": {
            "avg": [
                444
            ],
            "count": [
                3,
                {
                    "columns": [
                        456,
                        "[programs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                449
            ],
            "min": [
                450
            ],
            "stddev": [
                458
            ],
            "stddev_pop": [
                459
            ],
            "stddev_samp": [
                460
            ],
            "sum": [
                463
            ],
            "var_pop": [
                466
            ],
            "var_samp": [
                467
            ],
            "variance": [
                468
            ],
            "__typename": [
                5
            ]
        },
        "programs_avg_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_bool_exp": {
            "_and": [
                445
            ],
            "_not": [
                445
            ],
            "_or": [
                445
            ],
            "created_at": [
                661
            ],
            "daos": [
                155
            ],
            "daos_aggregate": [
                148
            ],
            "deployed_at": [
                661
            ],
            "programSystemsByConditionalVaultAcct": [
                401
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                384
            ],
            "programSystemsByMigratorAcct": [
                401
            ],
            "programSystemsByMigratorAcct_aggregate": [
                384
            ],
            "programSystemsByPricingModelAcct": [
                401
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                384
            ],
            "program_acct": [
                6
            ],
            "program_name": [
                6
            ],
            "program_systems": [
                401
            ],
            "program_systems_aggregate": [
                384
            ],
            "version": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "programs_constraint": {},
        "programs_inc_input": {
            "version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "programs_insert_input": {
            "created_at": [
                660
            ],
            "daos": [
                152
            ],
            "deployed_at": [
                660
            ],
            "programSystemsByConditionalVaultAcct": [
                398
            ],
            "programSystemsByMigratorAcct": [
                398
            ],
            "programSystemsByPricingModelAcct": [
                398
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                398
            ],
            "version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "programs_max_fields": {
            "created_at": [
                660
            ],
            "deployed_at": [
                660
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "programs_min_fields": {
            "created_at": [
                660
            ],
            "deployed_at": [
                660
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "programs_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                441
            ],
            "__typename": [
                5
            ]
        },
        "programs_obj_rel_insert_input": {
            "data": [
                448
            ],
            "on_conflict": [
                453
            ],
            "__typename": [
                5
            ]
        },
        "programs_on_conflict": {
            "constraint": [
                446
            ],
            "update_columns": [
                464
            ],
            "where": [
                445
            ],
            "__typename": [
                5
            ]
        },
        "programs_order_by": {
            "created_at": [
                335
            ],
            "daos_aggregate": [
                151
            ],
            "deployed_at": [
                335
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                397
            ],
            "programSystemsByMigratorAcct_aggregate": [
                397
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                397
            ],
            "program_acct": [
                335
            ],
            "program_name": [
                335
            ],
            "program_systems_aggregate": [
                397
            ],
            "version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "programs_pk_columns_input": {
            "program_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "programs_select_column": {},
        "programs_set_input": {
            "created_at": [
                660
            ],
            "deployed_at": [
                660
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "programs_stddev_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_stddev_pop_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_stddev_samp_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_stream_cursor_input": {
            "initial_value": [
                462
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "programs_stream_cursor_value_input": {
            "created_at": [
                660
            ],
            "deployed_at": [
                660
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "programs_sum_fields": {
            "version": [
                188
            ],
            "__typename": [
                5
            ]
        },
        "programs_update_column": {},
        "programs_updates": {
            "_inc": [
                447
            ],
            "_set": [
                457
            ],
            "where": [
                445
            ],
            "__typename": [
                5
            ]
        },
        "programs_var_pop_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_var_samp_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "programs_variance_fields": {
            "version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details": {
            "categories": [
                242,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "proposal": [
                515
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate": {
            "aggregate": [
                473
            ],
            "nodes": [
                469
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp": {
            "count": [
                472
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp_count": {
            "arguments": [
                495
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_fields": {
            "avg": [
                477
            ],
            "count": [
                3,
                {
                    "columns": [
                        495,
                        "[proposal_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                486
            ],
            "min": [
                488
            ],
            "stddev": [
                497
            ],
            "stddev_pop": [
                499
            ],
            "stddev_samp": [
                501
            ],
            "sum": [
                505
            ],
            "var_pop": [
                509
            ],
            "var_samp": [
                511
            ],
            "variance": [
                513
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_order_by": {
            "avg": [
                478
            ],
            "count": [
                335
            ],
            "max": [
                487
            ],
            "min": [
                489
            ],
            "stddev": [
                498
            ],
            "stddev_pop": [
                500
            ],
            "stddev_samp": [
                502
            ],
            "sum": [
                506
            ],
            "var_pop": [
                510
            ],
            "var_samp": [
                512
            ],
            "variance": [
                514
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_append_input": {
            "categories": [
                242
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_arr_rel_insert_input": {
            "data": [
                485
            ],
            "on_conflict": [
                491
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_avg_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_avg_order_by": {
            "proposal_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_bool_exp": {
            "_and": [
                479
            ],
            "_not": [
                479
            ],
            "_or": [
                479
            ],
            "categories": [
                244
            ],
            "content": [
                6
            ],
            "description": [
                6
            ],
            "proposal": [
                534
            ],
            "proposal_acct": [
                6
            ],
            "proposal_id": [
                8
            ],
            "slug": [
                6
            ],
            "title": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_constraint": {},
        "proposal_details_delete_at_path_input": {
            "categories": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_delete_elem_input": {
            "categories": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_delete_key_input": {
            "categories": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_inc_input": {
            "proposal_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_insert_input": {
            "categories": [
                242
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "proposal": [
                543
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_max_fields": {
            "content": [
                5
            ],
            "description": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_max_order_by": {
            "content": [
                335
            ],
            "description": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "proposal_id": [
                335
            ],
            "slug": [
                335
            ],
            "title": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_min_fields": {
            "content": [
                5
            ],
            "description": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_min_order_by": {
            "content": [
                335
            ],
            "description": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "proposal_id": [
                335
            ],
            "slug": [
                335
            ],
            "title": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                469
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_on_conflict": {
            "constraint": [
                480
            ],
            "update_columns": [
                507
            ],
            "where": [
                479
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_order_by": {
            "categories": [
                335
            ],
            "content": [
                335
            ],
            "description": [
                335
            ],
            "proposal": [
                545
            ],
            "proposal_acct": [
                335
            ],
            "proposal_id": [
                335
            ],
            "slug": [
                335
            ],
            "title": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_pk_columns_input": {
            "proposal_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_prepend_input": {
            "categories": [
                242
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_select_column": {},
        "proposal_details_set_input": {
            "categories": [
                242
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_order_by": {
            "proposal_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_pop_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_pop_order_by": {
            "proposal_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_samp_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stddev_samp_order_by": {
            "proposal_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_input": {
            "initial_value": [
                504
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_value_input": {
            "categories": [
                242
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "slug": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_sum_fields": {
            "proposal_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_sum_order_by": {
            "proposal_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_update_column": {},
        "proposal_details_updates": {
            "_append": [
                475
            ],
            "_delete_at_path": [
                481
            ],
            "_delete_elem": [
                482
            ],
            "_delete_key": [
                483
            ],
            "_inc": [
                484
            ],
            "_prepend": [
                494
            ],
            "_set": [
                496
            ],
            "where": [
                479
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_var_pop_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_var_pop_order_by": {
            "proposal_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_var_samp_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_var_samp_order_by": {
            "proposal_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_variance_fields": {
            "proposal_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_variance_order_by": {
            "proposal_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals": {
            "autocrat_version": [
                188
            ],
            "base_vault": [
                5
            ],
            "comments": [
                50,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_aggregate": [
                51,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "conditionalVaultByQuoteVault": [
                92
            ],
            "conditional_vault": [
                92
            ],
            "dao": [
                146
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                291,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "markets_aggregate": [
                292,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "pass_market_acct": [
                5
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_details": [
                469,
                {
                    "distinct_on": [
                        495,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        492,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "proposal_details_aggregate": [
                470,
                {
                    "distinct_on": [
                        495,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        492,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "reactions": [
                575,
                {
                    "distinct_on": [
                        596,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        594,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "reactions_aggregate": [
                576,
                {
                    "distinct_on": [
                        596,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        594,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "status": [
                5
            ],
            "twaps": [
                843,
                {
                    "distinct_on": [
                        864,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        852
                    ]
                }
            ],
            "twaps_aggregate": [
                844,
                {
                    "distinct_on": [
                        864,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        852
                    ]
                }
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate": {
            "aggregate": [
                529
            ],
            "nodes": [
                515
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp": {
            "avg": [
                518
            ],
            "corr": [
                519
            ],
            "count": [
                521
            ],
            "covar_samp": [
                522
            ],
            "max": [
                524
            ],
            "min": [
                525
            ],
            "stddev_samp": [
                526
            ],
            "sum": [
                527
            ],
            "var_samp": [
                528
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_avg": {
            "arguments": [
                548
            ],
            "distinct": [
                0
            ],
            "filter": [
                534
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr": {
            "arguments": [
                520
            ],
            "distinct": [
                0
            ],
            "filter": [
                534
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr_arguments": {
            "X": [
                549
            ],
            "Y": [
                549
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_count": {
            "arguments": [
                547
            ],
            "distinct": [
                0
            ],
            "filter": [
                534
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_covar_samp": {
            "arguments": [
                523
            ],
            "distinct": [
                0
            ],
            "filter": [
                534
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                550
            ],
            "Y": [
                550
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_max": {
            "arguments": [
                551
            ],
            "distinct": [
                0
            ],
            "filter": [
                534
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_min": {
            "arguments": [
                552
            ],
            "distinct": [
                0
            ],
            "filter": [
                534
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                553
            ],
            "distinct": [
                0
            ],
            "filter": [
                534
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_sum": {
            "arguments": [
                554
            ],
            "distinct": [
                0
            ],
            "filter": [
                534
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_var_samp": {
            "arguments": [
                555
            ],
            "distinct": [
                0
            ],
            "filter": [
                534
            ],
            "predicate": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_fields": {
            "avg": [
                532
            ],
            "count": [
                3,
                {
                    "columns": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                538
            ],
            "min": [
                540
            ],
            "stddev": [
                557
            ],
            "stddev_pop": [
                559
            ],
            "stddev_samp": [
                561
            ],
            "sum": [
                565
            ],
            "var_pop": [
                569
            ],
            "var_samp": [
                571
            ],
            "variance": [
                573
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_order_by": {
            "avg": [
                533
            ],
            "count": [
                335
            ],
            "max": [
                539
            ],
            "min": [
                541
            ],
            "stddev": [
                558
            ],
            "stddev_pop": [
                560
            ],
            "stddev_samp": [
                562
            ],
            "sum": [
                566
            ],
            "var_pop": [
                570
            ],
            "var_samp": [
                572
            ],
            "variance": [
                574
            ],
            "__typename": [
                5
            ]
        },
        "proposals_arr_rel_insert_input": {
            "data": [
                537
            ],
            "on_conflict": [
                544
            ],
            "__typename": [
                5
            ]
        },
        "proposals_avg_fields": {
            "autocrat_version": [
                2
            ],
            "initial_slot": [
                2
            ],
            "proposal_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_avg_order_by": {
            "autocrat_version": [
                335
            ],
            "initial_slot": [
                335
            ],
            "proposal_num": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_bool_exp": {
            "_and": [
                534
            ],
            "_not": [
                534
            ],
            "_or": [
                534
            ],
            "autocrat_version": [
                189
            ],
            "base_vault": [
                6
            ],
            "comments": [
                59
            ],
            "comments_aggregate": [
                52
            ],
            "conditionalVaultByQuoteVault": [
                99
            ],
            "conditional_vault": [
                99
            ],
            "dao": [
                155
            ],
            "dao_acct": [
                6
            ],
            "description_url": [
                6
            ],
            "fail_market_acct": [
                6
            ],
            "initial_slot": [
                8
            ],
            "markets": [
                300
            ],
            "markets_aggregate": [
                293
            ],
            "pass_market_acct": [
                6
            ],
            "pricing_model_fail_acct": [
                6
            ],
            "pricing_model_pass_acct": [
                6
            ],
            "proposal_acct": [
                6
            ],
            "proposal_details": [
                479
            ],
            "proposal_details_aggregate": [
                471
            ],
            "proposal_num": [
                8
            ],
            "proposer_acct": [
                6
            ],
            "quote_vault": [
                6
            ],
            "reactions": [
                584
            ],
            "reactions_aggregate": [
                577
            ],
            "status": [
                6
            ],
            "twaps": [
                852
            ],
            "twaps_aggregate": [
                845
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "proposals_constraint": {},
        "proposals_inc_input": {
            "autocrat_version": [
                188
            ],
            "initial_slot": [
                7
            ],
            "proposal_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposals_insert_input": {
            "autocrat_version": [
                188
            ],
            "base_vault": [
                5
            ],
            "comments": [
                56
            ],
            "conditionalVaultByQuoteVault": [
                107
            ],
            "conditional_vault": [
                107
            ],
            "dao": [
                164
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                297
            ],
            "pass_market_acct": [
                5
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_details": [
                476
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "reactions": [
                581
            ],
            "status": [
                5
            ],
            "twaps": [
                849
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_fields": {
            "autocrat_version": [
                188
            ],
            "base_vault": [
                5
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "status": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_order_by": {
            "autocrat_version": [
                335
            ],
            "base_vault": [
                335
            ],
            "dao_acct": [
                335
            ],
            "description_url": [
                335
            ],
            "fail_market_acct": [
                335
            ],
            "initial_slot": [
                335
            ],
            "pass_market_acct": [
                335
            ],
            "pricing_model_fail_acct": [
                335
            ],
            "pricing_model_pass_acct": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "proposal_num": [
                335
            ],
            "proposer_acct": [
                335
            ],
            "quote_vault": [
                335
            ],
            "status": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_fields": {
            "autocrat_version": [
                188
            ],
            "base_vault": [
                5
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "status": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_order_by": {
            "autocrat_version": [
                335
            ],
            "base_vault": [
                335
            ],
            "dao_acct": [
                335
            ],
            "description_url": [
                335
            ],
            "fail_market_acct": [
                335
            ],
            "initial_slot": [
                335
            ],
            "pass_market_acct": [
                335
            ],
            "pricing_model_fail_acct": [
                335
            ],
            "pricing_model_pass_acct": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "proposal_num": [
                335
            ],
            "proposer_acct": [
                335
            ],
            "quote_vault": [
                335
            ],
            "status": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                515
            ],
            "__typename": [
                5
            ]
        },
        "proposals_obj_rel_insert_input": {
            "data": [
                537
            ],
            "on_conflict": [
                544
            ],
            "__typename": [
                5
            ]
        },
        "proposals_on_conflict": {
            "constraint": [
                535
            ],
            "update_columns": [
                567
            ],
            "where": [
                534
            ],
            "__typename": [
                5
            ]
        },
        "proposals_order_by": {
            "autocrat_version": [
                335
            ],
            "base_vault": [
                335
            ],
            "comments_aggregate": [
                55
            ],
            "conditionalVaultByQuoteVault": [
                109
            ],
            "conditional_vault": [
                109
            ],
            "dao": [
                166
            ],
            "dao_acct": [
                335
            ],
            "description_url": [
                335
            ],
            "fail_market_acct": [
                335
            ],
            "initial_slot": [
                335
            ],
            "markets_aggregate": [
                296
            ],
            "pass_market_acct": [
                335
            ],
            "pricing_model_fail_acct": [
                335
            ],
            "pricing_model_pass_acct": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "proposal_details_aggregate": [
                474
            ],
            "proposal_num": [
                335
            ],
            "proposer_acct": [
                335
            ],
            "quote_vault": [
                335
            ],
            "reactions_aggregate": [
                580
            ],
            "status": [
                335
            ],
            "twaps_aggregate": [
                848
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_pk_columns_input": {
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposals_select_column": {},
        "proposals_select_column_proposals_aggregate_bool_exp_avg_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_corr_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_covar_samp_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_max_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_min_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_stddev_samp_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_sum_arguments_columns": {},
        "proposals_select_column_proposals_aggregate_bool_exp_var_samp_arguments_columns": {},
        "proposals_set_input": {
            "autocrat_version": [
                188
            ],
            "base_vault": [
                5
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "status": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_fields": {
            "autocrat_version": [
                2
            ],
            "initial_slot": [
                2
            ],
            "proposal_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_order_by": {
            "autocrat_version": [
                335
            ],
            "initial_slot": [
                335
            ],
            "proposal_num": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_pop_fields": {
            "autocrat_version": [
                2
            ],
            "initial_slot": [
                2
            ],
            "proposal_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_pop_order_by": {
            "autocrat_version": [
                335
            ],
            "initial_slot": [
                335
            ],
            "proposal_num": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_samp_fields": {
            "autocrat_version": [
                2
            ],
            "initial_slot": [
                2
            ],
            "proposal_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_samp_order_by": {
            "autocrat_version": [
                335
            ],
            "initial_slot": [
                335
            ],
            "proposal_num": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_input": {
            "initial_value": [
                564
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_value_input": {
            "autocrat_version": [
                188
            ],
            "base_vault": [
                5
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pricing_model_fail_acct": [
                5
            ],
            "pricing_model_pass_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_num": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_vault": [
                5
            ],
            "status": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_fields": {
            "autocrat_version": [
                188
            ],
            "initial_slot": [
                7
            ],
            "proposal_num": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_order_by": {
            "autocrat_version": [
                335
            ],
            "initial_slot": [
                335
            ],
            "proposal_num": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_update_column": {},
        "proposals_updates": {
            "_inc": [
                536
            ],
            "_set": [
                556
            ],
            "where": [
                534
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_pop_fields": {
            "autocrat_version": [
                2
            ],
            "initial_slot": [
                2
            ],
            "proposal_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_pop_order_by": {
            "autocrat_version": [
                335
            ],
            "initial_slot": [
                335
            ],
            "proposal_num": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_samp_fields": {
            "autocrat_version": [
                2
            ],
            "initial_slot": [
                2
            ],
            "proposal_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_samp_order_by": {
            "autocrat_version": [
                335
            ],
            "initial_slot": [
                335
            ],
            "proposal_num": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "proposals_variance_fields": {
            "autocrat_version": [
                2
            ],
            "initial_slot": [
                2
            ],
            "proposal_num": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_variance_order_by": {
            "autocrat_version": [
                335
            ],
            "initial_slot": [
                335
            ],
            "proposal_num": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions": {
            "comment": [
                50
            ],
            "comment_id": [
                7
            ],
            "proposal": [
                515
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate": {
            "aggregate": [
                579
            ],
            "nodes": [
                575
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp": {
            "count": [
                578
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp_count": {
            "arguments": [
                596
            ],
            "distinct": [
                0
            ],
            "filter": [
                584
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_fields": {
            "avg": [
                582
            ],
            "count": [
                3,
                {
                    "columns": [
                        596,
                        "[reactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                588
            ],
            "min": [
                590
            ],
            "stddev": [
                598
            ],
            "stddev_pop": [
                600
            ],
            "stddev_samp": [
                602
            ],
            "sum": [
                606
            ],
            "var_pop": [
                610
            ],
            "var_samp": [
                612
            ],
            "variance": [
                614
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_order_by": {
            "avg": [
                583
            ],
            "count": [
                335
            ],
            "max": [
                589
            ],
            "min": [
                591
            ],
            "stddev": [
                599
            ],
            "stddev_pop": [
                601
            ],
            "stddev_samp": [
                603
            ],
            "sum": [
                607
            ],
            "var_pop": [
                611
            ],
            "var_samp": [
                613
            ],
            "variance": [
                615
            ],
            "__typename": [
                5
            ]
        },
        "reactions_arr_rel_insert_input": {
            "data": [
                587
            ],
            "on_conflict": [
                593
            ],
            "__typename": [
                5
            ]
        },
        "reactions_avg_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_avg_order_by": {
            "comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_bool_exp": {
            "_and": [
                584
            ],
            "_not": [
                584
            ],
            "_or": [
                584
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "proposal": [
                534
            ],
            "proposal_acct": [
                6
            ],
            "reaction": [
                6
            ],
            "reactor_acct": [
                6
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "reactions_constraint": {},
        "reactions_inc_input": {
            "comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "reactions_insert_input": {
            "comment": [
                68
            ],
            "comment_id": [
                7
            ],
            "proposal": [
                543
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "reactions_max_fields": {
            "comment_id": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "reactions_max_order_by": {
            "comment_id": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "reaction": [
                335
            ],
            "reactor_acct": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_min_fields": {
            "comment_id": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "reactions_min_order_by": {
            "comment_id": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "reaction": [
                335
            ],
            "reactor_acct": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                575
            ],
            "__typename": [
                5
            ]
        },
        "reactions_on_conflict": {
            "constraint": [
                585
            ],
            "update_columns": [
                608
            ],
            "where": [
                584
            ],
            "__typename": [
                5
            ]
        },
        "reactions_order_by": {
            "comment": [
                70
            ],
            "comment_id": [
                335
            ],
            "proposal": [
                545
            ],
            "proposal_acct": [
                335
            ],
            "reaction": [
                335
            ],
            "reactor_acct": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_pk_columns_input": {
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reactor_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "reactions_select_column": {},
        "reactions_set_input": {
            "comment_id": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_order_by": {
            "comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_pop_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_pop_order_by": {
            "comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_samp_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stddev_samp_order_by": {
            "comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stream_cursor_input": {
            "initial_value": [
                605
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stream_cursor_value_input": {
            "comment_id": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "reactions_sum_fields": {
            "comment_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "reactions_sum_order_by": {
            "comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_update_column": {},
        "reactions_updates": {
            "_inc": [
                586
            ],
            "_set": [
                597
            ],
            "where": [
                584
            ],
            "__typename": [
                5
            ]
        },
        "reactions_var_pop_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_var_pop_order_by": {
            "comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_var_samp_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_var_samp_order_by": {
            "comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "reactions_variance_fields": {
            "comment_id": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "reactions_variance_order_by": {
            "comment_id": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "smallint": {},
        "smallint_comparison_exp": {
            "_eq": [
                616
            ],
            "_gt": [
                616
            ],
            "_gte": [
                616
            ],
            "_in": [
                616
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                616
            ],
            "_lte": [
                616
            ],
            "_neq": [
                616
            ],
            "_nin": [
                616
            ],
            "__typename": [
                5
            ]
        },
        "takes": {
            "base_amount": [
                7
            ],
            "make": [
                245
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market": [
                291
            ],
            "market_acct": [
                5
            ],
            "order": [
                336
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "taker_base_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate": {
            "aggregate": [
                622
            ],
            "nodes": [
                618
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp": {
            "count": [
                621
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp_count": {
            "arguments": [
                640
            ],
            "distinct": [
                0
            ],
            "filter": [
                627
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_fields": {
            "avg": [
                625
            ],
            "count": [
                3,
                {
                    "columns": [
                        640,
                        "[takes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                631
            ],
            "min": [
                633
            ],
            "stddev": [
                642
            ],
            "stddev_pop": [
                644
            ],
            "stddev_samp": [
                646
            ],
            "sum": [
                650
            ],
            "var_pop": [
                654
            ],
            "var_samp": [
                656
            ],
            "variance": [
                658
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_order_by": {
            "avg": [
                626
            ],
            "count": [
                335
            ],
            "max": [
                632
            ],
            "min": [
                634
            ],
            "stddev": [
                643
            ],
            "stddev_pop": [
                645
            ],
            "stddev_samp": [
                647
            ],
            "sum": [
                651
            ],
            "var_pop": [
                655
            ],
            "var_samp": [
                657
            ],
            "variance": [
                659
            ],
            "__typename": [
                5
            ]
        },
        "takes_arr_rel_insert_input": {
            "data": [
                630
            ],
            "on_conflict": [
                637
            ],
            "__typename": [
                5
            ]
        },
        "takes_avg_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_avg_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_bool_exp": {
            "_and": [
                627
            ],
            "_not": [
                627
            ],
            "_or": [
                627
            ],
            "base_amount": [
                8
            ],
            "make": [
                256
            ],
            "maker_base_fee": [
                8
            ],
            "maker_order_tx_sig": [
                6
            ],
            "maker_quote_fee": [
                8
            ],
            "market": [
                300
            ],
            "market_acct": [
                6
            ],
            "order": [
                347
            ],
            "order_block": [
                8
            ],
            "order_time": [
                661
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                8
            ],
            "taker_base_fee": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "takes_constraint": {},
        "takes_inc_input": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_quote_fee": [
                7
            ],
            "order_block": [
                7
            ],
            "quote_price": [
                7
            ],
            "taker_base_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_insert_input": {
            "base_amount": [
                7
            ],
            "make": [
                265
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market": [
                309
            ],
            "market_acct": [
                5
            ],
            "order": [
                356
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "taker_base_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_max_fields": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "taker_base_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_max_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_order_tx_sig": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "market_acct": [
                335
            ],
            "order_block": [
                335
            ],
            "order_time": [
                335
            ],
            "order_tx_sig": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_min_fields": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "taker_base_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_min_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_order_tx_sig": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "market_acct": [
                335
            ],
            "order_block": [
                335
            ],
            "order_time": [
                335
            ],
            "order_tx_sig": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                618
            ],
            "__typename": [
                5
            ]
        },
        "takes_obj_rel_insert_input": {
            "data": [
                630
            ],
            "on_conflict": [
                637
            ],
            "__typename": [
                5
            ]
        },
        "takes_on_conflict": {
            "constraint": [
                628
            ],
            "update_columns": [
                652
            ],
            "where": [
                627
            ],
            "__typename": [
                5
            ]
        },
        "takes_order_by": {
            "base_amount": [
                335
            ],
            "make": [
                267
            ],
            "maker_base_fee": [
                335
            ],
            "maker_order_tx_sig": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "market": [
                311
            ],
            "market_acct": [
                335
            ],
            "order": [
                358
            ],
            "order_block": [
                335
            ],
            "order_time": [
                335
            ],
            "order_tx_sig": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_pk_columns_input": {
            "order_tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "takes_select_column": {},
        "takes_set_input": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "taker_base_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_pop_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_pop_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_samp_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_samp_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_stream_cursor_input": {
            "initial_value": [
                649
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "takes_stream_cursor_value_input": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_order_tx_sig": [
                5
            ],
            "maker_quote_fee": [
                7
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                660
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "taker_base_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_sum_fields": {
            "base_amount": [
                7
            ],
            "maker_base_fee": [
                7
            ],
            "maker_quote_fee": [
                7
            ],
            "order_block": [
                7
            ],
            "quote_price": [
                7
            ],
            "taker_base_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_sum_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_update_column": {},
        "takes_updates": {
            "_inc": [
                629
            ],
            "_set": [
                641
            ],
            "where": [
                627
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_pop_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_pop_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_samp_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_samp_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "takes_variance_fields": {
            "base_amount": [
                2
            ],
            "maker_base_fee": [
                2
            ],
            "maker_quote_fee": [
                2
            ],
            "order_block": [
                2
            ],
            "quote_price": [
                2
            ],
            "taker_base_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_variance_order_by": {
            "base_amount": [
                335
            ],
            "maker_base_fee": [
                335
            ],
            "maker_quote_fee": [
                335
            ],
            "order_block": [
                335
            ],
            "quote_price": [
                335
            ],
            "taker_base_fee": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                660
            ],
            "_gt": [
                660
            ],
            "_gte": [
                660
            ],
            "_in": [
                660
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                660
            ],
            "_lte": [
                660
            ],
            "_neq": [
                660
            ],
            "_nin": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "token_accts": {
            "amount": [
                7
            ],
            "markets": [
                291,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "marketsByBidsTokenAcct": [
                291,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "marketsByBidsTokenAcct_aggregate": [
                292,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "markets_aggregate": [
                292,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token": [
                704
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate": {
            "aggregate": [
                666
            ],
            "nodes": [
                662
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp": {
            "count": [
                665
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp_count": {
            "arguments": [
                684
            ],
            "distinct": [
                0
            ],
            "filter": [
                671
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_fields": {
            "avg": [
                669
            ],
            "count": [
                3,
                {
                    "columns": [
                        684,
                        "[token_accts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                675
            ],
            "min": [
                677
            ],
            "stddev": [
                686
            ],
            "stddev_pop": [
                688
            ],
            "stddev_samp": [
                690
            ],
            "sum": [
                694
            ],
            "var_pop": [
                698
            ],
            "var_samp": [
                700
            ],
            "variance": [
                702
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_order_by": {
            "avg": [
                670
            ],
            "count": [
                335
            ],
            "max": [
                676
            ],
            "min": [
                678
            ],
            "stddev": [
                687
            ],
            "stddev_pop": [
                689
            ],
            "stddev_samp": [
                691
            ],
            "sum": [
                695
            ],
            "var_pop": [
                699
            ],
            "var_samp": [
                701
            ],
            "variance": [
                703
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_arr_rel_insert_input": {
            "data": [
                674
            ],
            "on_conflict": [
                681
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_avg_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_avg_order_by": {
            "amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_bool_exp": {
            "_and": [
                671
            ],
            "_not": [
                671
            ],
            "_or": [
                671
            ],
            "amount": [
                8
            ],
            "markets": [
                300
            ],
            "marketsByBidsTokenAcct": [
                300
            ],
            "marketsByBidsTokenAcct_aggregate": [
                293
            ],
            "markets_aggregate": [
                293
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "token": [
                708
            ],
            "token_acct": [
                6
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_constraint": {},
        "token_accts_inc_input": {
            "amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_insert_input": {
            "amount": [
                7
            ],
            "markets": [
                297
            ],
            "marketsByBidsTokenAcct": [
                297
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token": [
                715
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_max_fields": {
            "amount": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_max_order_by": {
            "amount": [
                335
            ],
            "mint_acct": [
                335
            ],
            "owner_acct": [
                335
            ],
            "token_acct": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_min_fields": {
            "amount": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_min_order_by": {
            "amount": [
                335
            ],
            "mint_acct": [
                335
            ],
            "owner_acct": [
                335
            ],
            "token_acct": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                662
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_obj_rel_insert_input": {
            "data": [
                674
            ],
            "on_conflict": [
                681
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_on_conflict": {
            "constraint": [
                672
            ],
            "update_columns": [
                696
            ],
            "where": [
                671
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_order_by": {
            "amount": [
                335
            ],
            "marketsByBidsTokenAcct_aggregate": [
                296
            ],
            "markets_aggregate": [
                296
            ],
            "mint_acct": [
                335
            ],
            "owner_acct": [
                335
            ],
            "token": [
                717
            ],
            "token_acct": [
                335
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_pk_columns_input": {
            "token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_select_column": {},
        "token_accts_set_input": {
            "amount": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_order_by": {
            "amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_pop_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_pop_order_by": {
            "amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_samp_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stddev_samp_order_by": {
            "amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stream_cursor_input": {
            "initial_value": [
                693
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stream_cursor_value_input": {
            "amount": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_sum_fields": {
            "amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_sum_order_by": {
            "amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_update_column": {},
        "token_accts_updates": {
            "_inc": [
                673
            ],
            "_set": [
                685
            ],
            "where": [
                671
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_var_pop_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_var_pop_order_by": {
            "amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_var_samp_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_var_samp_order_by": {
            "amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_variance_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_variance_order_by": {
            "amount": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "tokens": {
            "conditional_vaults": [
                92,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_aggregate": [
                93,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "daos": [
                146,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "daosByQuoteAcct": [
                146,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "daosByQuoteAcct_aggregate": [
                147,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "daos_aggregate": [
                147,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "decimals": [
                616
            ],
            "image_url": [
                5
            ],
            "markets": [
                291,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "marketsByQuoteMintAcct": [
                291,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "marketsByQuoteMintAcct_aggregate": [
                292,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "markets_aggregate": [
                292,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "token_accts": [
                662,
                {
                    "distinct_on": [
                        684,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        682,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        671
                    ]
                }
            ],
            "token_accts_aggregate": [
                663,
                {
                    "distinct_on": [
                        684,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        682,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        671
                    ]
                }
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate": {
            "aggregate": [
                706
            ],
            "nodes": [
                704
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate_fields": {
            "avg": [
                707
            ],
            "count": [
                3,
                {
                    "columns": [
                        719,
                        "[tokens_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                712
            ],
            "min": [
                713
            ],
            "stddev": [
                721
            ],
            "stddev_pop": [
                722
            ],
            "stddev_samp": [
                723
            ],
            "sum": [
                726
            ],
            "var_pop": [
                729
            ],
            "var_samp": [
                730
            ],
            "variance": [
                731
            ],
            "__typename": [
                5
            ]
        },
        "tokens_avg_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_bool_exp": {
            "_and": [
                708
            ],
            "_not": [
                708
            ],
            "_or": [
                708
            ],
            "conditional_vaults": [
                99
            ],
            "conditional_vaults_aggregate": [
                94
            ],
            "daos": [
                155
            ],
            "daosByQuoteAcct": [
                155
            ],
            "daosByQuoteAcct_aggregate": [
                148
            ],
            "daos_aggregate": [
                148
            ],
            "decimals": [
                617
            ],
            "image_url": [
                6
            ],
            "markets": [
                300
            ],
            "marketsByQuoteMintAcct": [
                300
            ],
            "marketsByQuoteMintAcct_aggregate": [
                293
            ],
            "markets_aggregate": [
                293
            ],
            "mint_acct": [
                6
            ],
            "name": [
                6
            ],
            "supply": [
                8
            ],
            "symbol": [
                6
            ],
            "token_accts": [
                671
            ],
            "token_accts_aggregate": [
                664
            ],
            "updated_at": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "tokens_constraint": {},
        "tokens_inc_input": {
            "decimals": [
                616
            ],
            "supply": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "tokens_insert_input": {
            "conditional_vaults": [
                98
            ],
            "daos": [
                152
            ],
            "daosByQuoteAcct": [
                152
            ],
            "decimals": [
                616
            ],
            "image_url": [
                5
            ],
            "markets": [
                297
            ],
            "marketsByQuoteMintAcct": [
                297
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "token_accts": [
                668
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "tokens_max_fields": {
            "decimals": [
                616
            ],
            "image_url": [
                5
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "tokens_min_fields": {
            "decimals": [
                616
            ],
            "image_url": [
                5
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "tokens_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                704
            ],
            "__typename": [
                5
            ]
        },
        "tokens_obj_rel_insert_input": {
            "data": [
                711
            ],
            "on_conflict": [
                716
            ],
            "__typename": [
                5
            ]
        },
        "tokens_on_conflict": {
            "constraint": [
                709
            ],
            "update_columns": [
                727
            ],
            "where": [
                708
            ],
            "__typename": [
                5
            ]
        },
        "tokens_order_by": {
            "conditional_vaults_aggregate": [
                97
            ],
            "daosByQuoteAcct_aggregate": [
                151
            ],
            "daos_aggregate": [
                151
            ],
            "decimals": [
                335
            ],
            "image_url": [
                335
            ],
            "marketsByQuoteMintAcct_aggregate": [
                296
            ],
            "markets_aggregate": [
                296
            ],
            "mint_acct": [
                335
            ],
            "name": [
                335
            ],
            "supply": [
                335
            ],
            "symbol": [
                335
            ],
            "token_accts_aggregate": [
                667
            ],
            "updated_at": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "tokens_pk_columns_input": {
            "mint_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "tokens_select_column": {},
        "tokens_set_input": {
            "decimals": [
                616
            ],
            "image_url": [
                5
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stddev_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stddev_pop_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stddev_samp_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stream_cursor_input": {
            "initial_value": [
                725
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stream_cursor_value_input": {
            "decimals": [
                616
            ],
            "image_url": [
                5
            ],
            "mint_acct": [
                5
            ],
            "name": [
                5
            ],
            "supply": [
                7
            ],
            "symbol": [
                5
            ],
            "updated_at": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "tokens_sum_fields": {
            "decimals": [
                616
            ],
            "supply": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "tokens_update_column": {},
        "tokens_updates": {
            "_inc": [
                710
            ],
            "_set": [
                720
            ],
            "where": [
                708
            ],
            "__typename": [
                5
            ]
        },
        "tokens_var_pop_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_var_samp_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "tokens_variance_fields": {
            "decimals": [
                2
            ],
            "supply": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions": {
            "slot": [
                7
            ],
            "transaction": [
                815
            ],
            "transaction_watcher": [
                773
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate": {
            "aggregate": [
                736
            ],
            "nodes": [
                732
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp": {
            "count": [
                735
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp_count": {
            "arguments": [
                753
            ],
            "distinct": [
                0
            ],
            "filter": [
                741
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_fields": {
            "avg": [
                739
            ],
            "count": [
                3,
                {
                    "columns": [
                        753,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                745
            ],
            "min": [
                747
            ],
            "stddev": [
                755
            ],
            "stddev_pop": [
                757
            ],
            "stddev_samp": [
                759
            ],
            "sum": [
                763
            ],
            "var_pop": [
                767
            ],
            "var_samp": [
                769
            ],
            "variance": [
                771
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_order_by": {
            "avg": [
                740
            ],
            "count": [
                335
            ],
            "max": [
                746
            ],
            "min": [
                748
            ],
            "stddev": [
                756
            ],
            "stddev_pop": [
                758
            ],
            "stddev_samp": [
                760
            ],
            "sum": [
                764
            ],
            "var_pop": [
                768
            ],
            "var_samp": [
                770
            ],
            "variance": [
                772
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_arr_rel_insert_input": {
            "data": [
                744
            ],
            "on_conflict": [
                750
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_avg_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_avg_order_by": {
            "slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_bool_exp": {
            "_and": [
                741
            ],
            "_not": [
                741
            ],
            "_or": [
                741
            ],
            "slot": [
                8
            ],
            "transaction": [
                819
            ],
            "transaction_watcher": [
                782
            ],
            "tx_sig": [
                6
            ],
            "watcher_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_constraint": {},
        "transaction_watcher_transactions_inc_input": {
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_insert_input": {
            "slot": [
                7
            ],
            "transaction": [
                826
            ],
            "transaction_watcher": [
                791
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_max_fields": {
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_max_order_by": {
            "slot": [
                335
            ],
            "tx_sig": [
                335
            ],
            "watcher_acct": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_min_fields": {
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_min_order_by": {
            "slot": [
                335
            ],
            "tx_sig": [
                335
            ],
            "watcher_acct": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                732
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_on_conflict": {
            "constraint": [
                742
            ],
            "update_columns": [
                765
            ],
            "where": [
                741
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_order_by": {
            "slot": [
                335
            ],
            "transaction": [
                828
            ],
            "transaction_watcher": [
                793
            ],
            "tx_sig": [
                335
            ],
            "watcher_acct": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_pk_columns_input": {
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_select_column": {},
        "transaction_watcher_transactions_set_input": {
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_order_by": {
            "slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_pop_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_pop_order_by": {
            "slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_samp_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stddev_samp_order_by": {
            "slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stream_cursor_input": {
            "initial_value": [
                762
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stream_cursor_value_input": {
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "watcher_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_sum_fields": {
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_sum_order_by": {
            "slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_update_column": {},
        "transaction_watcher_transactions_updates": {
            "_inc": [
                743
            ],
            "_set": [
                754
            ],
            "where": [
                741
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_var_pop_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_var_pop_order_by": {
            "slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_var_samp_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_var_samp_order_by": {
            "slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_variance_fields": {
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_variance_order_by": {
            "slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "indexer_account_dependencies": [
                190,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                191,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "transaction": [
                815
            ],
            "transactionByLatestTxSig": [
                815
            ],
            "transaction_watcher_transactions": [
                732,
                {
                    "distinct_on": [
                        753,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                733,
                {
                    "distinct_on": [
                        753,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate": {
            "aggregate": [
                777
            ],
            "nodes": [
                773
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp": {
            "count": [
                776
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp_count": {
            "arguments": [
                795
            ],
            "distinct": [
                0
            ],
            "filter": [
                782
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_fields": {
            "avg": [
                780
            ],
            "count": [
                3,
                {
                    "columns": [
                        795,
                        "[transaction_watchers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                786
            ],
            "min": [
                788
            ],
            "stddev": [
                797
            ],
            "stddev_pop": [
                799
            ],
            "stddev_samp": [
                801
            ],
            "sum": [
                805
            ],
            "var_pop": [
                809
            ],
            "var_samp": [
                811
            ],
            "variance": [
                813
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_order_by": {
            "avg": [
                781
            ],
            "count": [
                335
            ],
            "max": [
                787
            ],
            "min": [
                789
            ],
            "stddev": [
                798
            ],
            "stddev_pop": [
                800
            ],
            "stddev_samp": [
                802
            ],
            "sum": [
                806
            ],
            "var_pop": [
                810
            ],
            "var_samp": [
                812
            ],
            "variance": [
                814
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_arr_rel_insert_input": {
            "data": [
                785
            ],
            "on_conflict": [
                792
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_avg_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_avg_order_by": {
            "checked_up_to_slot": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_bool_exp": {
            "_and": [
                782
            ],
            "_not": [
                782
            ],
            "_or": [
                782
            ],
            "acct": [
                6
            ],
            "checked_up_to_slot": [
                8
            ],
            "description": [
                6
            ],
            "first_tx_sig": [
                6
            ],
            "indexer_account_dependencies": [
                197
            ],
            "indexer_account_dependencies_aggregate": [
                192
            ],
            "latest_tx_sig": [
                6
            ],
            "serializer_logic_version": [
                617
            ],
            "transaction": [
                819
            ],
            "transactionByLatestTxSig": [
                819
            ],
            "transaction_watcher_transactions": [
                741
            ],
            "transaction_watcher_transactions_aggregate": [
                734
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_constraint": {},
        "transaction_watchers_inc_input": {
            "checked_up_to_slot": [
                7
            ],
            "serializer_logic_version": [
                616
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_insert_input": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "indexer_account_dependencies": [
                196
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "transaction": [
                826
            ],
            "transactionByLatestTxSig": [
                826
            ],
            "transaction_watcher_transactions": [
                738
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_max_fields": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_max_order_by": {
            "acct": [
                335
            ],
            "checked_up_to_slot": [
                335
            ],
            "description": [
                335
            ],
            "first_tx_sig": [
                335
            ],
            "latest_tx_sig": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_min_fields": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_min_order_by": {
            "acct": [
                335
            ],
            "checked_up_to_slot": [
                335
            ],
            "description": [
                335
            ],
            "first_tx_sig": [
                335
            ],
            "latest_tx_sig": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                773
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_obj_rel_insert_input": {
            "data": [
                785
            ],
            "on_conflict": [
                792
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_on_conflict": {
            "constraint": [
                783
            ],
            "update_columns": [
                807
            ],
            "where": [
                782
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_order_by": {
            "acct": [
                335
            ],
            "checked_up_to_slot": [
                335
            ],
            "description": [
                335
            ],
            "first_tx_sig": [
                335
            ],
            "indexer_account_dependencies_aggregate": [
                195
            ],
            "latest_tx_sig": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "transaction": [
                828
            ],
            "transactionByLatestTxSig": [
                828
            ],
            "transaction_watcher_transactions_aggregate": [
                737
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_pk_columns_input": {
            "acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_select_column": {},
        "transaction_watchers_set_input": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_order_by": {
            "checked_up_to_slot": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_pop_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_pop_order_by": {
            "checked_up_to_slot": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_samp_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stddev_samp_order_by": {
            "checked_up_to_slot": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stream_cursor_input": {
            "initial_value": [
                804
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stream_cursor_value_input": {
            "acct": [
                5
            ],
            "checked_up_to_slot": [
                7
            ],
            "description": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_sum_fields": {
            "checked_up_to_slot": [
                7
            ],
            "serializer_logic_version": [
                616
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_sum_order_by": {
            "checked_up_to_slot": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_update_column": {},
        "transaction_watchers_updates": {
            "_inc": [
                784
            ],
            "_set": [
                796
            ],
            "where": [
                782
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_var_pop_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_var_pop_order_by": {
            "checked_up_to_slot": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_var_samp_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_var_samp_order_by": {
            "checked_up_to_slot": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_variance_fields": {
            "checked_up_to_slot": [
                2
            ],
            "serializer_logic_version": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_variance_order_by": {
            "checked_up_to_slot": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transactions": {
            "block_time": [
                660
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                190,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                191,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                773,
                {
                    "distinct_on": [
                        795,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        793,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        782
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                774,
                {
                    "distinct_on": [
                        795,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        793,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        782
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                732,
                {
                    "distinct_on": [
                        753,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                733,
                {
                    "distinct_on": [
                        753,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "transaction_watchers": [
                773,
                {
                    "distinct_on": [
                        795,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        793,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        782
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                774,
                {
                    "distinct_on": [
                        795,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        793,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        782
                    ]
                }
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate": {
            "aggregate": [
                817
            ],
            "nodes": [
                815
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                818
            ],
            "count": [
                3,
                {
                    "columns": [
                        830,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                823
            ],
            "min": [
                824
            ],
            "stddev": [
                832
            ],
            "stddev_pop": [
                833
            ],
            "stddev_samp": [
                834
            ],
            "sum": [
                837
            ],
            "var_pop": [
                840
            ],
            "var_samp": [
                841
            ],
            "variance": [
                842
            ],
            "__typename": [
                5
            ]
        },
        "transactions_avg_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_bool_exp": {
            "_and": [
                819
            ],
            "_not": [
                819
            ],
            "_or": [
                819
            ],
            "block_time": [
                661
            ],
            "failed": [
                1
            ],
            "indexer_account_dependencies": [
                197
            ],
            "indexer_account_dependencies_aggregate": [
                192
            ],
            "payload": [
                6
            ],
            "serializer_logic_version": [
                617
            ],
            "slot": [
                8
            ],
            "transactionWatchersByLatestTxSig": [
                782
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                775
            ],
            "transaction_watcher_transactions": [
                741
            ],
            "transaction_watcher_transactions_aggregate": [
                734
            ],
            "transaction_watchers": [
                782
            ],
            "transaction_watchers_aggregate": [
                775
            ],
            "tx_sig": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "transactions_constraint": {},
        "transactions_inc_input": {
            "serializer_logic_version": [
                616
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "transactions_insert_input": {
            "block_time": [
                660
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                196
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                779
            ],
            "transaction_watcher_transactions": [
                738
            ],
            "transaction_watchers": [
                779
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_max_fields": {
            "block_time": [
                660
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_min_fields": {
            "block_time": [
                660
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                815
            ],
            "__typename": [
                5
            ]
        },
        "transactions_obj_rel_insert_input": {
            "data": [
                822
            ],
            "on_conflict": [
                827
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                820
            ],
            "update_columns": [
                838
            ],
            "where": [
                819
            ],
            "__typename": [
                5
            ]
        },
        "transactions_order_by": {
            "block_time": [
                335
            ],
            "failed": [
                335
            ],
            "indexer_account_dependencies_aggregate": [
                195
            ],
            "payload": [
                335
            ],
            "serializer_logic_version": [
                335
            ],
            "slot": [
                335
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                778
            ],
            "transaction_watcher_transactions_aggregate": [
                737
            ],
            "transaction_watchers_aggregate": [
                778
            ],
            "tx_sig": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "transactions_pk_columns_input": {
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_select_column": {},
        "transactions_set_input": {
            "block_time": [
                660
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stddev_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stddev_pop_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stddev_samp_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stream_cursor_input": {
            "initial_value": [
                836
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stream_cursor_value_input": {
            "block_time": [
                660
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                616
            ],
            "slot": [
                7
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "transactions_sum_fields": {
            "serializer_logic_version": [
                616
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "transactions_update_column": {},
        "transactions_updates": {
            "_inc": [
                821
            ],
            "_set": [
                831
            ],
            "where": [
                819
            ],
            "__typename": [
                5
            ]
        },
        "transactions_var_pop_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_var_samp_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "transactions_variance_fields": {
            "serializer_logic_version": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps": {
            "market": [
                291
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                333
            ],
            "proposal": [
                515
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate": {
            "aggregate": [
                847
            ],
            "nodes": [
                843
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp": {
            "count": [
                846
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp_count": {
            "arguments": [
                864
            ],
            "distinct": [
                0
            ],
            "filter": [
                852
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_fields": {
            "avg": [
                850
            ],
            "count": [
                3,
                {
                    "columns": [
                        864,
                        "[twaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                856
            ],
            "min": [
                858
            ],
            "stddev": [
                866
            ],
            "stddev_pop": [
                868
            ],
            "stddev_samp": [
                870
            ],
            "sum": [
                874
            ],
            "var_pop": [
                878
            ],
            "var_samp": [
                880
            ],
            "variance": [
                882
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_order_by": {
            "avg": [
                851
            ],
            "count": [
                335
            ],
            "max": [
                857
            ],
            "min": [
                859
            ],
            "stddev": [
                867
            ],
            "stddev_pop": [
                869
            ],
            "stddev_samp": [
                871
            ],
            "sum": [
                875
            ],
            "var_pop": [
                879
            ],
            "var_samp": [
                881
            ],
            "variance": [
                883
            ],
            "__typename": [
                5
            ]
        },
        "twaps_arr_rel_insert_input": {
            "data": [
                855
            ],
            "on_conflict": [
                861
            ],
            "__typename": [
                5
            ]
        },
        "twaps_avg_fields": {
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_avg_order_by": {
            "observation_agg": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_bool_exp": {
            "_and": [
                852
            ],
            "_not": [
                852
            ],
            "_or": [
                852
            ],
            "market": [
                300
            ],
            "market_acct": [
                6
            ],
            "observation_agg": [
                334
            ],
            "proposal": [
                534
            ],
            "proposal_acct": [
                6
            ],
            "token_amount": [
                8
            ],
            "updated_slot": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "twaps_constraint": {},
        "twaps_inc_input": {
            "observation_agg": [
                333
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_insert_input": {
            "market": [
                309
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                333
            ],
            "proposal": [
                543
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_max_fields": {
            "market_acct": [
                5
            ],
            "observation_agg": [
                333
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_max_order_by": {
            "market_acct": [
                335
            ],
            "observation_agg": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_min_fields": {
            "market_acct": [
                5
            ],
            "observation_agg": [
                333
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_min_order_by": {
            "market_acct": [
                335
            ],
            "observation_agg": [
                335
            ],
            "proposal_acct": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                843
            ],
            "__typename": [
                5
            ]
        },
        "twaps_on_conflict": {
            "constraint": [
                853
            ],
            "update_columns": [
                876
            ],
            "where": [
                852
            ],
            "__typename": [
                5
            ]
        },
        "twaps_order_by": {
            "market": [
                311
            ],
            "market_acct": [
                335
            ],
            "observation_agg": [
                335
            ],
            "proposal": [
                545
            ],
            "proposal_acct": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_pk_columns_input": {
            "market_acct": [
                5
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_select_column": {},
        "twaps_set_input": {
            "market_acct": [
                5
            ],
            "observation_agg": [
                333
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_fields": {
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_order_by": {
            "observation_agg": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_pop_fields": {
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_pop_order_by": {
            "observation_agg": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_samp_fields": {
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_samp_order_by": {
            "observation_agg": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stream_cursor_input": {
            "initial_value": [
                873
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stream_cursor_value_input": {
            "market_acct": [
                5
            ],
            "observation_agg": [
                333
            ],
            "proposal_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_sum_fields": {
            "observation_agg": [
                333
            ],
            "token_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twaps_sum_order_by": {
            "observation_agg": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_update_column": {},
        "twaps_updates": {
            "_inc": [
                854
            ],
            "_set": [
                865
            ],
            "where": [
                852
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_pop_fields": {
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_pop_order_by": {
            "observation_agg": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_samp_fields": {
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_samp_order_by": {
            "observation_agg": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "twaps_variance_fields": {
            "observation_agg": [
                2
            ],
            "token_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps_variance_order_by": {
            "observation_agg": [
                335
            ],
            "token_amount": [
                335
            ],
            "updated_slot": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "users": {
            "created_at": [
                660
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_aggregate": {
            "aggregate": [
                886
            ],
            "nodes": [
                884
            ],
            "__typename": [
                5
            ]
        },
        "users_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        895,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                890
            ],
            "min": [
                891
            ],
            "__typename": [
                5
            ]
        },
        "users_bool_exp": {
            "_and": [
                887
            ],
            "_not": [
                887
            ],
            "_or": [
                887
            ],
            "created_at": [
                661
            ],
            "user_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "users_constraint": {},
        "users_insert_input": {
            "created_at": [
                660
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_max_fields": {
            "created_at": [
                660
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_min_fields": {
            "created_at": [
                660
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                884
            ],
            "__typename": [
                5
            ]
        },
        "users_on_conflict": {
            "constraint": [
                888
            ],
            "update_columns": [
                899
            ],
            "where": [
                887
            ],
            "__typename": [
                5
            ]
        },
        "users_order_by": {
            "created_at": [
                335
            ],
            "user_acct": [
                335
            ],
            "__typename": [
                5
            ]
        },
        "users_select_column": {},
        "users_set_input": {
            "created_at": [
                660
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_stream_cursor_input": {
            "initial_value": [
                898
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "users_stream_cursor_value_input": {
            "created_at": [
                660
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_update_column": {},
        "users_updates": {
            "_set": [
                896
            ],
            "where": [
                887
            ],
            "__typename": [
                5
            ]
        },
        "Query": {
            "candles": [
                9,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_aggregate": [
                10,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_by_pk": [
                9,
                {
                    "candle_duration": [
                        3,
                        "Int!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "timestamp": [
                        660,
                        "timestamp!"
                    ]
                }
            ],
            "comments": [
                50,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_aggregate": [
                51,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_by_pk": [
                50,
                {
                    "comment_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "conditional_vaults": [
                92,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_aggregate": [
                93,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_by_pk": [
                92,
                {
                    "cond_vault_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "dao_details": [
                118,
                {
                    "distinct_on": [
                        133,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        131,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "dao_details_aggregate": [
                119,
                {
                    "distinct_on": [
                        133,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        131,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "dao_details_by_pk": [
                118,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "daos": [
                146,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "daos_aggregate": [
                147,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "daos_by_pk": [
                146,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexer_account_dependencies": [
                190,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                191,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                190,
                {
                    "acct": [
                        5,
                        "String!"
                    ],
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexers": [
                214,
                {
                    "distinct_on": [
                        229,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        227,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        218
                    ]
                }
            ],
            "indexers_aggregate": [
                215,
                {
                    "distinct_on": [
                        229,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        227,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        218
                    ]
                }
            ],
            "indexers_by_pk": [
                214,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes": [
                245,
                {
                    "distinct_on": [
                        269,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        267,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        256
                    ]
                }
            ],
            "makes_aggregate": [
                246,
                {
                    "distinct_on": [
                        269,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        267,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        256
                    ]
                }
            ],
            "makes_by_pk": [
                245,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets": [
                291,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "markets_aggregate": [
                292,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "markets_by_pk": [
                291,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders": [
                336,
                {
                    "distinct_on": [
                        360,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        358,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        347
                    ]
                }
            ],
            "orders_aggregate": [
                337,
                {
                    "distinct_on": [
                        360,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        358,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        347
                    ]
                }
            ],
            "orders_by_pk": [
                336,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "program_system": [
                382,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "program_system_aggregate": [
                383,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "program_system_by_pk": [
                382,
                {
                    "system_version": [
                        188,
                        "float8!"
                    ]
                }
            ],
            "programs": [
                441,
                {
                    "distinct_on": [
                        456,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        454,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        445
                    ]
                }
            ],
            "programs_aggregate": [
                442,
                {
                    "distinct_on": [
                        456,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        454,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        445
                    ]
                }
            ],
            "programs_by_pk": [
                441,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_details": [
                469,
                {
                    "distinct_on": [
                        495,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        492,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "proposal_details_aggregate": [
                470,
                {
                    "distinct_on": [
                        495,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        492,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "proposal_details_by_pk": [
                469,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposals": [
                515,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "proposals_aggregate": [
                516,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "proposals_by_pk": [
                515,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "reactions": [
                575,
                {
                    "distinct_on": [
                        596,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        594,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "reactions_aggregate": [
                576,
                {
                    "distinct_on": [
                        596,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        594,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "reactions_by_pk": [
                575,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ],
                    "reaction": [
                        5,
                        "String!"
                    ],
                    "reactor_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes": [
                618,
                {
                    "distinct_on": [
                        640,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        638,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        627
                    ]
                }
            ],
            "takes_aggregate": [
                619,
                {
                    "distinct_on": [
                        640,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        638,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        627
                    ]
                }
            ],
            "takes_by_pk": [
                618,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts": [
                662,
                {
                    "distinct_on": [
                        684,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        682,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        671
                    ]
                }
            ],
            "token_accts_aggregate": [
                663,
                {
                    "distinct_on": [
                        684,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        682,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        671
                    ]
                }
            ],
            "token_accts_by_pk": [
                662,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens": [
                704,
                {
                    "distinct_on": [
                        719,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        708
                    ]
                }
            ],
            "tokens_aggregate": [
                705,
                {
                    "distinct_on": [
                        719,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        708
                    ]
                }
            ],
            "tokens_by_pk": [
                704,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                732,
                {
                    "distinct_on": [
                        753,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                733,
                {
                    "distinct_on": [
                        753,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                732,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ],
                    "watcher_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers": [
                773,
                {
                    "distinct_on": [
                        795,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        793,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        782
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                774,
                {
                    "distinct_on": [
                        795,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        793,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        782
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                773,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                815,
                {
                    "distinct_on": [
                        830,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        828,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        819
                    ]
                }
            ],
            "transactions_aggregate": [
                816,
                {
                    "distinct_on": [
                        830,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        828,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        819
                    ]
                }
            ],
            "transactions_by_pk": [
                815,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "twaps": [
                843,
                {
                    "distinct_on": [
                        864,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        852
                    ]
                }
            ],
            "twaps_aggregate": [
                844,
                {
                    "distinct_on": [
                        864,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        852
                    ]
                }
            ],
            "twaps_by_pk": [
                843,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "updated_slot": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "users": [
                884,
                {
                    "distinct_on": [
                        895,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        894,
                        "[users_order_by!]"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "users_aggregate": [
                885,
                {
                    "distinct_on": [
                        895,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        894,
                        "[users_order_by!]"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "delete_candles": [
                26,
                {
                    "where": [
                        18,
                        "candles_bool_exp!"
                    ]
                }
            ],
            "delete_candles_by_pk": [
                9,
                {
                    "candle_duration": [
                        3,
                        "Int!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "timestamp": [
                        660,
                        "timestamp!"
                    ]
                }
            ],
            "delete_comments": [
                67,
                {
                    "where": [
                        59,
                        "comments_bool_exp!"
                    ]
                }
            ],
            "delete_comments_by_pk": [
                50,
                {
                    "comment_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_conditional_vaults": [
                106,
                {
                    "where": [
                        99,
                        "conditional_vaults_bool_exp!"
                    ]
                }
            ],
            "delete_conditional_vaults_by_pk": [
                92,
                {
                    "cond_vault_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_dao_details": [
                128,
                {
                    "where": [
                        122,
                        "dao_details_bool_exp!"
                    ]
                }
            ],
            "delete_dao_details_by_pk": [
                118,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_daos": [
                163,
                {
                    "where": [
                        155,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "delete_daos_by_pk": [
                146,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies": [
                204,
                {
                    "where": [
                        197,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies_by_pk": [
                190,
                {
                    "acct": [
                        5,
                        "String!"
                    ],
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_indexers": [
                224,
                {
                    "where": [
                        218,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "delete_indexers_by_pk": [
                214,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_makes": [
                264,
                {
                    "where": [
                        256,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "delete_makes_by_pk": [
                245,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_markets": [
                308,
                {
                    "where": [
                        300,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "delete_markets_by_pk": [
                291,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_orders": [
                355,
                {
                    "where": [
                        347,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "delete_orders_by_pk": [
                336,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_program_system": [
                409,
                {
                    "where": [
                        401,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "delete_program_system_by_pk": [
                382,
                {
                    "system_version": [
                        188,
                        "float8!"
                    ]
                }
            ],
            "delete_programs": [
                451,
                {
                    "where": [
                        445,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "delete_programs_by_pk": [
                441,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_details": [
                490,
                {
                    "where": [
                        479,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_details_by_pk": [
                469,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_proposals": [
                542,
                {
                    "where": [
                        534,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "delete_proposals_by_pk": [
                515,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_reactions": [
                592,
                {
                    "where": [
                        584,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "delete_reactions_by_pk": [
                575,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ],
                    "reaction": [
                        5,
                        "String!"
                    ],
                    "reactor_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_takes": [
                635,
                {
                    "where": [
                        627,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "delete_takes_by_pk": [
                618,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_accts": [
                679,
                {
                    "where": [
                        671,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "delete_token_accts_by_pk": [
                662,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_tokens": [
                714,
                {
                    "where": [
                        708,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "delete_tokens_by_pk": [
                704,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions": [
                749,
                {
                    "where": [
                        741,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions_by_pk": [
                732,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ],
                    "watcher_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watchers": [
                790,
                {
                    "where": [
                        782,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watchers_by_pk": [
                773,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                825,
                {
                    "where": [
                        819,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                815,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_twaps": [
                860,
                {
                    "where": [
                        852,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "delete_twaps_by_pk": [
                843,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "updated_slot": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_users": [
                892,
                {
                    "where": [
                        887,
                        "users_bool_exp!"
                    ]
                }
            ],
            "insert_candles": [
                26,
                {
                    "objects": [
                        21,
                        "[candles_insert_input!]!"
                    ],
                    "on_conflict": [
                        27
                    ]
                }
            ],
            "insert_candles_one": [
                9,
                {
                    "object": [
                        21,
                        "candles_insert_input!"
                    ],
                    "on_conflict": [
                        27
                    ]
                }
            ],
            "insert_comments": [
                67,
                {
                    "objects": [
                        62,
                        "[comments_insert_input!]!"
                    ],
                    "on_conflict": [
                        69
                    ]
                }
            ],
            "insert_comments_one": [
                50,
                {
                    "object": [
                        62,
                        "comments_insert_input!"
                    ],
                    "on_conflict": [
                        69
                    ]
                }
            ],
            "insert_conditional_vaults": [
                106,
                {
                    "objects": [
                        101,
                        "[conditional_vaults_insert_input!]!"
                    ],
                    "on_conflict": [
                        108
                    ]
                }
            ],
            "insert_conditional_vaults_one": [
                92,
                {
                    "object": [
                        101,
                        "conditional_vaults_insert_input!"
                    ],
                    "on_conflict": [
                        108
                    ]
                }
            ],
            "insert_dao_details": [
                128,
                {
                    "objects": [
                        125,
                        "[dao_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        130
                    ]
                }
            ],
            "insert_dao_details_one": [
                118,
                {
                    "object": [
                        125,
                        "dao_details_insert_input!"
                    ],
                    "on_conflict": [
                        130
                    ]
                }
            ],
            "insert_daos": [
                163,
                {
                    "objects": [
                        158,
                        "[daos_insert_input!]!"
                    ],
                    "on_conflict": [
                        165
                    ]
                }
            ],
            "insert_daos_one": [
                146,
                {
                    "object": [
                        158,
                        "daos_insert_input!"
                    ],
                    "on_conflict": [
                        165
                    ]
                }
            ],
            "insert_indexer_account_dependencies": [
                204,
                {
                    "objects": [
                        199,
                        "[indexer_account_dependencies_insert_input!]!"
                    ],
                    "on_conflict": [
                        205
                    ]
                }
            ],
            "insert_indexer_account_dependencies_one": [
                190,
                {
                    "object": [
                        199,
                        "indexer_account_dependencies_insert_input!"
                    ],
                    "on_conflict": [
                        205
                    ]
                }
            ],
            "insert_indexers": [
                224,
                {
                    "objects": [
                        221,
                        "[indexers_insert_input!]!"
                    ],
                    "on_conflict": [
                        226
                    ]
                }
            ],
            "insert_indexers_one": [
                214,
                {
                    "object": [
                        221,
                        "indexers_insert_input!"
                    ],
                    "on_conflict": [
                        226
                    ]
                }
            ],
            "insert_makes": [
                264,
                {
                    "objects": [
                        259,
                        "[makes_insert_input!]!"
                    ],
                    "on_conflict": [
                        266
                    ]
                }
            ],
            "insert_makes_one": [
                245,
                {
                    "object": [
                        259,
                        "makes_insert_input!"
                    ],
                    "on_conflict": [
                        266
                    ]
                }
            ],
            "insert_markets": [
                308,
                {
                    "objects": [
                        303,
                        "[markets_insert_input!]!"
                    ],
                    "on_conflict": [
                        310
                    ]
                }
            ],
            "insert_markets_one": [
                291,
                {
                    "object": [
                        303,
                        "markets_insert_input!"
                    ],
                    "on_conflict": [
                        310
                    ]
                }
            ],
            "insert_orders": [
                355,
                {
                    "objects": [
                        350,
                        "[orders_insert_input!]!"
                    ],
                    "on_conflict": [
                        357
                    ]
                }
            ],
            "insert_orders_one": [
                336,
                {
                    "object": [
                        350,
                        "orders_insert_input!"
                    ],
                    "on_conflict": [
                        357
                    ]
                }
            ],
            "insert_program_system": [
                409,
                {
                    "objects": [
                        404,
                        "[program_system_insert_input!]!"
                    ],
                    "on_conflict": [
                        410
                    ]
                }
            ],
            "insert_program_system_one": [
                382,
                {
                    "object": [
                        404,
                        "program_system_insert_input!"
                    ],
                    "on_conflict": [
                        410
                    ]
                }
            ],
            "insert_programs": [
                451,
                {
                    "objects": [
                        448,
                        "[programs_insert_input!]!"
                    ],
                    "on_conflict": [
                        453
                    ]
                }
            ],
            "insert_programs_one": [
                441,
                {
                    "object": [
                        448,
                        "programs_insert_input!"
                    ],
                    "on_conflict": [
                        453
                    ]
                }
            ],
            "insert_proposal_details": [
                490,
                {
                    "objects": [
                        485,
                        "[proposal_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        491
                    ]
                }
            ],
            "insert_proposal_details_one": [
                469,
                {
                    "object": [
                        485,
                        "proposal_details_insert_input!"
                    ],
                    "on_conflict": [
                        491
                    ]
                }
            ],
            "insert_proposals": [
                542,
                {
                    "objects": [
                        537,
                        "[proposals_insert_input!]!"
                    ],
                    "on_conflict": [
                        544
                    ]
                }
            ],
            "insert_proposals_one": [
                515,
                {
                    "object": [
                        537,
                        "proposals_insert_input!"
                    ],
                    "on_conflict": [
                        544
                    ]
                }
            ],
            "insert_reactions": [
                592,
                {
                    "objects": [
                        587,
                        "[reactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        593
                    ]
                }
            ],
            "insert_reactions_one": [
                575,
                {
                    "object": [
                        587,
                        "reactions_insert_input!"
                    ],
                    "on_conflict": [
                        593
                    ]
                }
            ],
            "insert_takes": [
                635,
                {
                    "objects": [
                        630,
                        "[takes_insert_input!]!"
                    ],
                    "on_conflict": [
                        637
                    ]
                }
            ],
            "insert_takes_one": [
                618,
                {
                    "object": [
                        630,
                        "takes_insert_input!"
                    ],
                    "on_conflict": [
                        637
                    ]
                }
            ],
            "insert_token_accts": [
                679,
                {
                    "objects": [
                        674,
                        "[token_accts_insert_input!]!"
                    ],
                    "on_conflict": [
                        681
                    ]
                }
            ],
            "insert_token_accts_one": [
                662,
                {
                    "object": [
                        674,
                        "token_accts_insert_input!"
                    ],
                    "on_conflict": [
                        681
                    ]
                }
            ],
            "insert_tokens": [
                714,
                {
                    "objects": [
                        711,
                        "[tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        716
                    ]
                }
            ],
            "insert_tokens_one": [
                704,
                {
                    "object": [
                        711,
                        "tokens_insert_input!"
                    ],
                    "on_conflict": [
                        716
                    ]
                }
            ],
            "insert_transaction_watcher_transactions": [
                749,
                {
                    "objects": [
                        744,
                        "[transaction_watcher_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        750
                    ]
                }
            ],
            "insert_transaction_watcher_transactions_one": [
                732,
                {
                    "object": [
                        744,
                        "transaction_watcher_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        750
                    ]
                }
            ],
            "insert_transaction_watchers": [
                790,
                {
                    "objects": [
                        785,
                        "[transaction_watchers_insert_input!]!"
                    ],
                    "on_conflict": [
                        792
                    ]
                }
            ],
            "insert_transaction_watchers_one": [
                773,
                {
                    "object": [
                        785,
                        "transaction_watchers_insert_input!"
                    ],
                    "on_conflict": [
                        792
                    ]
                }
            ],
            "insert_transactions": [
                825,
                {
                    "objects": [
                        822,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        827
                    ]
                }
            ],
            "insert_transactions_one": [
                815,
                {
                    "object": [
                        822,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        827
                    ]
                }
            ],
            "insert_twaps": [
                860,
                {
                    "objects": [
                        855,
                        "[twaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        861
                    ]
                }
            ],
            "insert_twaps_one": [
                843,
                {
                    "object": [
                        855,
                        "twaps_insert_input!"
                    ],
                    "on_conflict": [
                        861
                    ]
                }
            ],
            "insert_users": [
                892,
                {
                    "objects": [
                        889,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        893
                    ]
                }
            ],
            "insert_users_one": [
                884,
                {
                    "object": [
                        889,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        893
                    ]
                }
            ],
            "update_candles": [
                26,
                {
                    "_inc": [
                        20
                    ],
                    "_set": [
                        31
                    ],
                    "where": [
                        18,
                        "candles_bool_exp!"
                    ]
                }
            ],
            "update_candles_by_pk": [
                9,
                {
                    "_inc": [
                        20
                    ],
                    "_set": [
                        31
                    ],
                    "pk_columns": [
                        29,
                        "candles_pk_columns_input!"
                    ]
                }
            ],
            "update_candles_many": [
                26,
                {
                    "updates": [
                        43,
                        "[candles_updates!]!"
                    ]
                }
            ],
            "update_comments": [
                67,
                {
                    "_inc": [
                        61
                    ],
                    "_set": [
                        73
                    ],
                    "where": [
                        59,
                        "comments_bool_exp!"
                    ]
                }
            ],
            "update_comments_by_pk": [
                50,
                {
                    "_inc": [
                        61
                    ],
                    "_set": [
                        73
                    ],
                    "pk_columns": [
                        71,
                        "comments_pk_columns_input!"
                    ]
                }
            ],
            "update_comments_many": [
                67,
                {
                    "updates": [
                        85,
                        "[comments_updates!]!"
                    ]
                }
            ],
            "update_conditional_vaults": [
                106,
                {
                    "_set": [
                        112
                    ],
                    "where": [
                        99,
                        "conditional_vaults_bool_exp!"
                    ]
                }
            ],
            "update_conditional_vaults_by_pk": [
                92,
                {
                    "_set": [
                        112
                    ],
                    "pk_columns": [
                        110,
                        "conditional_vaults_pk_columns_input!"
                    ]
                }
            ],
            "update_conditional_vaults_many": [
                106,
                {
                    "updates": [
                        116,
                        "[conditional_vaults_updates!]!"
                    ]
                }
            ],
            "update_dao_details": [
                128,
                {
                    "_inc": [
                        124
                    ],
                    "_set": [
                        134
                    ],
                    "where": [
                        122,
                        "dao_details_bool_exp!"
                    ]
                }
            ],
            "update_dao_details_by_pk": [
                118,
                {
                    "_inc": [
                        124
                    ],
                    "_set": [
                        134
                    ],
                    "pk_columns": [
                        132,
                        "dao_details_pk_columns_input!"
                    ]
                }
            ],
            "update_dao_details_many": [
                128,
                {
                    "updates": [
                        142,
                        "[dao_details_updates!]!"
                    ]
                }
            ],
            "update_daos": [
                163,
                {
                    "_inc": [
                        157
                    ],
                    "_set": [
                        169
                    ],
                    "where": [
                        155,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "update_daos_by_pk": [
                146,
                {
                    "_inc": [
                        157
                    ],
                    "_set": [
                        169
                    ],
                    "pk_columns": [
                        167,
                        "daos_pk_columns_input!"
                    ]
                }
            ],
            "update_daos_many": [
                163,
                {
                    "updates": [
                        181,
                        "[daos_updates!]!"
                    ]
                }
            ],
            "update_indexer_account_dependencies": [
                204,
                {
                    "_set": [
                        209
                    ],
                    "where": [
                        197,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_by_pk": [
                190,
                {
                    "_set": [
                        209
                    ],
                    "pk_columns": [
                        207,
                        "indexer_account_dependencies_pk_columns_input!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_many": [
                204,
                {
                    "updates": [
                        213,
                        "[indexer_account_dependencies_updates!]!"
                    ]
                }
            ],
            "update_indexers": [
                224,
                {
                    "_inc": [
                        220
                    ],
                    "_set": [
                        230
                    ],
                    "where": [
                        218,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "update_indexers_by_pk": [
                214,
                {
                    "_inc": [
                        220
                    ],
                    "_set": [
                        230
                    ],
                    "pk_columns": [
                        228,
                        "indexers_pk_columns_input!"
                    ]
                }
            ],
            "update_indexers_many": [
                224,
                {
                    "updates": [
                        238,
                        "[indexers_updates!]!"
                    ]
                }
            ],
            "update_makes": [
                264,
                {
                    "_inc": [
                        258
                    ],
                    "_set": [
                        272
                    ],
                    "where": [
                        256,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "update_makes_by_pk": [
                245,
                {
                    "_inc": [
                        258
                    ],
                    "_set": [
                        272
                    ],
                    "pk_columns": [
                        268,
                        "makes_pk_columns_input!"
                    ]
                }
            ],
            "update_makes_many": [
                264,
                {
                    "updates": [
                        284,
                        "[makes_updates!]!"
                    ]
                }
            ],
            "update_markets": [
                308,
                {
                    "_inc": [
                        302
                    ],
                    "_set": [
                        314
                    ],
                    "where": [
                        300,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "update_markets_by_pk": [
                291,
                {
                    "_inc": [
                        302
                    ],
                    "_set": [
                        314
                    ],
                    "pk_columns": [
                        312,
                        "markets_pk_columns_input!"
                    ]
                }
            ],
            "update_markets_many": [
                308,
                {
                    "updates": [
                        326,
                        "[markets_updates!]!"
                    ]
                }
            ],
            "update_orders": [
                355,
                {
                    "_inc": [
                        349
                    ],
                    "_set": [
                        363
                    ],
                    "where": [
                        347,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "update_orders_by_pk": [
                336,
                {
                    "_inc": [
                        349
                    ],
                    "_set": [
                        363
                    ],
                    "pk_columns": [
                        359,
                        "orders_pk_columns_input!"
                    ]
                }
            ],
            "update_orders_many": [
                355,
                {
                    "updates": [
                        375,
                        "[orders_updates!]!"
                    ]
                }
            ],
            "update_program_system": [
                409,
                {
                    "_inc": [
                        403
                    ],
                    "_set": [
                        422
                    ],
                    "where": [
                        401,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "update_program_system_by_pk": [
                382,
                {
                    "_inc": [
                        403
                    ],
                    "_set": [
                        422
                    ],
                    "pk_columns": [
                        412,
                        "program_system_pk_columns_input!"
                    ]
                }
            ],
            "update_program_system_many": [
                409,
                {
                    "updates": [
                        434,
                        "[program_system_updates!]!"
                    ]
                }
            ],
            "update_programs": [
                451,
                {
                    "_inc": [
                        447
                    ],
                    "_set": [
                        457
                    ],
                    "where": [
                        445,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "update_programs_by_pk": [
                441,
                {
                    "_inc": [
                        447
                    ],
                    "_set": [
                        457
                    ],
                    "pk_columns": [
                        455,
                        "programs_pk_columns_input!"
                    ]
                }
            ],
            "update_programs_many": [
                451,
                {
                    "updates": [
                        465,
                        "[programs_updates!]!"
                    ]
                }
            ],
            "update_proposal_details": [
                490,
                {
                    "_append": [
                        475
                    ],
                    "_delete_at_path": [
                        481
                    ],
                    "_delete_elem": [
                        482
                    ],
                    "_delete_key": [
                        483
                    ],
                    "_inc": [
                        484
                    ],
                    "_prepend": [
                        494
                    ],
                    "_set": [
                        496
                    ],
                    "where": [
                        479,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "update_proposal_details_by_pk": [
                469,
                {
                    "_append": [
                        475
                    ],
                    "_delete_at_path": [
                        481
                    ],
                    "_delete_elem": [
                        482
                    ],
                    "_delete_key": [
                        483
                    ],
                    "_inc": [
                        484
                    ],
                    "_prepend": [
                        494
                    ],
                    "_set": [
                        496
                    ],
                    "pk_columns": [
                        493,
                        "proposal_details_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_details_many": [
                490,
                {
                    "updates": [
                        508,
                        "[proposal_details_updates!]!"
                    ]
                }
            ],
            "update_proposals": [
                542,
                {
                    "_inc": [
                        536
                    ],
                    "_set": [
                        556
                    ],
                    "where": [
                        534,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "update_proposals_by_pk": [
                515,
                {
                    "_inc": [
                        536
                    ],
                    "_set": [
                        556
                    ],
                    "pk_columns": [
                        546,
                        "proposals_pk_columns_input!"
                    ]
                }
            ],
            "update_proposals_many": [
                542,
                {
                    "updates": [
                        568,
                        "[proposals_updates!]!"
                    ]
                }
            ],
            "update_reactions": [
                592,
                {
                    "_inc": [
                        586
                    ],
                    "_set": [
                        597
                    ],
                    "where": [
                        584,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "update_reactions_by_pk": [
                575,
                {
                    "_inc": [
                        586
                    ],
                    "_set": [
                        597
                    ],
                    "pk_columns": [
                        595,
                        "reactions_pk_columns_input!"
                    ]
                }
            ],
            "update_reactions_many": [
                592,
                {
                    "updates": [
                        609,
                        "[reactions_updates!]!"
                    ]
                }
            ],
            "update_takes": [
                635,
                {
                    "_inc": [
                        629
                    ],
                    "_set": [
                        641
                    ],
                    "where": [
                        627,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "update_takes_by_pk": [
                618,
                {
                    "_inc": [
                        629
                    ],
                    "_set": [
                        641
                    ],
                    "pk_columns": [
                        639,
                        "takes_pk_columns_input!"
                    ]
                }
            ],
            "update_takes_many": [
                635,
                {
                    "updates": [
                        653,
                        "[takes_updates!]!"
                    ]
                }
            ],
            "update_token_accts": [
                679,
                {
                    "_inc": [
                        673
                    ],
                    "_set": [
                        685
                    ],
                    "where": [
                        671,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "update_token_accts_by_pk": [
                662,
                {
                    "_inc": [
                        673
                    ],
                    "_set": [
                        685
                    ],
                    "pk_columns": [
                        683,
                        "token_accts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_accts_many": [
                679,
                {
                    "updates": [
                        697,
                        "[token_accts_updates!]!"
                    ]
                }
            ],
            "update_tokens": [
                714,
                {
                    "_inc": [
                        710
                    ],
                    "_set": [
                        720
                    ],
                    "where": [
                        708,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "update_tokens_by_pk": [
                704,
                {
                    "_inc": [
                        710
                    ],
                    "_set": [
                        720
                    ],
                    "pk_columns": [
                        718,
                        "tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_tokens_many": [
                714,
                {
                    "updates": [
                        728,
                        "[tokens_updates!]!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions": [
                749,
                {
                    "_inc": [
                        743
                    ],
                    "_set": [
                        754
                    ],
                    "where": [
                        741,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_by_pk": [
                732,
                {
                    "_inc": [
                        743
                    ],
                    "_set": [
                        754
                    ],
                    "pk_columns": [
                        752,
                        "transaction_watcher_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_many": [
                749,
                {
                    "updates": [
                        766,
                        "[transaction_watcher_transactions_updates!]!"
                    ]
                }
            ],
            "update_transaction_watchers": [
                790,
                {
                    "_inc": [
                        784
                    ],
                    "_set": [
                        796
                    ],
                    "where": [
                        782,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watchers_by_pk": [
                773,
                {
                    "_inc": [
                        784
                    ],
                    "_set": [
                        796
                    ],
                    "pk_columns": [
                        794,
                        "transaction_watchers_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watchers_many": [
                790,
                {
                    "updates": [
                        808,
                        "[transaction_watchers_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                825,
                {
                    "_inc": [
                        821
                    ],
                    "_set": [
                        831
                    ],
                    "where": [
                        819,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                815,
                {
                    "_inc": [
                        821
                    ],
                    "_set": [
                        831
                    ],
                    "pk_columns": [
                        829,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                825,
                {
                    "updates": [
                        839,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_twaps": [
                860,
                {
                    "_inc": [
                        854
                    ],
                    "_set": [
                        865
                    ],
                    "where": [
                        852,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "update_twaps_by_pk": [
                843,
                {
                    "_inc": [
                        854
                    ],
                    "_set": [
                        865
                    ],
                    "pk_columns": [
                        863,
                        "twaps_pk_columns_input!"
                    ]
                }
            ],
            "update_twaps_many": [
                860,
                {
                    "updates": [
                        877,
                        "[twaps_updates!]!"
                    ]
                }
            ],
            "update_users": [
                892,
                {
                    "_set": [
                        896
                    ],
                    "where": [
                        887,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_many": [
                892,
                {
                    "updates": [
                        900,
                        "[users_updates!]!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Subscription": {
            "candles": [
                9,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_aggregate": [
                10,
                {
                    "distinct_on": [
                        30,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        28,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "candles_by_pk": [
                9,
                {
                    "candle_duration": [
                        3,
                        "Int!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "timestamp": [
                        660,
                        "timestamp!"
                    ]
                }
            ],
            "candles_stream": [
                9,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        38,
                        "[candles_stream_cursor_input]!"
                    ],
                    "where": [
                        18
                    ]
                }
            ],
            "comments": [
                50,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_aggregate": [
                51,
                {
                    "distinct_on": [
                        72,
                        "[comments_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        70,
                        "[comments_order_by!]"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "comments_by_pk": [
                50,
                {
                    "comment_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "comments_stream": [
                50,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        80,
                        "[comments_stream_cursor_input]!"
                    ],
                    "where": [
                        59
                    ]
                }
            ],
            "conditional_vaults": [
                92,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_aggregate": [
                93,
                {
                    "distinct_on": [
                        111,
                        "[conditional_vaults_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        109,
                        "[conditional_vaults_order_by!]"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "conditional_vaults_by_pk": [
                92,
                {
                    "cond_vault_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "conditional_vaults_stream": [
                92,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        113,
                        "[conditional_vaults_stream_cursor_input]!"
                    ],
                    "where": [
                        99
                    ]
                }
            ],
            "dao_details": [
                118,
                {
                    "distinct_on": [
                        133,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        131,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "dao_details_aggregate": [
                119,
                {
                    "distinct_on": [
                        133,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        131,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "dao_details_by_pk": [
                118,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "dao_details_stream": [
                118,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        138,
                        "[dao_details_stream_cursor_input]!"
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "daos": [
                146,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "daos_aggregate": [
                147,
                {
                    "distinct_on": [
                        168,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        166,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "daos_by_pk": [
                146,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "daos_stream": [
                146,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        176,
                        "[daos_stream_cursor_input]!"
                    ],
                    "where": [
                        155
                    ]
                }
            ],
            "indexer_account_dependencies": [
                190,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                191,
                {
                    "distinct_on": [
                        208,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        206,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                190,
                {
                    "acct": [
                        5,
                        "String!"
                    ],
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexer_account_dependencies_stream": [
                190,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        210,
                        "[indexer_account_dependencies_stream_cursor_input]!"
                    ],
                    "where": [
                        197
                    ]
                }
            ],
            "indexers": [
                214,
                {
                    "distinct_on": [
                        229,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        227,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        218
                    ]
                }
            ],
            "indexers_aggregate": [
                215,
                {
                    "distinct_on": [
                        229,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        227,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        218
                    ]
                }
            ],
            "indexers_by_pk": [
                214,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexers_stream": [
                214,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        234,
                        "[indexers_stream_cursor_input]!"
                    ],
                    "where": [
                        218
                    ]
                }
            ],
            "makes": [
                245,
                {
                    "distinct_on": [
                        269,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        267,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        256
                    ]
                }
            ],
            "makes_aggregate": [
                246,
                {
                    "distinct_on": [
                        269,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        267,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        256
                    ]
                }
            ],
            "makes_by_pk": [
                245,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes_stream": [
                245,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        279,
                        "[makes_stream_cursor_input]!"
                    ],
                    "where": [
                        256
                    ]
                }
            ],
            "markets": [
                291,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "markets_aggregate": [
                292,
                {
                    "distinct_on": [
                        313,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        311,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "markets_by_pk": [
                291,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets_stream": [
                291,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        321,
                        "[markets_stream_cursor_input]!"
                    ],
                    "where": [
                        300
                    ]
                }
            ],
            "orders": [
                336,
                {
                    "distinct_on": [
                        360,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        358,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        347
                    ]
                }
            ],
            "orders_aggregate": [
                337,
                {
                    "distinct_on": [
                        360,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        358,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        347
                    ]
                }
            ],
            "orders_by_pk": [
                336,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders_stream": [
                336,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        370,
                        "[orders_stream_cursor_input]!"
                    ],
                    "where": [
                        347
                    ]
                }
            ],
            "program_system": [
                382,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "program_system_aggregate": [
                383,
                {
                    "distinct_on": [
                        413,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "program_system_by_pk": [
                382,
                {
                    "system_version": [
                        188,
                        "float8!"
                    ]
                }
            ],
            "program_system_stream": [
                382,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        429,
                        "[program_system_stream_cursor_input]!"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "programs": [
                441,
                {
                    "distinct_on": [
                        456,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        454,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        445
                    ]
                }
            ],
            "programs_aggregate": [
                442,
                {
                    "distinct_on": [
                        456,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        454,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        445
                    ]
                }
            ],
            "programs_by_pk": [
                441,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs_stream": [
                441,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        461,
                        "[programs_stream_cursor_input]!"
                    ],
                    "where": [
                        445
                    ]
                }
            ],
            "proposal_details": [
                469,
                {
                    "distinct_on": [
                        495,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        492,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "proposal_details_aggregate": [
                470,
                {
                    "distinct_on": [
                        495,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        492,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "proposal_details_by_pk": [
                469,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_details_stream": [
                469,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        503,
                        "[proposal_details_stream_cursor_input]!"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "proposals": [
                515,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "proposals_aggregate": [
                516,
                {
                    "distinct_on": [
                        547,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        545,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "proposals_by_pk": [
                515,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposals_stream": [
                515,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        563,
                        "[proposals_stream_cursor_input]!"
                    ],
                    "where": [
                        534
                    ]
                }
            ],
            "reactions": [
                575,
                {
                    "distinct_on": [
                        596,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        594,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "reactions_aggregate": [
                576,
                {
                    "distinct_on": [
                        596,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        594,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "reactions_by_pk": [
                575,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ],
                    "reaction": [
                        5,
                        "String!"
                    ],
                    "reactor_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "reactions_stream": [
                575,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        604,
                        "[reactions_stream_cursor_input]!"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "takes": [
                618,
                {
                    "distinct_on": [
                        640,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        638,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        627
                    ]
                }
            ],
            "takes_aggregate": [
                619,
                {
                    "distinct_on": [
                        640,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        638,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        627
                    ]
                }
            ],
            "takes_by_pk": [
                618,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes_stream": [
                618,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        648,
                        "[takes_stream_cursor_input]!"
                    ],
                    "where": [
                        627
                    ]
                }
            ],
            "token_accts": [
                662,
                {
                    "distinct_on": [
                        684,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        682,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        671
                    ]
                }
            ],
            "token_accts_aggregate": [
                663,
                {
                    "distinct_on": [
                        684,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        682,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        671
                    ]
                }
            ],
            "token_accts_by_pk": [
                662,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts_stream": [
                662,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        692,
                        "[token_accts_stream_cursor_input]!"
                    ],
                    "where": [
                        671
                    ]
                }
            ],
            "tokens": [
                704,
                {
                    "distinct_on": [
                        719,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        708
                    ]
                }
            ],
            "tokens_aggregate": [
                705,
                {
                    "distinct_on": [
                        719,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        708
                    ]
                }
            ],
            "tokens_by_pk": [
                704,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens_stream": [
                704,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        724,
                        "[tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        708
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                732,
                {
                    "distinct_on": [
                        753,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                733,
                {
                    "distinct_on": [
                        753,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                732,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ],
                    "watcher_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watcher_transactions_stream": [
                732,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        761,
                        "[transaction_watcher_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        741
                    ]
                }
            ],
            "transaction_watchers": [
                773,
                {
                    "distinct_on": [
                        795,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        793,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        782
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                774,
                {
                    "distinct_on": [
                        795,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        793,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        782
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                773,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers_stream": [
                773,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        803,
                        "[transaction_watchers_stream_cursor_input]!"
                    ],
                    "where": [
                        782
                    ]
                }
            ],
            "transactions": [
                815,
                {
                    "distinct_on": [
                        830,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        828,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        819
                    ]
                }
            ],
            "transactions_aggregate": [
                816,
                {
                    "distinct_on": [
                        830,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        828,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        819
                    ]
                }
            ],
            "transactions_by_pk": [
                815,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                815,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        835,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        819
                    ]
                }
            ],
            "twaps": [
                843,
                {
                    "distinct_on": [
                        864,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        852
                    ]
                }
            ],
            "twaps_aggregate": [
                844,
                {
                    "distinct_on": [
                        864,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        852
                    ]
                }
            ],
            "twaps_by_pk": [
                843,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ],
                    "updated_slot": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "twaps_stream": [
                843,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        872,
                        "[twaps_stream_cursor_input]!"
                    ],
                    "where": [
                        852
                    ]
                }
            ],
            "users": [
                884,
                {
                    "distinct_on": [
                        895,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        894,
                        "[users_order_by!]"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "users_aggregate": [
                885,
                {
                    "distinct_on": [
                        895,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        894,
                        "[users_order_by!]"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "users_stream": [
                884,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        897,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        887
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}