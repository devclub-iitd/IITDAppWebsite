/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import CampusCard from './campusCard';
import Search from './search';
import loc from './shared/locations';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Campus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: '', filtered: loc };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ searchQuery: event.target.value });

        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (event.target.value !== '') {
            // Assign the original list to currentList
            currentList = loc;

            newList = currentList.filter((item) => {
                const lc = item.name.toLowerCase();

                const filterWord = event.target.value.toLowerCase();

                return lc.includes(filterWord);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = loc;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList,
        });
    }

    render() {
        const layoutLg = [];
        const layoutSm = [];
        const layoutMd = [];
        const layoutMd2 = [];
        const layoutXs = [];
        const campusRoll = [];
        for (let j = 0; j < this.state.filtered.length; j += 1) {
            layoutLg.push({
                i: j.toString(),
                x: (j % 6) * 2,
                y: Math.floor((j / 6) * 3),
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            layoutMd.push({
                i: j.toString(),
                x: (j % 5) * 2,
                y: Math.floor((j / 5) * 3),
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            layoutMd2.push({
                i: j.toString(),
                x: (j % 4) * 2,
                y: Math.floor((j / 4) * 3),
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            layoutSm.push({
                i: j.toString(),
                x: (j % 3) * 2,
                y: Math.floor((j / 3) * 3),
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            layoutXs.push({
                i: j.toString(),
                x: (j % 2) * 2,
                y: Math.floor((j / 2) * 3),
                w: 2,
                h: 3,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            const value = this.state.filtered[j];
            campusRoll.push(
                <div
                    key={j}
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <CampusCard locObj={value} />
                </div>
            );
        }

        const layouts = {
            lg: layoutLg,
            sm: layoutSm,
            md: layoutMd,
            md2: layoutMd2,
            xs: layoutXs,
        };

        return (
            <>
                <Search
                    searchQuery={this.state.searchQuery}
                    onChange={this.handleChange}
                />

                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    breakpoints={{
                        lg: 1368,
                        md: 1144,
                        md2: 938,
                        sm: 670,
                        xs: 396,
                        xxs: 0,
                    }}
                    cols={{ lg: 12, md: 10, md2: 8, sm: 6, xs: 4, xxs: 2 }}
                    horizontalCompact
                    autoSize
                    verticalCompact
                >
                    {campusRoll}
                </ResponsiveGridLayout>
            </>
        );
    }
}

export default Campus;
