import React from "react";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import image1 from '../assets/img/image1.png';
import image2 from '../assets/img/image2.png';
import image3 from '../assets/img/image3.png';

const Image = styled.img`
  width: 300px;
`;

const Cookie = () => {
  const [todayEmoticon, setTodayEmoticon] = useState(null);
  
  useEffect(() => {
    const emoticons = [image1, image2, image3];
    const randomIndex = Math.floor(Math.random() * emoticons.length);
    const selectedEmoticon = emoticons[randomIndex];
    setTodayEmoticon(selectedEmoticon);
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Image src={todayEmoticon} alt="Today's Emoticon" />
      </div>
    </ThemeProvider>
  );
};

export default Cookie;
