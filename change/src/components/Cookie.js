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

  const [todayLuck, setTodayLuck] = useState(null);
  useEffect(() => {
      const luck = ["1.힘들 때 웃는게 일류다! 우선 웃어보자 :)",
          "2.그냥 웃어봐 행복은 그 안에 있어~",
          "3. 내가 행복의 주문을 걸어줄게! 얍!",
          "5.내가 걱정을 먹었으니 이제 걱정은 사라졌어! 편해지길 바라 >_<",
          "6.잘 하고 있다 아자 아자!",
          "7.걱정 다 필요 없어! 나를 위한걸 하자!",
          "8.내가 항상 옆에 있을게! 걱정이 생기면 언제든 찾아와 냠냠",
          "9.이제 괜찮을거야! 행보카자 우리 ♥︎",
          "10.너의 행복을 위해서라면 언제든 걱정을 먹어줄게 ! ♥︎",
      ];
    const randomIndex = Math.floor(Math.random() * luck.length);
    const selectedLuck = luck[randomIndex];
    setTodayLuck(selectedLuck);
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Image src={todayEmoticon} alt="Today's Emoticon" />
        <div>{todayLuck}</div>
      </div>
    </ThemeProvider>
  );
};

export default Cookie;
