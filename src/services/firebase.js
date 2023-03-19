import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQpUsmB4x_rE3Pjm2CboS8nZJeOg7G9HM",
  authDomain: "porfume-51f28.firebaseapp.com",
  projectId: "porfume-51f28",
  storageBucket: "porfume-51f28.appspot.com",
  messagingSenderId: "172510847040",
  appId: "1:172510847040:web:49ef8cfcd819ffec43ffa5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
