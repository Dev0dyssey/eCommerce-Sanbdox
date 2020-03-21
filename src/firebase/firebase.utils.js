import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyARtzKgxoRwYE7q8MRXRw_sY_Rfrn9hhRg",
  authDomain: "crwn-db-dd31b.firebaseapp.com",
  databaseURL: "https://crwn-db-dd31b.firebaseio.com",
  projectId: "crwn-db-dd31b",
  storageBucket: "crwn-db-dd31b.appspot.com",
  messagingSenderId: "977057175717",
  appId: "1:977057175717:web:db5392282919773fb3554c",
  measurementId: "G-YQQF754FQN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
