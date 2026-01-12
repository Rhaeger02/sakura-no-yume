import React from 'react';
import './Hero.css';

const Hero = () => {
    const scrollToReservation = (e) => {
        e.preventDefault();
        const element = document.getElementById('reservation');
        if (element) {
            const headerHeight = document.querySelector('.main-header').offsetHeight;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-overlay">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h2 className="hero-title animate-on-scroll">
                            Experience the Art of Japanese Cuisine
                        </h2>
                        <p className="hero-subtitle animate-on-scroll">
                            Authentic flavors, traditional techniques, modern presentation
                        </p>
                        <a 
                            href="#reservation" 
                            className="btn btn-primary animate-on-scroll"
                            onClick={scrollToReservation}
                        >
                            Book a Table
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;