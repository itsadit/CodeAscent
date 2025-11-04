import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN0-cDmnwTjlXTq6sWhfj1Z6AwEJUgoxg",
  authDomain: "codeascent-b7786.firebaseapp.com",
  projectId: "codeascent-b7786",
  storageBucket: "codeascent-b7786.firebasestorage.app",
  messagingSenderId: "868736144867",
  appId: "1:868736144867:web:4cb25e33e4bc8824a53cd6",
  measurementId: "G-7962QS3FNZ",
};

// Initialize Firebase

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
