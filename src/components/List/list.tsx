import React, { useState, useEffect, useContext, useCallback } from 'react';
import { DataContext } from '../../context/dataContext';
import { Controls, Card } from '..';
import './list.scss';

const List = (): JSX.Element => {
	const { restaurants, priceRange, foodType, onSuccessRestaurant, onSuccessFoodType, onSuccessPriceRange } =
		useContext(DataContext) as any;
	const [isLoading, setIsloading] = useState(true);
	const findPrice = useCallback(
		(priceId: number): string => {
			return priceRange.find(({ id }: any) => priceId === id)?.range;
		},
		[priceRange],
	);

	const findFoodType = useCallback(
		(foodTypesIds: number[]): string => {
			return foodType
				.filter((g: any) => foodTypesIds.includes(g.id))
				.map((g: any) => g.type)
				.join(', ');
		},
		[foodType],
	);

	useEffect(() => {
		if (onSuccessRestaurant && onSuccessFoodType && onSuccessPriceRange) {
			setIsloading(false);
		}
	}, [priceRange, foodType, onSuccessRestaurant, onSuccessFoodType, onSuccessPriceRange]);

	return (
		<div className="list-container">
			<Controls />
			<div className="list-wrapper">
				{isLoading ? (
					<p>Loading restaurants</p>
				) : (
					<ul className="list">
						{restaurants?.map((item: any) => (
							<li className="list-item" key={item.id}>
								<Card
									title={item.name}
									princeRange={findPrice(item.priceRange)}
									address={item.address}
									foodType={findFoodType(item.foodType)}
								/>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default List;
