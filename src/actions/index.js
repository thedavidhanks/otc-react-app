//Action Creator
export const addPipe = pipe =>{
    //Return an action
    return{
        type: 'ADD_PIPE_TO_LIST',
        payload: pipe
    };
};

