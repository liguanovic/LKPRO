import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/Pictures/logo.png';
import './Nav.css';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="nav">
                <figure >
                    <img className="logo" src={logo} alt="Logo LK PRO" />
                </figure>

                <ul className="nav-actions">
                    <li>
                        <button className="search-btn" aria-label="Search">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </li>
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

            {menuOpen && (
                <div className="menu">
                    {/*a remplir*/}
                </div>
            )}
        </>
    );
};

export default Nav;
