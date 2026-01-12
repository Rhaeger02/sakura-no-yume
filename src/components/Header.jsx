import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = document.querySelector('.main-header').offsetHeight;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            closeMenu();
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'menu', label: 'Menu' },
        { id: 'chefs', label: 'Chefs' },
        { id: 'reservation', label: 'Reservation' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className="main-header">
            <div className="container header-container">
                <div className="logo">
                    <h1 className="restaurant-name">桜の夢</h1>
                    <p className="restaurant-subtitle">Sakura No Yume</p>
                </div>

                <nav className="main-nav">
                    <ul className="nav-list">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <a 
                                    href={`#${link.id}`}
                                    className="nav-link"
                                    onClick={(e) => scrollToSection(e, link.id)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div 
                    className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a 
                                href={`#${link.id}`}
                                className="mobile-nav-link"
                                onClick={(e) => scrollToSection(e, link.id)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;