// @ts-nocheck
import type { PageServerLoad } from './$types'

export const load = async function ({ params, url }: Parameters<PageServerLoad>[0]) {
	const code = params.code
	const status = url.searchParams.get('redirect_status')
	return {
		code
	}
}