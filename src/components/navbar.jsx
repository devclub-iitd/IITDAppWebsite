/* eslint-disable react/jsx-props-no-spreading */
import anime from 'animejs';
import React, { useState, useRef } from 'react';
import * as Icon from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
    useEffectOnce,
    useLockBodyScroll,
    useWindowSize,
    useLocalStorage,
} from 'react-use';
import PropTypes from 'prop-types';

const navLinkProps = (path, animationDelay) => ({
    className: `fadeInUp ${window.location.pathname === path ? 'focused' : ''}`,
    style: {
        animationDelay: `${animationDelay}s`,
    },
});

const activeNavIcon = (path) => ({
    style: {
        stroke: window.location.pathname === path ? '#4c75f2' : '',
    },
});

function Navbar({ pages }) {
    const [expand, setExpand] = useState(false);
    // eslint-disable-next-line
    const [isThemeSet, setIsThemeSet] = useLocalStorage('isThemeSet', false);

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
                    <h1>IITD</h1>
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
                        anime({
                            targets: '.navbar-right path',
                            strokeDashoffset: [anime.setDashoffset, 0],
                            easing: 'easeInOutSine',
                            duration: 250,
                            delay(el, i) {
                                return i * 250;
                            },
                            direction: 'alternate',
                            loop: false,
                        });
                    }
                }}
                // On Key Down does not work yet, accessible features to be added to the site gradually
                onKeyDown={() => {
                    if (window.innerWidth > 769) {
                        setExpand(true);
                        anime({
                            targets: '.navbar-right path',
                            strokeDashoffset: [anime.setDashoffset, 0],
                            easing: 'easeInOutSine',
                            duration: 250,
                            delay(el, i) {
                                return i * 250;
                            },
                            direction: 'alternate',
                            loop: false,
                        });
                    }
                }}
            >
                {windowSize.width < 769 && (
                    <span>{expand ? 'Close' : 'Menu'}</span>
                )}
                {windowSize.width > 769 && (
                    <>
                        <span>
                            <Link to="/">
                                <Icon.Home
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/')}
                                />
                            </Link>
                        </span>
                        <span>
                            <Link to="/explore">
                                <Icon.Search
                                    strokeWidth="3"
                                    height="40"
                                    {...activeNavIcon('/explore')}
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

            <div
                className="expand-bottom fadeInUp"
                style={{ animationDelay: '1s' }}
            >
                <h5>{t('Made by DevClub with ❤️')}</h5>
            </div>
        </div>
    );
}
Navbar.propTypes = {
    pages: PropTypes.arrayOf.isRequired,
};
Expand.propTypes = {
    expand: PropTypes.bool.isRequired,
    pages: PropTypes.arrayOf.isRequired,
    setExpand: PropTypes.bool.isRequired,
};

export default Navbar;
