import React from 'react';
import './App.scss';
import { Header, List, Map } from './components';

const App = (): JSX.Element => {
	return (
		<main>
			<Header />
			<section>
				<Map />
				<List />
			</section>
		</main>
	);
};

export default App;
