 import firebase from 'firebase/app'
 import 'firebase/storage';
 import 'firebase/firestore';


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC8jiLTNUsrO0ne93iqFJhV98thtoMo7UU",
    authDomain: "human-s-crm.firebaseapp.com",
    projectId: "human-s-crm",
    storageBucket: "human-s-crm.appspot.com",
    messagingSenderId: "418621049501",
    appId: "1:418621049501:web:7a5a5758deaca698b9a274",
    measurementId: "G-FQCWX0WLTG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  const hstorage = firebase.storage();
  const fstore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {hstorage,fstore,timestamp};