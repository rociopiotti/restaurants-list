import React from 'react';
import { MapContainer as LeafMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.scss';

const Map = (): JSX.Element => {
	return (
		<div className="map">
			<LeafMap center={[59.95, 30.33]} zoom={11} className="leadMap">
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={[59.95, 30.33]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</LeafMap>
		</div>
	);
};

export default Map;
