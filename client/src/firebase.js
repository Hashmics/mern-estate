// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e216c.firebaseapp.com",
  projectId: "mern-estate-e216c",
  storageBucket: "mern-estate-e216c.appspot.com",
  messagingSenderId: "635064685476",
  appId: "1:635064685476:web:b2c7253c682e7d579f6731"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);