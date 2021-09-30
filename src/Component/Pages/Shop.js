import React from 'react';
import data from './../../data';
import { useState } from 'react';
import firebase from '../Config';
import CartItems from './../LogInDashBoard/CartItems';
import LogInDashBoard from './../LogInDashBoard/LogInDashBoard';
import Products from './../LogInDashBoard/Products';
import Nav from '../Common/Nav';
import Items from '../LogInDashBoard/Items';
import "../../Style/MainLogInDashBoard.css";
import ShopCom2 from './../Common/ShopCom2';






function Shop(props) {

    return (
        
      <div id="logIn-dashboard">
        <Nav/>
        <div>
      
        <ShopCom2/>
        </div>


      
      
      </div>
    )
}

export default Shop;
