import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDwvd6ogzsepeu0pOg-kJUq9QnqW2fDvQ",
  authDomain: "it-ms-development.firebaseapp.com",
  projectId: "it-ms-development",
  storageBucket: "it-ms-development.appspot.com",
  messagingSenderId: "293774590464",
  appId: "1:293774590464:web:f87a72a6b8d4529b5b0ee5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();