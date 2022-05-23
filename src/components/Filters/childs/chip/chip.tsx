import React from 'react';
import './chip.scss';

const Chip = ({ id, label, filterList }: { [key: string]: any }): JSX.Element => {
	return (
		<button id={id} className="chip" onClick={() => filterList(id)}>
			{label}
		</button>
	);
};

export default Chip;
