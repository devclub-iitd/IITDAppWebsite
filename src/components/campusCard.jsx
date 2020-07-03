import React from 'react';
import { Panel } from 'rsuite';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';
import dogra from './images/campus/dogra.jpg';

function CampusCard({ locObj }) {
    return (
        <Panel
            className="campus-card"
            shaded
            bordered
            bodyFill
            style={{ display: 'inline-block' }}
        >
            <img
                src={dogra}
                height="200"
                alt="Dogra Hall"
                className="campus-img"
                borderRadius="10px"
            />
            <Panel header={locObj.name} className="campus-card-heading">
                <small>{locObj.desc}</small>
            </Panel>
            <p />
            <div className="c-btn-group">
                {locObj.categoryIcon}
                <a className="c-btn learn-e" href={locObj.infoUrl}>
                    <span>
                        <Icon.Info />
                    </span>
                </a>
                <a className="c-btn map" href={locObj.mapUrl}>
                    <span>
                        <Icon.MapPin />
                    </span>
                </a>
                <a className="c-btn ph" href={locObj.phoneUrl}>
                    <Icon.Phone />
                </a>
                <a className="c-btn web" href={locObj.webUrl}>
                    <Icon.Globe />
                </a>
            </div>
        </Panel>
    );
}
CampusCard.propTypes = {
    locObj: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default CampusCard;
