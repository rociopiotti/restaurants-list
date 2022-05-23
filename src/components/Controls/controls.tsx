import React, { useContext } from 'react';
import { constants } from '../../utils';
import { GlobalState } from '../../context/GlobalState';
import { Filters, Sort } from '..';
import './Controls.scss';

const Controls = (): JSX.Element => {
	const { restaurants } = useContext(GlobalState);

	return (
		<div className={constants.CLASSNAMES.CONTROL.CONTAINER}>
			<Sort />
			<Filters />
			<p>{restaurants.length} places found</p>
		</div>
	);
};

export default Controls;
