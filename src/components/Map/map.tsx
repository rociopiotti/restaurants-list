import React, { useEffect } from 'react';
import { MapContainer as LeafMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';

const Map = (): JSX.Element => {
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
		const L = require('leaflet');

		L.Icon.Default.imagePath = './images/';
	}, []);

	return (
		<div className="map">
			<LeafMap center={[40.95, -73.93]} zoom={11} className="leadMap">
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={[40.9334067781748, -73.87002390863128]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</LeafMap>
		</div>
	);
};

export default Map;
