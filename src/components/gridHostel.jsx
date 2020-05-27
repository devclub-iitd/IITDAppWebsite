/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import * as Icon from 'react-feather';
import HostelCard from './hostelCard';
import hostels from './shared/hostels';

const ResponsiveGridLayout = WidthProvider(Responsive);

class HostelGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: '', filtered: hostels };

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
            currentList = hostels;

            newList = currentList.filter((item) => {
                const lc = item.name.toLowerCase();

                const filterWord = event.target.value.toLowerCase();

                return lc.includes(filterWord);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = hostels;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList,
        });
    }

    render() {
        const layoutLg = [];
        const hostelRoll = [];
        for (let j = 0; j < this.state.filtered.length; j += 1) {
            layoutLg.push({
                i: j.toString(),
                x: (j % 4) * 3,
                y: (j % 4) * 2,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            const value = this.state.filtered[j];
            hostelRoll.push(
                <div key={j} className="hostelGrid">
                    <HostelCard hostelObj={value} />
                </div>
            );
        }
        const layouts = { lg: layoutLg };

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
                    verticalCompact
                    autoSize
                >
                    {hostelRoll}
                </ResponsiveGridLayout>
            </>
        );
    }
}

export default HostelGrid;
