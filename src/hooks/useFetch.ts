import React from 'react';

// TODO TYPE CUSTOM HOOK
interface IUseFetch {
	getProducts(): Promise<any>;
}

export const useFetch = (url: string): IUseFetch => {
	const getProducts = async (): Promise<any> => {
		const response = await fetch(url);
		return response.json();
	};
	return {
		getProducts,
	};
};
