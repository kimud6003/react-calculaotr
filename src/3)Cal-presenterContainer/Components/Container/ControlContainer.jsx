import React from 'react';
import ButtonContainer from './ButtonContainer';
import ControlPresenter from '../Presenter/ControlPresenter';

const ControlContainer = ({ calculateFunc }) => {
  return (
    <ControlPresenter>
      <ButtonContainer onClick={calculateFunc} color="mediumGrey" content="C" />
      <ButtonContainer
        onClick={calculateFunc}
        color="mediumGrey"
        content="+/-"
      />
      <ButtonContainer onClick={calculateFunc} color="mediumGrey" content="%" />
      <ButtonContainer
        onClick={calculateFunc}
        color="lightOrange"
        content="/"
      />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="7" />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="8" />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="9" />
      <ButtonContainer
        onClick={calculateFunc}
        color="lightOrange"
        content="X"
      />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="4" />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="5" />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="6" />
      <ButtonContainer
        onClick={calculateFunc}
        color="lightOrange"
        content="-"
      />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="3" />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="2" />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="1" />
      <ButtonContainer
        onClick={calculateFunc}
        color="lightOrange"
        content="+"
      />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="0" />
      <ButtonContainer onClick={calculateFunc} color="lightGrey" content="." />
      <ButtonContainer
        onClick={calculateFunc}
        color="lightGrey"
        content="&#8592;"
      />
      <ButtonContainer
        onClick={calculateFunc}
        color="mediumOrange"
        content="="
      />
    </ControlPresenter>
  );
};

export default React.memo(ControlContainer);
