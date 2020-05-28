/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';
import CheckBox from './shared/checkBox';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                { id: 1, value: 'Academic', isChecked: true },
                { id: 2, value: 'Food & Drinks', isChecked: true },
                { id: 3, value: 'Sports & Rec.', isChecked: true },
                { id: 4, value: 'Hostels', isChecked: true },
            ],
            showFilters: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleAllChecked = (event) => {
        const { options } = this.state;
        options.forEach((option) => (option.isChecked = event.target.checked));
        this.setState({ options });
    };

    handleCheckChieldElement = (event) => {
        const { options } = this.state;
        options.forEach((option) => {
            if (option.value === event.target.value)
                option.isChecked = event.target.checked;
        });
        this.setState({ options });
    };

    handleClick = () => {
        this.setState({
            showFilters: !this.state.showFilters,
        });
    };

    render() {
        return (
            <div className="search">
                <span className="search-icon">
                    <Icon.Search strokeWidth="3" height="31.5" />
                </span>
                <input
                    type="text"
                    placeholder="Search ..."
                    // eslint-disable-next-line react/destructuring-assignment
                    value={this.props.searchQuery}
                    onChange={this.props.onChange}
                />
                <div
                    role="button"
                    className="filter-icon"
                    onClick={this.handleClick}
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
        );
    }
}
Search.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default Search;
