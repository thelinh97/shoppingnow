import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';
import 'firebase/storage'
// Add your Firebase credentials
var firebaseConfig = {
    apiKey: "AIzaSyBOCWDL4khUfsxLtHuTYRIAAIb6Kxdv2ac",
    authDomain: "inventory-management-f9a7b.firebaseapp.com",
    databaseURL: "https://inventory-management-f9a7b.firebaseio.com",
    projectId: "inventory-management-f9a7b",
    storageBucket: "inventory-management-f9a7b.appspot.com",
    messagingSenderId: "303797248963",
    appId: "1:303797248963:web:5792d1be4bc95d542d5376",
    measurementId: "G-J0R8Q0B87Z"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();
export  {firebase as default }