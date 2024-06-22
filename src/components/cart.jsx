// src/components/Cart.js
import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../assets/css/Cart.css';
import { CartContext } from '../context/cartContext';

Modal.setAppElement('#root'); // Set this to the root of your app to avoid accessibility issues

const Cart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { cartItems, removeFromCart } = useContext(CartContext);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <a href="#!" onClick={openModal} className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        {totalPrice > 0 && <span className="cart-total">{totalPrice}₾</span>}
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Shopping Cart"
        className="cart-modal"
        overlayClassName="cart-modal-overlay"
      >
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.name}</p>
                  <p>{item.price}₾</p>
                </div>
                <button onClick={() => removeFromCart(item)} className="remove-button">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))
          )}
        </div>
        <button onClick={closeModal} className="close-button">Close</button>
      </Modal>
    </div>
  );
};

export default Cart;
