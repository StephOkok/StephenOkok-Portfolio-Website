// Mobile menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Close mobile menu when clicking outside
window.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking a link
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// Add active state to navigation based on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Text animation effect
const textAnimate = document.querySelector('.text-animate h3');

window.addEventListener('scroll', () => {
    const rect = textAnimate.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        textAnimate.style.color = 'var(--main-color)';
        textAnimate.style.webkitTextStroke = '0px';
    }
});

// Social media links hover effects
const socialLinks = document.querySelectorAll('.home-sci a');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

// Add animation to the circle spin element
const circleSpin = document.querySelector('.circle-spin');

window.addEventListener('load', () => {
    circleSpin.style.animation = 'spin 3s linear infinite';
});

// Add cool polygon effects
const polygonShape = document.querySelector('.polygon-shape');
const polygonContainer = document.querySelector('.polygon-container');

// Add mouse move effect
polygonContainer.addEventListener('mousemove', (e) => {
    const rect = polygonContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    polygonShape.style.transform = `rotate3d(${x/100}, ${y/100}, 0, 5deg)`;
});

// Reset on mouse leave
polygonContainer.addEventListener('mouseleave', () => {
    polygonShape.style.transform = 'rotate3d(0, 0, 0, 0)';
});

// Add click animation
polygonShape.addEventListener('click', () => {
    polygonShape.style.transform = 'rotate3d(1, 1, 0, 20deg) scale(1.1)';
    
    setTimeout(() => {
        polygonShape.style.transform = 'rotate3d(1, 1, 0, 10deg) scale(1.05)';
    }, 300);
});

// Add random rotation animation
function randomRotate() {
    const angle = Math.random() * 360;
    polygonShape.style.transform = `rotate3d(1, 1, 0, ${angle}deg) scale(1.05)`;
    
    setTimeout(() => {
        polygonShape.style.transform = 'rotate3d(1, 1, 0, 10deg) scale(1.05)';
    }, 300);
}

// Add random rotation every few seconds
setInterval(randomRotate, 5000);

// About section animations
const statCards = document.querySelectorAll('.stat-card');
const aboutDetails = document.querySelectorAll('.detail-item');
const featureItems = document.querySelectorAll('.feature-item');

// Add animation classes when elements are in viewport
function checkInView() {
    statCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.classList.add('animate');
            // Start counter animation when stats are in view
            const number = card.querySelector('h4');
            const target = parseInt(number.textContent);
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 16ms per frame
            
            let current = 0;
            
            function increment() {
                current += step;
                if (current < target) {
                    number.textContent = Math.floor(current);
                    requestAnimationFrame(increment);
                } else {
                    number.textContent = target;
                }
            }
            
            increment();
        }
    });

    aboutDetails.forEach(detail => {
        const rect = detail.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            detail.classList.add('animate');
        }
    });

    featureItems.forEach(feature => {
        const rect = feature.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            feature.classList.add('animate');
        }
    });
}

// Check viewport on scroll and load
window.addEventListener('scroll', checkInView);
window.addEventListener('load', checkInView);
