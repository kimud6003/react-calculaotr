import React from 'react'
import Button from './Components/Button'
import styled from 'styled-components';

const CControl= styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    height: 70%;
`;

const Contorl = () => {
    return (
        <CControl>
            <Button name="C" value="clear" color="mediumGrey"/>
            <Button name="+/-" value="posNeg" color="mediumGrey"/>
            <Button name="%" value="perc" color="mediumGrey"/>
            <Button name="/" value="/" color="lightOrange"/>

            <Button name="7" value="7" />
            <Button name="8" value="8" />
            <Button name="9" value="9" />
            <Button name="x" value="*" color="lightOrange" />

            <Button name="4" value="4" />
            <Button name="5" value="5" />
            <Button name="6" value="6" />
            <Button name="-" value="-" color="lightOrange" />

            <Button name="3" value="3" />
            <Button name="2" value="2" />
            <Button name="1" value="1" />
            <Button name="+" value="+" color="lightOrange"/>

            <Button name="0" value="0" />
            <Button name="." value="." />
            <Button name="&#8592;" value="back" />
            <Button name="=" value="=" color="mediumOrange"/>
        </CControl>
    )
}

export default Contorl
