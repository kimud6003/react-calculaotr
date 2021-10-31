import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from './features/calculator/calculatorSlice';

export default configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
  devTools: true,
});
