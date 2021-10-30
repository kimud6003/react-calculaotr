import styled from 'styled-components';
const CalculatorPresneter = styled.div`
  width: 20em;
  height: 30em;
  border-radius: 0.75rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  color: black;
  background-color: white;
  -webkit-box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 20px 120px -20px rgba(0, 0, 0, 0.7);

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default CalculatorPresneter;
