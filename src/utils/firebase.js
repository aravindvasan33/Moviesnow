// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPb8p_-IYjL5NhIX6YzBWn7zzUR1ev-IM",
  authDomain: "movie-gpt-5fcc9.firebaseapp.com",
  projectId: "movie-gpt-5fcc9",
  storageBucket: "movie-gpt-5fcc9.appspot.com",
  messagingSenderId: "338574325588",
  appId: "1:338574325588:web:f2fc7e2c41218f36aefac1",
  measurementId: "G-C54QY0X3ST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);