// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvHSiHq2aw5eUXq9ewpT2Jpi4U7iKAhfw",
  authDomain: "ema-john-with-firebase-a-b6cdb.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-b6cdb",
  storageBucket: "ema-john-with-firebase-a-b6cdb.appspot.com",
  messagingSenderId: "971029753854",
  appId: "1:971029753854:web:bd50f16b3b087612951aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;