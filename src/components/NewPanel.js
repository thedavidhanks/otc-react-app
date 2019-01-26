import React, { Component } from 'react';

class NewPanel extends Component{
    constructor(props){
        super(props);
    }    
    render(){
        return(
            <div className="panel">
                <div className="heading">{this.props.title}</div>
                <div className="panel-body">
                {this.props.children}
                </div>
            </div>
    );}
};

export default NewPanel;