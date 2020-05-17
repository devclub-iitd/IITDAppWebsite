/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Panel } from 'rsuite';
import * as Icon from 'react-feather';
import dogra from './images/campus/dogra.jpg';

// eslint-disable-next-line react/prefer-stateless-function
class CampusCard extends React.Component {
    render() {
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
                <Panel header="DOGRA HALL" className="campus-card-heading">
                    <small>
                        IIT Delhi&apos;s main multipurpose auditorium hall with
                        the iconic hyperbolic paraboloid roof.
                    </small>
                </Panel>
                <p />
                <div className="c-btn-group">
                    <a className="c-btn fd">
                        <span>
                            <Icon.BookOpen />
                        </span>
                    </a>
                    <a className="c-btn learn-e">
                        <span>
                            <Icon.Info />
                        </span>
                    </a>
                    <a className="c-btn map">
                        <span>
                            <Icon.MapPin />
                        </span>
                    </a>
                    <a className="c-btn ph">
                        <Icon.Phone />
                    </a>
                    <a className="c-btn web">
                        <Icon.Globe />
                    </a>
                </div>
            </Panel>
        );
    }
}

export default CampusCard;
