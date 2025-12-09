// Login Form Validation - Plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Get form values
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            
            let isValid = true;
            
            // Validate email
            if (email === '') {
                showError('loginEmailError', 'Email është i detyrueshëm');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('loginEmailError', 'Ju lutem shkruani një email të vlefshëm');
                isValid = false;
            }
            
            // Validate password
            if (password === '') {
                showError('loginPasswordError', 'Fjalëkalimi është i detyrueshëm');
                isValid = false;
            } else if (password.length < 6) {
                showError('loginPasswordError', 'Fjalëkalimi duhet të ketë të paktën 6 karaktere');
                isValid = false;
            }
            
            // If form is valid, submit it
            if (isValid) {
                alert('Kyçja u krye me sukses! (Kjo është një demonstrim - nuk ka backend)');
                loginForm.reset();
            }
        });
    }
});

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

