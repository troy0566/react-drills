import React, { Component } from 'react';
import './App.css';

class NewTask extends Component{
    
    addItem(){
        this.setState({todoList: [...this.state.todoList, this.state.todoItem]})
    } 
    render(){
        return(
            <div>
                <button onClick={this.props.handleClick.bind()}>Add</button>
            </div>
        )
    }    
}

export default NewTask;