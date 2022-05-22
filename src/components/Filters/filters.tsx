import React, { useCallback, useContext, useEffect, useState } from 'react';
import { GlobalState } from '../../context/GlobalState';

import { Chip } from './childs';

import './filters.scss';

const Filters = (): JSX.Element => {
	const [currentID, setCurrentID] = useState(0);
	const { foodTypesData } = useContext(GlobalState);

	const filterList = useCallback(
		(id: number): void => {
			setCurrentID(id);
		},
		[currentID],
	);

	// restaurantsData.map((item: any) => item).filter((item: any) => item.foodType.includes(currentID)),

	return (
		<div className="filters">
			{foodTypesData.map(({ id, type }: any) => (
				<Chip key={id} label={type} filterList={filterList} id={id} />
			))}
		</div>
	);
};

export default Filters;
