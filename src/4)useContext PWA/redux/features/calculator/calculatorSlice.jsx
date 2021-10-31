import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'RESET',
  initialState: {
    value: {
      currentCal: [],
      resultCal: 0,
    },
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default calculatorSlice.reducer;
