import { useEffect } from 'react';

export const useFormValidation = () => {
  useEffect(() => {
    const reservationForm = document.getElementById('reservation-form');
    const formMessage = document.getElementById('form-message');
    
    if (!reservationForm) return;

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const showFormMessage = (message, type) => {
      if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };

    const handleSubmit = function(e) {
      e.preventDefault();
      
      // Simple form validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const guests = document.getElementById('guests').value;
      
      // Validation checks
      if (!name || !email || !phone || !date || !time || !guests) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      // Simulate form submission
      showFormMessage('Processing your reservation...', 'success');
      
      // In a real application, you would send data to a server here
      setTimeout(() => {
        showFormMessage('Thank you! Your reservation has been received. We will confirm shortly via email.', 'success');
        
        // Reset form
        reservationForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
          if (formMessage) {
            formMessage.style.display = 'none';
          }
        }, 5000);
      }, 1500);
    };

    reservationForm.addEventListener('submit', handleSubmit);
    
    // Form input animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
      // Add focus effect
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          this.parentElement.classList.remove('focused');
        }
      });
    });

    // Cleanup
    return () => {
      if (reservationForm) {
        reservationForm.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);
};