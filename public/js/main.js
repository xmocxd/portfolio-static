// Simple Base Theme - Basic JavaScript

// Basic functionality for the simple base theme
document.addEventListener('DOMContentLoaded', function() {
    // Add any basic JavaScript functionality here
    console.log('Simple Base Theme loaded');
    
    // Example: Add smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
