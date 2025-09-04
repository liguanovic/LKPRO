import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, alt, link }) => {
    return (
        <a href={link} className="product-card-link">
            <figure className="product-card">
                <img src={image} alt={alt} className="product-image" />
                <figcaption className="product-info">
                    <h2>{title}</h2>
                </figcaption>
            </figure>
        </a>
    );
};

export default ProductCard;
