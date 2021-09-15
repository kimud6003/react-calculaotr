import React from 'react'
import Calculator from './Components/Calculator';
import Container from './Components/Container';
import Contorl from './Contorl';
import Display from './Components/Display';


function App() {
  return (
    <Container>
      <Calculator>
        <Display/>
        <Contorl/>
      </Calculator>
    </Container>
  );
}

export default App;
