import type { Record } from "./public/record";
import { Promotions$result, Promotions$input } from "../artifacts/Promotions";
import { PromotionsStore } from "../plugins/houdini-svelte/stores/Promotions";
import { SearchProduct$result, SearchProduct$input } from "../artifacts/SearchProduct";
import { SearchProductStore } from "../plugins/houdini-svelte/stores/SearchProduct";
import { Products$result, Products$input } from "../artifacts/Products";
import { ProductsStore } from "../plugins/houdini-svelte/stores/Products";
import { Product$result, Product$input } from "../artifacts/Product";
import { ProductStore } from "../plugins/houdini-svelte/stores/Product";
import { ArderByCode$result, ArderByCode$input } from "../artifacts/ArderByCode";
import { ArderByCodeStore } from "../plugins/houdini-svelte/stores/ArderByCode";
import { ActiveOrder$result, ActiveOrder$input } from "../artifacts/ActiveOrder";
import { ActiveOrderStore } from "../plugins/houdini-svelte/stores/ActiveOrder";
import { ActiveCustomerOrders$result, ActiveCustomerOrders$input } from "../artifacts/ActiveCustomerOrders";
import { ActiveCustomerOrdersStore } from "../plugins/houdini-svelte/stores/ActiveCustomerOrders";
import { ActiveCustomer$result, ActiveCustomer$input } from "../artifacts/ActiveCustomer";
import { ActiveCustomerStore } from "../plugins/houdini-svelte/stores/ActiveCustomer";
import { ActiveCustomerAddresses$result, ActiveCustomerAddresses$input } from "../artifacts/ActiveCustomerAddresses";
import { ActiveCustomerAddressesStore } from "../plugins/houdini-svelte/stores/ActiveCustomerAddresses";
import { Collection$result, Collection$input } from "../artifacts/Collection";
import { CollectionStore } from "../plugins/houdini-svelte/stores/Collection";
import { Collections$result, Collections$input } from "../artifacts/Collections";
import { CollectionsStore } from "../plugins/houdini-svelte/stores/Collections";
import { EligibleShippingMethods$result, EligibleShippingMethods$input } from "../artifacts/EligibleShippingMethods";
import { EligibleShippingMethodsStore } from "../plugins/houdini-svelte/stores/EligibleShippingMethods";
import { EligiblePaymentMethods$result, EligiblePaymentMethods$input } from "../artifacts/EligiblePaymentMethods";
import { EligiblePaymentMethodsStore } from "../plugins/houdini-svelte/stores/EligiblePaymentMethods";
import { AvailableCountries$result, AvailableCountries$input } from "../artifacts/AvailableCountries";
import { AvailableCountriesStore } from "../plugins/houdini-svelte/stores/AvailableCountries";
import type { SortOrder } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { LogicalOperator } from "$houdini/graphql/enums";
import { ListedProduct$data } from "../artifacts/ListedProduct";
import { ListedProductStore } from "../plugins/houdini-svelte/stores/ListedProduct";
import { DetailedProduct$data } from "../artifacts/DetailedProduct";
import { DetailedProductStore } from "../plugins/houdini-svelte/stores/DetailedProduct";
import { OrderDetail$data } from "../artifacts/OrderDetail";
import { OrderDetailStore } from "../plugins/houdini-svelte/stores/OrderDetail";
import { Address$data } from "../artifacts/Address";
import { AddressStore } from "../plugins/houdini-svelte/stores/Address";

type DateRange = {
    end: string;
    start: string;
};

type DateOperators = {
    after?: string | null | undefined;
    before?: string | null | undefined;
    between?: DateRange | null | undefined;
    eq?: string | null | undefined;
    isNull?: boolean | null | undefined;
};

type StringOperators = {
    contains?: string | null | undefined;
    eq?: string | null | undefined;
    in?: (string)[] | null | undefined;
    isNull?: boolean | null | undefined;
    notContains?: string | null | undefined;
    notEq?: string | null | undefined;
    notIn?: (string)[] | null | undefined;
    regex?: string | null | undefined;
};

type IDOperators = {
    eq?: string | null | undefined;
    in?: (string)[] | null | undefined;
    isNull?: boolean | null | undefined;
    notEq?: string | null | undefined;
    notIn?: (string)[] | null | undefined;
};

type NumberRange = {
    end: number;
    start: number;
};

type NumberOperators = {
    between?: NumberRange | null | undefined;
    eq?: number | null | undefined;
    gt?: number | null | undefined;
    gte?: number | null | undefined;
    isNull?: boolean | null | undefined;
    lt?: number | null | undefined;
    lte?: number | null | undefined;
};

type ProductVariantFilterParameter = {
    _and?: (ProductVariantFilterParameter)[] | null | undefined;
    _or?: (ProductVariantFilterParameter)[] | null | undefined;
    createdAt?: DateOperators | null | undefined;
    currencyCode?: StringOperators | null | undefined;
    id?: IDOperators | null | undefined;
    languageCode?: StringOperators | null | undefined;
    name?: StringOperators | null | undefined;
    price?: NumberOperators | null | undefined;
    priceWithTax?: NumberOperators | null | undefined;
    productId?: IDOperators | null | undefined;
    sku?: StringOperators | null | undefined;
    stockLevel?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type ProductVariantSortParameter = {
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    name?: ValueOf<typeof SortOrder> | null | undefined;
    price?: ValueOf<typeof SortOrder> | null | undefined;
    priceWithTax?: ValueOf<typeof SortOrder> | null | undefined;
    productId?: ValueOf<typeof SortOrder> | null | undefined;
    sku?: ValueOf<typeof SortOrder> | null | undefined;
    stockLevel?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type ProductVariantListOptions = {
    filter?: ProductVariantFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: ProductVariantSortParameter | null | undefined;
    take?: number | null | undefined;
};

type BooleanOperators = {
    eq?: boolean | null | undefined;
    isNull?: boolean | null | undefined;
};

type OrderFilterParameter = {
    _and?: (OrderFilterParameter)[] | null | undefined;
    _or?: (OrderFilterParameter)[] | null | undefined;
    active?: BooleanOperators | null | undefined;
    code?: StringOperators | null | undefined;
    createdAt?: DateOperators | null | undefined;
    currencyCode?: StringOperators | null | undefined;
    id?: IDOperators | null | undefined;
    orderPlacedAt?: DateOperators | null | undefined;
    shipping?: NumberOperators | null | undefined;
    shippingWithTax?: NumberOperators | null | undefined;
    state?: StringOperators | null | undefined;
    subTotal?: NumberOperators | null | undefined;
    subTotalWithTax?: NumberOperators | null | undefined;
    total?: NumberOperators | null | undefined;
    totalQuantity?: NumberOperators | null | undefined;
    totalWithTax?: NumberOperators | null | undefined;
    type?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type OrderSortParameter = {
    code?: ValueOf<typeof SortOrder> | null | undefined;
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    orderPlacedAt?: ValueOf<typeof SortOrder> | null | undefined;
    shipping?: ValueOf<typeof SortOrder> | null | undefined;
    shippingWithTax?: ValueOf<typeof SortOrder> | null | undefined;
    state?: ValueOf<typeof SortOrder> | null | undefined;
    subTotal?: ValueOf<typeof SortOrder> | null | undefined;
    subTotalWithTax?: ValueOf<typeof SortOrder> | null | undefined;
    total?: ValueOf<typeof SortOrder> | null | undefined;
    totalQuantity?: ValueOf<typeof SortOrder> | null | undefined;
    totalWithTax?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type OrderListOptions = {
    filter?: OrderFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: OrderSortParameter | null | undefined;
    take?: number | null | undefined;
};

type CustomerFilterParameter = {
    _and?: (CustomerFilterParameter)[] | null | undefined;
    _or?: (CustomerFilterParameter)[] | null | undefined;
    createdAt?: DateOperators | null | undefined;
    emailAddress?: StringOperators | null | undefined;
    firstName?: StringOperators | null | undefined;
    id?: IDOperators | null | undefined;
    lastName?: StringOperators | null | undefined;
    phoneNumber?: StringOperators | null | undefined;
    title?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type CustomerSortParameter = {
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    emailAddress?: ValueOf<typeof SortOrder> | null | undefined;
    firstName?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    lastName?: ValueOf<typeof SortOrder> | null | undefined;
    phoneNumber?: ValueOf<typeof SortOrder> | null | undefined;
    title?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type CustomerListOptions = {
    filter?: CustomerFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: CustomerSortParameter | null | undefined;
    take?: number | null | undefined;
};

type FacetValueFilterParameter = {
    _and?: (FacetValueFilterParameter)[] | null | undefined;
    _or?: (FacetValueFilterParameter)[] | null | undefined;
    code?: StringOperators | null | undefined;
    createdAt?: DateOperators | null | undefined;
    facetId?: IDOperators | null | undefined;
    id?: IDOperators | null | undefined;
    languageCode?: StringOperators | null | undefined;
    name?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type FacetValueSortParameter = {
    code?: ValueOf<typeof SortOrder> | null | undefined;
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    facetId?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    name?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type FacetValueListOptions = {
    filter?: FacetValueFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: FacetValueSortParameter | null | undefined;
    take?: number | null | undefined;
};

type HistoryEntryFilterParameter = {
    _and?: (HistoryEntryFilterParameter)[] | null | undefined;
    _or?: (HistoryEntryFilterParameter)[] | null | undefined;
    createdAt?: DateOperators | null | undefined;
    id?: IDOperators | null | undefined;
    type?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type HistoryEntrySortParameter = {
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type HistoryEntryListOptions = {
    filter?: HistoryEntryFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: HistoryEntrySortParameter | null | undefined;
    take?: number | null | undefined;
};

type CollectionFilterParameter = {
    _and?: (CollectionFilterParameter)[] | null | undefined;
    _or?: (CollectionFilterParameter)[] | null | undefined;
    createdAt?: DateOperators | null | undefined;
    description?: StringOperators | null | undefined;
    id?: IDOperators | null | undefined;
    languageCode?: StringOperators | null | undefined;
    name?: StringOperators | null | undefined;
    parentId?: IDOperators | null | undefined;
    position?: NumberOperators | null | undefined;
    slug?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type CollectionSortParameter = {
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    description?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    name?: ValueOf<typeof SortOrder> | null | undefined;
    parentId?: ValueOf<typeof SortOrder> | null | undefined;
    position?: ValueOf<typeof SortOrder> | null | undefined;
    slug?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type CollectionListOptions = {
    filter?: CollectionFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: CollectionSortParameter | null | undefined;
    take?: number | null | undefined;
    topLevelOnly?: boolean | null | undefined;
};

type FacetFilterParameter = {
    _and?: (FacetFilterParameter)[] | null | undefined;
    _or?: (FacetFilterParameter)[] | null | undefined;
    code?: StringOperators | null | undefined;
    createdAt?: DateOperators | null | undefined;
    id?: IDOperators | null | undefined;
    languageCode?: StringOperators | null | undefined;
    name?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type FacetSortParameter = {
    code?: ValueOf<typeof SortOrder> | null | undefined;
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    name?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type FacetListOptions = {
    filter?: FacetFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: FacetSortParameter | null | undefined;
    take?: number | null | undefined;
};

type ProductFilterParameter = {
    _and?: (ProductFilterParameter)[] | null | undefined;
    _or?: (ProductFilterParameter)[] | null | undefined;
    createdAt?: DateOperators | null | undefined;
    description?: StringOperators | null | undefined;
    enabled?: BooleanOperators | null | undefined;
    id?: IDOperators | null | undefined;
    languageCode?: StringOperators | null | undefined;
    name?: StringOperators | null | undefined;
    slug?: StringOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
};

type ProductSortParameter = {
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    description?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    name?: ValueOf<typeof SortOrder> | null | undefined;
    slug?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
};

type ProductListOptions = {
    filter?: ProductFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: ProductSortParameter | null | undefined;
    take?: number | null | undefined;
};

type PromotionFilterParameter = {
    _and?: (PromotionFilterParameter)[] | null | undefined;
    _or?: (PromotionFilterParameter)[] | null | undefined;
    couponCode?: StringOperators | null | undefined;
    createdAt?: DateOperators | null | undefined;
    description?: StringOperators | null | undefined;
    enabled?: BooleanOperators | null | undefined;
    endsAt?: DateOperators | null | undefined;
    id?: IDOperators | null | undefined;
    name?: StringOperators | null | undefined;
    perCustomerUsageLimit?: NumberOperators | null | undefined;
    startsAt?: DateOperators | null | undefined;
    updatedAt?: DateOperators | null | undefined;
    usageLimit?: NumberOperators | null | undefined;
};

type PromotionSortParameter = {
    couponCode?: ValueOf<typeof SortOrder> | null | undefined;
    createdAt?: ValueOf<typeof SortOrder> | null | undefined;
    description?: ValueOf<typeof SortOrder> | null | undefined;
    endsAt?: ValueOf<typeof SortOrder> | null | undefined;
    id?: ValueOf<typeof SortOrder> | null | undefined;
    name?: ValueOf<typeof SortOrder> | null | undefined;
    perCustomerUsageLimit?: ValueOf<typeof SortOrder> | null | undefined;
    startsAt?: ValueOf<typeof SortOrder> | null | undefined;
    updatedAt?: ValueOf<typeof SortOrder> | null | undefined;
    usageLimit?: ValueOf<typeof SortOrder> | null | undefined;
};

type PromotionListOptions = {
    filter?: PromotionFilterParameter | null | undefined;
    filterOperator?: ValueOf<typeof LogicalOperator> | null | undefined;
    skip?: number | null | undefined;
    sort?: PromotionSortParameter | null | undefined;
    take?: number | null | undefined;
};

type FacetValueFilterInput = {
    and?: string | null | undefined;
    or?: (string)[] | null | undefined;
};

type SearchResultSortParameter = {
    name?: ValueOf<typeof SortOrder> | null | undefined;
    price?: ValueOf<typeof SortOrder> | null | undefined;
};

type SearchInput = {
    collectionId?: string | null | undefined;
    collectionSlug?: string | null | undefined;
    facetValueFilters?: (FacetValueFilterInput)[] | null | undefined;
    groupByProduct?: boolean | null | undefined;
    inStock?: boolean | null | undefined;
    skip?: number | null | undefined;
    sort?: SearchResultSortParameter | null | undefined;
    take?: number | null | undefined;
    term?: string | null | undefined;
};

export declare type CacheTypeDef = {
    types: {
        Address: {
            idFields: {
                id: string;
            };
            fields: {
                city: {
                    type: string | null;
                    args: never;
                };
                company: {
                    type: string | null;
                    args: never;
                };
                country: {
                    type: Record<CacheTypeDef, "Country">;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                defaultBillingAddress: {
                    type: boolean | null;
                    args: never;
                };
                defaultShippingAddress: {
                    type: boolean | null;
                    args: never;
                };
                fullName: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                phoneNumber: {
                    type: string | null;
                    args: never;
                };
                postalCode: {
                    type: string | null;
                    args: never;
                };
                province: {
                    type: string | null;
                    args: never;
                };
                streetLine1: {
                    type: string;
                    args: never;
                };
                streetLine2: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [[AddressStore, Address$data, never]];
        };
        Adjustment: {
            idFields: never;
            fields: {
                adjustmentSource: {
                    type: string;
                    args: never;
                };
                amount: {
                    type: string;
                    args: never;
                };
                data: {
                    type: Object | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                type: {
                    type: AdjustmentType;
                    args: never;
                };
            };
            fragments: [];
        };
        AlreadyLoggedInError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Asset: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                fileSize: {
                    type: number;
                    args: never;
                };
                focalPoint: {
                    type: Record<CacheTypeDef, "Coordinate"> | null;
                    args: never;
                };
                height: {
                    type: number;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                mimeType: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                preview: {
                    type: string;
                    args: never;
                };
                source: {
                    type: string;
                    args: never;
                };
                tags: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: never;
                };
                type: {
                    type: AssetType;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
                width: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        AssetList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Asset">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        AuthenticationMethod: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                strategy: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        BooleanCustomFieldConfig: {
            idFields: never;
            fields: {
                description: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                internal: {
                    type: boolean | null;
                    args: never;
                };
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nullable: {
                    type: boolean | null;
                    args: never;
                };
                readonly: {
                    type: boolean | null;
                    args: never;
                };
                requiresPermission: {
                    type: (Permission)[] | null;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Channel: {
            idFields: {
                id: string;
            };
            fields: {
                availableCurrencyCodes: {
                    type: (CurrencyCode)[];
                    args: never;
                };
                availableLanguageCodes: {
                    type: (LanguageCode)[] | null;
                    args: never;
                };
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                currencyCode: {
                    type: CurrencyCode;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                defaultCurrencyCode: {
                    type: CurrencyCode;
                    args: never;
                };
                defaultLanguageCode: {
                    type: LanguageCode;
                    args: never;
                };
                defaultShippingZone: {
                    type: Record<CacheTypeDef, "Zone"> | null;
                    args: never;
                };
                defaultTaxZone: {
                    type: Record<CacheTypeDef, "Zone"> | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                outOfStockThreshold: {
                    type: number | null;
                    args: never;
                };
                pricesIncludeTax: {
                    type: boolean;
                    args: never;
                };
                seller: {
                    type: Record<CacheTypeDef, "Seller"> | null;
                    args: never;
                };
                token: {
                    type: string;
                    args: never;
                };
                trackInventory: {
                    type: boolean | null;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Collection: {
            idFields: {
                id: string;
            };
            fields: {
                assets: {
                    type: (Record<CacheTypeDef, "Asset">)[];
                    args: never;
                };
                breadcrumbs: {
                    type: (Record<CacheTypeDef, "CollectionBreadcrumb">)[];
                    args: never;
                };
                children: {
                    type: (Record<CacheTypeDef, "Collection">)[] | null;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                featuredAsset: {
                    type: Record<CacheTypeDef, "Asset"> | null;
                    args: never;
                };
                filters: {
                    type: (Record<CacheTypeDef, "ConfigurableOperation">)[];
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                parent: {
                    type: Record<CacheTypeDef, "Collection"> | null;
                    args: never;
                };
                parentId: {
                    type: string;
                    args: never;
                };
                position: {
                    type: number;
                    args: never;
                };
                productVariants: {
                    type: Record<CacheTypeDef, "ProductVariantList">;
                    args: {
                        options?: ProductVariantListOptions | null | undefined;
                    };
                };
                slug: {
                    type: string;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "CollectionTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        CollectionBreadcrumb: {
            idFields: {
                id: string;
            };
            fields: {
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                slug: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        CollectionList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Collection">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CollectionResult: {
            idFields: never;
            fields: {
                collection: {
                    type: Record<CacheTypeDef, "Collection">;
                    args: never;
                };
                count: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CollectionTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                slug: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ConfigArg: {
            idFields: never;
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                value: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ConfigArgDefinition: {
            idFields: never;
            fields: {
                defaultValue: {
                    type: Object | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                label: {
                    type: string | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                required: {
                    type: boolean;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ConfigurableOperation: {
            idFields: never;
            fields: {
                args: {
                    type: (Record<CacheTypeDef, "ConfigArg">)[];
                    args: never;
                };
                code: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ConfigurableOperationDefinition: {
            idFields: never;
            fields: {
                args: {
                    type: (Record<CacheTypeDef, "ConfigArgDefinition">)[];
                    args: never;
                };
                code: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Coordinate: {
            idFields: never;
            fields: {
                x: {
                    type: number;
                    args: never;
                };
                y: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        Country: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                enabled: {
                    type: boolean;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                parent: {
                    type: Record<CacheTypeDef, "Country"> | Record<CacheTypeDef, "Province"> | null;
                    args: never;
                };
                parentId: {
                    type: string | null;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "RegionTranslation">)[];
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        CountryList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Country">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CouponCodeExpiredError: {
            idFields: never;
            fields: {
                couponCode: {
                    type: string;
                    args: never;
                };
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        CouponCodeInvalidError: {
            idFields: never;
            fields: {
                couponCode: {
                    type: string;
                    args: never;
                };
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        CouponCodeLimitError: {
            idFields: never;
            fields: {
                couponCode: {
                    type: string;
                    args: never;
                };
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                limit: {
                    type: number;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        CurrentUser: {
            idFields: {
                id: string;
            };
            fields: {
                channels: {
                    type: (Record<CacheTypeDef, "CurrentUserChannel">)[];
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                identifier: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        CurrentUserChannel: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                permissions: {
                    type: (Permission)[];
                    args: never;
                };
                token: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Customer: {
            idFields: {
                id: string;
            };
            fields: {
                addresses: {
                    type: (Record<CacheTypeDef, "Address">)[] | null;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                emailAddress: {
                    type: string;
                    args: never;
                };
                firstName: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                lastName: {
                    type: string;
                    args: never;
                };
                orders: {
                    type: Record<CacheTypeDef, "OrderList">;
                    args: {
                        options?: OrderListOptions | null | undefined;
                    };
                };
                phoneNumber: {
                    type: string | null;
                    args: never;
                };
                title: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "User"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CustomerGroup: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                customers: {
                    type: Record<CacheTypeDef, "CustomerList">;
                    args: {
                        options?: CustomerListOptions | null | undefined;
                    };
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        CustomerList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Customer">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        DateTimeCustomFieldConfig: {
            idFields: never;
            fields: {
                description: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                internal: {
                    type: boolean | null;
                    args: never;
                };
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                max: {
                    type: string | null;
                    args: never;
                };
                min: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nullable: {
                    type: boolean | null;
                    args: never;
                };
                readonly: {
                    type: boolean | null;
                    args: never;
                };
                requiresPermission: {
                    type: (Permission)[] | null;
                    args: never;
                };
                step: {
                    type: number | null;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeletionResponse: {
            idFields: never;
            fields: {
                message: {
                    type: string | null;
                    args: never;
                };
                result: {
                    type: DeletionResult;
                    args: never;
                };
            };
            fragments: [];
        };
        Discount: {
            idFields: never;
            fields: {
                adjustmentSource: {
                    type: string;
                    args: never;
                };
                amount: {
                    type: string;
                    args: never;
                };
                amountWithTax: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                type: {
                    type: AdjustmentType;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailAddressConflictError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Facet: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "FacetTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
                valueList: {
                    type: Record<CacheTypeDef, "FacetValueList">;
                    args: {
                        options?: FacetValueListOptions | null | undefined;
                    };
                };
                values: {
                    type: (Record<CacheTypeDef, "FacetValue">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        FacetList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Facet">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        FacetTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        FacetValue: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                facet: {
                    type: Record<CacheTypeDef, "Facet">;
                    args: never;
                };
                facetId: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "FacetValueTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        FacetValueList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "FacetValue">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        FacetValueResult: {
            idFields: never;
            fields: {
                count: {
                    type: number;
                    args: never;
                };
                facetValue: {
                    type: Record<CacheTypeDef, "FacetValue">;
                    args: never;
                };
            };
            fragments: [];
        };
        FacetValueTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        FloatCustomFieldConfig: {
            idFields: never;
            fields: {
                description: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                internal: {
                    type: boolean | null;
                    args: never;
                };
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                max: {
                    type: number | null;
                    args: never;
                };
                min: {
                    type: number | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nullable: {
                    type: boolean | null;
                    args: never;
                };
                readonly: {
                    type: boolean | null;
                    args: never;
                };
                requiresPermission: {
                    type: (Permission)[] | null;
                    args: never;
                };
                step: {
                    type: number | null;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Fulfillment: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                lines: {
                    type: (Record<CacheTypeDef, "FulfillmentLine">)[];
                    args: never;
                };
                method: {
                    type: string;
                    args: never;
                };
                state: {
                    type: string;
                    args: never;
                };
                summary: {
                    type: (Record<CacheTypeDef, "FulfillmentLine">)[];
                    args: never;
                };
                trackingCode: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        FulfillmentLine: {
            idFields: never;
            fields: {
                fulfillment: {
                    type: Record<CacheTypeDef, "Fulfillment">;
                    args: never;
                };
                fulfillmentId: {
                    type: string;
                    args: never;
                };
                orderLine: {
                    type: Record<CacheTypeDef, "OrderLine">;
                    args: never;
                };
                orderLineId: {
                    type: string;
                    args: never;
                };
                quantity: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        GuestCheckoutError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                errorDetail: {
                    type: string;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        HistoryEntry: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                data: {
                    type: Object;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                type: {
                    type: HistoryEntryType;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        HistoryEntryList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "HistoryEntry">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        IdentifierChangeTokenExpiredError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        IdentifierChangeTokenInvalidError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        IneligiblePaymentMethodError: {
            idFields: never;
            fields: {
                eligibilityCheckerMessage: {
                    type: string | null;
                    args: never;
                };
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        IneligibleShippingMethodError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        InsufficientStockError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                order: {
                    type: Record<CacheTypeDef, "Order">;
                    args: never;
                };
                quantityAvailable: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        IntCustomFieldConfig: {
            idFields: never;
            fields: {
                description: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                internal: {
                    type: boolean | null;
                    args: never;
                };
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                max: {
                    type: number | null;
                    args: never;
                };
                min: {
                    type: number | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nullable: {
                    type: boolean | null;
                    args: never;
                };
                readonly: {
                    type: boolean | null;
                    args: never;
                };
                requiresPermission: {
                    type: (Permission)[] | null;
                    args: never;
                };
                step: {
                    type: number | null;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        InvalidCredentialsError: {
            idFields: never;
            fields: {
                authenticationError: {
                    type: string;
                    args: never;
                };
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        LocaleStringCustomFieldConfig: {
            idFields: never;
            fields: {
                description: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                internal: {
                    type: boolean | null;
                    args: never;
                };
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                length: {
                    type: number | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nullable: {
                    type: boolean | null;
                    args: never;
                };
                pattern: {
                    type: string | null;
                    args: never;
                };
                readonly: {
                    type: boolean | null;
                    args: never;
                };
                requiresPermission: {
                    type: (Permission)[] | null;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LocaleTextCustomFieldConfig: {
            idFields: never;
            fields: {
                description: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                internal: {
                    type: boolean | null;
                    args: never;
                };
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nullable: {
                    type: boolean | null;
                    args: never;
                };
                readonly: {
                    type: boolean | null;
                    args: never;
                };
                requiresPermission: {
                    type: (Permission)[] | null;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LocalizedString: {
            idFields: never;
            fields: {
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                value: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        MissingPasswordError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        NativeAuthStrategyError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        NegativeQuantityError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        NoActiveOrderError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        NotVerifiedError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Order: {
            idFields: {
                id: string;
            };
            fields: {
                active: {
                    type: boolean;
                    args: never;
                };
                billingAddress: {
                    type: Record<CacheTypeDef, "OrderAddress"> | null;
                    args: never;
                };
                code: {
                    type: string;
                    args: never;
                };
                couponCodes: {
                    type: (string)[];
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                currencyCode: {
                    type: CurrencyCode;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                customer: {
                    type: Record<CacheTypeDef, "Customer"> | null;
                    args: never;
                };
                discounts: {
                    type: (Record<CacheTypeDef, "Discount">)[];
                    args: never;
                };
                fulfillments: {
                    type: (Record<CacheTypeDef, "Fulfillment">)[] | null;
                    args: never;
                };
                history: {
                    type: Record<CacheTypeDef, "HistoryEntryList">;
                    args: {
                        options?: HistoryEntryListOptions | null | undefined;
                    };
                };
                id: {
                    type: string;
                    args: never;
                };
                lines: {
                    type: (Record<CacheTypeDef, "OrderLine">)[];
                    args: never;
                };
                orderPlacedAt: {
                    type: string | null;
                    args: never;
                };
                payments: {
                    type: (Record<CacheTypeDef, "Payment">)[] | null;
                    args: never;
                };
                promotions: {
                    type: (Record<CacheTypeDef, "Promotion">)[];
                    args: never;
                };
                shipping: {
                    type: string;
                    args: never;
                };
                shippingAddress: {
                    type: Record<CacheTypeDef, "OrderAddress"> | null;
                    args: never;
                };
                shippingLines: {
                    type: (Record<CacheTypeDef, "ShippingLine">)[];
                    args: never;
                };
                shippingWithTax: {
                    type: string;
                    args: never;
                };
                state: {
                    type: string;
                    args: never;
                };
                subTotal: {
                    type: string;
                    args: never;
                };
                subTotalWithTax: {
                    type: string;
                    args: never;
                };
                surcharges: {
                    type: (Record<CacheTypeDef, "Surcharge">)[];
                    args: never;
                };
                taxSummary: {
                    type: (Record<CacheTypeDef, "OrderTaxSummary">)[];
                    args: never;
                };
                total: {
                    type: string;
                    args: never;
                };
                totalQuantity: {
                    type: number;
                    args: never;
                };
                totalWithTax: {
                    type: string;
                    args: never;
                };
                type: {
                    type: OrderType;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [[OrderDetailStore, OrderDetail$data, never]];
        };
        OrderAddress: {
            idFields: never;
            fields: {
                city: {
                    type: string | null;
                    args: never;
                };
                company: {
                    type: string | null;
                    args: never;
                };
                country: {
                    type: string | null;
                    args: never;
                };
                countryCode: {
                    type: string | null;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                fullName: {
                    type: string | null;
                    args: never;
                };
                phoneNumber: {
                    type: string | null;
                    args: never;
                };
                postalCode: {
                    type: string | null;
                    args: never;
                };
                province: {
                    type: string | null;
                    args: never;
                };
                streetLine1: {
                    type: string | null;
                    args: never;
                };
                streetLine2: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        OrderLimitError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                maxItems: {
                    type: number;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        OrderLine: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                discountedLinePrice: {
                    type: string;
                    args: never;
                };
                discountedLinePriceWithTax: {
                    type: string;
                    args: never;
                };
                discountedUnitPrice: {
                    type: string;
                    args: never;
                };
                discountedUnitPriceWithTax: {
                    type: string;
                    args: never;
                };
                discounts: {
                    type: (Record<CacheTypeDef, "Discount">)[];
                    args: never;
                };
                featuredAsset: {
                    type: Record<CacheTypeDef, "Asset"> | null;
                    args: never;
                };
                fulfillmentLines: {
                    type: (Record<CacheTypeDef, "FulfillmentLine">)[] | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                linePrice: {
                    type: string;
                    args: never;
                };
                linePriceWithTax: {
                    type: string;
                    args: never;
                };
                lineTax: {
                    type: string;
                    args: never;
                };
                order: {
                    type: Record<CacheTypeDef, "Order">;
                    args: never;
                };
                orderPlacedQuantity: {
                    type: number;
                    args: never;
                };
                productVariant: {
                    type: Record<CacheTypeDef, "ProductVariant">;
                    args: never;
                };
                proratedLinePrice: {
                    type: string;
                    args: never;
                };
                proratedLinePriceWithTax: {
                    type: string;
                    args: never;
                };
                proratedUnitPrice: {
                    type: string;
                    args: never;
                };
                proratedUnitPriceWithTax: {
                    type: string;
                    args: never;
                };
                quantity: {
                    type: number;
                    args: never;
                };
                taxLines: {
                    type: (Record<CacheTypeDef, "TaxLine">)[];
                    args: never;
                };
                taxRate: {
                    type: number;
                    args: never;
                };
                unitPrice: {
                    type: string;
                    args: never;
                };
                unitPriceChangeSinceAdded: {
                    type: string;
                    args: never;
                };
                unitPriceWithTax: {
                    type: string;
                    args: never;
                };
                unitPriceWithTaxChangeSinceAdded: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        OrderList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Order">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        OrderModificationError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        OrderPaymentStateError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        OrderStateTransitionError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                fromState: {
                    type: string;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                toState: {
                    type: string;
                    args: never;
                };
                transitionError: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        OrderTaxSummary: {
            idFields: never;
            fields: {
                description: {
                    type: string;
                    args: never;
                };
                taxBase: {
                    type: string;
                    args: never;
                };
                taxRate: {
                    type: number;
                    args: never;
                };
                taxTotal: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PasswordAlreadySetError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PasswordResetTokenExpiredError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PasswordResetTokenInvalidError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PasswordValidationError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                validationErrorMessage: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Payment: {
            idFields: {
                id: string;
            };
            fields: {
                amount: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                errorMessage: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                metadata: {
                    type: Object | null;
                    args: never;
                };
                method: {
                    type: string;
                    args: never;
                };
                refunds: {
                    type: (Record<CacheTypeDef, "Refund">)[];
                    args: never;
                };
                state: {
                    type: string;
                    args: never;
                };
                transactionId: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PaymentDeclinedError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                paymentErrorMessage: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PaymentFailedError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                paymentErrorMessage: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PaymentMethod: {
            idFields: {
                id: string;
            };
            fields: {
                checker: {
                    type: Record<CacheTypeDef, "ConfigurableOperation"> | null;
                    args: never;
                };
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                enabled: {
                    type: boolean;
                    args: never;
                };
                handler: {
                    type: Record<CacheTypeDef, "ConfigurableOperation">;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "PaymentMethodTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PaymentMethodQuote: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                eligibilityMessage: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                isEligible: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PaymentMethodTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        PriceRange: {
            idFields: never;
            fields: {
                max: {
                    type: string;
                    args: never;
                };
                min: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Product: {
            idFields: {
                id: string;
            };
            fields: {
                assets: {
                    type: (Record<CacheTypeDef, "Asset">)[];
                    args: never;
                };
                collections: {
                    type: (Record<CacheTypeDef, "Collection">)[];
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                enabled: {
                    type: boolean;
                    args: never;
                };
                facetValues: {
                    type: (Record<CacheTypeDef, "FacetValue">)[];
                    args: never;
                };
                featuredAsset: {
                    type: Record<CacheTypeDef, "Asset"> | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                optionGroups: {
                    type: (Record<CacheTypeDef, "ProductOptionGroup">)[];
                    args: never;
                };
                slug: {
                    type: string;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "ProductTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
                variantList: {
                    type: Record<CacheTypeDef, "ProductVariantList">;
                    args: {
                        options?: ProductVariantListOptions | null | undefined;
                    };
                };
                variants: {
                    type: (Record<CacheTypeDef, "ProductVariant">)[];
                    args: never;
                };
            };
            fragments: [[DetailedProductStore, DetailedProduct$data, never]];
        };
        ProductList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Product">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ProductOption: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                group: {
                    type: Record<CacheTypeDef, "ProductOptionGroup">;
                    args: never;
                };
                groupId: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "ProductOptionTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ProductOptionGroup: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                options: {
                    type: (Record<CacheTypeDef, "ProductOption">)[];
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "ProductOptionGroupTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ProductOptionGroupTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ProductOptionTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ProductTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                slug: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ProductVariant: {
            idFields: {
                id: string;
            };
            fields: {
                assets: {
                    type: (Record<CacheTypeDef, "Asset">)[];
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                currencyCode: {
                    type: CurrencyCode;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                facetValues: {
                    type: (Record<CacheTypeDef, "FacetValue">)[];
                    args: never;
                };
                featuredAsset: {
                    type: Record<CacheTypeDef, "Asset"> | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                options: {
                    type: (Record<CacheTypeDef, "ProductOption">)[];
                    args: never;
                };
                price: {
                    type: string;
                    args: never;
                };
                priceWithTax: {
                    type: string;
                    args: never;
                };
                product: {
                    type: Record<CacheTypeDef, "Product">;
                    args: never;
                };
                productId: {
                    type: string;
                    args: never;
                };
                sku: {
                    type: string;
                    args: never;
                };
                stockLevel: {
                    type: string;
                    args: never;
                };
                taxCategory: {
                    type: Record<CacheTypeDef, "TaxCategory">;
                    args: never;
                };
                taxRateApplied: {
                    type: Record<CacheTypeDef, "TaxRate">;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "ProductVariantTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ProductVariantList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "ProductVariant">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ProductVariantTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Promotion: {
            idFields: {
                id: string;
            };
            fields: {
                actions: {
                    type: (Record<CacheTypeDef, "ConfigurableOperation">)[];
                    args: never;
                };
                conditions: {
                    type: (Record<CacheTypeDef, "ConfigurableOperation">)[];
                    args: never;
                };
                couponCode: {
                    type: string | null;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                enabled: {
                    type: boolean;
                    args: never;
                };
                endsAt: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                perCustomerUsageLimit: {
                    type: number | null;
                    args: never;
                };
                startsAt: {
                    type: string | null;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "PromotionTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
                usageLimit: {
                    type: number | null;
                    args: never;
                };
            };
            fragments: [];
        };
        PromotionList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Promotion">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        PromotionTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Province: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                enabled: {
                    type: boolean;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                parent: {
                    type: Record<CacheTypeDef, "Country"> | Record<CacheTypeDef, "Province"> | null;
                    args: never;
                };
                parentId: {
                    type: string | null;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "RegionTranslation">)[];
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ProvinceList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Province">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                activeChannel: {
                    type: Record<CacheTypeDef, "Channel">;
                    args: never;
                };
                activeCustomer: {
                    type: Record<CacheTypeDef, "Customer"> | null;
                    args: never;
                };
                activeOrder: {
                    type: Record<CacheTypeDef, "Order"> | null;
                    args: never;
                };
                availableCountries: {
                    type: (Record<CacheTypeDef, "Country">)[];
                    args: never;
                };
                collection: {
                    type: Record<CacheTypeDef, "Collection"> | null;
                    args: {
                        id?: string | null | undefined;
                        slug?: string | null | undefined;
                    };
                };
                collections: {
                    type: Record<CacheTypeDef, "CollectionList">;
                    args: {
                        options?: CollectionListOptions | null | undefined;
                    };
                };
                eligiblePaymentMethods: {
                    type: (Record<CacheTypeDef, "PaymentMethodQuote">)[];
                    args: never;
                };
                eligibleShippingMethods: {
                    type: (Record<CacheTypeDef, "ShippingMethodQuote">)[];
                    args: never;
                };
                facet: {
                    type: Record<CacheTypeDef, "Facet"> | null;
                    args: {
                        id: string;
                    };
                };
                facets: {
                    type: Record<CacheTypeDef, "FacetList">;
                    args: {
                        options?: FacetListOptions | null | undefined;
                    };
                };
                me: {
                    type: Record<CacheTypeDef, "CurrentUser"> | null;
                    args: never;
                };
                nextOrderStates: {
                    type: (string)[];
                    args: never;
                };
                order: {
                    type: Record<CacheTypeDef, "Order"> | null;
                    args: {
                        id: string;
                    };
                };
                orderByCode: {
                    type: Record<CacheTypeDef, "Order"> | null;
                    args: {
                        code: string;
                    };
                };
                product: {
                    type: Record<CacheTypeDef, "Product"> | null;
                    args: {
                        id?: string | null | undefined;
                        slug?: string | null | undefined;
                    };
                };
                products: {
                    type: Record<CacheTypeDef, "ProductList">;
                    args: {
                        options?: ProductListOptions | null | undefined;
                    };
                };
                promotions: {
                    type: Record<CacheTypeDef, "PromotionList">;
                    args: {
                        options?: PromotionListOptions | null | undefined;
                    };
                };
                search: {
                    type: Record<CacheTypeDef, "SearchResponse">;
                    args: {
                        input: SearchInput;
                    };
                };
            };
            fragments: [];
        };
        Refund: {
            idFields: {
                id: string;
            };
            fields: {
                adjustment: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                items: {
                    type: string;
                    args: never;
                };
                lines: {
                    type: (Record<CacheTypeDef, "RefundLine">)[];
                    args: never;
                };
                metadata: {
                    type: Object | null;
                    args: never;
                };
                method: {
                    type: string | null;
                    args: never;
                };
                paymentId: {
                    type: string;
                    args: never;
                };
                reason: {
                    type: string | null;
                    args: never;
                };
                shipping: {
                    type: string;
                    args: never;
                };
                state: {
                    type: string;
                    args: never;
                };
                total: {
                    type: string;
                    args: never;
                };
                transactionId: {
                    type: string | null;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        RefundLine: {
            idFields: never;
            fields: {
                orderLine: {
                    type: Record<CacheTypeDef, "OrderLine">;
                    args: never;
                };
                orderLineId: {
                    type: string;
                    args: never;
                };
                quantity: {
                    type: number;
                    args: never;
                };
                refund: {
                    type: Record<CacheTypeDef, "Refund">;
                    args: never;
                };
                refundId: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        RegionTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        RelationCustomFieldConfig: {
            idFields: never;
            fields: {
                description: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                entity: {
                    type: string;
                    args: never;
                };
                internal: {
                    type: boolean | null;
                    args: never;
                };
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nullable: {
                    type: boolean | null;
                    args: never;
                };
                readonly: {
                    type: boolean | null;
                    args: never;
                };
                requiresPermission: {
                    type: (Permission)[] | null;
                    args: never;
                };
                scalarFields: {
                    type: (string)[];
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Role: {
            idFields: {
                id: string;
            };
            fields: {
                channels: {
                    type: (Record<CacheTypeDef, "Channel">)[];
                    args: never;
                };
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                permissions: {
                    type: (Permission)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        RoleList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Role">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        SearchReindexResponse: {
            idFields: never;
            fields: {
                success: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        SearchResponse: {
            idFields: never;
            fields: {
                collections: {
                    type: (Record<CacheTypeDef, "CollectionResult">)[];
                    args: never;
                };
                facetValues: {
                    type: (Record<CacheTypeDef, "FacetValueResult">)[];
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "SearchResult">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        SearchResult: {
            idFields: never;
            fields: {
                collectionIds: {
                    type: (string)[];
                    args: never;
                };
                currencyCode: {
                    type: CurrencyCode;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                facetIds: {
                    type: (string)[];
                    args: never;
                };
                facetValueIds: {
                    type: (string)[];
                    args: never;
                };
                inStock: {
                    type: boolean;
                    args: never;
                };
                price: {
                    type: Record<CacheTypeDef, "PriceRange"> | Record<CacheTypeDef, "SinglePrice">;
                    args: never;
                };
                priceWithTax: {
                    type: Record<CacheTypeDef, "PriceRange"> | Record<CacheTypeDef, "SinglePrice">;
                    args: never;
                };
                productAsset: {
                    type: Record<CacheTypeDef, "SearchResultAsset"> | null;
                    args: never;
                };
                productId: {
                    type: string;
                    args: never;
                };
                productName: {
                    type: string;
                    args: never;
                };
                productVariantAsset: {
                    type: Record<CacheTypeDef, "SearchResultAsset"> | null;
                    args: never;
                };
                productVariantId: {
                    type: string;
                    args: never;
                };
                productVariantName: {
                    type: string;
                    args: never;
                };
                score: {
                    type: number;
                    args: never;
                };
                sku: {
                    type: string;
                    args: never;
                };
                slug: {
                    type: string;
                    args: never;
                };
            };
            fragments: [[ListedProductStore, ListedProduct$data, never]];
        };
        SearchResultAsset: {
            idFields: {
                id: string;
            };
            fields: {
                focalPoint: {
                    type: Record<CacheTypeDef, "Coordinate"> | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                preview: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Seller: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ShippingLine: {
            idFields: {
                id: string;
            };
            fields: {
                discountedPrice: {
                    type: string;
                    args: never;
                };
                discountedPriceWithTax: {
                    type: string;
                    args: never;
                };
                discounts: {
                    type: (Record<CacheTypeDef, "Discount">)[];
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                price: {
                    type: string;
                    args: never;
                };
                priceWithTax: {
                    type: string;
                    args: never;
                };
                shippingMethod: {
                    type: Record<CacheTypeDef, "ShippingMethod">;
                    args: never;
                };
            };
            fragments: [];
        };
        ShippingMethod: {
            idFields: {
                id: string;
            };
            fields: {
                calculator: {
                    type: Record<CacheTypeDef, "ConfigurableOperation">;
                    args: never;
                };
                checker: {
                    type: Record<CacheTypeDef, "ConfigurableOperation">;
                    args: never;
                };
                code: {
                    type: string;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                fulfillmentHandlerCode: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                translations: {
                    type: (Record<CacheTypeDef, "ShippingMethodTranslation">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ShippingMethodList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "ShippingMethod">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ShippingMethodQuote: {
            idFields: {
                id: string;
            };
            fields: {
                code: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                metadata: {
                    type: Object | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                price: {
                    type: string;
                    args: never;
                };
                priceWithTax: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ShippingMethodTranslation: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                languageCode: {
                    type: LanguageCode;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        SinglePrice: {
            idFields: never;
            fields: {
                value: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        StringCustomFieldConfig: {
            idFields: never;
            fields: {
                description: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                internal: {
                    type: boolean | null;
                    args: never;
                };
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                length: {
                    type: number | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nullable: {
                    type: boolean | null;
                    args: never;
                };
                options: {
                    type: (Record<CacheTypeDef, "StringFieldOption">)[] | null;
                    args: never;
                };
                pattern: {
                    type: string | null;
                    args: never;
                };
                readonly: {
                    type: boolean | null;
                    args: never;
                };
                requiresPermission: {
                    type: (Permission)[] | null;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        StringFieldOption: {
            idFields: never;
            fields: {
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                value: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Success: {
            idFields: never;
            fields: {
                success: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        Surcharge: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                price: {
                    type: string;
                    args: never;
                };
                priceWithTax: {
                    type: string;
                    args: never;
                };
                sku: {
                    type: string | null;
                    args: never;
                };
                taxLines: {
                    type: (Record<CacheTypeDef, "TaxLine">)[];
                    args: never;
                };
                taxRate: {
                    type: number;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Tag: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
                value: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        TagList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        TaxCategory: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                isDefault: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        TaxLine: {
            idFields: never;
            fields: {
                description: {
                    type: string;
                    args: never;
                };
                taxRate: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        TaxRate: {
            idFields: {
                id: string;
            };
            fields: {
                category: {
                    type: Record<CacheTypeDef, "TaxCategory">;
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                customerGroup: {
                    type: Record<CacheTypeDef, "CustomerGroup"> | null;
                    args: never;
                };
                enabled: {
                    type: boolean;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
                value: {
                    type: number;
                    args: never;
                };
                zone: {
                    type: Record<CacheTypeDef, "Zone">;
                    args: never;
                };
            };
            fragments: [];
        };
        TaxRateList: {
            idFields: never;
            fields: {
                items: {
                    type: (Record<CacheTypeDef, "TaxRate">)[];
                    args: never;
                };
                totalItems: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        TextCustomFieldConfig: {
            idFields: never;
            fields: {
                description: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                internal: {
                    type: boolean | null;
                    args: never;
                };
                label: {
                    type: (Record<CacheTypeDef, "LocalizedString">)[] | null;
                    args: never;
                };
                list: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                nullable: {
                    type: boolean | null;
                    args: never;
                };
                readonly: {
                    type: boolean | null;
                    args: never;
                };
                requiresPermission: {
                    type: (Permission)[] | null;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
                ui: {
                    type: Object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        User: {
            idFields: {
                id: string;
            };
            fields: {
                authenticationMethods: {
                    type: (Record<CacheTypeDef, "AuthenticationMethod">)[];
                    args: never;
                };
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                identifier: {
                    type: string;
                    args: never;
                };
                lastLogin: {
                    type: string | null;
                    args: never;
                };
                roles: {
                    type: (Record<CacheTypeDef, "Role">)[];
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
                verified: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        VerificationTokenExpiredError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        VerificationTokenInvalidError: {
            idFields: never;
            fields: {
                errorCode: {
                    type: ErrorCode;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Zone: {
            idFields: {
                id: string;
            };
            fields: {
                createdAt: {
                    type: string;
                    args: never;
                };
                customFields: {
                    type: Object | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                members: {
                    type: (Record<CacheTypeDef, "Country"> | Record<CacheTypeDef, "Province">)[];
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                updatedAt: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[AvailableCountriesStore, AvailableCountries$result, AvailableCountries$input], [EligiblePaymentMethodsStore, EligiblePaymentMethods$result, EligiblePaymentMethods$input], [EligibleShippingMethodsStore, EligibleShippingMethods$result, EligibleShippingMethods$input], [CollectionsStore, Collections$result, Collections$input], [CollectionStore, Collection$result, Collection$input], [ActiveCustomerAddressesStore, ActiveCustomerAddresses$result, ActiveCustomerAddresses$input], [ActiveCustomerStore, ActiveCustomer$result, ActiveCustomer$input], [ActiveCustomerOrdersStore, ActiveCustomerOrders$result, ActiveCustomerOrders$input], [ActiveOrderStore, ActiveOrder$result, ActiveOrder$input], [ArderByCodeStore, ArderByCode$result, ArderByCode$input], [ProductStore, Product$result, Product$input], [ProductsStore, Products$result, Products$input], [SearchProductStore, SearchProduct$result, SearchProduct$input], [PromotionsStore, Promotions$result, Promotions$input]];
};