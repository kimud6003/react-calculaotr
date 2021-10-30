import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  font-size: 1em;
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

const ButtonComponent = ({ color, content }) => {
  return <Button color={color}>{content} </Button>;
};

Button.defaultProps = {
  color: 'lightGrey',
};

export default ButtonComponent;
