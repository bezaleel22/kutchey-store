import type { DataSource } from '$houdini/runtime'

export type Result<DataType> = {
	isFetching: boolean
	partial: boolean
	source?: DataSource | null
	data?: DataType | null
	error?: Error | null
}
export * from './ActiveCustomer'
export * from './ActiveCustomerAddresses'
export * from './ActiveCustomerOrders'
export * from './ActiveOrder'
export * from './AddItemToOrder'
export * from './AddPaymentToOrder'
export * from './Address'
export * from './ArderByCode'
export * from './AvailableCountries'
export * from './Collection'
export * from './Collections'
export * from './CreateCustomerAddress'
export * from './CreateCustomerAddressMutation'
export * from './DeleteCustomerAddress'
export * from './DetailedProduct'
export * from './EligiblePaymentMethods'
export * from './EligibleShippingMethods'
export * from './ErrorResult'
export * from './ListedProduct'
export * from './OrderDetail'
export * from './Product'
export * from './Products'
export * from './Promotions'
export * from './RemoveOrderLine'
export * from './RequestPasswordReset'
export * from './RequestUpdateCustomerEmail'
export * from './ResetPassword'
export * from './SearchProduct'
export * from './SetCustomerForOrder'
export * from './SetOrderShippingAddress'
export * from './SetOrderShippingMethod'
export * from './SignIn'
export * from './SignOut'
export * from './SignUp'
export * from './TransitionOrderToState'
export * from './UpdateCustomer'
export * from './UpdateCustomerAddressMutation'
export * from './UpdateCustomerEmail'
export * from './UpdateCustomerPasswordMutation'
export * from './UpdateOrderLine'
export * from './VerifyCustomerAccount'