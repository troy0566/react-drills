import React, { Component } from 'react';
import './App.css';

class Todo extends Component {
    render(){
        return(
            <div>
                <h1>My to-do list</h1>
                <ol>
                {this.props.choreList.map(chore=><h2>{chore}</h2>)} 
                </ol>
            </div>
        ) 
    }
}

export default Todo;