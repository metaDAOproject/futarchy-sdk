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
        124,
        138,
        146,
        161,
        173,
        185,
        193,
        203,
        213,
        217,
        224,
        234,
        242,
        247,
        262,
        274,
        275,
        276,
        288,
        306,
        318,
        330,
        338,
        340,
        353,
        365,
        366,
        367,
        379,
        405,
        415,
        426,
        438,
        466,
        477,
        478,
        479,
        480,
        481,
        482,
        483,
        484,
        485,
        497,
        510,
        520,
        528,
        544,
        559,
        571,
        587,
        605,
        635,
        647,
        648,
        649,
        650,
        651,
        652,
        653,
        654,
        655,
        667,
        685,
        696,
        708,
        724,
        734,
        738,
        740,
        752,
        764,
        776,
        784,
        796,
        807,
        819,
        837,
        849,
        861,
        874,
        884,
        892,
        907,
        918,
        930,
        948,
        960,
        972,
        985,
        995,
        1003,
        1016,
        1036,
        1047,
        1059,
        1071,
        1080,
        1084,
        1086
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
                296
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                784
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
                340
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "open": [
                340
            ],
            "volume": [
                340
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
                305
            ],
            "market_acct": [
                6
            ],
            "open": [
                8
            ],
            "timestamp": [
                785
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
                314
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                784
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
                784
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "market_acct": [
                340
            ],
            "open": [
                340
            ],
            "timestamp": [
                340
            ],
            "volume": [
                340
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
                784
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "market_acct": [
                340
            ],
            "open": [
                340
            ],
            "timestamp": [
                340
            ],
            "volume": [
                340
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "market": [
                316
            ],
            "market_acct": [
                340
            ],
            "open": [
                340
            ],
            "timestamp": [
                340
            ],
            "volume": [
                340
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
                784
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
                784
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "open": [
                340
            ],
            "volume": [
                340
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "open": [
                340
            ],
            "volume": [
                340
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "open": [
                340
            ],
            "volume": [
                340
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
                784
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "open": [
                340
            ],
            "volume": [
                340
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "open": [
                340
            ],
            "volume": [
                340
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "open": [
                340
            ],
            "volume": [
                340
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
                340
            ],
            "candle_duration": [
                340
            ],
            "close": [
                340
            ],
            "cond_market_twap": [
                340
            ],
            "high": [
                340
            ],
            "low": [
                340
            ],
            "open": [
                340
            ],
            "volume": [
                340
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
                784
            ],
            "proposal": [
                615
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                675,
                {
                    "distinct_on": [
                        696,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        694,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        684
                    ]
                }
            ],
            "reactions_aggregate": [
                676,
                {
                    "distinct_on": [
                        696,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        694,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        684
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
                340
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
                340
            ],
            "responding_comment_id": [
                340
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
                785
            ],
            "proposal": [
                634
            ],
            "proposal_acct": [
                6
            ],
            "reactions": [
                684
            ],
            "reactions_aggregate": [
                677
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
                784
            ],
            "proposal": [
                643
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                681
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
                784
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
                340
            ],
            "commentor_acct": [
                340
            ],
            "content": [
                340
            ],
            "created_at": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "responding_comment_id": [
                340
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
                784
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
                340
            ],
            "commentor_acct": [
                340
            ],
            "content": [
                340
            ],
            "created_at": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "responding_comment_id": [
                340
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
                340
            ],
            "commentor_acct": [
                340
            ],
            "comments_aggregate": [
                55
            ],
            "content": [
                340
            ],
            "created_at": [
                340
            ],
            "proposal": [
                645
            ],
            "proposal_acct": [
                340
            ],
            "reactions_aggregate": [
                680
            ],
            "responding_comment_id": [
                340
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
                784
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
                340
            ],
            "responding_comment_id": [
                340
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
                340
            ],
            "responding_comment_id": [
                340
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
                340
            ],
            "responding_comment_id": [
                340
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
                784
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
                340
            ],
            "responding_comment_id": [
                340
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
                340
            ],
            "responding_comment_id": [
                340
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
                340
            ],
            "responding_comment_id": [
                340
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
                340
            ],
            "responding_comment_id": [
                340
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
            "nonce": [
                5
            ],
            "proposals": [
                615,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "proposalsByQuoteVault": [
                615,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "proposalsByQuoteVault_aggregate": [
                616,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "proposals_aggregate": [
                616,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
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
                869
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
                340
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
            "nonce": [
                6
            ],
            "proposals": [
                634
            ],
            "proposalsByQuoteVault": [
                634
            ],
            "proposalsByQuoteVault_aggregate": [
                617
            ],
            "proposals_aggregate": [
                617
            ],
            "settlement_authority": [
                6
            ],
            "status": [
                6
            ],
            "token": [
                873
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
            "nonce": [
                5
            ],
            "proposals": [
                631
            ],
            "proposalsByQuoteVault": [
                631
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "token": [
                880
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
                340
            ],
            "cond_revert_token_mint_acct": [
                340
            ],
            "cond_vault_acct": [
                340
            ],
            "nonce": [
                340
            ],
            "settlement_authority": [
                340
            ],
            "status": [
                340
            ],
            "underlying_mint_acct": [
                340
            ],
            "underlying_token_acct": [
                340
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
                340
            ],
            "cond_revert_token_mint_acct": [
                340
            ],
            "cond_vault_acct": [
                340
            ],
            "nonce": [
                340
            ],
            "settlement_authority": [
                340
            ],
            "status": [
                340
            ],
            "underlying_mint_acct": [
                340
            ],
            "underlying_token_acct": [
                340
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
                340
            ],
            "cond_revert_token_mint_acct": [
                340
            ],
            "cond_vault_acct": [
                340
            ],
            "nonce": [
                340
            ],
            "proposalsByQuoteVault_aggregate": [
                630
            ],
            "proposals_aggregate": [
                630
            ],
            "settlement_authority": [
                340
            ],
            "status": [
                340
            ],
            "token": [
                882
            ],
            "underlying_mint_acct": [
                340
            ],
            "underlying_token_acct": [
                340
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
            "admin_accts": [
                247,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "daos": [
                151,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "daos_aggregate": [
                152,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "token_image_url": [
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
                122
            ],
            "count": [
                3,
                {
                    "columns": [
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                130
            ],
            "min": [
                131
            ],
            "stddev": [
                140
            ],
            "stddev_pop": [
                141
            ],
            "stddev_samp": [
                142
            ],
            "sum": [
                145
            ],
            "var_pop": [
                148
            ],
            "var_samp": [
                149
            ],
            "variance": [
                150
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_append_input": {
            "admin_accts": [
                247
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
                123
            ],
            "_not": [
                123
            ],
            "_or": [
                123
            ],
            "admin_accts": [
                249
            ],
            "creator_acct": [
                6
            ],
            "dao_id": [
                8
            ],
            "daos": [
                160
            ],
            "daos_aggregate": [
                153
            ],
            "description": [
                6
            ],
            "fail_token_image_url": [
                6
            ],
            "github": [
                6
            ],
            "image_url": [
                6
            ],
            "lp_token_image_url": [
                6
            ],
            "name": [
                6
            ],
            "pass_token_image_url": [
                6
            ],
            "slug": [
                6
            ],
            "token_image_url": [
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
        "dao_details_delete_at_path_input": {
            "admin_accts": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_delete_elem_input": {
            "admin_accts": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_delete_key_input": {
            "admin_accts": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_inc_input": {
            "dao_id": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_insert_input": {
            "admin_accts": [
                247
            ],
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "daos": [
                157
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "token_image_url": [
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
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "token_image_url": [
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
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "token_image_url": [
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
                129
            ],
            "on_conflict": [
                134
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_on_conflict": {
            "constraint": [
                124
            ],
            "update_columns": [
                146
            ],
            "where": [
                123
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_order_by": {
            "admin_accts": [
                340
            ],
            "creator_acct": [
                340
            ],
            "dao_id": [
                340
            ],
            "daos_aggregate": [
                156
            ],
            "description": [
                340
            ],
            "fail_token_image_url": [
                340
            ],
            "github": [
                340
            ],
            "image_url": [
                340
            ],
            "lp_token_image_url": [
                340
            ],
            "name": [
                340
            ],
            "pass_token_image_url": [
                340
            ],
            "slug": [
                340
            ],
            "token_image_url": [
                340
            ],
            "url": [
                340
            ],
            "x_account": [
                340
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
        "dao_details_prepend_input": {
            "admin_accts": [
                247
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_select_column": {},
        "dao_details_set_input": {
            "admin_accts": [
                247
            ],
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "token_image_url": [
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
                144
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_stream_cursor_value_input": {
            "admin_accts": [
                247
            ],
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "description": [
                5
            ],
            "fail_token_image_url": [
                5
            ],
            "github": [
                5
            ],
            "image_url": [
                5
            ],
            "lp_token_image_url": [
                5
            ],
            "name": [
                5
            ],
            "pass_token_image_url": [
                5
            ],
            "slug": [
                5
            ],
            "token_image_url": [
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
            "_append": [
                121
            ],
            "_delete_at_path": [
                125
            ],
            "_delete_elem": [
                126
            ],
            "_delete_key": [
                127
            ],
            "_inc": [
                128
            ],
            "_prepend": [
                137
            ],
            "_set": [
                139
            ],
            "where": [
                123
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
            "created_at": [
                784
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
            "pass_threshold_bps": [
                7
            ],
            "program": [
                505
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                615,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "proposals_aggregate": [
                616,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "token": [
                869
            ],
            "tokenByBaseAcct": [
                869
            ],
            "tokenByQuoteAcct": [
                869
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate": {
            "aggregate": [
                155
            ],
            "nodes": [
                151
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp": {
            "count": [
                154
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp_count": {
            "arguments": [
                173
            ],
            "distinct": [
                0
            ],
            "filter": [
                160
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
                158
            ],
            "count": [
                3,
                {
                    "columns": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                164
            ],
            "min": [
                166
            ],
            "stddev": [
                175
            ],
            "stddev_pop": [
                177
            ],
            "stddev_samp": [
                179
            ],
            "sum": [
                183
            ],
            "var_pop": [
                187
            ],
            "var_samp": [
                189
            ],
            "variance": [
                191
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_order_by": {
            "avg": [
                159
            ],
            "count": [
                340
            ],
            "max": [
                165
            ],
            "min": [
                167
            ],
            "stddev": [
                176
            ],
            "stddev_pop": [
                178
            ],
            "stddev_samp": [
                180
            ],
            "sum": [
                184
            ],
            "var_pop": [
                188
            ],
            "var_samp": [
                190
            ],
            "variance": [
                192
            ],
            "__typename": [
                5
            ]
        },
        "daos_arr_rel_insert_input": {
            "data": [
                163
            ],
            "on_conflict": [
                170
            ],
            "__typename": [
                5
            ]
        },
        "daos_avg_fields": {
            "dao_id": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_avg_order_by": {
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "daos_bool_exp": {
            "_and": [
                160
            ],
            "_not": [
                160
            ],
            "_or": [
                160
            ],
            "base_acct": [
                6
            ],
            "created_at": [
                785
            ],
            "dao_acct": [
                6
            ],
            "dao_detail": [
                123
            ],
            "dao_id": [
                8
            ],
            "pass_threshold_bps": [
                8
            ],
            "program": [
                509
            ],
            "program_acct": [
                6
            ],
            "proposals": [
                634
            ],
            "proposals_aggregate": [
                617
            ],
            "quote_acct": [
                6
            ],
            "slots_per_proposal": [
                8
            ],
            "token": [
                873
            ],
            "tokenByBaseAcct": [
                873
            ],
            "tokenByQuoteAcct": [
                873
            ],
            "treasury_acct": [
                6
            ],
            "updated_at": [
                785
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
            "pass_threshold_bps": [
                7
            ],
            "slots_per_proposal": [
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
            "created_at": [
                784
            ],
            "dao_acct": [
                5
            ],
            "dao_detail": [
                133
            ],
            "dao_id": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program": [
                516
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                631
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "token": [
                880
            ],
            "tokenByBaseAcct": [
                880
            ],
            "tokenByQuoteAcct": [
                880
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                784
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
                784
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "daos_max_order_by": {
            "base_acct": [
                340
            ],
            "created_at": [
                340
            ],
            "dao_acct": [
                340
            ],
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "program_acct": [
                340
            ],
            "quote_acct": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "treasury_acct": [
                340
            ],
            "updated_at": [
                340
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
                784
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "daos_min_order_by": {
            "base_acct": [
                340
            ],
            "created_at": [
                340
            ],
            "dao_acct": [
                340
            ],
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "program_acct": [
                340
            ],
            "quote_acct": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "treasury_acct": [
                340
            ],
            "updated_at": [
                340
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
                151
            ],
            "__typename": [
                5
            ]
        },
        "daos_obj_rel_insert_input": {
            "data": [
                163
            ],
            "on_conflict": [
                170
            ],
            "__typename": [
                5
            ]
        },
        "daos_on_conflict": {
            "constraint": [
                161
            ],
            "update_columns": [
                185
            ],
            "where": [
                160
            ],
            "__typename": [
                5
            ]
        },
        "daos_order_by": {
            "base_acct": [
                340
            ],
            "created_at": [
                340
            ],
            "dao_acct": [
                340
            ],
            "dao_detail": [
                135
            ],
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "program": [
                518
            ],
            "program_acct": [
                340
            ],
            "proposals_aggregate": [
                630
            ],
            "quote_acct": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "token": [
                882
            ],
            "tokenByBaseAcct": [
                882
            ],
            "tokenByQuoteAcct": [
                882
            ],
            "treasury_acct": [
                340
            ],
            "updated_at": [
                340
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
                784
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_fields": {
            "dao_id": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_order_by": {
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_pop_fields": {
            "dao_id": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_pop_order_by": {
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_samp_fields": {
            "dao_id": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_samp_order_by": {
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "daos_stream_cursor_input": {
            "initial_value": [
                182
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
                784
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program_acct": [
                5
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "daos_sum_fields": {
            "dao_id": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "slots_per_proposal": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "daos_sum_order_by": {
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "daos_update_column": {},
        "daos_updates": {
            "_inc": [
                162
            ],
            "_set": [
                174
            ],
            "where": [
                160
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_pop_fields": {
            "dao_id": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_pop_order_by": {
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_samp_fields": {
            "dao_id": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_samp_order_by": {
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "daos_variance_fields": {
            "dao_id": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_variance_order_by": {
            "dao_id": [
                340
            ],
            "pass_threshold_bps": [
                340
            ],
            "slots_per_proposal": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "float8": {},
        "float8_comparison_exp": {
            "_eq": [
                193
            ],
            "_gt": [
                193
            ],
            "_gte": [
                193
            ],
            "_in": [
                193
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                193
            ],
            "_lte": [
                193
            ],
            "_neq": [
                193
            ],
            "_nin": [
                193
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
                219
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "status": [
                5
            ],
            "transaction": [
                980
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate": {
            "aggregate": [
                199
            ],
            "nodes": [
                195
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp": {
            "count": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp_count": {
            "arguments": [
                213
            ],
            "distinct": [
                0
            ],
            "filter": [
                202
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
                        213,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                205
            ],
            "min": [
                207
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_order_by": {
            "count": [
                340
            ],
            "max": [
                206
            ],
            "min": [
                208
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_arr_rel_insert_input": {
            "data": [
                204
            ],
            "on_conflict": [
                210
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_bool_exp": {
            "_and": [
                202
            ],
            "_not": [
                202
            ],
            "_or": [
                202
            ],
            "acct": [
                6
            ],
            "indexer": [
                223
            ],
            "latest_tx_sig_processed": [
                6
            ],
            "name": [
                6
            ],
            "status": [
                6
            ],
            "transaction": [
                984
            ],
            "updated_at": [
                785
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
                230
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "status": [
                5
            ],
            "transaction": [
                991
            ],
            "updated_at": [
                784
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
            "status": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_max_order_by": {
            "acct": [
                340
            ],
            "latest_tx_sig_processed": [
                340
            ],
            "name": [
                340
            ],
            "status": [
                340
            ],
            "updated_at": [
                340
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
            "status": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_min_order_by": {
            "acct": [
                340
            ],
            "latest_tx_sig_processed": [
                340
            ],
            "name": [
                340
            ],
            "status": [
                340
            ],
            "updated_at": [
                340
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
                195
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_on_conflict": {
            "constraint": [
                203
            ],
            "update_columns": [
                217
            ],
            "where": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_order_by": {
            "acct": [
                340
            ],
            "indexer": [
                232
            ],
            "latest_tx_sig_processed": [
                340
            ],
            "name": [
                340
            ],
            "status": [
                340
            ],
            "transaction": [
                993
            ],
            "updated_at": [
                340
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
            "status": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_stream_cursor_input": {
            "initial_value": [
                216
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
            "status": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_update_column": {},
        "indexer_account_dependencies_updates": {
            "_set": [
                214
            ],
            "where": [
                202
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
                195,
                {
                    "distinct_on": [
                        213,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        211,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                196,
                {
                    "distinct_on": [
                        213,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        211,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "indexer_type": [
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
        "indexers_aggregate": {
            "aggregate": [
                221
            ],
            "nodes": [
                219
            ],
            "__typename": [
                5
            ]
        },
        "indexers_aggregate_fields": {
            "avg": [
                222
            ],
            "count": [
                3,
                {
                    "columns": [
                        234,
                        "[indexers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                227
            ],
            "min": [
                228
            ],
            "stddev": [
                236
            ],
            "stddev_pop": [
                237
            ],
            "stddev_samp": [
                238
            ],
            "sum": [
                241
            ],
            "var_pop": [
                244
            ],
            "var_samp": [
                245
            ],
            "variance": [
                246
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
                223
            ],
            "_not": [
                223
            ],
            "_or": [
                223
            ],
            "implementation": [
                6
            ],
            "indexer_account_dependencies": [
                202
            ],
            "indexer_account_dependencies_aggregate": [
                197
            ],
            "indexer_type": [
                6
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
                201
            ],
            "indexer_type": [
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
        "indexers_max_fields": {
            "implementation": [
                5
            ],
            "indexer_type": [
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
            "indexer_type": [
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
                219
            ],
            "__typename": [
                5
            ]
        },
        "indexers_obj_rel_insert_input": {
            "data": [
                226
            ],
            "on_conflict": [
                231
            ],
            "__typename": [
                5
            ]
        },
        "indexers_on_conflict": {
            "constraint": [
                224
            ],
            "update_columns": [
                242
            ],
            "where": [
                223
            ],
            "__typename": [
                5
            ]
        },
        "indexers_order_by": {
            "implementation": [
                340
            ],
            "indexer_account_dependencies_aggregate": [
                200
            ],
            "indexer_type": [
                340
            ],
            "latest_slot_processed": [
                340
            ],
            "name": [
                340
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
            "indexer_type": [
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
                240
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
            "indexer_type": [
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
                225
            ],
            "_set": [
                235
            ],
            "where": [
                223
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
                248
            ],
            "_contained_in": [
                247
            ],
            "_contains": [
                247
            ],
            "_eq": [
                247
            ],
            "_gt": [
                247
            ],
            "_gte": [
                247
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
                247
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                247
            ],
            "_lte": [
                247
            ],
            "_neq": [
                247
            ],
            "_nin": [
                247
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
                296
            ],
            "market_acct": [
                5
            ],
            "order": [
                341
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "takes": [
                742,
                {
                    "distinct_on": [
                        764,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        762,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        751
                    ]
                }
            ],
            "takes_aggregate": [
                743,
                {
                    "distinct_on": [
                        764,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        762,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        751
                    ]
                }
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate": {
            "aggregate": [
                256
            ],
            "nodes": [
                250
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp": {
            "bool_and": [
                253
            ],
            "bool_or": [
                254
            ],
            "count": [
                255
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_bool_and": {
            "arguments": [
                275
            ],
            "distinct": [
                0
            ],
            "filter": [
                261
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
                276
            ],
            "distinct": [
                0
            ],
            "filter": [
                261
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
                274
            ],
            "distinct": [
                0
            ],
            "filter": [
                261
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
                259
            ],
            "count": [
                3,
                {
                    "columns": [
                        274,
                        "[makes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                265
            ],
            "min": [
                267
            ],
            "stddev": [
                278
            ],
            "stddev_pop": [
                280
            ],
            "stddev_samp": [
                282
            ],
            "sum": [
                286
            ],
            "var_pop": [
                290
            ],
            "var_samp": [
                292
            ],
            "variance": [
                294
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_order_by": {
            "avg": [
                260
            ],
            "count": [
                340
            ],
            "max": [
                266
            ],
            "min": [
                268
            ],
            "stddev": [
                279
            ],
            "stddev_pop": [
                281
            ],
            "stddev_samp": [
                283
            ],
            "sum": [
                287
            ],
            "var_pop": [
                291
            ],
            "var_samp": [
                293
            ],
            "variance": [
                295
            ],
            "__typename": [
                5
            ]
        },
        "makes_arr_rel_insert_input": {
            "data": [
                264
            ],
            "on_conflict": [
                271
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
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "makes_bool_exp": {
            "_and": [
                261
            ],
            "_not": [
                261
            ],
            "_or": [
                261
            ],
            "filled_base_amount": [
                8
            ],
            "is_active": [
                1
            ],
            "market": [
                305
            ],
            "market_acct": [
                6
            ],
            "order": [
                352
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                339
            ],
            "takes": [
                751
            ],
            "takes_aggregate": [
                744
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                785
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
                338
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
                314
            ],
            "market_acct": [
                5
            ],
            "order": [
                361
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "takes": [
                748
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
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
                338
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "makes_max_order_by": {
            "filled_base_amount": [
                340
            ],
            "market_acct": [
                340
            ],
            "order_tx_sig": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "updated_at": [
                340
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
                338
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "makes_min_order_by": {
            "filled_base_amount": [
                340
            ],
            "market_acct": [
                340
            ],
            "order_tx_sig": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "updated_at": [
                340
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
                250
            ],
            "__typename": [
                5
            ]
        },
        "makes_obj_rel_insert_input": {
            "data": [
                264
            ],
            "on_conflict": [
                271
            ],
            "__typename": [
                5
            ]
        },
        "makes_on_conflict": {
            "constraint": [
                262
            ],
            "update_columns": [
                288
            ],
            "where": [
                261
            ],
            "__typename": [
                5
            ]
        },
        "makes_order_by": {
            "filled_base_amount": [
                340
            ],
            "is_active": [
                340
            ],
            "market": [
                316
            ],
            "market_acct": [
                340
            ],
            "order": [
                363
            ],
            "order_tx_sig": [
                340
            ],
            "quote_price": [
                340
            ],
            "takes_aggregate": [
                747
            ],
            "unfilled_base_amount": [
                340
            ],
            "updated_at": [
                340
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
                338
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
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
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
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
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
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
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "makes_stream_cursor_input": {
            "initial_value": [
                285
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
                338
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
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
                338
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
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "makes_update_column": {},
        "makes_updates": {
            "_inc": [
                263
            ],
            "_set": [
                277
            ],
            "where": [
                261
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
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
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
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
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
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
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
                740
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                740
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
            "created_at": [
                784
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                250,
                {
                    "distinct_on": [
                        274,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        272,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        261
                    ]
                }
            ],
            "makes_aggregate": [
                251,
                {
                    "distinct_on": [
                        274,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        272,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        261
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
                341,
                {
                    "distinct_on": [
                        365,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        363,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        352
                    ]
                }
            ],
            "orders_aggregate": [
                342,
                {
                    "distinct_on": [
                        365,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        363,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        352
                    ]
                }
            ],
            "prices": [
                387,
                {
                    "distinct_on": [
                        426,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        424,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "prices_aggregate": [
                388,
                {
                    "distinct_on": [
                        426,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        424,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "proposal": [
                615
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                740
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                740
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                742,
                {
                    "distinct_on": [
                        764,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        762,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        751
                    ]
                }
            ],
            "takes_aggregate": [
                743,
                {
                    "distinct_on": [
                        764,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        762,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        751
                    ]
                }
            ],
            "token": [
                869
            ],
            "tokenAcctByAsksTokenAcct": [
                827
            ],
            "tokenAcctByBidsTokenAcct": [
                827
            ],
            "tokenByBaseMintAcct": [
                869
            ],
            "tokenByQuoteMintAcct": [
                869
            ],
            "token_acct": [
                827
            ],
            "twaps": [
                1026,
                {
                    "distinct_on": [
                        1047,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1045,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twaps_aggregate": [
                1027,
                {
                    "distinct_on": [
                        1047,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1045,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate": {
            "aggregate": [
                300
            ],
            "nodes": [
                296
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp": {
            "count": [
                299
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp_count": {
            "arguments": [
                318
            ],
            "distinct": [
                0
            ],
            "filter": [
                305
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
                303
            ],
            "count": [
                3,
                {
                    "columns": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                309
            ],
            "min": [
                311
            ],
            "stddev": [
                320
            ],
            "stddev_pop": [
                322
            ],
            "stddev_samp": [
                324
            ],
            "sum": [
                328
            ],
            "var_pop": [
                332
            ],
            "var_samp": [
                334
            ],
            "variance": [
                336
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_order_by": {
            "avg": [
                304
            ],
            "count": [
                340
            ],
            "max": [
                310
            ],
            "min": [
                312
            ],
            "stddev": [
                321
            ],
            "stddev_pop": [
                323
            ],
            "stddev_samp": [
                325
            ],
            "sum": [
                329
            ],
            "var_pop": [
                333
            ],
            "var_samp": [
                335
            ],
            "variance": [
                337
            ],
            "__typename": [
                5
            ]
        },
        "markets_arr_rel_insert_input": {
            "data": [
                308
            ],
            "on_conflict": [
                315
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
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "markets_bool_exp": {
            "_and": [
                305
            ],
            "_not": [
                305
            ],
            "_or": [
                305
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
                741
            ],
            "base_mint_acct": [
                6
            ],
            "base_taker_fee": [
                741
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
            "created_at": [
                785
            ],
            "inactive_slot": [
                8
            ],
            "makes": [
                261
            ],
            "makes_aggregate": [
                252
            ],
            "market_acct": [
                6
            ],
            "market_type": [
                6
            ],
            "orders": [
                352
            ],
            "orders_aggregate": [
                343
            ],
            "prices": [
                396
            ],
            "prices_aggregate": [
                389
            ],
            "proposal": [
                634
            ],
            "proposal_acct": [
                6
            ],
            "quote_lot_size": [
                8
            ],
            "quote_maker_fee": [
                741
            ],
            "quote_mint_acct": [
                6
            ],
            "quote_taker_fee": [
                741
            ],
            "quote_tick_size": [
                8
            ],
            "takes": [
                751
            ],
            "takes_aggregate": [
                744
            ],
            "token": [
                873
            ],
            "tokenAcctByAsksTokenAcct": [
                836
            ],
            "tokenAcctByBidsTokenAcct": [
                836
            ],
            "tokenByBaseMintAcct": [
                873
            ],
            "tokenByQuoteMintAcct": [
                873
            ],
            "token_acct": [
                836
            ],
            "twaps": [
                1035
            ],
            "twaps_aggregate": [
                1028
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
                740
            ],
            "base_taker_fee": [
                740
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                740
            ],
            "quote_taker_fee": [
                740
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
                740
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                740
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
            "created_at": [
                784
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                258
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "orders": [
                349
            ],
            "prices": [
                393
            ],
            "proposal": [
                643
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                740
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                740
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                748
            ],
            "token": [
                880
            ],
            "tokenAcctByAsksTokenAcct": [
                845
            ],
            "tokenAcctByBidsTokenAcct": [
                845
            ],
            "tokenByBaseMintAcct": [
                880
            ],
            "tokenByQuoteMintAcct": [
                880
            ],
            "token_acct": [
                845
            ],
            "twaps": [
                1032
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
                740
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                740
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                784
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
                740
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                740
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
                340
            ],
            "asks_token_acct": [
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_mint_acct": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "bids_token_acct": [
                340
            ],
            "create_tx_sig": [
                340
            ],
            "created_at": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "market_acct": [
                340
            ],
            "market_type": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_mint_acct": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
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
                740
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                740
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                784
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
                740
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                740
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
                340
            ],
            "asks_token_acct": [
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_mint_acct": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "bids_token_acct": [
                340
            ],
            "create_tx_sig": [
                340
            ],
            "created_at": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "market_acct": [
                340
            ],
            "market_type": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_mint_acct": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
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
                296
            ],
            "__typename": [
                5
            ]
        },
        "markets_obj_rel_insert_input": {
            "data": [
                308
            ],
            "on_conflict": [
                315
            ],
            "__typename": [
                5
            ]
        },
        "markets_on_conflict": {
            "constraint": [
                306
            ],
            "update_columns": [
                330
            ],
            "where": [
                305
            ],
            "__typename": [
                5
            ]
        },
        "markets_order_by": {
            "active_slot": [
                340
            ],
            "asks_token_acct": [
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_mint_acct": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "bids_token_acct": [
                340
            ],
            "candles_aggregate": [
                14
            ],
            "create_tx_sig": [
                340
            ],
            "created_at": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "makes_aggregate": [
                257
            ],
            "market_acct": [
                340
            ],
            "market_type": [
                340
            ],
            "orders_aggregate": [
                348
            ],
            "prices_aggregate": [
                392
            ],
            "proposal": [
                645
            ],
            "proposal_acct": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_mint_acct": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
            ],
            "takes_aggregate": [
                747
            ],
            "token": [
                882
            ],
            "tokenAcctByAsksTokenAcct": [
                847
            ],
            "tokenAcctByBidsTokenAcct": [
                847
            ],
            "tokenByBaseMintAcct": [
                882
            ],
            "tokenByQuoteMintAcct": [
                882
            ],
            "token_acct": [
                847
            ],
            "twaps_aggregate": [
                1031
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
                740
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                740
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                784
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
                740
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                740
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
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
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
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
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
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "markets_stream_cursor_input": {
            "initial_value": [
                327
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
                740
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                740
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                784
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
                740
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                740
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
                740
            ],
            "base_taker_fee": [
                740
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                740
            ],
            "quote_taker_fee": [
                740
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
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "markets_update_column": {},
        "markets_updates": {
            "_inc": [
                307
            ],
            "_set": [
                319
            ],
            "where": [
                305
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
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
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
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
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
                340
            ],
            "base_lot_size": [
                340
            ],
            "base_maker_fee": [
                340
            ],
            "base_taker_fee": [
                340
            ],
            "inactive_slot": [
                340
            ],
            "quote_lot_size": [
                340
            ],
            "quote_maker_fee": [
                340
            ],
            "quote_taker_fee": [
                340
            ],
            "quote_tick_size": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                338
            ],
            "_gt": [
                338
            ],
            "_gte": [
                338
            ],
            "_in": [
                338
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                338
            ],
            "_lte": [
                338
            ],
            "_neq": [
                338
            ],
            "_nin": [
                338
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
                784
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
                250
            ],
            "market": [
                296
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "side": [
                5
            ],
            "take": [
                742
            ],
            "transaction": [
                980
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate": {
            "aggregate": [
                347
            ],
            "nodes": [
                341
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp": {
            "bool_and": [
                344
            ],
            "bool_or": [
                345
            ],
            "count": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_bool_and": {
            "arguments": [
                366
            ],
            "distinct": [
                0
            ],
            "filter": [
                352
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
                367
            ],
            "distinct": [
                0
            ],
            "filter": [
                352
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
                365
            ],
            "distinct": [
                0
            ],
            "filter": [
                352
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
                350
            ],
            "count": [
                3,
                {
                    "columns": [
                        365,
                        "[orders_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                356
            ],
            "min": [
                358
            ],
            "stddev": [
                369
            ],
            "stddev_pop": [
                371
            ],
            "stddev_samp": [
                373
            ],
            "sum": [
                377
            ],
            "var_pop": [
                381
            ],
            "var_samp": [
                383
            ],
            "variance": [
                385
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_order_by": {
            "avg": [
                351
            ],
            "count": [
                340
            ],
            "max": [
                357
            ],
            "min": [
                359
            ],
            "stddev": [
                370
            ],
            "stddev_pop": [
                372
            ],
            "stddev_samp": [
                374
            ],
            "sum": [
                378
            ],
            "var_pop": [
                382
            ],
            "var_samp": [
                384
            ],
            "variance": [
                386
            ],
            "__typename": [
                5
            ]
        },
        "orders_arr_rel_insert_input": {
            "data": [
                355
            ],
            "on_conflict": [
                362
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
                340
            ],
            "filled_base_amount": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "orders_bool_exp": {
            "_and": [
                352
            ],
            "_not": [
                352
            ],
            "_or": [
                352
            ],
            "actor_acct": [
                6
            ],
            "cancel_block": [
                8
            ],
            "cancel_time": [
                785
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
                261
            ],
            "market": [
                305
            ],
            "market_acct": [
                6
            ],
            "order_block": [
                8
            ],
            "order_time": [
                785
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                339
            ],
            "side": [
                6
            ],
            "take": [
                751
            ],
            "transaction": [
                984
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                785
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
                338
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
                784
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
                270
            ],
            "market": [
                314
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "side": [
                5
            ],
            "take": [
                760
            ],
            "transaction": [
                991
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
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
                784
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
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "orders_max_order_by": {
            "actor_acct": [
                340
            ],
            "cancel_block": [
                340
            ],
            "cancel_time": [
                340
            ],
            "cancel_tx_sig": [
                340
            ],
            "filled_base_amount": [
                340
            ],
            "market_acct": [
                340
            ],
            "order_block": [
                340
            ],
            "order_time": [
                340
            ],
            "order_tx_sig": [
                340
            ],
            "quote_price": [
                340
            ],
            "side": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "updated_at": [
                340
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
                784
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
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "orders_min_order_by": {
            "actor_acct": [
                340
            ],
            "cancel_block": [
                340
            ],
            "cancel_time": [
                340
            ],
            "cancel_tx_sig": [
                340
            ],
            "filled_base_amount": [
                340
            ],
            "market_acct": [
                340
            ],
            "order_block": [
                340
            ],
            "order_time": [
                340
            ],
            "order_tx_sig": [
                340
            ],
            "quote_price": [
                340
            ],
            "side": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "updated_at": [
                340
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
                341
            ],
            "__typename": [
                5
            ]
        },
        "orders_obj_rel_insert_input": {
            "data": [
                355
            ],
            "on_conflict": [
                362
            ],
            "__typename": [
                5
            ]
        },
        "orders_on_conflict": {
            "constraint": [
                353
            ],
            "update_columns": [
                379
            ],
            "where": [
                352
            ],
            "__typename": [
                5
            ]
        },
        "orders_order_by": {
            "actor_acct": [
                340
            ],
            "cancel_block": [
                340
            ],
            "cancel_time": [
                340
            ],
            "cancel_tx_sig": [
                340
            ],
            "filled_base_amount": [
                340
            ],
            "is_active": [
                340
            ],
            "make": [
                272
            ],
            "market": [
                316
            ],
            "market_acct": [
                340
            ],
            "order_block": [
                340
            ],
            "order_time": [
                340
            ],
            "order_tx_sig": [
                340
            ],
            "quote_price": [
                340
            ],
            "side": [
                340
            ],
            "take": [
                762
            ],
            "transaction": [
                993
            ],
            "unfilled_base_amount": [
                340
            ],
            "updated_at": [
                340
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
                784
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
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
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
                340
            ],
            "filled_base_amount": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
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
                340
            ],
            "filled_base_amount": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
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
                340
            ],
            "filled_base_amount": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "orders_stream_cursor_input": {
            "initial_value": [
                376
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
                784
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
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                784
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
                338
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
                340
            ],
            "filled_base_amount": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "orders_update_column": {},
        "orders_updates": {
            "_inc": [
                354
            ],
            "_set": [
                368
            ],
            "where": [
                352
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
                340
            ],
            "filled_base_amount": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
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
                340
            ],
            "filled_base_amount": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
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
                340
            ],
            "filled_base_amount": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "unfilled_base_amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices": {
            "base_amount": [
                7
            ],
            "created_at": [
                784
            ],
            "created_by": [
                5
            ],
            "market": [
                296
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate": {
            "aggregate": [
                391
            ],
            "nodes": [
                387
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_bool_exp": {
            "count": [
                390
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_bool_exp_count": {
            "arguments": [
                426
            ],
            "distinct": [
                0
            ],
            "filter": [
                396
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_fields": {
            "avg": [
                394
            ],
            "count": [
                3,
                {
                    "columns": [
                        426,
                        "[prices_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                418
            ],
            "min": [
                420
            ],
            "stddev": [
                428
            ],
            "stddev_pop": [
                430
            ],
            "stddev_samp": [
                432
            ],
            "sum": [
                436
            ],
            "var_pop": [
                440
            ],
            "var_samp": [
                442
            ],
            "variance": [
                444
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_order_by": {
            "avg": [
                395
            ],
            "count": [
                340
            ],
            "max": [
                419
            ],
            "min": [
                421
            ],
            "stddev": [
                429
            ],
            "stddev_pop": [
                431
            ],
            "stddev_samp": [
                433
            ],
            "sum": [
                437
            ],
            "var_pop": [
                441
            ],
            "var_samp": [
                443
            ],
            "variance": [
                445
            ],
            "__typename": [
                5
            ]
        },
        "prices_arr_rel_insert_input": {
            "data": [
                417
            ],
            "on_conflict": [
                423
            ],
            "__typename": [
                5
            ]
        },
        "prices_avg_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_avg_order_by": {
            "base_amount": [
                340
            ],
            "price": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_bool_exp": {
            "_and": [
                396
            ],
            "_not": [
                396
            ],
            "_or": [
                396
            ],
            "base_amount": [
                8
            ],
            "created_at": [
                785
            ],
            "created_by": [
                6
            ],
            "market": [
                305
            ],
            "market_acct": [
                6
            ],
            "price": [
                339
            ],
            "prices_type": [
                6
            ],
            "quote_amount": [
                8
            ],
            "updated_slot": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data": {
            "base_amount": [
                7
            ],
            "interv": [
                784
            ],
            "market": [
                296
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_aggregate": {
            "aggregate": [
                399
            ],
            "nodes": [
                397
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_aggregate_fields": {
            "avg": [
                400
            ],
            "count": [
                3,
                {
                    "columns": [
                        405,
                        "[prices_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                402
            ],
            "min": [
                403
            ],
            "stddev": [
                406
            ],
            "stddev_pop": [
                407
            ],
            "stddev_samp": [
                408
            ],
            "sum": [
                411
            ],
            "var_pop": [
                412
            ],
            "var_samp": [
                413
            ],
            "variance": [
                414
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_avg_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_bool_exp": {
            "_and": [
                401
            ],
            "_not": [
                401
            ],
            "_or": [
                401
            ],
            "base_amount": [
                8
            ],
            "interv": [
                785
            ],
            "market": [
                305
            ],
            "market_acct": [
                6
            ],
            "price": [
                339
            ],
            "prices_type": [
                6
            ],
            "quote_amount": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_max_fields": {
            "base_amount": [
                7
            ],
            "interv": [
                784
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_min_fields": {
            "base_amount": [
                7
            ],
            "interv": [
                784
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_order_by": {
            "base_amount": [
                340
            ],
            "interv": [
                340
            ],
            "market": [
                316
            ],
            "market_acct": [
                340
            ],
            "price": [
                340
            ],
            "prices_type": [
                340
            ],
            "quote_amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_select_column": {},
        "prices_chart_data_stddev_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_stddev_pop_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_stddev_samp_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_stream_cursor_input": {
            "initial_value": [
                410
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_stream_cursor_value_input": {
            "base_amount": [
                7
            ],
            "interv": [
                784
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_sum_fields": {
            "base_amount": [
                7
            ],
            "price": [
                338
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_var_pop_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_var_samp_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_variance_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_constraint": {},
        "prices_inc_input": {
            "base_amount": [
                7
            ],
            "price": [
                338
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_insert_input": {
            "base_amount": [
                7
            ],
            "created_at": [
                784
            ],
            "created_by": [
                5
            ],
            "market": [
                314
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_max_fields": {
            "base_amount": [
                7
            ],
            "created_at": [
                784
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_max_order_by": {
            "base_amount": [
                340
            ],
            "created_at": [
                340
            ],
            "created_by": [
                340
            ],
            "market_acct": [
                340
            ],
            "price": [
                340
            ],
            "prices_type": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_min_fields": {
            "base_amount": [
                7
            ],
            "created_at": [
                784
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_min_order_by": {
            "base_amount": [
                340
            ],
            "created_at": [
                340
            ],
            "created_by": [
                340
            ],
            "market_acct": [
                340
            ],
            "price": [
                340
            ],
            "prices_type": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                387
            ],
            "__typename": [
                5
            ]
        },
        "prices_on_conflict": {
            "constraint": [
                415
            ],
            "update_columns": [
                438
            ],
            "where": [
                396
            ],
            "__typename": [
                5
            ]
        },
        "prices_order_by": {
            "base_amount": [
                340
            ],
            "created_at": [
                340
            ],
            "created_by": [
                340
            ],
            "market": [
                316
            ],
            "market_acct": [
                340
            ],
            "price": [
                340
            ],
            "prices_type": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_pk_columns_input": {
            "created_at": [
                784
            ],
            "market_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "prices_select_column": {},
        "prices_set_input": {
            "base_amount": [
                7
            ],
            "created_at": [
                784
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_order_by": {
            "base_amount": [
                340
            ],
            "price": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_pop_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_pop_order_by": {
            "base_amount": [
                340
            ],
            "price": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_samp_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_stddev_samp_order_by": {
            "base_amount": [
                340
            ],
            "price": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_stream_cursor_input": {
            "initial_value": [
                435
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "prices_stream_cursor_value_input": {
            "base_amount": [
                7
            ],
            "created_at": [
                784
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                338
            ],
            "prices_type": [
                5
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_sum_fields": {
            "base_amount": [
                7
            ],
            "price": [
                338
            ],
            "quote_amount": [
                7
            ],
            "updated_slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_sum_order_by": {
            "base_amount": [
                340
            ],
            "price": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_update_column": {},
        "prices_updates": {
            "_inc": [
                416
            ],
            "_set": [
                427
            ],
            "where": [
                396
            ],
            "__typename": [
                5
            ]
        },
        "prices_var_pop_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_var_pop_order_by": {
            "base_amount": [
                340
            ],
            "price": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_var_samp_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_var_samp_order_by": {
            "base_amount": [
                340
            ],
            "price": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "prices_variance_fields": {
            "base_amount": [
                2
            ],
            "price": [
                2
            ],
            "quote_amount": [
                2
            ],
            "updated_slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "prices_variance_order_by": {
            "base_amount": [
                340
            ],
            "price": [
                340
            ],
            "quote_amount": [
                340
            ],
            "updated_slot": [
                340
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
                505
            ],
            "programByConditionalVaultAcct": [
                505
            ],
            "programByMigratorAcct": [
                505
            ],
            "programByPricingModelAcct": [
                505
            ],
            "system_version": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate": {
            "aggregate": [
                460
            ],
            "nodes": [
                446
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp": {
            "avg": [
                449
            ],
            "corr": [
                450
            ],
            "count": [
                452
            ],
            "covar_samp": [
                453
            ],
            "max": [
                455
            ],
            "min": [
                456
            ],
            "stddev_samp": [
                457
            ],
            "sum": [
                458
            ],
            "var_samp": [
                459
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_avg": {
            "arguments": [
                478
            ],
            "distinct": [
                0
            ],
            "filter": [
                465
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr": {
            "arguments": [
                451
            ],
            "distinct": [
                0
            ],
            "filter": [
                465
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr_arguments": {
            "X": [
                479
            ],
            "Y": [
                479
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_count": {
            "arguments": [
                477
            ],
            "distinct": [
                0
            ],
            "filter": [
                465
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
                454
            ],
            "distinct": [
                0
            ],
            "filter": [
                465
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                480
            ],
            "Y": [
                480
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_max": {
            "arguments": [
                481
            ],
            "distinct": [
                0
            ],
            "filter": [
                465
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_min": {
            "arguments": [
                482
            ],
            "distinct": [
                0
            ],
            "filter": [
                465
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                483
            ],
            "distinct": [
                0
            ],
            "filter": [
                465
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_sum": {
            "arguments": [
                484
            ],
            "distinct": [
                0
            ],
            "filter": [
                465
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_var_samp": {
            "arguments": [
                485
            ],
            "distinct": [
                0
            ],
            "filter": [
                465
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_fields": {
            "avg": [
                463
            ],
            "count": [
                3,
                {
                    "columns": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                469
            ],
            "min": [
                471
            ],
            "stddev": [
                487
            ],
            "stddev_pop": [
                489
            ],
            "stddev_samp": [
                491
            ],
            "sum": [
                495
            ],
            "var_pop": [
                499
            ],
            "var_samp": [
                501
            ],
            "variance": [
                503
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_order_by": {
            "avg": [
                464
            ],
            "count": [
                340
            ],
            "max": [
                470
            ],
            "min": [
                472
            ],
            "stddev": [
                488
            ],
            "stddev_pop": [
                490
            ],
            "stddev_samp": [
                492
            ],
            "sum": [
                496
            ],
            "var_pop": [
                500
            ],
            "var_samp": [
                502
            ],
            "variance": [
                504
            ],
            "__typename": [
                5
            ]
        },
        "program_system_arr_rel_insert_input": {
            "data": [
                468
            ],
            "on_conflict": [
                474
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "program_system_bool_exp": {
            "_and": [
                465
            ],
            "_not": [
                465
            ],
            "_or": [
                465
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
                509
            ],
            "programByConditionalVaultAcct": [
                509
            ],
            "programByMigratorAcct": [
                509
            ],
            "programByPricingModelAcct": [
                509
            ],
            "system_version": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "program_system_constraint": {},
        "program_system_inc_input": {
            "system_version": [
                193
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
                516
            ],
            "programByConditionalVaultAcct": [
                516
            ],
            "programByMigratorAcct": [
                516
            ],
            "programByPricingModelAcct": [
                516
            ],
            "system_version": [
                193
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
                193
            ],
            "__typename": [
                5
            ]
        },
        "program_system_max_order_by": {
            "autocrat_acct": [
                340
            ],
            "conditional_vault_acct": [
                340
            ],
            "migrator_acct": [
                340
            ],
            "pricing_model_acct": [
                340
            ],
            "system_version": [
                340
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
                193
            ],
            "__typename": [
                5
            ]
        },
        "program_system_min_order_by": {
            "autocrat_acct": [
                340
            ],
            "conditional_vault_acct": [
                340
            ],
            "migrator_acct": [
                340
            ],
            "pricing_model_acct": [
                340
            ],
            "system_version": [
                340
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
                446
            ],
            "__typename": [
                5
            ]
        },
        "program_system_on_conflict": {
            "constraint": [
                466
            ],
            "update_columns": [
                497
            ],
            "where": [
                465
            ],
            "__typename": [
                5
            ]
        },
        "program_system_order_by": {
            "autocrat_acct": [
                340
            ],
            "conditional_vault_acct": [
                340
            ],
            "migrator_acct": [
                340
            ],
            "pricing_model_acct": [
                340
            ],
            "program": [
                518
            ],
            "programByConditionalVaultAcct": [
                518
            ],
            "programByMigratorAcct": [
                518
            ],
            "programByPricingModelAcct": [
                518
            ],
            "system_version": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "program_system_pk_columns_input": {
            "system_version": [
                193
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
                193
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
                340
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
                340
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stream_cursor_input": {
            "initial_value": [
                494
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
                193
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_fields": {
            "system_version": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_order_by": {
            "system_version": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "program_system_update_column": {},
        "program_system_updates": {
            "_inc": [
                467
            ],
            "_set": [
                486
            ],
            "where": [
                465
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
                340
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
                340
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "programs": {
            "created_at": [
                784
            ],
            "daos": [
                151,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "daos_aggregate": [
                152,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "deployed_at": [
                784
            ],
            "programSystemsByConditionalVaultAcct": [
                446,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                447,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "programSystemsByMigratorAcct": [
                446,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "programSystemsByMigratorAcct_aggregate": [
                447,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "programSystemsByPricingModelAcct": [
                446,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                447,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
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
                446,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "program_systems_aggregate": [
                447,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "version": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate": {
            "aggregate": [
                507
            ],
            "nodes": [
                505
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate_fields": {
            "avg": [
                508
            ],
            "count": [
                3,
                {
                    "columns": [
                        520,
                        "[programs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                513
            ],
            "min": [
                514
            ],
            "stddev": [
                522
            ],
            "stddev_pop": [
                523
            ],
            "stddev_samp": [
                524
            ],
            "sum": [
                527
            ],
            "var_pop": [
                530
            ],
            "var_samp": [
                531
            ],
            "variance": [
                532
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
                509
            ],
            "_not": [
                509
            ],
            "_or": [
                509
            ],
            "created_at": [
                785
            ],
            "daos": [
                160
            ],
            "daos_aggregate": [
                153
            ],
            "deployed_at": [
                785
            ],
            "programSystemsByConditionalVaultAcct": [
                465
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                448
            ],
            "programSystemsByMigratorAcct": [
                465
            ],
            "programSystemsByMigratorAcct_aggregate": [
                448
            ],
            "programSystemsByPricingModelAcct": [
                465
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                448
            ],
            "program_acct": [
                6
            ],
            "program_name": [
                6
            ],
            "program_systems": [
                465
            ],
            "program_systems_aggregate": [
                448
            ],
            "version": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "programs_constraint": {},
        "programs_inc_input": {
            "version": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "programs_insert_input": {
            "created_at": [
                784
            ],
            "daos": [
                157
            ],
            "deployed_at": [
                784
            ],
            "programSystemsByConditionalVaultAcct": [
                462
            ],
            "programSystemsByMigratorAcct": [
                462
            ],
            "programSystemsByPricingModelAcct": [
                462
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                462
            ],
            "version": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "programs_max_fields": {
            "created_at": [
                784
            ],
            "deployed_at": [
                784
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "programs_min_fields": {
            "created_at": [
                784
            ],
            "deployed_at": [
                784
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                193
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
                505
            ],
            "__typename": [
                5
            ]
        },
        "programs_obj_rel_insert_input": {
            "data": [
                512
            ],
            "on_conflict": [
                517
            ],
            "__typename": [
                5
            ]
        },
        "programs_on_conflict": {
            "constraint": [
                510
            ],
            "update_columns": [
                528
            ],
            "where": [
                509
            ],
            "__typename": [
                5
            ]
        },
        "programs_order_by": {
            "created_at": [
                340
            ],
            "daos_aggregate": [
                156
            ],
            "deployed_at": [
                340
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                461
            ],
            "programSystemsByMigratorAcct_aggregate": [
                461
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                461
            ],
            "program_acct": [
                340
            ],
            "program_name": [
                340
            ],
            "program_systems_aggregate": [
                461
            ],
            "version": [
                340
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
                784
            ],
            "deployed_at": [
                784
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                193
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
                526
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
                784
            ],
            "deployed_at": [
                784
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "programs_sum_fields": {
            "version": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "programs_update_column": {},
        "programs_updates": {
            "_inc": [
                511
            ],
            "_set": [
                521
            ],
            "where": [
                509
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
            "base_cond_vault_acct": [
                5
            ],
            "categories": [
                247,
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
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal": [
                615
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
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
                537
            ],
            "nodes": [
                533
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp": {
            "count": [
                536
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp_count": {
            "arguments": [
                559
            ],
            "distinct": [
                0
            ],
            "filter": [
                543
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
                541
            ],
            "count": [
                3,
                {
                    "columns": [
                        559,
                        "[proposal_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                550
            ],
            "min": [
                552
            ],
            "stddev": [
                561
            ],
            "stddev_pop": [
                563
            ],
            "stddev_samp": [
                565
            ],
            "sum": [
                569
            ],
            "var_pop": [
                573
            ],
            "var_samp": [
                575
            ],
            "variance": [
                577
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_order_by": {
            "avg": [
                542
            ],
            "count": [
                340
            ],
            "max": [
                551
            ],
            "min": [
                553
            ],
            "stddev": [
                562
            ],
            "stddev_pop": [
                564
            ],
            "stddev_samp": [
                566
            ],
            "sum": [
                570
            ],
            "var_pop": [
                574
            ],
            "var_samp": [
                576
            ],
            "variance": [
                578
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_append_input": {
            "categories": [
                247
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_arr_rel_insert_input": {
            "data": [
                549
            ],
            "on_conflict": [
                555
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_bool_exp": {
            "_and": [
                543
            ],
            "_not": [
                543
            ],
            "_or": [
                543
            ],
            "base_cond_vault_acct": [
                6
            ],
            "categories": [
                249
            ],
            "content": [
                6
            ],
            "description": [
                6
            ],
            "fail_market_acct": [
                6
            ],
            "pass_market_acct": [
                6
            ],
            "proposal": [
                634
            ],
            "proposal_acct": [
                6
            ],
            "proposal_id": [
                8
            ],
            "proposer_acct": [
                6
            ],
            "quote_cond_vault_acct": [
                6
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
            "base_cond_vault_acct": [
                5
            ],
            "categories": [
                247
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal": [
                643
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
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
            "base_cond_vault_acct": [
                5
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
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
            "base_cond_vault_acct": [
                340
            ],
            "content": [
                340
            ],
            "description": [
                340
            ],
            "fail_market_acct": [
                340
            ],
            "pass_market_acct": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "proposal_id": [
                340
            ],
            "proposer_acct": [
                340
            ],
            "quote_cond_vault_acct": [
                340
            ],
            "slug": [
                340
            ],
            "title": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_min_fields": {
            "base_cond_vault_acct": [
                5
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
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
            "base_cond_vault_acct": [
                340
            ],
            "content": [
                340
            ],
            "description": [
                340
            ],
            "fail_market_acct": [
                340
            ],
            "pass_market_acct": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "proposal_id": [
                340
            ],
            "proposer_acct": [
                340
            ],
            "quote_cond_vault_acct": [
                340
            ],
            "slug": [
                340
            ],
            "title": [
                340
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
                533
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_on_conflict": {
            "constraint": [
                544
            ],
            "update_columns": [
                571
            ],
            "where": [
                543
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_order_by": {
            "base_cond_vault_acct": [
                340
            ],
            "categories": [
                340
            ],
            "content": [
                340
            ],
            "description": [
                340
            ],
            "fail_market_acct": [
                340
            ],
            "pass_market_acct": [
                340
            ],
            "proposal": [
                645
            ],
            "proposal_acct": [
                340
            ],
            "proposal_id": [
                340
            ],
            "proposer_acct": [
                340
            ],
            "quote_cond_vault_acct": [
                340
            ],
            "slug": [
                340
            ],
            "title": [
                340
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
                247
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_select_column": {},
        "proposal_details_set_input": {
            "base_cond_vault_acct": [
                5
            ],
            "categories": [
                247
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
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
                340
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
                340
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_input": {
            "initial_value": [
                568
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_value_input": {
            "base_cond_vault_acct": [
                5
            ],
            "categories": [
                247
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "fail_market_acct": [
                5
            ],
            "pass_market_acct": [
                5
            ],
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
            ],
            "proposer_acct": [
                5
            ],
            "quote_cond_vault_acct": [
                5
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_update_column": {},
        "proposal_details_updates": {
            "_append": [
                539
            ],
            "_delete_at_path": [
                545
            ],
            "_delete_elem": [
                546
            ],
            "_delete_key": [
                547
            ],
            "_inc": [
                548
            ],
            "_prepend": [
                558
            ],
            "_set": [
                560
            ],
            "where": [
                543
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
                340
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
                340
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data": {
            "fail_market_acct": [
                5
            ],
            "fail_market_base_amount": [
                7
            ],
            "fail_market_price": [
                338
            ],
            "fail_market_prices_type": [
                5
            ],
            "fail_market_quote_amount": [
                7
            ],
            "interv": [
                784
            ],
            "pass_market_acct": [
                5
            ],
            "pass_market_base_amount": [
                7
            ],
            "pass_market_price": [
                338
            ],
            "pass_market_prices_type": [
                5
            ],
            "pass_market_quote_amount": [
                7
            ],
            "proposalPriceFailMarket": [
                296
            ],
            "proposalPricePassMarket": [
                296
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_aggregate": {
            "aggregate": [
                581
            ],
            "nodes": [
                579
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_aggregate_fields": {
            "avg": [
                582
            ],
            "count": [
                3,
                {
                    "columns": [
                        587,
                        "[proposal_prices_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                584
            ],
            "min": [
                585
            ],
            "stddev": [
                588
            ],
            "stddev_pop": [
                589
            ],
            "stddev_samp": [
                590
            ],
            "sum": [
                593
            ],
            "var_pop": [
                594
            ],
            "var_samp": [
                595
            ],
            "variance": [
                596
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_avg_fields": {
            "fail_market_base_amount": [
                2
            ],
            "fail_market_price": [
                2
            ],
            "fail_market_quote_amount": [
                2
            ],
            "pass_market_base_amount": [
                2
            ],
            "pass_market_price": [
                2
            ],
            "pass_market_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_bool_exp": {
            "_and": [
                583
            ],
            "_not": [
                583
            ],
            "_or": [
                583
            ],
            "fail_market_acct": [
                6
            ],
            "fail_market_base_amount": [
                8
            ],
            "fail_market_price": [
                339
            ],
            "fail_market_prices_type": [
                6
            ],
            "fail_market_quote_amount": [
                8
            ],
            "interv": [
                785
            ],
            "pass_market_acct": [
                6
            ],
            "pass_market_base_amount": [
                8
            ],
            "pass_market_price": [
                339
            ],
            "pass_market_prices_type": [
                6
            ],
            "pass_market_quote_amount": [
                8
            ],
            "proposalPriceFailMarket": [
                305
            ],
            "proposalPricePassMarket": [
                305
            ],
            "proposal_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_max_fields": {
            "fail_market_acct": [
                5
            ],
            "fail_market_base_amount": [
                7
            ],
            "fail_market_price": [
                338
            ],
            "fail_market_prices_type": [
                5
            ],
            "fail_market_quote_amount": [
                7
            ],
            "interv": [
                784
            ],
            "pass_market_acct": [
                5
            ],
            "pass_market_base_amount": [
                7
            ],
            "pass_market_price": [
                338
            ],
            "pass_market_prices_type": [
                5
            ],
            "pass_market_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_min_fields": {
            "fail_market_acct": [
                5
            ],
            "fail_market_base_amount": [
                7
            ],
            "fail_market_price": [
                338
            ],
            "fail_market_prices_type": [
                5
            ],
            "fail_market_quote_amount": [
                7
            ],
            "interv": [
                784
            ],
            "pass_market_acct": [
                5
            ],
            "pass_market_base_amount": [
                7
            ],
            "pass_market_price": [
                338
            ],
            "pass_market_prices_type": [
                5
            ],
            "pass_market_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_order_by": {
            "fail_market_acct": [
                340
            ],
            "fail_market_base_amount": [
                340
            ],
            "fail_market_price": [
                340
            ],
            "fail_market_prices_type": [
                340
            ],
            "fail_market_quote_amount": [
                340
            ],
            "interv": [
                340
            ],
            "pass_market_acct": [
                340
            ],
            "pass_market_base_amount": [
                340
            ],
            "pass_market_price": [
                340
            ],
            "pass_market_prices_type": [
                340
            ],
            "pass_market_quote_amount": [
                340
            ],
            "proposalPriceFailMarket": [
                316
            ],
            "proposalPricePassMarket": [
                316
            ],
            "proposal_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_select_column": {},
        "proposal_prices_chart_data_stddev_fields": {
            "fail_market_base_amount": [
                2
            ],
            "fail_market_price": [
                2
            ],
            "fail_market_quote_amount": [
                2
            ],
            "pass_market_base_amount": [
                2
            ],
            "pass_market_price": [
                2
            ],
            "pass_market_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_stddev_pop_fields": {
            "fail_market_base_amount": [
                2
            ],
            "fail_market_price": [
                2
            ],
            "fail_market_quote_amount": [
                2
            ],
            "pass_market_base_amount": [
                2
            ],
            "pass_market_price": [
                2
            ],
            "pass_market_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_stddev_samp_fields": {
            "fail_market_base_amount": [
                2
            ],
            "fail_market_price": [
                2
            ],
            "fail_market_quote_amount": [
                2
            ],
            "pass_market_base_amount": [
                2
            ],
            "pass_market_price": [
                2
            ],
            "pass_market_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_stream_cursor_input": {
            "initial_value": [
                592
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_stream_cursor_value_input": {
            "fail_market_acct": [
                5
            ],
            "fail_market_base_amount": [
                7
            ],
            "fail_market_price": [
                338
            ],
            "fail_market_prices_type": [
                5
            ],
            "fail_market_quote_amount": [
                7
            ],
            "interv": [
                784
            ],
            "pass_market_acct": [
                5
            ],
            "pass_market_base_amount": [
                7
            ],
            "pass_market_price": [
                338
            ],
            "pass_market_prices_type": [
                5
            ],
            "pass_market_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_sum_fields": {
            "fail_market_base_amount": [
                7
            ],
            "fail_market_price": [
                338
            ],
            "fail_market_quote_amount": [
                7
            ],
            "pass_market_base_amount": [
                7
            ],
            "pass_market_price": [
                338
            ],
            "pass_market_quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_var_pop_fields": {
            "fail_market_base_amount": [
                2
            ],
            "fail_market_price": [
                2
            ],
            "fail_market_quote_amount": [
                2
            ],
            "pass_market_base_amount": [
                2
            ],
            "pass_market_price": [
                2
            ],
            "pass_market_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_var_samp_fields": {
            "fail_market_base_amount": [
                2
            ],
            "fail_market_price": [
                2
            ],
            "fail_market_quote_amount": [
                2
            ],
            "pass_market_base_amount": [
                2
            ],
            "pass_market_price": [
                2
            ],
            "pass_market_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_prices_chart_data_variance_fields": {
            "fail_market_base_amount": [
                2
            ],
            "fail_market_price": [
                2
            ],
            "fail_market_quote_amount": [
                2
            ],
            "pass_market_base_amount": [
                2
            ],
            "pass_market_price": [
                2
            ],
            "pass_market_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume": {
            "fail_market_acct": [
                5
            ],
            "fail_volume": [
                338
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                338
            ],
            "proposalTradeVolume": [
                615
            ],
            "proposalTradeVolumeFailMarket": [
                296
            ],
            "proposalTradeVolumePassMarket": [
                296
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_aggregate": {
            "aggregate": [
                599
            ],
            "nodes": [
                597
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_aggregate_fields": {
            "avg": [
                600
            ],
            "count": [
                3,
                {
                    "columns": [
                        605,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                602
            ],
            "min": [
                603
            ],
            "stddev": [
                606
            ],
            "stddev_pop": [
                607
            ],
            "stddev_samp": [
                608
            ],
            "sum": [
                611
            ],
            "var_pop": [
                612
            ],
            "var_samp": [
                613
            ],
            "variance": [
                614
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_avg_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_bool_exp": {
            "_and": [
                601
            ],
            "_not": [
                601
            ],
            "_or": [
                601
            ],
            "fail_market_acct": [
                6
            ],
            "fail_volume": [
                339
            ],
            "pass_market_acct": [
                6
            ],
            "pass_volume": [
                339
            ],
            "proposalTradeVolume": [
                634
            ],
            "proposalTradeVolumeFailMarket": [
                305
            ],
            "proposalTradeVolumePassMarket": [
                305
            ],
            "proposal_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_max_fields": {
            "fail_market_acct": [
                5
            ],
            "fail_volume": [
                338
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                338
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_min_fields": {
            "fail_market_acct": [
                5
            ],
            "fail_volume": [
                338
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                338
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_order_by": {
            "fail_market_acct": [
                340
            ],
            "fail_volume": [
                340
            ],
            "pass_market_acct": [
                340
            ],
            "pass_volume": [
                340
            ],
            "proposalTradeVolume": [
                645
            ],
            "proposalTradeVolumeFailMarket": [
                316
            ],
            "proposalTradeVolumePassMarket": [
                316
            ],
            "proposal_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_select_column": {},
        "proposal_total_trade_volume_stddev_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_stddev_pop_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_stddev_samp_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_stream_cursor_input": {
            "initial_value": [
                610
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_stream_cursor_value_input": {
            "fail_market_acct": [
                5
            ],
            "fail_volume": [
                338
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                338
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_sum_fields": {
            "fail_volume": [
                338
            ],
            "pass_volume": [
                338
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_var_pop_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_var_samp_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_variance_fields": {
            "fail_volume": [
                2
            ],
            "pass_volume": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals": {
            "autocrat_version": [
                193
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
            "completed_at": [
                784
            ],
            "conditionalVaultByQuoteVault": [
                92
            ],
            "conditional_vault": [
                92
            ],
            "created_at": [
                784
            ],
            "dao": [
                151
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                784
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                296,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "markets_aggregate": [
                297,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
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
                533,
                {
                    "distinct_on": [
                        559,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        556,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        543
                    ]
                }
            ],
            "proposal_details_aggregate": [
                534,
                {
                    "distinct_on": [
                        559,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        556,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        543
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
                675,
                {
                    "distinct_on": [
                        696,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        694,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        684
                    ]
                }
            ],
            "reactions_aggregate": [
                676,
                {
                    "distinct_on": [
                        696,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        694,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        684
                    ]
                }
            ],
            "status": [
                5
            ],
            "twaps": [
                1026,
                {
                    "distinct_on": [
                        1047,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1045,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twaps_aggregate": [
                1027,
                {
                    "distinct_on": [
                        1047,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1045,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate": {
            "aggregate": [
                629
            ],
            "nodes": [
                615
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp": {
            "avg": [
                618
            ],
            "corr": [
                619
            ],
            "count": [
                621
            ],
            "covar_samp": [
                622
            ],
            "max": [
                624
            ],
            "min": [
                625
            ],
            "stddev_samp": [
                626
            ],
            "sum": [
                627
            ],
            "var_samp": [
                628
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_avg": {
            "arguments": [
                648
            ],
            "distinct": [
                0
            ],
            "filter": [
                634
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr": {
            "arguments": [
                620
            ],
            "distinct": [
                0
            ],
            "filter": [
                634
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr_arguments": {
            "X": [
                649
            ],
            "Y": [
                649
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_count": {
            "arguments": [
                647
            ],
            "distinct": [
                0
            ],
            "filter": [
                634
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
                623
            ],
            "distinct": [
                0
            ],
            "filter": [
                634
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                650
            ],
            "Y": [
                650
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_max": {
            "arguments": [
                651
            ],
            "distinct": [
                0
            ],
            "filter": [
                634
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_min": {
            "arguments": [
                652
            ],
            "distinct": [
                0
            ],
            "filter": [
                634
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                653
            ],
            "distinct": [
                0
            ],
            "filter": [
                634
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_sum": {
            "arguments": [
                654
            ],
            "distinct": [
                0
            ],
            "filter": [
                634
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_var_samp": {
            "arguments": [
                655
            ],
            "distinct": [
                0
            ],
            "filter": [
                634
            ],
            "predicate": [
                194
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_fields": {
            "avg": [
                632
            ],
            "count": [
                3,
                {
                    "columns": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                638
            ],
            "min": [
                640
            ],
            "stddev": [
                657
            ],
            "stddev_pop": [
                659
            ],
            "stddev_samp": [
                661
            ],
            "sum": [
                665
            ],
            "var_pop": [
                669
            ],
            "var_samp": [
                671
            ],
            "variance": [
                673
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_order_by": {
            "avg": [
                633
            ],
            "count": [
                340
            ],
            "max": [
                639
            ],
            "min": [
                641
            ],
            "stddev": [
                658
            ],
            "stddev_pop": [
                660
            ],
            "stddev_samp": [
                662
            ],
            "sum": [
                666
            ],
            "var_pop": [
                670
            ],
            "var_samp": [
                672
            ],
            "variance": [
                674
            ],
            "__typename": [
                5
            ]
        },
        "proposals_arr_rel_insert_input": {
            "data": [
                637
            ],
            "on_conflict": [
                644
            ],
            "__typename": [
                5
            ]
        },
        "proposals_avg_fields": {
            "autocrat_version": [
                2
            ],
            "end_slot": [
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
                340
            ],
            "end_slot": [
                340
            ],
            "initial_slot": [
                340
            ],
            "proposal_num": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposals_bool_exp": {
            "_and": [
                634
            ],
            "_not": [
                634
            ],
            "_or": [
                634
            ],
            "autocrat_version": [
                194
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
            "completed_at": [
                785
            ],
            "conditionalVaultByQuoteVault": [
                99
            ],
            "conditional_vault": [
                99
            ],
            "created_at": [
                785
            ],
            "dao": [
                160
            ],
            "dao_acct": [
                6
            ],
            "description_url": [
                6
            ],
            "end_slot": [
                8
            ],
            "ended_at": [
                785
            ],
            "fail_market_acct": [
                6
            ],
            "initial_slot": [
                8
            ],
            "markets": [
                305
            ],
            "markets_aggregate": [
                298
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
                543
            ],
            "proposal_details_aggregate": [
                535
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
                684
            ],
            "reactions_aggregate": [
                677
            ],
            "status": [
                6
            ],
            "twaps": [
                1035
            ],
            "twaps_aggregate": [
                1028
            ],
            "updated_at": [
                785
            ],
            "__typename": [
                5
            ]
        },
        "proposals_constraint": {},
        "proposals_inc_input": {
            "autocrat_version": [
                193
            ],
            "end_slot": [
                7
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
                193
            ],
            "base_vault": [
                5
            ],
            "comments": [
                56
            ],
            "completed_at": [
                784
            ],
            "conditionalVaultByQuoteVault": [
                107
            ],
            "conditional_vault": [
                107
            ],
            "created_at": [
                784
            ],
            "dao": [
                169
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                784
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                302
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
                540
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
                681
            ],
            "status": [
                5
            ],
            "twaps": [
                1032
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_fields": {
            "autocrat_version": [
                193
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                784
            ],
            "created_at": [
                784
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                784
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_order_by": {
            "autocrat_version": [
                340
            ],
            "base_vault": [
                340
            ],
            "completed_at": [
                340
            ],
            "created_at": [
                340
            ],
            "dao_acct": [
                340
            ],
            "description_url": [
                340
            ],
            "end_slot": [
                340
            ],
            "ended_at": [
                340
            ],
            "fail_market_acct": [
                340
            ],
            "initial_slot": [
                340
            ],
            "pass_market_acct": [
                340
            ],
            "pricing_model_fail_acct": [
                340
            ],
            "pricing_model_pass_acct": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "proposal_num": [
                340
            ],
            "proposer_acct": [
                340
            ],
            "quote_vault": [
                340
            ],
            "status": [
                340
            ],
            "updated_at": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_fields": {
            "autocrat_version": [
                193
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                784
            ],
            "created_at": [
                784
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                784
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_order_by": {
            "autocrat_version": [
                340
            ],
            "base_vault": [
                340
            ],
            "completed_at": [
                340
            ],
            "created_at": [
                340
            ],
            "dao_acct": [
                340
            ],
            "description_url": [
                340
            ],
            "end_slot": [
                340
            ],
            "ended_at": [
                340
            ],
            "fail_market_acct": [
                340
            ],
            "initial_slot": [
                340
            ],
            "pass_market_acct": [
                340
            ],
            "pricing_model_fail_acct": [
                340
            ],
            "pricing_model_pass_acct": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "proposal_num": [
                340
            ],
            "proposer_acct": [
                340
            ],
            "quote_vault": [
                340
            ],
            "status": [
                340
            ],
            "updated_at": [
                340
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
                615
            ],
            "__typename": [
                5
            ]
        },
        "proposals_obj_rel_insert_input": {
            "data": [
                637
            ],
            "on_conflict": [
                644
            ],
            "__typename": [
                5
            ]
        },
        "proposals_on_conflict": {
            "constraint": [
                635
            ],
            "update_columns": [
                667
            ],
            "where": [
                634
            ],
            "__typename": [
                5
            ]
        },
        "proposals_order_by": {
            "autocrat_version": [
                340
            ],
            "base_vault": [
                340
            ],
            "comments_aggregate": [
                55
            ],
            "completed_at": [
                340
            ],
            "conditionalVaultByQuoteVault": [
                109
            ],
            "conditional_vault": [
                109
            ],
            "created_at": [
                340
            ],
            "dao": [
                171
            ],
            "dao_acct": [
                340
            ],
            "description_url": [
                340
            ],
            "end_slot": [
                340
            ],
            "ended_at": [
                340
            ],
            "fail_market_acct": [
                340
            ],
            "initial_slot": [
                340
            ],
            "markets_aggregate": [
                301
            ],
            "pass_market_acct": [
                340
            ],
            "pricing_model_fail_acct": [
                340
            ],
            "pricing_model_pass_acct": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "proposal_details_aggregate": [
                538
            ],
            "proposal_num": [
                340
            ],
            "proposer_acct": [
                340
            ],
            "quote_vault": [
                340
            ],
            "reactions_aggregate": [
                680
            ],
            "status": [
                340
            ],
            "twaps_aggregate": [
                1031
            ],
            "updated_at": [
                340
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
                193
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                784
            ],
            "created_at": [
                784
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                784
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_fields": {
            "autocrat_version": [
                2
            ],
            "end_slot": [
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
                340
            ],
            "end_slot": [
                340
            ],
            "initial_slot": [
                340
            ],
            "proposal_num": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_pop_fields": {
            "autocrat_version": [
                2
            ],
            "end_slot": [
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
                340
            ],
            "end_slot": [
                340
            ],
            "initial_slot": [
                340
            ],
            "proposal_num": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_samp_fields": {
            "autocrat_version": [
                2
            ],
            "end_slot": [
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
                340
            ],
            "end_slot": [
                340
            ],
            "initial_slot": [
                340
            ],
            "proposal_num": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_input": {
            "initial_value": [
                664
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
                193
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                784
            ],
            "created_at": [
                784
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                784
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_fields": {
            "autocrat_version": [
                193
            ],
            "end_slot": [
                7
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
                340
            ],
            "end_slot": [
                340
            ],
            "initial_slot": [
                340
            ],
            "proposal_num": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposals_update_column": {},
        "proposals_updates": {
            "_inc": [
                636
            ],
            "_set": [
                656
            ],
            "where": [
                634
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_pop_fields": {
            "autocrat_version": [
                2
            ],
            "end_slot": [
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
                340
            ],
            "end_slot": [
                340
            ],
            "initial_slot": [
                340
            ],
            "proposal_num": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_samp_fields": {
            "autocrat_version": [
                2
            ],
            "end_slot": [
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
                340
            ],
            "end_slot": [
                340
            ],
            "initial_slot": [
                340
            ],
            "proposal_num": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "proposals_variance_fields": {
            "autocrat_version": [
                2
            ],
            "end_slot": [
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
                340
            ],
            "end_slot": [
                340
            ],
            "initial_slot": [
                340
            ],
            "proposal_num": [
                340
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
                615
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate": {
            "aggregate": [
                679
            ],
            "nodes": [
                675
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp": {
            "count": [
                678
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp_count": {
            "arguments": [
                696
            ],
            "distinct": [
                0
            ],
            "filter": [
                684
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
                682
            ],
            "count": [
                3,
                {
                    "columns": [
                        696,
                        "[reactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                688
            ],
            "min": [
                690
            ],
            "stddev": [
                698
            ],
            "stddev_pop": [
                700
            ],
            "stddev_samp": [
                702
            ],
            "sum": [
                706
            ],
            "var_pop": [
                710
            ],
            "var_samp": [
                712
            ],
            "variance": [
                714
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_order_by": {
            "avg": [
                683
            ],
            "count": [
                340
            ],
            "max": [
                689
            ],
            "min": [
                691
            ],
            "stddev": [
                699
            ],
            "stddev_pop": [
                701
            ],
            "stddev_samp": [
                703
            ],
            "sum": [
                707
            ],
            "var_pop": [
                711
            ],
            "var_samp": [
                713
            ],
            "variance": [
                715
            ],
            "__typename": [
                5
            ]
        },
        "reactions_arr_rel_insert_input": {
            "data": [
                687
            ],
            "on_conflict": [
                693
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "reactions_bool_exp": {
            "_and": [
                684
            ],
            "_not": [
                684
            ],
            "_or": [
                684
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "proposal": [
                634
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
                785
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
                643
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
                784
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "reactions_max_order_by": {
            "comment_id": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "reaction": [
                340
            ],
            "reactor_acct": [
                340
            ],
            "updated_at": [
                340
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "reactions_min_order_by": {
            "comment_id": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "reaction": [
                340
            ],
            "reactor_acct": [
                340
            ],
            "updated_at": [
                340
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
                675
            ],
            "__typename": [
                5
            ]
        },
        "reactions_on_conflict": {
            "constraint": [
                685
            ],
            "update_columns": [
                708
            ],
            "where": [
                684
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
                340
            ],
            "proposal": [
                645
            ],
            "proposal_acct": [
                340
            ],
            "reaction": [
                340
            ],
            "reactor_acct": [
                340
            ],
            "updated_at": [
                340
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
                784
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
                340
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
                340
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stream_cursor_input": {
            "initial_value": [
                705
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
                784
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "reactions_update_column": {},
        "reactions_updates": {
            "_inc": [
                686
            ],
            "_set": [
                697
            ],
            "where": [
                684
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
                340
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
                340
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "sessions": {
            "created_at": [
                784
            ],
            "expires_at": [
                784
            ],
            "id": [
                1086
            ],
            "user": [
                1067
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate": {
            "aggregate": [
                720
            ],
            "nodes": [
                716
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp": {
            "count": [
                719
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp_count": {
            "arguments": [
                734
            ],
            "distinct": [
                0
            ],
            "filter": [
                723
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        734,
                        "[sessions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                726
            ],
            "min": [
                728
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_order_by": {
            "count": [
                340
            ],
            "max": [
                727
            ],
            "min": [
                729
            ],
            "__typename": [
                5
            ]
        },
        "sessions_arr_rel_insert_input": {
            "data": [
                725
            ],
            "on_conflict": [
                731
            ],
            "__typename": [
                5
            ]
        },
        "sessions_bool_exp": {
            "_and": [
                723
            ],
            "_not": [
                723
            ],
            "_or": [
                723
            ],
            "created_at": [
                785
            ],
            "expires_at": [
                785
            ],
            "id": [
                1087
            ],
            "user": [
                1070
            ],
            "user_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "sessions_constraint": {},
        "sessions_insert_input": {
            "created_at": [
                784
            ],
            "expires_at": [
                784
            ],
            "id": [
                1086
            ],
            "user": [
                1076
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_max_fields": {
            "created_at": [
                784
            ],
            "expires_at": [
                784
            ],
            "id": [
                1086
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_max_order_by": {
            "created_at": [
                340
            ],
            "expires_at": [
                340
            ],
            "id": [
                340
            ],
            "user_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "sessions_min_fields": {
            "created_at": [
                784
            ],
            "expires_at": [
                784
            ],
            "id": [
                1086
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_min_order_by": {
            "created_at": [
                340
            ],
            "expires_at": [
                340
            ],
            "id": [
                340
            ],
            "user_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "sessions_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                716
            ],
            "__typename": [
                5
            ]
        },
        "sessions_on_conflict": {
            "constraint": [
                724
            ],
            "update_columns": [
                738
            ],
            "where": [
                723
            ],
            "__typename": [
                5
            ]
        },
        "sessions_order_by": {
            "created_at": [
                340
            ],
            "expires_at": [
                340
            ],
            "id": [
                340
            ],
            "user": [
                1078
            ],
            "user_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "sessions_pk_columns_input": {
            "id": [
                1086
            ],
            "__typename": [
                5
            ]
        },
        "sessions_select_column": {},
        "sessions_set_input": {
            "created_at": [
                784
            ],
            "expires_at": [
                784
            ],
            "id": [
                1086
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_stream_cursor_input": {
            "initial_value": [
                737
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "sessions_stream_cursor_value_input": {
            "created_at": [
                784
            ],
            "expires_at": [
                784
            ],
            "id": [
                1086
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "sessions_update_column": {},
        "sessions_updates": {
            "_set": [
                735
            ],
            "where": [
                723
            ],
            "__typename": [
                5
            ]
        },
        "smallint": {},
        "smallint_comparison_exp": {
            "_eq": [
                740
            ],
            "_gt": [
                740
            ],
            "_gte": [
                740
            ],
            "_in": [
                740
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                740
            ],
            "_lte": [
                740
            ],
            "_neq": [
                740
            ],
            "_nin": [
                740
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
                250
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
                296
            ],
            "market_acct": [
                5
            ],
            "order": [
                341
            ],
            "order_block": [
                7
            ],
            "order_time": [
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate": {
            "aggregate": [
                746
            ],
            "nodes": [
                742
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp": {
            "count": [
                745
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp_count": {
            "arguments": [
                764
            ],
            "distinct": [
                0
            ],
            "filter": [
                751
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
                749
            ],
            "count": [
                3,
                {
                    "columns": [
                        764,
                        "[takes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                755
            ],
            "min": [
                757
            ],
            "stddev": [
                766
            ],
            "stddev_pop": [
                768
            ],
            "stddev_samp": [
                770
            ],
            "sum": [
                774
            ],
            "var_pop": [
                778
            ],
            "var_samp": [
                780
            ],
            "variance": [
                782
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_order_by": {
            "avg": [
                750
            ],
            "count": [
                340
            ],
            "max": [
                756
            ],
            "min": [
                758
            ],
            "stddev": [
                767
            ],
            "stddev_pop": [
                769
            ],
            "stddev_samp": [
                771
            ],
            "sum": [
                775
            ],
            "var_pop": [
                779
            ],
            "var_samp": [
                781
            ],
            "variance": [
                783
            ],
            "__typename": [
                5
            ]
        },
        "takes_arr_rel_insert_input": {
            "data": [
                754
            ],
            "on_conflict": [
                761
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
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_avg_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "takes_bool_exp": {
            "_and": [
                751
            ],
            "_not": [
                751
            ],
            "_or": [
                751
            ],
            "base_amount": [
                8
            ],
            "make": [
                261
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
                305
            ],
            "market_acct": [
                6
            ],
            "order": [
                352
            ],
            "order_block": [
                8
            ],
            "order_time": [
                785
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                339
            ],
            "taker_base_fee": [
                8
            ],
            "taker_quote_fee": [
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
                338
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
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
                270
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
                314
            ],
            "market_acct": [
                5
            ],
            "order": [
                361
            ],
            "order_block": [
                7
            ],
            "order_time": [
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
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
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_max_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_order_tx_sig": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "market_acct": [
                340
            ],
            "order_block": [
                340
            ],
            "order_time": [
                340
            ],
            "order_tx_sig": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
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
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_min_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_order_tx_sig": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "market_acct": [
                340
            ],
            "order_block": [
                340
            ],
            "order_time": [
                340
            ],
            "order_tx_sig": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
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
                742
            ],
            "__typename": [
                5
            ]
        },
        "takes_obj_rel_insert_input": {
            "data": [
                754
            ],
            "on_conflict": [
                761
            ],
            "__typename": [
                5
            ]
        },
        "takes_on_conflict": {
            "constraint": [
                752
            ],
            "update_columns": [
                776
            ],
            "where": [
                751
            ],
            "__typename": [
                5
            ]
        },
        "takes_order_by": {
            "base_amount": [
                340
            ],
            "make": [
                272
            ],
            "maker_base_fee": [
                340
            ],
            "maker_order_tx_sig": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "market": [
                316
            ],
            "market_acct": [
                340
            ],
            "order": [
                363
            ],
            "order_block": [
                340
            ],
            "order_time": [
                340
            ],
            "order_tx_sig": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
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
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
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
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
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
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_pop_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
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
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_stddev_samp_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "takes_stream_cursor_input": {
            "initial_value": [
                773
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
                784
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                338
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
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
                338
            ],
            "taker_base_fee": [
                7
            ],
            "taker_quote_fee": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "takes_sum_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "takes_update_column": {},
        "takes_updates": {
            "_inc": [
                753
            ],
            "_set": [
                765
            ],
            "where": [
                751
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
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_pop_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
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
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_var_samp_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
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
            "taker_quote_fee": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "takes_variance_order_by": {
            "base_amount": [
                340
            ],
            "maker_base_fee": [
                340
            ],
            "maker_quote_fee": [
                340
            ],
            "order_block": [
                340
            ],
            "quote_price": [
                340
            ],
            "taker_base_fee": [
                340
            ],
            "taker_quote_fee": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                784
            ],
            "_gt": [
                784
            ],
            "_gte": [
                784
            ],
            "_in": [
                784
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                784
            ],
            "_lte": [
                784
            ],
            "_neq": [
                784
            ],
            "_nin": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances": {
            "amount": [
                7
            ],
            "created_at": [
                784
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token": [
                869
            ],
            "tokenAcctByTokenAcct": [
                827
            ],
            "token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate": {
            "aggregate": [
                790
            ],
            "nodes": [
                786
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp": {
            "count": [
                789
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp_count": {
            "arguments": [
                807
            ],
            "distinct": [
                0
            ],
            "filter": [
                795
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_fields": {
            "avg": [
                793
            ],
            "count": [
                3,
                {
                    "columns": [
                        807,
                        "[token_acct_balances_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                799
            ],
            "min": [
                801
            ],
            "stddev": [
                809
            ],
            "stddev_pop": [
                811
            ],
            "stddev_samp": [
                813
            ],
            "sum": [
                817
            ],
            "var_pop": [
                821
            ],
            "var_samp": [
                823
            ],
            "variance": [
                825
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_order_by": {
            "avg": [
                794
            ],
            "count": [
                340
            ],
            "max": [
                800
            ],
            "min": [
                802
            ],
            "stddev": [
                810
            ],
            "stddev_pop": [
                812
            ],
            "stddev_samp": [
                814
            ],
            "sum": [
                818
            ],
            "var_pop": [
                822
            ],
            "var_samp": [
                824
            ],
            "variance": [
                826
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_arr_rel_insert_input": {
            "data": [
                798
            ],
            "on_conflict": [
                804
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_avg_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_avg_order_by": {
            "amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_bool_exp": {
            "_and": [
                795
            ],
            "_not": [
                795
            ],
            "_or": [
                795
            ],
            "amount": [
                8
            ],
            "created_at": [
                785
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "token": [
                873
            ],
            "tokenAcctByTokenAcct": [
                836
            ],
            "token_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_constraint": {},
        "token_acct_balances_inc_input": {
            "amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_insert_input": {
            "amount": [
                7
            ],
            "created_at": [
                784
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token": [
                880
            ],
            "tokenAcctByTokenAcct": [
                845
            ],
            "token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_max_fields": {
            "amount": [
                7
            ],
            "created_at": [
                784
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
            "__typename": [
                5
            ]
        },
        "token_acct_balances_max_order_by": {
            "amount": [
                340
            ],
            "created_at": [
                340
            ],
            "mint_acct": [
                340
            ],
            "owner_acct": [
                340
            ],
            "token_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_min_fields": {
            "amount": [
                7
            ],
            "created_at": [
                784
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
            "__typename": [
                5
            ]
        },
        "token_acct_balances_min_order_by": {
            "amount": [
                340
            ],
            "created_at": [
                340
            ],
            "mint_acct": [
                340
            ],
            "owner_acct": [
                340
            ],
            "token_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                786
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_on_conflict": {
            "constraint": [
                796
            ],
            "update_columns": [
                819
            ],
            "where": [
                795
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_order_by": {
            "amount": [
                340
            ],
            "created_at": [
                340
            ],
            "mint_acct": [
                340
            ],
            "owner_acct": [
                340
            ],
            "token": [
                882
            ],
            "tokenAcctByTokenAcct": [
                847
            ],
            "token_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_pk_columns_input": {
            "amount": [
                7
            ],
            "created_at": [
                784
            ],
            "mint_acct": [
                5
            ],
            "token_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_select_column": {},
        "token_acct_balances_set_input": {
            "amount": [
                7
            ],
            "created_at": [
                784
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
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_order_by": {
            "amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_pop_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_pop_order_by": {
            "amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_samp_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_samp_order_by": {
            "amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stream_cursor_input": {
            "initial_value": [
                816
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stream_cursor_value_input": {
            "amount": [
                7
            ],
            "created_at": [
                784
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
            "__typename": [
                5
            ]
        },
        "token_acct_balances_sum_fields": {
            "amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_sum_order_by": {
            "amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_update_column": {},
        "token_acct_balances_updates": {
            "_inc": [
                797
            ],
            "_set": [
                808
            ],
            "where": [
                795
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_pop_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_pop_order_by": {
            "amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_samp_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_samp_order_by": {
            "amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_variance_fields": {
            "amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_variance_order_by": {
            "amount": [
                340
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
                296,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "marketsByBidsTokenAcct": [
                296,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "marketsByBidsTokenAcct_aggregate": [
                297,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "markets_aggregate": [
                297,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
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
                869
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                786,
                {
                    "distinct_on": [
                        807,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        805,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        795
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                787,
                {
                    "distinct_on": [
                        807,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        805,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        795
                    ]
                }
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate": {
            "aggregate": [
                831
            ],
            "nodes": [
                827
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp": {
            "count": [
                830
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp_count": {
            "arguments": [
                849
            ],
            "distinct": [
                0
            ],
            "filter": [
                836
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
                834
            ],
            "count": [
                3,
                {
                    "columns": [
                        849,
                        "[token_accts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                840
            ],
            "min": [
                842
            ],
            "stddev": [
                851
            ],
            "stddev_pop": [
                853
            ],
            "stddev_samp": [
                855
            ],
            "sum": [
                859
            ],
            "var_pop": [
                863
            ],
            "var_samp": [
                865
            ],
            "variance": [
                867
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_order_by": {
            "avg": [
                835
            ],
            "count": [
                340
            ],
            "max": [
                841
            ],
            "min": [
                843
            ],
            "stddev": [
                852
            ],
            "stddev_pop": [
                854
            ],
            "stddev_samp": [
                856
            ],
            "sum": [
                860
            ],
            "var_pop": [
                864
            ],
            "var_samp": [
                866
            ],
            "variance": [
                868
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_arr_rel_insert_input": {
            "data": [
                839
            ],
            "on_conflict": [
                846
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_bool_exp": {
            "_and": [
                836
            ],
            "_not": [
                836
            ],
            "_or": [
                836
            ],
            "amount": [
                8
            ],
            "markets": [
                305
            ],
            "marketsByBidsTokenAcct": [
                305
            ],
            "marketsByBidsTokenAcct_aggregate": [
                298
            ],
            "markets_aggregate": [
                298
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "token": [
                873
            ],
            "token_acct": [
                6
            ],
            "token_acct_balances": [
                795
            ],
            "token_acct_balances_aggregate": [
                788
            ],
            "updated_at": [
                785
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
                302
            ],
            "marketsByBidsTokenAcct": [
                302
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token": [
                880
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                792
            ],
            "updated_at": [
                784
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_max_order_by": {
            "amount": [
                340
            ],
            "mint_acct": [
                340
            ],
            "owner_acct": [
                340
            ],
            "token_acct": [
                340
            ],
            "updated_at": [
                340
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_min_order_by": {
            "amount": [
                340
            ],
            "mint_acct": [
                340
            ],
            "owner_acct": [
                340
            ],
            "token_acct": [
                340
            ],
            "updated_at": [
                340
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
                827
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_obj_rel_insert_input": {
            "data": [
                839
            ],
            "on_conflict": [
                846
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_on_conflict": {
            "constraint": [
                837
            ],
            "update_columns": [
                861
            ],
            "where": [
                836
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_order_by": {
            "amount": [
                340
            ],
            "marketsByBidsTokenAcct_aggregate": [
                301
            ],
            "markets_aggregate": [
                301
            ],
            "mint_acct": [
                340
            ],
            "owner_acct": [
                340
            ],
            "token": [
                882
            ],
            "token_acct": [
                340
            ],
            "token_acct_balances_aggregate": [
                791
            ],
            "updated_at": [
                340
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
                784
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
                340
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
                340
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stream_cursor_input": {
            "initial_value": [
                858
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
                784
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_update_column": {},
        "token_accts_updates": {
            "_inc": [
                838
            ],
            "_set": [
                850
            ],
            "where": [
                836
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
                340
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
                340
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
                340
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
                151,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "daosByQuoteAcct": [
                151,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "daosByQuoteAcct_aggregate": [
                152,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "daos_aggregate": [
                152,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "decimals": [
                740
            ],
            "image_url": [
                5
            ],
            "markets": [
                296,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "marketsByQuoteMintAcct": [
                296,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "marketsByQuoteMintAcct_aggregate": [
                297,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "markets_aggregate": [
                297,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
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
            "token_acct_balances": [
                786,
                {
                    "distinct_on": [
                        807,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        805,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        795
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                787,
                {
                    "distinct_on": [
                        807,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        805,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        795
                    ]
                }
            ],
            "token_accts": [
                827,
                {
                    "distinct_on": [
                        849,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        847,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        836
                    ]
                }
            ],
            "token_accts_aggregate": [
                828,
                {
                    "distinct_on": [
                        849,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        847,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        836
                    ]
                }
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate": {
            "aggregate": [
                871
            ],
            "nodes": [
                869
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate_fields": {
            "avg": [
                872
            ],
            "count": [
                3,
                {
                    "columns": [
                        884,
                        "[tokens_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                877
            ],
            "min": [
                878
            ],
            "stddev": [
                886
            ],
            "stddev_pop": [
                887
            ],
            "stddev_samp": [
                888
            ],
            "sum": [
                891
            ],
            "var_pop": [
                894
            ],
            "var_samp": [
                895
            ],
            "variance": [
                896
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
                873
            ],
            "_not": [
                873
            ],
            "_or": [
                873
            ],
            "conditional_vaults": [
                99
            ],
            "conditional_vaults_aggregate": [
                94
            ],
            "daos": [
                160
            ],
            "daosByQuoteAcct": [
                160
            ],
            "daosByQuoteAcct_aggregate": [
                153
            ],
            "daos_aggregate": [
                153
            ],
            "decimals": [
                741
            ],
            "image_url": [
                6
            ],
            "markets": [
                305
            ],
            "marketsByQuoteMintAcct": [
                305
            ],
            "marketsByQuoteMintAcct_aggregate": [
                298
            ],
            "markets_aggregate": [
                298
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
            "token_acct_balances": [
                795
            ],
            "token_acct_balances_aggregate": [
                788
            ],
            "token_accts": [
                836
            ],
            "token_accts_aggregate": [
                829
            ],
            "updated_at": [
                785
            ],
            "__typename": [
                5
            ]
        },
        "tokens_constraint": {},
        "tokens_inc_input": {
            "decimals": [
                740
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
                157
            ],
            "daosByQuoteAcct": [
                157
            ],
            "decimals": [
                740
            ],
            "image_url": [
                5
            ],
            "markets": [
                302
            ],
            "marketsByQuoteMintAcct": [
                302
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
            "token_acct_balances": [
                792
            ],
            "token_accts": [
                833
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "tokens_max_fields": {
            "decimals": [
                740
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "tokens_min_fields": {
            "decimals": [
                740
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
                784
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
                869
            ],
            "__typename": [
                5
            ]
        },
        "tokens_obj_rel_insert_input": {
            "data": [
                876
            ],
            "on_conflict": [
                881
            ],
            "__typename": [
                5
            ]
        },
        "tokens_on_conflict": {
            "constraint": [
                874
            ],
            "update_columns": [
                892
            ],
            "where": [
                873
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
                156
            ],
            "daos_aggregate": [
                156
            ],
            "decimals": [
                340
            ],
            "image_url": [
                340
            ],
            "marketsByQuoteMintAcct_aggregate": [
                301
            ],
            "markets_aggregate": [
                301
            ],
            "mint_acct": [
                340
            ],
            "name": [
                340
            ],
            "supply": [
                340
            ],
            "symbol": [
                340
            ],
            "token_acct_balances_aggregate": [
                791
            ],
            "token_accts_aggregate": [
                832
            ],
            "updated_at": [
                340
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
                740
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
                784
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
                890
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
                740
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
                784
            ],
            "__typename": [
                5
            ]
        },
        "tokens_sum_fields": {
            "decimals": [
                740
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
                875
            ],
            "_set": [
                885
            ],
            "where": [
                873
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
                980
            ],
            "transaction_watcher": [
                938
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
                901
            ],
            "nodes": [
                897
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp": {
            "count": [
                900
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp_count": {
            "arguments": [
                918
            ],
            "distinct": [
                0
            ],
            "filter": [
                906
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
                904
            ],
            "count": [
                3,
                {
                    "columns": [
                        918,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                910
            ],
            "min": [
                912
            ],
            "stddev": [
                920
            ],
            "stddev_pop": [
                922
            ],
            "stddev_samp": [
                924
            ],
            "sum": [
                928
            ],
            "var_pop": [
                932
            ],
            "var_samp": [
                934
            ],
            "variance": [
                936
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_order_by": {
            "avg": [
                905
            ],
            "count": [
                340
            ],
            "max": [
                911
            ],
            "min": [
                913
            ],
            "stddev": [
                921
            ],
            "stddev_pop": [
                923
            ],
            "stddev_samp": [
                925
            ],
            "sum": [
                929
            ],
            "var_pop": [
                933
            ],
            "var_samp": [
                935
            ],
            "variance": [
                937
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_arr_rel_insert_input": {
            "data": [
                909
            ],
            "on_conflict": [
                915
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_bool_exp": {
            "_and": [
                906
            ],
            "_not": [
                906
            ],
            "_or": [
                906
            ],
            "slot": [
                8
            ],
            "transaction": [
                984
            ],
            "transaction_watcher": [
                947
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
                991
            ],
            "transaction_watcher": [
                956
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
                340
            ],
            "tx_sig": [
                340
            ],
            "watcher_acct": [
                340
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
                340
            ],
            "tx_sig": [
                340
            ],
            "watcher_acct": [
                340
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
                897
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_on_conflict": {
            "constraint": [
                907
            ],
            "update_columns": [
                930
            ],
            "where": [
                906
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_order_by": {
            "slot": [
                340
            ],
            "transaction": [
                993
            ],
            "transaction_watcher": [
                958
            ],
            "tx_sig": [
                340
            ],
            "watcher_acct": [
                340
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
                340
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
                340
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stream_cursor_input": {
            "initial_value": [
                927
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
                340
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_update_column": {},
        "transaction_watcher_transactions_updates": {
            "_inc": [
                908
            ],
            "_set": [
                919
            ],
            "where": [
                906
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
                340
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
                340
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
                340
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
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                740
            ],
            "status": [
                5
            ],
            "transaction": [
                980
            ],
            "transactionByLatestTxSig": [
                980
            ],
            "transaction_watcher_transactions": [
                897,
                {
                    "distinct_on": [
                        918,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        916,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        906
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                898,
                {
                    "distinct_on": [
                        918,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        916,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        906
                    ]
                }
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate": {
            "aggregate": [
                942
            ],
            "nodes": [
                938
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp": {
            "count": [
                941
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp_count": {
            "arguments": [
                960
            ],
            "distinct": [
                0
            ],
            "filter": [
                947
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
                945
            ],
            "count": [
                3,
                {
                    "columns": [
                        960,
                        "[transaction_watchers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                951
            ],
            "min": [
                953
            ],
            "stddev": [
                962
            ],
            "stddev_pop": [
                964
            ],
            "stddev_samp": [
                966
            ],
            "sum": [
                970
            ],
            "var_pop": [
                974
            ],
            "var_samp": [
                976
            ],
            "variance": [
                978
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_order_by": {
            "avg": [
                946
            ],
            "count": [
                340
            ],
            "max": [
                952
            ],
            "min": [
                954
            ],
            "stddev": [
                963
            ],
            "stddev_pop": [
                965
            ],
            "stddev_samp": [
                967
            ],
            "sum": [
                971
            ],
            "var_pop": [
                975
            ],
            "var_samp": [
                977
            ],
            "variance": [
                979
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_arr_rel_insert_input": {
            "data": [
                950
            ],
            "on_conflict": [
                957
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
                340
            ],
            "serializer_logic_version": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_bool_exp": {
            "_and": [
                947
            ],
            "_not": [
                947
            ],
            "_or": [
                947
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
            "failure_log": [
                6
            ],
            "first_tx_sig": [
                6
            ],
            "latest_tx_sig": [
                6
            ],
            "serializer_logic_version": [
                741
            ],
            "status": [
                6
            ],
            "transaction": [
                984
            ],
            "transactionByLatestTxSig": [
                984
            ],
            "transaction_watcher_transactions": [
                906
            ],
            "transaction_watcher_transactions_aggregate": [
                899
            ],
            "updated_at": [
                785
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
                740
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
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                740
            ],
            "status": [
                5
            ],
            "transaction": [
                991
            ],
            "transactionByLatestTxSig": [
                991
            ],
            "transaction_watcher_transactions": [
                903
            ],
            "updated_at": [
                784
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
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                740
            ],
            "status": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_max_order_by": {
            "acct": [
                340
            ],
            "checked_up_to_slot": [
                340
            ],
            "description": [
                340
            ],
            "failure_log": [
                340
            ],
            "first_tx_sig": [
                340
            ],
            "latest_tx_sig": [
                340
            ],
            "serializer_logic_version": [
                340
            ],
            "status": [
                340
            ],
            "updated_at": [
                340
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
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                740
            ],
            "status": [
                5
            ],
            "updated_at": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_min_order_by": {
            "acct": [
                340
            ],
            "checked_up_to_slot": [
                340
            ],
            "description": [
                340
            ],
            "failure_log": [
                340
            ],
            "first_tx_sig": [
                340
            ],
            "latest_tx_sig": [
                340
            ],
            "serializer_logic_version": [
                340
            ],
            "status": [
                340
            ],
            "updated_at": [
                340
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
                938
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_obj_rel_insert_input": {
            "data": [
                950
            ],
            "on_conflict": [
                957
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_on_conflict": {
            "constraint": [
                948
            ],
            "update_columns": [
                972
            ],
            "where": [
                947
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_order_by": {
            "acct": [
                340
            ],
            "checked_up_to_slot": [
                340
            ],
            "description": [
                340
            ],
            "failure_log": [
                340
            ],
            "first_tx_sig": [
                340
            ],
            "latest_tx_sig": [
                340
            ],
            "serializer_logic_version": [
                340
            ],
            "status": [
                340
            ],
            "transaction": [
                993
            ],
            "transactionByLatestTxSig": [
                993
            ],
            "transaction_watcher_transactions_aggregate": [
                902
            ],
            "updated_at": [
                340
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
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                740
            ],
            "status": [
                5
            ],
            "updated_at": [
                784
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
                340
            ],
            "serializer_logic_version": [
                340
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
                340
            ],
            "serializer_logic_version": [
                340
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
                340
            ],
            "serializer_logic_version": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stream_cursor_input": {
            "initial_value": [
                969
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
            "failure_log": [
                5
            ],
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                740
            ],
            "status": [
                5
            ],
            "updated_at": [
                784
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
                740
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_sum_order_by": {
            "checked_up_to_slot": [
                340
            ],
            "serializer_logic_version": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_update_column": {},
        "transaction_watchers_updates": {
            "_inc": [
                949
            ],
            "_set": [
                961
            ],
            "where": [
                947
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
                340
            ],
            "serializer_logic_version": [
                340
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
                340
            ],
            "serializer_logic_version": [
                340
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
                340
            ],
            "serializer_logic_version": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "transactions": {
            "block_time": [
                784
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                195,
                {
                    "distinct_on": [
                        213,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        211,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                196,
                {
                    "distinct_on": [
                        213,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        211,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "order": [
                341
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                740
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                938,
                {
                    "distinct_on": [
                        960,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        958,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        947
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                939,
                {
                    "distinct_on": [
                        960,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        958,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        947
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                897,
                {
                    "distinct_on": [
                        918,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        916,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        906
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                898,
                {
                    "distinct_on": [
                        918,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        916,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        906
                    ]
                }
            ],
            "transaction_watchers": [
                938,
                {
                    "distinct_on": [
                        960,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        958,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        947
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                939,
                {
                    "distinct_on": [
                        960,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        958,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        947
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
                982
            ],
            "nodes": [
                980
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                983
            ],
            "count": [
                3,
                {
                    "columns": [
                        995,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                988
            ],
            "min": [
                989
            ],
            "stddev": [
                997
            ],
            "stddev_pop": [
                998
            ],
            "stddev_samp": [
                999
            ],
            "sum": [
                1002
            ],
            "var_pop": [
                1005
            ],
            "var_samp": [
                1006
            ],
            "variance": [
                1007
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
                984
            ],
            "_not": [
                984
            ],
            "_or": [
                984
            ],
            "block_time": [
                785
            ],
            "failed": [
                1
            ],
            "indexer_account_dependencies": [
                202
            ],
            "indexer_account_dependencies_aggregate": [
                197
            ],
            "order": [
                352
            ],
            "payload": [
                6
            ],
            "serializer_logic_version": [
                741
            ],
            "slot": [
                8
            ],
            "transactionWatchersByLatestTxSig": [
                947
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                940
            ],
            "transaction_watcher_transactions": [
                906
            ],
            "transaction_watcher_transactions_aggregate": [
                899
            ],
            "transaction_watchers": [
                947
            ],
            "transaction_watchers_aggregate": [
                940
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
                740
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
                784
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                201
            ],
            "order": [
                361
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                740
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                944
            ],
            "transaction_watcher_transactions": [
                903
            ],
            "transaction_watchers": [
                944
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
                784
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                740
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
                784
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                740
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
                980
            ],
            "__typename": [
                5
            ]
        },
        "transactions_obj_rel_insert_input": {
            "data": [
                987
            ],
            "on_conflict": [
                992
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                985
            ],
            "update_columns": [
                1003
            ],
            "where": [
                984
            ],
            "__typename": [
                5
            ]
        },
        "transactions_order_by": {
            "block_time": [
                340
            ],
            "failed": [
                340
            ],
            "indexer_account_dependencies_aggregate": [
                200
            ],
            "order": [
                363
            ],
            "payload": [
                340
            ],
            "serializer_logic_version": [
                340
            ],
            "slot": [
                340
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                943
            ],
            "transaction_watcher_transactions_aggregate": [
                902
            ],
            "transaction_watchers_aggregate": [
                943
            ],
            "tx_sig": [
                340
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
                784
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                740
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
                1001
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
                784
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                740
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
                740
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
                986
            ],
            "_set": [
                996
            ],
            "where": [
                984
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
        "twap_chart_data": {
            "interv": [
                784
            ],
            "market": [
                296
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_aggregate": {
            "aggregate": [
                1010
            ],
            "nodes": [
                1008
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_aggregate_fields": {
            "avg": [
                1011
            ],
            "count": [
                3,
                {
                    "columns": [
                        1016,
                        "[twap_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1013
            ],
            "min": [
                1014
            ],
            "stddev": [
                1017
            ],
            "stddev_pop": [
                1018
            ],
            "stddev_samp": [
                1019
            ],
            "sum": [
                1022
            ],
            "var_pop": [
                1023
            ],
            "var_samp": [
                1024
            ],
            "variance": [
                1025
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_avg_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_bool_exp": {
            "_and": [
                1012
            ],
            "_not": [
                1012
            ],
            "_or": [
                1012
            ],
            "interv": [
                785
            ],
            "market": [
                305
            ],
            "market_acct": [
                6
            ],
            "token_amount": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_max_fields": {
            "interv": [
                784
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_min_fields": {
            "interv": [
                784
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_order_by": {
            "interv": [
                340
            ],
            "market": [
                316
            ],
            "market_acct": [
                340
            ],
            "token_amount": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_select_column": {},
        "twap_chart_data_stddev_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_stddev_pop_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_stddev_samp_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_stream_cursor_input": {
            "initial_value": [
                1021
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_stream_cursor_value_input": {
            "interv": [
                784
            ],
            "market_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_sum_fields": {
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_var_pop_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_var_samp_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_variance_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "twaps": {
            "created_at": [
                784
            ],
            "last_observation": [
                338
            ],
            "last_price": [
                338
            ],
            "market": [
                296
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                338
            ],
            "proposal": [
                615
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
                1030
            ],
            "nodes": [
                1026
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp": {
            "count": [
                1029
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp_count": {
            "arguments": [
                1047
            ],
            "distinct": [
                0
            ],
            "filter": [
                1035
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
                1033
            ],
            "count": [
                3,
                {
                    "columns": [
                        1047,
                        "[twaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1039
            ],
            "min": [
                1041
            ],
            "stddev": [
                1049
            ],
            "stddev_pop": [
                1051
            ],
            "stddev_samp": [
                1053
            ],
            "sum": [
                1057
            ],
            "var_pop": [
                1061
            ],
            "var_samp": [
                1063
            ],
            "variance": [
                1065
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_order_by": {
            "avg": [
                1034
            ],
            "count": [
                340
            ],
            "max": [
                1040
            ],
            "min": [
                1042
            ],
            "stddev": [
                1050
            ],
            "stddev_pop": [
                1052
            ],
            "stddev_samp": [
                1054
            ],
            "sum": [
                1058
            ],
            "var_pop": [
                1062
            ],
            "var_samp": [
                1064
            ],
            "variance": [
                1066
            ],
            "__typename": [
                5
            ]
        },
        "twaps_arr_rel_insert_input": {
            "data": [
                1038
            ],
            "on_conflict": [
                1044
            ],
            "__typename": [
                5
            ]
        },
        "twaps_avg_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
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
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "twaps_bool_exp": {
            "_and": [
                1035
            ],
            "_not": [
                1035
            ],
            "_or": [
                1035
            ],
            "created_at": [
                785
            ],
            "last_observation": [
                339
            ],
            "last_price": [
                339
            ],
            "market": [
                305
            ],
            "market_acct": [
                6
            ],
            "observation_agg": [
                339
            ],
            "proposal": [
                634
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
            "last_observation": [
                338
            ],
            "last_price": [
                338
            ],
            "observation_agg": [
                338
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
            "created_at": [
                784
            ],
            "last_observation": [
                338
            ],
            "last_price": [
                338
            ],
            "market": [
                314
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                338
            ],
            "proposal": [
                643
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
            "created_at": [
                784
            ],
            "last_observation": [
                338
            ],
            "last_price": [
                338
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                338
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
            "created_at": [
                340
            ],
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "market_acct": [
                340
            ],
            "observation_agg": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "twaps_min_fields": {
            "created_at": [
                784
            ],
            "last_observation": [
                338
            ],
            "last_price": [
                338
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                338
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
            "created_at": [
                340
            ],
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "market_acct": [
                340
            ],
            "observation_agg": [
                340
            ],
            "proposal_acct": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
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
                1026
            ],
            "__typename": [
                5
            ]
        },
        "twaps_on_conflict": {
            "constraint": [
                1036
            ],
            "update_columns": [
                1059
            ],
            "where": [
                1035
            ],
            "__typename": [
                5
            ]
        },
        "twaps_order_by": {
            "created_at": [
                340
            ],
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "market": [
                316
            ],
            "market_acct": [
                340
            ],
            "observation_agg": [
                340
            ],
            "proposal": [
                645
            ],
            "proposal_acct": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
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
            "created_at": [
                784
            ],
            "last_observation": [
                338
            ],
            "last_price": [
                338
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                338
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
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
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
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_pop_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
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
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stddev_samp_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
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
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stream_cursor_input": {
            "initial_value": [
                1056
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stream_cursor_value_input": {
            "created_at": [
                784
            ],
            "last_observation": [
                338
            ],
            "last_price": [
                338
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                338
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
            "last_observation": [
                338
            ],
            "last_price": [
                338
            ],
            "observation_agg": [
                338
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
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "twaps_update_column": {},
        "twaps_updates": {
            "_inc": [
                1037
            ],
            "_set": [
                1048
            ],
            "where": [
                1035
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_pop_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
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
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "twaps_var_samp_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
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
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "twaps_variance_fields": {
            "last_observation": [
                2
            ],
            "last_price": [
                2
            ],
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
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
            ],
            "token_amount": [
                340
            ],
            "updated_slot": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "users": {
            "created_at": [
                784
            ],
            "sessions": [
                716,
                {
                    "distinct_on": [
                        734,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        732,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        723
                    ]
                }
            ],
            "sessions_aggregate": [
                717,
                {
                    "distinct_on": [
                        734,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        732,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        723
                    ]
                }
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
                1069
            ],
            "nodes": [
                1067
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
                        1080,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1073
            ],
            "min": [
                1074
            ],
            "__typename": [
                5
            ]
        },
        "users_bool_exp": {
            "_and": [
                1070
            ],
            "_not": [
                1070
            ],
            "_or": [
                1070
            ],
            "created_at": [
                785
            ],
            "sessions": [
                723
            ],
            "sessions_aggregate": [
                718
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
                784
            ],
            "sessions": [
                722
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
                784
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
                784
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
                1067
            ],
            "__typename": [
                5
            ]
        },
        "users_obj_rel_insert_input": {
            "data": [
                1072
            ],
            "on_conflict": [
                1077
            ],
            "__typename": [
                5
            ]
        },
        "users_on_conflict": {
            "constraint": [
                1071
            ],
            "update_columns": [
                1084
            ],
            "where": [
                1070
            ],
            "__typename": [
                5
            ]
        },
        "users_order_by": {
            "created_at": [
                340
            ],
            "sessions_aggregate": [
                721
            ],
            "user_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "users_pk_columns_input": {
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "users_select_column": {},
        "users_set_input": {
            "created_at": [
                784
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
                1083
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
                784
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
                1081
            ],
            "where": [
                1070
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                1086
            ],
            "_gt": [
                1086
            ],
            "_gte": [
                1086
            ],
            "_in": [
                1086
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                1086
            ],
            "_lte": [
                1086
            ],
            "_neq": [
                1086
            ],
            "_nin": [
                1086
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
                        784,
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
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "dao_details_aggregate": [
                119,
                {
                    "distinct_on": [
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        123
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
                151,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "daos_aggregate": [
                152,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "daos_by_pk": [
                151,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexer_account_dependencies": [
                195,
                {
                    "distinct_on": [
                        213,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        211,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                196,
                {
                    "distinct_on": [
                        213,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        211,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                195,
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
                219,
                {
                    "distinct_on": [
                        234,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        232,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        223
                    ]
                }
            ],
            "indexers_aggregate": [
                220,
                {
                    "distinct_on": [
                        234,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        232,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        223
                    ]
                }
            ],
            "indexers_by_pk": [
                219,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes": [
                250,
                {
                    "distinct_on": [
                        274,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        272,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        261
                    ]
                }
            ],
            "makes_aggregate": [
                251,
                {
                    "distinct_on": [
                        274,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        272,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        261
                    ]
                }
            ],
            "makes_by_pk": [
                250,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets": [
                296,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "markets_aggregate": [
                297,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "markets_by_pk": [
                296,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders": [
                341,
                {
                    "distinct_on": [
                        365,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        363,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        352
                    ]
                }
            ],
            "orders_aggregate": [
                342,
                {
                    "distinct_on": [
                        365,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        363,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        352
                    ]
                }
            ],
            "orders_by_pk": [
                341,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices": [
                387,
                {
                    "distinct_on": [
                        426,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        424,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "prices_aggregate": [
                388,
                {
                    "distinct_on": [
                        426,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        424,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "prices_by_pk": [
                387,
                {
                    "created_at": [
                        784,
                        "timestamp!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices_chart_data": [
                397,
                {
                    "distinct_on": [
                        405,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        404,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "prices_chart_data_aggregate": [
                398,
                {
                    "distinct_on": [
                        405,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        404,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "program_system": [
                446,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "program_system_aggregate": [
                447,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "program_system_by_pk": [
                446,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "programs": [
                505,
                {
                    "distinct_on": [
                        520,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        518,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        509
                    ]
                }
            ],
            "programs_aggregate": [
                506,
                {
                    "distinct_on": [
                        520,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        518,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        509
                    ]
                }
            ],
            "programs_by_pk": [
                505,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_details": [
                533,
                {
                    "distinct_on": [
                        559,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        556,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        543
                    ]
                }
            ],
            "proposal_details_aggregate": [
                534,
                {
                    "distinct_on": [
                        559,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        556,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        543
                    ]
                }
            ],
            "proposal_details_by_pk": [
                533,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_prices_chart_data": [
                579,
                {
                    "distinct_on": [
                        587,
                        "[proposal_prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        586,
                        "[proposal_prices_chart_data_order_by!]"
                    ],
                    "where": [
                        583
                    ]
                }
            ],
            "proposal_prices_chart_data_aggregate": [
                580,
                {
                    "distinct_on": [
                        587,
                        "[proposal_prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        586,
                        "[proposal_prices_chart_data_order_by!]"
                    ],
                    "where": [
                        583
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                597,
                {
                    "distinct_on": [
                        605,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        604,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        601
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                598,
                {
                    "distinct_on": [
                        605,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        604,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        601
                    ]
                }
            ],
            "proposals": [
                615,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "proposals_aggregate": [
                616,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "proposals_by_pk": [
                615,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "reactions": [
                675,
                {
                    "distinct_on": [
                        696,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        694,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        684
                    ]
                }
            ],
            "reactions_aggregate": [
                676,
                {
                    "distinct_on": [
                        696,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        694,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        684
                    ]
                }
            ],
            "reactions_by_pk": [
                675,
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
            "sessions": [
                716,
                {
                    "distinct_on": [
                        734,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        732,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        723
                    ]
                }
            ],
            "sessions_aggregate": [
                717,
                {
                    "distinct_on": [
                        734,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        732,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        723
                    ]
                }
            ],
            "sessions_by_pk": [
                716,
                {
                    "id": [
                        1086,
                        "uuid!"
                    ]
                }
            ],
            "takes": [
                742,
                {
                    "distinct_on": [
                        764,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        762,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        751
                    ]
                }
            ],
            "takes_aggregate": [
                743,
                {
                    "distinct_on": [
                        764,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        762,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        751
                    ]
                }
            ],
            "takes_by_pk": [
                742,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_acct_balances": [
                786,
                {
                    "distinct_on": [
                        807,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        805,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        795
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                787,
                {
                    "distinct_on": [
                        807,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        805,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        795
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                786,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        784,
                        "timestamp!"
                    ],
                    "mint_acct": [
                        5,
                        "String!"
                    ],
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts": [
                827,
                {
                    "distinct_on": [
                        849,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        847,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        836
                    ]
                }
            ],
            "token_accts_aggregate": [
                828,
                {
                    "distinct_on": [
                        849,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        847,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        836
                    ]
                }
            ],
            "token_accts_by_pk": [
                827,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens": [
                869,
                {
                    "distinct_on": [
                        884,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        882,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        873
                    ]
                }
            ],
            "tokens_aggregate": [
                870,
                {
                    "distinct_on": [
                        884,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        882,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        873
                    ]
                }
            ],
            "tokens_by_pk": [
                869,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                897,
                {
                    "distinct_on": [
                        918,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        916,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        906
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                898,
                {
                    "distinct_on": [
                        918,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        916,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        906
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                897,
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
                938,
                {
                    "distinct_on": [
                        960,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        958,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        947
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                939,
                {
                    "distinct_on": [
                        960,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        958,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        947
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                938,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                980,
                {
                    "distinct_on": [
                        995,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        993,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transactions_aggregate": [
                981,
                {
                    "distinct_on": [
                        995,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        993,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transactions_by_pk": [
                980,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "twap_chart_data": [
                1008,
                {
                    "distinct_on": [
                        1016,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1015,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1009,
                {
                    "distinct_on": [
                        1016,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1015,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "twaps": [
                1026,
                {
                    "distinct_on": [
                        1047,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1045,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twaps_aggregate": [
                1027,
                {
                    "distinct_on": [
                        1047,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1045,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twaps_by_pk": [
                1026,
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
                1067,
                {
                    "distinct_on": [
                        1080,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1078,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1070
                    ]
                }
            ],
            "users_aggregate": [
                1068,
                {
                    "distinct_on": [
                        1080,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1078,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1070
                    ]
                }
            ],
            "users_by_pk": [
                1067,
                {
                    "user_acct": [
                        5,
                        "String!"
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
                        784,
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
                132,
                {
                    "where": [
                        123,
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
                168,
                {
                    "where": [
                        160,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "delete_daos_by_pk": [
                151,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies": [
                209,
                {
                    "where": [
                        202,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies_by_pk": [
                195,
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
                229,
                {
                    "where": [
                        223,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "delete_indexers_by_pk": [
                219,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_makes": [
                269,
                {
                    "where": [
                        261,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "delete_makes_by_pk": [
                250,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_markets": [
                313,
                {
                    "where": [
                        305,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "delete_markets_by_pk": [
                296,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_orders": [
                360,
                {
                    "where": [
                        352,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "delete_orders_by_pk": [
                341,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_prices": [
                422,
                {
                    "where": [
                        396,
                        "prices_bool_exp!"
                    ]
                }
            ],
            "delete_prices_by_pk": [
                387,
                {
                    "created_at": [
                        784,
                        "timestamp!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_program_system": [
                473,
                {
                    "where": [
                        465,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "delete_program_system_by_pk": [
                446,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "delete_programs": [
                515,
                {
                    "where": [
                        509,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "delete_programs_by_pk": [
                505,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_details": [
                554,
                {
                    "where": [
                        543,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_details_by_pk": [
                533,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_proposals": [
                642,
                {
                    "where": [
                        634,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "delete_proposals_by_pk": [
                615,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_reactions": [
                692,
                {
                    "where": [
                        684,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "delete_reactions_by_pk": [
                675,
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
            "delete_sessions": [
                730,
                {
                    "where": [
                        723,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "delete_sessions_by_pk": [
                716,
                {
                    "id": [
                        1086,
                        "uuid!"
                    ]
                }
            ],
            "delete_takes": [
                759,
                {
                    "where": [
                        751,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "delete_takes_by_pk": [
                742,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_acct_balances": [
                803,
                {
                    "where": [
                        795,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "delete_token_acct_balances_by_pk": [
                786,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        784,
                        "timestamp!"
                    ],
                    "mint_acct": [
                        5,
                        "String!"
                    ],
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_accts": [
                844,
                {
                    "where": [
                        836,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "delete_token_accts_by_pk": [
                827,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_tokens": [
                879,
                {
                    "where": [
                        873,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "delete_tokens_by_pk": [
                869,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions": [
                914,
                {
                    "where": [
                        906,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions_by_pk": [
                897,
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
                955,
                {
                    "where": [
                        947,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watchers_by_pk": [
                938,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                990,
                {
                    "where": [
                        984,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                980,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_twaps": [
                1043,
                {
                    "where": [
                        1035,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "delete_twaps_by_pk": [
                1026,
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
                1075,
                {
                    "where": [
                        1070,
                        "users_bool_exp!"
                    ]
                }
            ],
            "delete_users_by_pk": [
                1067,
                {
                    "user_acct": [
                        5,
                        "String!"
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
                132,
                {
                    "objects": [
                        129,
                        "[dao_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        134
                    ]
                }
            ],
            "insert_dao_details_one": [
                118,
                {
                    "object": [
                        129,
                        "dao_details_insert_input!"
                    ],
                    "on_conflict": [
                        134
                    ]
                }
            ],
            "insert_daos": [
                168,
                {
                    "objects": [
                        163,
                        "[daos_insert_input!]!"
                    ],
                    "on_conflict": [
                        170
                    ]
                }
            ],
            "insert_daos_one": [
                151,
                {
                    "object": [
                        163,
                        "daos_insert_input!"
                    ],
                    "on_conflict": [
                        170
                    ]
                }
            ],
            "insert_indexer_account_dependencies": [
                209,
                {
                    "objects": [
                        204,
                        "[indexer_account_dependencies_insert_input!]!"
                    ],
                    "on_conflict": [
                        210
                    ]
                }
            ],
            "insert_indexer_account_dependencies_one": [
                195,
                {
                    "object": [
                        204,
                        "indexer_account_dependencies_insert_input!"
                    ],
                    "on_conflict": [
                        210
                    ]
                }
            ],
            "insert_indexers": [
                229,
                {
                    "objects": [
                        226,
                        "[indexers_insert_input!]!"
                    ],
                    "on_conflict": [
                        231
                    ]
                }
            ],
            "insert_indexers_one": [
                219,
                {
                    "object": [
                        226,
                        "indexers_insert_input!"
                    ],
                    "on_conflict": [
                        231
                    ]
                }
            ],
            "insert_makes": [
                269,
                {
                    "objects": [
                        264,
                        "[makes_insert_input!]!"
                    ],
                    "on_conflict": [
                        271
                    ]
                }
            ],
            "insert_makes_one": [
                250,
                {
                    "object": [
                        264,
                        "makes_insert_input!"
                    ],
                    "on_conflict": [
                        271
                    ]
                }
            ],
            "insert_markets": [
                313,
                {
                    "objects": [
                        308,
                        "[markets_insert_input!]!"
                    ],
                    "on_conflict": [
                        315
                    ]
                }
            ],
            "insert_markets_one": [
                296,
                {
                    "object": [
                        308,
                        "markets_insert_input!"
                    ],
                    "on_conflict": [
                        315
                    ]
                }
            ],
            "insert_orders": [
                360,
                {
                    "objects": [
                        355,
                        "[orders_insert_input!]!"
                    ],
                    "on_conflict": [
                        362
                    ]
                }
            ],
            "insert_orders_one": [
                341,
                {
                    "object": [
                        355,
                        "orders_insert_input!"
                    ],
                    "on_conflict": [
                        362
                    ]
                }
            ],
            "insert_prices": [
                422,
                {
                    "objects": [
                        417,
                        "[prices_insert_input!]!"
                    ],
                    "on_conflict": [
                        423
                    ]
                }
            ],
            "insert_prices_one": [
                387,
                {
                    "object": [
                        417,
                        "prices_insert_input!"
                    ],
                    "on_conflict": [
                        423
                    ]
                }
            ],
            "insert_program_system": [
                473,
                {
                    "objects": [
                        468,
                        "[program_system_insert_input!]!"
                    ],
                    "on_conflict": [
                        474
                    ]
                }
            ],
            "insert_program_system_one": [
                446,
                {
                    "object": [
                        468,
                        "program_system_insert_input!"
                    ],
                    "on_conflict": [
                        474
                    ]
                }
            ],
            "insert_programs": [
                515,
                {
                    "objects": [
                        512,
                        "[programs_insert_input!]!"
                    ],
                    "on_conflict": [
                        517
                    ]
                }
            ],
            "insert_programs_one": [
                505,
                {
                    "object": [
                        512,
                        "programs_insert_input!"
                    ],
                    "on_conflict": [
                        517
                    ]
                }
            ],
            "insert_proposal_details": [
                554,
                {
                    "objects": [
                        549,
                        "[proposal_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        555
                    ]
                }
            ],
            "insert_proposal_details_one": [
                533,
                {
                    "object": [
                        549,
                        "proposal_details_insert_input!"
                    ],
                    "on_conflict": [
                        555
                    ]
                }
            ],
            "insert_proposals": [
                642,
                {
                    "objects": [
                        637,
                        "[proposals_insert_input!]!"
                    ],
                    "on_conflict": [
                        644
                    ]
                }
            ],
            "insert_proposals_one": [
                615,
                {
                    "object": [
                        637,
                        "proposals_insert_input!"
                    ],
                    "on_conflict": [
                        644
                    ]
                }
            ],
            "insert_reactions": [
                692,
                {
                    "objects": [
                        687,
                        "[reactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        693
                    ]
                }
            ],
            "insert_reactions_one": [
                675,
                {
                    "object": [
                        687,
                        "reactions_insert_input!"
                    ],
                    "on_conflict": [
                        693
                    ]
                }
            ],
            "insert_sessions": [
                730,
                {
                    "objects": [
                        725,
                        "[sessions_insert_input!]!"
                    ],
                    "on_conflict": [
                        731
                    ]
                }
            ],
            "insert_sessions_one": [
                716,
                {
                    "object": [
                        725,
                        "sessions_insert_input!"
                    ],
                    "on_conflict": [
                        731
                    ]
                }
            ],
            "insert_takes": [
                759,
                {
                    "objects": [
                        754,
                        "[takes_insert_input!]!"
                    ],
                    "on_conflict": [
                        761
                    ]
                }
            ],
            "insert_takes_one": [
                742,
                {
                    "object": [
                        754,
                        "takes_insert_input!"
                    ],
                    "on_conflict": [
                        761
                    ]
                }
            ],
            "insert_token_acct_balances": [
                803,
                {
                    "objects": [
                        798,
                        "[token_acct_balances_insert_input!]!"
                    ],
                    "on_conflict": [
                        804
                    ]
                }
            ],
            "insert_token_acct_balances_one": [
                786,
                {
                    "object": [
                        798,
                        "token_acct_balances_insert_input!"
                    ],
                    "on_conflict": [
                        804
                    ]
                }
            ],
            "insert_token_accts": [
                844,
                {
                    "objects": [
                        839,
                        "[token_accts_insert_input!]!"
                    ],
                    "on_conflict": [
                        846
                    ]
                }
            ],
            "insert_token_accts_one": [
                827,
                {
                    "object": [
                        839,
                        "token_accts_insert_input!"
                    ],
                    "on_conflict": [
                        846
                    ]
                }
            ],
            "insert_tokens": [
                879,
                {
                    "objects": [
                        876,
                        "[tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        881
                    ]
                }
            ],
            "insert_tokens_one": [
                869,
                {
                    "object": [
                        876,
                        "tokens_insert_input!"
                    ],
                    "on_conflict": [
                        881
                    ]
                }
            ],
            "insert_transaction_watcher_transactions": [
                914,
                {
                    "objects": [
                        909,
                        "[transaction_watcher_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        915
                    ]
                }
            ],
            "insert_transaction_watcher_transactions_one": [
                897,
                {
                    "object": [
                        909,
                        "transaction_watcher_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        915
                    ]
                }
            ],
            "insert_transaction_watchers": [
                955,
                {
                    "objects": [
                        950,
                        "[transaction_watchers_insert_input!]!"
                    ],
                    "on_conflict": [
                        957
                    ]
                }
            ],
            "insert_transaction_watchers_one": [
                938,
                {
                    "object": [
                        950,
                        "transaction_watchers_insert_input!"
                    ],
                    "on_conflict": [
                        957
                    ]
                }
            ],
            "insert_transactions": [
                990,
                {
                    "objects": [
                        987,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        992
                    ]
                }
            ],
            "insert_transactions_one": [
                980,
                {
                    "object": [
                        987,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        992
                    ]
                }
            ],
            "insert_twaps": [
                1043,
                {
                    "objects": [
                        1038,
                        "[twaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        1044
                    ]
                }
            ],
            "insert_twaps_one": [
                1026,
                {
                    "object": [
                        1038,
                        "twaps_insert_input!"
                    ],
                    "on_conflict": [
                        1044
                    ]
                }
            ],
            "insert_users": [
                1075,
                {
                    "objects": [
                        1072,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        1077
                    ]
                }
            ],
            "insert_users_one": [
                1067,
                {
                    "object": [
                        1072,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        1077
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
                132,
                {
                    "_append": [
                        121
                    ],
                    "_delete_at_path": [
                        125
                    ],
                    "_delete_elem": [
                        126
                    ],
                    "_delete_key": [
                        127
                    ],
                    "_inc": [
                        128
                    ],
                    "_prepend": [
                        137
                    ],
                    "_set": [
                        139
                    ],
                    "where": [
                        123,
                        "dao_details_bool_exp!"
                    ]
                }
            ],
            "update_dao_details_by_pk": [
                118,
                {
                    "_append": [
                        121
                    ],
                    "_delete_at_path": [
                        125
                    ],
                    "_delete_elem": [
                        126
                    ],
                    "_delete_key": [
                        127
                    ],
                    "_inc": [
                        128
                    ],
                    "_prepend": [
                        137
                    ],
                    "_set": [
                        139
                    ],
                    "pk_columns": [
                        136,
                        "dao_details_pk_columns_input!"
                    ]
                }
            ],
            "update_dao_details_many": [
                132,
                {
                    "updates": [
                        147,
                        "[dao_details_updates!]!"
                    ]
                }
            ],
            "update_daos": [
                168,
                {
                    "_inc": [
                        162
                    ],
                    "_set": [
                        174
                    ],
                    "where": [
                        160,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "update_daos_by_pk": [
                151,
                {
                    "_inc": [
                        162
                    ],
                    "_set": [
                        174
                    ],
                    "pk_columns": [
                        172,
                        "daos_pk_columns_input!"
                    ]
                }
            ],
            "update_daos_many": [
                168,
                {
                    "updates": [
                        186,
                        "[daos_updates!]!"
                    ]
                }
            ],
            "update_indexer_account_dependencies": [
                209,
                {
                    "_set": [
                        214
                    ],
                    "where": [
                        202,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_by_pk": [
                195,
                {
                    "_set": [
                        214
                    ],
                    "pk_columns": [
                        212,
                        "indexer_account_dependencies_pk_columns_input!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_many": [
                209,
                {
                    "updates": [
                        218,
                        "[indexer_account_dependencies_updates!]!"
                    ]
                }
            ],
            "update_indexers": [
                229,
                {
                    "_inc": [
                        225
                    ],
                    "_set": [
                        235
                    ],
                    "where": [
                        223,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "update_indexers_by_pk": [
                219,
                {
                    "_inc": [
                        225
                    ],
                    "_set": [
                        235
                    ],
                    "pk_columns": [
                        233,
                        "indexers_pk_columns_input!"
                    ]
                }
            ],
            "update_indexers_many": [
                229,
                {
                    "updates": [
                        243,
                        "[indexers_updates!]!"
                    ]
                }
            ],
            "update_makes": [
                269,
                {
                    "_inc": [
                        263
                    ],
                    "_set": [
                        277
                    ],
                    "where": [
                        261,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "update_makes_by_pk": [
                250,
                {
                    "_inc": [
                        263
                    ],
                    "_set": [
                        277
                    ],
                    "pk_columns": [
                        273,
                        "makes_pk_columns_input!"
                    ]
                }
            ],
            "update_makes_many": [
                269,
                {
                    "updates": [
                        289,
                        "[makes_updates!]!"
                    ]
                }
            ],
            "update_markets": [
                313,
                {
                    "_inc": [
                        307
                    ],
                    "_set": [
                        319
                    ],
                    "where": [
                        305,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "update_markets_by_pk": [
                296,
                {
                    "_inc": [
                        307
                    ],
                    "_set": [
                        319
                    ],
                    "pk_columns": [
                        317,
                        "markets_pk_columns_input!"
                    ]
                }
            ],
            "update_markets_many": [
                313,
                {
                    "updates": [
                        331,
                        "[markets_updates!]!"
                    ]
                }
            ],
            "update_orders": [
                360,
                {
                    "_inc": [
                        354
                    ],
                    "_set": [
                        368
                    ],
                    "where": [
                        352,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "update_orders_by_pk": [
                341,
                {
                    "_inc": [
                        354
                    ],
                    "_set": [
                        368
                    ],
                    "pk_columns": [
                        364,
                        "orders_pk_columns_input!"
                    ]
                }
            ],
            "update_orders_many": [
                360,
                {
                    "updates": [
                        380,
                        "[orders_updates!]!"
                    ]
                }
            ],
            "update_prices": [
                422,
                {
                    "_inc": [
                        416
                    ],
                    "_set": [
                        427
                    ],
                    "where": [
                        396,
                        "prices_bool_exp!"
                    ]
                }
            ],
            "update_prices_by_pk": [
                387,
                {
                    "_inc": [
                        416
                    ],
                    "_set": [
                        427
                    ],
                    "pk_columns": [
                        425,
                        "prices_pk_columns_input!"
                    ]
                }
            ],
            "update_prices_many": [
                422,
                {
                    "updates": [
                        439,
                        "[prices_updates!]!"
                    ]
                }
            ],
            "update_program_system": [
                473,
                {
                    "_inc": [
                        467
                    ],
                    "_set": [
                        486
                    ],
                    "where": [
                        465,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "update_program_system_by_pk": [
                446,
                {
                    "_inc": [
                        467
                    ],
                    "_set": [
                        486
                    ],
                    "pk_columns": [
                        476,
                        "program_system_pk_columns_input!"
                    ]
                }
            ],
            "update_program_system_many": [
                473,
                {
                    "updates": [
                        498,
                        "[program_system_updates!]!"
                    ]
                }
            ],
            "update_programs": [
                515,
                {
                    "_inc": [
                        511
                    ],
                    "_set": [
                        521
                    ],
                    "where": [
                        509,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "update_programs_by_pk": [
                505,
                {
                    "_inc": [
                        511
                    ],
                    "_set": [
                        521
                    ],
                    "pk_columns": [
                        519,
                        "programs_pk_columns_input!"
                    ]
                }
            ],
            "update_programs_many": [
                515,
                {
                    "updates": [
                        529,
                        "[programs_updates!]!"
                    ]
                }
            ],
            "update_proposal_details": [
                554,
                {
                    "_append": [
                        539
                    ],
                    "_delete_at_path": [
                        545
                    ],
                    "_delete_elem": [
                        546
                    ],
                    "_delete_key": [
                        547
                    ],
                    "_inc": [
                        548
                    ],
                    "_prepend": [
                        558
                    ],
                    "_set": [
                        560
                    ],
                    "where": [
                        543,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "update_proposal_details_by_pk": [
                533,
                {
                    "_append": [
                        539
                    ],
                    "_delete_at_path": [
                        545
                    ],
                    "_delete_elem": [
                        546
                    ],
                    "_delete_key": [
                        547
                    ],
                    "_inc": [
                        548
                    ],
                    "_prepend": [
                        558
                    ],
                    "_set": [
                        560
                    ],
                    "pk_columns": [
                        557,
                        "proposal_details_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_details_many": [
                554,
                {
                    "updates": [
                        572,
                        "[proposal_details_updates!]!"
                    ]
                }
            ],
            "update_proposals": [
                642,
                {
                    "_inc": [
                        636
                    ],
                    "_set": [
                        656
                    ],
                    "where": [
                        634,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "update_proposals_by_pk": [
                615,
                {
                    "_inc": [
                        636
                    ],
                    "_set": [
                        656
                    ],
                    "pk_columns": [
                        646,
                        "proposals_pk_columns_input!"
                    ]
                }
            ],
            "update_proposals_many": [
                642,
                {
                    "updates": [
                        668,
                        "[proposals_updates!]!"
                    ]
                }
            ],
            "update_reactions": [
                692,
                {
                    "_inc": [
                        686
                    ],
                    "_set": [
                        697
                    ],
                    "where": [
                        684,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "update_reactions_by_pk": [
                675,
                {
                    "_inc": [
                        686
                    ],
                    "_set": [
                        697
                    ],
                    "pk_columns": [
                        695,
                        "reactions_pk_columns_input!"
                    ]
                }
            ],
            "update_reactions_many": [
                692,
                {
                    "updates": [
                        709,
                        "[reactions_updates!]!"
                    ]
                }
            ],
            "update_sessions": [
                730,
                {
                    "_set": [
                        735
                    ],
                    "where": [
                        723,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "update_sessions_by_pk": [
                716,
                {
                    "_set": [
                        735
                    ],
                    "pk_columns": [
                        733,
                        "sessions_pk_columns_input!"
                    ]
                }
            ],
            "update_sessions_many": [
                730,
                {
                    "updates": [
                        739,
                        "[sessions_updates!]!"
                    ]
                }
            ],
            "update_takes": [
                759,
                {
                    "_inc": [
                        753
                    ],
                    "_set": [
                        765
                    ],
                    "where": [
                        751,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "update_takes_by_pk": [
                742,
                {
                    "_inc": [
                        753
                    ],
                    "_set": [
                        765
                    ],
                    "pk_columns": [
                        763,
                        "takes_pk_columns_input!"
                    ]
                }
            ],
            "update_takes_many": [
                759,
                {
                    "updates": [
                        777,
                        "[takes_updates!]!"
                    ]
                }
            ],
            "update_token_acct_balances": [
                803,
                {
                    "_inc": [
                        797
                    ],
                    "_set": [
                        808
                    ],
                    "where": [
                        795,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "update_token_acct_balances_by_pk": [
                786,
                {
                    "_inc": [
                        797
                    ],
                    "_set": [
                        808
                    ],
                    "pk_columns": [
                        806,
                        "token_acct_balances_pk_columns_input!"
                    ]
                }
            ],
            "update_token_acct_balances_many": [
                803,
                {
                    "updates": [
                        820,
                        "[token_acct_balances_updates!]!"
                    ]
                }
            ],
            "update_token_accts": [
                844,
                {
                    "_inc": [
                        838
                    ],
                    "_set": [
                        850
                    ],
                    "where": [
                        836,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "update_token_accts_by_pk": [
                827,
                {
                    "_inc": [
                        838
                    ],
                    "_set": [
                        850
                    ],
                    "pk_columns": [
                        848,
                        "token_accts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_accts_many": [
                844,
                {
                    "updates": [
                        862,
                        "[token_accts_updates!]!"
                    ]
                }
            ],
            "update_tokens": [
                879,
                {
                    "_inc": [
                        875
                    ],
                    "_set": [
                        885
                    ],
                    "where": [
                        873,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "update_tokens_by_pk": [
                869,
                {
                    "_inc": [
                        875
                    ],
                    "_set": [
                        885
                    ],
                    "pk_columns": [
                        883,
                        "tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_tokens_many": [
                879,
                {
                    "updates": [
                        893,
                        "[tokens_updates!]!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions": [
                914,
                {
                    "_inc": [
                        908
                    ],
                    "_set": [
                        919
                    ],
                    "where": [
                        906,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_by_pk": [
                897,
                {
                    "_inc": [
                        908
                    ],
                    "_set": [
                        919
                    ],
                    "pk_columns": [
                        917,
                        "transaction_watcher_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_many": [
                914,
                {
                    "updates": [
                        931,
                        "[transaction_watcher_transactions_updates!]!"
                    ]
                }
            ],
            "update_transaction_watchers": [
                955,
                {
                    "_inc": [
                        949
                    ],
                    "_set": [
                        961
                    ],
                    "where": [
                        947,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watchers_by_pk": [
                938,
                {
                    "_inc": [
                        949
                    ],
                    "_set": [
                        961
                    ],
                    "pk_columns": [
                        959,
                        "transaction_watchers_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watchers_many": [
                955,
                {
                    "updates": [
                        973,
                        "[transaction_watchers_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                990,
                {
                    "_inc": [
                        986
                    ],
                    "_set": [
                        996
                    ],
                    "where": [
                        984,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                980,
                {
                    "_inc": [
                        986
                    ],
                    "_set": [
                        996
                    ],
                    "pk_columns": [
                        994,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                990,
                {
                    "updates": [
                        1004,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_twaps": [
                1043,
                {
                    "_inc": [
                        1037
                    ],
                    "_set": [
                        1048
                    ],
                    "where": [
                        1035,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "update_twaps_by_pk": [
                1026,
                {
                    "_inc": [
                        1037
                    ],
                    "_set": [
                        1048
                    ],
                    "pk_columns": [
                        1046,
                        "twaps_pk_columns_input!"
                    ]
                }
            ],
            "update_twaps_many": [
                1043,
                {
                    "updates": [
                        1060,
                        "[twaps_updates!]!"
                    ]
                }
            ],
            "update_users": [
                1075,
                {
                    "_set": [
                        1081
                    ],
                    "where": [
                        1070,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_by_pk": [
                1067,
                {
                    "_set": [
                        1081
                    ],
                    "pk_columns": [
                        1079,
                        "users_pk_columns_input!"
                    ]
                }
            ],
            "update_users_many": [
                1075,
                {
                    "updates": [
                        1085,
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
                        784,
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
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "dao_details_aggregate": [
                119,
                {
                    "distinct_on": [
                        138,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        135,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        123
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
                        143,
                        "[dao_details_stream_cursor_input]!"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "daos": [
                151,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "daos_aggregate": [
                152,
                {
                    "distinct_on": [
                        173,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        171,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "daos_by_pk": [
                151,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "daos_stream": [
                151,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        181,
                        "[daos_stream_cursor_input]!"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "indexer_account_dependencies": [
                195,
                {
                    "distinct_on": [
                        213,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        211,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                196,
                {
                    "distinct_on": [
                        213,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        211,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                195,
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
                195,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        215,
                        "[indexer_account_dependencies_stream_cursor_input]!"
                    ],
                    "where": [
                        202
                    ]
                }
            ],
            "indexers": [
                219,
                {
                    "distinct_on": [
                        234,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        232,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        223
                    ]
                }
            ],
            "indexers_aggregate": [
                220,
                {
                    "distinct_on": [
                        234,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        232,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        223
                    ]
                }
            ],
            "indexers_by_pk": [
                219,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexers_stream": [
                219,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        239,
                        "[indexers_stream_cursor_input]!"
                    ],
                    "where": [
                        223
                    ]
                }
            ],
            "makes": [
                250,
                {
                    "distinct_on": [
                        274,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        272,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        261
                    ]
                }
            ],
            "makes_aggregate": [
                251,
                {
                    "distinct_on": [
                        274,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        272,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        261
                    ]
                }
            ],
            "makes_by_pk": [
                250,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes_stream": [
                250,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        284,
                        "[makes_stream_cursor_input]!"
                    ],
                    "where": [
                        261
                    ]
                }
            ],
            "markets": [
                296,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "markets_aggregate": [
                297,
                {
                    "distinct_on": [
                        318,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        316,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "markets_by_pk": [
                296,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets_stream": [
                296,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        326,
                        "[markets_stream_cursor_input]!"
                    ],
                    "where": [
                        305
                    ]
                }
            ],
            "orders": [
                341,
                {
                    "distinct_on": [
                        365,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        363,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        352
                    ]
                }
            ],
            "orders_aggregate": [
                342,
                {
                    "distinct_on": [
                        365,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        363,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        352
                    ]
                }
            ],
            "orders_by_pk": [
                341,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders_stream": [
                341,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        375,
                        "[orders_stream_cursor_input]!"
                    ],
                    "where": [
                        352
                    ]
                }
            ],
            "prices": [
                387,
                {
                    "distinct_on": [
                        426,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        424,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "prices_aggregate": [
                388,
                {
                    "distinct_on": [
                        426,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        424,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "prices_by_pk": [
                387,
                {
                    "created_at": [
                        784,
                        "timestamp!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices_chart_data": [
                397,
                {
                    "distinct_on": [
                        405,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        404,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "prices_chart_data_aggregate": [
                398,
                {
                    "distinct_on": [
                        405,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        404,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "prices_chart_data_stream": [
                397,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        409,
                        "[prices_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "prices_stream": [
                387,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        434,
                        "[prices_stream_cursor_input]!"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "program_system": [
                446,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "program_system_aggregate": [
                447,
                {
                    "distinct_on": [
                        477,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        475,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "program_system_by_pk": [
                446,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "program_system_stream": [
                446,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        493,
                        "[program_system_stream_cursor_input]!"
                    ],
                    "where": [
                        465
                    ]
                }
            ],
            "programs": [
                505,
                {
                    "distinct_on": [
                        520,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        518,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        509
                    ]
                }
            ],
            "programs_aggregate": [
                506,
                {
                    "distinct_on": [
                        520,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        518,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        509
                    ]
                }
            ],
            "programs_by_pk": [
                505,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs_stream": [
                505,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        525,
                        "[programs_stream_cursor_input]!"
                    ],
                    "where": [
                        509
                    ]
                }
            ],
            "proposal_details": [
                533,
                {
                    "distinct_on": [
                        559,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        556,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        543
                    ]
                }
            ],
            "proposal_details_aggregate": [
                534,
                {
                    "distinct_on": [
                        559,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        556,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        543
                    ]
                }
            ],
            "proposal_details_by_pk": [
                533,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_details_stream": [
                533,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        567,
                        "[proposal_details_stream_cursor_input]!"
                    ],
                    "where": [
                        543
                    ]
                }
            ],
            "proposal_prices_chart_data": [
                579,
                {
                    "distinct_on": [
                        587,
                        "[proposal_prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        586,
                        "[proposal_prices_chart_data_order_by!]"
                    ],
                    "where": [
                        583
                    ]
                }
            ],
            "proposal_prices_chart_data_aggregate": [
                580,
                {
                    "distinct_on": [
                        587,
                        "[proposal_prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        586,
                        "[proposal_prices_chart_data_order_by!]"
                    ],
                    "where": [
                        583
                    ]
                }
            ],
            "proposal_prices_chart_data_stream": [
                579,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        591,
                        "[proposal_prices_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        583
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                597,
                {
                    "distinct_on": [
                        605,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        604,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        601
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                598,
                {
                    "distinct_on": [
                        605,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        604,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        601
                    ]
                }
            ],
            "proposal_total_trade_volume_stream": [
                597,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        609,
                        "[proposal_total_trade_volume_stream_cursor_input]!"
                    ],
                    "where": [
                        601
                    ]
                }
            ],
            "proposals": [
                615,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "proposals_aggregate": [
                616,
                {
                    "distinct_on": [
                        647,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        645,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "proposals_by_pk": [
                615,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposals_stream": [
                615,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        663,
                        "[proposals_stream_cursor_input]!"
                    ],
                    "where": [
                        634
                    ]
                }
            ],
            "reactions": [
                675,
                {
                    "distinct_on": [
                        696,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        694,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        684
                    ]
                }
            ],
            "reactions_aggregate": [
                676,
                {
                    "distinct_on": [
                        696,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        694,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        684
                    ]
                }
            ],
            "reactions_by_pk": [
                675,
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
                675,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        704,
                        "[reactions_stream_cursor_input]!"
                    ],
                    "where": [
                        684
                    ]
                }
            ],
            "sessions": [
                716,
                {
                    "distinct_on": [
                        734,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        732,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        723
                    ]
                }
            ],
            "sessions_aggregate": [
                717,
                {
                    "distinct_on": [
                        734,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        732,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        723
                    ]
                }
            ],
            "sessions_by_pk": [
                716,
                {
                    "id": [
                        1086,
                        "uuid!"
                    ]
                }
            ],
            "sessions_stream": [
                716,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        736,
                        "[sessions_stream_cursor_input]!"
                    ],
                    "where": [
                        723
                    ]
                }
            ],
            "takes": [
                742,
                {
                    "distinct_on": [
                        764,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        762,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        751
                    ]
                }
            ],
            "takes_aggregate": [
                743,
                {
                    "distinct_on": [
                        764,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        762,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        751
                    ]
                }
            ],
            "takes_by_pk": [
                742,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes_stream": [
                742,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        772,
                        "[takes_stream_cursor_input]!"
                    ],
                    "where": [
                        751
                    ]
                }
            ],
            "token_acct_balances": [
                786,
                {
                    "distinct_on": [
                        807,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        805,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        795
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                787,
                {
                    "distinct_on": [
                        807,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        805,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        795
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                786,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        784,
                        "timestamp!"
                    ],
                    "mint_acct": [
                        5,
                        "String!"
                    ],
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_acct_balances_stream": [
                786,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        815,
                        "[token_acct_balances_stream_cursor_input]!"
                    ],
                    "where": [
                        795
                    ]
                }
            ],
            "token_accts": [
                827,
                {
                    "distinct_on": [
                        849,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        847,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        836
                    ]
                }
            ],
            "token_accts_aggregate": [
                828,
                {
                    "distinct_on": [
                        849,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        847,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        836
                    ]
                }
            ],
            "token_accts_by_pk": [
                827,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts_stream": [
                827,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        857,
                        "[token_accts_stream_cursor_input]!"
                    ],
                    "where": [
                        836
                    ]
                }
            ],
            "tokens": [
                869,
                {
                    "distinct_on": [
                        884,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        882,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        873
                    ]
                }
            ],
            "tokens_aggregate": [
                870,
                {
                    "distinct_on": [
                        884,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        882,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        873
                    ]
                }
            ],
            "tokens_by_pk": [
                869,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens_stream": [
                869,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        889,
                        "[tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        873
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                897,
                {
                    "distinct_on": [
                        918,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        916,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        906
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                898,
                {
                    "distinct_on": [
                        918,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        916,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        906
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                897,
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
                897,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        926,
                        "[transaction_watcher_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        906
                    ]
                }
            ],
            "transaction_watchers": [
                938,
                {
                    "distinct_on": [
                        960,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        958,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        947
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                939,
                {
                    "distinct_on": [
                        960,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        958,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        947
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                938,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers_stream": [
                938,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        968,
                        "[transaction_watchers_stream_cursor_input]!"
                    ],
                    "where": [
                        947
                    ]
                }
            ],
            "transactions": [
                980,
                {
                    "distinct_on": [
                        995,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        993,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transactions_aggregate": [
                981,
                {
                    "distinct_on": [
                        995,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        993,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "transactions_by_pk": [
                980,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                980,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1000,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        984
                    ]
                }
            ],
            "twap_chart_data": [
                1008,
                {
                    "distinct_on": [
                        1016,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1015,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1009,
                {
                    "distinct_on": [
                        1016,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1015,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "twap_chart_data_stream": [
                1008,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1020,
                        "[twap_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "twaps": [
                1026,
                {
                    "distinct_on": [
                        1047,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1045,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twaps_aggregate": [
                1027,
                {
                    "distinct_on": [
                        1047,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1045,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twaps_by_pk": [
                1026,
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
                1026,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1055,
                        "[twaps_stream_cursor_input]!"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "users": [
                1067,
                {
                    "distinct_on": [
                        1080,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1078,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1070
                    ]
                }
            ],
            "users_aggregate": [
                1068,
                {
                    "distinct_on": [
                        1080,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1078,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1070
                    ]
                }
            ],
            "users_by_pk": [
                1067,
                {
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "users_stream": [
                1067,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1082,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        1070
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}