/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import CampusCard from './campusCard';
import loc from './shared/locations';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Campus extends React.Component {
    render() {
        const layoutLg = [];
        for (let j = 0; j < loc.length; j += 1) {
            layoutLg.push({
                i: `${j}`,
                x: (j % 6) * 2,
                y: Math.floor((j / 6) * 3),
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            });
        }
        const layoutSm = [];
        for (let j = 0; j < loc.length; j += 1) {
            layoutSm.push({
                i: `${j}`,
                x: (j % 6) * 2,
                y: Math.floor((j / 6) * 3.15),
                w: 2,
                h: 3.15,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            });
        }
        const layouts = { lg: layoutLg, sm: layoutSm };
        const campusRoll = loc.map((locObj) => {
            return (
                <div
                    key={locObj.id}
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <CampusCard locObj={locObj} />
                </div>
            );
        });
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{
                    lg: 1200,
                    md: 996,
                    md2: 768,
                    sm: 600,
                    xs: 396,
                    xxs: 0,
                }}
                cols={{ lg: 12, md: 10, md2: 8, sm: 6, xs: 4, xxs: 2 }}
                horizontalCompact
                autoSize
            >
                {campusRoll}
            </ResponsiveGridLayout>
        );
    }
}

export default Campus;
