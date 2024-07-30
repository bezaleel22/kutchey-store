export default {
    "name": "SignOut",
    "kind": "HoudiniMutation",
    "hash": "e2a66fa12bdafbaa36dafefb39abe32ffc9030e14f7677c12c50f69d15d7a577",

    "raw": `mutation SignOut {
  logout {
    success
  }
}
`,

    "rootType": "Mutation",

    "selection": {
        "fields": {
            "logout": {
                "type": "Success",
                "keyRaw": "logout",

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
    }
};

"HoudiniHash=b6a09eef540f69b92cdcc3a74ff5996264b3d07f231ef523e032327eb8056f68";