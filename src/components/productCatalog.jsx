import React from 'react';
import Card from './card';
import '../assets/css/ProductCatalog.css';

function ProductCatalog({ products }) {
    return (
        <div className="product-catalog">
            {products.map(product => (
                <Card key={product.id} image={product.image} name={product.name} price={product.price} />
            ))}
        </div>
    );
}

export default ProductCatalog;
