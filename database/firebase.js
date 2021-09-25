import firebase from 'firebase'
import 'firebase/firestore'
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcoZdjujqd1vNZvmhXX7-L7vZTi_Hc5c4",
  authDomain: "react-native-firebase-3105f.firebaseapp.com",
  projectId: "react-native-firebase-3105f",
  storageBucket: "react-native-firebase-3105f.appspot.com",
  messagingSenderId: "525307952231",
  appId: "1:525307952231:web:b99fe9b48bae801dfde8c2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default {
  firebase,
  db,
}