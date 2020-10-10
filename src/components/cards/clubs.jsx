import React from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import loader from './loader.gif';

function ExploreCard({ exploreObj, show }) {
  return (
    <>
      <div className="box">
        <div key="a" className="left-e">
          <LazyLoad height="100%" once offset={200} resize placeholder={<img src={loader} alt="loader" className="card-img" />}>
            {exploreObj.img}
          </LazyLoad>

          <div className="c-btn-group">
            <div
              className="c-btn learn-e"
              onClick={() => {
                show(exploreObj);
              }}
              onKeyDown={() => {}}
              tabIndex="0"
              type="button"
              role="button"
            >
              <span>
                <Icon.Info height="30" strokeWidth="2" />
              </span>
            </div>

            {exploreObj.fbUrl !== '' && (
            <a className="c-btn fb" href={exploreObj.facebookUrl}>
              <span>
                <Icon.Facebook height="30" strokeWidth="2" />
              </span>
            </a>
            )}

            {exploreObj.instaUrl !== '' && (
              <a className="c-btn insta" href={exploreObj.instaUrl}>
                <Icon.Instagram height="30" strokeWidth="2" />
              </a>
            )}

            {exploreObj.linkedinUrl !== '' && (
              <a className="c-btn linkedin" href={exploreObj.linkedinUrl}>
                <Icon.Linkedin height="40" strokeWidth="2" style={{ paddingLeft: 2, paddingRight: 2 }} />
              </a>
            )}

            {exploreObj.webUrl !== '' && (
              <a className="c-btn web" href={exploreObj.webUrl}>
                <Icon.Globe height="30" strokeWidth="2" />
              </a>
            )}

            {exploreObj.extraIcon}
          </div>
        </div>
        <div key="b" className="right-e">
          <h1>{exploreObj.name}</h1>
          <p>{exploreObj.desc}</p>
        </div>
      </div>
    </>
  );
}

function RodalContent({ rodalObj }) {
  const temp = rodalObj;

  let showcase = [];

  showcase = temp.showcase;

  const showcaseRoll = [];

  let len = '';

  if (showcase) {
    len = showcase.length;
  } else {
    len = 0;
  }

  let eventsShowcase = [];

  eventsShowcase = temp.eventsShowcase;

  const eventsShowcaseRoll = [];

  let lenEvents = '';

  if (showcase) {
    lenEvents = eventsShowcase.length;
  } else {
    lenEvents = 0;
  }

  let i = 0;
  for (i = 0; i < len; i += 1) {
    showcaseRoll.push(
      <div>
        <a href={rodalObj.showcaseLinks[i]}>
          <h2>{showcase[i]}</h2>
        </a>

        <p>{rodalObj.showcaseDesc[i]}</p>
      </div>,
    );
  }

  let j = 0;
  for (j = 0; j < lenEvents; j += 1) {
    eventsShowcaseRoll.push(
      <div>

        <h2><a href={rodalObj.eventsShowcaseLinks[i]}>{eventsShowcase[j]}</a></h2>

      </div>,
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="rodal-h1" style={{ fontWeight: '900' }}>
        {rodalObj.name}
      </h1>
      <br />
      <div className="c-btn-group">
        {rodalObj.fbUrl !== '' && (
        <a className="c-btn fb" href={rodalObj.fbUrl}>
          <span>
            <Icon.Facebook height="30" strokeWidth="2" />
          </span>
        </a>
        )}

        {rodalObj.instaUrl !== '' && (
          <a className="c-btn insta" href={rodalObj.instaUrl}>
            <Icon.Instagram height="30" strokeWidth="2" />
          </a>
        )}

        {rodalObj.linkedinUrl !== '' && (
          <a className="c-btn linkedin" href={rodalObj.linkedinUrl}>
            <Icon.Linkedin height="40" strokeWidth="2" style={{ paddingLeft: 2, paddingRight: 2 }} />
          </a>
        )}

        {rodalObj.webUrl !== '' && (
          <a className="c-btn web" href={rodalObj.webUrl}>
            <Icon.Globe height="30" strokeWidth="2" />
          </a>
        )}

        {rodalObj.extraIcon}
      </div>
      <div
        className="left-e"
        style={{
          maxWidth: 200,
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {rodalObj.img}
      </div>
      <h2>{rodalObj.desc}</h2>
      { showcaseRoll.length > 0 && <h2 style={{ fontSize: 20, fontWeight: '900' }}>SHOWCASE</h2> }
      <h2>{showcaseRoll}</h2>
      { eventsShowcaseRoll.length > 0 && <h2 style={{ fontSize: 20, fontWeight: '900' }}>EVENTS</h2> }
      <h2>{eventsShowcaseRoll}</h2>
    </div>
  );
}

ExploreCard.propTypes = {
  exploreObj: PropTypes.objectOf(PropTypes.string, PropTypes.number)
    .isRequired,
  show: PropTypes.func.isRequired,
};
RodalContent.propTypes = {
  rodalObj: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export { ExploreCard, RodalContent };
