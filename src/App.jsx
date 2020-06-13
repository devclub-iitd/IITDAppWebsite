/* eslint-disable no-unused-vars */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import {
    useEffectOnce,
    useLockBodyScroll,
    useWindowSize,
    useLocalStorage,
} from 'react-use';
import Leaflet from 'leaflet';
import Navbar from './components/navbar';
import Appbar from './components/appbar';
import HostelGrid from './components/gridHostel';
import News from './components/gridNews';
import Campus from './components/gridCampus';
import Explore from './components/gridExplore';
import Home from './components/home';
import Links from './components/gridLinks';
import Events from './components/gridEvents';
import MapLeaf from './components/map';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet';
import './App.css';

// Leaflet.Icon.Default.imagePath =
//     '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

Leaflet.Icon.Default.imagePath = './components/shared/marker-icon-red.png';

function App() {
    const windowSize = useWindowSize();

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
            view: <Links />,
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
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/home">
                        <Navbar pages={pages} name="Home" />
                        <main>
                            <Appbar name="Home" />
                            <Home />
                        </main>
                    </Route>
                    <Route path="/clubs">
                        <Navbar pages={pages} name="Clubs" />
                        <main>
                            <Appbar name="Clubs" />
                            <div className="content-area">
                                <Explore />
                            </div>
                        </main>
                    </Route>
                    <Route path="/news">
                        <Navbar pages={pages} name="News" />
                        <main>
                            <Appbar name="News" />
                            <div className="content-area">
                                <News />
                            </div>
                        </main>
                    </Route>
                    <Route path="/campus">
                        <Navbar pages={pages} name="Campus" />
                        <main>
                            <Appbar name="Campus" />
                            <div className="content-area">
                                <Campus />
                            </div>
                        </main>
                    </Route>
                    <Route exact path="/hostels">
                        <Navbar pages={pages} name="Hostels" />
                        <main>
                            <Appbar name="Hostels" />
                            <div className="content-area">
                                <HostelGrid />
                            </div>
                        </main>
                    </Route>
                    <Route path="/hostels/:hostelId">
                        <Navbar pages={pages} name="Hostels" />
                        <main>
                            <Appbar name="Sample Hostel Name" />
                            <div className="content-area" />
                        </main>
                    </Route>
                    <Route path="/map">
                        <Navbar pages={pages} name="Map" />
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
                    <Route path="/links">
                        <Navbar pages={pages} name="Links" />
                        <main>
                            <Appbar name="Quick Links" />
                            <div className="content-area">
                                <Links />
                            </div>
                        </main>
                    </Route>
                    <Route path="/events">
                        <Navbar pages={pages} name="events" />
                        <main>
                            <Appbar name="Events" />
                            <div className="content-area">
                                <Events />
                            </div>
                        </main>
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
