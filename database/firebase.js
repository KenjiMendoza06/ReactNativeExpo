
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCD3e9hHIRoJykrKTt_fmNE7MSyU91qQow",
  authDomain: "chatbot-b4381.firebaseapp.com",
  databaseURL: "https://chatbot-b4381-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatbot-b4381",
  storageBucket: "chatbot-b4381.appspot.com",
  messagingSenderId: "58148894095",
  appId: "1:58148894095:web:91977097d834de6175c7fa",
  measurementId: "G-LK5DNHK5GX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db, ref, onValue };