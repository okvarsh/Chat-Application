// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4hLnY2ZUwJzKDDY8sgBPCcROjiB6zSPg",
    authDomain: "amaze-chat.firebaseapp.com",
    databaseURL: "https://amaze-chat.firebaseio.com",
    projectId: "amaze-chat",
    storageBucket: "amaze-chat.appspot.com",
    messagingSenderId: "514306908765",
    appId: "1:514306908765:web:0955c6ac9b94682b2723b4",
    measurementId: "G-CY8GJ35VDK"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;