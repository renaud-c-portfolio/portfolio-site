import GlobalStyles from './GlobalStyles'; 

import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import styled from 'styled-components';

const LargeDiv = styled.div`
position:relative;
min-height: 100vh; 
height:fit-content;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <LargeDiv>
        <GlobalStyles />
        <App /> 
    </LargeDiv>
);


