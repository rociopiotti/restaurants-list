import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useQuery } from 'react-query';
import { useFetch } from '../../hooks';
import { constants } from '../../utils';
import { DataContext } from '../../context/dataContext';
import { Controls, Card } from '..';
import './list.scss';

const List = (): JSX.Element => {
	const { restaurantsData, setRestaurantData, foodType, priceRange, onSuccessFoodType, onSuccessPriceRange } =
		useContext(DataContext) as any;

	const { getProducts } = useFetch(constants.API.RESTAURANT_API.url);
	const { data, isSuccess: onSuccessRestaurant } = useQuery('restaurants', getProducts);

	const [isLoading, setIsloading] = useState(true);

	const findPrice = useCallback(
		(priceId: number): string => {
			return priceRange.find(({ id }: any) => priceId === id)?.range;
		},
		[priceRange],
	);

	const includesFoodTypeIds = (foodTypesIds: number[], id: number): boolean => {
		return foodTypesIds.includes(id);
	};

	const filterTypesInFoodType = (foodTypesIds: number[]): { [key: string]: any } => {
		return foodType.filter(({ id }: any) => includesFoodTypeIds(foodTypesIds, id));
	};

	const mapCurrentFoodTypes = (foodTypesIds: number[]): string[] => {
		return filterTypesInFoodType(foodTypesIds).map(({ type }: any) => type);
	};

	const joinFoodTypes = (foodTypesIds: number[]): string => {
		return mapCurrentFoodTypes(foodTypesIds).join();
	};

	useEffect(() => {
		if (!onSuccessRestaurant) return;
		console.log('AGAIN');

		setRestaurantData(data.content);
		setIsloading(false);
	}, [onSuccessRestaurant]);

	useEffect(() => {
		if (onSuccessRestaurant && onSuccessFoodType && onSuccessPriceRange) {
			console.log('HERE');
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
						{restaurantsData?.map(
							({ id, name, address, priceRange: price, foodType: type, images }: any) => (
								<li className="list-item" key={id}>
									<Card
										title={name}
										princeRange={findPrice(price)}
										address={address}
										foodType={joinFoodTypes(type)}
										images={images}
									/>
								</li>
							),
						)}
					</ul>
				)}
			</div>
		</div>
	);
};

export default List;
