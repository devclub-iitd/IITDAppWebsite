/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyFirstGrid extends React.Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        const layout = [
            { i: 'a', x: 0, y: 0, w: 3, h: 1 },
            { i: 'b', x: 3, y: 0, w: 3, h: 1 },
            { i: 'c', x: 6, y: 0, w: 3, h: 1 },
            { i: 'd', x: 9, y: 0, w: 3, h: 1 },
            { i: 'e', x: 0, y: 1, w: 3, h: 1 },
            { i: 'f', x: 3, y: 1, w: 3, h: 1 },
            { i: 'g', x: 6, y: 1, w: 3, h: 1 },
            { i: 'h', x: 9, y: 1, w: 3, h: 1 },
            { i: 'i', x: 9, y: 2, w: 3, h: 1 },
            { i: 'j', x: 0, y: 2, w: 3, h: 1 },
            { i: 'k', x: 3, y: 2, w: 3, h: 1 },
            { i: 'l', x: 6, y: 2, w: 3, h: 1 },
            { i: 'm', x: 0, y: 3, w: 3, h: 1 },
        ];
        const layouts = { lg: layout };
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            >
                <div key="a" className="hostelGrid" />
                <div key="b" className="hostelGrid" />
                <div key="c" className="hostelGrid" />
                <div key="d" className="hostelGrid" />
                <div key="e" className="hostelGrid" />
                <div key="f" className="hostelGrid" />
                <div key="g" className="hostelGrid" />
                <div key="h" className="hostelGrid" />
                <div key="i" className="hostelGrid" />
                <div key="j" className="hostelGrid" />
                <div key="k" className="hostelGrid" />
                <div key="l" className="hostelGrid" />
                <div key="m" className="hostelGrid" />
            </ResponsiveGridLayout>
        );
    }
}

export default MyFirstGrid;
