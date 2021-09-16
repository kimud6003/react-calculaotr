import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const CButton = styled.button`
  font: 400 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  &:nth-last-child(1) {
    border-bottom-right-radius: 0.75rem;
  }
  &:nth-last-child(4) {
    border-bottom-left-radius: 0.75rem;
  }
  ${props => {
    const selectedColor = props.theme.Colors[props.color];
    return css`
      background-color: ${selectedColor};
      &:hover {
        background: ${darken(0.1, selectedColor)};
      }
    `;
  }}
`;

const Button = ({ onClick, color, value, name }) => {
  return (
    <CButton onClick={onClick} color={color} value={value}>
      {name}
    </CButton>
  );
};

Button.defaultProps = {
  color: 'lightGrey',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(Button);
