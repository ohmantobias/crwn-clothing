import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyARcHuJj5c8aPsuhHQ68GDUE3mwFrkZgI0",
  authDomain: "crwn-db-fc5bc.firebaseapp.com",
  projectId: "crwn-db-fc5bc",
  storageBucket: "crwn-db-fc5bc.appspot.com",
  messagingSenderId: "354676121390",
  appId: "1:354676121390:web:abd120af3543fa01cda4bf",
  measurementId: "G-ZXH9TXFWM9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
