import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      textentry: ""
    }
  
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
    handleUpdate(event){
      console.log(event.target.value);
      this.setState({
        
        textentry: event.target.value
      })
    }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.handleUpdate}></input>
        <div></div>
         {this.state.textentry}
      </div>
    );
  }
}

export default App;
