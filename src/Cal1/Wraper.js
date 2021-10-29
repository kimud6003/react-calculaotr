/* eslint-disable no-restricted-globals */
import React, { useState, useCallback } from 'react';
import { evaluate } from 'mathjs';
// import styled from 'styled-components';
import Calculator from './Components/Calculator';
// import Container from './Components/Container';
import Contorl from './Contorl';
import Display from './Components/Display';

function Wraper() {
  const [Calculation, setCalculation] = useState([]);
  const [Sum, setSum] = useState(0);

  const SumCallback = useCallback(cal => {
    let calculation = cal;
    if (String(calculation).length === 0) {
      calculation = 0;
    } else {
      calculation = evaluate(calculation);
    }
    setSum(calculation);
  }, []);
  const handleClick = useCallback(
    e => {
      const { value } = e.target;
      switch (value) {
        case 'clear': {
          setCalculation(Cal => {
            SumCallback(Cal);
            return [];
          });
          break;
        }
        case '=': {
          setCalculation(Cal => {
            if (!isNaN(Cal[Cal.length - 1])) SumCallback(Cal.join(''));
            return [];
          });
          break;
        }
        case 'posNeg': {
          setCalculation(Cal => {
            return [[...Cal].join('') * -1];
          });
          break;
        }
        case 'perc': {
          setCalculation(Cal => {
            return [[...Cal].join('') * 0.01];
          });
          break;
        }
        case 'back': {
          setCalculation(Cal => {
            return [...Cal].splice([...Cal].length - 1, 1);
          });
          break;
        }
        default: {
          setCalculation(Cal => {
            console.log(Cal);
            if (!(isNaN(value) && isNaN(Cal[Cal.length - 1])))
              return [...Cal, value];
            return Cal;
          });
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
