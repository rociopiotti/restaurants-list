import React, { useContext } from 'react';
import { DataContext } from '../../context/dataContext';
import { Controls, Card } from '..';
import './list.scss';

const List = (): JSX.Element => {
	const { isLoading, restaurants, priceRange, foodType } = useContext(DataContext) as any;
	console.log(priceRange, foodType);
	return (
		<div className="list-container">
			<Controls />
			<div className="list-wrapper">
				{isLoading() && restaurants !== undefined ? (
					<p>Loading restaurants</p>
				) : (
					<ul className="list">
						{restaurants?.map((item: any) => (
							<li className="list-item" key={item.id}>
								<Card title={item.name} princeRange="€€" address={item.address} foodType="Mexican" />
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default List;
