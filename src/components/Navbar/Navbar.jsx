import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Container} from '../Container/Container'

const Navbar = () => {
	return (
		<Header>
			<Container>
				<Wrapper>
					<Title>Getlens</Title>
					<CartPrice>
						<p>{0}</p>
						<AiOutlineShoppingCart size='22px' />
					</CartPrice>
				</Wrapper>
			</Container>
		</Header>
	)
}

export default Navbar

const Header = styled.header`
	border-bottom: 1px solid #ccc;
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
`
const Title = styled(Link).attrs({
	to: '/',
})`
	color: #000;
	text-decoration: none;
	font-size: 18px;
	font-weight: 500;
`
const CartPrice = styled(Link).attrs({
	to: '/cart',
})`
	display: flex;
	align-items: center;
	cursor: pointer;
	color: #000;

	p {
		margin-right: 0.5rem;
	}
`
