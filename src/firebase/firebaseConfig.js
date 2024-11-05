// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-BkkyPbiMCdXyWpqP0-BQgQKxDZ2YDLY",
  authDomain: "profile-5c3bc.firebaseapp.com",
  projectId: "profile-5c3bc",
  storageBucket: "profile-5c3bc.firebasestorage.app",
  messagingSenderId: "871538763764",
  appId: "1:871538763764:web:7ad24887617c77f65dbba1",
  measurementId: "G-62GSBWSB47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };