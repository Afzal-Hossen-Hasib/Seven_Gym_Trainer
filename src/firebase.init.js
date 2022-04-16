// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJwefTvtWE-XNv6IC77Xa031P5KlIQaFc",
  authDomain: "gym-trainer-871db.firebaseapp.com",
  projectId: "gym-trainer-871db",
  storageBucket: "gym-trainer-871db.appspot.com",
  messagingSenderId: "1021751934752",
  appId: "1:1021751934752:web:5a55549eed38f616aae145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);

export default auth;