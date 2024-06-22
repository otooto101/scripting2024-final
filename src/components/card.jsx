// src/components/Card.js
import React, { useContext } from "react";
import "../assets/css/Card.css";
import { CartContext } from '../context/cartContext';

function Card({ product }) {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { id, name, price, image } = product;

  const isInCart = cartItems.some(item => item.id === id);

  const handleAddClick = () => {
    addToCart(product);
  };

  const handleRemoveClick = () => {
    removeFromCart(product);
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{price}₾</p>
        {isInCart ? (
          <button
            onClick={handleRemoveClick}
            className="add-to-cart-button added"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddClick}
            className="add-to-cart-button add"
          >
             Add 
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
