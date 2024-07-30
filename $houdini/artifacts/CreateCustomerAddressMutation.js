export default {
    "name": "CreateCustomerAddressMutation",
    "kind": "HoudiniMutation",
    "hash": "aa2ce2b0824587e58dd0af512f75b52bbcc2fb6f5c6f09b5a5cf3281924611d3",

    "raw": `mutation CreateCustomerAddressMutation($input: CreateAddressInput!) {
  createCustomerAddress(input: $input) {
    ...Address
    __typename
    id
  }
}

fragment Address on Address {
  id
  fullName
  company
  streetLine1
  streetLine2
  city
  province
  postalCode
  country {
    id
    code
    name
    __typename
  }
  phoneNumber
  defaultShippingAddress
  defaultBillingAddress
  __typename
  __typename
}
`,

    "rootType": "Mutation",

    "selection": {
        "fields": {
            "createCustomerAddress": {
                "type": "Address",
                "keyRaw": "createCustomerAddress(input: $input)",

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
                            "nullable": true
                        },

                        "company": {
                            "type": "String",
                            "keyRaw": "company",
                            "nullable": true
                        },

                        "streetLine1": {
                            "type": "String",
                            "keyRaw": "streetLine1"
                        },

                        "streetLine2": {
                            "type": "String",
                            "keyRaw": "streetLine2",
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

                        "country": {
                            "type": "Country",
                            "keyRaw": "country",

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

                                    "__typename": {
                                        "type": "String",
                                        "keyRaw": "__typename"
                                    }
                                }
                            }
                        },

                        "phoneNumber": {
                            "type": "String",
                            "keyRaw": "phoneNumber",
                            "nullable": true
                        },

                        "defaultShippingAddress": {
                            "type": "Boolean",
                            "keyRaw": "defaultShippingAddress",
                            "nullable": true
                        },

                        "defaultBillingAddress": {
                            "type": "Boolean",
                            "keyRaw": "defaultBillingAddress",
                            "nullable": true
                        },

                        "__typename": {
                            "type": "String",
                            "keyRaw": "__typename",
                            "visible": true
                        }
                    },

                    "fragments": {
                        "Address": {
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

"HoudiniHash=9561b5d0ecb4d5f5ca5c8d43acfdaf4f0cd3ff22a5b82d1d8747d0e6c8cea552";