/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button } from 'semantic-ui-react';
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
                <Button fluid className="learn">
                    Learn More
                </Button>
                <Button fluid className="map-link">
                    Find On Google Maps
                </Button>
            </div>
        </div>
    </>
);

export default HostelCard;
