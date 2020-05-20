/* eslint-disable no-unused-vars */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Appbar from './components/appbar';
import HostelGrid from './components/gridHostel';
import News from './components/gridNews';
import Campus from './components/gridCampus';
import Explore from './components/gridExplore';
import Home from './components/home';
import Links from './components/gridLinks';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './App.css';

const styles = {
    contentAreaLinks: {
        marginTop: 30,
    },
};
function App() {
    const pages = [
        {
            id: 0,
            pageLink: '/home',
            view: <div />,
            displayName: 'Home',
            animationDelayForNavbar: 0.1,
            showInNavbar: true,
        },
        {
            id: 1,
            pageLink: '/explore',
            view: <div />,
            displayName: 'Explore',
            animationDelayForNavbar: 0.1,
            showInNavbar: true,
        },
        {
            id: 2,
            pageLink: '/news',
            view: <div />,
            displayName: 'News',
            animationDelayForNavbar: 0.1,
            showInNavbar: true,
        },
        {
            id: 3,
            pageLink: '/campus',
            view: <div />,
            displayName: 'Campus',
            animationDelayForNavbar: 0.1,
            showInNavbar: true,
        },
        {
            id: 4,
            pageLink: '/hostels',
            view: <div />,
            displayName: 'Hostels',
            animationDelayForNavbar: 0.1,
            showInNavbar: true,
        },
        {
            id: 5,
            pageLink: '/map',
            view: <div />,
            displayName: 'Map',
            animationDelayForNavbar: 0.1,
            showInNavbar: true,
        },
        {
            id: 6,
            pageLink: '/links',
            view: <Links />,
            displayName: 'Links',
            animationDelayForNavbar: 0.1,
            showInNavbar: true,
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
                    <Route path="/explore">
                        <Navbar pages={pages} name="Explore" />
                        <main>
                            <Appbar name="Explore Clubs and Activities" />
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
                    <Route path="/hostels">
                        <Navbar pages={pages} name="Hostels" />
                        <main>
                            <Appbar name="Hostels" />
                            <div className="content-area">
                                <HostelGrid />
                            </div>
                        </main>
                    </Route>
                    <Route path="/map">
                        <Navbar pages={pages} name="Map" />
                        <main>
                            <Appbar name="Institute Map" />
                            <div className="content-area">
                                <h1>Map</h1>
                            </div>
                        </main>
                    </Route>
                    <Route path="/links">
                        <Navbar pages={pages} name="Links" />
                        <main>
                            <Appbar name="Quick Links" />
                            <div
                                className="content-area"
                                style={styles.contentAreaLinks}
                            >
                                <Links />
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
