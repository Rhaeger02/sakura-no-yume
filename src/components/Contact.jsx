import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-on-scroll">Contact Us</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle animate-on-scroll">Visit us or get in touch</p>
                </div>
                
                <div className="contact-container">
                    <div className="contact-info animate-on-scroll">
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Address</h3>
                                <p>Cruce Panamericana Norte, Av. Tomás Valle<br />
                                Independencia 15311, Lima, Perú</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <div>
                                <h3>Phone</h3>
                                <p>+51 987654321</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>info@sakuranoyume.com</p>
                            </div>
                        </div>
                        
                        <div className="contact-item">
                            <i className="fas fa-clock"></i>
                            <div>
                                <h3>Opening Hours</h3>
                                <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                                <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="map-container animate-on-scroll">
                        <div className="map-wrapper">
                            <iframe
                                title="Plaza Norte Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2873143130834!2d-77.05893622464867!3d-12.097547941445904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9908006f423%3A0x41e123d9c49cda20!2sPlaza%20Norte!5e0!3m2!1ses!2spe!4v1689290281058!5m2!1ses!2spe"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;