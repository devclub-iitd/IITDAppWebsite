import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import events from './shared/events';
import ToTop from './minis/goToTop';
import EventsCard from './eventsCard';

const ResponsiveGridLayout = WidthProvider(Responsive);

function Events() {
    const layoutLg = [];
    const layoutMd = [];
    const layoutSm = [];
    const layoutXs = [];
    const layoutXxs = [];
    const eventsRoll = [];
    for (let j = 0; j < events.length; j += 1) {
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
            h: 1.2,
            isResizable: false,
            useCSSTransforms: true,
            autoSize: true,
            verticalCompact: true,
            horizontalCompact: true,
            isDraggable: false,
        });
        layoutXs.push({
            i: j.toString(),
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
            i: j.toString(),
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
        const value = events[j];
        eventsRoll.push(
            <div key={j} className="eventsGridCell">
                <EventsCard eventsObj={value} />
            </div>
        );
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
                {eventsRoll}
            </ResponsiveGridLayout>
            <ToTop />
        </>
    );
}

export default Events;
