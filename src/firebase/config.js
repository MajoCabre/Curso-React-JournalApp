// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWwb824VBFht8dZEQLLmPr7WY6LNlrSyI",
  authDomain: "react-curso-a7565.firebaseapp.com",
  projectId: "react-curso-a7565",
  storageBucket: "react-curso-a7565.appspot.com",
  messagingSenderId: "355205057693",
  appId: "1:355205057693:web:9b4f1a09c0c1027c501874"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
