// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXCNZk75WLs8IoEiEgyTqtSQtimIBOqFM",
  authDomain: "mybloggg.firebaseapp.com",
  projectId: "mybloggg",
  storageBucket: "mybloggg.appspot.com",
  messagingSenderId: "826848096458",
  appId: "1:826848096458:web:50a9525f1386c70eb5c433",
  measurementId: "G-ZGLV6NBMLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
