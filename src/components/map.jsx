/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {
    Map,
    Marker,
    Popup,
    TileLayer,
    LayersControl,
    FeatureGroup,
} from 'react-leaflet';
import '../App.css';
import * as Icon from 'react-feather';
import loc from './locations';

const { BaseLayer, Overlay } = LayersControl;

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
        const acad = loc.map((locObj) => {
            if (locObj.category === 'academic')
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
            return <div />;
        });
        const hostel = loc.map((locObj) => {
            if (locObj.category === 'hostel')
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
            return <div />;
        });
        return (
            <Map
                className="map-leaf"
                zoom={18}
                minZoom={16}
                maxZoom={20}
                animate={this.state.animate}
                center={this.state.latlng}
                onClick={this.handleClick}
                closePopupOnClick={false}
            >
                <LayersControl position="topright">
                    <BaseLayer checked name="Detailed">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </BaseLayer>
                    <BaseLayer name="Satellite">
                        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                    </BaseLayer>
                    <BaseLayer name="Street">
                        <TileLayer url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=sKRXrS2ie0pEv0Zx9CuvWC4C1dzbJhRvD5F1dMXfETERkSRN5jpiWOYP2Kp55Y2x" />
                    </BaseLayer>
                    <BaseLayer name="Dark">
                        <TileLayer url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=sKRXrS2ie0pEv0Zx9CuvWC4C1dzbJhRvD5F1dMXfETERkSRN5jpiWOYP2Kp55Y2x" />
                    </BaseLayer>
                    <BaseLayer name="Bright">
                        <TileLayer url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png" />
                    </BaseLayer>
                    <BaseLayer name="Wikimedia">
                        <TileLayer url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png" />
                    </BaseLayer>
                    <BaseLayer name="Black">
                        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                    </BaseLayer>
                    <BaseLayer name="Cycle">
                        <TileLayer url="https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=ebe4d393a4ec460c98cb35482859652f" />
                    </BaseLayer>
                    <BaseLayer name="Transport">
                        <TileLayer url="https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=ebe4d393a4ec460c98cb35482859652f" />
                    </BaseLayer>
                    <BaseLayer name="Retro">
                        <TileLayer url="https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=ebe4d393a4ec460c98cb35482859652f" />
                    </BaseLayer>
                    <BaseLayer name="Grayscale">
                        <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
                    </BaseLayer>
                    <Overlay checked name="Hostel">
                        <FeatureGroup>{hostel}</FeatureGroup>
                    </Overlay>
                    <Overlay checked name="Academic">
                        <FeatureGroup>{acad}</FeatureGroup>
                    </Overlay>
                </LayersControl>
            </Map>
        );
    }
}

export default MapLeaf;
