// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3a723.firebaseapp.com",
  projectId: "mern-estate-3a723",
  storageBucket: "mern-estate-3a723.firebasestorage.app",
  messagingSenderId: "757420620751",
  appId: "1:757420620751:web:b38792c7eabf1c428b70ba",
  measurementId: "G-0JDETYWTY6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);