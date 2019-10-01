import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOqhQ5QNkS0BxAEzC180Bg7sGOqZfENG0",
    authDomain: "reactspa-6900b.firebaseapp.com",
    databaseURL: "https://reactspa-6900b.firebaseio.com",
    projectId: "reactspa-6900b",
    storageBucket: "",
    messagingSenderId: "549582342161",
    appId: "1:549582342161:web:646ac4f223ed54485649b0",
    measurementId: "G-S9S53H74RF"
  };
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;