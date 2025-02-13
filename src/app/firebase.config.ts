// src/app/firebase.config.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnKZ4lu1y8jM2Xf5BZYiEDF_0GX84Jc50",
  authDomain: "custom-ui-277bd.firebaseapp.com",
  databaseURL: "https://custom-ui-277bd-default-rtdb.firebaseio.com",
  projectId: "custom-ui-277bd",
  storageBucket: "custom-ui-277bd.firebasestorage.app",
  messagingSenderId: "281439637121",
  appId: "1:281439637121:web:804652a1b4b2ad8c6b0780",
  measurementId: "G-BML04K480F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics, firebaseConfig };