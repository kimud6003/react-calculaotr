import React from 'react';
import { Display, CurrentNum, ResultNum } from '../Presenter/DisplayPresenter';

const DisplayContainer = ({ currentCal, resultCal }) => {
  return (
    <Display>
      <CurrentNum>{currentCal}</CurrentNum>
      <ResultNum>{resultCal}</ResultNum>
    </Display>
  );
};

export default DisplayContainer;
