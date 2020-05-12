import React from 'react'

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Route, Link } from 'react-router-dom'
import * as Icon from 'react-feather';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles/Navbar.css'


export default function Navbar(){
  return(
    <React.Fragment>
    <SideNav
   //   onSelect={(selected) => {
    //         const to = '/' + selected;
    //         if (location.pathname !== to) {
    //             history.push(to);
    //         }
    //     }}
    >
       
      <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <Icon.Home color='#9ea9ec' size='3rem' />
                </NavIcon>
                <NavText>
                <h2 id='home'>Home</h2>
                </NavText>
            </NavItem>
            <br />
            <NavItem eventKey="explore">
                <NavIcon>
                    <Icon.Search color='#9ea9ec' size='3rem' />
                </NavIcon>
                <NavText>
                    <h2>  Explore</h2>
                </NavText>
            </NavItem>
            <br />
            <NavItem eventKey="news">
                <NavIcon className='navicon'>
                  <Icon.Rss color='#9ea9ec' size='3rem' />
                </NavIcon>
                <NavText>
                <h2>  News</h2>
                </NavText>
            </NavItem>
            <br />
            <NavItem eventKey="campus">
                <NavIcon>
                    <Icon.MapPin color='#9ea9ec' size='3rem' />
                </NavIcon>
                <NavText>
                <h2>  Campus</h2>
                </NavText>
            </NavItem>
            <br />
            <NavItem eventKey="map">
            <NavIcon>
                <Icon.Map color='#9ea9ec' size='2.5rem' />
            </NavIcon>
            <NavText>
            <h2>  Map</h2>
            </NavText>
        </NavItem>
        <br />
            <NavItem eventKey="links">
                <NavIcon>
                    <Icon.Link color='#9ea9ec' size='3rem' />
                </NavIcon>
                <NavText>
                <h2>Links</h2>
                </NavText>
            </NavItem>
         
        </SideNav.Nav>
    </SideNav>
    <main>
   
       
    </main>
</React.Fragment>);
  }