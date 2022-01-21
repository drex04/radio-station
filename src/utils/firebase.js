import firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ePgwpICCIIx5Y_a-3lxG2e8VEOpdVYE",
  authDomain: "radio-tnp-dev.firebaseapp.com",
  projectId: "radio-tnp-dev",
  storageBucket: "radio-tnp-dev.appspot.com",
  messagingSenderId: "993205008230",
  appId: "1:993205008230:web:f6a6977c1f47dc2b7d3aa7",
  measurementId: "G-WBRHL02RRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);