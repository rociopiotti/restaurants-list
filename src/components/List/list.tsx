import React from 'react';
import { Controls, Card } from '..';
import './list.scss';

const List = (): JSX.Element => {
	return (
		<div className="list-container">
			<Controls />
			<div className="list-wrapper">
				<ul className="list">
					<li className="list-item">
						<Card
							title="Restauran title"
							princeRange="€€"
							address="640 McLean Ave, Yonkers, NY 10705, Estados Unidos"
							foodType="Mexican"
						/>
					</li>
					<li className="list-item">
						<Card
							title="Restauran title"
							princeRange="€€"
							address="640 McLean Ave, Yonkers, NY 10705, Estados Unidos"
							foodType="Mexican"
						/>
					</li>
					<li className="list-item">
						<Card
							title="Restauran title"
							princeRange="€€"
							address="640 McLean Ave, Yonkers, NY 10705, Estados Unidos"
							foodType="Mexican"
						/>
					</li>
					<li className="list-item">
						<Card
							title="Restauran title"
							princeRange="€€"
							address="640 McLean Ave, Yonkers, NY 10705, Estados Unidos"
							foodType="Mexican"
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default List;
