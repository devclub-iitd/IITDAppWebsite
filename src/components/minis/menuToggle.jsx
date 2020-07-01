/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Path = (props) => (
    <motion.path
        strokeWidth="3"
        stroke={props.dark ? 'hsl(0, 100%, 100%)' : 'hsl(232, 67%, 77%)'}
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle, dark }) => (
    <div onClick={toggle} role="button">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                }}
                dark={dark}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
                dark={dark}
            />
            <Path
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                }}
                dark={dark}
            />
        </svg>
    </div>
);
MenuToggle.propTypes = {
    toggle: PropTypes.func.isRequired,
    dark: PropTypes.bool.isRequired,
};
Path.propTypes = {
    dark: PropTypes.bool.isRequired,
};

export default MenuToggle;
