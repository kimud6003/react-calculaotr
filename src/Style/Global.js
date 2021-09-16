import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
        height: 100vh;
        margin: 0;
        font-size: 20px;
        background: linear-gradient(to right, #ff5f6d,#ffc371);
        background: -webkit-linear-gradient(to right,#ff5f6d, #ffc371);
    } 
`;

export default GlobalStyle;
