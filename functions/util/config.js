// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
module.exports = {
  apiKey: "AIzaSyC9ymZz8lpUyv3F9Qn-mqYzMjEJWZQOUa8",
  authDomain: "gaminggalaxy-48390.firebaseapp.com",
  databaseURL: "https://gaminggalaxy-48390.firebaseio.com",
  projectId: "gaminggalaxy-48390",
  storageBucket: "gaminggalaxy-48390.appspot.com",
  messagingSenderId: "850112954296",
  appId: "1:850112954296:web:82cb0d6c78bd528b35194d",
  measurementId: "G-KTX1JH87XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);