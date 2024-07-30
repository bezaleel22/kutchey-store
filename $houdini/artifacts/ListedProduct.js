export default {
    "name": "ListedProduct",
    "kind": "HoudiniFragment",
    "hash": "48e948b7c38b68f6b326092c56e68cce6329d86e8f62803191ecd3cd9d751793",

    "raw": `fragment ListedProduct on SearchResult {
  productId
  productName
  slug
  productAsset {
    id
    preview
  }
  currencyCode
  priceWithTax {
    ... on PriceRange {
      min
      max
    }
    ... on SinglePrice {
      value
    }
    __typename
  }
  __typename
}
`,

    "rootType": "SearchResult",

    "selection": {
        "fields": {
            "productId": {
                "type": "ID",
                "keyRaw": "productId",
                "visible": true
            },

            "productName": {
                "type": "String",
                "keyRaw": "productName",
                "visible": true
            },

            "slug": {
                "type": "String",
                "keyRaw": "slug",
                "visible": true
            },

            "productAsset": {
                "type": "SearchResultAsset",
                "keyRaw": "productAsset",
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

            "currencyCode": {
                "type": "CurrencyCode",
                "keyRaw": "currencyCode",
                "visible": true
            },

            "priceWithTax": {
                "type": "SearchResultPrice",
                "keyRaw": "priceWithTax",

                "selection": {
                    "abstractFields": {
                        "fields": {
                            "PriceRange": {
                                "min": {
                                    "type": "Money",
                                    "keyRaw": "min",
                                    "visible": true
                                },

                                "max": {
                                    "type": "Money",
                                    "keyRaw": "max",
                                    "visible": true
                                },

                                "__typename": {
                                    "type": "String",
                                    "keyRaw": "__typename",
                                    "visible": true
                                }
                            },

                            "SinglePrice": {
                                "value": {
                                    "type": "Money",
                                    "keyRaw": "value",
                                    "visible": true
                                },

                                "__typename": {
                                    "type": "String",
                                    "keyRaw": "__typename",
                                    "visible": true
                                }
                            }
                        },

                        "typeMap": {}
                    },

                    "fields": {
                        "__typename": {
                            "type": "String",
                            "keyRaw": "__typename",
                            "visible": true
                        }
                    }
                },

                "abstract": true,
                "visible": true
            },

            "__typename": {
                "type": "String",
                "keyRaw": "__typename",
                "visible": true
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    }
};

"HoudiniHash=9a55162849d6bd15f85513a2b7e473a6bba288f8e66881216940ecc17fb9b673";