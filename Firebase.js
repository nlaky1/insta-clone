// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhDcI23Dn5K92VrIu6n_tQGzNeigtNUVs",
  authDomain: "reels-clone-dcd7d.firebaseapp.com",
  projectId: "reels-clone-dcd7d",
  storageBucket: "reels-clone-dcd7d.appspot.com",
  messagingSenderId: "149216296115",
  appId: "1:149216296115:web:04b5a89730e05e02e3c4c6",
  measurementId: "G-K8V90FXWMG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};