export default {
    "name": "Collection",
    "kind": "HoudiniQuery",
    "hash": "4c1c9e6c2f15258d20eb3a38ff42c7ef7f2f4cc6aab8743b60cadefe3e6d0252",

    "raw": `query Collection($slug: String, $id: ID) {
  collection(slug: $slug, id: $id) {
    id
    name
    slug
    breadcrumbs {
      id
      name
      slug
    }
    productVariants {
      totalItems
      items {
        id
        sku
        name
        currencyCode
        featuredAsset {
          id
          preview
        }
        price
      }
    }
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "collection": {
                "type": "Collection",
                "keyRaw": "collection(id: $id, slug: $slug)",
                "nullable": true,

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

                        "breadcrumbs": {
                            "type": "CollectionBreadcrumb",
                            "keyRaw": "breadcrumbs",

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
                                    },

                                    "items": {
                                        "type": "ProductVariant",
                                        "keyRaw": "items",

                                        "selection": {
                                            "fields": {
                                                "id": {
                                                    "type": "ID",
                                                    "keyRaw": "id",
                                                    "visible": true
                                                },

                                                "sku": {
                                                    "type": "String",
                                                    "keyRaw": "sku",
                                                    "visible": true
                                                },

                                                "name": {
                                                    "type": "String",
                                                    "keyRaw": "name",
                                                    "visible": true
                                                },

                                                "currencyCode": {
                                                    "type": "CurrencyCode",
                                                    "keyRaw": "currencyCode",
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

                                                "price": {
                                                    "type": "Money",
                                                    "keyRaw": "price",
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
            "slug": "String",
            "id": "ID"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=0a33512c0f533fb8a959e8e97689c20baef94065d99e59fec18fa390de53704d";