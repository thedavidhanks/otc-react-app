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
    var returnTable=null, header=null, pipeRows = null, title=null;
    switch(props.type){
        case 'tube':
            if(tubularsHasType(props.pipes,'tube')){
                title = "Tubulars";
                header = (
                    <thead>
                        <tr  className="d-flex">
                          <th className="col-1">#</th>
                          <th className="col-4">Eval Str</th>
                          <th className="col-3">OD</th>
                          <th className="col-3">Size</th>
                          <th className="col-1"></th>
                        </tr>
                      </thead>);
                pipeRows = <PipeRows sort="tube" pipes={props.pipes} delShearable={props.delShearable}/>;
            }
            break;
        case 'line':
            if(tubularsHasType(props.pipes,'line')){
                title = "Lines";
                header = (
                    <thead>
                        <tr className="d-flex">
                          <th className="col-1">#</th>
                          <th className="col-8">Breaking Strength</th>
                          <th className="col-2">OD</th>
                          <th className="col-1"></th>
                        </tr>
                      </thead>);
                pipeRows = <PipeRows sort="line" pipes={props.pipes} delShearable={props.delShearable}/>;
            }
            break;
        case 'combo':
            if(tubularsHasType(props.pipes,'combo')){
                title="Combinations";
                header = (
                    <thead>
                      <tr className="d-flex">
                        <th className="col-1">#</th>
                        <th className="col-10">Description</th>
                        <th className="col-1"></th>
                      </tr>
                    </thead>);
                pipeRows = <PipeRows sort="combo" pipes={props.pipes} delShearable={props.delShearable}/>;
            }
            break;
        default:
            break;
    }
    if(header){
        returnTable = (
        <div>
<h4>{title}</h4>
        <Table striped hover size="sm">
              {header}
              {pipeRows}
        </Table>
        </div>
        );
    }
    return returnTable;
};

export default PipesTable;