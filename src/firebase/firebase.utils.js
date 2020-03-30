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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get user reference object (userAuth) and using the .get() method we can determine if data already exists
  // I.e.: Whether or not we already stored the authenticated user object {}
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //  Check if data exists
  // If the data does not exist, create new data using the userAuth{} object properties
  //  I.e.: displayName and email
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
