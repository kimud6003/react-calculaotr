import React from 'react';
import ButtonComponent from './Button';
import styled from 'styled-components';

const Control = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  border-radius: 0.75rem;
  grid-template-columns: repeat(4, 25%);
`;

const ControlComponent = () => {
  return (
    <Control>
      <ButtonComponent color="mediumGrey" content="C" />
      <ButtonComponent color="mediumGrey" content="+/-" />
      <ButtonComponent color="mediumGrey" content="%" />
      <ButtonComponent color="lightOrange" content="/" />

      <ButtonComponent color="lightGrey" content="7" />
      <ButtonComponent color="lightGrey" content="8" />
      <ButtonComponent color="lightGrey" content="9" />
      <ButtonComponent color="lightOrange" content="X" />

      <ButtonComponent color="lightGrey" content="4" />
      <ButtonComponent color="lightGrey" content="5" />
      <ButtonComponent color="lightGrey" content="6" />
      <ButtonComponent color="lightOrange" content="-" />

      <ButtonComponent color="lightGrey" content="3" />
      <ButtonComponent color="lightGrey" content="2" />
      <ButtonComponent color="lightGrey" content="1" />
      <ButtonComponent color="lightOrange" content="+" />

      <ButtonComponent color="lightGrey" content="0" />
      <ButtonComponent color="lightGrey" content="." />
      <ButtonComponent color="lightGrey" content="&#8592;" />
      <ButtonComponent color="mediumOrange" content="=" />
    </Control>
  );
};

export default ControlComponent;
