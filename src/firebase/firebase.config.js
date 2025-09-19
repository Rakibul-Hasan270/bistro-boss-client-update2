// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.VITE_API_apiKey,
    authDomain: import.meta.VITE_API_authDomain,
    projectId: import.meta.VITE_API_projectId,
    storageBucket: import.meta.VITE_API_storageBucket,
    messagingSenderId: import.meta.VITE_API_messagingSenderId,
    appId: import.meta.VITE_API_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;