import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-on-scroll">Our Story</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle animate-on-scroll">
                        Where tradition meets innovation
                    </p>
                </div>
                
                <div className="about-content">
                    <div className="about-text animate-on-scroll">
                        <h3>桜の夢 - Sakura No Yume</h3>
                        <p>
                            Founded in 1990, Sakura No Yume (Dream of Cherry Blossoms) brings 
                            the authentic taste of Japan to your table. Our master chefs, 
                            trained in Tokyo and Kyoto, combine centuries-old techniques 
                            with modern culinary artistry.
                        </p>
                        <p>
                            We source only the finest ingredients, many imported directly 
                            from Japan, to create dishes that honor tradition while 
                            exciting the contemporary palate.
                        </p>
                        <p>
                            At Sakura No Yume, every meal is a journey through the seasons 
                            of Japan, with each dish thoughtfully prepared to engage all senses.
                        </p>
                    </div>
                    <div className="about-image animate-on-scroll">
                        <div className="image-placeholder"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;