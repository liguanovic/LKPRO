import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import logo from '../../assets/Pictures/logo.png';
import menu from '../../data/menu.json';
import './Nav.css';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (title) => {
        setActiveSection((prev) => (prev === title ? null : title));
    };

    return (
        <>
            <nav className="nav">
                <figure>
                    <Link to="/">
                        <img className="logo" src={logo} alt="Logo LK PRO" />
                    </Link>
                </figure>

                <ul className="nav-actions">
                    <li>
                        <button
                            className="menu-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </li>
                </ul>
            </nav>

            <aside className={`side-menu ${menuOpen ? 'open' : ''}`}>
                <ul className="menu-list">
                    {menu.map((section, index) => (
                        <li key={index} className="menu-section">
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="menu-title"
                                aria-expanded={activeSection === section.title}
                            >
                                {section.title}
                            </button>

                            {activeSection === section.title && (
                                <ul className="submenu">
                                    {section.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link to={link.to} onClick={() => setMenuOpen(false)}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
};

export default Nav;
