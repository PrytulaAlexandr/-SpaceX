import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
const API_KEY = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "spacex-6fdc5.firebaseapp.com",
  projectId: "spacex-6fdc5",
  storageBucket: "spacex-6fdc5.appspot.com",
  messagingSenderId: "196217794802",
  appId: "1:196217794802:web:4f32d793b2ddbcf811a06b",
  signInFlow: "popup",
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();