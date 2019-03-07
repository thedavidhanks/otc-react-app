import { combineReducers } from 'redux';

const pipesReducer = () => {
    return [
        {
            id: 1,
            type: 'pipe',
            OD: 5,
            wall: 0.25,
            ppf: 19.5,
            strType: 'yield',
            strength: 130
        },{
            id: 2,
            type: 'casing',
            OD: 16,
            wall: 0.2,
            ppf: 25,
            strType: 'grade',
            strength: 85
        },{
            id: 3,
            type: 'wireline',
            OD: .75,
            strType: 'breaking',
            strength: 35
        },{
            id: 4,
            type: 'combo',
            combine: [1,3]
        }    
    ]; 
};

const addPipeReducer = (pipe = null, action) => {
    if(action.type === 'ADD_PIPE_TO_LIST'){
        //UPDATE - return the existing list with the new pipe added.
        return [...pipe, action.payload];
    }
    
    return pipe;
};

export default combineReducers({
    pipes: pipesReducer,
    addPipe: addPipeReducer
})