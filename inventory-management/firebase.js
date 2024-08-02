// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApp-q-3EM7MsInonrkFdjJ4ahiMbhn_d8",
  authDomain: "inventory-management-d15dd.firebaseapp.com",
  projectId: "inventory-management-d15dd",
  storageBucket: "inventory-management-d15dd.appspot.com",
  messagingSenderId: "1073666382142",
  appId: "1:1073666382142:web:7cd0e80ddbbdc47cb9b46f",
  measurementId: "G-2N3CXXPZBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export{firestore}