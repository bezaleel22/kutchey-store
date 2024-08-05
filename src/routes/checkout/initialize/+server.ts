import { PAYSTACK_SECRET_KEY } from "$env/static/private";
import type { PaymentAuth } from "$lib/types";
import { error, json, type RequestEvent, type RequestHandler } from "@sveltejs/kit";


export const POST = (async ({ request }: RequestEvent) => {
	const endpoint = "https://api.paystack.co/transaction/initialize"
	const { email, amount } = await request.json()

	const response = await fetch<PaymentAuth>(endpoint, {
		method: 'POST',
		body: JSON.stringify({ email, amount }),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			"Authorization": `Bearer ${PAYSTACK_SECRET_KEY}`,
		},
	})

	if (!response.ok) throw error(500, { message: "Unable to start checkout process" })
	const paymentAuth = await response.json()
	return json(paymentAuth)

}) satisfies RequestHandler;