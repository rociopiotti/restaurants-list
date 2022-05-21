import React, { useState, useEffect } from 'react';
import './carousel.scss';

interface ICarousel {
	children: JSX.Element[];
}

const Carousel = ({ children }: ICarousel): JSX.Element => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [length, setLength] = useState(children.length);
	const [touchPosition, setTouchPosition] = useState(null as any);

	const next = (): void => {
		if (currentIndex < length - 1) setCurrentIndex((prevState) => prevState + 1);
	};

	const prev = (): void => {
		if (currentIndex > 0) setCurrentIndex((prevState) => prevState - 1);
	};

	const handleTouchStart = (e: React.TouchEvent): void => {
		const touchDown = e.touches[0].clientX;
		setTouchPosition(touchDown);
	};

	const handleTouchMove = (e: React.TouchEvent): void => {
		const touchDown = touchPosition;

		if (touchDown === null) {
			return;
		}

		const currentTouch = e.touches[0].clientX;
		const diff = touchDown - currentTouch;

		if (diff > 5) {
			next();
		}

		if (diff < -5) {
			prev();
		}

		setTouchPosition(null);
	};

	useEffect(() => {
		setLength(children.length / 2);
	}, [children]);

	return (
		<div className="carousel-container">
			<div className="carousel-wrapper">
				{currentIndex === 1 && (
					<button className="left-arrow" onClick={prev}>
						<span />
					</button>
				)}

				<div className="carousel-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
					<div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
						{children}
					</div>
				</div>
				{currentIndex === 0 && (
					<button className="right-arrow" onClick={next}>
						<span />
					</button>
				)}
			</div>
		</div>
	);
};

export default Carousel;
