interface IUseFetch {
	// TODO TYPE response
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
