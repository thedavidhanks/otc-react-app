import React, { Component } from 'react';

class NewPanel extends Component{
    render(){
        return(
            <div className="new-panel">
                <div className="new-panel-title"><h4>{this.props.title}</h4></div>
                <div className="new-panel-content">{this.props.children}</div>
            </div>
    );}
};

export default NewPanel;