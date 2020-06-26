/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Rodal from 'rodal';
import Search from './search';
import ExploreCard from './exploreCard';
import explore from './shared/explore';
import CheckBox from './shared/checkBox';
import ToTop from './goToTop';
import Empty from './emptyResults';
import 'rodal/lib/rodal.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            filtered: explore,
            options: [
                {
                    id: 1,
                    value: 'BRCA',
                    isChecked: true,
                    category: 'brca',
                },
                {
                    id: 2,
                    value: 'Technical',
                    isChecked: true,
                    category: 'technical',
                },
                {
                    id: 3,
                    value: 'Others',
                    isChecked: true,
                    category: 'others',
                },
            ],
            showFilters: false,
            visible: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
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
        const chosenCats = chosenOptions.map((a) => a.category);
        let newList = [];
        let currentList = [];
        if (this.state.searchQuery !== '') {
            currentList = explore;

            currentList = explore.filter((item) =>
                chosenCats.includes(item.category)
            );

            newList = currentList.filter((item) => {
                const lc = item.name.toLowerCase();

                const filterWord = this.state.searchQuery.toLowerCase();

                return lc.includes(filterWord);
            });
        } else {
            newList = explore.filter((item) =>
                chosenCats.includes(item.category)
            );
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

        const chosenOptions = this.state.options.filter(
            (option) => option.isChecked === true
        );
        const chosenCats = chosenOptions.map((a) => a.category);

        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (event.target.value !== '') {
            // Assign the original list to currentList
            currentList = explore.filter((item) =>
                chosenCats.includes(item.category)
            );

            newList = currentList.filter((item) => {
                const lc = item.name.toLowerCase();

                const filterWord = event.target.value.toLowerCase();

                return lc.includes(filterWord);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = explore.filter((item) =>
                chosenCats.includes(item.category)
            );
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList,
        });
    }

    show() {
        this.setState({
            visible: true,
        });
    }

    hide() {
        this.setState({
            visible: false,
        });
    }

    render() {
        const layoutLg = [];
        const layoutMd = [];
        const layoutSm = [];
        const layoutXs = [];
        const layoutXxs = [];
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
            layoutMd.push({
                i: j.toString(),
                x: (j % 3) * 3,
                y: Math.floor((j / 3) * 1.75),
                w: 3,
                h: 1.75,
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
                y: Math.floor((j / 2) * 1.75),
                w: 3,
                h: 1.75,
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
                y: Math.floor((j / 2) * 1.75),
                w: 3,
                h: 1.75,
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
                y: Math.floor((j / 1) * 1.75),
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
                    <ExploreCard exploreObj={value} show={this.show} />
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
                {this.state.filtered.length < 1 && <Empty />}
                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    breakpoints={{
                        lg: 1470,
                        md: 1000,
                        sm: 860,
                        xs: 620,
                        xxs: 0,
                    }}
                    cols={{ lg: 12, md: 9, sm: 6, xs: 6, xxs: 3 }}
                    horizontalCompact
                    autoSize
                >
                    {exploreRoll}
                </ResponsiveGridLayout>
                <ToTop />
                <Rodal
                    visible={this.state.visible}
                    onClose={this.hide}
                    className="rodal-imp"
                    customStyles={{
                        borderRadius: 20,
                        width: '90%',
                        height: '1000px',
                        maxWidth: 400,
                        marginTop: 100,
                    }}
                    animation="slideUp"
                >
                    <div>Content</div>
                </Rodal>
            </>
        );
    }
}

export default Explore;
