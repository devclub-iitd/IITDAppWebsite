/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import NewsCard from './newsCard';

const ResponsiveGridLayout = WidthProvider(Responsive);

class News extends React.Component {
    render() {
        const layoutLg = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 1,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'b',
                x: 1,
                y: 0,
                w: 1,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'c',
                x: 0,
                y: 1.8,
                w: 1,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'd',
                x: 1,
                y: 1.8,
                w: 1,
                h: 1.75,
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
                w: 1,
                h: 1.75,
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
                w: 1,
                h: 1.75,
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
                w: 1,
                h: 1.75,
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
                w: 1,
                h: 1.75,
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
                w: 1,
                h: 1.75,
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
                w: 1,
                h: 1.75,
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
                w: 1,
                h: 1.75,
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
                w: 1,
                h: 1.75,
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
                w: 1,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layoutXs = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 1,
                h: 2.8,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
            },
            {
                i: 'b',
                x: 0,
                y: 1,
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
            },
            {
                i: 'b',
                x: 0,
                y: 1,
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
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
                w: 1,
                h: 2.8,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layouts = { lg: layoutLg, xxs: layoutXxs, xs: layoutXs };
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{
                    lg: 1200,
                    md: 996,
                    md2: 768,
                    sm: 580,
                    xs: 396,
                    xxs: 0,
                }}
                cols={{ lg: 2, md: 1, md2: 1, sm: 1, xs: 1, xxs: 1 }}
                horizontalCompact
                autoSize
            >
                <div
                    key="a"
                    className="newsGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <NewsCard />
                </div>
                <div key="b" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="c" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="d" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="e" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="f" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="g" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="h" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="i" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="j" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="k" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="l" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="m" className="newsGrid" autoSize="true">
                    <NewsCard />
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default News;
