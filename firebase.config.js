import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCAH08a3d6HfSpvnWBqL4lRMYUm0AzZke4",
  authDomain: "chattingapp-b5a19.firebaseapp.com",
  projectId: "chattingapp-b5a19",
  storageBucket: "chattingapp-b5a19.firebasestorage.app",
  messagingSenderId: "1068311334219",
  appId: "1:1068311334219:web:e559cc41cdd577fe966cce",
  measurementId: "G-DM4H7672PL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;
