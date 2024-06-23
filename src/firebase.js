import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//     apiKey: "AIzaSyDlvL_4EBom5iCNwmXe6GbL3Xp575l2EI0",
//     authDomain: "course-management-app-44d13.firebaseapp.com",
//     projectId: "course-management-app-44d13",
//     storageBucket: "course-management-app-44d13.appspot.com",
//     messagingSenderId: "754855001253",
//     appId: "1:754855001253:web:1c20878a8c29c98254614c",
//     measurementId: "G-DDDHD8S7EX"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyBxZ6BuntMKRfbuJPKPnwZeOcmf5XSlu0o",
  authDomain: "course-50f93.firebaseapp.com",
  projectId: "course-50f93",
  storageBucket: "course-50f93.appspot.com",
  messagingSenderId: "71813483851",
  appId: "1:71813483851:web:e2df48b86c3eea6bc6ecce",
  measurementId: "G-8F2WYKN2L0"
};

  const app = initializeApp(firebaseConfig);

  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);
  
  export { database };


