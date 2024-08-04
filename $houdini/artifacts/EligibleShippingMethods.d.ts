export type EligibleShippingMethods = {
    readonly "input": EligibleShippingMethods$input;
    readonly "result": EligibleShippingMethods$result | undefined;
};

export type EligibleShippingMethods$result = {
    /**
     * Returns a list of eligible shipping methods based on the current active Order
    */
    readonly eligibleShippingMethods: ({
        readonly id: string;
        readonly name: string;
        readonly code: string;
        readonly description: string;
        /**
         * Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult
        */
        readonly metadata: Object | null;
        readonly price: string;
        readonly priceWithTax: string;
    })[];
};

export type EligibleShippingMethods$input = null;

export type EligibleShippingMethods$artifact = {
    "name": "EligibleShippingMethods";
    "kind": "HoudiniQuery";
    "hash": "2ad40ea479beabc62280e4528ef9c58a38439767d56c70e67d4a168ad57ed70e";
    "raw": `query EligibleShippingMethods {
  eligibleShippingMethods {
    id
    name
    code
    description
    metadata
    price
    priceWithTax
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
                        "description": {
                            "type": "String";
                            "keyRaw": "description";
                            "visible": true;
                        };
                        "metadata": {
                            "type": "JSON";
                            "keyRaw": "metadata";
                            "nullable": true;
                            "visible": true;
                        };
                        "price": {
                            "type": "Money";
                            "keyRaw": "price";
                            "visible": true;
                        };
                        "priceWithTax": {
                            "type": "Money";
                            "keyRaw": "priceWithTax";
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