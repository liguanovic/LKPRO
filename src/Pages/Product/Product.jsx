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

    // Redirection vers /error si produit non trouvé
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

    if (!product) return null;  // Pas de rendu pendant redirection

    const currentColorData = product.colors.find(c => c.name === selectedColor) || product.colors[0];

    const scrollCarousel = (direction) => {
        if (!carouselRef.current) return;
        const scrollAmount = 80; // largeur d'une vignette + gap
        carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    };

    // Afficher flèches seulement si plus de 4 images
    const showArrows = currentColorData.images.length > 4;

    return (
        <main className="product-page">
            <h1 className="product-title">{product.name}</h1>

            <article>
                {/* Image principale */}
                <figure className="product-main-image">
                    {mainImage ? (
                        <img src={`${process.env.PUBLIC_URL}/${mainImage}`} alt={`${product.name} - ${selectedColor}`} />
                    ) : (
                        <p>Chargement de l’image...</p>
                    )}
                </figure>

                {/* Carrousel images */}
                <section className="product-carousel" aria-label="Galerie du produit">
                    {showArrows && (
                        <button className="carousel-arrow left" onClick={() => scrollCarousel(-1)}>‹</button>
                    )}

                    <ul ref={carouselRef}>
                        {currentColorData.images.map((img, index) => (
                            <li key={`${img}-${index}`}>
                                <button
                                    type="button"
                                    className={`thumbnail ${mainImage === img ? 'selected' : ''}`}
                                    onClick={() => setMainImage(img)}
                                >
                                    <img src={`${process.env.PUBLIC_URL}/${img}`} alt={`Vue ${index + 1} - ${selectedColor}`} />
                                </button>
                            </li>
                        ))}
                    </ul>

                    {showArrows && (
                        <button className="carousel-arrow right" onClick={() => scrollCarousel(1)}>›</button>
                    )}
                </section>

                {/* Boutons couleurs */}
                <section className="product-colors" aria-label="Choix de la couleur">
                    <ul>
                        {product.colors.map(color => (
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

                <div className='product-description'>
                    {product.description.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* CTA */}
                <section className="product-footer">
                    <button
                        className="cta-button"
                        type="button"
                        onClick={() => console.log("Clic sur 'Demander un devis'")}
                    >
                        Demander un devis
                    </button>
                </section>
            </article>
        </main>
    );
};

export default Product;
