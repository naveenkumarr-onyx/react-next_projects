// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKELhs7lMs_ndC65Hg2s1V4EWvmFZzYQM",
  authDomain: "nextjs-firebase-cac4e.firebaseapp.com",
  projectId: "nextjs-firebase-cac4e",
  storageBucket: "nextjs-firebase-cac4e.appspot.com",
  messagingSenderId: "85442387893",
  appId: "1:85442387893:web:befc28a79adb75f83983fc",
  measurementId: "G-XTYNW52WTD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
