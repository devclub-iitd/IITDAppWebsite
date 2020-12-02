import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { useWindowSize } from 'react-use';

function Home() {
  const windowSize = useWindowSize();
  return (
    <div className="home-banner">
      <img src="https://live.staticflickr.com/65535/50459857877_5d435e30b3_k.jpg" alt="IITD Main Building" className="home-img-1" />
      <div className="top-left-1">
        Indian Institute of Technology
        <span>
          <br />
        </span>
        {' '}
        Hauz Khas, New Delhi
      </div>
      <div className="top-left-2">
        Estabilished in 1961, IIT Delhi is one of the 23 IITs created to
        be Centres of Excellence for training, research and development
        in science, engineering and technology In India.
      </div>
      <img
        src="https://live.staticflickr.com/65535/50459690276_51867a2164_k.jpg"
        alt="IITD Main Building"
        className="home-img-2"
      />
      <div className="links">
        <div className="link">
          <a href="https://www.iitd.ac.in">
            Visit the official IITD Website
            {' '}
            <span>
              <Icon.ChevronsRight className="linkIcon" />
            </span>
          </a>
        </div>
        <div className="link">
          <Link to="/clubs">
            Explore Clubs&Activities @ IIT Delhi
            {' '}
            <span>
              <Icon.ChevronsRight className="linkIcon" />
            </span>
          </Link>
        </div>
        <div className="link">
          <Link to="/news">
            Read Latest IIT Delhi News
            {' '}
            <span>
              <Icon.ChevronsRight className="linkIcon" />
            </span>
          </Link>
        </div>
        <div className="link">
          <Link to="/campus">
            Find Places To Visit in IIT Delhi
            {' '}
            <span>
              <Icon.ChevronsRight className="linkIcon" />
            </span>
          </Link>
        </div>
        <div className="link">
          <Link to="/hostels">
            Student Hostels in IIT Delhi
            {' '}
            <span>
              <Icon.ChevronsRight className="linkIcon" />
            </span>
          </Link>
        </div>
        <div className="link">
          <Link to="/map">
            View the Campus Map
            {' '}
            <span>
              <Icon.ChevronsRight className="linkIcon" />
            </span>
          </Link>
        </div>
        <div className="link">
          <Link to="/links">
            Links to IITD Resources
            {' '}
            <span>
              <Icon.ChevronsRight className="linkIcon" />
            </span>
          </Link>
        </div>
        <div className="link">
          <a href="https://devclub.in/">
            Learn More About DevClub IIT Delhi
            {' '}
            <span>
              <Icon.ChevronsRight className="linkIcon" />
            </span>
          </a>
        </div>

        {windowSize.width < 769 && (
        <img src="https://live.staticflickr.com/65535/50459858007_895ddb3c6c_h.jpg" alt="IITD" className="home-img-3" />
        )}
      </div>
      {windowSize.width < 769 && (
        <img src="https://live.staticflickr.com/65535/50459856472_c961b60d1e_k.jpg" alt="IITD Dogra Hall" className="home-img-4" />
      )}
      {windowSize.width >= 769 && (
        <img src="https://live.staticflickr.com/65535/50459858007_895ddb3c6c_h.jpg" alt="IITD" className="home-img-3" />
      )}
      {windowSize.width >= 769 && (
        <img src="https://live.staticflickr.com/65535/50459857907_bca5c87a2b_k.jpg" alt="IITD LHC" className="home-img-5" />
      )}
      <p className="disc">
        {' '}
        This is not the official site of IIT Delhi.
        {' '}
        {windowSize.width < 769 && (
        <span>
          <br />
        </span>
        )}
        {' '}
        DevClub does not guarantee the correctness of data on this site.
        {windowSize.width < 769 && (
        <span>
          <br />
        </span>
        )}
        {' '}
        Credit of the images used goes to their respective owners.
      </p>
      {windowSize.width >= 769 && (
        <div className="dummy">DevClub IIT Delhi</div>
      )}
    </div>
  );
}

export default Home;
