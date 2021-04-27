import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBs0_uO7uAuob9bY22aGO8dICDi3zLp6cY",
    authDomain: "slack-clone-challenge-77fff.firebaseapp.com",
    projectId: "slack-clone-challenge-77fff",
    storageBucket: "slack-clone-challenge-77fff.appspot.com",
    messagingSenderId: "729854897297",
    appId: "1:729854897297:web:5cfbdbd24daa0fd799e330"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;