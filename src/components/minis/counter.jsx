import React from 'react';
import PropTypes from 'prop-types';

export default function ResultCounter({ number }) {
  let message = null;
  if (number === 1) {
    message = <h1 style={{ paddingLeft: 10 }}>{`Showing ${number} matching result`}</h1>;
  } else {
    message = <h1 style={{ paddingLeft: 10 }}>{`Showing ${number} matching results`}</h1>;
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <hr style={{ width: '80%' }} className="counterHR" />
      {message}

    </div>
  );
}

ResultCounter.propTypes = {
  number: PropTypes.number.isRequired,
};
