/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useWindowSize } from 'react-use';
import Leaflet from 'leaflet';
import useDarkMode from 'use-dark-mode';
import Navbar from './components/navbar';
import Appbar from './components/appbar';
import Hostels from './components/grids/hostels';
import News from './components/grids/news';
import Campus from './components/grids/campus';
import Clubs from './components/grids/clubs';
import Home from './components/home';
import Links from './components/grids/links';
import Events from './components/grids/events';
import MapLeaf from './components/map';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet';
import './App.css';
import ScrollToTop from './ScrollToTop';

Leaflet.Icon.Default.imagePath = './components/shared/marker-icon-red.png';

function App() {
  const windowSize = useWindowSize();

  const darkMode = useDarkMode(false);

  const styles = {
    contentAreaLinks: {
      marginTop: 30,
    },
    contentAreaMap: {
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      width: '96%',
    },
    contentAreaMapLg: {
      marginRight: 40,
      marginLeft: 80,
      marginTop: -80,
      marginBottom: 0,
      height: windowSize.height,
    },
    contentAreaHome: {
      marginLeft: 120,
      marginTop: -80,
      marginBottom: 200,
      height: windowSize.height,
    },
  };

  const pages = [
    {
      id: 0,
      pageLink: '/home',
      view: <div />,
      displayName: 'Home',
      animationDelayForNavbar: 0,
      showInNavbar: true,
    },
    {
      id: 1,
      pageLink: '/clubs',
      view: <div />,
      displayName: 'Clubs',
      animationDelayForNavbar: 0,
      showInNavbar: true,
    },
    {
      id: 2,
      pageLink: '/events',
      view: <div />,
      displayName: 'Events',
      animationDelayForNavbar: 0,
      showInNavbar: true,
    },
    {
      id: 3,
      pageLink: '/news',
      view: <div />,
      displayName: 'News',
      animationDelayForNavbar: 0,
      showInNavbar: true,
    },
    {
      id: 4,
      pageLink: '/campus',
      view: <div />,
      displayName: 'Campus',
      animationDelayForNavbar: 0,
      showInNavbar: true,
    },
    {
      id: 5,
      pageLink: '/hostels',
      view: <div />,
      displayName: 'Hostels',
      animationDelayForNavbar: 0,
      showInNavbar: true,
    },
    {
      id: 6,
      pageLink: '/map',
      view: <MapLeaf />,
      displayName: 'Map',
      animationDelayForNavbar: 0,
      showInNavbar: true,
    },
    {
      id: 7,
      pageLink: '/links',
      view: <Links />,
      displayName: 'Links',
      animationDelayForNavbar: 0,
      showInNavbar: true,
    },
    {
      id: 8,
      pageLink: '/hostels/:hostelId',
      view: <div />,
      displayName: 'Hostel Info',
      animationDelayForNavbar: 0,
      showInNavbar: false,
    },
  ];
  return (
    <>
      <div className="App">
        <Router>
          <>
            <ScrollToTop />
            <Switch>
              <Route path="/home">
                <Navbar
                  dark={darkMode.value}
                  toggleDark={darkMode.toggle}
                  pages={pages}
                  name="Home"
                  isOpenInit={false}
                />
                <main>
                  <Appbar name="Home" />
                  <Home />
                </main>
              </Route>
              <Route path="/clubs">
                <Navbar
                  dark={darkMode.value}
                  toggleDark={darkMode.toggle}
                  pages={pages}
                  name="Clubs"
                  isOpenInit={false}
                />
                <main>
                  <Appbar name="Clubs" />
                  <div className="content-area">
                    <Clubs dark={darkMode.value} />
                  </div>
                </main>
              </Route>
              <Route path="/news">
                <Navbar
                  dark={darkMode.value}
                  toggleDark={darkMode.toggle}
                  pages={pages}
                  name="News"
                  isOpenInit={false}
                />
                <main>
                  <Appbar name="News" />
                  <div className="content-area">
                    <News />
                  </div>
                </main>
              </Route>
              <Route path="/campus">
                <Navbar
                  dark={darkMode.value}
                  toggleDark={darkMode.toggle}
                  pages={pages}
                  name="Campus"
                  isOpenInit={false}
                />
                <main>
                  <Appbar name="Campus" />
                  <div className="content-area">
                    <Campus />
                  </div>
                </main>
              </Route>
              <Route exact path="/hostels">
                <Navbar
                  dark={darkMode.value}
                  toggleDark={darkMode.toggle}
                  pages={pages}
                  name="Hostels"
                  isOpenInit={false}
                />
                <main>
                  <Appbar name="Hostels" />
                  <div className="content-area">
                    <Hostels dark={darkMode.value} />
                  </div>
                </main>
              </Route>
              <Route exact path="/map">
                <Navbar
                  dark={darkMode.value}
                  toggleDark={darkMode.toggle}
                  pages={pages}
                  name="Map"
                  isOpenInit={false}
                />
                <main>
                  <Appbar name="Institute Map" />
                  {windowSize.width < 769 && (
                  <div
                    className="content-area"
                    style={styles.contentAreaMap}
                  >
                    <MapLeaf />
                  </div>
                  )}
                  {windowSize.width >= 769 && (
                  <div
                    className="content-area"
                    style={styles.contentAreaMapLg}
                  >
                    <MapLeaf />
                  </div>
                  )}
                </main>
              </Route>
              <Route
                exact
                path="/map/:locId"
                render={(props) => (
                  <div>
                    <Navbar
                      dark={darkMode.value}
                      toggleDark={darkMode.toggle}
                      pages={pages}
                      name="Map"
                      isOpenInit={false}
                    />
                    <main>
                      <Appbar name="Institute Map" />
                      {windowSize.width < 769 && (
                      <div
                        className="content-area"
                        style={styles.contentAreaMap}
                      >
                        <MapLeaf {...props} />
                      </div>
                      )}
                      {windowSize.width >= 769 && (
                      <div
                        className="content-area"
                        style={styles.contentAreaMapLg}
                      >
                        <MapLeaf {...props} />
                      </div>
                      )}
                    </main>
                  </div>
                )}
              />
              <Route exact path="/events">
                <Navbar
                  dark={darkMode.value}
                  toggleDark={darkMode.toggle}
                  pages={pages}
                  name="Events"
                  isOpenInit={false}
                />
                <main>
                  <Appbar name="Events" />
                  <div className="content-area">
                    <Events darkMode={darkMode} />
                  </div>
                </main>
              </Route>
              <Route exact path="/links">
                <Navbar
                  dark={darkMode.value}
                  toggleDark={darkMode.toggle}
                  pages={pages}
                  name="Links"
                  isOpenInit="false"
                />
                <main>
                  <Appbar name="Quick Links" />
                  <div className="content-area">
                    <Links />
                  </div>
                </main>
              </Route>
              <Redirect to="/home" />
            </Switch>
          </>
        </Router>
      </div>
    </>
  );
}

export default App;
