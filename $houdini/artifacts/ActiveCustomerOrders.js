export default {
    "name": "ActiveCustomerOrders",
    "kind": "HoudiniQuery",
    "hash": "d38703a039ad4ad6523df68d85a35071feb8344a067d7b4da4bbc55bc1eb073b",

    "raw": `query ActiveCustomerOrders($options: OrderListOptions) {
  activeCustomer {
    id
    orders(options: $options) {
      items {
        id
        code
        state
        totalWithTax
        currencyCode
        lines {
          featuredAsset {
            preview
            id
          }
          productVariant {
            name
            id
          }
          id
        }
      }
      totalItems
    }
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "activeCustomer": {
                "type": "Customer",
                "keyRaw": "activeCustomer",
                "nullable": true,

                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID",
                            "keyRaw": "id",
                            "visible": true
                        },

                        "orders": {
                            "type": "OrderList",
                            "keyRaw": "orders(options: $options)",

                            "selection": {
                                "fields": {
                                    "items": {
                                        "type": "Order",
                                        "keyRaw": "items",

                                        "selection": {
                                            "fields": {
                                                "id": {
                                                    "type": "ID",
                                                    "keyRaw": "id",
                                                    "visible": true
                                                },

                                                "code": {
                                                    "type": "String",
                                                    "keyRaw": "code",
                                                    "visible": true
                                                },

                                                "state": {
                                                    "type": "String",
                                                    "keyRaw": "state",
                                                    "visible": true
                                                },

                                                "totalWithTax": {
                                                    "type": "Money",
                                                    "keyRaw": "totalWithTax",
                                                    "visible": true
                                                },

                                                "currencyCode": {
                                                    "type": "CurrencyCode",
                                                    "keyRaw": "currencyCode",
                                                    "visible": true
                                                },

                                                "lines": {
                                                    "type": "OrderLine",
                                                    "keyRaw": "lines",

                                                    "selection": {
                                                        "fields": {
                                                            "featuredAsset": {
                                                                "type": "Asset",
                                                                "keyRaw": "featuredAsset",
                                                                "nullable": true,

                                                                "selection": {
                                                                    "fields": {
                                                                        "preview": {
                                                                            "type": "String",
                                                                            "keyRaw": "preview",
                                                                            "visible": true
                                                                        },

                                                                        "id": {
                                                                            "type": "ID",
                                                                            "keyRaw": "id",
                                                                            "visible": true
                                                                        }
                                                                    }
                                                                },

                                                                "visible": true
                                                            },

                                                            "productVariant": {
                                                                "type": "ProductVariant",
                                                                "keyRaw": "productVariant",

                                                                "selection": {
                                                                    "fields": {
                                                                        "name": {
                                                                            "type": "String",
                                                                            "keyRaw": "name",
                                                                            "visible": true
                                                                        },

                                                                        "id": {
                                                                            "type": "ID",
                                                                            "keyRaw": "id",
                                                                            "visible": true
                                                                        }
                                                                    }
                                                                },

                                                                "visible": true
                                                            },

                                                            "id": {
                                                                "type": "ID",
                                                                "keyRaw": "id",
                                                                "visible": true
                                                            }
                                                        }
                                                    },

                                                    "visible": true
                                                }
                                            }
                                        },

                                        "visible": true
                                    },

                                    "totalItems": {
                                        "type": "Int",
                                        "keyRaw": "totalItems",
                                        "visible": true
                                    }
                                }
                            },

                            "visible": true
                        }
                    }
                },

                "visible": true
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    },

    "input": {
        "fields": {
            "options": "OrderListOptions"
        },

        "types": {
            "BooleanOperators": {
                "eq": "Boolean",
                "isNull": "Boolean"
            },

            "StringOperators": {
                "contains": "String",
                "eq": "String",
                "in": "String",
                "isNull": "Boolean",
                "notContains": "String",
                "notEq": "String",
                "notIn": "String",
                "regex": "String"
            },

            "DateRange": {
                "end": "DateTime",
                "start": "DateTime"
            },

            "DateOperators": {
                "after": "DateTime",
                "before": "DateTime",
                "between": "DateRange",
                "eq": "DateTime",
                "isNull": "Boolean"
            },

            "IDOperators": {
                "eq": "String",
                "in": "String",
                "isNull": "Boolean",
                "notEq": "String",
                "notIn": "String"
            },

            "NumberRange": {
                "end": "Float",
                "start": "Float"
            },

            "NumberOperators": {
                "between": "NumberRange",
                "eq": "Float",
                "gt": "Float",
                "gte": "Float",
                "isNull": "Boolean",
                "lt": "Float",
                "lte": "Float"
            },

            "OrderFilterParameter": {
                "_and": "OrderFilterParameter",
                "_or": "OrderFilterParameter",
                "active": "BooleanOperators",
                "code": "StringOperators",
                "createdAt": "DateOperators",
                "currencyCode": "StringOperators",
                "id": "IDOperators",
                "orderPlacedAt": "DateOperators",
                "shipping": "NumberOperators",
                "shippingWithTax": "NumberOperators",
                "state": "StringOperators",
                "subTotal": "NumberOperators",
                "subTotalWithTax": "NumberOperators",
                "total": "NumberOperators",
                "totalQuantity": "NumberOperators",
                "totalWithTax": "NumberOperators",
                "type": "StringOperators",
                "updatedAt": "DateOperators"
            },

            "OrderSortParameter": {
                "code": "SortOrder",
                "createdAt": "SortOrder",
                "id": "SortOrder",
                "orderPlacedAt": "SortOrder",
                "shipping": "SortOrder",
                "shippingWithTax": "SortOrder",
                "state": "SortOrder",
                "subTotal": "SortOrder",
                "subTotalWithTax": "SortOrder",
                "total": "SortOrder",
                "totalQuantity": "SortOrder",
                "totalWithTax": "SortOrder",
                "updatedAt": "SortOrder"
            },

            "OrderListOptions": {
                "filter": "OrderFilterParameter",
                "filterOperator": "LogicalOperator",
                "skip": "Int",
                "sort": "OrderSortParameter",
                "take": "Int"
            }
        },

        "defaults": {},
        "runtimeScalars": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=9e9946394414829d7cbde4fb7ea2804d8e06c3492996cbbf1011753b239d7daa";