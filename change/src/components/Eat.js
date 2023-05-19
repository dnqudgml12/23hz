import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { useNavigate } from "react-router-dom";
import { theme } from '../styles/theme';
import image1 from '../assets/img/image1.png';
import image2 from '../assets/img/image2.png';
import image3 from '../assets/img/image3.png';

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

const Image = styled.img`
width: 100px;
height: 100px;
`;

const Div = styled.div `
  font-size: ${props => props.theme.Web_fontSizes.Header2};
  font-weight: ${props => props.theme.fontWeights.Header2};
  color: #000000;
  font-family: 'NanumSquare Neo';
`;

const Eat = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2, image3]; // 이미지 파일 경로 목록

  const navigate = useNavigate();

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 300); // 0.3초마다 이미지 변경
    const timer = setTimeout(() => {
        navigate('/Cookie');
      }, 1000);



    return () => {
        clearTimeout(timer);
      clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 클리어
    };
  }, [images, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Div>Eat</Div>
        <Image src={images[currentImage]} alt={`Image ${currentImage}`} />
        <Loading/>
      </div>
    </ThemeProvider>
  );
};

export default Eat;
