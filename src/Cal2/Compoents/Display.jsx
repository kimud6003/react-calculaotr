import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: 30%;
  border-radius: 0.75rem 0.75rem 0 0;
  background: ${props => props.theme.Colors.displayColor};
`;
const CurrentNum = styled.div`
  padding-top: 10%;
  width: 95%;
  font-size: 2rem;
  color: ${props => props.theme.Colors.transparentWhite};
  text-align: right;
`;
const ResultNum = styled.div`
  padding-top: 5%;
  width: 95%;
  font-size: 3rem;
  color: ${props => props.theme.Colors.lightGrey};
  text-align: right;
`;

const DisplayComponent = () => {
  return (
    <Display>
      <CurrentNum>200+1</CurrentNum>
      <ResultNum>0</ResultNum>
    </Display>
  );
};

export default DisplayComponent;
