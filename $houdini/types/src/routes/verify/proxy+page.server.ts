// @ts-nocheck
import type { PageServerLoad, RequestEvent } from './$types'
import { VerifyCustomerAccountStore } from '$houdini'

export const load = async (event: Parameters<PageServerLoad>[0]) => {
    // vendure token renamed to code so as to not conflict with cf token if used
    const code = event.url.searchParams.get('token') || ''
    const verify = new VerifyCustomerAccountStore()
    const result = await verify.mutate({ token: code }, { event })
    const success = result.data?.verifyCustomerAccount ? true : false
    return {
        success,
        code
    }
}