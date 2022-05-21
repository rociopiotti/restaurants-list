import React from 'react';
import { Icon, Carousel } from '..';
import './card.scss';

const Card = ({ title, princeRange, address, foodType }: { [key: string]: any }): JSX.Element => {
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
			<div>
				<h2>{title}</h2>
				<button className="icon-button">
					<Icon className="faStar" type="faStar" />
				</button>
			</div>
			<p>{princeRange}</p>
			<p>{address}</p>
			<p>{foodType}</p>
		</article>
	);
};

export default Card;
