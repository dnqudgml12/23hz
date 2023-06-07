import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import '../../src/App.css';
import Black from '../../src/assets/img/main.png'
import line from '../assets/img/KakaoTalk_20230520_053822538.png';


const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;


`;





const Form = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;




`;

const Dropdown = styled.div`
  display: inline-block;
  align-items: center;
  text-align: center;
  line-height: 35px;
  font-family: 'SangSangShinb7';
  font-size: 30px;
  color: white;

  width: 151px;
  height: 32px;
  background-color: #222222; 
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
const ArrowContainer = styled.div`
   position: relative;
  cursor: pointer;

  &::after {
    position: absolute;
     bottom:-4px;

    right: 10px;
    content: "▼";
    color: white;
    font-size: 16px;
  }
`;
const DropdownContent = styled.div`

  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  background-color: #222222;
  width: 151px;
  overflow: auto;
  border-radius: 8px;
  z-index: 1;
  
`;

const DropdownOption = styled.div`

font-family: 'SangSangShinb7';
font-size: 30px;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;  // Change this color to the one you want on hover
  }
`;

const TEXT= styled.textarea`
font-family: 'SangSangShinb7';
font-size: 30px;
margin-top: 34px;
box-sizing: border-box;
width: 151px;
height: 129px;
background: #FFFFFF;
/* black */

border: 1px solid #222222;
border-radius: 8px;
`

const Button= styled(Link)`
font-family: 'SangSangShinb7';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 30px;
width: 120px;
height: 32px;
background: #979797;
border: 1px solid #FFFFFF;
/* M3/Elevation Light/1 */
margin-top: 50px;
margin-left: 10px;
border: none;
text-decoration: none; // Link to 시에 밑줄 없앤다.
color: white;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
border-radius: 8px;
text-align: center;


`




const MiddleContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Processbar= styled.div`

 display: flex;
    align-items: center;
margin-top: 50px;
margin-left: 1600px;
width: 100%;
height: 24px;


`

const Circle1 = styled.div`

width: 24px;
height: 24px;
background: #FD3C2D;
/* black */
border-radius: 50%;
border: 2px solid #222222;
line-height: 26px;
justify-content: center;
align-items: center;
text-align: center;
color: #000000;
`



const Line1 = styled.div`
  
border: 2px solid #222222;
width: 149px;
height: 0px;
`
const Circle2 = styled.div`
    width: 24px;
height: 24px;
background: white;
/* black */
border-radius: 50%;
border: 2px solid #222222;
line-height: 26px;
justify-content: center;
align-items: center;
text-align: center;
color: #000000;
     `



const Line2 = styled.div`
           
          border: 2px solid #222222;
          width: 149px;
     height: 0px;
          `


const Circle3 = styled.div`
      width: 24px;
height: 24px;
background: white;
/* black */
border-radius: 50%;
border: 2px solid #222222;
line-height: 26px;
justify-content: center;
align-items: center;
text-align: center;
color: #000000;
          `

const Text = () => {
    const [text, setText] = useState("");


  const [come, setcome] = useState(false);
  const [ccome, setccome] = useState(false);
  const [selectedOption, setSelectedOption] = useState("걱정 종류 골라");
  const category = ["걱정 종류 골라", "결혼", "연애", "취업", "성적", "돈"];

  const handleChange = (event) => {
    if (event.target.value.length <= 30) {
      setText(event.target.value);
    }
  };

  const handleOptionClick = (cate) => {
    setSelectedOption(cate);
    setcome(false);
    if (cate === '걱정 종류 골라'){
        setccome(false);
    } else {
        setccome(true);
    }
  };
  const Background = styled.img`
  position: absolute;
 left: 50%;
  width:100%;

 transform: translateX(-50%);

  
  z-index: -1;
`;
const Bacckground = styled.img`


margin-top: 100px;


width:166px;

z-index: -1;
`;

const HomeLink = styled.div`
    font-size: 22.55px;
 margin-left: 200px;
 margin-top: 52px;
    font-family: 'SangSangShinb7', sans-serif;
    font-size: 30px;
`;
const StyleLink = styled(Link)`
color : black;
width: 600px;
margin-right: 70%;
`;


  return (
    <Div>


          <StyleLink to={`/`}style={{ textDecoration: "none" }}><HomeLink>걱정 먹는 깜장이</HomeLink></StyleLink> 
 <MiddleContent>
         <Processbar>
                <Circle1><div className="pretendard-font">1</div></Circle1>
            <Line1/>
            <Circle2><div className="pretendard-font">2</div></Circle2>
            <Line2/>
            <Circle3><div className="pretendard-font">3</div></Circle3>
            
                 </Processbar>
                 <Bacckground src={Black}></Bacckground> 
                  
                 </MiddleContent>
                 
                 
      <Form>
      
    
      <Background src={line}></Background> 
      
        <Dropdown>
        
          <div>{selectedOption}</div>
          <ArrowContainer onClick={() => setcome(!come)} />
          <DropdownContent show={come}>
            {category.map((cate, index) => (
              <DropdownOption key={index} onClick={() => handleOptionClick(cate)}>
                {cate}
              </DropdownOption>
            ))}
 
          </DropdownContent>
         
        </Dropdown>
      
        {ccome &&
          <form onSubmit={(e) => {
              e.preventDefault();
             
          }}>
           
            <TEXT    placeholder='당신의 걱정을 입력하세요' 
    value={text}
    onChange={handleChange}
             ></TEXT>
            
          </form>
        }

        <Button to='/Eat' > 걱정먹이기!</Button>
          
         
       
      </Form>

 
  
    </Div>
  );
};

export default Text;