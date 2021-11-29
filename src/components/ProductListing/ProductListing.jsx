import React from 'react'
// import styled from 'styled-components'
import {fetchProducts} from '../../redux/actions/productActions'
import {useDispatch} from 'react-redux'
import ProductComponent from '../ProductComponent/ProductComponent'

const ProductListing = () => {
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<div>
			<ProductComponent />
		</div>
	)
}

export default ProductListing
