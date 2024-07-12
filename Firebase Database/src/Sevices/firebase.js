// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =  {
  apiKey: "AIzaSyBmSY18K0KO_dFd8rRr-6Bk1wfed3vj5-Q",
  authDomain: "newfirestore-1baaa.firebaseapp.com",
  projectId: "newfirestore-1baaa",
  storageBucket: "newfirestore-1baaa.appspot.com",
  messagingSenderId: "735343295780",
  appId: "1:735343295780:web:679a280fc72d94c39c47b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db=getFirestore(app)
