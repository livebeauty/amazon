// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // If using authentication

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyApazBynL1UGbSen9kXIuM3apBhzzESi3c",
  authDomain: "clone-bcf4b.firebaseapp.com",
  projectId: "clone-bcf4b",
  storageBucket: "clone-bcf4b.appspot.com",
  messagingSenderId: "104134673159",
  appId: "1:104134673159:web:b986c2a4af314dd7343ba2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Authentication instance (if needed)

export { db, auth };
