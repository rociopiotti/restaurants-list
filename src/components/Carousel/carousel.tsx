import React from 'react';
import { useCarousel } from '../../hooks';
import { Icon } from '..';
import './carousel.scss';

interface ICarousel {
	children: JSX.Element[];
}

const Carousel = ({ children }: ICarousel): JSX.Element => {
	const { currentIndex, handleTouchMove, handleTouchStart, prev, next } = useCarousel(children.length);

	return (
		<div className="carousel-container">
			<div className="carousel-wrapper">
				{currentIndex === 1 && (
					<button className="left-arrow" onClick={prev}>
						<Icon iconClass="faChevronLeft" type="faChevronLeft" />
					</button>
				)}
				<div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
					<div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
						{children}
					</div>
				</div>
				{currentIndex === 0 && (
					<button className="right-arrow" onClick={next}>
						<Icon iconClass="faChevronRight" type="faChevronRight" />
					</button>
				)}
			</div>
		</div>
	);
};

export default Carousel;
