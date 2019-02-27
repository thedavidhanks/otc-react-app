import React from 'react';

const PipeRows = props => {
        var trimmedPipes;
        switch(props.sort){
            case 'tube':
                trimmedPipes = props.pipes.filter( pipe => pipe.type === "casing" || pipe.type === "pipe" || pipe.type === "tube").map( (pipe) => {
                    return <tr key={pipe.id} className="d-flex"><td className="col-1">{pipe.id}</td><td className="col-4">{pipe.strength}</td><td className="col-3">{pipe.OD}</td><td className="col-3">{pipe.wall}</td><td className="col-1" ><i className="far fa-trash-alt" onClick={() => {props.delShearable(pipe)}}></i></td></tr>;
                });
                break;
            case 'line':
                trimmedPipes = props.pipes.filter( pipe => pipe.type === "wireline" || pipe.type === "eline" || pipe.type === "slickline").map( (pipe) => {
                    return <tr key={pipe.id} className="d-flex"><td className="col-1">{pipe.id}</td><td className="col-8">{pipe.strength}</td><td className="col-2">{pipe.OD}</td><td className="col-1"><i className="far fa-trash-alt" onClick={() => {props.delShearable(pipe)}}></i></td></tr>;
                });
                break;
            case 'combo':
                trimmedPipes = props.pipes.filter( pipe => pipe.type === "combo").map( (pipe) => {
                    var comboDesc = "";
                    pipe.combine.forEach( (val, key) => {
                       key === 0 ? comboDesc = val.toString() : comboDesc += " + "+val.toString(); 
                    });
                    return <tr key={pipe.id} className="d-flex"><td className="col-1">{pipe.id}</td><td className="col-10">{comboDesc}</td><td className="col-1"><i className="far fa-trash-alt" onClick={() => {props.delShearable(pipe)}}></i></td></tr>;
                });
                break;
            default:
                trimmedPipes = <tr></tr>;
                break;
        }
        return <tbody>{trimmedPipes}</tbody>;
};

export default PipeRows;