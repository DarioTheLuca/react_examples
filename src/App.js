import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'; // per usare React.Component devo importare questi "moduli"
import MapExample from './components/MapExample';
import NameForm from './components/NameForm';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/SelectFlavor';
import Reservation from './components/MultipleInput';
import Calculator from './components/Calculator';
import Example from './components/ExampleStateHook';
import Clock from './components/Clock';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Clock />
        <NameForm />
        <br />
        <FlavorForm />
        <br />
        <Reservation />
        <br />
        <Calculator />
        <br />
        <EssayForm />
        <br />
        <Example />
        <br />
        
        <br />
        <MapExample />
        

      </header>
    </div>
  );
}

export default App;
