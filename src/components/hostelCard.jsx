/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Icon from 'react-feather';
import jwala from './images/hostels/jwala.png';

const HostelCard = () => (
    <>
        <div className="hostel-card-title">
            <h1>Jwalamukhi Hostel</h1>
        </div>
        <div className="hostel-card-bg">
            <h1 className="card-subtitle">Est. 1965</h1>
            <div key="a" autoSize="true" className="left1">
                <img src={jwala} alt="Jwalamukhi Hostel" className="card-img" />
            </div>
            <div key="b" autoSize="true" className="right">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    Lorem ipsum dolor sit amet.{' '}
                </p>
            </div>
            <div key="c" autoSize="true" className="left2">
                <div className="c-btn-group">
                    <a className="c-btn fd">
                        <span>
                            <Icon.MapPin /> Find on Map
                        </span>
                    </a>
                    <a className="c-btn learn-e">
                        <span>
                            <Icon.Info /> Learn More
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </>
);

export default HostelCard;
