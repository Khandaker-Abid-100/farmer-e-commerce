// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPB6WzndTu0x1fmuZLJv8PYSwl_Hkcmug",
  authDomain: "farmer-shop-app.firebaseapp.com",
  projectId: "farmer-shop-app",
  storageBucket: "farmer-shop-app.firebasestorage.app",
  messagingSenderId: "905413097213",
  appId: "1:905413097213:web:eda4c061de15f2f3fbf094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }