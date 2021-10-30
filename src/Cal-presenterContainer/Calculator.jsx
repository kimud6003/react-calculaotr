import React, { useEffect, useState, useCallback, useRef } from 'react';
import { evaluate } from 'mathjs';
import CalculatorPresneter from './Components/CalculatorPresenter';
import ControlContainer from './Components/Container/ControlContainer';
import DisplayContainer from './Components/Container/DisplayContainer';

const CalCulator = () => {
  const [states, setstates] = useState({
    currentCal: [],
    resultCal: 0,
  });
  const { currentCal, resultCal } = states;
  const statesRef = useRef([]);

  useEffect(() => {
    statesRef.current[0] = states.currentCal;
    statesRef.current[1] = states.resultCal;
  }, [states]);

  const calculateFunc = useCallback(e => {
    const value = e.target.value;
    const currentCalRef = statesRef.current[0];
    const resultCalRef = statesRef.current[1];

    if (isNaN(value) && isNaN(currentCalRef[currentCalRef.length - 1])) return;
    switch (value) {
      case 'C':
        if (currentCalRef.length === 0 && resultCalRef === 0) break;
        else setstates({ currentCal: [], resultCal: 0 });
        break;

      case '+/-':
        setstates({
          currentCal: [currentCalRef.join('') * -1],
          resultCal: resultCalRef,
        });
        break;

      case '=':
        if (!isNaN(currentCalRef[currentCalRef.length - 1])) {
          setstates({
            currentCal: [],
            resultCal: evaluate(currentCalRef.join('')),
          });
        }
        break;

      case '%':
        setstates({
          currentCal: [currentCalRef.join('') * 0.01],
          resultCal: resultCalRef,
        });
        break;

      case '←':
        setstates({
          currentCal: [currentCalRef.slice(0, currentCalRef.length - 1)],
          resultCal: resultCalRef,
        });
        break;

      default:
        setstates({
          currentCal: currentCalRef.concat(value),
          resultCal: resultCalRef,
        });
        break;
    }
  }, []);

  return (
    <CalculatorPresneter>
      <DisplayContainer currentCal={currentCal} resultCal={resultCal} />
      <ControlContainer calculateFunc={calculateFunc} />
    </CalculatorPresneter>
  );
};

export default CalCulator;
