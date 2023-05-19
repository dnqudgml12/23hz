// import React from "react";
// import styled from 'styled-components';
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../src/styles/theme';
import Black from '../../src/assets/img/default.jpg'

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
    font-size: ${props => props.theme.Web_fontSizes.subtitle1};
    font-weight: ${props => props.theme.fontWeights.subtitle1};
    font-family: 'NanumSquare Neo';
    text-align: center;
    &:hover {
        background: #6CACFF;
    }
`;

const Header = styled.div`
    font-size: ${props => props.theme.Web_fontSizes.subtitle1};
    font-weight: ${props => props.theme.fontWeights.subtitle1};
    font-family: 'NanumSquare Neo';
`;


const Home = () => {
    return (

        <Div>
            <PartDiv>
                <ThemeProvider theme={theme}>
                    <Link to={`/`}><Header>Home</Header></Link>
                    <img src={Black} alt="이미지" style={{ width: '200px', height: 'auto' }} />
                    <Link to={`/Text`}><Button>깜장이에게 먹이주러 가기</Button></Link>
                </ThemeProvider>
            </PartDiv>
        </Div>

    )
}

export default Home;