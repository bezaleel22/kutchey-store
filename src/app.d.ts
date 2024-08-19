// See https://kit.svelte.dev/docs/types#app

import type { ActiveCustomer } from "$lib/types"
import type { TypedRequestInit, TypedResponse } from "$lib/fetch"

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code?: string
		}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Session {
			token: string // vendure auth token
		}

		type EventElements = Event & {
			currentTarget: EventTarget & HTMLInputElement;
		};

		interface Locals {
			config: SalunaConfig
			sid: string // session id
			ssig: string // session signature
			token: string // vendure auth token
			user?: ActiveCustomer
			cart: OrderDetail$data | null
		}
	}
	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:clickOutside'?: CompositionEventHandler<T>
		}
	}

	declare function fetch<ResponseType = unknown>(
		input: RequestInfo | URL, init?: TypedRequestInit
	): Promise<TypedResponse<ResponseType>>;

	declare module "@paystack/inline-js";
}
export { };