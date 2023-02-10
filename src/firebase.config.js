import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyX01Zj0Q7oHQS49soI6Ey2HdMltPpjMo",
  authDomain: "mg-vape.firebaseapp.com",
  databaseURL: "https://mg-vape-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mg-vape",
  storageBucket: "mg-vape.appspot.com",
  messagingSenderId: "837463961768",
  appId: "1:837463961768:web:d3f17fc178cfcd9489529d",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
