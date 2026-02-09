// Firebase Configuration for Caribbean Digital Solutions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAaok-ajdYSPjGUup9eGyg_DIEuBg67phc",
    authDomain: "caribbean-digital-solutions.firebaseapp.com",
    projectId: "caribbean-digital-solutions",
    storageBucket: "caribbean-digital-solutions.firebasestorage.app",
    messagingSenderId: "496512594944",
    appId: "1:496512594944:web:ca69422d98bf7da62514e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
