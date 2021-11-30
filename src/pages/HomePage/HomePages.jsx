import React from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import ProductListing from '../../components/ProductListing/ProductListing'
import {
	fetchProducts,
	sortCanon,
	sortNikon,
	sortProductPrice,
} from '../../redux/actions/productActions'

const HomePages = () => {
	const products = useSelector((state) => state.allProducts.products)
	const dispatch = useDispatch()
	const [minValue, setMinValue] = React.useState('')
	const [maxValue, setMaxValue] = React.useState('')
	const [checkedCanon, setChekedCanon] = React.useState(false)
	const [checkedNikon, setChekedNikon] = React.useState(false)

	const getSortPrice = (min, max) => {
		dispatch(sortProductPrice(min, max))
	}

	const getCanonProducts = (e) => {
		if (e.target.checked === true) {
			dispatch(sortCanon())
		} else {
			dispatch(fetchProducts())
		}
	}

	const getNikonProduct = (e) => {
		if (e.target.checked === true) {
			dispatch(sortNikon())
		} else {
			dispatch(fetchProducts())
		}
	}

	return (
		<HomeWrapper>
			<WrapperLeft>
				<Title>Обективы</Title>
				<TotalProduct>Товаров {products.length}</TotalProduct>
				<Price>Цена, ₽</Price>
				<InputContainer>
					<InputMin value={minValue} onChange={(e) => setMinValue(e.target.value)} />
					<InputMax value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />
				</InputContainer>
				<Button onClick={() => getSortPrice(minValue, maxValue)}>Показать товары</Button>
				<Brand>Бренд</Brand>
				<Checkbox>
					<BrandWrapper>
						<Canon value={checkedCanon} onChange={getCanonProducts()} />
						<span>Canon</span>
					</BrandWrapper>
					<BrandWrapper>
						<Nikon value={checkedNikon} onChange={getNikonProduct()} />
						<span>Nikon</span>
					</BrandWrapper>
				</Checkbox>
			</WrapperLeft>
			<WrapperRight>
				<ProductListing />
			</WrapperRight>
		</HomeWrapper>
	)
}

export default HomePages

const HomeWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (min-width: 767px) {
		flex-direction: row;
	}
`

const WrapperLeft = styled.section`
	width: 100%;

	@media (min-width: 767px) {
		width: 50%;
	}
`

const WrapperRight = styled.section`
	width: 100%;
`
const TotalProduct = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 140%;
	margin-bottom: 18px;
	color: #898989;
`
const Title = styled.h3`
	font-style: normal;
	font-weight: bold;
	font-size: 26px;
	padding-bottom: 24px;
	line-height: 140%;
	color: #1b1b1b;
`
const Price = styled.div`
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 140%;
	color: #1b1b1b;
`
const InputContainer = styled.form`
	display: flex;
	align-items: center;
	width: 224px;
	margin-top: 12px;
	margin-bottom: 24px;
`
const InputMin = styled.input.attrs({
	type: 'text',
	placeholder: '0',
})`
	border: 1px solid #dbdbdb;
	box-sizing: border-box;
	border-radius: 4px 0px 0px 4px;
	padding: 10px 20px;
	width: 100%;
	cursor: pointer;

	height: 42px;
`
const InputMax = styled.input.attrs({
	type: 'text',
	placeholder: '0',
})`
	border: 1px solid #dbdbdb;
	box-sizing: border-box;
	border-radius: 0px 4px 4px 0px;
	height: 42px;
	width: 100%;
	cursor: pointer;

	padding: 10px 20px;
`
const Button = styled.button`
	outline: none;
	border: 1px solid #fff;
	background-color: #44c377;
	border-radius: 4px;
	color: #fff;
	padding: 15px;
	margin-bottom: 1rem;
	cursor: pointer;
	opacity: 1;
	transition: opacity 0.25s ease-in-out;

	&:hover {
		opacity: 0.9;
	}
	&:active {
		opacity: 0.7;
	}
`
const Brand = styled.div`
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 140%;
	color: #1b1b1b;
`
const Checkbox = styled.div`
	display: flex;
	flex-direction: column;
`
const BrandWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 12px;
`
const Canon = styled.input.attrs({type: 'checkbox'})`
	border: 1px solid #d0d0d0;
	box-sizing: border-box;
	border-radius: 4px;
	margin-right: 9px;
	width: 18px;
	cursor: pointer;
	height: 18px;

	span {
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 140%;
		color: #1b1b1b;
	}
`

const Nikon = styled.input.attrs({type: 'checkbox'})`
	border: 1px solid #d0d0d0;
	box-sizing: border-box;
	border-radius: 4px;
	margin-right: 9px;
	width: 18px;
	cursor: pointer;
	height: 18px;

	span {
		margin-left: 9px;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 140%;
		color: #1b1b1b;
	}
`
