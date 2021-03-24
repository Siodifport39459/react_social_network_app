import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD1rg0ZZnFa2Fb0-jw_Eu6kaCPLRG0Avlc",
    authDomain: "react-socialntwrk.firebaseapp.com",
    projectId: "react-socialntwrk",
    storageBucket: "react-socialntwrk.appspot.com",
    messagingSenderId: "1028314972109",
    appId: "1:1028314972109:web:a7272a73377fd8d257ce84",
    measurementId: "G-57CBTJ98BY"

  };


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;

};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
