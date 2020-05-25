/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Map, TileLayer, LayersControl, FeatureGroup } from 'react-leaflet';
import '../App.css';
import { acad, hostel, eat } from './shared/mapFilters';

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
                <LayersControl position="topright" className="layer-control">
                    <BaseLayer checked name="<h6>Detailed</h6>">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Satellite</h6>">
                        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Street</h6>">
                        <TileLayer url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=sKRXrS2ie0pEv0Zx9CuvWC4C1dzbJhRvD5F1dMXfETERkSRN5jpiWOYP2Kp55Y2x" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Dark</h6>">
                        <TileLayer url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=sKRXrS2ie0pEv0Zx9CuvWC4C1dzbJhRvD5F1dMXfETERkSRN5jpiWOYP2Kp55Y2x" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Bright</h6>">
                        <TileLayer url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Wikimedia</h6>">
                        <TileLayer url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Black</h6>">
                        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Cycle</h6>">
                        <TileLayer url="https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=ebe4d393a4ec460c98cb35482859652f" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Transport</h6>">
                        <TileLayer url="https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=ebe4d393a4ec460c98cb35482859652f" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Retro</h6>">
                        <TileLayer url="https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=ebe4d393a4ec460c98cb35482859652f" />
                    </BaseLayer>
                    <BaseLayer name="<h6>Grayscale</h6>">
                        <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
                    </BaseLayer>
                    <Overlay checked name="<h6>Hostel</h6>">
                        <FeatureGroup>{hostel}</FeatureGroup>
                    </Overlay>
                    <Overlay checked name="<h6>Food & Drinks</h6>">
                        <FeatureGroup>{eat}</FeatureGroup>
                    </Overlay>
                    <Overlay checked name="<h6>Academic</h6>">
                        <FeatureGroup>{acad}</FeatureGroup>
                    </Overlay>
                </LayersControl>
            </Map>
        );
    }
}

export default MapLeaf;
