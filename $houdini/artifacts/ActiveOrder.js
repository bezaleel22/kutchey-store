export default {
    "name": "ActiveOrder",
    "kind": "HoudiniQuery",
    "hash": "de84c2e077b09fda22eb960c7895ae0ad67c1a60ed08a6f1551d0d3b1a5bc81f",

    "raw": `query ActiveOrder {
  activeOrder {
    ...OrderDetail
    id
  }
}

fragment OrderDetail on Order {
  __typename
  id
  code
  active
  createdAt
  state
  currencyCode
  totalQuantity
  subTotal
  subTotalWithTax
  taxSummary {
    description
    taxRate
    taxTotal
  }
  shippingWithTax
  totalWithTax
  customer {
    id
    firstName
    lastName
    emailAddress
  }
  shippingAddress {
    fullName
    streetLine1
    streetLine2
    company
    city
    province
    postalCode
    countryCode
    phoneNumber
  }
  shippingLines {
    shippingMethod {
      id
      name
    }
    priceWithTax
    id
  }
  lines {
    id
    unitPriceWithTax
    linePriceWithTax
    quantity
    featuredAsset {
      id
      preview
    }
    productVariant {
      id
      name
      price
      currencyCode
      product {
        id
        slug
        description
      }
    }
  }
  __typename
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "activeOrder": {
                "type": "Order",
                "keyRaw": "activeOrder",
                "nullable": true,

                "selection": {
                    "fields": {
                        "__typename": {
                            "type": "String",
                            "keyRaw": "__typename"
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

                        "active": {
                            "type": "Boolean",
                            "keyRaw": "active"
                        },

                        "createdAt": {
                            "type": "DateTime",
                            "keyRaw": "createdAt"
                        },

                        "state": {
                            "type": "String",
                            "keyRaw": "state"
                        },

                        "currencyCode": {
                            "type": "CurrencyCode",
                            "keyRaw": "currencyCode"
                        },

                        "totalQuantity": {
                            "type": "Int",
                            "keyRaw": "totalQuantity"
                        },

                        "subTotal": {
                            "type": "Money",
                            "keyRaw": "subTotal"
                        },

                        "subTotalWithTax": {
                            "type": "Money",
                            "keyRaw": "subTotalWithTax"
                        },

                        "taxSummary": {
                            "type": "OrderTaxSummary",
                            "keyRaw": "taxSummary",

                            "selection": {
                                "fields": {
                                    "description": {
                                        "type": "String",
                                        "keyRaw": "description"
                                    },

                                    "taxRate": {
                                        "type": "Float",
                                        "keyRaw": "taxRate"
                                    },

                                    "taxTotal": {
                                        "type": "Money",
                                        "keyRaw": "taxTotal"
                                    }
                                }
                            }
                        },

                        "shippingWithTax": {
                            "type": "Money",
                            "keyRaw": "shippingWithTax"
                        },

                        "totalWithTax": {
                            "type": "Money",
                            "keyRaw": "totalWithTax"
                        },

                        "customer": {
                            "type": "Customer",
                            "keyRaw": "customer",
                            "nullable": true,

                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "visible": true
                                    },

                                    "firstName": {
                                        "type": "String",
                                        "keyRaw": "firstName"
                                    },

                                    "lastName": {
                                        "type": "String",
                                        "keyRaw": "lastName"
                                    },

                                    "emailAddress": {
                                        "type": "String",
                                        "keyRaw": "emailAddress"
                                    }
                                }
                            }
                        },

                        "shippingAddress": {
                            "type": "OrderAddress",
                            "keyRaw": "shippingAddress",
                            "nullable": true,

                            "selection": {
                                "fields": {
                                    "fullName": {
                                        "type": "String",
                                        "keyRaw": "fullName",
                                        "nullable": true
                                    },

                                    "streetLine1": {
                                        "type": "String",
                                        "keyRaw": "streetLine1",
                                        "nullable": true
                                    },

                                    "streetLine2": {
                                        "type": "String",
                                        "keyRaw": "streetLine2",
                                        "nullable": true
                                    },

                                    "company": {
                                        "type": "String",
                                        "keyRaw": "company",
                                        "nullable": true
                                    },

                                    "city": {
                                        "type": "String",
                                        "keyRaw": "city",
                                        "nullable": true
                                    },

                                    "province": {
                                        "type": "String",
                                        "keyRaw": "province",
                                        "nullable": true
                                    },

                                    "postalCode": {
                                        "type": "String",
                                        "keyRaw": "postalCode",
                                        "nullable": true
                                    },

                                    "countryCode": {
                                        "type": "String",
                                        "keyRaw": "countryCode",
                                        "nullable": true
                                    },

                                    "phoneNumber": {
                                        "type": "String",
                                        "keyRaw": "phoneNumber",
                                        "nullable": true
                                    }
                                }
                            }
                        },

                        "shippingLines": {
                            "type": "ShippingLine",
                            "keyRaw": "shippingLines",

                            "selection": {
                                "fields": {
                                    "shippingMethod": {
                                        "type": "ShippingMethod",
                                        "keyRaw": "shippingMethod",

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
                                    },

                                    "priceWithTax": {
                                        "type": "Money",
                                        "keyRaw": "priceWithTax"
                                    },

                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "visible": true
                                    }
                                }
                            }
                        },

                        "lines": {
                            "type": "OrderLine",
                            "keyRaw": "lines",

                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "visible": true
                                    },

                                    "unitPriceWithTax": {
                                        "type": "Money",
                                        "keyRaw": "unitPriceWithTax"
                                    },

                                    "linePriceWithTax": {
                                        "type": "Money",
                                        "keyRaw": "linePriceWithTax"
                                    },

                                    "quantity": {
                                        "type": "Int",
                                        "keyRaw": "quantity"
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

                                    "productVariant": {
                                        "type": "ProductVariant",
                                        "keyRaw": "productVariant",

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

                                                "price": {
                                                    "type": "Money",
                                                    "keyRaw": "price"
                                                },

                                                "currencyCode": {
                                                    "type": "CurrencyCode",
                                                    "keyRaw": "currencyCode"
                                                },

                                                "product": {
                                                    "type": "Product",
                                                    "keyRaw": "product",

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

                                                            "description": {
                                                                "type": "String",
                                                                "keyRaw": "description"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },

                    "fragments": {
                        "OrderDetail": {
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

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=0cc74c36968f5bd582b985fa2e2956f7e8ee9011edd47395d465c84c71a86a04";