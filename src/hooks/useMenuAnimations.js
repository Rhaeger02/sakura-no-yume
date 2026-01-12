import { useEffect } from 'react';

export const useMenuAnimations = () => {
  useEffect(() => {
    // Menu tab functionality
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    const handleTabClick = function() {
      // Remove active class from all tabs
      menuTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Get category to show
      const category = this.getAttribute('data-category');
      
      // Hide all categories
      menuCategories.forEach(cat => {
        cat.classList.remove('active');
      });
      
      // Show selected category
      document.getElementById(category).classList.add('active');
      
      // Animate cards in the new category
      const cards = document.querySelectorAll(`#${category} .card`);
      cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      });
    };

    menuTabs.forEach(tab => {
      tab.addEventListener('click', handleTabClick);
    });
    
    // Text animation for hero section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero .btn');
    
    // Add animation classes after page load
    setTimeout(() => {
      if (heroTitle) heroTitle.classList.add('animate-text');
      if (heroSubtitle) heroSubtitle.classList.add('animate-text');
      if (heroButton) heroButton.classList.add('animate-text');
    }, 500);
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
    
    // Chef cards animation on hover
    const chefCards = document.querySelectorAll('.chef-card');
    chefCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const image = this.querySelector('.chef-image');
        image.style.transform = 'scale(1.05)';
        image.style.transition = 'transform 0.5s ease';
      });
      
      card.addEventListener('mouseleave', function() {
        const image = this.querySelector('.chef-image');
        image.style.transform = 'scale(1)';
      });
    });

    // Cleanup
    return () => {
      menuTabs.forEach(tab => {
        tab.removeEventListener('click', handleTabClick);
      });
    };
  }, []);
};