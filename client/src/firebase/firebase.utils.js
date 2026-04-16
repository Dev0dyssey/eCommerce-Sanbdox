import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyARtzKgxoRwYE7q8MRXRw_sY_Rfrn9hhRg",
  authDomain: "crwn-db-dd31b.firebaseapp.com",
  databaseURL: "https://crwn-db-dd31b.firebaseio.com",
  projectId: "crwn-db-dd31b",
  storageBucket: "crwn-db-dd31b.appspot.com",
  messagingSenderId: "977057175717",
  appId: "1:977057175717:web:db5392282919773fb3554c",
  measurementId: "G-YQQF754FQN",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((element) => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, element);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

let authInstance;
let googleProviderInstance;

const getAuthInstance = () => {
  if (!authInstance) {
    authInstance = firebase.auth();
  }
  return authInstance;
};

const getGoogleProvider = () => {
  if (!googleProviderInstance) {
    googleProviderInstance = new firebase.auth.GoogleAuthProvider();
    googleProviderInstance.setCustomParameters({ prompt: "select_account" });
  }
  return googleProviderInstance;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = getAuthInstance().onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = {
  onAuthStateChanged: (...args) => getAuthInstance().onAuthStateChanged(...args),
  signInWithPopup: (...args) => getAuthInstance().signInWithPopup(...args),
  signInWithEmailAndPassword: (...args) =>
    getAuthInstance().signInWithEmailAndPassword(...args),
  signOut: (...args) => getAuthInstance().signOut(...args),
  createUserWithEmailAndPassword: (...args) =>
    getAuthInstance().createUserWithEmailAndPassword(...args),
};
export const firestore = firebase.firestore();

export const signInWithGoogle = () =>
  getAuthInstance().signInWithPopup(getGoogleProvider());

export default firebase;
