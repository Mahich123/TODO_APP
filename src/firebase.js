import firebase from "firebase/compat/app"
import { getFirestore } from "firebase/firestore"


const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDUIxkWyB_8fyD06gK7aA0v0oLidPCYOzo",
        authDomain: "todo-app-e52d0.firebaseapp.com",
        projectId: "todo-app-e52d0",
        storageBucket: "todo-app-e52d0.appspot.com",
        messagingSenderId: "261254982126",
        appId: "1:261254982126:web:7fe81df75b0ce3be4d86ff",
        measurementId: "G-K0Q4RELZ2H"
});

const db = getFirestore(firebaseApp)

export default db;