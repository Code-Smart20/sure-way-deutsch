// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt99aJx-yo4L4Gh63W2942Qf_kVq7twMQ",
  authDomain: "sure-way-deutsch.firebaseapp.com",
  projectId: "sure-way-deutsch",
  storageBucket: "sure-way-deutsch.firebasestorage.app",
  messagingSenderId: "983199595757",
  appId: "1:983199595757:web:6c4367b42b7930bfa560e4"
};

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);







