import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDlvL_4EBom5iCNwmXe6GbL3Xp575l2EI0",
  authDomain: "course-management-app-44d13.firebaseapp.com",
  databaseURL: "https://course-management-app-44d13-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "course-management-app-44d13",
  storageBucket: "course-management-app-44d13.appspot.com",
  messagingSenderId: "754855001253",
  appId: "1:754855001253:web:1c20878a8c29c98254614c",
  measurementId: "G-DDDHD8S7EX"
};

const app = initializeApp(firebaseConfig);

// Initialize and export the database
const database = getDatabase(app);
export { database };


