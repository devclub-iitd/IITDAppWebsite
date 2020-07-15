import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import CampusCard from '../cards/campus';
import Search from '../minis/search';
import loc from '../../data/locationsCampus';
import CheckBox from '../../data/checkBox';
import ToTop from '../minis/goToTop';
import Empty from '../minis/emptyResults';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Campus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      filtered: loc,
      options: [
        {
          id: 1,
          value: 'Academic',
          isChecked: true,
          category: 'academic',
        },
        {
          id: 2,
          value: 'Food & Drinks',
          isChecked: true,
          category: 'eat',
        },
        {
          id: 3,
          value: 'Sports & Rec.',
          isChecked: true,
          category: 'sport',
        },
      ],
      showFilters: false,
    };
    this.handleClickFilter = this.handleClickFilter.bind(this);
    this.handleCheckChieldElement = this.handleCheckChieldElement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     filtered: loc,
  //   });
  // }

    handleCheckChieldElement = (event) => {
      const { options, searchQuery } = this.state;
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
      const chosenCats = chosenOptions.map((a) => a.category);
      let newList = [];
      let currentList = [];
      if (searchQuery !== '') {
        currentList = loc;

        currentList = loc.filter((item) => chosenCats.includes(item.category));

        newList = currentList.filter((item) => {
          const lc = item.name.toLowerCase();

          const filterWord = searchQuery.toLowerCase();

          return lc.includes(filterWord);
        });
      } else {
        newList = loc.filter((item) => chosenCats.includes(item.category));
      }
      this.setState({
        filtered: newList,
      });
    };

    handleClickFilter = () => {
      this.setState((prevState) => ({ showFilters: !prevState.showFilters }));
    };

    handleChange(event) {
      const { options } = this.state;
      this.setState({ searchQuery: event.target.value });

      const chosenOptions = options.filter(
        (option) => option.isChecked === true,
      );
      const chosenCats = chosenOptions.map((a) => a.category);

      let currentList = [];
      // Variable to hold the filtered list before putting into state
      let newList = [];

      // If the search bar isn't empty
      if (event.target.value !== '') {
        // Assign the original list to currentList
        currentList = loc.filter((item) => chosenCats.includes(item.category));

        newList = currentList.filter((item) => {
          const lc = item.name.toLowerCase();

          const filterWord = event.target.value.toLowerCase();

          return lc.includes(filterWord);
        });
      } else {
        // If the search bar is empty, set newList to original task list
        newList = loc.filter((item) => chosenCats.includes(item.category));
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
      const layoutSm = [];
      const layoutMd = [];
      const layoutMd2 = [];
      const layoutXs = [];
      const campusRoll = [];
      for (let j = 0; j < filtered.length; j += 1) {
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
          y: Math.floor((j / 4) * 3.1),
          w: 2,
          h: 3.1,
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
          y: Math.floor((j / 3) * 3.1),
          w: 2,
          h: 3.1,
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
          y: Math.floor((j / 2) * 3.1),
          w: 2,
          h: 3.1,
          isResizable: false,
          useCSSTransforms: true,
          autoSize: true,
          verticalCompact: true,
          horizontalCompact: true,
          isDraggable: false,
        });
        const value = filtered[j];
        campusRoll.push(
          <div
            key={j}
            className="exploreGrid"
            isResizable="true"
            autoSize="true"
          >
            <CampusCard locObj={value} />
          </div>,
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
        <div>
          <div className="search">
            <Search
              searchQuery={searchQuery}
              onChange={this.handleChange}
              handleClickFilter={this.handleClickFilter}
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
                    option={option}
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
              lg: 1368,
              md: 1144,
              md2: 938,
              sm: 670,
              xs: 396,
              xxs: 0,
            }}
            cols={{
              lg: 12, md: 10, md2: 8, sm: 6, xs: 4, xxs: 2,
            }}
            horizontalCompact
            autoSize
            verticalCompact
          >
            {campusRoll}
          </ResponsiveGridLayout>
          <ToTop />
        </div>
      );
    }
}

export default Campus;
