import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async function () {

    throw redirect(302, '/shop/1');

}) satisfies PageServerLoad

