import React, { createContext, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { constants } from '../utils';
import { useFetch } from '../hooks';

/**
 * NOTE: context used for demo purposes in real case scenario with react query context might be sufficient
 *
 */

// TODO INTERFACE FOR CONTEXT
const DataContext = createContext({
	restaurants: undefined,
	priceRange: undefined,
	foodType: undefined,
});

const DataContextProvider = ({ children }: any): JSX.Element => {
	const [restaurantsData, setRestaurantData] = useState(undefined);
	const { getProducts: getFoodType } = useFetch(constants.API.FOOD_TYPE_API.url);
	const { getProducts: getPriceRange } = useFetch(constants.API.PRINCE_RANGE_API.url);
	const { data: foodType, isSuccess: onSuccessFoodType } = useQuery('foodType', getFoodType);
	const { data: princeRange, isSuccess: onSuccessPriceRange } = useQuery('priceRange', getPriceRange);



	const state = useMemo((): { [key: string]: any } => {
		return {
			priceRange: princeRange?.content,
			foodType: foodType?.content,
			onSuccessFoodType,
			onSuccessPriceRange,
			setRestaurantData,
			restaurantsData
		};
	}, [princeRange?.content, foodType?.content, onSuccessFoodType, onSuccessPriceRange, restaurantsData]);
	return <DataContext.Provider value={state as any}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProvider };
