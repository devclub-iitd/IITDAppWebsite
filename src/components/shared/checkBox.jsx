/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export const checkBox = (props) => (
  <div>
    <input
      key={props.id}
      onClick={props.handleCheckChieldElement}
      type="checkbox"
      checked={props.isChecked}
      value={props.value}
    />
    {' '}
    {props.value}
  </div>
);
checkBox.propTypes = {
  id: PropTypes.number.isRequired,
  handleCheckChieldElement: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default checkBox;
