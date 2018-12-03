import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: [],
      todoItem: ''
    }
    this.handleChange=this.handleChange.bind(this)
    this.addItem=this.addItem.bind(this)
}

handleChange(e){
   this.setState({
    todoItem: e.target.value
   })
}

addItem(){
  this.setState({todoList: [...this.state.todoList, this.state.todoItem]})
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p></p>
        <input  onChange={this.handleChange} ></input>
        <button onClick={this.addItem}>Add</button>

        <Todo choreList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
