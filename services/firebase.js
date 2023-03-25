import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyAs29J5bVUKJYQjyfQ7ePI9NSeOChiD6bE",
  authDomain: "nationwidebuildingsociet-6fde9.firebaseapp.com",
  projectId: "nationwidebuildingsociet-6fde9",
  storageBucket: "nationwidebuildingsociet-6fde9.appspot.com",
  messagingSenderId: "683213115746",
  appId: "1:683213115746:web:20654758ff351fdd2c5c3b"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const auth = firebase.auth()
export const db = firebase.firestore()
export const updateDoc = firebase.firestore()
export const st = firebase.storage()
