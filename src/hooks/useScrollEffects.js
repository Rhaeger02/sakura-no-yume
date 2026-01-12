import { useEffect } from 'react';

export const useScrollEffects = () => {
  useEffect(() => {
    // Header scroll effect
    const header = document.querySelector('.main-header');
    
    const handleScroll = () => {
      if (!header) return;
      
      if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        header.style.padding = '10px 0';
      } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        header.style.padding = '15px 0';
      }
    };

    // Scroll animations for elements
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };
    
    // Function to handle scroll animations
    const handleScrollAnimations = () => {
      animateElements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('visible');
        }
      });
    };
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    const updateActiveNavLink = () => {
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

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    
    const handleParallax = () => {
      if (heroSection) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroSection.style.backgroundPosition = 'center ' + (rate + 50) + 'px';
      }
    };

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calculate offset for fixed header
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Initial setup
    handleScrollAnimations();
    
    // Setup event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('scroll', updateActiveNavLink);
    if (heroSection) {
      window.addEventListener('scroll', handleParallax);
    }
    
    // Setup smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollAnimations);
      window.removeEventListener('scroll', updateActiveNavLink);
      if (heroSection) {
        window.removeEventListener('scroll', handleParallax);
      }
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
};