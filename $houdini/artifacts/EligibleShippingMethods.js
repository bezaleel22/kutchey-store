export default {
    "name": "EligibleShippingMethods",
    "kind": "HoudiniQuery",
    "hash": "68ef0393cc19421b81690a5eeec2269303143d12308adf04c79cb9c6990d5867",

    "raw": `query EligibleShippingMethods {
  eligibleShippingMethods {
    id
    name
    description
    metadata
    price
    priceWithTax
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

                        "name": {
                            "type": "String",
                            "keyRaw": "name",
                            "visible": true
                        },

                        "description": {
                            "type": "String",
                            "keyRaw": "description",
                            "visible": true
                        },

                        "metadata": {
                            "type": "JSON",
                            "keyRaw": "metadata",
                            "nullable": true,
                            "visible": true
                        },

                        "price": {
                            "type": "Money",
                            "keyRaw": "price",
                            "visible": true
                        },

                        "priceWithTax": {
                            "type": "Money",
                            "keyRaw": "priceWithTax",
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

"HoudiniHash=34f7f39a0ef459750d879fd18666a90a879eb0e31be89867d3e6eaae08e1c685";