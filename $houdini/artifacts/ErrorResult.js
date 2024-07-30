export default {
    "name": "ErrorResult",
    "kind": "HoudiniFragment",
    "hash": "4ea53808f248a7d0082ff307508f65ffef9da6fdfad9d5d440f6344b0d0d115c",

    "raw": `fragment ErrorResult on ErrorResult {
  errorCode
  message
  __typename
  __typename
}
`,

    "rootType": "ErrorResult",

    "selection": {
        "fields": {
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

    "pluginData": {
        "houdini-svelte": {}
    }
};

"HoudiniHash=f4161c1041981dd19416e7cd466e31e323b75013f8dc815abd6800113664c6ee";