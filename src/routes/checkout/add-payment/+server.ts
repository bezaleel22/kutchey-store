import { PAYSTACK_SECRET_KEY } from "$env/static/private";
import { AddPaymentToOrderStore, OrderDetailStore } from "$houdini";
import type { Transaction, VerifyPayment } from "$lib/types";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";
import { get } from "svelte/store";

export const POST = (async (event: RequestEvent) => {
	const { trx, amount, methodCode } = await event.request.json() as { trx: Transaction, amount: string, methodCode: string }
	const endpoint = `https://api.paystack.co/transaction/verify/${trx.reference}`

	const response = await fetch<VerifyPayment>(endpoint, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			"Authorization": `Bearer ${PAYSTACK_SECRET_KEY}`,
		},
	})

	if (!response.ok) throw error(500, { message: `Unable to veryfy transaction with ref: ${trx.reference}` })

	const verify = await response.json()
	if (!verify.status) {
		throw error(500, { message: `transaction with ref: ${trx.reference} not verified` })
	}

	if (verify.data.amount != Number(amount)) {
		throw error(500, { message: `Inssufficient payment amount please add additional ${Math.abs(verify.data.amount - Number(amount))}` })
	}

	const store = new AddPaymentToOrderStore()
	const result = await store.mutate({ input: { method: methodCode, metadata: { ...trx } } }, { event })
	if (!result.data) {
		throw error(500, { message: `Failed to set shipping method`, code: 'INTERNAL_SERVER_ERROR' });
	}
	const detailStore = new OrderDetailStore().get(result.data.addPaymentToOrder)
	const addPaymentToOrder = get(detailStore)

	if (!addPaymentToOrder) {
		throw error(500, { message: `Failed to get order details`, code: 'INTERNAL_SERVER_ERROR' });
	}

	return json(addPaymentToOrder);

}) satisfies RequestHandler;