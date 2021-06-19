// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCZvSsGH_tzmna2r_v41m0vWAxd986NYsg",
    authDomain: "discord-clone-918ec.firebaseapp.com",
    projectId: "discord-clone-918ec",
    storageBucket: "discord-clone-918ec.appspot.com",
    messagingSenderId: "202404228371",
    appId: "1:202404228371:web:cef34e6ab723abcfe33ee6",
    measurementId: "G-WF7G4H4JGT"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;