import React from 'react'
import styled,{css} from 'styled-components';
import { darken } from 'polished';

const CButton= styled.button`
    font: 400 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
    &:nth-last-child(1) {
        border-bottom-right-radius: 0.75rem;
    }
    &:nth-last-child(4) {
        border-bottom-left-radius: 0.75rem;
    }
    ${props=>{
        const selectedColor = props.theme.Colors[props.color]
        return css`
            background-color : ${selectedColor} ;
            &:hover {
                background: ${darken(0.1,selectedColor)};
            };
        `;
      }
    }
`;


const Button = (props) => {
    console.log(props)
    return (
        <CButton
          onClick={props.onClick}
          color={props.color}
          value={props.value}>
            {props.name}
        </CButton>
    )
}
Button.defaultProps = {
  color: 'lightGrey'
};

export default Button
