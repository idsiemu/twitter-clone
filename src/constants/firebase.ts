import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBny32ves5v3xmjB-W7qcKetlE3kxVlFPU",
    authDomain: "twitter-2e4e3.firebaseapp.com",
    projectId: "twitter-2e4e3",
    storageBucket: "twitter-2e4e3.appspot.com",
    messagingSenderId: "835073904408",
    appId: "1:835073904408:web:61c3cec17348f76d43186d"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
