import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import productData from '../../data/productData.json';
import './Product.css';

const Product = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const product = productData.find(p => p.slug === slug);

    const [selectedColor, setSelectedColor] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const carouselRef = useRef(null);

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        if (!product) {
            navigate('/error');
        }
    }, [product, navigate]);

    useEffect(() => {
        if (!product) return;
        setSelectedColor(product.defaultColor);
        const defaultColorData = product.colors.find(c => c.name === product.defaultColor);
        if (defaultColorData) setMainImage(defaultColorData.images[0]);
    }, [slug, product]);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!product) return null;

    const currentColorData = product.colors.find(c => c.name === selectedColor) || product.colors[0];

    const scrollCarousel = (direction) => {
        if (!carouselRef.current) return;

        const scrollAmount = 80;

        if (isDesktop) {
            carouselRef.current.scrollBy({ top: direction * scrollAmount, behavior: 'smooth' });
        } else {
            carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    };

    const showArrows = currentColorData.images.length > 4;

    return (
        <main className="product-page">
            <h1 className="product-title">{product.name}</h1>

            <article>
                <div className="product-main-and-controls">
                    <div>
                        <figure className="product-main-image">
                            {mainImage ? (
                                <img
                                    src={`${process.env.PUBLIC_URL}/${mainImage}`}
                                    alt={`${product.name} - ${selectedColor}`}
                                />
                            ) : (
                                <p>Chargement de l’image...</p>
                            )}
                        </figure>

                        <section className="product-colors" aria-label="Choix de la couleur">
                            <ul>
                                {product.colors.map((color) => (
                                    <li key={color.name}>
                                        <button
                                            type="button"
                                            className={`color-dot ${selectedColor === color.name ? 'selected' : ''}`}
                                            onClick={() => {
                                                setSelectedColor(color.name);
                                                setMainImage(color.images[0]);
                                            }}
                                            title={color.name}
                                            style={{ backgroundColor: color.hex }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <section className="product-carousel-wrapper">
                        {isDesktop && showArrows && (
                            <button className="carousel-arrow top" onClick={() => scrollCarousel(-1)}>↑</button>
                        )}

                        <section className="product-carousel" aria-label="Galerie du produit">
                            <ul ref={carouselRef}>
                                {currentColorData.images.map((img, index) => (
                                    <li key={`${img}-${index}`}>
                                        <button
                                            type="button"
                                            className={`thumbnail ${mainImage === img ? 'selected' : ''}`}
                                            onClick={() => setMainImage(img)}
                                        >
                                            <img
                                                src={`${process.env.PUBLIC_URL}/${img}`}
                                                alt={`Vue ${index + 1} - ${selectedColor}`}
                                            />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {isDesktop && showArrows && (
                            <button className="carousel-arrow bottom" onClick={() => scrollCarousel(1)}>↓</button>
                        )}
                    </section>


                </div>

                <div className="product-description">
                    {product.description.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <section className="product-footer">
                    <button
                        className="cta-button"
                        type="button"
                        onClick={() => {
                            const subject = encodeURIComponent(`Demande de devis pour ${product.name}`);
                            const body = encodeURIComponent(`Bonjour,\n\nJe souhaite obtenir un devis pour le produit : ${product.name}.\n\nMerci.`);
                            window.location.href = `mailto:contact@lkpro.fr?subject=${subject}&body=${body}`;
                        }}
                    >
                        Demander un devis
                    </button>
                </section>
            </article>
        </main>
    );
};

export default Product;
