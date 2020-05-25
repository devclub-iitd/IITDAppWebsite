/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import * as Icon from 'react-feather';
import Leaflet from 'leaflet';
import loc from './locations';

const redIcon = new Leaflet.Icon({
    iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconRetinaUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconAnchor: [2.5, 27.5],
    popupAnchor: [5, -22],
    iconSize: [17.5, 27.5],
    shadowUrl: require('../images/map/marker-shadow.png'),
    shadowSize: [34, 47.5],
    shadowAnchor: [5, 46],
});

const blueIcon = new Leaflet.Icon({
    iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    iconRetinaUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconAnchor: [2.5, 27.5],
    popupAnchor: [5, -22],
    iconSize: [17.5, 27.5],
    shadowUrl: require('../images/map/marker-shadow.png'),
    shadowSize: [34, 47.5],
    shadowAnchor: [5, 46],
});

const goldIcon = new Leaflet.Icon({
    iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    iconRetinaUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    iconAnchor: [2.5, 27.5],
    popupAnchor: [5, -22],
    iconSize: [17.5, 27.5],
    shadowUrl: require('../images/map/marker-shadow.png'),
    shadowSize: [34, 47.5],
    shadowAnchor: [5, 46],
});

const acad = loc.map((locObj) => {
    if (locObj.category === 'academic')
        return (
            <Marker position={locObj.cd} className="marker" icon={redIcon}>
                <Popup className="pup">
                    <h1>{locObj.name}</h1>
                    {locObj.img}
                    <p>{locObj.desc}</p>
                    <div className="c-btn-group">
                        <a className="c-btn acad">
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
const eat = loc.map((locObj) => {
    if (locObj.category === 'eat')
        return (
            <Marker position={locObj.cd} className="marker" icon={goldIcon}>
                <Popup className="pup">
                    <h1>{locObj.name}</h1>
                    {locObj.img}
                    <p>{locObj.desc}</p>
                    <div className="c-btn-group">
                        <a className="c-btn eat">
                            <span>
                                <Icon.Coffee />
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
            <Marker position={locObj.cd} className="marker" icon={blueIcon}>
                <Popup className="pup">
                    <h1>{locObj.name}</h1>
                    {locObj.img}
                    <p>{locObj.desc}</p>
                    <div className="c-btn-group">
                        <a className="c-btn hs">
                            <span>
                                <Icon.Briefcase />
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

export { acad, hostel, eat };
