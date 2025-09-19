import React, { useState, useEffect, useRef } from 'react';
import confiance from '../../data/confiance.json';

import './CarrouselConfiance.css';

const CarrouselConfiance = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const LENGTH = confiance.length;
    const intervalRef = useRef(null);
    const isPausedRef = useRef(false);

    const goPrev = () => {
        setCurrentIndex((currentIndex - 1 + LENGTH) % LENGTH);
    };

    const goNext = () => {
        setCurrentIndex((currentIndex + 1) % LENGTH);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (!isPausedRef.current) {
                setCurrentIndex(prev => (prev + 1) % LENGTH);
            }
        }, 3000);

        return () => clearInterval(intervalRef.current);
    }, [LENGTH]);

    const handleMouseEnter = () => {
        isPausedRef.current = true;
    };

    const handleMouseLeave = () => {
        isPausedRef.current = false;
    };

    const handleTouchStart = () => {
        isPausedRef.current = true;
    };

    const handleTouchEnd = () => {
        isPausedRef.current = false;
    };

    return (
        <section
            className="carrousel-confiance-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <figure className="carrousel-confiance-figure">
                <img
                    src={
                        confiance[currentIndex].image.startsWith('http')
                            ? confiance[currentIndex].image
                            : `${process.env.PUBLIC_URL}/${confiance[currentIndex].image}`
                    }
                    alt={`Advantage ${currentIndex + 1}`}
                    className="carrousel-confiance-img"
                />
            </figure>

            <button className="carrousel-confiance-arrow carrousel-confiance-arrow-left" onClick={goPrev}>
                &lt;
            </button>
            <button className="carrousel-confiance-arrow carrousel-confiance-arrow-right" onClick={goNext}>
                &gt;
            </button>
        </section>
    );
};

export default CarrouselConfiance;
