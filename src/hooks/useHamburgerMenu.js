import { useEffect, useState } from 'react';

export const useHamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburgerMenu) return;

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const updateActiveLink = (clickedLink) => {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      mobileNavLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to clicked link
      clickedLink.classList.add('active');
      
      // Find corresponding link in other navigation and activate it
      const linkHref = clickedLink.getAttribute('href');
      if (clickedLink.classList.contains('nav-link')) {
        // If desktop link was clicked, find mobile link
        const correspondingMobileLink = document.querySelector(`.mobile-nav-link[href="${linkHref}"]`);
        if (correspondingMobileLink) {
          correspondingMobileLink.classList.add('active');
        }
      } else {
        // If mobile link was clicked, find desktop link
        const correspondingDesktopLink = document.querySelector(`.nav-link[href="${linkHref}"]`);
        if (correspondingDesktopLink) {
          correspondingDesktopLink.classList.add('active');
        }
      }
    };

    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', toggleMenu);
    
    // Close mobile menu when clicking a link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        setIsMenuOpen(false);
        updateActiveLink(this);
      });
    });
    
    // Update active link for desktop navigation
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        updateActiveLink(this);
      });
    });
    
    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (!hamburgerMenu.contains(event.target) && !mobileNav.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup
    return () => {
      if (hamburgerMenu) {
        hamburgerMenu.removeEventListener('click', toggleMenu);
      }
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Update DOM based on menu state
  useEffect(() => {
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const bars = document.querySelectorAll('.hamburger-menu .bar');
    
    if (mobileNav && hamburgerMenu) {
      if (isMenuOpen) {
        mobileNav.classList.add('active');
        hamburgerMenu.classList.add('active');
        if (bars.length === 3) {
          bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
          bars[1].style.opacity = '0';
          bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        }
      } else {
        mobileNav.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        if (bars.length === 3) {
          bars[0].style.transform = 'none';
          bars[1].style.opacity = '1';
          bars[2].style.transform = 'none';
        }
      }
    }
  }, [isMenuOpen]);

  return { isMenuOpen };
};