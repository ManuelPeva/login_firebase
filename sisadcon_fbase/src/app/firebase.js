// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtdTWJM1x3_meCu6KPmSGTgy7od7_ufwk",
  authDomain: "sisadcon-cfa5e.firebaseapp.com",
  projectId: "sisadcon-cfa5e",
  storageBucket: "sisadcon-cfa5e.appspot.com",
  messagingSenderId: "110176537466",
  appId: "1:110176537466:web:0bee57e29a1765c45ea4c3",
  measurementId: "G-HGVBTKPGE2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

