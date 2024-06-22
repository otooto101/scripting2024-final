// src/components/CartWindow.js
import React from 'react';
import '../assets/css/CartWindow.css';

const CartWindow = ({ cartItems, removeFromCart }) => {

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  return (
    <div className="cart-window">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>{item.price}₾</p>
              <button className="remove-button" onClick={() => handleRemove(item)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartWindow;
