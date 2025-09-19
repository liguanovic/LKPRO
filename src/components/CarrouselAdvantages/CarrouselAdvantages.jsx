import React, { useEffect, useRef, useState, useCallback } from 'react';
import advantages from '../../data/advantages.json';
import './CarrouselAdvantages.css';

const CarrouselAdvantages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const LENGTH = advantages.length;
    const intervalRef = useRef(null);
    const isPausedRef = useRef(false);

    const goNext = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % LENGTH);
    }, [LENGTH]);

    const goPrev = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + LENGTH) % LENGTH);
    }, [LENGTH]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (!isPausedRef.current) {
                goNext();
            }
        }, 3000);

        return () => clearInterval(intervalRef.current);
    }, [goNext]);

    const handleTouchStart = () => {
        isPausedRef.current = true;
    };

    const handleTouchEnd = () => {
        isPausedRef.current = false;
    };

    const adv = advantages[currentIndex];

    return (
        <section
            className="carrousel-advantages"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <figure className="carousel-card active">
                <img
                    src={adv.image.startsWith('http') ? adv.image : `${process.env.PUBLIC_URL}/${adv.image}`}
                    alt={adv.title}
                    className="card-img"
                />
                <figcaption className="card-text">
                    <h3>{adv.title}</h3>
                    <p>{adv.description}</p>
                </figcaption>
            </figure>

            <button className="carousel-arrow left" onClick={goPrev}>
                &lt;
            </button>
            <button className="carousel-arrow right" onClick={goNext}>
                &gt;
            </button>
        </section>
    );
};

export default CarrouselAdvantages;
