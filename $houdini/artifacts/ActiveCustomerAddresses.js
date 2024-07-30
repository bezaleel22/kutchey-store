export default {
    "name": "ActiveCustomerAddresses",
    "kind": "HoudiniQuery",
    "hash": "5c50a342b2dc750e8af768df3be67f7ef615943daac471bf23b0cda0b2a060fb",

    "raw": `query ActiveCustomerAddresses {
  activeCustomer {
    id
    addresses {
      id
      fullName
      company
      streetLine1
      streetLine2
      city
      province
      postalCode
      country {
        code
        id
      }
      phoneNumber
      defaultShippingAddress
      defaultBillingAddress
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

                        "addresses": {
                            "type": "Address",
                            "keyRaw": "addresses",
                            "nullable": true,

                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "visible": true
                                    },

                                    "fullName": {
                                        "type": "String",
                                        "keyRaw": "fullName",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "company": {
                                        "type": "String",
                                        "keyRaw": "company",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "streetLine1": {
                                        "type": "String",
                                        "keyRaw": "streetLine1",
                                        "visible": true
                                    },

                                    "streetLine2": {
                                        "type": "String",
                                        "keyRaw": "streetLine2",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "city": {
                                        "type": "String",
                                        "keyRaw": "city",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "province": {
                                        "type": "String",
                                        "keyRaw": "province",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "postalCode": {
                                        "type": "String",
                                        "keyRaw": "postalCode",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "country": {
                                        "type": "Country",
                                        "keyRaw": "country",

                                        "selection": {
                                            "fields": {
                                                "code": {
                                                    "type": "String",
                                                    "keyRaw": "code",
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

                                    "phoneNumber": {
                                        "type": "String",
                                        "keyRaw": "phoneNumber",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "defaultShippingAddress": {
                                        "type": "Boolean",
                                        "keyRaw": "defaultShippingAddress",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "defaultBillingAddress": {
                                        "type": "Boolean",
                                        "keyRaw": "defaultBillingAddress",
                                        "nullable": true,
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

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=ec0e5bc93a6c50c69781c5e6c5aba89cefc746825ecd88c1f830847c4595545d";