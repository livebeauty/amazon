import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // If using authentication

const firebaseConfig = {
  apiKey: "AIzaSyApazBynL1UGbSen9kXIuM3apBhzzESi3c",
  authDomain: "clone-bcf4b.firebaseapp.com",
  projectId: "clone-bcf4b",
  storageBucket: "clone-bcf4b.firebasestorage.app",
  messagingSenderId: "104134673159",
  appId: "1:104134673159:web:b986c2a4af314dd7343ba2",
};

// ✅ Prevent multiple initializations
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
