import firebase from 'firebase'
const config = {
    apiKey: "***REMOVED***",
    authDomain: "otc-react-app.firebaseapp.com",
    databaseURL: "https://otc-react-app.firebaseapp.com",
    projectId: "otc-react-app",
    storageBucket: "otc-react-app.firebaseapp.com",
    messagingSenderId: "144750278413"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;


