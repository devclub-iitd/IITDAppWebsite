import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

function Search({ searchQuery, onChange }) {
  return (
    <div>
      <span className="search-icon">
        <Icon.Search strokeWidth="3" height="31.5" />
      </span>
      <input
        type="text"
        placeholder="Search ..."
        value={searchQuery}
        onChange={onChange}
      />
    </div>
  );
}
Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Search;
