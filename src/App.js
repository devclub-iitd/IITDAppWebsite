
import Navbar from './components/navbar';
import React, {Suspense, lazy} from 'react';
import {useTranslation} from 'react-i18next';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {useLocalStorage, useEffectOnce} from 'react-use';
import './App.css';

function App() {
  const {t} = useTranslation();

  const pages = [

    {
      pageLink: '/',
      view: <div></div>,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
      showInNavbar: true,
    },
    {
      pageLink: '/explore',
      view: <div></div>,
      displayName: 'Explore',
      animationDelayForNavbar: 0.4,
      showInNavbar: true,
    },
    {
      pageLink: '/news',
      view: <div></div>,
      displayName: 'News',
      animationDelayForNavbar: 0.6,
      showInNavbar: true,
    },
    {
      pageLink: '/campus',
      view: <div></div>,
      displayName: 'Campus',
      animationDelayForNavbar: 0.8,
      showInNavbar: true,
    },
    {
      pageLink: '/hostels',
      view: <div></div>,
      displayName: 'Hostels',
      animationDelayForNavbar: 1.0,
      showInNavbar: true,
    },
    {
      pageLink: '/map',
      view: <div></div>,
      displayName: 'Map',
      animationDelayForNavbar: 1.2,
      showInNavbar: true,
    },
    {
      pageLink: '/links',
      view: <div></div>,
      displayName: 'Links',
      animationDelayForNavbar: 1.4,
      showInNavbar: true,
    }

  ];


  return (
    <div className="App">

      <Router>
          <Route
            render={({location}) => (
              <div className="Almighty-Router">
                <Navbar
                  pages={pages}
                />
              </div>
            )}
          />
      </Router>
    </div>
  );
}

export default App;
