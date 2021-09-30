import React from 'react';
import Items from './Items';

import data from './../../data';


function Products2(props) {
    // taking onAdd from MainLogInDashboard.js as props
    const {onAdd}=props;
    const {items1}= data;

    return (
        <div className="block col-1" >
            <h2>{props.title}</h2>
            <div className="Productrow">
            {items1.map((items) => (
              
          <Items key={items.id} items={items} onAdd={onAdd}></Items>
        ))}
            </div>
          
        </div>
    )
}

export default Products2;
