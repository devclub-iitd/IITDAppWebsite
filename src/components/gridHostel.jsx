/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import * as Icon from 'react-feather';
import HostelCard from './hostelCard';
import hostels from './shared/hostels';

const ResponsiveGridLayout = WidthProvider(Responsive);

class HostelGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const layoutLg = [
            {
                i: '0',
                x: 0,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '1',
                x: 3,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '2',
                x: 6,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '3',
                x: 9,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '4',
                x: 0,
                y: 2,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '5',
                x: 3,
                y: 2,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '6',
                x: 6,
                y: 2,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '7',
                x: 9,
                y: 2,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '8',
                x: 0,
                y: 4,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '9',
                x: 3,
                y: 4,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '10',
                x: 6,
                y: 4,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '11',
                x: 9,
                y: 4,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: '12',
                x: 0,
                y: 6,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layouts = { lg: layoutLg };
        const hostelRoll = hostels.map((hostelObj) => {
            return (
                <div key={hostelObj.id} className="hostelGrid">
                    <HostelCard hostelObj={hostelObj} />
                </div>
            );
        });

        return (
            <>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search ..."
                        // eslint-disable-next-line react/destructuring-assignment
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                    />
                    <span className="search-icon">
                        <Icon.Search strokeWidth="3" height="31.5" />
                    </span>
                </div>
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    breakpoints={{
                        lg: 1200,
                        md: 996,
                        sm: 665,
                        xs: 480,
                        xxs: 0,
                    }}
                    cols={{ lg: 12, md: 9, sm: 6, xs: 3, xxs: 3 }}
                    horizontalCompact
                    autoSize
                >
                    {hostelRoll}
                </ResponsiveGridLayout>
            </>
        );
    }
}

export default HostelGrid;
