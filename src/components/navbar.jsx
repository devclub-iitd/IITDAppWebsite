import anime from 'animejs';
import React, { useState, useRef } from 'react';
import * as Icon from 'react-feather';
import { Link, useHistory } from 'react-router-dom';
import { useLockBodyScroll, useWindowSize, useMount } from 'react-use';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import MenuToggle from './minis/menuToggle';

function Navbar({
  pages, name, dark, toggleDark, isOpenInit,
}) {
  const [expand, setExpand] = useState(false);
  const [isOpen, setOpen] = useState(isOpenInit);
  const [showHomeText, setHometextVisibility] = useState(false);
  const [showClubText, setClubtextVisibility] = useState(false);
  const [showEventsText, setEventstextVisibility] = useState(false);
  const [showNewsText, setNewstextVisibility] = useState(false);
  const [showCampusText, setCampustextVisibility] = useState(false);
  const [showHostelsText, setHostelstextVisibility] = useState(false);
  const [showMapText, setMaptextVisibility] = useState(false);
  const [showLinksText, setLinkstextVisibility] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  useLockBodyScroll(expand);
  const windowSize = useWindowSize();
  const history = useHistory();

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
          if (windowSize.width < 769) {
            setExpand(!expand);
          }
        }}
        onMouseEnter={() => {
        }}
        onKeyDown={() => {
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
            <Link
              to="/home"
              onMouseEnter={() => {
                setHometextVisibility(true);
                setClubtextVisibility(false);
                setCampustextVisibility(false);
                setEventstextVisibility(false);
                setNewstextVisibility(false);
                setHostelstextVisibility(false);
                setLinkstextVisibility(false);
                setMaptextVisibility(false);
              }}
              onMouseLeave={() => setHometextVisibility(false)}
              onClick={() => history.push('/home')}
            >
              { !showHomeText && (
              <Icon.Home
                strokeWidth="3"
                height="30"
                style={{
                  stroke:
              window.location.pathname === '/home'
                ? 'rgb(212,216,246)'
                : '',
                }}
              />
              )}
              { showHomeText && (
                <h3 style={{ color: 'white' }}><strong>Home</strong></h3>
              )}
            </Link>
          </span>
          <span>
            <Link
              to="/clubs"
              onMouseEnter={() => {
                setClubtextVisibility(true);
                setCampustextVisibility(false);
                setHometextVisibility(false);
                setEventstextVisibility(false);
                setNewstextVisibility(false);
                setHostelstextVisibility(false);
                setLinkstextVisibility(false);
                setMaptextVisibility(false);
              }}
              onMouseLeave={() => setClubtextVisibility(false)}
              onClick={() => history.push('/clubs')}
            >
              { !showClubText && (
              <Icon.Users
                strokeWidth="3"
                height="30"
                style={{
                  stroke:
                window.location.pathname
                === '/clubs'
                  ? 'rgb(212,216,246)'
                  : '',
                }}
              />
              )}
              { showClubText && (
                <h3 style={{ color: 'white' }}><strong>Clubs</strong></h3>
              )}
            </Link>
          </span>
          <span>
            <Link
              to="/events"
              onMouseEnter={() => {
                setEventstextVisibility(true);
                setClubtextVisibility(false);
                setCampustextVisibility(false);
                setHometextVisibility(false);
                setNewstextVisibility(false);
                setHostelstextVisibility(false);
                setLinkstextVisibility(false);
                setMaptextVisibility(false);
              }}
              onMouseLeave={() => setEventstextVisibility(false)}
              onClick={() => history.push('/events')}
            >
              { !showEventsText && (
              <Icon.Calendar
                strokeWidth="3"
                height="30"
                style={{
                  stroke:
                window.location.pathname
                === '/events'
                  ? 'rgb(212,216,246)'
                  : '',
                }}
              />
              )}
              { showEventsText && (
                <h3 style={{ color: 'white' }}><strong>Events</strong></h3>
              )}
            </Link>
          </span>
          <span>
            <Link
              to="/news"
              onMouseEnter={() => {
                setNewstextVisibility(true);
                setClubtextVisibility(false);
                setCampustextVisibility(false);
                setHometextVisibility(false);
                setEventstextVisibility(false);
                setHostelstextVisibility(false);
                setLinkstextVisibility(false);
                setMaptextVisibility(false);
              }}
              onMouseLeave={() => setNewstextVisibility(false)}
              onClick={() => history.push('/news')}
            >
              { !showNewsText && (
              <Icon.Rss
                strokeWidth="3"
                height="30"
                style={{
                  stroke:
                  window.location.pathname === '/news'
                    ? 'rgb(212,216,246)'
                    : '',
                }}
              />
              )}
              { showNewsText && (
                <h3 style={{ color: 'white' }}><strong>News</strong></h3>
              )}
            </Link>
          </span>
          <span>
            <Link
              to="/campus"
              onMouseEnter={() => {
                setCampustextVisibility(true);
                setClubtextVisibility(false);
                setHometextVisibility(false);
                setEventstextVisibility(false);
                setNewstextVisibility(false);
                setHostelstextVisibility(false);
                setLinkstextVisibility(false);
                setMaptextVisibility(false);
              }}
              onMouseLeave={() => setCampustextVisibility(false)}
              onClick={() => history.push('/news')}
            >
              { !showCampusText && (
              <Icon.MapPin
                strokeWidth="3"
                height="30"
                style={{
                  stroke:
                window.location.pathname
                === '/campus'
                  ? 'rgb(212,216,246)'
                  : '',
                }}
              />
              )}
              { showCampusText && (
              <h3 style={{ color: 'white' }}><strong>Campus</strong></h3>
              )}
            </Link>
          </span>
          <span>
            <Link
              to="/hostels"
              onMouseEnter={() => {
                setHostelstextVisibility(true);
                setClubtextVisibility(false);
                setCampustextVisibility(false);
                setHometextVisibility(false);
                setEventstextVisibility(false);
                setNewstextVisibility(false);
                setLinkstextVisibility(false);
                setMaptextVisibility(false);
              }}
              onMouseLeave={() => setHostelstextVisibility(false)}
              onClick={() => history.push('/hostels')}
            >
              { !showHostelsText && (
              <Icon.Briefcase
                strokeWidth="3"
                height="30"
                style={{
                  stroke:
                window.location.pathname
                === '/hostels'
                  ? 'rgb(212,216,246)'
                  : '',
                }}
              />
              )}
              { showHostelsText && (
              <h3 style={{ color: 'white' }}><strong>Hostels</strong></h3>
              )}
            </Link>
          </span>
          <span>
            <Link
              to="/map"
              onMouseEnter={() => {
                setMaptextVisibility(true);
                setClubtextVisibility(false);
                setCampustextVisibility(false);
                setHometextVisibility(false);
                setEventstextVisibility(false);
                setNewstextVisibility(false);
                setHostelstextVisibility(false);
                setLinkstextVisibility(false);
              }}
              onMouseLeave={() => setMaptextVisibility(false)}
              onClick={() => history.push('/map')}
            >
              { !showMapText && (
              <Icon.Map
                strokeWidth="3"
                height="30"
                style={{
                  stroke:
                window.location.pathname === '/map'
                  ? 'rgb(212,216,246)'
                  : '',
                }}
              />
              )}
              { showMapText && (
              <h3 style={{ color: 'white' }}><strong>Map</strong></h3>
              )}
            </Link>
          </span>
          <span>
            <Link
              to="/links"
              onMouseEnter={() => {
                setClubtextVisibility(false);
                setCampustextVisibility(false);
                setHometextVisibility(false);
                setEventstextVisibility(false);
                setNewstextVisibility(false);
                setHostelstextVisibility(false);
                setLinkstextVisibility(true);
                setMaptextVisibility(false);
              }}
              onMouseLeave={() => setLinkstextVisibility(false)}
              onClick={() => history.push('/links')}
            >
              { !showLinksText && (
              <Icon.Link
                strokeWidth="3"
                height="30"
                style={{
                  stroke:
                window.location.pathname
                === '/links'
                  ? 'rgb(212,216,246)'
                  : '',
                }}
              />
              )}
              { showLinksText && (
                <h3 style={{ color: 'white' }}><strong>Links</strong></h3>
              )}
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
  const windowSize = useWindowSize();
  const history = useHistory();

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
    <>
      {
      windowSize.width < 769 && (
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
                    history.push(page.pageLink);
                  }}
                >
                  <span
                    className={
                                    window.location.pathname === page.pageLink
                                      ? 'expand-front focused fadeInUp'
                                      : 'expand-front fadeInUp'
                                }
                  >
                    {page.displayName}
                  </span>
                </Link>
              );
            }
            return null;
          })}
          <h5 className="love">
            Made by
            {' '}
            <a href="https://devclub.in/#/">DevClub</a>
            {' '}
            with
            {' '}
            <span role="img" aria-label="Love" alt="Love">
              ❤️
            </span>
          </h5>
        </div>
      )
    }
    </>

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
  pages: PropTypes.instanceOf(Array).isRequired,
  setExpand: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default Navbar;
