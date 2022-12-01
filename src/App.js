import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Question from './Question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='questions1'>
        <Body></Body>
        <div className='questions2'>
          <Question></Question>

        </div>

      </div>
    </div>
  );
}

export default App;
