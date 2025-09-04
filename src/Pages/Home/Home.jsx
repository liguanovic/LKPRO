import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import productsCard from '../../data/productsCard.json';
import homePicture from '../../assets/Pictures/home-picture.jpg'
import logoClub from '../../data/logos.json';
import Nav from '../../components/Nav/Nav';

import './Home.css'

const Home = () => {
    return (
        <>
            <Nav />
            <main className="home">
                <figure className='homeFigure'>
                    <img className="homePicture" src={`${process.env.PUBLIC_URL}/assets/Pictures/home-picture.jpg`} alt="Protege tibias LK PRO" />
                    <span className="homeCaption">LK PRO <br /> <span className="homeCaptionSmall">Votre allié sportif</span></span>
                </figure>

                <h1>Nos produits</h1>

                <section className="product-list">
                    {productsCard.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={`${process.env.PUBLIC_URL}/${product.image}`}
                            title={product.title}
                            link={product.link}
                            alt={product.alt}
                        />
                    ))}
                </section>

                <section className="confiance">
                    <h2>Ils nous font confiance</h2>
                    <p>Plusieurs clubs et associations nous font confiance, parmi eux :</p>
                    <div className="logo-slider">
                        {logoClub.map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className="confiance-logo" />
                        ))}
                    </div>
                </section>

            </main></>

    )
}

export default Home