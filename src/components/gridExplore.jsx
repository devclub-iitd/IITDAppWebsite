/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import ExploreCard from './exploreCard';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Explore extends React.Component {
    render() {
        const layoutLg = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'b',
                x: 3,
                y: 0,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'c',
                x: 6,
                y: 0,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'd',
                x: 9,
                y: 0,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'e',
                x: 0,
                y: 1.75,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'f',
                x: 3,
                y: 1.75,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'g',
                x: 6,
                y: 1.75,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'h',
                x: 9,
                y: 1.75,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'i',
                x: 9,
                y: 3.5,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'j',
                x: 0,
                y: 3.5,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'k',
                x: 3,
                y: 3.5,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'l',
                x: 6,
                y: 3.5,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'm',
                x: 0,
                y: 3.5,
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layouts = { lg: layoutLg };
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 550, xxs: 0 }}
                cols={{ lg: 12, md: 9, sm: 6, xs: 6, xxs: 3 }}
                horizontalCompact
                autoSize
            >
                <div
                    key="a"
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <ExploreCard />
                </div>
                <div key="b" className="exploreGrid" autoSize="true">
                    <ExploreCard />
                </div>
                <div key="c" className="exploreGrid" autoSize="true">
                    <ExploreCard />
                </div>
                <div
                    key="d"
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <ExploreCard />
                </div>
                <div key="e" className="exploreGrid" autoSize="true">
                    <ExploreCard />
                </div>
                <div key="f" className="exploreGrid" autoSize="true">
                    <ExploreCard />
                </div>
                <div key="g" className="exploreGrid" autoSize="true">
                    <ExploreCard />
                </div>
                <div key="h" className="exploreGrid" autoSize="true">
                    <ExploreCard />
                </div>
                <div key="i" className="exploreGrid" autoSize="true">
                    <ExploreCard />
                </div>
                <div
                    key="j"
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <ExploreCard />
                </div>
                <div key="k" className="exploreGrid" autoSize="true">
                    <ExploreCard />
                </div>
                <div key="l" className="exploreGrid" autoSize="true">
                    <ExploreCard />
                </div>
                <div
                    key="m"
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <ExploreCard />
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default Explore;
