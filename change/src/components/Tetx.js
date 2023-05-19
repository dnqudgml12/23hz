import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Div = styled.div`
    margin: 0px auto;
`;

const Form = styled.div`
      margin-left: 400px;
    margin-top: 50px;
`;

const Dropdown = styled.div`
display: inline-block;
align-items: center;
text-align: center;
font-family: 'Pretendard';
color: white;
  position: relative;

  width: 151px;
  height:32px;
  background-color: #222222; 
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  
`;
const ArrowContainer = styled.div`
 
  cursor: pointer;

  &::after {
    content: "▼";
    color: white;
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
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;  // Change this color to the one you want on hover
  }
`;

const Text = () => {
  const [come, setcome] = useState(false);
  const [ccome, setccome] = useState(false);
  const [selectedOption, setSelectedOption] = useState("걱정 종류 골라");
  const category = ["걱정 종류 골라", "결혼", "연애", "취업", "성적", "돈"];
  const navigate = useNavigate();

  const handleOptionClick = (cate) => {
    setSelectedOption(cate);
    setcome(false);
    if (cate === '걱정 종류 골라'){
        setccome(false);
    } else {
        setccome(true);
    }
  };

  return (
    <Div>
      <Form>
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
              navigate('/Eat');
          }}>
            <textarea placeholder='당신의 걱정을 입력하세요'></textarea>
            <input type='submit' value='제출'/>
          </form>
        }
        <button><Link to='/'>Home</Link></button> 
      </Form>
    </Div>
  );
};

export default Text;
