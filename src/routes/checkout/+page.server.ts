import { ActiveCustomerAddressesStore, EligiblePaymentMethodsStore, EligibleShippingMethodsStore } from '$houdini'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async function (event) {

    const shipingStore = new EligibleShippingMethodsStore()
    const addresStore = new ActiveCustomerAddressesStore()
    const paymentStore = new EligiblePaymentMethodsStore()

    const promises = Promise.all([
        addresStore.fetch({ event }),
        paymentStore.fetch({ event }),
        shipingStore.fetch({ event })
    ])

    const [addresses, paymentOptions, shippingMethods] = await promises
    if (!shippingMethods.data?.eligibleShippingMethods) {
        throw error(500, { message: 'Failed to get eligible shipping methods ', code: 'INTERNAL_SERVER_ERROR' });
    }

    if (!paymentOptions.data?.eligiblePaymentMethods) {
        throw error(500, { message: 'Failed to get eligible payment methods ', code: 'INTERNAL_SERVER_ERROR' });
    }

    return {
        shippingMethods: shippingMethods.data.eligibleShippingMethods,
        paymentOptions: paymentOptions.data.eligiblePaymentMethods,
        addressBook: addresses.data?.activeCustomer?.addresses ?? undefined
    }
}