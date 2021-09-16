import React, { useState, useCallback } from 'react';
import { evaluate } from 'mathjs';
import Calculator from './Components/Calculator';
import Container from './Components/Container';
import Contorl from './Contorl';
import Display from './Components/Display';

function App() {
  const [Calculation, setCalcuation] = useState([]);
  const [Sum, setSum] = useState(0);

  const calculate = useCallback(calculation => {
    setCalcuation(calculation);
  }, []);
  const sum = useCallback(cal => {
    console.log(cal);
    let calculation = cal;
    if (String(calculation).length === 0) {
      calculation = 0;
    } else {
      calculation = evaluate(calculation);
    }
    setSum(calculation);
  }, []);

  return (
    <Container>
      <Calculator>
        <Display calculation={Calculation} sum={Sum} />
        <Contorl triggerSum={sum} triggerCalculation={calculate} />
      </Calculator>
    </Container>
  );
}

export default App;
