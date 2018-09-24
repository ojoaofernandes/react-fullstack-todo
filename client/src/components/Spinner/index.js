import React from 'react';
import ClassNames from 'classnames';
import './index.css';

const Spinner = ({ loading }) => {
  const classes = ClassNames({
    spinner: true,
    loading,
  });

  return (
    <div>
      <div className={classes}>
      </div>
    </div>
  );
};

export default Spinner;
