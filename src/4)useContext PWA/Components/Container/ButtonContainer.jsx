import React from 'react';
import ButtonPresenter from '../Presenter/ButtonPresenter';

const ButtonContainer = ({ onClick, color, content }) => {
  return (
    <ButtonPresenter onClick={onClick} color={color} value={content}>
      {content}
    </ButtonPresenter>
  );
};

export default ButtonContainer;
