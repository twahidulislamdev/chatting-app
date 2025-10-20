// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAH08a3d6HfSpvnWBqL4lRMYUm0AzZke4",
  authDomain: "chattingapp-b5a19.firebaseapp.com",
  databaseURL: "https://chattingapp-b5a19-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chattingapp-b5a19",
  storageBucket: "chattingapp-b5a19.firebasestorage.app",
  messagingSenderId: "1068311334219",
  appId: "1:1068311334219:web:e559cc41cdd577fe966cce",
  measurementId: "G-DM4H7672PL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;
