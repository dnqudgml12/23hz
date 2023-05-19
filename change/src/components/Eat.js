import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { useNavigate } from "react-router-dom";
import { theme } from '../styles/theme';
import image1 from '../assets/img/image1.png';
import image2 from '../assets/img/image2.png';
import image3 from '../assets/img/image3.png';
import image4 from '../assets/img/image4.png';
import line from '../assets/img/line.png';
import process2 from '../assets/img/process2.png'

// const Loading = styled.div`
//   display: inline-block;
//   width: 50px;
//   height: 50px;
//   border: 10px solid rgba(2,255,255,.3);
//   border-radius: 50%;
//   border-top-color: #fff;
//   animation: spin 1s ease-in-out infinite;
//   -webkit-animation: spin 1s ease-in-out infinite;

//   @keyframes spin {
//     to { -webkit-transform: rotate(360deg); }
//   }
//   @-webkit-keyframes spin {
//     to { -webkit-transform: rotate(360deg); }
//   }
// `;
const Background = styled.img`
position: absolute;
width: 100%;
z-index: -1;
`;
const Process2 = styled.img`
  width : 177px;
  height: 24px;
  z-index: 1;
`;
const Image = styled.img`
  width: 155px;
  height: 133px;
  margin-top: 40px;
`;
const All = styled.div`
height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`;

const Div = styled.div`
  font-size: 30px;
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #000000;
  font-family: 'SangSangShinb7', sans-serif;
`;

const Eat = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3, image4]; // 이미지 파일 경로 목록

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 400); // 0.3초마다 이미지 변경

    const timer = setTimeout(() => {
      navigate('/EatFinish');
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 클리어
    };
  }, [images.length, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <All>
        <Process2></Process2>
        <Div>걱정 먹는 중...</Div>
        <Image src={images[currentImage]} alt={`Image ${currentImage}`} />
        <Background src={line}></Background>
      </All>
    </ThemeProvider>
  );
};

export default Eat;
