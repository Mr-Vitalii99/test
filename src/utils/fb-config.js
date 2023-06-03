import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCtA5n7O7XVdWInSTAMPgt14ubmsCU2mlw",
    authDomain: "restaurantvitto.firebaseapp.com",
    databaseURL: "https://restaurantvitto-default-rtdb.firebaseio.com",
    projectId: "restaurantvitto",
    storageBucket: "restaurantvitto.appspot.com",
    messagingSenderId: "968190511979",
    appId: "1:968190511979:web:0c5a58835d13d32ae19a2e"
};

firebase.initializeApp(firebaseConfig);

export default firebase;