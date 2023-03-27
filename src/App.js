import logo from './logo.svg';
import './App.css';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
import ClassComponent from './components/ClassComponent';
import MainHeader from './components/MainHeader';
import FunctionalComponent from './components/FunctionalComponent';
import Inline from './components/inline';
import EventHandler from './components/EventHandler';
import Example from './components/Example';
import State from './components/State';

function App() {
  const str= "hello, jsx world";
  function amazing() {
    return 'amazing';
  }
  const test = 13;

  return (
    <div className="App">
    <Example/>
    <State/>
      {/* <EventHandler/>
      <Inline/> */}
      {/* <div className={test}>{typeof test === 'string' ? '문자열': '문자열 아님' }</div>
      <img src={logo} alt = "로고" />
      {str}<br></br>
      {amazing()} */}
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent />
      <MainHeader /> */}
      {/* <ImgComponent /> */}
      {/* <BtnToNaver /> */}
    </div>
  );
}

export default App;
