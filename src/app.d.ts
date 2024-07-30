// See https://kit.svelte.dev/docs/types#app

import type { OrderDetail } from "$houdini"
import type { ActiveCustomer, ActiveOrder } from "$lib/types"

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
			// cookies: Cookies
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
}

export { };