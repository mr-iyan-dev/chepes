// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJWb_NG_LPzH7gl38PQuzfA9RvbxIKipc",
  authDomain: "website-a6226.firebaseapp.com",
  projectId: "website-a6226",
  storageBucket: "website-a6226.firebasestorage.app",
  messagingSenderId: "361754479485",
  appId: "1:361754479485:web:c2c5fe6bda9587977ada14",
  measurementId: "G-1HJBBDVZZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { db , storage};