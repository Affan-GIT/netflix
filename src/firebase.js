import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh7J2i_MHgcFv2tpd1ulVZbn8RmbEwBds",
  authDomain: "netflix-clone-da012.firebaseapp.com",
  projectId: "netflix-clone-da012",
  storageBucket: "netflix-clone-da012.appspot.com",
  messagingSenderId: "631849569809",
  appId: "1:631849569809:web:fb4c5ccf720be2243dabb0",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
