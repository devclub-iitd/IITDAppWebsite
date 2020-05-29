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

class Search extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}
Search.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
export default Search;
