export default {
    "name": "DetailedProduct",
    "kind": "HoudiniFragment",
    "hash": "d9faa640386fe82faaad21b5fa18e66eb0768e864797a6221be4297dd98ffbc0",

    "raw": `fragment DetailedProduct on Product {
  id
  name
  description
  optionGroups {
    id
    code
    name
    options {
      id
      code
      name
    }
  }
  collections {
    id
    slug
    name
    breadcrumbs {
      id
      name
      slug
    }
  }
  facetValues {
    facet {
      id
      code
      name
    }
    id
    code
    name
  }
  featuredAsset {
    id
    preview
  }
  assets {
    id
    preview
  }
  variants {
    id
    name
    sku
    stockLevel
    currencyCode
    price
    priceWithTax
    options {
      id
      code
      name
    }
    facetValues {
      id
      name
      facet {
        id
        name
      }
    }
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
  }
  __typename
}
`,

    "rootType": "Product",

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

            "description": {
                "type": "String",
                "keyRaw": "description",
                "visible": true
            },

            "optionGroups": {
                "type": "ProductOptionGroup",
                "keyRaw": "optionGroups",

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

                        "name": {
                            "type": "String",
                            "keyRaw": "name",
                            "visible": true
                        },

                        "options": {
                            "type": "ProductOption",
                            "keyRaw": "options",

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

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name",
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

            "collections": {
                "type": "Collection",
                "keyRaw": "collections",

                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID",
                            "keyRaw": "id",
                            "visible": true
                        },

                        "slug": {
                            "type": "String",
                            "keyRaw": "slug",
                            "visible": true
                        },

                        "name": {
                            "type": "String",
                            "keyRaw": "name",
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
                        }
                    }
                },

                "visible": true
            },

            "facetValues": {
                "type": "FacetValue",
                "keyRaw": "facetValues",

                "selection": {
                    "fields": {
                        "facet": {
                            "type": "Facet",
                            "keyRaw": "facet",

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

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name",
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
                        },

                        "code": {
                            "type": "String",
                            "keyRaw": "code",
                            "visible": true
                        },

                        "name": {
                            "type": "String",
                            "keyRaw": "name",
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

            "assets": {
                "type": "Asset",
                "keyRaw": "assets",

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

            "variants": {
                "type": "ProductVariant",
                "keyRaw": "variants",

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

                        "sku": {
                            "type": "String",
                            "keyRaw": "sku",
                            "visible": true
                        },

                        "stockLevel": {
                            "type": "String",
                            "keyRaw": "stockLevel",
                            "visible": true
                        },

                        "currencyCode": {
                            "type": "CurrencyCode",
                            "keyRaw": "currencyCode",
                            "visible": true
                        },

                        "price": {
                            "type": "Money",
                            "keyRaw": "price",
                            "visible": true
                        },

                        "priceWithTax": {
                            "type": "Money",
                            "keyRaw": "priceWithTax",
                            "visible": true
                        },

                        "options": {
                            "type": "ProductOption",
                            "keyRaw": "options",

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

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name",
                                        "visible": true
                                    }
                                }
                            },

                            "visible": true
                        },

                        "facetValues": {
                            "type": "FacetValue",
                            "keyRaw": "facetValues",

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

                                    "facet": {
                                        "type": "Facet",
                                        "keyRaw": "facet",

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
                                                }
                                            }
                                        },

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

                        "assets": {
                            "type": "Asset",
                            "keyRaw": "assets",

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
                        }
                    }
                },

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

"HoudiniHash=1f0f12217487635fc68478f73b37aa75f44d3776eceb1eeddd5c0c3c8f923ad4";