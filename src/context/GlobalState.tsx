import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { constants } from '../utils';
import { useFetch } from '../hooks';
import { IResponseFoodTypes, IResponseRestaurantsData, IGlobalStateProvider, IRestaurantsData } from './models';

/**
 * NOTE: context used for demo purposes in real case scenario with react query context might be sufficient
 *
 */

const GlobalState = createContext({
	restaurants: [],
	foodTypesData: [],
	setFilteredRestaurants: () => null,
	setSortAZ: () => null,
	setSortZA: () => null,
});

const GlobalStateProvider = ({ children }: IGlobalStateProvider): JSX.Element => {
	// #region hooks
	const [restaurants, setRestaurants] = useState([] as any);
	const [foodTypesData, setFoodTypesData] = useState([]);
	const { getData: getRestaurants } = useFetch(constants.API.RESTAURANT_API.url);
	const { getData: getFoodType } = useFetch(constants.API.FOOD_TYPE_API.url);
	const { getData: getPriceRange } = useFetch(constants.API.PRINCE_RANGE_API.url);
	const { data: restaurantsData, isSuccess: onSuccessRestaurant } = useQuery('restaurants', getRestaurants);
	const { data: foodType, isSuccess: onSuccessFoodType } = useQuery('foodType', getFoodType);
	const { data: priceRange, isSuccess: onSuccessPriceRange } = useQuery('priceRange', getPriceRange);
	// #endregion hooks

	// #region methods
	// TODO: REFACT ALL METHODS IN HOOK OR UTIL FUNCTIONS
	// TODO: REFACT IN SEPARATE METHOS
	const findPrice = (priceId: number): string => {
		return priceRange.content.find(({ id }: any) => priceId === id)?.range;
	};

	const includesFoodTypeIds = (foodTypesIds: number[], id: number): boolean => {
		return foodTypesIds.includes(id);
	};

	const filterTypesInFoodType = (foodTypesIds: number[]): IResponseFoodTypes[] => {
		return foodType.content.filter(({ id }: IResponseFoodTypes) => includesFoodTypeIds(foodTypesIds, id));
	};

	const mapCurrentFoodTypes = (foodTypesIds: number[]): string[] => {
		return filterTypesInFoodType(foodTypesIds).map(({ type }: IResponseFoodTypes) => type);
	};

	const joinFoodTypes = (foodTypesIds: number[]): string => {
		return mapCurrentFoodTypes(foodTypesIds).join();
	};

	const mapRestaurantsData = (): IRestaurantsData[] => {
		const allRestaurants: IRestaurantsData[] = [];
		restaurantsData.content.map(
			({ id, name, address, position, priceRange: price, foodType: type, images }: IResponseRestaurantsData) => {
				const dataDef: IRestaurantsData = {
					id,
					name,
					address,
					position,
					priceRange: findPrice(Number(price)),
					foodType: joinFoodTypes(type),
					images,
				};

				return allRestaurants.push(dataDef);
			},
		);
		return allRestaurants;
	};

	const sortAZRestaurantList = (): IRestaurantsData[] => {
		const sortedList = mapRestaurantsData().sort((a: any, b: any) =>
			a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
		);

		return sortedList;
	};

	const sortZARestaurantList = (): IRestaurantsData[] => {
		const sortedList = mapRestaurantsData().sort((a: any, b: any) =>
			b.name.toLowerCase().localeCompare(a.name.toLowerCase()),
		);

		return sortedList;
	};

	const setSortAZ = (): void => {
		setRestaurants(sortAZRestaurantList());
	};

	const setSortZA = (): void => {
		setRestaurants(sortZARestaurantList());
	};

	const filterRestaurantList = (currentID: number): IRestaurantsData[] => {
		const allRestaurants: IRestaurantsData[] = [];

		const filtered = restaurantsData.content
			.map((item: any) => item)
			.filter((item: any) => item.foodType.includes(currentID));

		filtered.map(
			({ id, name, address, position, priceRange: price, foodType: type, images }: IResponseRestaurantsData) => {
				const dataDef: IRestaurantsData = {
					id,
					name,
					address,
					position,
					priceRange: findPrice(Number(price)),
					foodType: joinFoodTypes(type),
					images,
				};

				return allRestaurants.push(dataDef);
			},
		);
		return allRestaurants;
	};

	const setFilteredRestaurants = (currentID: number): void => {
		setRestaurants(filterRestaurantList(currentID));
	};
	// #endregion methods

	// #region effect
	useEffect(() => {
		if (onSuccessRestaurant && onSuccessFoodType && onSuccessPriceRange) {
			const allRestaurants: IRestaurantsData[] = mapRestaurantsData();
			setRestaurants(allRestaurants);
			setFoodTypesData(foodType.content);
		}
	}, [onSuccessFoodType, onSuccessPriceRange, onSuccessRestaurant]);
	// #endregion effect

	const value = useMemo((): { [key: string]: any } => {
		return {
			restaurants,
			foodTypesData,
			setFilteredRestaurants,
			setSortAZ,
			setSortZA,
		};
	}, [foodTypesData, restaurants]);
	return <GlobalState.Provider value={value as any}>{children}</GlobalState.Provider>;
};

export { GlobalState, GlobalStateProvider };
