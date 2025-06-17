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

// Counter animation for stats
function animateStats() {
    statCards.forEach(card => {
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
    });
}

// Add scroll event listener
window.addEventListener('scroll', checkInView);

// Initial check
checkInView();

// Animate stats when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

statCards.forEach(card => observer.observe(card));

// Add hover effects to feature items
featureItems.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        const icon = feature.querySelector('i');
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        icon.style.transition = 'all 0.3s ease';
    });

    feature.addEventListener('mouseleave', () => {
        const icon = feature.querySelector('i');
        icon.style.transform = 'scale(1) rotate(0)';
    });
});
