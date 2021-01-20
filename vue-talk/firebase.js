import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyB9cWzLRK163ft2Pv6Z2N0OPfQl2wmvymA",
    authDomain: "vue-talk-1fffc.firebaseapp.com",
    projectId: "vue-talk-1fffc",
    storageBucket: "vue-talk-1fffc.appspot.com",
    messagingSenderId: "61039536675",
    appId: "1:61039536675:web:d716d783f781173dee5f96"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Constantes

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();