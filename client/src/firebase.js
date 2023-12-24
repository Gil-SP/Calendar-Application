// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "calendar-application-ca0b1.firebaseapp.com",
  projectId: "calendar-application-ca0b1",
  storageBucket: "calendar-application-ca0b1.appspot.com",
  messagingSenderId: "332005902708",
  appId: "1:332005902708:web:fab1cabc7926528a070421",
  measurementId: "G-Z9V0DB03GW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
