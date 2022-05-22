import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Header, List, Map } from './components';
import { DataContextProvider } from './context/dataContext';

import './App.scss';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
	return (
		<QueryClientProvider client={queryClient}>
			<DataContextProvider>
				<main>
					<Header />
					<section>
						<Map />
						<List />
					</section>
				</main>
			</DataContextProvider>
		</QueryClientProvider>
	);
};

export default App;
