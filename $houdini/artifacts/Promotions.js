export default {
    "name": "Promotions",
    "kind": "HoudiniQuery",
    "hash": "851c4d4c201e5999bda1ffdd68408b18c6af36f09f40f50f6967abc423b35169",

    "raw": `query Promotions {
  promotions {
    totalItems
    items {
      id
      name
      description
      couponCode
      startsAt
      endsAt
      enabled
      usageLimit
      perCustomerUsageLimit
      conditions {
        code
        args {
          name
          value
        }
      }
      actions {
        code
        args {
          name
          value
        }
      }
    }
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "promotions": {
                "type": "PromotionList",
                "keyRaw": "promotions",

                "selection": {
                    "fields": {
                        "totalItems": {
                            "type": "Int",
                            "keyRaw": "totalItems",
                            "visible": true
                        },

                        "items": {
                            "type": "Promotion",
                            "keyRaw": "items",

                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ID",
                                        "keyRaw": "id",
                                        "visible": true
                                    },

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name",
                                        "visible": true
                                    },

                                    "description": {
                                        "type": "String",
                                        "keyRaw": "description",
                                        "visible": true
                                    },

                                    "couponCode": {
                                        "type": "String",
                                        "keyRaw": "couponCode",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "startsAt": {
                                        "type": "DateTime",
                                        "keyRaw": "startsAt",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "endsAt": {
                                        "type": "DateTime",
                                        "keyRaw": "endsAt",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "enabled": {
                                        "type": "Boolean",
                                        "keyRaw": "enabled",
                                        "visible": true
                                    },

                                    "usageLimit": {
                                        "type": "Int",
                                        "keyRaw": "usageLimit",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "perCustomerUsageLimit": {
                                        "type": "Int",
                                        "keyRaw": "perCustomerUsageLimit",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "conditions": {
                                        "type": "ConfigurableOperation",
                                        "keyRaw": "conditions",

                                        "selection": {
                                            "fields": {
                                                "code": {
                                                    "type": "String",
                                                    "keyRaw": "code",
                                                    "visible": true
                                                },

                                                "args": {
                                                    "type": "ConfigArg",
                                                    "keyRaw": "args",

                                                    "selection": {
                                                        "fields": {
                                                            "name": {
                                                                "type": "String",
                                                                "keyRaw": "name",
                                                                "visible": true
                                                            },

                                                            "value": {
                                                                "type": "String",
                                                                "keyRaw": "value",
                                                                "visible": true
                                                            }
                                                        }
                                                    },

                                                    "visible": true
                                                }
                                            }
                                        },

                                        "visible": true
                                    },

                                    "actions": {
                                        "type": "ConfigurableOperation",
                                        "keyRaw": "actions",

                                        "selection": {
                                            "fields": {
                                                "code": {
                                                    "type": "String",
                                                    "keyRaw": "code",
                                                    "visible": true
                                                },

                                                "args": {
                                                    "type": "ConfigArg",
                                                    "keyRaw": "args",

                                                    "selection": {
                                                        "fields": {
                                                            "name": {
                                                                "type": "String",
                                                                "keyRaw": "name",
                                                                "visible": true
                                                            },

                                                            "value": {
                                                                "type": "String",
                                                                "keyRaw": "value",
                                                                "visible": true
                                                            }
                                                        }
                                                    },

                                                    "visible": true
                                                }
                                            }
                                        },

                                        "visible": true
                                    }
                                }
                            },

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

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=1f023034dc1be223c26771a8329592dad5d596802122fb5fab18e9690d312d0c";