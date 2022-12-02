import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3PnTQVtOKsw0Iq84PF0fMyM2beEOLLmM",
    authDomain: "netflix-clone-f0705.firebaseapp.com",
    projectId: "netflix-clone-f0705",
    storageBucket: "netflix-clone-f0705.appspot.com",
    messagingSenderId: "627388237253",
    appId: "1:627388237253:web:ae618396ea3f147347b7ac"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;