/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HostelCard = ({ hostelObj }) => (
    <>
        <div className="hostel-card-title">
            <h1>{hostelObj.name}</h1>
        </div>
        <div className="hostel-card-bg">
            <h1 className="card-subtitle">Est. {hostelObj.est}</h1>
            <div key="a" autoSize="true" className="left1">
                {hostelObj.image}
            </div>
            <div key="b" autoSize="true" className="right">
                <p>{hostelObj.description} </p>
            </div>
            <div key="c" autoSize="true" className="left2">
                <div className="c-btn-group">
                    {hostelObj.category}
                    <a className="c-btn fd" href={hostelObj.mapUrl}>
                        <span className="hostel-link">
                            <Icon.MapPin height="15" strokeWidth="3" /> Find on
                            Map{'  '}
                        </span>
                    </a>
                    <Link
                        to={`/hostels/${hostelObj.id}`}
                        className="c-btn learn-e"
                        href={hostelObj.learnUrl}
                    >
                        <span className="hostel-link">
                            <Icon.Info height="15" strokeWidth="3" />
                            More Info
                            {'  '}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </>
);
HostelCard.propTypes = {
    hostelObj: PropTypes.objectOf(PropTypes.string, PropTypes.number)
        .isRequired,
};

export default HostelCard;
