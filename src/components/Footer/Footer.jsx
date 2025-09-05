import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer-links">
                <Link to="/about">À propos</Link>
                <Link to="/CGV">CGV</Link>
                <Link to="/faq">FAQ</Link>
            </nav>
            <p className="footer-copyright">
                <i className="fa-regular fa-copyright"></i> LK PRO tous droits réservés
            </p>
        </footer>
    );
};

export default Footer;
