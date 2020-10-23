import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyBw82MWMZW58YjQ2Q6sq0O03jM2hTEJLDY',
    authDomain: 'dbhotel-354.firebaseapp.com',
    databaseURL: 'https://dbhotel-354.firebaseio.com',
    projectId: 'dbhotel-354',
    storageBucket: 'dbhotel-354.appspot.com',
    messagingSenderId: '1001569196248',
    appId: '1:1001569196248:web:d3b30fe1f4a3262b39dfad',
    measurementId: 'G-RF5G2H65FJ',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
