export default {
    "name": "UpdateCustomerEmail",
    "kind": "HoudiniMutation",
    "hash": "c9cff5f198885efd916bff3c298b56975fcdd6481ebb4a1476db7558ca2373e8",

    "raw": `mutation UpdateCustomerEmail($token: String!) {
  updateCustomerEmailAddress(token: $token) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
    __typename
  }
}
`,

    "rootType": "Mutation",

    "selection": {
        "fields": {
            "updateCustomerEmailAddress": {
                "type": "UpdateCustomerEmailAddressResult",
                "keyRaw": "updateCustomerEmailAddress(token: $token)",

                "selection": {
                    "abstractFields": {
                        "fields": {
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
                            "IdentifierChangeTokenExpiredError": "ErrorResult",
                            "IdentifierChangeTokenInvalidError": "ErrorResult",
                            "NativeAuthStrategyError": "ErrorResult"
                        }
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
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    },

    "input": {
        "fields": {
            "token": "String"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=7b8e312a84a9b52475afff0f6a2b35d778eb2e47f6c1b53651df3473fb154fa6";