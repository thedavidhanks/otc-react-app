import { provider } from '../firebase.js'


export const signIn = () => {
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                token: result.credential.accessToken,
                user: result.user});    
        }).catch((err)=> {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    };
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=> {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        });
    };
};