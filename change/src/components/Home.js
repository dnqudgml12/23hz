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
    height: 800px;
    align-items: center;
    margin: 0px auto;
    width: 1440px;
`;

const Button = styled.button`
    height: 44px;
    width: 420px;
    background: #F6473A;
    color: #FFFFFF;
    margin-top: 5px;
    letter-spacing: 0.05em;
    text-align: center;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'SangSangShinb7', sans-serif;
    font-size: 40px;
    padding-top:0.001px;



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

const URL = styled.div`
margin-top: 30px;
font-family: 'SangSangShinb7', sans-serif;
font-size: 24px;

&:hover {
    cursor: pointer;
}
`;

const Header = styled.div`
    margin-top:187px;
    margin-bottom: 68px;
    font-size: 64px;
    border:none;
`;


const StyleLink = styled(Link)`
color : black;
`;

const Eating = styled.div`
margin-top: 13.84px;
font-size: 24.58px;
text-align: center;
font-weight: bold;
`;


const Home = () => {
    const copyToClipboard = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL)
          .then(() => {
            console.log('URL copied to clipboard!');
          })
          .catch((error) => {
            console.error('Failed to copy URL to clipboard:', error);
          });
      };
    return (
<ThemeProvider theme={theme}>
        <Div>
            <PartDiv>
                <div className="uhbee-rami-font">
                    <StyleLink to={`/`}style={{ textDecoration: "none" }}><Header>걱정 먹는 깜장이 </Header></StyleLink>
                    </div>
                <img src={Black} alt="이미지" style={{ width: '166px', height: 'auto' }} />
                <div className="uhbee-rami-font">
                <Eating>너의 걱정을 먹어줄게!</Eating>
                </div>
                <URL><p><span onClick={copyToClipboard} style={{ color: 'red', fontWeight: 'bold' }}>URL 복사하기</span></p></URL>

                        <Link to={`/Text`}><Button>깜장이에게 먹이주러 가기</Button></Link>
                        
            </PartDiv>
        </Div>
        </ThemeProvider>
    )
}

export default Home;