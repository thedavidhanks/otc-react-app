const initState = {
    authError: null, 
    error: null
};

const authReducer = ( state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login error: '+action.err.message);
            return{
                ...state,
                authError: 'Login failed',
                error: action.err
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success!');
            return{
                ...state,
                authError: null,
                error: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout success.');
            return{
                ...state,
                authError: null,
                error: null
            } 
        default:
            return state;
    }
}

export default authReducer