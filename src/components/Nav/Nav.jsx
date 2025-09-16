import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/Pictures/logo.png';
import menu from '../../data/menu.json';
import './Nav.css';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const [shouldPersistSection, setShouldPersistSection] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const prevMenuOpenRef = useRef(menuOpen);
    const location = useLocation();

    const toggleSection = (title) => {
        setActiveSection((prev) => (prev === title ? null : title));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    useEffect(() => {
        const currentSection = menu.find((section) =>
            section.links.some((link) => link.to === location.pathname)
        );
        setActiveSection(currentSection ? currentSection.title : null);
    }, [location.pathname]);

    useEffect(() => {
        if (prevMenuOpenRef.current && !menuOpen) {
            if (!shouldPersistSection) {
                setActiveSection(null);
            } else {
                setShouldPersistSection(false);
            }
        }
        prevMenuOpenRef.current = menuOpen;
    }, [menuOpen, shouldPersistSection]);

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
                            ref={buttonRef}
                            className="menu-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </li>
                </ul>
            </nav>

            <aside ref={menuRef} className={`side-menu ${menuOpen ? 'open' : ''}`}>
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
                                            <Link
                                                to={link.to}
                                                onClick={() => {
                                                    setShouldPersistSection(true);
                                                    setMenuOpen(false);
                                                }}
                                            >
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
