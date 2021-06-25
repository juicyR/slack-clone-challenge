import firebase from "firebase";
//this function is too access the firebase api, which will help in accessing the database in firebase
//It has it's own specific id, so that it can only be accessed by the person who has that id, like below
const firebaseConfig = {
  apiKey: "AIzaSyBs0_uO7uAuob9bY22aGO8dICDi3zLp6cY",
  authDomain: "slack-clone-challenge-77fff.firebaseapp.com",
  projectId: "slack-clone-challenge-77fff",
  storageBucket: "slack-clone-challenge-77fff.appspot.com",
  messagingSenderId: "729854897297",
  appId: "1:729854897297:web:5cfbdbd24daa0fd799e330"
};

  //this is to initialize the app, so it can be used in other files
const firebaseApp = firebase.initializeApp(firebaseConfig);
//this function is made so other files can access firestore
const db = firebaseApp.firestore();
//this is to let all files in the slack-clone challenge project to be able to access firebase

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;