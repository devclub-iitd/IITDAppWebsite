import React from 'react';
import PropTypes from 'prop-types';

export const checkBox = ({
    id,
    handleCheckChieldElement,
    isChecked,
    value,
}) => {
    return (
        <div>
            <input
                key={id}
                onClick={handleCheckChieldElement}
                type="checkbox"
                checked={isChecked}
                value={value}
            />{' '}
            {value}
        </div>
    );
};
checkBox.propTypes = {
    id: PropTypes.number.isRequired,
    handleCheckChieldElement: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
};

export default checkBox;
