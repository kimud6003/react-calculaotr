import { createSlice } from '@reduxjs/toolkit';
import { evaluate } from 'mathjs';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    currentCal: [],
    resultCal: 0,
  },
  reducers: {
    RESET: state => {
      state.currentCal = [];
      state.resultCal = 0;
    },
    POSNEG: state => {
      state.currentCal = [state.currentCal.join('') * -1];
    },
    EQUAL: state => {
      state.resultCal = evaluate(state.currentCal.join(''));
      state.currentCal = [];
    },
    PERCENT: state => {
      state.currentCal = [state.currentCal.join('') * 0.01];
      // state.currentCal.pop();
      // state.currentCal.splice(-1, 1);
    },
    DELETE: state => {
      state.currentCal = state.currentCal.slice(0, state.currentCal.length - 1);
    },
    INPUT: (state, action) => {
      state.currentCal = state.currentCal.concat(action.payload);
      // state.currentCal.push(action.payload);
    },
  },
});

export const { RESET, POSNEG, EQUAL, PERCENT, DELETE, INPUT } =
  calculatorSlice.actions;

export const currentCal = state => state.calculator.currentCal;
export const resultCal = state => state.calculator.resultCal;

export default calculatorSlice.reducer;
