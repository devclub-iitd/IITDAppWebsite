import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';

function App() {
    const pages = [
        {
            pageLink: '/',
            view: <div />,
            displayName: 'Home',
            animationDelayForNavbar: 0.2,
            showInNavbar: true,
        },
        {
            pageLink: '/explore',
            view: <div />,
            displayName: 'Explore',
            animationDelayForNavbar: 0.4,
            showInNavbar: true,
        },
        {
            pageLink: '/news',
            view: <div />,
            displayName: 'News',
            animationDelayForNavbar: 0.6,
            showInNavbar: true,
        },
        {
            pageLink: '/campus',
            view: <div />,
            displayName: 'Campus',
            animationDelayForNavbar: 0.8,
            showInNavbar: true,
        },
        {
            pageLink: '/hostels',
            view: <div />,
            displayName: 'Hostels',
            animationDelayForNavbar: 1.0,
            showInNavbar: true,
        },
        {
            pageLink: '/map',
            view: <div />,
            displayName: 'Map',
            animationDelayForNavbar: 1.2,
            showInNavbar: true,
        },
        {
            pageLink: '/links',
            view: <div />,
            displayName: 'Links',
            animationDelayForNavbar: 1.4,
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
        </div>
    );
}

export default App;
