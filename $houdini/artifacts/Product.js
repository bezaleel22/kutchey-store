export default {
    "name": "Product",
    "kind": "HoudiniQuery",
    "hash": "6703aa982af402c7ce92332b2809fa98782fa66a1261d588b3f36d76f9d55bfe",

    "raw": `query Product($slug: String, $id: ID) {
  product(slug: $slug, id: $id) {
    ...DetailedProduct
    id
  }
}

fragment DetailedProduct on Product {
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

    "rootType": "Query",

    "selection": {
        "fields": {
            "product": {
                "type": "Product",
                "keyRaw": "product(id: $id, slug: $slug)",
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
                            "keyRaw": "name"
                        },

                        "description": {
                            "type": "String",
                            "keyRaw": "description"
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
                                        "keyRaw": "code"
                                    },

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name"
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
                                                    "keyRaw": "code"
                                                },

                                                "name": {
                                                    "type": "String",
                                                    "keyRaw": "name"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
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
                                        "keyRaw": "slug"
                                    },

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name"
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
                                                    "keyRaw": "name"
                                                },

                                                "slug": {
                                                    "type": "String",
                                                    "keyRaw": "slug"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
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
                                                    "keyRaw": "code"
                                                },

                                                "name": {
                                                    "type": "String",
                                                    "keyRaw": "name"
                                                }
                                            }
                                        }
                                    },

                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "visible": true
                                    },

                                    "code": {
                                        "type": "String",
                                        "keyRaw": "code"
                                    },

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name"
                                    }
                                }
                            }
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
                                        "keyRaw": "preview"
                                    }
                                }
                            }
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
                                        "keyRaw": "preview"
                                    }
                                }
                            }
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
                                        "keyRaw": "name"
                                    },

                                    "sku": {
                                        "type": "String",
                                        "keyRaw": "sku"
                                    },

                                    "stockLevel": {
                                        "type": "String",
                                        "keyRaw": "stockLevel"
                                    },

                                    "currencyCode": {
                                        "type": "CurrencyCode",
                                        "keyRaw": "currencyCode"
                                    },

                                    "price": {
                                        "type": "Money",
                                        "keyRaw": "price"
                                    },

                                    "priceWithTax": {
                                        "type": "Money",
                                        "keyRaw": "priceWithTax"
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
                                                    "keyRaw": "code"
                                                },

                                                "name": {
                                                    "type": "String",
                                                    "keyRaw": "name"
                                                }
                                            }
                                        }
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
                                                    "keyRaw": "name"
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
                                                                "keyRaw": "name"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
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
                                                    "keyRaw": "preview"
                                                }
                                            }
                                        }
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
                                                    "keyRaw": "preview"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },

                        "__typename": {
                            "type": "String",
                            "keyRaw": "__typename"
                        }
                    },

                    "fragments": {
                        "DetailedProduct": {
                            "arguments": {}
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

"HoudiniHash=de0682d0d8fa0ee757780d8ac246c3185d15303c41e65bbfb6979c9f84e43e5f";