import React from 'react';
import './Chefs.css';

const Chefs = () => {
    const chefs = [
        {
            id: 1,
            name: 'Kenji Tanaka',
            title: 'Head Sushi Chef',
            bio: "Trained for 15 years in Tokyo's Michelin-starred sushi restaurants before bringing his expertise to Sakura No Yume.",
            image: '/img/chef1.jpg'
        },
        {
            id: 2,
            name: 'Mika Suzuki',
            title: 'Pastry Chef',
            bio: 'Specializes in traditional Japanese wagashi with modern interpretations. Trained in Kyoto for 10 years.',
            image: '/img/chef2.jpg'
        },
        {
            id: 3,
            name: 'Hiroshi Yamamoto',
            title: 'Ramen Master',
            bio: 'Third-generation ramen chef from Fukuoka. His tonkotsu broth simmers for 48 hours to achieve perfection.',
            image: '/img/chef3.jpg'
        }
    ];

    return (
        <section id="chefs" className="section chefs-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-on-scroll">Master Chefs</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle animate-on-scroll">Our culinary artists</p>
                </div>
                
                <div className="chefs-container">
                    {chefs.map(chef => (
                        <div key={chef.id} className="chef-card animate-on-scroll">
                            <div 
                                className="chef-image"
                                style={{ backgroundImage: `url('${chef.image}')` }}
                            ></div>
                            <div className="chef-info">
                                <h3>{chef.name}</h3>
                                <p className="chef-title">{chef.title}</p>
                                <p className="chef-bio">{chef.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Chefs;