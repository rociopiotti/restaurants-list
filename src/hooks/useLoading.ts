interface IUseLoading {
	isLoading(): boolean;
}

export const useLoading = (status: string): IUseLoading => {
	const isLoading = (): boolean => {
		if (status === 'loading') return true;
		return false;
	};

	return {
		isLoading,
	};
};
