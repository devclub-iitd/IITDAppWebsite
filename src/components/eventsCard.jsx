import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

function EventsCard({ eventsObj }) {
    const [flipped, set] = useState(true);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    return (
        <div
            type="button"
            role="button"
            onClick={() => set((state) => !state)}
            onKeyDown={() => set((state) => !state)}
            tabIndex="0"
        >
            <a.div
                class="c front"
                style={{
                    opacity: opacity.interpolate((o) => 1 - o),
                    transform,
                }}
            >
                <div className="linksEvent">
                    <a href={eventsObj.webLink} role="button">
                        <div className="siteEvent">
                            <Icon.Globe strokeWidth="2" height="40" />
                        </div>
                    </a>
                    <a href={eventsObj.fbLink} role="button">
                        <div className="fbEvent">
                            <Icon.Facebook strokeWidth="2" height="40" />
                        </div>
                    </a>
                    <a href={eventsObj.instaLink} role="button">
                        <div className="instaEvent">
                            <Icon.Instagram strokeWidth="2" height="40" />
                        </div>
                    </a>
                </div>
                {eventsObj.vectorLogo}
                <h1>
                    {eventsObj.name}{' '}
                    <span className="dates">{eventsObj.date}</span>
                    {'\n'}
                    <div className="description">
                        {eventsObj.summary}
                        <br />
                        <span className="nestedh3">
                            Major Attractions :
                        </span>{' '}
                        {eventsObj.attractions}
                    </div>
                </h1>
            </a.div>

            <a.div
                class="c back"
                style={{
                    opacity,
                    transform: transform.interpolate(
                        (t) => `${t} rotateX(180deg)`
                    ),
                }}
            >
                <h1>
                    {eventsObj.vectorLogo}
                    {eventsObj.name}{' '}
                </h1>
            </a.div>
        </div>
    );
}
EventsCard.propTypes = {
    eventsObj: PropTypes.objectOf(PropTypes.string, PropTypes.number)
        .isRequired,
};

export default EventsCard;