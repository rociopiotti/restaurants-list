import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { constants } from '../utils';
import { useFetch } from '../hooks';
/**
 * NOTE: context used for demo purposes in real case scenario with react query context might be sufficient
 *
 */

// TODO INTERFACE FOR CONTEXT
const GlobalState = createContext({
	restaurants: [],
	foodTypesData: [],
});

const GlobalStateProvider = ({ children }: any): JSX.Element => {
	const [restaurants, setRestaurants] = useState([]);
	const [foodTypesData, setFoodTypesData] = useState([]);

	const { getData: getRestaurants } = useFetch(constants.API.RESTAURANT_API.url);
	const { getData: getFoodType } = useFetch(constants.API.FOOD_TYPE_API.url);
	const { getData: getPriceRange } = useFetch(constants.API.PRINCE_RANGE_API.url);
	const { data: restaurantsData, isSuccess: onSuccessRestaurant } = useQuery('restaurants', getRestaurants);
	const { data: foodType, isSuccess: onSuccessFoodType } = useQuery('foodType', getFoodType);
	const { data: priceRange, isSuccess: onSuccessPriceRange } = useQuery('priceRange', getPriceRange);

	const findPrice = (priceId: number): string => {
		return priceRange.content.find(({ id }: any) => priceId === id)?.range;
	};

	const includesFoodTypeIds = (foodTypesIds: number[], id: number): boolean => {
		return foodTypesIds.includes(id);
	};

	const filterTypesInFoodType = (foodTypesIds: number[]): { [key: string]: any } => {
		return foodType.content.filter(({ id }: any) => includesFoodTypeIds(foodTypesIds, id));
	};

	const mapCurrentFoodTypes = (foodTypesIds: number[]): string[] => {
		return filterTypesInFoodType(foodTypesIds).map(({ type }: any) => type);
	};

	const joinFoodTypes = (foodTypesIds: number[]): string => {
		return mapCurrentFoodTypes(foodTypesIds).join();
	};

	useEffect(() => {
		if (onSuccessRestaurant && onSuccessFoodType && onSuccessPriceRange) {
			const allRestaurants: any = [];
			restaurantsData.content.map(
				({ id, name, address, position, priceRange: price, foodType: type, images }: any) => {
					const dataDef = {
						id,
						name,
						address,
						position,
						priceRange: findPrice(price),
						foodType: joinFoodTypes(type),
						images,
					};

					return allRestaurants.push(dataDef);
				},
			);

			setRestaurants(allRestaurants);
			setFoodTypesData(foodType.content);
		}
	}, [onSuccessFoodType, onSuccessPriceRange, onSuccessRestaurant]);

	const value = useMemo((): { [key: string]: any } => {
		return {
			restaurants,
			foodTypesData,
		};
	}, [foodTypesData, restaurants]);
	return <GlobalState.Provider value={value as any}>{children}</GlobalState.Provider>;
};

export { GlobalState, GlobalStateProvider };
