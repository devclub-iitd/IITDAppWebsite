import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Appbar from './components/appbar';
import './App.css';

function App() {
    const pages = [
        {
            id: 0,
            pageLink: '/',
            view: <div />,
            displayName: 'Home',
            animationDelayForNavbar: 0.2,
            showInNavbar: true,
        },
        {
            id: 1,
            pageLink: '/explore',
            view: <div />,
            displayName: 'Explore',
            animationDelayForNavbar: 0.4,
            showInNavbar: true,
        },
        {
            id: 2,
            pageLink: '/news',
            view: <div />,
            displayName: 'News',
            animationDelayForNavbar: 0.6,
            showInNavbar: true,
        },
        {
            id: 3,
            pageLink: '/campus',
            view: <div />,
            displayName: 'Campus',
            animationDelayForNavbar: 0.8,
            showInNavbar: true,
        },
        {
            id: 4,
            pageLink: '/hostels',
            view: <div />,
            displayName: 'Hostels',
            animationDelayForNavbar: 1.0,
            showInNavbar: true,
        },
        {
            id: 5,
            pageLink: '/map',
            view: <div />,
            displayName: 'Map',
            animationDelayForNavbar: 1.2,
            showInNavbar: true,
        },
        {
            id: 6,
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
            <main>
                <Appbar />
            </main>
        </div>
    );
}

export default App;
