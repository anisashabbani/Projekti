// Contact Form Validation - Plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                showError('nameError', 'Emri dhe mbiemri është i detyrueshëm');
                isValid = false;
            } else if (name.length < 3) {
                showError('nameError', 'Emri duhet të ketë të paktën 3 karaktere');
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                showError('emailError', 'Email është i detyrueshëm');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Ju lutem shkruani një email të vlefshëm');
                isValid = false;
            }
            
            // Validate phone (optional but if provided, should be valid)
            if (phone !== '' && !isValidPhone(phone)) {
                showError('phoneError', 'Ju lutem shkruani një numër telefoni të vlefshëm');
                isValid = false;
            }
            
            // Validate subject
            if (subject === '') {
                showError('subjectError', 'Subjekti është i detyrueshëm');
                isValid = false;
            } else if (subject.length < 5) {
                showError('subjectError', 'Subjekti duhet të ketë të paktën 5 karaktere');
                isValid = false;
            }
            
            // Validate message
            if (message === '') {
                showError('messageError', 'Mesazhi është i detyrueshëm');
                isValid = false;
            } else if (message.length < 10) {
                showError('messageError', 'Mesazhi duhet të ketë të paktën 10 karaktere');
                isValid = false;
            }
            
            // If form is valid, submit it
            if (isValid) {
                alert('Mesazhi u dërgua me sukses! Ne do t\'ju kontaktojmë së shpejti.');
                contactForm.reset();
            }
        });
    }
});

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate phone
function isValidPhone(phone) {
    // Accepts Albanian phone formats: +355XXXXXXXXX or 0XXXXXXXXX
    const phoneRegex = /^(\+355|0)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Helper function to show error
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Helper function to clear all errors
function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

