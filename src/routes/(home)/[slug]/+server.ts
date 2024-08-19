import type { RequestEvent, RequestHandler } from "@sveltejs/kit";


export const GET = (async ({ params, fetch, request }: RequestEvent) => {
    try {
        let result = { message: "Response from Endpoint" };


        return new Response(JSON.stringify(result), { status: 200 });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
        });
    }
}) satisfies RequestHandler;