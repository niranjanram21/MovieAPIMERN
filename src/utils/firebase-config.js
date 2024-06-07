// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJxQr4M-elmkH1YbXCDg46ObAnko4SAlI",
  authDomain: "movie-mern-80324.firebaseapp.com",
  projectId: "movie-mern-80324",
  storageBucket: "movie-mern-80324.appspot.com",
  messagingSenderId: "393319118863",
  appId: "1:393319118863:web:23b2585a6e7ed1754ccb7a",
  measurementId: "G-T6R9QWB61L",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
