import React from 'react';
import { Filters, Sort } from '..';
import './Controls.scss';

const Controls = (): JSX.Element => {
	return (
		<div className="controls">
			<Sort />
			<Filters />
			<p>places found</p>
		</div>
	);
};

export default Controls;
