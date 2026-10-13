// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//⚠️Esto no deberia compartirse en un proyecto real
//📚En este proyecto educativo, por simplicidad para todos, lo utilizamos asi
//👉A futuro lo reemplazarían por variables de entorno y archivo .env😉
const firebaseConfig = {
  apiKey: "AIzaSyCJdaxMSmRcwTdDS10GZbcXyEOMgrlF2Ts",
  authDomain: "tp-c26122.firebaseapp.com",
  projectId: "tp-c26122",
  storageBucket: "tp-c26122.firebasestorage.app",
  messagingSenderId: "280456659694",
  appId: "1:280456659694:web:2f3201d78e64a2299be9ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para el login
const auth = getAuth(app);

export { db, auth };
