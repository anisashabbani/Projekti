// Register Form Validation - Plain JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            // Get form values
            const name = document.getElementById('registerName').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const phone = document.getElementById('registerPhone').value.trim();
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            let isValid = true;
            
            // Validate name
            if (name === '') {
                showError('registerNameError', 'Emri dhe mbiemri është i detyrueshëm');
                isValid = false;
            } else if (name.length < 3) {
                showError('registerNameError', 'Emri duhet të ketë të paktën 3 karaktere');
                isValid = false;
            } else if (!/^[a-zA-ZëËçÇ\s]+$/.test(name)) {
                showError('registerNameError', 'Emri duhet të përmbajë vetëm shkronja');
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                showError('registerEmailError', 'Email është i detyrueshëm');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('registerEmailError', 'Ju lutem shkruani një email të vlefshëm');
                isValid = false;
            }
            
            // Validate phone (optional but if provided, should be valid)
            if (phone !== '' && !isValidPhone(phone)) {
                showError('registerPhoneError', 'Ju lutem shkruani një numër telefoni të vlefshëm');
                isValid = false;
            }
            
            // Validate password
            if (password === '') {
                showError('registerPasswordError', 'Fjalëkalimi është i detyrueshëm');
                isValid = false;
            } else if (password.length < 8) {
                showError('registerPasswordError', 'Fjalëkalimi duhet të ketë të paktën 8 karaktere');
                isValid = false;
            } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
                showError('registerPasswordError', 'Fjalëkalimi duhet të përmbajë të paktën një shkronjë të vogël, një të madhe dhe një numër');
                isValid = false;
            }
            
            // Validate confirm password
            if (confirmPassword === '') {
                showError('confirmPasswordError', 'Ju lutem konfirmoni fjalëkalimin');
                isValid = false;
            } else if (password !== confirmPassword) {
                showError('confirmPasswordError', 'Fjalëkalimet nuk përputhen');
                isValid = false;
            }
            
            // Validate terms agreement
            if (!agreeTerms) {
                showError('agreeTermsError', 'Ju duhet të pranoni kushtet dhe rregullat');
                isValid = false;
            }
            
            // If form is valid, submit it
            if (isValid) {
                alert('Regjistrimi u krye me sukses! (Kjo është një demonstrim - nuk ka backend)');
                registerForm.reset();
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

