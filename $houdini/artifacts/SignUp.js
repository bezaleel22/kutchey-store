export default {
    "name": "SignUp",
    "kind": "HoudiniMutation",
    "hash": "7f149b7d1ece9a0fb2d73cbbcc39e4aebc6c97e949c250665c9403f7ec6f1e78",

    "raw": `mutation SignUp($input: RegisterCustomerInput!) {
  registerCustomerAccount(input: $input) {
    __typename
    ... on Success {
      success
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
            "registerCustomerAccount": {
                "type": "RegisterCustomerAccountResult",
                "keyRaw": "registerCustomerAccount(input: $input)",

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
            "input": "RegisterCustomerInput"
        },

        "types": {
            "RegisterCustomerCustomFieldsInput": {
                "avatarId": "ID"
            },

            "RegisterCustomerInput": {
                "customFields": "RegisterCustomerCustomFieldsInput",
                "emailAddress": "String",
                "firstName": "String",
                "lastName": "String",
                "password": "String",
                "phoneNumber": "String",
                "title": "String"
            }
        },

        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=14be077bfd05921af02ac0171b67ae2f9540966566fef41a4638e214aa8586d5";