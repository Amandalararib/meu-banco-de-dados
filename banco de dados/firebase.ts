import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARC_Zxq40khYiyiZ357DXsjY8ggYJ_aRk",
  authDomain: "teste-1c96d.firebaseapp.com",
  projectId: "teste-1c96d",
  storageBucket: "teste-1c96d.appspot.com",
  messagingSenderId: "766998349001",
  appId: "1:766998349001:web:478aaa644e02217e6cf918",
};

console.log("Conectado ao Firebase!");
const firebase = initializeApp(firebaseConfig);
export const db = firestore.getFirestore(firebase);

export { firestore };