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
        249,
        264,
        276,
        277,
        278,
        290,
        308,
        320,
        332,
        340,
        342,
        355,
        367,
        368,
        369,
        381,
        404,
        412,
        420,
        425,
        436,
        448,
        476,
        487,
        488,
        489,
        490,
        491,
        492,
        493,
        494,
        495,
        507,
        520,
        530,
        538,
        548,
        557,
        565,
        581,
        596,
        608,
        624,
        654,
        666,
        667,
        668,
        669,
        670,
        671,
        672,
        673,
        674,
        686,
        704,
        715,
        727,
        743,
        753,
        757,
        759,
        771,
        783,
        795,
        803,
        805,
        817,
        828,
        840,
        848,
        860,
        872,
        884,
        897,
        907,
        915,
        930,
        941,
        953,
        971,
        983,
        995,
        1008,
        1018,
        1026,
        1036,
        1044,
        1052,
        1067,
        1078,
        1090,
        1108,
        1119,
        1131,
        1143,
        1152,
        1156,
        1158
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
                298
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                805
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
                342
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "open": [
                342
            ],
            "volume": [
                342
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
                307
            ],
            "market_acct": [
                6
            ],
            "open": [
                8
            ],
            "timestamp": [
                806
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
                316
            ],
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                805
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
                805
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "market_acct": [
                342
            ],
            "open": [
                342
            ],
            "timestamp": [
                342
            ],
            "volume": [
                342
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
                805
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "market_acct": [
                342
            ],
            "open": [
                342
            ],
            "timestamp": [
                342
            ],
            "volume": [
                342
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "market": [
                318
            ],
            "market_acct": [
                342
            ],
            "open": [
                342
            ],
            "timestamp": [
                342
            ],
            "volume": [
                342
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
                805
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
                805
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "open": [
                342
            ],
            "volume": [
                342
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "open": [
                342
            ],
            "volume": [
                342
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "open": [
                342
            ],
            "volume": [
                342
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
                805
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "open": [
                342
            ],
            "volume": [
                342
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "open": [
                342
            ],
            "volume": [
                342
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "open": [
                342
            ],
            "volume": [
                342
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
                342
            ],
            "candle_duration": [
                342
            ],
            "close": [
                342
            ],
            "cond_market_twap": [
                342
            ],
            "high": [
                342
            ],
            "low": [
                342
            ],
            "open": [
                342
            ],
            "volume": [
                342
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
                805
            ],
            "proposal": [
                634
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                694,
                {
                    "distinct_on": [
                        715,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        713,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        703
                    ]
                }
            ],
            "reactions_aggregate": [
                695,
                {
                    "distinct_on": [
                        715,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        713,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        703
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
                342
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
                342
            ],
            "responding_comment_id": [
                342
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
                806
            ],
            "proposal": [
                653
            ],
            "proposal_acct": [
                6
            ],
            "reactions": [
                703
            ],
            "reactions_aggregate": [
                696
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
                805
            ],
            "proposal": [
                662
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                700
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
                805
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
                342
            ],
            "commentor_acct": [
                342
            ],
            "content": [
                342
            ],
            "created_at": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "responding_comment_id": [
                342
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
                805
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
                342
            ],
            "commentor_acct": [
                342
            ],
            "content": [
                342
            ],
            "created_at": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "responding_comment_id": [
                342
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
                342
            ],
            "commentor_acct": [
                342
            ],
            "comments_aggregate": [
                55
            ],
            "content": [
                342
            ],
            "created_at": [
                342
            ],
            "proposal": [
                664
            ],
            "proposal_acct": [
                342
            ],
            "reactions_aggregate": [
                699
            ],
            "responding_comment_id": [
                342
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
                805
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
                342
            ],
            "responding_comment_id": [
                342
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
                342
            ],
            "responding_comment_id": [
                342
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
                342
            ],
            "responding_comment_id": [
                342
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
                805
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
                342
            ],
            "responding_comment_id": [
                342
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
                342
            ],
            "responding_comment_id": [
                342
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
                342
            ],
            "responding_comment_id": [
                342
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
                342
            ],
            "responding_comment_id": [
                342
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
                634,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
                    ]
                }
            ],
            "proposalsByQuoteVault": [
                634,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
                    ]
                }
            ],
            "proposalsByQuoteVault_aggregate": [
                635,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
                    ]
                }
            ],
            "proposals_aggregate": [
                635,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
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
                892
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
                342
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
                653
            ],
            "proposalsByQuoteVault": [
                653
            ],
            "proposalsByQuoteVault_aggregate": [
                636
            ],
            "proposals_aggregate": [
                636
            ],
            "settlement_authority": [
                6
            ],
            "status": [
                6
            ],
            "token": [
                896
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
                650
            ],
            "proposalsByQuoteVault": [
                650
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "token": [
                903
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
                342
            ],
            "cond_revert_token_mint_acct": [
                342
            ],
            "cond_vault_acct": [
                342
            ],
            "nonce": [
                342
            ],
            "settlement_authority": [
                342
            ],
            "status": [
                342
            ],
            "underlying_mint_acct": [
                342
            ],
            "underlying_token_acct": [
                342
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
                342
            ],
            "cond_revert_token_mint_acct": [
                342
            ],
            "cond_vault_acct": [
                342
            ],
            "nonce": [
                342
            ],
            "settlement_authority": [
                342
            ],
            "status": [
                342
            ],
            "underlying_mint_acct": [
                342
            ],
            "underlying_token_acct": [
                342
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
                342
            ],
            "cond_revert_token_mint_acct": [
                342
            ],
            "cond_vault_acct": [
                342
            ],
            "nonce": [
                342
            ],
            "proposalsByQuoteVault_aggregate": [
                649
            ],
            "proposals_aggregate": [
                649
            ],
            "settlement_authority": [
                342
            ],
            "status": [
                342
            ],
            "token": [
                905
            ],
            "underlying_mint_acct": [
                342
            ],
            "underlying_token_acct": [
                342
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
                249,
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
                249,
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
                249
            ],
            "socials": [
                249
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
                251
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
                251
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
                249
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
                249
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
                342
            ],
            "creator_acct": [
                342
            ],
            "dao_id": [
                342
            ],
            "daos_aggregate": [
                156
            ],
            "description": [
                342
            ],
            "fail_token_image_url": [
                342
            ],
            "github": [
                342
            ],
            "image_url": [
                342
            ],
            "is_hide": [
                342
            ],
            "lp_token_image_url": [
                342
            ],
            "name": [
                342
            ],
            "pass_token_image_url": [
                342
            ],
            "slug": [
                342
            ],
            "socials": [
                342
            ],
            "token_image_url": [
                342
            ],
            "url": [
                342
            ],
            "x_account": [
                342
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
                249
            ],
            "socials": [
                249
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_select_column": {},
        "dao_details_set_input": {
            "admin_accts": [
                249
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
                249
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
                249
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
                249
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
                805
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
                515
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                634,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
                    ]
                }
            ],
            "proposals_aggregate": [
                635,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
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
                892
            ],
            "tokenByBaseAcct": [
                892
            ],
            "tokenByQuoteAcct": [
                892
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
                805
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
                342
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
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                806
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
                519
            ],
            "program_acct": [
                6
            ],
            "proposals": [
                653
            ],
            "proposals_aggregate": [
                636
            ],
            "quote_acct": [
                6
            ],
            "slots_per_proposal": [
                8
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
                6
            ],
            "twap_initial_observation": [
                8
            ],
            "twap_max_observation_change_per_update": [
                8
            ],
            "updated_at": [
                806
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
                805
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
                526
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                650
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "token": [
                903
            ],
            "tokenByBaseAcct": [
                903
            ],
            "tokenByQuoteAcct": [
                903
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
                805
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
                805
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
                805
            ],
            "__typename": [
                5
            ]
        },
        "daos_max_order_by": {
            "base_acct": [
                342
            ],
            "created_at": [
                342
            ],
            "dao_acct": [
                342
            ],
            "dao_id": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "program_acct": [
                342
            ],
            "quote_acct": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "treasury_acct": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
            ],
            "updated_at": [
                342
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
                805
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
                805
            ],
            "__typename": [
                5
            ]
        },
        "daos_min_order_by": {
            "base_acct": [
                342
            ],
            "created_at": [
                342
            ],
            "dao_acct": [
                342
            ],
            "dao_id": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "program_acct": [
                342
            ],
            "quote_acct": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "treasury_acct": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
            ],
            "updated_at": [
                342
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
                342
            ],
            "created_at": [
                342
            ],
            "dao_acct": [
                342
            ],
            "dao_detail": [
                135
            ],
            "dao_id": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "program": [
                528
            ],
            "program_acct": [
                342
            ],
            "proposals_aggregate": [
                649
            ],
            "quote_acct": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "token": [
                905
            ],
            "tokenByBaseAcct": [
                905
            ],
            "tokenByQuoteAcct": [
                905
            ],
            "treasury_acct": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
            ],
            "updated_at": [
                342
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
                805
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
                805
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
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                805
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
                805
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
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                1003
            ],
            "updated_at": [
                805
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
                342
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
                1007
            ],
            "updated_at": [
                806
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
                1014
            ],
            "updated_at": [
                805
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
                805
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_max_order_by": {
            "acct": [
                342
            ],
            "latest_tx_sig_processed": [
                342
            ],
            "name": [
                342
            ],
            "status": [
                342
            ],
            "updated_at": [
                342
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
                805
            ],
            "__typename": [
                5
            ]
        },
        "indexer_account_dependencies_min_order_by": {
            "acct": [
                342
            ],
            "latest_tx_sig_processed": [
                342
            ],
            "name": [
                342
            ],
            "status": [
                342
            ],
            "updated_at": [
                342
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
                342
            ],
            "indexer": [
                232
            ],
            "latest_tx_sig_processed": [
                342
            ],
            "name": [
                342
            ],
            "status": [
                342
            ],
            "transaction": [
                1016
            ],
            "updated_at": [
                342
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
                805
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
                805
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
                342
            ],
            "indexer_account_dependencies_aggregate": [
                200
            ],
            "indexer_type": [
                342
            ],
            "latest_slot_processed": [
                342
            ],
            "name": [
                342
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
        "interval": {},
        "interval_comparison_exp": {
            "_eq": [
                247
            ],
            "_gt": [
                247
            ],
            "_gte": [
                247
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
                250
            ],
            "_contained_in": [
                249
            ],
            "_contains": [
                249
            ],
            "_eq": [
                249
            ],
            "_gt": [
                249
            ],
            "_gte": [
                249
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
                249
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                249
            ],
            "_lte": [
                249
            ],
            "_neq": [
                249
            ],
            "_nin": [
                249
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
                298
            ],
            "market_acct": [
                5
            ],
            "order": [
                343
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
            ],
            "takes": [
                761,
                {
                    "distinct_on": [
                        783,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        781,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "takes_aggregate": [
                762,
                {
                    "distinct_on": [
                        783,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        781,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate": {
            "aggregate": [
                258
            ],
            "nodes": [
                252
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp": {
            "bool_and": [
                255
            ],
            "bool_or": [
                256
            ],
            "count": [
                257
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_bool_exp_bool_and": {
            "arguments": [
                277
            ],
            "distinct": [
                0
            ],
            "filter": [
                263
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
                278
            ],
            "distinct": [
                0
            ],
            "filter": [
                263
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
                276
            ],
            "distinct": [
                0
            ],
            "filter": [
                263
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
                261
            ],
            "count": [
                3,
                {
                    "columns": [
                        276,
                        "[makes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                267
            ],
            "min": [
                269
            ],
            "stddev": [
                280
            ],
            "stddev_pop": [
                282
            ],
            "stddev_samp": [
                284
            ],
            "sum": [
                288
            ],
            "var_pop": [
                292
            ],
            "var_samp": [
                294
            ],
            "variance": [
                296
            ],
            "__typename": [
                5
            ]
        },
        "makes_aggregate_order_by": {
            "avg": [
                262
            ],
            "count": [
                342
            ],
            "max": [
                268
            ],
            "min": [
                270
            ],
            "stddev": [
                281
            ],
            "stddev_pop": [
                283
            ],
            "stddev_samp": [
                285
            ],
            "sum": [
                289
            ],
            "var_pop": [
                293
            ],
            "var_samp": [
                295
            ],
            "variance": [
                297
            ],
            "__typename": [
                5
            ]
        },
        "makes_arr_rel_insert_input": {
            "data": [
                266
            ],
            "on_conflict": [
                273
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
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "makes_bool_exp": {
            "_and": [
                263
            ],
            "_not": [
                263
            ],
            "_or": [
                263
            ],
            "filled_base_amount": [
                8
            ],
            "is_active": [
                1
            ],
            "market": [
                307
            ],
            "market_acct": [
                6
            ],
            "order": [
                354
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                341
            ],
            "takes": [
                770
            ],
            "takes_aggregate": [
                763
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                806
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
                340
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
                316
            ],
            "market_acct": [
                5
            ],
            "order": [
                363
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
            ],
            "takes": [
                767
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
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
                340
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "makes_max_order_by": {
            "filled_base_amount": [
                342
            ],
            "market_acct": [
                342
            ],
            "order_tx_sig": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "updated_at": [
                342
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
                340
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "makes_min_order_by": {
            "filled_base_amount": [
                342
            ],
            "market_acct": [
                342
            ],
            "order_tx_sig": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "updated_at": [
                342
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
                252
            ],
            "__typename": [
                5
            ]
        },
        "makes_obj_rel_insert_input": {
            "data": [
                266
            ],
            "on_conflict": [
                273
            ],
            "__typename": [
                5
            ]
        },
        "makes_on_conflict": {
            "constraint": [
                264
            ],
            "update_columns": [
                290
            ],
            "where": [
                263
            ],
            "__typename": [
                5
            ]
        },
        "makes_order_by": {
            "filled_base_amount": [
                342
            ],
            "is_active": [
                342
            ],
            "market": [
                318
            ],
            "market_acct": [
                342
            ],
            "order": [
                365
            ],
            "order_tx_sig": [
                342
            ],
            "quote_price": [
                342
            ],
            "takes_aggregate": [
                766
            ],
            "unfilled_base_amount": [
                342
            ],
            "updated_at": [
                342
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
                340
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
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
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "makes_stream_cursor_input": {
            "initial_value": [
                287
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
                340
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
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
                340
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
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "makes_update_column": {},
        "makes_updates": {
            "_inc": [
                265
            ],
            "_set": [
                279
            ],
            "where": [
                263
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
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                759
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                759
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
                805
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                252,
                {
                    "distinct_on": [
                        276,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        274,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        263
                    ]
                }
            ],
            "makes_aggregate": [
                253,
                {
                    "distinct_on": [
                        276,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        274,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        263
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
                343,
                {
                    "distinct_on": [
                        367,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        365,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        354
                    ]
                }
            ],
            "orders_aggregate": [
                344,
                {
                    "distinct_on": [
                        367,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        365,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        354
                    ]
                }
            ],
            "prices": [
                389,
                {
                    "distinct_on": [
                        436,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        434,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        398
                    ]
                }
            ],
            "prices_aggregate": [
                390,
                {
                    "distinct_on": [
                        436,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        434,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        398
                    ]
                }
            ],
            "proposal": [
                634
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                759
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                759
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                761,
                {
                    "distinct_on": [
                        783,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        781,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "takes_aggregate": [
                762,
                {
                    "distinct_on": [
                        783,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        781,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "token": [
                892
            ],
            "tokenAcctByAsksTokenAcct": [
                850
            ],
            "tokenAcctByBidsTokenAcct": [
                850
            ],
            "tokenByBaseMintAcct": [
                892
            ],
            "tokenByQuoteMintAcct": [
                892
            ],
            "token_acct": [
                850
            ],
            "twaps": [
                1057,
                {
                    "distinct_on": [
                        1078,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1076,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1066
                    ]
                }
            ],
            "twaps_aggregate": [
                1058,
                {
                    "distinct_on": [
                        1078,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1076,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1066
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate": {
            "aggregate": [
                302
            ],
            "nodes": [
                298
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp": {
            "count": [
                301
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_bool_exp_count": {
            "arguments": [
                320
            ],
            "distinct": [
                0
            ],
            "filter": [
                307
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
                305
            ],
            "count": [
                3,
                {
                    "columns": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                311
            ],
            "min": [
                313
            ],
            "stddev": [
                322
            ],
            "stddev_pop": [
                324
            ],
            "stddev_samp": [
                326
            ],
            "sum": [
                330
            ],
            "var_pop": [
                334
            ],
            "var_samp": [
                336
            ],
            "variance": [
                338
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_order_by": {
            "avg": [
                306
            ],
            "count": [
                342
            ],
            "max": [
                312
            ],
            "min": [
                314
            ],
            "stddev": [
                323
            ],
            "stddev_pop": [
                325
            ],
            "stddev_samp": [
                327
            ],
            "sum": [
                331
            ],
            "var_pop": [
                335
            ],
            "var_samp": [
                337
            ],
            "variance": [
                339
            ],
            "__typename": [
                5
            ]
        },
        "markets_arr_rel_insert_input": {
            "data": [
                310
            ],
            "on_conflict": [
                317
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
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "markets_bool_exp": {
            "_and": [
                307
            ],
            "_not": [
                307
            ],
            "_or": [
                307
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
                760
            ],
            "base_mint_acct": [
                6
            ],
            "base_taker_fee": [
                760
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
                806
            ],
            "inactive_slot": [
                8
            ],
            "makes": [
                263
            ],
            "makes_aggregate": [
                254
            ],
            "market_acct": [
                6
            ],
            "market_type": [
                6
            ],
            "orders": [
                354
            ],
            "orders_aggregate": [
                345
            ],
            "prices": [
                398
            ],
            "prices_aggregate": [
                391
            ],
            "proposal": [
                653
            ],
            "proposal_acct": [
                6
            ],
            "quote_lot_size": [
                8
            ],
            "quote_maker_fee": [
                760
            ],
            "quote_mint_acct": [
                6
            ],
            "quote_taker_fee": [
                760
            ],
            "quote_tick_size": [
                8
            ],
            "takes": [
                770
            ],
            "takes_aggregate": [
                763
            ],
            "token": [
                896
            ],
            "tokenAcctByAsksTokenAcct": [
                859
            ],
            "tokenAcctByBidsTokenAcct": [
                859
            ],
            "tokenByBaseMintAcct": [
                896
            ],
            "tokenByQuoteMintAcct": [
                896
            ],
            "token_acct": [
                859
            ],
            "twaps": [
                1066
            ],
            "twaps_aggregate": [
                1059
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
                759
            ],
            "base_taker_fee": [
                759
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                759
            ],
            "quote_taker_fee": [
                759
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
                759
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                759
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
                805
            ],
            "inactive_slot": [
                7
            ],
            "makes": [
                260
            ],
            "market_acct": [
                5
            ],
            "market_type": [
                5
            ],
            "orders": [
                351
            ],
            "prices": [
                395
            ],
            "proposal": [
                662
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                759
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                759
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                767
            ],
            "token": [
                903
            ],
            "tokenAcctByAsksTokenAcct": [
                868
            ],
            "tokenAcctByBidsTokenAcct": [
                868
            ],
            "tokenByBaseMintAcct": [
                903
            ],
            "tokenByQuoteMintAcct": [
                903
            ],
            "token_acct": [
                868
            ],
            "twaps": [
                1063
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
                759
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                759
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                805
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
                759
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                759
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
                342
            ],
            "asks_token_acct": [
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_mint_acct": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "bids_token_acct": [
                342
            ],
            "create_tx_sig": [
                342
            ],
            "created_at": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "market_acct": [
                342
            ],
            "market_type": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_mint_acct": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
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
                759
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                759
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                805
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
                759
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                759
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
                342
            ],
            "asks_token_acct": [
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_mint_acct": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "bids_token_acct": [
                342
            ],
            "create_tx_sig": [
                342
            ],
            "created_at": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "market_acct": [
                342
            ],
            "market_type": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_mint_acct": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
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
                298
            ],
            "__typename": [
                5
            ]
        },
        "markets_obj_rel_insert_input": {
            "data": [
                310
            ],
            "on_conflict": [
                317
            ],
            "__typename": [
                5
            ]
        },
        "markets_on_conflict": {
            "constraint": [
                308
            ],
            "update_columns": [
                332
            ],
            "where": [
                307
            ],
            "__typename": [
                5
            ]
        },
        "markets_order_by": {
            "active_slot": [
                342
            ],
            "asks_token_acct": [
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_mint_acct": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "bids_token_acct": [
                342
            ],
            "candles_aggregate": [
                14
            ],
            "create_tx_sig": [
                342
            ],
            "created_at": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "makes_aggregate": [
                259
            ],
            "market_acct": [
                342
            ],
            "market_type": [
                342
            ],
            "orders_aggregate": [
                350
            ],
            "prices_aggregate": [
                394
            ],
            "proposal": [
                664
            ],
            "proposal_acct": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_mint_acct": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
            ],
            "takes_aggregate": [
                766
            ],
            "token": [
                905
            ],
            "tokenAcctByAsksTokenAcct": [
                870
            ],
            "tokenAcctByBidsTokenAcct": [
                870
            ],
            "tokenByBaseMintAcct": [
                905
            ],
            "tokenByQuoteMintAcct": [
                905
            ],
            "token_acct": [
                870
            ],
            "twaps_aggregate": [
                1062
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
                759
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                759
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                805
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
                759
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                759
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
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
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
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
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
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "markets_stream_cursor_input": {
            "initial_value": [
                329
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
                759
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                759
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                805
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
                759
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                759
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
                759
            ],
            "base_taker_fee": [
                759
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                759
            ],
            "quote_taker_fee": [
                759
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
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "markets_update_column": {},
        "markets_updates": {
            "_inc": [
                309
            ],
            "_set": [
                321
            ],
            "where": [
                307
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
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
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
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
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
                342
            ],
            "base_lot_size": [
                342
            ],
            "base_maker_fee": [
                342
            ],
            "base_taker_fee": [
                342
            ],
            "inactive_slot": [
                342
            ],
            "quote_lot_size": [
                342
            ],
            "quote_maker_fee": [
                342
            ],
            "quote_taker_fee": [
                342
            ],
            "quote_tick_size": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                340
            ],
            "_gt": [
                340
            ],
            "_gte": [
                340
            ],
            "_in": [
                340
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                340
            ],
            "_lte": [
                340
            ],
            "_neq": [
                340
            ],
            "_nin": [
                340
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
                805
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
                252
            ],
            "market": [
                298
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
            ],
            "side": [
                5
            ],
            "take": [
                761
            ],
            "transaction": [
                1003
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
            ],
            "user": [
                1139
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate": {
            "aggregate": [
                349
            ],
            "nodes": [
                343
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp": {
            "bool_and": [
                346
            ],
            "bool_or": [
                347
            ],
            "count": [
                348
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_bool_exp_bool_and": {
            "arguments": [
                368
            ],
            "distinct": [
                0
            ],
            "filter": [
                354
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
                369
            ],
            "distinct": [
                0
            ],
            "filter": [
                354
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
                367
            ],
            "distinct": [
                0
            ],
            "filter": [
                354
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
                352
            ],
            "count": [
                3,
                {
                    "columns": [
                        367,
                        "[orders_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                358
            ],
            "min": [
                360
            ],
            "stddev": [
                371
            ],
            "stddev_pop": [
                373
            ],
            "stddev_samp": [
                375
            ],
            "sum": [
                379
            ],
            "var_pop": [
                383
            ],
            "var_samp": [
                385
            ],
            "variance": [
                387
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_order_by": {
            "avg": [
                353
            ],
            "count": [
                342
            ],
            "max": [
                359
            ],
            "min": [
                361
            ],
            "stddev": [
                372
            ],
            "stddev_pop": [
                374
            ],
            "stddev_samp": [
                376
            ],
            "sum": [
                380
            ],
            "var_pop": [
                384
            ],
            "var_samp": [
                386
            ],
            "variance": [
                388
            ],
            "__typename": [
                5
            ]
        },
        "orders_arr_rel_insert_input": {
            "data": [
                357
            ],
            "on_conflict": [
                364
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
                342
            ],
            "filled_base_amount": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "orders_bool_exp": {
            "_and": [
                354
            ],
            "_not": [
                354
            ],
            "_or": [
                354
            ],
            "actor_acct": [
                6
            ],
            "cancel_block": [
                8
            ],
            "cancel_time": [
                806
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
                263
            ],
            "market": [
                307
            ],
            "market_acct": [
                6
            ],
            "order_block": [
                8
            ],
            "order_time": [
                806
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                341
            ],
            "side": [
                6
            ],
            "take": [
                770
            ],
            "transaction": [
                1007
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                806
            ],
            "user": [
                1142
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
                340
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
                805
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
                272
            ],
            "market": [
                316
            ],
            "market_acct": [
                5
            ],
            "order_block": [
                7
            ],
            "order_time": [
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
            ],
            "side": [
                5
            ],
            "take": [
                779
            ],
            "transaction": [
                1014
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
            ],
            "user": [
                1148
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
                805
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
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "orders_max_order_by": {
            "actor_acct": [
                342
            ],
            "cancel_block": [
                342
            ],
            "cancel_time": [
                342
            ],
            "cancel_tx_sig": [
                342
            ],
            "filled_base_amount": [
                342
            ],
            "market_acct": [
                342
            ],
            "order_block": [
                342
            ],
            "order_time": [
                342
            ],
            "order_tx_sig": [
                342
            ],
            "quote_price": [
                342
            ],
            "side": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "updated_at": [
                342
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
                805
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
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "orders_min_order_by": {
            "actor_acct": [
                342
            ],
            "cancel_block": [
                342
            ],
            "cancel_time": [
                342
            ],
            "cancel_tx_sig": [
                342
            ],
            "filled_base_amount": [
                342
            ],
            "market_acct": [
                342
            ],
            "order_block": [
                342
            ],
            "order_time": [
                342
            ],
            "order_tx_sig": [
                342
            ],
            "quote_price": [
                342
            ],
            "side": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "updated_at": [
                342
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
                343
            ],
            "__typename": [
                5
            ]
        },
        "orders_obj_rel_insert_input": {
            "data": [
                357
            ],
            "on_conflict": [
                364
            ],
            "__typename": [
                5
            ]
        },
        "orders_on_conflict": {
            "constraint": [
                355
            ],
            "update_columns": [
                381
            ],
            "where": [
                354
            ],
            "__typename": [
                5
            ]
        },
        "orders_order_by": {
            "actor_acct": [
                342
            ],
            "cancel_block": [
                342
            ],
            "cancel_time": [
                342
            ],
            "cancel_tx_sig": [
                342
            ],
            "filled_base_amount": [
                342
            ],
            "is_active": [
                342
            ],
            "make": [
                274
            ],
            "market": [
                318
            ],
            "market_acct": [
                342
            ],
            "order_block": [
                342
            ],
            "order_time": [
                342
            ],
            "order_tx_sig": [
                342
            ],
            "quote_price": [
                342
            ],
            "side": [
                342
            ],
            "take": [
                781
            ],
            "transaction": [
                1016
            ],
            "unfilled_base_amount": [
                342
            ],
            "updated_at": [
                342
            ],
            "user": [
                1150
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
                805
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
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
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
                342
            ],
            "filled_base_amount": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                342
            ],
            "filled_base_amount": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                342
            ],
            "filled_base_amount": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "orders_stream_cursor_input": {
            "initial_value": [
                378
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
                805
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
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
            ],
            "side": [
                5
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                805
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
                340
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
                342
            ],
            "filled_base_amount": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "orders_update_column": {},
        "orders_updates": {
            "_inc": [
                356
            ],
            "_set": [
                370
            ],
            "where": [
                354
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
                342
            ],
            "filled_base_amount": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                342
            ],
            "filled_base_amount": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                342
            ],
            "filled_base_amount": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "unfilled_base_amount": [
                342
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
                805
            ],
            "created_by": [
                5
            ],
            "market": [
                298
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                393
            ],
            "nodes": [
                389
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_bool_exp": {
            "count": [
                392
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_bool_exp_count": {
            "arguments": [
                436
            ],
            "distinct": [
                0
            ],
            "filter": [
                398
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
                396
            ],
            "count": [
                3,
                {
                    "columns": [
                        436,
                        "[prices_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                428
            ],
            "min": [
                430
            ],
            "stddev": [
                438
            ],
            "stddev_pop": [
                440
            ],
            "stddev_samp": [
                442
            ],
            "sum": [
                446
            ],
            "var_pop": [
                450
            ],
            "var_samp": [
                452
            ],
            "variance": [
                454
            ],
            "__typename": [
                5
            ]
        },
        "prices_aggregate_order_by": {
            "avg": [
                397
            ],
            "count": [
                342
            ],
            "max": [
                429
            ],
            "min": [
                431
            ],
            "stddev": [
                439
            ],
            "stddev_pop": [
                441
            ],
            "stddev_samp": [
                443
            ],
            "sum": [
                447
            ],
            "var_pop": [
                451
            ],
            "var_samp": [
                453
            ],
            "variance": [
                455
            ],
            "__typename": [
                5
            ]
        },
        "prices_arr_rel_insert_input": {
            "data": [
                427
            ],
            "on_conflict": [
                433
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
                342
            ],
            "price": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "prices_bool_exp": {
            "_and": [
                398
            ],
            "_not": [
                398
            ],
            "_or": [
                398
            ],
            "base_amount": [
                8
            ],
            "created_at": [
                806
            ],
            "created_by": [
                6
            ],
            "market": [
                307
            ],
            "market_acct": [
                6
            ],
            "price": [
                341
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
                805
            ],
            "market": [
                298
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                401
            ],
            "nodes": [
                399
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_aggregate_fields": {
            "avg": [
                402
            ],
            "count": [
                3,
                {
                    "columns": [
                        412,
                        "[prices_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                407
            ],
            "min": [
                408
            ],
            "stddev": [
                414
            ],
            "stddev_pop": [
                415
            ],
            "stddev_samp": [
                416
            ],
            "sum": [
                419
            ],
            "var_pop": [
                422
            ],
            "var_samp": [
                423
            ],
            "variance": [
                424
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
                403
            ],
            "_not": [
                403
            ],
            "_or": [
                403
            ],
            "base_amount": [
                8
            ],
            "interv": [
                806
            ],
            "market": [
                307
            ],
            "market_acct": [
                6
            ],
            "price": [
                341
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
                340
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
                805
            ],
            "market": [
                316
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                805
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                805
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                399
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_on_conflict": {
            "constraint": [
                404
            ],
            "update_columns": [
                420
            ],
            "where": [
                403
            ],
            "__typename": [
                5
            ]
        },
        "prices_chart_data_order_by": {
            "base_amount": [
                342
            ],
            "interv": [
                342
            ],
            "market": [
                318
            ],
            "market_acct": [
                342
            ],
            "price": [
                342
            ],
            "prices_type": [
                342
            ],
            "quote_amount": [
                342
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
                805
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                418
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
                805
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                340
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
                405
            ],
            "_set": [
                413
            ],
            "where": [
                403
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
                340
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
                805
            ],
            "created_by": [
                5
            ],
            "market": [
                316
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                805
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                342
            ],
            "created_at": [
                342
            ],
            "created_by": [
                342
            ],
            "market_acct": [
                342
            ],
            "price": [
                342
            ],
            "prices_type": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
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
                805
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                342
            ],
            "created_at": [
                342
            ],
            "created_by": [
                342
            ],
            "market_acct": [
                342
            ],
            "price": [
                342
            ],
            "prices_type": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
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
                389
            ],
            "__typename": [
                5
            ]
        },
        "prices_on_conflict": {
            "constraint": [
                425
            ],
            "update_columns": [
                448
            ],
            "where": [
                398
            ],
            "__typename": [
                5
            ]
        },
        "prices_order_by": {
            "base_amount": [
                342
            ],
            "created_at": [
                342
            ],
            "created_by": [
                342
            ],
            "market": [
                318
            ],
            "market_acct": [
                342
            ],
            "price": [
                342
            ],
            "prices_type": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "prices_pk_columns_input": {
            "created_at": [
                805
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
                805
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                342
            ],
            "price": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
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
                342
            ],
            "price": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
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
                342
            ],
            "price": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "prices_stream_cursor_input": {
            "initial_value": [
                445
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
                805
            ],
            "created_by": [
                5
            ],
            "market_acct": [
                5
            ],
            "price": [
                340
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
                340
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
                342
            ],
            "price": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "prices_update_column": {},
        "prices_updates": {
            "_inc": [
                426
            ],
            "_set": [
                437
            ],
            "where": [
                398
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
                342
            ],
            "price": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
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
                342
            ],
            "price": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
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
                342
            ],
            "price": [
                342
            ],
            "quote_amount": [
                342
            ],
            "updated_slot": [
                342
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
                515
            ],
            "programByConditionalVaultAcct": [
                515
            ],
            "programByMigratorAcct": [
                515
            ],
            "programByPricingModelAcct": [
                515
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
                470
            ],
            "nodes": [
                456
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp": {
            "avg": [
                459
            ],
            "corr": [
                460
            ],
            "count": [
                462
            ],
            "covar_samp": [
                463
            ],
            "max": [
                465
            ],
            "min": [
                466
            ],
            "stddev_samp": [
                467
            ],
            "sum": [
                468
            ],
            "var_samp": [
                469
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_avg": {
            "arguments": [
                488
            ],
            "distinct": [
                0
            ],
            "filter": [
                475
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
                461
            ],
            "distinct": [
                0
            ],
            "filter": [
                475
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
                489
            ],
            "Y": [
                489
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_count": {
            "arguments": [
                487
            ],
            "distinct": [
                0
            ],
            "filter": [
                475
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
                464
            ],
            "distinct": [
                0
            ],
            "filter": [
                475
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
                490
            ],
            "Y": [
                490
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_max": {
            "arguments": [
                491
            ],
            "distinct": [
                0
            ],
            "filter": [
                475
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
                492
            ],
            "distinct": [
                0
            ],
            "filter": [
                475
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
                493
            ],
            "distinct": [
                0
            ],
            "filter": [
                475
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
                494
            ],
            "distinct": [
                0
            ],
            "filter": [
                475
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
                495
            ],
            "distinct": [
                0
            ],
            "filter": [
                475
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
                473
            ],
            "count": [
                3,
                {
                    "columns": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                479
            ],
            "min": [
                481
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
        "program_system_aggregate_order_by": {
            "avg": [
                474
            ],
            "count": [
                342
            ],
            "max": [
                480
            ],
            "min": [
                482
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
        "program_system_arr_rel_insert_input": {
            "data": [
                478
            ],
            "on_conflict": [
                484
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "program_system_bool_exp": {
            "_and": [
                475
            ],
            "_not": [
                475
            ],
            "_or": [
                475
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
                526
            ],
            "programByConditionalVaultAcct": [
                526
            ],
            "programByMigratorAcct": [
                526
            ],
            "programByPricingModelAcct": [
                526
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
                342
            ],
            "conditional_vault_acct": [
                342
            ],
            "migrator_acct": [
                342
            ],
            "pricing_model_acct": [
                342
            ],
            "system_version": [
                342
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
                342
            ],
            "conditional_vault_acct": [
                342
            ],
            "migrator_acct": [
                342
            ],
            "pricing_model_acct": [
                342
            ],
            "system_version": [
                342
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
                456
            ],
            "__typename": [
                5
            ]
        },
        "program_system_on_conflict": {
            "constraint": [
                476
            ],
            "update_columns": [
                507
            ],
            "where": [
                475
            ],
            "__typename": [
                5
            ]
        },
        "program_system_order_by": {
            "autocrat_acct": [
                342
            ],
            "conditional_vault_acct": [
                342
            ],
            "migrator_acct": [
                342
            ],
            "pricing_model_acct": [
                342
            ],
            "program": [
                528
            ],
            "programByConditionalVaultAcct": [
                528
            ],
            "programByMigratorAcct": [
                528
            ],
            "programByPricingModelAcct": [
                528
            ],
            "system_version": [
                342
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
                342
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
                342
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "program_system_stream_cursor_input": {
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "program_system_update_column": {},
        "program_system_updates": {
            "_inc": [
                477
            ],
            "_set": [
                496
            ],
            "where": [
                475
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
                342
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
                342
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "programs": {
            "created_at": [
                805
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
                803
            ],
            "programSystemsByConditionalVaultAcct": [
                456,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                457,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "programSystemsByMigratorAcct": [
                456,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "programSystemsByMigratorAcct_aggregate": [
                457,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "programSystemsByPricingModelAcct": [
                456,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                457,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
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
                456,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "program_systems_aggregate": [
                457,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
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
                517
            ],
            "nodes": [
                515
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate_fields": {
            "avg": [
                518
            ],
            "count": [
                3,
                {
                    "columns": [
                        530,
                        "[programs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                523
            ],
            "min": [
                524
            ],
            "stddev": [
                532
            ],
            "stddev_pop": [
                533
            ],
            "stddev_samp": [
                534
            ],
            "sum": [
                537
            ],
            "var_pop": [
                540
            ],
            "var_samp": [
                541
            ],
            "variance": [
                542
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
                519
            ],
            "_not": [
                519
            ],
            "_or": [
                519
            ],
            "created_at": [
                806
            ],
            "daos": [
                160
            ],
            "daos_aggregate": [
                153
            ],
            "deployed_at": [
                804
            ],
            "programSystemsByConditionalVaultAcct": [
                475
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                458
            ],
            "programSystemsByMigratorAcct": [
                475
            ],
            "programSystemsByMigratorAcct_aggregate": [
                458
            ],
            "programSystemsByPricingModelAcct": [
                475
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                458
            ],
            "program_acct": [
                6
            ],
            "program_name": [
                6
            ],
            "program_systems": [
                475
            ],
            "program_systems_aggregate": [
                458
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
                805
            ],
            "daos": [
                157
            ],
            "deployed_at": [
                803
            ],
            "programSystemsByConditionalVaultAcct": [
                472
            ],
            "programSystemsByMigratorAcct": [
                472
            ],
            "programSystemsByPricingModelAcct": [
                472
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                472
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
                805
            ],
            "deployed_at": [
                803
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
                805
            ],
            "deployed_at": [
                803
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
                515
            ],
            "__typename": [
                5
            ]
        },
        "programs_obj_rel_insert_input": {
            "data": [
                522
            ],
            "on_conflict": [
                527
            ],
            "__typename": [
                5
            ]
        },
        "programs_on_conflict": {
            "constraint": [
                520
            ],
            "update_columns": [
                538
            ],
            "where": [
                519
            ],
            "__typename": [
                5
            ]
        },
        "programs_order_by": {
            "created_at": [
                342
            ],
            "daos_aggregate": [
                156
            ],
            "deployed_at": [
                342
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                471
            ],
            "programSystemsByMigratorAcct_aggregate": [
                471
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                471
            ],
            "program_acct": [
                342
            ],
            "program_name": [
                342
            ],
            "program_systems_aggregate": [
                471
            ],
            "version": [
                342
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
                805
            ],
            "deployed_at": [
                803
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
                536
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
                805
            ],
            "deployed_at": [
                803
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
                521
            ],
            "_set": [
                531
            ],
            "where": [
                519
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
                247
            ],
            "bar_start_time": [
                805
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market": [
                298
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                340
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market": [
                298
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                340
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
                545
            ],
            "nodes": [
                543
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_aggregate_fields": {
            "avg": [
                546
            ],
            "count": [
                3,
                {
                    "columns": [
                        557,
                        "[proposal_bars_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                551
            ],
            "min": [
                552
            ],
            "stddev": [
                559
            ],
            "stddev_pop": [
                560
            ],
            "stddev_samp": [
                561
            ],
            "sum": [
                564
            ],
            "var_pop": [
                567
            ],
            "var_samp": [
                568
            ],
            "variance": [
                569
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
                547
            ],
            "_not": [
                547
            ],
            "_or": [
                547
            ],
            "bar_size": [
                248
            ],
            "bar_start_time": [
                806
            ],
            "fail_base_amount": [
                8
            ],
            "fail_market": [
                307
            ],
            "fail_market_acct": [
                6
            ],
            "fail_price": [
                341
            ],
            "fail_quote_amount": [
                8
            ],
            "pass_base_amount": [
                8
            ],
            "pass_market": [
                307
            ],
            "pass_market_acct": [
                6
            ],
            "pass_price": [
                341
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
                340
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_price": [
                340
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
                247
            ],
            "bar_start_time": [
                805
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market": [
                316
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                340
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_market": [
                316
            ],
            "pass_market_acct": [
                5
            ],
            "pass_price": [
                340
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
                805
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                340
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
                340
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
                805
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                340
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
                340
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
                543
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_on_conflict": {
            "constraint": [
                548
            ],
            "update_columns": [
                565
            ],
            "where": [
                547
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_order_by": {
            "bar_size": [
                342
            ],
            "bar_start_time": [
                342
            ],
            "fail_base_amount": [
                342
            ],
            "fail_market": [
                318
            ],
            "fail_market_acct": [
                342
            ],
            "fail_price": [
                342
            ],
            "fail_quote_amount": [
                342
            ],
            "pass_base_amount": [
                342
            ],
            "pass_market": [
                318
            ],
            "pass_market_acct": [
                342
            ],
            "pass_price": [
                342
            ],
            "pass_quote_amount": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_pk_columns_input": {
            "bar_size": [
                247
            ],
            "bar_start_time": [
                805
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
                247
            ],
            "bar_start_time": [
                805
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                340
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
                340
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
                563
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
                247
            ],
            "bar_start_time": [
                805
            ],
            "fail_base_amount": [
                7
            ],
            "fail_market_acct": [
                5
            ],
            "fail_price": [
                340
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
                340
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
                340
            ],
            "fail_quote_amount": [
                7
            ],
            "pass_base_amount": [
                7
            ],
            "pass_price": [
                340
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
                549
            ],
            "_set": [
                558
            ],
            "where": [
                547
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
                249,
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
                634
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
                574
            ],
            "nodes": [
                570
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp": {
            "count": [
                573
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp_count": {
            "arguments": [
                596
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
        "proposal_details_aggregate_fields": {
            "avg": [
                578
            ],
            "count": [
                3,
                {
                    "columns": [
                        596,
                        "[proposal_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                587
            ],
            "min": [
                589
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
        "proposal_details_aggregate_order_by": {
            "avg": [
                579
            ],
            "count": [
                342
            ],
            "max": [
                588
            ],
            "min": [
                590
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
        "proposal_details_append_input": {
            "categories": [
                249
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_arr_rel_insert_input": {
            "data": [
                586
            ],
            "on_conflict": [
                592
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_bool_exp": {
            "_and": [
                580
            ],
            "_not": [
                580
            ],
            "_or": [
                580
            ],
            "base_cond_vault_acct": [
                6
            ],
            "categories": [
                251
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
                653
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
                249
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
                662
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
                342
            ],
            "content": [
                342
            ],
            "description": [
                342
            ],
            "fail_market_acct": [
                342
            ],
            "pass_market_acct": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "proposal_id": [
                342
            ],
            "proposer_acct": [
                342
            ],
            "quote_cond_vault_acct": [
                342
            ],
            "slug": [
                342
            ],
            "title": [
                342
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
                342
            ],
            "content": [
                342
            ],
            "description": [
                342
            ],
            "fail_market_acct": [
                342
            ],
            "pass_market_acct": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "proposal_id": [
                342
            ],
            "proposer_acct": [
                342
            ],
            "quote_cond_vault_acct": [
                342
            ],
            "slug": [
                342
            ],
            "title": [
                342
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
                570
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_on_conflict": {
            "constraint": [
                581
            ],
            "update_columns": [
                608
            ],
            "where": [
                580
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_order_by": {
            "base_cond_vault_acct": [
                342
            ],
            "categories": [
                342
            ],
            "content": [
                342
            ],
            "description": [
                342
            ],
            "fail_market_acct": [
                342
            ],
            "pass_market_acct": [
                342
            ],
            "proposal": [
                664
            ],
            "proposal_acct": [
                342
            ],
            "proposal_id": [
                342
            ],
            "proposer_acct": [
                342
            ],
            "quote_cond_vault_acct": [
                342
            ],
            "slug": [
                342
            ],
            "title": [
                342
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
                249
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
                249
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
                342
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
                342
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_input": {
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
        "proposal_details_stream_cursor_value_input": {
            "base_cond_vault_acct": [
                5
            ],
            "categories": [
                249
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_update_column": {},
        "proposal_details_updates": {
            "_append": [
                576
            ],
            "_delete_at_path": [
                582
            ],
            "_delete_elem": [
                583
            ],
            "_delete_key": [
                584
            ],
            "_inc": [
                585
            ],
            "_prepend": [
                595
            ],
            "_set": [
                597
            ],
            "where": [
                580
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
                342
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
                342
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
                342
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
                340
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                340
            ],
            "proposalTradeVolume": [
                634
            ],
            "proposalTradeVolumeFailMarket": [
                298
            ],
            "proposalTradeVolumePassMarket": [
                298
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
                618
            ],
            "nodes": [
                616
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_aggregate_fields": {
            "avg": [
                619
            ],
            "count": [
                3,
                {
                    "columns": [
                        624,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                621
            ],
            "min": [
                622
            ],
            "stddev": [
                625
            ],
            "stddev_pop": [
                626
            ],
            "stddev_samp": [
                627
            ],
            "sum": [
                630
            ],
            "var_pop": [
                631
            ],
            "var_samp": [
                632
            ],
            "variance": [
                633
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
                620
            ],
            "_not": [
                620
            ],
            "_or": [
                620
            ],
            "fail_market_acct": [
                6
            ],
            "fail_volume": [
                341
            ],
            "pass_market_acct": [
                6
            ],
            "pass_volume": [
                341
            ],
            "proposalTradeVolume": [
                653
            ],
            "proposalTradeVolumeFailMarket": [
                307
            ],
            "proposalTradeVolumePassMarket": [
                307
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
                340
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                340
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
                340
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                340
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
                342
            ],
            "fail_volume": [
                342
            ],
            "pass_market_acct": [
                342
            ],
            "pass_volume": [
                342
            ],
            "proposalTradeVolume": [
                664
            ],
            "proposalTradeVolumeFailMarket": [
                318
            ],
            "proposalTradeVolumePassMarket": [
                318
            ],
            "proposal_acct": [
                342
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
                629
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
                340
            ],
            "pass_market_acct": [
                5
            ],
            "pass_volume": [
                340
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
                340
            ],
            "pass_volume": [
                340
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
                805
            ],
            "conditionalVaultByQuoteVault": [
                92
            ],
            "conditional_vault": [
                92
            ],
            "created_at": [
                805
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
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                805
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                298,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "markets_aggregate": [
                299,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
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
                570,
                {
                    "distinct_on": [
                        596,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        593,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposal_details_aggregate": [
                571,
                {
                    "distinct_on": [
                        596,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        593,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        580
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
                694,
                {
                    "distinct_on": [
                        715,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        713,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        703
                    ]
                }
            ],
            "reactions_aggregate": [
                695,
                {
                    "distinct_on": [
                        715,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        713,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        703
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
                1057,
                {
                    "distinct_on": [
                        1078,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1076,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1066
                    ]
                }
            ],
            "twaps_aggregate": [
                1058,
                {
                    "distinct_on": [
                        1078,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1076,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1066
                    ]
                }
            ],
            "updated_at": [
                805
            ],
            "user_performances": [
                1098,
                {
                    "distinct_on": [
                        1119,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1117,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_performances_aggregate": [
                1099,
                {
                    "distinct_on": [
                        1119,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1117,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate": {
            "aggregate": [
                648
            ],
            "nodes": [
                634
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp": {
            "avg": [
                637
            ],
            "corr": [
                638
            ],
            "count": [
                640
            ],
            "covar_samp": [
                641
            ],
            "max": [
                643
            ],
            "min": [
                644
            ],
            "stddev_samp": [
                645
            ],
            "sum": [
                646
            ],
            "var_samp": [
                647
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_avg": {
            "arguments": [
                667
            ],
            "distinct": [
                0
            ],
            "filter": [
                653
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
                639
            ],
            "distinct": [
                0
            ],
            "filter": [
                653
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
                668
            ],
            "Y": [
                668
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_count": {
            "arguments": [
                666
            ],
            "distinct": [
                0
            ],
            "filter": [
                653
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
                642
            ],
            "distinct": [
                0
            ],
            "filter": [
                653
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
                669
            ],
            "Y": [
                669
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_max": {
            "arguments": [
                670
            ],
            "distinct": [
                0
            ],
            "filter": [
                653
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
                671
            ],
            "distinct": [
                0
            ],
            "filter": [
                653
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
                672
            ],
            "distinct": [
                0
            ],
            "filter": [
                653
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
                673
            ],
            "distinct": [
                0
            ],
            "filter": [
                653
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
                674
            ],
            "distinct": [
                0
            ],
            "filter": [
                653
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
                651
            ],
            "count": [
                3,
                {
                    "columns": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                657
            ],
            "min": [
                659
            ],
            "stddev": [
                676
            ],
            "stddev_pop": [
                678
            ],
            "stddev_samp": [
                680
            ],
            "sum": [
                684
            ],
            "var_pop": [
                688
            ],
            "var_samp": [
                690
            ],
            "variance": [
                692
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_order_by": {
            "avg": [
                652
            ],
            "count": [
                342
            ],
            "max": [
                658
            ],
            "min": [
                660
            ],
            "stddev": [
                677
            ],
            "stddev_pop": [
                679
            ],
            "stddev_samp": [
                681
            ],
            "sum": [
                685
            ],
            "var_pop": [
                689
            ],
            "var_samp": [
                691
            ],
            "variance": [
                693
            ],
            "__typename": [
                5
            ]
        },
        "proposals_arr_rel_insert_input": {
            "data": [
                656
            ],
            "on_conflict": [
                663
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
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "proposal_num": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposals_bool_exp": {
            "_and": [
                653
            ],
            "_not": [
                653
            ],
            "_or": [
                653
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
                806
            ],
            "conditionalVaultByQuoteVault": [
                99
            ],
            "conditional_vault": [
                99
            ],
            "created_at": [
                806
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
            "duration_in_slots": [
                8
            ],
            "end_slot": [
                8
            ],
            "ended_at": [
                806
            ],
            "fail_market_acct": [
                6
            ],
            "initial_slot": [
                8
            ],
            "markets": [
                307
            ],
            "markets_aggregate": [
                300
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
                580
            ],
            "proposal_details_aggregate": [
                572
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
                703
            ],
            "reactions_aggregate": [
                696
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
                1066
            ],
            "twaps_aggregate": [
                1059
            ],
            "updated_at": [
                806
            ],
            "user_performances": [
                1107
            ],
            "user_performances_aggregate": [
                1100
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
                193
            ],
            "base_vault": [
                5
            ],
            "comments": [
                56
            ],
            "completed_at": [
                805
            ],
            "conditionalVaultByQuoteVault": [
                107
            ],
            "conditional_vault": [
                107
            ],
            "created_at": [
                805
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
            "duration_in_slots": [
                7
            ],
            "end_slot": [
                7
            ],
            "ended_at": [
                805
            ],
            "fail_market_acct": [
                5
            ],
            "initial_slot": [
                7
            ],
            "markets": [
                304
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
                577
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
                700
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
                1063
            ],
            "updated_at": [
                805
            ],
            "user_performances": [
                1104
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
                805
            ],
            "created_at": [
                805
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
                805
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
                805
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_order_by": {
            "autocrat_version": [
                342
            ],
            "base_vault": [
                342
            ],
            "completed_at": [
                342
            ],
            "created_at": [
                342
            ],
            "dao_acct": [
                342
            ],
            "description_url": [
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "ended_at": [
                342
            ],
            "fail_market_acct": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_market_acct": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "pricing_model_fail_acct": [
                342
            ],
            "pricing_model_pass_acct": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "proposal_num": [
                342
            ],
            "proposer_acct": [
                342
            ],
            "quote_vault": [
                342
            ],
            "status": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
            ],
            "updated_at": [
                342
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
                805
            ],
            "created_at": [
                805
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
                805
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
                805
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_order_by": {
            "autocrat_version": [
                342
            ],
            "base_vault": [
                342
            ],
            "completed_at": [
                342
            ],
            "created_at": [
                342
            ],
            "dao_acct": [
                342
            ],
            "description_url": [
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "ended_at": [
                342
            ],
            "fail_market_acct": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_market_acct": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "pricing_model_fail_acct": [
                342
            ],
            "pricing_model_pass_acct": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "proposal_num": [
                342
            ],
            "proposer_acct": [
                342
            ],
            "quote_vault": [
                342
            ],
            "status": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
            ],
            "updated_at": [
                342
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
                634
            ],
            "__typename": [
                5
            ]
        },
        "proposals_obj_rel_insert_input": {
            "data": [
                656
            ],
            "on_conflict": [
                663
            ],
            "__typename": [
                5
            ]
        },
        "proposals_on_conflict": {
            "constraint": [
                654
            ],
            "update_columns": [
                686
            ],
            "where": [
                653
            ],
            "__typename": [
                5
            ]
        },
        "proposals_order_by": {
            "autocrat_version": [
                342
            ],
            "base_vault": [
                342
            ],
            "comments_aggregate": [
                55
            ],
            "completed_at": [
                342
            ],
            "conditionalVaultByQuoteVault": [
                109
            ],
            "conditional_vault": [
                109
            ],
            "created_at": [
                342
            ],
            "dao": [
                171
            ],
            "dao_acct": [
                342
            ],
            "description_url": [
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "ended_at": [
                342
            ],
            "fail_market_acct": [
                342
            ],
            "initial_slot": [
                342
            ],
            "markets_aggregate": [
                303
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_market_acct": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "pricing_model_fail_acct": [
                342
            ],
            "pricing_model_pass_acct": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "proposal_details_aggregate": [
                575
            ],
            "proposal_num": [
                342
            ],
            "proposer_acct": [
                342
            ],
            "quote_vault": [
                342
            ],
            "reactions_aggregate": [
                699
            ],
            "status": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
            ],
            "twaps_aggregate": [
                1062
            ],
            "updated_at": [
                342
            ],
            "user_performances_aggregate": [
                1103
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
                805
            ],
            "created_at": [
                805
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
                805
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
                805
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
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "proposal_num": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "proposal_num": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "proposal_num": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_input": {
            "initial_value": [
                683
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
                805
            ],
            "created_at": [
                805
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
                805
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
                805
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_fields": {
            "autocrat_version": [
                193
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
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "proposal_num": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposals_update_column": {},
        "proposals_updates": {
            "_inc": [
                655
            ],
            "_set": [
                675
            ],
            "where": [
                653
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
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "proposal_num": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "proposal_num": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                342
            ],
            "duration_in_slots": [
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "min_base_futarchic_liquidity": [
                342
            ],
            "min_quote_futarchic_liquidity": [
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "proposal_num": [
                342
            ],
            "twap_initial_observation": [
                342
            ],
            "twap_max_observation_change_per_update": [
                342
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
                634
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1158
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate": {
            "aggregate": [
                698
            ],
            "nodes": [
                694
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp": {
            "count": [
                697
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp_count": {
            "arguments": [
                715
            ],
            "distinct": [
                0
            ],
            "filter": [
                703
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
                701
            ],
            "count": [
                3,
                {
                    "columns": [
                        715,
                        "[reactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                707
            ],
            "min": [
                709
            ],
            "stddev": [
                717
            ],
            "stddev_pop": [
                719
            ],
            "stddev_samp": [
                721
            ],
            "sum": [
                725
            ],
            "var_pop": [
                729
            ],
            "var_samp": [
                731
            ],
            "variance": [
                733
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_order_by": {
            "avg": [
                702
            ],
            "count": [
                342
            ],
            "max": [
                708
            ],
            "min": [
                710
            ],
            "stddev": [
                718
            ],
            "stddev_pop": [
                720
            ],
            "stddev_samp": [
                722
            ],
            "sum": [
                726
            ],
            "var_pop": [
                730
            ],
            "var_samp": [
                732
            ],
            "variance": [
                734
            ],
            "__typename": [
                5
            ]
        },
        "reactions_arr_rel_insert_input": {
            "data": [
                706
            ],
            "on_conflict": [
                712
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "reactions_bool_exp": {
            "_and": [
                703
            ],
            "_not": [
                703
            ],
            "_or": [
                703
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "proposal": [
                653
            ],
            "proposal_acct": [
                6
            ],
            "reaction": [
                6
            ],
            "reaction_id": [
                1159
            ],
            "reactor_acct": [
                6
            ],
            "updated_at": [
                806
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
                662
            ],
            "proposal_acct": [
                5
            ],
            "reaction": [
                5
            ],
            "reaction_id": [
                1158
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                805
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
                1158
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "reactions_max_order_by": {
            "comment_id": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "reaction": [
                342
            ],
            "reaction_id": [
                342
            ],
            "reactor_acct": [
                342
            ],
            "updated_at": [
                342
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
                1158
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "reactions_min_order_by": {
            "comment_id": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "reaction": [
                342
            ],
            "reaction_id": [
                342
            ],
            "reactor_acct": [
                342
            ],
            "updated_at": [
                342
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
                694
            ],
            "__typename": [
                5
            ]
        },
        "reactions_on_conflict": {
            "constraint": [
                704
            ],
            "update_columns": [
                727
            ],
            "where": [
                703
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
                342
            ],
            "proposal": [
                664
            ],
            "proposal_acct": [
                342
            ],
            "reaction": [
                342
            ],
            "reaction_id": [
                342
            ],
            "reactor_acct": [
                342
            ],
            "updated_at": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "reactions_pk_columns_input": {
            "reaction_id": [
                1158
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
                1158
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                805
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
                342
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
                342
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "reactions_stream_cursor_input": {
            "initial_value": [
                724
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
                1158
            ],
            "reactor_acct": [
                5
            ],
            "updated_at": [
                805
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "reactions_update_column": {},
        "reactions_updates": {
            "_inc": [
                705
            ],
            "_set": [
                716
            ],
            "where": [
                703
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
                342
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
                342
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "sessions": {
            "created_at": [
                805
            ],
            "expires_at": [
                803
            ],
            "id": [
                1158
            ],
            "user": [
                1139
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
                739
            ],
            "nodes": [
                735
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp": {
            "count": [
                738
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp_count": {
            "arguments": [
                753
            ],
            "distinct": [
                0
            ],
            "filter": [
                742
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
                        753,
                        "[sessions_select_column!]"
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
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_order_by": {
            "count": [
                342
            ],
            "max": [
                746
            ],
            "min": [
                748
            ],
            "__typename": [
                5
            ]
        },
        "sessions_arr_rel_insert_input": {
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
        "sessions_bool_exp": {
            "_and": [
                742
            ],
            "_not": [
                742
            ],
            "_or": [
                742
            ],
            "created_at": [
                806
            ],
            "expires_at": [
                804
            ],
            "id": [
                1159
            ],
            "user": [
                1142
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
                805
            ],
            "expires_at": [
                803
            ],
            "id": [
                1158
            ],
            "user": [
                1148
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
                805
            ],
            "expires_at": [
                803
            ],
            "id": [
                1158
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
                342
            ],
            "expires_at": [
                342
            ],
            "id": [
                342
            ],
            "user_acct": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "sessions_min_fields": {
            "created_at": [
                805
            ],
            "expires_at": [
                803
            ],
            "id": [
                1158
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
                342
            ],
            "expires_at": [
                342
            ],
            "id": [
                342
            ],
            "user_acct": [
                342
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
                735
            ],
            "__typename": [
                5
            ]
        },
        "sessions_on_conflict": {
            "constraint": [
                743
            ],
            "update_columns": [
                757
            ],
            "where": [
                742
            ],
            "__typename": [
                5
            ]
        },
        "sessions_order_by": {
            "created_at": [
                342
            ],
            "expires_at": [
                342
            ],
            "id": [
                342
            ],
            "user": [
                1150
            ],
            "user_acct": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "sessions_pk_columns_input": {
            "id": [
                1158
            ],
            "__typename": [
                5
            ]
        },
        "sessions_select_column": {},
        "sessions_set_input": {
            "created_at": [
                805
            ],
            "expires_at": [
                803
            ],
            "id": [
                1158
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
                756
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
                805
            ],
            "expires_at": [
                803
            ],
            "id": [
                1158
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
                754
            ],
            "where": [
                742
            ],
            "__typename": [
                5
            ]
        },
        "smallint": {},
        "smallint_comparison_exp": {
            "_eq": [
                759
            ],
            "_gt": [
                759
            ],
            "_gte": [
                759
            ],
            "_in": [
                759
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                759
            ],
            "_lte": [
                759
            ],
            "_neq": [
                759
            ],
            "_nin": [
                759
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
                252
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
                298
            ],
            "market_acct": [
                5
            ],
            "order": [
                343
            ],
            "order_block": [
                7
            ],
            "order_time": [
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
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
                765
            ],
            "nodes": [
                761
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp": {
            "count": [
                764
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp_count": {
            "arguments": [
                783
            ],
            "distinct": [
                0
            ],
            "filter": [
                770
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
                768
            ],
            "count": [
                3,
                {
                    "columns": [
                        783,
                        "[takes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                774
            ],
            "min": [
                776
            ],
            "stddev": [
                785
            ],
            "stddev_pop": [
                787
            ],
            "stddev_samp": [
                789
            ],
            "sum": [
                793
            ],
            "var_pop": [
                797
            ],
            "var_samp": [
                799
            ],
            "variance": [
                801
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_order_by": {
            "avg": [
                769
            ],
            "count": [
                342
            ],
            "max": [
                775
            ],
            "min": [
                777
            ],
            "stddev": [
                786
            ],
            "stddev_pop": [
                788
            ],
            "stddev_samp": [
                790
            ],
            "sum": [
                794
            ],
            "var_pop": [
                798
            ],
            "var_samp": [
                800
            ],
            "variance": [
                802
            ],
            "__typename": [
                5
            ]
        },
        "takes_arr_rel_insert_input": {
            "data": [
                773
            ],
            "on_conflict": [
                780
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "takes_bool_exp": {
            "_and": [
                770
            ],
            "_not": [
                770
            ],
            "_or": [
                770
            ],
            "base_amount": [
                8
            ],
            "make": [
                263
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
                307
            ],
            "market_acct": [
                6
            ],
            "order": [
                354
            ],
            "order_block": [
                8
            ],
            "order_time": [
                806
            ],
            "order_tx_sig": [
                6
            ],
            "quote_price": [
                341
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
                340
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
                272
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
                316
            ],
            "market_acct": [
                5
            ],
            "order": [
                363
            ],
            "order_block": [
                7
            ],
            "order_time": [
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
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
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_order_tx_sig": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "market_acct": [
                342
            ],
            "order_block": [
                342
            ],
            "order_time": [
                342
            ],
            "order_tx_sig": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
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
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_order_tx_sig": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "market_acct": [
                342
            ],
            "order_block": [
                342
            ],
            "order_time": [
                342
            ],
            "order_tx_sig": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
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
                761
            ],
            "__typename": [
                5
            ]
        },
        "takes_obj_rel_insert_input": {
            "data": [
                773
            ],
            "on_conflict": [
                780
            ],
            "__typename": [
                5
            ]
        },
        "takes_on_conflict": {
            "constraint": [
                771
            ],
            "update_columns": [
                795
            ],
            "where": [
                770
            ],
            "__typename": [
                5
            ]
        },
        "takes_order_by": {
            "base_amount": [
                342
            ],
            "make": [
                274
            ],
            "maker_base_fee": [
                342
            ],
            "maker_order_tx_sig": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "market": [
                318
            ],
            "market_acct": [
                342
            ],
            "order": [
                365
            ],
            "order_block": [
                342
            ],
            "order_time": [
                342
            ],
            "order_tx_sig": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
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
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "takes_stream_cursor_input": {
            "initial_value": [
                792
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
                805
            ],
            "order_tx_sig": [
                5
            ],
            "quote_price": [
                340
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
                340
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "takes_update_column": {},
        "takes_updates": {
            "_inc": [
                772
            ],
            "_set": [
                784
            ],
            "where": [
                770
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
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
                342
            ],
            "maker_base_fee": [
                342
            ],
            "maker_quote_fee": [
                342
            ],
            "order_block": [
                342
            ],
            "quote_price": [
                342
            ],
            "taker_base_fee": [
                342
            ],
            "taker_quote_fee": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                803
            ],
            "_gt": [
                803
            ],
            "_gte": [
                803
            ],
            "_in": [
                803
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                803
            ],
            "_lte": [
                803
            ],
            "_neq": [
                803
            ],
            "_nin": [
                803
            ],
            "__typename": [
                5
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                805
            ],
            "_gt": [
                805
            ],
            "_gte": [
                805
            ],
            "_in": [
                805
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                805
            ],
            "_lte": [
                805
            ],
            "_neq": [
                805
            ],
            "_nin": [
                805
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
                805
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
                892
            ],
            "tokenAcctByTokenAcct": [
                850
            ],
            "token_acct": [
                5
            ],
            "transaction": [
                1003
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
                811
            ],
            "nodes": [
                807
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp": {
            "count": [
                810
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp_count": {
            "arguments": [
                828
            ],
            "distinct": [
                0
            ],
            "filter": [
                816
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
                814
            ],
            "count": [
                3,
                {
                    "columns": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                820
            ],
            "min": [
                822
            ],
            "stddev": [
                830
            ],
            "stddev_pop": [
                832
            ],
            "stddev_samp": [
                834
            ],
            "sum": [
                838
            ],
            "var_pop": [
                842
            ],
            "var_samp": [
                844
            ],
            "variance": [
                846
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_order_by": {
            "avg": [
                815
            ],
            "count": [
                342
            ],
            "max": [
                821
            ],
            "min": [
                823
            ],
            "stddev": [
                831
            ],
            "stddev_pop": [
                833
            ],
            "stddev_samp": [
                835
            ],
            "sum": [
                839
            ],
            "var_pop": [
                843
            ],
            "var_samp": [
                845
            ],
            "variance": [
                847
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_arr_rel_insert_input": {
            "data": [
                819
            ],
            "on_conflict": [
                825
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
                342
            ],
            "delta": [
                342
            ],
            "slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_bool_exp": {
            "_and": [
                816
            ],
            "_not": [
                816
            ],
            "_or": [
                816
            ],
            "amount": [
                8
            ],
            "created_at": [
                806
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
                896
            ],
            "tokenAcctByTokenAcct": [
                859
            ],
            "token_acct": [
                6
            ],
            "transaction": [
                1007
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
                805
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
                903
            ],
            "tokenAcctByTokenAcct": [
                868
            ],
            "token_acct": [
                5
            ],
            "transaction": [
                1014
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
                805
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
                342
            ],
            "created_at": [
                342
            ],
            "delta": [
                342
            ],
            "mint_acct": [
                342
            ],
            "owner_acct": [
                342
            ],
            "slot": [
                342
            ],
            "token_acct": [
                342
            ],
            "tx_sig": [
                342
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
                805
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
                342
            ],
            "created_at": [
                342
            ],
            "delta": [
                342
            ],
            "mint_acct": [
                342
            ],
            "owner_acct": [
                342
            ],
            "slot": [
                342
            ],
            "token_acct": [
                342
            ],
            "tx_sig": [
                342
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
                807
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_on_conflict": {
            "constraint": [
                817
            ],
            "update_columns": [
                840
            ],
            "where": [
                816
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_order_by": {
            "amount": [
                342
            ],
            "created_at": [
                342
            ],
            "delta": [
                342
            ],
            "mint_acct": [
                342
            ],
            "owner_acct": [
                342
            ],
            "slot": [
                342
            ],
            "token": [
                905
            ],
            "tokenAcctByTokenAcct": [
                870
            ],
            "token_acct": [
                342
            ],
            "transaction": [
                1016
            ],
            "tx_sig": [
                342
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
                805
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
                805
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
                342
            ],
            "delta": [
                342
            ],
            "slot": [
                342
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
                342
            ],
            "delta": [
                342
            ],
            "slot": [
                342
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
                342
            ],
            "delta": [
                342
            ],
            "slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_stream_cursor_input": {
            "initial_value": [
                837
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
                805
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
                342
            ],
            "delta": [
                342
            ],
            "slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_update_column": {},
        "token_acct_balances_updates": {
            "_inc": [
                818
            ],
            "_set": [
                829
            ],
            "where": [
                816
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
                342
            ],
            "delta": [
                342
            ],
            "slot": [
                342
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
                342
            ],
            "delta": [
                342
            ],
            "slot": [
                342
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
                342
            ],
            "delta": [
                342
            ],
            "slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_status": {},
        "token_acct_status_comparison_exp": {
            "_eq": [
                848
            ],
            "_gt": [
                848
            ],
            "_gte": [
                848
            ],
            "_in": [
                848
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                848
            ],
            "_lte": [
                848
            ],
            "_neq": [
                848
            ],
            "_nin": [
                848
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
                298,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "marketsByBidsTokenAcct": [
                298,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "marketsByBidsTokenAcct_aggregate": [
                299,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "markets_aggregate": [
                299,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
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
                848
            ],
            "token": [
                892
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                807,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                808,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate": {
            "aggregate": [
                854
            ],
            "nodes": [
                850
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp": {
            "count": [
                853
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp_count": {
            "arguments": [
                872
            ],
            "distinct": [
                0
            ],
            "filter": [
                859
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
                857
            ],
            "count": [
                3,
                {
                    "columns": [
                        872,
                        "[token_accts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                863
            ],
            "min": [
                865
            ],
            "stddev": [
                874
            ],
            "stddev_pop": [
                876
            ],
            "stddev_samp": [
                878
            ],
            "sum": [
                882
            ],
            "var_pop": [
                886
            ],
            "var_samp": [
                888
            ],
            "variance": [
                890
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_order_by": {
            "avg": [
                858
            ],
            "count": [
                342
            ],
            "max": [
                864
            ],
            "min": [
                866
            ],
            "stddev": [
                875
            ],
            "stddev_pop": [
                877
            ],
            "stddev_samp": [
                879
            ],
            "sum": [
                883
            ],
            "var_pop": [
                887
            ],
            "var_samp": [
                889
            ],
            "variance": [
                891
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_arr_rel_insert_input": {
            "data": [
                862
            ],
            "on_conflict": [
                869
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_bool_exp": {
            "_and": [
                859
            ],
            "_not": [
                859
            ],
            "_or": [
                859
            ],
            "amount": [
                8
            ],
            "markets": [
                307
            ],
            "marketsByBidsTokenAcct": [
                307
            ],
            "marketsByBidsTokenAcct_aggregate": [
                300
            ],
            "markets_aggregate": [
                300
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "status": [
                849
            ],
            "token": [
                896
            ],
            "token_acct": [
                6
            ],
            "token_acct_balances": [
                816
            ],
            "token_acct_balances_aggregate": [
                809
            ],
            "updated_at": [
                806
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
                304
            ],
            "marketsByBidsTokenAcct": [
                304
            ],
            "mint_acct": [
                5
            ],
            "owner_acct": [
                5
            ],
            "status": [
                848
            ],
            "token": [
                903
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                813
            ],
            "updated_at": [
                805
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
                848
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_max_order_by": {
            "amount": [
                342
            ],
            "mint_acct": [
                342
            ],
            "owner_acct": [
                342
            ],
            "status": [
                342
            ],
            "token_acct": [
                342
            ],
            "updated_at": [
                342
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
                848
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_min_order_by": {
            "amount": [
                342
            ],
            "mint_acct": [
                342
            ],
            "owner_acct": [
                342
            ],
            "status": [
                342
            ],
            "token_acct": [
                342
            ],
            "updated_at": [
                342
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
                850
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_obj_rel_insert_input": {
            "data": [
                862
            ],
            "on_conflict": [
                869
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_on_conflict": {
            "constraint": [
                860
            ],
            "update_columns": [
                884
            ],
            "where": [
                859
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_order_by": {
            "amount": [
                342
            ],
            "marketsByBidsTokenAcct_aggregate": [
                303
            ],
            "markets_aggregate": [
                303
            ],
            "mint_acct": [
                342
            ],
            "owner_acct": [
                342
            ],
            "status": [
                342
            ],
            "token": [
                905
            ],
            "token_acct": [
                342
            ],
            "token_acct_balances_aggregate": [
                812
            ],
            "updated_at": [
                342
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
                848
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                805
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
                342
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
                342
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_stream_cursor_input": {
            "initial_value": [
                881
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
                848
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                805
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_update_column": {},
        "token_accts_updates": {
            "_inc": [
                861
            ],
            "_set": [
                873
            ],
            "where": [
                859
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
                342
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
                342
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
                342
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
                759
            ],
            "image_url": [
                5
            ],
            "markets": [
                298,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "marketsByQuoteMintAcct": [
                298,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "marketsByQuoteMintAcct_aggregate": [
                299,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "markets_aggregate": [
                299,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
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
                807,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                808,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "token_accts": [
                850,
                {
                    "distinct_on": [
                        872,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        870,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        859
                    ]
                }
            ],
            "token_accts_aggregate": [
                851,
                {
                    "distinct_on": [
                        872,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        870,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        859
                    ]
                }
            ],
            "updated_at": [
                805
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
                894
            ],
            "nodes": [
                892
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate_fields": {
            "avg": [
                895
            ],
            "count": [
                3,
                {
                    "columns": [
                        907,
                        "[tokens_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                900
            ],
            "min": [
                901
            ],
            "stddev": [
                909
            ],
            "stddev_pop": [
                910
            ],
            "stddev_samp": [
                911
            ],
            "sum": [
                914
            ],
            "var_pop": [
                917
            ],
            "var_samp": [
                918
            ],
            "variance": [
                919
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
                896
            ],
            "_not": [
                896
            ],
            "_or": [
                896
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
                760
            ],
            "image_url": [
                6
            ],
            "markets": [
                307
            ],
            "marketsByQuoteMintAcct": [
                307
            ],
            "marketsByQuoteMintAcct_aggregate": [
                300
            ],
            "markets_aggregate": [
                300
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
                816
            ],
            "token_acct_balances_aggregate": [
                809
            ],
            "token_accts": [
                859
            ],
            "token_accts_aggregate": [
                852
            ],
            "updated_at": [
                806
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
                759
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
                759
            ],
            "image_url": [
                5
            ],
            "markets": [
                304
            ],
            "marketsByQuoteMintAcct": [
                304
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
                813
            ],
            "token_accts": [
                856
            ],
            "updated_at": [
                805
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
                759
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
                805
            ],
            "__typename": [
                5
            ]
        },
        "tokens_min_fields": {
            "decimals": [
                759
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
                805
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
                892
            ],
            "__typename": [
                5
            ]
        },
        "tokens_obj_rel_insert_input": {
            "data": [
                899
            ],
            "on_conflict": [
                904
            ],
            "__typename": [
                5
            ]
        },
        "tokens_on_conflict": {
            "constraint": [
                897
            ],
            "update_columns": [
                915
            ],
            "where": [
                896
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
                342
            ],
            "image_url": [
                342
            ],
            "marketsByQuoteMintAcct_aggregate": [
                303
            ],
            "markets_aggregate": [
                303
            ],
            "mint_acct": [
                342
            ],
            "name": [
                342
            ],
            "supply": [
                342
            ],
            "symbol": [
                342
            ],
            "token_acct_balances_aggregate": [
                812
            ],
            "token_accts_aggregate": [
                855
            ],
            "updated_at": [
                342
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
                759
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
                805
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
                913
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
                759
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
                805
            ],
            "__typename": [
                5
            ]
        },
        "tokens_sum_fields": {
            "decimals": [
                759
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
                898
            ],
            "_set": [
                908
            ],
            "where": [
                896
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
                1003
            ],
            "transaction_watcher": [
                961
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
                924
            ],
            "nodes": [
                920
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp": {
            "count": [
                923
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp_count": {
            "arguments": [
                941
            ],
            "distinct": [
                0
            ],
            "filter": [
                929
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
                927
            ],
            "count": [
                3,
                {
                    "columns": [
                        941,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                933
            ],
            "min": [
                935
            ],
            "stddev": [
                943
            ],
            "stddev_pop": [
                945
            ],
            "stddev_samp": [
                947
            ],
            "sum": [
                951
            ],
            "var_pop": [
                955
            ],
            "var_samp": [
                957
            ],
            "variance": [
                959
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_order_by": {
            "avg": [
                928
            ],
            "count": [
                342
            ],
            "max": [
                934
            ],
            "min": [
                936
            ],
            "stddev": [
                944
            ],
            "stddev_pop": [
                946
            ],
            "stddev_samp": [
                948
            ],
            "sum": [
                952
            ],
            "var_pop": [
                956
            ],
            "var_samp": [
                958
            ],
            "variance": [
                960
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_arr_rel_insert_input": {
            "data": [
                932
            ],
            "on_conflict": [
                938
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_bool_exp": {
            "_and": [
                929
            ],
            "_not": [
                929
            ],
            "_or": [
                929
            ],
            "slot": [
                8
            ],
            "transaction": [
                1007
            ],
            "transaction_watcher": [
                970
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
                1014
            ],
            "transaction_watcher": [
                979
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
                342
            ],
            "tx_sig": [
                342
            ],
            "watcher_acct": [
                342
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
                342
            ],
            "tx_sig": [
                342
            ],
            "watcher_acct": [
                342
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
                920
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_on_conflict": {
            "constraint": [
                930
            ],
            "update_columns": [
                953
            ],
            "where": [
                929
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_order_by": {
            "slot": [
                342
            ],
            "transaction": [
                1016
            ],
            "transaction_watcher": [
                981
            ],
            "tx_sig": [
                342
            ],
            "watcher_acct": [
                342
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
                342
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
                342
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_stream_cursor_input": {
            "initial_value": [
                950
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
                342
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_update_column": {},
        "transaction_watcher_transactions_updates": {
            "_inc": [
                931
            ],
            "_set": [
                942
            ],
            "where": [
                929
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
                342
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
                342
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
                342
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
                759
            ],
            "status": [
                5
            ],
            "transaction": [
                1003
            ],
            "transactionByLatestTxSig": [
                1003
            ],
            "transaction_watcher_transactions": [
                920,
                {
                    "distinct_on": [
                        941,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        939,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        929
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                921,
                {
                    "distinct_on": [
                        941,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        939,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        929
                    ]
                }
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate": {
            "aggregate": [
                965
            ],
            "nodes": [
                961
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp": {
            "count": [
                964
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp_count": {
            "arguments": [
                983
            ],
            "distinct": [
                0
            ],
            "filter": [
                970
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
                968
            ],
            "count": [
                3,
                {
                    "columns": [
                        983,
                        "[transaction_watchers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                974
            ],
            "min": [
                976
            ],
            "stddev": [
                985
            ],
            "stddev_pop": [
                987
            ],
            "stddev_samp": [
                989
            ],
            "sum": [
                993
            ],
            "var_pop": [
                997
            ],
            "var_samp": [
                999
            ],
            "variance": [
                1001
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_order_by": {
            "avg": [
                969
            ],
            "count": [
                342
            ],
            "max": [
                975
            ],
            "min": [
                977
            ],
            "stddev": [
                986
            ],
            "stddev_pop": [
                988
            ],
            "stddev_samp": [
                990
            ],
            "sum": [
                994
            ],
            "var_pop": [
                998
            ],
            "var_samp": [
                1000
            ],
            "variance": [
                1002
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_arr_rel_insert_input": {
            "data": [
                973
            ],
            "on_conflict": [
                980
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
                342
            ],
            "serializer_logic_version": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_bool_exp": {
            "_and": [
                970
            ],
            "_not": [
                970
            ],
            "_or": [
                970
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
                760
            ],
            "status": [
                6
            ],
            "transaction": [
                1007
            ],
            "transactionByLatestTxSig": [
                1007
            ],
            "transaction_watcher_transactions": [
                929
            ],
            "transaction_watcher_transactions_aggregate": [
                922
            ],
            "updated_at": [
                806
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
                759
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
                759
            ],
            "status": [
                5
            ],
            "transaction": [
                1014
            ],
            "transactionByLatestTxSig": [
                1014
            ],
            "transaction_watcher_transactions": [
                926
            ],
            "updated_at": [
                805
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
                759
            ],
            "status": [
                5
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_max_order_by": {
            "acct": [
                342
            ],
            "checked_up_to_slot": [
                342
            ],
            "description": [
                342
            ],
            "failure_log": [
                342
            ],
            "first_tx_sig": [
                342
            ],
            "latest_tx_sig": [
                342
            ],
            "serializer_logic_version": [
                342
            ],
            "status": [
                342
            ],
            "updated_at": [
                342
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
                759
            ],
            "status": [
                5
            ],
            "updated_at": [
                805
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_min_order_by": {
            "acct": [
                342
            ],
            "checked_up_to_slot": [
                342
            ],
            "description": [
                342
            ],
            "failure_log": [
                342
            ],
            "first_tx_sig": [
                342
            ],
            "latest_tx_sig": [
                342
            ],
            "serializer_logic_version": [
                342
            ],
            "status": [
                342
            ],
            "updated_at": [
                342
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
                961
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_obj_rel_insert_input": {
            "data": [
                973
            ],
            "on_conflict": [
                980
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_on_conflict": {
            "constraint": [
                971
            ],
            "update_columns": [
                995
            ],
            "where": [
                970
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_order_by": {
            "acct": [
                342
            ],
            "checked_up_to_slot": [
                342
            ],
            "description": [
                342
            ],
            "failure_log": [
                342
            ],
            "first_tx_sig": [
                342
            ],
            "latest_tx_sig": [
                342
            ],
            "serializer_logic_version": [
                342
            ],
            "status": [
                342
            ],
            "transaction": [
                1016
            ],
            "transactionByLatestTxSig": [
                1016
            ],
            "transaction_watcher_transactions_aggregate": [
                925
            ],
            "updated_at": [
                342
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
                759
            ],
            "status": [
                5
            ],
            "updated_at": [
                805
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
                342
            ],
            "serializer_logic_version": [
                342
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
                342
            ],
            "serializer_logic_version": [
                342
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
                342
            ],
            "serializer_logic_version": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_stream_cursor_input": {
            "initial_value": [
                992
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
                759
            ],
            "status": [
                5
            ],
            "updated_at": [
                805
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
                759
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_sum_order_by": {
            "checked_up_to_slot": [
                342
            ],
            "serializer_logic_version": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_update_column": {},
        "transaction_watchers_updates": {
            "_inc": [
                972
            ],
            "_set": [
                984
            ],
            "where": [
                970
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
                342
            ],
            "serializer_logic_version": [
                342
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
                342
            ],
            "serializer_logic_version": [
                342
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
                342
            ],
            "serializer_logic_version": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "transactions": {
            "block_time": [
                805
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
            "main_ix_type": [
                5
            ],
            "order": [
                343
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                759
            ],
            "slot": [
                7
            ],
            "token_acct_balances": [
                807,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                808,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig": [
                961,
                {
                    "distinct_on": [
                        983,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        981,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        970
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                962,
                {
                    "distinct_on": [
                        983,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        981,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        970
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                920,
                {
                    "distinct_on": [
                        941,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        939,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        929
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                921,
                {
                    "distinct_on": [
                        941,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        939,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        929
                    ]
                }
            ],
            "transaction_watchers": [
                961,
                {
                    "distinct_on": [
                        983,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        981,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        970
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                962,
                {
                    "distinct_on": [
                        983,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        981,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        970
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
                1005
            ],
            "nodes": [
                1003
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                1006
            ],
            "count": [
                3,
                {
                    "columns": [
                        1018,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1011
            ],
            "min": [
                1012
            ],
            "stddev": [
                1020
            ],
            "stddev_pop": [
                1021
            ],
            "stddev_samp": [
                1022
            ],
            "sum": [
                1025
            ],
            "var_pop": [
                1028
            ],
            "var_samp": [
                1029
            ],
            "variance": [
                1030
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
                1007
            ],
            "_not": [
                1007
            ],
            "_or": [
                1007
            ],
            "block_time": [
                806
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
            "main_ix_type": [
                6
            ],
            "order": [
                354
            ],
            "payload": [
                6
            ],
            "serializer_logic_version": [
                760
            ],
            "slot": [
                8
            ],
            "token_acct_balances": [
                816
            ],
            "token_acct_balances_aggregate": [
                809
            ],
            "transactionWatchersByLatestTxSig": [
                970
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                963
            ],
            "transaction_watcher_transactions": [
                929
            ],
            "transaction_watcher_transactions_aggregate": [
                922
            ],
            "transaction_watchers": [
                970
            ],
            "transaction_watchers_aggregate": [
                963
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
                759
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
                805
            ],
            "failed": [
                0
            ],
            "indexer_account_dependencies": [
                201
            ],
            "main_ix_type": [
                5
            ],
            "order": [
                363
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                759
            ],
            "slot": [
                7
            ],
            "token_acct_balances": [
                813
            ],
            "transactionWatchersByLatestTxSig": [
                967
            ],
            "transaction_watcher_transactions": [
                926
            ],
            "transaction_watchers": [
                967
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
                805
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                759
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
                805
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                759
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
                1003
            ],
            "__typename": [
                5
            ]
        },
        "transactions_obj_rel_insert_input": {
            "data": [
                1010
            ],
            "on_conflict": [
                1015
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                1008
            ],
            "update_columns": [
                1026
            ],
            "where": [
                1007
            ],
            "__typename": [
                5
            ]
        },
        "transactions_order_by": {
            "block_time": [
                342
            ],
            "failed": [
                342
            ],
            "indexer_account_dependencies_aggregate": [
                200
            ],
            "main_ix_type": [
                342
            ],
            "order": [
                365
            ],
            "payload": [
                342
            ],
            "serializer_logic_version": [
                342
            ],
            "slot": [
                342
            ],
            "token_acct_balances_aggregate": [
                812
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                966
            ],
            "transaction_watcher_transactions_aggregate": [
                925
            ],
            "transaction_watchers_aggregate": [
                966
            ],
            "tx_sig": [
                342
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
                805
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
                759
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
                1024
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
                805
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
                759
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
                759
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
                1009
            ],
            "_set": [
                1019
            ],
            "where": [
                1007
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
                805
            ],
            "market": [
                298
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
                1033
            ],
            "nodes": [
                1031
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_aggregate_fields": {
            "avg": [
                1034
            ],
            "count": [
                3,
                {
                    "columns": [
                        1044,
                        "[twap_chart_data_select_column!]"
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
                1040
            ],
            "stddev": [
                1046
            ],
            "stddev_pop": [
                1047
            ],
            "stddev_samp": [
                1048
            ],
            "sum": [
                1051
            ],
            "var_pop": [
                1054
            ],
            "var_samp": [
                1055
            ],
            "variance": [
                1056
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
                1035
            ],
            "_not": [
                1035
            ],
            "_or": [
                1035
            ],
            "interv": [
                806
            ],
            "market": [
                307
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
                805
            ],
            "market": [
                316
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
                805
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
                805
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
                1031
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_on_conflict": {
            "constraint": [
                1036
            ],
            "update_columns": [
                1052
            ],
            "where": [
                1035
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_order_by": {
            "interv": [
                342
            ],
            "market": [
                318
            ],
            "market_acct": [
                342
            ],
            "token_amount": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_select_column": {},
        "twap_chart_data_set_input": {
            "interv": [
                805
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
                1050
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
                805
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
                1037
            ],
            "_set": [
                1045
            ],
            "where": [
                1035
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
                805
            ],
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "market": [
                298
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                340
            ],
            "proposal": [
                634
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
                1061
            ],
            "nodes": [
                1057
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp": {
            "count": [
                1060
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp_count": {
            "arguments": [
                1078
            ],
            "distinct": [
                0
            ],
            "filter": [
                1066
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
                1064
            ],
            "count": [
                3,
                {
                    "columns": [
                        1078,
                        "[twaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1070
            ],
            "min": [
                1072
            ],
            "stddev": [
                1080
            ],
            "stddev_pop": [
                1082
            ],
            "stddev_samp": [
                1084
            ],
            "sum": [
                1088
            ],
            "var_pop": [
                1092
            ],
            "var_samp": [
                1094
            ],
            "variance": [
                1096
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_order_by": {
            "avg": [
                1065
            ],
            "count": [
                342
            ],
            "max": [
                1071
            ],
            "min": [
                1073
            ],
            "stddev": [
                1081
            ],
            "stddev_pop": [
                1083
            ],
            "stddev_samp": [
                1085
            ],
            "sum": [
                1089
            ],
            "var_pop": [
                1093
            ],
            "var_samp": [
                1095
            ],
            "variance": [
                1097
            ],
            "__typename": [
                5
            ]
        },
        "twaps_arr_rel_insert_input": {
            "data": [
                1069
            ],
            "on_conflict": [
                1075
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
                342
            ],
            "last_price": [
                342
            ],
            "observation_agg": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "twaps_bool_exp": {
            "_and": [
                1066
            ],
            "_not": [
                1066
            ],
            "_or": [
                1066
            ],
            "created_at": [
                806
            ],
            "last_observation": [
                341
            ],
            "last_price": [
                341
            ],
            "market": [
                307
            ],
            "market_acct": [
                6
            ],
            "observation_agg": [
                341
            ],
            "proposal": [
                653
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
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
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
                805
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
                5
            ],
            "observation_agg": [
                340
            ],
            "proposal": [
                662
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
                805
            ],
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                340
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
                342
            ],
            "last_observation": [
                342
            ],
            "last_price": [
                342
            ],
            "market_acct": [
                342
            ],
            "observation_agg": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "twaps_min_fields": {
            "created_at": [
                805
            ],
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                340
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
                342
            ],
            "last_observation": [
                342
            ],
            "last_price": [
                342
            ],
            "market_acct": [
                342
            ],
            "observation_agg": [
                342
            ],
            "proposal_acct": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
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
                1057
            ],
            "__typename": [
                5
            ]
        },
        "twaps_on_conflict": {
            "constraint": [
                1067
            ],
            "update_columns": [
                1090
            ],
            "where": [
                1066
            ],
            "__typename": [
                5
            ]
        },
        "twaps_order_by": {
            "created_at": [
                342
            ],
            "last_observation": [
                342
            ],
            "last_price": [
                342
            ],
            "market": [
                318
            ],
            "market_acct": [
                342
            ],
            "observation_agg": [
                342
            ],
            "proposal": [
                664
            ],
            "proposal_acct": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
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
                805
            ],
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                340
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
                342
            ],
            "last_price": [
                342
            ],
            "observation_agg": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
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
                342
            ],
            "last_price": [
                342
            ],
            "observation_agg": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
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
                342
            ],
            "last_price": [
                342
            ],
            "observation_agg": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "twaps_stream_cursor_input": {
            "initial_value": [
                1087
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
                805
            ],
            "last_observation": [
                340
            ],
            "last_price": [
                340
            ],
            "market_acct": [
                5
            ],
            "observation_agg": [
                340
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
                340
            ],
            "last_price": [
                340
            ],
            "observation_agg": [
                340
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
                342
            ],
            "last_price": [
                342
            ],
            "observation_agg": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "twaps_update_column": {},
        "twaps_updates": {
            "_inc": [
                1068
            ],
            "_set": [
                1079
            ],
            "where": [
                1066
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
                342
            ],
            "last_price": [
                342
            ],
            "observation_agg": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
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
                342
            ],
            "last_price": [
                342
            ],
            "observation_agg": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
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
                342
            ],
            "last_price": [
                342
            ],
            "observation_agg": [
                342
            ],
            "token_amount": [
                342
            ],
            "updated_slot": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "user_performance": {
            "created_at": [
                805
            ],
            "proposal": [
                634
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
                1139
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
                1102
            ],
            "nodes": [
                1098
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_bool_exp": {
            "count": [
                1101
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_bool_exp_count": {
            "arguments": [
                1119
            ],
            "distinct": [
                0
            ],
            "filter": [
                1107
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
                1105
            ],
            "count": [
                3,
                {
                    "columns": [
                        1119,
                        "[user_performance_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1111
            ],
            "min": [
                1113
            ],
            "stddev": [
                1121
            ],
            "stddev_pop": [
                1123
            ],
            "stddev_samp": [
                1125
            ],
            "sum": [
                1129
            ],
            "var_pop": [
                1133
            ],
            "var_samp": [
                1135
            ],
            "variance": [
                1137
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_aggregate_order_by": {
            "avg": [
                1106
            ],
            "count": [
                342
            ],
            "max": [
                1112
            ],
            "min": [
                1114
            ],
            "stddev": [
                1122
            ],
            "stddev_pop": [
                1124
            ],
            "stddev_samp": [
                1126
            ],
            "sum": [
                1130
            ],
            "var_pop": [
                1134
            ],
            "var_samp": [
                1136
            ],
            "variance": [
                1138
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_arr_rel_insert_input": {
            "data": [
                1110
            ],
            "on_conflict": [
                1116
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
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_bool_exp": {
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
                806
            ],
            "proposal": [
                653
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
                1142
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
                805
            ],
            "proposal": [
                662
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
                1148
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
                805
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
                342
            ],
            "proposal_acct": [
                342
            ],
            "tokens_bought": [
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "user_acct": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_min_fields": {
            "created_at": [
                805
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
                342
            ],
            "proposal_acct": [
                342
            ],
            "tokens_bought": [
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "user_acct": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
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
                1098
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_on_conflict": {
            "constraint": [
                1108
            ],
            "update_columns": [
                1131
            ],
            "where": [
                1107
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_order_by": {
            "created_at": [
                342
            ],
            "proposal": [
                664
            ],
            "proposal_acct": [
                342
            ],
            "tokens_bought": [
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "user": [
                1150
            ],
            "user_acct": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
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
                805
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
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
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
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
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
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_stream_cursor_input": {
            "initial_value": [
                1128
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
                805
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
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "user_performance_update_column": {},
        "user_performance_updates": {
            "_inc": [
                1109
            ],
            "_set": [
                1120
            ],
            "where": [
                1107
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
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
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
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
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
                342
            ],
            "tokens_sold": [
                342
            ],
            "total_volume": [
                342
            ],
            "volume_bought": [
                342
            ],
            "volume_sold": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "users": {
            "created_at": [
                805
            ],
            "orders": [
                343,
                {
                    "distinct_on": [
                        367,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        365,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        354
                    ]
                }
            ],
            "orders_aggregate": [
                344,
                {
                    "distinct_on": [
                        367,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        365,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        354
                    ]
                }
            ],
            "sessions": [
                735,
                {
                    "distinct_on": [
                        753,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        742
                    ]
                }
            ],
            "sessions_aggregate": [
                736,
                {
                    "distinct_on": [
                        753,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        742
                    ]
                }
            ],
            "user_acct": [
                5
            ],
            "user_performances": [
                1098,
                {
                    "distinct_on": [
                        1119,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1117,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_performances_aggregate": [
                1099,
                {
                    "distinct_on": [
                        1119,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1117,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "users_aggregate": {
            "aggregate": [
                1141
            ],
            "nodes": [
                1139
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
                        1152,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1145
            ],
            "min": [
                1146
            ],
            "__typename": [
                5
            ]
        },
        "users_bool_exp": {
            "_and": [
                1142
            ],
            "_not": [
                1142
            ],
            "_or": [
                1142
            ],
            "created_at": [
                806
            ],
            "orders": [
                354
            ],
            "orders_aggregate": [
                345
            ],
            "sessions": [
                742
            ],
            "sessions_aggregate": [
                737
            ],
            "user_acct": [
                6
            ],
            "user_performances": [
                1107
            ],
            "user_performances_aggregate": [
                1100
            ],
            "__typename": [
                5
            ]
        },
        "users_constraint": {},
        "users_insert_input": {
            "created_at": [
                805
            ],
            "orders": [
                351
            ],
            "sessions": [
                741
            ],
            "user_acct": [
                5
            ],
            "user_performances": [
                1104
            ],
            "__typename": [
                5
            ]
        },
        "users_max_fields": {
            "created_at": [
                805
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
                805
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
                1139
            ],
            "__typename": [
                5
            ]
        },
        "users_obj_rel_insert_input": {
            "data": [
                1144
            ],
            "on_conflict": [
                1149
            ],
            "__typename": [
                5
            ]
        },
        "users_on_conflict": {
            "constraint": [
                1143
            ],
            "update_columns": [
                1156
            ],
            "where": [
                1142
            ],
            "__typename": [
                5
            ]
        },
        "users_order_by": {
            "created_at": [
                342
            ],
            "orders_aggregate": [
                350
            ],
            "sessions_aggregate": [
                740
            ],
            "user_acct": [
                342
            ],
            "user_performances_aggregate": [
                1103
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
                805
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
                1155
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
                805
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
                1153
            ],
            "where": [
                1142
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                1158
            ],
            "_gt": [
                1158
            ],
            "_gte": [
                1158
            ],
            "_in": [
                1158
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                1158
            ],
            "_lte": [
                1158
            ],
            "_neq": [
                1158
            ],
            "_nin": [
                1158
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
                        805,
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
                252,
                {
                    "distinct_on": [
                        276,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        274,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        263
                    ]
                }
            ],
            "makes_aggregate": [
                253,
                {
                    "distinct_on": [
                        276,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        274,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        263
                    ]
                }
            ],
            "makes_by_pk": [
                252,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets": [
                298,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "markets_aggregate": [
                299,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "markets_by_pk": [
                298,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders": [
                343,
                {
                    "distinct_on": [
                        367,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        365,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        354
                    ]
                }
            ],
            "orders_aggregate": [
                344,
                {
                    "distinct_on": [
                        367,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        365,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        354
                    ]
                }
            ],
            "orders_by_pk": [
                343,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices": [
                389,
                {
                    "distinct_on": [
                        436,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        434,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        398
                    ]
                }
            ],
            "prices_aggregate": [
                390,
                {
                    "distinct_on": [
                        436,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        434,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        398
                    ]
                }
            ],
            "prices_by_pk": [
                389,
                {
                    "created_at": [
                        805,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices_chart_data": [
                399,
                {
                    "distinct_on": [
                        412,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "prices_chart_data_aggregate": [
                400,
                {
                    "distinct_on": [
                        412,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "program_system": [
                456,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "program_system_aggregate": [
                457,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "program_system_by_pk": [
                456,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "programs": [
                515,
                {
                    "distinct_on": [
                        530,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        528,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        519
                    ]
                }
            ],
            "programs_aggregate": [
                516,
                {
                    "distinct_on": [
                        530,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        528,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        519
                    ]
                }
            ],
            "programs_by_pk": [
                515,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_bars": [
                543,
                {
                    "distinct_on": [
                        557,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        555,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        547
                    ]
                }
            ],
            "proposal_bars_aggregate": [
                544,
                {
                    "distinct_on": [
                        557,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        555,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        547
                    ]
                }
            ],
            "proposal_bars_by_pk": [
                543,
                {
                    "bar_size": [
                        247,
                        "interval!"
                    ],
                    "bar_start_time": [
                        805,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_details": [
                570,
                {
                    "distinct_on": [
                        596,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        593,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposal_details_aggregate": [
                571,
                {
                    "distinct_on": [
                        596,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        593,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposal_details_by_pk": [
                570,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                616,
                {
                    "distinct_on": [
                        624,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        623,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        620
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                617,
                {
                    "distinct_on": [
                        624,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        623,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        620
                    ]
                }
            ],
            "proposals": [
                634,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
                    ]
                }
            ],
            "proposals_aggregate": [
                635,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
                    ]
                }
            ],
            "proposals_by_pk": [
                634,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "reactions": [
                694,
                {
                    "distinct_on": [
                        715,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        713,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        703
                    ]
                }
            ],
            "reactions_aggregate": [
                695,
                {
                    "distinct_on": [
                        715,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        713,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        703
                    ]
                }
            ],
            "reactions_by_pk": [
                694,
                {
                    "reaction_id": [
                        1158,
                        "uuid!"
                    ]
                }
            ],
            "sessions": [
                735,
                {
                    "distinct_on": [
                        753,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        742
                    ]
                }
            ],
            "sessions_aggregate": [
                736,
                {
                    "distinct_on": [
                        753,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        742
                    ]
                }
            ],
            "sessions_by_pk": [
                735,
                {
                    "id": [
                        1158,
                        "uuid!"
                    ]
                }
            ],
            "takes": [
                761,
                {
                    "distinct_on": [
                        783,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        781,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "takes_aggregate": [
                762,
                {
                    "distinct_on": [
                        783,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        781,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "takes_by_pk": [
                761,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_acct_balances": [
                807,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                808,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                807,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        805,
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
                850,
                {
                    "distinct_on": [
                        872,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        870,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        859
                    ]
                }
            ],
            "token_accts_aggregate": [
                851,
                {
                    "distinct_on": [
                        872,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        870,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        859
                    ]
                }
            ],
            "token_accts_by_pk": [
                850,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens": [
                892,
                {
                    "distinct_on": [
                        907,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        905,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        896
                    ]
                }
            ],
            "tokens_aggregate": [
                893,
                {
                    "distinct_on": [
                        907,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        905,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        896
                    ]
                }
            ],
            "tokens_by_pk": [
                892,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                920,
                {
                    "distinct_on": [
                        941,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        939,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        929
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                921,
                {
                    "distinct_on": [
                        941,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        939,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        929
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                920,
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
                961,
                {
                    "distinct_on": [
                        983,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        981,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        970
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                962,
                {
                    "distinct_on": [
                        983,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        981,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        970
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                961,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                1003,
                {
                    "distinct_on": [
                        1018,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1016,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1007
                    ]
                }
            ],
            "transactions_aggregate": [
                1004,
                {
                    "distinct_on": [
                        1018,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1016,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1007
                    ]
                }
            ],
            "transactions_by_pk": [
                1003,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "twap_chart_data": [
                1031,
                {
                    "distinct_on": [
                        1044,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1043,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1032,
                {
                    "distinct_on": [
                        1044,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1043,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twaps": [
                1057,
                {
                    "distinct_on": [
                        1078,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1076,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1066
                    ]
                }
            ],
            "twaps_aggregate": [
                1058,
                {
                    "distinct_on": [
                        1078,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1076,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1066
                    ]
                }
            ],
            "twaps_by_pk": [
                1057,
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
            "user_performance": [
                1098,
                {
                    "distinct_on": [
                        1119,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1117,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_performance_aggregate": [
                1099,
                {
                    "distinct_on": [
                        1119,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1117,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_performance_by_pk": [
                1098,
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
                1139,
                {
                    "distinct_on": [
                        1152,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1150,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1142
                    ]
                }
            ],
            "users_aggregate": [
                1140,
                {
                    "distinct_on": [
                        1152,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1150,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1142
                    ]
                }
            ],
            "users_by_pk": [
                1139,
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
                        805,
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
                271,
                {
                    "where": [
                        263,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "delete_makes_by_pk": [
                252,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_markets": [
                315,
                {
                    "where": [
                        307,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "delete_markets_by_pk": [
                298,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_orders": [
                362,
                {
                    "where": [
                        354,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "delete_orders_by_pk": [
                343,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_prices": [
                432,
                {
                    "where": [
                        398,
                        "prices_bool_exp!"
                    ]
                }
            ],
            "delete_prices_by_pk": [
                389,
                {
                    "created_at": [
                        805,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_prices_chart_data": [
                409,
                {
                    "where": [
                        403,
                        "prices_chart_data_bool_exp!"
                    ]
                }
            ],
            "delete_program_system": [
                483,
                {
                    "where": [
                        475,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "delete_program_system_by_pk": [
                456,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "delete_programs": [
                525,
                {
                    "where": [
                        519,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "delete_programs_by_pk": [
                515,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_bars": [
                553,
                {
                    "where": [
                        547,
                        "proposal_bars_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_bars_by_pk": [
                543,
                {
                    "bar_size": [
                        247,
                        "interval!"
                    ],
                    "bar_start_time": [
                        805,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_details": [
                591,
                {
                    "where": [
                        580,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_details_by_pk": [
                570,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_proposals": [
                661,
                {
                    "where": [
                        653,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "delete_proposals_by_pk": [
                634,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_reactions": [
                711,
                {
                    "where": [
                        703,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "delete_reactions_by_pk": [
                694,
                {
                    "reaction_id": [
                        1158,
                        "uuid!"
                    ]
                }
            ],
            "delete_sessions": [
                749,
                {
                    "where": [
                        742,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "delete_sessions_by_pk": [
                735,
                {
                    "id": [
                        1158,
                        "uuid!"
                    ]
                }
            ],
            "delete_takes": [
                778,
                {
                    "where": [
                        770,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "delete_takes_by_pk": [
                761,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_acct_balances": [
                824,
                {
                    "where": [
                        816,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "delete_token_acct_balances_by_pk": [
                807,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        805,
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
                867,
                {
                    "where": [
                        859,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "delete_token_accts_by_pk": [
                850,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_tokens": [
                902,
                {
                    "where": [
                        896,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "delete_tokens_by_pk": [
                892,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions": [
                937,
                {
                    "where": [
                        929,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions_by_pk": [
                920,
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
                978,
                {
                    "where": [
                        970,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watchers_by_pk": [
                961,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                1013,
                {
                    "where": [
                        1007,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                1003,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_twap_chart_data": [
                1041,
                {
                    "where": [
                        1035,
                        "twap_chart_data_bool_exp!"
                    ]
                }
            ],
            "delete_twaps": [
                1074,
                {
                    "where": [
                        1066,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "delete_twaps_by_pk": [
                1057,
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
            "delete_user_performance": [
                1115,
                {
                    "where": [
                        1107,
                        "user_performance_bool_exp!"
                    ]
                }
            ],
            "delete_user_performance_by_pk": [
                1098,
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
                1147,
                {
                    "where": [
                        1142,
                        "users_bool_exp!"
                    ]
                }
            ],
            "delete_users_by_pk": [
                1139,
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
                271,
                {
                    "objects": [
                        266,
                        "[makes_insert_input!]!"
                    ],
                    "on_conflict": [
                        273
                    ]
                }
            ],
            "insert_makes_one": [
                252,
                {
                    "object": [
                        266,
                        "makes_insert_input!"
                    ],
                    "on_conflict": [
                        273
                    ]
                }
            ],
            "insert_markets": [
                315,
                {
                    "objects": [
                        310,
                        "[markets_insert_input!]!"
                    ],
                    "on_conflict": [
                        317
                    ]
                }
            ],
            "insert_markets_one": [
                298,
                {
                    "object": [
                        310,
                        "markets_insert_input!"
                    ],
                    "on_conflict": [
                        317
                    ]
                }
            ],
            "insert_orders": [
                362,
                {
                    "objects": [
                        357,
                        "[orders_insert_input!]!"
                    ],
                    "on_conflict": [
                        364
                    ]
                }
            ],
            "insert_orders_one": [
                343,
                {
                    "object": [
                        357,
                        "orders_insert_input!"
                    ],
                    "on_conflict": [
                        364
                    ]
                }
            ],
            "insert_prices": [
                432,
                {
                    "objects": [
                        427,
                        "[prices_insert_input!]!"
                    ],
                    "on_conflict": [
                        433
                    ]
                }
            ],
            "insert_prices_chart_data": [
                409,
                {
                    "objects": [
                        406,
                        "[prices_chart_data_insert_input!]!"
                    ],
                    "on_conflict": [
                        410
                    ]
                }
            ],
            "insert_prices_chart_data_one": [
                399,
                {
                    "object": [
                        406,
                        "prices_chart_data_insert_input!"
                    ],
                    "on_conflict": [
                        410
                    ]
                }
            ],
            "insert_prices_one": [
                389,
                {
                    "object": [
                        427,
                        "prices_insert_input!"
                    ],
                    "on_conflict": [
                        433
                    ]
                }
            ],
            "insert_program_system": [
                483,
                {
                    "objects": [
                        478,
                        "[program_system_insert_input!]!"
                    ],
                    "on_conflict": [
                        484
                    ]
                }
            ],
            "insert_program_system_one": [
                456,
                {
                    "object": [
                        478,
                        "program_system_insert_input!"
                    ],
                    "on_conflict": [
                        484
                    ]
                }
            ],
            "insert_programs": [
                525,
                {
                    "objects": [
                        522,
                        "[programs_insert_input!]!"
                    ],
                    "on_conflict": [
                        527
                    ]
                }
            ],
            "insert_programs_one": [
                515,
                {
                    "object": [
                        522,
                        "programs_insert_input!"
                    ],
                    "on_conflict": [
                        527
                    ]
                }
            ],
            "insert_proposal_bars": [
                553,
                {
                    "objects": [
                        550,
                        "[proposal_bars_insert_input!]!"
                    ],
                    "on_conflict": [
                        554
                    ]
                }
            ],
            "insert_proposal_bars_one": [
                543,
                {
                    "object": [
                        550,
                        "proposal_bars_insert_input!"
                    ],
                    "on_conflict": [
                        554
                    ]
                }
            ],
            "insert_proposal_details": [
                591,
                {
                    "objects": [
                        586,
                        "[proposal_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        592
                    ]
                }
            ],
            "insert_proposal_details_one": [
                570,
                {
                    "object": [
                        586,
                        "proposal_details_insert_input!"
                    ],
                    "on_conflict": [
                        592
                    ]
                }
            ],
            "insert_proposals": [
                661,
                {
                    "objects": [
                        656,
                        "[proposals_insert_input!]!"
                    ],
                    "on_conflict": [
                        663
                    ]
                }
            ],
            "insert_proposals_one": [
                634,
                {
                    "object": [
                        656,
                        "proposals_insert_input!"
                    ],
                    "on_conflict": [
                        663
                    ]
                }
            ],
            "insert_reactions": [
                711,
                {
                    "objects": [
                        706,
                        "[reactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        712
                    ]
                }
            ],
            "insert_reactions_one": [
                694,
                {
                    "object": [
                        706,
                        "reactions_insert_input!"
                    ],
                    "on_conflict": [
                        712
                    ]
                }
            ],
            "insert_sessions": [
                749,
                {
                    "objects": [
                        744,
                        "[sessions_insert_input!]!"
                    ],
                    "on_conflict": [
                        750
                    ]
                }
            ],
            "insert_sessions_one": [
                735,
                {
                    "object": [
                        744,
                        "sessions_insert_input!"
                    ],
                    "on_conflict": [
                        750
                    ]
                }
            ],
            "insert_takes": [
                778,
                {
                    "objects": [
                        773,
                        "[takes_insert_input!]!"
                    ],
                    "on_conflict": [
                        780
                    ]
                }
            ],
            "insert_takes_one": [
                761,
                {
                    "object": [
                        773,
                        "takes_insert_input!"
                    ],
                    "on_conflict": [
                        780
                    ]
                }
            ],
            "insert_token_acct_balances": [
                824,
                {
                    "objects": [
                        819,
                        "[token_acct_balances_insert_input!]!"
                    ],
                    "on_conflict": [
                        825
                    ]
                }
            ],
            "insert_token_acct_balances_one": [
                807,
                {
                    "object": [
                        819,
                        "token_acct_balances_insert_input!"
                    ],
                    "on_conflict": [
                        825
                    ]
                }
            ],
            "insert_token_accts": [
                867,
                {
                    "objects": [
                        862,
                        "[token_accts_insert_input!]!"
                    ],
                    "on_conflict": [
                        869
                    ]
                }
            ],
            "insert_token_accts_one": [
                850,
                {
                    "object": [
                        862,
                        "token_accts_insert_input!"
                    ],
                    "on_conflict": [
                        869
                    ]
                }
            ],
            "insert_tokens": [
                902,
                {
                    "objects": [
                        899,
                        "[tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        904
                    ]
                }
            ],
            "insert_tokens_one": [
                892,
                {
                    "object": [
                        899,
                        "tokens_insert_input!"
                    ],
                    "on_conflict": [
                        904
                    ]
                }
            ],
            "insert_transaction_watcher_transactions": [
                937,
                {
                    "objects": [
                        932,
                        "[transaction_watcher_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        938
                    ]
                }
            ],
            "insert_transaction_watcher_transactions_one": [
                920,
                {
                    "object": [
                        932,
                        "transaction_watcher_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        938
                    ]
                }
            ],
            "insert_transaction_watchers": [
                978,
                {
                    "objects": [
                        973,
                        "[transaction_watchers_insert_input!]!"
                    ],
                    "on_conflict": [
                        980
                    ]
                }
            ],
            "insert_transaction_watchers_one": [
                961,
                {
                    "object": [
                        973,
                        "transaction_watchers_insert_input!"
                    ],
                    "on_conflict": [
                        980
                    ]
                }
            ],
            "insert_transactions": [
                1013,
                {
                    "objects": [
                        1010,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        1015
                    ]
                }
            ],
            "insert_transactions_one": [
                1003,
                {
                    "object": [
                        1010,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        1015
                    ]
                }
            ],
            "insert_twap_chart_data": [
                1041,
                {
                    "objects": [
                        1038,
                        "[twap_chart_data_insert_input!]!"
                    ],
                    "on_conflict": [
                        1042
                    ]
                }
            ],
            "insert_twap_chart_data_one": [
                1031,
                {
                    "object": [
                        1038,
                        "twap_chart_data_insert_input!"
                    ],
                    "on_conflict": [
                        1042
                    ]
                }
            ],
            "insert_twaps": [
                1074,
                {
                    "objects": [
                        1069,
                        "[twaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        1075
                    ]
                }
            ],
            "insert_twaps_one": [
                1057,
                {
                    "object": [
                        1069,
                        "twaps_insert_input!"
                    ],
                    "on_conflict": [
                        1075
                    ]
                }
            ],
            "insert_user_performance": [
                1115,
                {
                    "objects": [
                        1110,
                        "[user_performance_insert_input!]!"
                    ],
                    "on_conflict": [
                        1116
                    ]
                }
            ],
            "insert_user_performance_one": [
                1098,
                {
                    "object": [
                        1110,
                        "user_performance_insert_input!"
                    ],
                    "on_conflict": [
                        1116
                    ]
                }
            ],
            "insert_users": [
                1147,
                {
                    "objects": [
                        1144,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        1149
                    ]
                }
            ],
            "insert_users_one": [
                1139,
                {
                    "object": [
                        1144,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        1149
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
                271,
                {
                    "_inc": [
                        265
                    ],
                    "_set": [
                        279
                    ],
                    "where": [
                        263,
                        "makes_bool_exp!"
                    ]
                }
            ],
            "update_makes_by_pk": [
                252,
                {
                    "_inc": [
                        265
                    ],
                    "_set": [
                        279
                    ],
                    "pk_columns": [
                        275,
                        "makes_pk_columns_input!"
                    ]
                }
            ],
            "update_makes_many": [
                271,
                {
                    "updates": [
                        291,
                        "[makes_updates!]!"
                    ]
                }
            ],
            "update_markets": [
                315,
                {
                    "_inc": [
                        309
                    ],
                    "_set": [
                        321
                    ],
                    "where": [
                        307,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "update_markets_by_pk": [
                298,
                {
                    "_inc": [
                        309
                    ],
                    "_set": [
                        321
                    ],
                    "pk_columns": [
                        319,
                        "markets_pk_columns_input!"
                    ]
                }
            ],
            "update_markets_many": [
                315,
                {
                    "updates": [
                        333,
                        "[markets_updates!]!"
                    ]
                }
            ],
            "update_orders": [
                362,
                {
                    "_inc": [
                        356
                    ],
                    "_set": [
                        370
                    ],
                    "where": [
                        354,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "update_orders_by_pk": [
                343,
                {
                    "_inc": [
                        356
                    ],
                    "_set": [
                        370
                    ],
                    "pk_columns": [
                        366,
                        "orders_pk_columns_input!"
                    ]
                }
            ],
            "update_orders_many": [
                362,
                {
                    "updates": [
                        382,
                        "[orders_updates!]!"
                    ]
                }
            ],
            "update_prices": [
                432,
                {
                    "_inc": [
                        426
                    ],
                    "_set": [
                        437
                    ],
                    "where": [
                        398,
                        "prices_bool_exp!"
                    ]
                }
            ],
            "update_prices_by_pk": [
                389,
                {
                    "_inc": [
                        426
                    ],
                    "_set": [
                        437
                    ],
                    "pk_columns": [
                        435,
                        "prices_pk_columns_input!"
                    ]
                }
            ],
            "update_prices_chart_data": [
                409,
                {
                    "_inc": [
                        405
                    ],
                    "_set": [
                        413
                    ],
                    "where": [
                        403,
                        "prices_chart_data_bool_exp!"
                    ]
                }
            ],
            "update_prices_chart_data_many": [
                409,
                {
                    "updates": [
                        421,
                        "[prices_chart_data_updates!]!"
                    ]
                }
            ],
            "update_prices_many": [
                432,
                {
                    "updates": [
                        449,
                        "[prices_updates!]!"
                    ]
                }
            ],
            "update_program_system": [
                483,
                {
                    "_inc": [
                        477
                    ],
                    "_set": [
                        496
                    ],
                    "where": [
                        475,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "update_program_system_by_pk": [
                456,
                {
                    "_inc": [
                        477
                    ],
                    "_set": [
                        496
                    ],
                    "pk_columns": [
                        486,
                        "program_system_pk_columns_input!"
                    ]
                }
            ],
            "update_program_system_many": [
                483,
                {
                    "updates": [
                        508,
                        "[program_system_updates!]!"
                    ]
                }
            ],
            "update_programs": [
                525,
                {
                    "_inc": [
                        521
                    ],
                    "_set": [
                        531
                    ],
                    "where": [
                        519,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "update_programs_by_pk": [
                515,
                {
                    "_inc": [
                        521
                    ],
                    "_set": [
                        531
                    ],
                    "pk_columns": [
                        529,
                        "programs_pk_columns_input!"
                    ]
                }
            ],
            "update_programs_many": [
                525,
                {
                    "updates": [
                        539,
                        "[programs_updates!]!"
                    ]
                }
            ],
            "update_proposal_bars": [
                553,
                {
                    "_inc": [
                        549
                    ],
                    "_set": [
                        558
                    ],
                    "where": [
                        547,
                        "proposal_bars_bool_exp!"
                    ]
                }
            ],
            "update_proposal_bars_by_pk": [
                543,
                {
                    "_inc": [
                        549
                    ],
                    "_set": [
                        558
                    ],
                    "pk_columns": [
                        556,
                        "proposal_bars_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_bars_many": [
                553,
                {
                    "updates": [
                        566,
                        "[proposal_bars_updates!]!"
                    ]
                }
            ],
            "update_proposal_details": [
                591,
                {
                    "_append": [
                        576
                    ],
                    "_delete_at_path": [
                        582
                    ],
                    "_delete_elem": [
                        583
                    ],
                    "_delete_key": [
                        584
                    ],
                    "_inc": [
                        585
                    ],
                    "_prepend": [
                        595
                    ],
                    "_set": [
                        597
                    ],
                    "where": [
                        580,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "update_proposal_details_by_pk": [
                570,
                {
                    "_append": [
                        576
                    ],
                    "_delete_at_path": [
                        582
                    ],
                    "_delete_elem": [
                        583
                    ],
                    "_delete_key": [
                        584
                    ],
                    "_inc": [
                        585
                    ],
                    "_prepend": [
                        595
                    ],
                    "_set": [
                        597
                    ],
                    "pk_columns": [
                        594,
                        "proposal_details_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_details_many": [
                591,
                {
                    "updates": [
                        609,
                        "[proposal_details_updates!]!"
                    ]
                }
            ],
            "update_proposals": [
                661,
                {
                    "_inc": [
                        655
                    ],
                    "_set": [
                        675
                    ],
                    "where": [
                        653,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "update_proposals_by_pk": [
                634,
                {
                    "_inc": [
                        655
                    ],
                    "_set": [
                        675
                    ],
                    "pk_columns": [
                        665,
                        "proposals_pk_columns_input!"
                    ]
                }
            ],
            "update_proposals_many": [
                661,
                {
                    "updates": [
                        687,
                        "[proposals_updates!]!"
                    ]
                }
            ],
            "update_reactions": [
                711,
                {
                    "_inc": [
                        705
                    ],
                    "_set": [
                        716
                    ],
                    "where": [
                        703,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "update_reactions_by_pk": [
                694,
                {
                    "_inc": [
                        705
                    ],
                    "_set": [
                        716
                    ],
                    "pk_columns": [
                        714,
                        "reactions_pk_columns_input!"
                    ]
                }
            ],
            "update_reactions_many": [
                711,
                {
                    "updates": [
                        728,
                        "[reactions_updates!]!"
                    ]
                }
            ],
            "update_sessions": [
                749,
                {
                    "_set": [
                        754
                    ],
                    "where": [
                        742,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "update_sessions_by_pk": [
                735,
                {
                    "_set": [
                        754
                    ],
                    "pk_columns": [
                        752,
                        "sessions_pk_columns_input!"
                    ]
                }
            ],
            "update_sessions_many": [
                749,
                {
                    "updates": [
                        758,
                        "[sessions_updates!]!"
                    ]
                }
            ],
            "update_takes": [
                778,
                {
                    "_inc": [
                        772
                    ],
                    "_set": [
                        784
                    ],
                    "where": [
                        770,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "update_takes_by_pk": [
                761,
                {
                    "_inc": [
                        772
                    ],
                    "_set": [
                        784
                    ],
                    "pk_columns": [
                        782,
                        "takes_pk_columns_input!"
                    ]
                }
            ],
            "update_takes_many": [
                778,
                {
                    "updates": [
                        796,
                        "[takes_updates!]!"
                    ]
                }
            ],
            "update_token_acct_balances": [
                824,
                {
                    "_inc": [
                        818
                    ],
                    "_set": [
                        829
                    ],
                    "where": [
                        816,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "update_token_acct_balances_by_pk": [
                807,
                {
                    "_inc": [
                        818
                    ],
                    "_set": [
                        829
                    ],
                    "pk_columns": [
                        827,
                        "token_acct_balances_pk_columns_input!"
                    ]
                }
            ],
            "update_token_acct_balances_many": [
                824,
                {
                    "updates": [
                        841,
                        "[token_acct_balances_updates!]!"
                    ]
                }
            ],
            "update_token_accts": [
                867,
                {
                    "_inc": [
                        861
                    ],
                    "_set": [
                        873
                    ],
                    "where": [
                        859,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "update_token_accts_by_pk": [
                850,
                {
                    "_inc": [
                        861
                    ],
                    "_set": [
                        873
                    ],
                    "pk_columns": [
                        871,
                        "token_accts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_accts_many": [
                867,
                {
                    "updates": [
                        885,
                        "[token_accts_updates!]!"
                    ]
                }
            ],
            "update_tokens": [
                902,
                {
                    "_inc": [
                        898
                    ],
                    "_set": [
                        908
                    ],
                    "where": [
                        896,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "update_tokens_by_pk": [
                892,
                {
                    "_inc": [
                        898
                    ],
                    "_set": [
                        908
                    ],
                    "pk_columns": [
                        906,
                        "tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_tokens_many": [
                902,
                {
                    "updates": [
                        916,
                        "[tokens_updates!]!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions": [
                937,
                {
                    "_inc": [
                        931
                    ],
                    "_set": [
                        942
                    ],
                    "where": [
                        929,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_by_pk": [
                920,
                {
                    "_inc": [
                        931
                    ],
                    "_set": [
                        942
                    ],
                    "pk_columns": [
                        940,
                        "transaction_watcher_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_many": [
                937,
                {
                    "updates": [
                        954,
                        "[transaction_watcher_transactions_updates!]!"
                    ]
                }
            ],
            "update_transaction_watchers": [
                978,
                {
                    "_inc": [
                        972
                    ],
                    "_set": [
                        984
                    ],
                    "where": [
                        970,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watchers_by_pk": [
                961,
                {
                    "_inc": [
                        972
                    ],
                    "_set": [
                        984
                    ],
                    "pk_columns": [
                        982,
                        "transaction_watchers_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watchers_many": [
                978,
                {
                    "updates": [
                        996,
                        "[transaction_watchers_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                1013,
                {
                    "_inc": [
                        1009
                    ],
                    "_set": [
                        1019
                    ],
                    "where": [
                        1007,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                1003,
                {
                    "_inc": [
                        1009
                    ],
                    "_set": [
                        1019
                    ],
                    "pk_columns": [
                        1017,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                1013,
                {
                    "updates": [
                        1027,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_twap_chart_data": [
                1041,
                {
                    "_inc": [
                        1037
                    ],
                    "_set": [
                        1045
                    ],
                    "where": [
                        1035,
                        "twap_chart_data_bool_exp!"
                    ]
                }
            ],
            "update_twap_chart_data_many": [
                1041,
                {
                    "updates": [
                        1053,
                        "[twap_chart_data_updates!]!"
                    ]
                }
            ],
            "update_twaps": [
                1074,
                {
                    "_inc": [
                        1068
                    ],
                    "_set": [
                        1079
                    ],
                    "where": [
                        1066,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "update_twaps_by_pk": [
                1057,
                {
                    "_inc": [
                        1068
                    ],
                    "_set": [
                        1079
                    ],
                    "pk_columns": [
                        1077,
                        "twaps_pk_columns_input!"
                    ]
                }
            ],
            "update_twaps_many": [
                1074,
                {
                    "updates": [
                        1091,
                        "[twaps_updates!]!"
                    ]
                }
            ],
            "update_user_performance": [
                1115,
                {
                    "_inc": [
                        1109
                    ],
                    "_set": [
                        1120
                    ],
                    "where": [
                        1107,
                        "user_performance_bool_exp!"
                    ]
                }
            ],
            "update_user_performance_by_pk": [
                1098,
                {
                    "_inc": [
                        1109
                    ],
                    "_set": [
                        1120
                    ],
                    "pk_columns": [
                        1118,
                        "user_performance_pk_columns_input!"
                    ]
                }
            ],
            "update_user_performance_many": [
                1115,
                {
                    "updates": [
                        1132,
                        "[user_performance_updates!]!"
                    ]
                }
            ],
            "update_users": [
                1147,
                {
                    "_set": [
                        1153
                    ],
                    "where": [
                        1142,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_by_pk": [
                1139,
                {
                    "_set": [
                        1153
                    ],
                    "pk_columns": [
                        1151,
                        "users_pk_columns_input!"
                    ]
                }
            ],
            "update_users_many": [
                1147,
                {
                    "updates": [
                        1157,
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
                        805,
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
                252,
                {
                    "distinct_on": [
                        276,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        274,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        263
                    ]
                }
            ],
            "makes_aggregate": [
                253,
                {
                    "distinct_on": [
                        276,
                        "[makes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        274,
                        "[makes_order_by!]"
                    ],
                    "where": [
                        263
                    ]
                }
            ],
            "makes_by_pk": [
                252,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "makes_stream": [
                252,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        286,
                        "[makes_stream_cursor_input]!"
                    ],
                    "where": [
                        263
                    ]
                }
            ],
            "markets": [
                298,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "markets_aggregate": [
                299,
                {
                    "distinct_on": [
                        320,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        318,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "markets_by_pk": [
                298,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets_stream": [
                298,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        328,
                        "[markets_stream_cursor_input]!"
                    ],
                    "where": [
                        307
                    ]
                }
            ],
            "orders": [
                343,
                {
                    "distinct_on": [
                        367,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        365,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        354
                    ]
                }
            ],
            "orders_aggregate": [
                344,
                {
                    "distinct_on": [
                        367,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        365,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        354
                    ]
                }
            ],
            "orders_by_pk": [
                343,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders_stream": [
                343,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        377,
                        "[orders_stream_cursor_input]!"
                    ],
                    "where": [
                        354
                    ]
                }
            ],
            "prices": [
                389,
                {
                    "distinct_on": [
                        436,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        434,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        398
                    ]
                }
            ],
            "prices_aggregate": [
                390,
                {
                    "distinct_on": [
                        436,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        434,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        398
                    ]
                }
            ],
            "prices_by_pk": [
                389,
                {
                    "created_at": [
                        805,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "prices_chart_data": [
                399,
                {
                    "distinct_on": [
                        412,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "prices_chart_data_aggregate": [
                400,
                {
                    "distinct_on": [
                        412,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        411,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "prices_chart_data_stream": [
                399,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        417,
                        "[prices_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "prices_stream": [
                389,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        444,
                        "[prices_stream_cursor_input]!"
                    ],
                    "where": [
                        398
                    ]
                }
            ],
            "program_system": [
                456,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "program_system_aggregate": [
                457,
                {
                    "distinct_on": [
                        487,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        485,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "program_system_by_pk": [
                456,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "program_system_stream": [
                456,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        503,
                        "[program_system_stream_cursor_input]!"
                    ],
                    "where": [
                        475
                    ]
                }
            ],
            "programs": [
                515,
                {
                    "distinct_on": [
                        530,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        528,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        519
                    ]
                }
            ],
            "programs_aggregate": [
                516,
                {
                    "distinct_on": [
                        530,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        528,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        519
                    ]
                }
            ],
            "programs_by_pk": [
                515,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs_stream": [
                515,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        535,
                        "[programs_stream_cursor_input]!"
                    ],
                    "where": [
                        519
                    ]
                }
            ],
            "proposal_bars": [
                543,
                {
                    "distinct_on": [
                        557,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        555,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        547
                    ]
                }
            ],
            "proposal_bars_aggregate": [
                544,
                {
                    "distinct_on": [
                        557,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        555,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        547
                    ]
                }
            ],
            "proposal_bars_by_pk": [
                543,
                {
                    "bar_size": [
                        247,
                        "interval!"
                    ],
                    "bar_start_time": [
                        805,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_bars_stream": [
                543,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        562,
                        "[proposal_bars_stream_cursor_input]!"
                    ],
                    "where": [
                        547
                    ]
                }
            ],
            "proposal_details": [
                570,
                {
                    "distinct_on": [
                        596,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        593,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposal_details_aggregate": [
                571,
                {
                    "distinct_on": [
                        596,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        593,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposal_details_by_pk": [
                570,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_details_stream": [
                570,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        604,
                        "[proposal_details_stream_cursor_input]!"
                    ],
                    "where": [
                        580
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                616,
                {
                    "distinct_on": [
                        624,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        623,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        620
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                617,
                {
                    "distinct_on": [
                        624,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        623,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        620
                    ]
                }
            ],
            "proposal_total_trade_volume_stream": [
                616,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        628,
                        "[proposal_total_trade_volume_stream_cursor_input]!"
                    ],
                    "where": [
                        620
                    ]
                }
            ],
            "proposals": [
                634,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
                    ]
                }
            ],
            "proposals_aggregate": [
                635,
                {
                    "distinct_on": [
                        666,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        664,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        653
                    ]
                }
            ],
            "proposals_by_pk": [
                634,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposals_stream": [
                634,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        682,
                        "[proposals_stream_cursor_input]!"
                    ],
                    "where": [
                        653
                    ]
                }
            ],
            "reactions": [
                694,
                {
                    "distinct_on": [
                        715,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        713,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        703
                    ]
                }
            ],
            "reactions_aggregate": [
                695,
                {
                    "distinct_on": [
                        715,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        713,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        703
                    ]
                }
            ],
            "reactions_by_pk": [
                694,
                {
                    "reaction_id": [
                        1158,
                        "uuid!"
                    ]
                }
            ],
            "reactions_stream": [
                694,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        723,
                        "[reactions_stream_cursor_input]!"
                    ],
                    "where": [
                        703
                    ]
                }
            ],
            "sessions": [
                735,
                {
                    "distinct_on": [
                        753,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        742
                    ]
                }
            ],
            "sessions_aggregate": [
                736,
                {
                    "distinct_on": [
                        753,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        751,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        742
                    ]
                }
            ],
            "sessions_by_pk": [
                735,
                {
                    "id": [
                        1158,
                        "uuid!"
                    ]
                }
            ],
            "sessions_stream": [
                735,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        755,
                        "[sessions_stream_cursor_input]!"
                    ],
                    "where": [
                        742
                    ]
                }
            ],
            "takes": [
                761,
                {
                    "distinct_on": [
                        783,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        781,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "takes_aggregate": [
                762,
                {
                    "distinct_on": [
                        783,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        781,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "takes_by_pk": [
                761,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes_stream": [
                761,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        791,
                        "[takes_stream_cursor_input]!"
                    ],
                    "where": [
                        770
                    ]
                }
            ],
            "token_acct_balances": [
                807,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                808,
                {
                    "distinct_on": [
                        828,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        826,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                807,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        805,
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
                807,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        836,
                        "[token_acct_balances_stream_cursor_input]!"
                    ],
                    "where": [
                        816
                    ]
                }
            ],
            "token_accts": [
                850,
                {
                    "distinct_on": [
                        872,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        870,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        859
                    ]
                }
            ],
            "token_accts_aggregate": [
                851,
                {
                    "distinct_on": [
                        872,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        870,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        859
                    ]
                }
            ],
            "token_accts_by_pk": [
                850,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts_stream": [
                850,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        880,
                        "[token_accts_stream_cursor_input]!"
                    ],
                    "where": [
                        859
                    ]
                }
            ],
            "tokens": [
                892,
                {
                    "distinct_on": [
                        907,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        905,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        896
                    ]
                }
            ],
            "tokens_aggregate": [
                893,
                {
                    "distinct_on": [
                        907,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        905,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        896
                    ]
                }
            ],
            "tokens_by_pk": [
                892,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens_stream": [
                892,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        912,
                        "[tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        896
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                920,
                {
                    "distinct_on": [
                        941,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        939,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        929
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                921,
                {
                    "distinct_on": [
                        941,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        939,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        929
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                920,
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
                920,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        949,
                        "[transaction_watcher_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        929
                    ]
                }
            ],
            "transaction_watchers": [
                961,
                {
                    "distinct_on": [
                        983,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        981,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        970
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                962,
                {
                    "distinct_on": [
                        983,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        981,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        970
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                961,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers_stream": [
                961,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        991,
                        "[transaction_watchers_stream_cursor_input]!"
                    ],
                    "where": [
                        970
                    ]
                }
            ],
            "transactions": [
                1003,
                {
                    "distinct_on": [
                        1018,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1016,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1007
                    ]
                }
            ],
            "transactions_aggregate": [
                1004,
                {
                    "distinct_on": [
                        1018,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1016,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        1007
                    ]
                }
            ],
            "transactions_by_pk": [
                1003,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                1003,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1023,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        1007
                    ]
                }
            ],
            "twap_chart_data": [
                1031,
                {
                    "distinct_on": [
                        1044,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1043,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1032,
                {
                    "distinct_on": [
                        1044,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1043,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twap_chart_data_stream": [
                1031,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1049,
                        "[twap_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        1035
                    ]
                }
            ],
            "twaps": [
                1057,
                {
                    "distinct_on": [
                        1078,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1076,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1066
                    ]
                }
            ],
            "twaps_aggregate": [
                1058,
                {
                    "distinct_on": [
                        1078,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1076,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1066
                    ]
                }
            ],
            "twaps_by_pk": [
                1057,
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
                1057,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1086,
                        "[twaps_stream_cursor_input]!"
                    ],
                    "where": [
                        1066
                    ]
                }
            ],
            "user_performance": [
                1098,
                {
                    "distinct_on": [
                        1119,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1117,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_performance_aggregate": [
                1099,
                {
                    "distinct_on": [
                        1119,
                        "[user_performance_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1117,
                        "[user_performance_order_by!]"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "user_performance_by_pk": [
                1098,
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
                1098,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1127,
                        "[user_performance_stream_cursor_input]!"
                    ],
                    "where": [
                        1107
                    ]
                }
            ],
            "users": [
                1139,
                {
                    "distinct_on": [
                        1152,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1150,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1142
                    ]
                }
            ],
            "users_aggregate": [
                1140,
                {
                    "distinct_on": [
                        1152,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1150,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1142
                    ]
                }
            ],
            "users_by_pk": [
                1139,
                {
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "users_stream": [
                1139,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1154,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        1142
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}