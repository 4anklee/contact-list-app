import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyC1kqV6eJiCpIYB3J9QKt4x0ItZO7ysKyI",
    authDomain: "contact-list-web-app-dd3c3.firebaseapp.com",
    databaseURL: "https://contact-list-web-app-dd3c3-default-rtdb.firebaseio.com",
    projectId: "contact-list-web-app-dd3c3",
    storageBucket: "contact-list-web-app-dd3c3.appspot.com",
    messagingSenderId: "428820716303",
    appId: "1:428820716303:web:d504244297c8768d813c7a",
    measurementId: "G-99DRQ9N8FE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;