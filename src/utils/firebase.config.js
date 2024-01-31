import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ2_3bY7g9CiJwyZ630WRiOiv1AYE3bl4",
  authDomain: "video-streaming-app-95a82.firebaseapp.com",
  projectId: "video-streaming-app-95a82",
  storageBucket: "video-streaming-app-95a82.appspot.com",
  messagingSenderId: "117846992017",
  appId: "1:117846992017:web:1b206a947d0b64ef828b30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();