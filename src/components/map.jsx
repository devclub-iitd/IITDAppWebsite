/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import {
  Map,
  TileLayer,
  LayersControl,
  FeatureGroup,
  ZoomControl,
  Popup,
} from 'react-leaflet';
import '../App.css';
import {
  acad, hostel, eat, sport, shop, other,
} from '../data/mapFilters';
import locs from '../data/locations';

const { BaseLayer, Overlay } = LayersControl;

class MapLeaf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: true,
      latlng: {
        lat: this.props.match ? locs[parseInt(this.props.match.params.locId, 10)].cd[0] : 28.545126,
        lng: this.props.match ? locs[parseInt(this.props.match.params.locId, 10)].cd[1] : 77.193483,
      },
      locId: this.props.match ? parseInt(this.props.match.params.locId, 10) : 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick({
      latlng: {
        lat: this.props.match ? locs[parseInt(this.props.match.params.locId, 10)].cd[0] : 28.545126,
        lng: this.props.match ? locs[parseInt(this.props.match.params.locId, 10)].cd[1] : 77.193483,
      },
    });
  }

    handleClick = (e) => {
      this.setState({
        latlng: e.latlng,
      });
    };

    render() {
      const {
        animate, latlng, handleClick,
      } = this.state;

      return (
        <Map
          className="map-leaf"
          zoom={18}
          minZoom={16}
          maxZoom={19}
          animate={animate}
          center={latlng}
          onClick={handleClick}
          closePopupOnClick
          zoomControl={false}
        >
          <ZoomControl position="bottomright" />
          <LayersControl position="bottomright" className="layer-control">
            <BaseLayer checked name="<h6>Detailed</h6>">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </BaseLayer>
            <BaseLayer name="<h6>Satellite</h6>">
              <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
            </BaseLayer>
            <BaseLayer name="<h6>Street</h6>">
              <TileLayer url="https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=sKRXrS2ie0pEv0Zx9CuvWC4C1dzbJhRvD5F1dMXfETERkSRN5jpiWOYP2Kp55Y2x" />
            </BaseLayer>
            <BaseLayer name="<h6>Cycle</h6>">
              <TileLayer url="https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=ebe4d393a4ec460c98cb35482859652f" />
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
            <Overlay checked name="<h6>Sports & Rec.</h6>">
              <FeatureGroup>{sport}</FeatureGroup>
            </Overlay>
            <Overlay checked name="<h6>Shop.</h6>">
              <FeatureGroup>{shop}</FeatureGroup>
            </Overlay>
            <Overlay checked name="<h6>Shop.</h6>">
              <FeatureGroup>{other}</FeatureGroup>
            </Overlay>
            { // this.props.match && (
            // <Popup className="pup">
            //   <h1>{locs[this.props.match.params.locId].name}</h1>
            //   {locs[this.props.match.params.locId].img}
            //   <p>{locs[this.props.match.params.locId].desc}</p>
            //   <div className="c-btn-group">
            //     {locs[this.props.match.params.locId].categoryIcon}

            //     {locs[this.props.match.params.locId].infoUrl !== '' && (
            //     <a className="c-btn learn-e" href={locs[this.props.match.params.locId].infoUrl}>
            //       <span>
            //         <Icon.ExternalLink />
            //       </span>
            //     </a>
            //     )}

            //     {locs[this.props.match.params.locId].mapUrl !== '' && (
            //     <a className="c-btn map" href={locs[this.props.match.params.locId].mapUrl}>
            //       <span>
            //         <Icon.MapPin />
            //       </span>
            //     </a>
            //     )}

            //     {locs[this.props.match.params.locId].phoneUrl !== '' && (
            //     <a className="c-btn ph" href={locs[this.props.match.params.locId].phoneUrl}>
            //       <Icon.Phone />
            //     </a>
            //     )}

            //     {locs[this.props.match.params.locId].webUrl !== '' && (
            //     <a className="c-btn web" href={locs[this.props.match.params.locId].webUrl}>
            //       <Icon.Globe />
            //     </a>
            //     )}
            //   </div>
            // </Popup>
            // )
          }

            {
              this.props.match && (
                <Popup position={this.state.latlng} className="pup">
                  <h1>{locs[this.props.match.params.locId].name}</h1>
                  {locs[this.props.match.params.locId].img}
                  <p>{locs[this.props.match.params.locId].desc}</p>
                  <div className="c-btn-group">
                    {locs[this.props.match.params.locId].categoryIcon}

                    {locs[this.props.match.params.locId].infoUrl !== '' && (
                    <a className="c-btn learn-e" href={locs[this.props.match.params.locId].infoUrl}>
                      <span>
                        <Icon.ExternalLink />
                      </span>
                    </a>
                    )}

                    {locs[this.props.match.params.locId].mapUrl !== '' && (
                    <a className="c-btn map" href={locs[this.props.match.params.locId].mapUrl}>
                      <span>
                        <Icon.MapPin />
                      </span>
                    </a>
                    )}

                    {locs[this.props.match.params.locId].phoneUrl !== '' && (
                    <a className="c-btn ph" href={locs[this.props.match.params.locId].phoneUrl}>
                      <Icon.Phone />
                    </a>
                    )}

                    {locs[this.props.match.params.locId].webUrl !== '' && (
                    <a className="c-btn web" href={locs[this.props.match.params.locId].webUrl}>
                      <Icon.Globe />
                    </a>
                    )}
                  </div>
                </Popup>

              )
}

          </LayersControl>
        </Map>
      );
    }
}

MapLeaf.propTypes = {
  locId: PropTypes.number.isRequired,
};

export default MapLeaf;
