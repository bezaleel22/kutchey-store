export default {
    "name": "GetOrderPaymentMethods",
    "kind": "HoudiniQuery",
    "hash": "e88ef5542c01f85b4ae72aaaf58f5421a20cc805c6f59ce349c7dcf15b68ef29",

    "raw": `query GetOrderPaymentMethods {
  eligiblePaymentMethods {
    id
    name
    code
    isEligible
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "eligiblePaymentMethods": {
                "type": "PaymentMethodQuote",
                "keyRaw": "eligiblePaymentMethods",

                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID",
                            "keyRaw": "id",
                            "visible": true
                        },

                        "name": {
                            "type": "String",
                            "keyRaw": "name",
                            "visible": true
                        },

                        "code": {
                            "type": "String",
                            "keyRaw": "code",
                            "visible": true
                        },

                        "isEligible": {
                            "type": "Boolean",
                            "keyRaw": "isEligible",
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

"HoudiniHash=1b55e595fe854aec30b4c48a035e28da1ce14f7a2dc13aeff412608626f5a7af";