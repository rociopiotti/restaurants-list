import { IPosition, IResponseImages } from '.';

export interface IRestaurantsData {
	id: string;
	name: string;
	address: string;
	position: IPosition[];
	priceRange: string;
	foodType: string;
	images: IResponseImages[];
}
