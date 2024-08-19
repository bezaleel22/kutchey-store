import { graphql } from "$houdini";

graphql`
    query Promotions {
        promotions {
            totalItems
            items {
                id
                name
                description
                couponCode
                startsAt
                endsAt
                enabled
                usageLimit
                perCustomerUsageLimit
                conditions {
                    code
                    args{
                        name
                        value
                    }
                }
                actions{
                    code
                    args {
                        name
                        value
                    }
                }
            }
        }
    }
`;