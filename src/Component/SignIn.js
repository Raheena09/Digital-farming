import React, {Component} from "react";
import firebase from "./Config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "../Style/SignIn.css";
import ProductionLogInDashBoard from "./LogInDashBoard/ProductionLogInDashBoard";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



  // making object of firebase
  const firestore = firebase.firestore();
  console.log(firestore);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google, Facebook, Etc as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false,
    },
  };



  class  SignIn extends  Component  {
  // The component's Local state.
   state = {
    isSignedIn: false, // Local signed-in state.
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  // Make sure we un-register Firebase observers when the component unmounts.
   componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render(){
   if(!this.state.isSignedIn){
    return(
         <>
          <div className="container">
          <div style={{paddingBottom:"30px"}}>
         <Button variant="contained" color="primary">
           <Link to="/" >
         Back to Home
         </Link>
        </Button>
         </div>
          <p> Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
         </div>
        
         </>
    )
   }  
   return(
     <div>
       <ProductionLogInDashBoard/>
     </div>
        
   );
  }
  
    
  }
  
    


export default SignIn;

