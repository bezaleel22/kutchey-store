export default {
    "name": "GetOrderShippingMethods",
    "kind": "HoudiniQuery",
    "hash": "a65a1a3f176601d22d656ca3eda75c43762c06b929378417719a090163854d8d",

    "raw": `query GetOrderShippingMethods {
  eligibleShippingMethods {
    id
    code
    name
    price
    description
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "eligibleShippingMethods": {
                "type": "ShippingMethodQuote",
                "keyRaw": "eligibleShippingMethods",

                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID",
                            "keyRaw": "id",
                            "visible": true
                        },

                        "code": {
                            "type": "String",
                            "keyRaw": "code",
                            "visible": true
                        },

                        "name": {
                            "type": "String",
                            "keyRaw": "name",
                            "visible": true
                        },

                        "price": {
                            "type": "Money",
                            "keyRaw": "price",
                            "visible": true
                        },

                        "description": {
                            "type": "String",
                            "keyRaw": "description",
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

"HoudiniHash=b02f82782c156ff4cb19d75890f41778bea1cef8e8e6a74d4989fcd9510d4d58";