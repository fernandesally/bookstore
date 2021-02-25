import firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyABwQt876474xAn22NI-XkRcFXorcanMog",
  authDomain: "bookstore2-848c0.firebaseapp.com",
  projectId: "bookstore2-848c0",
  storageBucket: "bookstore2-848c0.appspot.com",
  messagingSenderId: "1002394695140",
  appId: "1:1002394695140:web:965b95e73e2d4f9dfbc3f1"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()