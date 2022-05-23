import React from 'react';
import { useCarousel } from '../../hooks';
import { constants } from '../../utils';
import { Icon } from '..';
import './Carousel.scss';

interface ICarousel {
	children: JSX.Element[];
}

const Carousel = ({ children }: ICarousel): JSX.Element => {
	const { currentIndex, prev, next } = useCarousel(children.length);

	return (
		<div className={constants.CLASSNAMES.CAROUSEL.CONTAINER}>
			<div className={constants.CLASSNAMES.CAROUSEL.WRAPPER}>
				{currentIndex === 1 && (
					<button className={constants.CLASSNAMES.CAROUSEL.LEFT_ARROW} onClick={prev}>
						<Icon
							iconClass={constants.CLASSNAMES.CAROUSEL.CHEVRON_LEFT}
							type={constants.ICON_TYPES.CHEVRON_LEFT}
						/>
					</button>
				)}
				<div className={constants.CLASSNAMES.CAROUSEL.CONTENT_WRAPPER}>
					<div
						className={constants.CLASSNAMES.CAROUSEL.CONTENT}
						style={{ transform: `${constants.CLASSNAMES.CAROUSEL.TRANSALATE_X}${currentIndex * 50}%)` }}
						data-testid={constants.TEST_ID.CAROUSEL.ELEMENT}
					>
						{children}
					</div>
				</div>
				{currentIndex === 0 && (
					<button className={constants.CLASSNAMES.CAROUSEL.RIGHT_ARROW} onClick={next}>
						<Icon
							iconClass={constants.CLASSNAMES.CAROUSEL.CHEVRON_RIGHT}
							type={constants.ICON_TYPES.CHEVRON_RIGHT}
						/>
					</button>
				)}
			</div>
		</div>
	);
};

export default Carousel;
