import React from 'react';
import ButtonPresenter from '../Compoents/ButtonPresenter';

const ButtonContainer = ({ color, content }) => {
  return <ButtonPresenter color={color}>{content} </ButtonPresenter>;
};

export default ButtonContainer;
