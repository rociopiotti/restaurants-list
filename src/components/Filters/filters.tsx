import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';

import { Chip } from './childs';

import './Filters.scss';

const Filters = (): JSX.Element => {
	const { foodTypesData, setFilteredRestaurants } = useContext(GlobalState);

	return (
		<div className="filters">
			{foodTypesData.map(({ id, type }: any) => (
				<Chip key={id} label={type} filterList={setFilteredRestaurants} id={id} />
			))}
		</div>
	);
};

export default Filters;
