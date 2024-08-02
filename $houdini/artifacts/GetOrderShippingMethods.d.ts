export type GetOrderShippingMethods = {
    readonly "input": GetOrderShippingMethods$input;
    readonly "result": GetOrderShippingMethods$result | undefined;
};

export type GetOrderShippingMethods$result = {
    /**
     * Returns a list of eligible shipping methods based on the current active Order
    */
    readonly eligibleShippingMethods: ({
        readonly id: string;
        readonly code: string;
        readonly name: string;
        readonly price: string;
        readonly description: string;
    })[];
};

export type GetOrderShippingMethods$input = null;

export type GetOrderShippingMethods$artifact = {
    "name": "GetOrderShippingMethods";
    "kind": "HoudiniQuery";
    "hash": "a65a1a3f176601d22d656ca3eda75c43762c06b929378417719a090163854d8d";
    "raw": `query GetOrderShippingMethods {
  eligibleShippingMethods {
    id
    code
    name
    price
    description
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "eligibleShippingMethods": {
                "type": "ShippingMethodQuote";
                "keyRaw": "eligibleShippingMethods";
                "selection": {
                    "fields": {
                        "id": {
                            "type": "ID";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "code": {
                            "type": "String";
                            "keyRaw": "code";
                            "visible": true;
                        };
                        "name": {
                            "type": "String";
                            "keyRaw": "name";
                            "visible": true;
                        };
                        "price": {
                            "type": "Money";
                            "keyRaw": "price";
                            "visible": true;
                        };
                        "description": {
                            "type": "String";
                            "keyRaw": "description";
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