export default {
    "name": "AvailableCountries",
    "kind": "HoudiniQuery",
    "hash": "ef9847390e7c9210ad893a1193d9ba55e85fd6a039d28c8b65ecb0885e3e277a",

    "raw": `query AvailableCountries {
  availableCountries {
    id
    name
    code
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "availableCountries": {
                "type": "Country",
                "keyRaw": "availableCountries",

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

"HoudiniHash=805d2108d9d8af55ae5960a37134d55de601ac5f75cbf88ad991b3dd53076551";