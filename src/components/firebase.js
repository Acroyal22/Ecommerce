import "firebase/auth";
import "firebase/database";
import firebase from "firebase/app";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBfUHASSIhy3dWvmaTSFal1Aly1oEZKpR0",
  authDomain: "ecommerce-ec6f0.firebaseapp.com",
  projectId: "ecommerce-ec6f0",
  storageBucket: "ecommerce-ec6f0.appspot.com",
  messagingSenderId: "169041136604",
  appId: "1:169041136604:web:b5807d0c4ea01004221d19",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { auth };
export { db };
export default firebase;
