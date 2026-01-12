import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
    });

    const [formMessage, setFormMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.name || !formData.email || !formData.phone || 
            !formData.date || !formData.time || !formData.guests) {
            setFormMessage({
                type: 'error',
                text: 'Please fill in all required fields.'
            });
            return;
        }

        if (!isValidEmail(formData.email)) {
            setFormMessage({
                type: 'error',
                text: 'Please enter a valid email address.'
            });
            return;
        }

        // Simulate form submission
        setFormMessage({
            type: 'success',
            text: 'Processing your reservation...'
        });

        setTimeout(() => {
            setFormMessage({
                type: 'success',
                text: 'Thank you! Your reservation has been received. We will confirm shortly via email.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: '',
                message: ''
            });

            // Clear message after 5 seconds
            setTimeout(() => {
                setFormMessage({ type: '', text: '' });
            }, 5000);
        }, 1500);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const timeOptions = [
        '17:00', '17:30', '18:00', '18:30',
        '19:00', '19:30', '20:00', '20:30'
    ];

    const guestOptions = Array.from({ length: 7 }, (_, i) => i + 1);

    return (
        <section id="reservation" className="section reservation-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-on-scroll">Make a Reservation</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle animate-on-scroll">
                        Book your table for an unforgettable experience
                    </p>
                </div>
                
                <form className="reservation-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group animate-on-scroll">
                            <label htmlFor="name">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group animate-on-scroll">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group animate-on-scroll">
                            <label htmlFor="phone">Phone *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group animate-on-scroll">
                            <label htmlFor="date">Date *</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group animate-on-scroll">
                            <label htmlFor="time">Time *</label>
                            <select
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Time</option>
                                {timeOptions.map(time => (
                                    <option key={time} value={time}>
                                        {time.replace(':00', '').replace(':', ':')}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="form-group animate-on-scroll">
                            <label htmlFor="guests">Number of Guests *</label>
                            <select
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                {guestOptions.map(num => (
                                    <option key={num} value={num}>
                                        {num} {num === 1 ? 'Person' : 'People'}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-group animate-on-scroll">
                        <label htmlFor="message">Special Requests</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-submit animate-on-scroll">
                        Book Now
                    </button>
                    
                    {formMessage.text && (
                        <div className={`form-message ${formMessage.type}`}>
                            {formMessage.text}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Reservation;