import React from 'react'
import styled from 'styled-components'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {useSelector} from 'react-redux'

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products)

	console.log(products)

	return (
		<Wrapper>
			{products.length === 0
				? 'Loading...'
				: products.map((item) => {
						const {id, title, price, is_new, image} = item
						return (
							<Container key={id}>
								<Image src={image.mobile.x1} alt={title} />
								<Content>
									<Title>{title}</Title>
									<ContentPrice>
										<Price>{price} ₽</Price>
										{is_new ? <New>Новый</New> : null}
									</ContentPrice>
									<ContentButton>
										<Button>
											<Text>В корзину</Text>
										</Button>
										<Favorite>
											<MdOutlineFavoriteBorder size='24' />
										</Favorite>
									</ContentButton>
								</Content>
							</Container>
						)
				  })}
		</Wrapper>
	)
}

export default ProductComponent

const Wrapper = styled.div`
	display: grid;
	gap: 2rem;

	@media (min-width: 765px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.5rem;
	}
`
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-derection: column;
	gap: 1rem;
	border-bottom: 1px solid #e6e6e6;

	@media (min-width: 765px) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		background: #ffffff;
		border: 1px solid #e6e6e6;
		box-sizing: border-box;
		border-radius: 4px;
	}
`
const Image = styled.img`
	width: 124px;
	height: 124px;
	border-radius: 4px;

	@media (min-width: 765px) {
		width: 242px;
		height: 242px;
		border-radius: 4px 4px 0px 0px;
	}
`
const Title = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 140%;
	color: #1b1b1b;
	margin-bottom: 5px;

	@media (min-width: 765px) {
		width: 200px;
		padding-left: 16px;
		margin-bottom: 30px;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 140%;
		color: #1b1b1b;
	}
`
const Content = styled.div`
	margin-bottom: 20px;

	@media (min-width: 765px) {
		margin-bottom: 16px;
		width: 100%;
	}
`
const ContentPrice = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;

	@media (min-width: 765px) {
		padding-left: 16px;
		margin-bottom: 18px;
	}
`

const Price = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 140%;
	color: #1b1b1b;
`
const New = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 11px;
	line-height: 140%;
	text-align: right;
	color: #1b1b1b;

	@media (min-width: 765px) {
		display: none;
	}
`
const ContentButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 765px) {
		width: 100%;
		padding-left: 16px;
	}
`
const Button = styled.button`
	border: 1px solid #dbdbdb;
	box-sizing: border-box;
	background-color: #fff;
	border-radius: 8px;
	padding: 10px;
	cursor: pointer;

	&:hover {
		background-color: #dbdbdb;
	}
	&:active {
		background-color: #fff;
	}
`
const Favorite = styled.div`
	margin-right: 16px;
`
const Text = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 140%;
	color: #1b1b1b;
`
