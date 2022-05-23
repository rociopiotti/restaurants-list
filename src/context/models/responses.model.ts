export interface IPosition {
	id: string;
	lat: string;
	long: string;
}

export interface IResponseFoodTypes {
	id: number;
	type: string;
}

export interface IResponseImages {
	id: number;
	img: string;
}

export interface IResponseRestaurantsData {
	id: string;
	name: string;
	address: string;
	position: IPosition[];
	priceRange: number;
	foodType: number[];
	images: IResponseImages[];
}
