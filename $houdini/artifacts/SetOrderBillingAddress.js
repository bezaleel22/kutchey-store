export default {
    "name": "SetOrderBillingAddress",
    "kind": "HoudiniMutation",
    "hash": "058d720d53fea63feb33b874ce3927e4a3657b9e7a3f24bdb4073676ab09f84a",

    "raw": `mutation SetOrderBillingAddress($input: CreateAddressInput!) {
  setOrderBillingAddress(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
    __typename
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

    "rootType": "Mutation",

    "selection": {
        "fields": {
            "setOrderBillingAddress": {
                "type": "ActiveOrderResult",
                "keyRaw": "setOrderBillingAddress(input: $input)",

                "selection": {
                    "abstractFields": {
                        "fields": {
                            "Order": {
                                "__typename": {
                                    "type": "String",
                                    "keyRaw": "__typename",
                                    "visible": true
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

                            "ErrorResult": {
                                "errorCode": {
                                    "type": "ErrorCode",
                                    "keyRaw": "errorCode",
                                    "visible": true
                                },

                                "message": {
                                    "type": "String",
                                    "keyRaw": "message",
                                    "visible": true
                                },

                                "__typename": {
                                    "type": "String",
                                    "keyRaw": "__typename",
                                    "visible": true
                                }
                            }
                        },

                        "typeMap": {
                            "NoActiveOrderError": "ErrorResult"
                        }
                    },

                    "fields": {
                        "__typename": {
                            "type": "String",
                            "keyRaw": "__typename",
                            "visible": true
                        }
                    },

                    "fragments": {
                        "OrderDetail": {
                            "arguments": {}
                        }
                    }
                },

                "abstract": true,
                "visible": true
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    },

    "input": {
        "fields": {
            "input": "CreateAddressInput"
        },

        "types": {
            "CreateAddressInput": {
                "city": "String",
                "company": "String",
                "countryCode": "String",
                "customFields": "JSON",
                "defaultBillingAddress": "Boolean",
                "defaultShippingAddress": "Boolean",
                "fullName": "String",
                "phoneNumber": "String",
                "postalCode": "String",
                "province": "String",
                "streetLine1": "String",
                "streetLine2": "String"
            }
        },

        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=54b2500be0699d5491ef903fd335a40b27d3f1951a25b51b2663abe3bc826c49";