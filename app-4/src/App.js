import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      username: "",
      password: ""
    }
    this.handleUpdateUsername = this.handleUpdateUsername.bind(this)
    this.handleUpdatePassword = this.handleUpdatePassword.bind(this)
    this.loginUser = this.loginUser.bind(this)
  }

  handleUpdateUsername(event){
    this.setState({
      username: event.target.value
    })
  }

  handleUpdatePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  loginUser(){
    console.log("Username: " + this.state.username + " Password: " + this.state.password)
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
        <input onChange={this.handleUpdateUsername} placeholder="Username"/>
        <input onChange={this.handleUpdatePassword} placeholder="Password"/>
        <button onClick={this.loginUser}>Login</button>     
      </div>
    );
  }
}

export default App;
