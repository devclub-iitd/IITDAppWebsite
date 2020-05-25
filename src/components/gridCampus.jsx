/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import CampusCard from './campusCard';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Campus extends React.Component {
    render() {
        const layoutLg = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'b',
                x: 2,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'c',
                x: 4,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'd',
                x: 6,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'e',
                x: 8,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'f',
                x: 10,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'g',
                x: 0,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'h',
                x: 0,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'i',
                x: 2,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'j',
                x: 4,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'k',
                x: 6,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'l',
                x: 8,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'm',
                x: 10,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layoutXxs = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
            },
            {
                i: 'b',
                x: 0,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'c',
                x: 0,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'd',
                x: 6,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'e',
                x: 8,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'f',
                x: 10,
                y: 0,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'g',
                x: 0,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'h',
                x: 0,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'i',
                x: 2,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'j',
                x: 4,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'k',
                x: 6,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'l',
                x: 8,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'm',
                x: 10,
                y: 3,
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layouts = { lg: layoutLg, xxs: layoutXxs };
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
                <div
                    key="a"
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <CampusCard />
                </div>
                <div key="b" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="c" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="d" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="e" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="f" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="g" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="h" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="i" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="j" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="k" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="l" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
                <div key="m" className="exploreGrid" autoSize="true">
                    <CampusCard />
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default Campus;
