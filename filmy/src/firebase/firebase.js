// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// const dotenv = require("dotenv");
// import '.env' from "dotenv";
// dotenv.config({ path: "../env" });

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUDjT_6YotxNXMsBc3i2qF52yUCfOZuz4",
  authDomain: "filmiziashop.firebaseapp.com",
  projectId: "filmiziashop",
  storageBucket: "filmiziashop.appspot.com",
  messagingSenderId: "494606534289",
  appId: "1:494606534289:web:b540c3dfaa17fb45a4e130",
  measurementId: "G-DC17MTHMJQ",
};

// const firebaseConfig = {
//   apikey: process.env.apikey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");

export default app;
