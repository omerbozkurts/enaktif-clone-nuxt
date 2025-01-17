import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBvpJYsPjDMykkZKf0GnZBWd_0se8TNI0c",
    authDomain: "nuxtclone.firebaseapp.com",
    projectId: "nuxtclone",
    storageBucket: "nuxtclone.firebasestorage.app",
    messagingSenderId: "394661497697",
    appId: "1:394661497697:web:8609cbdc2650243db25320",
    measurementId: "G-KY97RF3X1B"
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);

  // Firestore'u global olarak ekliyoruz
  nuxtApp.provide("firestore", firestore);
  nuxtApp.provide("firestoreAuth", auth);
});

