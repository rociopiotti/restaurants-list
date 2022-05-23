import { IPosition, IResponseImages } from '.';

export interface IResponseRestaurantsData {
	id: string;
	name: string;
	address: string;
	position: IPosition[];
	priceRange: number;
	foodType: number[];
	images: IResponseImages[];
}
