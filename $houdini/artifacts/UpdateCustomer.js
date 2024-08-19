export default {
    "name": "UpdateCustomer",
    "kind": "HoudiniMutation",
    "hash": "a9475b3962d76519f6e76c29d9d6152745d1eb0f11cc41c71b98c4f3ece1ba33",

    "raw": `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    __typename
    id
  }
}
`,

    "rootType": "Mutation",

    "selection": {
        "fields": {
            "updateCustomer": {
                "type": "Customer",
                "keyRaw": "updateCustomer(input: $input)",

                "selection": {
                    "fields": {
                        "__typename": {
                            "type": "String",
                            "keyRaw": "__typename",
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

    "pluginData": {
        "houdini-svelte": {}
    },

    "input": {
        "fields": {
            "input": "UpdateCustomerInput"
        },

        "types": {
            "UpdateCustomerInput": {
                "customFields": "JSON",
                "firstName": "String",
                "lastName": "String",
                "phoneNumber": "String",
                "title": "String"
            }
        },

        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=3ad3ec365d84f01f30bac4c66657e38e1c26c67b984e20f9acbe157094bc1d4e";