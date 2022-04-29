import { Helmet } from 'react-helmet';
import logo from '../logo.svg';
import '../App.css';
import React, { Component } from 'react'; // per usare React.Component devo importare questi "moduli"

function Home() {
  return (

    <div className="App">
      <header className="App-header">
        <Helmet>
          <title>HOME</title>
        </Helmet>
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

        {/* 
      
    
      <EssayForm />
      <br />
      <Example />
      <br />
      <MapExample /> */}


      </header>
    </div>
  );
}

export default Home;