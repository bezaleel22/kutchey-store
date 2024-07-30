export default {
    "name": "VerifyCustomerAccount",
    "kind": "HoudiniMutation",
    "hash": "e586c2d83308baab84c645b6e782d460ba74dcfd83a28167640d6e867f49e781",

    "raw": `mutation VerifyCustomerAccount($token: String!, $password: String) {
  verifyCustomerAccount(token: $token, password: $password) {
    __typename
    ... on CurrentUser {
      id
      identifier
    }
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
            "verifyCustomerAccount": {
                "type": "VerifyCustomerAccountResult",
                "keyRaw": "verifyCustomerAccount(password: $password, token: $token)",

                "selection": {
                    "abstractFields": {
                        "fields": {
                            "CurrentUser": {
                                "id": {
                                    "type": "ID",
                                    "keyRaw": "id",
                                    "visible": true
                                },

                                "identifier": {
                                    "type": "String",
                                    "keyRaw": "identifier",
                                    "visible": true
                                },

                                "__typename": {
                                    "type": "String",
                                    "keyRaw": "__typename",
                                    "visible": true
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
                            "MissingPasswordError": "ErrorResult",
                            "NativeAuthStrategyError": "ErrorResult",
                            "PasswordAlreadySetError": "ErrorResult",
                            "PasswordValidationError": "ErrorResult",
                            "VerificationTokenExpiredError": "ErrorResult",
                            "VerificationTokenInvalidError": "ErrorResult"
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
            "token": "String",
            "password": "String"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=5bf30322f57829f1577522489258bf8865a7148b61efd9c662ebe7a48bfe2e4b";