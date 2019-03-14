import { combineReducers } from 'redux';
import _ from 'lodash';

import SamplePipes from '../test/SamplePipes.js';  //loaded to test pipes

const defaultFormState = {
        bsDisabled: true,        
        comboBoxes: {1: false, 2: false, 3: false, 4: false, 5: false},
        comboFieldHidden: true,
        strUnits: 'ksi',
        strength: '',
        strengthType: 'yield',
        weight: '',
        weightType: 'wall',
        weightUnits: 'in',
        tubeType: 'pipe',
        elongation: '',
        newOD: '',
        strengthFieldHidden: false,
        odFieldHidden: false,
        elongationFieldHidden: false,
        weightWallFieldHidden: false,
        ysDisabled: false,
        gradeDisabled: false,
    };
    
function parentTubeType(childTube){
    var parentTube;
    switch(childTube){
        case 'pipe':
        case 'tube':
        case 'casing':
            parentTube = 'tube';
            break;
        case 'wireline':
        case 'eline':
        case 'slickline':
            parentTube = 'line';
            break;
        case 'combo':
            parentTube = 'combo';
            break;
        default:
            parentTube = null;
            break;
    }
    return parentTube;
};

const pipesReducer = (pipelist = SamplePipes, action) => {
    if(action.type === 'ADD_PIPE_TO_LIST'){
        //action.payload has form state.
        
        //UPDATE - Do some error checking
        
        //create a new pipe object
        var addNewPipe = {};
        var highPipeId = 0;

        //determine the highest existing pipe ID
        pipelist.forEach( (pipe) =>{
            highPipeId = pipe.id > highPipeId ? pipe.id : highPipeId;
        });
        var newId = highPipeId+1;
        switch(action.payload.tubeType){
            case 'pipe':
            case 'tube':
            case 'casing':
                addNewPipe = {
                id: newId,
                type: action.payload.tubeType,
                OD: action.payload.newOD,
                elongation: action.payload.elongation,
                strType: 'yield',
                strength: action.payload.strength
                };
                break;
            case 'wireline':
            case 'eline':
            case 'slickline':
                addNewPipe = {
                id: newId,
                type: action.payload.tubeType,
                strength: action.payload.strength,
                OD: action.payload.newOD
                };
                break;
            case 'combo':
                //Get an array of the checkboxes selected.
                let comboArray = [];
                _.forEach(action.payload.comboBoxes, (value,key) => {
                    if(value){comboArray.push(key);}
                });

                //created the combo object
                addNewPipe = {
                id: newId,
                type: action.payload.tubeType,
                combine: comboArray.sort()
                };
                break;
            default:
                break;
        }
        return [  ...pipelist, addNewPipe];
        
//        this.setState({
//            ...this.defaultFormState
//        });
//
//        //create an empty checkbox
//        //get existing state and modify it
//        var updatedComboBoxes = {...action.payload.comboBoxes};
//        updatedComboBoxes[addNewPipe.id] = false;
//        //sets all checkboxes to false;
//        _.forEach(updatedComboBoxes, (value,key) => {updatedComboBoxes[key] = false;});
//        this.setState( {comboBoxes: updatedComboBoxes });        
        
        
    }
    else if(action.type === 'DELETE_PIPE_FROM_LIST'){
        //Given a pipe object remove it from the pipe array state object.
        var pipesArray = pipelist.slice();  //create a copy of the existing state.
        var index = pipesArray.indexOf(action.payload);
        
        pipesArray.splice(index,1);  //change the copy.
        return pipesArray;
    }
    //if no action, return the list

    return pipelist;  
};

const pipeFormReducer = (form = defaultFormState, action) => {
    //responsible for changing the state of the add pipe form
    let updatedForm = Object.assign({},form);  //"updatedForm" is created so as not to not modify "form".  
    
    switch(action.type){
        case 'ADD_PIPE_TO_LIST':
            //reset the form
            
            
            break;
        case 'TUBE_TYPE_CHANGE':
            //console.log(action.payload.target.value);
            var tubeType = action.payload.target.value;
            var parTubeType = parentTubeType(action.payload.target.value);
            var formChanges = {};
            
            switch(parTubeType){
                case 'line':
                    //if it's a line, select breaking strength type, disable other strenghts, hide elongatioin, hide weight/wall, hide combo selection
                    formChanges = {
                       tubeType: tubeType,
                       strengthFieldHidden: false,
                       odFieldHidden: false,
                       elongationFieldHidden: true,
                       weightWallFieldHidden: true,
                       comboFieldHidden: true,
                       strengthType: 'breaking',
                       strUnits: 'kips',
                       ysDisabled: true,
                       gradeDisabled: true,
                       bsDisabled: false
                    };
                    break;
                case 'tube':
                    //if it's a tube, disable breaking strength, select yield strength, show elongatioin, show weight/wall, hide combo selection
                    formChanges = {
                       tubeType: tubeType,
                       strengthFieldHidden: false,
                       odFieldHidden: false,
                       elongationFieldHidden: false,
                       weightWallFieldHidden: false,
                       comboFieldHidden: true,
                       strengthType: 'yield',
                       strUnits: 'ksi',
                       ysDisabled: false,
                       gradeDisabled: false,
                       bsDisabled: true,
                       weightType: 'wall',
                       weightUnits: 'in'
                    };
                    break;
                case 'combo':
                    //if it's a combo, hide strengths, hide elongation, hide weight/wall, show combo selection
                    formChanges = {
                       tubeType: tubeType,
                       strengthFieldHidden: true,
                       odFieldHidden: true,
                       elongationFieldHidden: true,
                       weightWallFieldHidden: true,
                       comboFieldHidden: false
                    };
                    break;
                default:
                    break;
            }
            break;
        case 'STRENGTH_CHANGE':
            var strUnits;
            switch(action.payload.target.value){
                case 'grade':
                    strUnits = '';
                    break;
                case 'breaking':
                    strUnits = 'kips';
                    break;
                default:
                case 'yield':
                    strUnits = 'ksi';
                    break;
            }
            formChanges = { strengthType: action.payload.target.value, strUnits: strUnits };
            break;
        case 'WEIGHT_CHANGE':
            var weightType = action.payload.target.value;
            var weightUnits;
            switch(weightType){
                case 'weight':
                    weightUnits = 'ppf';
                    break;
                default:
                case 'wall':
                    weightUnits = 'in';
                    break;
            }
            formChanges = {weightType, weightUnits};
            break;
        case 'STRENGTH_VALUE_CHANGE':
            formChanges = {strength: action.payload};
            break;
        case 'OD_VALUE_CHANGE':
            formChanges = {newOD: action.payload};
            break;
        case 'ELONG_VALUE_CHANGE':
            formChanges = {elongation: action.payload};
            break;
        case 'WEIGHT_VALUE_CHANGE':
            formChanges = {weight: action.payload};
            break;
        case 'COMBO_CHANGE':
            const combo = action.payload.target;
            
            //get existing state and modify it
            var updatedComboBoxes = {...form.comboBoxes};
            
            updatedComboBoxes[combo.name] = combo.checked;
            console.log(updatedComboBoxes);
            formChanges = {comboBoxes: updatedComboBoxes };
            break;
        default:
            break;
    }
    //console.log(form);
   // console.log(formChanges);
    updatedForm = Object.assign({},form,formChanges);
    return updatedForm;
};

export default combineReducers({
    pipes: pipesReducer,
    pipeForm: pipeFormReducer
})