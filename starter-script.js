// This is a JavaScript comment

// Wait for page to load
window.addEventListener('load', function() {
    console.log('Page loaded!');
    
    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Example: Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop form from submitting
            
            // Get form values
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            
            // Show alert
            alert('Thank you, ' + name + '! We received your message.');
            
            // Reset form
            form.reset();
        });
    }
    
    // Example: Change header color on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#e0e0e0';
        } else {
            header.style.backgroundColor = '#f4f4f4';
        }
    });
});

// Try adding your own JavaScript here!
// Here are some ideas:
// - Change text when button is clicked
// - Show/hide elements
// - Add animations
// - Validate form inputs
// - Create a modal/popup

