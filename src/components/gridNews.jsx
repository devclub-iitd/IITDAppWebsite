/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Search from './search';
import NewsCard from './newsCard';
import news from './shared/news';
import CheckBox from './shared/checkBox';
import ToTop from './goToTop';

const ResponsiveGridLayout = WidthProvider(Responsive);

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            filtered: news,
            options: [
                {
                    id: 1,
                    value: 'May 2020',
                    isChecked: true,
                    month: '2020-05',
                },
                {
                    id: 2,
                    value: 'June 2020',
                    isChecked: true,
                    month: '2020-06',
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
        const chosenCats = chosenOptions.map((a) => a.month);
        let newList = [];
        let currentList = [];
        if (this.state.searchQuery !== '') {
            currentList = news;

            currentList = news.filter((item) =>
                chosenCats.includes(item.createdAt.slice(0, 7))
            );

            newList = currentList.filter((item) => {
                const lc = item.name.toLowerCase();

                const filterWord = this.state.searchQuery.toLowerCase();

                return lc.includes(filterWord);
            });
        } else {
            newList = news.filter((item) =>
                chosenCats.includes(item.createdAt.slice(0, 7))
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

        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

        // If the search bar isn't empty
        if (event.target.value !== '') {
            // Assign the original list to currentList
            currentList = news;

            newList = currentList.filter((item) => {
                const lc = item.title.toLowerCase();
                const lc2 = item.description.toLowerCase();

                const filterWord = event.target.value.toLowerCase();

                return lc.includes(filterWord) || lc2.includes(filterWord);
            });
        } else {
            // If the search bar is empty, set newList to original task list
            newList = news;
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
        const newsRoll = [];
        for (let j = 0; j < this.state.filtered.length; j += 1) {
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
            const value = this.state.filtered[j];
            newsRoll.push(
                <div key={j} className="newsGrid">
                    <NewsCard newsObj={value} />
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
                    {newsRoll}
                </ResponsiveGridLayout>
                <ToTop />
            </>
        );
    }
}

export default News;
