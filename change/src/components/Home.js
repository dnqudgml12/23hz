import { Link } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../src/styles/theme';
import Black from '../../src/assets/img/main.png'
import '../../src/App.css';

const Div = styled.div`
    margin: 0px auto;
    justify-content: center;
    align-items: center;
    display: flex;
`;

const PartDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 1024px;
    align-items: center;
    margin: 0px auto;
    width: 1440px;
`;


const Button = styled.button`
    height: 44px;
    width: 420px;
    background: transparent;
    color: black;
    margin-top: 38.84px;
    letter-spacing: 0.05em;
    text-align: center;
    border: 1px solid #222222;
    border-radius: 5px;
    font-family: 'SangSangShinb7', sans-serif;
    &:hover {
        background: #6CACFF;
    }
`;

const Header = styled.div`
    margin-bottom: 343px;
`;

const Home = () => {
    return (
<ThemeProvider theme={theme}>
        <Div>
            <PartDiv>
                <div className="uhbee-rami-font">
                    <Link to={`/`}><Header>안녕하세요 저는 </Header></Link>
                    </div>
                <img src={Black} alt="이미지" style={{ width: '282px', height: 'auto' }} />
                        <Link to={`/Text`}><Button>깜장이에게 먹이주러 가기</Button></Link>
            </PartDiv>
        </Div>
        </ThemeProvider>
    )
}

export default Home;