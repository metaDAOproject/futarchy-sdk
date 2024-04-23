export default {
    "scalars": [
        0,
        2,
        3,
        5,
        7,
        14,
        23,
        31,
        36,
        42,
        51,
        59,
        69,
        78,
        86,
        91,
        93,
        101,
        110,
        118,
        123,
        125,
        131,
        140,
        148,
        158,
        167,
        175,
        186,
        199,
        207,
        217,
        226,
        234,
        239,
        241,
        248,
        257,
        265,
        275,
        284,
        292,
        302,
        311,
        319,
        329,
        338,
        346
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
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                241
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
                11
            ],
            "nodes": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "candles_aggregate_fields": {
            "avg": [
                12
            ],
            "count": [
                3,
                {
                    "columns": [
                        23,
                        "[candles_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                17
            ],
            "min": [
                18
            ],
            "stddev": [
                25
            ],
            "stddev_pop": [
                26
            ],
            "stddev_samp": [
                27
            ],
            "sum": [
                30
            ],
            "var_pop": [
                33
            ],
            "var_samp": [
                34
            ],
            "variance": [
                35
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
        "candles_bool_exp": {
            "_and": [
                13
            ],
            "_not": [
                13
            ],
            "_or": [
                13
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
            "market_acct": [
                6
            ],
            "open": [
                8
            ],
            "timestamp": [
                242
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
            "market_acct": [
                5
            ],
            "open": [
                7
            ],
            "timestamp": [
                241
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
                241
            ],
            "volume": [
                7
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
                241
            ],
            "volume": [
                7
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
                14
            ],
            "update_columns": [
                31
            ],
            "where": [
                13
            ],
            "__typename": [
                5
            ]
        },
        "candles_order_by": {
            "candle_average": [
                125
            ],
            "candle_duration": [
                125
            ],
            "close": [
                125
            ],
            "cond_market_twap": [
                125
            ],
            "high": [
                125
            ],
            "low": [
                125
            ],
            "market_acct": [
                125
            ],
            "open": [
                125
            ],
            "timestamp": [
                125
            ],
            "volume": [
                125
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
                241
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
                241
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
        "candles_stream_cursor_input": {
            "initial_value": [
                29
            ],
            "ordering": [
                36
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
                241
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
        "candles_update_column": {},
        "candles_updates": {
            "_inc": [
                15
            ],
            "_set": [
                24
            ],
            "where": [
                13
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
        "cursor_ordering": {},
        "dao_details": {
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
                39
            ],
            "nodes": [
                37
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_aggregate_fields": {
            "avg": [
                40
            ],
            "count": [
                3,
                {
                    "columns": [
                        51,
                        "[dao_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                45
            ],
            "min": [
                46
            ],
            "stddev": [
                53
            ],
            "stddev_pop": [
                54
            ],
            "stddev_samp": [
                55
            ],
            "sum": [
                58
            ],
            "var_pop": [
                61
            ],
            "var_samp": [
                62
            ],
            "variance": [
                63
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
                41
            ],
            "_not": [
                41
            ],
            "_or": [
                41
            ],
            "dao_id": [
                8
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
            "description": [
                5
            ],
            "github": [
                5
            ],
            "name": [
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
                37
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_on_conflict": {
            "constraint": [
                42
            ],
            "update_columns": [
                59
            ],
            "where": [
                41
            ],
            "__typename": [
                5
            ]
        },
        "dao_details_order_by": {
            "dao_id": [
                125
            ],
            "description": [
                125
            ],
            "github": [
                125
            ],
            "name": [
                125
            ],
            "url": [
                125
            ],
            "x_account": [
                125
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
                57
            ],
            "ordering": [
                36
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
                43
            ],
            "_set": [
                52
            ],
            "where": [
                41
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
            "created_at": [
                241
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "mint_acct": [
                5
            ],
            "program_acct": [
                5
            ],
            "updated_at": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate": {
            "aggregate": [
                66
            ],
            "nodes": [
                64
            ],
            "__typename": [
                5
            ]
        },
        "daos_aggregate_fields": {
            "avg": [
                67
            ],
            "count": [
                3,
                {
                    "columns": [
                        78,
                        "[daos_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                72
            ],
            "min": [
                73
            ],
            "stddev": [
                80
            ],
            "stddev_pop": [
                81
            ],
            "stddev_samp": [
                82
            ],
            "sum": [
                85
            ],
            "var_pop": [
                88
            ],
            "var_samp": [
                89
            ],
            "variance": [
                90
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
        "daos_bool_exp": {
            "_and": [
                68
            ],
            "_not": [
                68
            ],
            "_or": [
                68
            ],
            "created_at": [
                242
            ],
            "dao_acct": [
                6
            ],
            "dao_id": [
                8
            ],
            "mint_acct": [
                6
            ],
            "program_acct": [
                6
            ],
            "updated_at": [
                242
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
            "created_at": [
                241
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "mint_acct": [
                5
            ],
            "program_acct": [
                5
            ],
            "updated_at": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "daos_max_fields": {
            "created_at": [
                241
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "mint_acct": [
                5
            ],
            "program_acct": [
                5
            ],
            "updated_at": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "daos_min_fields": {
            "created_at": [
                241
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "mint_acct": [
                5
            ],
            "program_acct": [
                5
            ],
            "updated_at": [
                241
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
                64
            ],
            "__typename": [
                5
            ]
        },
        "daos_on_conflict": {
            "constraint": [
                69
            ],
            "update_columns": [
                86
            ],
            "where": [
                68
            ],
            "__typename": [
                5
            ]
        },
        "daos_order_by": {
            "created_at": [
                125
            ],
            "dao_acct": [
                125
            ],
            "dao_id": [
                125
            ],
            "mint_acct": [
                125
            ],
            "program_acct": [
                125
            ],
            "updated_at": [
                125
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
            "created_at": [
                241
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "mint_acct": [
                5
            ],
            "program_acct": [
                5
            ],
            "updated_at": [
                241
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
        "daos_stddev_pop_fields": {
            "dao_id": [
                2
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
        "daos_stream_cursor_input": {
            "initial_value": [
                84
            ],
            "ordering": [
                36
            ],
            "__typename": [
                5
            ]
        },
        "daos_stream_cursor_value_input": {
            "created_at": [
                241
            ],
            "dao_acct": [
                5
            ],
            "dao_id": [
                7
            ],
            "mint_acct": [
                5
            ],
            "program_acct": [
                5
            ],
            "updated_at": [
                241
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
        "daos_update_column": {},
        "daos_updates": {
            "_inc": [
                70
            ],
            "_set": [
                79
            ],
            "where": [
                68
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
        "daos_var_samp_fields": {
            "dao_id": [
                2
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
        "float8": {},
        "float8_comparison_exp": {
            "_eq": [
                91
            ],
            "_gt": [
                91
            ],
            "_gte": [
                91
            ],
            "_in": [
                91
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                91
            ],
            "_lte": [
                91
            ],
            "_neq": [
                91
            ],
            "_nin": [
                91
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
                94
            ],
            "_contained_in": [
                93
            ],
            "_contains": [
                93
            ],
            "_eq": [
                93
            ],
            "_gt": [
                93
            ],
            "_gte": [
                93
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
                93
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                93
            ],
            "_lte": [
                93
            ],
            "_neq": [
                93
            ],
            "_nin": [
                93
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
                239
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                239
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
                239
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                239
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate": {
            "aggregate": [
                98
            ],
            "nodes": [
                96
            ],
            "__typename": [
                5
            ]
        },
        "markets_aggregate_fields": {
            "avg": [
                99
            ],
            "count": [
                3,
                {
                    "columns": [
                        110,
                        "[markets_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                104
            ],
            "min": [
                105
            ],
            "stddev": [
                112
            ],
            "stddev_pop": [
                113
            ],
            "stddev_samp": [
                114
            ],
            "sum": [
                117
            ],
            "var_pop": [
                120
            ],
            "var_samp": [
                121
            ],
            "variance": [
                122
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
        "markets_bool_exp": {
            "_and": [
                100
            ],
            "_not": [
                100
            ],
            "_or": [
                100
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
                240
            ],
            "base_mint_acct": [
                6
            ],
            "base_taker_fee": [
                240
            ],
            "bids_token_acct": [
                6
            ],
            "create_tx_sig": [
                6
            ],
            "inactive_slot": [
                8
            ],
            "market_acct": [
                6
            ],
            "market_type": [
                6
            ],
            "proposal_acct": [
                6
            ],
            "quote_lot_size": [
                8
            ],
            "quote_maker_fee": [
                240
            ],
            "quote_mint_acct": [
                6
            ],
            "quote_taker_fee": [
                240
            ],
            "quote_tick_size": [
                8
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
                239
            ],
            "base_taker_fee": [
                239
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                239
            ],
            "quote_taker_fee": [
                239
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
                239
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                239
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
                239
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                239
            ],
            "quote_tick_size": [
                7
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
                239
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                239
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
                239
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                239
            ],
            "quote_tick_size": [
                7
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
                239
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                239
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
                239
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                239
            ],
            "quote_tick_size": [
                7
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
                96
            ],
            "__typename": [
                5
            ]
        },
        "markets_on_conflict": {
            "constraint": [
                101
            ],
            "update_columns": [
                118
            ],
            "where": [
                100
            ],
            "__typename": [
                5
            ]
        },
        "markets_order_by": {
            "active_slot": [
                125
            ],
            "asks_token_acct": [
                125
            ],
            "base_lot_size": [
                125
            ],
            "base_maker_fee": [
                125
            ],
            "base_mint_acct": [
                125
            ],
            "base_taker_fee": [
                125
            ],
            "bids_token_acct": [
                125
            ],
            "create_tx_sig": [
                125
            ],
            "inactive_slot": [
                125
            ],
            "market_acct": [
                125
            ],
            "market_type": [
                125
            ],
            "proposal_acct": [
                125
            ],
            "quote_lot_size": [
                125
            ],
            "quote_maker_fee": [
                125
            ],
            "quote_mint_acct": [
                125
            ],
            "quote_taker_fee": [
                125
            ],
            "quote_tick_size": [
                125
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
                239
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                239
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
                239
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                239
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
        "markets_stream_cursor_input": {
            "initial_value": [
                116
            ],
            "ordering": [
                36
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
                239
            ],
            "base_mint_acct": [
                5
            ],
            "base_taker_fee": [
                239
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
                239
            ],
            "quote_mint_acct": [
                5
            ],
            "quote_taker_fee": [
                239
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
                239
            ],
            "base_taker_fee": [
                239
            ],
            "inactive_slot": [
                7
            ],
            "quote_lot_size": [
                7
            ],
            "quote_maker_fee": [
                239
            ],
            "quote_taker_fee": [
                239
            ],
            "quote_tick_size": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "markets_update_column": {},
        "markets_updates": {
            "_inc": [
                102
            ],
            "_set": [
                111
            ],
            "where": [
                100
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
        "numeric": {},
        "numeric_comparison_exp": {
            "_eq": [
                123
            ],
            "_gt": [
                123
            ],
            "_gte": [
                123
            ],
            "_in": [
                123
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                123
            ],
            "_lte": [
                123
            ],
            "_neq": [
                123
            ],
            "_nin": [
                123
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
                241
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
                241
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
                241
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate": {
            "aggregate": [
                128
            ],
            "nodes": [
                126
            ],
            "__typename": [
                5
            ]
        },
        "orders_aggregate_fields": {
            "avg": [
                129
            ],
            "count": [
                3,
                {
                    "columns": [
                        140,
                        "[orders_select_column!]"
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
                135
            ],
            "stddev": [
                142
            ],
            "stddev_pop": [
                143
            ],
            "stddev_samp": [
                144
            ],
            "sum": [
                147
            ],
            "var_pop": [
                150
            ],
            "var_samp": [
                151
            ],
            "variance": [
                152
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
        "orders_bool_exp": {
            "_and": [
                130
            ],
            "_not": [
                130
            ],
            "_or": [
                130
            ],
            "actor_acct": [
                6
            ],
            "cancel_block": [
                8
            ],
            "cancel_time": [
                242
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
            "market_acct": [
                6
            ],
            "order_block": [
                8
            ],
            "order_time": [
                242
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
            "unfilled_base_amount": [
                8
            ],
            "updated_at": [
                242
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
                241
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
                241
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
                241
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
                241
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
                241
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
                241
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
                241
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
                241
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
                241
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
                126
            ],
            "__typename": [
                5
            ]
        },
        "orders_on_conflict": {
            "constraint": [
                131
            ],
            "update_columns": [
                148
            ],
            "where": [
                130
            ],
            "__typename": [
                5
            ]
        },
        "orders_order_by": {
            "actor_acct": [
                125
            ],
            "cancel_block": [
                125
            ],
            "cancel_time": [
                125
            ],
            "cancel_tx_sig": [
                125
            ],
            "filled_base_amount": [
                125
            ],
            "is_active": [
                125
            ],
            "market_acct": [
                125
            ],
            "order_block": [
                125
            ],
            "order_time": [
                125
            ],
            "order_tx_sig": [
                125
            ],
            "quote_price": [
                125
            ],
            "side": [
                125
            ],
            "unfilled_base_amount": [
                125
            ],
            "updated_at": [
                125
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
        "orders_set_input": {
            "actor_acct": [
                5
            ],
            "cancel_block": [
                7
            ],
            "cancel_time": [
                241
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
                241
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
                241
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
        "orders_stream_cursor_input": {
            "initial_value": [
                146
            ],
            "ordering": [
                36
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
                241
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
                241
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
                241
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
        "orders_update_column": {},
        "orders_updates": {
            "_inc": [
                132
            ],
            "_set": [
                141
            ],
            "where": [
                130
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
        "programs": {
            "created_at": [
                241
            ],
            "deployed_at": [
                241
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate": {
            "aggregate": [
                155
            ],
            "nodes": [
                153
            ],
            "__typename": [
                5
            ]
        },
        "programs_aggregate_fields": {
            "avg": [
                156
            ],
            "count": [
                3,
                {
                    "columns": [
                        167,
                        "[programs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                161
            ],
            "min": [
                162
            ],
            "stddev": [
                169
            ],
            "stddev_pop": [
                170
            ],
            "stddev_samp": [
                171
            ],
            "sum": [
                174
            ],
            "var_pop": [
                177
            ],
            "var_samp": [
                178
            ],
            "variance": [
                179
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
                157
            ],
            "_not": [
                157
            ],
            "_or": [
                157
            ],
            "created_at": [
                242
            ],
            "deployed_at": [
                242
            ],
            "program_acct": [
                6
            ],
            "program_name": [
                6
            ],
            "version": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "programs_constraint": {},
        "programs_inc_input": {
            "version": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "programs_insert_input": {
            "created_at": [
                241
            ],
            "deployed_at": [
                241
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "programs_max_fields": {
            "created_at": [
                241
            ],
            "deployed_at": [
                241
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "programs_min_fields": {
            "created_at": [
                241
            ],
            "deployed_at": [
                241
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                3
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
                153
            ],
            "__typename": [
                5
            ]
        },
        "programs_on_conflict": {
            "constraint": [
                158
            ],
            "update_columns": [
                175
            ],
            "where": [
                157
            ],
            "__typename": [
                5
            ]
        },
        "programs_order_by": {
            "created_at": [
                125
            ],
            "deployed_at": [
                125
            ],
            "program_acct": [
                125
            ],
            "program_name": [
                125
            ],
            "version": [
                125
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
                241
            ],
            "deployed_at": [
                241
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                3
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
                173
            ],
            "ordering": [
                36
            ],
            "__typename": [
                5
            ]
        },
        "programs_stream_cursor_value_input": {
            "created_at": [
                241
            ],
            "deployed_at": [
                241
            ],
            "program_acct": [
                5
            ],
            "program_name": [
                5
            ],
            "version": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "programs_sum_fields": {
            "version": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "programs_update_column": {},
        "programs_updates": {
            "_inc": [
                159
            ],
            "_set": [
                168
            ],
            "where": [
                157
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
                93,
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
            "proposal_acct": [
                5
            ],
            "proposal_id": [
                7
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
                182
            ],
            "nodes": [
                180
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_aggregate_fields": {
            "avg": [
                184
            ],
            "count": [
                3,
                {
                    "columns": [
                        199,
                        "[proposal_details_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                192
            ],
            "min": [
                193
            ],
            "stddev": [
                201
            ],
            "stddev_pop": [
                202
            ],
            "stddev_samp": [
                203
            ],
            "sum": [
                206
            ],
            "var_pop": [
                209
            ],
            "var_samp": [
                210
            ],
            "variance": [
                211
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_append_input": {
            "categories": [
                93
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
        "proposal_details_bool_exp": {
            "_and": [
                185
            ],
            "_not": [
                185
            ],
            "_or": [
                185
            ],
            "categories": [
                95
            ],
            "content": [
                6
            ],
            "description": [
                6
            ],
            "proposal_acct": [
                6
            ],
            "proposal_id": [
                8
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
                93
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
            "title": [
                5
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
            "title": [
                5
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
                180
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_on_conflict": {
            "constraint": [
                186
            ],
            "update_columns": [
                207
            ],
            "where": [
                185
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_order_by": {
            "categories": [
                125
            ],
            "content": [
                125
            ],
            "description": [
                125
            ],
            "proposal_acct": [
                125
            ],
            "proposal_id": [
                125
            ],
            "title": [
                125
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
                93
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_select_column": {},
        "proposal_details_set_input": {
            "categories": [
                93
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
        "proposal_details_stddev_pop_fields": {
            "proposal_id": [
                2
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
        "proposal_details_stream_cursor_input": {
            "initial_value": [
                205
            ],
            "ordering": [
                36
            ],
            "__typename": [
                5
            ]
        },
        "proposal_details_stream_cursor_value_input": {
            "categories": [
                93
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
        "proposal_details_update_column": {},
        "proposal_details_updates": {
            "_append": [
                183
            ],
            "_delete_at_path": [
                187
            ],
            "_delete_elem": [
                188
            ],
            "_delete_key": [
                189
            ],
            "_inc": [
                190
            ],
            "_prepend": [
                198
            ],
            "_set": [
                200
            ],
            "where": [
                185
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
        "proposal_details_var_samp_fields": {
            "proposal_id": [
                2
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
        "proposals": {
            "autocrat_version": [
                91
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "initial_slot": [
                7
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
            "status": [
                5
            ],
            "updated_at": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate": {
            "aggregate": [
                214
            ],
            "nodes": [
                212
            ],
            "__typename": [
                5
            ]
        },
        "proposals_aggregate_fields": {
            "avg": [
                215
            ],
            "count": [
                3,
                {
                    "columns": [
                        226,
                        "[proposals_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                220
            ],
            "min": [
                221
            ],
            "stddev": [
                228
            ],
            "stddev_pop": [
                229
            ],
            "stddev_samp": [
                230
            ],
            "sum": [
                233
            ],
            "var_pop": [
                236
            ],
            "var_samp": [
                237
            ],
            "variance": [
                238
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
        "proposals_bool_exp": {
            "_and": [
                216
            ],
            "_not": [
                216
            ],
            "_or": [
                216
            ],
            "autocrat_version": [
                92
            ],
            "dao_acct": [
                6
            ],
            "description_url": [
                6
            ],
            "initial_slot": [
                8
            ],
            "proposal_acct": [
                6
            ],
            "proposal_num": [
                8
            ],
            "proposer_acct": [
                6
            ],
            "status": [
                6
            ],
            "updated_at": [
                242
            ],
            "__typename": [
                5
            ]
        },
        "proposals_constraint": {},
        "proposals_inc_input": {
            "autocrat_version": [
                91
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
                91
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "initial_slot": [
                7
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
            "status": [
                5
            ],
            "updated_at": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "proposals_max_fields": {
            "autocrat_version": [
                91
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "initial_slot": [
                7
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
            "status": [
                5
            ],
            "updated_at": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "proposals_min_fields": {
            "autocrat_version": [
                91
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "initial_slot": [
                7
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
            "status": [
                5
            ],
            "updated_at": [
                241
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
                212
            ],
            "__typename": [
                5
            ]
        },
        "proposals_on_conflict": {
            "constraint": [
                217
            ],
            "update_columns": [
                234
            ],
            "where": [
                216
            ],
            "__typename": [
                5
            ]
        },
        "proposals_order_by": {
            "autocrat_version": [
                125
            ],
            "dao_acct": [
                125
            ],
            "description_url": [
                125
            ],
            "initial_slot": [
                125
            ],
            "proposal_acct": [
                125
            ],
            "proposal_num": [
                125
            ],
            "proposer_acct": [
                125
            ],
            "status": [
                125
            ],
            "updated_at": [
                125
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
        "proposals_set_input": {
            "autocrat_version": [
                91
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "initial_slot": [
                7
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
            "status": [
                5
            ],
            "updated_at": [
                241
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
        "proposals_stream_cursor_input": {
            "initial_value": [
                232
            ],
            "ordering": [
                36
            ],
            "__typename": [
                5
            ]
        },
        "proposals_stream_cursor_value_input": {
            "autocrat_version": [
                91
            ],
            "dao_acct": [
                5
            ],
            "description_url": [
                5
            ],
            "initial_slot": [
                7
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
            "status": [
                5
            ],
            "updated_at": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "proposals_sum_fields": {
            "autocrat_version": [
                91
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
        "proposals_update_column": {},
        "proposals_updates": {
            "_inc": [
                218
            ],
            "_set": [
                227
            ],
            "where": [
                216
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
        "smallint": {},
        "smallint_comparison_exp": {
            "_eq": [
                239
            ],
            "_gt": [
                239
            ],
            "_gte": [
                239
            ],
            "_in": [
                239
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                239
            ],
            "_lte": [
                239
            ],
            "_neq": [
                239
            ],
            "_nin": [
                239
            ],
            "__typename": [
                5
            ]
        },
        "timestamp": {},
        "timestamp_comparison_exp": {
            "_eq": [
                241
            ],
            "_gt": [
                241
            ],
            "_gte": [
                241
            ],
            "_in": [
                241
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                241
            ],
            "_lte": [
                241
            ],
            "_neq": [
                241
            ],
            "_nin": [
                241
            ],
            "__typename": [
                5
            ]
        },
        "token_accts": {
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
                241
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate": {
            "aggregate": [
                245
            ],
            "nodes": [
                243
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_aggregate_fields": {
            "avg": [
                246
            ],
            "count": [
                3,
                {
                    "columns": [
                        257,
                        "[token_accts_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                251
            ],
            "min": [
                252
            ],
            "stddev": [
                259
            ],
            "stddev_pop": [
                260
            ],
            "stddev_samp": [
                261
            ],
            "sum": [
                264
            ],
            "var_pop": [
                267
            ],
            "var_samp": [
                268
            ],
            "variance": [
                269
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
        "token_accts_bool_exp": {
            "_and": [
                247
            ],
            "_not": [
                247
            ],
            "_or": [
                247
            ],
            "amount": [
                8
            ],
            "mint_acct": [
                6
            ],
            "owner_acct": [
                6
            ],
            "token_acct": [
                6
            ],
            "updated_at": [
                242
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
                241
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
                241
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
                241
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
                243
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_on_conflict": {
            "constraint": [
                248
            ],
            "update_columns": [
                265
            ],
            "where": [
                247
            ],
            "__typename": [
                5
            ]
        },
        "token_accts_order_by": {
            "amount": [
                125
            ],
            "mint_acct": [
                125
            ],
            "owner_acct": [
                125
            ],
            "token_acct": [
                125
            ],
            "updated_at": [
                125
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
                241
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
        "token_accts_stddev_pop_fields": {
            "amount": [
                2
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
        "token_accts_stream_cursor_input": {
            "initial_value": [
                263
            ],
            "ordering": [
                36
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
                241
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
        "token_accts_update_column": {},
        "token_accts_updates": {
            "_inc": [
                249
            ],
            "_set": [
                258
            ],
            "where": [
                247
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
        "token_accts_var_samp_fields": {
            "amount": [
                2
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
        "tokens": {
            "decimals": [
                239
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
                241
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate": {
            "aggregate": [
                272
            ],
            "nodes": [
                270
            ],
            "__typename": [
                5
            ]
        },
        "tokens_aggregate_fields": {
            "avg": [
                273
            ],
            "count": [
                3,
                {
                    "columns": [
                        284,
                        "[tokens_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                278
            ],
            "min": [
                279
            ],
            "stddev": [
                286
            ],
            "stddev_pop": [
                287
            ],
            "stddev_samp": [
                288
            ],
            "sum": [
                291
            ],
            "var_pop": [
                294
            ],
            "var_samp": [
                295
            ],
            "variance": [
                296
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
                274
            ],
            "_not": [
                274
            ],
            "_or": [
                274
            ],
            "decimals": [
                240
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
            "updated_at": [
                242
            ],
            "__typename": [
                5
            ]
        },
        "tokens_constraint": {},
        "tokens_inc_input": {
            "decimals": [
                239
            ],
            "supply": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "tokens_insert_input": {
            "decimals": [
                239
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
                241
            ],
            "__typename": [
                5
            ]
        },
        "tokens_max_fields": {
            "decimals": [
                239
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
                241
            ],
            "__typename": [
                5
            ]
        },
        "tokens_min_fields": {
            "decimals": [
                239
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
                241
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
                270
            ],
            "__typename": [
                5
            ]
        },
        "tokens_on_conflict": {
            "constraint": [
                275
            ],
            "update_columns": [
                292
            ],
            "where": [
                274
            ],
            "__typename": [
                5
            ]
        },
        "tokens_order_by": {
            "decimals": [
                125
            ],
            "mint_acct": [
                125
            ],
            "name": [
                125
            ],
            "supply": [
                125
            ],
            "symbol": [
                125
            ],
            "updated_at": [
                125
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
                239
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
                241
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
                290
            ],
            "ordering": [
                36
            ],
            "__typename": [
                5
            ]
        },
        "tokens_stream_cursor_value_input": {
            "decimals": [
                239
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
                241
            ],
            "__typename": [
                5
            ]
        },
        "tokens_sum_fields": {
            "decimals": [
                239
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
                276
            ],
            "_set": [
                285
            ],
            "where": [
                274
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
        "transactions": {
            "block_time": [
                241
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                239
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
        "transactions_aggregate": {
            "aggregate": [
                299
            ],
            "nodes": [
                297
            ],
            "__typename": [
                5
            ]
        },
        "transactions_aggregate_fields": {
            "avg": [
                300
            ],
            "count": [
                3,
                {
                    "columns": [
                        311,
                        "[transactions_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                305
            ],
            "min": [
                306
            ],
            "stddev": [
                313
            ],
            "stddev_pop": [
                314
            ],
            "stddev_samp": [
                315
            ],
            "sum": [
                318
            ],
            "var_pop": [
                321
            ],
            "var_samp": [
                322
            ],
            "variance": [
                323
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
                301
            ],
            "_not": [
                301
            ],
            "_or": [
                301
            ],
            "block_time": [
                242
            ],
            "failed": [
                1
            ],
            "payload": [
                6
            ],
            "serializer_logic_version": [
                240
            ],
            "slot": [
                8
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
                239
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
                241
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                239
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
        "transactions_max_fields": {
            "block_time": [
                241
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                239
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
                241
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                239
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
                297
            ],
            "__typename": [
                5
            ]
        },
        "transactions_on_conflict": {
            "constraint": [
                302
            ],
            "update_columns": [
                319
            ],
            "where": [
                301
            ],
            "__typename": [
                5
            ]
        },
        "transactions_order_by": {
            "block_time": [
                125
            ],
            "failed": [
                125
            ],
            "payload": [
                125
            ],
            "serializer_logic_version": [
                125
            ],
            "slot": [
                125
            ],
            "tx_sig": [
                125
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
                241
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                239
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
                317
            ],
            "ordering": [
                36
            ],
            "__typename": [
                5
            ]
        },
        "transactions_stream_cursor_value_input": {
            "block_time": [
                241
            ],
            "failed": [
                0
            ],
            "payload": [
                5
            ],
            "serializer_logic_version": [
                239
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
                239
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
                303
            ],
            "_set": [
                312
            ],
            "where": [
                301
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
            "market_acct": [
                5
            ],
            "observation_agg": [
                123
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
                326
            ],
            "nodes": [
                324
            ],
            "__typename": [
                5
            ]
        },
        "twaps_aggregate_fields": {
            "avg": [
                327
            ],
            "count": [
                3,
                {
                    "columns": [
                        338,
                        "[twaps_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                332
            ],
            "min": [
                333
            ],
            "stddev": [
                340
            ],
            "stddev_pop": [
                341
            ],
            "stddev_samp": [
                342
            ],
            "sum": [
                345
            ],
            "var_pop": [
                348
            ],
            "var_samp": [
                349
            ],
            "variance": [
                350
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
        "twaps_bool_exp": {
            "_and": [
                328
            ],
            "_not": [
                328
            ],
            "_or": [
                328
            ],
            "market_acct": [
                6
            ],
            "observation_agg": [
                124
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
                123
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
            "market_acct": [
                5
            ],
            "observation_agg": [
                123
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
                123
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
        "twaps_min_fields": {
            "market_acct": [
                5
            ],
            "observation_agg": [
                123
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
        "twaps_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                324
            ],
            "__typename": [
                5
            ]
        },
        "twaps_on_conflict": {
            "constraint": [
                329
            ],
            "update_columns": [
                346
            ],
            "where": [
                328
            ],
            "__typename": [
                5
            ]
        },
        "twaps_order_by": {
            "market_acct": [
                125
            ],
            "observation_agg": [
                125
            ],
            "proposal_acct": [
                125
            ],
            "token_amount": [
                125
            ],
            "updated_slot": [
                125
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
                123
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
        "twaps_stream_cursor_input": {
            "initial_value": [
                344
            ],
            "ordering": [
                36
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
                123
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
                123
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
        "twaps_update_column": {},
        "twaps_updates": {
            "_inc": [
                330
            ],
            "_set": [
                339
            ],
            "where": [
                328
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
        "Query": {
            "candles": [
                9,
                {
                    "distinct_on": [
                        23,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        21,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        13
                    ]
                }
            ],
            "candles_aggregate": [
                10,
                {
                    "distinct_on": [
                        23,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        21,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        13
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
                        241,
                        "timestamp!"
                    ]
                }
            ],
            "dao_details": [
                37,
                {
                    "distinct_on": [
                        51,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        49,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "dao_details_aggregate": [
                38,
                {
                    "distinct_on": [
                        51,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        49,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "dao_details_by_pk": [
                37,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "daos": [
                64,
                {
                    "distinct_on": [
                        78,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        76,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "daos_aggregate": [
                65,
                {
                    "distinct_on": [
                        78,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        76,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "daos_by_pk": [
                64,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets": [
                96,
                {
                    "distinct_on": [
                        110,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        108,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "markets_aggregate": [
                97,
                {
                    "distinct_on": [
                        110,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        108,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "markets_by_pk": [
                96,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders": [
                126,
                {
                    "distinct_on": [
                        140,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        138,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "orders_aggregate": [
                127,
                {
                    "distinct_on": [
                        140,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        138,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "orders_by_pk": [
                126,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs": [
                153,
                {
                    "distinct_on": [
                        167,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        165,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        157
                    ]
                }
            ],
            "programs_aggregate": [
                154,
                {
                    "distinct_on": [
                        167,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        165,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        157
                    ]
                }
            ],
            "programs_by_pk": [
                153,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposal_details": [
                180,
                {
                    "distinct_on": [
                        199,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        196,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        185
                    ]
                }
            ],
            "proposal_details_aggregate": [
                181,
                {
                    "distinct_on": [
                        199,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        196,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        185
                    ]
                }
            ],
            "proposal_details_by_pk": [
                180,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposals": [
                212,
                {
                    "distinct_on": [
                        226,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        224,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "proposals_aggregate": [
                213,
                {
                    "distinct_on": [
                        226,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        224,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "proposals_by_pk": [
                212,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts": [
                243,
                {
                    "distinct_on": [
                        257,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        255,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        247
                    ]
                }
            ],
            "token_accts_aggregate": [
                244,
                {
                    "distinct_on": [
                        257,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        255,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        247
                    ]
                }
            ],
            "token_accts_by_pk": [
                243,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens": [
                270,
                {
                    "distinct_on": [
                        284,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        282,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        274
                    ]
                }
            ],
            "tokens_aggregate": [
                271,
                {
                    "distinct_on": [
                        284,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        282,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        274
                    ]
                }
            ],
            "tokens_by_pk": [
                270,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions": [
                297,
                {
                    "distinct_on": [
                        311,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        309,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        301
                    ]
                }
            ],
            "transactions_aggregate": [
                298,
                {
                    "distinct_on": [
                        311,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        309,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        301
                    ]
                }
            ],
            "transactions_by_pk": [
                297,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "twaps": [
                324,
                {
                    "distinct_on": [
                        338,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        336,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        328
                    ]
                }
            ],
            "twaps_aggregate": [
                325,
                {
                    "distinct_on": [
                        338,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        336,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        328
                    ]
                }
            ],
            "twaps_by_pk": [
                324,
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
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "delete_candles": [
                19,
                {
                    "where": [
                        13,
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
                        241,
                        "timestamp!"
                    ]
                }
            ],
            "delete_dao_details": [
                47,
                {
                    "where": [
                        41,
                        "dao_details_bool_exp!"
                    ]
                }
            ],
            "delete_dao_details_by_pk": [
                37,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_daos": [
                74,
                {
                    "where": [
                        68,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "delete_daos_by_pk": [
                64,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_markets": [
                106,
                {
                    "where": [
                        100,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "delete_markets_by_pk": [
                96,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_orders": [
                136,
                {
                    "where": [
                        130,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "delete_orders_by_pk": [
                126,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_programs": [
                163,
                {
                    "where": [
                        157,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "delete_programs_by_pk": [
                153,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_proposal_details": [
                194,
                {
                    "where": [
                        185,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "delete_proposal_details_by_pk": [
                180,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "delete_proposals": [
                222,
                {
                    "where": [
                        216,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "delete_proposals_by_pk": [
                212,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_token_accts": [
                253,
                {
                    "where": [
                        247,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "delete_token_accts_by_pk": [
                243,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_tokens": [
                280,
                {
                    "where": [
                        274,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "delete_tokens_by_pk": [
                270,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_transactions": [
                307,
                {
                    "where": [
                        301,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "delete_transactions_by_pk": [
                297,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "delete_twaps": [
                334,
                {
                    "where": [
                        328,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "delete_twaps_by_pk": [
                324,
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
            "insert_candles": [
                19,
                {
                    "objects": [
                        16,
                        "[candles_insert_input!]!"
                    ],
                    "on_conflict": [
                        20
                    ]
                }
            ],
            "insert_candles_one": [
                9,
                {
                    "object": [
                        16,
                        "candles_insert_input!"
                    ],
                    "on_conflict": [
                        20
                    ]
                }
            ],
            "insert_dao_details": [
                47,
                {
                    "objects": [
                        44,
                        "[dao_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        48
                    ]
                }
            ],
            "insert_dao_details_one": [
                37,
                {
                    "object": [
                        44,
                        "dao_details_insert_input!"
                    ],
                    "on_conflict": [
                        48
                    ]
                }
            ],
            "insert_daos": [
                74,
                {
                    "objects": [
                        71,
                        "[daos_insert_input!]!"
                    ],
                    "on_conflict": [
                        75
                    ]
                }
            ],
            "insert_daos_one": [
                64,
                {
                    "object": [
                        71,
                        "daos_insert_input!"
                    ],
                    "on_conflict": [
                        75
                    ]
                }
            ],
            "insert_markets": [
                106,
                {
                    "objects": [
                        103,
                        "[markets_insert_input!]!"
                    ],
                    "on_conflict": [
                        107
                    ]
                }
            ],
            "insert_markets_one": [
                96,
                {
                    "object": [
                        103,
                        "markets_insert_input!"
                    ],
                    "on_conflict": [
                        107
                    ]
                }
            ],
            "insert_orders": [
                136,
                {
                    "objects": [
                        133,
                        "[orders_insert_input!]!"
                    ],
                    "on_conflict": [
                        137
                    ]
                }
            ],
            "insert_orders_one": [
                126,
                {
                    "object": [
                        133,
                        "orders_insert_input!"
                    ],
                    "on_conflict": [
                        137
                    ]
                }
            ],
            "insert_programs": [
                163,
                {
                    "objects": [
                        160,
                        "[programs_insert_input!]!"
                    ],
                    "on_conflict": [
                        164
                    ]
                }
            ],
            "insert_programs_one": [
                153,
                {
                    "object": [
                        160,
                        "programs_insert_input!"
                    ],
                    "on_conflict": [
                        164
                    ]
                }
            ],
            "insert_proposal_details": [
                194,
                {
                    "objects": [
                        191,
                        "[proposal_details_insert_input!]!"
                    ],
                    "on_conflict": [
                        195
                    ]
                }
            ],
            "insert_proposal_details_one": [
                180,
                {
                    "object": [
                        191,
                        "proposal_details_insert_input!"
                    ],
                    "on_conflict": [
                        195
                    ]
                }
            ],
            "insert_proposals": [
                222,
                {
                    "objects": [
                        219,
                        "[proposals_insert_input!]!"
                    ],
                    "on_conflict": [
                        223
                    ]
                }
            ],
            "insert_proposals_one": [
                212,
                {
                    "object": [
                        219,
                        "proposals_insert_input!"
                    ],
                    "on_conflict": [
                        223
                    ]
                }
            ],
            "insert_token_accts": [
                253,
                {
                    "objects": [
                        250,
                        "[token_accts_insert_input!]!"
                    ],
                    "on_conflict": [
                        254
                    ]
                }
            ],
            "insert_token_accts_one": [
                243,
                {
                    "object": [
                        250,
                        "token_accts_insert_input!"
                    ],
                    "on_conflict": [
                        254
                    ]
                }
            ],
            "insert_tokens": [
                280,
                {
                    "objects": [
                        277,
                        "[tokens_insert_input!]!"
                    ],
                    "on_conflict": [
                        281
                    ]
                }
            ],
            "insert_tokens_one": [
                270,
                {
                    "object": [
                        277,
                        "tokens_insert_input!"
                    ],
                    "on_conflict": [
                        281
                    ]
                }
            ],
            "insert_transactions": [
                307,
                {
                    "objects": [
                        304,
                        "[transactions_insert_input!]!"
                    ],
                    "on_conflict": [
                        308
                    ]
                }
            ],
            "insert_transactions_one": [
                297,
                {
                    "object": [
                        304,
                        "transactions_insert_input!"
                    ],
                    "on_conflict": [
                        308
                    ]
                }
            ],
            "insert_twaps": [
                334,
                {
                    "objects": [
                        331,
                        "[twaps_insert_input!]!"
                    ],
                    "on_conflict": [
                        335
                    ]
                }
            ],
            "insert_twaps_one": [
                324,
                {
                    "object": [
                        331,
                        "twaps_insert_input!"
                    ],
                    "on_conflict": [
                        335
                    ]
                }
            ],
            "update_candles": [
                19,
                {
                    "_inc": [
                        15
                    ],
                    "_set": [
                        24
                    ],
                    "where": [
                        13,
                        "candles_bool_exp!"
                    ]
                }
            ],
            "update_candles_by_pk": [
                9,
                {
                    "_inc": [
                        15
                    ],
                    "_set": [
                        24
                    ],
                    "pk_columns": [
                        22,
                        "candles_pk_columns_input!"
                    ]
                }
            ],
            "update_candles_many": [
                19,
                {
                    "updates": [
                        32,
                        "[candles_updates!]!"
                    ]
                }
            ],
            "update_dao_details": [
                47,
                {
                    "_inc": [
                        43
                    ],
                    "_set": [
                        52
                    ],
                    "where": [
                        41,
                        "dao_details_bool_exp!"
                    ]
                }
            ],
            "update_dao_details_by_pk": [
                37,
                {
                    "_inc": [
                        43
                    ],
                    "_set": [
                        52
                    ],
                    "pk_columns": [
                        50,
                        "dao_details_pk_columns_input!"
                    ]
                }
            ],
            "update_dao_details_many": [
                47,
                {
                    "updates": [
                        60,
                        "[dao_details_updates!]!"
                    ]
                }
            ],
            "update_daos": [
                74,
                {
                    "_inc": [
                        70
                    ],
                    "_set": [
                        79
                    ],
                    "where": [
                        68,
                        "daos_bool_exp!"
                    ]
                }
            ],
            "update_daos_by_pk": [
                64,
                {
                    "_inc": [
                        70
                    ],
                    "_set": [
                        79
                    ],
                    "pk_columns": [
                        77,
                        "daos_pk_columns_input!"
                    ]
                }
            ],
            "update_daos_many": [
                74,
                {
                    "updates": [
                        87,
                        "[daos_updates!]!"
                    ]
                }
            ],
            "update_markets": [
                106,
                {
                    "_inc": [
                        102
                    ],
                    "_set": [
                        111
                    ],
                    "where": [
                        100,
                        "markets_bool_exp!"
                    ]
                }
            ],
            "update_markets_by_pk": [
                96,
                {
                    "_inc": [
                        102
                    ],
                    "_set": [
                        111
                    ],
                    "pk_columns": [
                        109,
                        "markets_pk_columns_input!"
                    ]
                }
            ],
            "update_markets_many": [
                106,
                {
                    "updates": [
                        119,
                        "[markets_updates!]!"
                    ]
                }
            ],
            "update_orders": [
                136,
                {
                    "_inc": [
                        132
                    ],
                    "_set": [
                        141
                    ],
                    "where": [
                        130,
                        "orders_bool_exp!"
                    ]
                }
            ],
            "update_orders_by_pk": [
                126,
                {
                    "_inc": [
                        132
                    ],
                    "_set": [
                        141
                    ],
                    "pk_columns": [
                        139,
                        "orders_pk_columns_input!"
                    ]
                }
            ],
            "update_orders_many": [
                136,
                {
                    "updates": [
                        149,
                        "[orders_updates!]!"
                    ]
                }
            ],
            "update_programs": [
                163,
                {
                    "_inc": [
                        159
                    ],
                    "_set": [
                        168
                    ],
                    "where": [
                        157,
                        "programs_bool_exp!"
                    ]
                }
            ],
            "update_programs_by_pk": [
                153,
                {
                    "_inc": [
                        159
                    ],
                    "_set": [
                        168
                    ],
                    "pk_columns": [
                        166,
                        "programs_pk_columns_input!"
                    ]
                }
            ],
            "update_programs_many": [
                163,
                {
                    "updates": [
                        176,
                        "[programs_updates!]!"
                    ]
                }
            ],
            "update_proposal_details": [
                194,
                {
                    "_append": [
                        183
                    ],
                    "_delete_at_path": [
                        187
                    ],
                    "_delete_elem": [
                        188
                    ],
                    "_delete_key": [
                        189
                    ],
                    "_inc": [
                        190
                    ],
                    "_prepend": [
                        198
                    ],
                    "_set": [
                        200
                    ],
                    "where": [
                        185,
                        "proposal_details_bool_exp!"
                    ]
                }
            ],
            "update_proposal_details_by_pk": [
                180,
                {
                    "_append": [
                        183
                    ],
                    "_delete_at_path": [
                        187
                    ],
                    "_delete_elem": [
                        188
                    ],
                    "_delete_key": [
                        189
                    ],
                    "_inc": [
                        190
                    ],
                    "_prepend": [
                        198
                    ],
                    "_set": [
                        200
                    ],
                    "pk_columns": [
                        197,
                        "proposal_details_pk_columns_input!"
                    ]
                }
            ],
            "update_proposal_details_many": [
                194,
                {
                    "updates": [
                        208,
                        "[proposal_details_updates!]!"
                    ]
                }
            ],
            "update_proposals": [
                222,
                {
                    "_inc": [
                        218
                    ],
                    "_set": [
                        227
                    ],
                    "where": [
                        216,
                        "proposals_bool_exp!"
                    ]
                }
            ],
            "update_proposals_by_pk": [
                212,
                {
                    "_inc": [
                        218
                    ],
                    "_set": [
                        227
                    ],
                    "pk_columns": [
                        225,
                        "proposals_pk_columns_input!"
                    ]
                }
            ],
            "update_proposals_many": [
                222,
                {
                    "updates": [
                        235,
                        "[proposals_updates!]!"
                    ]
                }
            ],
            "update_token_accts": [
                253,
                {
                    "_inc": [
                        249
                    ],
                    "_set": [
                        258
                    ],
                    "where": [
                        247,
                        "token_accts_bool_exp!"
                    ]
                }
            ],
            "update_token_accts_by_pk": [
                243,
                {
                    "_inc": [
                        249
                    ],
                    "_set": [
                        258
                    ],
                    "pk_columns": [
                        256,
                        "token_accts_pk_columns_input!"
                    ]
                }
            ],
            "update_token_accts_many": [
                253,
                {
                    "updates": [
                        266,
                        "[token_accts_updates!]!"
                    ]
                }
            ],
            "update_tokens": [
                280,
                {
                    "_inc": [
                        276
                    ],
                    "_set": [
                        285
                    ],
                    "where": [
                        274,
                        "tokens_bool_exp!"
                    ]
                }
            ],
            "update_tokens_by_pk": [
                270,
                {
                    "_inc": [
                        276
                    ],
                    "_set": [
                        285
                    ],
                    "pk_columns": [
                        283,
                        "tokens_pk_columns_input!"
                    ]
                }
            ],
            "update_tokens_many": [
                280,
                {
                    "updates": [
                        293,
                        "[tokens_updates!]!"
                    ]
                }
            ],
            "update_transactions": [
                307,
                {
                    "_inc": [
                        303
                    ],
                    "_set": [
                        312
                    ],
                    "where": [
                        301,
                        "transactions_bool_exp!"
                    ]
                }
            ],
            "update_transactions_by_pk": [
                297,
                {
                    "_inc": [
                        303
                    ],
                    "_set": [
                        312
                    ],
                    "pk_columns": [
                        310,
                        "transactions_pk_columns_input!"
                    ]
                }
            ],
            "update_transactions_many": [
                307,
                {
                    "updates": [
                        320,
                        "[transactions_updates!]!"
                    ]
                }
            ],
            "update_twaps": [
                334,
                {
                    "_inc": [
                        330
                    ],
                    "_set": [
                        339
                    ],
                    "where": [
                        328,
                        "twaps_bool_exp!"
                    ]
                }
            ],
            "update_twaps_by_pk": [
                324,
                {
                    "_inc": [
                        330
                    ],
                    "_set": [
                        339
                    ],
                    "pk_columns": [
                        337,
                        "twaps_pk_columns_input!"
                    ]
                }
            ],
            "update_twaps_many": [
                334,
                {
                    "updates": [
                        347,
                        "[twaps_updates!]!"
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
                        23,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        21,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        13
                    ]
                }
            ],
            "candles_aggregate": [
                10,
                {
                    "distinct_on": [
                        23,
                        "[candles_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        21,
                        "[candles_order_by!]"
                    ],
                    "where": [
                        13
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
                        241,
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
                        28,
                        "[candles_stream_cursor_input]!"
                    ],
                    "where": [
                        13
                    ]
                }
            ],
            "dao_details": [
                37,
                {
                    "distinct_on": [
                        51,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        49,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "dao_details_aggregate": [
                38,
                {
                    "distinct_on": [
                        51,
                        "[dao_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        49,
                        "[dao_details_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "dao_details_by_pk": [
                37,
                {
                    "dao_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "dao_details_stream": [
                37,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        56,
                        "[dao_details_stream_cursor_input]!"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "daos": [
                64,
                {
                    "distinct_on": [
                        78,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        76,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "daos_aggregate": [
                65,
                {
                    "distinct_on": [
                        78,
                        "[daos_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        76,
                        "[daos_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "daos_by_pk": [
                64,
                {
                    "dao_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "daos_stream": [
                64,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        83,
                        "[daos_stream_cursor_input]!"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "markets": [
                96,
                {
                    "distinct_on": [
                        110,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        108,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "markets_aggregate": [
                97,
                {
                    "distinct_on": [
                        110,
                        "[markets_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        108,
                        "[markets_order_by!]"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "markets_by_pk": [
                96,
                {
                    "market_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "markets_stream": [
                96,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        115,
                        "[markets_stream_cursor_input]!"
                    ],
                    "where": [
                        100
                    ]
                }
            ],
            "orders": [
                126,
                {
                    "distinct_on": [
                        140,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        138,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "orders_aggregate": [
                127,
                {
                    "distinct_on": [
                        140,
                        "[orders_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        138,
                        "[orders_order_by!]"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "orders_by_pk": [
                126,
                {
                    "order_tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "orders_stream": [
                126,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        145,
                        "[orders_stream_cursor_input]!"
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "programs": [
                153,
                {
                    "distinct_on": [
                        167,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        165,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        157
                    ]
                }
            ],
            "programs_aggregate": [
                154,
                {
                    "distinct_on": [
                        167,
                        "[programs_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        165,
                        "[programs_order_by!]"
                    ],
                    "where": [
                        157
                    ]
                }
            ],
            "programs_by_pk": [
                153,
                {
                    "program_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "programs_stream": [
                153,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        172,
                        "[programs_stream_cursor_input]!"
                    ],
                    "where": [
                        157
                    ]
                }
            ],
            "proposal_details": [
                180,
                {
                    "distinct_on": [
                        199,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        196,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        185
                    ]
                }
            ],
            "proposal_details_aggregate": [
                181,
                {
                    "distinct_on": [
                        199,
                        "[proposal_details_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        196,
                        "[proposal_details_order_by!]"
                    ],
                    "where": [
                        185
                    ]
                }
            ],
            "proposal_details_by_pk": [
                180,
                {
                    "proposal_id": [
                        7,
                        "bigint!"
                    ]
                }
            ],
            "proposal_details_stream": [
                180,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        204,
                        "[proposal_details_stream_cursor_input]!"
                    ],
                    "where": [
                        185
                    ]
                }
            ],
            "proposals": [
                212,
                {
                    "distinct_on": [
                        226,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        224,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "proposals_aggregate": [
                213,
                {
                    "distinct_on": [
                        226,
                        "[proposals_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        224,
                        "[proposals_order_by!]"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "proposals_by_pk": [
                212,
                {
                    "proposal_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "proposals_stream": [
                212,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        231,
                        "[proposals_stream_cursor_input]!"
                    ],
                    "where": [
                        216
                    ]
                }
            ],
            "token_accts": [
                243,
                {
                    "distinct_on": [
                        257,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        255,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        247
                    ]
                }
            ],
            "token_accts_aggregate": [
                244,
                {
                    "distinct_on": [
                        257,
                        "[token_accts_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        255,
                        "[token_accts_order_by!]"
                    ],
                    "where": [
                        247
                    ]
                }
            ],
            "token_accts_by_pk": [
                243,
                {
                    "token_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "token_accts_stream": [
                243,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        262,
                        "[token_accts_stream_cursor_input]!"
                    ],
                    "where": [
                        247
                    ]
                }
            ],
            "tokens": [
                270,
                {
                    "distinct_on": [
                        284,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        282,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        274
                    ]
                }
            ],
            "tokens_aggregate": [
                271,
                {
                    "distinct_on": [
                        284,
                        "[tokens_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        282,
                        "[tokens_order_by!]"
                    ],
                    "where": [
                        274
                    ]
                }
            ],
            "tokens_by_pk": [
                270,
                {
                    "mint_acct": [
                        5,
                        "String!"
                    ]
                }
            ],
            "tokens_stream": [
                270,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        289,
                        "[tokens_stream_cursor_input]!"
                    ],
                    "where": [
                        274
                    ]
                }
            ],
            "transactions": [
                297,
                {
                    "distinct_on": [
                        311,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        309,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        301
                    ]
                }
            ],
            "transactions_aggregate": [
                298,
                {
                    "distinct_on": [
                        311,
                        "[transactions_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        309,
                        "[transactions_order_by!]"
                    ],
                    "where": [
                        301
                    ]
                }
            ],
            "transactions_by_pk": [
                297,
                {
                    "tx_sig": [
                        5,
                        "String!"
                    ]
                }
            ],
            "transactions_stream": [
                297,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        316,
                        "[transactions_stream_cursor_input]!"
                    ],
                    "where": [
                        301
                    ]
                }
            ],
            "twaps": [
                324,
                {
                    "distinct_on": [
                        338,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        336,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        328
                    ]
                }
            ],
            "twaps_aggregate": [
                325,
                {
                    "distinct_on": [
                        338,
                        "[twaps_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        336,
                        "[twaps_order_by!]"
                    ],
                    "where": [
                        328
                    ]
                }
            ],
            "twaps_by_pk": [
                324,
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
                324,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        343,
                        "[twaps_stream_cursor_input]!"
                    ],
                    "where": [
                        328
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}