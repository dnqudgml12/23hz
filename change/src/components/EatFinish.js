import React from "react";
// import { useState, useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const EatFinish = () =>{
    return (
        <ThemeProvider theme={theme}>
            <Div>
                
                
            </Div>
            </ThemeProvider>
            )
        }

export default EatFinish;