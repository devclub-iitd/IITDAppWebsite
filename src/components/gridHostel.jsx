/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Search from './search';
import HostelCard from './hostelCard';
import hostels from './shared/hostels';
import CheckBox from './shared/checkBox';
import ToTop from './goToTop';

const ResponsiveGridLayout = WidthProvider(Responsive);

class HostelGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            filtered: hostels,
            options: [
                {
                    id: 1,
                    value: 'Girls Hostels',
                    isChecked: true,
                    for: 'girls',
                },
                {
                    id: 2,
                    value: 'Boys Hostels',
                    isChecked: true,
                    for: 'boys',
                },
            ],
            showFilters: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClickFilter = this.handleClickFilter.bind(this);
        this.handleCheckChieldElement = this.handleCheckChieldElement.bind(
            this
        );
    }

    handleCheckChieldElement = (event) => {
        const { options } = this.state;
        options.forEach((option) => {
            if (option.value === event.target.value)
                option.isChecked = event.target.checked;
        });
        this.setState({ options });

        const chosenOptions = options.filter(
            (option) => option.isChecked === true
        );
        const chosenCats = chosenOptions.map((a) => a.for);
        let newList = [];
        let currentList = [];
        if (this.state.searchQuery !== '') {
            currentList = hostels;

            currentList = hostels.filter((item) =>
                chosenCats.includes(item.for)
            );

            newList = currentList.filter((item) => {
                const lc = item.name.toLowerCase();

                const filterWord = this.state.searchQuery.toLowerCase();

                return lc.includes(filterWord);
            });
        } else {
            newList = hostels.filter((item) => chosenCats.includes(item.for));
        }
        this.setState({
            filtered: newList,
        });
    };

    handleClickFilter = () => {
        this.setState((prevState) => ({ showFilters: !prevState.showFilters }));
    };

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
        const layoutMd = [];
        const layoutSm = [];
        const layoutXs = [];
        const layoutXxs = [];
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
            layoutMd.push({
                i: j.toString(),
                x: (j % 3) * 3,
                y: (j % 3) * 2,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            layoutSm.push({
                i: j.toString(),
                x: (j % 2) * 3,
                y: (j % 2) * 2,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            layoutXs.push({
                i: j.toString(),
                x: (j % 2) * 3,
                y: (j % 2) * 2,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            layoutXxs.push({
                i: j.toString(),
                x: (j % 1) * 3,
                y: (j % 1) * 2,
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
        const layouts = {
            lg: layoutLg,
            md: layoutMd,
            sm: layoutSm,
            xs: layoutXs,
            xxs: layoutXxs,
        };

        return (
            <>
                <div className="search">
                    <Search
                        searchQuery={this.state.searchQuery}
                        onChange={this.handleChange}
                    />
                    <div
                        role="button"
                        className="filter-icon"
                        onClick={this.handleClickFilter}
                    >
                        Filter
                    </div>

                    {this.state.showFilters && (
                        <div className="filterCheckBoxes">
                            {this.state.options.map((option) => {
                                return (
                                    <>
                                        <CheckBox
                                            handleCheckChieldElement={
                                                this.handleCheckChieldElement
                                            }
                                            {...option}
                                        />
                                    </>
                                );
                            })}
                        </div>
                    )}
                </div>
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    breakpoints={{
                        lg: 1400,
                        md: 1200,
                        sm: 800,
                        xs: 600,
                        xxs: 0,
                    }}
                    cols={{ lg: 12, md: 9, sm: 6, xs: 3, xxs: 3 }}
                    horizontalCompact
                    verticalCompact
                    autoSize
                >
                    {hostelRoll}
                </ResponsiveGridLayout>
                <ToTop />
            </>
        );
    }
}

export default HostelGrid;
