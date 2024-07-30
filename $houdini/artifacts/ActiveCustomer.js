export default {
    "name": "ActiveCustomer",
    "kind": "HoudiniQuery",
    "hash": "100cc0fbff8c7190de00c8f25e309a7f342f1d7bfaf49419d3e1fd92cc26713f",

    "raw": `query ActiveCustomer {
  activeCustomer {
    id
    title
    firstName
    lastName
    emailAddress
    phoneNumber
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "activeCustomer": {
                "type": "Customer",
                "keyRaw": "activeCustomer",
                "nullable": true,

                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID",
                            "keyRaw": "id",
                            "visible": true
                        },

                        "title": {
                            "type": "String",
                            "keyRaw": "title",
                            "nullable": true,
                            "visible": true
                        },

                        "firstName": {
                            "type": "String",
                            "keyRaw": "firstName",
                            "visible": true
                        },

                        "lastName": {
                            "type": "String",
                            "keyRaw": "lastName",
                            "visible": true
                        },

                        "emailAddress": {
                            "type": "String",
                            "keyRaw": "emailAddress",
                            "visible": true
                        },

                        "phoneNumber": {
                            "type": "String",
                            "keyRaw": "phoneNumber",
                            "nullable": true,
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

"HoudiniHash=c335f369af2d950fc74f716432415ccd0a6fc720f2bdc2461d86f0b340db7164";