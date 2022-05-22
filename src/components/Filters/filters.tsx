import React, { useCallback, useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/dataContext';

import { Chip } from './childs';

import './filters.scss';

const Filters = (): JSX.Element => {
	const [currentID, setCurrentID] = useState(0);
	const { foodType, onSuccessFoodType, setRestaurantData, restaurantsData } = useContext(DataContext) as any;

	const filterList = useCallback(
		(id: number): void => {
			console.log('restaurantsData', restaurantsData);
			setCurrentID(id);
		},
		[currentID],
	);

	useEffect(() => {
		if (currentID === 0) return;
		setRestaurantData(
			restaurantsData.map((item: any) => item).filter((item: any) => item.foodType.includes(currentID)),
		);
	}, [currentID]);

	return (
		<div className="filters">
			{onSuccessFoodType ? (
				foodType.map(({ id, type }: any) => <Chip key={id} label={type} filterList={filterList} id={id} />)
			) : (
				<Chip label="no filter available" />
			)}
		</div>
	);
};

export default Filters;
