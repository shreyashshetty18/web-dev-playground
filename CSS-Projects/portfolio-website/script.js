// =================================================================
// Navigation Bar Functionality
// =================================================================

// Get navigation elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
// --- THEME SWITCHER ---
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark-mode') {
            body.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            themeToggle.checked = false;
        }
    };

    // Event listener for the toggle switch
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Apply the theme when the page loads
    applySavedTheme();
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// --- THEME SWITCHER ---
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            html.setAttribute('data-color-scheme', 'dark');
            themeToggle.checked = true;
        } else {
            html.setAttribute('data-color-scheme', 'light');
            themeToggle.checked = false;
        }
    };

    // Event listener for the toggle switch
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            html.setAttribute('data-color-scheme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.setAttribute('data-color-scheme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Apply the theme when the page loads
    applySavedTheme();
});

// =================================================================
// Projects Slider Functionality
// =================================================================

const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderDots = document.getElementById('sliderDots');
const projectCards = document.querySelectorAll('.project-card');

let currentSlide = 0;
let slidesToShow = 3;
const totalSlides = projectCards.length;

// Update slides to show based on screen size
function updateSlidesToShow() {
    if (window.innerWidth <= 768) {
        slidesToShow = 1;
    } else if (window.innerWidth <= 968) {
        slidesToShow = 2;
    } else {
        slidesToShow = 3;
    }
    updateSlider();
    createDots();
}

// Create slider dots
function createDots() {
    sliderDots.innerHTML = '';
    const dotsCount = Math.ceil(totalSlides / slidesToShow);
    
    for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            currentSlide = i;
            updateSlider();
        });
        
        sliderDots.appendChild(dot);
    }
}

// Update slider position
function updateSlider() {
    const maxSlide = Math.ceil(totalSlides / slidesToShow) - 1;
    currentSlide = Math.max(0, Math.min(currentSlide, maxSlide));
    
    const offset = currentSlide * -100;
    sliderTrack.style.transform = `translateX(${offset}%)`;
    
    // Update dots
    const dots = sliderDots.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Next slide
function nextSlide() {
    const maxSlide = Math.ceil(totalSlides / slidesToShow) - 1;
    if (currentSlide < maxSlide) {
        currentSlide++;
        updateSlider();
    }
}

// Previous slide
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
}

// Event listeners for slider buttons
if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
}

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

if (sliderTrack) {
    sliderTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }
}

// Auto-play slider (optional - commented out by default)
/*
let autoplayInterval;

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        const maxSlide = Math.ceil(totalSlides / slidesToShow) - 1;
        if (currentSlide < maxSlide) {
            nextSlide();
        } else {
            currentSlide = 0;
            updateSlider();
        }
    }, 5000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Start autoplay
startAutoplay();

// Pause autoplay on hover
if (sliderTrack) {
    sliderTrack.addEventListener('mouseenter', stopAutoplay);
    sliderTrack.addEventListener('mouseleave', startAutoplay);
}
*/

// Initialize slider
window.addEventListener('load', () => {
    updateSlidesToShow();
});

window.addEventListener('resize', () => {
    updateSlidesToShow();
});

// =================================================================
// Scroll Animations
// =================================================================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
const animatedElements = document.querySelectorAll('[data-animate]');
animatedElements.forEach(element => {
    observer.observe(element);
});

// =================================================================
// Back to Top Button
// =================================================================

const backToTopBtn = document.getElementById('backToTop');

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Scroll to top when clicked
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =================================================================
// CTA Button Smooth Scroll
// =================================================================

const ctaButton = document.querySelector('.cta-button');

if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = ctaButton.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// =================================================================
// Loading Animation (Optional)
// =================================================================

// Add a fade-in effect to the entire page on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// =================================================================
// Performance Optimization - Debounce Function
// =================================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll and resize handlers
const optimizedScroll = debounce(() => {
    // Any additional scroll handling can go here
}, 50);

const optimizedResize = debounce(() => {
    updateSlidesToShow();
}, 200);

window.addEventListener('scroll', optimizedScroll);
window.addEventListener('resize', optimizedResize);

// =================================================================
// Console Message (Optional)
// =================================================================

console.log('%c Portfolio Website ', 'background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Customize this template with your own content! ', 'color: #6366f1; font-size: 14px;');

// =================================================================
// Keyboard Navigation Accessibility
// =================================================================

// Allow keyboard navigation for project cards
const focusableElements = document.querySelectorAll('a, button, input, textarea, select');

focusableElements.forEach(element => {
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (element.tagName === 'A') {
                element.click();
            }
        }
    });
});

// =================================================================
// Additional Utility Functions
// =================================================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercentage() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (scrollTop / scrollHeight) * 100;
}

// Log scroll percentage (for debugging)
window.addEventListener('scroll', debounce(() => {
    const percentage = getScrollPercentage();
    // console.log(`Scroll: ${percentage.toFixed(2)}%`);
}, 100));