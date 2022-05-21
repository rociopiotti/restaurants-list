import React from 'react';
import { Controls, Card } from '..';
import './list.scss';

const List = (): JSX.Element => {
	return (
		<div className="list">
			<Controls />
			<Card
				title="Restauran title"
				princeRange="€€"
				address="640 McLean Ave, Yonkers, NY 10705, Estados Unidos"
				foodType="Mexican"
			/>
		</div>
	);
};

export default List;
