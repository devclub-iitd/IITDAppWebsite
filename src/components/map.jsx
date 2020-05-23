/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../App.css';
import loc from './locations';

// const pointerIcon = new L.Icon({
//     iconUrl: './images/map/pointerIcon.svg',
//     iconRetinaUrl: './images/map/pointerIcon.svg',
//     iconAnchor: [5, 55],
//     popupAnchor: [10, -44],
//     iconSize: [40, 55],
//     shadowUrl: './images/map/marker-shadow.png',
//     shadowSize: [68, 95],
//     shadowAnchor: [20, 92],
// });

// eslint-disable-next-line react/prefer-stateless-function
class MapLeaf extends React.Component {
    constructor() {
        super();

        this.state = {
            animate: true,
            latlng: {
                lat: 28.545126,
                lng: 77.193483,
            },
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        this.setState({
            latlng: e.latlng,
        });
    };

    render() {
        const menu = loc.map((locObj) => {
            return (
                <Marker position={locObj.cd} className="marker">
                    <Popup>{locObj.name}</Popup>
                </Marker>
            );
        });
        return (
            <Map
                className="map-leaf"
                zoom={20}
                minZoom={16}
                animate={this.state.animate}
                center={this.state.latlng}
                onClick={this.handleClick}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {menu}
            </Map>
        );
    }
}

export default MapLeaf;
