// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAS2C8TgDhNxtvi6xFVbW4Y7N-iXpkKWlE",
    authDomain: "hospital-management-6a641.firebaseapp.com",
    projectId: "hospital-management-6a641",
    storageBucket: "hospital-management-6a641.appspot.com", // corrected domain
    messagingSenderId: "489155992162",
    appId: "1:489155992162:web:11821e895f386edfbc0f3b",
    measurementId: "G-WW3Y9KFDB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);