
import firebase from "firebase";
// import 'firebase/firestore';
import  'firebase/auth' ;




// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAyGfA4tW8Q-gRhI34zDIxxv92Hf4BwLqE",
  authDomain: "digital-farming-24fb9.firebaseapp.com",
  projectId: "digital-farming-24fb9",
  storageBucket: "digital-farming-24fb9.appspot.com",
  messagingSenderId: "395319056651",
  appId: "1:395319056651:web:a311ccdf1f447c896e2a0e",
  measurementId: "G-28B68NBB11"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 export const firestore = firebase.firestore();
export default firebase;

// export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app().firestore();

