import type { SearchProduct$result } from "$houdini";
import type { HasParent, RootNode, ShippingMethod, TreeNode } from "$lib/types"

import {
	DEFAULT_CURRENCY,
	PUBLIC_LOCAL_PICKUP_CODE,
	SITE_DESCRIPTION,
	SITE_IMAGE,
	SITE_TITLE,
	SITE_URL,
} from '$lib/constants';
import type { ActiveCustomer, FacetWithValues, ShippingAddress } from '$lib/types';
import { get } from "svelte/store";
import { currencyCode, userLocale } from "$lib/store";

export const generateRef = (datePrefix: string = "PAY", length: number = 6): string => {
	const date = new Date();
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
	const day = date.getDate().toString().padStart(2, '0');
	
	const dateString = `${year}${month}${day}`;
	const uuid = crypto.randomUUID();

	const randomString = uuid.replace(/-/g, '').substring(0, length).toUpperCase(); // Take the first 6 characters of the UUID
	// console.log({ ref: `${datePrefix}-${dateString}-${randomString}` });
	// Format: PREFIX-YYYYMMDD-RANDOM
	return `${datePrefix}-${dateString}-${randomString}`;
}

export const formatCurrency = (value: number) => {
	const majorUnits = value / 100

	const locale = get(userLocale) ?? 'en-US'
	const currency = get(currencyCode) ?? 'USD'

	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency,
	}).format(majorUnits)
}

export const selectCheapestShippingOption = async (shippingOptions: ShippingMethod[]) => {
	// set cheapest shipping option as default, but make sure it is not local pickup
	if (shippingOptions) {
		let index = 0
		if (PUBLIC_LOCAL_PICKUP_CODE) {
			const pickupIndex = shippingOptions.findIndex(v => v.code === PUBLIC_LOCAL_PICKUP_CODE)
			if (pickupIndex === index) index += 1
		}
		if (index === shippingOptions.length) {
			return { error: "There are no shipping options available" }
		} else {
			return { id: shippingOptions[index] }
		}
	}
}

export const selectPickupOption = async (shippingOptions: ShippingMethod[]) => {
	if (shippingOptions) {
		const pickupIndex = shippingOptions.findIndex(v => v.code === PUBLIC_LOCAL_PICKUP_CODE)
		if (pickupIndex === -1) {
			return { error: "There are no shipping options available" }
		} else {
			return { id: shippingOptions[pickupIndex] }
		}
	}
}

/**
 * Builds a tree from an array of nodes which have a parent.
 * Based on https://stackoverflow.com/a/31247960/772859, modified to preserve ordering.
 */
export function arrayToTree<T extends HasParent>(nodes: T[]): RootNode<T> | null {
	const topLevelNodes: Array<TreeNode<T>> = [];
	const mappedArr: { [id: string]: TreeNode<T> } = {};

	// First map the nodes of the array to an object -> create a hash table.
	for (const node of nodes) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		mappedArr[node.id] = { ...(node as any), children: [] };
	}

	for (const id of nodes.map((n) => n.id)) {
		if (Object.prototype.hasOwnProperty.call(mappedArr, id)) {
			const mappedElem = mappedArr[id];
			const parentId = mappedElem.parentId;
			if (!parentId) return null;
			if (!parent) {
				continue;
			}
			// If the element is not at the root level, add it to its parent array of children.
			const parentIsRoot = !mappedArr[parentId];
			if (!parentIsRoot) {
				if (mappedArr[parentId]) {
					mappedArr[parentId].children.push(mappedElem);
				} else {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					mappedArr[parentId] = { children: [mappedElem] } as any;
				}
			} else {
				topLevelNodes.push(mappedElem);
			}
		}
	}

	const rootId = topLevelNodes.length ? topLevelNodes[0].parentId : null;
	return { id: rootId ?? undefined, children: topLevelNodes };
}

export const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export function formatPrice(value: number, discount?: number) {
	let price =
		Number(value) / 100;

	if (discount)
		price = price * (discount / 100) + price;

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: DEFAULT_CURRENCY,
	}).format(price);
}

export const groupFacetValues = (
	{ search }: SearchProduct$result,
	activeFacetValueIds: string[]
): FacetWithValues[] => {
	if (!search) {
		return [];
	}
	const facetMap = new Map<string, FacetWithValues>();

	for (const {
		facetValue: { id, name, facet },
		count,
	} of search.facetValues) {
		if (count === search.totalItems) {
			continue;
		}
		const facetFromMap = facetMap.get(facet.id);
		const selected = (activeFacetValueIds || []).includes(id);
		if (facetFromMap) {
			facetFromMap.values.push({ id, name, selected });
		} else {
			facetMap.set(facet.id, {
				id: facet.id,
				name: facet.name,
				open: true,
				values: [{ id, name, selected }],
			});
		}
	}
	return Array.from(facetMap.values());
};

export const enableDisableFacetValues = (_facedValues: FacetWithValues[], ids: string[]) => {
	const facetValueIds: string[] = [];
	const facedValues = _facedValues.map((facet) => {
		facet.values = facet.values.map((value) => {
			if (ids.includes(value.id)) {
				facetValueIds.push(value.id);
				value.selected = true;
			} else {
				value.selected = false;
			}
			return value;
		});
		return facet;
	});
	return { facedValues, facetValueIds };
};

export const changeUrlParamsWithoutRefresh = (term: string, facetValueIds: string[]) => {
	const f = facetValueIds.join('-');
	return window.history.pushState(
		'',
		'',
		`${window.location.origin}${window.location.pathname}?q=${term}${f ? `&f=${f}` : ''}`
	);
};

export const cleanUpParams = (params: Record<string, string>) => {
	if ('slug' in params && params.slug[params.slug.length - 1] === '/') {
		params.slug = params.slug.slice(0, params.slug.length - 1);
	}
	return params;
};

export const isEnvVariableEnabled = (envVariable: string) =>
	import.meta.env[envVariable] === "true";

export const isShippingAddressValid = (orderAddress: ShippingAddress): boolean =>
	!!(
		!!orderAddress &&
		orderAddress.fullName &&
		orderAddress.streetLine1 &&
		orderAddress.city &&
		orderAddress.province &&
		orderAddress.postalCode &&
		orderAddress.countryCode &&
		orderAddress.phoneNumber
	);

export const isActiveCustomerValid = (activeCustomer: ActiveCustomer): boolean =>
	!!(
		!!activeCustomer &&
		activeCustomer.emailAddress &&
		activeCustomer.firstName &&
		activeCustomer.lastName
	);

export const fullNameWithTitle = ({
	title,
	firstName,
	lastName,
}: Pick<ActiveCustomer, 'title' | 'firstName' | 'lastName'>): string => {
	return [title, firstName, lastName].filter((x) => !!x).join(' ');
};

export const formatDateTime = (dateToConvert: Date) => {
	const result = new Date(dateToConvert).toISOString();
	const [date, time] = result.split('T');
	const [hour, minutes] = time.split(':');
	const orderedDate = date.split('-').reverse().join('-');
	return `${orderedDate} ${hour}:${minutes}`;
};

export const isCheckoutPage = (url: string) => url.indexOf('/checkout/') >= 0;

export const generateDocumentHead = (
	url = SITE_URL,
	title = SITE_TITLE,
	description = SITE_DESCRIPTION,
	image = SITE_IMAGE
) => {
	const OG_METATAGS = [
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: url },
		{ property: 'og:title', content: title },
		{
			property: 'og:description',
			content: description,
		},
		{
			property: 'og:image',
			content: image ? image + '?w=800&h=800&format=webp' : undefined,
		},
	];
	const TWITTER_METATAGS = [
		{ property: 'twitter:card', content: 'summary_large_image' },
		{ property: 'twitter:url', content: url },
		{ property: 'twitter:title', content: title },
		{
			property: 'twitter:description',
			content: description,
		},
		{
			property: 'twitter:image',
			content: image ? image + '?w=800&h=800&format=webp' : undefined,
		},
	];
	return { title, meta: [...OG_METATAGS, ...TWITTER_METATAGS] };
};
