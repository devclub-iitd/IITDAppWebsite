import React from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import loader from './loader.gif';

function newsCard({ newsObj }) {
  return (
    <div className="news-card">
      <LazyLoad
        height="100%"
        once
        offset={200}
        resize
        placeholder={(
          <img
            src={loader}
            alt="loader"
            height="200"
            borderRadius="10px"
          />
)}
      >
        <img
          src={newsObj.imgUrl}
          height="200"
          alt="ICMR approves IIT Delhi's COVID19 Probe Test"
          className="news-img"
          borderRadius="10px"
        />
      </LazyLoad>
      <div className="news-card-heading">
        <h3>{newsObj.title}</h3>
        <p className="news-desc">
          {newsObj.description}
          <p className="news-link">
            <span className="news-icon">
              <Icon.Calendar height="15" strokeWidth="2" />
              {' '}
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(
                new Date(Date.parse(newsObj.createdAt)),
              )}
              {' '}
            </span>

            <a href={newsObj.url}>
              {' '}
              <span>
                <Icon.Bookmark height="15" strokeWidth="2" />
              </span>
              READ COMPLETE ARTICLE
            </a>
          </p>
        </p>
      </div>
    </div>
  );
}
newsCard.propTypes = {
  newsObj: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default newsCard;
