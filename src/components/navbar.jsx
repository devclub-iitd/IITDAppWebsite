/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-props-no-spreading */
import anime from 'animejs';
import React, { useState, useRef } from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { useLockBodyScroll, useWindowSize, useMount } from 'react-use';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import MenuToggle from './minis/menuToggle';

const navLinkProps = (path, animationDelay) => ({
    className: `fadeInUp ${window.location.pathname === path ? 'focused' : ''}`,
    style: {
        animationDelay: `${animationDelay}s`,
    },
});

const activeNavIcon = (path) => ({
    style: {
        stroke: window.location.pathname === path ? 'rgb(212,216,246)' : '',
    },
});

function Navbar({ pages, name, dark, toggleDark, isOpenInit }) {
    const [expand, setExpand] = useState(false);
    const [isOpen, setOpen] = useState(isOpenInit);

    const toggleOpen = () => {
        setOpen(!isOpen);
    };

    useLockBodyScroll(expand);
    const windowSize = useWindowSize();

    return (
        <div className="Navbar">
            {windowSize.width < 769 && (
                <div
                    className="navbar-left"
                    role="button"
                    style={{ paddingTop: 40 }}
                >
                    {dark && (
                        <motion.svg
                            style={{ height: 60, width: 60 }}
                            className="darkIcon"
                            initial="rest"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDark}
                        >
                            <Icon.Sun
                                height="30"
                                strokeWidth="3"
                                className="darkIcon"
                                onClick={toggleDark}
                            />
                        </motion.svg>
                    )}
                    {!dark && (
                        <motion.svg
                            style={{ height: 60, width: 60 }}
                            className="darkIcon"
                            initial="rest"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDark}
                        >
                            <Icon.Moon
                                height="30"
                                strokeWidth="3"
                                className="darkIcon"
                                onClick={toggleDark}
                            />
                        </motion.svg>
                    )}
                </div>
            )}
            {windowSize.width >= 769 && (
                <div className="navbar-middle" style={{ height: 60 }}>
                    <div>
                        {dark && (
                            <motion.svg
                                style={{ height: 60, width: 60 }}
                                className="darkIcon"
                                initial="rest"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleDark}
                            >
                                <Icon.Sun
                                    height="30"
                                    strokeWidth="3"
                                    className="darkIcon"
                                    onClick={toggleDark}
                                />
                            </motion.svg>
                        )}
                        {!dark && (
                            <motion.svg
                                style={{ height: 60, width: 40 }}
                                className="darkIcon"
                                initial="rest"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleDark}
                            >
                                <Icon.Moon
                                    height="30"
                                    strokeWidth="3"
                                    className="darkIcon"
                                    onClick={toggleDark}
                                />
                            </motion.svg>
                        )}
                    </div>
                </div>
            )}
            {windowSize.width < 769 && (
                <div className="navbar-middle">
                    <h1>
                        <span style={{ fontWeight: '900', marginLeft: -36 }}>
                            <a href="/">IITD</a>
                        </span>
                        <span>{`${name}`}</span>
                    </h1>
                </div>
            )}
            <div
                role="button"
                tabIndex="0"
                className="navbar-right"
                onClick={() => {
                    setExpand(!expand);
                }}
                onMouseEnter={() => {
                    if (window.innerWidth > 769) {
                        setExpand(true);
                    }
                }}
                onKeyDown={() => {
                    if (window.innerWidth > 769) {
                        setExpand(true);
                    }
                }}
            >
                {windowSize.width < 769 && (
                    <span>
                        <motion.div
                            initial={false}
                            animate={isOpen ? 'open' : 'closed'}
                        >
                            <MenuToggle
                                toggle={() => toggleOpen()}
                                dark={dark}
                            />
                        </motion.div>
                    </span>
                )}
                {windowSize.width > 769 && (
                    <>
                        <span>
                            <Link to="/home">
                                <Icon.Home
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/home')}
                                />
                            </Link>
                        </span>
                        <span>
                            <Link to="/clubs">
                                <Icon.Users
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/clubs')}
                                />
                            </Link>
                        </span>
                        <span>
                            <Link to="/events">
                                <Icon.Calendar
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/events')}
                                />
                            </Link>
                        </span>
                        <span>
                            <Link to="/news">
                                <Icon.Rss
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/news')}
                                />
                            </Link>
                        </span>
                        <span>
                            <Link to="/campus">
                                <Icon.MapPin
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/campus')}
                                />
                            </Link>
                        </span>
                        <span>
                            <Link to="/hostels">
                                <Icon.Briefcase
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/hostels')}
                                />
                            </Link>
                        </span>
                        <span>
                            <Link to="/map">
                                <Icon.Map
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/map')}
                                />
                            </Link>
                        </span>
                        <span>
                            <Link to="/links">
                                <Icon.Link
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/links')}
                                />
                            </Link>
                        </span>
                    </>
                )}
            </div>

            {expand && (
                <Expand
                    expand={expand}
                    pages={pages}
                    setExpand={setExpand}
                    isOpen={isOpen}
                    toggleOpen={toggleOpen}
                />
            )}
        </div>
    );
}

function Expand({ pages, setExpand, toggleOpen }) {
    const expandElement = useRef(null);

    function collapse() {
        setExpand(false);
    }
    useMount(() => {
        anime({
            targets: expandElement.current,
            translateX: '10rem',
            easing: 'easeOutExpo',
            duration: 250,
        });
        anime({
            targets: expandElement.current,
            translateX: '10rem',
            easing: 'easeOutExpo',
            duration: 250,
        });
    });

    return (
        <div
            className="expand"
            ref={expandElement}
            onMouseLeave={() => {
                anime({
                    targets: expandElement.current,
                    translateX: '-10rem',
                    easing: 'easeInExpo',
                    duration: 250,
                });
                anime({
                    targets: '.expand-font',
                    duration: 250,
                    opacity: 0,
                });
                setTimeout(collapse, 250);
            }}
        >
            <div className="expand-top" />

            {pages.map((page) => {
                if (page.showInNavbar === true) {
                    return (
                        <Link
                            to={page.pageLink}
                            key={page.id}
                            onClick={() => {
                                setExpand(false);
                                toggleOpen();
                            }}
                        >
                            <span
                                className="expand-font"
                                {...navLinkProps(
                                    page.pageLink,
                                    page.animationDelayForNavbar
                                )}
                            >
                                {page.displayName}
                            </span>
                        </Link>
                    );
                }
                return null;
            })}
            <h5 className="love">
                Made by <a href="https://devclub.in/#/">DevClub</a> with{' '}
                <span role="img" alt="Love">
                    ❤️
                </span>
            </h5>
        </div>
    );
}
Navbar.propTypes = {
    pages: PropTypes.instanceOf(Array).isRequired,
    name: PropTypes.string.isRequired,
    dark: PropTypes.bool.isRequired,
    toggleDark: PropTypes.func.isRequired,
    isOpenInit: PropTypes.bool.isRequired,
};
Expand.propTypes = {
    expand: PropTypes.bool.isRequired,
    pages: PropTypes.instanceOf(Array).isRequired,
    setExpand: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
};

export default Navbar;
