import React, { Component } from 'react';

class PipeRow extends Component{
    render(){
        const pipeObj = this.props.pipe;
        console.log(pipeObj);
        if(pipeObj.type === ("pipe" || "casing" || "tubing")){
            return(
                <tr key={pipeObj.id}>
                    <td>{pipeObj.id}</td>
                    <td>{pipeObj.strength}</td>
                    <td>{pipeObj.OD}</td>
                    <td>{pipeObj.wall}</td>
                </tr>
            );
        }
        return <tr key={pipeObj.id}><td>{pipeObj.id}</td></tr>;
    }
};

export default PipeRow;