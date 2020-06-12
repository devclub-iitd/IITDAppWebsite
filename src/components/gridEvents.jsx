/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Search from './search';
import NewsCard from './newsCard';
import news from './shared/events';
import CheckBox from './shared/checkBox';
import ToTop from './goToTop';

const ResponsiveGridLayout = WidthProvider(Responsive);

function Events() {
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    return (
        <div role="button" onClick={() => set((state) => !state)}>
            <a.div
                class="c back"
                style={{
                    opacity: opacity.interpolate((o) => 1 - o),
                    transform,
                }}
            />
            <a.div
                class="c front"
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

export default Events;
