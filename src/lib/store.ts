import { type OrderDetail$data } from "$houdini";
import { error } from "@sveltejs/kit";
import { writable, type Unsubscriber, type Writable } from "svelte/store";
import { CUSTOMER_NOT_DEFINED_ID } from "./constants";
import type { ActiveCustomer, Collection, Country, Product, ShippingAddress } from "./types";


export const order = writable<OrderDetail$data | null>();
export const user = writable<ActiveCustomer>({ id: CUSTOMER_NOT_DEFINED_ID, firstName: '', lastName: '', avarter: "" } as ActiveCustomer);

interface State {
    favoriteProduct: Product[]
    cartProduct: Product[]
    collections?: Collection[];
    activeOrder?: OrderDetail$data;
    showCart: boolean
    showMenu: boolean
    customer: ActiveCustomer
    shippingAddress?: ShippingAddress;
    availableCountries?: Country[];
    addressBook: ShippingAddress[]
}

const AppState = () => {
    const { set, update, subscribe } = writable<State>({
        addressBook: [],
        favoriteProduct: [],
        cartProduct: [],
        collections: [],
        activeOrder: {} as OrderDetail$data,
        showCart: false,
        showMenu: false,
        customer: { id: CUSTOMER_NOT_DEFINED_ID, firstName: '', lastName: '', avarter: "" } as ActiveCustomer,
        availableCountries: [],
        // this.shippingAddress = {
        //     id: '',
        //     city: '',
        //     company: '',
        //     countryCode: availableCountries.length > 0
        //         ? availableCountries[0].code
        //         : '',
        //     fullName: '',
        //     phoneNumber: '',
        //     postalCode: '',
        //     province: '',
        //     streetLine1: '',
        //     streetLine2: '',
        // }
    });


    const addToCart = async (id: string, quantity: number) => {
        if (!id) throw error(500, { message: 'No product id provided' })
        try {
            const response = await fetch(`/api/additem?id=${id}&quantity=${quantity}`);
            if (response.ok) {
                const activeOrder = await response.json();
                return activeOrder;
                // update((store) => ({ ...store, activeOrder }));
            }
            throw error(500, { message: 'Failed to add to cart' })
        } catch (err) {
            throw error(500, { message: 'Failed to add to cart' })
        }
    }

    const updateOrderLine = async (id: string, quantity: number) => {
        if (!id) throw error(500, { message: 'No product id provided' })
        try {
            const response = await fetch(`/api/updateitem?id=${id}&quantity=${quantity}`);
            if (response.ok) {
                const activeOrder = await response.json() as OrderDetail$data;
                return activeOrder;
                // update((store) => ({ ...store, activeOrder }));
            }
            throw error(500, { message: 'Failed to update cart' })
        } catch (err) {
            throw error(500, { message: 'Failed to adjust cart quantity' })
        }
    }

    const removeItem = async (id: string) => {
        if (!id) throw error(500, { message: 'No product id provided' })
        try {
            const response = await fetch(`/api/removeitem?id=${id}`);
            if (response.ok) {
                const activeOrder = await response.json() as OrderDetail$data;
                return activeOrder;
                // update((store) => ({ ...store, activeOrder }));
            }
            throw error(500, { message: 'Failed to remove from cart' })
        } catch (err) {
            throw error(500, { message: 'Failed to remove from cart' })
        }
    }

    return {
        addToCart,
        updateOrderLine,
        removeItem,
        set,
        update,
        subscribe,
    }

}

export const state = AppState();