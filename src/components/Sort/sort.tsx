import React, { useState } from 'react';
import { Icon } from '..';
import './sort.scss';

const Sort = (): JSX.Element => {
	const [isSelected, setIsSelected] = useState({
		sortAZ: false,
		sortZA: false,
	});

	const onClickSortAZ = (): void => {
		setIsSelected({ sortAZ: !isSelected.sortAZ, sortZA: false });
	};

	const onClickSortZA = (): void => {
		setIsSelected({ sortAZ: false, sortZA: !isSelected.sortZA });
	};

	return (
		<div className="sort">
			<button className="icon-button" onClick={onClickSortAZ}>
				<Icon iconClass={isSelected.sortAZ ? 'sortAZ--state-selected' : 'sortAZ'} type="sortAZ" />
			</button>
			<button className="icon-button" onClick={onClickSortZA}>
				<Icon iconClass={isSelected.sortZA ? 'sortZA--state-selected' : 'sortZA'} type="sortZA" />
			</button>
		</div>
	);
};

export default Sort;
