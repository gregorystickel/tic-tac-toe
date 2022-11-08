import logo from './logo.svg';
import './App.css';
import Square from './Square';

function App() {
  let str = "This is a string";
  return (
    <div className="App">
      {
      <Square propVar={str}/>
      }
    </div>
  );
}

export default App;
