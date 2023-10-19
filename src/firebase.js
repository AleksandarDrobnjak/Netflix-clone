import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXRRIsKcDxIMTZi4eoBuflKGJf07QBUu8",
  authDomain: "netflix-clone-41d10.firebaseapp.com",
  projectId: "netflix-clone-41d10",
  storageBucket: "netflix-clone-41d10.appspot.com",
  messagingSenderId: "270079970366",
  appId: "1:270079970366:web:51bf6f97fc0d917b36d56f",
  measurementId: "G-GGBB87NQ97",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
