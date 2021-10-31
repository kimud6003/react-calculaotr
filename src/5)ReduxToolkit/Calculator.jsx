import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalculatorPresneter from './Components/CalculatorPresenter';
import ControlContainer from './Components/Container/ControlContainer';
import DisplayContainer from './Components/Container/DisplayContainer';
import {
  RESET,
  POSNEG,
  EQUAL,
  PERCENT,
  DELETE,
  INPUT,
  currentCal,
  resultCal,
} from './redux/features/calculator/calculatorSlice.jsx';

const CalCulator = () => {
  const CurrentCal = useSelector(currentCal);
  const ResultCal = useSelector(resultCal);
  const stateRef = useRef([]);

  useEffect(() => {
    stateRef.current[0] = CurrentCal;
    stateRef.current[1] = ResultCal;
  }, [CurrentCal, ResultCal]);

  const dispatch = useDispatch();

  const calculateFunc = useCallback(
    e => {
      const value = e.target.value;
      const RefCurrentCal = stateRef.current[0];
      const RefResultCal = stateRef.current[1];

      if (isNaN(value) && isNaN(RefCurrentCal[RefCurrentCal.length - 1]))
        return;
      switch (value) {
        case 'C':
          if (RefCurrentCal.length === 0 && RefResultCal === 0) break;
          dispatch(RESET());
          break;

        case '+/-':
          dispatch(POSNEG());
          break;

        case '=':
          if (isNaN(RefCurrentCal[RefCurrentCal.length - 1])) break;
          dispatch(EQUAL());
          break;

        case '%':
          dispatch(PERCENT());
          break;

        case '←':
          dispatch(DELETE());
          break;

        default:
          dispatch(INPUT(value));
          break;
      }
    },
    [dispatch],
  );

  return (
    <CalculatorPresneter>
      <DisplayContainer currentCal={CurrentCal} resultCal={ResultCal} />
      <ControlContainer calculateFunc={calculateFunc} />
    </CalculatorPresneter>
  );
};

export default CalCulator;
