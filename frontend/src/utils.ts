import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0zDEN-GQ00uhExzcb0Ol4RJHBHKRLRs4",
  authDomain: "projects-23909.firebaseapp.com",
  projectId: "projects-23909",
  storageBucket: "projects-23909.firebasestorage.app",
  messagingSenderId: "846136260859",
  appId: "1:846136260859:web:64c509f59aa1685a98985e",
  measurementId: "G-45JBCB8WHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);