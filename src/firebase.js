// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // ✅ Import Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDoiQVT8XBT9KAOcVJoSV6d7YKUddt9Ts",
  authDomain: "digihealcontactform.firebaseapp.com",
  databaseURL: "https://digihealcontactform-default-rtdb.firebaseio.com",
  projectId: "digihealcontactform",
  storageBucket: "digihealcontactform.firebasestorage.app",
  messagingSenderId: "1025190162390",
  appId: "1:1025190162390:web:6c28cdaec199c97a13be77",
  measurementId: "G-CXG2XBLX1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore & Realtime Database
export const db = getFirestore(app);     // Firestore
export const rtdb = getDatabase(app);    // Realtime Database
