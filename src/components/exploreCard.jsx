/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
// eslint-disable-next-line no-unused-vars
import Link from 'react-router';
import { SocialIcon } from 'react-social-icons';
import devclub from './images/explore/devclub.jpg';

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
    {
        i: 'a',
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        autoSize: false,
        isResizable: false,
        isDraggable: false,
    },
    {
        i: 'b',
        x: 1,
        y: 0,
        w: 1,
        h: 1,
        autoSize: false,
        isResizable: false,
        isDraggable: false,
    },
    {
        i: 'c',
        x: 0,
        y: 1.3,
        w: 2,
        h: 0.25,
        autoSize: false,
        isResizable: false,
        isDraggable: false,
    },
];
const ExploreCard = () => (
    <ResponsiveGridLayout
        className="layout"
        layouts={{ xs: layout, xxs: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 2, xxs: 2 }}
    >
        <div key="a" className="left-e">
            <img src={devclub} alt="DevClub IITD" className="card-img" />
        </div>
        <div key="b" autoSize="true" className="right-e">
            <h1>DevClub</h1>
            <p>Dev Club is a community of tech-minded people in IIT Delhi.</p>
        </div>
        <div key="c" autoSize="true" className="links-e">
            <SocialIcon
                className="si"
                url="http://twitter.com/jaketrent"
                fgColor="#ffffff"
                style={{ height: 35, width: 35 }}
            />{' '}
            <SocialIcon
                className="si"
                url="http://linkedin.com/in/jaketrent"
                fgColor="#ffffff"
                style={{ height: 35, width: 35 }}
            />{' '}
            <SocialIcon
                className="si"
                url="http://github.com/in"
                fgColor="#ffffff"
                bgColor="#000000"
                style={{ height: 35, width: 35 }}
            />{' '}
            <SocialIcon
                className="si"
                url="http://facebook.com/in/jaketrent"
                fgColor="#ffffff"
                style={{ height: 35, width: 35 }}
            />{' '}
            <SocialIcon
                className="si"
                url="http://instagram.com/in/jaketrent"
                fgColor="#ffffff"
                bgColor="#ff5a01"
                style={{ height: 35, width: 35 }}
            />
        </div>
    </ResponsiveGridLayout>
);

export default ExploreCard;
