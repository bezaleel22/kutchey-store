export type DeleteCustomerAddress = {
    readonly "input": DeleteCustomerAddress$input;
    readonly "result": DeleteCustomerAddress$result;
};

export type DeleteCustomerAddress$result = {
    /**
     * Delete an existing Address
    */
    readonly deleteCustomerAddress: {
        readonly success: boolean;
    };
};

export type DeleteCustomerAddress$input = {
    id: string;
};

export type DeleteCustomerAddress$optimistic = {
    /**
     * Delete an existing Address
    */
    readonly deleteCustomerAddress?: {
        readonly success?: boolean;
    };
};

export type DeleteCustomerAddress$artifact = {
    "name": "DeleteCustomerAddress";
    "kind": "HoudiniMutation";
    "hash": "0881c59fccd71ba7dc2e8b713c1d902a2d2cc8698fab53773b991f465e3f2995";
    "raw": `mutation DeleteCustomerAddress($id: ID!) {
  deleteCustomerAddress(id: $id) {
    success
  }
}
`;
    "rootType": "Mutation";
    "selection": {
        "fields": {
            "deleteCustomerAddress": {
                "type": "Success";
                "keyRaw": "deleteCustomerAddress(id: $id)";
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
    "input": {
        "fields": {
            "id": "ID";
        };
        "types": {};
        "defaults": {};
        "runtimeScalars": {};
    };
};