import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import * as Icon from 'react-feather';
import Leaflet from 'leaflet';
import loc from './locations';

const shadow = require('../images/map/marker-shadow.png');

const redIcon = new Leaflet.Icon({
  iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconRetinaUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconAnchor: [2.5, 27.5],
  popupAnchor: [5, -22],
  iconSize: [17.5, 27.5],
  shadowUrl: shadow,
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
  shadowUrl: shadow,
  shadowSize: [34, 47.5],
  shadowAnchor: [5, 46],
});

const orangeIcon = new Leaflet.Icon({
  iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
  iconRetinaUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  iconAnchor: [2.5, 27.5],
  popupAnchor: [5, -22],
  iconSize: [17.5, 27.5],
  shadowUrl: shadow,
  shadowSize: [34, 47.5],
  shadowAnchor: [5, 46],
});

const blackIcon = new Leaflet.Icon({
  iconUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png',
  iconRetinaUrl:
        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  iconAnchor: [2.5, 27.5],
  popupAnchor: [5, -22],
  iconSize: [17.5, 27.5],
  shadowUrl: shadow,
  shadowSize: [34, 47.5],
  shadowAnchor: [5, 46],
});

const acad = loc.map((locObj) => {
  if (locObj.category === 'academic') {
    return (
      <Marker position={locObj.cd} className="marker" icon={redIcon}>
        <Popup className="pup">
          <h1>{locObj.name}</h1>
          {locObj.img}
          <p>{locObj.desc}</p>
          <div className="c-btn-group">
            <a href="https://" className="c-btn acad">
              <span>
                <Icon.BookOpen />
              </span>
            </a>
            <a href="https://" className="c-btn learn-e">
              <span>
                <Icon.Info />
              </span>
            </a>
            <a href="https://" className="c-btn map">
              <span>
                <Icon.MapPin />
              </span>
            </a>
            <a href="https://" className="c-btn ph">
              <Icon.Phone />
            </a>
            <a href="https://" className="c-btn web">
              <Icon.Globe />
            </a>
          </div>
        </Popup>
      </Marker>
    );
  }
  return <div />;
});
const eat = loc.map((locObj) => {
  if (locObj.category === 'eat') {
    return (
      <Marker position={locObj.cd} className="marker" icon={orangeIcon}>
        <Popup className="pup">
          <h1>{locObj.name}</h1>
          {locObj.img}
          <p>{locObj.desc}</p>
          <div className="c-btn-group">
            <a href="https://" className="c-btn eat">
              <span>
                <Icon.Coffee />
              </span>
            </a>
            <a href="https://" className="c-btn learn-e">
              <span>
                <Icon.Info />
              </span>
            </a>
            <a href="https://" className="c-btn map">
              <span>
                <Icon.MapPin />
              </span>
            </a>
            <a href="https://" className="c-btn ph">
              <Icon.Phone />
            </a>
            <a href="https://" className="c-btn web">
              <Icon.Globe />
            </a>
          </div>
        </Popup>
      </Marker>
    );
  }
  return <div />;
});
const hostel = loc.map((locObj) => {
  if (locObj.category === 'hostel') {
    return (
      <Marker position={locObj.cd} className="marker" icon={blueIcon}>
        <Popup className="pup">
          <h1>{locObj.name}</h1>
          {locObj.img}
          <p>{locObj.desc}</p>
          <div className="c-btn-group">
            <a href="https://" className="c-btn hs">
              <span>
                <Icon.Briefcase />
              </span>
            </a>
            <a href="https://" className="c-btn learn-e">
              <span>
                <Icon.Info />
              </span>
            </a>
            <a href="https://" className="c-btn map">
              <span>
                <Icon.MapPin />
              </span>
            </a>
            <a href="https://" className="c-btn ph">
              <Icon.Phone />
            </a>
            <a href="https://" className="c-btn web">
              <Icon.Globe />
            </a>
          </div>
        </Popup>
      </Marker>
    );
  }
  return <div />;
});

const sport = loc.map((locObj) => {
  if (locObj.category === 'sport') {
    return (
      <Marker position={locObj.cd} className="marker" icon={blackIcon}>
        <Popup className="pup">
          <h1>{locObj.name}</h1>
          {locObj.img}
          <p>{locObj.desc}</p>
          <div className="c-btn-group">
            <a href="https://" className="c-btn sp">
              <span>
                <Icon.Target />
              </span>
            </a>
            <a href="https://" className="c-btn learn-e">
              <span>
                <Icon.Info />
              </span>
            </a>
            <a href="https://" className="c-btn map">
              <span>
                <Icon.MapPin />
              </span>
            </a>
            <a href="https://" className="c-btn ph">
              <Icon.Phone />
            </a>
            <a href="https://" className="c-btn web">
              <Icon.Globe />
            </a>
          </div>
        </Popup>
      </Marker>
    );
  }
  return <div />;
});

export {
  acad, hostel, eat, sport,
};
