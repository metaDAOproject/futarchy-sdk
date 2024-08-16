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
        153,
        165,
        177,
        189,
        197,
        207,
        217,
        221,
        228,
        238,
        246,
        251,
        253,
        268,
        280,
        281,
        282,
        294,
        312,
        324,
        336,
        344,
        346,
        359,
        371,
        372,
        373,
        385,
        408,
        416,
        424,
        429,
        440,
        452,
        480,
        491,
        492,
        493,
        494,
        495,
        496,
        497,
        498,
        499,
        511,
        524,
        534,
        542,
        552,
        561,
        569,
        585,
        600,
        612,
        628,
        658,
        670,
        671,
        672,
        673,
        674,
        675,
        676,
        677,
        678,
        690,
        708,
        719,
        731,
        747,
        757,
        761,
        763,
        775,
        787,
        799,
        807,
        809,
        821,
        832,
        844,
        852,
        864,
        876,
        888,
        901,
        911,
        919,
        935,
        946,
        958,
        976,
        988,
        1000,
        1013,
        1023,
        1031,
        1041,
        1049,
        1057,
        1072,
        1083,
        1095,
        1114,
        1136,
        1147,
        1159,
        1171,
        1180,
        1184,
        1186
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
                302
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                809
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
                346
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
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
                311
            ],
            "market_acct": [
                6
            ],
            "open": [
                8
            ],
            "timestamp": [
                810
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
                320
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                809
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
                809
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "market_acct": [
                346
            ],
            "open": [
                346
            ],
            "timestamp": [
                346
            ],
            "volume": [
                346
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
                809
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "market_acct": [
                346
            ],
            "open": [
                346
            ],
            "timestamp": [
                346
            ],
            "volume": [
                346
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "open": [
                346
            ],
            "timestamp": [
                346
            ],
            "volume": [
                346
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
                809
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
                809
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
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
                809
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
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
                346
            ],
            "candle_duration": [
                346
            ],
            "close": [
                346
            ],
            "cond_market_twap": [
                346
            ],
            "high": [
                346
            ],
            "low": [
                346
            ],
            "open": [
                346
            ],
            "volume": [
                346
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
                809
            ],
            "proposal": [
                638
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                698,
                {
                    "distinct_on": [
                        719,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        707
                    ]
                }
            ],
            "reactions_aggregate": [
                699,
                {
                    "distinct_on": [
                        719,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        707
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
                346
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
                346
            ],
            "responding_comment_id": [
                346
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
                810
            ],
            "proposal": [
                657
            ],
            "proposal_acct": [
                6
            ],
            "reactions": [
                707
            ],
            "reactions_aggregate": [
                700
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
                809
            ],
            "proposal": [
                666
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                704
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
                809
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
                346
            ],
            "commentor_acct": [
                346
            ],
            "content": [
                346
            ],
            "created_at": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "responding_comment_id": [
                346
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
                809
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
                346
            ],
            "commentor_acct": [
                346
            ],
            "content": [
                346
            ],
            "created_at": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "responding_comment_id": [
                346
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
                346
            ],
            "commentor_acct": [
                346
            ],
            "comments_aggregate": [
                55
            ],
            "content": [
                346
            ],
            "created_at": [
                346
            ],
            "proposal": [
                668
            ],
            "proposal_acct": [
                346
            ],
            "reactions_aggregate": [
                703
            ],
            "responding_comment_id": [
                346
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
                809
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
                346
            ],
            "responding_comment_id": [
                346
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
                346
            ],
            "responding_comment_id": [
                346
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
                346
            ],
            "responding_comment_id": [
                346
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
                809
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
                346
            ],
            "responding_comment_id": [
                346
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
                346
            ],
            "responding_comment_id": [
                346
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
                346
            ],
            "responding_comment_id": [
                346
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
                346
            ],
            "responding_comment_id": [
                346
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
                638,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
                    ]
                }
            ],
            "proposalsByQuoteVault": [
                638,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
                    ]
                }
            ],
            "proposalsByQuoteVault_aggregate": [
                639,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
                    ]
                }
            ],
            "proposals_aggregate": [
                639,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
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
                896
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
                346
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
                657
            ],
            "proposalsByQuoteVault": [
                657
            ],
            "proposalsByQuoteVault_aggregate": [
                640
            ],
            "proposals_aggregate": [
                640
            ],
            "settlement_authority": [
                6
            ],
            "status": [
                6
            ],
            "token": [
                900
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
                654
            ],
            "proposalsByQuoteVault": [
                654
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "token": [
                907
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
                346
            ],
            "cond_revert_token_mint_acct": [
                346
            ],
            "cond_vault_acct": [
                346
            ],
            "nonce": [
                346
            ],
            "settlement_authority": [
                346
            ],
            "status": [
                346
            ],
            "underlying_mint_acct": [
                346
            ],
            "underlying_token_acct": [
                346
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
                346
            ],
            "cond_revert_token_mint_acct": [
                346
            ],
            "cond_vault_acct": [
                346
            ],
            "nonce": [
                346
            ],
            "settlement_authority": [
                346
            ],
            "status": [
                346
            ],
            "underlying_mint_acct": [
                346
            ],
            "underlying_token_acct": [
                346
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
                346
            ],
            "cond_revert_token_mint_acct": [
                346
            ],
            "cond_vault_acct": [
                346
            ],
            "nonce": [
                346
            ],
            "proposalsByQuoteVault_aggregate": [
                653
            ],
            "proposals_aggregate": [
                653
            ],
            "settlement_authority": [
                346
            ],
            "status": [
                346
            ],
            "token": [
                909
            ],
            "underlying_mint_acct": [
                346
            ],
            "underlying_token_acct": [
                346
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
                253,
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
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
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
            "is_hide": [
                0
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
            "socials": [
                253,
                {
                    "path": [
                        5
                    ]
                }
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
                253
            ],
            "socials": [
                253
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
                255
            ],
            "creator_acct": [
                6
            ],
            "dao_id": [
                8
            ],
            "daos": [
                164
            ],
            "daos_aggregate": [
                157
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
            "is_hide": [
                1
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
            "socials": [
                255
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
            "socials": [
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
            "socials": [
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
            "socials": [
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
                253
            ],
            "creator_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "daos": [
                161
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
            "is_hide": [
                0
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
            "socials": [
                253
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
                346
            ],
            "creator_acct": [
                346
            ],
            "dao_id": [
                346
            ],
            "daos_aggregate": [
                160
            ],
            "description": [
                346
            ],
            "fail_token_image_url": [
                346
            ],
            "github": [
                346
            ],
            "image_url": [
                346
            ],
            "is_hide": [
                346
            ],
            "lp_token_image_url": [
                346
            ],
            "name": [
                346
            ],
            "pass_token_image_url": [
                346
            ],
            "slug": [
                346
            ],
            "socials": [
                346
            ],
            "token_image_url": [
                346
            ],
            "url": [
                346
            ],
            "x_account": [
                346
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
                253
            ],
            "socials": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_select_column": {},
        "dao_details_set_input": {
            "admin_accts": [
                253
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
            "is_hide": [
                0
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
            "socials": [
                253
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
                253
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
            "is_hide": [
                0
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
            "socials": [
                253
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
        "dao_trader": {
            "total_volume": [
                7
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "dao_trader_bool_exp_bool_exp": {
            "_and": [
                152
            ],
            "_not": [
                152
            ],
            "_or": [
                152
            ],
            "total_volume": [
                8
            ],
            "user_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "dao_trader_enum_name": {},
        "dao_trader_order_by": {
            "total_volume": [
                346
            ],
            "user_acct": [
                346
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
                809
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
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program": [
                519
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                638,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
                    ]
                }
            ],
            "proposals_aggregate": [
                639,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
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
                896
            ],
            "tokenByBaseAcct": [
                896
            ],
            "tokenByQuoteAcct": [
                896
            ],
            "treasury_acct": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate": {
            "aggregate": [
                159
            ],
            "nodes": [
                155
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp": {
            "count": [
                158
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp_count": {
            "arguments": [
                177
            ],
            "distinct": [
                0
            ],
            "filter": [
                164
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
                162
            ],
            "count": [
                3,
                {
                    "columns": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                168
            ],
            "min": [
                170
            ],
            "stddev": [
                179
            ],
            "stddev_pop": [
                181
            ],
            "stddev_samp": [
                183
            ],
            "sum": [
                187
            ],
            "var_pop": [
                191
            ],
            "var_samp": [
                193
            ],
            "variance": [
                195
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_order_by": {
            "avg": [
                163
            ],
            "count": [
                346
            ],
            "max": [
                169
            ],
            "min": [
                171
            ],
            "stddev": [
                180
            ],
            "stddev_pop": [
                182
            ],
            "stddev_samp": [
                184
            ],
            "sum": [
                188
            ],
            "var_pop": [
                192
            ],
            "var_samp": [
                194
            ],
            "variance": [
                196
            ],
            "__typename": [
                5
            ]
        },
        "daos_arr_rel_insert_input": {
            "data": [
                167
            ],
            "on_conflict": [
                174
            ],
            "__typename": [
                5
            ]
        },
        "daos_avg_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_avg_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_bool_exp": {
            "_and": [
                164
            ],
            "_not": [
                164
            ],
            "_or": [
                164
            ],
            "base_acct": [
                6
            ],
            "created_at": [
                810
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
            "min_base_futarchic_liquidity": [
                8
            ],
            "min_quote_futarchic_liquidity": [
                8
            ],
            "pass_threshold_bps": [
                8
            ],
            "program": [
                523
            ],
            "program_acct": [
                6
            ],
            "proposals": [
                657
            ],
            "proposals_aggregate": [
                640
            ],
            "quote_acct": [
                6
            ],
            "slots_per_proposal": [
                8
            ],
            "token": [
                900
            ],
            "tokenByBaseAcct": [
                900
            ],
            "tokenByQuoteAcct": [
                900
            ],
            "treasury_acct": [
                6
            ],
            "twap_initial_observation": [
                8
            ],
            "twap_max_observation_change_per_update": [
                8
            ],
            "updated_at": [
                810
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
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "slots_per_proposal": [
                7
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
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
                809
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
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "program": [
                530
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                654
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "token": [
                907
            ],
            "tokenByBaseAcct": [
                907
            ],
            "tokenByQuoteAcct": [
                907
            ],
            "treasury_acct": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
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
                809
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
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
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "daos_max_order_by": {
            "base_acct": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "program_acct": [
                346
            ],
            "quote_acct": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "treasury_acct": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
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
                809
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
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
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "daos_min_order_by": {
            "base_acct": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "program_acct": [
                346
            ],
            "quote_acct": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "treasury_acct": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
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
                155
            ],
            "__typename": [
                5
            ]
        },
        "daos_obj_rel_insert_input": {
            "data": [
                167
            ],
            "on_conflict": [
                174
            ],
            "__typename": [
                5
            ]
        },
        "daos_on_conflict": {
            "constraint": [
                165
            ],
            "update_columns": [
                189
            ],
            "where": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "daos_order_by": {
            "base_acct": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "dao_detail": [
                135
            ],
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "program": [
                532
            ],
            "program_acct": [
                346
            ],
            "proposals_aggregate": [
                653
            ],
            "quote_acct": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "token": [
                909
            ],
            "tokenByBaseAcct": [
                909
            ],
            "tokenByQuoteAcct": [
                909
            ],
            "treasury_acct": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
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
                809
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
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
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_pop_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_pop_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_samp_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_stddev_samp_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_stream_cursor_input": {
            "initial_value": [
                186
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
                809
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
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
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "daos_sum_fields": {
            "dao_id": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "slots_per_proposal": [
                7
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "daos_sum_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_update_column": {},
        "daos_updates": {
            "_inc": [
                166
            ],
            "_set": [
                178
            ],
            "where": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_pop_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_pop_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_samp_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_var_samp_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "daos_variance_fields": {
            "dao_id": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "slots_per_proposal": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "daos_variance_order_by": {
            "dao_id": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "slots_per_proposal": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "float8": {},
        "float8_comparison_exp": {
            "_eq": [
                197
            ],
            "_gt": [
                197
            ],
            "_gte": [
                197
            ],
            "_in": [
                197
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                197
            ],
            "_lte": [
                197
            ],
            "_neq": [
                197
            ],
            "_nin": [
                197
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
                223
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
                1008
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate": {
            "aggregate": [
                203
            ],
            "nodes": [
                199
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp": {
            "count": [
                202
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp_count": {
            "arguments": [
                217
            ],
            "distinct": [
                0
            ],
            "filter": [
                206
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
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                209
            ],
            "min": [
                211
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_order_by": {
            "count": [
                346
            ],
            "max": [
                210
            ],
            "min": [
                212
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_arr_rel_insert_input": {
            "data": [
                208
            ],
            "on_conflict": [
                214
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_bool_exp": {
            "_and": [
                206
            ],
            "_not": [
                206
            ],
            "_or": [
                206
            ],
            "acct": [
                6
            ],
            "indexer": [
                227
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
                1012
            ],
            "updated_at": [
                810
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
                234
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
                1019
            ],
            "updated_at": [
                809
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
                809
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_max_order_by": {
            "acct": [
                346
            ],
            "latest_tx_sig_processed": [
                346
            ],
            "name": [
                346
            ],
            "status": [
                346
            ],
            "updated_at": [
                346
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
                809
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_min_order_by": {
            "acct": [
                346
            ],
            "latest_tx_sig_processed": [
                346
            ],
            "name": [
                346
            ],
            "status": [
                346
            ],
            "updated_at": [
                346
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
                199
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_on_conflict": {
            "constraint": [
                207
            ],
            "update_columns": [
                221
            ],
            "where": [
                206
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_order_by": {
            "acct": [
                346
            ],
            "indexer": [
                236
            ],
            "latest_tx_sig_processed": [
                346
            ],
            "name": [
                346
            ],
            "status": [
                346
            ],
            "transaction": [
                1021
            ],
            "updated_at": [
                346
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
                809
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_stream_cursor_input": {
            "initial_value": [
                220
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
                809
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_update_column": {},
        "indexer_account_dependencies_updates": {
            "_set": [
                218
            ],
            "where": [
                206
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
                199,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                200,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
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
                225
            ],
            "nodes": [
                223
            ],
            "__typename": [
                5
            ]
        },
        "indexers_aggregate_fields": {
            "avg": [
                226
            ],
            "count": [
                3,
                {
                    "columns": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                231
            ],
            "min": [
                232
            ],
            "stddev": [
                240
            ],
            "stddev_pop": [
                241
            ],
            "stddev_samp": [
                242
            ],
            "sum": [
                245
            ],
            "var_pop": [
                248
            ],
            "var_samp": [
                249
            ],
            "variance": [
                250
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
                227
            ],
            "_not": [
                227
            ],
            "_or": [
                227
            ],
            "implementation": [
                6
            ],
            "indexer_account_dependencies": [
                206
            ],
            "indexer_account_dependencies_aggregate": [
                201
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
                205
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
                223
            ],
            "__typename": [
                5
            ]
        },
        "indexers_obj_rel_insert_input": {
            "data": [
                230
            ],
            "on_conflict": [
                235
            ],
            "__typename": [
                5
            ]
        },
        "indexers_on_conflict": {
            "constraint": [
                228
            ],
            "update_columns": [
                246
            ],
            "where": [
                227
            ],
            "__typename": [
                5
            ]
        },
        "indexers_order_by": {
            "implementation": [
                346
            ],
            "indexer_account_dependencies_aggregate": [
                204
            ],
            "indexer_type": [
                346
            ],
            "latest_slot_processed": [
                346
            ],
            "name": [
                346
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
                244
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
                229
            ],
            "_set": [
                239
            ],
            "where": [
                227
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
        "interval": {},
        "interval_comparison_exp": {
            "_eq": [
                251
            ],
            "_gt": [
                251
            ],
            "_gte": [
                251
            ],
            "_in": [
                251
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                251
            ],
            "_lte": [
                251
            ],
            "_neq": [
                251
            ],
            "_nin": [
                251
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
                254
            ],
            "_contained_in": [
                253
            ],
            "_contains": [
                253
            ],
            "_eq": [
                253
            ],
            "_gt": [
                253
            ],
            "_gte": [
                253
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
                253
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                253
            ],
            "_lte": [
                253
            ],
            "_neq": [
                253
            ],
            "_nin": [
                253
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
                302
            ],
            "market_acct": [
                5
            ],
            "order": [
                347
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "takes": [
                765,
                {
                    "distinct_on": [
                        787,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        785,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        774
                    ]
                }
            ],
            "takes_aggregate": [
                766,
                {
                    "distinct_on": [
                        787,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        785,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        774
                    ]
                }
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate": {
            "aggregate": [
                262
            ],
            "nodes": [
                256
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp": {
            "bool_and": [
                259
            ],
            "bool_or": [
                260
            ],
            "count": [
                261
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_bool_and": {
            "arguments": [
                281
            ],
            "distinct": [
                0
            ],
            "filter": [
                267
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
                282
            ],
            "distinct": [
                0
            ],
            "filter": [
                267
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
                280
            ],
            "distinct": [
                0
            ],
            "filter": [
                267
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
                265
            ],
            "count": [
                3,
                {
                    "columns": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                271
            ],
            "min": [
                273
            ],
            "stddev": [
                284
            ],
            "stddev_pop": [
                286
            ],
            "stddev_samp": [
                288
            ],
            "sum": [
                292
            ],
            "var_pop": [
                296
            ],
            "var_samp": [
                298
            ],
            "variance": [
                300
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_order_by": {
            "avg": [
                266
            ],
            "count": [
                346
            ],
            "max": [
                272
            ],
            "min": [
                274
            ],
            "stddev": [
                285
            ],
            "stddev_pop": [
                287
            ],
            "stddev_samp": [
                289
            ],
            "sum": [
                293
            ],
            "var_pop": [
                297
            ],
            "var_samp": [
                299
            ],
            "variance": [
                301
            ],
            "__typename": [
                5
            ]
        },
        "makes_arr_rel_insert_input": {
            "data": [
                270
            ],
            "on_conflict": [
                277
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
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_bool_exp": {
            "_and": [
                267
            ],
            "_not": [
                267
            ],
            "_or": [
                267
            ],
            "filled_base_amount": [
                8
            ],
            "is_active": [
                1
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "order": [
                358
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                345
            ],
            "takes": [
                774
            ],
            "takes_aggregate": [
                767
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                810
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
                344
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
                320
            ],
            "market_acct": [
                5
            ],
            "order": [
                367
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "takes": [
                771
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
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
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "makes_max_order_by": {
            "filled_base_amount": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
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
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "makes_min_order_by": {
            "filled_base_amount": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
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
                256
            ],
            "__typename": [
                5
            ]
        },
        "makes_obj_rel_insert_input": {
            "data": [
                270
            ],
            "on_conflict": [
                277
            ],
            "__typename": [
                5
            ]
        },
        "makes_on_conflict": {
            "constraint": [
                268
            ],
            "update_columns": [
                294
            ],
            "where": [
                267
            ],
            "__typename": [
                5
            ]
        },
        "makes_order_by": {
            "filled_base_amount": [
                346
            ],
            "is_active": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "order": [
                369
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "takes_aggregate": [
                770
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
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
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
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
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_stream_cursor_input": {
            "initial_value": [
                291
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
                344
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
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
                344
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
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "makes_update_column": {},
        "makes_updates": {
            "_inc": [
                269
            ],
            "_set": [
                283
            ],
            "where": [
                267
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
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                763
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                763
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
                809
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                256,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_aggregate": [
                257,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
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
                347,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_aggregate": [
                348,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "prices": [
                393,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_aggregate": [
                394,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "proposal": [
                638
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                763
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                763
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                765,
                {
                    "distinct_on": [
                        787,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        785,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        774
                    ]
                }
            ],
            "takes_aggregate": [
                766,
                {
                    "distinct_on": [
                        787,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        785,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        774
                    ]
                }
            ],
            "token": [
                896
            ],
            "tokenAcctByAsksTokenAcct": [
                854
            ],
            "tokenAcctByBidsTokenAcct": [
                854
            ],
            "tokenByBaseMintAcct": [
                896
            ],
            "tokenByQuoteMintAcct": [
                896
            ],
            "token_acct": [
                854
            ],
            "twaps": [
                1062,
                {
                    "distinct_on": [
                        1083,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1081,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1071
                    ]
                }
            ],
            "twaps_aggregate": [
                1063,
                {
                    "distinct_on": [
                        1083,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1081,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1071
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate": {
            "aggregate": [
                306
            ],
            "nodes": [
                302
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp": {
            "count": [
                305
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp_count": {
            "arguments": [
                324
            ],
            "distinct": [
                0
            ],
            "filter": [
                311
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
                309
            ],
            "count": [
                3,
                {
                    "columns": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                315
            ],
            "min": [
                317
            ],
            "stddev": [
                326
            ],
            "stddev_pop": [
                328
            ],
            "stddev_samp": [
                330
            ],
            "sum": [
                334
            ],
            "var_pop": [
                338
            ],
            "var_samp": [
                340
            ],
            "variance": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_order_by": {
            "avg": [
                310
            ],
            "count": [
                346
            ],
            "max": [
                316
            ],
            "min": [
                318
            ],
            "stddev": [
                327
            ],
            "stddev_pop": [
                329
            ],
            "stddev_samp": [
                331
            ],
            "sum": [
                335
            ],
            "var_pop": [
                339
            ],
            "var_samp": [
                341
            ],
            "variance": [
                343
            ],
            "__typename": [
                5
            ]
        },
        "markets_arr_rel_insert_input": {
            "data": [
                314
            ],
            "on_conflict": [
                321
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
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_bool_exp": {
            "_and": [
                311
            ],
            "_not": [
                311
            ],
            "_or": [
                311
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
                764
            ],
            "base_mint_acct": [
                6
            ],
            "base_taker_fee": [
                764
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
                810
            ],
            "inactive_slot": [
                8
            ],
            "makes": [
                267
            ],
            "makes_aggregate": [
                258
            ],
            "market_acct": [
                6
            ],
            "market_type": [
                6
            ],
            "orders": [
                358
            ],
            "orders_aggregate": [
                349
            ],
            "prices": [
                402
            ],
            "prices_aggregate": [
                395
            ],
            "proposal": [
                657
            ],
            "proposal_acct": [
                6
            ],
            "quote_lot_size": [
                8
            ],
            "quote_maker_fee": [
                764
            ],
            "quote_mint_acct": [
                6
            ],
            "quote_taker_fee": [
                764
            ],
            "quote_tick_size": [
                8
            ],
            "takes": [
                774
            ],
            "takes_aggregate": [
                767
            ],
            "token": [
                900
            ],
            "tokenAcctByAsksTokenAcct": [
                863
            ],
            "tokenAcctByBidsTokenAcct": [
                863
            ],
            "tokenByBaseMintAcct": [
                900
            ],
            "tokenByQuoteMintAcct": [
                900
            ],
            "token_acct": [
                863
            ],
            "twaps": [
                1071
            ],
            "twaps_aggregate": [
                1064
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
                763
            ],
            "base_taker_fee": [
                763
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                763
            ],
            "quote_taker_fee": [
                763
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
                763
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                763
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
                809
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                264
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "orders": [
                355
            ],
            "prices": [
                399
            ],
            "proposal": [
                666
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                763
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                763
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                771
            ],
            "token": [
                907
            ],
            "tokenAcctByAsksTokenAcct": [
                872
            ],
            "tokenAcctByBidsTokenAcct": [
                872
            ],
            "tokenByBaseMintAcct": [
                907
            ],
            "tokenByQuoteMintAcct": [
                907
            ],
            "token_acct": [
                872
            ],
            "twaps": [
                1068
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
                763
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                763
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                809
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
                763
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                763
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
                346
            ],
            "asks_token_acct": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_mint_acct": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "bids_token_acct": [
                346
            ],
            "create_tx_sig": [
                346
            ],
            "created_at": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "market_acct": [
                346
            ],
            "market_type": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_mint_acct": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
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
                763
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                763
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                809
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
                763
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                763
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
                346
            ],
            "asks_token_acct": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_mint_acct": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "bids_token_acct": [
                346
            ],
            "create_tx_sig": [
                346
            ],
            "created_at": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "market_acct": [
                346
            ],
            "market_type": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_mint_acct": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
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
                302
            ],
            "__typename": [
                5
            ]
        },
        "markets_obj_rel_insert_input": {
            "data": [
                314
            ],
            "on_conflict": [
                321
            ],
            "__typename": [
                5
            ]
        },
        "markets_on_conflict": {
            "constraint": [
                312
            ],
            "update_columns": [
                336
            ],
            "where": [
                311
            ],
            "__typename": [
                5
            ]
        },
        "markets_order_by": {
            "active_slot": [
                346
            ],
            "asks_token_acct": [
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_mint_acct": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "bids_token_acct": [
                346
            ],
            "candles_aggregate": [
                14
            ],
            "create_tx_sig": [
                346
            ],
            "created_at": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "makes_aggregate": [
                263
            ],
            "market_acct": [
                346
            ],
            "market_type": [
                346
            ],
            "orders_aggregate": [
                354
            ],
            "prices_aggregate": [
                398
            ],
            "proposal": [
                668
            ],
            "proposal_acct": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_mint_acct": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "takes_aggregate": [
                770
            ],
            "token": [
                909
            ],
            "tokenAcctByAsksTokenAcct": [
                874
            ],
            "tokenAcctByBidsTokenAcct": [
                874
            ],
            "tokenByBaseMintAcct": [
                909
            ],
            "tokenByQuoteMintAcct": [
                909
            ],
            "token_acct": [
                874
            ],
            "twaps_aggregate": [
                1067
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
                763
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                763
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                809
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
                763
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                763
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
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
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
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
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
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_stream_cursor_input": {
            "initial_value": [
                333
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
                763
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                763
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                809
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
                763
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                763
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
                763
            ],
            "base_taker_fee": [
                763
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                763
            ],
            "quote_taker_fee": [
                763
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
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "markets_update_column": {},
        "markets_updates": {
            "_inc": [
                313
            ],
            "_set": [
                325
            ],
            "where": [
                311
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
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
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
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
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
                346
            ],
            "base_lot_size": [
                346
            ],
            "base_maker_fee": [
                346
            ],
            "base_taker_fee": [
                346
            ],
            "inactive_slot": [
                346
            ],
            "quote_lot_size": [
                346
            ],
            "quote_maker_fee": [
                346
            ],
            "quote_taker_fee": [
                346
            ],
            "quote_tick_size": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                344
            ],
            "_gt": [
                344
            ],
            "_gte": [
                344
            ],
            "_in": [
                344
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                344
            ],
            "_lte": [
                344
            ],
            "_neq": [
                344
            ],
            "_nin": [
                344
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
                809
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
                256
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "take": [
                765
            ],
            "transaction": [
                1008
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
            ],
            "user": [
                1167
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate": {
            "aggregate": [
                353
            ],
            "nodes": [
                347
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp": {
            "bool_and": [
                350
            ],
            "bool_or": [
                351
            ],
            "count": [
                352
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_bool_and": {
            "arguments": [
                372
            ],
            "distinct": [
                0
            ],
            "filter": [
                358
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
                373
            ],
            "distinct": [
                0
            ],
            "filter": [
                358
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
                371
            ],
            "distinct": [
                0
            ],
            "filter": [
                358
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
                356
            ],
            "count": [
                3,
                {
                    "columns": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                362
            ],
            "min": [
                364
            ],
            "stddev": [
                375
            ],
            "stddev_pop": [
                377
            ],
            "stddev_samp": [
                379
            ],
            "sum": [
                383
            ],
            "var_pop": [
                387
            ],
            "var_samp": [
                389
            ],
            "variance": [
                391
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_order_by": {
            "avg": [
                357
            ],
            "count": [
                346
            ],
            "max": [
                363
            ],
            "min": [
                365
            ],
            "stddev": [
                376
            ],
            "stddev_pop": [
                378
            ],
            "stddev_samp": [
                380
            ],
            "sum": [
                384
            ],
            "var_pop": [
                388
            ],
            "var_samp": [
                390
            ],
            "variance": [
                392
            ],
            "__typename": [
                5
            ]
        },
        "orders_arr_rel_insert_input": {
            "data": [
                361
            ],
            "on_conflict": [
                368
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
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_bool_exp": {
            "_and": [
                358
            ],
            "_not": [
                358
            ],
            "_or": [
                358
            ],
            "actor_acct": [
                6
            ],
            "cancel_block": [
                8
            ],
            "cancel_time": [
                810
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
                267
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "order_block": [
                8
            ],
            "order_time": [
                810
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                345
            ],
            "side": [
                6
            ],
            "take": [
                774
            ],
            "transaction": [
                1012
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                810
            ],
            "user": [
                1170
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
                344
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
                809
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
                276
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "take": [
                783
            ],
            "transaction": [
                1019
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
            ],
            "user": [
                1176
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
                809
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
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "orders_max_order_by": {
            "actor_acct": [
                346
            ],
            "cancel_block": [
                346
            ],
            "cancel_time": [
                346
            ],
            "cancel_tx_sig": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "side": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
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
                809
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
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "orders_min_order_by": {
            "actor_acct": [
                346
            ],
            "cancel_block": [
                346
            ],
            "cancel_time": [
                346
            ],
            "cancel_tx_sig": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "side": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
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
                347
            ],
            "__typename": [
                5
            ]
        },
        "orders_obj_rel_insert_input": {
            "data": [
                361
            ],
            "on_conflict": [
                368
            ],
            "__typename": [
                5
            ]
        },
        "orders_on_conflict": {
            "constraint": [
                359
            ],
            "update_columns": [
                385
            ],
            "where": [
                358
            ],
            "__typename": [
                5
            ]
        },
        "orders_order_by": {
            "actor_acct": [
                346
            ],
            "cancel_block": [
                346
            ],
            "cancel_time": [
                346
            ],
            "cancel_tx_sig": [
                346
            ],
            "filled_base_amount": [
                346
            ],
            "is_active": [
                346
            ],
            "make": [
                278
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "side": [
                346
            ],
            "take": [
                785
            ],
            "transaction": [
                1021
            ],
            "unfilled_base_amount": [
                346
            ],
            "updated_at": [
                346
            ],
            "user": [
                1178
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
                809
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
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
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
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_stream_cursor_input": {
            "initial_value": [
                382
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
                809
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
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                809
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
                344
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
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "orders_update_column": {},
        "orders_updates": {
            "_inc": [
                360
            ],
            "_set": [
                374
            ],
            "where": [
                358
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
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                346
            ],
            "filled_base_amount": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "unfilled_base_amount": [
                346
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
                809
            ],
            "created_by": [
                5
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                397
            ],
            "nodes": [
                393
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_bool_exp": {
            "count": [
                396
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_bool_exp_count": {
            "arguments": [
                440
            ],
            "distinct": [
                0
            ],
            "filter": [
                402
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
                400
            ],
            "count": [
                3,
                {
                    "columns": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                432
            ],
            "min": [
                434
            ],
            "stddev": [
                442
            ],
            "stddev_pop": [
                444
            ],
            "stddev_samp": [
                446
            ],
            "sum": [
                450
            ],
            "var_pop": [
                454
            ],
            "var_samp": [
                456
            ],
            "variance": [
                458
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_order_by": {
            "avg": [
                401
            ],
            "count": [
                346
            ],
            "max": [
                433
            ],
            "min": [
                435
            ],
            "stddev": [
                443
            ],
            "stddev_pop": [
                445
            ],
            "stddev_samp": [
                447
            ],
            "sum": [
                451
            ],
            "var_pop": [
                455
            ],
            "var_samp": [
                457
            ],
            "variance": [
                459
            ],
            "__typename": [
                5
            ]
        },
        "prices_arr_rel_insert_input": {
            "data": [
                431
            ],
            "on_conflict": [
                437
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
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_bool_exp": {
            "_and": [
                402
            ],
            "_not": [
                402
            ],
            "_or": [
                402
            ],
            "base_amount": [
                8
            ],
            "created_at": [
                810
            ],
            "created_by": [
                6
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "price": [
                345
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
                809
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                405
            ],
            "nodes": [
                403
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_aggregate_fields": {
            "avg": [
                406
            ],
            "count": [
                3,
                {
                    "columns": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                411
            ],
            "min": [
                412
            ],
            "stddev": [
                418
            ],
            "stddev_pop": [
                419
            ],
            "stddev_samp": [
                420
            ],
            "sum": [
                423
            ],
            "var_pop": [
                426
            ],
            "var_samp": [
                427
            ],
            "variance": [
                428
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
                407
            ],
            "_not": [
                407
            ],
            "_or": [
                407
            ],
            "base_amount": [
                8
            ],
            "interv": [
                810
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "price": [
                345
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
        "prices_chart_data_constraint": {},
        "prices_chart_data_inc_input": {
            "base_amount": [
                7
            ],
            "price": [
                344
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_insert_input": {
            "base_amount": [
                7
            ],
            "interv": [
                809
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
        "prices_chart_data_max_fields": {
            "base_amount": [
                7
            ],
            "interv": [
                809
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                809
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
        "prices_chart_data_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                403
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_on_conflict": {
            "constraint": [
                408
            ],
            "update_columns": [
                424
            ],
            "where": [
                407
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_order_by": {
            "base_amount": [
                346
            ],
            "interv": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "price": [
                346
            ],
            "prices_type": [
                346
            ],
            "quote_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_select_column": {},
        "prices_chart_data_set_input": {
            "base_amount": [
                7
            ],
            "interv": [
                809
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                422
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
                809
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                344
            ],
            "quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_update_column": {},
        "prices_chart_data_updates": {
            "_inc": [
                409
            ],
            "_set": [
                417
            ],
            "where": [
                407
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
                344
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
                809
            ],
            "created_by": [
                5
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                809
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                346
            ],
            "created_at": [
                346
            ],
            "created_by": [
                346
            ],
            "market_acct": [
                346
            ],
            "price": [
                346
            ],
            "prices_type": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
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
                809
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                346
            ],
            "created_at": [
                346
            ],
            "created_by": [
                346
            ],
            "market_acct": [
                346
            ],
            "price": [
                346
            ],
            "prices_type": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
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
                393
            ],
            "__typename": [
                5
            ]
        },
        "prices_on_conflict": {
            "constraint": [
                429
            ],
            "update_columns": [
                452
            ],
            "where": [
                402
            ],
            "__typename": [
                5
            ]
        },
        "prices_order_by": {
            "base_amount": [
                346
            ],
            "created_at": [
                346
            ],
            "created_by": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "price": [
                346
            ],
            "prices_type": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_pk_columns_input": {
            "created_at": [
                809
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
                809
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
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
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
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
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_stream_cursor_input": {
            "initial_value": [
                449
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
                809
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                344
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
                344
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
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "prices_update_column": {},
        "prices_updates": {
            "_inc": [
                430
            ],
            "_set": [
                441
            ],
            "where": [
                402
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
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
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
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
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
                346
            ],
            "price": [
                346
            ],
            "quote_amount": [
                346
            ],
            "updated_slot": [
                346
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
                519
            ],
            "programByConditionalVaultAcct": [
                519
            ],
            "programByMigratorAcct": [
                519
            ],
            "programByPricingModelAcct": [
                519
            ],
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate": {
            "aggregate": [
                474
            ],
            "nodes": [
                460
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp": {
            "avg": [
                463
            ],
            "corr": [
                464
            ],
            "count": [
                466
            ],
            "covar_samp": [
                467
            ],
            "max": [
                469
            ],
            "min": [
                470
            ],
            "stddev_samp": [
                471
            ],
            "sum": [
                472
            ],
            "var_samp": [
                473
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_avg": {
            "arguments": [
                492
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr": {
            "arguments": [
                465
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr_arguments": {
            "X": [
                493
            ],
            "Y": [
                493
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_count": {
            "arguments": [
                491
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
        "program_system_aggregate_bool_exp_covar_samp": {
            "arguments": [
                468
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                494
            ],
            "Y": [
                494
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_max": {
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
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_min": {
            "arguments": [
                496
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                497
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_sum": {
            "arguments": [
                498
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_var_samp": {
            "arguments": [
                499
            ],
            "distinct": [
                0
            ],
            "filter": [
                479
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_fields": {
            "avg": [
                477
            ],
            "count": [
                3,
                {
                    "columns": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                483
            ],
            "min": [
                485
            ],
            "stddev": [
                501
            ],
            "stddev_pop": [
                503
            ],
            "stddev_samp": [
                505
            ],
            "sum": [
                509
            ],
            "var_pop": [
                513
            ],
            "var_samp": [
                515
            ],
            "variance": [
                517
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_order_by": {
            "avg": [
                478
            ],
            "count": [
                346
            ],
            "max": [
                484
            ],
            "min": [
                486
            ],
            "stddev": [
                502
            ],
            "stddev_pop": [
                504
            ],
            "stddev_samp": [
                506
            ],
            "sum": [
                510
            ],
            "var_pop": [
                514
            ],
            "var_samp": [
                516
            ],
            "variance": [
                518
            ],
            "__typename": [
                5
            ]
        },
        "program_system_arr_rel_insert_input": {
            "data": [
                482
            ],
            "on_conflict": [
                488
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_bool_exp": {
            "_and": [
                479
            ],
            "_not": [
                479
            ],
            "_or": [
                479
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
                523
            ],
            "programByConditionalVaultAcct": [
                523
            ],
            "programByMigratorAcct": [
                523
            ],
            "programByPricingModelAcct": [
                523
            ],
            "system_version": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "program_system_constraint": {},
        "program_system_inc_input": {
            "system_version": [
                197
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
                530
            ],
            "programByConditionalVaultAcct": [
                530
            ],
            "programByMigratorAcct": [
                530
            ],
            "programByPricingModelAcct": [
                530
            ],
            "system_version": [
                197
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
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_max_order_by": {
            "autocrat_acct": [
                346
            ],
            "conditional_vault_acct": [
                346
            ],
            "migrator_acct": [
                346
            ],
            "pricing_model_acct": [
                346
            ],
            "system_version": [
                346
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
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_min_order_by": {
            "autocrat_acct": [
                346
            ],
            "conditional_vault_acct": [
                346
            ],
            "migrator_acct": [
                346
            ],
            "pricing_model_acct": [
                346
            ],
            "system_version": [
                346
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
                460
            ],
            "__typename": [
                5
            ]
        },
        "program_system_on_conflict": {
            "constraint": [
                480
            ],
            "update_columns": [
                511
            ],
            "where": [
                479
            ],
            "__typename": [
                5
            ]
        },
        "program_system_order_by": {
            "autocrat_acct": [
                346
            ],
            "conditional_vault_acct": [
                346
            ],
            "migrator_acct": [
                346
            ],
            "pricing_model_acct": [
                346
            ],
            "program": [
                532
            ],
            "programByConditionalVaultAcct": [
                532
            ],
            "programByMigratorAcct": [
                532
            ],
            "programByPricingModelAcct": [
                532
            ],
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_pk_columns_input": {
            "system_version": [
                197
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
                197
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
                346
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
                346
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stream_cursor_input": {
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
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_fields": {
            "system_version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_order_by": {
            "system_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "program_system_update_column": {},
        "program_system_updates": {
            "_inc": [
                481
            ],
            "_set": [
                500
            ],
            "where": [
                479
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
                346
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
                346
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "programs": {
            "created_at": [
                809
            ],
            "daos": [
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "deployed_at": [
                807
            ],
            "programSystemsByConditionalVaultAcct": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByMigratorAcct": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByMigratorAcct_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByPricingModelAcct": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
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
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_systems_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate": {
            "aggregate": [
                521
            ],
            "nodes": [
                519
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate_fields": {
            "avg": [
                522
            ],
            "count": [
                3,
                {
                    "columns": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                527
            ],
            "min": [
                528
            ],
            "stddev": [
                536
            ],
            "stddev_pop": [
                537
            ],
            "stddev_samp": [
                538
            ],
            "sum": [
                541
            ],
            "var_pop": [
                544
            ],
            "var_samp": [
                545
            ],
            "variance": [
                546
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
                523
            ],
            "_not": [
                523
            ],
            "_or": [
                523
            ],
            "created_at": [
                810
            ],
            "daos": [
                164
            ],
            "daos_aggregate": [
                157
            ],
            "deployed_at": [
                808
            ],
            "programSystemsByConditionalVaultAcct": [
                479
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                462
            ],
            "programSystemsByMigratorAcct": [
                479
            ],
            "programSystemsByMigratorAcct_aggregate": [
                462
            ],
            "programSystemsByPricingModelAcct": [
                479
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                462
            ],
            "program_acct": [
                6
            ],
            "program_name": [
                6
            ],
            "program_systems": [
                479
            ],
            "program_systems_aggregate": [
                462
            ],
            "version": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "programs_constraint": {},
        "programs_inc_input": {
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_insert_input": {
            "created_at": [
                809
            ],
            "daos": [
                161
            ],
            "deployed_at": [
                807
            ],
            "programSystemsByConditionalVaultAcct": [
                476
            ],
            "programSystemsByMigratorAcct": [
                476
            ],
            "programSystemsByPricingModelAcct": [
                476
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                476
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_max_fields": {
            "created_at": [
                809
            ],
            "deployed_at": [
                807
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_min_fields": {
            "created_at": [
                809
            ],
            "deployed_at": [
                807
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                197
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
                519
            ],
            "__typename": [
                5
            ]
        },
        "programs_obj_rel_insert_input": {
            "data": [
                526
            ],
            "on_conflict": [
                531
            ],
            "__typename": [
                5
            ]
        },
        "programs_on_conflict": {
            "constraint": [
                524
            ],
            "update_columns": [
                542
            ],
            "where": [
                523
            ],
            "__typename": [
                5
            ]
        },
        "programs_order_by": {
            "created_at": [
                346
            ],
            "daos_aggregate": [
                160
            ],
            "deployed_at": [
                346
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                475
            ],
            "programSystemsByMigratorAcct_aggregate": [
                475
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                475
            ],
            "program_acct": [
                346
            ],
            "program_name": [
                346
            ],
            "program_systems_aggregate": [
                475
            ],
            "version": [
                346
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
                809
            ],
            "deployed_at": [
                807
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                197
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
                540
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
                809
            ],
            "deployed_at": [
                807
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_sum_fields": {
            "version": [
                197
            ],
            "__typename": [
                5
            ]
        },
        "programs_update_column": {},
        "programs_updates": {
            "_inc": [
                525
            ],
            "_set": [
                535
            ],
            "where": [
                523
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
        "proposal_bars": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                809
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market": [
                302
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market": [
                302
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_aggregate": {
            "aggregate": [
                549
            ],
            "nodes": [
                547
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_aggregate_fields": {
            "avg": [
                550
            ],
            "count": [
                3,
                {
                    "columns": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                555
            ],
            "min": [
                556
            ],
            "stddev": [
                563
            ],
            "stddev_pop": [
                564
            ],
            "stddev_samp": [
                565
            ],
            "sum": [
                568
            ],
            "var_pop": [
                571
            ],
            "var_samp": [
                572
            ],
            "variance": [
                573
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_avg_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_bool_exp": {
            "_and": [
                551
            ],
            "_not": [
                551
            ],
            "_or": [
                551
            ],
            "bar_size": [
                252
            ],
            "bar_start_time": [
                810
            ],
            "fail_base_amount": [
                8
            ],
            "fail_market": [
                311
            ],
            "fail_market_acct": [
                6
            ],
            "fail_price": [
                345
            ],
            "fail_quote_amount": [
                8
            ],
            "pass_base_amount": [
                8
            ],
            "pass_market": [
                311
            ],
            "pass_market_acct": [
                6
            ],
            "pass_price": [
                345
            ],
            "pass_quote_amount": [
                8
            ],
            "proposal_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_constraint": {},
        "proposal_bars_inc_input": {
            "fail_base_amount": [
                7
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_insert_input": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                809
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market": [
                320
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market": [
                320
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_max_fields": {
            "bar_start_time": [
                809
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_min_fields": {
            "bar_start_time": [
                809
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                547
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_on_conflict": {
            "constraint": [
                552
            ],
            "update_columns": [
                569
            ],
            "where": [
                551
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_order_by": {
            "bar_size": [
                346
            ],
            "bar_start_time": [
                346
            ],
            "fail_base_amount": [
                346
            ],
            "fail_market": [
                322
            ],
            "fail_market_acct": [
                346
            ],
            "fail_price": [
                346
            ],
            "fail_quote_amount": [
                346
            ],
            "pass_base_amount": [
                346
            ],
            "pass_market": [
                322
            ],
            "pass_market_acct": [
                346
            ],
            "pass_price": [
                346
            ],
            "pass_quote_amount": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_pk_columns_input": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                809
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_select_column": {},
        "proposal_bars_set_input": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                809
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stddev_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stddev_pop_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stddev_samp_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stream_cursor_input": {
            "initial_value": [
                567
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_stream_cursor_value_input": {
            "bar_size": [
                251
            ],
            "bar_start_time": [
                809
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_sum_fields": {
            "fail_base_amount": [
                7
            ],
            "fail_price": [
                344
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_price": [
                344
            ],
            "pass_quote_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_update_column": {},
        "proposal_bars_updates": {
            "_inc": [
                553
            ],
            "_set": [
                562
            ],
            "where": [
                551
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_var_pop_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_var_samp_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_variance_fields": {
            "fail_base_amount": [
                2
            ],
            "fail_price": [
                2
            ],
            "fail_quote_amount": [
                2
            ],
            "pass_base_amount": [
                2
            ],
            "pass_price": [
                2
            ],
            "pass_quote_amount": [
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
                253,
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
                638
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
                578
            ],
            "nodes": [
                574
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp": {
            "count": [
                577
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp_count": {
            "arguments": [
                600
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
        "proposal_details_aggregate_fields": {
            "avg": [
                582
            ],
            "count": [
                3,
                {
                    "columns": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                591
            ],
            "min": [
                593
            ],
            "stddev": [
                602
            ],
            "stddev_pop": [
                604
            ],
            "stddev_samp": [
                606
            ],
            "sum": [
                610
            ],
            "var_pop": [
                614
            ],
            "var_samp": [
                616
            ],
            "variance": [
                618
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_order_by": {
            "avg": [
                583
            ],
            "count": [
                346
            ],
            "max": [
                592
            ],
            "min": [
                594
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
        "proposal_details_append_input": {
            "categories": [
                253
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_arr_rel_insert_input": {
            "data": [
                590
            ],
            "on_conflict": [
                596
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_bool_exp": {
            "_and": [
                584
            ],
            "_not": [
                584
            ],
            "_or": [
                584
            ],
            "base_cond_vault_acct": [
                6
            ],
            "categories": [
                255
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
                657
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
                253
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
                666
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
                346
            ],
            "content": [
                346
            ],
            "description": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_id": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_cond_vault_acct": [
                346
            ],
            "slug": [
                346
            ],
            "title": [
                346
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
                346
            ],
            "content": [
                346
            ],
            "description": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_id": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_cond_vault_acct": [
                346
            ],
            "slug": [
                346
            ],
            "title": [
                346
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
                574
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_on_conflict": {
            "constraint": [
                585
            ],
            "update_columns": [
                612
            ],
            "where": [
                584
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_order_by": {
            "base_cond_vault_acct": [
                346
            ],
            "categories": [
                346
            ],
            "content": [
                346
            ],
            "description": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "proposal": [
                668
            ],
            "proposal_acct": [
                346
            ],
            "proposal_id": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_cond_vault_acct": [
                346
            ],
            "slug": [
                346
            ],
            "title": [
                346
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
                253
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
                253
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
                346
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
                346
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_input": {
            "initial_value": [
                609
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
                253
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_update_column": {},
        "proposal_details_updates": {
            "_append": [
                580
            ],
            "_delete_at_path": [
                586
            ],
            "_delete_elem": [
                587
            ],
            "_delete_key": [
                588
            ],
            "_inc": [
                589
            ],
            "_prepend": [
                599
            ],
            "_set": [
                601
            ],
            "where": [
                584
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
                346
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
                346
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
                346
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
                344
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                344
            ],
            "proposalTradeVolume": [
                638
            ],
            "proposalTradeVolumeFailMarket": [
                302
            ],
            "proposalTradeVolumePassMarket": [
                302
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
                622
            ],
            "nodes": [
                620
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_aggregate_fields": {
            "avg": [
                623
            ],
            "count": [
                3,
                {
                    "columns": [
                        628,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                625
            ],
            "min": [
                626
            ],
            "stddev": [
                629
            ],
            "stddev_pop": [
                630
            ],
            "stddev_samp": [
                631
            ],
            "sum": [
                634
            ],
            "var_pop": [
                635
            ],
            "var_samp": [
                636
            ],
            "variance": [
                637
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
                624
            ],
            "_not": [
                624
            ],
            "_or": [
                624
            ],
            "fail_market_acct": [
                6
            ],
            "fail_volume": [
                345
            ],
            "pass_market_acct": [
                6
            ],
            "pass_volume": [
                345
            ],
            "proposalTradeVolume": [
                657
            ],
            "proposalTradeVolumeFailMarket": [
                311
            ],
            "proposalTradeVolumePassMarket": [
                311
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
                344
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                344
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
                344
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                344
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
                346
            ],
            "fail_volume": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "pass_volume": [
                346
            ],
            "proposalTradeVolume": [
                668
            ],
            "proposalTradeVolumeFailMarket": [
                322
            ],
            "proposalTradeVolumePassMarket": [
                322
            ],
            "proposal_acct": [
                346
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
                633
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
                344
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                344
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
                344
            ],
            "pass_volume": [
                344
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
                197
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
                809
            ],
            "conditionalVaultByQuoteVault": [
                92
            ],
            "conditional_vault": [
                92
            ],
            "created_at": [
                809
            ],
            "dao": [
                155
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                809
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
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
                574,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_aggregate": [
                575,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
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
                698,
                {
                    "distinct_on": [
                        719,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        707
                    ]
                }
            ],
            "reactions_aggregate": [
                699,
                {
                    "distinct_on": [
                        719,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        707
                    ]
                }
            ],
            "status": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "twaps": [
                1062,
                {
                    "distinct_on": [
                        1083,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1081,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1071
                    ]
                }
            ],
            "twaps_aggregate": [
                1063,
                {
                    "distinct_on": [
                        1083,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1081,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1071
                    ]
                }
            ],
            "updated_at": [
                809
            ],
            "user_performances": [
                1126,
                {
                    "distinct_on": [
                        1147,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1145,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1135
                    ]
                }
            ],
            "user_performances_aggregate": [
                1127,
                {
                    "distinct_on": [
                        1147,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1145,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1135
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate": {
            "aggregate": [
                652
            ],
            "nodes": [
                638
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp": {
            "avg": [
                641
            ],
            "corr": [
                642
            ],
            "count": [
                644
            ],
            "covar_samp": [
                645
            ],
            "max": [
                647
            ],
            "min": [
                648
            ],
            "stddev_samp": [
                649
            ],
            "sum": [
                650
            ],
            "var_samp": [
                651
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_avg": {
            "arguments": [
                671
            ],
            "distinct": [
                0
            ],
            "filter": [
                657
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr": {
            "arguments": [
                643
            ],
            "distinct": [
                0
            ],
            "filter": [
                657
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr_arguments": {
            "X": [
                672
            ],
            "Y": [
                672
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_count": {
            "arguments": [
                670
            ],
            "distinct": [
                0
            ],
            "filter": [
                657
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
                646
            ],
            "distinct": [
                0
            ],
            "filter": [
                657
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                673
            ],
            "Y": [
                673
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_max": {
            "arguments": [
                674
            ],
            "distinct": [
                0
            ],
            "filter": [
                657
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_min": {
            "arguments": [
                675
            ],
            "distinct": [
                0
            ],
            "filter": [
                657
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                676
            ],
            "distinct": [
                0
            ],
            "filter": [
                657
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_sum": {
            "arguments": [
                677
            ],
            "distinct": [
                0
            ],
            "filter": [
                657
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_var_samp": {
            "arguments": [
                678
            ],
            "distinct": [
                0
            ],
            "filter": [
                657
            ],
            "predicate": [
                198
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_fields": {
            "avg": [
                655
            ],
            "count": [
                3,
                {
                    "columns": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                661
            ],
            "min": [
                663
            ],
            "stddev": [
                680
            ],
            "stddev_pop": [
                682
            ],
            "stddev_samp": [
                684
            ],
            "sum": [
                688
            ],
            "var_pop": [
                692
            ],
            "var_samp": [
                694
            ],
            "variance": [
                696
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_order_by": {
            "avg": [
                656
            ],
            "count": [
                346
            ],
            "max": [
                662
            ],
            "min": [
                664
            ],
            "stddev": [
                681
            ],
            "stddev_pop": [
                683
            ],
            "stddev_samp": [
                685
            ],
            "sum": [
                689
            ],
            "var_pop": [
                693
            ],
            "var_samp": [
                695
            ],
            "variance": [
                697
            ],
            "__typename": [
                5
            ]
        },
        "proposals_arr_rel_insert_input": {
            "data": [
                660
            ],
            "on_conflict": [
                667
            ],
            "__typename": [
                5
            ]
        },
        "proposals_avg_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_avg_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_bool_exp": {
            "_and": [
                657
            ],
            "_not": [
                657
            ],
            "_or": [
                657
            ],
            "autocrat_version": [
                198
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
                810
            ],
            "conditionalVaultByQuoteVault": [
                99
            ],
            "conditional_vault": [
                99
            ],
            "created_at": [
                810
            ],
            "dao": [
                164
            ],
            "dao_acct": [
                6
            ],
            "description_url": [
                6
            ],
            "duration_in_slots": [
                8
            ],
            "end_slot": [
                8
            ],
            "ended_at": [
                810
            ],
            "fail_market_acct": [
                6
            ],
            "initial_slot": [
                8
            ],
            "markets": [
                311
            ],
            "markets_aggregate": [
                304
            ],
            "min_base_futarchic_liquidity": [
                8
            ],
            "min_quote_futarchic_liquidity": [
                8
            ],
            "pass_market_acct": [
                6
            ],
            "pass_threshold_bps": [
                8
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
                584
            ],
            "proposal_details_aggregate": [
                576
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
                707
            ],
            "reactions_aggregate": [
                700
            ],
            "status": [
                6
            ],
            "twap_initial_observation": [
                8
            ],
            "twap_max_observation_change_per_update": [
                8
            ],
            "twaps": [
                1071
            ],
            "twaps_aggregate": [
                1064
            ],
            "updated_at": [
                810
            ],
            "user_performances": [
                1135
            ],
            "user_performances_aggregate": [
                1128
            ],
            "__typename": [
                5
            ]
        },
        "proposals_constraint": {},
        "proposals_inc_input": {
            "autocrat_version": [
                197
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "proposal_num": [
                7
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposals_insert_input": {
            "autocrat_version": [
                197
            ],
            "base_vault": [
                5
            ],
            "comments": [
                56
            ],
            "completed_at": [
                809
            ],
            "conditionalVaultByQuoteVault": [
                107
            ],
            "conditional_vault": [
                107
            ],
            "created_at": [
                809
            ],
            "dao": [
                173
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                809
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                308
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
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
                581
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
                704
            ],
            "status": [
                5
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "twaps": [
                1068
            ],
            "updated_at": [
                809
            ],
            "user_performances": [
                1132
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_fields": {
            "autocrat_version": [
                197
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                809
            ],
            "created_at": [
                809
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                809
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
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
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_order_by": {
            "autocrat_version": [
                346
            ],
            "base_vault": [
                346
            ],
            "completed_at": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "description_url": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "ended_at": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "pricing_model_fail_acct": [
                346
            ],
            "pricing_model_pass_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_num": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_vault": [
                346
            ],
            "status": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_fields": {
            "autocrat_version": [
                197
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                809
            ],
            "created_at": [
                809
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                809
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
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
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_order_by": {
            "autocrat_version": [
                346
            ],
            "base_vault": [
                346
            ],
            "completed_at": [
                346
            ],
            "created_at": [
                346
            ],
            "dao_acct": [
                346
            ],
            "description_url": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "ended_at": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "pricing_model_fail_acct": [
                346
            ],
            "pricing_model_pass_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_num": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_vault": [
                346
            ],
            "status": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "updated_at": [
                346
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
                638
            ],
            "__typename": [
                5
            ]
        },
        "proposals_obj_rel_insert_input": {
            "data": [
                660
            ],
            "on_conflict": [
                667
            ],
            "__typename": [
                5
            ]
        },
        "proposals_on_conflict": {
            "constraint": [
                658
            ],
            "update_columns": [
                690
            ],
            "where": [
                657
            ],
            "__typename": [
                5
            ]
        },
        "proposals_order_by": {
            "autocrat_version": [
                346
            ],
            "base_vault": [
                346
            ],
            "comments_aggregate": [
                55
            ],
            "completed_at": [
                346
            ],
            "conditionalVaultByQuoteVault": [
                109
            ],
            "conditional_vault": [
                109
            ],
            "created_at": [
                346
            ],
            "dao": [
                175
            ],
            "dao_acct": [
                346
            ],
            "description_url": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "ended_at": [
                346
            ],
            "fail_market_acct": [
                346
            ],
            "initial_slot": [
                346
            ],
            "markets_aggregate": [
                307
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_market_acct": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "pricing_model_fail_acct": [
                346
            ],
            "pricing_model_pass_acct": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "proposal_details_aggregate": [
                579
            ],
            "proposal_num": [
                346
            ],
            "proposer_acct": [
                346
            ],
            "quote_vault": [
                346
            ],
            "reactions_aggregate": [
                703
            ],
            "status": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "twaps_aggregate": [
                1067
            ],
            "updated_at": [
                346
            ],
            "user_performances_aggregate": [
                1131
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
                197
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                809
            ],
            "created_at": [
                809
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                809
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
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
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_pop_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_pop_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_samp_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stddev_samp_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_input": {
            "initial_value": [
                687
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
                197
            ],
            "base_vault": [
                5
            ],
            "completed_at": [
                809
            ],
            "created_at": [
                809
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                809
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_market_acct": [
                5
            ],
            "pass_threshold_bps": [
                7
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
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_fields": {
            "autocrat_version": [
                197
            ],
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "initial_slot": [
                7
            ],
            "min_base_futarchic_liquidity": [
                7
            ],
            "min_quote_futarchic_liquidity": [
                7
            ],
            "pass_threshold_bps": [
                7
            ],
            "proposal_num": [
                7
            ],
            "twap_initial_observation": [
                7
            ],
            "twap_max_observation_change_per_update": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_update_column": {},
        "proposals_updates": {
            "_inc": [
                659
            ],
            "_set": [
                679
            ],
            "where": [
                657
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_pop_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_pop_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_samp_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_var_samp_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "proposals_variance_fields": {
            "autocrat_version": [
                2
            ],
            "duration_in_slots": [
                2
            ],
            "end_slot": [
                2
            ],
            "initial_slot": [
                2
            ],
            "min_base_futarchic_liquidity": [
                2
            ],
            "min_quote_futarchic_liquidity": [
                2
            ],
            "pass_threshold_bps": [
                2
            ],
            "proposal_num": [
                2
            ],
            "twap_initial_observation": [
                2
            ],
            "twap_max_observation_change_per_update": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals_variance_order_by": {
            "autocrat_version": [
                346
            ],
            "duration_in_slots": [
                346
            ],
            "end_slot": [
                346
            ],
            "initial_slot": [
                346
            ],
            "min_base_futarchic_liquidity": [
                346
            ],
            "min_quote_futarchic_liquidity": [
                346
            ],
            "pass_threshold_bps": [
                346
            ],
            "proposal_num": [
                346
            ],
            "twap_initial_observation": [
                346
            ],
            "twap_max_observation_change_per_update": [
                346
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
                638
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1186
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate": {
            "aggregate": [
                702
            ],
            "nodes": [
                698
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp": {
            "count": [
                701
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp_count": {
            "arguments": [
                719
            ],
            "distinct": [
                0
            ],
            "filter": [
                707
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
                705
            ],
            "count": [
                3,
                {
                    "columns": [
                        719,
                        "[reactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                711
            ],
            "min": [
                713
            ],
            "stddev": [
                721
            ],
            "stddev_pop": [
                723
            ],
            "stddev_samp": [
                725
            ],
            "sum": [
                729
            ],
            "var_pop": [
                733
            ],
            "var_samp": [
                735
            ],
            "variance": [
                737
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_order_by": {
            "avg": [
                706
            ],
            "count": [
                346
            ],
            "max": [
                712
            ],
            "min": [
                714
            ],
            "stddev": [
                722
            ],
            "stddev_pop": [
                724
            ],
            "stddev_samp": [
                726
            ],
            "sum": [
                730
            ],
            "var_pop": [
                734
            ],
            "var_samp": [
                736
            ],
            "variance": [
                738
            ],
            "__typename": [
                5
            ]
        },
        "reactions_arr_rel_insert_input": {
            "data": [
                710
            ],
            "on_conflict": [
                716
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_bool_exp": {
            "_and": [
                707
            ],
            "_not": [
                707
            ],
            "_or": [
                707
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "proposal": [
                657
            ],
            "proposal_acct": [
                6
            ],
            "reaction": [
                6
            ],
            "reaction_id": [
                1187
            ],
            "reactor_acct": [
                6
            ],
            "updated_at": [
                810
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
                666
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1186
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                809
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
            "reaction_id": [
                1186
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "reactions_max_order_by": {
            "comment_id": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "reaction": [
                346
            ],
            "reaction_id": [
                346
            ],
            "reactor_acct": [
                346
            ],
            "updated_at": [
                346
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
            "reaction_id": [
                1186
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "reactions_min_order_by": {
            "comment_id": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "reaction": [
                346
            ],
            "reaction_id": [
                346
            ],
            "reactor_acct": [
                346
            ],
            "updated_at": [
                346
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
                698
            ],
            "__typename": [
                5
            ]
        },
        "reactions_on_conflict": {
            "constraint": [
                708
            ],
            "update_columns": [
                731
            ],
            "where": [
                707
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
                346
            ],
            "proposal": [
                668
            ],
            "proposal_acct": [
                346
            ],
            "reaction": [
                346
            ],
            "reaction_id": [
                346
            ],
            "reactor_acct": [
                346
            ],
            "updated_at": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_pk_columns_input": {
            "reaction_id": [
                1186
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
            "reaction_id": [
                1186
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                809
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
                346
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
                346
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stream_cursor_input": {
            "initial_value": [
                728
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
            "reaction_id": [
                1186
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                809
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "reactions_update_column": {},
        "reactions_updates": {
            "_inc": [
                709
            ],
            "_set": [
                720
            ],
            "where": [
                707
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
                346
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
                346
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "sessions": {
            "created_at": [
                809
            ],
            "expires_at": [
                807
            ],
            "id": [
                1186
            ],
            "user": [
                1167
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
                743
            ],
            "nodes": [
                739
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp": {
            "count": [
                742
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp_count": {
            "arguments": [
                757
            ],
            "distinct": [
                0
            ],
            "filter": [
                746
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
                        757,
                        "[sessions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                749
            ],
            "min": [
                751
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_order_by": {
            "count": [
                346
            ],
            "max": [
                750
            ],
            "min": [
                752
            ],
            "__typename": [
                5
            ]
        },
        "sessions_arr_rel_insert_input": {
            "data": [
                748
            ],
            "on_conflict": [
                754
            ],
            "__typename": [
                5
            ]
        },
        "sessions_bool_exp": {
            "_and": [
                746
            ],
            "_not": [
                746
            ],
            "_or": [
                746
            ],
            "created_at": [
                810
            ],
            "expires_at": [
                808
            ],
            "id": [
                1187
            ],
            "user": [
                1170
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
                809
            ],
            "expires_at": [
                807
            ],
            "id": [
                1186
            ],
            "user": [
                1176
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
                809
            ],
            "expires_at": [
                807
            ],
            "id": [
                1186
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
                346
            ],
            "expires_at": [
                346
            ],
            "id": [
                346
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "sessions_min_fields": {
            "created_at": [
                809
            ],
            "expires_at": [
                807
            ],
            "id": [
                1186
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
                346
            ],
            "expires_at": [
                346
            ],
            "id": [
                346
            ],
            "user_acct": [
                346
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
                739
            ],
            "__typename": [
                5
            ]
        },
        "sessions_on_conflict": {
            "constraint": [
                747
            ],
            "update_columns": [
                761
            ],
            "where": [
                746
            ],
            "__typename": [
                5
            ]
        },
        "sessions_order_by": {
            "created_at": [
                346
            ],
            "expires_at": [
                346
            ],
            "id": [
                346
            ],
            "user": [
                1178
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "sessions_pk_columns_input": {
            "id": [
                1186
            ],
            "__typename": [
                5
            ]
        },
        "sessions_select_column": {},
        "sessions_set_input": {
            "created_at": [
                809
            ],
            "expires_at": [
                807
            ],
            "id": [
                1186
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
                760
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
                809
            ],
            "expires_at": [
                807
            ],
            "id": [
                1186
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
                758
            ],
            "where": [
                746
            ],
            "__typename": [
                5
            ]
        },
        "smallint": {},
        "smallint_comparison_exp": {
            "_eq": [
                763
            ],
            "_gt": [
                763
            ],
            "_gte": [
                763
            ],
            "_in": [
                763
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                763
            ],
            "_lte": [
                763
            ],
            "_neq": [
                763
            ],
            "_nin": [
                763
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
                256
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
                302
            ],
            "market_acct": [
                5
            ],
            "order": [
                347
            ],
            "order_block": [
                7
            ],
            "order_time": [
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
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
                769
            ],
            "nodes": [
                765
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp": {
            "count": [
                768
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp_count": {
            "arguments": [
                787
            ],
            "distinct": [
                0
            ],
            "filter": [
                774
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
                772
            ],
            "count": [
                3,
                {
                    "columns": [
                        787,
                        "[takes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                778
            ],
            "min": [
                780
            ],
            "stddev": [
                789
            ],
            "stddev_pop": [
                791
            ],
            "stddev_samp": [
                793
            ],
            "sum": [
                797
            ],
            "var_pop": [
                801
            ],
            "var_samp": [
                803
            ],
            "variance": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_order_by": {
            "avg": [
                773
            ],
            "count": [
                346
            ],
            "max": [
                779
            ],
            "min": [
                781
            ],
            "stddev": [
                790
            ],
            "stddev_pop": [
                792
            ],
            "stddev_samp": [
                794
            ],
            "sum": [
                798
            ],
            "var_pop": [
                802
            ],
            "var_samp": [
                804
            ],
            "variance": [
                806
            ],
            "__typename": [
                5
            ]
        },
        "takes_arr_rel_insert_input": {
            "data": [
                777
            ],
            "on_conflict": [
                784
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_bool_exp": {
            "_and": [
                774
            ],
            "_not": [
                774
            ],
            "_or": [
                774
            ],
            "base_amount": [
                8
            ],
            "make": [
                267
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
                311
            ],
            "market_acct": [
                6
            ],
            "order": [
                358
            ],
            "order_block": [
                8
            ],
            "order_time": [
                810
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                345
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
                344
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
                276
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
                320
            ],
            "market_acct": [
                5
            ],
            "order": [
                367
            ],
            "order_block": [
                7
            ],
            "order_time": [
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
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
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_order_tx_sig": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
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
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_order_tx_sig": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "market_acct": [
                346
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
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
                765
            ],
            "__typename": [
                5
            ]
        },
        "takes_obj_rel_insert_input": {
            "data": [
                777
            ],
            "on_conflict": [
                784
            ],
            "__typename": [
                5
            ]
        },
        "takes_on_conflict": {
            "constraint": [
                775
            ],
            "update_columns": [
                799
            ],
            "where": [
                774
            ],
            "__typename": [
                5
            ]
        },
        "takes_order_by": {
            "base_amount": [
                346
            ],
            "make": [
                278
            ],
            "maker_base_fee": [
                346
            ],
            "maker_order_tx_sig": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "order": [
                369
            ],
            "order_block": [
                346
            ],
            "order_time": [
                346
            ],
            "order_tx_sig": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
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
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_stream_cursor_input": {
            "initial_value": [
                796
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
                809
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                344
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
                344
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "takes_update_column": {},
        "takes_updates": {
            "_inc": [
                776
            ],
            "_set": [
                788
            ],
            "where": [
                774
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
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
                346
            ],
            "maker_base_fee": [
                346
            ],
            "maker_quote_fee": [
                346
            ],
            "order_block": [
                346
            ],
            "quote_price": [
                346
            ],
            "taker_base_fee": [
                346
            ],
            "taker_quote_fee": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                807
            ],
            "_gt": [
                807
            ],
            "_gte": [
                807
            ],
            "_in": [
                807
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                807
            ],
            "_lte": [
                807
            ],
            "_neq": [
                807
            ],
            "_nin": [
                807
            ],
            "__typename": [
                5
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                809
            ],
            "_gt": [
                809
            ],
            "_gte": [
                809
            ],
            "_in": [
                809
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                809
            ],
            "_lte": [
                809
            ],
            "_neq": [
                809
            ],
            "_nin": [
                809
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
                809
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token": [
                896
            ],
            "tokenAcctByTokenAcct": [
                854
            ],
            "token_acct": [
                5
            ],
            "transaction": [
                1008
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate": {
            "aggregate": [
                815
            ],
            "nodes": [
                811
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp": {
            "count": [
                814
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp_count": {
            "arguments": [
                832
            ],
            "distinct": [
                0
            ],
            "filter": [
                820
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
                818
            ],
            "count": [
                3,
                {
                    "columns": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                824
            ],
            "min": [
                826
            ],
            "stddev": [
                834
            ],
            "stddev_pop": [
                836
            ],
            "stddev_samp": [
                838
            ],
            "sum": [
                842
            ],
            "var_pop": [
                846
            ],
            "var_samp": [
                848
            ],
            "variance": [
                850
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_order_by": {
            "avg": [
                819
            ],
            "count": [
                346
            ],
            "max": [
                825
            ],
            "min": [
                827
            ],
            "stddev": [
                835
            ],
            "stddev_pop": [
                837
            ],
            "stddev_samp": [
                839
            ],
            "sum": [
                843
            ],
            "var_pop": [
                847
            ],
            "var_samp": [
                849
            ],
            "variance": [
                851
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_arr_rel_insert_input": {
            "data": [
                823
            ],
            "on_conflict": [
                829
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_avg_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_avg_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_bool_exp": {
            "_and": [
                820
            ],
            "_not": [
                820
            ],
            "_or": [
                820
            ],
            "amount": [
                8
            ],
            "created_at": [
                810
            ],
            "delta": [
                8
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "slot": [
                8
            ],
            "token": [
                900
            ],
            "tokenAcctByTokenAcct": [
                863
            ],
            "token_acct": [
                6
            ],
            "transaction": [
                1012
            ],
            "tx_sig": [
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
            "delta": [
                7
            ],
            "slot": [
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
                809
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token": [
                907
            ],
            "tokenAcctByTokenAcct": [
                872
            ],
            "token_acct": [
                5
            ],
            "transaction": [
                1019
            ],
            "tx_sig": [
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
                809
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token_acct": [
                5
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_max_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "delta": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "slot": [
                346
            ],
            "token_acct": [
                346
            ],
            "tx_sig": [
                346
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
                809
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token_acct": [
                5
            ],
            "tx_sig": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_min_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "delta": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "slot": [
                346
            ],
            "token_acct": [
                346
            ],
            "tx_sig": [
                346
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
                811
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_on_conflict": {
            "constraint": [
                821
            ],
            "update_columns": [
                844
            ],
            "where": [
                820
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_order_by": {
            "amount": [
                346
            ],
            "created_at": [
                346
            ],
            "delta": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "slot": [
                346
            ],
            "token": [
                909
            ],
            "tokenAcctByTokenAcct": [
                874
            ],
            "token_acct": [
                346
            ],
            "transaction": [
                1021
            ],
            "tx_sig": [
                346
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
                809
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
                809
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token_acct": [
                5
            ],
            "tx_sig": [
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
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_pop_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_pop_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_samp_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stddev_samp_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stream_cursor_input": {
            "initial_value": [
                841
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
                809
            ],
            "delta": [
                7
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "slot": [
                7
            ],
            "token_acct": [
                5
            ],
            "tx_sig": [
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
            "delta": [
                7
            ],
            "slot": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_sum_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_update_column": {},
        "token_acct_balances_updates": {
            "_inc": [
                822
            ],
            "_set": [
                833
            ],
            "where": [
                820
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_pop_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_pop_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_samp_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_var_samp_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_variance_fields": {
            "amount": [
                2
            ],
            "delta": [
                2
            ],
            "slot": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_variance_order_by": {
            "amount": [
                346
            ],
            "delta": [
                346
            ],
            "slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_status": {},
        "token_acct_status_comparison_exp": {
            "_eq": [
                852
            ],
            "_gt": [
                852
            ],
            "_gte": [
                852
            ],
            "_in": [
                852
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                852
            ],
            "_lte": [
                852
            ],
            "_neq": [
                852
            ],
            "_nin": [
                852
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
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "marketsByBidsTokenAcct": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "marketsByBidsTokenAcct_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "status": [
                852
            ],
            "token": [
                896
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                811,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                812,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate": {
            "aggregate": [
                858
            ],
            "nodes": [
                854
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp": {
            "count": [
                857
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp_count": {
            "arguments": [
                876
            ],
            "distinct": [
                0
            ],
            "filter": [
                863
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
                861
            ],
            "count": [
                3,
                {
                    "columns": [
                        876,
                        "[token_accts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                867
            ],
            "min": [
                869
            ],
            "stddev": [
                878
            ],
            "stddev_pop": [
                880
            ],
            "stddev_samp": [
                882
            ],
            "sum": [
                886
            ],
            "var_pop": [
                890
            ],
            "var_samp": [
                892
            ],
            "variance": [
                894
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_order_by": {
            "avg": [
                862
            ],
            "count": [
                346
            ],
            "max": [
                868
            ],
            "min": [
                870
            ],
            "stddev": [
                879
            ],
            "stddev_pop": [
                881
            ],
            "stddev_samp": [
                883
            ],
            "sum": [
                887
            ],
            "var_pop": [
                891
            ],
            "var_samp": [
                893
            ],
            "variance": [
                895
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_arr_rel_insert_input": {
            "data": [
                866
            ],
            "on_conflict": [
                873
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_bool_exp": {
            "_and": [
                863
            ],
            "_not": [
                863
            ],
            "_or": [
                863
            ],
            "amount": [
                8
            ],
            "markets": [
                311
            ],
            "marketsByBidsTokenAcct": [
                311
            ],
            "marketsByBidsTokenAcct_aggregate": [
                304
            ],
            "markets_aggregate": [
                304
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "status": [
                853
            ],
            "token": [
                900
            ],
            "token_acct": [
                6
            ],
            "token_acct_balances": [
                820
            ],
            "token_acct_balances_aggregate": [
                813
            ],
            "updated_at": [
                810
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
                308
            ],
            "marketsByBidsTokenAcct": [
                308
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "status": [
                852
            ],
            "token": [
                907
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                817
            ],
            "updated_at": [
                809
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
            "status": [
                852
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_max_order_by": {
            "amount": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "status": [
                346
            ],
            "token_acct": [
                346
            ],
            "updated_at": [
                346
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
            "status": [
                852
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_min_order_by": {
            "amount": [
                346
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "status": [
                346
            ],
            "token_acct": [
                346
            ],
            "updated_at": [
                346
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
                854
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_obj_rel_insert_input": {
            "data": [
                866
            ],
            "on_conflict": [
                873
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_on_conflict": {
            "constraint": [
                864
            ],
            "update_columns": [
                888
            ],
            "where": [
                863
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_order_by": {
            "amount": [
                346
            ],
            "marketsByBidsTokenAcct_aggregate": [
                307
            ],
            "markets_aggregate": [
                307
            ],
            "mint_acct": [
                346
            ],
            "owner_acct": [
                346
            ],
            "status": [
                346
            ],
            "token": [
                909
            ],
            "token_acct": [
                346
            ],
            "token_acct_balances_aggregate": [
                816
            ],
            "updated_at": [
                346
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
            "status": [
                852
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                809
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
                346
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
                346
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stream_cursor_input": {
            "initial_value": [
                885
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
            "status": [
                852
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                809
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_update_column": {},
        "token_accts_updates": {
            "_inc": [
                865
            ],
            "_set": [
                877
            ],
            "where": [
                863
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
                346
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
                346
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
                346
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
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daosByQuoteAcct": [
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daosByQuoteAcct_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "decimals": [
                763
            ],
            "image_url": [
                5
            ],
            "markets": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "marketsByQuoteMintAcct": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "marketsByQuoteMintAcct_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
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
                811,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                812,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "token_accts": [
                854,
                {
                    "distinct_on": [
                        876,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        863
                    ]
                }
            ],
            "token_accts_aggregate": [
                855,
                {
                    "distinct_on": [
                        876,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        863
                    ]
                }
            ],
            "updated_at": [
                809
            ],
            "vault_by_finalize": [
                92
            ],
            "vault_by_revert": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate": {
            "aggregate": [
                898
            ],
            "nodes": [
                896
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate_fields": {
            "avg": [
                899
            ],
            "count": [
                3,
                {
                    "columns": [
                        911,
                        "[tokens_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                904
            ],
            "min": [
                905
            ],
            "stddev": [
                913
            ],
            "stddev_pop": [
                914
            ],
            "stddev_samp": [
                915
            ],
            "sum": [
                918
            ],
            "var_pop": [
                921
            ],
            "var_samp": [
                922
            ],
            "variance": [
                923
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
                900
            ],
            "_not": [
                900
            ],
            "_or": [
                900
            ],
            "conditional_vaults": [
                99
            ],
            "conditional_vaults_aggregate": [
                94
            ],
            "daos": [
                164
            ],
            "daosByQuoteAcct": [
                164
            ],
            "daosByQuoteAcct_aggregate": [
                157
            ],
            "daos_aggregate": [
                157
            ],
            "decimals": [
                764
            ],
            "image_url": [
                6
            ],
            "markets": [
                311
            ],
            "marketsByQuoteMintAcct": [
                311
            ],
            "marketsByQuoteMintAcct_aggregate": [
                304
            ],
            "markets_aggregate": [
                304
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
                820
            ],
            "token_acct_balances_aggregate": [
                813
            ],
            "token_accts": [
                863
            ],
            "token_accts_aggregate": [
                856
            ],
            "updated_at": [
                810
            ],
            "vault_by_finalize": [
                99
            ],
            "vault_by_revert": [
                99
            ],
            "__typename": [
                5
            ]
        },
        "tokens_constraint": {},
        "tokens_inc_input": {
            "decimals": [
                763
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
                161
            ],
            "daosByQuoteAcct": [
                161
            ],
            "decimals": [
                763
            ],
            "image_url": [
                5
            ],
            "markets": [
                308
            ],
            "marketsByQuoteMintAcct": [
                308
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
                817
            ],
            "token_accts": [
                860
            ],
            "updated_at": [
                809
            ],
            "vault_by_finalize": [
                107
            ],
            "vault_by_revert": [
                107
            ],
            "__typename": [
                5
            ]
        },
        "tokens_max_fields": {
            "decimals": [
                763
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
                809
            ],
            "__typename": [
                5
            ]
        },
        "tokens_min_fields": {
            "decimals": [
                763
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
                809
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
                896
            ],
            "__typename": [
                5
            ]
        },
        "tokens_obj_rel_insert_input": {
            "data": [
                903
            ],
            "on_conflict": [
                908
            ],
            "__typename": [
                5
            ]
        },
        "tokens_on_conflict": {
            "constraint": [
                901
            ],
            "update_columns": [
                919
            ],
            "where": [
                900
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
                160
            ],
            "daos_aggregate": [
                160
            ],
            "decimals": [
                346
            ],
            "image_url": [
                346
            ],
            "marketsByQuoteMintAcct_aggregate": [
                307
            ],
            "markets_aggregate": [
                307
            ],
            "mint_acct": [
                346
            ],
            "name": [
                346
            ],
            "supply": [
                346
            ],
            "symbol": [
                346
            ],
            "token_acct_balances_aggregate": [
                816
            ],
            "token_accts_aggregate": [
                859
            ],
            "updated_at": [
                346
            ],
            "vault_by_finalize": [
                109
            ],
            "vault_by_revert": [
                109
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
                763
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
                809
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
                917
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
                763
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
                809
            ],
            "__typename": [
                5
            ]
        },
        "tokens_sum_fields": {
            "decimals": [
                763
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
                902
            ],
            "_set": [
                912
            ],
            "where": [
                900
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
        "top_dao_traders_arguments": {
            "dao_slug": [
                5
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
                1008
            ],
            "transaction_watcher": [
                966
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
                929
            ],
            "nodes": [
                925
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp": {
            "count": [
                928
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp_count": {
            "arguments": [
                946
            ],
            "distinct": [
                0
            ],
            "filter": [
                934
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
                932
            ],
            "count": [
                3,
                {
                    "columns": [
                        946,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                938
            ],
            "min": [
                940
            ],
            "stddev": [
                948
            ],
            "stddev_pop": [
                950
            ],
            "stddev_samp": [
                952
            ],
            "sum": [
                956
            ],
            "var_pop": [
                960
            ],
            "var_samp": [
                962
            ],
            "variance": [
                964
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_order_by": {
            "avg": [
                933
            ],
            "count": [
                346
            ],
            "max": [
                939
            ],
            "min": [
                941
            ],
            "stddev": [
                949
            ],
            "stddev_pop": [
                951
            ],
            "stddev_samp": [
                953
            ],
            "sum": [
                957
            ],
            "var_pop": [
                961
            ],
            "var_samp": [
                963
            ],
            "variance": [
                965
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_arr_rel_insert_input": {
            "data": [
                937
            ],
            "on_conflict": [
                943
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_bool_exp": {
            "_and": [
                934
            ],
            "_not": [
                934
            ],
            "_or": [
                934
            ],
            "slot": [
                8
            ],
            "transaction": [
                1012
            ],
            "transaction_watcher": [
                975
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
                1019
            ],
            "transaction_watcher": [
                984
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
                346
            ],
            "tx_sig": [
                346
            ],
            "watcher_acct": [
                346
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
                346
            ],
            "tx_sig": [
                346
            ],
            "watcher_acct": [
                346
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
                925
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_on_conflict": {
            "constraint": [
                935
            ],
            "update_columns": [
                958
            ],
            "where": [
                934
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_order_by": {
            "slot": [
                346
            ],
            "transaction": [
                1021
            ],
            "transaction_watcher": [
                986
            ],
            "tx_sig": [
                346
            ],
            "watcher_acct": [
                346
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
                346
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
                346
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stream_cursor_input": {
            "initial_value": [
                955
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
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_update_column": {},
        "transaction_watcher_transactions_updates": {
            "_inc": [
                936
            ],
            "_set": [
                947
            ],
            "where": [
                934
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
                346
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
                346
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
                346
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
                763
            ],
            "status": [
                5
            ],
            "transaction": [
                1008
            ],
            "transactionByLatestTxSig": [
                1008
            ],
            "transaction_watcher_transactions": [
                925,
                {
                    "distinct_on": [
                        946,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        944,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        934
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                926,
                {
                    "distinct_on": [
                        946,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        944,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        934
                    ]
                }
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate": {
            "aggregate": [
                970
            ],
            "nodes": [
                966
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp": {
            "count": [
                969
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp_count": {
            "arguments": [
                988
            ],
            "distinct": [
                0
            ],
            "filter": [
                975
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
                973
            ],
            "count": [
                3,
                {
                    "columns": [
                        988,
                        "[transaction_watchers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                979
            ],
            "min": [
                981
            ],
            "stddev": [
                990
            ],
            "stddev_pop": [
                992
            ],
            "stddev_samp": [
                994
            ],
            "sum": [
                998
            ],
            "var_pop": [
                1002
            ],
            "var_samp": [
                1004
            ],
            "variance": [
                1006
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_order_by": {
            "avg": [
                974
            ],
            "count": [
                346
            ],
            "max": [
                980
            ],
            "min": [
                982
            ],
            "stddev": [
                991
            ],
            "stddev_pop": [
                993
            ],
            "stddev_samp": [
                995
            ],
            "sum": [
                999
            ],
            "var_pop": [
                1003
            ],
            "var_samp": [
                1005
            ],
            "variance": [
                1007
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_arr_rel_insert_input": {
            "data": [
                978
            ],
            "on_conflict": [
                985
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
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_bool_exp": {
            "_and": [
                975
            ],
            "_not": [
                975
            ],
            "_or": [
                975
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
                764
            ],
            "status": [
                6
            ],
            "transaction": [
                1012
            ],
            "transactionByLatestTxSig": [
                1012
            ],
            "transaction_watcher_transactions": [
                934
            ],
            "transaction_watcher_transactions_aggregate": [
                927
            ],
            "updated_at": [
                810
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
                763
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
                763
            ],
            "status": [
                5
            ],
            "transaction": [
                1019
            ],
            "transactionByLatestTxSig": [
                1019
            ],
            "transaction_watcher_transactions": [
                931
            ],
            "updated_at": [
                809
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
                763
            ],
            "status": [
                5
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_max_order_by": {
            "acct": [
                346
            ],
            "checked_up_to_slot": [
                346
            ],
            "description": [
                346
            ],
            "failure_log": [
                346
            ],
            "first_tx_sig": [
                346
            ],
            "latest_tx_sig": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "status": [
                346
            ],
            "updated_at": [
                346
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
                763
            ],
            "status": [
                5
            ],
            "updated_at": [
                809
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_min_order_by": {
            "acct": [
                346
            ],
            "checked_up_to_slot": [
                346
            ],
            "description": [
                346
            ],
            "failure_log": [
                346
            ],
            "first_tx_sig": [
                346
            ],
            "latest_tx_sig": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "status": [
                346
            ],
            "updated_at": [
                346
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
                966
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_obj_rel_insert_input": {
            "data": [
                978
            ],
            "on_conflict": [
                985
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_on_conflict": {
            "constraint": [
                976
            ],
            "update_columns": [
                1000
            ],
            "where": [
                975
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_order_by": {
            "acct": [
                346
            ],
            "checked_up_to_slot": [
                346
            ],
            "description": [
                346
            ],
            "failure_log": [
                346
            ],
            "first_tx_sig": [
                346
            ],
            "latest_tx_sig": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "status": [
                346
            ],
            "transaction": [
                1021
            ],
            "transactionByLatestTxSig": [
                1021
            ],
            "transaction_watcher_transactions_aggregate": [
                930
            ],
            "updated_at": [
                346
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
                763
            ],
            "status": [
                5
            ],
            "updated_at": [
                809
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
                346
            ],
            "serializer_logic_version": [
                346
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
                346
            ],
            "serializer_logic_version": [
                346
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
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stream_cursor_input": {
            "initial_value": [
                997
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
                763
            ],
            "status": [
                5
            ],
            "updated_at": [
                809
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
                763
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_sum_order_by": {
            "checked_up_to_slot": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_update_column": {},
        "transaction_watchers_updates": {
            "_inc": [
                977
            ],
            "_set": [
                989
            ],
            "where": [
                975
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
                346
            ],
            "serializer_logic_version": [
                346
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
                346
            ],
            "serializer_logic_version": [
                346
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
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "transactions": {
            "block_time": [
                809
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                199,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                200,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "main_ix_type": [
                5
            ],
            "order": [
                347
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                763
            ],
            "slot": [
                7
            ],
            "token_acct_balances": [
                811,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                812,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig": [
                966,
                {
                    "distinct_on": [
                        988,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        986,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        975
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                967,
                {
                    "distinct_on": [
                        988,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        986,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        975
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                925,
                {
                    "distinct_on": [
                        946,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        944,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        934
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                926,
                {
                    "distinct_on": [
                        946,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        944,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        934
                    ]
                }
            ],
            "transaction_watchers": [
                966,
                {
                    "distinct_on": [
                        988,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        986,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        975
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                967,
                {
                    "distinct_on": [
                        988,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        986,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        975
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
                1010
            ],
            "nodes": [
                1008
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                1011
            ],
            "count": [
                3,
                {
                    "columns": [
                        1023,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1016
            ],
            "min": [
                1017
            ],
            "stddev": [
                1025
            ],
            "stddev_pop": [
                1026
            ],
            "stddev_samp": [
                1027
            ],
            "sum": [
                1030
            ],
            "var_pop": [
                1033
            ],
            "var_samp": [
                1034
            ],
            "variance": [
                1035
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
                1012
            ],
            "_not": [
                1012
            ],
            "_or": [
                1012
            ],
            "block_time": [
                810
            ],
            "failed": [
                1
            ],
            "indexer_account_dependencies": [
                206
            ],
            "indexer_account_dependencies_aggregate": [
                201
            ],
            "main_ix_type": [
                6
            ],
            "order": [
                358
            ],
            "payload": [
                6
            ],
            "serializer_logic_version": [
                764
            ],
            "slot": [
                8
            ],
            "token_acct_balances": [
                820
            ],
            "token_acct_balances_aggregate": [
                813
            ],
            "transactionWatchersByLatestTxSig": [
                975
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                968
            ],
            "transaction_watcher_transactions": [
                934
            ],
            "transaction_watcher_transactions_aggregate": [
                927
            ],
            "transaction_watchers": [
                975
            ],
            "transaction_watchers_aggregate": [
                968
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
                763
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
                809
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                205
            ],
            "main_ix_type": [
                5
            ],
            "order": [
                367
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                763
            ],
            "slot": [
                7
            ],
            "token_acct_balances": [
                817
            ],
            "transactionWatchersByLatestTxSig": [
                972
            ],
            "transaction_watcher_transactions": [
                931
            ],
            "transaction_watchers": [
                972
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
                809
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                763
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
                809
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                763
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
                1008
            ],
            "__typename": [
                5
            ]
        },
        "transactions_obj_rel_insert_input": {
            "data": [
                1015
            ],
            "on_conflict": [
                1020
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                1013
            ],
            "update_columns": [
                1031
            ],
            "where": [
                1012
            ],
            "__typename": [
                5
            ]
        },
        "transactions_order_by": {
            "block_time": [
                346
            ],
            "failed": [
                346
            ],
            "indexer_account_dependencies_aggregate": [
                204
            ],
            "main_ix_type": [
                346
            ],
            "order": [
                369
            ],
            "payload": [
                346
            ],
            "serializer_logic_version": [
                346
            ],
            "slot": [
                346
            ],
            "token_acct_balances_aggregate": [
                816
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                971
            ],
            "transaction_watcher_transactions_aggregate": [
                930
            ],
            "transaction_watchers_aggregate": [
                971
            ],
            "tx_sig": [
                346
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
                809
            ],
            "failed": [
                0
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                763
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
                1029
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
                809
            ],
            "failed": [
                0
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                763
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
                763
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
                1014
            ],
            "_set": [
                1024
            ],
            "where": [
                1012
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
                809
            ],
            "market": [
                302
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
                1038
            ],
            "nodes": [
                1036
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_aggregate_fields": {
            "avg": [
                1039
            ],
            "count": [
                3,
                {
                    "columns": [
                        1049,
                        "[twap_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1044
            ],
            "min": [
                1045
            ],
            "stddev": [
                1051
            ],
            "stddev_pop": [
                1052
            ],
            "stddev_samp": [
                1053
            ],
            "sum": [
                1056
            ],
            "var_pop": [
                1059
            ],
            "var_samp": [
                1060
            ],
            "variance": [
                1061
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
                1040
            ],
            "_not": [
                1040
            ],
            "_or": [
                1040
            ],
            "interv": [
                810
            ],
            "market": [
                311
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
        "twap_chart_data_constraint": {},
        "twap_chart_data_inc_input": {
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_insert_input": {
            "interv": [
                809
            ],
            "market": [
                320
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
        "twap_chart_data_max_fields": {
            "interv": [
                809
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
                809
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
        "twap_chart_data_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1036
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_on_conflict": {
            "constraint": [
                1041
            ],
            "update_columns": [
                1057
            ],
            "where": [
                1040
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_order_by": {
            "interv": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_select_column": {},
        "twap_chart_data_set_input": {
            "interv": [
                809
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
                1055
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
                809
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
        "twap_chart_data_update_column": {},
        "twap_chart_data_updates": {
            "_inc": [
                1042
            ],
            "_set": [
                1050
            ],
            "where": [
                1040
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
                809
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market": [
                302
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
            ],
            "proposal": [
                638
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
                1066
            ],
            "nodes": [
                1062
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp": {
            "count": [
                1065
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp_count": {
            "arguments": [
                1083
            ],
            "distinct": [
                0
            ],
            "filter": [
                1071
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
                1069
            ],
            "count": [
                3,
                {
                    "columns": [
                        1083,
                        "[twaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1075
            ],
            "min": [
                1077
            ],
            "stddev": [
                1085
            ],
            "stddev_pop": [
                1087
            ],
            "stddev_samp": [
                1089
            ],
            "sum": [
                1093
            ],
            "var_pop": [
                1097
            ],
            "var_samp": [
                1099
            ],
            "variance": [
                1101
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_order_by": {
            "avg": [
                1070
            ],
            "count": [
                346
            ],
            "max": [
                1076
            ],
            "min": [
                1078
            ],
            "stddev": [
                1086
            ],
            "stddev_pop": [
                1088
            ],
            "stddev_samp": [
                1090
            ],
            "sum": [
                1094
            ],
            "var_pop": [
                1098
            ],
            "var_samp": [
                1100
            ],
            "variance": [
                1102
            ],
            "__typename": [
                5
            ]
        },
        "twaps_arr_rel_insert_input": {
            "data": [
                1074
            ],
            "on_conflict": [
                1080
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
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_bool_exp": {
            "_and": [
                1071
            ],
            "_not": [
                1071
            ],
            "_or": [
                1071
            ],
            "created_at": [
                810
            ],
            "last_observation": [
                345
            ],
            "last_price": [
                345
            ],
            "market": [
                311
            ],
            "market_acct": [
                6
            ],
            "observation_agg": [
                345
            ],
            "proposal": [
                657
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
                344
            ],
            "last_price": [
                344
            ],
            "observation_agg": [
                344
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
                809
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market": [
                320
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
            ],
            "proposal": [
                666
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
                809
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
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
                346
            ],
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "market_acct": [
                346
            ],
            "observation_agg": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_min_fields": {
            "created_at": [
                809
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
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
                346
            ],
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "market_acct": [
                346
            ],
            "observation_agg": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
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
                1062
            ],
            "__typename": [
                5
            ]
        },
        "twaps_on_conflict": {
            "constraint": [
                1072
            ],
            "update_columns": [
                1095
            ],
            "where": [
                1071
            ],
            "__typename": [
                5
            ]
        },
        "twaps_order_by": {
            "created_at": [
                346
            ],
            "last_observation": [
                346
            ],
            "last_price": [
                346
            ],
            "market": [
                322
            ],
            "market_acct": [
                346
            ],
            "observation_agg": [
                346
            ],
            "proposal": [
                668
            ],
            "proposal_acct": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
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
                809
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
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
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
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
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
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
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stream_cursor_input": {
            "initial_value": [
                1092
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
                809
            ],
            "last_observation": [
                344
            ],
            "last_price": [
                344
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                344
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
                344
            ],
            "last_price": [
                344
            ],
            "observation_agg": [
                344
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
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "twaps_update_column": {},
        "twaps_updates": {
            "_inc": [
                1073
            ],
            "_set": [
                1084
            ],
            "where": [
                1071
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
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
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
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
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
                346
            ],
            "last_price": [
                346
            ],
            "observation_agg": [
                346
            ],
            "token_amount": [
                346
            ],
            "updated_slot": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits": {
            "created_at": [
                809
            ],
            "mint_acct": [
                5
            ],
            "token": [
                896
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_aggregate": {
            "aggregate": [
                1105
            ],
            "nodes": [
                1103
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_aggregate_fields": {
            "avg": [
                1106
            ],
            "count": [
                3,
                {
                    "columns": [
                        1114,
                        "[user_deposits_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1110
            ],
            "min": [
                1111
            ],
            "stddev": [
                1116
            ],
            "stddev_pop": [
                1117
            ],
            "stddev_samp": [
                1118
            ],
            "sum": [
                1121
            ],
            "var_pop": [
                1123
            ],
            "var_samp": [
                1124
            ],
            "variance": [
                1125
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_avg_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_bool_exp": {
            "_and": [
                1107
            ],
            "_not": [
                1107
            ],
            "_or": [
                1107
            ],
            "created_at": [
                810
            ],
            "mint_acct": [
                6
            ],
            "token": [
                900
            ],
            "token_amount": [
                8
            ],
            "tx_sig": [
                6
            ],
            "user_acct": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_inc_input": {
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_insert_input": {
            "created_at": [
                809
            ],
            "mint_acct": [
                5
            ],
            "token": [
                907
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_max_fields": {
            "created_at": [
                809
            ],
            "mint_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_min_fields": {
            "created_at": [
                809
            ],
            "mint_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1103
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_order_by": {
            "created_at": [
                346
            ],
            "mint_acct": [
                346
            ],
            "token": [
                909
            ],
            "token_amount": [
                346
            ],
            "tx_sig": [
                346
            ],
            "user_acct": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_select_column": {},
        "user_deposits_set_input": {
            "created_at": [
                809
            ],
            "mint_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stddev_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stddev_pop_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stddev_samp_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stream_cursor_input": {
            "initial_value": [
                1120
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_stream_cursor_value_input": {
            "created_at": [
                809
            ],
            "mint_acct": [
                5
            ],
            "token_amount": [
                7
            ],
            "tx_sig": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_sum_fields": {
            "token_amount": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_updates": {
            "_inc": [
                1108
            ],
            "_set": [
                1115
            ],
            "where": [
                1107
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_var_pop_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_var_samp_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_deposits_variance_fields": {
            "token_amount": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance": {
            "created_at": [
                809
            ],
            "proposal": [
                638
            ],
            "proposal_acct": [
                5
            ],
            "tokens_bought": [
                7
            ],
            "tokens_sold": [
                7
            ],
            "total_volume": [
                7
            ],
            "user": [
                1167
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                7
            ],
            "volume_sold": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate": {
            "aggregate": [
                1130
            ],
            "nodes": [
                1126
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_bool_exp": {
            "count": [
                1129
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_bool_exp_count": {
            "arguments": [
                1147
            ],
            "distinct": [
                0
            ],
            "filter": [
                1135
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_fields": {
            "avg": [
                1133
            ],
            "count": [
                3,
                {
                    "columns": [
                        1147,
                        "[user_performance_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1139
            ],
            "min": [
                1141
            ],
            "stddev": [
                1149
            ],
            "stddev_pop": [
                1151
            ],
            "stddev_samp": [
                1153
            ],
            "sum": [
                1157
            ],
            "var_pop": [
                1161
            ],
            "var_samp": [
                1163
            ],
            "variance": [
                1165
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_order_by": {
            "avg": [
                1134
            ],
            "count": [
                346
            ],
            "max": [
                1140
            ],
            "min": [
                1142
            ],
            "stddev": [
                1150
            ],
            "stddev_pop": [
                1152
            ],
            "stddev_samp": [
                1154
            ],
            "sum": [
                1158
            ],
            "var_pop": [
                1162
            ],
            "var_samp": [
                1164
            ],
            "variance": [
                1166
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_arr_rel_insert_input": {
            "data": [
                1138
            ],
            "on_conflict": [
                1144
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_avg_fields": {
            "tokens_bought": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_sold": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_avg_order_by": {
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_bool_exp": {
            "_and": [
                1135
            ],
            "_not": [
                1135
            ],
            "_or": [
                1135
            ],
            "created_at": [
                810
            ],
            "proposal": [
                657
            ],
            "proposal_acct": [
                6
            ],
            "tokens_bought": [
                8
            ],
            "tokens_sold": [
                8
            ],
            "total_volume": [
                8
            ],
            "user": [
                1170
            ],
            "user_acct": [
                6
            ],
            "volume_bought": [
                8
            ],
            "volume_sold": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_constraint": {},
        "user_performance_inc_input": {
            "tokens_bought": [
                7
            ],
            "tokens_sold": [
                7
            ],
            "volume_bought": [
                7
            ],
            "volume_sold": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_insert_input": {
            "created_at": [
                809
            ],
            "proposal": [
                666
            ],
            "proposal_acct": [
                5
            ],
            "tokens_bought": [
                7
            ],
            "tokens_sold": [
                7
            ],
            "user": [
                1176
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                7
            ],
            "volume_sold": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_max_fields": {
            "created_at": [
                809
            ],
            "proposal_acct": [
                5
            ],
            "tokens_bought": [
                7
            ],
            "tokens_sold": [
                7
            ],
            "total_volume": [
                7
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                7
            ],
            "volume_sold": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_max_order_by": {
            "created_at": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "user_acct": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_min_fields": {
            "created_at": [
                809
            ],
            "proposal_acct": [
                5
            ],
            "tokens_bought": [
                7
            ],
            "tokens_sold": [
                7
            ],
            "total_volume": [
                7
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                7
            ],
            "volume_sold": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_min_order_by": {
            "created_at": [
                346
            ],
            "proposal_acct": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "user_acct": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                1126
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_on_conflict": {
            "constraint": [
                1136
            ],
            "update_columns": [
                1159
            ],
            "where": [
                1135
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_order_by": {
            "created_at": [
                346
            ],
            "proposal": [
                668
            ],
            "proposal_acct": [
                346
            ],
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "user": [
                1178
            ],
            "user_acct": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_pk_columns_input": {
            "proposal_acct": [
                5
            ],
            "user_acct": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_select_column": {},
        "user_performance_set_input": {
            "created_at": [
                809
            ],
            "proposal_acct": [
                5
            ],
            "tokens_bought": [
                7
            ],
            "tokens_sold": [
                7
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                7
            ],
            "volume_sold": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_fields": {
            "tokens_bought": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_sold": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_order_by": {
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_pop_fields": {
            "tokens_bought": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_sold": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_pop_order_by": {
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_samp_fields": {
            "tokens_bought": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_sold": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stddev_samp_order_by": {
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stream_cursor_input": {
            "initial_value": [
                1156
            ],
            "ordering": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stream_cursor_value_input": {
            "created_at": [
                809
            ],
            "proposal_acct": [
                5
            ],
            "tokens_bought": [
                7
            ],
            "tokens_sold": [
                7
            ],
            "total_volume": [
                7
            ],
            "user_acct": [
                5
            ],
            "volume_bought": [
                7
            ],
            "volume_sold": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_sum_fields": {
            "tokens_bought": [
                7
            ],
            "tokens_sold": [
                7
            ],
            "total_volume": [
                7
            ],
            "volume_bought": [
                7
            ],
            "volume_sold": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_sum_order_by": {
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_update_column": {},
        "user_performance_updates": {
            "_inc": [
                1137
            ],
            "_set": [
                1148
            ],
            "where": [
                1135
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_var_pop_fields": {
            "tokens_bought": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_sold": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_var_pop_order_by": {
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_var_samp_fields": {
            "tokens_bought": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_sold": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_var_samp_order_by": {
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_variance_fields": {
            "tokens_bought": [
                2
            ],
            "tokens_sold": [
                2
            ],
            "total_volume": [
                2
            ],
            "volume_bought": [
                2
            ],
            "volume_sold": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_variance_order_by": {
            "tokens_bought": [
                346
            ],
            "tokens_sold": [
                346
            ],
            "total_volume": [
                346
            ],
            "volume_bought": [
                346
            ],
            "volume_sold": [
                346
            ],
            "__typename": [
                5
            ]
        },
        "users": {
            "created_at": [
                809
            ],
            "orders": [
                347,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_aggregate": [
                348,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "sessions": [
                739,
                {
                    "distinct_on": [
                        757,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        755,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        746
                    ]
                }
            ],
            "sessions_aggregate": [
                740,
                {
                    "distinct_on": [
                        757,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        755,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        746
                    ]
                }
            ],
            "user_acct": [
                5
            ],
            "user_performances": [
                1126,
                {
                    "distinct_on": [
                        1147,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1145,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1135
                    ]
                }
            ],
            "user_performances_aggregate": [
                1127,
                {
                    "distinct_on": [
                        1147,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1145,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1135
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "users_aggregate": {
            "aggregate": [
                1169
            ],
            "nodes": [
                1167
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
                        1180,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1173
            ],
            "min": [
                1174
            ],
            "__typename": [
                5
            ]
        },
        "users_bool_exp": {
            "_and": [
                1170
            ],
            "_not": [
                1170
            ],
            "_or": [
                1170
            ],
            "created_at": [
                810
            ],
            "orders": [
                358
            ],
            "orders_aggregate": [
                349
            ],
            "sessions": [
                746
            ],
            "sessions_aggregate": [
                741
            ],
            "user_acct": [
                6
            ],
            "user_performances": [
                1135
            ],
            "user_performances_aggregate": [
                1128
            ],
            "__typename": [
                5
            ]
        },
        "users_constraint": {},
        "users_insert_input": {
            "created_at": [
                809
            ],
            "orders": [
                355
            ],
            "sessions": [
                745
            ],
            "user_acct": [
                5
            ],
            "user_performances": [
                1132
            ],
            "__typename": [
                5
            ]
        },
        "users_max_fields": {
            "created_at": [
                809
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
                809
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
                1167
            ],
            "__typename": [
                5
            ]
        },
        "users_obj_rel_insert_input": {
            "data": [
                1172
            ],
            "on_conflict": [
                1177
            ],
            "__typename": [
                5
            ]
        },
        "users_on_conflict": {
            "constraint": [
                1171
            ],
            "update_columns": [
                1184
            ],
            "where": [
                1170
            ],
            "__typename": [
                5
            ]
        },
        "users_order_by": {
            "created_at": [
                346
            ],
            "orders_aggregate": [
                354
            ],
            "sessions_aggregate": [
                744
            ],
            "user_acct": [
                346
            ],
            "user_performances_aggregate": [
                1131
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
                809
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
                1183
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
                809
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
                1181
            ],
            "where": [
                1170
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                1186
            ],
            "_gt": [
                1186
            ],
            "_gte": [
                1186
            ],
            "_in": [
                1186
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                1186
            ],
            "_lte": [
                1186
            ],
            "_neq": [
                1186
            ],
            "_nin": [
                1186
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
                        809,
                        "timestamptz!"
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
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_by_pk": [
                155,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexer_account_dependencies": [
                199,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                200,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                199,
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
                223,
                {
                    "distinct_on": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        236,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "indexers_aggregate": [
                224,
                {
                    "distinct_on": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        236,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "indexers_by_pk": [
                223,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes": [
                256,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_aggregate": [
                257,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_by_pk": [
                256,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_by_pk": [
                302,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders": [
                347,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_aggregate": [
                348,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_by_pk": [
                347,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices": [
                393,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_aggregate": [
                394,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_by_pk": [
                393,
                {
                    "created_at": [
                        809,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices_chart_data": [
                403,
                {
                    "distinct_on": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        415,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "prices_chart_data_aggregate": [
                404,
                {
                    "distinct_on": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        415,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "program_system": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_system_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_system_by_pk": [
                460,
                {
                    "system_version": [
                        197,
                        "float8!"
                    ]
                }
            ],
            "programs": [
                519,
                {
                    "distinct_on": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        532,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "programs_aggregate": [
                520,
                {
                    "distinct_on": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        532,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "programs_by_pk": [
                519,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_bars": [
                547,
                {
                    "distinct_on": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        559,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_bars_aggregate": [
                548,
                {
                    "distinct_on": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        559,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_bars_by_pk": [
                547,
                {
                    "bar_size": [
                        251,
                        "interval!"
                    ],
                    "bar_start_time": [
                        809,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_details": [
                574,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_aggregate": [
                575,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_by_pk": [
                574,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                620,
                {
                    "distinct_on": [
                        628,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        627,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        624
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                621,
                {
                    "distinct_on": [
                        628,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        627,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        624
                    ]
                }
            ],
            "proposals": [
                638,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
                    ]
                }
            ],
            "proposals_aggregate": [
                639,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
                    ]
                }
            ],
            "proposals_by_pk": [
                638,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "reactions": [
                698,
                {
                    "distinct_on": [
                        719,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        707
                    ]
                }
            ],
            "reactions_aggregate": [
                699,
                {
                    "distinct_on": [
                        719,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        707
                    ]
                }
            ],
            "reactions_by_pk": [
                698,
                {
                    "reaction_id": [
                        1186,
                        "uuid!"
                    ]
                }
            ],
            "sessions": [
                739,
                {
                    "distinct_on": [
                        757,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        755,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        746
                    ]
                }
            ],
            "sessions_aggregate": [
                740,
                {
                    "distinct_on": [
                        757,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        755,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        746
                    ]
                }
            ],
            "sessions_by_pk": [
                739,
                {
                    "id": [
                        1186,
                        "uuid!"
                    ]
                }
            ],
            "takes": [
                765,
                {
                    "distinct_on": [
                        787,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        785,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        774
                    ]
                }
            ],
            "takes_aggregate": [
                766,
                {
                    "distinct_on": [
                        787,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        785,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        774
                    ]
                }
            ],
            "takes_by_pk": [
                765,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_acct_balances": [
                811,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                812,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                811,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        809,
                        "timestamptz!"
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
                854,
                {
                    "distinct_on": [
                        876,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        863
                    ]
                }
            ],
            "token_accts_aggregate": [
                855,
                {
                    "distinct_on": [
                        876,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        863
                    ]
                }
            ],
            "token_accts_by_pk": [
                854,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens": [
                896,
                {
                    "distinct_on": [
                        911,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        909,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        900
                    ]
                }
            ],
            "tokens_aggregate": [
                897,
                {
                    "distinct_on": [
                        911,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        909,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        900
                    ]
                }
            ],
            "tokens_by_pk": [
                896,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "top_dao_traders": [
                151,
                {
                    "args": [
                        924,
                        "top_dao_traders_arguments!"
                    ],
                    "distinct_on": [
                        153,
                        "[dao_trader_enum_name!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        154,
                        "[dao_trader_order_by!]"
                    ],
                    "where": [
                        152
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                925,
                {
                    "distinct_on": [
                        946,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        944,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        934
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                926,
                {
                    "distinct_on": [
                        946,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        944,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        934
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                925,
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
                966,
                {
                    "distinct_on": [
                        988,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        986,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        975
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                967,
                {
                    "distinct_on": [
                        988,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        986,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        975
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                966,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                1008,
                {
                    "distinct_on": [
                        1023,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1021,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "transactions_aggregate": [
                1009,
                {
                    "distinct_on": [
                        1023,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1021,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "transactions_by_pk": [
                1008,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "twap_chart_data": [
                1036,
                {
                    "distinct_on": [
                        1049,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1048,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1040
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1037,
                {
                    "distinct_on": [
                        1049,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1048,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1040
                    ]
                }
            ],
            "twaps": [
                1062,
                {
                    "distinct_on": [
                        1083,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1081,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1071
                    ]
                }
            ],
            "twaps_aggregate": [
                1063,
                {
                    "distinct_on": [
                        1083,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1081,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1071
                    ]
                }
            ],
            "twaps_by_pk": [
                1062,
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
            "user_deposits": [
                1103,
                {
                    "distinct_on": [
                        1114,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1113,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_deposits_aggregate": [
                1104,
                {
                    "distinct_on": [
                        1114,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1113,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_performance": [
                1126,
                {
                    "distinct_on": [
                        1147,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1145,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1135
                    ]
                }
            ],
            "user_performance_aggregate": [
                1127,
                {
                    "distinct_on": [
                        1147,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1145,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1135
                    ]
                }
            ],
            "user_performance_by_pk": [
                1126,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ],
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "users": [
                1167,
                {
                    "distinct_on": [
                        1180,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1178,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1170
                    ]
                }
            ],
            "users_aggregate": [
                1168,
                {
                    "distinct_on": [
                        1180,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1178,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1170
                    ]
                }
            ],
            "users_by_pk": [
                1167,
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
                        809,
                        "timestamptz!"
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
                172,
                {
                    "where": [
                        164,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "delete_daos_by_pk": [
                155,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies": [
                213,
                {
                    "where": [
                        206,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies_by_pk": [
                199,
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
                233,
                {
                    "where": [
                        227,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "delete_indexers_by_pk": [
                223,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_makes": [
                275,
                {
                    "where": [
                        267,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "delete_makes_by_pk": [
                256,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_markets": [
                319,
                {
                    "where": [
                        311,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "delete_markets_by_pk": [
                302,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_orders": [
                366,
                {
                    "where": [
                        358,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "delete_orders_by_pk": [
                347,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_prices": [
                436,
                {
                    "where": [
                        402,
                        "prices_bool_exp!"
                    ]
                }
            ],
            "delete_prices_by_pk": [
                393,
                {
                    "created_at": [
                        809,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_prices_chart_data": [
                413,
                {
                    "where": [
                        407,
                        "prices_chart_data_bool_exp!"
                    ]
                }
            ],
            "delete_program_system": [
                487,
                {
                    "where": [
                        479,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "delete_program_system_by_pk": [
                460,
                {
                    "system_version": [
                        197,
                        "float8!"
                    ]
                }
            ],
            "delete_programs": [
                529,
                {
                    "where": [
                        523,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "delete_programs_by_pk": [
                519,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_bars": [
                557,
                {
                    "where": [
                        551,
                        "proposal_bars_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_bars_by_pk": [
                547,
                {
                    "bar_size": [
                        251,
                        "interval!"
                    ],
                    "bar_start_time": [
                        809,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_details": [
                595,
                {
                    "where": [
                        584,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_details_by_pk": [
                574,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_proposals": [
                665,
                {
                    "where": [
                        657,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "delete_proposals_by_pk": [
                638,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_reactions": [
                715,
                {
                    "where": [
                        707,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "delete_reactions_by_pk": [
                698,
                {
                    "reaction_id": [
                        1186,
                        "uuid!"
                    ]
                }
            ],
            "delete_sessions": [
                753,
                {
                    "where": [
                        746,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "delete_sessions_by_pk": [
                739,
                {
                    "id": [
                        1186,
                        "uuid!"
                    ]
                }
            ],
            "delete_takes": [
                782,
                {
                    "where": [
                        774,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "delete_takes_by_pk": [
                765,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_acct_balances": [
                828,
                {
                    "where": [
                        820,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "delete_token_acct_balances_by_pk": [
                811,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        809,
                        "timestamptz!"
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
                871,
                {
                    "where": [
                        863,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "delete_token_accts_by_pk": [
                854,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_tokens": [
                906,
                {
                    "where": [
                        900,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "delete_tokens_by_pk": [
                896,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions": [
                942,
                {
                    "where": [
                        934,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions_by_pk": [
                925,
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
                983,
                {
                    "where": [
                        975,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watchers_by_pk": [
                966,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                1018,
                {
                    "where": [
                        1012,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                1008,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_twap_chart_data": [
                1046,
                {
                    "where": [
                        1040,
                        "twap_chart_data_bool_exp!"
                    ]
                }
            ],
            "delete_twaps": [
                1079,
                {
                    "where": [
                        1071,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "delete_twaps_by_pk": [
                1062,
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
            "delete_user_deposits": [
                1112,
                {
                    "where": [
                        1107,
                        "user_deposits_bool_exp!"
                    ]
                }
            ],
            "delete_user_performance": [
                1143,
                {
                    "where": [
                        1135,
                        "user_performance_bool_exp!"
                    ]
                }
            ],
            "delete_user_performance_by_pk": [
                1126,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ],
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_users": [
                1175,
                {
                    "where": [
                        1170,
                        "users_bool_exp!"
                    ]
                }
            ],
            "delete_users_by_pk": [
                1167,
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
                172,
                {
                    "objects": [
                        167,
                        "[daos_insert_input!]!"
                    ],
                    "on_conflict": [
                        174
                    ]
                }
            ],
            "insert_daos_one": [
                155,
                {
                    "object": [
                        167,
                        "daos_insert_input!"
                    ],
                    "on_conflict": [
                        174
                    ]
                }
            ],
            "insert_indexer_account_dependencies": [
                213,
                {
                    "objects": [
                        208,
                        "[indexer_account_dependencies_insert_input!]!"
                    ],
                    "on_conflict": [
                        214
                    ]
                }
            ],
            "insert_indexer_account_dependencies_one": [
                199,
                {
                    "object": [
                        208,
                        "indexer_account_dependencies_insert_input!"
                    ],
                    "on_conflict": [
                        214
                    ]
                }
            ],
            "insert_indexers": [
                233,
                {
                    "objects": [
                        230,
                        "[indexers_insert_input!]!"
                    ],
                    "on_conflict": [
                        235
                    ]
                }
            ],
            "insert_indexers_one": [
                223,
                {
                    "object": [
                        230,
                        "indexers_insert_input!"
                    ],
                    "on_conflict": [
                        235
                    ]
                }
            ],
            "insert_makes": [
                275,
                {
                    "objects": [
                        270,
                        "[makes_insert_input!]!"
                    ],
                    "on_conflict": [
                        277
                    ]
                }
            ],
            "insert_makes_one": [
                256,
                {
                    "object": [
                        270,
                        "makes_insert_input!"
                    ],
                    "on_conflict": [
                        277
                    ]
                }
            ],
            "insert_markets": [
                319,
                {
                    "objects": [
                        314,
                        "[markets_insert_input!]!"
                    ],
                    "on_conflict": [
                        321
                    ]
                }
            ],
            "insert_markets_one": [
                302,
                {
                    "object": [
                        314,
                        "markets_insert_input!"
                    ],
                    "on_conflict": [
                        321
                    ]
                }
            ],
            "insert_orders": [
                366,
                {
                    "objects": [
                        361,
                        "[orders_insert_input!]!"
                    ],
                    "on_conflict": [
                        368
                    ]
                }
            ],
            "insert_orders_one": [
                347,
                {
                    "object": [
                        361,
                        "orders_insert_input!"
                    ],
                    "on_conflict": [
                        368
                    ]
                }
            ],
            "insert_prices": [
                436,
                {
                    "objects": [
                        431,
                        "[prices_insert_input!]!"
                    ],
                    "on_conflict": [
                        437
                    ]
                }
            ],
            "insert_prices_chart_data": [
                413,
                {
                    "objects": [
                        410,
                        "[prices_chart_data_insert_input!]!"
                    ],
                    "on_conflict": [
                        414
                    ]
                }
            ],
            "insert_prices_chart_data_one": [
                403,
                {
                    "object": [
                        410,
                        "prices_chart_data_insert_input!"
                    ],
                    "on_conflict": [
                        414
                    ]
                }
            ],
            "insert_prices_one": [
                393,
                {
                    "object": [
                        431,
                        "prices_insert_input!"
                    ],
                    "on_conflict": [
                        437
                    ]
                }
            ],
            "insert_program_system": [
                487,
                {
                    "objects": [
                        482,
                        "[program_system_insert_input!]!"
                    ],
                    "on_conflict": [
                        488
                    ]
                }
            ],
            "insert_program_system_one": [
                460,
                {
                    "object": [
                        482,
                        "program_system_insert_input!"
                    ],
                    "on_conflict": [
                        488
                    ]
                }
            ],
            "insert_programs": [
                529,
                {
                    "objects": [
                        526,
                        "[programs_insert_input!]!"
                    ],
                    "on_conflict": [
                        531
                    ]
                }
            ],
            "insert_programs_one": [
                519,
                {
                    "object": [
                        526,
                        "programs_insert_input!"
                    ],
                    "on_conflict": [
                        531
                    ]
                }
            ],
            "insert_proposal_bars": [
                557,
                {
                    "objects": [
                        554,
                        "[proposal_bars_insert_input!]!"
                    ],
                    "on_conflict": [
                        558
                    ]
                }
            ],
            "insert_proposal_bars_one": [
                547,
                {
                    "object": [
                        554,
                        "proposal_bars_insert_input!"
                    ],
                    "on_conflict": [
                        558
                    ]
                }
            ],
            "insert_proposal_details": [
                595,
                {
                    "objects": [
                        590,
                        "[proposal_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        596
                    ]
                }
            ],
            "insert_proposal_details_one": [
                574,
                {
                    "object": [
                        590,
                        "proposal_details_insert_input!"
                    ],
                    "on_conflict": [
                        596
                    ]
                }
            ],
            "insert_proposals": [
                665,
                {
                    "objects": [
                        660,
                        "[proposals_insert_input!]!"
                    ],
                    "on_conflict": [
                        667
                    ]
                }
            ],
            "insert_proposals_one": [
                638,
                {
                    "object": [
                        660,
                        "proposals_insert_input!"
                    ],
                    "on_conflict": [
                        667
                    ]
                }
            ],
            "insert_reactions": [
                715,
                {
                    "objects": [
                        710,
                        "[reactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        716
                    ]
                }
            ],
            "insert_reactions_one": [
                698,
                {
                    "object": [
                        710,
                        "reactions_insert_input!"
                    ],
                    "on_conflict": [
                        716
                    ]
                }
            ],
            "insert_sessions": [
                753,
                {
                    "objects": [
                        748,
                        "[sessions_insert_input!]!"
                    ],
                    "on_conflict": [
                        754
                    ]
                }
            ],
            "insert_sessions_one": [
                739,
                {
                    "object": [
                        748,
                        "sessions_insert_input!"
                    ],
                    "on_conflict": [
                        754
                    ]
                }
            ],
            "insert_takes": [
                782,
                {
                    "objects": [
                        777,
                        "[takes_insert_input!]!"
                    ],
                    "on_conflict": [
                        784
                    ]
                }
            ],
            "insert_takes_one": [
                765,
                {
                    "object": [
                        777,
                        "takes_insert_input!"
                    ],
                    "on_conflict": [
                        784
                    ]
                }
            ],
            "insert_token_acct_balances": [
                828,
                {
                    "objects": [
                        823,
                        "[token_acct_balances_insert_input!]!"
                    ],
                    "on_conflict": [
                        829
                    ]
                }
            ],
            "insert_token_acct_balances_one": [
                811,
                {
                    "object": [
                        823,
                        "token_acct_balances_insert_input!"
                    ],
                    "on_conflict": [
                        829
                    ]
                }
            ],
            "insert_token_accts": [
                871,
                {
                    "objects": [
                        866,
                        "[token_accts_insert_input!]!"
                    ],
                    "on_conflict": [
                        873
                    ]
                }
            ],
            "insert_token_accts_one": [
                854,
                {
                    "object": [
                        866,
                        "token_accts_insert_input!"
                    ],
                    "on_conflict": [
                        873
                    ]
                }
            ],
            "insert_tokens": [
                906,
                {
                    "objects": [
                        903,
                        "[tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        908
                    ]
                }
            ],
            "insert_tokens_one": [
                896,
                {
                    "object": [
                        903,
                        "tokens_insert_input!"
                    ],
                    "on_conflict": [
                        908
                    ]
                }
            ],
            "insert_transaction_watcher_transactions": [
                942,
                {
                    "objects": [
                        937,
                        "[transaction_watcher_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        943
                    ]
                }
            ],
            "insert_transaction_watcher_transactions_one": [
                925,
                {
                    "object": [
                        937,
                        "transaction_watcher_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        943
                    ]
                }
            ],
            "insert_transaction_watchers": [
                983,
                {
                    "objects": [
                        978,
                        "[transaction_watchers_insert_input!]!"
                    ],
                    "on_conflict": [
                        985
                    ]
                }
            ],
            "insert_transaction_watchers_one": [
                966,
                {
                    "object": [
                        978,
                        "transaction_watchers_insert_input!"
                    ],
                    "on_conflict": [
                        985
                    ]
                }
            ],
            "insert_transactions": [
                1018,
                {
                    "objects": [
                        1015,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        1020
                    ]
                }
            ],
            "insert_transactions_one": [
                1008,
                {
                    "object": [
                        1015,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        1020
                    ]
                }
            ],
            "insert_twap_chart_data": [
                1046,
                {
                    "objects": [
                        1043,
                        "[twap_chart_data_insert_input!]!"
                    ],
                    "on_conflict": [
                        1047
                    ]
                }
            ],
            "insert_twap_chart_data_one": [
                1036,
                {
                    "object": [
                        1043,
                        "twap_chart_data_insert_input!"
                    ],
                    "on_conflict": [
                        1047
                    ]
                }
            ],
            "insert_twaps": [
                1079,
                {
                    "objects": [
                        1074,
                        "[twaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        1080
                    ]
                }
            ],
            "insert_twaps_one": [
                1062,
                {
                    "object": [
                        1074,
                        "twaps_insert_input!"
                    ],
                    "on_conflict": [
                        1080
                    ]
                }
            ],
            "insert_user_deposits": [
                1112,
                {
                    "objects": [
                        1109,
                        "[user_deposits_insert_input!]!"
                    ]
                }
            ],
            "insert_user_deposits_one": [
                1103,
                {
                    "object": [
                        1109,
                        "user_deposits_insert_input!"
                    ]
                }
            ],
            "insert_user_performance": [
                1143,
                {
                    "objects": [
                        1138,
                        "[user_performance_insert_input!]!"
                    ],
                    "on_conflict": [
                        1144
                    ]
                }
            ],
            "insert_user_performance_one": [
                1126,
                {
                    "object": [
                        1138,
                        "user_performance_insert_input!"
                    ],
                    "on_conflict": [
                        1144
                    ]
                }
            ],
            "insert_users": [
                1175,
                {
                    "objects": [
                        1172,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        1177
                    ]
                }
            ],
            "insert_users_one": [
                1167,
                {
                    "object": [
                        1172,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        1177
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
                172,
                {
                    "_inc": [
                        166
                    ],
                    "_set": [
                        178
                    ],
                    "where": [
                        164,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "update_daos_by_pk": [
                155,
                {
                    "_inc": [
                        166
                    ],
                    "_set": [
                        178
                    ],
                    "pk_columns": [
                        176,
                        "daos_pk_columns_input!"
                    ]
                }
            ],
            "update_daos_many": [
                172,
                {
                    "updates": [
                        190,
                        "[daos_updates!]!"
                    ]
                }
            ],
            "update_indexer_account_dependencies": [
                213,
                {
                    "_set": [
                        218
                    ],
                    "where": [
                        206,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_by_pk": [
                199,
                {
                    "_set": [
                        218
                    ],
                    "pk_columns": [
                        216,
                        "indexer_account_dependencies_pk_columns_input!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_many": [
                213,
                {
                    "updates": [
                        222,
                        "[indexer_account_dependencies_updates!]!"
                    ]
                }
            ],
            "update_indexers": [
                233,
                {
                    "_inc": [
                        229
                    ],
                    "_set": [
                        239
                    ],
                    "where": [
                        227,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "update_indexers_by_pk": [
                223,
                {
                    "_inc": [
                        229
                    ],
                    "_set": [
                        239
                    ],
                    "pk_columns": [
                        237,
                        "indexers_pk_columns_input!"
                    ]
                }
            ],
            "update_indexers_many": [
                233,
                {
                    "updates": [
                        247,
                        "[indexers_updates!]!"
                    ]
                }
            ],
            "update_makes": [
                275,
                {
                    "_inc": [
                        269
                    ],
                    "_set": [
                        283
                    ],
                    "where": [
                        267,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "update_makes_by_pk": [
                256,
                {
                    "_inc": [
                        269
                    ],
                    "_set": [
                        283
                    ],
                    "pk_columns": [
                        279,
                        "makes_pk_columns_input!"
                    ]
                }
            ],
            "update_makes_many": [
                275,
                {
                    "updates": [
                        295,
                        "[makes_updates!]!"
                    ]
                }
            ],
            "update_markets": [
                319,
                {
                    "_inc": [
                        313
                    ],
                    "_set": [
                        325
                    ],
                    "where": [
                        311,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "update_markets_by_pk": [
                302,
                {
                    "_inc": [
                        313
                    ],
                    "_set": [
                        325
                    ],
                    "pk_columns": [
                        323,
                        "markets_pk_columns_input!"
                    ]
                }
            ],
            "update_markets_many": [
                319,
                {
                    "updates": [
                        337,
                        "[markets_updates!]!"
                    ]
                }
            ],
            "update_orders": [
                366,
                {
                    "_inc": [
                        360
                    ],
                    "_set": [
                        374
                    ],
                    "where": [
                        358,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "update_orders_by_pk": [
                347,
                {
                    "_inc": [
                        360
                    ],
                    "_set": [
                        374
                    ],
                    "pk_columns": [
                        370,
                        "orders_pk_columns_input!"
                    ]
                }
            ],
            "update_orders_many": [
                366,
                {
                    "updates": [
                        386,
                        "[orders_updates!]!"
                    ]
                }
            ],
            "update_prices": [
                436,
                {
                    "_inc": [
                        430
                    ],
                    "_set": [
                        441
                    ],
                    "where": [
                        402,
                        "prices_bool_exp!"
                    ]
                }
            ],
            "update_prices_by_pk": [
                393,
                {
                    "_inc": [
                        430
                    ],
                    "_set": [
                        441
                    ],
                    "pk_columns": [
                        439,
                        "prices_pk_columns_input!"
                    ]
                }
            ],
            "update_prices_chart_data": [
                413,
                {
                    "_inc": [
                        409
                    ],
                    "_set": [
                        417
                    ],
                    "where": [
                        407,
                        "prices_chart_data_bool_exp!"
                    ]
                }
            ],
            "update_prices_chart_data_many": [
                413,
                {
                    "updates": [
                        425,
                        "[prices_chart_data_updates!]!"
                    ]
                }
            ],
            "update_prices_many": [
                436,
                {
                    "updates": [
                        453,
                        "[prices_updates!]!"
                    ]
                }
            ],
            "update_program_system": [
                487,
                {
                    "_inc": [
                        481
                    ],
                    "_set": [
                        500
                    ],
                    "where": [
                        479,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "update_program_system_by_pk": [
                460,
                {
                    "_inc": [
                        481
                    ],
                    "_set": [
                        500
                    ],
                    "pk_columns": [
                        490,
                        "program_system_pk_columns_input!"
                    ]
                }
            ],
            "update_program_system_many": [
                487,
                {
                    "updates": [
                        512,
                        "[program_system_updates!]!"
                    ]
                }
            ],
            "update_programs": [
                529,
                {
                    "_inc": [
                        525
                    ],
                    "_set": [
                        535
                    ],
                    "where": [
                        523,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "update_programs_by_pk": [
                519,
                {
                    "_inc": [
                        525
                    ],
                    "_set": [
                        535
                    ],
                    "pk_columns": [
                        533,
                        "programs_pk_columns_input!"
                    ]
                }
            ],
            "update_programs_many": [
                529,
                {
                    "updates": [
                        543,
                        "[programs_updates!]!"
                    ]
                }
            ],
            "update_proposal_bars": [
                557,
                {
                    "_inc": [
                        553
                    ],
                    "_set": [
                        562
                    ],
                    "where": [
                        551,
                        "proposal_bars_bool_exp!"
                    ]
                }
            ],
            "update_proposal_bars_by_pk": [
                547,
                {
                    "_inc": [
                        553
                    ],
                    "_set": [
                        562
                    ],
                    "pk_columns": [
                        560,
                        "proposal_bars_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_bars_many": [
                557,
                {
                    "updates": [
                        570,
                        "[proposal_bars_updates!]!"
                    ]
                }
            ],
            "update_proposal_details": [
                595,
                {
                    "_append": [
                        580
                    ],
                    "_delete_at_path": [
                        586
                    ],
                    "_delete_elem": [
                        587
                    ],
                    "_delete_key": [
                        588
                    ],
                    "_inc": [
                        589
                    ],
                    "_prepend": [
                        599
                    ],
                    "_set": [
                        601
                    ],
                    "where": [
                        584,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "update_proposal_details_by_pk": [
                574,
                {
                    "_append": [
                        580
                    ],
                    "_delete_at_path": [
                        586
                    ],
                    "_delete_elem": [
                        587
                    ],
                    "_delete_key": [
                        588
                    ],
                    "_inc": [
                        589
                    ],
                    "_prepend": [
                        599
                    ],
                    "_set": [
                        601
                    ],
                    "pk_columns": [
                        598,
                        "proposal_details_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_details_many": [
                595,
                {
                    "updates": [
                        613,
                        "[proposal_details_updates!]!"
                    ]
                }
            ],
            "update_proposals": [
                665,
                {
                    "_inc": [
                        659
                    ],
                    "_set": [
                        679
                    ],
                    "where": [
                        657,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "update_proposals_by_pk": [
                638,
                {
                    "_inc": [
                        659
                    ],
                    "_set": [
                        679
                    ],
                    "pk_columns": [
                        669,
                        "proposals_pk_columns_input!"
                    ]
                }
            ],
            "update_proposals_many": [
                665,
                {
                    "updates": [
                        691,
                        "[proposals_updates!]!"
                    ]
                }
            ],
            "update_reactions": [
                715,
                {
                    "_inc": [
                        709
                    ],
                    "_set": [
                        720
                    ],
                    "where": [
                        707,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "update_reactions_by_pk": [
                698,
                {
                    "_inc": [
                        709
                    ],
                    "_set": [
                        720
                    ],
                    "pk_columns": [
                        718,
                        "reactions_pk_columns_input!"
                    ]
                }
            ],
            "update_reactions_many": [
                715,
                {
                    "updates": [
                        732,
                        "[reactions_updates!]!"
                    ]
                }
            ],
            "update_sessions": [
                753,
                {
                    "_set": [
                        758
                    ],
                    "where": [
                        746,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "update_sessions_by_pk": [
                739,
                {
                    "_set": [
                        758
                    ],
                    "pk_columns": [
                        756,
                        "sessions_pk_columns_input!"
                    ]
                }
            ],
            "update_sessions_many": [
                753,
                {
                    "updates": [
                        762,
                        "[sessions_updates!]!"
                    ]
                }
            ],
            "update_takes": [
                782,
                {
                    "_inc": [
                        776
                    ],
                    "_set": [
                        788
                    ],
                    "where": [
                        774,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "update_takes_by_pk": [
                765,
                {
                    "_inc": [
                        776
                    ],
                    "_set": [
                        788
                    ],
                    "pk_columns": [
                        786,
                        "takes_pk_columns_input!"
                    ]
                }
            ],
            "update_takes_many": [
                782,
                {
                    "updates": [
                        800,
                        "[takes_updates!]!"
                    ]
                }
            ],
            "update_token_acct_balances": [
                828,
                {
                    "_inc": [
                        822
                    ],
                    "_set": [
                        833
                    ],
                    "where": [
                        820,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "update_token_acct_balances_by_pk": [
                811,
                {
                    "_inc": [
                        822
                    ],
                    "_set": [
                        833
                    ],
                    "pk_columns": [
                        831,
                        "token_acct_balances_pk_columns_input!"
                    ]
                }
            ],
            "update_token_acct_balances_many": [
                828,
                {
                    "updates": [
                        845,
                        "[token_acct_balances_updates!]!"
                    ]
                }
            ],
            "update_token_accts": [
                871,
                {
                    "_inc": [
                        865
                    ],
                    "_set": [
                        877
                    ],
                    "where": [
                        863,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "update_token_accts_by_pk": [
                854,
                {
                    "_inc": [
                        865
                    ],
                    "_set": [
                        877
                    ],
                    "pk_columns": [
                        875,
                        "token_accts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_accts_many": [
                871,
                {
                    "updates": [
                        889,
                        "[token_accts_updates!]!"
                    ]
                }
            ],
            "update_tokens": [
                906,
                {
                    "_inc": [
                        902
                    ],
                    "_set": [
                        912
                    ],
                    "where": [
                        900,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "update_tokens_by_pk": [
                896,
                {
                    "_inc": [
                        902
                    ],
                    "_set": [
                        912
                    ],
                    "pk_columns": [
                        910,
                        "tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_tokens_many": [
                906,
                {
                    "updates": [
                        920,
                        "[tokens_updates!]!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions": [
                942,
                {
                    "_inc": [
                        936
                    ],
                    "_set": [
                        947
                    ],
                    "where": [
                        934,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_by_pk": [
                925,
                {
                    "_inc": [
                        936
                    ],
                    "_set": [
                        947
                    ],
                    "pk_columns": [
                        945,
                        "transaction_watcher_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_many": [
                942,
                {
                    "updates": [
                        959,
                        "[transaction_watcher_transactions_updates!]!"
                    ]
                }
            ],
            "update_transaction_watchers": [
                983,
                {
                    "_inc": [
                        977
                    ],
                    "_set": [
                        989
                    ],
                    "where": [
                        975,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watchers_by_pk": [
                966,
                {
                    "_inc": [
                        977
                    ],
                    "_set": [
                        989
                    ],
                    "pk_columns": [
                        987,
                        "transaction_watchers_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watchers_many": [
                983,
                {
                    "updates": [
                        1001,
                        "[transaction_watchers_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                1018,
                {
                    "_inc": [
                        1014
                    ],
                    "_set": [
                        1024
                    ],
                    "where": [
                        1012,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                1008,
                {
                    "_inc": [
                        1014
                    ],
                    "_set": [
                        1024
                    ],
                    "pk_columns": [
                        1022,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                1018,
                {
                    "updates": [
                        1032,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_twap_chart_data": [
                1046,
                {
                    "_inc": [
                        1042
                    ],
                    "_set": [
                        1050
                    ],
                    "where": [
                        1040,
                        "twap_chart_data_bool_exp!"
                    ]
                }
            ],
            "update_twap_chart_data_many": [
                1046,
                {
                    "updates": [
                        1058,
                        "[twap_chart_data_updates!]!"
                    ]
                }
            ],
            "update_twaps": [
                1079,
                {
                    "_inc": [
                        1073
                    ],
                    "_set": [
                        1084
                    ],
                    "where": [
                        1071,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "update_twaps_by_pk": [
                1062,
                {
                    "_inc": [
                        1073
                    ],
                    "_set": [
                        1084
                    ],
                    "pk_columns": [
                        1082,
                        "twaps_pk_columns_input!"
                    ]
                }
            ],
            "update_twaps_many": [
                1079,
                {
                    "updates": [
                        1096,
                        "[twaps_updates!]!"
                    ]
                }
            ],
            "update_user_deposits": [
                1112,
                {
                    "_inc": [
                        1108
                    ],
                    "_set": [
                        1115
                    ],
                    "where": [
                        1107,
                        "user_deposits_bool_exp!"
                    ]
                }
            ],
            "update_user_deposits_many": [
                1112,
                {
                    "updates": [
                        1122,
                        "[user_deposits_updates!]!"
                    ]
                }
            ],
            "update_user_performance": [
                1143,
                {
                    "_inc": [
                        1137
                    ],
                    "_set": [
                        1148
                    ],
                    "where": [
                        1135,
                        "user_performance_bool_exp!"
                    ]
                }
            ],
            "update_user_performance_by_pk": [
                1126,
                {
                    "_inc": [
                        1137
                    ],
                    "_set": [
                        1148
                    ],
                    "pk_columns": [
                        1146,
                        "user_performance_pk_columns_input!"
                    ]
                }
            ],
            "update_user_performance_many": [
                1143,
                {
                    "updates": [
                        1160,
                        "[user_performance_updates!]!"
                    ]
                }
            ],
            "update_users": [
                1175,
                {
                    "_set": [
                        1181
                    ],
                    "where": [
                        1170,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_by_pk": [
                1167,
                {
                    "_set": [
                        1181
                    ],
                    "pk_columns": [
                        1179,
                        "users_pk_columns_input!"
                    ]
                }
            ],
            "update_users_many": [
                1175,
                {
                    "updates": [
                        1185,
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
                        809,
                        "timestamptz!"
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
                155,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_aggregate": [
                156,
                {
                    "distinct_on": [
                        177,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        175,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "daos_by_pk": [
                155,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "daos_stream": [
                155,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        185,
                        "[daos_stream_cursor_input]!"
                    ],
                    "where": [
                        164
                    ]
                }
            ],
            "indexer_account_dependencies": [
                199,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                200,
                {
                    "distinct_on": [
                        217,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        215,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                199,
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
                199,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        219,
                        "[indexer_account_dependencies_stream_cursor_input]!"
                    ],
                    "where": [
                        206
                    ]
                }
            ],
            "indexers": [
                223,
                {
                    "distinct_on": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        236,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "indexers_aggregate": [
                224,
                {
                    "distinct_on": [
                        238,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        236,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "indexers_by_pk": [
                223,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexers_stream": [
                223,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        243,
                        "[indexers_stream_cursor_input]!"
                    ],
                    "where": [
                        227
                    ]
                }
            ],
            "makes": [
                256,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_aggregate": [
                257,
                {
                    "distinct_on": [
                        280,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        278,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "makes_by_pk": [
                256,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes_stream": [
                256,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        290,
                        "[makes_stream_cursor_input]!"
                    ],
                    "where": [
                        267
                    ]
                }
            ],
            "markets": [
                302,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_aggregate": [
                303,
                {
                    "distinct_on": [
                        324,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        322,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "markets_by_pk": [
                302,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets_stream": [
                302,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        332,
                        "[markets_stream_cursor_input]!"
                    ],
                    "where": [
                        311
                    ]
                }
            ],
            "orders": [
                347,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_aggregate": [
                348,
                {
                    "distinct_on": [
                        371,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        369,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "orders_by_pk": [
                347,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders_stream": [
                347,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        381,
                        "[orders_stream_cursor_input]!"
                    ],
                    "where": [
                        358
                    ]
                }
            ],
            "prices": [
                393,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_aggregate": [
                394,
                {
                    "distinct_on": [
                        440,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        438,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "prices_by_pk": [
                393,
                {
                    "created_at": [
                        809,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices_chart_data": [
                403,
                {
                    "distinct_on": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        415,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "prices_chart_data_aggregate": [
                404,
                {
                    "distinct_on": [
                        416,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        415,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "prices_chart_data_stream": [
                403,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        421,
                        "[prices_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        407
                    ]
                }
            ],
            "prices_stream": [
                393,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        448,
                        "[prices_stream_cursor_input]!"
                    ],
                    "where": [
                        402
                    ]
                }
            ],
            "program_system": [
                460,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_system_aggregate": [
                461,
                {
                    "distinct_on": [
                        491,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        489,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "program_system_by_pk": [
                460,
                {
                    "system_version": [
                        197,
                        "float8!"
                    ]
                }
            ],
            "program_system_stream": [
                460,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        507,
                        "[program_system_stream_cursor_input]!"
                    ],
                    "where": [
                        479
                    ]
                }
            ],
            "programs": [
                519,
                {
                    "distinct_on": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        532,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "programs_aggregate": [
                520,
                {
                    "distinct_on": [
                        534,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        532,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "programs_by_pk": [
                519,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs_stream": [
                519,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        539,
                        "[programs_stream_cursor_input]!"
                    ],
                    "where": [
                        523
                    ]
                }
            ],
            "proposal_bars": [
                547,
                {
                    "distinct_on": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        559,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_bars_aggregate": [
                548,
                {
                    "distinct_on": [
                        561,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        559,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_bars_by_pk": [
                547,
                {
                    "bar_size": [
                        251,
                        "interval!"
                    ],
                    "bar_start_time": [
                        809,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_bars_stream": [
                547,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        566,
                        "[proposal_bars_stream_cursor_input]!"
                    ],
                    "where": [
                        551
                    ]
                }
            ],
            "proposal_details": [
                574,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_aggregate": [
                575,
                {
                    "distinct_on": [
                        600,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_details_by_pk": [
                574,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_details_stream": [
                574,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        608,
                        "[proposal_details_stream_cursor_input]!"
                    ],
                    "where": [
                        584
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                620,
                {
                    "distinct_on": [
                        628,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        627,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        624
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                621,
                {
                    "distinct_on": [
                        628,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        627,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        624
                    ]
                }
            ],
            "proposal_total_trade_volume_stream": [
                620,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        632,
                        "[proposal_total_trade_volume_stream_cursor_input]!"
                    ],
                    "where": [
                        624
                    ]
                }
            ],
            "proposals": [
                638,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
                    ]
                }
            ],
            "proposals_aggregate": [
                639,
                {
                    "distinct_on": [
                        670,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        668,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        657
                    ]
                }
            ],
            "proposals_by_pk": [
                638,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposals_stream": [
                638,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        686,
                        "[proposals_stream_cursor_input]!"
                    ],
                    "where": [
                        657
                    ]
                }
            ],
            "reactions": [
                698,
                {
                    "distinct_on": [
                        719,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        707
                    ]
                }
            ],
            "reactions_aggregate": [
                699,
                {
                    "distinct_on": [
                        719,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        717,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        707
                    ]
                }
            ],
            "reactions_by_pk": [
                698,
                {
                    "reaction_id": [
                        1186,
                        "uuid!"
                    ]
                }
            ],
            "reactions_stream": [
                698,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        727,
                        "[reactions_stream_cursor_input]!"
                    ],
                    "where": [
                        707
                    ]
                }
            ],
            "sessions": [
                739,
                {
                    "distinct_on": [
                        757,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        755,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        746
                    ]
                }
            ],
            "sessions_aggregate": [
                740,
                {
                    "distinct_on": [
                        757,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        755,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        746
                    ]
                }
            ],
            "sessions_by_pk": [
                739,
                {
                    "id": [
                        1186,
                        "uuid!"
                    ]
                }
            ],
            "sessions_stream": [
                739,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        759,
                        "[sessions_stream_cursor_input]!"
                    ],
                    "where": [
                        746
                    ]
                }
            ],
            "takes": [
                765,
                {
                    "distinct_on": [
                        787,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        785,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        774
                    ]
                }
            ],
            "takes_aggregate": [
                766,
                {
                    "distinct_on": [
                        787,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        785,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        774
                    ]
                }
            ],
            "takes_by_pk": [
                765,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes_stream": [
                765,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        795,
                        "[takes_stream_cursor_input]!"
                    ],
                    "where": [
                        774
                    ]
                }
            ],
            "token_acct_balances": [
                811,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                812,
                {
                    "distinct_on": [
                        832,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        830,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                811,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        809,
                        "timestamptz!"
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
                811,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        840,
                        "[token_acct_balances_stream_cursor_input]!"
                    ],
                    "where": [
                        820
                    ]
                }
            ],
            "token_accts": [
                854,
                {
                    "distinct_on": [
                        876,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        863
                    ]
                }
            ],
            "token_accts_aggregate": [
                855,
                {
                    "distinct_on": [
                        876,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        874,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        863
                    ]
                }
            ],
            "token_accts_by_pk": [
                854,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts_stream": [
                854,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        884,
                        "[token_accts_stream_cursor_input]!"
                    ],
                    "where": [
                        863
                    ]
                }
            ],
            "tokens": [
                896,
                {
                    "distinct_on": [
                        911,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        909,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        900
                    ]
                }
            ],
            "tokens_aggregate": [
                897,
                {
                    "distinct_on": [
                        911,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        909,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        900
                    ]
                }
            ],
            "tokens_by_pk": [
                896,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens_stream": [
                896,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        916,
                        "[tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        900
                    ]
                }
            ],
            "top_dao_traders": [
                151,
                {
                    "args": [
                        924,
                        "top_dao_traders_arguments!"
                    ],
                    "distinct_on": [
                        153,
                        "[dao_trader_enum_name!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        154,
                        "[dao_trader_order_by!]"
                    ],
                    "where": [
                        152
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                925,
                {
                    "distinct_on": [
                        946,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        944,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        934
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                926,
                {
                    "distinct_on": [
                        946,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        944,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        934
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                925,
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
                925,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        954,
                        "[transaction_watcher_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        934
                    ]
                }
            ],
            "transaction_watchers": [
                966,
                {
                    "distinct_on": [
                        988,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        986,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        975
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                967,
                {
                    "distinct_on": [
                        988,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        986,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        975
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                966,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers_stream": [
                966,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        996,
                        "[transaction_watchers_stream_cursor_input]!"
                    ],
                    "where": [
                        975
                    ]
                }
            ],
            "transactions": [
                1008,
                {
                    "distinct_on": [
                        1023,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1021,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "transactions_aggregate": [
                1009,
                {
                    "distinct_on": [
                        1023,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1021,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "transactions_by_pk": [
                1008,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                1008,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1028,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        1012
                    ]
                }
            ],
            "twap_chart_data": [
                1036,
                {
                    "distinct_on": [
                        1049,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1048,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1040
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1037,
                {
                    "distinct_on": [
                        1049,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1048,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1040
                    ]
                }
            ],
            "twap_chart_data_stream": [
                1036,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1054,
                        "[twap_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        1040
                    ]
                }
            ],
            "twaps": [
                1062,
                {
                    "distinct_on": [
                        1083,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1081,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1071
                    ]
                }
            ],
            "twaps_aggregate": [
                1063,
                {
                    "distinct_on": [
                        1083,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1081,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1071
                    ]
                }
            ],
            "twaps_by_pk": [
                1062,
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
                1062,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1091,
                        "[twaps_stream_cursor_input]!"
                    ],
                    "where": [
                        1071
                    ]
                }
            ],
            "user_deposits": [
                1103,
                {
                    "distinct_on": [
                        1114,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1113,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_deposits_aggregate": [
                1104,
                {
                    "distinct_on": [
                        1114,
                        "[user_deposits_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1113,
                        "[user_deposits_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_deposits_stream": [
                1103,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1119,
                        "[user_deposits_stream_cursor_input]!"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_performance": [
                1126,
                {
                    "distinct_on": [
                        1147,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1145,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1135
                    ]
                }
            ],
            "user_performance_aggregate": [
                1127,
                {
                    "distinct_on": [
                        1147,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1145,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1135
                    ]
                }
            ],
            "user_performance_by_pk": [
                1126,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ],
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "user_performance_stream": [
                1126,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1155,
                        "[user_performance_stream_cursor_input]!"
                    ],
                    "where": [
                        1135
                    ]
                }
            ],
            "users": [
                1167,
                {
                    "distinct_on": [
                        1180,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1178,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1170
                    ]
                }
            ],
            "users_aggregate": [
                1168,
                {
                    "distinct_on": [
                        1180,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1178,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1170
                    ]
                }
            ],
            "users_by_pk": [
                1167,
                {
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "users_stream": [
                1167,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1182,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        1170
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}