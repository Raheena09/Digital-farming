import React from "react";
import "../../Style/LogInDashBoard.css";
import { Link, useHistory } from 'react-router-dom';
import {useEffect,useState} from 'react'

import firebase from '../Config';



function LogInDashBoard(props) {
  
  const history= useHistory();
  const[name,setName]=useState("");

  useEffect(()=>{
    setTimeout(function()
    {
  const userName=firebase.auth().currentUser.displayName;
  localStorage.setItem("user",JSON.stringify(userName));
  const getName= JSON.parse(localStorage.getItem("user"));
  setName(getName);
    },1000);;
    },[true])
  const signOut=(e)=>{
    firebase.auth().signOut();
    localStorage.clear();
    history.push("/signIn");
  }


  return (
    <div>
      <div id="logInDashboard-header">
      <nav id="nav" >
        <div>
          Welcome <br /> {name} <br/>
             <button className="signOutButton" onClick={signOut}>
              Sign-out
            </button>
        </div>
        <div>
          <ul className="nav-home-component">
          <li> <Link to="/">Home</Link></li>
            <li> <Link to="/production">Production</Link></li>
            <li><Link to="/shop-login">Shop</Link></li>
          </ul>
        </div>
      </nav>
      </div>
    </div>
  );
}

export default LogInDashBoard;
