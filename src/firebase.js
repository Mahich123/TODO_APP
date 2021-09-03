import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC0G8xgwHshYqABKTjw3T4GtL6ijUC3O_Q",
        authDomain: "todo-app-22d54.firebaseapp.com",
        projectId: "todo-app-22d54",
        storageBucket: "todo-app-22d54.appspot.com",
        messagingSenderId: "1087095308779",
        appId: "1:1087095308779:web:0cc12f3289b88e1df1d9ae",
        measurementId: "G-059PLDQ4ZG"
      
})
const db = firebaseApp.firestore();

export{db};