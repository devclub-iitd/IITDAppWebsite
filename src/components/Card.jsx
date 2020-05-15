/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import GridLayout from 'react-grid-layout';
import jwala from './images/jwala.png';

const layout = [
    {
        i: 'a',
        x: 0,
        y: 0,
        w: 1,
        h: 2.2,
        static: true,
        isResizable: false,
        autoSize: true,
        marginLeft: 5,
        marginRight: 5,
    },
    {
        i: 'b',
        x: 1,
        y: 0,
        w: 1,
        h: 2.2,
        static: true,
        isResizable: false,
        autoSize: true,
    },
];
const HostelCard = () => (
    <>
        <div className="card-title">
            <h1>Jwalamukhi Hostel</h1>
        </div>
        <div className="card-bg">
            <h1 className="card-subtitle">Est. 1965</h1>
            <GridLayout
                className="layout"
                layout={layout}
                cols={2}
                rowHeight={30}
                width={200}
                // eslint-disable-next-line react/jsx-boolean-value
                autoSize={true}
                containerPadding={[0, 0]}
            >
                <div key="a" autoSize="true">
                    <img
                        src={jwala}
                        alt="Jwalamukhi Hostel"
                        className="card-img"
                    />
                </div>
                <div key="b" autoSize="true">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        Lorem ipsum dolor sit amet.{' '}
                    </p>
                </div>
            </GridLayout>
        </div>
    </>
);

export default HostelCard;
