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
        407,
        417,
        428,
        440,
        468,
        479,
        480,
        481,
        482,
        483,
        484,
        485,
        486,
        487,
        499,
        512,
        522,
        530,
        540,
        549,
        557,
        573,
        588,
        600,
        616,
        646,
        658,
        659,
        660,
        661,
        662,
        663,
        664,
        665,
        666,
        678,
        696,
        707,
        719,
        735,
        745,
        749,
        751,
        763,
        775,
        787,
        795,
        797,
        809,
        820,
        832,
        840,
        852,
        864,
        876,
        889,
        899,
        907,
        922,
        933,
        945,
        963,
        975,
        987,
        1000,
        1010,
        1018,
        1031,
        1051,
        1062,
        1074,
        1086,
        1095,
        1099,
        1101
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
                797
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
                798
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
                797
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
                797
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
                797
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
                797
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
                797
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
                797
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
                797
            ],
            "proposal": [
                626
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                686,
                {
                    "distinct_on": [
                        707,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        705,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        695
                    ]
                }
            ],
            "reactions_aggregate": [
                687,
                {
                    "distinct_on": [
                        707,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        705,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        695
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
                798
            ],
            "proposal": [
                645
            ],
            "proposal_acct": [
                6
            ],
            "reactions": [
                695
            ],
            "reactions_aggregate": [
                688
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
                797
            ],
            "proposal": [
                654
            ],
            "proposal_acct": [
                5
            ],
            "reactions": [
                692
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
                797
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
                797
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
                656
            ],
            "proposal_acct": [
                342
            ],
            "reactions_aggregate": [
                691
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
                797
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
                797
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
                626,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
                    ]
                }
            ],
            "proposalsByQuoteVault": [
                626,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
                    ]
                }
            ],
            "proposalsByQuoteVault_aggregate": [
                627,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
                    ]
                }
            ],
            "proposals_aggregate": [
                627,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
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
                884
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
                645
            ],
            "proposalsByQuoteVault": [
                645
            ],
            "proposalsByQuoteVault_aggregate": [
                628
            ],
            "proposals_aggregate": [
                628
            ],
            "settlement_authority": [
                6
            ],
            "status": [
                6
            ],
            "token": [
                888
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
                642
            ],
            "proposalsByQuoteVault": [
                642
            ],
            "settlement_authority": [
                5
            ],
            "status": [
                5
            ],
            "token": [
                895
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
                641
            ],
            "proposals_aggregate": [
                641
            ],
            "settlement_authority": [
                342
            ],
            "status": [
                342
            ],
            "token": [
                897
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
                797
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
                507
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                626,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
                    ]
                }
            ],
            "proposals_aggregate": [
                627,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
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
                884
            ],
            "tokenByBaseAcct": [
                884
            ],
            "tokenByQuoteAcct": [
                884
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                797
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
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
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
                798
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
                511
            ],
            "program_acct": [
                6
            ],
            "proposals": [
                645
            ],
            "proposals_aggregate": [
                628
            ],
            "quote_acct": [
                6
            ],
            "slots_per_proposal": [
                8
            ],
            "token": [
                888
            ],
            "tokenByBaseAcct": [
                888
            ],
            "tokenByQuoteAcct": [
                888
            ],
            "treasury_acct": [
                6
            ],
            "updated_at": [
                798
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
                797
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
                518
            ],
            "program_acct": [
                5
            ],
            "proposals": [
                642
            ],
            "quote_acct": [
                5
            ],
            "slots_per_proposal": [
                7
            ],
            "token": [
                895
            ],
            "tokenByBaseAcct": [
                895
            ],
            "tokenByQuoteAcct": [
                895
            ],
            "treasury_acct": [
                5
            ],
            "updated_at": [
                797
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
                797
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
                797
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
                797
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
                797
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
            "pass_threshold_bps": [
                342
            ],
            "program": [
                520
            ],
            "program_acct": [
                342
            ],
            "proposals_aggregate": [
                641
            ],
            "quote_acct": [
                342
            ],
            "slots_per_proposal": [
                342
            ],
            "token": [
                897
            ],
            "tokenByBaseAcct": [
                897
            ],
            "tokenByQuoteAcct": [
                897
            ],
            "treasury_acct": [
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
                797
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
                797
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
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
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
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
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
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
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
                797
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
                797
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
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
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
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
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
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
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
                342
            ],
            "pass_threshold_bps": [
                342
            ],
            "slots_per_proposal": [
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
                995
            ],
            "updated_at": [
                797
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
                999
            ],
            "updated_at": [
                798
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
                1006
            ],
            "updated_at": [
                797
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
                797
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
                797
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
                1008
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
                797
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
                797
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
                753,
                {
                    "distinct_on": [
                        775,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        773,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        762
                    ]
                }
            ],
            "takes_aggregate": [
                754,
                {
                    "distinct_on": [
                        775,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        773,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        762
                    ]
                }
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                797
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
                762
            ],
            "takes_aggregate": [
                755
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                798
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
                759
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                797
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
                797
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
                797
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
                758
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
                797
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
                797
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
                751
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                751
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
                797
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
                        428,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        426,
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
                        428,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        426,
                        "[prices_order_by!]"
                    ],
                    "where": [
                        398
                    ]
                }
            ],
            "proposal": [
                626
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                751
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                751
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                753,
                {
                    "distinct_on": [
                        775,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        773,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        762
                    ]
                }
            ],
            "takes_aggregate": [
                754,
                {
                    "distinct_on": [
                        775,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        773,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        762
                    ]
                }
            ],
            "token": [
                884
            ],
            "tokenAcctByAsksTokenAcct": [
                842
            ],
            "tokenAcctByBidsTokenAcct": [
                842
            ],
            "tokenByBaseMintAcct": [
                884
            ],
            "tokenByQuoteMintAcct": [
                884
            ],
            "token_acct": [
                842
            ],
            "twaps": [
                1041,
                {
                    "distinct_on": [
                        1062,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1060,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1050
                    ]
                }
            ],
            "twaps_aggregate": [
                1042,
                {
                    "distinct_on": [
                        1062,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1060,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1050
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
                752
            ],
            "base_mint_acct": [
                6
            ],
            "base_taker_fee": [
                752
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
                798
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
                645
            ],
            "proposal_acct": [
                6
            ],
            "quote_lot_size": [
                8
            ],
            "quote_maker_fee": [
                752
            ],
            "quote_mint_acct": [
                6
            ],
            "quote_taker_fee": [
                752
            ],
            "quote_tick_size": [
                8
            ],
            "takes": [
                762
            ],
            "takes_aggregate": [
                755
            ],
            "token": [
                888
            ],
            "tokenAcctByAsksTokenAcct": [
                851
            ],
            "tokenAcctByBidsTokenAcct": [
                851
            ],
            "tokenByBaseMintAcct": [
                888
            ],
            "tokenByQuoteMintAcct": [
                888
            ],
            "token_acct": [
                851
            ],
            "twaps": [
                1050
            ],
            "twaps_aggregate": [
                1043
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
                751
            ],
            "base_taker_fee": [
                751
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                751
            ],
            "quote_taker_fee": [
                751
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
                751
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                751
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
                797
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
                654
            ],
            "proposal_acct": [
                5
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                751
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                751
            ],
            "quote_tick_size": [
                7
            ],
            "takes": [
                759
            ],
            "token": [
                895
            ],
            "tokenAcctByAsksTokenAcct": [
                860
            ],
            "tokenAcctByBidsTokenAcct": [
                860
            ],
            "tokenByBaseMintAcct": [
                895
            ],
            "tokenByQuoteMintAcct": [
                895
            ],
            "token_acct": [
                860
            ],
            "twaps": [
                1047
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
                751
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                751
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                797
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
                751
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                751
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
                751
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                751
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                797
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
                751
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                751
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
                656
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
                758
            ],
            "token": [
                897
            ],
            "tokenAcctByAsksTokenAcct": [
                862
            ],
            "tokenAcctByBidsTokenAcct": [
                862
            ],
            "tokenByBaseMintAcct": [
                897
            ],
            "tokenByQuoteMintAcct": [
                897
            ],
            "token_acct": [
                862
            ],
            "twaps_aggregate": [
                1046
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
                751
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                751
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                797
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
                751
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                751
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
                751
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                751
            ],
            "bids_token_acct": [
                5
            ],
            "create_tx_sig": [
                5
            ],
            "created_at": [
                797
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
                751
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                751
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
                751
            ],
            "base_taker_fee": [
                751
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                751
            ],
            "quote_taker_fee": [
                751
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
                797
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
                797
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
                753
            ],
            "transaction": [
                995
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                797
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
                798
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
                798
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
                762
            ],
            "transaction": [
                999
            ],
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                798
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
                797
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
                797
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
                771
            ],
            "transaction": [
                1006
            ],
            "unfilled_base_amount": [
                7
            ],
            "updated_at": [
                797
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
                797
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
                797
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
                797
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
                797
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
                797
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
                797
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
                773
            ],
            "transaction": [
                1008
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
                797
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
                797
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
                797
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
                797
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
                797
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
                797
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
                797
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
                428
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
                        428,
                        "[prices_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                420
            ],
            "min": [
                422
            ],
            "stddev": [
                430
            ],
            "stddev_pop": [
                432
            ],
            "stddev_samp": [
                434
            ],
            "sum": [
                438
            ],
            "var_pop": [
                442
            ],
            "var_samp": [
                444
            ],
            "variance": [
                446
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
                421
            ],
            "min": [
                423
            ],
            "stddev": [
                431
            ],
            "stddev_pop": [
                433
            ],
            "stddev_samp": [
                435
            ],
            "sum": [
                439
            ],
            "var_pop": [
                443
            ],
            "var_samp": [
                445
            ],
            "variance": [
                447
            ],
            "__typename": [
                5
            ]
        },
        "prices_arr_rel_insert_input": {
            "data": [
                419
            ],
            "on_conflict": [
                425
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
                798
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
                797
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
                        407,
                        "[prices_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                404
            ],
            "min": [
                405
            ],
            "stddev": [
                408
            ],
            "stddev_pop": [
                409
            ],
            "stddev_samp": [
                410
            ],
            "sum": [
                413
            ],
            "var_pop": [
                414
            ],
            "var_samp": [
                415
            ],
            "variance": [
                416
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
                798
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
        "prices_chart_data_max_fields": {
            "base_amount": [
                7
            ],
            "interv": [
                797
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
                797
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
                412
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
                797
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
                797
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
                797
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
                797
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
                417
            ],
            "update_columns": [
                440
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
                797
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
                797
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
                437
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
                797
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
                418
            ],
            "_set": [
                429
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
                507
            ],
            "programByConditionalVaultAcct": [
                507
            ],
            "programByMigratorAcct": [
                507
            ],
            "programByPricingModelAcct": [
                507
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
                462
            ],
            "nodes": [
                448
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp": {
            "avg": [
                451
            ],
            "corr": [
                452
            ],
            "count": [
                454
            ],
            "covar_samp": [
                455
            ],
            "max": [
                457
            ],
            "min": [
                458
            ],
            "stddev_samp": [
                459
            ],
            "sum": [
                460
            ],
            "var_samp": [
                461
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_avg": {
            "arguments": [
                480
            ],
            "distinct": [
                0
            ],
            "filter": [
                467
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
                453
            ],
            "distinct": [
                0
            ],
            "filter": [
                467
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
                481
            ],
            "Y": [
                481
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_count": {
            "arguments": [
                479
            ],
            "distinct": [
                0
            ],
            "filter": [
                467
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
                456
            ],
            "distinct": [
                0
            ],
            "filter": [
                467
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
                482
            ],
            "Y": [
                482
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_bool_exp_max": {
            "arguments": [
                483
            ],
            "distinct": [
                0
            ],
            "filter": [
                467
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
                484
            ],
            "distinct": [
                0
            ],
            "filter": [
                467
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
                485
            ],
            "distinct": [
                0
            ],
            "filter": [
                467
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
                486
            ],
            "distinct": [
                0
            ],
            "filter": [
                467
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
                487
            ],
            "distinct": [
                0
            ],
            "filter": [
                467
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
                465
            ],
            "count": [
                3,
                {
                    "columns": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                471
            ],
            "min": [
                473
            ],
            "stddev": [
                489
            ],
            "stddev_pop": [
                491
            ],
            "stddev_samp": [
                493
            ],
            "sum": [
                497
            ],
            "var_pop": [
                501
            ],
            "var_samp": [
                503
            ],
            "variance": [
                505
            ],
            "__typename": [
                5
            ]
        },
        "program_system_aggregate_order_by": {
            "avg": [
                466
            ],
            "count": [
                342
            ],
            "max": [
                472
            ],
            "min": [
                474
            ],
            "stddev": [
                490
            ],
            "stddev_pop": [
                492
            ],
            "stddev_samp": [
                494
            ],
            "sum": [
                498
            ],
            "var_pop": [
                502
            ],
            "var_samp": [
                504
            ],
            "variance": [
                506
            ],
            "__typename": [
                5
            ]
        },
        "program_system_arr_rel_insert_input": {
            "data": [
                470
            ],
            "on_conflict": [
                476
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
                467
            ],
            "_not": [
                467
            ],
            "_or": [
                467
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
                511
            ],
            "programByConditionalVaultAcct": [
                511
            ],
            "programByMigratorAcct": [
                511
            ],
            "programByPricingModelAcct": [
                511
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
                448
            ],
            "__typename": [
                5
            ]
        },
        "program_system_on_conflict": {
            "constraint": [
                468
            ],
            "update_columns": [
                499
            ],
            "where": [
                467
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
                520
            ],
            "programByConditionalVaultAcct": [
                520
            ],
            "programByMigratorAcct": [
                520
            ],
            "programByPricingModelAcct": [
                520
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
                496
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
                469
            ],
            "_set": [
                488
            ],
            "where": [
                467
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
                797
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
                795
            ],
            "programSystemsByConditionalVaultAcct": [
                448,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                449,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "programSystemsByMigratorAcct": [
                448,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "programSystemsByMigratorAcct_aggregate": [
                449,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "programSystemsByPricingModelAcct": [
                448,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                449,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
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
                448,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "program_systems_aggregate": [
                449,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
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
                509
            ],
            "nodes": [
                507
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate_fields": {
            "avg": [
                510
            ],
            "count": [
                3,
                {
                    "columns": [
                        522,
                        "[programs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                515
            ],
            "min": [
                516
            ],
            "stddev": [
                524
            ],
            "stddev_pop": [
                525
            ],
            "stddev_samp": [
                526
            ],
            "sum": [
                529
            ],
            "var_pop": [
                532
            ],
            "var_samp": [
                533
            ],
            "variance": [
                534
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
                511
            ],
            "_not": [
                511
            ],
            "_or": [
                511
            ],
            "created_at": [
                798
            ],
            "daos": [
                160
            ],
            "daos_aggregate": [
                153
            ],
            "deployed_at": [
                796
            ],
            "programSystemsByConditionalVaultAcct": [
                467
            ],
            "programSystemsByConditionalVaultAcct_aggregate": [
                450
            ],
            "programSystemsByMigratorAcct": [
                467
            ],
            "programSystemsByMigratorAcct_aggregate": [
                450
            ],
            "programSystemsByPricingModelAcct": [
                467
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                450
            ],
            "program_acct": [
                6
            ],
            "program_name": [
                6
            ],
            "program_systems": [
                467
            ],
            "program_systems_aggregate": [
                450
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
                797
            ],
            "daos": [
                157
            ],
            "deployed_at": [
                795
            ],
            "programSystemsByConditionalVaultAcct": [
                464
            ],
            "programSystemsByMigratorAcct": [
                464
            ],
            "programSystemsByPricingModelAcct": [
                464
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "program_systems": [
                464
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
                797
            ],
            "deployed_at": [
                795
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
                797
            ],
            "deployed_at": [
                795
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
                507
            ],
            "__typename": [
                5
            ]
        },
        "programs_obj_rel_insert_input": {
            "data": [
                514
            ],
            "on_conflict": [
                519
            ],
            "__typename": [
                5
            ]
        },
        "programs_on_conflict": {
            "constraint": [
                512
            ],
            "update_columns": [
                530
            ],
            "where": [
                511
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
                463
            ],
            "programSystemsByMigratorAcct_aggregate": [
                463
            ],
            "programSystemsByPricingModelAcct_aggregate": [
                463
            ],
            "program_acct": [
                342
            ],
            "program_name": [
                342
            ],
            "program_systems_aggregate": [
                463
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
                797
            ],
            "deployed_at": [
                795
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
                528
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
                797
            ],
            "deployed_at": [
                795
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
                513
            ],
            "_set": [
                523
            ],
            "where": [
                511
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
                797
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
                537
            ],
            "nodes": [
                535
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_aggregate_fields": {
            "avg": [
                538
            ],
            "count": [
                3,
                {
                    "columns": [
                        549,
                        "[proposal_bars_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                543
            ],
            "min": [
                544
            ],
            "stddev": [
                551
            ],
            "stddev_pop": [
                552
            ],
            "stddev_samp": [
                553
            ],
            "sum": [
                556
            ],
            "var_pop": [
                559
            ],
            "var_samp": [
                560
            ],
            "variance": [
                561
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
                539
            ],
            "_not": [
                539
            ],
            "_or": [
                539
            ],
            "bar_size": [
                248
            ],
            "bar_start_time": [
                798
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
                797
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
                797
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
                797
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
                535
            ],
            "__typename": [
                5
            ]
        },
        "proposal_bars_on_conflict": {
            "constraint": [
                540
            ],
            "update_columns": [
                557
            ],
            "where": [
                539
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
                797
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
                797
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
                555
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
                797
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
                541
            ],
            "_set": [
                550
            ],
            "where": [
                539
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
                626
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
                566
            ],
            "nodes": [
                562
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp": {
            "count": [
                565
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_bool_exp_count": {
            "arguments": [
                588
            ],
            "distinct": [
                0
            ],
            "filter": [
                572
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
                570
            ],
            "count": [
                3,
                {
                    "columns": [
                        588,
                        "[proposal_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                579
            ],
            "min": [
                581
            ],
            "stddev": [
                590
            ],
            "stddev_pop": [
                592
            ],
            "stddev_samp": [
                594
            ],
            "sum": [
                598
            ],
            "var_pop": [
                602
            ],
            "var_samp": [
                604
            ],
            "variance": [
                606
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_order_by": {
            "avg": [
                571
            ],
            "count": [
                342
            ],
            "max": [
                580
            ],
            "min": [
                582
            ],
            "stddev": [
                591
            ],
            "stddev_pop": [
                593
            ],
            "stddev_samp": [
                595
            ],
            "sum": [
                599
            ],
            "var_pop": [
                603
            ],
            "var_samp": [
                605
            ],
            "variance": [
                607
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
                578
            ],
            "on_conflict": [
                584
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
                572
            ],
            "_not": [
                572
            ],
            "_or": [
                572
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
                645
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
                654
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
                562
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_on_conflict": {
            "constraint": [
                573
            ],
            "update_columns": [
                600
            ],
            "where": [
                572
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
                656
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
                597
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
                568
            ],
            "_delete_at_path": [
                574
            ],
            "_delete_elem": [
                575
            ],
            "_delete_key": [
                576
            ],
            "_inc": [
                577
            ],
            "_prepend": [
                587
            ],
            "_set": [
                589
            ],
            "where": [
                572
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
                626
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
                610
            ],
            "nodes": [
                608
            ],
            "__typename": [
                5
            ]
        },
        "proposal_total_trade_volume_aggregate_fields": {
            "avg": [
                611
            ],
            "count": [
                3,
                {
                    "columns": [
                        616,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                613
            ],
            "min": [
                614
            ],
            "stddev": [
                617
            ],
            "stddev_pop": [
                618
            ],
            "stddev_samp": [
                619
            ],
            "sum": [
                622
            ],
            "var_pop": [
                623
            ],
            "var_samp": [
                624
            ],
            "variance": [
                625
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
                612
            ],
            "_not": [
                612
            ],
            "_or": [
                612
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
                645
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
                656
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
                621
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
                797
            ],
            "conditionalVaultByQuoteVault": [
                92
            ],
            "conditional_vault": [
                92
            ],
            "created_at": [
                797
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
                797
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
                562,
                {
                    "distinct_on": [
                        588,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        585,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "proposal_details_aggregate": [
                563,
                {
                    "distinct_on": [
                        588,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        585,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        572
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
                686,
                {
                    "distinct_on": [
                        707,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        705,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        695
                    ]
                }
            ],
            "reactions_aggregate": [
                687,
                {
                    "distinct_on": [
                        707,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        705,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        695
                    ]
                }
            ],
            "status": [
                5
            ],
            "twaps": [
                1041,
                {
                    "distinct_on": [
                        1062,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1060,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1050
                    ]
                }
            ],
            "twaps_aggregate": [
                1042,
                {
                    "distinct_on": [
                        1062,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1060,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1050
                    ]
                }
            ],
            "updated_at": [
                797
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate": {
            "aggregate": [
                640
            ],
            "nodes": [
                626
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp": {
            "avg": [
                629
            ],
            "corr": [
                630
            ],
            "count": [
                632
            ],
            "covar_samp": [
                633
            ],
            "max": [
                635
            ],
            "min": [
                636
            ],
            "stddev_samp": [
                637
            ],
            "sum": [
                638
            ],
            "var_samp": [
                639
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_avg": {
            "arguments": [
                659
            ],
            "distinct": [
                0
            ],
            "filter": [
                645
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
                631
            ],
            "distinct": [
                0
            ],
            "filter": [
                645
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
                660
            ],
            "Y": [
                660
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_count": {
            "arguments": [
                658
            ],
            "distinct": [
                0
            ],
            "filter": [
                645
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
                634
            ],
            "distinct": [
                0
            ],
            "filter": [
                645
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
                661
            ],
            "Y": [
                661
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_bool_exp_max": {
            "arguments": [
                662
            ],
            "distinct": [
                0
            ],
            "filter": [
                645
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
                663
            ],
            "distinct": [
                0
            ],
            "filter": [
                645
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
                664
            ],
            "distinct": [
                0
            ],
            "filter": [
                645
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
                665
            ],
            "distinct": [
                0
            ],
            "filter": [
                645
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
                666
            ],
            "distinct": [
                0
            ],
            "filter": [
                645
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
                643
            ],
            "count": [
                3,
                {
                    "columns": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                649
            ],
            "min": [
                651
            ],
            "stddev": [
                668
            ],
            "stddev_pop": [
                670
            ],
            "stddev_samp": [
                672
            ],
            "sum": [
                676
            ],
            "var_pop": [
                680
            ],
            "var_samp": [
                682
            ],
            "variance": [
                684
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_order_by": {
            "avg": [
                644
            ],
            "count": [
                342
            ],
            "max": [
                650
            ],
            "min": [
                652
            ],
            "stddev": [
                669
            ],
            "stddev_pop": [
                671
            ],
            "stddev_samp": [
                673
            ],
            "sum": [
                677
            ],
            "var_pop": [
                681
            ],
            "var_samp": [
                683
            ],
            "variance": [
                685
            ],
            "__typename": [
                5
            ]
        },
        "proposals_arr_rel_insert_input": {
            "data": [
                648
            ],
            "on_conflict": [
                655
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
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "proposal_num": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposals_bool_exp": {
            "_and": [
                645
            ],
            "_not": [
                645
            ],
            "_or": [
                645
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
                798
            ],
            "conditionalVaultByQuoteVault": [
                99
            ],
            "conditional_vault": [
                99
            ],
            "created_at": [
                798
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
                798
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
                572
            ],
            "proposal_details_aggregate": [
                564
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
                695
            ],
            "reactions_aggregate": [
                688
            ],
            "status": [
                6
            ],
            "twaps": [
                1050
            ],
            "twaps_aggregate": [
                1043
            ],
            "updated_at": [
                798
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
                797
            ],
            "conditionalVaultByQuoteVault": [
                107
            ],
            "conditional_vault": [
                107
            ],
            "created_at": [
                797
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
                797
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
                569
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
                692
            ],
            "status": [
                5
            ],
            "twaps": [
                1047
            ],
            "updated_at": [
                797
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
                797
            ],
            "created_at": [
                797
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
                797
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
                797
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
            "pass_market_acct": [
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
                797
            ],
            "created_at": [
                797
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
                797
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
                797
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
            "pass_market_acct": [
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
                626
            ],
            "__typename": [
                5
            ]
        },
        "proposals_obj_rel_insert_input": {
            "data": [
                648
            ],
            "on_conflict": [
                655
            ],
            "__typename": [
                5
            ]
        },
        "proposals_on_conflict": {
            "constraint": [
                646
            ],
            "update_columns": [
                678
            ],
            "where": [
                645
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
            "pass_market_acct": [
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
                567
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
                691
            ],
            "status": [
                342
            ],
            "twaps_aggregate": [
                1046
            ],
            "updated_at": [
                342
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
                797
            ],
            "created_at": [
                797
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
                797
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
                797
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
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "proposal_num": [
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
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "proposal_num": [
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
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "proposal_num": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_input": {
            "initial_value": [
                675
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
                797
            ],
            "created_at": [
                797
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
                797
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
                797
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
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "proposal_num": [
                342
            ],
            "__typename": [
                5
            ]
        },
        "proposals_update_column": {},
        "proposals_updates": {
            "_inc": [
                647
            ],
            "_set": [
                667
            ],
            "where": [
                645
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
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "proposal_num": [
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
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "proposal_num": [
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
                342
            ],
            "end_slot": [
                342
            ],
            "initial_slot": [
                342
            ],
            "proposal_num": [
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
                626
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
                797
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate": {
            "aggregate": [
                690
            ],
            "nodes": [
                686
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp": {
            "count": [
                689
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_bool_exp_count": {
            "arguments": [
                707
            ],
            "distinct": [
                0
            ],
            "filter": [
                695
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
                693
            ],
            "count": [
                3,
                {
                    "columns": [
                        707,
                        "[reactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                699
            ],
            "min": [
                701
            ],
            "stddev": [
                709
            ],
            "stddev_pop": [
                711
            ],
            "stddev_samp": [
                713
            ],
            "sum": [
                717
            ],
            "var_pop": [
                721
            ],
            "var_samp": [
                723
            ],
            "variance": [
                725
            ],
            "__typename": [
                5
            ]
        },
        "reactions_aggregate_order_by": {
            "avg": [
                694
            ],
            "count": [
                342
            ],
            "max": [
                700
            ],
            "min": [
                702
            ],
            "stddev": [
                710
            ],
            "stddev_pop": [
                712
            ],
            "stddev_samp": [
                714
            ],
            "sum": [
                718
            ],
            "var_pop": [
                722
            ],
            "var_samp": [
                724
            ],
            "variance": [
                726
            ],
            "__typename": [
                5
            ]
        },
        "reactions_arr_rel_insert_input": {
            "data": [
                698
            ],
            "on_conflict": [
                704
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
                695
            ],
            "_not": [
                695
            ],
            "_or": [
                695
            ],
            "comment": [
                59
            ],
            "comment_id": [
                8
            ],
            "proposal": [
                645
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
                798
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
                654
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
                797
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
                797
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
            "reactor_acct": [
                5
            ],
            "updated_at": [
                797
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
                686
            ],
            "__typename": [
                5
            ]
        },
        "reactions_on_conflict": {
            "constraint": [
                696
            ],
            "update_columns": [
                719
            ],
            "where": [
                695
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
                656
            ],
            "proposal_acct": [
                342
            ],
            "reaction": [
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
                797
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
                716
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
                797
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
                697
            ],
            "_set": [
                708
            ],
            "where": [
                695
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
                797
            ],
            "expires_at": [
                795
            ],
            "id": [
                1101
            ],
            "user": [
                1082
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
                731
            ],
            "nodes": [
                727
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp": {
            "count": [
                730
            ],
            "__typename": [
                5
            ]
        },
        "sessions_aggregate_bool_exp_count": {
            "arguments": [
                745
            ],
            "distinct": [
                0
            ],
            "filter": [
                734
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
                        745,
                        "[sessions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                737
            ],
            "min": [
                739
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
                738
            ],
            "min": [
                740
            ],
            "__typename": [
                5
            ]
        },
        "sessions_arr_rel_insert_input": {
            "data": [
                736
            ],
            "on_conflict": [
                742
            ],
            "__typename": [
                5
            ]
        },
        "sessions_bool_exp": {
            "_and": [
                734
            ],
            "_not": [
                734
            ],
            "_or": [
                734
            ],
            "created_at": [
                798
            ],
            "expires_at": [
                796
            ],
            "id": [
                1102
            ],
            "user": [
                1085
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
                797
            ],
            "expires_at": [
                795
            ],
            "id": [
                1101
            ],
            "user": [
                1091
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
                797
            ],
            "expires_at": [
                795
            ],
            "id": [
                1101
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
                797
            ],
            "expires_at": [
                795
            ],
            "id": [
                1101
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
                727
            ],
            "__typename": [
                5
            ]
        },
        "sessions_on_conflict": {
            "constraint": [
                735
            ],
            "update_columns": [
                749
            ],
            "where": [
                734
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
                1093
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
                1101
            ],
            "__typename": [
                5
            ]
        },
        "sessions_select_column": {},
        "sessions_set_input": {
            "created_at": [
                797
            ],
            "expires_at": [
                795
            ],
            "id": [
                1101
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
                748
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
                797
            ],
            "expires_at": [
                795
            ],
            "id": [
                1101
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
                746
            ],
            "where": [
                734
            ],
            "__typename": [
                5
            ]
        },
        "smallint": {},
        "smallint_comparison_exp": {
            "_eq": [
                751
            ],
            "_gt": [
                751
            ],
            "_gte": [
                751
            ],
            "_in": [
                751
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                751
            ],
            "_lte": [
                751
            ],
            "_neq": [
                751
            ],
            "_nin": [
                751
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
                797
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
                757
            ],
            "nodes": [
                753
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp": {
            "count": [
                756
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_bool_exp_count": {
            "arguments": [
                775
            ],
            "distinct": [
                0
            ],
            "filter": [
                762
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
                760
            ],
            "count": [
                3,
                {
                    "columns": [
                        775,
                        "[takes_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                766
            ],
            "min": [
                768
            ],
            "stddev": [
                777
            ],
            "stddev_pop": [
                779
            ],
            "stddev_samp": [
                781
            ],
            "sum": [
                785
            ],
            "var_pop": [
                789
            ],
            "var_samp": [
                791
            ],
            "variance": [
                793
            ],
            "__typename": [
                5
            ]
        },
        "takes_aggregate_order_by": {
            "avg": [
                761
            ],
            "count": [
                342
            ],
            "max": [
                767
            ],
            "min": [
                769
            ],
            "stddev": [
                778
            ],
            "stddev_pop": [
                780
            ],
            "stddev_samp": [
                782
            ],
            "sum": [
                786
            ],
            "var_pop": [
                790
            ],
            "var_samp": [
                792
            ],
            "variance": [
                794
            ],
            "__typename": [
                5
            ]
        },
        "takes_arr_rel_insert_input": {
            "data": [
                765
            ],
            "on_conflict": [
                772
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
                762
            ],
            "_not": [
                762
            ],
            "_or": [
                762
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
                798
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
                797
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
                797
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
                797
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
                753
            ],
            "__typename": [
                5
            ]
        },
        "takes_obj_rel_insert_input": {
            "data": [
                765
            ],
            "on_conflict": [
                772
            ],
            "__typename": [
                5
            ]
        },
        "takes_on_conflict": {
            "constraint": [
                763
            ],
            "update_columns": [
                787
            ],
            "where": [
                762
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
                797
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
                784
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
                797
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
                764
            ],
            "_set": [
                776
            ],
            "where": [
                762
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
                795
            ],
            "_gt": [
                795
            ],
            "_gte": [
                795
            ],
            "_in": [
                795
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                795
            ],
            "_lte": [
                795
            ],
            "_neq": [
                795
            ],
            "_nin": [
                795
            ],
            "__typename": [
                5
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                797
            ],
            "_gt": [
                797
            ],
            "_gte": [
                797
            ],
            "_in": [
                797
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                797
            ],
            "_lte": [
                797
            ],
            "_neq": [
                797
            ],
            "_nin": [
                797
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
                797
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
                884
            ],
            "tokenAcctByTokenAcct": [
                842
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
        "token_acct_balances_aggregate": {
            "aggregate": [
                803
            ],
            "nodes": [
                799
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp": {
            "count": [
                802
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_bool_exp_count": {
            "arguments": [
                820
            ],
            "distinct": [
                0
            ],
            "filter": [
                808
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
                806
            ],
            "count": [
                3,
                {
                    "columns": [
                        820,
                        "[token_acct_balances_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                812
            ],
            "min": [
                814
            ],
            "stddev": [
                822
            ],
            "stddev_pop": [
                824
            ],
            "stddev_samp": [
                826
            ],
            "sum": [
                830
            ],
            "var_pop": [
                834
            ],
            "var_samp": [
                836
            ],
            "variance": [
                838
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_aggregate_order_by": {
            "avg": [
                807
            ],
            "count": [
                342
            ],
            "max": [
                813
            ],
            "min": [
                815
            ],
            "stddev": [
                823
            ],
            "stddev_pop": [
                825
            ],
            "stddev_samp": [
                827
            ],
            "sum": [
                831
            ],
            "var_pop": [
                835
            ],
            "var_samp": [
                837
            ],
            "variance": [
                839
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_arr_rel_insert_input": {
            "data": [
                811
            ],
            "on_conflict": [
                817
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
                808
            ],
            "_not": [
                808
            ],
            "_or": [
                808
            ],
            "amount": [
                8
            ],
            "created_at": [
                798
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
                888
            ],
            "tokenAcctByTokenAcct": [
                851
            ],
            "token_acct": [
                6
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
                797
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
                895
            ],
            "tokenAcctByTokenAcct": [
                860
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
        "token_acct_balances_max_fields": {
            "amount": [
                7
            ],
            "created_at": [
                797
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
                797
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
                799
            ],
            "__typename": [
                5
            ]
        },
        "token_acct_balances_on_conflict": {
            "constraint": [
                809
            ],
            "update_columns": [
                832
            ],
            "where": [
                808
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
                897
            ],
            "tokenAcctByTokenAcct": [
                862
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
        "token_acct_balances_pk_columns_input": {
            "amount": [
                7
            ],
            "created_at": [
                797
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
                797
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
                829
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
                797
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
                810
            ],
            "_set": [
                821
            ],
            "where": [
                808
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
                840
            ],
            "_gt": [
                840
            ],
            "_gte": [
                840
            ],
            "_in": [
                840
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                840
            ],
            "_lte": [
                840
            ],
            "_neq": [
                840
            ],
            "_nin": [
                840
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
                840
            ],
            "token": [
                884
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                799,
                {
                    "distinct_on": [
                        820,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        818,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        808
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                800,
                {
                    "distinct_on": [
                        820,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        818,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        808
                    ]
                }
            ],
            "updated_at": [
                797
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate": {
            "aggregate": [
                846
            ],
            "nodes": [
                842
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp": {
            "count": [
                845
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_bool_exp_count": {
            "arguments": [
                864
            ],
            "distinct": [
                0
            ],
            "filter": [
                851
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
                849
            ],
            "count": [
                3,
                {
                    "columns": [
                        864,
                        "[token_accts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                855
            ],
            "min": [
                857
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
        "token_accts_aggregate_order_by": {
            "avg": [
                850
            ],
            "count": [
                342
            ],
            "max": [
                856
            ],
            "min": [
                858
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
        "token_accts_arr_rel_insert_input": {
            "data": [
                854
            ],
            "on_conflict": [
                861
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
                851
            ],
            "_not": [
                851
            ],
            "_or": [
                851
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
                841
            ],
            "token": [
                888
            ],
            "token_acct": [
                6
            ],
            "token_acct_balances": [
                808
            ],
            "token_acct_balances_aggregate": [
                801
            ],
            "updated_at": [
                798
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
                840
            ],
            "token": [
                895
            ],
            "token_acct": [
                5
            ],
            "token_acct_balances": [
                805
            ],
            "updated_at": [
                797
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
                840
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                797
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
                840
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                797
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
                842
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_obj_rel_insert_input": {
            "data": [
                854
            ],
            "on_conflict": [
                861
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_on_conflict": {
            "constraint": [
                852
            ],
            "update_columns": [
                876
            ],
            "where": [
                851
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
                897
            ],
            "token_acct": [
                342
            ],
            "token_acct_balances_aggregate": [
                804
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
                840
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                797
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
                873
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
                840
            ],
            "token_acct": [
                5
            ],
            "updated_at": [
                797
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
                853
            ],
            "_set": [
                865
            ],
            "where": [
                851
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
                751
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
                799,
                {
                    "distinct_on": [
                        820,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        818,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        808
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                800,
                {
                    "distinct_on": [
                        820,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        818,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        808
                    ]
                }
            ],
            "token_accts": [
                842,
                {
                    "distinct_on": [
                        864,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        851
                    ]
                }
            ],
            "token_accts_aggregate": [
                843,
                {
                    "distinct_on": [
                        864,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        851
                    ]
                }
            ],
            "updated_at": [
                797
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
                886
            ],
            "nodes": [
                884
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate_fields": {
            "avg": [
                887
            ],
            "count": [
                3,
                {
                    "columns": [
                        899,
                        "[tokens_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                892
            ],
            "min": [
                893
            ],
            "stddev": [
                901
            ],
            "stddev_pop": [
                902
            ],
            "stddev_samp": [
                903
            ],
            "sum": [
                906
            ],
            "var_pop": [
                909
            ],
            "var_samp": [
                910
            ],
            "variance": [
                911
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
                888
            ],
            "_not": [
                888
            ],
            "_or": [
                888
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
                752
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
                808
            ],
            "token_acct_balances_aggregate": [
                801
            ],
            "token_accts": [
                851
            ],
            "token_accts_aggregate": [
                844
            ],
            "updated_at": [
                798
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
                751
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
                751
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
                805
            ],
            "token_accts": [
                848
            ],
            "updated_at": [
                797
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
                751
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
                797
            ],
            "__typename": [
                5
            ]
        },
        "tokens_min_fields": {
            "decimals": [
                751
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
                797
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
                884
            ],
            "__typename": [
                5
            ]
        },
        "tokens_obj_rel_insert_input": {
            "data": [
                891
            ],
            "on_conflict": [
                896
            ],
            "__typename": [
                5
            ]
        },
        "tokens_on_conflict": {
            "constraint": [
                889
            ],
            "update_columns": [
                907
            ],
            "where": [
                888
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
                804
            ],
            "token_accts_aggregate": [
                847
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
                751
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
                797
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
                905
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
                751
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
                797
            ],
            "__typename": [
                5
            ]
        },
        "tokens_sum_fields": {
            "decimals": [
                751
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
                890
            ],
            "_set": [
                900
            ],
            "where": [
                888
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
                995
            ],
            "transaction_watcher": [
                953
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
                916
            ],
            "nodes": [
                912
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp": {
            "count": [
                915
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_bool_exp_count": {
            "arguments": [
                933
            ],
            "distinct": [
                0
            ],
            "filter": [
                921
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
                919
            ],
            "count": [
                3,
                {
                    "columns": [
                        933,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                925
            ],
            "min": [
                927
            ],
            "stddev": [
                935
            ],
            "stddev_pop": [
                937
            ],
            "stddev_samp": [
                939
            ],
            "sum": [
                943
            ],
            "var_pop": [
                947
            ],
            "var_samp": [
                949
            ],
            "variance": [
                951
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_aggregate_order_by": {
            "avg": [
                920
            ],
            "count": [
                342
            ],
            "max": [
                926
            ],
            "min": [
                928
            ],
            "stddev": [
                936
            ],
            "stddev_pop": [
                938
            ],
            "stddev_samp": [
                940
            ],
            "sum": [
                944
            ],
            "var_pop": [
                948
            ],
            "var_samp": [
                950
            ],
            "variance": [
                952
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_arr_rel_insert_input": {
            "data": [
                924
            ],
            "on_conflict": [
                930
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
                921
            ],
            "_not": [
                921
            ],
            "_or": [
                921
            ],
            "slot": [
                8
            ],
            "transaction": [
                999
            ],
            "transaction_watcher": [
                962
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
                1006
            ],
            "transaction_watcher": [
                971
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
                912
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watcher_transactions_on_conflict": {
            "constraint": [
                922
            ],
            "update_columns": [
                945
            ],
            "where": [
                921
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
                1008
            ],
            "transaction_watcher": [
                973
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
                942
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
                923
            ],
            "_set": [
                934
            ],
            "where": [
                921
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
                751
            ],
            "status": [
                5
            ],
            "transaction": [
                995
            ],
            "transactionByLatestTxSig": [
                995
            ],
            "transaction_watcher_transactions": [
                912,
                {
                    "distinct_on": [
                        933,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        931,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                913,
                {
                    "distinct_on": [
                        933,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        931,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "updated_at": [
                797
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate": {
            "aggregate": [
                957
            ],
            "nodes": [
                953
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp": {
            "count": [
                956
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_bool_exp_count": {
            "arguments": [
                975
            ],
            "distinct": [
                0
            ],
            "filter": [
                962
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
                960
            ],
            "count": [
                3,
                {
                    "columns": [
                        975,
                        "[transaction_watchers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                966
            ],
            "min": [
                968
            ],
            "stddev": [
                977
            ],
            "stddev_pop": [
                979
            ],
            "stddev_samp": [
                981
            ],
            "sum": [
                985
            ],
            "var_pop": [
                989
            ],
            "var_samp": [
                991
            ],
            "variance": [
                993
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_aggregate_order_by": {
            "avg": [
                961
            ],
            "count": [
                342
            ],
            "max": [
                967
            ],
            "min": [
                969
            ],
            "stddev": [
                978
            ],
            "stddev_pop": [
                980
            ],
            "stddev_samp": [
                982
            ],
            "sum": [
                986
            ],
            "var_pop": [
                990
            ],
            "var_samp": [
                992
            ],
            "variance": [
                994
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_arr_rel_insert_input": {
            "data": [
                965
            ],
            "on_conflict": [
                972
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
                962
            ],
            "_not": [
                962
            ],
            "_or": [
                962
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
                752
            ],
            "status": [
                6
            ],
            "transaction": [
                999
            ],
            "transactionByLatestTxSig": [
                999
            ],
            "transaction_watcher_transactions": [
                921
            ],
            "transaction_watcher_transactions_aggregate": [
                914
            ],
            "updated_at": [
                798
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
                751
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
                751
            ],
            "status": [
                5
            ],
            "transaction": [
                1006
            ],
            "transactionByLatestTxSig": [
                1006
            ],
            "transaction_watcher_transactions": [
                918
            ],
            "updated_at": [
                797
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
                751
            ],
            "status": [
                5
            ],
            "updated_at": [
                797
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
                751
            ],
            "status": [
                5
            ],
            "updated_at": [
                797
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
                953
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_obj_rel_insert_input": {
            "data": [
                965
            ],
            "on_conflict": [
                972
            ],
            "__typename": [
                5
            ]
        },
        "transaction_watchers_on_conflict": {
            "constraint": [
                963
            ],
            "update_columns": [
                987
            ],
            "where": [
                962
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
                1008
            ],
            "transactionByLatestTxSig": [
                1008
            ],
            "transaction_watcher_transactions_aggregate": [
                917
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
                751
            ],
            "status": [
                5
            ],
            "updated_at": [
                797
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
                984
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
                751
            ],
            "status": [
                5
            ],
            "updated_at": [
                797
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
                751
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
                964
            ],
            "_set": [
                976
            ],
            "where": [
                962
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
                797
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
                751
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                953,
                {
                    "distinct_on": [
                        975,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        973,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        962
                    ]
                }
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                954,
                {
                    "distinct_on": [
                        975,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        973,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        962
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                912,
                {
                    "distinct_on": [
                        933,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        931,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                913,
                {
                    "distinct_on": [
                        933,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        931,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "transaction_watchers": [
                953,
                {
                    "distinct_on": [
                        975,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        973,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        962
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                954,
                {
                    "distinct_on": [
                        975,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        973,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        962
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
                997
            ],
            "nodes": [
                995
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                998
            ],
            "count": [
                3,
                {
                    "columns": [
                        1010,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1003
            ],
            "min": [
                1004
            ],
            "stddev": [
                1012
            ],
            "stddev_pop": [
                1013
            ],
            "stddev_samp": [
                1014
            ],
            "sum": [
                1017
            ],
            "var_pop": [
                1020
            ],
            "var_samp": [
                1021
            ],
            "variance": [
                1022
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
                999
            ],
            "_not": [
                999
            ],
            "_or": [
                999
            ],
            "block_time": [
                798
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
                752
            ],
            "slot": [
                8
            ],
            "transactionWatchersByLatestTxSig": [
                962
            ],
            "transactionWatchersByLatestTxSig_aggregate": [
                955
            ],
            "transaction_watcher_transactions": [
                921
            ],
            "transaction_watcher_transactions_aggregate": [
                914
            ],
            "transaction_watchers": [
                962
            ],
            "transaction_watchers_aggregate": [
                955
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
                751
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
                797
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
                751
            ],
            "slot": [
                7
            ],
            "transactionWatchersByLatestTxSig": [
                959
            ],
            "transaction_watcher_transactions": [
                918
            ],
            "transaction_watchers": [
                959
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
                797
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                751
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
                797
            ],
            "main_ix_type": [
                5
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                751
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
                995
            ],
            "__typename": [
                5
            ]
        },
        "transactions_obj_rel_insert_input": {
            "data": [
                1002
            ],
            "on_conflict": [
                1007
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                1000
            ],
            "update_columns": [
                1018
            ],
            "where": [
                999
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
            "transactionWatchersByLatestTxSig_aggregate": [
                958
            ],
            "transaction_watcher_transactions_aggregate": [
                917
            ],
            "transaction_watchers_aggregate": [
                958
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
                797
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
                751
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
                1016
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
                797
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
                751
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
                751
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
                1001
            ],
            "_set": [
                1011
            ],
            "where": [
                999
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
                797
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
                1025
            ],
            "nodes": [
                1023
            ],
            "__typename": [
                5
            ]
        },
        "twap_chart_data_aggregate_fields": {
            "avg": [
                1026
            ],
            "count": [
                3,
                {
                    "columns": [
                        1031,
                        "[twap_chart_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1028
            ],
            "min": [
                1029
            ],
            "stddev": [
                1032
            ],
            "stddev_pop": [
                1033
            ],
            "stddev_samp": [
                1034
            ],
            "sum": [
                1037
            ],
            "var_pop": [
                1038
            ],
            "var_samp": [
                1039
            ],
            "variance": [
                1040
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
                1027
            ],
            "_not": [
                1027
            ],
            "_or": [
                1027
            ],
            "interv": [
                798
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
        "twap_chart_data_max_fields": {
            "interv": [
                797
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
                797
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
                1036
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
                797
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
                797
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
                626
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
                1045
            ],
            "nodes": [
                1041
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp": {
            "count": [
                1044
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_bool_exp_count": {
            "arguments": [
                1062
            ],
            "distinct": [
                0
            ],
            "filter": [
                1050
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
                1048
            ],
            "count": [
                3,
                {
                    "columns": [
                        1062,
                        "[twaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1054
            ],
            "min": [
                1056
            ],
            "stddev": [
                1064
            ],
            "stddev_pop": [
                1066
            ],
            "stddev_samp": [
                1068
            ],
            "sum": [
                1072
            ],
            "var_pop": [
                1076
            ],
            "var_samp": [
                1078
            ],
            "variance": [
                1080
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_order_by": {
            "avg": [
                1049
            ],
            "count": [
                342
            ],
            "max": [
                1055
            ],
            "min": [
                1057
            ],
            "stddev": [
                1065
            ],
            "stddev_pop": [
                1067
            ],
            "stddev_samp": [
                1069
            ],
            "sum": [
                1073
            ],
            "var_pop": [
                1077
            ],
            "var_samp": [
                1079
            ],
            "variance": [
                1081
            ],
            "__typename": [
                5
            ]
        },
        "twaps_arr_rel_insert_input": {
            "data": [
                1053
            ],
            "on_conflict": [
                1059
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
                1050
            ],
            "_not": [
                1050
            ],
            "_or": [
                1050
            ],
            "created_at": [
                798
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
                645
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
                797
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
                654
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
                797
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
                797
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
                1041
            ],
            "__typename": [
                5
            ]
        },
        "twaps_on_conflict": {
            "constraint": [
                1051
            ],
            "update_columns": [
                1074
            ],
            "where": [
                1050
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
                656
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
                797
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
                1071
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
                797
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
                1052
            ],
            "_set": [
                1063
            ],
            "where": [
                1050
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
        "users": {
            "created_at": [
                797
            ],
            "sessions": [
                727,
                {
                    "distinct_on": [
                        745,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        743,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        734
                    ]
                }
            ],
            "sessions_aggregate": [
                728,
                {
                    "distinct_on": [
                        745,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        743,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        734
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
                1084
            ],
            "nodes": [
                1082
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
                        1095,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                1088
            ],
            "min": [
                1089
            ],
            "__typename": [
                5
            ]
        },
        "users_bool_exp": {
            "_and": [
                1085
            ],
            "_not": [
                1085
            ],
            "_or": [
                1085
            ],
            "created_at": [
                798
            ],
            "sessions": [
                734
            ],
            "sessions_aggregate": [
                729
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
                797
            ],
            "sessions": [
                733
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
                797
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
                797
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
                1082
            ],
            "__typename": [
                5
            ]
        },
        "users_obj_rel_insert_input": {
            "data": [
                1087
            ],
            "on_conflict": [
                1092
            ],
            "__typename": [
                5
            ]
        },
        "users_on_conflict": {
            "constraint": [
                1086
            ],
            "update_columns": [
                1099
            ],
            "where": [
                1085
            ],
            "__typename": [
                5
            ]
        },
        "users_order_by": {
            "created_at": [
                342
            ],
            "sessions_aggregate": [
                732
            ],
            "user_acct": [
                342
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
                797
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
                1098
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
                797
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
                1096
            ],
            "where": [
                1085
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                1101
            ],
            "_gt": [
                1101
            ],
            "_gte": [
                1101
            ],
            "_in": [
                1101
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                1101
            ],
            "_lte": [
                1101
            ],
            "_neq": [
                1101
            ],
            "_nin": [
                1101
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
                        797,
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
                        428,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        426,
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
                        428,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        426,
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
                        797,
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
                        407,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
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
                        407,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
                        "[prices_chart_data_order_by!]"
                    ],
                    "where": [
                        403
                    ]
                }
            ],
            "program_system": [
                448,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "program_system_aggregate": [
                449,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "program_system_by_pk": [
                448,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "programs": [
                507,
                {
                    "distinct_on": [
                        522,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        520,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        511
                    ]
                }
            ],
            "programs_aggregate": [
                508,
                {
                    "distinct_on": [
                        522,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        520,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        511
                    ]
                }
            ],
            "programs_by_pk": [
                507,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_bars": [
                535,
                {
                    "distinct_on": [
                        549,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        547,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        539
                    ]
                }
            ],
            "proposal_bars_aggregate": [
                536,
                {
                    "distinct_on": [
                        549,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        547,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        539
                    ]
                }
            ],
            "proposal_bars_by_pk": [
                535,
                {
                    "bar_size": [
                        247,
                        "interval!"
                    ],
                    "bar_start_time": [
                        797,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_details": [
                562,
                {
                    "distinct_on": [
                        588,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        585,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "proposal_details_aggregate": [
                563,
                {
                    "distinct_on": [
                        588,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        585,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "proposal_details_by_pk": [
                562,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                608,
                {
                    "distinct_on": [
                        616,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        615,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        612
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                609,
                {
                    "distinct_on": [
                        616,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        615,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        612
                    ]
                }
            ],
            "proposals": [
                626,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
                    ]
                }
            ],
            "proposals_aggregate": [
                627,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
                    ]
                }
            ],
            "proposals_by_pk": [
                626,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "reactions": [
                686,
                {
                    "distinct_on": [
                        707,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        705,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        695
                    ]
                }
            ],
            "reactions_aggregate": [
                687,
                {
                    "distinct_on": [
                        707,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        705,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        695
                    ]
                }
            ],
            "reactions_by_pk": [
                686,
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
                727,
                {
                    "distinct_on": [
                        745,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        743,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        734
                    ]
                }
            ],
            "sessions_aggregate": [
                728,
                {
                    "distinct_on": [
                        745,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        743,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        734
                    ]
                }
            ],
            "sessions_by_pk": [
                727,
                {
                    "id": [
                        1101,
                        "uuid!"
                    ]
                }
            ],
            "takes": [
                753,
                {
                    "distinct_on": [
                        775,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        773,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        762
                    ]
                }
            ],
            "takes_aggregate": [
                754,
                {
                    "distinct_on": [
                        775,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        773,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        762
                    ]
                }
            ],
            "takes_by_pk": [
                753,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_acct_balances": [
                799,
                {
                    "distinct_on": [
                        820,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        818,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        808
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                800,
                {
                    "distinct_on": [
                        820,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        818,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        808
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                799,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        797,
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
                842,
                {
                    "distinct_on": [
                        864,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        851
                    ]
                }
            ],
            "token_accts_aggregate": [
                843,
                {
                    "distinct_on": [
                        864,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        851
                    ]
                }
            ],
            "token_accts_by_pk": [
                842,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens": [
                884,
                {
                    "distinct_on": [
                        899,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        897,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        888
                    ]
                }
            ],
            "tokens_aggregate": [
                885,
                {
                    "distinct_on": [
                        899,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        897,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        888
                    ]
                }
            ],
            "tokens_by_pk": [
                884,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                912,
                {
                    "distinct_on": [
                        933,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        931,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                913,
                {
                    "distinct_on": [
                        933,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        931,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                912,
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
                953,
                {
                    "distinct_on": [
                        975,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        973,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        962
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                954,
                {
                    "distinct_on": [
                        975,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        973,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        962
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                953,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                995,
                {
                    "distinct_on": [
                        1010,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1008,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        999
                    ]
                }
            ],
            "transactions_aggregate": [
                996,
                {
                    "distinct_on": [
                        1010,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1008,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        999
                    ]
                }
            ],
            "transactions_by_pk": [
                995,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "twap_chart_data": [
                1023,
                {
                    "distinct_on": [
                        1031,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1030,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1027
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1024,
                {
                    "distinct_on": [
                        1031,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1030,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1027
                    ]
                }
            ],
            "twaps": [
                1041,
                {
                    "distinct_on": [
                        1062,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1060,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1050
                    ]
                }
            ],
            "twaps_aggregate": [
                1042,
                {
                    "distinct_on": [
                        1062,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1060,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1050
                    ]
                }
            ],
            "twaps_by_pk": [
                1041,
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
                1082,
                {
                    "distinct_on": [
                        1095,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1093,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1085
                    ]
                }
            ],
            "users_aggregate": [
                1083,
                {
                    "distinct_on": [
                        1095,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1093,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1085
                    ]
                }
            ],
            "users_by_pk": [
                1082,
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
                        797,
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
                424,
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
                        797,
                        "timestamptz!"
                    ],
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_program_system": [
                475,
                {
                    "where": [
                        467,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "delete_program_system_by_pk": [
                448,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "delete_programs": [
                517,
                {
                    "where": [
                        511,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "delete_programs_by_pk": [
                507,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_bars": [
                545,
                {
                    "where": [
                        539,
                        "proposal_bars_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_bars_by_pk": [
                535,
                {
                    "bar_size": [
                        247,
                        "interval!"
                    ],
                    "bar_start_time": [
                        797,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_details": [
                583,
                {
                    "where": [
                        572,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_details_by_pk": [
                562,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_proposals": [
                653,
                {
                    "where": [
                        645,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "delete_proposals_by_pk": [
                626,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_reactions": [
                703,
                {
                    "where": [
                        695,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "delete_reactions_by_pk": [
                686,
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
                741,
                {
                    "where": [
                        734,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "delete_sessions_by_pk": [
                727,
                {
                    "id": [
                        1101,
                        "uuid!"
                    ]
                }
            ],
            "delete_takes": [
                770,
                {
                    "where": [
                        762,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "delete_takes_by_pk": [
                753,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_acct_balances": [
                816,
                {
                    "where": [
                        808,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "delete_token_acct_balances_by_pk": [
                799,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        797,
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
                859,
                {
                    "where": [
                        851,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "delete_token_accts_by_pk": [
                842,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_tokens": [
                894,
                {
                    "where": [
                        888,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "delete_tokens_by_pk": [
                884,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions": [
                929,
                {
                    "where": [
                        921,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watcher_transactions_by_pk": [
                912,
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
                970,
                {
                    "where": [
                        962,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "delete_transaction_watchers_by_pk": [
                953,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                1005,
                {
                    "where": [
                        999,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                995,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_twaps": [
                1058,
                {
                    "where": [
                        1050,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "delete_twaps_by_pk": [
                1041,
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
                1090,
                {
                    "where": [
                        1085,
                        "users_bool_exp!"
                    ]
                }
            ],
            "delete_users_by_pk": [
                1082,
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
                424,
                {
                    "objects": [
                        419,
                        "[prices_insert_input!]!"
                    ],
                    "on_conflict": [
                        425
                    ]
                }
            ],
            "insert_prices_one": [
                389,
                {
                    "object": [
                        419,
                        "prices_insert_input!"
                    ],
                    "on_conflict": [
                        425
                    ]
                }
            ],
            "insert_program_system": [
                475,
                {
                    "objects": [
                        470,
                        "[program_system_insert_input!]!"
                    ],
                    "on_conflict": [
                        476
                    ]
                }
            ],
            "insert_program_system_one": [
                448,
                {
                    "object": [
                        470,
                        "program_system_insert_input!"
                    ],
                    "on_conflict": [
                        476
                    ]
                }
            ],
            "insert_programs": [
                517,
                {
                    "objects": [
                        514,
                        "[programs_insert_input!]!"
                    ],
                    "on_conflict": [
                        519
                    ]
                }
            ],
            "insert_programs_one": [
                507,
                {
                    "object": [
                        514,
                        "programs_insert_input!"
                    ],
                    "on_conflict": [
                        519
                    ]
                }
            ],
            "insert_proposal_bars": [
                545,
                {
                    "objects": [
                        542,
                        "[proposal_bars_insert_input!]!"
                    ],
                    "on_conflict": [
                        546
                    ]
                }
            ],
            "insert_proposal_bars_one": [
                535,
                {
                    "object": [
                        542,
                        "proposal_bars_insert_input!"
                    ],
                    "on_conflict": [
                        546
                    ]
                }
            ],
            "insert_proposal_details": [
                583,
                {
                    "objects": [
                        578,
                        "[proposal_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        584
                    ]
                }
            ],
            "insert_proposal_details_one": [
                562,
                {
                    "object": [
                        578,
                        "proposal_details_insert_input!"
                    ],
                    "on_conflict": [
                        584
                    ]
                }
            ],
            "insert_proposals": [
                653,
                {
                    "objects": [
                        648,
                        "[proposals_insert_input!]!"
                    ],
                    "on_conflict": [
                        655
                    ]
                }
            ],
            "insert_proposals_one": [
                626,
                {
                    "object": [
                        648,
                        "proposals_insert_input!"
                    ],
                    "on_conflict": [
                        655
                    ]
                }
            ],
            "insert_reactions": [
                703,
                {
                    "objects": [
                        698,
                        "[reactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        704
                    ]
                }
            ],
            "insert_reactions_one": [
                686,
                {
                    "object": [
                        698,
                        "reactions_insert_input!"
                    ],
                    "on_conflict": [
                        704
                    ]
                }
            ],
            "insert_sessions": [
                741,
                {
                    "objects": [
                        736,
                        "[sessions_insert_input!]!"
                    ],
                    "on_conflict": [
                        742
                    ]
                }
            ],
            "insert_sessions_one": [
                727,
                {
                    "object": [
                        736,
                        "sessions_insert_input!"
                    ],
                    "on_conflict": [
                        742
                    ]
                }
            ],
            "insert_takes": [
                770,
                {
                    "objects": [
                        765,
                        "[takes_insert_input!]!"
                    ],
                    "on_conflict": [
                        772
                    ]
                }
            ],
            "insert_takes_one": [
                753,
                {
                    "object": [
                        765,
                        "takes_insert_input!"
                    ],
                    "on_conflict": [
                        772
                    ]
                }
            ],
            "insert_token_acct_balances": [
                816,
                {
                    "objects": [
                        811,
                        "[token_acct_balances_insert_input!]!"
                    ],
                    "on_conflict": [
                        817
                    ]
                }
            ],
            "insert_token_acct_balances_one": [
                799,
                {
                    "object": [
                        811,
                        "token_acct_balances_insert_input!"
                    ],
                    "on_conflict": [
                        817
                    ]
                }
            ],
            "insert_token_accts": [
                859,
                {
                    "objects": [
                        854,
                        "[token_accts_insert_input!]!"
                    ],
                    "on_conflict": [
                        861
                    ]
                }
            ],
            "insert_token_accts_one": [
                842,
                {
                    "object": [
                        854,
                        "token_accts_insert_input!"
                    ],
                    "on_conflict": [
                        861
                    ]
                }
            ],
            "insert_tokens": [
                894,
                {
                    "objects": [
                        891,
                        "[tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        896
                    ]
                }
            ],
            "insert_tokens_one": [
                884,
                {
                    "object": [
                        891,
                        "tokens_insert_input!"
                    ],
                    "on_conflict": [
                        896
                    ]
                }
            ],
            "insert_transaction_watcher_transactions": [
                929,
                {
                    "objects": [
                        924,
                        "[transaction_watcher_transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        930
                    ]
                }
            ],
            "insert_transaction_watcher_transactions_one": [
                912,
                {
                    "object": [
                        924,
                        "transaction_watcher_transactions_insert_input!"
                    ],
                    "on_conflict": [
                        930
                    ]
                }
            ],
            "insert_transaction_watchers": [
                970,
                {
                    "objects": [
                        965,
                        "[transaction_watchers_insert_input!]!"
                    ],
                    "on_conflict": [
                        972
                    ]
                }
            ],
            "insert_transaction_watchers_one": [
                953,
                {
                    "object": [
                        965,
                        "transaction_watchers_insert_input!"
                    ],
                    "on_conflict": [
                        972
                    ]
                }
            ],
            "insert_transactions": [
                1005,
                {
                    "objects": [
                        1002,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        1007
                    ]
                }
            ],
            "insert_transactions_one": [
                995,
                {
                    "object": [
                        1002,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        1007
                    ]
                }
            ],
            "insert_twaps": [
                1058,
                {
                    "objects": [
                        1053,
                        "[twaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        1059
                    ]
                }
            ],
            "insert_twaps_one": [
                1041,
                {
                    "object": [
                        1053,
                        "twaps_insert_input!"
                    ],
                    "on_conflict": [
                        1059
                    ]
                }
            ],
            "insert_users": [
                1090,
                {
                    "objects": [
                        1087,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        1092
                    ]
                }
            ],
            "insert_users_one": [
                1082,
                {
                    "object": [
                        1087,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        1092
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
                424,
                {
                    "_inc": [
                        418
                    ],
                    "_set": [
                        429
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
                        418
                    ],
                    "_set": [
                        429
                    ],
                    "pk_columns": [
                        427,
                        "prices_pk_columns_input!"
                    ]
                }
            ],
            "update_prices_many": [
                424,
                {
                    "updates": [
                        441,
                        "[prices_updates!]!"
                    ]
                }
            ],
            "update_program_system": [
                475,
                {
                    "_inc": [
                        469
                    ],
                    "_set": [
                        488
                    ],
                    "where": [
                        467,
                        "program_system_bool_exp!"
                    ]
                }
            ],
            "update_program_system_by_pk": [
                448,
                {
                    "_inc": [
                        469
                    ],
                    "_set": [
                        488
                    ],
                    "pk_columns": [
                        478,
                        "program_system_pk_columns_input!"
                    ]
                }
            ],
            "update_program_system_many": [
                475,
                {
                    "updates": [
                        500,
                        "[program_system_updates!]!"
                    ]
                }
            ],
            "update_programs": [
                517,
                {
                    "_inc": [
                        513
                    ],
                    "_set": [
                        523
                    ],
                    "where": [
                        511,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "update_programs_by_pk": [
                507,
                {
                    "_inc": [
                        513
                    ],
                    "_set": [
                        523
                    ],
                    "pk_columns": [
                        521,
                        "programs_pk_columns_input!"
                    ]
                }
            ],
            "update_programs_many": [
                517,
                {
                    "updates": [
                        531,
                        "[programs_updates!]!"
                    ]
                }
            ],
            "update_proposal_bars": [
                545,
                {
                    "_inc": [
                        541
                    ],
                    "_set": [
                        550
                    ],
                    "where": [
                        539,
                        "proposal_bars_bool_exp!"
                    ]
                }
            ],
            "update_proposal_bars_by_pk": [
                535,
                {
                    "_inc": [
                        541
                    ],
                    "_set": [
                        550
                    ],
                    "pk_columns": [
                        548,
                        "proposal_bars_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_bars_many": [
                545,
                {
                    "updates": [
                        558,
                        "[proposal_bars_updates!]!"
                    ]
                }
            ],
            "update_proposal_details": [
                583,
                {
                    "_append": [
                        568
                    ],
                    "_delete_at_path": [
                        574
                    ],
                    "_delete_elem": [
                        575
                    ],
                    "_delete_key": [
                        576
                    ],
                    "_inc": [
                        577
                    ],
                    "_prepend": [
                        587
                    ],
                    "_set": [
                        589
                    ],
                    "where": [
                        572,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "update_proposal_details_by_pk": [
                562,
                {
                    "_append": [
                        568
                    ],
                    "_delete_at_path": [
                        574
                    ],
                    "_delete_elem": [
                        575
                    ],
                    "_delete_key": [
                        576
                    ],
                    "_inc": [
                        577
                    ],
                    "_prepend": [
                        587
                    ],
                    "_set": [
                        589
                    ],
                    "pk_columns": [
                        586,
                        "proposal_details_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_details_many": [
                583,
                {
                    "updates": [
                        601,
                        "[proposal_details_updates!]!"
                    ]
                }
            ],
            "update_proposals": [
                653,
                {
                    "_inc": [
                        647
                    ],
                    "_set": [
                        667
                    ],
                    "where": [
                        645,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "update_proposals_by_pk": [
                626,
                {
                    "_inc": [
                        647
                    ],
                    "_set": [
                        667
                    ],
                    "pk_columns": [
                        657,
                        "proposals_pk_columns_input!"
                    ]
                }
            ],
            "update_proposals_many": [
                653,
                {
                    "updates": [
                        679,
                        "[proposals_updates!]!"
                    ]
                }
            ],
            "update_reactions": [
                703,
                {
                    "_inc": [
                        697
                    ],
                    "_set": [
                        708
                    ],
                    "where": [
                        695,
                        "reactions_bool_exp!"
                    ]
                }
            ],
            "update_reactions_by_pk": [
                686,
                {
                    "_inc": [
                        697
                    ],
                    "_set": [
                        708
                    ],
                    "pk_columns": [
                        706,
                        "reactions_pk_columns_input!"
                    ]
                }
            ],
            "update_reactions_many": [
                703,
                {
                    "updates": [
                        720,
                        "[reactions_updates!]!"
                    ]
                }
            ],
            "update_sessions": [
                741,
                {
                    "_set": [
                        746
                    ],
                    "where": [
                        734,
                        "sessions_bool_exp!"
                    ]
                }
            ],
            "update_sessions_by_pk": [
                727,
                {
                    "_set": [
                        746
                    ],
                    "pk_columns": [
                        744,
                        "sessions_pk_columns_input!"
                    ]
                }
            ],
            "update_sessions_many": [
                741,
                {
                    "updates": [
                        750,
                        "[sessions_updates!]!"
                    ]
                }
            ],
            "update_takes": [
                770,
                {
                    "_inc": [
                        764
                    ],
                    "_set": [
                        776
                    ],
                    "where": [
                        762,
                        "takes_bool_exp!"
                    ]
                }
            ],
            "update_takes_by_pk": [
                753,
                {
                    "_inc": [
                        764
                    ],
                    "_set": [
                        776
                    ],
                    "pk_columns": [
                        774,
                        "takes_pk_columns_input!"
                    ]
                }
            ],
            "update_takes_many": [
                770,
                {
                    "updates": [
                        788,
                        "[takes_updates!]!"
                    ]
                }
            ],
            "update_token_acct_balances": [
                816,
                {
                    "_inc": [
                        810
                    ],
                    "_set": [
                        821
                    ],
                    "where": [
                        808,
                        "token_acct_balances_bool_exp!"
                    ]
                }
            ],
            "update_token_acct_balances_by_pk": [
                799,
                {
                    "_inc": [
                        810
                    ],
                    "_set": [
                        821
                    ],
                    "pk_columns": [
                        819,
                        "token_acct_balances_pk_columns_input!"
                    ]
                }
            ],
            "update_token_acct_balances_many": [
                816,
                {
                    "updates": [
                        833,
                        "[token_acct_balances_updates!]!"
                    ]
                }
            ],
            "update_token_accts": [
                859,
                {
                    "_inc": [
                        853
                    ],
                    "_set": [
                        865
                    ],
                    "where": [
                        851,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "update_token_accts_by_pk": [
                842,
                {
                    "_inc": [
                        853
                    ],
                    "_set": [
                        865
                    ],
                    "pk_columns": [
                        863,
                        "token_accts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_accts_many": [
                859,
                {
                    "updates": [
                        877,
                        "[token_accts_updates!]!"
                    ]
                }
            ],
            "update_tokens": [
                894,
                {
                    "_inc": [
                        890
                    ],
                    "_set": [
                        900
                    ],
                    "where": [
                        888,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "update_tokens_by_pk": [
                884,
                {
                    "_inc": [
                        890
                    ],
                    "_set": [
                        900
                    ],
                    "pk_columns": [
                        898,
                        "tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_tokens_many": [
                894,
                {
                    "updates": [
                        908,
                        "[tokens_updates!]!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions": [
                929,
                {
                    "_inc": [
                        923
                    ],
                    "_set": [
                        934
                    ],
                    "where": [
                        921,
                        "transaction_watcher_transactions_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_by_pk": [
                912,
                {
                    "_inc": [
                        923
                    ],
                    "_set": [
                        934
                    ],
                    "pk_columns": [
                        932,
                        "transaction_watcher_transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watcher_transactions_many": [
                929,
                {
                    "updates": [
                        946,
                        "[transaction_watcher_transactions_updates!]!"
                    ]
                }
            ],
            "update_transaction_watchers": [
                970,
                {
                    "_inc": [
                        964
                    ],
                    "_set": [
                        976
                    ],
                    "where": [
                        962,
                        "transaction_watchers_bool_exp!"
                    ]
                }
            ],
            "update_transaction_watchers_by_pk": [
                953,
                {
                    "_inc": [
                        964
                    ],
                    "_set": [
                        976
                    ],
                    "pk_columns": [
                        974,
                        "transaction_watchers_pk_columns_input!"
                    ]
                }
            ],
            "update_transaction_watchers_many": [
                970,
                {
                    "updates": [
                        988,
                        "[transaction_watchers_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                1005,
                {
                    "_inc": [
                        1001
                    ],
                    "_set": [
                        1011
                    ],
                    "where": [
                        999,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                995,
                {
                    "_inc": [
                        1001
                    ],
                    "_set": [
                        1011
                    ],
                    "pk_columns": [
                        1009,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                1005,
                {
                    "updates": [
                        1019,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_twaps": [
                1058,
                {
                    "_inc": [
                        1052
                    ],
                    "_set": [
                        1063
                    ],
                    "where": [
                        1050,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "update_twaps_by_pk": [
                1041,
                {
                    "_inc": [
                        1052
                    ],
                    "_set": [
                        1063
                    ],
                    "pk_columns": [
                        1061,
                        "twaps_pk_columns_input!"
                    ]
                }
            ],
            "update_twaps_many": [
                1058,
                {
                    "updates": [
                        1075,
                        "[twaps_updates!]!"
                    ]
                }
            ],
            "update_users": [
                1090,
                {
                    "_set": [
                        1096
                    ],
                    "where": [
                        1085,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_by_pk": [
                1082,
                {
                    "_set": [
                        1096
                    ],
                    "pk_columns": [
                        1094,
                        "users_pk_columns_input!"
                    ]
                }
            ],
            "update_users_many": [
                1090,
                {
                    "updates": [
                        1100,
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
                        797,
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
                        428,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        426,
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
                        428,
                        "[prices_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        426,
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
                        797,
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
                        407,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
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
                        407,
                        "[prices_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        406,
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
                        411,
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
                        436,
                        "[prices_stream_cursor_input]!"
                    ],
                    "where": [
                        398
                    ]
                }
            ],
            "program_system": [
                448,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "program_system_aggregate": [
                449,
                {
                    "distinct_on": [
                        479,
                        "[program_system_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        477,
                        "[program_system_order_by!]"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "program_system_by_pk": [
                448,
                {
                    "system_version": [
                        193,
                        "float8!"
                    ]
                }
            ],
            "program_system_stream": [
                448,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        495,
                        "[program_system_stream_cursor_input]!"
                    ],
                    "where": [
                        467
                    ]
                }
            ],
            "programs": [
                507,
                {
                    "distinct_on": [
                        522,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        520,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        511
                    ]
                }
            ],
            "programs_aggregate": [
                508,
                {
                    "distinct_on": [
                        522,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        520,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        511
                    ]
                }
            ],
            "programs_by_pk": [
                507,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs_stream": [
                507,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        527,
                        "[programs_stream_cursor_input]!"
                    ],
                    "where": [
                        511
                    ]
                }
            ],
            "proposal_bars": [
                535,
                {
                    "distinct_on": [
                        549,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        547,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        539
                    ]
                }
            ],
            "proposal_bars_aggregate": [
                536,
                {
                    "distinct_on": [
                        549,
                        "[proposal_bars_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        547,
                        "[proposal_bars_order_by!]"
                    ],
                    "where": [
                        539
                    ]
                }
            ],
            "proposal_bars_by_pk": [
                535,
                {
                    "bar_size": [
                        247,
                        "interval!"
                    ],
                    "bar_start_time": [
                        797,
                        "timestamptz!"
                    ],
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_bars_stream": [
                535,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        554,
                        "[proposal_bars_stream_cursor_input]!"
                    ],
                    "where": [
                        539
                    ]
                }
            ],
            "proposal_details": [
                562,
                {
                    "distinct_on": [
                        588,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        585,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "proposal_details_aggregate": [
                563,
                {
                    "distinct_on": [
                        588,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        585,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "proposal_details_by_pk": [
                562,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_details_stream": [
                562,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        596,
                        "[proposal_details_stream_cursor_input]!"
                    ],
                    "where": [
                        572
                    ]
                }
            ],
            "proposal_total_trade_volume": [
                608,
                {
                    "distinct_on": [
                        616,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        615,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        612
                    ]
                }
            ],
            "proposal_total_trade_volume_aggregate": [
                609,
                {
                    "distinct_on": [
                        616,
                        "[proposal_total_trade_volume_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        615,
                        "[proposal_total_trade_volume_order_by!]"
                    ],
                    "where": [
                        612
                    ]
                }
            ],
            "proposal_total_trade_volume_stream": [
                608,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        620,
                        "[proposal_total_trade_volume_stream_cursor_input]!"
                    ],
                    "where": [
                        612
                    ]
                }
            ],
            "proposals": [
                626,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
                    ]
                }
            ],
            "proposals_aggregate": [
                627,
                {
                    "distinct_on": [
                        658,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        656,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        645
                    ]
                }
            ],
            "proposals_by_pk": [
                626,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposals_stream": [
                626,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        674,
                        "[proposals_stream_cursor_input]!"
                    ],
                    "where": [
                        645
                    ]
                }
            ],
            "reactions": [
                686,
                {
                    "distinct_on": [
                        707,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        705,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        695
                    ]
                }
            ],
            "reactions_aggregate": [
                687,
                {
                    "distinct_on": [
                        707,
                        "[reactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        705,
                        "[reactions_order_by!]"
                    ],
                    "where": [
                        695
                    ]
                }
            ],
            "reactions_by_pk": [
                686,
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
                686,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        715,
                        "[reactions_stream_cursor_input]!"
                    ],
                    "where": [
                        695
                    ]
                }
            ],
            "sessions": [
                727,
                {
                    "distinct_on": [
                        745,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        743,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        734
                    ]
                }
            ],
            "sessions_aggregate": [
                728,
                {
                    "distinct_on": [
                        745,
                        "[sessions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        743,
                        "[sessions_order_by!]"
                    ],
                    "where": [
                        734
                    ]
                }
            ],
            "sessions_by_pk": [
                727,
                {
                    "id": [
                        1101,
                        "uuid!"
                    ]
                }
            ],
            "sessions_stream": [
                727,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        747,
                        "[sessions_stream_cursor_input]!"
                    ],
                    "where": [
                        734
                    ]
                }
            ],
            "takes": [
                753,
                {
                    "distinct_on": [
                        775,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        773,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        762
                    ]
                }
            ],
            "takes_aggregate": [
                754,
                {
                    "distinct_on": [
                        775,
                        "[takes_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        773,
                        "[takes_order_by!]"
                    ],
                    "where": [
                        762
                    ]
                }
            ],
            "takes_by_pk": [
                753,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "takes_stream": [
                753,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        783,
                        "[takes_stream_cursor_input]!"
                    ],
                    "where": [
                        762
                    ]
                }
            ],
            "token_acct_balances": [
                799,
                {
                    "distinct_on": [
                        820,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        818,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        808
                    ]
                }
            ],
            "token_acct_balances_aggregate": [
                800,
                {
                    "distinct_on": [
                        820,
                        "[token_acct_balances_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        818,
                        "[token_acct_balances_order_by!]"
                    ],
                    "where": [
                        808
                    ]
                }
            ],
            "token_acct_balances_by_pk": [
                799,
                {
                    "amount": [
                        7,
                        "bigint!"
                    ],
                    "created_at": [
                        797,
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
                799,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        828,
                        "[token_acct_balances_stream_cursor_input]!"
                    ],
                    "where": [
                        808
                    ]
                }
            ],
            "token_accts": [
                842,
                {
                    "distinct_on": [
                        864,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        851
                    ]
                }
            ],
            "token_accts_aggregate": [
                843,
                {
                    "distinct_on": [
                        864,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        862,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        851
                    ]
                }
            ],
            "token_accts_by_pk": [
                842,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts_stream": [
                842,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        872,
                        "[token_accts_stream_cursor_input]!"
                    ],
                    "where": [
                        851
                    ]
                }
            ],
            "tokens": [
                884,
                {
                    "distinct_on": [
                        899,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        897,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        888
                    ]
                }
            ],
            "tokens_aggregate": [
                885,
                {
                    "distinct_on": [
                        899,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        897,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        888
                    ]
                }
            ],
            "tokens_by_pk": [
                884,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens_stream": [
                884,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        904,
                        "[tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        888
                    ]
                }
            ],
            "transaction_watcher_transactions": [
                912,
                {
                    "distinct_on": [
                        933,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        931,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "transaction_watcher_transactions_aggregate": [
                913,
                {
                    "distinct_on": [
                        933,
                        "[transaction_watcher_transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        931,
                        "[transaction_watcher_transactions_order_by!]"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "transaction_watcher_transactions_by_pk": [
                912,
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
                912,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        941,
                        "[transaction_watcher_transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        921
                    ]
                }
            ],
            "transaction_watchers": [
                953,
                {
                    "distinct_on": [
                        975,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        973,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        962
                    ]
                }
            ],
            "transaction_watchers_aggregate": [
                954,
                {
                    "distinct_on": [
                        975,
                        "[transaction_watchers_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        973,
                        "[transaction_watchers_order_by!]"
                    ],
                    "where": [
                        962
                    ]
                }
            ],
            "transaction_watchers_by_pk": [
                953,
                {
                    "acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transaction_watchers_stream": [
                953,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        983,
                        "[transaction_watchers_stream_cursor_input]!"
                    ],
                    "where": [
                        962
                    ]
                }
            ],
            "transactions": [
                995,
                {
                    "distinct_on": [
                        1010,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1008,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        999
                    ]
                }
            ],
            "transactions_aggregate": [
                996,
                {
                    "distinct_on": [
                        1010,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1008,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        999
                    ]
                }
            ],
            "transactions_by_pk": [
                995,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                995,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1015,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        999
                    ]
                }
            ],
            "twap_chart_data": [
                1023,
                {
                    "distinct_on": [
                        1031,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1030,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1027
                    ]
                }
            ],
            "twap_chart_data_aggregate": [
                1024,
                {
                    "distinct_on": [
                        1031,
                        "[twap_chart_data_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1030,
                        "[twap_chart_data_order_by!]"
                    ],
                    "where": [
                        1027
                    ]
                }
            ],
            "twap_chart_data_stream": [
                1023,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1035,
                        "[twap_chart_data_stream_cursor_input]!"
                    ],
                    "where": [
                        1027
                    ]
                }
            ],
            "twaps": [
                1041,
                {
                    "distinct_on": [
                        1062,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1060,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1050
                    ]
                }
            ],
            "twaps_aggregate": [
                1042,
                {
                    "distinct_on": [
                        1062,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1060,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        1050
                    ]
                }
            ],
            "twaps_by_pk": [
                1041,
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
                1041,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1070,
                        "[twaps_stream_cursor_input]!"
                    ],
                    "where": [
                        1050
                    ]
                }
            ],
            "users": [
                1082,
                {
                    "distinct_on": [
                        1095,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1093,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1085
                    ]
                }
            ],
            "users_aggregate": [
                1083,
                {
                    "distinct_on": [
                        1095,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        1093,
                        "[users_order_by!]"
                    ],
                    "where": [
                        1085
                    ]
                }
            ],
            "users_by_pk": [
                1082,
                {
                    "user_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "users_stream": [
                1082,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        1097,
                        "[users_stream_cursor_input]!"
                    ],
                    "where": [
                        1085
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}