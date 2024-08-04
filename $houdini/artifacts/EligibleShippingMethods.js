export default {
    "name": "EligibleShippingMethods",
    "kind": "HoudiniQuery",
    "hash": "2ad40ea479beabc62280e4528ef9c58a38439767d56c70e67d4a168ad57ed70e",

    "raw": `query EligibleShippingMethods {
  eligibleShippingMethods {
    id
    name
    code
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

                        "code": {
                            "type": "String",
                            "keyRaw": "code",
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

"HoudiniHash=c940246890df48bc4f3901960d48a4fb24e6fd1b87334ccb1f9c9afb6974c754";