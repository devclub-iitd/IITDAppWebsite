/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
// eslint-disable-next-line no-unused-vars
import { useWindowSize, useLocalStorage } from 'react-use';
import iitd from './images/home/iitd.jpg';
import iitSign from './images/home/iit-sign.jpg';
import graffiti from './images/home/graffiti.png';
import dogra from './images/home/dogra-roof.jpg';
import lhc from './images/home/lhc.jpg';

function Home() {
    const windowSize = useWindowSize();
    return (
        <div className="home-banner">
            <img src={iitd} alt="IITD Main Building" className="home-img-1" />
            <div className="top-left-1">
                Indian Institute of Technology
                <span>
                    <br />
                </span>{' '}
                Hauz Khas, New Delhi
            </div>
            <div className="top-left-2">
                Estabilished in 1961, IIT Delhi is one of the 15 IITs created to
                be Centres of Excellence for training, research and development
                in science, engineering and technology In India.
            </div>
            <img
                src={iitSign}
                alt="IITD Main Building"
                className="home-img-2"
            />
            <div className="links">
                <div className="link">
                    <a href="https://www.iitd.ac.in">
                        Visit the official IITD Website{' '}
                        <span>
                            <Icon.ChevronsRight className="linkIcon" />
                        </span>
                    </a>
                </div>
                <div className="link">
                    <Link to="/explore">
                        Explore Clubs&Activities @ IIT Delhi{' '}
                        <span>
                            <Icon.ChevronsRight className="linkIcon" />
                        </span>
                    </Link>
                </div>
                <div className="link">
                    <Link to="/news">
                        Read Latest IIT Delhi News{' '}
                        <span>
                            <Icon.ChevronsRight className="linkIcon" />
                        </span>
                    </Link>
                </div>
                <div className="link">
                    <Link to="/campus">
                        Find Places To Visit in IIT Delhi{' '}
                        <span>
                            <Icon.ChevronsRight className="linkIcon" />
                        </span>
                    </Link>
                </div>
                <div className="link">
                    <Link to="/hostels">
                        Student Hostels in IIT Delhi{' '}
                        <span>
                            <Icon.ChevronsRight className="linkIcon" />
                        </span>
                    </Link>
                </div>
                <div className="link">
                    <Link to="/map">
                        View the Campus Map{' '}
                        <span>
                            <Icon.ChevronsRight className="linkIcon" />
                        </span>
                    </Link>
                </div>
                <div className="link">
                    <Link to="/links">
                        Links to IITD Resources{' '}
                        <span>
                            <Icon.ChevronsRight className="linkIcon" />
                        </span>
                    </Link>
                </div>
                <div className="link">
                    <a href="https://devclub.in/">
                        Learn More About DevClub IIT Delhi{' '}
                        <span>
                            <Icon.ChevronsRight className="linkIcon" />
                        </span>
                    </a>
                </div>

                {windowSize.width < 769 && (
                    <img src={graffiti} alt="IITD" className="home-img-3" />
                )}
            </div>
            <p className="disc">
                {' '}
                This is not the official site of IIT Delhi.{' '}
                {windowSize.width < 769 && (
                    <span>
                        <br />
                    </span>
                )}{' '}
                DevClub does not guarantee the correctness of data on this site.
                {windowSize.width < 769 && (
                    <span>
                        <br />
                    </span>
                )}{' '}
                Credit of the images used goes to their respective owners.
            </p>
            {windowSize.width < 769 && (
                <img src={dogra} alt="IITD Dogra Hall" className="home-img-4" />
            )}
            {windowSize.width >= 769 && (
                <img src={graffiti} alt="IITD" className="home-img-3" />
            )}
            {windowSize.width >= 769 && (
                <img src={lhc} alt="IITD LHC" className="home-img-5" />
            )}
        </div>
    );
}

export default Home;
