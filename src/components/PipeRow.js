import React from 'react';

const PipeRows = props => {
        var trimmedPipes;
        
        switch(props.sort){
            case 'tube':
                trimmedPipes = props.pipes.filter( pipe => pipe.type === "casing" || pipe.type === "pipe" || pipe.type === "tube").map( (pipe) => {
                    return <tr key={pipe.id}><td>{pipe.id}</td><td>{pipe.strength}</td><td>{pipe.OD}</td><td>{pipe.wall}</td></tr>;
                });
                break;
            case 'line':
                trimmedPipes = props.pipes.filter( pipe => pipe.type === "wireline" || pipe.type === "eline" || pipe.type === "slickline").map( (pipe) => {
                    return <tr key={pipe.id}><td>{pipe.id}</td><td>{pipe.strength}</td><td>{pipe.OD}</td></tr>;
                });
                break;
            case 'combo':
                trimmedPipes = props.pipes.filter( pipe => pipe.type === "combo").map( (pipe) => {
                    var comboDesc = "";
                    var comboArry = pipe.combine;
                    for(var x in comboArry){
                      if(x === 0){
                        comboDesc = comboArry[x].toString();
                            }else{
                        comboDesc += " + " + comboArry[x].toString();
                      }
                    }
                    return <tr key={pipe.id}><td>{pipe.id}</td><td>{comboDesc}</td></tr>;
                });
                break;
            default:
                trimmedPipes = <tr></tr>;
                break;
        }
        return <tbody>{trimmedPipes}</tbody>;
};

export default PipeRows;