import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBDZuuMNukeIhm5PP-AX3CW_NnGzPBFZb8",
  authDomain: "minor-project-a7200.firebaseapp.com",
  projectId: "minor-project-a7200",
  storageBucket: "minor-project-a7200.appspot.com",
  messagingSenderId: "160149352933",
  appId: "1:160149352933:web:b5491294618083e967ff0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)