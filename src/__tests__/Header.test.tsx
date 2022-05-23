import React from 'react';
import { screen, render } from '@testing-library/react';
import { Header } from '../components';

it('renders without crashing', () => {
	render(<Header />);
	const headerEl = screen.getByText(/Restaurants list/);

	expect(headerEl).toBeInTheDocument();
});
