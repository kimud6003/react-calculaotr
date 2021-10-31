import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/calculatorSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});