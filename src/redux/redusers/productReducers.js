import { FETCH_PRODUCTS, SORT_CANON, SORT_NIKON, SORT_PRODUCT_PRICE } from '../constants/Types'

const initialState = {
	products: [],
}

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return {
				...state,
				products: action.payload,
			}
		case SORT_PRODUCT_PRICE:
			return {
				...state,
				products: action.payload
			}
		case SORT_CANON:
			return {
				...state,
				products: action.payload
			}
		case SORT_NIKON:
			return {
				...state,
				products: action.payload
			}
		default:
			return state
	}
}

