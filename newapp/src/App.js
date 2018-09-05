import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Name from './components/Names';
import Input from './components/Input';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      showComponent: true
    }
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    this.setState((prevState) => (
      {
        showComponent: !prevState.showComponent
      }
  ))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
        <Name name={this.state.showComponent ? 'Name on' : 'Name off'}/>
        <button onClick={this.handleClick}>CLICK ME</button>
      
        <Input />
    </div>
    );
  }
}

export default App;