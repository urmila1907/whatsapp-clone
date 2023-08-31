import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu-sHWca55AF4kimwnGPv_cZdc1zppRE8",

  authDomain: "whatsapp-clone-3f92c.firebaseapp.com",

  projectId: "whatsapp-clone-3f92c",

  storageBucket: "whatsapp-clone-3f92c.appspot.com",

  messagingSenderId: "344264939470",

  appId: "1:344264939470:web:8bb0feacafbc6f5d033d9f",

  measurementId: "G-4WVK20BQDL",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);