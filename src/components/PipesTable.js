import React from 'react';
import Table from 'react-bootstrap/Table';
import PipeRows from './PipeRow.js';

function tubularsHasType(pipeArry,type){
    //returns true if a type of tubular is found in the Array pipesArry 
    //where type is the string 'tube', 'line', or 'combo'
    //'tube' => ['casing','pipe','tube']
    //'line' => ['wireline', 'slickline', 'e-line']
    //'combo => ['combo']
    var typelist = null;
    switch(type){
      case 'tube':
      	typelist = ['casing','pipe','tube'];
      	break;
      case 'line':
      	typelist = ['wireline', 'slickline', 'e-line'];
      	break;
      case 'combo':
      	typelist = ['combo'];
      	break;
      default:
      	break;
    }
    var exists = false;
  	for(var index in typelist){
      for(var pipeIndex in pipeArry){
          var typeIndex = Object.values(pipeArry[pipeIndex]).indexOf(typelist[index]);
          if(typeIndex >= 0){exists = true;}
      }
    }
    return exists;
}

const PipesTable = props => {
    var returnTable = null;    
    switch(props.type){
        case 'tube':
            if(tubularsHasType(props.pipes,'tube')){
                returnTable = (
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Eval Str</th>
                      <th>OD</th>
                      <th>Size</th>
                    </tr>
                  </thead>
                  <PipeRows sort="tube" pipes={props.pipes}/>
                </Table>);
            }
            break;
        case 'line':
            if(tubularsHasType(props.pipes,'line')){
            returnTable = (
            <Table striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Breaking Strength</th>
                  <th>OD</th>
                </tr>
              </thead>
              <PipeRows sort="line" pipes={props.pipes}/>
            </Table>);
            }
            break;
        case 'combo':
            if(tubularsHasType(props.pipes,'combo')){
            returnTable = (
            <Table striped hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                </tr>
              </thead>
              <PipeRows sort="combo" pipes={props.pipes}/>
            </Table>);
            }
            break;
        default:
            break;
    }
    return returnTable;
        
};

export default PipesTable;