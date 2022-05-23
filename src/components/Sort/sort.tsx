import React, { useState, useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';
import { constants } from '../../utils';
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
		<div className={constants.CLASSNAMES.SORT.CONTAINER}>
			<button className={constants.CLASSNAMES.SORT.ICON_BTN_LEFT} onClick={onClickSortAZ}>
				<Icon
					iconClass={
						isSelected.sortAZ
							? constants.CLASSNAMES.SORT.ICON_SORT_AZ_SELECTED
							: constants.CLASSNAMES.SORT.ICON_SORT_AZ
					}
					type={constants.ICON_TYPES.SORT_AZ}
				/>
			</button>
			<button className={constants.CLASSNAMES.SORT.ICON_BTN_RIGHT} onClick={onClickSortZA}>
				<Icon
					iconClass={
						isSelected.sortZA
							? constants.CLASSNAMES.SORT.ICON_SORT_ZA_SELECTED
							: constants.CLASSNAMES.SORT.ICON_SORT_ZA
					}
					type={constants.ICON_TYPES.SORT_ZA}
				/>
			</button>
		</div>
	);
};

export default Sort;
