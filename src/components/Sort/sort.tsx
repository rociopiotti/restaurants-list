import React, { useState, useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';
import { Icon } from '..';
import './Sort.scss';

const Sort = (): JSX.Element => {
	const { setSortAZ, setSortZA } = useContext(GlobalState);

	const [isSelected, setIsSelected] = useState({
		sortAZ: false,
		sortZA: false,
	});

	const onClickSortAZ = (): void => {
		setSortAZ();
		setIsSelected({ sortAZ: !isSelected.sortAZ, sortZA: false });
	};

	const onClickSortZA = (): void => {
		setSortZA();
		setIsSelected({ sortAZ: false, sortZA: !isSelected.sortZA });
	};

	return (
		<div className="sort">
			<button className="icon-button-left" onClick={onClickSortAZ}>
				<Icon iconClass={isSelected.sortAZ ? 'sortAZ--state-selected' : 'sortAZ'} type="sortAZ" />
			</button>
			<button className="icon-button-right" onClick={onClickSortZA}>
				<Icon iconClass={isSelected.sortZA ? 'sortZA--state-selected' : 'sortZA'} type="sortZA" />
			</button>
		</div>
	);
};

export default Sort;
