import React from 'react';
import empty from './images/empty.svg';
import emptyGit from './images/emptyGit.svg';

export default function emptyResults() {
    return (
        <div className="empty">
            <a href="mailto:devclub.iitd@gmail.com">
                <img
                    className="emptyImg"
                    src={empty}
                    alt="No Matching Results"
                />
            </a>
            <a href="https://github.com/devclub-iitd/IITDAppWebsite/issues/new">
                <img
                    className="emptyImg"
                    src={emptyGit}
                    alt="GitHub Add Issue"
                />
            </a>
        </div>
    );
}
