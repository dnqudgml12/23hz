import React from "react";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Link } from "react-router-dom";
import portune1 from '../assets/img/portune1.png';
import portune2 from '../assets/img/portune2.png';
import portune3 from '../assets/img/portune3.png';
import portune4 from '../assets/img/portune4.png';
import portune5 from '../assets/img/portune5.png';
import portune6 from '../assets/img/portune6.png';
import portune7 from '../assets/img/portune7.png';
import portune8 from '../assets/img/portune8.png';
import portune9 from '../assets/img/portune9.png';
import url from '../assets/img/url.png';


const Image = styled.img`
  width: 500px;
  height: 300px;
`;
const Url = styled.img`
    width : 134px;
    height: 35px;
    margin-top: 20px;
`;
const Div = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;

`;

const Text = styled.div`
    font-family: 'SangSangShinb7', sans-serif;
    font-size: 24px;
    font-weight: 600;
`;
const Button = styled.button`
    height: 32px;
    width: 253px;
    background: #F6473A;
    color: #FFFFFF;
    margin-top: 20.84px;
    letter-spacing: 0.05em;
    text-align: center;

    border: 1px solid #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'SangSangShinb7', sans-serif;
    font-size: 26px;
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
const Button2 = styled.button`
    height: 32px;
    width: 253px;
    background: #646464;
    color: #FFFFFF;
    margin-top: 20.84px;
    letter-spacing: 0.05em;
    text-align: center;

    border: 1px solid #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'SangSangShinb7', sans-serif;
    font-size: 26px;
    &:hover {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)),
linear-gradient(0deg, #646464, #646464);
    }
    &:focus {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),
linear-gradient(0deg, #646464, #646464);
    }
    &:active {
        background: linear-gradient(0deg, rgba(46, 46, 46, 0.2), rgba(46, 46, 46, 0.2)),
linear-gradient(0deg, #646464, #646464);
    }
    &:focus,&:active {
        background: linear-gradient(0deg, rgba(67, 67, 67, 0.16), rgba(67, 67, 67, 0.16)),
        linear-gradient(0deg, #646464, #646464);
    }
`;

const Cookie = () => {
  const [todayEmoticon, setTodayEmoticon] = useState(null);
  
  useEffect(() => {
    const emoticons = [portune1, portune2, portune3 , portune4, portune5, portune6, portune7, portune8, portune9];
    const randomIndex = Math.floor(Math.random() * emoticons.length);
    const selectedEmoticon = emoticons[randomIndex];
    setTodayEmoticon(selectedEmoticon);
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Text>너를 위한 포츈쿠키를 준비했어</Text>
        <Image src={todayEmoticon} alt="Today's Emoticon" />
        <Text>친구에게 공유하기</Text>
        <Url src={url}></Url>
        <Link to ={`/Text`}><Button>다른 고민 먹이러 가기</Button></Link>
        <Link to ={`/`}><Button2>홈으로 가기</Button2></Link>        
      </Div>
    </ThemeProvider>
  );
};

export default Cookie;
