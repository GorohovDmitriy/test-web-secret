import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = (props) => (
	<ContentLoader
		speed={1}
		width={250}
		height={427}
		viewBox='0 0 250 427'
		backgroundColor='#e0e0e0'
		foregroundColor='#e8e8e8'
		{...props}
	>
		<rect x='1' y='6' rx='4' ry='4' width='245' height='242' />
		<rect x='4' y='275' rx='7' ry='7' width='242' height='40' />
		<rect x='5' y='338' rx='10' ry='10' width='92' height='23' />
		<rect x='8' y='378' rx='3' ry='3' width='91' height='40' />
		<circle cx='214' cy='397' r='23' />
	</ContentLoader>
)

export default Loader
