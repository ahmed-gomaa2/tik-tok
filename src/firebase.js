import firebase from "firebase";
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlUpjG-5_nYWZiSUUzudlYfHwtzN_aAr4",
    authDomain: "tik-tok-clone-1b177.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-1b177.firebaseio.com",
    projectId: "tik-tok-clone-1b177",
    storageBucket: "tik-tok-clone-1b177.appspot.com",
    messagingSenderId: "866901517685",
    appId: "1:866901517685:web:14419fa52b3f16d2825f3c",
    measurementId: "G-XZNM6GFC34"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase;