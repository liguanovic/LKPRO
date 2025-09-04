import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, alt, link }) => {
    return (
        <figure className="product-card">
            <img src={image} alt={alt} className="product-image" />
            <figcaption className="product-info">
                <h2>{title}</h2>
                <a href={link} className="discover-btn">Découvrir</a>
            </figcaption>
        </figure>
    );
};

export default ProductCard;
