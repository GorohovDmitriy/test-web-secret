import axios from 'axios'
import { FETCH_PRODUCTS } from '../constants/Types'

export const fetchProducts = () => async (dispatch) => {
	const response = await axios.get('https://getlens-master.stage.dev.family/api/pages/obektivy', {
		auth: {
			username: 'admin',
			password: 'Wj3g4W'
		}
	})
	dispatch({ type: FETCH_PRODUCTS, payload: response.data.products })
}

