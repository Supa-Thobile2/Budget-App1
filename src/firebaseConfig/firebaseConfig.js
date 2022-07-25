// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);