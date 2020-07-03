/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Link from 'react-router';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';

function ExploreCard({ exploreObj, show }) {
    return (
        <>
            <div className="box">
                <div key="a" className="left-e">
                    {exploreObj.img}

                    <div className="c-btn-group">
                        <a
                            className="c-btn learn-e"
                            role="button"
                            onClick={() => {
                                show(exploreObj);
                            }}
                        >
                            <span>
                                <Icon.Info height="30" strokeWidth="2" />
                            </span>
                        </a>
                        <a className="c-btn fb" href={exploreObj.fbUrl}>
                            <span>
                                <Icon.Facebook height="30" strokeWidth="2" />
                            </span>
                        </a>
                        <a className="c-btn insta" href={exploreObj.instaUrl}>
                            <Icon.Instagram height="30" strokeWidth="2" />
                        </a>
                        <a className="c-btn web" href={exploreObj.webUrl}>
                            <Icon.Globe height="30" strokeWidth="2" />
                        </a>
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

    showcase ? (len = showcase.length) : (len = 0);

    let eventsShowcase = [];
    eventsShowcase = temp.eventsShowcase;
    const eventsShowcaseRoll = [];
    let lenEvents = '';

    showcase ? (lenEvents = eventsShowcase.length) : (lenEvents = 0);

    let i = 0;
    for (i = 0; i < len; i += 1) {
        showcaseRoll.push(
            <div>
                <a href={rodalObj.showcaseLinks[i]}>
                    <h2>{showcase[i]}</h2>
                </a>

                <p>{rodalObj.showcaseDesc[i]}</p>
            </div>
        );
    }

    let j = 0;
    for (j = 0; j < lenEvents; j += 1) {
        eventsShowcaseRoll.push(
            <div>
                <a href={rodalObj.eventsShowcaseLinks[i]}>
                    <h2>{eventsShowcase[j]}</h2>
                </a>
            </div>
        );
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className="rodal-h1" style={{ fontWeight: '900' }}>
                {rodalObj.name}
            </h1>
            <br />
            <div className="c-btn-group">
                <a className="c-btn fb" href={rodalObj.fbUrl}>
                    <span>
                        <Icon.Facebook height="30" strokeWidth="2" />
                    </span>
                </a>
                <a className="c-btn insta" href={rodalObj.instaUrl}>
                    <Icon.Instagram height="30" strokeWidth="2" />
                </a>
                <a className="c-btn web" href={rodalObj.webUrl}>
                    <Icon.Globe height="30" strokeWidth="2" />
                </a>
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
            <h2 style={{ fontSize: 20, fontWeight: '900' }}>SHOWCASE</h2>
            <h2>{showcaseRoll}</h2>
            <h2 style={{ fontSize: 20, fontWeight: '900' }}>EVENTS</h2>
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
