import React, { createContext, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { constants } from '../utils';
import { useLoading, useFetch } from '../hooks';

// TODO INTERFACE FOR CONTEXT
const DataContext = createContext({
	restaurants: undefined,
	priceRange: undefined,
	foodType: undefined,
	isLoading: true,
});

const DataContextProveedor = ({ children }: any): JSX.Element => {
	const { getProducts } = useFetch(constants.API.RESTAURANT_API.url);
	const { getProducts: getFoodType } = useFetch(constants.API.FOOD_TYPE_API.url);
	const { getProducts: getPriceRange } = useFetch(constants.API.PRINCE_RANGE_API.url);
	const { data, status } = useQuery('restaurants', getProducts);
	const { data: foodType, status: statusFoodType } = useQuery('foodType', getFoodType);
	const { data: princeRange, status: statusPrinceRange } = useQuery('priceRange', getPriceRange);
	const { isLoading } = useLoading(status);

	const state = useMemo((): { [key: string]: any } => {
		return { restaurants: data?.content, priceRange: princeRange?.content, foodType: foodType?.content, isLoading };
	}, [data?.content, foodType?.content, isLoading, princeRange?.content]);
	return <DataContext.Provider value={state as any}>{children}</DataContext.Provider>;
};

export { DataContext, DataContextProveedor };
