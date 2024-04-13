// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABCg5MAf64vMJx6GvGvf39PRxDwgNsk3c",
  authDomain: "omar-stores.firebaseapp.com",
  projectId: "omar-stores",
  storageBucket: "omar-stores.appspot.com",
  messagingSenderId: "722633384658",
  appId: "1:722633384658:web:1449626cae65079fd6c30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };