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
    "hash": "68ef0393cc19421b81690a5eeec2269303143d12308adf04c79cb9c6990d5867";
    "raw": `query EligibleShippingMethods {
  eligibleShippingMethods {
    id
    name
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