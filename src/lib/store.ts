import { type OrderDetail$data } from "$houdini";
import { error } from "@sveltejs/kit";
import { get, writable } from "svelte/store";
import { CUSTOMER_NOT_DEFINED_ID } from "./constants";
import type { ActiveCustomer, Collection, Contact, Country, PaymentAuth, PaymentMethod, Product, ShippingAddress, ShippingMethod, VerifyPayment } from "./types";


export const order = writable<OrderDetail$data | null>();
export const user = writable<ActiveCustomer>({ id: CUSTOMER_NOT_DEFINED_ID, emailAddress: "", firstName: '', lastName: '', avarter: "" } as ActiveCustomer);
export const currencyCode = writable<string | null>(null)
export const userLocale = writable<string | null>(null)

interface State {
    favoriteProduct: Product[]
    collections?: Collection[];
    activeOrder: OrderDetail$data;
    showCart: boolean
    showMenu: boolean
    customer: ActiveCustomer
    shippingAddress?: ShippingAddress;
    availableCountries?: Country[];
    addressBook?: ShippingAddress[];
    paymentOptions?: PaymentMethod;
    orderState?: string
}

const AppState = () => {
    const { set, update, subscribe } = writable<State>({
        favoriteProduct: [],
        collections: [],
        activeOrder: {} as OrderDetail$data,
        showCart: false,
        showMenu: false,
        customer: { id: CUSTOMER_NOT_DEFINED_ID, emailAddress: "", firstName: '', lastName: '', avarter: "" } as ActiveCustomer,
        availableCountries: []
    });


    const addToCart = async (id: string, quantity: number) => {
        if (!id) throw error(500, { message: 'No product id provided' })
        const response = await fetch<OrderDetail$data>(`/api/additem?id=${id}&quantity=${quantity}`);
        if (response.ok) throw error(500, { message: 'Failed to add to cart' })

        const activeOrder = await response.json();
        update((store) => ({ ...store, activeOrder }))
        return activeOrder || null
    }

    const updateOrderLine = async (id: string, quantity: number) => {
        if (!id) throw error(500, { message: 'No product id provided' })
        const response = await fetch<OrderDetail$data>(`/api/additem?id=${id}&quantity=${quantity}`);
        if (!response.ok) throw error(500, { message: 'Failed to update cart' })

        const activeOrder = await response.json();
        update((store) => ({ ...store, activeOrder }));
        return activeOrder || null
    }

    const removeItem = async (id: string) => {
        if (!id) throw error(500, { message: 'No product id provided' })
        const response = await fetch<OrderDetail$data>(`/api/additem?id=${id}`);
        if (!response.ok) throw error(500, { message: 'Failed to remove from cart' })

        const activeOrder = await response.json();
        update((store) => ({ ...store, activeOrder }));
        return activeOrder || null
    }

    const startCheckout = async (token: string) => {
        const response = await fetch<Contact>('/checkout/start-checkout', {
            method: 'POST',
            body: JSON.stringify({ token })
        })

        if (!response.ok) throw error(500, { message: "Unable to start checkout process" })
        const { addressBook, paymentOptions } = await response.json()
        update((store) => ({ ...store, addressBook, paymentOptions }));
    }

    const setCustomer = async (customer: ActiveCustomer) => {
        const response = await fetch<OrderDetail$data>('/checkout/set-customer', {
            method: 'POST',
            body: JSON.stringify(customer)
        })

        if (!response.ok) throw error(500, { message: "Unable to set the active customer" })
        const activeOrder = await response.json()
        update((store) => ({ ...store, activeOrder }));
        return activeOrder || null
    }

    const setAddress = async (address: ShippingAddress) => {
        const response = await fetch<OrderDetail$data>('/checkout/set-address', {
            method: 'POST',
            body: JSON.stringify(address)
        })

        if (!response.ok) throw error(500, { message: "Unable to set the active customer" })
        const activeOrder = await response.json()
        update((store) => ({ ...store, activeOrder }));
        return activeOrder || null
    }

    const getShippingOptions = async () => {
        const response = await fetch<ShippingMethod[]>('/checkout/get-shipping-options')
        if (!response.ok) throw error(500, { message: "Unable to get shipping option" })
        const shippingMethods = await response.json()
        update((store) => ({ ...store, shippingMethods }));
    }

    const setShippingOption = async (id: string) => {
        const response = await fetch<OrderDetail$data>('/checkout/set-shipping-option', {
            method: 'POST',
            body: JSON.stringify({ id })
        })

        if (!response.ok) throw error(500, { message: "Unable to set shipping option" })
        const activeOrder = await response.json()
        update((store) => ({ ...store, activeOrder }));
        return activeOrder || null
    }

    const setOrderState = async (state: string) => {
        const response = await fetch('/checkout/set-order-state', {
            method: 'POST',
            body: JSON.stringify({ state })
        })

        if (!response.ok) throw error(500, { message: "Unable to start checkout process" })
        update((store) => ({ ...store, orderState: state }));
    }

    const createAddress = async (address: ShippingAddress) => {
        const customer = get(user)
        if (customer.addresses?.length) {
            const existingAddress = customer.addresses.find(v => v.streetLine1 === address.streetLine1 && v.streetLine2 === address.streetLine2 && v.city === address.city && v.province === address.province && v.postalCode === address.postalCode)
            if (existingAddress) return
        }
        const response = await fetch('/checkout/create-address', {
            method: 'POST',
            body: JSON.stringify(address)
        })

        if (!response.ok) throw error(500, { message: "Unable to start checkout process" })
        return await response.json()
    }

    const initializePayment = async (email: string, amount: string) => {
        const response = await fetch<PaymentAuth>('/checkout/set-order-state', {
            method: 'POST',
            body: JSON.stringify({ email, amount })
        })

        if (!response.ok) throw error(500, { message: "Unable to start checkout process" })
        return await response.json()
    }

    const verifyPayment = async (ref: string) => {
        const response = await fetch<VerifyPayment>(`/paystack/${ref}`)
        if (!response.ok) throw error(500, { message: "Unable to start checkout process" })
        return await response.json()

        // update((store) => ({ ...store, orderState: state }));
    }


    const addPaymentToOrder = async () => {
        const response = await fetch<OrderDetail$data>('/checkout/add-payment', {
            method: 'POST',
        })

        if (!response.ok) throw error(500, { message: "Unable to set shipping option" })
        const activeOrder = await response.json()
        update((store) => ({ ...store, activeOrder }));
        return activeOrder || null
    }

    return {
        set,
        update,
        subscribe,

        addToCart,
        updateOrderLine,
        removeItem,
        startCheckout,
        setAddress,
        setCustomer,
        getShippingOptions,
        setShippingOption,
        setOrderState,
        createAddress,
        initializePayment,
        verifyPayment,
        addPaymentToOrder
    }

}

export const state = AppState();