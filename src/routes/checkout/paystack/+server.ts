import { PAYSTACK_SECRET_KEY } from "$env/static/private";
import type { PaymentAuth, VerifyPayment } from "$lib/types";
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


export const GET = (async ({ url }: RequestEvent) => {
	const reference = url.searchParams.get("ref")
	const endpoint = `https://api.paystack.co/transaction/verify/${reference}`

	const response = await fetch<VerifyPayment>(endpoint)
	if (!response.ok) throw error(500, { message: `Unable to veryfy transaction with ref: ${reference}` })

	const verify = await response.json()
	return json(verify)

}) satisfies RequestHandler;