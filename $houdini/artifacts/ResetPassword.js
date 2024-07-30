export default {
    "name": "ResetPassword",
    "kind": "HoudiniMutation",
    "hash": "acfda5ed5be1f22e78a3f8b5b903fc4aab61564166ca833518fa8e20c3477256",

    "raw": `mutation ResetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password) {
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
            "resetPassword": {
                "type": "ResetPasswordResult",
                "keyRaw": "resetPassword(password: $password, token: $token)",

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
                            "NativeAuthStrategyError": "ErrorResult",
                            "NotVerifiedError": "ErrorResult",
                            "PasswordResetTokenExpiredError": "ErrorResult",
                            "PasswordResetTokenInvalidError": "ErrorResult",
                            "PasswordValidationError": "ErrorResult"
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

"HoudiniHash=cb90a6e506520d175952da64f01b104747faa54e9c01e8ed4cde198a849a171a";