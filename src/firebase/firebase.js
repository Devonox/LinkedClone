import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCSnPLkfn5ioHUqZAu8ee5q4KkbSAokVNg",
    authDomain: "linkedin-clone-fbd92.firebaseapp.com",
    projectId: "linkedin-clone-fbd92",
    storageBucket: "linkedin-clone-fbd92.appspot.com",
    messagingSenderId: "949506773865",
    appId: "1:949506773865:web:759fd87afab77419e963f8",
    measurementId: "G-S80T75CR6K"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

//export db and auth
export { db, auth };