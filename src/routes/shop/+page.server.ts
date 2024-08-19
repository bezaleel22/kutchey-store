import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async function (event) {

    throw redirect(302, '/shop/1');

}) satisfies PageServerLoad

