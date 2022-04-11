//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBDwvd6ogzsepeu0pOg-kJUq9QnqW2fDvQ",
  authDomain: "it-ms-development.firebaseapp.com",
  databaseURL: "https://it-ms-development-default-rtdb.firebaseio.com",
  projectId: "it-ms-development",
  storageBucket: "it-ms-development.appspot.com",
  messagingSenderId: "293774590464",
  appId: "1:293774590464:web:f87a72a6b8d4529b5b0ee5"
});

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export default firebaseConfig;