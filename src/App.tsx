import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Header, List, Map } from './components';
import { GlobalStateProvider } from './context/GlobalState';

import './App.scss';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStateProvider>
				<main>
					<Header />
					<section>
						<Map />
						<List />
					</section>
				</main>
			</GlobalStateProvider>
		</QueryClientProvider>
	);
};

export default App;
