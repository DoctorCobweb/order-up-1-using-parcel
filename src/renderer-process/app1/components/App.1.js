import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.1.css';

class App1 extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OrderUp: App1</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/renderer-process/app1/components/App.1.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App1;