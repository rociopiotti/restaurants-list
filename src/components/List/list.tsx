import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';
import { IRestaurantsData } from '../../context/models';
import { Controls, Card } from '..';
import { constants } from '../../utils';
import './List.scss';

const List = (): JSX.Element => {
	const { restaurants } = useContext(GlobalState);

	return (
		<div className={constants.CLASSNAMES.LIST.CONTAINER}>
			<Controls />
			<div className={constants.CLASSNAMES.LIST.WRAPPER}>
				<ul className={constants.CLASSNAMES.LIST.LIST}>
					{restaurants?.map(({ id, name, address, priceRange, foodType, images }: IRestaurantsData) => (
						<li className={constants.CLASSNAMES.LIST.ITEM} key={id}>
							<Card
								id={id}
								name={name}
								priceRange={priceRange}
								address={address}
								foodType={foodType}
								images={images}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default List;
