import React, { useEffect, useContext } from 'react';
import { MapContainer as LeafMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { DataContext } from '../../context/dataContext';
import './map.scss';
import 'leaflet/dist/leaflet.css';

const Map = (): JSX.Element => {
	const { restaurants, onSuccessRestaurant } = useContext(DataContext) as any;
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
		const L = require('leaflet');
		L.Icon.Default.imagePath = './images/';
	}, []);

	return (
		<div className="map">
			<LeafMap center={[40.95, -73.93]} zoom={11} className="leadMap">
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{onSuccessRestaurant && restaurants !== undefined ? (
					restaurants.map(({ position, address }: any, index: number) => {
						return (
							// eslint-disable-next-line react/no-array-index-key
							<Marker key={index + position[0].id} position={[position[0].lat, position[0].long]}>
								<Popup>{address}</Popup>
							</Marker>
						);
					})
				) : (
					<Marker position={[40.9334067781748, -73.87002390863128]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				)}
			</LeafMap>
		</div>
	);
};

export default Map;
