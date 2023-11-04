import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6h13u6vezSZDCX8A2BOQ1IOFirm3f3xA",
  authDomain: "react-native-coderhouse-d6dc8.firebaseapp.com",
  projectId: "react-native-coderhouse-d6dc8",
  storageBucket: "react-native-coderhouse-d6dc8.appspot.com",
  messagingSenderId: "967505750893",
  appId: "1:967505750893:web:14d79576d4fe36333a0864"
};

const app = initializeApp(firebaseConfig);

export const fireDb = getFirestore(app);