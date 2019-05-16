import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import IconAdd from '../img/icons/baseline-add-24px.svg';

class ShearLinesInputTable extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        console.log("add something");
    }
    
    render(){
        return(
            <div className="panel">
                <div className="heading">Shearables</div>
                <div className="panel-body">
                body of panel
                <Button onClick={this.handleClick} ><img src={IconAdd} alt="add" title='add'/></Button>
                </div>
            </div>
    );}
};

export default ShearLinesInputTable;
