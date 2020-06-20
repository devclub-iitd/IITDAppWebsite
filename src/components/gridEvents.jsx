/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Search from './search';
import NewsCard from './newsCard';
import events from './shared/events';
import CheckBox from './shared/checkBox';
import ToTop from './goToTop';
import EventsCard from './eventsCard';

const ResponsiveGridLayout = WidthProvider(Responsive);

function Events() {
    const layoutLg = [];
    const layoutMd = [];
    const layoutSm = [];
    const layoutXs = [];
    const layoutXxs = [];
    const newsRoll = [];
    for (let j = 0; j <= 10; j += 1) {
        layoutLg.push({
            i: (j + 1).toString(),
            x: j % 2,
            y: (j % 3) * 1.8,
            w: 1,
            h: 1.8,
            isResizable: false,
            useCSSTransforms: true,
            autoSize: true,
            verticalCompact: true,
            horizontalCompact: true,
            isDraggable: false,
        });
        layoutMd.push({
            i: (j + 1).toString(),
            x: j % 2,
            y: (j % 3) * 1.8,
            w: 1,
            h: 1.8,
            isResizable: false,
            useCSSTransforms: true,
            autoSize: true,
            verticalCompact: true,
            horizontalCompact: true,
            isDraggable: false,
        });
        layoutSm.push({
            i: (j + 1).toString(),
            x: j % 2,
            y: (j % 3) * 2.2,
            w: 1,
            h: 1.2,
            isResizable: false,
            useCSSTransforms: true,
            autoSize: true,
            verticalCompact: true,
            horizontalCompact: true,
            isDraggable: false,
        });
        layoutXs.push({
            i: (j + 1).toString(),
            x: j % 2,
            y: j * 3,
            w: 1,
            h: 1.2,
            isResizable: false,
            useCSSTransforms: true,
            autoSize: true,
            verticalCompact: true,
            horizontalCompact: true,
            isDraggable: false,
        });
        layoutXxs.push({
            i: (j + 1).toString(),
            x: 0,
            y: j * 3.4,
            w: 1,
            h: 1.2,
            isResizable: false,
            useCSSTransforms: true,
            autoSize: true,
            verticalCompact: true,
            horizontalCompact: true,
            isDraggable: false,
        });
    }
    const layouts = {
        lg: layoutLg,
        xxs: layoutXxs,
        xs: layoutXs,
        md: layoutMd,
        sm: layoutSm,
    };
    return (
        <>
            <ResponsiveGridLayout
                className="eventsGrid"
                layouts={layouts}
                breakpoints={{
                    lg: 1200,
                    md: 996,
                    md2: 640,
                    sm: 500,
                    xs: 396,
                    xxs: 340,
                }}
                cols={{ lg: 2, md: 2, md2: 1, sm: 1, xs: 1, xxs: 1 }}
                horizontalCompact
            >
                <div key="1" className="eventsGridCell">
                    <EventsCard eventsObj={events[0]} />
                </div>
            </ResponsiveGridLayout>
            <ToTop />
        </>
    );
}

export default Events;
