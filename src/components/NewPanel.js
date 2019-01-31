import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class NewPanel extends Component{
    render(){
        return(
            <Card>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.children}
                </Card.Text>
            </Card>
    );}
};

export default NewPanel;