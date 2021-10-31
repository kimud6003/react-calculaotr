import { evaluate } from 'mathjs';
import {
  RESET_CAL,
  POSNEG_CAL,
  EQUAL_CAL,
  PERCENT_CAL,
  DELETE_CAL,
  INPUT_CAL,
} from './Action';

const reducer = (states, action) => {
  const cxtCurrentCal = states.currentCal;
  const cxtResultCal = states.resultCal;

  if (isNaN(action.value) && isNaN(cxtCurrentCal[cxtCurrentCal.length - 1]))
    return states;

  switch (action.type) {
    case RESET_CAL:
      if (cxtCurrentCal.length === 0 && cxtResultCal === 0) return states;
      return {
        currentCal: [],
        resultCal: 0,
      };
    case POSNEG_CAL:
      return {
        currentCal: [cxtCurrentCal.join('') * -1],
        resultCal: cxtResultCal,
      };
    case EQUAL_CAL:
      if (isNaN(cxtCurrentCal[cxtCurrentCal.length - 1])) return states;
      return {
        currentCal: [],
        resultCal: evaluate(cxtCurrentCal.join('')),
      };
    case PERCENT_CAL:
      return {
        currentCal: [cxtCurrentCal.join('') * 0.01],
        resultCal: cxtResultCal,
      };
    case DELETE_CAL:
      if (cxtCurrentCal.join('') === 0) return states;
      return {
        currentCal: cxtCurrentCal.slice(0, cxtCurrentCal.length - 1),
        resultCal: cxtResultCal,
      };
    case INPUT_CAL:
      return {
        currentCal: cxtCurrentCal.concat(action.value),
        resultCal: cxtResultCal,
      };
    default:
      return states;
  }
};
export default reducer;
