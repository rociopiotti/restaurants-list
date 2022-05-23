import React from 'react';
import { constants } from '../../../../utils';
import './Chip.scss';

interface IChip {
	id: number;
	label: string;
	filterList(currentID: number): void;
}

const Chip = ({ id, label, filterList }: IChip): JSX.Element => {
	return (
		<button id={id.toString()} className={constants.CLASSNAMES.CHIP.CONTAINER} onClick={() => filterList(id)}>
			{label}
		</button>
	);
};

export default Chip;
