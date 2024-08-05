import { dev } from '$app/environment';
import { HoudiniClient, fetch } from '$houdini';
import type { RequestHandler } from '$houdini/runtime/client/plugins';
import { SHOPAPI_DEV_URL, SHOPAPI_PROD_URL } from '$lib/constants';

const fetchFn: RequestHandler = async ({ fetch, name, text, variables, session }) => {
    // if (!browser) {
    const url = dev ? SHOPAPI_DEV_URL : SHOPAPI_PROD_URL
    if (!url) {
        throw new Error(
            'Could not find configured client url. Please specify one in your HoudiniClient constructor.'
        )
    }
    // console.log({ ...session })
    const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            operationName: name, query: text, variables
        }),
        headers: {
            Accept: 'application/graphql+json, application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${session?.token}`,
        },
    })

    

    if (session && !session.token)
        session.token = result.headers.get("vendure-auth-token") as string

    return await result.json()
}

// }

export default new HoudiniClient({
    pipeline: [fetch(fetchFn)]
})

