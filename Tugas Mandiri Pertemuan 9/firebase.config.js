import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCramUNyLRAgCrDyWh6RYhCYo7mvp9JjTk",
    authDomain: "bookapp-23e5b.firebaseapp.com",
    projectId: "bookapp-23e5b",
    storageBucket: "bookapp-23e5b.appspot.com",
    messagingSenderId: "598135738896",
    appId: "1:598135738896:web:39259cd47b4bae01b6b095",
    measurementId: "G-VMDB4E67M6"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export default firebase;