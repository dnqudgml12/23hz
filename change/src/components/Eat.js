import React, {useEffect} from "react";
import styled, { ThemeProvider } from 'styled-components';
import {useNavigate} from "react-router-dom";
import { theme } from '../styles/theme';

const Loading = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 10px solid rgba(2,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
`; 
const Div = styled.div `
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #000000;
  font-family: 'NanumSquare Neo';
`;

const Eat=()=>{
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/Cookie');
      }, 5000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);

    return(
        <ThemeProvider theme={theme}>
        <div>
        <Div>Eat</Div>
        <Loading/>
        </div>
        </ThemeProvider>
        
    )
}

export default Eat;