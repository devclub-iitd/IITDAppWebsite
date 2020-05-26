/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import ExploreCard from './exploreCard';
import explore from './shared/explore';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Explore extends React.Component {
    render() {
        const layoutLg = [];
        for (let j = 0; j < explore.length; j += 1) {
            layoutLg.push({
                i: `${j}`,
                x: (j % 4) * 3,
                y: Math.floor((j / 4) * 1.75),
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            });
        }
        const layouts = { lg: layoutLg };
        const exploreRoll = explore.map((exploreObj) => {
            return (
                <div
                    key={exploreObj.id}
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <ExploreCard exploreObj={exploreObj} />
                </div>
            );
        });
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 550, xxs: 0 }}
                cols={{ lg: 12, md: 9, sm: 6, xs: 6, xxs: 3 }}
                horizontalCompact
                autoSize
            >
                {exploreRoll}
            </ResponsiveGridLayout>
        );
    }
}

export default Explore;
