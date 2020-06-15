/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

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
            />
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
