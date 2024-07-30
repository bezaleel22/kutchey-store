export type AvailableCountries = {
    readonly "input": AvailableCountries$input;
    readonly "result": AvailableCountries$result | undefined;
};

export type AvailableCountries$result = {
    /**
     * An array of supported Countries
    */
    readonly availableCountries: ({
        readonly id: string;
        readonly name: string;
        readonly code: string;
    })[];
};

export type AvailableCountries$input = null;

export type AvailableCountries$artifact = {
    "name": "AvailableCountries";
    "kind": "HoudiniQuery";
    "hash": "ef9847390e7c9210ad893a1193d9ba55e85fd6a039d28c8b65ecb0885e3e277a";
    "raw": `query AvailableCountries {
  availableCountries {
    id
    name
    code
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "availableCountries": {
                "type": "Country";
                "keyRaw": "availableCountries";
                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "name": {
                            "type": "String";
                            "keyRaw": "name";
                            "visible": true;
                        };
                        "code": {
                            "type": "String";
                            "keyRaw": "code";
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
    "policy": "CacheOrNetwork";
    "partial": false;
};