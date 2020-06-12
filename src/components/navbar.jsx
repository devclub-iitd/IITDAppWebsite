/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-props-no-spreading */
import anime from 'animejs';
import React, { useState, useRef } from 'react';
import * as Icon from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffectOnce, useLockBodyScroll, useWindowSize } from 'react-use';
import PropTypes from 'prop-types';

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

function Navbar({ pages, name }) {
    const [expand, setExpand] = useState(false);

    useLockBodyScroll(expand);
    const windowSize = useWindowSize();

    return (
        <div className="Navbar">
            <div className="navbar-left" />
            <div className="navbar-middle">
                <Link
                    to="/"
                    onClick={() => {
                        setExpand(false);
                    }}
                >
                    <h1>
                        IITD
                        {windowSize.width < 769 && <span>{`${name}`}</span>}
                    </h1>
                </Link>
            </div>

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
                        {expand ? (
                            <Icon.X height="30" strokeWidth="3" />
                        ) : (
                            <Icon.Menu height="30" strokeWidth="3" />
                        )}
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
                                <Icon.Search
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
                                    {...activeNavIcon('/links')}
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
                <Expand expand={expand} pages={pages} setExpand={setExpand} />
            )}
        </div>
    );
}

// eslint-disable-next-line no-unused-vars
function Expand({ expand, pages, setExpand }) {
    const expandElement = useRef(null);
    const { t } = useTranslation();

    useEffectOnce(() => {
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
                setExpand(false);
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
                            }}
                        >
                            <span
                                {...navLinkProps(
                                    page.pageLink,
                                    page.animationDelayForNavbar
                                )}
                            >
                                {t(page.displayName)}
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
};
Expand.propTypes = {
    expand: PropTypes.bool.isRequired,
    pages: PropTypes.instanceOf(Array).isRequired,
    setExpand: PropTypes.bool.isRequired,
};

export default Navbar;
