// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB5VnIpAJNsb91WU9LZam7u_AcO-Uczez4",
    authDomain: "preporucime-b587d.firebaseapp.com",
    projectId: "preporucime-b587d",
    storageBucket: "preporucime-b587d.appspot.com",
    messagingSenderId: "948512968158",
    appId: "1:948512968158:web:b8de8fdb57c0793cbc614f",
    measurementId: "G-KQH3C1M117"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

