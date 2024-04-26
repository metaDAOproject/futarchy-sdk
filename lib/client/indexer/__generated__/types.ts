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
        92,
        98,
        108,
        116,
        131,
        143,
        155,
        163,
        173,
        183,
        187,
        194,
        204,
        212,
        217,
        232,
        244,
        245,
        246,
        258,
        276,
        288,
        300,
        308,
        310,
        323,
        335,
        336,
        337,
        349,
        377,
        388,
        389,
        390,
        391,
        392,
        393,
        394,
        395,
        396,
        408,
        421,
        431,
        439,
        455,
        470,
        482,
        506,
        538,
        550,
        551,
        552,
        553,
        554,
        555,
        556,
        557,
        558,
        570,
        588,
        599,
        611,
        619,
        631,
        643,
        655,
        663,
        675,
        687,
        699,
        712,
        722,
        730,
        745,
        756,
        768,
        786,
        798,
        810,
        823,
        833,
        841,
        856,
        867,
        879,
        891,
        898,
        902
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
                266
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                663
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
                310
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "open": [
                310
            ],
            "volume": [
                310
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
                275
            ],
            "market_acct": [
                6
            ],
            "open": [
                8
            ],
            "timestamp": [
                664
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
                284
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                663
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
                663
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "market_acct": [
                310
            ],
            "open": [
                310
            ],
            "timestamp": [
                310
            ],
            "volume": [
                310
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
                663
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "market_acct": [
                310
            ],
            "open": [
                310
            ],
            "timestamp": [
                310
            ],
            "volume": [
                310
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "market": [
                286
            ],
            "market_acct": [
                310
            ],
            "open": [
                310
            ],
            "timestamp": [
                310
            ],
            "volume": [
                310
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
                663
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
                663
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "open": [
                310
            ],
            "volume": [
                310
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "open": [
                310
            ],
            "volume": [
                310
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "open": [
                310
            ],
            "volume": [
                310
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
                92
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
                663
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "open": [
                310
            ],
            "volume": [
                310
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "open": [
                310
            ],
            "volume": [
                310
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "open": [
                310
            ],
            "volume": [
                310
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
                310
            ],
            "candle_duration": [
                310
            ],
            "close": [
                310
            ],
            "cond_market_twap": [
                310
            ],
            "high": [
                310
            ],
            "low": [
                310
            ],
            "open": [
                310
            ],
            "volume": [
                310
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
                663
            ],
            "proposal": [
                518
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                578,
                {
                    "distinct_on": [
                        599,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "reactions_aggregate": [
                579,
                {
                    "distinct_on": [
                        599,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        587
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
                310
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
                310
            ],
            "responding_comment_id": [
                310
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
                664
            ],
            "proposal": [
                537
            ],
            "proposal_acct": [
                6
            ],
            "reactions": [
                587
            ],
            "reactions_aggregate": [
                580
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
                663
            ],
            "proposal": [
                546
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                584
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
                663
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
                310
            ],
            "commentor_acct": [
                310
            ],
            "content": [
                310
            ],
            "created_at": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "responding_comment_id": [
                310
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
                663
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
                310
            ],
            "commentor_acct": [
                310
            ],
            "content": [
                310
            ],
            "created_at": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "responding_comment_id": [
                310
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
                310
            ],
            "commentor_acct": [
                310
            ],
            "comments_aggregate": [
                55
            ],
            "content": [
                310
            ],
            "created_at": [
                310
            ],
            "proposal": [
                548
            ],
            "proposal_acct": [
                310
            ],
            "reactions_aggregate": [
                583
            ],
            "responding_comment_id": [
                310
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
                663
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
                310
            ],
            "responding_comment_id": [
                310
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
                310
            ],
            "responding_comment_id": [
                310
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
                310
            ],
            "responding_comment_id": [
                310
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
                92
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
                663
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
                310
            ],
            "responding_comment_id": [
                310
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
                310
            ],
            "responding_comment_id": [
                310
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
                310
            ],
            "responding_comment_id": [
                310
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
                310
            ],
            "responding_comment_id": [
                310
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
                121,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "daos_aggregate": [
                122,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "description": [
                5
            ],
            "github": [
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
                95
            ],
            "nodes": [
                93
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_aggregate_fields": {
            "avg": [
                96
            ],
            "count": [
                3,
                {
                    "columns": [
                        108,
                        "[dao_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                101
            ],
            "min": [
                102
            ],
            "stddev": [
                110
            ],
            "stddev_pop": [
                111
            ],
            "stddev_samp": [
                112
            ],
            "sum": [
                115
            ],
            "var_pop": [
                118
            ],
            "var_samp": [
                119
            ],
            "variance": [
                120
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
                97
            ],
            "_not": [
                97
            ],
            "_or": [
                97
            ],
            "dao_id": [
                8
            ],
            "daos": [
                130
            ],
            "daos_aggregate": [
                123
            ],
            "description": [
                6
            ],
            "github": [
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
                127
            ],
            "description": [
                5
            ],
            "github": [
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
                93
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_obj_rel_insert_input": {
            "data": [
                100
            ],
            "on_conflict": [
                105
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_on_conflict": {
            "constraint": [
                98
            ],
            "update_columns": [
                116
            ],
            "where": [
                97
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_order_by": {
            "dao_id": [
                310
            ],
            "daos_aggregate": [
                126
            ],
            "description": [
                310
            ],
            "github": [
                310
            ],
            "name": [
                310
            ],
            "slug": [
                310
            ],
            "url": [
                310
            ],
            "x_account": [
                310
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
                114
            ],
            "ordering": [
                92
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
                99
            ],
            "_set": [
                109
            ],
            "where": [
                97
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
                663
            ],
            "dao_acct": [
                5
            ],
            "dao_detail": [
                93
            ],
            "dao_id": [
                7
            ],
            "program": [
                416
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                518,
                {
                    "distinct_on": [
                        550,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        548,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        537
                    ]
                }
            ],
            "proposals_aggregate": [
                519,
                {
                    "distinct_on": [
                        550,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        548,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        537
                    ]
                }
            ],
            "quote_acct": [
                5
            ],
            "tokenByBaseAcct": [
                707
            ],
            "tokenByQuoteAcct": [
                707
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                663
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate": {
            "aggregate": [
                125
            ],
            "nodes": [
                121
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp": {
            "count": [
                124
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_bool_exp_count": {
            "arguments": [
                143
            ],
            "distinct": [
                0
            ],
            "filter": [
                130
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
                128
            ],
            "count": [
                3,
                {
                    "columns": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                134
            ],
            "min": [
                136
            ],
            "stddev": [
                145
            ],
            "stddev_pop": [
                147
            ],
            "stddev_samp": [
                149
            ],
            "sum": [
                153
            ],
            "var_pop": [
                157
            ],
            "var_samp": [
                159
            ],
            "variance": [
                161
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_order_by": {
            "avg": [
                129
            ],
            "count": [
                310
            ],
            "max": [
                135
            ],
            "min": [
                137
            ],
            "stddev": [
                146
            ],
            "stddev_pop": [
                148
            ],
            "stddev_samp": [
                150
            ],
            "sum": [
                154
            ],
            "var_pop": [
                158
            ],
            "var_samp": [
                160
            ],
            "variance": [
                162
            ],
            "__typename": [
                5
            ]
        },
        "daos_arr_rel_insert_input": {
            "data": [
                133
            ],
            "on_conflict": [
                140
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "daos_bool_exp": {
            "_and": [
                130
            ],
            "_not": [
                130
            ],
            "_or": [
                130
            ],
            "base_acct": [
                6
            ],
            "created_at": [
                664
            ],
            "dao_acct": [
                6
            ],
            "dao_detail": [
                97
            ],
            "dao_id": [
                8
            ],
            "program": [
                420
            ],
            "program_acct": [
                6
            ],
            "proposals": [
                537
            ],
            "proposals_aggregate": [
                520
            ],
            "quote_acct": [
                6
            ],
            "tokenByBaseAcct": [
                711
            ],
            "tokenByQuoteAcct": [
                711
            ],
            "treasury_acct": [
                6
            ],
            "updated_at": [
                664
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
            "created_at": [
                663
            ],
            "dao_acct": [
                5
            ],
            "dao_detail": [
                104
            ],
            "dao_id": [
                7
            ],
            "program": [
                427
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                534
            ],
            "quote_acct": [
                5
            ],
            "tokenByBaseAcct": [
                718
            ],
            "tokenByQuoteAcct": [
                718
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                663
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
                663
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "daos_max_order_by": {
            "base_acct": [
                310
            ],
            "created_at": [
                310
            ],
            "dao_acct": [
                310
            ],
            "dao_id": [
                310
            ],
            "program_acct": [
                310
            ],
            "quote_acct": [
                310
            ],
            "treasury_acct": [
                310
            ],
            "updated_at": [
                310
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
                663
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "daos_min_order_by": {
            "base_acct": [
                310
            ],
            "created_at": [
                310
            ],
            "dao_acct": [
                310
            ],
            "dao_id": [
                310
            ],
            "program_acct": [
                310
            ],
            "quote_acct": [
                310
            ],
            "treasury_acct": [
                310
            ],
            "updated_at": [
                310
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
                121
            ],
            "__typename": [
                5
            ]
        },
        "daos_obj_rel_insert_input": {
            "data": [
                133
            ],
            "on_conflict": [
                140
            ],
            "__typename": [
                5
            ]
        },
        "daos_on_conflict": {
            "constraint": [
                131
            ],
            "update_columns": [
                155
            ],
            "where": [
                130
            ],
            "__typename": [
                5
            ]
        },
        "daos_order_by": {
            "base_acct": [
                310
            ],
            "created_at": [
                310
            ],
            "dao_acct": [
                310
            ],
            "dao_detail": [
                106
            ],
            "dao_id": [
                310
            ],
            "program": [
                429
            ],
            "program_acct": [
                310
            ],
            "proposals_aggregate": [
                533
            ],
            "quote_acct": [
                310
            ],
            "tokenByBaseAcct": [
                720
            ],
            "tokenByQuoteAcct": [
                720
            ],
            "treasury_acct": [
                310
            ],
            "updated_at": [
                310
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
                663
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
                663
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "daos_stream_cursor_input": {
            "initial_value": [
                152
            ],
            "ordering": [
                92
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
                663
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
                663
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "daos_update_column": {},
        "daos_updates": {
            "_inc": [
                132
            ],
            "_set": [
                144
            ],
            "where": [
                130
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "float8": {},
        "float8_comparison_exp": {
            "_eq": [
                163
            ],
            "_gt": [
                163
            ],
            "_gte": [
                163
            ],
            "_in": [
                163
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                163
            ],
            "_lte": [
                163
            ],
            "_neq": [
                163
            ],
            "_nin": [
                163
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
                189
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "transaction": [
                818
            ],
            "transaction_watcher": [
                776
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate": {
            "aggregate": [
                169
            ],
            "nodes": [
                165
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp": {
            "count": [
                168
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_bool_exp_count": {
            "arguments": [
                183
            ],
            "distinct": [
                0
            ],
            "filter": [
                172
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
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                175
            ],
            "min": [
                177
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_aggregate_order_by": {
            "count": [
                310
            ],
            "max": [
                176
            ],
            "min": [
                178
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_arr_rel_insert_input": {
            "data": [
                174
            ],
            "on_conflict": [
                180
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_bool_exp": {
            "_and": [
                172
            ],
            "_not": [
                172
            ],
            "_or": [
                172
            ],
            "acct": [
                6
            ],
            "indexer": [
                193
            ],
            "latest_tx_sig_processed": [
                6
            ],
            "name": [
                6
            ],
            "transaction": [
                822
            ],
            "transaction_watcher": [
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
                200
            ],
            "latest_tx_sig_processed": [
                5
            ],
            "name": [
                5
            ],
            "transaction": [
                829
            ],
            "transaction_watcher": [
                794
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
                310
            ],
            "latest_tx_sig_processed": [
                310
            ],
            "name": [
                310
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
                310
            ],
            "latest_tx_sig_processed": [
                310
            ],
            "name": [
                310
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
                165
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_on_conflict": {
            "constraint": [
                173
            ],
            "update_columns": [
                187
            ],
            "where": [
                172
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_order_by": {
            "acct": [
                310
            ],
            "indexer": [
                202
            ],
            "latest_tx_sig_processed": [
                310
            ],
            "name": [
                310
            ],
            "transaction": [
                831
            ],
            "transaction_watcher": [
                796
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
                186
            ],
            "ordering": [
                92
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
                184
            ],
            "where": [
                172
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
                165,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                166,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
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
                191
            ],
            "nodes": [
                189
            ],
            "__typename": [
                5
            ]
        },
        "indexers_aggregate_fields": {
            "avg": [
                192
            ],
            "count": [
                3,
                {
                    "columns": [
                        204,
                        "[indexers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                197
            ],
            "min": [
                198
            ],
            "stddev": [
                206
            ],
            "stddev_pop": [
                207
            ],
            "stddev_samp": [
                208
            ],
            "sum": [
                211
            ],
            "var_pop": [
                214
            ],
            "var_samp": [
                215
            ],
            "variance": [
                216
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
                193
            ],
            "_not": [
                193
            ],
            "_or": [
                193
            ],
            "implementation": [
                6
            ],
            "indexer_account_dependencies": [
                172
            ],
            "indexer_account_dependencies_aggregate": [
                167
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
                171
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
                189
            ],
            "__typename": [
                5
            ]
        },
        "indexers_obj_rel_insert_input": {
            "data": [
                196
            ],
            "on_conflict": [
                201
            ],
            "__typename": [
                5
            ]
        },
        "indexers_on_conflict": {
            "constraint": [
                194
            ],
            "update_columns": [
                212
            ],
            "where": [
                193
            ],
            "__typename": [
                5
            ]
        },
        "indexers_order_by": {
            "implementation": [
                310
            ],
            "indexer_account_dependencies_aggregate": [
                170
            ],
            "latest_slot_processed": [
                310
            ],
            "name": [
                310
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
                210
            ],
            "ordering": [
                92
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
                195
            ],
            "_set": [
                205
            ],
            "where": [
                193
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
                218
            ],
            "_contained_in": [
                217
            ],
            "_contains": [
                217
            ],
            "_eq": [
                217
            ],
            "_gt": [
                217
            ],
            "_gte": [
                217
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
                217
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                217
            ],
            "_lte": [
                217
            ],
            "_neq": [
                217
            ],
            "_nin": [
                217
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
                266
            ],
            "market_acct": [
                5
            ],
            "order": [
                311
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "takes": [
                621,
                {
                    "distinct_on": [
                        643,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        641,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "takes_aggregate": [
                622,
                {
                    "distinct_on": [
                        643,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        641,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                663
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate": {
            "aggregate": [
                226
            ],
            "nodes": [
                220
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp": {
            "bool_and": [
                223
            ],
            "bool_or": [
                224
            ],
            "count": [
                225
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_bool_and": {
            "arguments": [
                245
            ],
            "distinct": [
                0
            ],
            "filter": [
                231
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
                246
            ],
            "distinct": [
                0
            ],
            "filter": [
                231
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
                244
            ],
            "distinct": [
                0
            ],
            "filter": [
                231
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
                229
            ],
            "count": [
                3,
                {
                    "columns": [
                        244,
                        "[makes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                235
            ],
            "min": [
                237
            ],
            "stddev": [
                248
            ],
            "stddev_pop": [
                250
            ],
            "stddev_samp": [
                252
            ],
            "sum": [
                256
            ],
            "var_pop": [
                260
            ],
            "var_samp": [
                262
            ],
            "variance": [
                264
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_order_by": {
            "avg": [
                230
            ],
            "count": [
                310
            ],
            "max": [
                236
            ],
            "min": [
                238
            ],
            "stddev": [
                249
            ],
            "stddev_pop": [
                251
            ],
            "stddev_samp": [
                253
            ],
            "sum": [
                257
            ],
            "var_pop": [
                261
            ],
            "var_samp": [
                263
            ],
            "variance": [
                265
            ],
            "__typename": [
                5
            ]
        },
        "makes_arr_rel_insert_input": {
            "data": [
                234
            ],
            "on_conflict": [
                241
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
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "makes_bool_exp": {
            "_and": [
                231
            ],
            "_not": [
                231
            ],
            "_or": [
                231
            ],
            "filled_base_amount": [
                8
            ],
            "is_active": [
                1
            ],
            "market": [
                275
            ],
            "market_acct": [
                6
            ],
            "order": [
                322
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                8
            ],
            "takes": [
                630
            ],
            "takes_aggregate": [
                623
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                664
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
                284
            ],
            "market_acct": [
                5
            ],
            "order": [
                331
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                7
            ],
            "takes": [
                627
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                663
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "makes_max_order_by": {
            "filled_base_amount": [
                310
            ],
            "market_acct": [
                310
            ],
            "order_tx_sig": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "updated_at": [
                310
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "makes_min_order_by": {
            "filled_base_amount": [
                310
            ],
            "market_acct": [
                310
            ],
            "order_tx_sig": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "updated_at": [
                310
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
                220
            ],
            "__typename": [
                5
            ]
        },
        "makes_obj_rel_insert_input": {
            "data": [
                234
            ],
            "on_conflict": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "makes_on_conflict": {
            "constraint": [
                232
            ],
            "update_columns": [
                258
            ],
            "where": [
                231
            ],
            "__typename": [
                5
            ]
        },
        "makes_order_by": {
            "filled_base_amount": [
                310
            ],
            "is_active": [
                310
            ],
            "market": [
                286
            ],
            "market_acct": [
                310
            ],
            "order": [
                333
            ],
            "order_tx_sig": [
                310
            ],
            "quote_price": [
                310
            ],
            "takes_aggregate": [
                626
            ],
            "unfilled_base_amount": [
                310
            ],
            "updated_at": [
                310
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
                663
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
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "makes_stream_cursor_input": {
            "initial_value": [
                255
            ],
            "ordering": [
                92
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
                663
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
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "makes_update_column": {},
        "makes_updates": {
            "_inc": [
                233
            ],
            "_set": [
                247
            ],
            "where": [
                231
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
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                619
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                619
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
                220,
                {
                    "distinct_on": [
                        244,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        242,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "makes_aggregate": [
                221,
                {
                    "distinct_on": [
                        244,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        242,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        231
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
                311,
                {
                    "distinct_on": [
                        335,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        333,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "orders_aggregate": [
                312,
                {
                    "distinct_on": [
                        335,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        333,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "proposal": [
                518
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                619
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                619
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                621,
                {
                    "distinct_on": [
                        643,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        641,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "takes_aggregate": [
                622,
                {
                    "distinct_on": [
                        643,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        641,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "token": [
                707
            ],
            "tokenAcctByBidsTokenAcct": [
                665
            ],
            "tokenByQuoteMintAcct": [
                707
            ],
            "token_acct": [
                665
            ],
            "twaps": [
                846,
                {
                    "distinct_on": [
                        867,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        865,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        855
                    ]
                }
            ],
            "twaps_aggregate": [
                847,
                {
                    "distinct_on": [
                        867,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        865,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        855
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate": {
            "aggregate": [
                270
            ],
            "nodes": [
                266
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp": {
            "count": [
                269
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp_count": {
            "arguments": [
                288
            ],
            "distinct": [
                0
            ],
            "filter": [
                275
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
                273
            ],
            "count": [
                3,
                {
                    "columns": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                279
            ],
            "min": [
                281
            ],
            "stddev": [
                290
            ],
            "stddev_pop": [
                292
            ],
            "stddev_samp": [
                294
            ],
            "sum": [
                298
            ],
            "var_pop": [
                302
            ],
            "var_samp": [
                304
            ],
            "variance": [
                306
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_order_by": {
            "avg": [
                274
            ],
            "count": [
                310
            ],
            "max": [
                280
            ],
            "min": [
                282
            ],
            "stddev": [
                291
            ],
            "stddev_pop": [
                293
            ],
            "stddev_samp": [
                295
            ],
            "sum": [
                299
            ],
            "var_pop": [
                303
            ],
            "var_samp": [
                305
            ],
            "variance": [
                307
            ],
            "__typename": [
                5
            ]
        },
        "markets_arr_rel_insert_input": {
            "data": [
                278
            ],
            "on_conflict": [
                285
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
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "markets_bool_exp": {
            "_and": [
                275
            ],
            "_not": [
                275
            ],
            "_or": [
                275
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
                620
            ],
            "base_mint_acct": [
                6
            ],
            "base_taker_fee": [
                620
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
                231
            ],
            "makes_aggregate": [
                222
            ],
            "market_acct": [
                6
            ],
            "market_type": [
                6
            ],
            "orders": [
                322
            ],
            "orders_aggregate": [
                313
            ],
            "proposal": [
                537
            ],
            "proposal_acct": [
                6
            ],
            "quote_lot_size": [
                8
            ],
            "quote_maker_fee": [
                620
            ],
            "quote_mint_acct": [
                6
            ],
            "quote_taker_fee": [
                620
            ],
            "quote_tick_size": [
                8
            ],
            "takes": [
                630
            ],
            "takes_aggregate": [
                623
            ],
            "token": [
                711
            ],
            "tokenAcctByBidsTokenAcct": [
                674
            ],
            "tokenByQuoteMintAcct": [
                711
            ],
            "token_acct": [
                674
            ],
            "twaps": [
                855
            ],
            "twaps_aggregate": [
                848
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
                619
            ],
            "base_taker_fee": [
                619
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                619
            ],
            "quote_taker_fee": [
                619
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
                619
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                619
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
                228
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "orders": [
                319
            ],
            "proposal": [
                546
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                619
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                619
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                627
            ],
            "token": [
                718
            ],
            "tokenAcctByBidsTokenAcct": [
                683
            ],
            "tokenByQuoteMintAcct": [
                718
            ],
            "token_acct": [
                683
            ],
            "twaps": [
                852
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
                619
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                619
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
                619
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                619
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
                310
            ],
            "asks_token_acct": [
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_mint_acct": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "bids_token_acct": [
                310
            ],
            "create_tx_sig": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "market_acct": [
                310
            ],
            "market_type": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_mint_acct": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
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
                619
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                619
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
                619
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                619
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
                310
            ],
            "asks_token_acct": [
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_mint_acct": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "bids_token_acct": [
                310
            ],
            "create_tx_sig": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "market_acct": [
                310
            ],
            "market_type": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_mint_acct": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
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
                266
            ],
            "__typename": [
                5
            ]
        },
        "markets_obj_rel_insert_input": {
            "data": [
                278
            ],
            "on_conflict": [
                285
            ],
            "__typename": [
                5
            ]
        },
        "markets_on_conflict": {
            "constraint": [
                276
            ],
            "update_columns": [
                300
            ],
            "where": [
                275
            ],
            "__typename": [
                5
            ]
        },
        "markets_order_by": {
            "active_slot": [
                310
            ],
            "asks_token_acct": [
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_mint_acct": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "bids_token_acct": [
                310
            ],
            "candles_aggregate": [
                14
            ],
            "create_tx_sig": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "makes_aggregate": [
                227
            ],
            "market_acct": [
                310
            ],
            "market_type": [
                310
            ],
            "orders_aggregate": [
                318
            ],
            "proposal": [
                548
            ],
            "proposal_acct": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_mint_acct": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
            ],
            "takes_aggregate": [
                626
            ],
            "token": [
                720
            ],
            "tokenAcctByBidsTokenAcct": [
                685
            ],
            "tokenByQuoteMintAcct": [
                720
            ],
            "token_acct": [
                685
            ],
            "twaps_aggregate": [
                851
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
                619
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                619
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
                619
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                619
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
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
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
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
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
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "markets_stream_cursor_input": {
            "initial_value": [
                297
            ],
            "ordering": [
                92
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
                619
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                619
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
                619
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                619
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
                619
            ],
            "base_taker_fee": [
                619
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                619
            ],
            "quote_taker_fee": [
                619
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
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "markets_update_column": {},
        "markets_updates": {
            "_inc": [
                277
            ],
            "_set": [
                289
            ],
            "where": [
                275
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
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
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
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
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
                310
            ],
            "base_lot_size": [
                310
            ],
            "base_maker_fee": [
                310
            ],
            "base_taker_fee": [
                310
            ],
            "inactive_slot": [
                310
            ],
            "quote_lot_size": [
                310
            ],
            "quote_maker_fee": [
                310
            ],
            "quote_taker_fee": [
                310
            ],
            "quote_tick_size": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                308
            ],
            "_gt": [
                308
            ],
            "_gte": [
                308
            ],
            "_in": [
                308
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                308
            ],
            "_lte": [
                308
            ],
            "_neq": [
                308
            ],
            "_nin": [
                308
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
                663
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
                220
            ],
            "market": [
                266
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                663
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
                621
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                663
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate": {
            "aggregate": [
                317
            ],
            "nodes": [
                311
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp": {
            "bool_and": [
                314
            ],
            "bool_or": [
                315
            ],
            "count": [
                316
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_bool_and": {
            "arguments": [
                336
            ],
            "distinct": [
                0
            ],
            "filter": [
                322
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
                337
            ],
            "distinct": [
                0
            ],
            "filter": [
                322
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
                335
            ],
            "distinct": [
                0
            ],
            "filter": [
                322
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
                320
            ],
            "count": [
                3,
                {
                    "columns": [
                        335,
                        "[orders_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                326
            ],
            "min": [
                328
            ],
            "stddev": [
                339
            ],
            "stddev_pop": [
                341
            ],
            "stddev_samp": [
                343
            ],
            "sum": [
                347
            ],
            "var_pop": [
                351
            ],
            "var_samp": [
                353
            ],
            "variance": [
                355
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_order_by": {
            "avg": [
                321
            ],
            "count": [
                310
            ],
            "max": [
                327
            ],
            "min": [
                329
            ],
            "stddev": [
                340
            ],
            "stddev_pop": [
                342
            ],
            "stddev_samp": [
                344
            ],
            "sum": [
                348
            ],
            "var_pop": [
                352
            ],
            "var_samp": [
                354
            ],
            "variance": [
                356
            ],
            "__typename": [
                5
            ]
        },
        "orders_arr_rel_insert_input": {
            "data": [
                325
            ],
            "on_conflict": [
                332
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
                310
            ],
            "filled_base_amount": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "orders_bool_exp": {
            "_and": [
                322
            ],
            "_not": [
                322
            ],
            "_or": [
                322
            ],
            "actor_acct": [
                6
            ],
            "cancel_block": [
                8
            ],
            "cancel_time": [
                664
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
                231
            ],
            "market": [
                275
            ],
            "market_acct": [
                6
            ],
            "order_block": [
                8
            ],
            "order_time": [
                664
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
                630
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                664
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
                663
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
                240
            ],
            "market": [
                284
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                663
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
                639
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                663
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
                663
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
                663
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "orders_max_order_by": {
            "actor_acct": [
                310
            ],
            "cancel_block": [
                310
            ],
            "cancel_time": [
                310
            ],
            "cancel_tx_sig": [
                310
            ],
            "filled_base_amount": [
                310
            ],
            "market_acct": [
                310
            ],
            "order_block": [
                310
            ],
            "order_time": [
                310
            ],
            "order_tx_sig": [
                310
            ],
            "quote_price": [
                310
            ],
            "side": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "updated_at": [
                310
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
                663
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
                663
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "orders_min_order_by": {
            "actor_acct": [
                310
            ],
            "cancel_block": [
                310
            ],
            "cancel_time": [
                310
            ],
            "cancel_tx_sig": [
                310
            ],
            "filled_base_amount": [
                310
            ],
            "market_acct": [
                310
            ],
            "order_block": [
                310
            ],
            "order_time": [
                310
            ],
            "order_tx_sig": [
                310
            ],
            "quote_price": [
                310
            ],
            "side": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "updated_at": [
                310
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
                311
            ],
            "__typename": [
                5
            ]
        },
        "orders_obj_rel_insert_input": {
            "data": [
                325
            ],
            "on_conflict": [
                332
            ],
            "__typename": [
                5
            ]
        },
        "orders_on_conflict": {
            "constraint": [
                323
            ],
            "update_columns": [
                349
            ],
            "where": [
                322
            ],
            "__typename": [
                5
            ]
        },
        "orders_order_by": {
            "actor_acct": [
                310
            ],
            "cancel_block": [
                310
            ],
            "cancel_time": [
                310
            ],
            "cancel_tx_sig": [
                310
            ],
            "filled_base_amount": [
                310
            ],
            "is_active": [
                310
            ],
            "make": [
                242
            ],
            "market": [
                286
            ],
            "market_acct": [
                310
            ],
            "order_block": [
                310
            ],
            "order_time": [
                310
            ],
            "order_tx_sig": [
                310
            ],
            "quote_price": [
                310
            ],
            "side": [
                310
            ],
            "take": [
                641
            ],
            "unfilled_base_amount": [
                310
            ],
            "updated_at": [
                310
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
                663
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
                663
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
                663
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
                310
            ],
            "filled_base_amount": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                310
            ],
            "filled_base_amount": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                310
            ],
            "filled_base_amount": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "orders_stream_cursor_input": {
            "initial_value": [
                346
            ],
            "ordering": [
                92
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
                663
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
                663
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
                663
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
                310
            ],
            "filled_base_amount": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "orders_update_column": {},
        "orders_updates": {
            "_inc": [
                324
            ],
            "_set": [
                338
            ],
            "where": [
                322
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
                310
            ],
            "filled_base_amount": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                310
            ],
            "filled_base_amount": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                310
            ],
            "filled_base_amount": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "unfilled_base_amount": [
                310
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
                416
            ],
            "programByConditionalVaultAcct": [
                416
            ],
            "programByMigratorAcct": [
                416
            ],
            "programByPricingModelAcct": [
                416
            ],
            "system_version": [
                163
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate": {
            "aggregate": [
                371
            ],
            "nodes": [
                357
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp": {
            "avg": [
                360
            ],
            "corr": [
                361
            ],
            "count": [
                363
            ],
            "covar_samp": [
                364
            ],
            "max": [
                366
            ],
            "min": [
                367
            ],
            "stddev_samp": [
                368
            ],
            "sum": [
                369
            ],
            "var_samp": [
                370
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_avg": {
            "arguments": [
                389
            ],
            "distinct": [
                0
            ],
            "filter": [
                376
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr": {
            "arguments": [
                362
            ],
            "distinct": [
                0
            ],
            "filter": [
                376
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_corr_arguments": {
            "X": [
                390
            ],
            "Y": [
                390
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_count": {
            "arguments": [
                388
            ],
            "distinct": [
                0
            ],
            "filter": [
                376
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
                365
            ],
            "distinct": [
                0
            ],
            "filter": [
                376
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                391
            ],
            "Y": [
                391
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_max": {
            "arguments": [
                392
            ],
            "distinct": [
                0
            ],
            "filter": [
                376
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_min": {
            "arguments": [
                393
            ],
            "distinct": [
                0
            ],
            "filter": [
                376
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                394
            ],
            "distinct": [
                0
            ],
            "filter": [
                376
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_sum": {
            "arguments": [
                395
            ],
            "distinct": [
                0
            ],
            "filter": [
                376
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_var_samp": {
            "arguments": [
                396
            ],
            "distinct": [
                0
            ],
            "filter": [
                376
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_fields": {
            "avg": [
                374
            ],
            "count": [
                3,
                {
                    "columns": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                380
            ],
            "min": [
                382
            ],
            "stddev": [
                398
            ],
            "stddev_pop": [
                400
            ],
            "stddev_samp": [
                402
            ],
            "sum": [
                406
            ],
            "var_pop": [
                410
            ],
            "var_samp": [
                412
            ],
            "variance": [
                414
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_order_by": {
            "avg": [
                375
            ],
            "count": [
                310
            ],
            "max": [
                381
            ],
            "min": [
                383
            ],
            "stddev": [
                399
            ],
            "stddev_pop": [
                401
            ],
            "stddev_samp": [
                403
            ],
            "sum": [
                407
            ],
            "var_pop": [
                411
            ],
            "var_samp": [
                413
            ],
            "variance": [
                415
            ],
            "__typename": [
                5
            ]
        },
        "program_system_arr_rel_insert_input": {
            "data": [
                379
            ],
            "on_conflict": [
                385
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "program_system_bool_exp": {
            "_and": [
                376
            ],
            "_not": [
                376
            ],
            "_or": [
                376
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
                420
            ],
            "programByConditionalVaultAcct": [
                420
            ],
            "programByMigratorAcct": [
                420
            ],
            "programByPricingModelAcct": [
                420
            ],
            "system_version": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "program_system_constraint": {},
        "program_system_inc_input": {
            "system_version": [
                163
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
                427
            ],
            "programByConditionalVaultAcct": [
                427
            ],
            "programByMigratorAcct": [
                427
            ],
            "programByPricingModelAcct": [
                427
            ],
            "system_version": [
                163
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
                163
            ],
            "__typename": [
                5
            ]
        },
        "program_system_max_order_by": {
            "autocrat_acct": [
                310
            ],
            "conditional_vault_acct": [
                310
            ],
            "migrator_acct": [
                310
            ],
            "pricing_model_acct": [
                310
            ],
            "system_version": [
                310
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
                163
            ],
            "__typename": [
                5
            ]
        },
        "program_system_min_order_by": {
            "autocrat_acct": [
                310
            ],
            "conditional_vault_acct": [
                310
            ],
            "migrator_acct": [
                310
            ],
            "pricing_model_acct": [
                310
            ],
            "system_version": [
                310
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
                357
            ],
            "__typename": [
                5
            ]
        },
        "program_system_on_conflict": {
            "constraint": [
                377
            ],
            "update_columns": [
                408
            ],
            "where": [
                376
            ],
            "__typename": [
                5
            ]
        },
        "program_system_order_by": {
            "autocrat_acct": [
                310
            ],
            "conditional_vault_acct": [
                310
            ],
            "migrator_acct": [
                310
            ],
            "pricing_model_acct": [
                310
            ],
            "program": [
                429
            ],
            "programByConditionalVaultAcct": [
                429
            ],
            "programByMigratorAcct": [
                429
            ],
            "programByPricingModelAcct": [
                429
            ],
            "system_version": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "program_system_pk_columns_input": {
            "system_version": [
                163
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
                163
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stream_cursor_input": {
            "initial_value": [
                405
            ],
            "ordering": [
                92
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
                163
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_fields": {
            "system_version": [
                163
            ],
            "__typename": [
                5
            ]
        },
        "program_system_sum_order_by": {
            "system_version": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "program_system_update_column": {},
        "program_system_updates": {
            "_inc": [
                378
            ],
            "_set": [
                397
            ],
            "where": [
                376
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "programs": {
            "created_at": [
                663
            ],
            "daos": [
                121,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "daos_aggregate": [
                122,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "deployed_at": [
                663
            ],
            "programSystemsByConditionalVaultAcct": [
                357,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                358,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "programSystemsByMigratorAcct": [
                357,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "programSystemsByMigratorAcct_aggregate": [
                358,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "programSystemsByPricingModelAcct": [
                357,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                358,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
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
                357,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "program_systems_aggregate": [
                358,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "version": [
                163
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate": {
            "aggregate": [
                418
            ],
            "nodes": [
                416
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate_fields": {
            "avg": [
                419
            ],
            "count": [
                3,
                {
                    "columns": [
                        431,
                        "[programs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                424
            ],
            "min": [
                425
            ],
            "stddev": [
                433
            ],
            "stddev_pop": [
                434
            ],
            "stddev_samp": [
                435
            ],
            "sum": [
                438
            ],
            "var_pop": [
                441
            ],
            "var_samp": [
                442
            ],
            "variance": [
                443
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
                420
            ],
            "_not": [
                420
            ],
            "_or": [
                420
            ],
            "created_at": [
                664
            ],
            "daos": [
                130
            ],
            "daos_aggregate": [
                123
            ],
            "deployed_at": [
                664
            ],
            "programSystemsByConditionalVaultAcct": [
                376
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                359
            ],
            "programSystemsByMigratorAcct": [
                376
            ],
            "programSystemsByMigratorAcct_aggregate": [
                359
            ],
            "programSystemsByPricingModelAcct": [
                376
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                359
            ],
            "program_acct": [
                6
            ],
            "program_name": [
                6
            ],
            "program_systems": [
                376
            ],
            "program_systems_aggregate": [
                359
            ],
            "version": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "programs_constraint": {},
        "programs_inc_input": {
            "version": [
                163
            ],
            "__typename": [
                5
            ]
        },
        "programs_insert_input": {
            "created_at": [
                663
            ],
            "daos": [
                127
            ],
            "deployed_at": [
                663
            ],
            "programSystemsByConditionalVaultAcct": [
                373
            ],
            "programSystemsByMigratorAcct": [
                373
            ],
            "programSystemsByPricingModelAcct": [
                373
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                373
            ],
            "version": [
                163
            ],
            "__typename": [
                5
            ]
        },
        "programs_max_fields": {
            "created_at": [
                663
            ],
            "deployed_at": [
                663
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                163
            ],
            "__typename": [
                5
            ]
        },
        "programs_min_fields": {
            "created_at": [
                663
            ],
            "deployed_at": [
                663
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                163
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
                416
            ],
            "__typename": [
                5
            ]
        },
        "programs_obj_rel_insert_input": {
            "data": [
                423
            ],
            "on_conflict": [
                428
            ],
            "__typename": [
                5
            ]
        },
        "programs_on_conflict": {
            "constraint": [
                421
            ],
            "update_columns": [
                439
            ],
            "where": [
                420
            ],
            "__typename": [
                5
            ]
        },
        "programs_order_by": {
            "created_at": [
                310
            ],
            "daos_aggregate": [
                126
            ],
            "deployed_at": [
                310
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                372
            ],
            "programSystemsByMigratorAcct_aggregate": [
                372
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                372
            ],
            "program_acct": [
                310
            ],
            "program_name": [
                310
            ],
            "program_systems_aggregate": [
                372
            ],
            "version": [
                310
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
                663
            ],
            "deployed_at": [
                663
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                163
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
                437
            ],
            "ordering": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "programs_stream_cursor_value_input": {
            "created_at": [
                663
            ],
            "deployed_at": [
                663
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                163
            ],
            "__typename": [
                5
            ]
        },
        "programs_sum_fields": {
            "version": [
                163
            ],
            "__typename": [
                5
            ]
        },
        "programs_update_column": {},
        "programs_updates": {
            "_inc": [
                422
            ],
            "_set": [
                432
            ],
            "where": [
                420
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
                217,
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
                518
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
                448
            ],
            "nodes": [
                444
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp": {
            "count": [
                447
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp_count": {
            "arguments": [
                470
            ],
            "distinct": [
                0
            ],
            "filter": [
                454
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
                452
            ],
            "count": [
                3,
                {
                    "columns": [
                        470,
                        "[proposal_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                461
            ],
            "min": [
                463
            ],
            "stddev": [
                472
            ],
            "stddev_pop": [
                474
            ],
            "stddev_samp": [
                476
            ],
            "sum": [
                480
            ],
            "var_pop": [
                484
            ],
            "var_samp": [
                486
            ],
            "variance": [
                488
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_order_by": {
            "avg": [
                453
            ],
            "count": [
                310
            ],
            "max": [
                462
            ],
            "min": [
                464
            ],
            "stddev": [
                473
            ],
            "stddev_pop": [
                475
            ],
            "stddev_samp": [
                477
            ],
            "sum": [
                481
            ],
            "var_pop": [
                485
            ],
            "var_samp": [
                487
            ],
            "variance": [
                489
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_append_input": {
            "categories": [
                217
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_arr_rel_insert_input": {
            "data": [
                460
            ],
            "on_conflict": [
                466
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_bool_exp": {
            "_and": [
                454
            ],
            "_not": [
                454
            ],
            "_or": [
                454
            ],
            "categories": [
                219
            ],
            "content": [
                6
            ],
            "description": [
                6
            ],
            "proposal": [
                537
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
                217
            ],
            "content": [
                5
            ],
            "description": [
                5
            ],
            "proposal": [
                546
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
                310
            ],
            "description": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "proposal_id": [
                310
            ],
            "slug": [
                310
            ],
            "title": [
                310
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
                310
            ],
            "description": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "proposal_id": [
                310
            ],
            "slug": [
                310
            ],
            "title": [
                310
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
                444
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_on_conflict": {
            "constraint": [
                455
            ],
            "update_columns": [
                482
            ],
            "where": [
                454
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_order_by": {
            "categories": [
                310
            ],
            "content": [
                310
            ],
            "description": [
                310
            ],
            "proposal": [
                548
            ],
            "proposal_acct": [
                310
            ],
            "proposal_id": [
                310
            ],
            "slug": [
                310
            ],
            "title": [
                310
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
                217
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_select_column": {},
        "proposal_details_set_input": {
            "categories": [
                217
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_input": {
            "initial_value": [
                479
            ],
            "ordering": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_value_input": {
            "categories": [
                217
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_update_column": {},
        "proposal_details_updates": {
            "_append": [
                450
            ],
            "_delete_at_path": [
                456
            ],
            "_delete_elem": [
                457
            ],
            "_delete_key": [
                458
            ],
            "_inc": [
                459
            ],
            "_prepend": [
                469
            ],
            "_set": [
                471
            ],
            "where": [
                454
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter": {
            "autocrat_program_acct": [
                5
            ],
            "autocrat_version": [
                163
            ],
            "categories": [
                217,
                {
                    "path": [
                        5
                    ]
                }
            ],
            "content": [
                5
            ],
            "dao_account": [
                5
            ],
            "dao_name": [
                5
            ],
            "external_url": [
                5
            ],
            "number": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "proposer_acct": [
                5
            ],
            "slot_enqueued": [
                7
            ],
            "slug": [
                5
            ],
            "status": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_aggregate": {
            "aggregate": [
                492
            ],
            "nodes": [
                490
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_aggregate_fields": {
            "avg": [
                494
            ],
            "count": [
                3,
                {
                    "columns": [
                        506,
                        "[proposal_filter_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                501
            ],
            "min": [
                502
            ],
            "stddev": [
                508
            ],
            "stddev_pop": [
                509
            ],
            "stddev_samp": [
                510
            ],
            "sum": [
                513
            ],
            "var_pop": [
                515
            ],
            "var_samp": [
                516
            ],
            "variance": [
                517
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_append_input": {
            "categories": [
                217
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_avg_fields": {
            "autocrat_version": [
                2
            ],
            "number": [
                2
            ],
            "slot_enqueued": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_bool_exp": {
            "_and": [
                495
            ],
            "_not": [
                495
            ],
            "_or": [
                495
            ],
            "autocrat_program_acct": [
                6
            ],
            "autocrat_version": [
                164
            ],
            "categories": [
                219
            ],
            "content": [
                6
            ],
            "dao_account": [
                6
            ],
            "dao_name": [
                6
            ],
            "external_url": [
                6
            ],
            "number": [
                8
            ],
            "proposal_acct": [
                6
            ],
            "proposer_acct": [
                6
            ],
            "slot_enqueued": [
                8
            ],
            "slug": [
                6
            ],
            "status": [
                6
            ],
            "title": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_delete_at_path_input": {
            "categories": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_delete_elem_input": {
            "categories": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_delete_key_input": {
            "categories": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_inc_input": {
            "autocrat_version": [
                163
            ],
            "number": [
                7
            ],
            "slot_enqueued": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_insert_input": {
            "autocrat_program_acct": [
                5
            ],
            "autocrat_version": [
                163
            ],
            "categories": [
                217
            ],
            "content": [
                5
            ],
            "dao_account": [
                5
            ],
            "dao_name": [
                5
            ],
            "external_url": [
                5
            ],
            "number": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "proposer_acct": [
                5
            ],
            "slot_enqueued": [
                7
            ],
            "slug": [
                5
            ],
            "status": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_max_fields": {
            "autocrat_program_acct": [
                5
            ],
            "autocrat_version": [
                163
            ],
            "content": [
                5
            ],
            "dao_account": [
                5
            ],
            "dao_name": [
                5
            ],
            "external_url": [
                5
            ],
            "number": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "proposer_acct": [
                5
            ],
            "slot_enqueued": [
                7
            ],
            "slug": [
                5
            ],
            "status": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_min_fields": {
            "autocrat_program_acct": [
                5
            ],
            "autocrat_version": [
                163
            ],
            "content": [
                5
            ],
            "dao_account": [
                5
            ],
            "dao_name": [
                5
            ],
            "external_url": [
                5
            ],
            "number": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "proposer_acct": [
                5
            ],
            "slot_enqueued": [
                7
            ],
            "slug": [
                5
            ],
            "status": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                490
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_order_by": {
            "autocrat_program_acct": [
                310
            ],
            "autocrat_version": [
                310
            ],
            "categories": [
                310
            ],
            "content": [
                310
            ],
            "dao_account": [
                310
            ],
            "dao_name": [
                310
            ],
            "external_url": [
                310
            ],
            "number": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "proposer_acct": [
                310
            ],
            "slot_enqueued": [
                310
            ],
            "slug": [
                310
            ],
            "status": [
                310
            ],
            "title": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_prepend_input": {
            "categories": [
                217
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_select_column": {},
        "proposal_filter_set_input": {
            "autocrat_program_acct": [
                5
            ],
            "autocrat_version": [
                163
            ],
            "categories": [
                217
            ],
            "content": [
                5
            ],
            "dao_account": [
                5
            ],
            "dao_name": [
                5
            ],
            "external_url": [
                5
            ],
            "number": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "proposer_acct": [
                5
            ],
            "slot_enqueued": [
                7
            ],
            "slug": [
                5
            ],
            "status": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_stddev_fields": {
            "autocrat_version": [
                2
            ],
            "number": [
                2
            ],
            "slot_enqueued": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_stddev_pop_fields": {
            "autocrat_version": [
                2
            ],
            "number": [
                2
            ],
            "slot_enqueued": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_stddev_samp_fields": {
            "autocrat_version": [
                2
            ],
            "number": [
                2
            ],
            "slot_enqueued": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_stream_cursor_input": {
            "initial_value": [
                512
            ],
            "ordering": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_stream_cursor_value_input": {
            "autocrat_program_acct": [
                5
            ],
            "autocrat_version": [
                163
            ],
            "categories": [
                217
            ],
            "content": [
                5
            ],
            "dao_account": [
                5
            ],
            "dao_name": [
                5
            ],
            "external_url": [
                5
            ],
            "number": [
                7
            ],
            "proposal_acct": [
                5
            ],
            "proposer_acct": [
                5
            ],
            "slot_enqueued": [
                7
            ],
            "slug": [
                5
            ],
            "status": [
                5
            ],
            "title": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_sum_fields": {
            "autocrat_version": [
                163
            ],
            "number": [
                7
            ],
            "slot_enqueued": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_updates": {
            "_append": [
                493
            ],
            "_delete_at_path": [
                496
            ],
            "_delete_elem": [
                497
            ],
            "_delete_key": [
                498
            ],
            "_inc": [
                499
            ],
            "_prepend": [
                505
            ],
            "_set": [
                507
            ],
            "where": [
                495
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_var_pop_fields": {
            "autocrat_version": [
                2
            ],
            "number": [
                2
            ],
            "slot_enqueued": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_var_samp_fields": {
            "autocrat_version": [
                2
            ],
            "number": [
                2
            ],
            "slot_enqueued": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposal_filter_variance_fields": {
            "autocrat_version": [
                2
            ],
            "number": [
                2
            ],
            "slot_enqueued": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "proposals": {
            "autocrat_version": [
                163
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
            "dao": [
                121
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
                266,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "markets_aggregate": [
                267,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
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
                444,
                {
                    "distinct_on": [
                        470,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        467,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "proposal_details_aggregate": [
                445,
                {
                    "distinct_on": [
                        470,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        467,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        454
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
                578,
                {
                    "distinct_on": [
                        599,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "reactions_aggregate": [
                579,
                {
                    "distinct_on": [
                        599,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "status": [
                5
            ],
            "twaps": [
                846,
                {
                    "distinct_on": [
                        867,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        865,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        855
                    ]
                }
            ],
            "twaps_aggregate": [
                847,
                {
                    "distinct_on": [
                        867,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        865,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        855
                    ]
                }
            ],
            "updated_at": [
                663
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate": {
            "aggregate": [
                532
            ],
            "nodes": [
                518
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp": {
            "avg": [
                521
            ],
            "corr": [
                522
            ],
            "count": [
                524
            ],
            "covar_samp": [
                525
            ],
            "max": [
                527
            ],
            "min": [
                528
            ],
            "stddev_samp": [
                529
            ],
            "sum": [
                530
            ],
            "var_samp": [
                531
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_avg": {
            "arguments": [
                551
            ],
            "distinct": [
                0
            ],
            "filter": [
                537
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr": {
            "arguments": [
                523
            ],
            "distinct": [
                0
            ],
            "filter": [
                537
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_corr_arguments": {
            "X": [
                552
            ],
            "Y": [
                552
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_count": {
            "arguments": [
                550
            ],
            "distinct": [
                0
            ],
            "filter": [
                537
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
                526
            ],
            "distinct": [
                0
            ],
            "filter": [
                537
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_covar_samp_arguments": {
            "X": [
                553
            ],
            "Y": [
                553
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_max": {
            "arguments": [
                554
            ],
            "distinct": [
                0
            ],
            "filter": [
                537
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_min": {
            "arguments": [
                555
            ],
            "distinct": [
                0
            ],
            "filter": [
                537
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_stddev_samp": {
            "arguments": [
                556
            ],
            "distinct": [
                0
            ],
            "filter": [
                537
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_sum": {
            "arguments": [
                557
            ],
            "distinct": [
                0
            ],
            "filter": [
                537
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_var_samp": {
            "arguments": [
                558
            ],
            "distinct": [
                0
            ],
            "filter": [
                537
            ],
            "predicate": [
                164
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_fields": {
            "avg": [
                535
            ],
            "count": [
                3,
                {
                    "columns": [
                        550,
                        "[proposals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                541
            ],
            "min": [
                543
            ],
            "stddev": [
                560
            ],
            "stddev_pop": [
                562
            ],
            "stddev_samp": [
                564
            ],
            "sum": [
                568
            ],
            "var_pop": [
                572
            ],
            "var_samp": [
                574
            ],
            "variance": [
                576
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_order_by": {
            "avg": [
                536
            ],
            "count": [
                310
            ],
            "max": [
                542
            ],
            "min": [
                544
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
        "proposals_arr_rel_insert_input": {
            "data": [
                540
            ],
            "on_conflict": [
                547
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
                310
            ],
            "initial_slot": [
                310
            ],
            "proposal_num": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "proposals_bool_exp": {
            "_and": [
                537
            ],
            "_not": [
                537
            ],
            "_or": [
                537
            ],
            "autocrat_version": [
                164
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
            "dao": [
                130
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
                275
            ],
            "markets_aggregate": [
                268
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
                454
            ],
            "proposal_details_aggregate": [
                446
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
                587
            ],
            "reactions_aggregate": [
                580
            ],
            "status": [
                6
            ],
            "twaps": [
                855
            ],
            "twaps_aggregate": [
                848
            ],
            "updated_at": [
                664
            ],
            "__typename": [
                5
            ]
        },
        "proposals_constraint": {},
        "proposals_inc_input": {
            "autocrat_version": [
                163
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
                163
            ],
            "base_vault": [
                5
            ],
            "comments": [
                56
            ],
            "dao": [
                139
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
                272
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
                451
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
                584
            ],
            "status": [
                5
            ],
            "twaps": [
                852
            ],
            "updated_at": [
                663
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_fields": {
            "autocrat_version": [
                163
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_order_by": {
            "autocrat_version": [
                310
            ],
            "base_vault": [
                310
            ],
            "dao_acct": [
                310
            ],
            "description_url": [
                310
            ],
            "fail_market_acct": [
                310
            ],
            "initial_slot": [
                310
            ],
            "pass_market_acct": [
                310
            ],
            "pricing_model_fail_acct": [
                310
            ],
            "pricing_model_pass_acct": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "proposal_num": [
                310
            ],
            "proposer_acct": [
                310
            ],
            "quote_vault": [
                310
            ],
            "status": [
                310
            ],
            "updated_at": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_fields": {
            "autocrat_version": [
                163
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_order_by": {
            "autocrat_version": [
                310
            ],
            "base_vault": [
                310
            ],
            "dao_acct": [
                310
            ],
            "description_url": [
                310
            ],
            "fail_market_acct": [
                310
            ],
            "initial_slot": [
                310
            ],
            "pass_market_acct": [
                310
            ],
            "pricing_model_fail_acct": [
                310
            ],
            "pricing_model_pass_acct": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "proposal_num": [
                310
            ],
            "proposer_acct": [
                310
            ],
            "quote_vault": [
                310
            ],
            "status": [
                310
            ],
            "updated_at": [
                310
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
                518
            ],
            "__typename": [
                5
            ]
        },
        "proposals_obj_rel_insert_input": {
            "data": [
                540
            ],
            "on_conflict": [
                547
            ],
            "__typename": [
                5
            ]
        },
        "proposals_on_conflict": {
            "constraint": [
                538
            ],
            "update_columns": [
                570
            ],
            "where": [
                537
            ],
            "__typename": [
                5
            ]
        },
        "proposals_order_by": {
            "autocrat_version": [
                310
            ],
            "base_vault": [
                310
            ],
            "comments_aggregate": [
                55
            ],
            "dao": [
                141
            ],
            "dao_acct": [
                310
            ],
            "description_url": [
                310
            ],
            "fail_market_acct": [
                310
            ],
            "initial_slot": [
                310
            ],
            "markets_aggregate": [
                271
            ],
            "pass_market_acct": [
                310
            ],
            "pricing_model_fail_acct": [
                310
            ],
            "pricing_model_pass_acct": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "proposal_details_aggregate": [
                449
            ],
            "proposal_num": [
                310
            ],
            "proposer_acct": [
                310
            ],
            "quote_vault": [
                310
            ],
            "reactions_aggregate": [
                583
            ],
            "status": [
                310
            ],
            "twaps_aggregate": [
                851
            ],
            "updated_at": [
                310
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
                163
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
                663
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
                310
            ],
            "initial_slot": [
                310
            ],
            "proposal_num": [
                310
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
                310
            ],
            "initial_slot": [
                310
            ],
            "proposal_num": [
                310
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
                310
            ],
            "initial_slot": [
                310
            ],
            "proposal_num": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_input": {
            "initial_value": [
                567
            ],
            "ordering": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_value_input": {
            "autocrat_version": [
                163
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_fields": {
            "autocrat_version": [
                163
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
                310
            ],
            "initial_slot": [
                310
            ],
            "proposal_num": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "proposals_update_column": {},
        "proposals_updates": {
            "_inc": [
                539
            ],
            "_set": [
                559
            ],
            "where": [
                537
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
                310
            ],
            "initial_slot": [
                310
            ],
            "proposal_num": [
                310
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
                310
            ],
            "initial_slot": [
                310
            ],
            "proposal_num": [
                310
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
                310
            ],
            "initial_slot": [
                310
            ],
            "proposal_num": [
                310
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
                518
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate": {
            "aggregate": [
                582
            ],
            "nodes": [
                578
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp": {
            "count": [
                581
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp_count": {
            "arguments": [
                599
            ],
            "distinct": [
                0
            ],
            "filter": [
                587
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
                585
            ],
            "count": [
                3,
                {
                    "columns": [
                        599,
                        "[reactions_select_column!]"
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
                601
            ],
            "stddev_pop": [
                603
            ],
            "stddev_samp": [
                605
            ],
            "sum": [
                609
            ],
            "var_pop": [
                613
            ],
            "var_samp": [
                615
            ],
            "variance": [
                617
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_order_by": {
            "avg": [
                586
            ],
            "count": [
                310
            ],
            "max": [
                592
            ],
            "min": [
                594
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
        "reactions_arr_rel_insert_input": {
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "reactions_bool_exp": {
            "_and": [
                587
            ],
            "_not": [
                587
            ],
            "_or": [
                587
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "proposal": [
                537
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
                664
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
                546
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
                663
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "reactions_max_order_by": {
            "comment_id": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "reaction": [
                310
            ],
            "reactor_acct": [
                310
            ],
            "updated_at": [
                310
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "reactions_min_order_by": {
            "comment_id": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "reaction": [
                310
            ],
            "reactor_acct": [
                310
            ],
            "updated_at": [
                310
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
                578
            ],
            "__typename": [
                5
            ]
        },
        "reactions_on_conflict": {
            "constraint": [
                588
            ],
            "update_columns": [
                611
            ],
            "where": [
                587
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
                310
            ],
            "proposal": [
                548
            ],
            "proposal_acct": [
                310
            ],
            "reaction": [
                310
            ],
            "reactor_acct": [
                310
            ],
            "updated_at": [
                310
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
                663
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stream_cursor_input": {
            "initial_value": [
                608
            ],
            "ordering": [
                92
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
                663
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "reactions_update_column": {},
        "reactions_updates": {
            "_inc": [
                589
            ],
            "_set": [
                600
            ],
            "where": [
                587
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "smallint": {},
        "smallint_comparison_exp": {
            "_eq": [
                619
            ],
            "_gt": [
                619
            ],
            "_gte": [
                619
            ],
            "_in": [
                619
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                619
            ],
            "_lte": [
                619
            ],
            "_neq": [
                619
            ],
            "_nin": [
                619
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
                220
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
                266
            ],
            "market_acct": [
                5
            ],
            "order": [
                311
            ],
            "order_block": [
                7
            ],
            "order_time": [
                663
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
                625
            ],
            "nodes": [
                621
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp": {
            "count": [
                624
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp_count": {
            "arguments": [
                643
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
        "takes_aggregate_fields": {
            "avg": [
                628
            ],
            "count": [
                3,
                {
                    "columns": [
                        643,
                        "[takes_select_column!]"
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
        "takes_aggregate_order_by": {
            "avg": [
                629
            ],
            "count": [
                310
            ],
            "max": [
                635
            ],
            "min": [
                637
            ],
            "stddev": [
                646
            ],
            "stddev_pop": [
                648
            ],
            "stddev_samp": [
                650
            ],
            "sum": [
                654
            ],
            "var_pop": [
                658
            ],
            "var_samp": [
                660
            ],
            "variance": [
                662
            ],
            "__typename": [
                5
            ]
        },
        "takes_arr_rel_insert_input": {
            "data": [
                633
            ],
            "on_conflict": [
                640
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "takes_bool_exp": {
            "_and": [
                630
            ],
            "_not": [
                630
            ],
            "_or": [
                630
            ],
            "base_amount": [
                8
            ],
            "make": [
                231
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
                275
            ],
            "market_acct": [
                6
            ],
            "order": [
                322
            ],
            "order_block": [
                8
            ],
            "order_time": [
                664
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
                240
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
                284
            ],
            "market_acct": [
                5
            ],
            "order": [
                331
            ],
            "order_block": [
                7
            ],
            "order_time": [
                663
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
                663
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_order_tx_sig": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "market_acct": [
                310
            ],
            "order_block": [
                310
            ],
            "order_time": [
                310
            ],
            "order_tx_sig": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
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
                663
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_order_tx_sig": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "market_acct": [
                310
            ],
            "order_block": [
                310
            ],
            "order_time": [
                310
            ],
            "order_tx_sig": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
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
                621
            ],
            "__typename": [
                5
            ]
        },
        "takes_obj_rel_insert_input": {
            "data": [
                633
            ],
            "on_conflict": [
                640
            ],
            "__typename": [
                5
            ]
        },
        "takes_on_conflict": {
            "constraint": [
                631
            ],
            "update_columns": [
                655
            ],
            "where": [
                630
            ],
            "__typename": [
                5
            ]
        },
        "takes_order_by": {
            "base_amount": [
                310
            ],
            "make": [
                242
            ],
            "maker_base_fee": [
                310
            ],
            "maker_order_tx_sig": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "market": [
                286
            ],
            "market_acct": [
                310
            ],
            "order": [
                333
            ],
            "order_block": [
                310
            ],
            "order_time": [
                310
            ],
            "order_tx_sig": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
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
                663
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "takes_stream_cursor_input": {
            "initial_value": [
                652
            ],
            "ordering": [
                92
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
                663
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "takes_update_column": {},
        "takes_updates": {
            "_inc": [
                632
            ],
            "_set": [
                644
            ],
            "where": [
                630
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
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
                310
            ],
            "maker_base_fee": [
                310
            ],
            "maker_quote_fee": [
                310
            ],
            "order_block": [
                310
            ],
            "quote_price": [
                310
            ],
            "taker_base_fee": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                663
            ],
            "_gt": [
                663
            ],
            "_gte": [
                663
            ],
            "_in": [
                663
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                663
            ],
            "_lte": [
                663
            ],
            "_neq": [
                663
            ],
            "_nin": [
                663
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
                266,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "marketsByBidsTokenAcct": [
                266,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "marketsByBidsTokenAcct_aggregate": [
                267,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "markets_aggregate": [
                267,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
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
                707
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                663
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate": {
            "aggregate": [
                669
            ],
            "nodes": [
                665
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp": {
            "count": [
                668
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp_count": {
            "arguments": [
                687
            ],
            "distinct": [
                0
            ],
            "filter": [
                674
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
                672
            ],
            "count": [
                3,
                {
                    "columns": [
                        687,
                        "[token_accts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
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
        "token_accts_aggregate_order_by": {
            "avg": [
                673
            ],
            "count": [
                310
            ],
            "max": [
                679
            ],
            "min": [
                681
            ],
            "stddev": [
                690
            ],
            "stddev_pop": [
                692
            ],
            "stddev_samp": [
                694
            ],
            "sum": [
                698
            ],
            "var_pop": [
                702
            ],
            "var_samp": [
                704
            ],
            "variance": [
                706
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_arr_rel_insert_input": {
            "data": [
                677
            ],
            "on_conflict": [
                684
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_bool_exp": {
            "_and": [
                674
            ],
            "_not": [
                674
            ],
            "_or": [
                674
            ],
            "amount": [
                8
            ],
            "markets": [
                275
            ],
            "marketsByBidsTokenAcct": [
                275
            ],
            "marketsByBidsTokenAcct_aggregate": [
                268
            ],
            "markets_aggregate": [
                268
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "token": [
                711
            ],
            "token_acct": [
                6
            ],
            "updated_at": [
                664
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
                272
            ],
            "marketsByBidsTokenAcct": [
                272
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "token": [
                718
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                663
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_max_order_by": {
            "amount": [
                310
            ],
            "mint_acct": [
                310
            ],
            "owner_acct": [
                310
            ],
            "token_acct": [
                310
            ],
            "updated_at": [
                310
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_min_order_by": {
            "amount": [
                310
            ],
            "mint_acct": [
                310
            ],
            "owner_acct": [
                310
            ],
            "token_acct": [
                310
            ],
            "updated_at": [
                310
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
                665
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_obj_rel_insert_input": {
            "data": [
                677
            ],
            "on_conflict": [
                684
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_on_conflict": {
            "constraint": [
                675
            ],
            "update_columns": [
                699
            ],
            "where": [
                674
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_order_by": {
            "amount": [
                310
            ],
            "marketsByBidsTokenAcct_aggregate": [
                271
            ],
            "markets_aggregate": [
                271
            ],
            "mint_acct": [
                310
            ],
            "owner_acct": [
                310
            ],
            "token": [
                720
            ],
            "token_acct": [
                310
            ],
            "updated_at": [
                310
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
                663
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stream_cursor_input": {
            "initial_value": [
                696
            ],
            "ordering": [
                92
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
                663
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_update_column": {},
        "token_accts_updates": {
            "_inc": [
                676
            ],
            "_set": [
                688
            ],
            "where": [
                674
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "tokens": {
            "daosByBaseAcct": [
                121,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "daosByBaseAcct_aggregate": [
                122,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "daosByQuoteAcct": [
                121,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "daosByQuoteAcct_aggregate": [
                122,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "decimals": [
                619
            ],
            "markets": [
                266,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "marketsByQuoteMintAcct": [
                266,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "marketsByQuoteMintAcct_aggregate": [
                267,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "markets_aggregate": [
                267,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
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
                665,
                {
                    "distinct_on": [
                        687,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        685,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        674
                    ]
                }
            ],
            "token_accts_aggregate": [
                666,
                {
                    "distinct_on": [
                        687,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        685,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        674
                    ]
                }
            ],
            "updated_at": [
                663
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate": {
            "aggregate": [
                709
            ],
            "nodes": [
                707
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate_fields": {
            "avg": [
                710
            ],
            "count": [
                3,
                {
                    "columns": [
                        722,
                        "[tokens_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                715
            ],
            "min": [
                716
            ],
            "stddev": [
                724
            ],
            "stddev_pop": [
                725
            ],
            "stddev_samp": [
                726
            ],
            "sum": [
                729
            ],
            "var_pop": [
                732
            ],
            "var_samp": [
                733
            ],
            "variance": [
                734
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
                711
            ],
            "_not": [
                711
            ],
            "_or": [
                711
            ],
            "daosByBaseAcct": [
                130
            ],
            "daosByBaseAcct_aggregate": [
                123
            ],
            "daosByQuoteAcct": [
                130
            ],
            "daosByQuoteAcct_aggregate": [
                123
            ],
            "decimals": [
                620
            ],
            "markets": [
                275
            ],
            "marketsByQuoteMintAcct": [
                275
            ],
            "marketsByQuoteMintAcct_aggregate": [
                268
            ],
            "markets_aggregate": [
                268
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
                674
            ],
            "token_accts_aggregate": [
                667
            ],
            "updated_at": [
                664
            ],
            "__typename": [
                5
            ]
        },
        "tokens_constraint": {},
        "tokens_inc_input": {
            "decimals": [
                619
            ],
            "supply": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "tokens_insert_input": {
            "daosByBaseAcct": [
                127
            ],
            "daosByQuoteAcct": [
                127
            ],
            "decimals": [
                619
            ],
            "markets": [
                272
            ],
            "marketsByQuoteMintAcct": [
                272
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
                671
            ],
            "updated_at": [
                663
            ],
            "__typename": [
                5
            ]
        },
        "tokens_max_fields": {
            "decimals": [
                619
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "tokens_min_fields": {
            "decimals": [
                619
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
                663
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
                707
            ],
            "__typename": [
                5
            ]
        },
        "tokens_obj_rel_insert_input": {
            "data": [
                714
            ],
            "on_conflict": [
                719
            ],
            "__typename": [
                5
            ]
        },
        "tokens_on_conflict": {
            "constraint": [
                712
            ],
            "update_columns": [
                730
            ],
            "where": [
                711
            ],
            "__typename": [
                5
            ]
        },
        "tokens_order_by": {
            "daosByBaseAcct_aggregate": [
                126
            ],
            "daosByQuoteAcct_aggregate": [
                126
            ],
            "decimals": [
                310
            ],
            "marketsByQuoteMintAcct_aggregate": [
                271
            ],
            "markets_aggregate": [
                271
            ],
            "mint_acct": [
                310
            ],
            "name": [
                310
            ],
            "supply": [
                310
            ],
            "symbol": [
                310
            ],
            "token_accts_aggregate": [
                670
            ],
            "updated_at": [
                310
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
                619
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
                663
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
                728
            ],
            "ordering": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stream_cursor_value_input": {
            "decimals": [
                619
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
                663
            ],
            "__typename": [
                5
            ]
        },
        "tokens_sum_fields": {
            "decimals": [
                619
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
                713
            ],
            "_set": [
                723
            ],
            "where": [
                711
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
                818
            ],
            "transaction_watcher": [
                776
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
                739
            ],
            "nodes": [
                735
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp": {
            "count": [
                738
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp_count": {
            "arguments": [
                756
            ],
            "distinct": [
                0
            ],
            "filter": [
                744
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
                742
            ],
            "count": [
                3,
                {
                    "columns": [
                        756,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                748
            ],
            "min": [
                750
            ],
            "stddev": [
                758
            ],
            "stddev_pop": [
                760
            ],
            "stddev_samp": [
                762
            ],
            "sum": [
                766
            ],
            "var_pop": [
                770
            ],
            "var_samp": [
                772
            ],
            "variance": [
                774
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_order_by": {
            "avg": [
                743
            ],
            "count": [
                310
            ],
            "max": [
                749
            ],
            "min": [
                751
            ],
            "stddev": [
                759
            ],
            "stddev_pop": [
                761
            ],
            "stddev_samp": [
                763
            ],
            "sum": [
                767
            ],
            "var_pop": [
                771
            ],
            "var_samp": [
                773
            ],
            "variance": [
                775
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_arr_rel_insert_input": {
            "data": [
                747
            ],
            "on_conflict": [
                753
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_bool_exp": {
            "_and": [
                744
            ],
            "_not": [
                744
            ],
            "_or": [
                744
            ],
            "slot": [
                8
            ],
            "transaction": [
                822
            ],
            "transaction_watcher": [
                785
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
                829
            ],
            "transaction_watcher": [
                794
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
                310
            ],
            "tx_sig": [
                310
            ],
            "watcher_acct": [
                310
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
                310
            ],
            "tx_sig": [
                310
            ],
            "watcher_acct": [
                310
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
                735
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_on_conflict": {
            "constraint": [
                745
            ],
            "update_columns": [
                768
            ],
            "where": [
                744
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_order_by": {
            "slot": [
                310
            ],
            "transaction": [
                831
            ],
            "transaction_watcher": [
                796
            ],
            "tx_sig": [
                310
            ],
            "watcher_acct": [
                310
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
                310
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
                310
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stream_cursor_input": {
            "initial_value": [
                765
            ],
            "ordering": [
                92
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
                310
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_update_column": {},
        "transaction_watcher_transactions_updates": {
            "_inc": [
                746
            ],
            "_set": [
                757
            ],
            "where": [
                744
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
                310
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
                310
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
                310
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
                165,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                166,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                619
            ],
            "transaction": [
                818
            ],
            "transactionByLatestTxSig": [
                818
            ],
            "transaction_watcher_transactions": [
                735,
                {
                    "distinct_on": [
                        756,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        754,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        744
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                736,
                {
                    "distinct_on": [
                        756,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        754,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        744
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate": {
            "aggregate": [
                780
            ],
            "nodes": [
                776
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp": {
            "count": [
                779
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp_count": {
            "arguments": [
                798
            ],
            "distinct": [
                0
            ],
            "filter": [
                785
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
                783
            ],
            "count": [
                3,
                {
                    "columns": [
                        798,
                        "[transaction_watchers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                789
            ],
            "min": [
                791
            ],
            "stddev": [
                800
            ],
            "stddev_pop": [
                802
            ],
            "stddev_samp": [
                804
            ],
            "sum": [
                808
            ],
            "var_pop": [
                812
            ],
            "var_samp": [
                814
            ],
            "variance": [
                816
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_order_by": {
            "avg": [
                784
            ],
            "count": [
                310
            ],
            "max": [
                790
            ],
            "min": [
                792
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
        "transaction_watchers_arr_rel_insert_input": {
            "data": [
                788
            ],
            "on_conflict": [
                795
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
                310
            ],
            "serializer_logic_version": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_bool_exp": {
            "_and": [
                785
            ],
            "_not": [
                785
            ],
            "_or": [
                785
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
                172
            ],
            "indexer_account_dependencies_aggregate": [
                167
            ],
            "latest_tx_sig": [
                6
            ],
            "serializer_logic_version": [
                620
            ],
            "transaction": [
                822
            ],
            "transactionByLatestTxSig": [
                822
            ],
            "transaction_watcher_transactions": [
                744
            ],
            "transaction_watcher_transactions_aggregate": [
                737
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
                619
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
                171
            ],
            "latest_tx_sig": [
                5
            ],
            "serializer_logic_version": [
                619
            ],
            "transaction": [
                829
            ],
            "transactionByLatestTxSig": [
                829
            ],
            "transaction_watcher_transactions": [
                741
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
                619
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_max_order_by": {
            "acct": [
                310
            ],
            "checked_up_to_slot": [
                310
            ],
            "description": [
                310
            ],
            "first_tx_sig": [
                310
            ],
            "latest_tx_sig": [
                310
            ],
            "serializer_logic_version": [
                310
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
                619
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_min_order_by": {
            "acct": [
                310
            ],
            "checked_up_to_slot": [
                310
            ],
            "description": [
                310
            ],
            "first_tx_sig": [
                310
            ],
            "latest_tx_sig": [
                310
            ],
            "serializer_logic_version": [
                310
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
                776
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_obj_rel_insert_input": {
            "data": [
                788
            ],
            "on_conflict": [
                795
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_on_conflict": {
            "constraint": [
                786
            ],
            "update_columns": [
                810
            ],
            "where": [
                785
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_order_by": {
            "acct": [
                310
            ],
            "checked_up_to_slot": [
                310
            ],
            "description": [
                310
            ],
            "first_tx_sig": [
                310
            ],
            "indexer_account_dependencies_aggregate": [
                170
            ],
            "latest_tx_sig": [
                310
            ],
            "serializer_logic_version": [
                310
            ],
            "transaction": [
                831
            ],
            "transactionByLatestTxSig": [
                831
            ],
            "transaction_watcher_transactions_aggregate": [
                740
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
                619
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
                310
            ],
            "serializer_logic_version": [
                310
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
                310
            ],
            "serializer_logic_version": [
                310
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
                310
            ],
            "serializer_logic_version": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stream_cursor_input": {
            "initial_value": [
                807
            ],
            "ordering": [
                92
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
                619
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
                619
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_sum_order_by": {
            "checked_up_to_slot": [
                310
            ],
            "serializer_logic_version": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_update_column": {},
        "transaction_watchers_updates": {
            "_inc": [
                787
            ],
            "_set": [
                799
            ],
            "where": [
                785
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
                310
            ],
            "serializer_logic_version": [
                310
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
                310
            ],
            "serializer_logic_version": [
                310
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
                310
            ],
            "serializer_logic_version": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "transactions": {
            "block_time": [
                663
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                165,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                166,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                619
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                776,
                {
                    "distinct_on": [
                        798,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        796,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        785
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                777,
                {
                    "distinct_on": [
                        798,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        796,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        785
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                735,
                {
                    "distinct_on": [
                        756,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        754,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        744
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                736,
                {
                    "distinct_on": [
                        756,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        754,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        744
                    ]
                }
            ],
            "transaction_watchers": [
                776,
                {
                    "distinct_on": [
                        798,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        796,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        785
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                777,
                {
                    "distinct_on": [
                        798,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        796,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        785
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
                820
            ],
            "nodes": [
                818
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                821
            ],
            "count": [
                3,
                {
                    "columns": [
                        833,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                826
            ],
            "min": [
                827
            ],
            "stddev": [
                835
            ],
            "stddev_pop": [
                836
            ],
            "stddev_samp": [
                837
            ],
            "sum": [
                840
            ],
            "var_pop": [
                843
            ],
            "var_samp": [
                844
            ],
            "variance": [
                845
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
                822
            ],
            "_not": [
                822
            ],
            "_or": [
                822
            ],
            "block_time": [
                664
            ],
            "failed": [
                1
            ],
            "indexer_account_dependencies": [
                172
            ],
            "indexer_account_dependencies_aggregate": [
                167
            ],
            "payload": [
                6
            ],
            "serializer_logic_version": [
                620
            ],
            "slot": [
                8
            ],
            "transactionWatchersByLatestTxSig": [
                785
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                778
            ],
            "transaction_watcher_transactions": [
                744
            ],
            "transaction_watcher_transactions_aggregate": [
                737
            ],
            "transaction_watchers": [
                785
            ],
            "transaction_watchers_aggregate": [
                778
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
                619
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
                663
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                171
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                619
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                782
            ],
            "transaction_watcher_transactions": [
                741
            ],
            "transaction_watchers": [
                782
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
                663
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                619
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
                663
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                619
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
                818
            ],
            "__typename": [
                5
            ]
        },
        "transactions_obj_rel_insert_input": {
            "data": [
                825
            ],
            "on_conflict": [
                830
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                823
            ],
            "update_columns": [
                841
            ],
            "where": [
                822
            ],
            "__typename": [
                5
            ]
        },
        "transactions_order_by": {
            "block_time": [
                310
            ],
            "failed": [
                310
            ],
            "indexer_account_dependencies_aggregate": [
                170
            ],
            "payload": [
                310
            ],
            "serializer_logic_version": [
                310
            ],
            "slot": [
                310
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                781
            ],
            "transaction_watcher_transactions_aggregate": [
                740
            ],
            "transaction_watchers_aggregate": [
                781
            ],
            "tx_sig": [
                310
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
                663
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                619
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
                839
            ],
            "ordering": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stream_cursor_value_input": {
            "block_time": [
                663
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                619
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
                619
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
                824
            ],
            "_set": [
                834
            ],
            "where": [
                822
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
                266
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                308
            ],
            "proposal": [
                518
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
                850
            ],
            "nodes": [
                846
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp": {
            "count": [
                849
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp_count": {
            "arguments": [
                867
            ],
            "distinct": [
                0
            ],
            "filter": [
                855
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
                853
            ],
            "count": [
                3,
                {
                    "columns": [
                        867,
                        "[twaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                859
            ],
            "min": [
                861
            ],
            "stddev": [
                869
            ],
            "stddev_pop": [
                871
            ],
            "stddev_samp": [
                873
            ],
            "sum": [
                877
            ],
            "var_pop": [
                881
            ],
            "var_samp": [
                883
            ],
            "variance": [
                885
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_order_by": {
            "avg": [
                854
            ],
            "count": [
                310
            ],
            "max": [
                860
            ],
            "min": [
                862
            ],
            "stddev": [
                870
            ],
            "stddev_pop": [
                872
            ],
            "stddev_samp": [
                874
            ],
            "sum": [
                878
            ],
            "var_pop": [
                882
            ],
            "var_samp": [
                884
            ],
            "variance": [
                886
            ],
            "__typename": [
                5
            ]
        },
        "twaps_arr_rel_insert_input": {
            "data": [
                858
            ],
            "on_conflict": [
                864
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
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "twaps_bool_exp": {
            "_and": [
                855
            ],
            "_not": [
                855
            ],
            "_or": [
                855
            ],
            "market": [
                275
            ],
            "market_acct": [
                6
            ],
            "observation_agg": [
                309
            ],
            "proposal": [
                537
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
                308
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
                284
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                308
            ],
            "proposal": [
                546
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
                308
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
                310
            ],
            "observation_agg": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
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
                308
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
                310
            ],
            "observation_agg": [
                310
            ],
            "proposal_acct": [
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
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
                846
            ],
            "__typename": [
                5
            ]
        },
        "twaps_on_conflict": {
            "constraint": [
                856
            ],
            "update_columns": [
                879
            ],
            "where": [
                855
            ],
            "__typename": [
                5
            ]
        },
        "twaps_order_by": {
            "market": [
                286
            ],
            "market_acct": [
                310
            ],
            "observation_agg": [
                310
            ],
            "proposal": [
                548
            ],
            "proposal_acct": [
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
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
                308
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
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
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
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
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
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stream_cursor_input": {
            "initial_value": [
                876
            ],
            "ordering": [
                92
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
                308
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
                308
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
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "twaps_update_column": {},
        "twaps_updates": {
            "_inc": [
                857
            ],
            "_set": [
                868
            ],
            "where": [
                855
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
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
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
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
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
                310
            ],
            "token_amount": [
                310
            ],
            "updated_slot": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "users": {
            "created_at": [
                663
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
                889
            ],
            "nodes": [
                887
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
                        898,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                893
            ],
            "min": [
                894
            ],
            "__typename": [
                5
            ]
        },
        "users_bool_exp": {
            "_and": [
                890
            ],
            "_not": [
                890
            ],
            "_or": [
                890
            ],
            "created_at": [
                664
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
                663
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
                663
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
                663
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
                887
            ],
            "__typename": [
                5
            ]
        },
        "users_on_conflict": {
            "constraint": [
                891
            ],
            "update_columns": [
                902
            ],
            "where": [
                890
            ],
            "__typename": [
                5
            ]
        },
        "users_order_by": {
            "created_at": [
                310
            ],
            "user_acct": [
                310
            ],
            "__typename": [
                5
            ]
        },
        "users_select_column": {},
        "users_set_input": {
            "created_at": [
                663
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
                901
            ],
            "ordering": [
                92
            ],
            "__typename": [
                5
            ]
        },
        "users_stream_cursor_value_input": {
            "created_at": [
                663
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
                899
            ],
            "where": [
                890
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
                        663,
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
            "dao_details": [
                93,
                {
                    "distinct_on": [
                        108,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        106,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "dao_details_aggregate": [
                94,
                {
                    "distinct_on": [
                        108,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        106,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "dao_details_by_pk": [
                93,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "daos": [
                121,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "daos_aggregate": [
                122,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "daos_by_pk": [
                121,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexer_account_dependencies": [
                165,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                166,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                165,
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
                189,
                {
                    "distinct_on": [
                        204,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        202,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        193
                    ]
                }
            ],
            "indexers_aggregate": [
                190,
                {
                    "distinct_on": [
                        204,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        202,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        193
                    ]
                }
            ],
            "indexers_by_pk": [
                189,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes": [
                220,
                {
                    "distinct_on": [
                        244,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        242,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "makes_aggregate": [
                221,
                {
                    "distinct_on": [
                        244,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        242,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "makes_by_pk": [
                220,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets": [
                266,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "markets_aggregate": [
                267,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "markets_by_pk": [
                266,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders": [
                311,
                {
                    "distinct_on": [
                        335,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        333,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "orders_aggregate": [
                312,
                {
                    "distinct_on": [
                        335,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        333,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "orders_by_pk": [
                311,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "program_system": [
                357,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "program_system_aggregate": [
                358,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "program_system_by_pk": [
                357,
                {
                    "system_version": [
                        163,
                        "float8!"
                    ]
                }
            ],
            "programs": [
                416,
                {
                    "distinct_on": [
                        431,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        429,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        420
                    ]
                }
            ],
            "programs_aggregate": [
                417,
                {
                    "distinct_on": [
                        431,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        429,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        420
                    ]
                }
            ],
            "programs_by_pk": [
                416,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_details": [
                444,
                {
                    "distinct_on": [
                        470,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        467,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "proposal_details_aggregate": [
                445,
                {
                    "distinct_on": [
                        470,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        467,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "proposal_details_by_pk": [
                444,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_filter": [
                490,
                {
                    "distinct_on": [
                        506,
                        "[proposal_filter_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        504,
                        "[proposal_filter_order_by!]"
                    ],
                    "where": [
                        495
                    ]
                }
            ],
            "proposal_filter_aggregate": [
                491,
                {
                    "distinct_on": [
                        506,
                        "[proposal_filter_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        504,
                        "[proposal_filter_order_by!]"
                    ],
                    "where": [
                        495
                    ]
                }
            ],
            "proposals": [
                518,
                {
                    "distinct_on": [
                        550,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        548,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        537
                    ]
                }
            ],
            "proposals_aggregate": [
                519,
                {
                    "distinct_on": [
                        550,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        548,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        537
                    ]
                }
            ],
            "proposals_by_pk": [
                518,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "reactions": [
                578,
                {
                    "distinct_on": [
                        599,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "reactions_aggregate": [
                579,
                {
                    "distinct_on": [
                        599,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "reactions_by_pk": [
                578,
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
                621,
                {
                    "distinct_on": [
                        643,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        641,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "takes_aggregate": [
                622,
                {
                    "distinct_on": [
                        643,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        641,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "takes_by_pk": [
                621,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts": [
                665,
                {
                    "distinct_on": [
                        687,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        685,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        674
                    ]
                }
            ],
            "token_accts_aggregate": [
                666,
                {
                    "distinct_on": [
                        687,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        685,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        674
                    ]
                }
            ],
            "token_accts_by_pk": [
                665,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens": [
                707,
                {
                    "distinct_on": [
                        722,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        720,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "tokens_aggregate": [
                708,
                {
                    "distinct_on": [
                        722,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        720,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "tokens_by_pk": [
                707,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                735,
                {
                    "distinct_on": [
                        756,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        754,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        744
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                736,
                {
                    "distinct_on": [
                        756,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        754,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        744
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                735,
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
                776,
                {
                    "distinct_on": [
                        798,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        796,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        785
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                777,
                {
                    "distinct_on": [
                        798,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        796,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        785
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                776,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                818,
                {
                    "distinct_on": [
                        833,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        831,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        822
                    ]
                }
            ],
            "transactions_aggregate": [
                819,
                {
                    "distinct_on": [
                        833,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        831,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        822
                    ]
                }
            ],
            "transactions_by_pk": [
                818,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "twaps": [
                846,
                {
                    "distinct_on": [
                        867,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        865,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        855
                    ]
                }
            ],
            "twaps_aggregate": [
                847,
                {
                    "distinct_on": [
                        867,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        865,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        855
                    ]
                }
            ],
            "twaps_by_pk": [
                846,
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
                887,
                {
                    "distinct_on": [
                        898,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        897,
                        "[users_order_by!]"
                    ],
                    "where": [
                        890
                    ]
                }
            ],
            "users_aggregate": [
                888,
                {
                    "distinct_on": [
                        898,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        897,
                        "[users_order_by!]"
                    ],
                    "where": [
                        890
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
                        663,
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
            "delete_dao_details": [
                103,
                {
                    "where": [
                        97,
                        "dao_details_bool_exp!"
                    ]
                }
            ],
            "delete_dao_details_by_pk": [
                93,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_daos": [
                138,
                {
                    "where": [
                        130,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "delete_daos_by_pk": [
                121,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies": [
                179,
                {
                    "where": [
                        172,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "delete_indexer_account_dependencies_by_pk": [
                165,
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
                199,
                {
                    "where": [
                        193,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "delete_indexers_by_pk": [
                189,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_makes": [
                239,
                {
                    "where": [
                        231,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "delete_makes_by_pk": [
                220,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_markets": [
                283,
                {
                    "where": [
                        275,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "delete_markets_by_pk": [
                266,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_orders": [
                330,
                {
                    "where": [
                        322,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "delete_orders_by_pk": [
                311,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_program_system": [
                384,
                {
                    "where": [
                        376,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "delete_program_system_by_pk": [
                357,
                {
                    "system_version": [
                        163,
                        "float8!"
                    ]
                }
            ],
            "delete_programs": [
                426,
                {
                    "where": [
                        420,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "delete_programs_by_pk": [
                416,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_details": [
                465,
                {
                    "where": [
                        454,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_details_by_pk": [
                444,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_proposal_filter": [
                503,
                {
                    "where": [
                        495,
                        "proposal_filter_bool_exp!"
                    ]
                }
            ],
            "delete_proposals": [
                545,
                {
                    "where": [
                        537,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "delete_proposals_by_pk": [
                518,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_reactions": [
                595,
                {
                    "where": [
                        587,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "delete_reactions_by_pk": [
                578,
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
                638,
                {
                    "where": [
                        630,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "delete_takes_by_pk": [
                621,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_accts": [
                682,
                {
                    "where": [
                        674,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "delete_token_accts_by_pk": [
                665,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_tokens": [
                717,
                {
                    "where": [
                        711,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "delete_tokens_by_pk": [
                707,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions": [
                752,
                {
                    "where": [
                        744,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions_by_pk": [
                735,
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
                793,
                {
                    "where": [
                        785,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watchers_by_pk": [
                776,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                828,
                {
                    "where": [
                        822,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                818,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_twaps": [
                863,
                {
                    "where": [
                        855,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "delete_twaps_by_pk": [
                846,
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
                895,
                {
                    "where": [
                        890,
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
            "insert_dao_details": [
                103,
                {
                    "objects": [
                        100,
                        "[dao_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        105
                    ]
                }
            ],
            "insert_dao_details_one": [
                93,
                {
                    "object": [
                        100,
                        "dao_details_insert_input!"
                    ],
                    "on_conflict": [
                        105
                    ]
                }
            ],
            "insert_daos": [
                138,
                {
                    "objects": [
                        133,
                        "[daos_insert_input!]!"
                    ],
                    "on_conflict": [
                        140
                    ]
                }
            ],
            "insert_daos_one": [
                121,
                {
                    "object": [
                        133,
                        "daos_insert_input!"
                    ],
                    "on_conflict": [
                        140
                    ]
                }
            ],
            "insert_indexer_account_dependencies": [
                179,
                {
                    "objects": [
                        174,
                        "[indexer_account_dependencies_insert_input!]!"
                    ],
                    "on_conflict": [
                        180
                    ]
                }
            ],
            "insert_indexer_account_dependencies_one": [
                165,
                {
                    "object": [
                        174,
                        "indexer_account_dependencies_insert_input!"
                    ],
                    "on_conflict": [
                        180
                    ]
                }
            ],
            "insert_indexers": [
                199,
                {
                    "objects": [
                        196,
                        "[indexers_insert_input!]!"
                    ],
                    "on_conflict": [
                        201
                    ]
                }
            ],
            "insert_indexers_one": [
                189,
                {
                    "object": [
                        196,
                        "indexers_insert_input!"
                    ],
                    "on_conflict": [
                        201
                    ]
                }
            ],
            "insert_makes": [
                239,
                {
                    "objects": [
                        234,
                        "[makes_insert_input!]!"
                    ],
                    "on_conflict": [
                        241
                    ]
                }
            ],
            "insert_makes_one": [
                220,
                {
                    "object": [
                        234,
                        "makes_insert_input!"
                    ],
                    "on_conflict": [
                        241
                    ]
                }
            ],
            "insert_markets": [
                283,
                {
                    "objects": [
                        278,
                        "[markets_insert_input!]!"
                    ],
                    "on_conflict": [
                        285
                    ]
                }
            ],
            "insert_markets_one": [
                266,
                {
                    "object": [
                        278,
                        "markets_insert_input!"
                    ],
                    "on_conflict": [
                        285
                    ]
                }
            ],
            "insert_orders": [
                330,
                {
                    "objects": [
                        325,
                        "[orders_insert_input!]!"
                    ],
                    "on_conflict": [
                        332
                    ]
                }
            ],
            "insert_orders_one": [
                311,
                {
                    "object": [
                        325,
                        "orders_insert_input!"
                    ],
                    "on_conflict": [
                        332
                    ]
                }
            ],
            "insert_program_system": [
                384,
                {
                    "objects": [
                        379,
                        "[program_system_insert_input!]!"
                    ],
                    "on_conflict": [
                        385
                    ]
                }
            ],
            "insert_program_system_one": [
                357,
                {
                    "object": [
                        379,
                        "program_system_insert_input!"
                    ],
                    "on_conflict": [
                        385
                    ]
                }
            ],
            "insert_programs": [
                426,
                {
                    "objects": [
                        423,
                        "[programs_insert_input!]!"
                    ],
                    "on_conflict": [
                        428
                    ]
                }
            ],
            "insert_programs_one": [
                416,
                {
                    "object": [
                        423,
                        "programs_insert_input!"
                    ],
                    "on_conflict": [
                        428
                    ]
                }
            ],
            "insert_proposal_details": [
                465,
                {
                    "objects": [
                        460,
                        "[proposal_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        466
                    ]
                }
            ],
            "insert_proposal_details_one": [
                444,
                {
                    "object": [
                        460,
                        "proposal_details_insert_input!"
                    ],
                    "on_conflict": [
                        466
                    ]
                }
            ],
            "insert_proposal_filter": [
                503,
                {
                    "objects": [
                        500,
                        "[proposal_filter_insert_input!]!"
                    ]
                }
            ],
            "insert_proposal_filter_one": [
                490,
                {
                    "object": [
                        500,
                        "proposal_filter_insert_input!"
                    ]
                }
            ],
            "insert_proposals": [
                545,
                {
                    "objects": [
                        540,
                        "[proposals_insert_input!]!"
                    ],
                    "on_conflict": [
                        547
                    ]
                }
            ],
            "insert_proposals_one": [
                518,
                {
                    "object": [
                        540,
                        "proposals_insert_input!"
                    ],
                    "on_conflict": [
                        547
                    ]
                }
            ],
            "insert_reactions": [
                595,
                {
                    "objects": [
                        590,
                        "[reactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        596
                    ]
                }
            ],
            "insert_reactions_one": [
                578,
                {
                    "object": [
                        590,
                        "reactions_insert_input!"
                    ],
                    "on_conflict": [
                        596
                    ]
                }
            ],
            "insert_takes": [
                638,
                {
                    "objects": [
                        633,
                        "[takes_insert_input!]!"
                    ],
                    "on_conflict": [
                        640
                    ]
                }
            ],
            "insert_takes_one": [
                621,
                {
                    "object": [
                        633,
                        "takes_insert_input!"
                    ],
                    "on_conflict": [
                        640
                    ]
                }
            ],
            "insert_token_accts": [
                682,
                {
                    "objects": [
                        677,
                        "[token_accts_insert_input!]!"
                    ],
                    "on_conflict": [
                        684
                    ]
                }
            ],
            "insert_token_accts_one": [
                665,
                {
                    "object": [
                        677,
                        "token_accts_insert_input!"
                    ],
                    "on_conflict": [
                        684
                    ]
                }
            ],
            "insert_tokens": [
                717,
                {
                    "objects": [
                        714,
                        "[tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        719
                    ]
                }
            ],
            "insert_tokens_one": [
                707,
                {
                    "object": [
                        714,
                        "tokens_insert_input!"
                    ],
                    "on_conflict": [
                        719
                    ]
                }
            ],
            "insert_transaction_watcher_transactions": [
                752,
                {
                    "objects": [
                        747,
                        "[transaction_watcher_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        753
                    ]
                }
            ],
            "insert_transaction_watcher_transactions_one": [
                735,
                {
                    "object": [
                        747,
                        "transaction_watcher_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        753
                    ]
                }
            ],
            "insert_transaction_watchers": [
                793,
                {
                    "objects": [
                        788,
                        "[transaction_watchers_insert_input!]!"
                    ],
                    "on_conflict": [
                        795
                    ]
                }
            ],
            "insert_transaction_watchers_one": [
                776,
                {
                    "object": [
                        788,
                        "transaction_watchers_insert_input!"
                    ],
                    "on_conflict": [
                        795
                    ]
                }
            ],
            "insert_transactions": [
                828,
                {
                    "objects": [
                        825,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        830
                    ]
                }
            ],
            "insert_transactions_one": [
                818,
                {
                    "object": [
                        825,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        830
                    ]
                }
            ],
            "insert_twaps": [
                863,
                {
                    "objects": [
                        858,
                        "[twaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        864
                    ]
                }
            ],
            "insert_twaps_one": [
                846,
                {
                    "object": [
                        858,
                        "twaps_insert_input!"
                    ],
                    "on_conflict": [
                        864
                    ]
                }
            ],
            "insert_users": [
                895,
                {
                    "objects": [
                        892,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        896
                    ]
                }
            ],
            "insert_users_one": [
                887,
                {
                    "object": [
                        892,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        896
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
            "update_dao_details": [
                103,
                {
                    "_inc": [
                        99
                    ],
                    "_set": [
                        109
                    ],
                    "where": [
                        97,
                        "dao_details_bool_exp!"
                    ]
                }
            ],
            "update_dao_details_by_pk": [
                93,
                {
                    "_inc": [
                        99
                    ],
                    "_set": [
                        109
                    ],
                    "pk_columns": [
                        107,
                        "dao_details_pk_columns_input!"
                    ]
                }
            ],
            "update_dao_details_many": [
                103,
                {
                    "updates": [
                        117,
                        "[dao_details_updates!]!"
                    ]
                }
            ],
            "update_daos": [
                138,
                {
                    "_inc": [
                        132
                    ],
                    "_set": [
                        144
                    ],
                    "where": [
                        130,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "update_daos_by_pk": [
                121,
                {
                    "_inc": [
                        132
                    ],
                    "_set": [
                        144
                    ],
                    "pk_columns": [
                        142,
                        "daos_pk_columns_input!"
                    ]
                }
            ],
            "update_daos_many": [
                138,
                {
                    "updates": [
                        156,
                        "[daos_updates!]!"
                    ]
                }
            ],
            "update_indexer_account_dependencies": [
                179,
                {
                    "_set": [
                        184
                    ],
                    "where": [
                        172,
                        "indexer_account_dependencies_bool_exp!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_by_pk": [
                165,
                {
                    "_set": [
                        184
                    ],
                    "pk_columns": [
                        182,
                        "indexer_account_dependencies_pk_columns_input!"
                    ]
                }
            ],
            "update_indexer_account_dependencies_many": [
                179,
                {
                    "updates": [
                        188,
                        "[indexer_account_dependencies_updates!]!"
                    ]
                }
            ],
            "update_indexers": [
                199,
                {
                    "_inc": [
                        195
                    ],
                    "_set": [
                        205
                    ],
                    "where": [
                        193,
                        "indexers_bool_exp!"
                    ]
                }
            ],
            "update_indexers_by_pk": [
                189,
                {
                    "_inc": [
                        195
                    ],
                    "_set": [
                        205
                    ],
                    "pk_columns": [
                        203,
                        "indexers_pk_columns_input!"
                    ]
                }
            ],
            "update_indexers_many": [
                199,
                {
                    "updates": [
                        213,
                        "[indexers_updates!]!"
                    ]
                }
            ],
            "update_makes": [
                239,
                {
                    "_inc": [
                        233
                    ],
                    "_set": [
                        247
                    ],
                    "where": [
                        231,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "update_makes_by_pk": [
                220,
                {
                    "_inc": [
                        233
                    ],
                    "_set": [
                        247
                    ],
                    "pk_columns": [
                        243,
                        "makes_pk_columns_input!"
                    ]
                }
            ],
            "update_makes_many": [
                239,
                {
                    "updates": [
                        259,
                        "[makes_updates!]!"
                    ]
                }
            ],
            "update_markets": [
                283,
                {
                    "_inc": [
                        277
                    ],
                    "_set": [
                        289
                    ],
                    "where": [
                        275,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "update_markets_by_pk": [
                266,
                {
                    "_inc": [
                        277
                    ],
                    "_set": [
                        289
                    ],
                    "pk_columns": [
                        287,
                        "markets_pk_columns_input!"
                    ]
                }
            ],
            "update_markets_many": [
                283,
                {
                    "updates": [
                        301,
                        "[markets_updates!]!"
                    ]
                }
            ],
            "update_orders": [
                330,
                {
                    "_inc": [
                        324
                    ],
                    "_set": [
                        338
                    ],
                    "where": [
                        322,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "update_orders_by_pk": [
                311,
                {
                    "_inc": [
                        324
                    ],
                    "_set": [
                        338
                    ],
                    "pk_columns": [
                        334,
                        "orders_pk_columns_input!"
                    ]
                }
            ],
            "update_orders_many": [
                330,
                {
                    "updates": [
                        350,
                        "[orders_updates!]!"
                    ]
                }
            ],
            "update_program_system": [
                384,
                {
                    "_inc": [
                        378
                    ],
                    "_set": [
                        397
                    ],
                    "where": [
                        376,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "update_program_system_by_pk": [
                357,
                {
                    "_inc": [
                        378
                    ],
                    "_set": [
                        397
                    ],
                    "pk_columns": [
                        387,
                        "program_system_pk_columns_input!"
                    ]
                }
            ],
            "update_program_system_many": [
                384,
                {
                    "updates": [
                        409,
                        "[program_system_updates!]!"
                    ]
                }
            ],
            "update_programs": [
                426,
                {
                    "_inc": [
                        422
                    ],
                    "_set": [
                        432
                    ],
                    "where": [
                        420,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "update_programs_by_pk": [
                416,
                {
                    "_inc": [
                        422
                    ],
                    "_set": [
                        432
                    ],
                    "pk_columns": [
                        430,
                        "programs_pk_columns_input!"
                    ]
                }
            ],
            "update_programs_many": [
                426,
                {
                    "updates": [
                        440,
                        "[programs_updates!]!"
                    ]
                }
            ],
            "update_proposal_details": [
                465,
                {
                    "_append": [
                        450
                    ],
                    "_delete_at_path": [
                        456
                    ],
                    "_delete_elem": [
                        457
                    ],
                    "_delete_key": [
                        458
                    ],
                    "_inc": [
                        459
                    ],
                    "_prepend": [
                        469
                    ],
                    "_set": [
                        471
                    ],
                    "where": [
                        454,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "update_proposal_details_by_pk": [
                444,
                {
                    "_append": [
                        450
                    ],
                    "_delete_at_path": [
                        456
                    ],
                    "_delete_elem": [
                        457
                    ],
                    "_delete_key": [
                        458
                    ],
                    "_inc": [
                        459
                    ],
                    "_prepend": [
                        469
                    ],
                    "_set": [
                        471
                    ],
                    "pk_columns": [
                        468,
                        "proposal_details_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_details_many": [
                465,
                {
                    "updates": [
                        483,
                        "[proposal_details_updates!]!"
                    ]
                }
            ],
            "update_proposal_filter": [
                503,
                {
                    "_append": [
                        493
                    ],
                    "_delete_at_path": [
                        496
                    ],
                    "_delete_elem": [
                        497
                    ],
                    "_delete_key": [
                        498
                    ],
                    "_inc": [
                        499
                    ],
                    "_prepend": [
                        505
                    ],
                    "_set": [
                        507
                    ],
                    "where": [
                        495,
                        "proposal_filter_bool_exp!"
                    ]
                }
            ],
            "update_proposal_filter_many": [
                503,
                {
                    "updates": [
                        514,
                        "[proposal_filter_updates!]!"
                    ]
                }
            ],
            "update_proposals": [
                545,
                {
                    "_inc": [
                        539
                    ],
                    "_set": [
                        559
                    ],
                    "where": [
                        537,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "update_proposals_by_pk": [
                518,
                {
                    "_inc": [
                        539
                    ],
                    "_set": [
                        559
                    ],
                    "pk_columns": [
                        549,
                        "proposals_pk_columns_input!"
                    ]
                }
            ],
            "update_proposals_many": [
                545,
                {
                    "updates": [
                        571,
                        "[proposals_updates!]!"
                    ]
                }
            ],
            "update_reactions": [
                595,
                {
                    "_inc": [
                        589
                    ],
                    "_set": [
                        600
                    ],
                    "where": [
                        587,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "update_reactions_by_pk": [
                578,
                {
                    "_inc": [
                        589
                    ],
                    "_set": [
                        600
                    ],
                    "pk_columns": [
                        598,
                        "reactions_pk_columns_input!"
                    ]
                }
            ],
            "update_reactions_many": [
                595,
                {
                    "updates": [
                        612,
                        "[reactions_updates!]!"
                    ]
                }
            ],
            "update_takes": [
                638,
                {
                    "_inc": [
                        632
                    ],
                    "_set": [
                        644
                    ],
                    "where": [
                        630,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "update_takes_by_pk": [
                621,
                {
                    "_inc": [
                        632
                    ],
                    "_set": [
                        644
                    ],
                    "pk_columns": [
                        642,
                        "takes_pk_columns_input!"
                    ]
                }
            ],
            "update_takes_many": [
                638,
                {
                    "updates": [
                        656,
                        "[takes_updates!]!"
                    ]
                }
            ],
            "update_token_accts": [
                682,
                {
                    "_inc": [
                        676
                    ],
                    "_set": [
                        688
                    ],
                    "where": [
                        674,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "update_token_accts_by_pk": [
                665,
                {
                    "_inc": [
                        676
                    ],
                    "_set": [
                        688
                    ],
                    "pk_columns": [
                        686,
                        "token_accts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_accts_many": [
                682,
                {
                    "updates": [
                        700,
                        "[token_accts_updates!]!"
                    ]
                }
            ],
            "update_tokens": [
                717,
                {
                    "_inc": [
                        713
                    ],
                    "_set": [
                        723
                    ],
                    "where": [
                        711,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "update_tokens_by_pk": [
                707,
                {
                    "_inc": [
                        713
                    ],
                    "_set": [
                        723
                    ],
                    "pk_columns": [
                        721,
                        "tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_tokens_many": [
                717,
                {
                    "updates": [
                        731,
                        "[tokens_updates!]!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions": [
                752,
                {
                    "_inc": [
                        746
                    ],
                    "_set": [
                        757
                    ],
                    "where": [
                        744,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_by_pk": [
                735,
                {
                    "_inc": [
                        746
                    ],
                    "_set": [
                        757
                    ],
                    "pk_columns": [
                        755,
                        "transaction_watcher_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_many": [
                752,
                {
                    "updates": [
                        769,
                        "[transaction_watcher_transactions_updates!]!"
                    ]
                }
            ],
            "update_transaction_watchers": [
                793,
                {
                    "_inc": [
                        787
                    ],
                    "_set": [
                        799
                    ],
                    "where": [
                        785,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watchers_by_pk": [
                776,
                {
                    "_inc": [
                        787
                    ],
                    "_set": [
                        799
                    ],
                    "pk_columns": [
                        797,
                        "transaction_watchers_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watchers_many": [
                793,
                {
                    "updates": [
                        811,
                        "[transaction_watchers_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                828,
                {
                    "_inc": [
                        824
                    ],
                    "_set": [
                        834
                    ],
                    "where": [
                        822,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                818,
                {
                    "_inc": [
                        824
                    ],
                    "_set": [
                        834
                    ],
                    "pk_columns": [
                        832,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                828,
                {
                    "updates": [
                        842,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_twaps": [
                863,
                {
                    "_inc": [
                        857
                    ],
                    "_set": [
                        868
                    ],
                    "where": [
                        855,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "update_twaps_by_pk": [
                846,
                {
                    "_inc": [
                        857
                    ],
                    "_set": [
                        868
                    ],
                    "pk_columns": [
                        866,
                        "twaps_pk_columns_input!"
                    ]
                }
            ],
            "update_twaps_many": [
                863,
                {
                    "updates": [
                        880,
                        "[twaps_updates!]!"
                    ]
                }
            ],
            "update_users": [
                895,
                {
                    "_set": [
                        899
                    ],
                    "where": [
                        890,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_many": [
                895,
                {
                    "updates": [
                        903,
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
                        663,
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
            "dao_details": [
                93,
                {
                    "distinct_on": [
                        108,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        106,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "dao_details_aggregate": [
                94,
                {
                    "distinct_on": [
                        108,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        106,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "dao_details_by_pk": [
                93,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "dao_details_stream": [
                93,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        113,
                        "[dao_details_stream_cursor_input]!"
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "daos": [
                121,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "daos_aggregate": [
                122,
                {
                    "distinct_on": [
                        143,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        141,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "daos_by_pk": [
                121,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "daos_stream": [
                121,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        151,
                        "[daos_stream_cursor_input]!"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "indexer_account_dependencies": [
                165,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "indexer_account_dependencies_aggregate": [
                166,
                {
                    "distinct_on": [
                        183,
                        "[indexer_account_dependencies_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        181,
                        "[indexer_account_dependencies_order_by!]"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "indexer_account_dependencies_by_pk": [
                165,
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
                165,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        185,
                        "[indexer_account_dependencies_stream_cursor_input]!"
                    ],
                    "where": [
                        172
                    ]
                }
            ],
            "indexers": [
                189,
                {
                    "distinct_on": [
                        204,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        202,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        193
                    ]
                }
            ],
            "indexers_aggregate": [
                190,
                {
                    "distinct_on": [
                        204,
                        "[indexers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        202,
                        "[indexers_order_by!]"
                    ],
                    "where": [
                        193
                    ]
                }
            ],
            "indexers_by_pk": [
                189,
                {
                    "name": [
                        5,
                        "String!"
                    ]
                }
            ],
            "indexers_stream": [
                189,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        209,
                        "[indexers_stream_cursor_input]!"
                    ],
                    "where": [
                        193
                    ]
                }
            ],
            "makes": [
                220,
                {
                    "distinct_on": [
                        244,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        242,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "makes_aggregate": [
                221,
                {
                    "distinct_on": [
                        244,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        242,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "makes_by_pk": [
                220,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes_stream": [
                220,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        254,
                        "[makes_stream_cursor_input]!"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "markets": [
                266,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "markets_aggregate": [
                267,
                {
                    "distinct_on": [
                        288,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        286,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "markets_by_pk": [
                266,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets_stream": [
                266,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        296,
                        "[markets_stream_cursor_input]!"
                    ],
                    "where": [
                        275
                    ]
                }
            ],
            "orders": [
                311,
                {
                    "distinct_on": [
                        335,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        333,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "orders_aggregate": [
                312,
                {
                    "distinct_on": [
                        335,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        333,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "orders_by_pk": [
                311,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders_stream": [
                311,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        345,
                        "[orders_stream_cursor_input]!"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "program_system": [
                357,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "program_system_aggregate": [
                358,
                {
                    "distinct_on": [
                        388,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        386,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "program_system_by_pk": [
                357,
                {
                    "system_version": [
                        163,
                        "float8!"
                    ]
                }
            ],
            "program_system_stream": [
                357,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        404,
                        "[program_system_stream_cursor_input]!"
                    ],
                    "where": [
                        376
                    ]
                }
            ],
            "programs": [
                416,
                {
                    "distinct_on": [
                        431,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        429,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        420
                    ]
                }
            ],
            "programs_aggregate": [
                417,
                {
                    "distinct_on": [
                        431,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        429,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        420
                    ]
                }
            ],
            "programs_by_pk": [
                416,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs_stream": [
                416,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        436,
                        "[programs_stream_cursor_input]!"
                    ],
                    "where": [
                        420
                    ]
                }
            ],
            "proposal_details": [
                444,
                {
                    "distinct_on": [
                        470,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        467,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "proposal_details_aggregate": [
                445,
                {
                    "distinct_on": [
                        470,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        467,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "proposal_details_by_pk": [
                444,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_details_stream": [
                444,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        478,
                        "[proposal_details_stream_cursor_input]!"
                    ],
                    "where": [
                        454
                    ]
                }
            ],
            "proposal_filter": [
                490,
                {
                    "distinct_on": [
                        506,
                        "[proposal_filter_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        504,
                        "[proposal_filter_order_by!]"
                    ],
                    "where": [
                        495
                    ]
                }
            ],
            "proposal_filter_aggregate": [
                491,
                {
                    "distinct_on": [
                        506,
                        "[proposal_filter_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        504,
                        "[proposal_filter_order_by!]"
                    ],
                    "where": [
                        495
                    ]
                }
            ],
            "proposal_filter_stream": [
                490,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        511,
                        "[proposal_filter_stream_cursor_input]!"
                    ],
                    "where": [
                        495
                    ]
                }
            ],
            "proposals": [
                518,
                {
                    "distinct_on": [
                        550,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        548,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        537
                    ]
                }
            ],
            "proposals_aggregate": [
                519,
                {
                    "distinct_on": [
                        550,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        548,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        537
                    ]
                }
            ],
            "proposals_by_pk": [
                518,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposals_stream": [
                518,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        566,
                        "[proposals_stream_cursor_input]!"
                    ],
                    "where": [
                        537
                    ]
                }
            ],
            "reactions": [
                578,
                {
                    "distinct_on": [
                        599,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "reactions_aggregate": [
                579,
                {
                    "distinct_on": [
                        599,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        597,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "reactions_by_pk": [
                578,
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
                578,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        607,
                        "[reactions_stream_cursor_input]!"
                    ],
                    "where": [
                        587
                    ]
                }
            ],
            "takes": [
                621,
                {
                    "distinct_on": [
                        643,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        641,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "takes_aggregate": [
                622,
                {
                    "distinct_on": [
                        643,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        641,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "takes_by_pk": [
                621,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes_stream": [
                621,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        651,
                        "[takes_stream_cursor_input]!"
                    ],
                    "where": [
                        630
                    ]
                }
            ],
            "token_accts": [
                665,
                {
                    "distinct_on": [
                        687,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        685,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        674
                    ]
                }
            ],
            "token_accts_aggregate": [
                666,
                {
                    "distinct_on": [
                        687,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        685,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        674
                    ]
                }
            ],
            "token_accts_by_pk": [
                665,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts_stream": [
                665,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        695,
                        "[token_accts_stream_cursor_input]!"
                    ],
                    "where": [
                        674
                    ]
                }
            ],
            "tokens": [
                707,
                {
                    "distinct_on": [
                        722,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        720,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "tokens_aggregate": [
                708,
                {
                    "distinct_on": [
                        722,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        720,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "tokens_by_pk": [
                707,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens_stream": [
                707,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        727,
                        "[tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        711
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                735,
                {
                    "distinct_on": [
                        756,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        754,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        744
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                736,
                {
                    "distinct_on": [
                        756,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        754,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        744
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                735,
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
                735,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        764,
                        "[transaction_watcher_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        744
                    ]
                }
            ],
            "transaction_watchers": [
                776,
                {
                    "distinct_on": [
                        798,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        796,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        785
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                777,
                {
                    "distinct_on": [
                        798,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        796,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        785
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                776,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers_stream": [
                776,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        806,
                        "[transaction_watchers_stream_cursor_input]!"
                    ],
                    "where": [
                        785
                    ]
                }
            ],
            "transactions": [
                818,
                {
                    "distinct_on": [
                        833,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        831,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        822
                    ]
                }
            ],
            "transactions_aggregate": [
                819,
                {
                    "distinct_on": [
                        833,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        831,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        822
                    ]
                }
            ],
            "transactions_by_pk": [
                818,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                818,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        838,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        822
                    ]
                }
            ],
            "twaps": [
                846,
                {
                    "distinct_on": [
                        867,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        865,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        855
                    ]
                }
            ],
            "twaps_aggregate": [
                847,
                {
                    "distinct_on": [
                        867,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        865,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        855
                    ]
                }
            ],
            "twaps_by_pk": [
                846,
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
                846,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        875,
                        "[twaps_stream_cursor_input]!"
                    ],
                    "where": [
                        855
                    ]
                }
            ],
            "users": [
                887,
                {
                    "distinct_on": [
                        898,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        897,
                        "[users_order_by!]"
                    ],
                    "where": [
                        890
                    ]
                }
            ],
            "users_aggregate": [
                888,
                {
                    "distinct_on": [
                        898,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        897,
                        "[users_order_by!]"
                    ],
                    "where": [
                        890
                    ]
                }
            ],
            "users_stream": [
                887,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        900,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        890
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}