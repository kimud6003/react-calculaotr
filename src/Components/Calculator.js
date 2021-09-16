import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CCalculator = styled.div`
  width: 20rem;
  height: 30rem;
  border-radius: 0.75rem;
  background: ${props => props.theme.Colors.lightGrey};
  -webkit-box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);
`;

const Calculator = ({ children }) => {
  return <CCalculator>{children}</CCalculator>;
};

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Calculator;
