import React, { useState } from 'react';
import { constants } from '../../utils';
import { IRestaurantsData, IResponseImages } from '../../context/models';
import { Icon, Carousel } from '..';
import './Card.scss';

const Card = ({
	id: cardId,
	name,
	priceRange,
	address,
	foodType,
	images,
}: Omit<IRestaurantsData, 'position'>): JSX.Element => {
	const [isChecked, setIsChecked] = useState(false);

	const onClick = (): void => {
		setIsChecked(!isChecked);
	};
	return (
		<article id={cardId} className={constants.CLASSNAMES.CARD.COMPONENT}>
			<Carousel>
				{images.map(({ id, img }: IResponseImages) => (
					<img key={id} src={img} alt={constants.MESSAGES.CARD.ALT} />
				))}
			</Carousel>
			<div className={constants.CLASSNAMES.CARD.TITLE_CONTAINER}>
				<h2>{name}</h2>
				<button className={constants.CLASSNAMES.CARD.ICON_BUTTON} onClick={onClick}>
					<Icon
						iconClass={
							isChecked
								? constants.CLASSNAMES.CARD.ICON_CHECKED
								: constants.CLASSNAMES.CARD.ICON_UNCHECKED
						}
						type={constants.ICON_TYPES.STAR}
					/>
				</button>
			</div>
			<p className={constants.CLASSNAMES.CARD.PRICE_RANGE} title={priceRange}>
				{priceRange}
			</p>
			<div className={constants.CLASSNAMES.CARD.ADDRESS}>
				<Icon iconClass={constants.CLASSNAMES.CARD.ICON_CLASS_LOCATION} type={constants.ICON_TYPES.LOCATION} />
				<p title={address}>{address}</p>
			</div>
			<div className={constants.CLASSNAMES.CARD.FOOD_TYPE}>
				<Icon iconClass={constants.CLASSNAMES.CARD.ICON_CLASS_FOODTYPE} type={constants.ICON_TYPES.FOODTYPE} />
				<p title={foodType}>{foodType}</p>
			</div>
		</article>
	);
};

export default Card;
