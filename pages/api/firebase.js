import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: "review-tracker-d04d2.appspot.com",
  messagingSenderId: "1046021788010",
  appId: "1:1046021788010:web:d74a37bc42dcb539489513",
  measurementId: "G-4P60G7JD0X",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
