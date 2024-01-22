// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Ttod2wnrVSpNOnOHGTihJM0ZD3uogW8",
  authDomain: "dipo-react-23.firebaseapp.com",
  projectId: "dipo-react-23",
  storageBucket: "dipo-react-23.appspot.com",
  messagingSenderId: "540317522618",
  appId: "1:540317522618:web:15e780a051a11934a28083",
  measurementId: "G-MDC4N9D44K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);