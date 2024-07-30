export default {
    "name": "Address",
    "kind": "HoudiniFragment",
    "hash": "9a0328690664f2c5b1f5489430af66af680c1302f93085e01877ba0143e62b5f",

    "raw": `fragment Address on Address {
  id
  fullName
  company
  streetLine1
  streetLine2
  city
  province
  postalCode
  country {
    id
    code
    name
    __typename
  }
  phoneNumber
  defaultShippingAddress
  defaultBillingAddress
  __typename
  __typename
}
`,

    "rootType": "Address",

    "selection": {
        "fields": {
            "id": {
                "type": "ID",
                "keyRaw": "id",
                "visible": true
            },

            "fullName": {
                "type": "String",
                "keyRaw": "fullName",
                "nullable": true,
                "visible": true
            },

            "company": {
                "type": "String",
                "keyRaw": "company",
                "nullable": true,
                "visible": true
            },

            "streetLine1": {
                "type": "String",
                "keyRaw": "streetLine1",
                "visible": true
            },

            "streetLine2": {
                "type": "String",
                "keyRaw": "streetLine2",
                "nullable": true,
                "visible": true
            },

            "city": {
                "type": "String",
                "keyRaw": "city",
                "nullable": true,
                "visible": true
            },

            "province": {
                "type": "String",
                "keyRaw": "province",
                "nullable": true,
                "visible": true
            },

            "postalCode": {
                "type": "String",
                "keyRaw": "postalCode",
                "nullable": true,
                "visible": true
            },

            "country": {
                "type": "Country",
                "keyRaw": "country",

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

                        "__typename": {
                            "type": "String",
                            "keyRaw": "__typename",
                            "visible": true
                        }
                    }
                },

                "visible": true
            },

            "phoneNumber": {
                "type": "String",
                "keyRaw": "phoneNumber",
                "nullable": true,
                "visible": true
            },

            "defaultShippingAddress": {
                "type": "Boolean",
                "keyRaw": "defaultShippingAddress",
                "nullable": true,
                "visible": true
            },

            "defaultBillingAddress": {
                "type": "Boolean",
                "keyRaw": "defaultBillingAddress",
                "nullable": true,
                "visible": true
            },

            "__typename": {
                "type": "String",
                "keyRaw": "__typename",
                "visible": true
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    }
};

"HoudiniHash=206b8b0062a8546543e4cd146f21f8a794f4e2eedd409b0b5a7998607fc3e823";