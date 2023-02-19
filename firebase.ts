// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA13U9jJWqvPZZ3uxWxrFZHP3t9-mjgBD4",
  authDomain: "mygpt-fc3d6.firebaseapp.com",
  projectId: "mygpt-fc3d6",
  storageBucket: "mygpt-fc3d6.appspot.com",
  messagingSenderId: "1059122321242",
  appId: "1:1059122321242:web:cf9fd264b03ea6c62d8563",
  measurementId: "G-GS6ZTVKJ6K"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
