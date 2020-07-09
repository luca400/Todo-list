import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNZjIgWZ68cQKVghRWtQ-ZIvVwZk4KvIQ",
  authDomain: "todo-c47c9.firebaseapp.com",
  databaseURL: "https://todo-c47c9.firebaseio.com",
  projectId: "todo-c47c9",
  storageBucket: "todo-c47c9.appspot.com",
  messagingSenderId: "599982666424",
  appId: "1:599982666424:web:28a12318be11a5eef2fa4d",
  measurementId: "G-VZ5J3WK80V",
});

const db = firebaseApp.firestore();

export default db;
