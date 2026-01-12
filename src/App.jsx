import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Chefs from './components/Chefs';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importar estilos globales
import './App.css';

function App() {
  // Efectos al montar el componente
  useEffect(() => {
    // 1. Scroll animations
    const handleScrollAnimations = () => {
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
          rect.bottom >= 0
        );
      };
      
      animateElements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('visible');
        }
      });
    };

    // 2. Header scroll effect
    const handleHeaderScroll = () => {
      const header = document.querySelector('.main-header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
          header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
          header.style.padding = '10px 0';
        } else {
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
          header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
          header.style.padding = '15px 0';
        }
      }
    };

    // 3. Parallax effect
    const handleParallax = () => {
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroSection.style.backgroundPosition = 'center ' + (rate + 50) + 'px';
      }
    };

    // 4. Active navigation based on scroll
    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    // 5. Smooth scrolling
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.main-header')?.offsetHeight || 80;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    };

    // 6. Menu tab functionality
    const setupMenuTabs = () => {
      const menuTabs = document.querySelectorAll('.menu-tab');
      const menuCategories = document.querySelectorAll('.menu-category');
      
      menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
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
          document.getElementById(category)?.classList.add('active');
        });
      });
    };

    // 7. Form validation
    const setupFormValidation = () => {
      const reservationForm = document.getElementById('reservation-form');
      if (!reservationForm) return;

      const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const date = document.getElementById('date')?.value;
        const time = document.getElementById('time')?.value;
        const guests = document.getElementById('guests')?.value;
        
        // Validation
        if (!name || !email || !phone || !date || !time || !guests) {
          alert('Please fill in all required fields.');
          return;
        }
        
        if (!isValidEmail(email)) {
          alert('Please enter a valid email address.');
          return;
        }
        
        // Simulate form submission
        alert('Thank you! Your reservation has been received. We will confirm shortly via email.');
        reservationForm.reset();
      };

      reservationForm.addEventListener('submit', handleSubmit);
      return () => reservationForm.removeEventListener('submit', handleSubmit);
    };

    // 8. Hamburger menu functionality
    const setupHamburgerMenu = () => {
      const hamburgerMenu = document.querySelector('.hamburger-menu');
      const mobileNav = document.querySelector('.mobile-nav');
      const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
      
      if (hamburgerMenu) {
        const toggleMenu = () => {
          mobileNav?.classList.toggle('active');
          hamburgerMenu.classList.toggle('active');
        };
        
        hamburgerMenu.addEventListener('click', toggleMenu);
        
        // Close menu when clicking links
        mobileNavLinks.forEach(link => {
          link.addEventListener('click', () => {
            mobileNav?.classList.remove('active');
            hamburgerMenu?.classList.remove('active');
          });
        });
        
        return () => {
          hamburgerMenu.removeEventListener('click', toggleMenu);
        };
      }
    };

    // 9. Card hover effects
    const setupCardEffects = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
        });
      });
    };

    // Inicializar todo
    handleScrollAnimations(); // Run once on load
    setupMenuTabs();
    setupFormValidation();
    setupHamburgerMenu();
    setupCardEffects();

    // Configurar event listeners
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('scroll', handleHeaderScroll);
    window.addEventListener('scroll', handleParallax);
    window.addEventListener('scroll', updateActiveNavLink);

    // Smooth scrolling para todos los anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Limpieza al desmontar
    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      window.removeEventListener('scroll', handleHeaderScroll);
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('scroll', updateActiveNavLink);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Chefs />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;