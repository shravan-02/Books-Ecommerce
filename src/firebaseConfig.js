// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrPRWAxjDbniRn4GqBAQ3G4e-xic0XXOE",
  authDomain: "bookstore-11b24.firebaseapp.com",
  databaseURL: "https://bookstore-11b24-default-rtdb.firebaseio.com",
  projectId: "bookstore-11b24",
  storageBucket: "bookstore-11b24.appspot.com",
  messagingSenderId: "304550264468",
  appId: "1:304550264468:web:06e48201cab8c8b4a07e81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}