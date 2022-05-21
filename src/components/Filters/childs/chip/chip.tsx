import React from 'react';
import './chip.scss';

const Chip = ({ label }: { [key: string]: any }): JSX.Element => {
	return <button className="chip">{label}</button>;
};

export default Chip;
