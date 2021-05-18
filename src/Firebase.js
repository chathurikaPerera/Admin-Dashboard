import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu1q5HtrPHqbKntvi3OlE5_pLehFvzBX8",
  authDomain: "careme-3ddda.firebaseapp.com",
  projectId: "careme-3ddda",
  storageBucket: "careme-3ddda.appspot.com",
  messagingSenderId: "392313008868",
  appId: "1:392313008868:web:8b5cbe42108a2d695132f1",
  measurementId: "G-5CR673CJLJ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;