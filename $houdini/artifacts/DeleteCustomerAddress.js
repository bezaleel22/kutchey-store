export default {
    "name": "DeleteCustomerAddress",
    "kind": "HoudiniMutation",
    "hash": "0881c59fccd71ba7dc2e8b713c1d902a2d2cc8698fab53773b991f465e3f2995",

    "raw": `mutation DeleteCustomerAddress($id: ID!) {
  deleteCustomerAddress(id: $id) {
    success
  }
}
`,

    "rootType": "Mutation",

    "selection": {
        "fields": {
            "deleteCustomerAddress": {
                "type": "Success",
                "keyRaw": "deleteCustomerAddress(id: $id)",

                "selection": {
                    "fields": {
                        "success": {
                            "type": "Boolean",
                            "keyRaw": "success",
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

    "input": {
        "fields": {
            "id": "ID"
        },

        "types": {},
        "defaults": {},
        "runtimeScalars": {}
    }
};

"HoudiniHash=ac6dc930cf9034ef345b31dc298048541a3c04ffdacaea9ade7793073b4ef72a";