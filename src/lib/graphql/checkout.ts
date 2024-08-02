/* eslint-disable @typescript-eslint/no-unused-expressions */
import { graphql } from "$houdini";

graphql`
	query AvailableCountries {
		availableCountries {
			id
			name
			code
		}
	}
`;

graphql`
	query EligibleShippingMethods {
		eligibleShippingMethods {
			id
			name
			description
			metadata
			price
			priceWithTax
		}
	}
`;

graphql`
	mutation AddPaymentToOrder($input: PaymentInput!) {
		addPaymentToOrder(input: $input) {
			...OrderDetail
			... on ErrorResult {
				errorCode
				message
			}
		}
	}
`;

graphql`
	mutation TransitionOrderToState($state: String!) {
		transitionOrderToState(state: $state) {
			...OrderDetail
			... on ErrorResult {
				errorCode
				message
			}
		}
	}
`;

graphql`
	query EligiblePaymentMethods {
		eligiblePaymentMethods {
			id
			code
			name
			description
			eligibilityMessage
			isEligible
		}
	}
`;

// graphql`
// 	mutation createStripePaymentIntent {
// 		createStripePaymentIntent
// 	}
// `;

// graphql`
// 	query generateBraintreeClientToken($orderId: ID!, $includeCustomerId: Boolean!) {
// 		generateBraintreeClientToken(orderId: $orderId, includeCustomerId: $includeCustomerId)
// 	}
// `;
