import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Components/Button';

const CControl = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  height: 70%;
`;

const Control = ({ triggerSum, triggerCalculation }) => {
  const [calculation, setcalculation] = useState([]);
  useEffect(() => {
    triggerCalculation(calculation.join(''));
  }, [calculation, triggerCalculation]);

  const handleClick = e => {
    const { value } = e.target;
    switch (value) {
      case 'clear': {
        setcalculation([]);
        triggerSum(calculation);
        triggerCalculation(calculation);
        break;
      }
      case '=': {
        if (Number.isNaN(calculation[calculation.length - 1])) {
          break;
        }
        triggerSum(calculation.join(''));
        setcalculation([]);
        break;
      }
      case 'posNeg': {
        const posNeg = [[...calculation].join('') * -1];
        setcalculation(posNeg);
        break;
      }
      case 'perc': {
        const percentage = [[...calculation].join('') * 0.01];
        setcalculation(percentage);
        break;
      }
      case 'back': {
        const removeLast = [...calculation];
        removeLast.splice(removeLast.length - 1, 1);
        setcalculation(removeLast);
        break;
      }
      default: {
        if (
          Number.isNaN(value) &&
          Number.isNaN(calculation[calculation.length - 1])
        ) {
          break;
        }
        setcalculation([...calculation, value]);
        break;
      }
    }
  };

  return (
    <CControl>
      <Button onClick={handleClick} name="C" value="clear" color="mediumGrey" />
      <Button
        onClick={handleClick}
        name="+/-"
        value="posNeg"
        color="mediumGrey"
      />
      <Button onClick={handleClick} name="%" value="perc" color="mediumGrey" />
      <Button onClick={handleClick} name="/" value="/" color="lightOrange" />

      <Button onClick={handleClick} name="7" value="7" />
      <Button onClick={handleClick} name="8" value="8" />
      <Button onClick={handleClick} name="9" value="9" />
      <Button onClick={handleClick} name="x" value="*" color="lightOrange" />

      <Button onClick={handleClick} name="4" value="4" />
      <Button onClick={handleClick} name="5" value="5" />
      <Button onClick={handleClick} name="6" value="6" />
      <Button onClick={handleClick} name="-" value="-" color="lightOrange" />

      <Button onClick={handleClick} name="3" value="3" />
      <Button onClick={handleClick} name="2" value="2" />
      <Button onClick={handleClick} name="1" value="1" />
      <Button onClick={handleClick} name="+" value="+" color="lightOrange" />

      <Button onClick={handleClick} name="0" value="0" />
      <Button onClick={handleClick} name="." value="." />
      <Button onClick={handleClick} name="&#8592;" value="back" />
      <Button onClick={handleClick} name="=" value="=" color="mediumOrange" />
    </CControl>
  );
};

Control.propTypes = {
  triggerSum: PropTypes.func.isRequired,
  triggerCalculation: PropTypes.func.isRequired,
};

export default React.memo(Control);
