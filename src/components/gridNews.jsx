/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import * as Icon from 'react-feather';
import NewsCard from './newsCard';
import news from './shared/news';

const ResponsiveGridLayout = WidthProvider(Responsive);

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: '', filtered: news };

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
            const value = this.state.filtered[j];
            newsRoll.push(
                <div key={j} className="newsGrid">
                    <NewsCard newsObj={value} />
                </div>
            );
        }
        const layouts = { lg: layoutLg, xxs: layoutXxs, xs: layoutXs };
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
                        md2: 768,
                        sm: 580,
                        xs: 396,
                        xxs: 0,
                    }}
                    cols={{ lg: 2, md: 1, md2: 1, sm: 1, xs: 1, xxs: 1 }}
                    horizontalCompact
                >
                    {newsRoll}
                </ResponsiveGridLayout>
            </>
        );
    }
}

export default News;
