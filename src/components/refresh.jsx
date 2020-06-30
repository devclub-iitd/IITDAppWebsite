import * as React from 'react';
import * as Icon from 'react-feather';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const button = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
};
const arrow = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0 } },
};

const Refresh = ({ onClick }) => {
    return (
        <motion.div
            className="refresh"
            onClick={onClick}
            variants={button}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
        >
            <motion.svg variants={arrow}>
                <Icon.Sun />
            </motion.svg>
        </motion.div>
    );
};
Refresh.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Refresh;
