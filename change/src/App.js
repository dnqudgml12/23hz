import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Text from './components/Tetx';
import Eat from './components/Eat';
import Cookie from './components/Cookie';
import './App.css';
import EatFinish from './components/EatFinish';

function App() {
  return (
<Router>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Text' element={<Text/>}></Route>
    <Route path='/Eat' element={<Eat/>}></Route>
    <Route path='/EatFinish' element={<EatFinish/>}></Route>
    <Route path='/Cookie' element={<Cookie/>}></Route>
    </Routes>
   </Router> 
  
  );
}

export default App;
