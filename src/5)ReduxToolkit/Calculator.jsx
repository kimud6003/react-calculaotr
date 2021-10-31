import React, { useReducer, useCallback } from 'react';
import reducer from './Context/Reducer.jsx'
import CalculatorPresneter from './Components/CalculatorPresenter';
import ControlContainer from './Components/Container/ControlContainer';
import DisplayContainer from './Components/Container/DisplayContainer';
import { RESET_CAL,POSNEG_CAL,EQUAL_CAL,PERCENT_CAL,DELETE_CAL,INPUT_CAL } from './Context/Action';

const CalDispatch = React.createContext();
const init = {currentCal:[],resultCal:0};

const CalCulator = () => {
  const [states, dispatch] = useReducer(reducer,init)


  const { currentCal, resultCal } = states;

  const calculateFunc = useCallback(e => {
    const value = e.target.value;

    switch (value) {
      case 'C':
        dispatch({type:RESET_CAL})
        break;

      case '+/-':
        dispatch({type:POSNEG_CAL})
        break;

      case '=':
        dispatch({type:EQUAL_CAL})
        break;

      case '%':
        dispatch({type:PERCENT_CAL})
        break;

      case '←':
        dispatch({type:DELETE_CAL})
        break;

      default:
        dispatch({type:INPUT_CAL,value:value})
        break;
    }
  }, []);

  return (
    <CalDispatch.Provider value={dispatch}>
      <CalculatorPresneter>
        <DisplayContainer currentCal={currentCal} resultCal={resultCal} />
        <ControlContainer calculateFunc={calculateFunc} />
      </CalculatorPresneter>
    </CalDispatch.Provider>
  );
};

export default CalCulator;
