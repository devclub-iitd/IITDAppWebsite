/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../App.css';
import * as Icon from 'react-feather';
import loc from './locations';

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
                    <Popup className="pup">
                        <h1>{locObj.name}</h1>
                        {locObj.img}
                        <p>{locObj.desc}</p>
                        <div className="c-btn-group">
                            <a className="c-btn fd">
                                <span>
                                    <Icon.BookOpen />
                                </span>
                            </a>
                            <a className="c-btn learn-e">
                                <span>
                                    <Icon.Info />
                                </span>
                            </a>
                            <a className="c-btn map">
                                <span>
                                    <Icon.MapPin />
                                </span>
                            </a>
                            <a className="c-btn ph">
                                <Icon.Phone />
                            </a>
                            <a className="c-btn web">
                                <Icon.Globe />
                            </a>
                        </div>
                    </Popup>
                </Marker>
            );
        });
        return (
            <Map
                className="map-leaf"
                zoom={18}
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
