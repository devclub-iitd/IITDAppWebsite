import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import '../App.css';

const position = [51.505, -0.09];
const myIcon = L.icon({
    iconUrl: './images/home/iitd.jpg',
    iconSize: [25, 42],
    iconAnchor: [12.5, 21],
    popupAnchor: [0, -41],
});
// eslint-disable-next-line react/prefer-stateless-function
class MapLeaf extends React.Component {
    render() {
        return (
            <Map className="map-leaf" center={position} zoom={13}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon}>
                    <Popup>I am a green leaf</Popup>
                </Marker>
            </Map>
        );
    }
}

export default MapLeaf;
