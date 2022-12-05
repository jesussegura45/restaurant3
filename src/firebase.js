import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDRZdqFtTNl8PFo7FwyZAlgIPnmINso6E4",
    authDomain: "restaurante-61521.firebaseapp.com",
    databaseURL: "https://restaurante-61521-default-rtdb.firebaseio.com",
    projectId: "restaurante-61521",
    storageBucket: "restaurante-61521.appspot.com",
    messagingSenderId: "559453963971",
    appId: "1:559453963971:web:99e7ceca448454109b4476",
    measurementId: "G-7NMCE3YEY8"
  };

  // Initialize Firebase
  //const app = firebase.initializeApp(firebaseConfig);
  //const firestore = app.firestore();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}

  