import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { constants } from '../utils';
import { useFetch } from '../hooks';
import { IResponseFoodTypes, IResponseRestaurantsData, IGlobalStateProvider, IRestaurantsData } from './models';

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
	const { data: restaurantsData, isSuccess: onSuccessRestaurant } = useQuery(
		constants.GENERAL.QUERY_KEY_RESTAURANTS,
		getRestaurants,
	);
	const { data: foodTypesResponse, isSuccess: onSuccessFoodType } = useQuery(
		constants.GENERAL.QUERY_KEY_FOOD_TYPE,
		getFoodType,
	);
	const { data: priceRange, isSuccess: onSuccessPriceRange } = useQuery(
		constants.GENERAL.QUERY_KEY_PRICE_RANGE,
		getPriceRange,
	);
	// #endregion hooks

	// #region methods
	// TODO: REFACT ALL BUSINESS LOGIC METHODS IN HOOK OR UTILS FUNCTIONS
	const findPrice = useCallback(
		(priceId: number): string => {
			return priceRange.content.find(({ id }: any) => priceId === id)?.range;
		},
		[priceRange],
	);

	const includesFoodTypeIds = useCallback((foodTypesIds: number[], id: number): boolean => {
		return foodTypesIds.includes(id);
	}, []);

	const filterTypesInFoodType = useCallback(
		(foodTypesIds: number[]): IResponseFoodTypes[] => {
			return foodTypesResponse.content.filter(({ id }: IResponseFoodTypes) =>
				includesFoodTypeIds(foodTypesIds, id),
			);
		},
		[foodTypesResponse, includesFoodTypeIds],
	);

	const mapCurrentFoodTypes = useCallback(
		(foodTypesIds: number[]): string[] => {
			return filterTypesInFoodType(foodTypesIds).map(({ type }: IResponseFoodTypes) => type);
		},
		[filterTypesInFoodType],
	);

	const joinFoodTypes = useCallback(
		(foodTypesIds: number[]): string => {
			return mapCurrentFoodTypes(foodTypesIds).join(', ');
		},
		[mapCurrentFoodTypes],
	);

	const mapRestaurantsData = useCallback((): IRestaurantsData[] => {
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
	}, [findPrice, joinFoodTypes, restaurantsData]);

	const sortAZRestaurantList = useCallback((): IRestaurantsData[] => {
		return mapRestaurantsData().sort((a: IRestaurantsData, b: IRestaurantsData) =>
			a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
		);
	}, [mapRestaurantsData]);

	const sortZARestaurantList = useCallback((): IRestaurantsData[] => {
		return mapRestaurantsData().sort((a: IRestaurantsData, b: IRestaurantsData) =>
			b.name.toLowerCase().localeCompare(a.name.toLowerCase()),
		);
	}, [mapRestaurantsData]);

	const setSortAZ = useCallback((): void => {
		setRestaurants(sortAZRestaurantList());
	}, [sortAZRestaurantList]);

	const setSortZA = useCallback((): void => {
		setRestaurants(sortZARestaurantList());
	}, [sortZARestaurantList]);

	// TODO: REFACT IN SIMPlER FUNCTIONS
	const filterRestaurantList = useCallback(
		(currentID: number): IRestaurantsData[] => {
			const allRestaurants: IRestaurantsData[] = [];
			restaurantsData.content
				.map((restaurant: IResponseRestaurantsData) => restaurant)
				.filter(({ foodType }: IResponseRestaurantsData) => foodType.includes(currentID))
				.map(
					({
						id,
						name,
						address,
						position,
						priceRange: price,
						foodType: type,
						images,
					}: IResponseRestaurantsData) => {
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
		},
		[findPrice, joinFoodTypes, restaurantsData],
	);

	const setFilteredRestaurants = useCallback(
		(currentID: number): void => {
			setRestaurants(filterRestaurantList(currentID));
		},
		[filterRestaurantList],
	);
	// #endregion methods

	// #region effect
	useEffect(() => {
		if (onSuccessRestaurant && onSuccessFoodType && onSuccessPriceRange) {
			const allRestaurants: IRestaurantsData[] = mapRestaurantsData();
			setRestaurants(allRestaurants);
			setFoodTypesData(foodTypesResponse.content);
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
	}, [foodTypesData, restaurants, setFilteredRestaurants, setSortAZ, setSortZA]);
	return <GlobalState.Provider value={value as any}>{children}</GlobalState.Provider>;
};

export { GlobalState, GlobalStateProvider };
