import React from 'react';
import Spinner from '../Spinner';
import ErrorBanner from '../ErrorBanner';

const TitleBar = () => (
  <div className="title-row">
    <div className="title">
      <h2>Todo App</h2>
    </div>
    <ErrorBanner error="Stuff happened!" clearError={() => alert('Error banner closed')} />
    <Spinner loading={false} />
  </div>
);

export default TitleBar;
