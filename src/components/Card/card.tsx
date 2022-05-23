import React, { useState } from 'react';
import { Icon, Carousel } from '..';
import './Card.scss';

const Card = ({ title, princeRange, address, foodType, images }: { [key: string]: any }): JSX.Element => {
	const [isChecked, setIsChecked] = useState(false);

	const onClick = (): void => {
		setIsChecked(!isChecked);
	};
	return (
		<article className="card">
			<Carousel>
				{images.map(({ id, img }: any) => (
					<img key={id} src={img} alt="placeholder" />
				))}
			</Carousel>
			<div className="title-container">
				<h2>{title}</h2>
				<button className="icon-button" onClick={onClick}>
					<Icon iconClass={isChecked ? 'faStar--state-checked' : 'faStar--state-unchecked'} type="faStar" />
				</button>
			</div>
			<p className="price-range" title={princeRange}>
				{princeRange}
			</p>
			<div className="address">
				<Icon iconClass="faLocationDot" type="faLocationDot" />
				<p title={address}>{address}</p>
			</div>
			<div className="food-type">
				<Icon iconClass="faPepperHot" type="faUtensils" />
				<p title={foodType}>{foodType}</p>
			</div>
		</article>
	);
};

export default Card;
