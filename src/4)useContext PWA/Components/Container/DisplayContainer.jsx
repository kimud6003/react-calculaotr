import React from 'react';
import PropTypes from 'prop-types';
import { Display, CurrentNum, ResultNum } from '../Presenter/DisplayPresenter';

const DisplayContainer = ({ currentCal, resultCal }) => {
  return (
    <Display>
      <CurrentNum>{currentCal}</CurrentNum>
      <ResultNum>{resultCal}</ResultNum>
    </Display>
  );
};

DisplayContainer.propTypes = {
  currentCal: PropTypes.array,
  resultCal: PropTypes.number.isRequired,
};

export default DisplayContainer;
