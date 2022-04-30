// Import the functions you need from the SDKs you need
//import "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH4W0RP2fHbx5ggNssNFA0iS4Yqz0dohM",
  authDomain: "chinuch-veatid.firebaseapp.com",
  projectId: "chinuch-veatid",
  storageBucket: "chinuch-veatid.appspot.com",
  messagingSenderId: "310423515438",
  appId: "1:310423515438:web:f5bf693cac7c34fd73cabf",
  measurementId: "G-MTF0W0FNTD"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//maybe:
export const auth = app.auth()
export default app
