// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaz3AIL3tf916fFqM8bCK5M_k0hYDuMpo",
  authDomain: "auth-test-1-f358a.firebaseapp.com",
  projectId: "auth-test-1-f358a",
  storageBucket: "auth-test-1-f358a.appspot.com",
  messagingSenderId: "322690302639",
  appId: "1:322690302639:web:47ed08558339dba93b8a5a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export default firebase