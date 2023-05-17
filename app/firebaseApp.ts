// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzn2HXT49BTDeCvsM6pYbnXm3c-DqP6Js",
  authDomain: "booking-feca1.firebaseapp.com",
  projectId: "booking-feca1",
  storageBucket: "booking-feca1.appspot.com",
  messagingSenderId: "63680787682",
  appId: "1:63680787682:web:0975b7f8b504335c76dabb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const initFirebase = () =>{
    return app
}