import React, { useEffect, useState } from 'react';

// TODO TYPE CUSTOM HOOK
export const useCarousel = (childrenLenght: number): any => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [length, setLength] = useState(childrenLenght);
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
		setLength(childrenLenght / (childrenLenght / 2));
	}, [childrenLenght, setLength]);

	return {
		currentIndex,
		prev,
		next,
		handleTouchMove,
		handleTouchStart,
	};
};
