import React from 'react'
import styled from 'styled-components';

const CContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color:black;
    height: 100vh;
    width: 100%;
`;

const Container = ({children}) => {
    return (
        <CContainer>
            {children}
        </CContainer>
    )
}

export default Container
