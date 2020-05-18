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
            },
            {
                i: 'b',
                x: 1,
                y: 0,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'c',
                x: 0,
                y: 1.8,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'd',
                x: 1,
                y: 1.8,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'e',
                x: 8,
                y: 0,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'f',
                x: 10,
                y: 0,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'g',
                x: 0,
                y: 3,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'h',
                x: 0,
                y: 3,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'i',
                x: 2,
                y: 3,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'j',
                x: 4,
                y: 3,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'k',
                x: 6,
                y: 3,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'l',
                x: 8,
                y: 3,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'm',
                x: 10,
                y: 3,
                w: 1,
                h: 1.75,
                isResizable: false,
                autoSize: true,
            },
        ];
        const layoutXs = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
            },
            {
                i: 'b',
                x: 0,
                y: 1,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'c',
                x: 0,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'd',
                x: 6,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'e',
                x: 8,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'f',
                x: 10,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'g',
                x: 0,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'h',
                x: 0,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'i',
                x: 2,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'j',
                x: 4,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'k',
                x: 6,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'l',
                x: 8,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'm',
                x: 10,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
        ];
        const layoutXxs = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
            },
            {
                i: 'b',
                x: 0,
                y: 1,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'c',
                x: 0,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'd',
                x: 6,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'e',
                x: 8,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'f',
                x: 10,
                y: 0,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'g',
                x: 0,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'h',
                x: 0,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'i',
                x: 2,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'j',
                x: 4,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'k',
                x: 6,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'l',
                x: 8,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
            },
            {
                i: 'm',
                x: 10,
                y: 3,
                w: 1,
                h: 3,
                isResizable: false,
                autoSize: true,
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
                cols={{ lg: 2, md: 2, md2: 2, sm: 1, xs: 1, xxs: 1 }}
                horizontalCompact
                autoSize
            >
                <div
                    key="a"
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <NewsCard />
                </div>
                <div key="b" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="c" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="d" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="e" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="f" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="g" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="h" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="i" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="j" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="k" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="l" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
                <div key="m" className="exploreGrid" autoSize="true">
                    <NewsCard />
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default News;
