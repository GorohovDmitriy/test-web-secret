import React from 'react'
import { Route, Switch } from 'react-router';
import Cart from './components/Cart/Cart';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import HomePages from './pages/HomePage/HomePages';

function App() {
	return (
		<>
			<Navbar />
			<Main>
				<Switch>
					<Route path='/' exact>
						<HomePages />
					</Route>
					<Route path='/cart' exact component={Cart} />
				</Switch>
			</Main>

		</>
	);
}

export default App;
