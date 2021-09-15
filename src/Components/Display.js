import React from 'react'
import styled from 'styled-components';

const CDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: right;
    overflow: hidden;
    height: calc(30% + 1px);
    width: 100%;
    background: ${props=> props.theme.Colors.displayColor};
    border-radius: 0.75rem 0.75rem 0 0;
`;

const CDisplayCurrent = styled.div`
    color: ${props =>props.theme.Colors.transparentWhite};
`;

const CDisplayResult= styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50%;
    padding: 0 10px;
    font-size: 52px;
    color: ${props => props.theme.Colors.lightGrey};
`;

const Display = (props) => {
    return (
        <CDisplay>
            <CDisplayCurrent>
                {props.calculation}
            </CDisplayCurrent>
            <CDisplayResult>
                {props.sum}
            </CDisplayResult>
        </CDisplay>
    )
}

export default Display
