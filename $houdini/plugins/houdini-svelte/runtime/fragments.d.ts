import { ListedProduct$input, ListedProduct$data } from "../../../artifacts/ListedProduct";
import { ListedProductStore } from "../stores/ListedProduct";
import { DetailedProduct$input, DetailedProduct$data } from "../../../artifacts/DetailedProduct";
import { DetailedProductStore } from "../stores/DetailedProduct";
import { OrderDetail$input, OrderDetail$data } from "../../../artifacts/OrderDetail";
import { OrderDetailStore } from "../stores/OrderDetail";
import { Address$input, Address$data } from "../../../artifacts/Address";
import { AddressStore } from "../stores/Address";
import { ErrorResult$input, ErrorResult$data } from "../../../artifacts/ErrorResult";
import { ErrorResultStore } from "../stores/ErrorResult";
import type { FragmentStoreInstance } from "./types";
import type { Fragment, FragmentArtifact } from "$houdini/runtime/lib/types";
import type { Readable } from "svelte/store";
import type { FragmentStore } from "./stores";
import type { FragmentStorePaginated } from "./stores/pagination/fragment";

export function fragment(
    initialValue: {
        " $fragments": {
            ErrorResult: any;
        };
    } | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: ErrorResultStore
): FragmentStoreInstance<ErrorResult$data, ErrorResult$input>;

export function fragment(
    initialValue: {
        " $fragments": {
            ErrorResult: any;
        };
    } | null | undefined | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: ErrorResultStore
): FragmentStoreInstance<ErrorResult$data | null, ErrorResult$input>;

export function fragment(
    initialValue: {
        " $fragments": {
            Address: any;
        };
    } | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: AddressStore
): FragmentStoreInstance<Address$data, Address$input>;

export function fragment(
    initialValue: {
        " $fragments": {
            Address: any;
        };
    } | null | undefined | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: AddressStore
): FragmentStoreInstance<Address$data | null, Address$input>;

export function fragment(
    initialValue: {
        " $fragments": {
            OrderDetail: any;
        };
    } | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: OrderDetailStore
): FragmentStoreInstance<OrderDetail$data, OrderDetail$input>;

export function fragment(
    initialValue: {
        " $fragments": {
            OrderDetail: any;
        };
    } | null | undefined | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: OrderDetailStore
): FragmentStoreInstance<OrderDetail$data | null, OrderDetail$input>;

export function fragment(
    initialValue: {
        " $fragments": {
            DetailedProduct: any;
        };
    } | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: DetailedProductStore
): FragmentStoreInstance<DetailedProduct$data, DetailedProduct$input>;

export function fragment(
    initialValue: {
        " $fragments": {
            DetailedProduct: any;
        };
    } | null | undefined | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: DetailedProductStore
): FragmentStoreInstance<DetailedProduct$data | null, DetailedProduct$input>;

export function fragment(
    initialValue: {
        " $fragments": {
            ListedProduct: any;
        };
    } | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: ListedProductStore
): FragmentStoreInstance<ListedProduct$data, ListedProduct$input>;

export function fragment(
    initialValue: {
        " $fragments": {
            ListedProduct: any;
        };
    } | null | undefined | {
        "__typename": "non-exhaustive; don't match this";
    },
    document: ListedProductStore
): FragmentStoreInstance<ListedProduct$data | null, ListedProduct$input>;

export declare function fragment<_Fragment extends Fragment<any>>(ref: _Fragment, fragment: FragmentStore<_Fragment["shape"], {}>): Readable<Exclude<_Fragment["shape"], undefined>> & {
    data: Readable<_Fragment>;
    artifact: FragmentArtifact;
};

export declare function fragment<_Fragment extends Fragment<any>>(
    ref: _Fragment | null | undefined,
    fragment: FragmentStore<_Fragment["shape"], {}>
): Readable<Exclude<_Fragment["shape"], undefined> | null> & {
    data: Readable<_Fragment | null>;
    artifact: FragmentArtifact;
};

export declare function paginatedFragment<_Fragment extends Fragment<any>>(
    initialValue: _Fragment | null | undefined,
    document: FragmentStore<_Fragment["shape"], {}>
): FragmentStorePaginated<_Fragment["shape"], {}>;

export declare function paginatedFragment<_Fragment extends Fragment<any>>(initialValue: _Fragment, document: FragmentStore<_Fragment["shape"], {}>): FragmentStorePaginated<_Fragment["shape"], {}>;