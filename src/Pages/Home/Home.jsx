import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import productsCard from '../../data/productsCard.json';
import CarrouselAdvantages from '../../components/CarrouselAdvantages/CarrouselAdvantages';
import logoClub from '../../data/logos.json';


import homePicture from '../../assets/Pictures/home-picture.jpg';

import './Home.css'

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
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

                <section className="about-section">
                    <h2>LK PRO & Vous : Une équipe</h2>
                    <p>Chez LK PRO, nous créons des équipements personnalisés pour les sportifs exigeants :<br /><br />
                        flocage de maillots, marquage club, ajout de logos, couleurs au choix…
                        Chaque pièce est conçue avec vous pour refléter votre identité sportive.</p>
                    <button className="btn" onClick={() => navigate('/about')}>En savoir plus</button>
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


            </main ></>

    )
}

export default Home