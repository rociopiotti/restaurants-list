import React, { useEffect, useContext } from 'react';
import { MapContainer as LeafMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { GlobalState } from '../../context/GlobalState';
import { constants } from '../../utils';
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
		<div className={constants.CLASSNAMES.MAP.CONTAINER}>
			<LeafMap
				center={[constants.GENERAL.MAP.CENTER.LAT, constants.GENERAL.MAP.CENTER.LON]}
				zoom={constants.GENERAL.MAP.ZOOM}
				className={constants.CLASSNAMES.MAP.LEAD_MAP}
			>
				<TileLayer url={constants.GENERAL.MAP.TITLE_URL} />
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
