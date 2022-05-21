// Import the functions you need from the SDKs you need
//import "firebase/auth"
<<<<<<< Updated upstream
//import { initializeApp } from "firebase/app";
=======
import { initializeApp } from "firebase/app";
>>>>>>> Stashed changes
// import {
//   getFirestore,
//   doc,
//   setDoc,
//   collection,
//   addDoc,
//   getDoc,
//   onSnapshot,
//   query,
//   where,
//   getDocs,
//   orderBy,
//   limit,
// } from "firebase/firestore/lite";
<<<<<<< Updated upstream
=======
// import firebase from 'firebase';
import {getStorage} from 'firebase/storage';
>>>>>>> Stashed changes
// import { getAnalytics } from "firebase/analytics";
// import { addDoc, collection, getDoc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore/lite';
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
// import { async } from "@firebase/util";
<<<<<<< Updated upstream
//import "@firebase/auth"
 //import firebase from "firebase/compat"
//import firebase from firebase/compat/app;
//import firebase from 'firebase/app';
import { initializeApp } from "@firebase/app";
// import { getAnalytics } from 'firebase/app';
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
//import 'firebase/compat/firestore';
import 'firebase/auth';
//import 'firebase/analytics'
//import { auth } from "firebase/app";
//import firesbase from  'firebase/app';
//import '@firebase/firestore';
=======
>>>>>>> Stashed changes

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //const app = firebase.initializeApp({
  apiKey: "AIzaSyBH4W0RP2fHbx5ggNssNFA0iS4Yqz0dohM",
  authDomain: "chinuch-veatid.firebaseapp.com",
  projectId: "chinuch-veatid",
  storageBucket: "chinuch-veatid.appspot.com",
  messagingSenderId: "310423515438",
  appId: "1:310423515438:web:f5bf693cac7c34fd73cabf",
  measurementId: "G-MTF0W0FNTD"
};


// Initialize Firebase
<<<<<<< Updated upstream
const app = firebase.initializeApp(firebaseConfig);
//const analytics =  firebase.getAnalytics(app);
//const analytics =  getAnalytics(app);
=======
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
>>>>>>> Stashed changes

// const firestore = getFirestore();

// const speciaLOfTheDay = doc(firestore, 'dailySpecial/2022-08-5')
// function writeDailySpecial() {
//   const docData = {
//     description: 'A delicious vanilla late',
//     price: 3.99,
//     milk: 'Whole',
//     vegan: false,
//   };
//   setDoc(speciaLOfTheDay, docData, { merge: true });
//   ThemeConsumer(() => {
//     console.log('This valu has been written to the database');
//   })
//     .catch((error) => {
//       console.log('I got an error! ${error}');
//     });
// }

// const ordersCollection = collection(firestore, 'orders');

// async function addNewDocument() {
//   const newDoc = await addDoc(ordersCollection, {
//     customer: 'Arthur',
//     drink: 'latte',
//   });
//   console.log('your doc was created at ${newDoc.path}');
// }

// async function readSingleDocument() {
//   const mySnapshot = await getDoc(speciaLOfTheDay);
//   if (mySnapshot.exists()) {
//     const docData = mySnapshot.data();
//     console.log('My data is ${JSON.stringify(docData)}');
//   }
// }

// let dailSpecialUnsubscribe;

// function listenToADocument() {
//   dailSpecialUnsubscribe = onSnapshot(speciaLOfTheDay, docSnapshot => {
//     if (docSnapshot.exists()) {
//       const docData = docSnapshot.data();
//       console.log('In realtime, docData is ${JSON.stringify(docData)}');
//     }
//   });
// }

// function cancelMyListenerAtTheAppropriateTime() {
//   dailSpecialUnsubscribe();
// }

// function queryForDocuments() {
//   const customerOrdersQuery = query(
//     collection(firestore, 'orders'),
//     where('drink', '==', 'latte'),
//     orderBy('price'),
//     limit(10),
//   );

//   //const querySnapshot = await getDocs(customerOrdersQuery);
//   onSnapshot(customerOrdersQuery,(querySnapshot)=>{
//     querySnapshot.forEach((snap) => {
//       console.log(
//         'Ducument ${snap.id} contains ${JSON.stringify(snap.data())}')
//     });
//   })
// }
<<<<<<< Updated upstream


// console.log('hellow there, FireBase!');
// writeDailySpecial();
// addNewDocument();
// readSingleDocument();
// listenToADocument();
// queryForDocuments();


//const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// export { auth, provider };
=======
// export const storage = getStorage();


console.log('hellow there, FireBase!');
//writeDailySpecial();
//addNewDocument();
//readSingleDocument();
//listenToADocument();
//queryForDocuments();


>>>>>>> Stashed changes
//maybe:
export const auth = getAuth();
export const storage = getStorage();
export default app





// import firebase from "firebase/app"
// import "firebase/compat/auth"
// import { initializeApp } from "firebase/firebase-app";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyBH4W0RP2fHbx5ggNssNFA0iS4Yqz0dohM",
//   authDomain: "chinuch-veatid.firebaseapp.com",
//   projectId: "chinuch-veatid",
//   storageBucket: "chinuch-veatid.appspot.com",
//   messagingSenderId: "310423515438",
//   appId: "1:310423515438:web:f5bf693cac7c34fd73cabf",
//   measurementId: "G-MTF0W0FNTD"
// })

// export const auth = app.auth()
// export default app
