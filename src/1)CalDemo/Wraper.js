/* eslint-disable no-restricted-globals */
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { evaluate } from 'mathjs';
import styled from 'styled-components';
import Contorl from './Contorl';
import Display from './Components/Display';

const Calculator = styled.div`
  width: 20rem;
  height: 30rem;
  border-radius: 0.75rem;
  background: ${props => props.theme.Colors.lightGrey};
  -webkit-box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);
`;

function Wraper() {
  const [Calculation, setCalculation] = useState([]);
  const [Sum, setSum] = useState(0);

  const stateRef = useRef([]);

  useEffect(() => {
    stateRef.current[0] = Calculation;
    stateRef.current[1] = Sum;
  }, [Calculation, Sum]);

  const SumCallback = useCallback(cal => {
    let calculation = cal;
    if (String(calculation).length === 0) calculation = 0;
    else calculation = evaluate(calculation);

    setSum(calculation);
  }, []);

  const handleClick = useCallback(
    e => {
      const { value } = e.target;
      let nowCal = stateRef.current[0];
      let nowSum = stateRef.current[1];
      switch (value) {
        case 'clear': {
          console.log(nowSum);
          if (nowCal.length !== 0 || nowSum !== 0) {
            setCalculation([]);
            SumCallback([]);
          }
          break;
        }
        case '=': {
          if (!isNaN(nowCal[nowCal.length - 1])) {
            SumCallback(nowCal.join(''));
            setCalculation([]);
          }
          break;
        }
        case 'posNeg': {
          setCalculation(Cal => [Cal.join('') * -1]);
          break;
        }
        case 'perc': {
          setCalculation(Cal => [Cal.join('') * 0.01]);
          break;
        }
        case 'back': {
          setCalculation(Cal => [...Cal].splice(Cal.length - 1, 1));
          break;
        }
        default: {
          if (isNaN(value) && isNaN(nowCal[nowCal.length - 1])) break;
          setCalculation(nowCal.concat(value));
          break;
        }
      }
    },
    [SumCallback, setCalculation],
  );

  return (
    <>
      <Calculator>
        <Display calculation={Calculation} sum={Sum} />
        <Contorl handleClick={handleClick} />
      </Calculator>
    </>
  );
}

export default Wraper;
