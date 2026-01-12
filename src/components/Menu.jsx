import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('sushi');
    
    const menuCategories = [
        { id: 'sushi', label: 'Sushi & Sashimi' },
        { id: 'ramen', label: 'Ramen & Noodles' },
        { id: 'grill', label: 'Grilled Specialties' },
        { id: 'desserts', label: 'Desserts' },
        { id: 'drinks', label: 'Drinks' }
    ];

    const menuItems = {
        sushi: [
            { id: 1, name: 'Omakase Sushi Selection', description: "Chef's selection of 12 premium nigiri and sashimi pieces", price: '$42', image: '/img/sushi1.jpg' },
            { id: 2, name: 'Dragon Roll', description: 'Eel, cucumber, avocado topped with fresh water eel and eel sauce', price: '$18', image: '/img/sushi2.jpg' },
            { id: 3, name: 'Salmon Aburi', description: 'Flame-seared salmon nigiri with truffle oil and sea salt', price: '$16', image: '/img/sushi3.jpg' },
            { id: 4, name: 'Rainbow Roll', description: 'California roll topped with assorted sashimi', price: '$20', image: '/img/sushi4.jpg' },
            { id: 5, name: 'Spicy Tuna Roll', description: 'Fresh tuna mixed with spicy mayo, cucumber, and sesame seeds', price: '$15', image: '/img/sushi5.jpg' },
            { id: 6, name: 'Uni Sashimi', description: 'Fresh sea urchin from Hokkaido, served with wasabi', price: '$28', image: '/img/sushi6.jpg' }
        ],
        ramen: [
            { id: 1, name: 'Tonkotsu Ramen', description: 'Rich pork bone broth with chashu pork, soft-boiled egg, and bamboo shoots', price: '$15', image: '/img/ramen1.jpg' },
            { id: 2, name: 'Shoyu Ramen', description: 'Soy sauce based broth with chicken, menma, nori, and green onions', price: '$14', image: '/img/ramen2.jpg' },
            { id: 3, name: 'Miso Ramen', description: 'Savory miso broth with corn, butter, and bean sprouts', price: '$16', image: '/img/ramen3.jpg' },
            { id: 4, name: 'Shio Ramen', description: 'Clear salt-based broth with seafood and vegetables', price: '$14', image: '/img/ramen4.jpg' },
            { id: 5, name: 'Spicy Miso Ramen', description: 'Miso broth with chili oil, ground pork, and garlic', price: '$17', image: '/img/ramen5.jpg' },
            { id: 6, name: 'Vegetarian Ramen', description: 'Mushroom and vegetable broth with tofu and seasonal vegetables', price: '$13', image: '/img/ramen6.jpg' }
        ],
        grill: [
            { id: 1, name: 'Wagyu Beef', description: 'Premium Japanese Wagyu beef, grilled to perfection', price: '$45', image: '/img/grill1.jpg' },
            { id: 2, name: 'Yakitori Platter', description: 'Assorted chicken skewers with tare sauce', price: '$22', image: '/img/grill2.jpg' },
            { id: 3, name: 'Unagi Kabayaki', description: 'Grilled freshwater eel with sweet soy glaze', price: '$25', image: '/img/grill3.jpg' },
            { id: 4, name: 'Saba Shioyaki', description: 'Salt-grilled mackerel with grated daikon', price: '$18', image: '/img/grill4.jpg' },
            { id: 5, name: 'Buta Kakuni', description: 'Slow-braised pork belly with soy and ginger', price: '$20', image: '/img/grill5.jpg' },
            { id: 6, name: 'Tori Teriyaki', description: 'Grilled chicken with homemade teriyaki sauce', price: '$16', image: '/img/grill6.jpg' }
        ],
        desserts: [
            { id: 1, name: 'Matcha Tiramisu', description: 'Green tea tiramisu with matcha powder', price: '$10', image: '/img/dessert1.jpg' },
            { id: 2, name: 'Dorayaki', description: 'Red bean pancake sandwich with sweet azuki paste', price: '$8', image: '/img/dessert2.jpg' },
            { id: 3, name: 'Black Sesame Ice Cream', description: 'Homemade black sesame ice cream', price: '$7', image: '/img/dessert3.jpg' },
            { id: 4, name: 'Mochi Platter', description: 'Assorted Japanese rice cakes with sweet fillings', price: '$12', image: '/img/dessert4.jpg' },
            { id: 5, name: 'Sakura Cheesecake', description: 'Cherry blossom flavored cheesecake', price: '$11', image: '/img/dessert5.jpg' },
            { id: 6, name: 'Warabi Mochi', description: 'Bracken starch mochi with kinako and kuromitsu', price: '$9', image: '/img/dessert6.jpg' }
        ],
        drinks: [
            { id: 1, name: 'Sake Flight', description: 'Selection of three premium sakes', price: '$25', image: '/img/drink1.jpg' },
            { id: 2, name: 'Matcha Latte', description: 'Ceremonial grade matcha with steamed milk', price: '$6', image: '/img/drink2.jpg' },
            { id: 3, name: 'Umeshu Sour', description: 'Japanese plum wine cocktail', price: '$12', image: '/img/drink3.jpg' },
            { id: 4, name: 'Yuzu Lemonade', description: 'Fresh yuzu juice with sparkling water', price: '$5', image: '/img/drink4.jpg' },
            { id: 5, name: 'Japanese Whisky', description: 'Highball with premium Japanese whisky', price: '$15', image: '/img/drink5.jpg' },
            { id: 6, name: 'Calpico Soda', description: 'Refreshing Japanese yogurt drink', price: '$4', image: '/img/drink6.jpg' }
        ]
    };

    useEffect(() => {
        const cards = document.querySelectorAll(`#${activeCategory} .card`);
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, [activeCategory]);

    return (
        <section id="menu" className="section menu-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title animate-on-scroll">Our Menu</h2>
                    <div className="section-divider"></div>
                    <p className="section-subtitle animate-on-scroll">
                        Seasonal specialties crafted with precision
                    </p>
                </div>
                
                <div className="menu-tabs">
                    {menuCategories.map(category => (
                        <button
                            key={category.id}
                            className={`menu-tab ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
                
                <div className="menu-scroll-container">
                    <div className="menu-category active" id={activeCategory}>
                        {menuItems[activeCategory].map(item => (
                            <div key={item.id} className="card animate-on-scroll">
                                <div 
                                    className="card-image"
                                    style={{ backgroundImage: `url('${item.image}')` }}
                                ></div>
                                <div className="card-content">
                                    <h3 className="card-title">{item.name}</h3>
                                    <p className="card-description">{item.description}</p>
                                    <p className="card-price">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;