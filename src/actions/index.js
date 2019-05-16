//Action Creator
export const addPipe = (formEvent) =>{
    //Action creator should do the following.
    //Check the form
    //add the pipe to the pipelist store
    //reset the form, but add an additional combobox for the new item
    return{
        type: 'ADD_PIPE_TO_LIST',
        payload: formEvent
    };
};

export const deletePipe = (pipe) =>{
    //Return an action
    return{
        type: 'DELETE_PIPE_FROM_LIST',
        payload: pipe
    };
};

export const updateShearableType = (type) => {
    return({
        type: 'UPDATE_SHEARABLE_TYPE',
        payload: type
    });
};

export const tubeTypeChange = (event) => {
    return({
        type: 'TUBE_TYPE_CHANGE',
        payload: event
    });
};

export const strengthChange = (event) => {
    return({
        type: 'STRENGTH_CHANGE',
        payload: event
    });
};

export const weightChange = (event) => {
    return({
        type: 'WEIGHT_CHANGE',
        payload: event
    });
};

export const strValueChange = (value) => {
    return({
        type: 'STRENGTH_VALUE_CHANGE',
        payload: value
    })
}
export const odValueChange = (value) => {
    return({
        type: 'OD_VALUE_CHANGE',
        payload: value
    })
}
export const elongValueChange = (value) => {
    return({
        type: 'ELONG_VALUE_CHANGE',
        payload: value
    })
}
export const weightValueChange = (value) => {
    return({
        type: 'WEIGHT_VALUE_CHANGE',
        payload: value
    })
}
export const handleComboChange = (event) =>{
    return({
        type: 'COMBO_CHANGE',
        payload: event
    })
}