import React from 'react';

// TODO TYPE CUSTOM HOOK
interface IUseFetch {
	getData(): Promise<any>;
}

export const useFetch = (url: string): IUseFetch => {
	const getData = async (): Promise<any> => {
		const response = await fetch(url);
		return response.json();
	};
	return {
		getData,
	};
};
