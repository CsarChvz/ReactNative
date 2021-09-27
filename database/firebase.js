import firebase from 'firebase'
import 'firebase/firestore'
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = false


// USar la configuración de firebase
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export default {
  firebase,
  db,
}