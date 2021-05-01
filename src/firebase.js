import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJHEfdFfAyiZTqkTaQQOHndZ2k4YB3-zA",
    authDomain: "linkedin-clone-9c68a.firebaseapp.com",
    projectId: "linkedin-clone-9c68a",
    storageBucket: "linkedin-clone-9c68a.appspot.com",
    messagingSenderId: "181364757712",
    appId: "1:181364757712:web:677dcaf4c296c5a160bad5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };