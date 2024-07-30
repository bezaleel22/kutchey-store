import { graphql } from "$houdini";

graphql`
	fragment DetailedProduct on Product {
		id
		name
		description
		optionGroups{
			id
			code
			name
			options{
				id
				code
				name
			}
		}
		collections {
			id
			slug
			name
			breadcrumbs {
				id
				name
				slug
			}
		}
		facetValues {
			facet {
				id
				code
				name
			}
			id
			code
			name
		}
		featuredAsset {
			id
			preview
		}
		assets {
			id
			preview
		}
		variants {
			id
			name
			sku
			stockLevel
			currencyCode
			price
			priceWithTax
			options{
				id
				code
				name
			}
			facetValues {
				id
				name
				facet {
					id
					name
				}
			}
			featuredAsset {
				id
				preview
			}
			assets {
				id
				preview
			}
		}
	}
`;

graphql`
	query Product($slug: String, $id: ID) {
		product(slug: $slug, id: $id) {
			...DetailedProduct
		}
	}
`;

graphql`
	query Products($slug: String, $skip: Int, $take: Int) {
		search(
			input: {
			collectionSlug: $slug,
			groupByProduct: true,
			skip: $skip,
			take: $take 
			}
		) {
			totalItems
			items {
				sku
				productVariantId
				productName
				slug
				description
				productAsset {
					id
					preview
				}
				priceWithTax {
					... on SinglePrice {
						value
					}
					... on PriceRange {
						min
						max
					}
				}
				currencyCode
				collectionIds
			}
			collections{
				collection{
					id
					name
					slug
					parentId
					position
				}
			}
			facetValues{
				facetValue{
					id
					name
					code
					facet{
						id
						name
						code
					}
				}
			}
		}
	}
`

graphql`
	fragment ListedProduct on SearchResult {
		productId
		productName
		slug
		productAsset {
			id
			preview
		}
		currencyCode
		priceWithTax {
			... on PriceRange {
				min
				max
			}
			... on SinglePrice {
				value
			}
		}
	}
`;

graphql`
	query SearchProduct($input: SearchInput!) {
		search(input: $input) {
			totalItems
			items {
				...ListedProduct
			}
			facetValues {
				count
				facetValue {
					id
					name
					facet {
						id
						name
					}
				}
			}
		}
	}
`;
