import React from 'react';
import { Icon } from '..';
import './sort.scss';

const Sort = (): JSX.Element => {
	return (
		<div className="sort">
			<button className="icon-button">
				<Icon className="iconSortAZ" type="sortAZ" />
			</button>
			<button className="icon-button">
				<Icon className="iconortZA" type="sortZA" />
			</button>
		</div>
	);
};

export default Sort;
