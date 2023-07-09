// ------ Start: Copied From Firebase ------ //

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC0WyuKvyr2sJ2NFlaKG4hb8j_GJgtrzN4',
    authDomain: 'next-firebase-45841.firebaseapp.com',
    projectId: 'next-firebase-45841',
    storageBucket: 'next-firebase-45841.appspot.com',
    messagingSenderId: '1047953529548',
    appId: '1:1047953529548:web:d41a73412877f3f46c8069',
    measurementId: 'G-XX3MF4CCE9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ------ End: Copied From Firebase ------ //

// Analytics //
let analytics;
if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

// Firestore //
const db = getFirestore(app);
export { app, db };
