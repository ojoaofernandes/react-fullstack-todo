import React from 'react';
import Spinner from '../../containers/Spinner';
import ErrorBanner from '../../containers/ErrorBanner';

const TitleBar = () => (
  <div className="title-row">
    <div className="title">
      <h2>Todo App</h2>
    </div>
    <ErrorBanner />
    <Spinner />
  </div>
);

export default TitleBar;
