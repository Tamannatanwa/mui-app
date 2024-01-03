// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYd2zkGAeytWOSQ5bcLytT2HgZ3-ctLdA",
  authDomain: "react-dashboard-4694a.firebaseapp.com",
  projectId: "react-dashboard-4694a",
  storageBucket: "react-dashboard-4694a.appspot.com",
  messagingSenderId: "965578272210",
  appId: "1:965578272210:web:5ac110a59670fa05252c0b",
  measurementId: "G-GLCXWW2MJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);