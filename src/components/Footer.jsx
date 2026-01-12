import React from 'react';
import './Footer.css';

const Footer = () => {
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
        }
    };

    const socialLinks = [
        { icon: 'fab fa-instagram', href: '#' },
        { icon: 'fab fa-facebook', href: '#' },
        { icon: 'fab fa-twitter', href: '#' },
        { icon: 'fab fa-tiktok', href: '#' }
    ];

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Menu', href: '#menu' },
        { label: 'Reservations', href: '#reservation' },
        { label: 'Contact', href: '#contact' }
    ];

    const legalLinks = [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Legal Notice', href: '#' }
    ];

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2 className="restaurant-name">桜の夢</h2>
                        <p className="restaurant-subtitle">Sakura No Yume</p>
                        <p className="footer-tagline">Authentic Japanese culinary experience</p>
                    </div>
                    
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            {quickLinks.map(link => (
                                <li key={link.label}>
                                    <a 
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href.replace('#', ''))}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${social.icon.replace('fab fa-', '')}`}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sakura No Yume. All rights reserved.</p>
                    <div className="legal-links">
                        {legalLinks.map(link => (
                            <a key={link.label} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;