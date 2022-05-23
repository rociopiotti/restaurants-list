import React, { useEffect, useContext } from 'react';
import { MapContainer as LeafMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { GlobalState } from '../../context/GlobalState';
import './Map.scss';
import 'leaflet/dist/leaflet.css';

const Map = (): JSX.Element => {
	const { restaurants } = useContext(GlobalState);
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
		const L = require('leaflet');
		L.Icon.Default.imagePath = './images/';
	}, []);

	return (
		<div className="map">
			<LeafMap center={[40.73207085189651, -73.95145454201108]} zoom={12} className="leadMap">
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{restaurants.map(({ position, address }: any, index: number) => {
					return (
						// TODO CHANGE POSITION PROP IN RESPONSE and id
						// eslint-disable-next-line react/no-array-index-key
						<Marker key={index + position[0].id} position={[position[0].lat, position[0].long]}>
							<Popup>{address}</Popup>
						</Marker>
					);
				})}
			</LeafMap>
		</div>
	);
};

export default Map;
