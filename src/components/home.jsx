/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import iitd from './images/home/iitd.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="home-banner">
                <img src={iitd} alt="IITD Main Building" className="home-img" />
                <div className="top-left-1">
                    Indian Institute of Technology
                    <span>
                        <br />
                    </span>{' '}
                    Hauz Khas, New Delhi
                </div>
                <div className="top-left-2">
                    IIT Delhi is one of the 15 IITs created to be Centres of
                    Excellence for training, research and development in
                    science, engineering and technology In India.
                </div>
            </div>
        );
    }
}

export default Home;
