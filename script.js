// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
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
    });
});

// Expandable sections
const expandSkillsBtn = document.getElementById('expand-skills');
const skillsContent = document.getElementById('skills-content');
const expandTalksBtn = document.getElementById('expand-talks');
const talksContent = document.getElementById('talks-content');

if (expandSkillsBtn && skillsContent) {
    expandSkillsBtn.addEventListener('click', () => {
        skillsContent.classList.toggle('expanded');
        expandSkillsBtn.classList.toggle('expanded');
        const expandText = expandSkillsBtn.querySelector('.expand-text');
        if (skillsContent.classList.contains('expanded')) {
            expandText.textContent = 'Collapse skills';
        } else {
            expandText.textContent = 'Expand skills';
        }
    });
}

if (expandTalksBtn && talksContent) {
    expandTalksBtn.addEventListener('click', () => {
        talksContent.classList.toggle('expanded');
        expandTalksBtn.classList.toggle('expanded');
        const expandText = expandTalksBtn.querySelector('.expand-text');
        if (talksContent.classList.contains('expanded')) {
            expandText.textContent = 'Collapse list of talks';
        } else {
            expandText.textContent = 'Expand list of talks';
        }
    });
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    }
    
    lastScroll = currentScroll;
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Set initial state for hero section (no fade-in)
const hero = document.querySelector('.hero');
if (hero) {
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
}

