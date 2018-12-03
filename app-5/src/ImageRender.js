import React, { Component } from 'react';
import './App.css';

class ImageRender extends Component {
    render(){
        return(
        <div>
            <img src={(this.props.ImagePath)} alt="My Dog" width="500" height="500
            "/>
        </div>
        )
    }
}

export default ImageRender;