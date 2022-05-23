import React, { useContext } from 'react';
import { GlobalState } from '../../context/GlobalState';
import { Controls, Card } from '..';
import './List.scss';

const List = (): JSX.Element => {
	const { restaurants } = useContext(GlobalState);

	return (
		<div className="list-container">
			<Controls />
			<div className="list-wrapper">
				<ul className="list">
					{restaurants?.map(({ id, name, address, priceRange, foodType, images }: any) => (
						<li className="list-item" key={id}>
							<Card
								title={name}
								princeRange={priceRange}
								address={address}
								foodType={foodType}
								images={images}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default List;
