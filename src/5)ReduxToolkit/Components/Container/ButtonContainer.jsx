import React from 'react';
import PropTypes from 'prop-types';
import ButtonPresenter from '../Presenter/ButtonPresenter';

const ButtonContainer = ({ onClick, color, content }) => {
  return (
    <ButtonPresenter onClick={onClick} color={color} value={content}>
      {content}
    </ButtonPresenter>
  );
};

ButtonContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ButtonContainer;
