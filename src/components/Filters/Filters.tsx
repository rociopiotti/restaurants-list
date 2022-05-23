import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';
import { constants } from '../../utils';
import { IResponseFoodTypes } from '../../context/models';
import { Chip } from './childs';

import './Filters.scss';

const Filters = (): JSX.Element => {
	const { foodTypesData, setFilteredRestaurants } = useContext(GlobalState);

	return (
		<div className={constants.CLASSNAMES.FILTERS.CONTAINER}>
			{foodTypesData.map(({ id, type }: IResponseFoodTypes) => (
				<Chip key={id} label={type} filterList={setFilteredRestaurants} id={id} />
			))}
		</div>
	);
};

export default Filters;
