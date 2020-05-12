import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import '../src/App.css'

const history = require('history').createBrowserHistory;

function App() {
  return (
    <Router>
    
    <Route render={({ location, history }) =>
    <Navbar /> } />

    </Router>
    
  );
}

export default App;