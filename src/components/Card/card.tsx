import React, { useState } from 'react';
import { Icon, Carousel } from '..';
import './card.scss';

const Card = ({ title, princeRange, address, foodType }: { [key: string]: any }): JSX.Element => {
	const [isChecked, setIsChecked] = useState(false);

	const onClick = (): void => {
		setIsChecked(!isChecked);
	};
	return (
		<article className="card">
			<Carousel>
				<img
					src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=70"
					alt="placeholder"
				/>
				<img
					src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=70"
					alt="placeholder"
				/>
				<img
					src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=70"
					alt="placeholder"
				/>
				<img
					src="https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=70"
					alt="placeholder"
				/>
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
				<Icon iconClass="faPepperHot" type="faPepperHot" />
				<p title={foodType}>{foodType}</p>
			</div>
		</article>
	);
};

export default Card;
