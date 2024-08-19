import { dev } from '$app/environment';
import { PUBLIC_SHOP_API, PUBLIC_CHANNEL_TOKEN } from '$env/static/public';
import { HoudiniClient, fetch } from '$houdini';
import type { RequestHandler } from '$houdini/runtime/client/plugins';
import { SHOPAPI_URL } from '$lib/constants';



const fetchFn: RequestHandler = async ({ fetch, name, text, variables, session }) => {
    let headers: Record<string, string> = {
        Accept: 'application/graphql+json, application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${session?.token}`,
    };

    let url = SHOPAPI_URL
    if (dev) {
        url = PUBLIC_SHOP_API
        headers = { ...headers, 'vendure-token': PUBLIC_CHANNEL_TOKEN }
        // console.log({ url, PUBLIC_CHANNEL_TOKEN })
    }

    if (!url) {
        throw new Error(
            'Could not find configured client url. Please specify one in your HoudiniClient constructor.'
        )
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                operationName: name, query: text, variables
            }),
        })

        if (!response.ok) return {}

        if (session && !session.token)
            session.token = response.headers.get("vendure-auth-token") as string
        console.error({ name, success: true })

        return await response.json()

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.error({ name, success: false, url })
        return {}
    }

}

export default new HoudiniClient({
    pipeline: [fetch(fetchFn)]
})

