import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Rodal from 'rodal';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import Search from '../minis/search';
import ResultCounter from '../minis/counter';
import { ExploreCard, RodalContent } from '../cards/clubs';
import explore from '../../data/explore';
import CheckBox from '../checkBox';
import ToTop from '../minis/goToTop';
import Empty from '../minis/emptyResults';
import 'rodal/lib/rodal.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Clubs extends React.Component {
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
      rodalObj: {
        id: 0,
        name: 'DevClub',
        img: <img src="" alt="DevClub IITD" className="card-img" />,
        desc:
                    'Dev Club is a community of tech-minded people in IIT Delhi. Dev Club is a community of tech-minded people in IIT Delhi.',
        extraIcon: (
          <a
            className="c-btn git"
            href="https://github.com/devclub-iitd"
          >
            <Icon.GitHub height="30" strokeWidth="2" />
          </a>
        ),
        infoUrl: '',
        facebookUrl: '',
        instaUrl: '',
        webUrl: '',
        category: 'technical',
      },
    };

    this.handleChange = this.handleChange.bind(this);
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
      const chosenCats = chosenOptions.map((a) => a.category);
      let newList = [];
      let currentList = [];
      if (searchQuery !== '') {
        currentList = explore;

        currentList = explore.filter((item) => chosenCats.includes(item.category));

        newList = currentList.filter((item) => {
          const lc = item.name.toLowerCase();

          const filterWord = searchQuery.toLowerCase();

          return lc.includes(filterWord);
        });
      } else {
        newList = explore.filter((item) => chosenCats.includes(item.category));
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
        currentList = explore.filter((item) => chosenCats.includes(item.category));

        newList = currentList.filter((item) => {
          const lc = item.name.toLowerCase();

          const filterWord = event.target.value.toLowerCase();

          return lc.includes(filterWord);
        });
      } else {
        // If the search bar is empty, set newList to original task list
        newList = explore.filter((item) => chosenCats.includes(item.category));
      }
      // Set the filtered state based on what our rules added to newList
      this.setState({
        filtered: newList,
      });
    }

    show(exploreObj) {
      this.setState({
        visible: true,
        rodalObj: exploreObj,
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
      const number = filtered.length;
      const lightRodal = {
        borderRadius: 20,
        width: '80%',
        maxWidth: '400px',
        height: '90%',
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
      const exploreRoll = [];
      for (let j = 0; j < filtered.length; j += 1) {
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
        const value = filtered[j];
        exploreRoll.push(
          <div
            key={j}
            className="exploreGrid"
            isResizable="true"
            autoSize="true"
          >
            <ExploreCard
              exploreObj={value}
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
              lg: 1470,
              md: 1000,
              sm: 860,
              xs: 620,
              xxs: 0,
            }}
            cols={{
              lg: 12, md: 9, sm: 6, xs: 6, xxs: 3,
            }}
            horizontalCompact
            autoSize
          >
            {exploreRoll}
          </ResponsiveGridLayout>
          <br />
          <ResultCounter number={number} />
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

Clubs.propTypes = {
  dark: PropTypes.bool.isRequired,
};

export default Clubs;
