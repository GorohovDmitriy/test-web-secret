import { combineReducers } from "redux"
import { productsReducer } from './productReducers'


export const reducers = combineReducers({
	allProducts: productsReducer,
})