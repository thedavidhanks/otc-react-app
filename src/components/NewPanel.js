import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class NewPanel extends Component{
    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
                <div>{this.props.children}</div>
            </div>
    );}
};

export default NewPanel;