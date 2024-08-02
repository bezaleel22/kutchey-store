/* eslint-disable @typescript-eslint/no-unused-expressions */
import { graphql } from "$houdini";

graphql`
	query ActiveCustomerAddresses {
		activeCustomer {
			id
			addresses {
				id
				fullName
				company
				streetLine1
				streetLine2
				city
				province
				postalCode
				country {
					code
				}
				phoneNumber
				defaultShippingAddress
				defaultBillingAddress
			}
		}
	}
`;

graphql`
	query ActiveCustomer {
		activeCustomer {
			id
			title
			firstName
			lastName
			emailAddress
			phoneNumber
		}
	}
`;

graphql`
	mutation CreateCustomerAddress($input: CreateAddressInput!) {
		createCustomerAddress(input: $input) {
			...Address
			__typename
		}
	}


`;

graphql`
	query ActiveCustomerOrders($options: OrderListOptions) {
		activeCustomer {
			id
			orders(options: $options) {
				items {
					id
					code
					state
					totalWithTax
					currencyCode
					lines {
						featuredAsset {
							preview
						}
						productVariant {
							name
						}
					}
				}
				totalItems
			}
		}
	}
`;

graphql`
	mutation UpdateCustomerPasswordMutation($currentPassword: String!, $newPassword: String!) {
		updateCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {
			... on Success {
				success
				__typename
			}
			...ErrorResult
			__typename
		}
	}
`;

graphql`
	fragment ErrorResult on ErrorResult {
		errorCode
		message
		__typename
	}
`

graphql`
	mutation DeleteCustomerAddress($id: ID!) {
		deleteCustomerAddress(id: $id) {
			success
		}
	}
`;

graphql`
	mutation UpdateCustomerAddressMutation($input: UpdateAddressInput!) {
		updateCustomerAddress(input: $input) {
			...Address
			__typename
		}
	}
`;

graphql`
	fragment Address on Address {
		id
		fullName
		company
		streetLine1
		streetLine2
		city
		province
		postalCode
		country {
			id
			code
			name
			__typename
		}
		phoneNumber
		defaultShippingAddress
		defaultBillingAddress
		__typename
	}
`

graphql`
	mutation CreateCustomerAddressMutation($input: CreateAddressInput!) {
		createCustomerAddress(input: $input) {
			...Address
			__typename
		}
	}
`;