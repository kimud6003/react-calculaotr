import React from 'react';
import ButtonContainer from './ButtonContainer';
import ControlPresenter from '../Compoents/ControlPresenter';

const ControlContainer = () => {
  return (
    <ControlPresenter>
      <ButtonContainer color="mediumGrey" content="C" />
      <ButtonContainer color="mediumGrey" content="+/-" />
      <ButtonContainer color="mediumGrey" content="%" />
      <ButtonContainer color="lightOrange" content="/" />

      <ButtonContainer color="lightGrey" content="7" />
      <ButtonContainer color="lightGrey" content="8" />
      <ButtonContainer color="lightGrey" content="9" />
      <ButtonContainer color="lightOrange" content="X" />

      <ButtonContainer color="lightGrey" content="4" />
      <ButtonContainer color="lightGrey" content="5" />
      <ButtonContainer color="lightGrey" content="6" />
      <ButtonContainer color="lightOrange" content="-" />

      <ButtonContainer color="lightGrey" content="3" />
      <ButtonContainer color="lightGrey" content="2" />
      <ButtonContainer color="lightGrey" content="1" />
      <ButtonContainer color="lightOrange" content="+" />

      <ButtonContainer color="lightGrey" content="0" />
      <ButtonContainer color="lightGrey" content="." />
      <ButtonContainer color="lightGrey" content="&#8592;" />
      <ButtonContainer color="mediumOrange" content="=" />
    </ControlPresenter>
  );
};

export default ControlContainer;
