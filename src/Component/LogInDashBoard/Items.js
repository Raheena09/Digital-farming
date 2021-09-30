import React from 'react';

export default function Items(props) {
  const { items, onAdd } = props;
  return (
    <div style={{marginTop:'20px'}}>
      <img className="small" src={items.image} alt={items.name} />
      <h3>{items.name}</h3>
      <div>Rs.{items.price}</div>
      <div>
        <button onClick={() => onAdd(items)} className="Cartbutton">Add To Cart</button>
      </div>
    </div>
  );
}