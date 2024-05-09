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
        397,
        408,
        420,
        448,
        459,
        460,
        461,
        462,
        463,
        464,
        465,
        466,
        467,
        479,
        492,
        502,
        510,
        526,
        541,
        553,
        581,
        593,
        594,
        595,
        596,
        597,
        598,
        599,
        600,
        601,
        613,
        631,
        642,
        654,
        662,
        674,
        686,
        698,
        706,
        718,
        730,
        742,
        755,
        765,
        773,
        788,
        799,
        811,
        829,
        841,
        853,
        866,
        876,
        884,
        899,
        910,
        922,
        934,
        941,
        945
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
                706
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
                707
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
                706
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
                706
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
                706
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
                706
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
                706
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
                706
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
                706
            ],
            "proposal": [
                561
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                621,
                {
                    "distinct_on": [
                        642,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        640,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "reactions_aggregate": [
                622,
                {
                    "distinct_on": [
                        642,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        640,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        630
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
                707
            ],
            "proposal": [
                580
            ],
            "proposal_acct": [
                6
            ],
            "reactions": [
                630
            ],
            "reactions_aggregate": [
                623
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
                706
            ],
            "proposal": [
                589
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                627
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
                706
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
                706
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
                591
            ],
            "proposal_acct": [
                340
            ],
            "reactions_aggregate": [
                626
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
                706
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
                706
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
            "dao": [
                151
            ],
            "nonce": [
                5
            ],
            "proposals": [
                561,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposalsByQuoteVault": [
                561,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposalsByQuoteVault_aggregate": [
                562,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposals_aggregate": [
                562,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
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
                750
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
            "dao": [
                160
            ],
            "nonce": [
                6
            ],
            "proposals": [
                580
            ],
            "proposalsByQuoteVault": [
                580
            ],
            "proposalsByQuoteVault_aggregate": [
                563
            ],
            "proposals_aggregate": [
                563
            ],
            "settlement_authority": [
                6
            ],
            "status": [
                6
            ],
            "token": [
                754
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
                169
            ],
            "nonce": [
                5
            ],
            "proposals": [
                577
            ],
            "proposalsByQuoteVault": [
                577
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "token": [
                761
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
            "dao": [
                171
            ],
            "nonce": [
                340
            ],
            "proposalsByQuoteVault_aggregate": [
                576
            ],
            "proposals_aggregate": [
                576
            ],
            "settlement_authority": [
                340
            ],
            "status": [
                340
            ],
            "token": [
                763
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
                706
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
                487
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                561,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposals_aggregate": [
                562,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "quote_acct": [
                5
            ],
            "token": [
                750
            ],
            "tokenByBaseAcct": [
                750
            ],
            "tokenByQuoteAcct": [
                750
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                706
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
            "__typename": [
                5
            ]
        },
        "daos_avg_order_by": {
            "dao_id": [
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
            "conditional_vaults": [
                99
            ],
            "conditional_vaults_aggregate": [
                94
            ],
            "created_at": [
                707
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
            "program": [
                491
            ],
            "program_acct": [
                6
            ],
            "proposals": [
                580
            ],
            "proposals_aggregate": [
                563
            ],
            "quote_acct": [
                6
            ],
            "token": [
                754
            ],
            "tokenByBaseAcct": [
                754
            ],
            "tokenByQuoteAcct": [
                754
            ],
            "treasury_acct": [
                6
            ],
            "updated_at": [
                707
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
                706
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
            "program": [
                498
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                577
            ],
            "quote_acct": [
                5
            ],
            "token": [
                761
            ],
            "tokenByBaseAcct": [
                761
            ],
            "tokenByQuoteAcct": [
                761
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                706
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
                706
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
                706
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
            "program_acct": [
                340
            ],
            "quote_acct": [
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
                706
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
                706
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
            "program_acct": [
                340
            ],
            "quote_acct": [
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
            "conditional_vaults_aggregate": [
                97
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
            "program": [
                500
            ],
            "program_acct": [
                340
            ],
            "proposals_aggregate": [
                576
            ],
            "quote_acct": [
                340
            ],
            "token": [
                763
            ],
            "tokenByBaseAcct": [
                763
            ],
            "tokenByQuoteAcct": [
                763
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
                706
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
                706
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
            "__typename": [
                5
            ]
        },
        "daos_stddev_pop_order_by": {
            "dao_id": [
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
            "__typename": [
                5
            ]
        },
        "daos_stddev_samp_order_by": {
            "dao_id": [
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
                706
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
                706
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
            "__typename": [
                5
            ]
        },
        "daos_var_pop_order_by": {
            "dao_id": [
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
            "__typename": [
                5
            ]
        },
        "daos_var_samp_order_by": {
            "dao_id": [
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
            "__typename": [
                5
            ]
        },
        "daos_variance_order_by": {
            "dao_id": [
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
            "transaction": [
                861
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
            "transaction": [
                865
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
            "transaction": [
                872
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
                340
            ],
            "latest_tx_sig_processed": [
                340
            ],
            "name": [
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
            "transaction": [
                874
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
                7
            ],
            "takes": [
                664,
                {
                    "distinct_on": [
                        686,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        684,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        673
                    ]
                }
            ],
            "takes_aggregate": [
                665,
                {
                    "distinct_on": [
                        686,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        684,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        673
                    ]
                }
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                706
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
                8
            ],
            "takes": [
                673
            ],
            "takes_aggregate": [
                666
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                707
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
                7
            ],
            "takes": [
                670
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                706
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
                706
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
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                706
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
                669
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
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                706
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
                7
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                706
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
                662
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                662
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
                        408,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
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
                        408,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "proposal": [
                561
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                662
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                662
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                664,
                {
                    "distinct_on": [
                        686,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        684,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        673
                    ]
                }
            ],
            "takes_aggregate": [
                665,
                {
                    "distinct_on": [
                        686,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        684,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        673
                    ]
                }
            ],
            "token": [
                750
            ],
            "tokenAcctByBidsTokenAcct": [
                708
            ],
            "tokenByQuoteMintAcct": [
                750
            ],
            "token_acct": [
                708
            ],
            "twaps": [
                889,
                {
                    "distinct_on": [
                        910,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        908,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        898
                    ]
                }
            ],
            "twaps_aggregate": [
                890,
                {
                    "distinct_on": [
                        910,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        908,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        898
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
                663
            ],
            "base_mint_acct": [
                6
            ],
            "base_taker_fee": [
                663
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
                580
            ],
            "proposal_acct": [
                6
            ],
            "quote_lot_size": [
                8
            ],
            "quote_maker_fee": [
                663
            ],
            "quote_mint_acct": [
                6
            ],
            "quote_taker_fee": [
                663
            ],
            "quote_tick_size": [
                8
            ],
            "takes": [
                673
            ],
            "takes_aggregate": [
                666
            ],
            "token": [
                754
            ],
            "tokenAcctByBidsTokenAcct": [
                717
            ],
            "tokenByQuoteMintAcct": [
                754
            ],
            "token_acct": [
                717
            ],
            "twaps": [
                898
            ],
            "twaps_aggregate": [
                891
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
                662
            ],
            "base_taker_fee": [
                662
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                662
            ],
            "quote_taker_fee": [
                662
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
                662
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                662
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
                589
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                662
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                662
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                670
            ],
            "token": [
                761
            ],
            "tokenAcctByBidsTokenAcct": [
                726
            ],
            "tokenByQuoteMintAcct": [
                761
            ],
            "token_acct": [
                726
            ],
            "twaps": [
                895
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
                662
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                662
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
                662
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                662
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
                662
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                662
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
                662
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                662
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
                591
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
                669
            ],
            "token": [
                763
            ],
            "tokenAcctByBidsTokenAcct": [
                728
            ],
            "tokenByQuoteMintAcct": [
                763
            ],
            "token_acct": [
                728
            ],
            "twaps_aggregate": [
                894
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
                662
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                662
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
                662
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                662
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
                662
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                662
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
                662
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                662
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
                662
            ],
            "base_taker_fee": [
                662
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                662
            ],
            "quote_taker_fee": [
                662
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
                706
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
                706
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
                664
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                706
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
                707
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
                707
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
                673
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                707
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
                706
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
                706
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
                682
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                706
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
                706
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
                706
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
                706
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
                706
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
                706
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
                706
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
                684
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
                706
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
                706
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
                706
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
                706
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
                706
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
                706
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
                706
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
                408
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
                        408,
                        "[prices_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                400
            ],
            "min": [
                402
            ],
            "stddev": [
                410
            ],
            "stddev_pop": [
                412
            ],
            "stddev_samp": [
                414
            ],
            "sum": [
                418
            ],
            "var_pop": [
                422
            ],
            "var_samp": [
                424
            ],
            "variance": [
                426
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
                401
            ],
            "min": [
                403
            ],
            "stddev": [
                411
            ],
            "stddev_pop": [
                413
            ],
            "stddev_samp": [
                415
            ],
            "sum": [
                419
            ],
            "var_pop": [
                423
            ],
            "var_samp": [
                425
            ],
            "variance": [
                427
            ],
            "__typename": [
                5
            ]
        },
        "prices_arr_rel_insert_input": {
            "data": [
                399
            ],
            "on_conflict": [
                405
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
                707
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
                706
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
                706
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
                706
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
                397
            ],
            "update_columns": [
                420
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
        "prices_select_column": {},
        "prices_set_input": {
            "base_amount": [
                7
            ],
            "created_at": [
                706
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
                417
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
                706
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
                398
            ],
            "_set": [
                409
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
                487
            ],
            "programByConditionalVaultAcct": [
                487
            ],
            "programByMigratorAcct": [
                487
            ],
            "programByPricingModelAcct": [
                487
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
                442
            ],
            "nodes": [
                428
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp": {
            "avg": [
                431
            ],
            "corr": [
                432
            ],
            "count": [
                434
            ],
            "covar_samp": [
                435
            ],
            "max": [
                437
            ],
            "min": [
                438
            ],
            "stddev_samp": [
                439
            ],
            "sum": [
                440
            ],
            "var_samp": [
                441
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_avg": {
            "arguments": [
                460
            ],
            "distinct": [
                0
            ],
            "filter": [
                447
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
                433
            ],
            "distinct": [
                0
            ],
            "filter": [
                447
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
                461
            ],
            "Y": [
                461
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_count": {
            "arguments": [
                459
            ],
            "distinct": [
                0
            ],
            "filter": [
                447
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
                436
            ],
            "distinct": [
                0
            ],
            "filter": [
                447
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
                462
            ],
            "Y": [
                462
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_max": {
            "arguments": [
                463
            ],
            "distinct": [
                0
            ],
            "filter": [
                447
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
                464
            ],
            "distinct": [
                0
            ],
            "filter": [
                447
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
                465
            ],
            "distinct": [
                0
            ],
            "filter": [
                447
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
                466
            ],
            "distinct": [
                0
            ],
            "filter": [
                447
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
                467
            ],
            "distinct": [
                0
            ],
            "filter": [
                447
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
                445
            ],
            "count": [
                3,
                {
                    "columns": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                451
            ],
            "min": [
                453
            ],
            "stddev": [
                469
            ],
            "stddev_pop": [
                471
            ],
            "stddev_samp": [
                473
            ],
            "sum": [
                477
            ],
            "var_pop": [
                481
            ],
            "var_samp": [
                483
            ],
            "variance": [
                485
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_order_by": {
            "avg": [
                446
            ],
            "count": [
                340
            ],
            "max": [
                452
            ],
            "min": [
                454
            ],
            "stddev": [
                470
            ],
            "stddev_pop": [
                472
            ],
            "stddev_samp": [
                474
            ],
            "sum": [
                478
            ],
            "var_pop": [
                482
            ],
            "var_samp": [
                484
            ],
            "variance": [
                486
            ],
            "__typename": [
                5
            ]
        },
        "program_system_arr_rel_insert_input": {
            "data": [
                450
            ],
            "on_conflict": [
                456
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
                447
            ],
            "_not": [
                447
            ],
            "_or": [
                447
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
                491
            ],
            "programByConditionalVaultAcct": [
                491
            ],
            "programByMigratorAcct": [
                491
            ],
            "programByPricingModelAcct": [
                491
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
                498
            ],
            "programByConditionalVaultAcct": [
                498
            ],
            "programByMigratorAcct": [
                498
            ],
            "programByPricingModelAcct": [
                498
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
                428
            ],
            "__typename": [
                5
            ]
        },
        "program_system_on_conflict": {
            "constraint": [
                448
            ],
            "update_columns": [
                479
            ],
            "where": [
                447
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
                500
            ],
            "programByConditionalVaultAcct": [
                500
            ],
            "programByMigratorAcct": [
                500
            ],
            "programByPricingModelAcct": [
                500
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
                476
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
                449
            ],
            "_set": [
                468
            ],
            "where": [
                447
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
                706
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
                706
            ],
            "programSystemsByConditionalVaultAcct": [
                428,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                429,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "programSystemsByMigratorAcct": [
                428,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "programSystemsByMigratorAcct_aggregate": [
                429,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "programSystemsByPricingModelAcct": [
                428,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                429,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
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
                428,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "program_systems_aggregate": [
                429,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
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
                489
            ],
            "nodes": [
                487
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate_fields": {
            "avg": [
                490
            ],
            "count": [
                3,
                {
                    "columns": [
                        502,
                        "[programs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                495
            ],
            "min": [
                496
            ],
            "stddev": [
                504
            ],
            "stddev_pop": [
                505
            ],
            "stddev_samp": [
                506
            ],
            "sum": [
                509
            ],
            "var_pop": [
                512
            ],
            "var_samp": [
                513
            ],
            "variance": [
                514
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
                491
            ],
            "_not": [
                491
            ],
            "_or": [
                491
            ],
            "created_at": [
                707
            ],
            "daos": [
                160
            ],
            "daos_aggregate": [
                153
            ],
            "deployed_at": [
                707
            ],
            "programSystemsByConditionalVaultAcct": [
                447
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                430
            ],
            "programSystemsByMigratorAcct": [
                447
            ],
            "programSystemsByMigratorAcct_aggregate": [
                430
            ],
            "programSystemsByPricingModelAcct": [
                447
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                430
            ],
            "program_acct": [
                6
            ],
            "program_name": [
                6
            ],
            "program_systems": [
                447
            ],
            "program_systems_aggregate": [
                430
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
                706
            ],
            "daos": [
                157
            ],
            "deployed_at": [
                706
            ],
            "programSystemsByConditionalVaultAcct": [
                444
            ],
            "programSystemsByMigratorAcct": [
                444
            ],
            "programSystemsByPricingModelAcct": [
                444
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                444
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
                706
            ],
            "deployed_at": [
                706
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
                706
            ],
            "deployed_at": [
                706
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
                487
            ],
            "__typename": [
                5
            ]
        },
        "programs_obj_rel_insert_input": {
            "data": [
                494
            ],
            "on_conflict": [
                499
            ],
            "__typename": [
                5
            ]
        },
        "programs_on_conflict": {
            "constraint": [
                492
            ],
            "update_columns": [
                510
            ],
            "where": [
                491
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
                443
            ],
            "programSystemsByMigratorAcct_aggregate": [
                443
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                443
            ],
            "program_acct": [
                340
            ],
            "program_name": [
                340
            ],
            "program_systems_aggregate": [
                443
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
                706
            ],
            "deployed_at": [
                706
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
                508
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
                706
            ],
            "deployed_at": [
                706
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
                493
            ],
            "_set": [
                503
            ],
            "where": [
                491
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
                561
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
                519
            ],
            "nodes": [
                515
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp": {
            "count": [
                518
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp_count": {
            "arguments": [
                541
            ],
            "distinct": [
                0
            ],
            "filter": [
                525
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
                523
            ],
            "count": [
                3,
                {
                    "columns": [
                        541,
                        "[proposal_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                532
            ],
            "min": [
                534
            ],
            "stddev": [
                543
            ],
            "stddev_pop": [
                545
            ],
            "stddev_samp": [
                547
            ],
            "sum": [
                551
            ],
            "var_pop": [
                555
            ],
            "var_samp": [
                557
            ],
            "variance": [
                559
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_order_by": {
            "avg": [
                524
            ],
            "count": [
                340
            ],
            "max": [
                533
            ],
            "min": [
                535
            ],
            "stddev": [
                544
            ],
            "stddev_pop": [
                546
            ],
            "stddev_samp": [
                548
            ],
            "sum": [
                552
            ],
            "var_pop": [
                556
            ],
            "var_samp": [
                558
            ],
            "variance": [
                560
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
                531
            ],
            "on_conflict": [
                537
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
                525
            ],
            "_not": [
                525
            ],
            "_or": [
                525
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
                580
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
                589
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
                515
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_on_conflict": {
            "constraint": [
                526
            ],
            "update_columns": [
                553
            ],
            "where": [
                525
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
                591
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
                550
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
                521
            ],
            "_delete_at_path": [
                527
            ],
            "_delete_elem": [
                528
            ],
            "_delete_key": [
                529
            ],
            "_inc": [
                530
            ],
            "_prepend": [
                540
            ],
            "_set": [
                542
            ],
            "where": [
                525
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
            "conditionalVaultByQuoteVault": [
                92
            ],
            "conditional_vault": [
                92
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
                515,
                {
                    "distinct_on": [
                        541,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        538,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        525
                    ]
                }
            ],
            "proposal_details_aggregate": [
                516,
                {
                    "distinct_on": [
                        541,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        538,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        525
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
                621,
                {
                    "distinct_on": [
                        642,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        640,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "reactions_aggregate": [
                622,
                {
                    "distinct_on": [
                        642,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        640,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "status": [
                5
            ],
            "twaps": [
                889,
                {
                    "distinct_on": [
                        910,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        908,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        898
                    ]
                }
            ],
            "twaps_aggregate": [
                890,
                {
                    "distinct_on": [
                        910,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        908,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        898
                    ]
                }
            ],
            "updated_at": [
                706
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate": {
            "aggregate": [
                575
            ],
            "nodes": [
                561
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp": {
            "avg": [
                564
            ],
            "corr": [
                565
            ],
            "count": [
                567
            ],
            "covar_samp": [
                568
            ],
            "max": [
                570
            ],
            "min": [
                571
            ],
            "stddev_samp": [
                572
            ],
            "sum": [
                573
            ],
            "var_samp": [
                574
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_avg": {
            "arguments": [
                594
            ],
            "distinct": [
                0
            ],
            "filter": [
                580
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
                566
            ],
            "distinct": [
                0
            ],
            "filter": [
                580
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
                595
            ],
            "Y": [
                595
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_count": {
            "arguments": [
                593
            ],
            "distinct": [
                0
            ],
            "filter": [
                580
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
                569
            ],
            "distinct": [
                0
            ],
            "filter": [
                580
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
                596
            ],
            "Y": [
                596
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_max": {
            "arguments": [
                597
            ],
            "distinct": [
                0
            ],
            "filter": [
                580
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
                598
            ],
            "distinct": [
                0
            ],
            "filter": [
                580
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
                599
            ],
            "distinct": [
                0
            ],
            "filter": [
                580
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
                600
            ],
            "distinct": [
                0
            ],
            "filter": [
                580
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
                601
            ],
            "distinct": [
                0
            ],
            "filter": [
                580
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
                578
            ],
            "count": [
                3,
                {
                    "columns": [
                        593,
                        "[proposals_select_column!]"
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
                586
            ],
            "stddev": [
                603
            ],
            "stddev_pop": [
                605
            ],
            "stddev_samp": [
                607
            ],
            "sum": [
                611
            ],
            "var_pop": [
                615
            ],
            "var_samp": [
                617
            ],
            "variance": [
                619
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_order_by": {
            "avg": [
                579
            ],
            "count": [
                340
            ],
            "max": [
                585
            ],
            "min": [
                587
            ],
            "stddev": [
                604
            ],
            "stddev_pop": [
                606
            ],
            "stddev_samp": [
                608
            ],
            "sum": [
                612
            ],
            "var_pop": [
                616
            ],
            "var_samp": [
                618
            ],
            "variance": [
                620
            ],
            "__typename": [
                5
            ]
        },
        "proposals_arr_rel_insert_input": {
            "data": [
                583
            ],
            "on_conflict": [
                590
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
                580
            ],
            "_not": [
                580
            ],
            "_or": [
                580
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
            "conditionalVaultByQuoteVault": [
                99
            ],
            "conditional_vault": [
                99
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
                525
            ],
            "proposal_details_aggregate": [
                517
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
                630
            ],
            "reactions_aggregate": [
                623
            ],
            "status": [
                6
            ],
            "twaps": [
                898
            ],
            "twaps_aggregate": [
                891
            ],
            "updated_at": [
                707
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
            "conditionalVaultByQuoteVault": [
                107
            ],
            "conditional_vault": [
                107
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
                522
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
                627
            ],
            "status": [
                5
            ],
            "twaps": [
                895
            ],
            "updated_at": [
                706
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
                706
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
            "dao_acct": [
                340
            ],
            "description_url": [
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
                706
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
            "dao_acct": [
                340
            ],
            "description_url": [
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
                561
            ],
            "__typename": [
                5
            ]
        },
        "proposals_obj_rel_insert_input": {
            "data": [
                583
            ],
            "on_conflict": [
                590
            ],
            "__typename": [
                5
            ]
        },
        "proposals_on_conflict": {
            "constraint": [
                581
            ],
            "update_columns": [
                613
            ],
            "where": [
                580
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
            "conditionalVaultByQuoteVault": [
                109
            ],
            "conditional_vault": [
                109
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
                520
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
                626
            ],
            "status": [
                340
            ],
            "twaps_aggregate": [
                894
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
                706
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
                610
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
                706
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_fields": {
            "autocrat_version": [
                193
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
                582
            ],
            "_set": [
                602
            ],
            "where": [
                580
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
                561
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
                706
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate": {
            "aggregate": [
                625
            ],
            "nodes": [
                621
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp": {
            "count": [
                624
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp_count": {
            "arguments": [
                642
            ],
            "distinct": [
                0
            ],
            "filter": [
                630
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
                628
            ],
            "count": [
                3,
                {
                    "columns": [
                        642,
                        "[reactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                634
            ],
            "min": [
                636
            ],
            "stddev": [
                644
            ],
            "stddev_pop": [
                646
            ],
            "stddev_samp": [
                648
            ],
            "sum": [
                652
            ],
            "var_pop": [
                656
            ],
            "var_samp": [
                658
            ],
            "variance": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_order_by": {
            "avg": [
                629
            ],
            "count": [
                340
            ],
            "max": [
                635
            ],
            "min": [
                637
            ],
            "stddev": [
                645
            ],
            "stddev_pop": [
                647
            ],
            "stddev_samp": [
                649
            ],
            "sum": [
                653
            ],
            "var_pop": [
                657
            ],
            "var_samp": [
                659
            ],
            "variance": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "reactions_arr_rel_insert_input": {
            "data": [
                633
            ],
            "on_conflict": [
                639
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
                630
            ],
            "_not": [
                630
            ],
            "_or": [
                630
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "proposal": [
                580
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
                707
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
                589
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
                706
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
                706
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
                706
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
                621
            ],
            "__typename": [
                5
            ]
        },
        "reactions_on_conflict": {
            "constraint": [
                631
            ],
            "update_columns": [
                654
            ],
            "where": [
                630
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
                591
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
                706
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
                651
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
                706
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
                632
            ],
            "_set": [
                643
            ],
            "where": [
                630
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
        "smallint": {},
        "smallint_comparison_exp": {
            "_eq": [
                662
            ],
            "_gt": [
                662
            ],
            "_gte": [
                662
            ],
            "_in": [
                662
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                662
            ],
            "_lte": [
                662
            ],
            "_neq": [
                662
            ],
            "_nin": [
                662
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
                706
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
                668
            ],
            "nodes": [
                664
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp": {
            "count": [
                667
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp_count": {
            "arguments": [
                686
            ],
            "distinct": [
                0
            ],
            "filter": [
                673
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
                671
            ],
            "count": [
                3,
                {
                    "columns": [
                        686,
                        "[takes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                677
            ],
            "min": [
                679
            ],
            "stddev": [
                688
            ],
            "stddev_pop": [
                690
            ],
            "stddev_samp": [
                692
            ],
            "sum": [
                696
            ],
            "var_pop": [
                700
            ],
            "var_samp": [
                702
            ],
            "variance": [
                704
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_order_by": {
            "avg": [
                672
            ],
            "count": [
                340
            ],
            "max": [
                678
            ],
            "min": [
                680
            ],
            "stddev": [
                689
            ],
            "stddev_pop": [
                691
            ],
            "stddev_samp": [
                693
            ],
            "sum": [
                697
            ],
            "var_pop": [
                701
            ],
            "var_samp": [
                703
            ],
            "variance": [
                705
            ],
            "__typename": [
                5
            ]
        },
        "takes_arr_rel_insert_input": {
            "data": [
                676
            ],
            "on_conflict": [
                683
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
            "__typename": [
                5
            ]
        },
        "takes_bool_exp": {
            "_and": [
                673
            ],
            "_not": [
                673
            ],
            "_or": [
                673
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
                707
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
                706
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
                706
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
                706
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
            "__typename": [
                5
            ]
        },
        "takes_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                664
            ],
            "__typename": [
                5
            ]
        },
        "takes_obj_rel_insert_input": {
            "data": [
                676
            ],
            "on_conflict": [
                683
            ],
            "__typename": [
                5
            ]
        },
        "takes_on_conflict": {
            "constraint": [
                674
            ],
            "update_columns": [
                698
            ],
            "where": [
                673
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
                706
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
            "__typename": [
                5
            ]
        },
        "takes_stream_cursor_input": {
            "initial_value": [
                695
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
                706
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
            "__typename": [
                5
            ]
        },
        "takes_update_column": {},
        "takes_updates": {
            "_inc": [
                675
            ],
            "_set": [
                687
            ],
            "where": [
                673
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
            "__typename": [
                5
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                706
            ],
            "_gt": [
                706
            ],
            "_gte": [
                706
            ],
            "_in": [
                706
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                706
            ],
            "_lte": [
                706
            ],
            "_neq": [
                706
            ],
            "_nin": [
                706
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
                750
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                706
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate": {
            "aggregate": [
                712
            ],
            "nodes": [
                708
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp": {
            "count": [
                711
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp_count": {
            "arguments": [
                730
            ],
            "distinct": [
                0
            ],
            "filter": [
                717
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
                715
            ],
            "count": [
                3,
                {
                    "columns": [
                        730,
                        "[token_accts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                721
            ],
            "min": [
                723
            ],
            "stddev": [
                732
            ],
            "stddev_pop": [
                734
            ],
            "stddev_samp": [
                736
            ],
            "sum": [
                740
            ],
            "var_pop": [
                744
            ],
            "var_samp": [
                746
            ],
            "variance": [
                748
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_order_by": {
            "avg": [
                716
            ],
            "count": [
                340
            ],
            "max": [
                722
            ],
            "min": [
                724
            ],
            "stddev": [
                733
            ],
            "stddev_pop": [
                735
            ],
            "stddev_samp": [
                737
            ],
            "sum": [
                741
            ],
            "var_pop": [
                745
            ],
            "var_samp": [
                747
            ],
            "variance": [
                749
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_arr_rel_insert_input": {
            "data": [
                720
            ],
            "on_conflict": [
                727
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
                717
            ],
            "_not": [
                717
            ],
            "_or": [
                717
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
                754
            ],
            "token_acct": [
                6
            ],
            "updated_at": [
                707
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
                761
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                706
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
                706
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
                706
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
                708
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_obj_rel_insert_input": {
            "data": [
                720
            ],
            "on_conflict": [
                727
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_on_conflict": {
            "constraint": [
                718
            ],
            "update_columns": [
                742
            ],
            "where": [
                717
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
                763
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
                706
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
                739
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
                706
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
                719
            ],
            "_set": [
                731
            ],
            "where": [
                717
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
                662
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
            "token_accts": [
                708,
                {
                    "distinct_on": [
                        730,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        728,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        717
                    ]
                }
            ],
            "token_accts_aggregate": [
                709,
                {
                    "distinct_on": [
                        730,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        728,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        717
                    ]
                }
            ],
            "updated_at": [
                706
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate": {
            "aggregate": [
                752
            ],
            "nodes": [
                750
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate_fields": {
            "avg": [
                753
            ],
            "count": [
                3,
                {
                    "columns": [
                        765,
                        "[tokens_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                758
            ],
            "min": [
                759
            ],
            "stddev": [
                767
            ],
            "stddev_pop": [
                768
            ],
            "stddev_samp": [
                769
            ],
            "sum": [
                772
            ],
            "var_pop": [
                775
            ],
            "var_samp": [
                776
            ],
            "variance": [
                777
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
                754
            ],
            "_not": [
                754
            ],
            "_or": [
                754
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
                663
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
            "token_accts": [
                717
            ],
            "token_accts_aggregate": [
                710
            ],
            "updated_at": [
                707
            ],
            "__typename": [
                5
            ]
        },
        "tokens_constraint": {},
        "tokens_inc_input": {
            "decimals": [
                662
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
                662
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
            "token_accts": [
                714
            ],
            "updated_at": [
                706
            ],
            "__typename": [
                5
            ]
        },
        "tokens_max_fields": {
            "decimals": [
                662
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
                706
            ],
            "__typename": [
                5
            ]
        },
        "tokens_min_fields": {
            "decimals": [
                662
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
                706
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
                750
            ],
            "__typename": [
                5
            ]
        },
        "tokens_obj_rel_insert_input": {
            "data": [
                757
            ],
            "on_conflict": [
                762
            ],
            "__typename": [
                5
            ]
        },
        "tokens_on_conflict": {
            "constraint": [
                755
            ],
            "update_columns": [
                773
            ],
            "where": [
                754
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
            "token_accts_aggregate": [
                713
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
                662
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
                706
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
                771
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
                662
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
                706
            ],
            "__typename": [
                5
            ]
        },
        "tokens_sum_fields": {
            "decimals": [
                662
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
                756
            ],
            "_set": [
                766
            ],
            "where": [
                754
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
                861
            ],
            "transaction_watcher": [
                819
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
                782
            ],
            "nodes": [
                778
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp": {
            "count": [
                781
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp_count": {
            "arguments": [
                799
            ],
            "distinct": [
                0
            ],
            "filter": [
                787
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
                785
            ],
            "count": [
                3,
                {
                    "columns": [
                        799,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                791
            ],
            "min": [
                793
            ],
            "stddev": [
                801
            ],
            "stddev_pop": [
                803
            ],
            "stddev_samp": [
                805
            ],
            "sum": [
                809
            ],
            "var_pop": [
                813
            ],
            "var_samp": [
                815
            ],
            "variance": [
                817
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_order_by": {
            "avg": [
                786
            ],
            "count": [
                340
            ],
            "max": [
                792
            ],
            "min": [
                794
            ],
            "stddev": [
                802
            ],
            "stddev_pop": [
                804
            ],
            "stddev_samp": [
                806
            ],
            "sum": [
                810
            ],
            "var_pop": [
                814
            ],
            "var_samp": [
                816
            ],
            "variance": [
                818
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_arr_rel_insert_input": {
            "data": [
                790
            ],
            "on_conflict": [
                796
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
                787
            ],
            "_not": [
                787
            ],
            "_or": [
                787
            ],
            "slot": [
                8
            ],
            "transaction": [
                865
            ],
            "transaction_watcher": [
                828
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
                872
            ],
            "transaction_watcher": [
                837
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
                778
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_on_conflict": {
            "constraint": [
                788
            ],
            "update_columns": [
                811
            ],
            "where": [
                787
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
                874
            ],
            "transaction_watcher": [
                839
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
                808
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
                789
            ],
            "_set": [
                800
            ],
            "where": [
                787
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
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                662
            ],
            "status": [
                5
            ],
            "transaction": [
                861
            ],
            "transactionByLatestTxSig": [
                861
            ],
            "transaction_watcher_transactions": [
                778,
                {
                    "distinct_on": [
                        799,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        797,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        787
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                779,
                {
                    "distinct_on": [
                        799,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        797,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        787
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate": {
            "aggregate": [
                823
            ],
            "nodes": [
                819
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp": {
            "count": [
                822
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp_count": {
            "arguments": [
                841
            ],
            "distinct": [
                0
            ],
            "filter": [
                828
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
                826
            ],
            "count": [
                3,
                {
                    "columns": [
                        841,
                        "[transaction_watchers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                832
            ],
            "min": [
                834
            ],
            "stddev": [
                843
            ],
            "stddev_pop": [
                845
            ],
            "stddev_samp": [
                847
            ],
            "sum": [
                851
            ],
            "var_pop": [
                855
            ],
            "var_samp": [
                857
            ],
            "variance": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_order_by": {
            "avg": [
                827
            ],
            "count": [
                340
            ],
            "max": [
                833
            ],
            "min": [
                835
            ],
            "stddev": [
                844
            ],
            "stddev_pop": [
                846
            ],
            "stddev_samp": [
                848
            ],
            "sum": [
                852
            ],
            "var_pop": [
                856
            ],
            "var_samp": [
                858
            ],
            "variance": [
                860
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_arr_rel_insert_input": {
            "data": [
                831
            ],
            "on_conflict": [
                838
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
                828
            ],
            "_not": [
                828
            ],
            "_or": [
                828
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
            "latest_tx_sig": [
                6
            ],
            "serializer_logic_version": [
                663
            ],
            "status": [
                6
            ],
            "transaction": [
                865
            ],
            "transactionByLatestTxSig": [
                865
            ],
            "transaction_watcher_transactions": [
                787
            ],
            "transaction_watcher_transactions_aggregate": [
                780
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
                662
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
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                662
            ],
            "status": [
                5
            ],
            "transaction": [
                872
            ],
            "transactionByLatestTxSig": [
                872
            ],
            "transaction_watcher_transactions": [
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
            "first_tx_sig": [
                5
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                662
            ],
            "status": [
                5
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
                662
            ],
            "status": [
                5
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
            "__typename": [
                5
            ]
        },
        "transaction_watchers_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                819
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_obj_rel_insert_input": {
            "data": [
                831
            ],
            "on_conflict": [
                838
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_on_conflict": {
            "constraint": [
                829
            ],
            "update_columns": [
                853
            ],
            "where": [
                828
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
                874
            ],
            "transactionByLatestTxSig": [
                874
            ],
            "transaction_watcher_transactions_aggregate": [
                783
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
                662
            ],
            "status": [
                5
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
                850
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
                662
            ],
            "status": [
                5
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
                662
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
                830
            ],
            "_set": [
                842
            ],
            "where": [
                828
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
                706
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
            "payload": [
                5
            ],
            "serializer_logic_version": [
                662
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                819,
                {
                    "distinct_on": [
                        841,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        839,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        828
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                820,
                {
                    "distinct_on": [
                        841,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        839,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        828
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                778,
                {
                    "distinct_on": [
                        799,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        797,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        787
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                779,
                {
                    "distinct_on": [
                        799,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        797,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        787
                    ]
                }
            ],
            "transaction_watchers": [
                819,
                {
                    "distinct_on": [
                        841,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        839,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        828
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                820,
                {
                    "distinct_on": [
                        841,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        839,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        828
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
                863
            ],
            "nodes": [
                861
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                864
            ],
            "count": [
                3,
                {
                    "columns": [
                        876,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                869
            ],
            "min": [
                870
            ],
            "stddev": [
                878
            ],
            "stddev_pop": [
                879
            ],
            "stddev_samp": [
                880
            ],
            "sum": [
                883
            ],
            "var_pop": [
                886
            ],
            "var_samp": [
                887
            ],
            "variance": [
                888
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
                865
            ],
            "_not": [
                865
            ],
            "_or": [
                865
            ],
            "block_time": [
                707
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
            "payload": [
                6
            ],
            "serializer_logic_version": [
                663
            ],
            "slot": [
                8
            ],
            "transactionWatchersByLatestTxSig": [
                828
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                821
            ],
            "transaction_watcher_transactions": [
                787
            ],
            "transaction_watcher_transactions_aggregate": [
                780
            ],
            "transaction_watchers": [
                828
            ],
            "transaction_watchers_aggregate": [
                821
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
                662
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
                706
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                201
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                662
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                825
            ],
            "transaction_watcher_transactions": [
                784
            ],
            "transaction_watchers": [
                825
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
                706
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                662
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
                706
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                662
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
                861
            ],
            "__typename": [
                5
            ]
        },
        "transactions_obj_rel_insert_input": {
            "data": [
                868
            ],
            "on_conflict": [
                873
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                866
            ],
            "update_columns": [
                884
            ],
            "where": [
                865
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
                824
            ],
            "transaction_watcher_transactions_aggregate": [
                783
            ],
            "transaction_watchers_aggregate": [
                824
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
                706
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                662
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
                882
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
                706
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                662
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
                662
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
                867
            ],
            "_set": [
                877
            ],
            "where": [
                865
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
            "created_at": [
                706
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
                561
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
                893
            ],
            "nodes": [
                889
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp": {
            "count": [
                892
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp_count": {
            "arguments": [
                910
            ],
            "distinct": [
                0
            ],
            "filter": [
                898
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
                896
            ],
            "count": [
                3,
                {
                    "columns": [
                        910,
                        "[twaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                902
            ],
            "min": [
                904
            ],
            "stddev": [
                912
            ],
            "stddev_pop": [
                914
            ],
            "stddev_samp": [
                916
            ],
            "sum": [
                920
            ],
            "var_pop": [
                924
            ],
            "var_samp": [
                926
            ],
            "variance": [
                928
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_order_by": {
            "avg": [
                897
            ],
            "count": [
                340
            ],
            "max": [
                903
            ],
            "min": [
                905
            ],
            "stddev": [
                913
            ],
            "stddev_pop": [
                915
            ],
            "stddev_samp": [
                917
            ],
            "sum": [
                921
            ],
            "var_pop": [
                925
            ],
            "var_samp": [
                927
            ],
            "variance": [
                929
            ],
            "__typename": [
                5
            ]
        },
        "twaps_arr_rel_insert_input": {
            "data": [
                901
            ],
            "on_conflict": [
                907
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
                898
            ],
            "_not": [
                898
            ],
            "_or": [
                898
            ],
            "created_at": [
                707
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
                580
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
                706
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
                589
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
                706
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
                706
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
                889
            ],
            "__typename": [
                5
            ]
        },
        "twaps_on_conflict": {
            "constraint": [
                899
            ],
            "update_columns": [
                922
            ],
            "where": [
                898
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
                591
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
                706
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
                919
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
                706
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
                900
            ],
            "_set": [
                911
            ],
            "where": [
                898
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
                706
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
                932
            ],
            "nodes": [
                930
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
                        941,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                936
            ],
            "min": [
                937
            ],
            "__typename": [
                5
            ]
        },
        "users_bool_exp": {
            "_and": [
                933
            ],
            "_not": [
                933
            ],
            "_or": [
                933
            ],
            "created_at": [
                707
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
                706
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
                706
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
                706
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
                930
            ],
            "__typename": [
                5
            ]
        },
        "users_on_conflict": {
            "constraint": [
                934
            ],
            "update_columns": [
                945
            ],
            "where": [
                933
            ],
            "__typename": [
                5
            ]
        },
        "users_order_by": {
            "created_at": [
                340
            ],
            "user_acct": [
                340
            ],
            "__typename": [
                5
            ]
        },
        "users_select_column": {},
        "users_set_input": {
            "created_at": [
                706
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
                944
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
                706
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
                942
            ],
            "where": [
                933
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
                        706,
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
                        408,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
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
                        408,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
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
            "program_system": [
                428,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "program_system_aggregate": [
                429,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "program_system_by_pk": [
                428,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "programs": [
                487,
                {
                    "distinct_on": [
                        502,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        500,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        491
                    ]
                }
            ],
            "programs_aggregate": [
                488,
                {
                    "distinct_on": [
                        502,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        500,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        491
                    ]
                }
            ],
            "programs_by_pk": [
                487,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_details": [
                515,
                {
                    "distinct_on": [
                        541,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        538,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        525
                    ]
                }
            ],
            "proposal_details_aggregate": [
                516,
                {
                    "distinct_on": [
                        541,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        538,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        525
                    ]
                }
            ],
            "proposal_details_by_pk": [
                515,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposals": [
                561,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposals_aggregate": [
                562,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposals_by_pk": [
                561,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "reactions": [
                621,
                {
                    "distinct_on": [
                        642,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        640,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "reactions_aggregate": [
                622,
                {
                    "distinct_on": [
                        642,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        640,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "reactions_by_pk": [
                621,
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
                664,
                {
                    "distinct_on": [
                        686,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        684,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        673
                    ]
                }
            ],
            "takes_aggregate": [
                665,
                {
                    "distinct_on": [
                        686,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        684,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        673
                    ]
                }
            ],
            "takes_by_pk": [
                664,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts": [
                708,
                {
                    "distinct_on": [
                        730,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        728,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        717
                    ]
                }
            ],
            "token_accts_aggregate": [
                709,
                {
                    "distinct_on": [
                        730,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        728,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        717
                    ]
                }
            ],
            "token_accts_by_pk": [
                708,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens": [
                750,
                {
                    "distinct_on": [
                        765,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        763,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        754
                    ]
                }
            ],
            "tokens_aggregate": [
                751,
                {
                    "distinct_on": [
                        765,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        763,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        754
                    ]
                }
            ],
            "tokens_by_pk": [
                750,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                778,
                {
                    "distinct_on": [
                        799,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        797,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        787
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                779,
                {
                    "distinct_on": [
                        799,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        797,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        787
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                778,
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
                819,
                {
                    "distinct_on": [
                        841,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        839,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        828
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                820,
                {
                    "distinct_on": [
                        841,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        839,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        828
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                819,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                861,
                {
                    "distinct_on": [
                        876,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "transactions_aggregate": [
                862,
                {
                    "distinct_on": [
                        876,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "transactions_by_pk": [
                861,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "twaps": [
                889,
                {
                    "distinct_on": [
                        910,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        908,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        898
                    ]
                }
            ],
            "twaps_aggregate": [
                890,
                {
                    "distinct_on": [
                        910,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        908,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        898
                    ]
                }
            ],
            "twaps_by_pk": [
                889,
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
                930,
                {
                    "distinct_on": [
                        941,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        940,
                        "[users_order_by!]"
                    ],
                    "where": [
                        933
                    ]
                }
            ],
            "users_aggregate": [
                931,
                {
                    "distinct_on": [
                        941,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        940,
                        "[users_order_by!]"
                    ],
                    "where": [
                        933
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
                        706,
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
                404,
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
            "delete_program_system": [
                455,
                {
                    "where": [
                        447,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "delete_program_system_by_pk": [
                428,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "delete_programs": [
                497,
                {
                    "where": [
                        491,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "delete_programs_by_pk": [
                487,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_details": [
                536,
                {
                    "where": [
                        525,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_details_by_pk": [
                515,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_proposals": [
                588,
                {
                    "where": [
                        580,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "delete_proposals_by_pk": [
                561,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_reactions": [
                638,
                {
                    "where": [
                        630,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "delete_reactions_by_pk": [
                621,
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
                681,
                {
                    "where": [
                        673,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "delete_takes_by_pk": [
                664,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_accts": [
                725,
                {
                    "where": [
                        717,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "delete_token_accts_by_pk": [
                708,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_tokens": [
                760,
                {
                    "where": [
                        754,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "delete_tokens_by_pk": [
                750,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions": [
                795,
                {
                    "where": [
                        787,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions_by_pk": [
                778,
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
                836,
                {
                    "where": [
                        828,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watchers_by_pk": [
                819,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                871,
                {
                    "where": [
                        865,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                861,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_twaps": [
                906,
                {
                    "where": [
                        898,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "delete_twaps_by_pk": [
                889,
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
                938,
                {
                    "where": [
                        933,
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
                404,
                {
                    "objects": [
                        399,
                        "[prices_insert_input!]!"
                    ],
                    "on_conflict": [
                        405
                    ]
                }
            ],
            "insert_prices_one": [
                387,
                {
                    "object": [
                        399,
                        "prices_insert_input!"
                    ],
                    "on_conflict": [
                        405
                    ]
                }
            ],
            "insert_program_system": [
                455,
                {
                    "objects": [
                        450,
                        "[program_system_insert_input!]!"
                    ],
                    "on_conflict": [
                        456
                    ]
                }
            ],
            "insert_program_system_one": [
                428,
                {
                    "object": [
                        450,
                        "program_system_insert_input!"
                    ],
                    "on_conflict": [
                        456
                    ]
                }
            ],
            "insert_programs": [
                497,
                {
                    "objects": [
                        494,
                        "[programs_insert_input!]!"
                    ],
                    "on_conflict": [
                        499
                    ]
                }
            ],
            "insert_programs_one": [
                487,
                {
                    "object": [
                        494,
                        "programs_insert_input!"
                    ],
                    "on_conflict": [
                        499
                    ]
                }
            ],
            "insert_proposal_details": [
                536,
                {
                    "objects": [
                        531,
                        "[proposal_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        537
                    ]
                }
            ],
            "insert_proposal_details_one": [
                515,
                {
                    "object": [
                        531,
                        "proposal_details_insert_input!"
                    ],
                    "on_conflict": [
                        537
                    ]
                }
            ],
            "insert_proposals": [
                588,
                {
                    "objects": [
                        583,
                        "[proposals_insert_input!]!"
                    ],
                    "on_conflict": [
                        590
                    ]
                }
            ],
            "insert_proposals_one": [
                561,
                {
                    "object": [
                        583,
                        "proposals_insert_input!"
                    ],
                    "on_conflict": [
                        590
                    ]
                }
            ],
            "insert_reactions": [
                638,
                {
                    "objects": [
                        633,
                        "[reactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        639
                    ]
                }
            ],
            "insert_reactions_one": [
                621,
                {
                    "object": [
                        633,
                        "reactions_insert_input!"
                    ],
                    "on_conflict": [
                        639
                    ]
                }
            ],
            "insert_takes": [
                681,
                {
                    "objects": [
                        676,
                        "[takes_insert_input!]!"
                    ],
                    "on_conflict": [
                        683
                    ]
                }
            ],
            "insert_takes_one": [
                664,
                {
                    "object": [
                        676,
                        "takes_insert_input!"
                    ],
                    "on_conflict": [
                        683
                    ]
                }
            ],
            "insert_token_accts": [
                725,
                {
                    "objects": [
                        720,
                        "[token_accts_insert_input!]!"
                    ],
                    "on_conflict": [
                        727
                    ]
                }
            ],
            "insert_token_accts_one": [
                708,
                {
                    "object": [
                        720,
                        "token_accts_insert_input!"
                    ],
                    "on_conflict": [
                        727
                    ]
                }
            ],
            "insert_tokens": [
                760,
                {
                    "objects": [
                        757,
                        "[tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        762
                    ]
                }
            ],
            "insert_tokens_one": [
                750,
                {
                    "object": [
                        757,
                        "tokens_insert_input!"
                    ],
                    "on_conflict": [
                        762
                    ]
                }
            ],
            "insert_transaction_watcher_transactions": [
                795,
                {
                    "objects": [
                        790,
                        "[transaction_watcher_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        796
                    ]
                }
            ],
            "insert_transaction_watcher_transactions_one": [
                778,
                {
                    "object": [
                        790,
                        "transaction_watcher_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        796
                    ]
                }
            ],
            "insert_transaction_watchers": [
                836,
                {
                    "objects": [
                        831,
                        "[transaction_watchers_insert_input!]!"
                    ],
                    "on_conflict": [
                        838
                    ]
                }
            ],
            "insert_transaction_watchers_one": [
                819,
                {
                    "object": [
                        831,
                        "transaction_watchers_insert_input!"
                    ],
                    "on_conflict": [
                        838
                    ]
                }
            ],
            "insert_transactions": [
                871,
                {
                    "objects": [
                        868,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        873
                    ]
                }
            ],
            "insert_transactions_one": [
                861,
                {
                    "object": [
                        868,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        873
                    ]
                }
            ],
            "insert_twaps": [
                906,
                {
                    "objects": [
                        901,
                        "[twaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        907
                    ]
                }
            ],
            "insert_twaps_one": [
                889,
                {
                    "object": [
                        901,
                        "twaps_insert_input!"
                    ],
                    "on_conflict": [
                        907
                    ]
                }
            ],
            "insert_users": [
                938,
                {
                    "objects": [
                        935,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        939
                    ]
                }
            ],
            "insert_users_one": [
                930,
                {
                    "object": [
                        935,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        939
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
                404,
                {
                    "_inc": [
                        398
                    ],
                    "_set": [
                        409
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
                        398
                    ],
                    "_set": [
                        409
                    ],
                    "pk_columns": [
                        407,
                        "prices_pk_columns_input!"
                    ]
                }
            ],
            "update_prices_many": [
                404,
                {
                    "updates": [
                        421,
                        "[prices_updates!]!"
                    ]
                }
            ],
            "update_program_system": [
                455,
                {
                    "_inc": [
                        449
                    ],
                    "_set": [
                        468
                    ],
                    "where": [
                        447,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "update_program_system_by_pk": [
                428,
                {
                    "_inc": [
                        449
                    ],
                    "_set": [
                        468
                    ],
                    "pk_columns": [
                        458,
                        "program_system_pk_columns_input!"
                    ]
                }
            ],
            "update_program_system_many": [
                455,
                {
                    "updates": [
                        480,
                        "[program_system_updates!]!"
                    ]
                }
            ],
            "update_programs": [
                497,
                {
                    "_inc": [
                        493
                    ],
                    "_set": [
                        503
                    ],
                    "where": [
                        491,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "update_programs_by_pk": [
                487,
                {
                    "_inc": [
                        493
                    ],
                    "_set": [
                        503
                    ],
                    "pk_columns": [
                        501,
                        "programs_pk_columns_input!"
                    ]
                }
            ],
            "update_programs_many": [
                497,
                {
                    "updates": [
                        511,
                        "[programs_updates!]!"
                    ]
                }
            ],
            "update_proposal_details": [
                536,
                {
                    "_append": [
                        521
                    ],
                    "_delete_at_path": [
                        527
                    ],
                    "_delete_elem": [
                        528
                    ],
                    "_delete_key": [
                        529
                    ],
                    "_inc": [
                        530
                    ],
                    "_prepend": [
                        540
                    ],
                    "_set": [
                        542
                    ],
                    "where": [
                        525,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "update_proposal_details_by_pk": [
                515,
                {
                    "_append": [
                        521
                    ],
                    "_delete_at_path": [
                        527
                    ],
                    "_delete_elem": [
                        528
                    ],
                    "_delete_key": [
                        529
                    ],
                    "_inc": [
                        530
                    ],
                    "_prepend": [
                        540
                    ],
                    "_set": [
                        542
                    ],
                    "pk_columns": [
                        539,
                        "proposal_details_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_details_many": [
                536,
                {
                    "updates": [
                        554,
                        "[proposal_details_updates!]!"
                    ]
                }
            ],
            "update_proposals": [
                588,
                {
                    "_inc": [
                        582
                    ],
                    "_set": [
                        602
                    ],
                    "where": [
                        580,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "update_proposals_by_pk": [
                561,
                {
                    "_inc": [
                        582
                    ],
                    "_set": [
                        602
                    ],
                    "pk_columns": [
                        592,
                        "proposals_pk_columns_input!"
                    ]
                }
            ],
            "update_proposals_many": [
                588,
                {
                    "updates": [
                        614,
                        "[proposals_updates!]!"
                    ]
                }
            ],
            "update_reactions": [
                638,
                {
                    "_inc": [
                        632
                    ],
                    "_set": [
                        643
                    ],
                    "where": [
                        630,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "update_reactions_by_pk": [
                621,
                {
                    "_inc": [
                        632
                    ],
                    "_set": [
                        643
                    ],
                    "pk_columns": [
                        641,
                        "reactions_pk_columns_input!"
                    ]
                }
            ],
            "update_reactions_many": [
                638,
                {
                    "updates": [
                        655,
                        "[reactions_updates!]!"
                    ]
                }
            ],
            "update_takes": [
                681,
                {
                    "_inc": [
                        675
                    ],
                    "_set": [
                        687
                    ],
                    "where": [
                        673,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "update_takes_by_pk": [
                664,
                {
                    "_inc": [
                        675
                    ],
                    "_set": [
                        687
                    ],
                    "pk_columns": [
                        685,
                        "takes_pk_columns_input!"
                    ]
                }
            ],
            "update_takes_many": [
                681,
                {
                    "updates": [
                        699,
                        "[takes_updates!]!"
                    ]
                }
            ],
            "update_token_accts": [
                725,
                {
                    "_inc": [
                        719
                    ],
                    "_set": [
                        731
                    ],
                    "where": [
                        717,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "update_token_accts_by_pk": [
                708,
                {
                    "_inc": [
                        719
                    ],
                    "_set": [
                        731
                    ],
                    "pk_columns": [
                        729,
                        "token_accts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_accts_many": [
                725,
                {
                    "updates": [
                        743,
                        "[token_accts_updates!]!"
                    ]
                }
            ],
            "update_tokens": [
                760,
                {
                    "_inc": [
                        756
                    ],
                    "_set": [
                        766
                    ],
                    "where": [
                        754,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "update_tokens_by_pk": [
                750,
                {
                    "_inc": [
                        756
                    ],
                    "_set": [
                        766
                    ],
                    "pk_columns": [
                        764,
                        "tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_tokens_many": [
                760,
                {
                    "updates": [
                        774,
                        "[tokens_updates!]!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions": [
                795,
                {
                    "_inc": [
                        789
                    ],
                    "_set": [
                        800
                    ],
                    "where": [
                        787,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_by_pk": [
                778,
                {
                    "_inc": [
                        789
                    ],
                    "_set": [
                        800
                    ],
                    "pk_columns": [
                        798,
                        "transaction_watcher_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_many": [
                795,
                {
                    "updates": [
                        812,
                        "[transaction_watcher_transactions_updates!]!"
                    ]
                }
            ],
            "update_transaction_watchers": [
                836,
                {
                    "_inc": [
                        830
                    ],
                    "_set": [
                        842
                    ],
                    "where": [
                        828,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watchers_by_pk": [
                819,
                {
                    "_inc": [
                        830
                    ],
                    "_set": [
                        842
                    ],
                    "pk_columns": [
                        840,
                        "transaction_watchers_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watchers_many": [
                836,
                {
                    "updates": [
                        854,
                        "[transaction_watchers_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                871,
                {
                    "_inc": [
                        867
                    ],
                    "_set": [
                        877
                    ],
                    "where": [
                        865,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                861,
                {
                    "_inc": [
                        867
                    ],
                    "_set": [
                        877
                    ],
                    "pk_columns": [
                        875,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                871,
                {
                    "updates": [
                        885,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_twaps": [
                906,
                {
                    "_inc": [
                        900
                    ],
                    "_set": [
                        911
                    ],
                    "where": [
                        898,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "update_twaps_by_pk": [
                889,
                {
                    "_inc": [
                        900
                    ],
                    "_set": [
                        911
                    ],
                    "pk_columns": [
                        909,
                        "twaps_pk_columns_input!"
                    ]
                }
            ],
            "update_twaps_many": [
                906,
                {
                    "updates": [
                        923,
                        "[twaps_updates!]!"
                    ]
                }
            ],
            "update_users": [
                938,
                {
                    "_set": [
                        942
                    ],
                    "where": [
                        933,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_many": [
                938,
                {
                    "updates": [
                        946,
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
                        706,
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
                        408,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
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
                        408,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
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
            "prices_stream": [
                387,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        416,
                        "[prices_stream_cursor_input]!"
                    ],
                    "where": [
                        396
                    ]
                }
            ],
            "program_system": [
                428,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "program_system_aggregate": [
                429,
                {
                    "distinct_on": [
                        459,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        457,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "program_system_by_pk": [
                428,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "program_system_stream": [
                428,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        475,
                        "[program_system_stream_cursor_input]!"
                    ],
                    "where": [
                        447
                    ]
                }
            ],
            "programs": [
                487,
                {
                    "distinct_on": [
                        502,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        500,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        491
                    ]
                }
            ],
            "programs_aggregate": [
                488,
                {
                    "distinct_on": [
                        502,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        500,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        491
                    ]
                }
            ],
            "programs_by_pk": [
                487,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs_stream": [
                487,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        507,
                        "[programs_stream_cursor_input]!"
                    ],
                    "where": [
                        491
                    ]
                }
            ],
            "proposal_details": [
                515,
                {
                    "distinct_on": [
                        541,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        538,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        525
                    ]
                }
            ],
            "proposal_details_aggregate": [
                516,
                {
                    "distinct_on": [
                        541,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        538,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        525
                    ]
                }
            ],
            "proposal_details_by_pk": [
                515,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_details_stream": [
                515,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        549,
                        "[proposal_details_stream_cursor_input]!"
                    ],
                    "where": [
                        525
                    ]
                }
            ],
            "proposals": [
                561,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposals_aggregate": [
                562,
                {
                    "distinct_on": [
                        593,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        591,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposals_by_pk": [
                561,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposals_stream": [
                561,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        609,
                        "[proposals_stream_cursor_input]!"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "reactions": [
                621,
                {
                    "distinct_on": [
                        642,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        640,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "reactions_aggregate": [
                622,
                {
                    "distinct_on": [
                        642,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        640,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "reactions_by_pk": [
                621,
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
                621,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        650,
                        "[reactions_stream_cursor_input]!"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "takes": [
                664,
                {
                    "distinct_on": [
                        686,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        684,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        673
                    ]
                }
            ],
            "takes_aggregate": [
                665,
                {
                    "distinct_on": [
                        686,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        684,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        673
                    ]
                }
            ],
            "takes_by_pk": [
                664,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes_stream": [
                664,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        694,
                        "[takes_stream_cursor_input]!"
                    ],
                    "where": [
                        673
                    ]
                }
            ],
            "token_accts": [
                708,
                {
                    "distinct_on": [
                        730,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        728,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        717
                    ]
                }
            ],
            "token_accts_aggregate": [
                709,
                {
                    "distinct_on": [
                        730,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        728,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        717
                    ]
                }
            ],
            "token_accts_by_pk": [
                708,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts_stream": [
                708,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        738,
                        "[token_accts_stream_cursor_input]!"
                    ],
                    "where": [
                        717
                    ]
                }
            ],
            "tokens": [
                750,
                {
                    "distinct_on": [
                        765,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        763,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        754
                    ]
                }
            ],
            "tokens_aggregate": [
                751,
                {
                    "distinct_on": [
                        765,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        763,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        754
                    ]
                }
            ],
            "tokens_by_pk": [
                750,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens_stream": [
                750,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        770,
                        "[tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        754
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                778,
                {
                    "distinct_on": [
                        799,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        797,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        787
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                779,
                {
                    "distinct_on": [
                        799,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        797,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        787
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                778,
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
                778,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        807,
                        "[transaction_watcher_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        787
                    ]
                }
            ],
            "transaction_watchers": [
                819,
                {
                    "distinct_on": [
                        841,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        839,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        828
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                820,
                {
                    "distinct_on": [
                        841,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        839,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        828
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                819,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers_stream": [
                819,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        849,
                        "[transaction_watchers_stream_cursor_input]!"
                    ],
                    "where": [
                        828
                    ]
                }
            ],
            "transactions": [
                861,
                {
                    "distinct_on": [
                        876,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "transactions_aggregate": [
                862,
                {
                    "distinct_on": [
                        876,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "transactions_by_pk": [
                861,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                861,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        881,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        865
                    ]
                }
            ],
            "twaps": [
                889,
                {
                    "distinct_on": [
                        910,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        908,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        898
                    ]
                }
            ],
            "twaps_aggregate": [
                890,
                {
                    "distinct_on": [
                        910,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        908,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        898
                    ]
                }
            ],
            "twaps_by_pk": [
                889,
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
                889,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        918,
                        "[twaps_stream_cursor_input]!"
                    ],
                    "where": [
                        898
                    ]
                }
            ],
            "users": [
                930,
                {
                    "distinct_on": [
                        941,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        940,
                        "[users_order_by!]"
                    ],
                    "where": [
                        933
                    ]
                }
            ],
            "users_aggregate": [
                931,
                {
                    "distinct_on": [
                        941,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        940,
                        "[users_order_by!]"
                    ],
                    "where": [
                        933
                    ]
                }
            ],
            "users_stream": [
                930,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        943,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        933
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}