import React, { Component } from "react";
import './App.css'; import List from './List.js'

class Todo extends Component {
    render(){
        return(
            <div>
                <ol>
                <List title="My to-do list"
                      choreList={this.props.choreList} />
                </ol>
            </div>
        ) 
    }
}

export default Todo;