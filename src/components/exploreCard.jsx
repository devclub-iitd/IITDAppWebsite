/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Link from 'react-router';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';

function ExploreCard({ exploreObj }) {
    return (
        <div className="box">
            <div key="a" className="left-e">
                {exploreObj.img}
                <div className="c-btn-group">
                    <a className="c-btn learn-e" href={exploreObj.learnUrl}>
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
    );
}
ExploreCard.propTypes = {
    exploreObj: PropTypes.objectOf(PropTypes.string, PropTypes.number)
        .isRequired,
};

export default ExploreCard;
