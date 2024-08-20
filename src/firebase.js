import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAShINoFE6SiXOGMEA_EtwZjwUzZ3XQnJg",
  authDomain: "talknet-ee5c0.firebaseapp.com",
  projectId: "talknet-ee5c0",
  storageBucket: "talknet-ee5c0.appspot.com",
  messagingSenderId: "559857219077",
  appId: "1:559857219077:web:0c3170ffd339776b1f4e6c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
