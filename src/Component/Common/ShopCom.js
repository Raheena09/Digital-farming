import React from 'react';
import data from './../../data';
import { useState } from 'react';
import firebase from '../Config';
import { Link } from 'react-router-dom';
import CartItems from '../LogInDashBoard/CartItems';
import Products from '../LogInDashBoard/Products';
import "../../Style/ShopCom.css";


function ShopCom() {
  const firestore = firebase.firestore();

    // extracting products from data.js
    const { items } = data; 
    const [cartProducts, setCartProducts]= useState([]);

    const onAdd = (items) => {
        const exist = cartProducts.find((x) => x.id === items.id);
        if (exist) {
          setCartProducts(
            cartProducts.map((x) =>
              x.id === items.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartProducts([...cartProducts, { ...items, qty: 1 }]);
        }
      };

      const onRemove = (items) => {
        const exist = cartProducts.find((x) => x.id === items.id);
        if (exist.qty === 1) {
            setCartProducts(cartProducts.filter((x) => x.id !== items.id));
        } else {
            setCartProducts(
            cartProducts.map((x) =>
              x.id === items.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };
    return (
        
      <div className="product-wrapper" >
        <div className="ProductsCom" >
        <Products onAdd={onAdd} items={items} title="Shop" title1="Farming Products"/>
        </div>
        <div className="CardItems">
        <CartItems onAdd={onAdd} onRemove={onRemove} cartProducts={cartProducts} countCartProducts={cartProducts.length}/>
        </div>
      </div>
    )
}

export default ShopCom;
