import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Rodal from 'rodal';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import Search from './search';
import { RodalContent, HostelCard } from './hostelCard';
import hostels from './shared/hostels';
import CheckBox from './shared/checkBox';
import ToTop from './minis/goToTop';
import Empty from './emptyResults';
import 'rodal/lib/rodal.css';

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
      visible: false,
      rodalObj: {
        id: 0,
        name: 'Aravali Hostel',
        est: 1965,
        description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet.sit amet.',
        category: (
          <div className="c-btn fb">
            <span className="hostel-link">
              <Icon.User height="15" strokeWidth="3" />
              Boys
            </span>
          </div>
        ),
        mapUrl: '',
        learnUrl: '',
        image: (
          <img src="" alt="Jwalamukhi Hostel" className="card-img" />
        ),
        for: 'boys',
        warden: 'Sample Warden',
        wardenLink: '',
        notableAlumni: ['Sachin Bansal', 'Binny Bansal'],
        notableAlumniDesc: [
          'Co-founder, Flipkart',
          'Co-founder, Flipkart',
        ],
        notableAlumniLinks: [
          'https://devclub.in/#/projects',
          'https://devclub.in/#/projects',
        ],
        notableAlumniImages: [
          'https://img.huffingtonpost.com/asset/5e609d6423000077180bfa8d.jpeg?ops=1200_630',
          'http://media2.intoday.in/indiatoday/images/stories/graphic3_pullquote_binny_559_062316051520.jpg',
        ],
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickFilter = this.handleClickFilter.bind(this);
    this.handleCheckChieldElement = this.handleCheckChieldElement.bind(
      this,
    );
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
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
      const chosenCats = chosenOptions.map((a) => a.for);
      let newList = [];
      let currentList = [];
      if (searchQuery !== '') {
        currentList = hostels;

        currentList = hostels.filter((item) => chosenCats.includes(item.for));

        newList = currentList.filter((item) => {
          const lc = item.name.toLowerCase();

          const filterWord = searchQuery.toLowerCase();

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

    show(hostelObj) {
      this.setState({
        visible: true,
        rodalObj: hostelObj,
      });
    }

    hide() {
      this.setState({
        visible: false,
      });
    }

    render() {
      const { dark } = this.props;
      const {
        searchQuery,
        options,
        filtered,
        showFilters,
        visible,
        rodalObj,
      } = this.state;
      const lightRodal = {
        borderRadius: 20,
        width: '80%',
        maxWidth: '400px',
        height: '90%',
        margin: 'auto',
        marginTop: 90,
        marginBottom: 10,
        backgroundColor: '#C5CAE9',
        boxShadow: '2px 2px 12px 10px rgba(0,0,0,0.10)',
        color: '#4051B5',
        overflowY: 'scroll',
        zIndex: 100000000,
      };
      const darkRodal = {
        borderRadius: 20,
        width: '80%',
        maxWidth: '400px',
        height: '90%',
        margin: 'auto',
        marginTop: 90,
        marginBottom: 10,
        backgroundColor: '#1E1E20',
        boxShadow: '2px 2px 12px 10px rgba(0,0,0,0.10)',
        color: '#fff',
        overflowY: 'scroll',
        zIndex: 100000000,
      };
      let rodalStyle = {};
      if (dark) {
        rodalStyle = darkRodal;
      } else {
        rodalStyle = lightRodal;
      }
      const layoutLg = [];
      const layoutMd = [];
      const layoutSm = [];
      const layoutXs = [];
      const layoutXxs = [];
      const hostelRoll = [];
      for (let j = 0; j < filtered.length; j += 1) {
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
        const value = filtered[j];
        hostelRoll.push(
          <div key={j} className="hostelGrid">
            <HostelCard
              hostelObj={value}
              show={this.show}
              rodalObj={rodalObj}
            />
          </div>,
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
              lg: 1400,
              md: 1200,
              sm: 800,
              xs: 600,
              xxs: 0,
            }}
            cols={{
              lg: 12, md: 9, sm: 6, xs: 3, xxs: 3,
            }}
            horizontalCompact
            verticalCompact
            autoSize
          >
            {hostelRoll}
          </ResponsiveGridLayout>
          <ToTop />
          <Rodal
            visible={visible}
            onClose={this.hide}
            className="rodal-imp"
            customStyles={rodalStyle}
            animation="slideUp"
          >
            <RodalContent rodalObj={rodalObj} />
          </Rodal>
        </>
      );
    }
}

HostelGrid.propTypes = {
  dark: PropTypes.bool.isRequired,
};

export default HostelGrid;
