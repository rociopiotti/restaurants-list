import React from 'react';
import { screen, render } from '@testing-library/react';
import { Carousel } from '../components';

it('Carousel renders without crashing', () => {
	render(
		<Carousel>
			<div />
			<div />
		</Carousel>,
	);
	const carouselEl = screen.getByTestId('carousel-element');

	expect(carouselEl).toBeInTheDocument();
});
