import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'; // per usare React.Component devo importare questi "moduli"
import MapExample from './components/MapExample';
import NameForm from './components/NameForm';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/SelectFlavor';
import Reservation from './components/MultipleInput';
import Calculator from './components/Calculator';

// IL CLOCK spiegato qui: https://reactjs.org/docs/state-and-lifecycle.html
class Clock extends React.Component { //creo una classe clock per crearmi un orologio dinamico

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() { //this methods runs after the component output has been rendered to the DOM. 
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() { //We will tear down the timer in the componentWillUnmount() lifecycle method
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ //this.setState() to schedule updates to the component local state:
      date: new Date()
    });
  }



  render() {
    return (
      <div>
        <p>
          It is {this.state.date.toLocaleTimeString()}.
        </p>
        
      </div>
    );
  }

}

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
        <MapExample />
        

      </header>
    </div>
  );
}

export default App;
