import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Header, List, Map } from './components';
import { DataContextProveedor } from './context/dataContext';

import './App.scss';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
	return (
		<QueryClientProvider client={queryClient}>
			<DataContextProveedor>
				<main>
					<Header />
					<section>
						<Map />
						<List />
					</section>
				</main>
			</DataContextProveedor>
		</QueryClientProvider>
	);
};

export default App;
