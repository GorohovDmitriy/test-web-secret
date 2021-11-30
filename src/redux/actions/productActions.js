import axios from 'axios'
import { FETCH_PRODUCTS, SORT_PRODUCT_PRICE, SORT_CANON, SORT_NIKON } from '../constants/Types'

export const fetchProducts = () => async (dispatch) => {
	const response = await axios.get('https://getlens-master.stage.dev.family/api/pages/obektivy?page=1', {
		auth: {
			username: 'admin',
			password: 'Wj3g4W'
		}
	})
	dispatch({ type: FETCH_PRODUCTS, payload: response.data.products })
	console.log(response.data);

}


export const sortProductPrice = (min, max) => async (dispatch) => {
	const response = await axios.get(`https://getlens-master.stage.dev.family/api/pages/obektivy?price[min]=${min}&price[max]=${max}`, {
		auth: {
			username: 'admin',
			password: 'Wj3g4W'
		}
	})
	dispatch({ type: SORT_PRODUCT_PRICE, payload: response.data.products })
}

export const sortCanon = () => async (dispatch) => {
	const response = await axios.get(`https://getlens-master.stage.dev.family/api/pages/obektivy?brands[]=1`, {
		auth: {
			username: 'admin',
			password: 'Wj3g4W'
		}
	})
	dispatch({ type: SORT_CANON, payload: response.data.products })
}

export const sortNikon = () => async (dispatch) => {
	const response = await axios.get('https://getlens-master.stage.dev.family/api/pages/obektivy?brands[]=9', {
		auth: {
			username: 'admin',
			password: 'Wj3g4W'
		}
	})
	dispatch({ type: SORT_NIKON, payload: response.data.products })
}
