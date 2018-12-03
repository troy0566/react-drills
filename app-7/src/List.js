import React, { Component } from 'react';
import './App.css';

class List extends Component {
    
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <ol>
                {this.props.choreList.map(chore=><h2>{chore}</h2>)}
                </ol>
            </div>
        )
    }    
}

export default List;