import firebase from "firebase/app";
import "src/firebase/firebase-config.jsx"; // Import the database SDK

const firebaseConfig = {
  apiKey: "AIzaSyDlJi-5fZtdyuJo4IWpUrCnZ02TDRhwjXs",
  authDomain: "state-management-system-e10f6.firebaseapp.com",
  databaseURL: "https://state-management-system-e10f6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "state-management-system-e10f6",
  storageBucket: "state-management-system-e10f6.firebasestorage.app",
  messagingSenderId: "473498123924",
  appId: "1:473498123924:web:492f69ee239ea0daf5be81"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database(); // Access Firebase Realtime Database

export { database }; // Export the database object to use in other files
