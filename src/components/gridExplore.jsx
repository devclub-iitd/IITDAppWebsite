/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Search from './search';
import ExploreCard from './exploreCard';
import explore from './shared/explore';
import CheckBox from './shared/checkBox';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: '', filtered: explore };

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
            currentList = explore;

            newList = currentList.filter((item) => {
                const lc = item.name.toLowerCase();

                const filterWord = event.target.value.toLowerCase();

                return lc.includes(filterWord);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = explore;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList,
        });
    }

    render() {
        const layoutLg = [];
        const exploreRoll = [];
        for (let j = 0; j < this.state.filtered.length; j += 1) {
            layoutLg.push({
                i: j.toString(),
                x: (j % 4) * 3,
                y: Math.floor((j / 4) * 1.75),
                w: 3,
                h: 1.75,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                horizontalCompact: true,
                isDraggable: false,
            });
            const value = this.state.filtered[j];
            exploreRoll.push(
                <div
                    key={j}
                    className="exploreGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <ExploreCard exploreObj={value} />
                </div>
            );
        }

        const layouts = { lg: layoutLg };

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
                            <input
                                type="checkbox"
                                onClick={this.handleAllChecked}
                                value="checkedall"
                            />{' '}
                            Toggle All
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
                        lg: 1200,
                        md: 996,
                        sm: 768,
                        xs: 550,
                        xxs: 0,
                    }}
                    cols={{ lg: 12, md: 9, sm: 6, xs: 6, xxs: 3 }}
                    horizontalCompact
                    autoSize
                >
                    {exploreRoll}
                </ResponsiveGridLayout>
            </>
        );
    }
}

export default Explore;
