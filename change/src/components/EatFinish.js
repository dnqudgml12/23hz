import React from "react";
// import { useState, useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import finish from '../assets/img/finish.png';
import { Link } from "react-router-dom";

const Div = styled.div`
    display: flex;
    font-family: 'SangSangShinb7', sans-serif;
    font-weight: ${props => props.theme.fontWeights.Header2};
    font-size: 30px;
    color: #000000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 700px;
`;
const Image = styled.img`
    margin-top: 30px;
    width: 155px;
    height: 133px;
`;

const Button = styled.button`
    height: 32px;
    width: 157px;
    background: #F6473A;
    color: #FFFFFF;
    margin-top: 67.84px;
    letter-spacing: 0.05em;
    text-align: center;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: sans-serif;
    font-size: 14px;
    &:hover {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)),
linear-gradient(0deg, #F6473A, #F6473A);
    }
    &:focus {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),
linear-gradient(0deg, #F6473A, #F6473A);
    }
    &:active {
        background: linear-gradient(0deg, rgba(46, 46, 46, 0.2), rgba(46, 46, 46, 0.2)),
linear-gradient(0deg, #F6473A, #F6473A);
    }
    &:focus,&:active {
        background: linear-gradient(0deg, rgba(67, 67, 67, 0.16), rgba(67, 67, 67, 0.16)),
        linear-gradient(0deg, #F6473A, #F6473A);
    }
`;

const EatFinish = () =>{
    return (
        <ThemeProvider theme={theme}>
            <Div>
                걱정먹기 완료!
            <Image src={finish}/>
            <Link to ={`/Cookie`}><Button>내 포츈쿠키 열기</Button></Link>
            </Div>
            </ThemeProvider>
            )
        }

export default EatFinish;