// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQP-BEGy81SItZRiaw4HSfRsBhjxaIh5k",
  authDomain: "shop-project-7a1d5.firebaseapp.com",
  projectId: "shop-project-7a1d5",
  storageBucket: "shop-project-7a1d5.firebasestorage.app",
  messagingSenderId: "531761367907",
  appId: "1:531761367907:web:dda5604d9e896c1439a156",
  measurementId: "G-CMVVYN677N",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
