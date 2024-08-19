import { graphql } from "$houdini";

graphql`
	query Collections($options: CollectionListOptions) {
		collections(options: $options) {
			totalItems
			items {
				id
				name
				slug
				parent{
					name
				}
				featuredAsset{
					id
					preview
				}
				productVariants{
					totalItems
				}
			}
		}
	}
`;

graphql`
	query Collection($slug: String, $id: ID) {
		collection(slug: $slug, id: $id) {
			id
			name
			slug
			breadcrumbs {
				id
				name
				slug
			}
			productVariants {
				totalItems
				items {
					id
					sku
					name
					currencyCode
					featuredAsset {
						id
						preview
					}
					price
				}
			}
		}
	}
`;
