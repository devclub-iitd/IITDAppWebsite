import React from 'react';
import PropTypes from 'prop-types';

export default function ResultCounter({ number }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <hr style={{ width: '80%' }} className="counterHR" />
      <h1 style={{ paddingLeft: 10 }}>{`Showing ${number} matching results`}</h1>
    </div>
  );
}

ResultCounter.propTypes = {
  number: PropTypes.number.isRequired,
};
