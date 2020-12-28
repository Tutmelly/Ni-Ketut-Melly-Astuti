import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyBICQXfkA0t0LBAy7ycL4dKrUMkge8oUkg",
  authDomain: "peminjamanruangan-58e2f.firebaseapp.com",
  projectId: "peminjamanruangan-58e2f",
  storageBucket: "peminjamanruangan-58e2f.appspot.com",
  messagingSenderId: "874046240917",
  appId: "1:874046240917:web:4fc324e81b7ecb80eb839c",
  measurementId: "G-W2DW2R82YG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const bd = firebase.database()

export default {firebase, db, bd};