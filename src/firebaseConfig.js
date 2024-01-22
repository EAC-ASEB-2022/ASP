import { initializeApp } from "firebase/app";
import {OAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDGTFeZJyTzowTOTNqSCw7HtUKm5nquhto",
  authDomain: "asp-auth-7a15d.firebaseapp.com",
  projectId: "asp-auth-7a15d",
  storageBucket: "asp-auth-7a15d.appspot.com",
  messagingSenderId: "216798696582",
  appId: "1:216798696582:web:db2992d534410f1b556d07"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const microsoftProvider = new OAuthProvider('microsoft.com');

microsoftProvider.setCustomParameters({
    login_hint: 'user_id@bl.students.amrita.edu'
})