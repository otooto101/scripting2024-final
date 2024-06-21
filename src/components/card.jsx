import React from 'react';
import '../assets/css/Card.css';

function Card({ image, name, price }) {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-info">
                <h3>{name}</h3>
                <p>{price}₾</p>
            </div>
        </div>
    );
}

export default Card;
