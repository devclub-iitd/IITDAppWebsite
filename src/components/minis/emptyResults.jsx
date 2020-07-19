import React from 'react';
import EmptyGit from '../../assets/emptyGit.svg';
import Empty from '../../assets/empty.svg';

export default function emptyResults() {
  return (
    <div className="empty">
      <a href="mailto:devclub.iitd@gmail.com">
        <img
          className="emptyImg"
          src={Empty}
          alt="No Matching Results"
        />
      </a>
      <a href="https://github.com/devclub-iitd/IITDAppWebsite/issues/new">
        <img
          className="emptyImg"
          src={EmptyGit}
          alt="GitHub Add Issue"
        />
      </a>
    </div>
  );
}
