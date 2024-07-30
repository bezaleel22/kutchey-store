export default {
    "name": "Collections",
    "kind": "HoudiniQuery",
    "hash": "4fd3ccae6fa4ca7ef08ca6dd40332bd961ee62e1de880ffd17931644825d9e69",

    "raw": `query Collections($options: CollectionListOptions) {
  collections(options: $options) {
    totalItems
    items {
      id
      name
      slug
      parent {
        name
        id
      }
      featuredAsset {
        id
        preview
      }
      productVariants {
        totalItems
      }
    }
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "collections": {
                "type": "CollectionList",
                "keyRaw": "collections(options: $options)",

                "selection": {
                    "fields": {
                        "totalItems": {
                            "type": "Int",
                            "keyRaw": "totalItems",
                            "visible": true
                        },

                        "items": {
                            "type": "Collection",
                            "keyRaw": "items",

                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "visible": true
                                    },

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name",
                                        "visible": true
                                    },

                                    "slug": {
                                        "type": "String",
                                        "keyRaw": "slug",
                                        "visible": true
                                    },

                                    "parent": {
                                        "type": "Collection",
                                        "keyRaw": "parent",
                                        "nullable": true,

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

                                    "featuredAsset": {
                                        "type": "Asset",
                                        "keyRaw": "featuredAsset",
                                        "nullable": true,

                                        "selection": {
                                            "fields": {
                                                "id": {
                                                    "type": "ID",
                                                    "keyRaw": "id",
                                                    "visible": true
                                                },

                                                "preview": {
                                                    "type": "String",
                                                    "keyRaw": "preview",
                                                    "visible": true
                                                }
                                            }
                                        },

                                        "visible": true
                                    },

                                    "productVariants": {
                                        "type": "ProductVariantList",
                                        "keyRaw": "productVariants",

                                        "selection": {
                                            "fields": {
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

                "visible": true
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    },

    "input": {
        "fields": {
            "options": "CollectionListOptions"
        },

        "types": {
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

            "CollectionFilterParameter": {
                "_and": "CollectionFilterParameter",
                "_or": "CollectionFilterParameter",
                "createdAt": "DateOperators",
                "description": "StringOperators",
                "id": "IDOperators",
                "languageCode": "StringOperators",
                "name": "StringOperators",
                "parentId": "IDOperators",
                "position": "NumberOperators",
                "slug": "StringOperators",
                "updatedAt": "DateOperators"
            },

            "CollectionSortParameter": {
                "createdAt": "SortOrder",
                "description": "SortOrder",
                "id": "SortOrder",
                "name": "SortOrder",
                "parentId": "SortOrder",
                "position": "SortOrder",
                "slug": "SortOrder",
                "updatedAt": "SortOrder"
            },

            "CollectionListOptions": {
                "filter": "CollectionFilterParameter",
                "filterOperator": "LogicalOperator",
                "skip": "Int",
                "sort": "CollectionSortParameter",
                "take": "Int",
                "topLevelOnly": "Boolean"
            }
        },

        "defaults": {},
        "runtimeScalars": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=68ad681b23d55692975c4c1de09280a4f81912988ae18946626e323a46eb82c6";