import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import productsCard from '../../data/productsCard.json';
import CarrouselAdvantages from '../../components/CarrouselAdvantages/CarrouselAdvantages';
import logoClub from '../../data/logos.json';
import homePicture from '../../assets/Pictures/home-picture.jpg';
import Nav from '../../components/Nav/Nav';

import './Home.css'

const Home = () => {
    return (
        <>
            <Nav />
            <main className="home">
                <figure className='homeFigure'>
                    <img className="homePicture" src={homePicture} alt="Protege tibias LK PRO" />
                    <span className="homeCaption">LK PRO <br /> <span className="homeCaptionSmall">Votre allié sportif</span></span>
                </figure>

                <h1>Nos produits</h1>
                <p>Découvrez nos produits phares :</p>

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

                <CarrouselAdvantages />

                <section className="confiance">
                    <h2>Ils nous font confiance</h2>
                    <p>Plusieurs clubs et associations nous font confiance, parmi eux :</p>
                    <div className="logo-slider">
                        <div className="logo-track">
                            {logoClub.concat(logoClub).map((logo, index) => (
                                <img
                                    key={index}
                                    src={`${process.env.PUBLIC_URL}/${logo.src}`}
                                    alt={logo.alt}
                                    className="confiance-logo"
                                />
                            ))}
                        </div>
                    </div>
                </section>


            </main></>

    )
}

export default Home