import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCpq1OI-gtcFYMu6hdaxPgK39Mgvf0Yvrs",
  authDomain: "expobookapp.firebaseapp.com",
  projectId: "expobookapp",
  storageBucket: "expobookapp.appspot.com",
  messagingSenderId: "578150768210",
  appId: "1:578150768210:web:b436033b1c1b54551b898b",
  measurementId: "G-B17B5WWYBE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default {firebase,
db};