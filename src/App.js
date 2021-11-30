import React from 'react'
import { Route, Switch } from 'react-router';
import Main from './components/Main/Main';
import HomePages from './pages/HomePage/HomePages';

function App() {
	return (
		<>
			<Main>
				<Switch>
					<Route path='/' exact>
						<HomePages />
					</Route>
				</Switch>
			</Main>

		</>
	);
}

export default App;
