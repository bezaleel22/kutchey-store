export default {
    "name": "RequestPasswordReset",
    "kind": "HoudiniMutation",
    "hash": "f2cd9626955882e554b27543d788bbdbb5cccc05c979a1007c3de47309f42cfd",

    "raw": `mutation RequestPasswordReset($emailAddress: String!) {
  requestPasswordReset(emailAddress: $emailAddress) {
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
            "requestPasswordReset": {
                "type": "RequestPasswordResetResult",
                "keyRaw": "requestPasswordReset(emailAddress: $emailAddress)",
                "nullable": true,

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
            "emailAddress": "String"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=f723bae78184aa90bef232b15258425b99db1878baa4cef2cd3961cd7e3ffe93";