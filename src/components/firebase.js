// Code for firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBWhlKlk8AOVN_YByIzKoDNjbDxVoej0Ls",
    authDomain: "lostcityquest.firebaseapp.com",
    projectId: "lostcityquest",
    storageBucket: "lostcityquest.appspot.com",
    messagingSenderId: "291109613067",
    appId: "1:291109613067:web:9e798e7aadbdbd8ab9610e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;