// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbN1uoiWcmrpi3z-fMjfE52XKDkmGqvDM",
  authDomain: "budget-app-239e5.firebaseapp.com",
  projectId: "budget-app-239e5",
  storageBucket: "budget-app-239e5.appspot.com",
  messagingSenderId: "128411773846",
  appId: "1:128411773846:web:206a001e7c0ee7facecbb7",
  measurementId: "G-ME16131EZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {auth};