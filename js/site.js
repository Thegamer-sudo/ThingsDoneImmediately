// Silk Smooth Loading Animation - ONLY on cold starts (2 seconds)
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (!loadingScreen) return; // Exit if no loading screen found
    
    console.log('Loading screen detected - checking navigation type...');
    
    // Method 1: Use Navigation Timing API
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
        const navigation = navEntries[0];
        console.log('Navigation type:', navigation.type);
        
        // Only show for 'navigate' (cold starts), not for 'reload', 'back_forward'
        if (navigation.type === 'navigate') {
            showLoadingAnimation(loadingScreen);
        } else {
            hideLoadingImmediately(loadingScreen);
        }
    } 
    // Method 2: Fallback - check referrer
    else {
        const referrer = document.referrer;
        const isExternal = !referrer || !referrer.includes(window.location.hostname);
        console.log('Referrer:', referrer, 'Is external:', isExternal);
        
        if (isExternal) {
            showLoadingAnimation(loadingScreen);
        } else {
            hideLoadingImmediately(loadingScreen);
        }
    }
});

function showLoadingAnimation(loadingScreen) {
    console.log('Showing loading animation (cold start)');
    setTimeout(function() {
        loadingScreen.classList.add('fade-out');
        console.log('Starting fade out');
        
        setTimeout(function() {
            loadingScreen.remove();
            console.log('Loading screen removed');
        }, 1000);
    }, 2000); // 2 seconds only
}

function hideLoadingImmediately(loadingScreen) {
    console.log('Hiding loading immediately (internal navigation)');
    loadingScreen.remove();
}

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath && currentPath.includes(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        }
    });
    
    // Contact form handling
    const contactForm = document.getElementById('projectContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                company: document.getElementById('company').value,
                service: document.getElementById('service').value,
                budget: document.getElementById('budget').value,
                timeline: document.getElementById('timeline').value,
                message: document.getElementById('message').value
            };
            
            // Create WhatsApp message
            const whatsappMessage = `New Project Inquiry from TDI Website:
            
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Service: ${formData.service}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Project Details:
${formData.message}

---
Sent via thingsdoneimmediately.com`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Redirect to WhatsApp
            window.open(`https://wa.me/27763621131?text=${encodedMessage}`, '_blank');
            
            // Show success message
            alert('Thank you! Redirecting to WhatsApp to send your project details...');
        });
    }
});

// Fix external links for social media
document.addEventListener('DOMContentLoaded', function() {
    // Fix social media links to prevent popup blocking
    const socialLinks = document.querySelectorAll('a[href*="instagram.com"], a[href*="x.com"], a[href*="facebook.com"]');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow the default behavior for external links
            // This prevents VS Code/development environment issues
            return true;
        });
    });
});

// Simple form validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('projectContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const requiredFields = contactForm.querySelectorAll('[required]');
            let valid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.style.borderColor = '#dc3545';
                } else {
                    field.style.borderColor = '';
                }
            });
            
            if (!valid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    }
});

// Mobile menu enhancement
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

<script>
    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
</script>

// Add this to your existing script
// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links (if you add any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
