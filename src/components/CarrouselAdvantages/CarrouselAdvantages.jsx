import React, { useEffect, useRef, useState, useCallback } from 'react';
import advantages from '../../data/advantages.json';
import './CarrouselAdvantages.css';

const CarrouselAdvantages = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const isPausedRef = useRef(false);

    const goNext = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % advantages.length);
    }, []);

    const goPrev = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + advantages.length) % advantages.length);
    }, []);

    const startAutoScroll = useCallback(() => {
        intervalRef.current = setInterval(() => {
            if (!isPausedRef.current) {
                goNext();
            }
        }, 3000);
    }, [goNext]);

    useEffect(() => {
        startAutoScroll();
        return () => clearInterval(intervalRef.current);
    }, [startAutoScroll]);

    const handleTouchStart = () => {
        isPausedRef.current = true;
    };

    const handleTouchEnd = () => {
        isPausedRef.current = false;
    };

    return (

        <section className="carrousel-advantages">
            <ul
                className="carousel-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {advantages.map((adv, index) => (
                    <li key={index}>
                        <figure className={`carousel-card ${index === currentIndex ? 'active' : ''}`}>
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
                    </li>
                ))}
            </ul>

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
