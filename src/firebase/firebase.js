// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKzKr4EiPGjuhdfIWY3bD2cnWVhu5iNPE",
  authDomain: "polleria-gonzales.firebaseapp.com",
  projectId: "polleria-gonzales",
  storageBucket: "polleria-gonzales.appspot.com",
  messagingSenderId: "158176566707",
  appId: "1:158176566707:web:ef360868e9ee89a1287fc6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)