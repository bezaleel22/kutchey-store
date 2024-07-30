export default {
    "name": "UpdateCustomerPasswordMutation",
    "kind": "HoudiniMutation",
    "hash": "557047af3c65e57763698e199dfc8cbf5613393509b4980034811594634652da",

    "raw": `mutation UpdateCustomerPasswordMutation($currentPassword: String!, $newPassword: String!) {
  updateCustomerPassword(
    currentPassword: $currentPassword
    newPassword: $newPassword
  ) {
    ... on Success {
      success
      __typename
    }
    ...ErrorResult
    __typename
    __typename
  }
}

fragment ErrorResult on ErrorResult {
  errorCode
  message
  __typename
  __typename
}
`,

    "rootType": "Mutation",

    "selection": {
        "fields": {
            "updateCustomerPassword": {
                "type": "UpdateCustomerPasswordResult",
                "keyRaw": "updateCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword)",

                "selection": {
                    "abstractFields": {
                        "fields": {
                            "Success": {
                                "success": {
                                    "type": "Boolean",
                                    "keyRaw": "success",
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
                                    "keyRaw": "errorCode"
                                },

                                "message": {
                                    "type": "String",
                                    "keyRaw": "message"
                                },

                                "__typename": {
                                    "type": "String",
                                    "keyRaw": "__typename",
                                    "visible": true
                                }
                            }
                        },

                        "typeMap": {
                            "InvalidCredentialsError": "ErrorResult",
                            "NativeAuthStrategyError": "ErrorResult",
                            "PasswordValidationError": "ErrorResult"
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
                        "ErrorResult": {
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
            "currentPassword": "String",
            "newPassword": "String"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=faac199cabeb5d3429cfcbbbe6f67522be7138be044beb49f078ef418b06320e";