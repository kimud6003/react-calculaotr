import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: right;
  overflow: hidden;
  height: calc(30% + 1px);
  width: 100%;
  background: ${props => props.theme.Colors.displayColor};
  border-radius: 0.75rem 0.75rem 0 0;
`;

const CDisplayResult = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50%;
  padding: 0 10px;
  font-size: 52px;
  color: ${props => props.theme.Colors.lightGrey};
`;

const CDisplayCurrent = styled(CDisplayResult)`
  color: ${props => props.theme.Colors.transparentWhite};
  font-size: 1rem;
`;

const Display = ({ calculation, sum }) => {
  return (
    <CDisplay>
      <CDisplayCurrent>{calculation}</CDisplayCurrent>
      <CDisplayResult>{sum}</CDisplayResult>
    </CDisplay>
  );
};

Display.propTypes = {
  calculation: PropTypes.node.isRequired,
  sum: PropTypes.node.isRequired,
};

export default Display;
