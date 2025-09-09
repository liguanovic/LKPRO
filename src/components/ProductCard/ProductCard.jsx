import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.css';

const ProductCard = ({ image, title, alt, link }) => {
    return (
        <Link to={link} className="product-card-link">
            <figure className="product-card">
                <img src={image} alt={alt} className="product-image" />
                <figcaption className="product-info">
                    <h2>{title}</h2>
                </figcaption>
            </figure>
        </Link>
    );
};

export default ProductCard;
