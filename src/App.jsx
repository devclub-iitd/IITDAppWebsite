/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Appbar from './components/appbar';
import HostelGrid from './components/gridHostel';
import News from './components/gridNews';
import Campus from './components/gridCampus';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import './App.css';

function App() {
    const pages = [
        {
            id: 0,
            pageLink: '/',
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
            view: HostelGrid,
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
            view: <div />,
            displayName: 'Links',
            animationDelayForNavbar: 0.1,
            showInNavbar: true,
        },
    ];
    return (
        <div className="App">
            <Router>
                <Route
                    render={() => (
                        <div className="Almighty-Router">
                            <Navbar pages={pages} />
                        </div>
                    )}
                />
            </Router>
            <main>
                <Appbar />
                <div className="content-area">
                    <News />
                </div>
            </main>
        </div>
    );
}

export default App;
