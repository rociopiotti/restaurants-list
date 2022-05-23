import React, { useEffect, useState } from 'react';

interface IUseCarousel {
	readonly currentIndex: number;
	prev(): void;
	next(): void;
}

export const useCarousel = (childrenLenght: number): IUseCarousel => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [length, setLength] = useState(childrenLenght);

	const next = (): void => {
		if (currentIndex < length - 1) setCurrentIndex((prevState) => prevState + 1);
	};

	const prev = (): void => {
		if (currentIndex > 0) setCurrentIndex((prevState) => prevState - 1);
	};

	useEffect(() => {
		setLength(childrenLenght / 2);
	}, [childrenLenght, setLength]);

	return {
		currentIndex,
		prev,
		next,
	};
};
