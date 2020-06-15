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
import news from './shared/events';
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
    for (let j = 1; j <= 5; j += 1) {
        layoutLg.push({
            i: j.toString(),
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
            i: j.toString(),
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
            i: j.toString(),
            x: j % 2,
            y: (j % 3) * 2.2,
            w: 1,
            h: 1.8,
            isResizable: false,
            useCSSTransforms: true,
            autoSize: true,
            verticalCompact: true,
            horizontalCompact: true,
            isDraggable: false,
        });
        layoutXs.push({
            i: j.toString(),
            x: 0,
            y: j * 3,
            w: 1,
            h: 2.8,
            isResizable: false,
            useCSSTransforms: true,
            autoSize: true,
            verticalCompact: true,
            horizontalCompact: true,
            isDraggable: false,
        });
        layoutXxs.push({
            i: j.toString(),
            x: 0,
            y: j * 3.4,
            w: 1,
            h: 3.3,
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
                className="layout"
                layouts={layouts}
                breakpoints={{
                    lg: 1200,
                    md: 996,
                    md2: 768,
                    sm: 620,
                    xs: 396,
                    xxs: 340,
                }}
                cols={{ lg: 2, md: 1, md2: 1, sm: 1, xs: 1, xxs: 1 }}
                horizontalCompact
            >
                <div key="1">
                    <EventsCard />
                </div>
                <div key="2">
                    <EventsCard />
                </div>
                <div key="3">
                    <EventsCard />
                </div>
                <div key="4">
                    <EventsCard />
                </div>
                <div key="5">
                    <EventsCard />
                </div>
            </ResponsiveGridLayout>
            <ToTop />
        </>
    );
}

export default Events;
