import { initializeApp } from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// import { seedDatabase } from "../seed";
//

//config
const config = {
    apiKey: "AIzaSyCl9L6xk5N87DVPIMI4xNsQ90w75SOfvBc",
    authDomain: "netflix-clone-17b0b.firebaseapp.com",
    projectId: "netflix-clone-17b0b",
    storageBucket: "netflix-clone-17b0b.appspot.com",
    messagingSenderId: "954442046169",
    appId: "1:954442046169:web:e5f3cbfce2f0adf738fcc8"
};


const firebase = initializeApp(config);
const db = getFirestore(firebase);
// add info to database
// seedDatabase(firebase);

export { firebase, db };