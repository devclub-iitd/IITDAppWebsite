import * as React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Path = ({ dark, variants, transition, d }) => (
    <motion.path
        strokeWidth="3"
        stroke={dark ? 'hsl(0, 100%, 100%)' : 'hsl(232, 67%, 77%)'}
        strokeLinecap="round"
        variants={variants}
        d={d}
        transition={transition}
    />
);

const MenuToggle = ({ toggle, dark }) => (
    <div onClick={toggle} role="button" onKeyDown={toggle} tabIndex={0}>
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
    variants: PropTypes.objectOf(PropTypes.number),
    transition: PropTypes.objectOf(PropTypes.number),
    d: PropTypes.string,
};
Path.defaultProps = {
    d: 'M 2 9.423 L 20 9.423',
    transition: { duration: 0.1 },
    variants: {
        closed: { opacity: 1 },
        open: { opacity: 0 },
    },
};
export default MenuToggle;
