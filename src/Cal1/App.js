import React from 'react';
import styled from 'styled-components';
import Wraper from './Wraper';

const CContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <CContainer>
      <Wraper />
    </CContainer>
  );
};

export default App;
