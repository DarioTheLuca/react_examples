import React from "react";

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

export default Clock;