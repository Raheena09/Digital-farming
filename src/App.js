import "./App.css";
import About from "./Component/About";
import Banner from "./Component/Banner";
import Nav from "./Component/Common/Nav";
import Contact from "./Component/Contact";
import MainLogInDashboard from "./Component/LogInDashBoard/MainLogInDashboard";

import Shop_Queries from "./Component/Shop_Queries";

import SignIn from "./Component/SignIn";
import Checkout from './Component/Checkout/Checkout';
import firebase from 'firebase';
import { React, useEffect } from 'react';


function App() {


  useEffect(() => {
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
firebase.initializeApp(firebaseConfig);

  },true)
  return (
    <div>
      
     
    </div>
  );
}

export default App;
