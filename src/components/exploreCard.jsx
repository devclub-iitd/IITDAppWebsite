/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Link from 'react-router';
import * as Icon from 'react-feather';
import devclub from './images/explore/devclub.jpg';

class ExploreCard extends React.Component {
    render() {
        return (
            <div className="box">
                <div key="a" className="left-e">
                    <img
                        src={devclub}
                        alt="DevClub IITD"
                        className="card-img"
                    />
                </div>
                <div key="b" className="right-e">
                    <h1>DevClub</h1>
                    <p>
                        Dev Club is a community of tech-minded people in IIT
                        Delhi.
                    </p>
                </div>
                <div key="c" className="links-e">
                    <div className="c-btn-group">
                        <a className="c-btn learn-e">
                            <span>
                                <Icon.Info />
                            </span>
                        </a>
                        <a className="c-btn fb">
                            <span>
                                <Icon.Facebook />
                            </span>
                        </a>
                        <a className="c-btn insta">
                            <Icon.Instagram />
                        </a>
                        <a className="c-btn web">
                            <Icon.Globe />
                        </a>
                        <a className="c-btn git">
                            <Icon.GitHub />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExploreCard;
