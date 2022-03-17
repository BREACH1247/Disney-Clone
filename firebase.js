import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBf4rWlPVwS1WUb1uI8n_E2f6CVHSBw4AE",
    authDomain: "disney-clone-4ea73.firebaseapp.com",
    projectId: "disney-clone-4ea73",
    storageBucket: "disney-clone-4ea73.appspot.com",
    messagingSenderId: "715598184561",
    appId: "1:715598184561:web:962bdfdbfd33a697a05bd0"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export {db};