import React from 'react';
import { useWindowSize } from 'react-use';

export default function Appbar() {
    const windowSize = useWindowSize();
    return (
        <div className="filters fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="legend">
                {windowSize.width > 769 && <h1>Home</h1>}
            </div>
        </div>
    );
}
