import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4qKvrAATEzTF873zN0FhbtARRQX3dnHA",
  authDomain: "teste-aa73a.firebaseapp.com",
  projectId: "teste-aa73a",
  storageBucket: "teste-aa73a.appspot.com",
  messagingSenderId: "820642394366",
  appId: "1:820642394366:web:9b9ff7b09e9317d48935af",
  measurementId: "G-6L1KQPTK3W"
};

console.log("Conectado ao Firebase!");
const firebase = initializeApp(firebaseConfig);
export const db = firestore.getFirestore(firebase);

export { firestore };