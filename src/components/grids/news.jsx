import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Search from '../minis/search';
import ResultCounter from '../minis/counter';
import NewsCard from '../cards/news';
import news from '../../data/news';
import CheckBox from '../checkBox';
import ToTop from '../minis/goToTop';
import Empty from '../minis/emptyResults';

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
      this,
    );
  }

    handleCheckChieldElement = (event) => {
      const { searchQuery, options } = this.state;
      options.forEach((option) => {
        if (option.value === event.target.value) {
          const optionTemp = option;
          optionTemp.isChecked = event.target.checked;
        }
      });
      this.setState({ options });

      const chosenOptions = options.filter(
        (option) => option.isChecked === true,
      );
      const chosenCats = chosenOptions.map((a) => a.month);
      let newList = [];
      let currentList = [];
      if (searchQuery !== '') {
        currentList = news;

        currentList = news.filter((item) => chosenCats.includes(item.createdAt.slice(0, 7)));

        newList = currentList.filter((item) => {
          const lc = item.title.toLowerCase();
          const lc2 = item.description.toLowerCase();

          const filterWord = searchQuery.toLowerCase();

          return lc.includes(filterWord) || lc2.includes(filterWord);
        });
      } else {
        newList = news.filter((item) => chosenCats.includes(item.createdAt.slice(0, 7)));
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
      const {
        searchQuery, options, filtered, showFilters,
      } = this.state;
      const layoutLg = [];
      const layoutMd = [];
      const layoutSm = [];
      const layoutXs = [];
      const layoutXxs = [];
      const newsRoll = [];
      const number = filtered.length;
      for (let j = 0; j < filtered.length; j += 1) {
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
        const value = filtered[j];
        newsRoll.push(
          <div key={j} className="newsGrid">
            <NewsCard newsObj={value} />
          </div>,
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
              searchQuery={searchQuery}
              onChange={this.handleChange}
            />
            <div
              role="button"
              className="filter-icon"
              onClick={this.handleClickFilter}
              onKeyDown={this.handleKeyDown}
              tabIndex="0"
            >
              Filter
            </div>

            {showFilters && (
            <div className="filterCheckBoxes">
              {options.map((option) => (
                <>
                  <CheckBox
                    handleCheckChieldElement={
                                                this.handleCheckChieldElement
                                            }
                    id={option.id}
                    value={option.value}
                    isChecked={option.isChecked}
                  />
                </>
              ))}
            </div>
            )}
          </div>
          {filtered.length < 1 && <Empty />}
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
            cols={{
              lg: 2, md: 1, md2: 1, sm: 1, xs: 1, xxs: 1,
            }}
            horizontalCompact
          >
            {newsRoll}
          </ResponsiveGridLayout>
          <br />
          {filtered.length > 0 && <ResultCounter number={number} />}
          <ToTop />
        </>
      );
    }
}

export default News;
