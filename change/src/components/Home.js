import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Div = styled.div`
margin: 0px auto;
justify-content: center;
align-item: center;
display: flex;
`;

const PartDiv = styled.div`
display: flex;
   flex-direction: column;
    height: 750px;
    align-items: center;
    margin: 0px auto;
    width: 1330px;
`;

const Button = styled.button`
  height: 50px;
  weight: 50px;
  background: transparent;
  color: black;
  margin-top: 25px;
  margin-bottom: 24px;
  letter-spacing: 0.05em;
  &:hover {
    background: #6CACFF;
  }
`;


const Home=()=>{
    return(
        <Div>
            <PartDiv>
            <Link to={`/`}>Home</Link>
        <Link to={`/Text`}><Button>깜장이에게 먹이주러 가기</Button></Link>
        </PartDiv>
        </Div>
    )
}

export default Home;