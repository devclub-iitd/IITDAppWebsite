/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import HostelCard from './Card';

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyFirstGrid extends React.Component {
    render() {
        const layoutLg = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
            },
            { i: 'b', x: 3, y: 0, w: 3, h: 2, isResizable: false },
            { i: 'c', x: 6, y: 0, w: 3, h: 2, isResizable: false },
            { i: 'd', x: 9, y: 0, w: 3, h: 2, isResizable: false },
            { i: 'e', x: 0, y: 1, w: 3, h: 2, isResizable: false },
            { i: 'f', x: 3, y: 1, w: 3, h: 2, isResizable: false },
            { i: 'g', x: 6, y: 1, w: 3, h: 2, isResizable: false },
            { i: 'h', x: 9, y: 1, w: 3, h: 2, isResizable: false },
            { i: 'i', x: 9, y: 2, w: 3, h: 2, isResizable: false },
            { i: 'j', x: 0, y: 2, w: 3, h: 2, isResizable: false },
            { i: 'k', x: 3, y: 2, w: 3, h: 2, isResizable: false },
            { i: 'l', x: 6, y: 2, w: 3, h: 2, isResizable: false },
            { i: 'm', x: 0, y: 3, w: 3, h: 2, isResizable: false },
            { i: 'n', x: 3, y: 3, w: 3, h: 2, isResizable: false },
            { i: 'o', x: 6, y: 3, w: 3, h: 1, isResizable: false },
            { i: 'p', x: 9, y: 4, w: 3, h: 1, isResizable: false },
            { i: 'q', x: 0, y: 5, w: 3, h: 1, isResizable: false },
        ];
        const layouts = { lg: layoutLg };
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 8, sm: 3, xs: 2, xxs: 1 }}
                isResizable="true"
                useCSSTransforms="true"
            >
                <div key="a" className="hostelGrid" isResizable="true">
                    <HostelCard />
                </div>
                <div key="b" className="hostelGrid">
                    <HostelCard />
                </div>
                <div key="c" className="hostelGrid">
                    <HostelCard />
                </div>
                <div key="d" className="hostelGrid" isResizable="true">
                    <HostelCard />
                </div>
                <div key="e" className="hostelGrid">
                    <HostelCard />
                </div>
                <div key="f" className="hostelGrid">
                    <HostelCard />
                </div>
                <div key="g" className="hostelGrid" isResizable="true">
                    <HostelCard />
                </div>
                <div key="h" className="hostelGrid">
                    <HostelCard />
                </div>
                <div key="i" className="hostelGrid">
                    <HostelCard />
                </div>
                <div key="j" className="hostelGrid" isResizable="true">
                    <HostelCard />
                </div>
                <div key="k" className="hostelGrid">
                    <HostelCard />
                </div>
                <div key="l" className="hostelGrid">
                    <HostelCard />
                </div>
                <div key="m" className="hostelGrid" isResizable="true">
                    <HostelCard />
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default MyFirstGrid;
