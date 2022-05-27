// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6s_XtQG7RCTCKCb-eN11_RdLziyHUzR8",
  authDomain: "photographer-portal-8a326.firebaseapp.com",
  projectId: "photographer-portal-8a326",
  storageBucket: "photographer-portal-8a326.appspot.com",
  messagingSenderId: "942666543868",
  appId: "1:942666543868:web:687b57e67867db54ee5d79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();