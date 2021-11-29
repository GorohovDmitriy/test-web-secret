import React from 'react'
import styled from 'styled-components'

const HomePages = () => {
	const [checked, setCheked] = React.useState(false)

	return (
		<HomeWrapper>
			<WrapperLeft>
				<Title>Камеры</Title>
				<TotalProduct>Товаров 143</TotalProduct>
				<Price>Цена, ₽</Price>
				<InputContainer>
					<InputMin />
					<InputMax />
				</InputContainer>
				<Brand>Бренд</Brand>
				<Checkbox>
					<BrandWrapper>
						<Canon value={checked} onChange={() => setCheked(!checked)} /> <span>Canon</span>
					</BrandWrapper>
					<BrandWrapper>
						<Nikon value={checked} onChange={() => setCheked(!checked)} /> <span>Nikon</span>
					</BrandWrapper>
				</Checkbox>
			</WrapperLeft>
			<WrapperRight>right</WrapperRight>
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
	// background-color: #ccc;
	width: 100%;

	@media (min-width: 767px) {
		width: 50%;
	}
`

const WrapperRight = styled.section`
	background-color: #eee;
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
const InputContainer = styled.div`
	display: flex;
	align-items: center;
	width: 224px;
	margin-top: 12px;
	margin-bottom: 24px;
`
const InputMin = styled.input.attrs({
	type: 'number',
	placeholder: '0',
})`
	border: 1px solid #dbdbdb;
	box-sizing: border-box;
	border-radius: 4px 0px 0px 4px;
	padding: 10px 20px;
	width: 100%;
	height: 42px;
`
const InputMax = styled.input.attrs({
	type: 'number',
	placeholder: '0',
})`
	border: 1px solid #dbdbdb;
	box-sizing: border-box;
	border-radius: 0px 4px 4px 0px;
	height: 42px;
	width: 100%;
	padding: 10px 20px;
`
const Brand = styled.span`
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
