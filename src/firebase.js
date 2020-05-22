import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjp3i383jdE1MPgjz4lOF2PX0BPQPsgs0",
  authDomain: "currency-converter-ba19c.firebaseapp.com",
  databaseURL: "https://currency-converter-ba19c.firebaseio.com",
  projectId: "currency-converter-ba19c",
  storageBucket: "currency-converter-ba19c.appspot.com",
  messagingSenderId: "543175049741",
  appId: "1:543175049741:web:52d256f8660a731a0e8b44",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};
export const firestore = firebase.firestore();

export default firebase;
