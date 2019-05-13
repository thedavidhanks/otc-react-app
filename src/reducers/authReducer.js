const initState = {
    authError: null, 
    user: null,
    token: null
};

const authReducer = ( state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return{
                ...state,
                authError: 'Login failed',
                user: null,
                token: null
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return{
                ...state,
                user: action.user,
                token: action.token,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('reducer said: signout success');
            return{
                ...state,
                user: null,
                token: null,
                authError: null
            } 
        default:
            return state;
    }
}

export default authReducer