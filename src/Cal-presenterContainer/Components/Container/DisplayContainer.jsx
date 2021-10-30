import React from 'react';
import { Display, CurrentNum, ResultNum } from '../Compoents/DisplayPresenter';

const DisplayContainer = () => {
  return (
    <Display>
      <CurrentNum>200+1</CurrentNum>
      <ResultNum>0</ResultNum>
    </Display>
  );
};

export default DisplayContainer;
