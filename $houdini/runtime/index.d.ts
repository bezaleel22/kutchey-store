import { RequestPasswordResetStore } from "../plugins/houdini-svelte/stores/RequestPasswordReset";
import { ResetPasswordStore } from "../plugins/houdini-svelte/stores/ResetPassword";
import { UpdateCustomerEmailStore } from "../plugins/houdini-svelte/stores/UpdateCustomerEmail";
import { RequestUpdateCustomerEmailStore } from "../plugins/houdini-svelte/stores/RequestUpdateCustomerEmail";
import { UpdateCustomerStore } from "../plugins/houdini-svelte/stores/UpdateCustomer";
import { VerifyCustomerAccountStore } from "../plugins/houdini-svelte/stores/VerifyCustomerAccount";
import { SignUpStore } from "../plugins/houdini-svelte/stores/SignUp";
import { SignOutStore } from "../plugins/houdini-svelte/stores/SignOut";
import { SignInStore } from "../plugins/houdini-svelte/stores/SignIn";
import { CreateCustomerAddressMutationStore } from "../plugins/houdini-svelte/stores/CreateCustomerAddressMutation";
import { AddressStore } from "../plugins/houdini-svelte/stores/Address";
import { UpdateCustomerAddressMutationStore } from "../plugins/houdini-svelte/stores/UpdateCustomerAddressMutation";
import { DeleteCustomerAddressStore } from "../plugins/houdini-svelte/stores/DeleteCustomerAddress";
import { ErrorResultStore } from "../plugins/houdini-svelte/stores/ErrorResult";
import { UpdateCustomerPasswordMutationStore } from "../plugins/houdini-svelte/stores/UpdateCustomerPasswordMutation";
import { ActiveCustomerOrdersStore } from "../plugins/houdini-svelte/stores/ActiveCustomerOrders";
import { CreateCustomerAddressStore } from "../plugins/houdini-svelte/stores/CreateCustomerAddress";
import { ActiveCustomerStore } from "../plugins/houdini-svelte/stores/ActiveCustomer";
import { ActiveCustomerAddressesStore } from "../plugins/houdini-svelte/stores/ActiveCustomerAddresses";
import { PromotionsStore } from "../plugins/houdini-svelte/stores/Promotions";
import { CollectionStore } from "../plugins/houdini-svelte/stores/Collection";
import { CollectionsStore } from "../plugins/houdini-svelte/stores/Collections";
import { SearchProductStore } from "../plugins/houdini-svelte/stores/SearchProduct";
import { ListedProductStore } from "../plugins/houdini-svelte/stores/ListedProduct";
import { ProductsStore } from "../plugins/houdini-svelte/stores/Products";
import { ProductStore } from "../plugins/houdini-svelte/stores/Product";
import { DetailedProductStore } from "../plugins/houdini-svelte/stores/DetailedProduct";
import { ArderByCodeStore } from "../plugins/houdini-svelte/stores/ArderByCode";
import { ActiveOrderStore } from "../plugins/houdini-svelte/stores/ActiveOrder";
import { RemoveOrderLineStore } from "../plugins/houdini-svelte/stores/RemoveOrderLine";
import { UpdateOrderLineStore } from "../plugins/houdini-svelte/stores/UpdateOrderLine";
import { OrderDetailStore } from "../plugins/houdini-svelte/stores/OrderDetail";
import { SetOrderShippingMethodStore } from "../plugins/houdini-svelte/stores/SetOrderShippingMethod";
import { AddItemToOrderStore } from "../plugins/houdini-svelte/stores/AddItemToOrder";
import { SetCustomerForOrderStore } from "../plugins/houdini-svelte/stores/SetCustomerForOrder";
import { SetOrderShippingAddressStore } from "../plugins/houdini-svelte/stores/SetOrderShippingAddress";
import { EligiblePaymentMethodsStore } from "../plugins/houdini-svelte/stores/EligiblePaymentMethods";
import { TransitionOrderToStateStore } from "../plugins/houdini-svelte/stores/TransitionOrderToState";
import { AddPaymentToOrderStore } from "../plugins/houdini-svelte/stores/AddPaymentToOrder";
import { EligibleShippingMethodsStore } from "../plugins/houdini-svelte/stores/EligibleShippingMethods";
import { AvailableCountriesStore } from "../plugins/houdini-svelte/stores/AvailableCountries";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "\n\tmutation RequestPasswordReset($emailAddress: String!) {\n\t\trequestPasswordReset(emailAddress: $emailAddress) {\n\t\t\t__typename\n\t\t\t... on Success {\n\t\t\t\tsuccess\n\t\t\t}\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): RequestPasswordResetStore;

export function graphql(
    str: "\n\tmutation ResetPassword($token: String!, $password: String!) {\n\t\tresetPassword(token: $token, password: $password) {\n\t\t\t__typename\n\t\t\t... on CurrentUser {\n\t\t\t\tid\n\t\t\t\tidentifier\n\t\t\t}\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): ResetPasswordStore;

export function graphql(
    str: "\n\tmutation UpdateCustomerEmail($token: String!) {\n\t\tupdateCustomerEmailAddress(token: $token) {\n\t\t\t__typename\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): UpdateCustomerEmailStore;

export function graphql(
    str: "\n\tmutation RequestUpdateCustomerEmail($password: String!, $newEmailAddress: String!) {\n\t\trequestUpdateCustomerEmailAddress(password: $password, newEmailAddress: $newEmailAddress) {\n\t\t\t__typename\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): RequestUpdateCustomerEmailStore;

export function graphql(
    str: "\n\tmutation UpdateCustomer($input: UpdateCustomerInput!) {\n\t\tupdateCustomer(input: $input) {\n\t\t\t__typename\n\t\t}\n\t}\n"
): UpdateCustomerStore;

export function graphql(
    str: "\n\tmutation VerifyCustomerAccount($token: String!, $password: String) {\n\t\tverifyCustomerAccount(token: $token, password: $password) {\n\t\t\t__typename\n\t\t\t... on CurrentUser {\n\t\t\t\tid\n\t\t\t\tidentifier\n\t\t\t}\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): VerifyCustomerAccountStore;

export function graphql(
    str: "\n\tmutation SignUp($input: RegisterCustomerInput!) {\n\t\tregisterCustomerAccount(input: $input) {\n\t\t\t__typename\n\t\t\t... on Success {\n\t\t\t\tsuccess\n\t\t\t}\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): SignUpStore;

export function graphql(str: "\n\tmutation SignOut {\n\t\tlogout {\n\t\t\tsuccess\n\t\t}\n\t}\n"): SignOutStore;

export function graphql(
    str: "\n\tmutation SignIn($email: String!, $password: String!, $rememberMe: Boolean) {\n\t\tlogin(username: $email, password: $password, rememberMe: $rememberMe) {\n\t\t\t__typename\n\t\t\t... on CurrentUser {\n\t\t\t\tid\n\t\t\t\tidentifier\n\t\t\t}\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): SignInStore;

export function graphql(
    str: "\n\tmutation CreateCustomerAddressMutation($input: CreateAddressInput!) {\n\t\tcreateCustomerAddress(input: $input) {\n\t\t\t...Address\n\t\t\t__typename\n\t\t}\n\t}\n"
): CreateCustomerAddressMutationStore;

export function graphql(
    str: "\n\tfragment Address on Address {\n\t\tid\n\t\tfullName\n\t\tcompany\n\t\tstreetLine1\n\t\tstreetLine2\n\t\tcity\n\t\tprovince\n\t\tpostalCode\n\t\tcountry {\n\t\t\tid\n\t\t\tcode\n\t\t\tname\n\t\t\t__typename\n\t\t}\n\t\tphoneNumber\n\t\tdefaultShippingAddress\n\t\tdefaultBillingAddress\n\t\t__typename\n\t}\n"
): AddressStore;

export function graphql(
    str: "\n\tmutation UpdateCustomerAddressMutation($input: UpdateAddressInput!) {\n\t\tupdateCustomerAddress(input: $input) {\n\t\t\t...Address\n\t\t\t__typename\n\t\t}\n\t}\n"
): UpdateCustomerAddressMutationStore;

export function graphql(
    str: "\n\tmutation DeleteCustomerAddress($id: ID!) {\n\t\tdeleteCustomerAddress(id: $id) {\n\t\t\tsuccess\n\t\t}\n\t}\n"
): DeleteCustomerAddressStore;

export function graphql(
    str: "\n\tfragment ErrorResult on ErrorResult {\n\t\terrorCode\n\t\tmessage\n\t\t__typename\n\t}\n"
): ErrorResultStore;

export function graphql(
    str: "\n\tmutation UpdateCustomerPasswordMutation($currentPassword: String!, $newPassword: String!) {\n\t\tupdateCustomerPassword(currentPassword: $currentPassword, newPassword: $newPassword) {\n\t\t\t... on Success {\n\t\t\t\tsuccess\n\t\t\t\t__typename\n\t\t\t}\n\t\t\t...ErrorResult\n\t\t\t__typename\n\t\t}\n\t}\n"
): UpdateCustomerPasswordMutationStore;

export function graphql(
    str: "\n\tquery ActiveCustomerOrders($options: OrderListOptions) {\n\t\tactiveCustomer {\n\t\t\tid\n\t\t\torders(options: $options) {\n\t\t\t\titems {\n\t\t\t\t\tid\n\t\t\t\t\tcode\n\t\t\t\t\tstate\n\t\t\t\t\ttotalWithTax\n\t\t\t\t\tcurrencyCode\n\t\t\t\t\tlines {\n\t\t\t\t\t\tfeaturedAsset {\n\t\t\t\t\t\t\tpreview\n\t\t\t\t\t\t}\n\t\t\t\t\t\tproductVariant {\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttotalItems\n\t\t\t}\n\t\t}\n\t}\n"
): ActiveCustomerOrdersStore;

export function graphql(
    str: "\n\tmutation CreateCustomerAddress($input: CreateAddressInput!) {\n\t\tcreateCustomerAddress(input: $input) {\n\t\t\t...Address\n\t\t\t__typename\n\t\t}\n\t}\n\n\n"
): CreateCustomerAddressStore;

export function graphql(
    str: "\n\tquery ActiveCustomer {\n\t\tactiveCustomer {\n\t\t\tid\n\t\t\ttitle\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temailAddress\n\t\t\tphoneNumber\n\t\t}\n\t}\n"
): ActiveCustomerStore;

export function graphql(
    str: "\n\tquery ActiveCustomerAddresses {\n\t\tactiveCustomer {\n\t\t\tid\n\t\t\taddresses {\n\t\t\t\tid\n\t\t\t\tfullName\n\t\t\t\tcompany\n\t\t\t\tstreetLine1\n\t\t\t\tstreetLine2\n\t\t\t\tcity\n\t\t\t\tprovince\n\t\t\t\tpostalCode\n\t\t\t\tcountry {\n\t\t\t\t\tcode\n\t\t\t\t}\n\t\t\t\tphoneNumber\n\t\t\t\tdefaultShippingAddress\n\t\t\t\tdefaultBillingAddress\n\t\t\t}\n\t\t}\n\t}\n"
): ActiveCustomerAddressesStore;

export function graphql(
    str: "\n    query Promotions {\n        promotions {\n            totalItems\n            items {\n                id\n                name\n                description\n                couponCode\n                startsAt\n                endsAt\n                enabled\n                usageLimit\n                perCustomerUsageLimit\n                conditions {\n                    code\n                    args{\n                        name\n                        value\n                    }\n                }\n                actions{\n                    code\n                    args {\n                        name\n                        value\n                    }\n                }\n            }\n        }\n    }\n"
): PromotionsStore;

export function graphql(
    str: "\n\tquery Collection($slug: String, $id: ID) {\n\t\tcollection(slug: $slug, id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\tslug\n\t\t\tbreadcrumbs {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t\tproductVariants {\n\t\t\t\ttotalItems\n\t\t\t\titems {\n\t\t\t\t\tid\n\t\t\t\t\tsku\n\t\t\t\t\tname\n\t\t\t\t\tcurrencyCode\n\t\t\t\t\tfeaturedAsset {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tpreview\n\t\t\t\t\t}\n\t\t\t\t\tprice\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"
): CollectionStore;

export function graphql(
    str: "\n\tquery Collections($options: CollectionListOptions) {\n\t\tcollections(options: $options) {\n\t\t\ttotalItems\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t\tparent{\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\tfeaturedAsset{\n\t\t\t\t\tid\n\t\t\t\t\tpreview\n\t\t\t\t}\n\t\t\t\tproductVariants{\n\t\t\t\t\ttotalItems\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"
): CollectionsStore;

export function graphql(
    str: "\n\tquery SearchProduct($input: SearchInput!) {\n\t\tsearch(input: $input) {\n\t\t\ttotalItems\n\t\t\titems {\n\t\t\t\t...ListedProduct\n\t\t\t}\n\t\t\tfacetValues {\n\t\t\t\tcount\n\t\t\t\tfacetValue {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tfacet {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"
): SearchProductStore;

export function graphql(
    str: "\n\tfragment ListedProduct on SearchResult {\n\t\tproductId\n\t\tproductName\n\t\tslug\n\t\tproductAsset {\n\t\t\tid\n\t\t\tpreview\n\t\t}\n\t\tcurrencyCode\n\t\tpriceWithTax {\n\t\t\t... on PriceRange {\n\t\t\t\tmin\n\t\t\t\tmax\n\t\t\t}\n\t\t\t... on SinglePrice {\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n"
): ListedProductStore;

export function graphql(
    str: "\n\tquery Products($slug: String, $skip: Int, $take: Int) {\n\t\tsearch(\n\t\t\tinput: {\n\t\t\tcollectionSlug: $slug,\n\t\t\tgroupByProduct: true,\n\t\t\tskip: $skip,\n\t\t\ttake: $take \n\t\t\t}\n\t\t) {\n\t\t\ttotalItems\n\t\t\titems {\n\t\t\t\tsku\n\t\t\t\tproductVariantId\n\t\t\t\tproductName\n\t\t\t\tslug\n\t\t\t\tdescription\n\t\t\t\tproductAsset {\n\t\t\t\t\tid\n\t\t\t\t\tpreview\n\t\t\t\t}\n\t\t\t\tpriceWithTax {\n\t\t\t\t\t... on SinglePrice {\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\t... on PriceRange {\n\t\t\t\t\t\tmin\n\t\t\t\t\t\tmax\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcurrencyCode\n\t\t\t\tcollectionIds\n\t\t\t}\n\t\t\tcollections{\n\t\t\t\tcollection{\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tslug\n\t\t\t\t\tparentId\n\t\t\t\t\tposition\n\t\t\t\t}\n\t\t\t}\n\t\t\tfacetValues{\n\t\t\t\tfacetValue{\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tcode\n\t\t\t\t\tfacet{\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tcode\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"
): ProductsStore;

export function graphql(
    str: "\n\tquery Product($slug: String, $id: ID) {\n\t\tproduct(slug: $slug, id: $id) {\n\t\t\t...DetailedProduct\n\t\t}\n\t}\n"
): ProductStore;

export function graphql(
    str: "\n\tfragment DetailedProduct on Product {\n\t\tid\n\t\tname\n\t\tdescription\n\t\toptionGroups{\n\t\t\tid\n\t\t\tcode\n\t\t\tname\n\t\t\toptions{\n\t\t\t\tid\n\t\t\t\tcode\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t\tcollections {\n\t\t\tid\n\t\t\tslug\n\t\t\tname\n\t\t\tbreadcrumbs {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t}\n\t\tfacetValues {\n\t\t\tfacet {\n\t\t\t\tid\n\t\t\t\tcode\n\t\t\t\tname\n\t\t\t}\n\t\t\tid\n\t\t\tcode\n\t\t\tname\n\t\t}\n\t\tfeaturedAsset {\n\t\t\tid\n\t\t\tpreview\n\t\t}\n\t\tassets {\n\t\t\tid\n\t\t\tpreview\n\t\t}\n\t\tvariants {\n\t\t\tid\n\t\t\tname\n\t\t\tsku\n\t\t\tstockLevel\n\t\t\tcurrencyCode\n\t\t\tprice\n\t\t\tpriceWithTax\n\t\t\toptions{\n\t\t\t\tid\n\t\t\t\tcode\n\t\t\t\tname\n\t\t\t}\n\t\t\tfacetValues {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tfacet {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t\tfeaturedAsset {\n\t\t\t\tid\n\t\t\t\tpreview\n\t\t\t}\n\t\t\tassets {\n\t\t\t\tid\n\t\t\t\tpreview\n\t\t\t}\n\t\t}\n\t}\n"
): DetailedProductStore;

export function graphql(
    str: "\n\tquery ArderByCode($code: String!) {\n\t\torderByCode(code: $code) {\n\t\t\t...OrderDetail\n\t\t}\n\t}\n"
): ArderByCodeStore;

export function graphql(
    str: "\n\tquery ActiveOrder {\n\t\tactiveOrder {\n\t\t\t...OrderDetail\n\t\t}\n\t}\n"
): ActiveOrderStore;

export function graphql(
    str: "\n\tmutation RemoveOrderLine($orderLineId: ID!) {\n\t\tremoveOrderLine(orderLineId: $orderLineId) {\n\t\t\t...OrderDetail\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): RemoveOrderLineStore;

export function graphql(
    str: "\n\tmutation UpdateOrderLine($orderLineId: ID!, $quantity: Int!) {\n\t\tadjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {\n\t\t\t...OrderDetail\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): UpdateOrderLineStore;

export function graphql(
    str: "\n\tfragment OrderDetail on Order {\n\t\t__typename\n\t\tid\n\t\tcode\n\t\tactive\n\t\tcreatedAt\n\t\tstate\n\t\tcurrencyCode\n\t\ttotalQuantity\n\t\tsubTotal\n\t\tsubTotalWithTax\n\t\ttaxSummary {\n\t\t\tdescription\n\t\t\ttaxRate\n\t\t\ttaxTotal\n\t\t}\n\t\tshippingWithTax\n\t\ttotalWithTax\n\t\tcustomer {\n\t\t\tid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temailAddress\n\t\t}\n\t\tshippingAddress {\n\t\t\tfullName\n\t\t\tstreetLine1\n\t\t\tstreetLine2\n\t\t\tcompany\n\t\t\tcity\n\t\t\tprovince\n\t\t\tpostalCode\n\t\t\tcountryCode\n\t\t\tphoneNumber\n\t\t}\n\t\tshippingLines {\n\t\t\tshippingMethod {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tpriceWithTax\n\t\t}\n\t\tlines {\n\t\t\tid\n\t\t\tunitPriceWithTax\n\t\t\tlinePriceWithTax\n\t\t\tquantity\n\t\t\tfeaturedAsset {\n\t\t\t\tid\n\t\t\t\tpreview\n\t\t\t}\n\t\t\tproductVariant {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tprice\n\t\t\t\tcurrencyCode\n\t\t\t\tproduct {\n\t\t\t\t\tid\n\t\t\t\t\tslug\n\t\t\t\t\tdescription\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"
): OrderDetailStore;

export function graphql(
    str: "\n\tmutation SetOrderShippingMethod($shippingMethodId: [ID!]!) {\n\t\tsetOrderShippingMethod(shippingMethodId: $shippingMethodId) {\n\t\t\t...OrderDetail\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): SetOrderShippingMethodStore;

export function graphql(
    str: "\n\tmutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {\n\t\taddItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {\n\t\t\t...OrderDetail\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): AddItemToOrderStore;

export function graphql(
    str: "\n\tmutation SetCustomerForOrder($input: CreateCustomerInput!) {\n\t\tsetCustomerForOrder(input: $input) {\n\t\t\t...OrderDetail\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): SetCustomerForOrderStore;

export function graphql(
    str: "\n\tmutation SetOrderShippingAddress($input: CreateAddressInput!) {\n\t\tsetOrderShippingAddress(input: $input) {\n\t\t\t...OrderDetail\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): SetOrderShippingAddressStore;

export function graphql(
    str: "\n\tquery EligiblePaymentMethods {\n\t\teligiblePaymentMethods {\n\t\t\tid\n\t\t\tcode\n\t\t\tname\n\t\t\tdescription\n\t\t\teligibilityMessage\n\t\t\tisEligible\n\t\t}\n\t}\n"
): EligiblePaymentMethodsStore;

export function graphql(
    str: "\n\tmutation TransitionOrderToState($state: String!) {\n\t\ttransitionOrderToState(state: $state) {\n\t\t\t...OrderDetail\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): TransitionOrderToStateStore;

export function graphql(
    str: "\n\tmutation AddPaymentToOrder($input: PaymentInput!) {\n\t\taddPaymentToOrder(input: $input) {\n\t\t\t...OrderDetail\n\t\t\t... on ErrorResult {\n\t\t\t\terrorCode\n\t\t\t\tmessage\n\t\t\t}\n\t\t}\n\t}\n"
): AddPaymentToOrderStore;

export function graphql(
    str: "\n\tquery EligibleShippingMethods {\n\t\teligibleShippingMethods {\n\t\t\tid\n\t\t\tname\n\t\t\tdescription\n\t\t\tmetadata\n\t\t\tprice\n\t\t\tpriceWithTax\n\t\t}\n\t}\n"
): EligibleShippingMethodsStore;

export function graphql(
    str: "\n\tquery AvailableCountries {\n\t\tavailableCountries {\n\t\t\tid\n\t\t\tname\n\t\t\tcode\n\t\t}\n\t}\n"
): AvailableCountriesStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;