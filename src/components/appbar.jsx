import React from 'react';
import { useWindowSize } from 'react-use';
import PropTypes from 'prop-types';

export default function Appbar({ name }) {
  const windowSize = useWindowSize();
  Appbar.propTypes = {
    name: PropTypes.string.isRequired,
  };

  return (
    <div className="filters fadeInUp" style={{ animationDelay: '0.2s' }}>
      <div className="legend">
        {windowSize.width > 769 && <h1>{name}</h1>}
      </div>
    </div>
  );
}
