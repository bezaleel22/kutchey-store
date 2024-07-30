export default {
    "name": "RequestUpdateCustomerEmail",
    "kind": "HoudiniMutation",
    "hash": "5fbc26987959c6034a576a7a2c31394eab3c9c608285e0f104ec1dae17482aef",

    "raw": `mutation RequestUpdateCustomerEmail($password: String!, $newEmailAddress: String!) {
  requestUpdateCustomerEmailAddress(
    password: $password
    newEmailAddress: $newEmailAddress
  ) {
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
            "requestUpdateCustomerEmailAddress": {
                "type": "RequestUpdateCustomerEmailAddressResult",
                "keyRaw": "requestUpdateCustomerEmailAddress(newEmailAddress: $newEmailAddress, password: $password)",

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
                            "EmailAddressConflictError": "ErrorResult",
                            "InvalidCredentialsError": "ErrorResult",
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
            "password": "String",
            "newEmailAddress": "String"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=b5690bb250ffbffb588b22fa5aca5da2b4a084901c91c05eba8c56001f8cd209";