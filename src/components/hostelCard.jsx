/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';

const HostelCard = ({ hostelObj, show }) => (
  <>
    <div className="hostel-card-title">
      <h1>{hostelObj.name}</h1>
    </div>
    <div className="hostel-card-bg">
      <h1 className="card-subtitle">
        Est.
        {hostelObj.est}
      </h1>
      <div key="a" autoSize="true" className="left1">
        {hostelObj.image}
      </div>
      <div key="b" autoSize="true" className="right">
        <p>
          {hostelObj.description}
          {' '}
        </p>
      </div>
      <div key="c" autoSize="true" className="left2">
        <div className="c-btn-group">
          {hostelObj.category}
          <a className="c-btn fd" href={hostelObj.mapUrl}>
            <span className="hostel-link">
              <Icon.MapPin height="15" strokeWidth="3" />
              {' '}
              Find on
              Map
              {'  '}
            </span>
          </a>
          <a
            className="c-btn learn-e"
            role="button"
            onClick={() => show(hostelObj)}
          >
            <span className="hostel-link">
              <Icon.Info height="15" strokeWidth="3" />
              More Info
              {'  '}
            </span>
          </a>
        </div>
      </div>
    </div>
  </>
);

function RodalContent({ rodalObj }) {
  const temp = rodalObj;
  let notableAlumni = [];
  notableAlumni = temp.notableAlumni;
  const notableAlumniRoll = [];
  let len = '';
  notableAlumni ? (len = notableAlumni.length) : (len = 0);
  let j = 0;
  for (j = 0; j < len; j += 1) {
    notableAlumniRoll.push(
      <div>
        <div
          className="left-e"
          style={{
            maxWidth: 200,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            objectFit: 'cover',
          }}
        >
          <img
            src={rodalObj.notableAlumniImages[j]}
            alt={notableAlumni[j]}
            style={{
              position: 'relative',
              objectFit: 'cover',
              backgroundSize: 'cover',
              maxWidth: 150,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 20,
            }}
          />
        </div>
        <a href={rodalObj.notableAlumniLinks[j]}>
          <h2>{notableAlumni[j]}</h2>
        </a>
        <h4>{rodalObj.notableAlumniDesc[j]}</h4>
      </div>,
    );
  }

  notableAlumni ? (len = notableAlumni.length) : (len = 0);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="rodal-h1" style={{ fontWeight: '900' }}>
        {rodalObj.name}
      </h1>
      <div className="c-btn-group">
        {rodalObj.category}
        <a
          style={{ textDecoration: 'none' }}
          className="c-btn fd"
          href={rodalObj.mapUrl}
        >
          <span className="hostel-link">
            <Icon.MapPin height="15" strokeWidth="3" />
            {' '}
            Find on Map
            {'  '}
          </span>
        </a>
      </div>
      <div
        className="left-e"
        style={{
          maxWidth: 200,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          objectFit: 'cover',
        }}
      >
        {rodalObj.image}
      </div>
      <h2>{rodalObj.description}</h2>
      <h2 style={{ fontSize: 20, fontWeight: '900' }}>WARDEN</h2>
      <h2>{rodalObj.warden}</h2>
      <a href={rodalObj.wardenLink}>Contact Warden</a>
      <h2 style={{ fontSize: 20, fontWeight: '900' }}>NOTABLE ALUMNI</h2>
      <h2>{notableAlumniRoll}</h2>
    </div>
  );
}

RodalContent.propTypes = {
  rodalObj: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

HostelCard.propTypes = {
  hostelObj: PropTypes.objectOf(PropTypes.string, PropTypes.number)
    .isRequired,
  show: PropTypes.func.isRequired,
};

export { HostelCard, RodalContent };
