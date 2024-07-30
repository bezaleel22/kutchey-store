export type SignOut = {
    readonly "input": SignOut$input;
    readonly "result": SignOut$result;
};

export type SignOut$result = {
    /**
     * End the current authenticated session
    */
    readonly logout: {
        readonly success: boolean;
    };
};

export type SignOut$input = null;

export type SignOut$optimistic = {
    /**
     * End the current authenticated session
    */
    readonly logout?: {
        readonly success?: boolean;
    };
};

export type SignOut$artifact = {
    "name": "SignOut";
    "kind": "HoudiniMutation";
    "hash": "e2a66fa12bdafbaa36dafefb39abe32ffc9030e14f7677c12c50f69d15d7a577";
    "raw": `mutation SignOut {
  logout {
    success
  }
}
`;
    "rootType": "Mutation";
    "selection": {
        "fields": {
            "logout": {
                "type": "Success";
                "keyRaw": "logout";
                "selection": {
                    "fields": {
                        "success": {
                            "type": "Boolean";
                            "keyRaw": "success";
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
};