import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBtr3WiBajgBi2mOfMNet6QQPuhFWtG72s",
  authDomain: "it-ms-3cf2e.firebaseapp.com",
  projectId: "it-ms-3cf2e",
  storageBucket: "it-ms-3cf2e.appspot.com",
  messagingSenderId: "43658455119",
  appId: "1:43658455119:web:49f47423cd5f29b3fc223a",
  measurementId: "G-K5FL1Z2FMD"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)