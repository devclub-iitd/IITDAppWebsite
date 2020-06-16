/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import rdv from './images/events/rdv.svg';

function EventsCard() {
    const [flipped, set] = useState(true);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    return (
        <div role="button" onClick={() => set((state) => !state)}>
            <a.div
                class="c front"
                style={{
                    opacity: opacity.interpolate((o) => 1 - o),
                    transform,
                }}
            >
                <img src={rdv} alt="RDV'19 Logo" />
                <h1>
                    Rendezvous&apos;19{' '}
                    <span className="dates">Oct 3-5 2019</span>
                    {'\n'}
                    <div className="description">
                        Rendezvous, famously known as RDV is the annual Cultural
                        Festival of the IIT Delhi. It is a four-day-long event
                        held in October every year. Rendezvous&apos;19 hosted
                        280+ events and had a footfall of over 163,000, 15,000+
                        participants and 200+ artists from more than 25
                        countries.
                        <h3>
                            <span className="nestedh3">
                                Major Attractions :
                            </span>{' '}
                            Shankar-Ehsaan-Loy, Ritviz, Naezy , Amit Trivedi
                        </h3>
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
            />
        </div>
    );
}

export default EventsCard;
