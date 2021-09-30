import React from 'react';
import Items from './Items';

import data from './../../data';


function Products(props) {
    // taking items from MainLogInDashboard.js as props
    const {items, onAdd}=props;
    const {items1}= data;

    return (
        <div className="block col-1" >
            <h2>{props.title}</h2>
            <h3>{props.title1}</h3>
            <div className="Productrow">
            {items1.map((items) => (
              
          <Items key={items.id} items={items} onAdd={onAdd}></Items>
        ))}
            </div>
          
        </div>
    )
}

export default Products;
