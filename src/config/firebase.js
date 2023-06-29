// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDgHpnynEiFVDLx4Zs8gtyDshTmdPEpEmY",

  authDomain: "first-firebase-dcacf.firebaseapp.com",

  projectId: "first-firebase-dcacf",

  storageBucket: "first-firebase-dcacf.appspot.com",

  messagingSenderId: "822824362199",

  appId: "1:822824362199:web:2cbe93c30284b44d3ad092",

  measurementId: "G-BL68RTVX2Y"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();