import React from 'react';
import { Link } from 'react-router-dom';
import "../../Style/CartItems.css"

function CartItems(props) {
    // fetching cartProducts from MainLogInDashboard.js
    const { cartProducts, onAdd, onRemove, countCartProducts}= props;
    // a=>accumulator, c=>current 
    const itemsPrice = cartProducts.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <>
        
        <aside className="block col-1" id="cart"style={{backgroundColor:'#5d9149', color:'white'}}>
            
            <h3>Cart Items {' '}
          {props.countCartProducts ? (
            <button className="badge">{props.countCartProducts}</button>
          ) : (
            ''
          )}
            </h3>
            <div>{cartProducts.length === 0 && <div >Cart is Empty</div>}</div>
            {cartProducts.map((items) => (
          <div key={items.id}>
            <div className="col-2">{items.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(items)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(items)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {items.qty} x Rs.{items.price.toFixed(2)}
            </div>
          </div>
        ))}

{cartProducts.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">Rs.{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">Rs.{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                Rs.{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Rs.{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button style={{width:"80px"}} className="checkOutButton" >
              <Link to ="/checkout"> Checkout</Link> 
              </button>
            </div>
          </>
        )}
    </aside>
        </>
    )
}

export default CartItems;
