/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Button } from 'semantic-ui-react';
import jwala from './images/hostels/jwala.png';

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
    {
        i: 'a',
        x: 0,
        y: 0,
        w: 1,
        h: 0.75,
        autoSize: true,
        isResizable: false,
        isDraggable: false,
    },
    {
        i: 'b',
        x: 1,
        y: 0,
        w: 1,
        h: 1.5,
        autoSize: true,
        isResizable: false,
        isDraggable: false,
    },
    {
        i: 'c',
        x: 0,
        y: 0.75,
        w: 1,
        h: 0.5,
        autoSize: true,
        isResizable: false,
        isDraggable: false,
    },
];
const HostelCard = () => (
    <>
        <div className="card-title">
            <h1>Jwalamukhi Hostel</h1>
        </div>
        <div className="card-bg">
            <h1 className="card-subtitle">Est. 1965</h1>
            <ResponsiveGridLayout
                className="layout"
                layouts={{ xs: layout, xxs: layout }}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 2, xxs: 2 }}
            >
                <div key="a" autoSize="true" className="left1">
                    <img
                        src={jwala}
                        alt="Jwalamukhi Hostel"
                        className="card-img"
                    />
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
            </ResponsiveGridLayout>
        </div>
    </>
);

export default HostelCard;
