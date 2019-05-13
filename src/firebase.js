import firebase from 'firebase/app'
import 'firebase/auth'

const apikey = process.env.REACT_APP_FIREBASE_API;
const config = {
    apiKey: apikey,
    authDomain: "otc-react-app.firebaseapp.com",
    databaseURL: "https://otc-react-app.firebaseio.com",
    projectId: "otc-react-app",
    storageBucket: "otc-react-app.appspot.com",
    messagingSenderId: "911289607073"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;


