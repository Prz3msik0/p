// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyDS2qrnSFYcKodYtdGdTLEDHiwmX9brwfk",
  authDomain: "baza-dinner.firebaseapp.com",
  projectId: "baza-dinner",
  storageBucket: "baza-dinner.appspot.com",
  messagingSenderId: "735360500098",
  appId: "1:735360500098:web:e430a95c925158766d8f9b",
  measurementId: "G-FZ7CE5BD3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
