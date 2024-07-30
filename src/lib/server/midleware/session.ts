import { ActiveCustomerStore, ActiveOrderStore, OrderDetailStore, getSession, setSession, type OrderDetail } from '$houdini'
import type { ActiveCustomer } from '$lib/types'
import type { RequestEvent } from '@sveltejs/kit'
import { get } from 'svelte/store'


// this middleware function is called by src/hooks.server.ts or src/hooks.server.js
export const setUserSession = async function (event: RequestEvent): Promise<RequestEvent> {
    const customer = new ActiveCustomerStore()
    const order = new ActiveOrderStore()

    event.locals.token = event.cookies.get('auth_token') || ''
    setSession(event, { token: event.locals.token })

    const orderResult = await order.fetch({ event })
    if (orderResult.data) {
        let detailStore = new OrderDetailStore().get(orderResult.data.activeOrder);
        event.locals.cart = get(detailStore)
    }
    const customerResult = await customer.fetch({ event })
    if (customerResult.data)
        event.locals.user = customerResult.data.activeCustomer as ActiveCustomer

    const session = await getSession(event)
    if ("token" in session) {
        event.cookies.set('auth_token', session.token, {
            path: '/',
            maxAge: 1000 * 60 * 60 * 24 * 365,
            sameSite: 'strict',
            httpOnly: true,
            secure: true
        })
    }

    return event
}